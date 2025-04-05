import { createClient } from "@libsql/client";

import "dotenv/config";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:./local.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function initializeDatabase() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS urls (
      id TEXT PRIMARY KEY,
      original_url TEXT NOT NULL,
      created_at INTEGER NOT NULL
    )
  `);
}
