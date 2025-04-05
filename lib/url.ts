import { nanoid } from "nanoid";
import { db } from "./db";

export async function createShortUrl(originalUrl: string): Promise<string> {
  const id = nanoid(6);

  await db.execute({
    sql: "INSERT INTO urls (id, original_url, created_at) VALUES (?, ?, ?)",
    args: [id, originalUrl, Date.now()],
  });

  return id;
}

export async function getOriginalUrl(id: string): Promise<string | null> {
  const result = await db.execute({
    sql: "SELECT original_url FROM urls WHERE id = ?",
    args: [id],
  });

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0].original_url as string;
}
