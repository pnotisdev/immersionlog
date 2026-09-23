import type { NextRequest } from "next/server";
import { renderReportCard } from "@/lib/report-card";
import { USERNAME_RE } from "@/lib/username";

/**
 * GET /u/[username]/report/[year]/card.png — the Immersion Report as a PNG, at a
 * stable URL the report page can preview and link to. `?download=1` adds a
 * Content-Disposition so the browser saves it with a sensible filename instead of
 * opening it (the `download` attribute alone is ignored by some mobile browsers).
 *
 * Public by design, like the OG image: private or unknown profiles get the generic card.
 */
export async function GET(request: NextRequest, ctx: RouteContext<"/u/[username]/report/[year]/card.png">) {
  const { username, year } = await ctx.params;
  if (!USERNAME_RE.test(username) || !/^\d{4}$/.test(year)) return new Response("Not found", { status: 404 });

  const headers: Record<string, string> = {
    // Rendering is CPU work; a few minutes of staleness on a year's totals is fine.
    "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
  };
  if (request.nextUrl.searchParams.get("download")) {
    headers["Content-Disposition"] = `attachment; filename="immersionlog-${username}-${year}.png"`;
  }
  return renderReportCard(username, year, { headers });
}
