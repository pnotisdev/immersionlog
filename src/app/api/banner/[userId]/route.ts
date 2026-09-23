import { eq } from "drizzle-orm";
import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/db";
import { userBanners } from "@/db/schema";

/**
 * Streams an uploaded profile banner. Public for the same reason avatars are (see
 * src/app/api/avatar/[userId]/route.ts, which this mirrors): banners show on public
 * profile pages. The profile always links the `?v=<updatedAt>` form, which is safe to
 * cache forever; a bare URL gets a short revalidating cache instead.
 */
export async function GET(request: NextRequest, ctx: RouteContext<"/api/banner/[userId]">) {
  const { userId } = await ctx.params;
  const [row] = await db.select().from(userBanners).where(eq(userBanners.userId, userId)).limit(1);
  if (!row?.data || !row.contentType) return new NextResponse(null, { status: 404 });

  const etag = `"${row.updatedAt.getTime()}"`;
  if (request.headers.get("if-none-match") === etag) {
    return new NextResponse(null, { status: 304, headers: { ETag: etag } });
  }

  const versioned = request.nextUrl.searchParams.has("v");
  const bytes = Buffer.from(row.data);
  return new NextResponse(bytes, {
    headers: {
      "Content-Type": row.contentType,
      "Content-Length": String(bytes.length),
      ETag: etag,
      "Cache-Control": versioned ? "public, max-age=31536000, immutable" : "public, max-age=300, must-revalidate",
    },
  });
}
