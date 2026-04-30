import dotenv from "dotenv";

import app from "./app.js";
import { initDb } from "./db/initDb.js";

dotenv.config();

const port = Number(process.env.PORT || 4000);

const start = async () => {
  initDb();
  app.listen(port, () => {
    console.log(`[be] listening on http://localhost:${port}`);
  });
};

start().catch((err) => {
  console.error("[be] failed to start:", err);
  process.exit(1);
});

