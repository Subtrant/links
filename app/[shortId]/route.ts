import { NextRequest, NextResponse } from "next/server";
import { getOriginalUrl } from "@/lib/url";
import { initializeDatabase } from "@/lib/db";

let initialized = false;

export async function GET(
  request: NextRequest,
  { params }: { params: { shortId: string } }
) {
  try {
    if (!initialized) {
      await initializeDatabase();
      initialized = true;
    }

    const shortId = params.shortId;

    const originalUrl = await getOriginalUrl(shortId);

    if (!originalUrl) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.redirect(originalUrl);
  } catch (error) {
    console.error("Error redirecting:", error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}
