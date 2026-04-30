import fs from "node:fs/promises";
import path from "node:path";

function getArg(name, fallback) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return fallback;
  const v = process.argv[idx + 1];
  if (v === undefined) return fallback;
  return v;
}

function parseCsv(s) {
  if (!s) return [];
  return s
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function mkdirp(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeJson(filePath, obj) {
  await mkdirp(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(obj, null, 2), "utf8");
}

async function fetchJson(url, { retries = 5, baseDelayMs = 800 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      headers: {
        // Be polite; helps some CDNs
        "User-Agent": "vite-project/seed (contact: school-project)",
      },
    });

    if (res.ok) {
      return res.json();
    }

    // Rate limiting
    if (res.status === 429) {
      const retryAfter = res.headers.get("Retry-After");
      const waitMs = retryAfter ? Number(retryAfter) * 1000 : baseDelayMs;
      await sleep(waitMs);
      continue;
    }

    // Retry server errors
    if (res.status >= 500 && attempt < retries) {
      const waitMs = baseDelayMs * Math.pow(2, attempt);
      await sleep(waitMs);
      continue;
    }

    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}: ${text}`);
  }

  throw new Error(`Failed after retries: ${url}`);
}

async function getArtistsFromGenres({ genreIds, artistCount, pageSize }) {
  const collected = new Map(); // id -> artist item
  for (const genreId of genreIds) {
    let index = 0;
    while (collected.size < artistCount) {
      const url =
        `https://api.deezer.com/genre/${encodeURIComponent(genreId)}/artists` +
        `?limit=${encodeURIComponent(pageSize)}&index=${encodeURIComponent(index)}`;
      const data = await fetchJson(url);
      const items = data?.data ?? [];
      for (const it of items) {
        if (collected.size >= artistCount) break;
        if (it?.id && !collected.has(it.id)) collected.set(it.id, it);
      }

      index += pageSize;
      // If no more data, break
      if (!items.length) break;
    }
    if (collected.size >= artistCount) break;
  }
  return [...collected.values()].slice(0, artistCount);
}

async function pickAlbumsForArtist({
  tokenlessGenres,
  artistId,
  albumsPerArtist,
  tracksPerAlbum,
  market,
}) {
  // Deezer doesn't have "market" parameter for these endpoints in public API;
  // keep it in signature for consistency.
  void tokenlessGenres;
  void market;

  // Candidate pool: fetch enough albums to be able to find ones with >= tracksPerAlbum.
  const candidateLimit = Math.max(10, albumsPerArtist * 5);
  const listUrl = `https://api.deezer.com/artist/${artistId}/albums?limit=${candidateLimit}`;
  const list = await fetchJson(listUrl);
  const candidates = (list?.data ?? []).filter((a) => a?.record_type === "album");

  const picked = [];
  for (let i = 0; i < candidates.length && picked.length < albumsPerArtist; i++) {
    const album = candidates[i];
    const albumId = album?.id;
    if (!albumId) continue;

    const tracksUrl = `https://api.deezer.com/album/${albumId}/tracks?limit=${encodeURIComponent(
      tracksPerAlbum
    )}&index=0`;
    const tracksJson = await fetchJson(tracksUrl);
    const tracksLen = tracksJson?.data?.length ?? 0;

    // Accept if we meet target, otherwise keep but warn (so dataset isn't empty).
    if (tracksLen >= tracksPerAlbum || picked.length + (candidates.length - i) >= albumsPerArtist) {
      picked.push({ albumId, tracksJson, tracksLen });
    }
  }

  // If we couldn't reach enough albums, still pick remaining first ones with whatever tracks.
  if (picked.length < albumsPerArtist) {
    for (let i = 0; i < candidates.length && picked.length < albumsPerArtist; i++) {
      const albumId = candidates[i]?.id;
      if (!albumId) continue;
      if (picked.some((p) => p.albumId === albumId)) continue;

      const tracksUrl = `https://api.deezer.com/album/${albumId}/tracks?limit=${encodeURIComponent(
        tracksPerAlbum
      )}&index=0`;
      const tracksJson = await fetchJson(tracksUrl);
      picked.push({ albumId, tracksJson, tracksLen: tracksJson?.data?.length ?? 0 });
    }
  }

  return picked.slice(0, albumsPerArtist);
}

