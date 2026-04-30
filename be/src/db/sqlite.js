import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

let db;

export function getDb() {
  if (db) return db;

  const sqliteRelative = process.env.SQLITE_FILE || "db/app.sqlite";
  const sqlitePath = path.resolve(process.cwd(), sqliteRelative);

  // better-sqlite3 yêu cầu thư mục tồn tại
  fs.mkdirSync(path.dirname(sqlitePath), { recursive: true });

  db = new Database(sqlitePath);
  db.pragma("journal_mode = WAL");
  return db;
}

