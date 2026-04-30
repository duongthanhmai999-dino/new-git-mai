import fs from "node:fs/promises";
import path from "node:path";

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} = process.env;

function parseCsv(s) {
  if (!s) return [];
  return s
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function getArg(name, fallback) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return fallback;
  const v = process.argv[idx + 1];
  if (!v) return fallback;
  return v;
}

function ensureEnv(name, val) {
  if (!val) {
    throw new Error(
      `Missing env var ${name}. Set it before running, e.g. export ${name}=...`
    );
  }
}

async function mkdirp(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeJson(filePath, obj) {
  await mkdirp(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(obj, null, 2), "utf8");
}

async function fetchSpotifyJson(url, { token }) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Spotify error ${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

async function getAccessToken() {
  ensureEnv("SPOTIFY_CLIENT_ID", SPOTIFY_CLIENT_ID);
  ensureEnv("SPOTIFY_CLIENT_SECRET", SPOTIFY_CLIENT_SECRET);

  const form = new URLSearchParams();
  form.set("grant_type", "client_credentials");
  form.set("client_id", SPOTIFY_CLIENT_ID);
  form.set("client_secret", SPOTIFY_CLIENT_SECRET);

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Token error ${res.status} ${res.statusText}: ${text}`);
  }
  return (await res.json()).access_token;
}

async function searchArtistsByGenres({ token, genres, artistCount, market }) {
  // Spotify search uses query syntax like: genre:"pop"
  const collected = new Map(); // id -> artist item (from search)

  let round = 0;
  while (collected.size < artistCount && round < 50) {
    round += 1;

    for (const genre of genres) {
      const query = `genre:"${genre}"`;
      const url =
        `https://api.spotify.com/v1/search` +
        `?q=${encodeURIComponent(query)}` +
        `&type=artist&limit=10&market=${encodeURIComponent(market)}`;

      let data;
      try {
        data = await fetchSpotifyJson(url, { token });
      } catch (e) {
        console.warn(`searchArtists failed for ${genre}: ${e.message}`);
        continue;
      }

      const items = data?.artists?.items ?? [];
      for (const it of items) {
        if (collected.size >= artistCount) break;
        if (!it?.id) continue;
        if (!collected.has(it.id)) collected.set(it.id, it);
      }

      if (collected.size >= artistCount) break;
    }
  }

  return [...collected.values()].slice(0, artistCount);
}

async function getArtistAlbums({ token, artistId, albumsPerArtist, market }) {
  const url =
    `https://api.spotify.com/v1/artists/${artistId}/albums` +
    `?include_groups=album&limit=10&market=${encodeURIComponent(market)}`;

  const data = await fetchSpotifyJson(url, { token });
  const items = data?.items ?? [];

  // Lấy trực tiếp 2 album đầu tiên trả về.
  // Nếu muốn chọn "phổ biến nhất", bạn có thể mở rộng: fetch từng album rồi sort theo popularity.
  return items.slice(0, albumsPerArtist).map((a) => a.id).filter(Boolean);
}

async function run() {
  const artistCount = Number(getArg("artistCount", 30));
  const albumsPerArtist = Number(getArg("albumsPerArtist", 2));
  const tracksPerAlbum = Number(getArg("tracksPerAlbum", 20));
  const market = getArg("market", "VN");
  const outDir = getArg("outDir", "data/spotify/raw");
  const runId = getArg("runId", new Date().toISOString().replace(/[:.]/g, "-"));

  const genres = parseCsv(getArg("genres", "pop,hip-hop,rock"));
  if (!genres.length) throw new Error("Provide --genres with at least 1 genre");

  const token = await getAccessToken();

  const base = path.join(process.cwd(), outDir, runId);
  await mkdirp(base);

  const config = {
    artistCount,
    albumsPerArtist,
    tracksPerAlbum,
    market,
    genres,
    runId,
    generatedAt: new Date().toISOString(),
  };
  await writeJson(path.join(base, "config.json"), config);

  console.log(`Fetching ${artistCount} artists from genres: ${genres.join(", ")}`);
  const artists = await searchArtistsByGenres({
    token,
    genres,
    artistCount,
    market,
  });

  console.log(`Collected artists: ${artists.length}`);
  await writeJson(
    path.join(base, "artists.json"),
    artists.map((a) => ({
      id: a.id,
      name: a.name,
      type: a.type,
    }))
  );

  const manifest = {
    artists: [],
    counts: {
      albums: 0,
      tracks: 0,
    },
  };

  // Sequential để giảm nguy cơ bị rate limit.
  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    console.log(`[${i + 1}/${artists.length}] Artist: ${artist.name} (${artist.id})`);

    // Thư mục artist
    const artistDir = path.join(base, "artists", artist.id);

    const artistJsonUrl = `https://api.spotify.com/v1/artists/${artist.id}?market=${encodeURIComponent(
      market
    )}`;
    const artistFull = await fetchSpotifyJson(artistJsonUrl, { token });
    await writeJson(path.join(artistDir, "artist.json"), artistFull);

    // Chọn album
    const albumIds = await getArtistAlbums({
      token,
      artistId: artist.id,
      albumsPerArtist,
      market,
    });

    const artistEntry = {
      id: artist.id,
      name: artist.name,
      albums: [],
    };

    for (let j = 0; j < albumIds.length; j++) {
      const albumId = albumIds[j];
      console.log(`  - album ${j + 1}/${albumsPerArtist}: ${albumId}`);

      const albumDir = path.join(artistDir, "albums", albumId);

      const albumUrl = `https://api.spotify.com/v1/albums/${albumId}?market=${encodeURIComponent(
        market
      )}`;
      const albumJson = await fetchSpotifyJson(albumUrl, { token });
      await writeJson(path.join(albumDir, "album.json"), albumJson);

      const tracksUrl =
        `https://api.spotify.com/v1/albums/${albumId}/tracks` +
        `?limit=${encodeURIComponent(tracksPerAlbum)}&market=${encodeURIComponent(
          market
        )}`;
      const tracksJson = await fetchSpotifyJson(tracksUrl, { token });
      await writeJson(path.join(albumDir, "tracks.json"), tracksJson);

      manifest.counts.albums += 1;
      const tracksCount = tracksJson?.items?.length ?? 0;
      manifest.counts.tracks += tracksCount;

      artistEntry.albums.push({
        id: albumId,
        name: albumJson?.name,
        release_date: albumJson?.release_date,
      });
    }

    manifest.artists.push(artistEntry);
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

