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
  const txt = await fs.readFile(filePath, "utf8");
  return JSON.parse(txt);
}

async function writeJson(filePath, obj) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(obj, null, 2), "utf8");
}

async function run() {
  const runId = getArg(
    "runId",
    "deezer-30artists-2albums-20tracks"
  );
  const baseDir = path.join(process.cwd(), "data/deezer/raw", runId);
  const outFile = path.join(process.cwd(), getArg("outFile", "data/deezer/seed.json"));

  const manifest = await readJson(path.join(baseDir, "manifest.json"));
  const config = await readJson(path.join(baseDir, "config.json")).catch(() => ({}));
  const artistsIndex = new Set(manifest.artists.map((a) => a.id));

  const seed = {
    runId,
    sourceConfig: config,
    counts: manifest.counts,
    artists: [],
  };

  for (const artistEntry of manifest.artists) {
    if (!artistsIndex.has(artistEntry.id)) continue;

    const artistId = String(artistEntry.id);
    const artistDir = path.join(baseDir, "artists", artistId);

    const artistJson = await readJson(path.join(artistDir, "artist.json"));

    const albums = [];
    for (const albumEntry of artistEntry.albums) {
      const albumId = String(albumEntry.id);
      const albumDir = path.join(artistDir, "albums", albumId);

      const albumJson = await readJson(path.join(albumDir, "album.json"));
      const tracksJson = await readJson(path.join(albumDir, "tracks.json"));

      albums.push({
        album: albumJson,
        tracks: tracksJson,
      });
    }

    seed.artists.push({
      artist: artistJson,
      albums,
    });
  }

  await writeJson(outFile, seed);
  console.log("Wrote:", outFile);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

