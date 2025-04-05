import { NextRequest, NextResponse } from "next/server";
import { createShortUrl } from "@/lib/url";
import { initializeDatabase } from "@/lib/db";

let initialized = false;

export async function POST(request: NextRequest) {
  try {
    if (!initialized) {
      await initializeDatabase();
      initialized = true;
    }

    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
      new URL(url);
    } catch (error) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const id = await createShortUrl(url);

    return NextResponse.json({
      id,
      shortUrl: `links.subtrant.icu/${id}`,
    });
  } catch (error) {
    console.error("Error shortening URL:", error);
    return NextResponse.json(
      { error: "Failed to shorten URL" },
      { status: 500 }
    );
  }
}
