import { addDays } from "date-fns";
import { dayKey, presetRange } from "@/lib/dates";
import { escapeHtml } from "@/lib/email-layout";
import { formatDuration } from "@/lib/format";
import { quantileStep } from "@/lib/heatmap-scale";
import { getProgression } from "@/lib/progression-queries";
import { getHeatmapActivity, sumDuration } from "@/lib/queries";
import { getPublicUser } from "@/lib/ranking-queries";
import { USERNAME_RE } from "@/lib/username";

/*
 * Embeddable stats card: /u/<username>/card.svg, for GitHub READMEs, forum signatures,
 * blogs and anywhere else that takes an image. Public profiles only. Plain SVG with
 * system fonts (no external requests from inside the image, which GitHub's image proxy
 * and most forums would block anyway). ?theme=light for light backgrounds.
 */

const THEMES = {
  dark: { bg: "#0B0B0F", border: "#26262F", ink: "#EDEDF2", dim: "#8B8B97", empty: "#1C1C24" },
  light: { bg: "#FFFFFF", border: "#E7E5E0", ink: "#181925", dim: "#7B7C87", empty: "#EEECE8" },
};
const RAMP = ["#893A24", "#AE4529", "#D85531", "#E57A5D", "#EBAA98"];
const WEEKS = 26;
const CELL = 11;
const GAP = 3;
const W = 495;
const H = 195;
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function svgResponse(svg: string, status = 200) {
  return new Response(svg, {
    status,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      // Fresh enough for a stats badge; GitHub's camo and CDNs cache on these.
      "Cache-Control": "public, max-age=1800, s-maxage=1800, stale-while-revalidate=86400",
      // An SVG opened directly is a document: no scripts, no outside loads.
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'",
    },
  });
}

function notFoundCard(theme: (typeof THEMES)["dark"]) {
  return svgResponse(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="60" viewBox="0 0 ${W} 60"><rect width="${W}" height="60" rx="8" fill="${theme.bg}" stroke="${theme.border}"/><text x="20" y="36" font-family="${FONT}" font-size="14" fill="${theme.dim}">No public immersionlog profile here.</text></svg>`,
    404,
  );
}

export async function GET(request: Request, ctx: { params: Promise<{ username: string }> }) {
  const { username } = await ctx.params;
  const theme = THEMES[new URL(request.url).searchParams.get("theme") === "light" ? "light" : "dark"];
  if (!USERNAME_RE.test(username)) return notFoundCard(theme);
  const u = await getPublicUser(username);
  if (!u) return notFoundCard(theme);

  const tz = u.timezone;
  const now = new Date();
  const month = presetRange("month", tz, now);
  const [progression, heat, monthSeconds] = await Promise.all([
    getProgression(u.id, tz, now),
    getHeatmapActivity(u.id, tz, now),
    sumDuration(u.id, month.from, month.to),
  ]);

  // Last WEEKS full columns ending with the current week, Sunday-first rows.
  const byDay = new Map(heat.days.map(([k, s]) => [k, s]));
  const todayDate = new Date(`${heat.today}T12:00:00Z`);
  const start = addDays(todayDate, -(todayDate.getUTCDay() + (WEEKS - 1) * 7));
  const cells: { x: number; y: number; seconds: number; future: boolean }[] = [];
  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < 7; d++) {
      const date = addDays(start, w * 7 + d);
      const key = dayKey(date, "UTC");
      cells.push({ x: w, y: d, seconds: byDay.get(key) ?? 0, future: key > heat.today });
    }
  }
  const step = quantileStep(cells.map((c) => c.seconds));

  const gridX = 20;
  const gridY = 88;
  const rects = cells
    .filter((c) => !c.future)
    .map((c) => {
      const s = step(c.seconds);
      return `<rect x="${gridX + c.x * (CELL + GAP)}" y="${gridY + c.y * (CELL + GAP)}" width="${CELL}" height="${CELL}" rx="2" fill="${s === 0 ? theme.empty : RAMP[s - 1]}"/>`;
    })
    .join("");

  const statsX = gridX + WEEKS * (CELL + GAP) + 14;
  const stat = (label: string, value: string, y: number) =>
    `<text x="${statsX}" y="${y}" font-family="${FONT}" font-size="11" fill="${theme.dim}">${escapeHtml(label)}</text>` +
    `<text x="${statsX}" y="${y + 19}" font-family="${FONT}" font-size="17" font-weight="600" fill="${theme.ink}">${escapeHtml(value)}</text>`;

  const name = u.name.length > 28 ? `${u.name.slice(0, 27)}…` : u.name;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeHtml(`${u.name}: ${formatDuration(progression.totals.total)} of Japanese immersion on immersionlog`)}">
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="8" fill="${theme.bg}" stroke="${theme.border}"/>
<text x="20" y="38" font-family="${FONT}" font-size="18" font-weight="650" fill="${theme.ink}">${escapeHtml(name)}</text>
<text x="20" y="60" font-family="${FONT}" font-size="12" fill="${theme.dim}">Japanese immersion · immersionlog.com/u/${escapeHtml(u.username ?? "")}</text>
${rects}
${stat("All time", formatDuration(progression.totals.total), 96)}
${stat("This month", formatDuration(monthSeconds), 138)}
${stat("Streak", `${progression.currentStreak} ${progression.currentStreak === 1 ? "day" : "days"}`, 38)}
</svg>`;
  return svgResponse(svg);
}
