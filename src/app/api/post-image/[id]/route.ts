import { eq } from "drizzle-orm";
import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/db";
import { postImages } from "@/db/schema";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

/**
 * Streams an image uploaded for a journal post (uploadPostImage in src/actions/posts.ts).
 * Public like avatars and banners: posts are public pages. An image's bytes never
 * change after upload, so every response is safe to cache forever.
 */
export async function GET(request: NextRequest, ctx: RouteContext<"/api/post-image/[id]">) {
  const { id } = await ctx.params;
  if (!UUID.test(id)) return new NextResponse(null, { status: 404 });

  const etag = `"${id}"`;
  if (request.headers.get("if-none-match") === etag) {
    return new NextResponse(null, { status: 304, headers: { ETag: etag } });
  }

  const [row] = await db
    .select({ data: postImages.data, contentType: postImages.contentType })
    .from(postImages)
    .where(eq(postImages.id, id))
    .limit(1);
  if (!row) return new NextResponse(null, { status: 404 });

  const bytes = Buffer.from(row.data);
  return new NextResponse(bytes, {
    headers: {
      "Content-Type": row.contentType,
      "Content-Length": String(bytes.length),
      ETag: etag,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
