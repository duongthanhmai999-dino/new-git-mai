import fs from "node:fs/promises";
import path from "node:path";

function getArg(name, fallback) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return fallback;
  const v = process.argv[idx + 1];
  if (v === undefined) return fallback;
  return v;
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function writeJson(filePath, obj) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(obj, null, 2), "utf8");
}

function takeFirst(arr, n) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, n);
}

function pickTrackLite(t, albumJson) {
  if (!t) return null;
  const cover =
    albumJson?.cover_big ||
    albumJson?.cover_medium ||
    albumJson?.cover_small ||
    albumJson?.cover;
  return {
    id: t.id,
    title: t.title,
    track_number: t.track_position,
    duration: t.duration,
    explicit_lyrics: t.explicit_lyrics,
    preview: t.preview,
    image: cover,
    artist: t.artist ? { id: t.artist.id, name: t.artist.name } : undefined,
    // Keep minimal artist IDs to support basic search/filter
    artist_ids: Array.isArray(t.artist && t.artist.id) ? t.artist.id : undefined,
  };
}

function pickAlbumLite(a) {
  if (!a) return null;
  return {
    id: a.id,
    title: a.title,
    release_date: a.release_date,
    record_type: a.record_type,
  };
}

function pickArtistLite(a) {
  if (!a) return null;
  return {
    id: a.id,
    name: a.name,
    type: a.type,
  };
}

async function run() {
  const runId = getArg("runId", "deezer-30artists-2albums-20tracks");
  const baseDir = path.join(process.cwd(), "data/deezer/raw", runId);

  const outFile = getArg(
    "outFile",
    "data/deezer/seed_lite_1500.json"
  );

  const artistCount = Number(getArg("artistCount", 10));
  const albumsPerArtist = Number(getArg("albumsPerArtist", 1));
  const tracksPerAlbum = Number(getArg("tracksPerAlbum", 10));

  const manifest = await readJson(path.join(baseDir, "manifest.json"));
  const artistEntries = takeFirst(manifest.artists, artistCount);

  const seed = {
    runId,
    source: "Deezer raw -> lite seed (trimmed)",
    counts: { artists: 0, albums: 0, tracks: 0 },
    artists: [],
  };

  for (const artistEntry of artistEntries) {
    const artistId = String(artistEntry.id);
    const artistDir = path.join(baseDir, "artists", artistId);

    const artistJson = await readJson(path.join(artistDir, "artist.json"));
    const artistLite = pickArtistLite(artistJson);

    const albums = [];
    const albumEntries = takeFirst(artistEntry.albums, albumsPerArtist);

    for (const albumEntry of albumEntries) {
      const albumId = String(albumEntry.id);
      const albumDir = path.join(artistDir, "albums", albumId);

      const albumJson = await readJson(path.join(albumDir, "album.json"));
      const tracksJson = await readJson(path.join(albumDir, "tracks.json"));

      const albumLite = pickAlbumLite(albumJson);
      const tracks = takeFirst(tracksJson?.data ?? [], tracksPerAlbum)
        .map((t) => pickTrackLite(t, albumJson))
        .filter(Boolean);

      albums.push({ album: albumLite, tracks });
      seed.counts.albums += 1;
      seed.counts.tracks += tracks.length;
    }

    seed.artists.push({ artist: artistLite, albums });
    seed.counts.artists += 1;
  }

  await writeJson(path.join(process.cwd(), outFile), seed);
  console.log("Wrote:", outFile);
  console.log("Counts:", seed.counts);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

