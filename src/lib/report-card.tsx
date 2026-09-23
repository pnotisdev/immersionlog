import "server-only";
import { ImageResponse } from "next/og";
import { dayKey, yearRange } from "./dates";
import { formatDuration, formatNumber } from "./format";
import { quantileStep } from "./heatmap-scale";
import { longestStreak } from "./progression";
import { getGroupTotals } from "./progression-queries";
import { buildHeatmapDays, getDailyTotals, getTopItems } from "./queries";
import { getPublicUser } from "./ranking-queries";
import { getSiteUrl } from "./site";

export const REPORT_CARD_SIZE = { width: 1200, height: 630 };

// The dark theme, as literals: Satori has no CSS variables (see globals.css .dark).
const BG = "#0B0B0F";
const SURFACE = "#121218";
const LINE = "#26262F";
const TEXT = "#EDEDF2";
const MUTED = "#A0A0AE";
const DIM = "#7A7A88";
const ACCENT = "#E0552E";
const READING = "#D95926";
const LISTENING = "#199E70";
const RAMP = ["#1A1A22", "#893A24", "#AE4529", "#D85531", "#E57A5D", "#EBAA98"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CELL = 15;
const GAP = 4;

/**
 * The shareable Immersion Report card: a year's hours, its split and its whole
 * heatmap on one 1200×630 image. Served both as the report's Open Graph image (so a
 * pasted link unfurls with it) and at report/[year]/card.png, which the report page
 * previews and offers as a download.
 *
 * Unauthenticated and private-safe: getPublicUser returns null for a private or unknown
 * profile, and the card then shows only the wordmark — it never reveals whether that
 * username exists (same contract as the profile OG image).
 */
export async function renderReportCard(
  username: string,
  year: string,
  init?: { headers?: Record<string, string> },
): Promise<ImageResponse> {
  const user = /^\d{4}$/.test(year) ? await getPublicUser(username) : null;
  if (!user) return new ImageResponse(<Fallback />, { ...REPORT_CARD_SIZE, ...init });

  const range = yearRange(Number(year), user.timezone);
  const [totals, daily, top] = await Promise.all([
    getGroupTotals(user.id, range.from, range.to),
    getDailyTotals(user.id, range.from, range.to, user.timezone),
    getTopItems(user.id, range.from, range.to, 1),
  ]);
  const days = buildHeatmapDays(daily, range.from, range.to, user.timezone);
  const today = dayKey(new Date(), user.timezone);
  const active = days.filter((d) => d.seconds > 0);
  const sessions = active.reduce((n, d) => n + d.sessions, 0);
  const streak = longestStreak(active.map((d) => d.key));
  const step = quantileStep(days.map((d) => d.seconds));

  // Weeks as columns, Monday first — the same grid as the in-app heatmap.
  const firstDow = (new Date(days[0].key + "T00:00:00Z").getUTCDay() + 6) % 7;
  const cells: ({ key: string; seconds: number } | null)[] = [...Array<null>(firstDow).fill(null), ...days];
  const weeks: (typeof cells)[] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  const monthAt = weeks.map((w) => {
    const first = w.find((c) => c?.key.endsWith("-01"));
    return first ? MONTHS[Number(first.key.slice(5, 7)) - 1] : "";
  });

  const readingPct = totals.total ? Math.round((totals.reading / totals.total) * 100) : 0;
  const listeningPct = totals.total ? Math.round((totals.listening / totals.total) * 100) : 0;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: BG, padding: "52px 64px", color: TEXT }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Wordmark />
          <div style={{ display: "flex", fontSize: 24, color: ACCENT, fontWeight: 600 }}>{year} Immersion Report</div>
        </div>

        <div style={{ display: "flex", marginTop: 40, alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 560 }}>
            <div style={{ display: "flex", fontSize: 30, color: MUTED }}>{truncate(user.name, 28)}</div>
            <div style={{ display: "flex", alignItems: "baseline", marginTop: 4 }}>
              <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
                {formatDuration(totals.total)}
              </div>
              <div style={{ display: "flex", fontSize: 28, color: DIM, marginLeft: 16 }}>immersed</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: 420 }}>
            <div style={{ display: "flex", height: 10, borderRadius: 5, overflow: "hidden", background: RAMP[0] }}>
              <div style={{ display: "flex", width: `${readingPct}%`, background: READING }} />
              <div style={{ display: "flex", width: `${listeningPct}%`, background: LISTENING }} />
            </div>
            <div style={{ display: "flex", marginTop: 12, fontSize: 22, color: MUTED }}>
              <Dot color={READING} /> Reading {readingPct}%<div style={{ display: "flex", width: 24 }} />
              <Dot color={LISTENING} /> Listening {listeningPct}%
            </div>
            <div style={{ display: "flex", marginTop: 22, gap: 32 }}>
              <Stat value={formatNumber(active.length)} label="active days" />
              <Stat value={`${streak}d`} label="best streak" />
              <Stat value={formatNumber(sessions)} label="sessions" />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            padding: "22px 32px 20px",
            background: SURFACE,
            border: `1px solid ${LINE}`,
            borderRadius: 14,
          }}
        >
          <div style={{ display: "flex", gap: GAP, height: 18, fontSize: 14, color: DIM }}>
            {monthAt.map((m, i) => (
              <div key={i} style={{ display: "flex", width: CELL, overflow: "visible", whiteSpace: "nowrap" }}>
                {m}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: GAP }}>
            {weeks.map((week, c) => (
              <div key={c} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
                {Array.from({ length: 7 }, (_, r) => {
                  const day = week[r];
                  const future = day ? day.key > today : false;
                  return (
                    <div
                      key={r}
                      style={{
                        display: "flex",
                        width: CELL,
                        height: CELL,
                        borderRadius: 3,
                        background: !day ? "transparent" : future ? "#15151B" : RAMP[step(day.seconds)],
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontSize: 16, color: DIM }}>
            <div style={{ display: "flex" }}>
              {top[0] ? `Most time on ${truncate(top[0].title, 48)} · ${formatDuration(top[0].seconds)}` : `@${user.username}`}
            </div>
            <div style={{ display: "flex" }}>
              {new URL(getSiteUrl()).host}/u/{user.username}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...REPORT_CARD_SIZE, ...init },
  );
}

function Wordmark() {
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 3, marginRight: 12 }}>
        {[0, 1, 2].map((r) => (
          <div key={r} style={{ display: "flex", gap: 3 }}>
            {[0, 1, 2].map((c) => (
              <div key={c} style={{ display: "flex", width: 6, height: 6, borderRadius: 1, background: RAMP[Math.max(1, 5 - r - c)] }} />
            ))}
          </div>
        ))}
      </div>
      immersion<span style={{ color: DIM }}>log</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>{value}</div>
      <div style={{ display: "flex", fontSize: 18, color: DIM }}>{label}</div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <div style={{ display: "flex", width: 10, height: 10, borderRadius: 5, background: color, marginRight: 8, marginTop: 9 }} />;
}

function Fallback() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: BG, color: TEXT }}>
      <div style={{ display: "flex", transform: "scale(2.2)" }}>
        <Wordmark />
      </div>
    </div>
  );
}

function truncate(s: string, max: number) {
  return s.length <= max ? s : `${s.slice(0, max - 1).trimEnd()}…`;
}