async function run() {
  const artistCount = Number(getArg("artistCount", 30));
  const albumsPerArtist = Number(getArg("albumsPerArtist", 2));
  const tracksPerAlbum = Number(getArg("tracksPerAlbum", 20));
  const outDir = getArg("outDir", "data/deezer/raw");
  const runId = getArg(
    "runId",
    new Date().toISOString().replace(/[:.]/g, "-")
  );

  // Deezer genre IDs (common defaults)
  // Pop=132, Rap/Hip Hop=116, Rock=152
  const genreIds = parseCsv(getArg("genreIds", "132,116,152"));
  const pageSize = Number(getArg("pageSize", 50));

  const base = path.join(process.cwd(), outDir, runId);
  await mkdirp(base);

  const config = {
    artistCount,
    albumsPerArtist,
    tracksPerAlbum,
    genreIds,
    pageSize,
    market: "N/A",
    runId,
    generatedAt: new Date().toISOString(),
    source: "Deezer public API (no auth)",
  };
  await writeJson(path.join(base, "config.json"), config);

  console.log(
    `Fetching ${artistCount} artists from Deezer genres: ${genreIds.join(", ")}`
  );
  const artists = await getArtistsFromGenres({
    genreIds,
    artistCount,
    pageSize,
  });
  await writeJson(
    path.join(base, "artists.json"),
    artists.map((a) => ({ id: a.id, name: a.name, type: a.type }))
  );

  const manifest = { artists: [], counts: { albums: 0, tracks: 0 } };

  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const artistId = artist.id;
    const artistDir = path.join(base, "artists", String(artistId));
    console.log(`[${i + 1}/${artists.length}] ${artist.name} (${artistId})`);

    // Artist full
    const artistJsonUrl = `https://api.deezer.com/artist/${artistId}`;
    const artistFull = await fetchJson(artistJsonUrl);
    await writeJson(path.join(artistDir, "artist.json"), artistFull);

    // Pick albums and fetch track list (we already fetched track list for candidates)
    const picked = await pickAlbumsForArtist({
      tokenlessGenres: genreIds,
      artistId,
      albumsPerArtist,
      tracksPerAlbum,
      market: "N/A",
    });

    const artistEntry = { id: artistId, name: artist.name, albums: [] };

    for (let j = 0; j < picked.length; j++) {
      const { albumId, tracksJson } = picked[j];
      console.log(`  - album ${j + 1}/${albumsPerArtist}: ${albumId}`);

      const albumDir = path.join(artistDir, "albums", String(albumId));
      const albumUrl = `https://api.deezer.com/album/${albumId}`;
      const albumJson = await fetchJson(albumUrl);

      await writeJson(path.join(albumDir, "album.json"), albumJson);
      await writeJson(path.join(albumDir, "tracks.json"), tracksJson);

      manifest.counts.albums += 1;
      const tracksCount = tracksJson?.data?.length ?? 0;
      manifest.counts.tracks += tracksCount;

      artistEntry.albums.push({
        id: albumId,
        name: albumJson?.title,
        release_date: albumJson?.release_date,
        tracksCount,
      });
    }

    manifest.artists.push(artistEntry);
    // Gentle pacing to reduce chance of rate limit
    await sleep(250);
  }

  await writeJson(path.join(base, "manifest.json"), manifest);
  console.log("Done.");
  console.log(`Output: ${base}`);
  console.log(`Albums: ${manifest.counts.albums}, Tracks: ${manifest.counts.tracks}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

