import { formatDuration, pluralize } from "@/lib/format";

export interface HeatmapDay {
  key: string; // YYYY-MM-DD
  seconds: number;
  sessions?: number;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DOW = ["Mon", "", "Wed", "", "Fri", "", ""];
const WEEKDAY = new Intl.DateTimeFormat("en", { weekday: "short", timeZone: "UTC" });

/**
 * Sequential step 1-5 by quantile of the user's *own* non-zero days, not a fixed global
 * scale — otherwise a light user's whole year reads as a single step (redesign.md §3.3).
 */
function quantileStep(days: HeatmapDay[]): (seconds: number) => number {
  const nonZero = days.map((d) => d.seconds).filter((s) => s > 0).sort((a, b) => a - b);
  if (nonZero.length === 0) return () => 0;
  const at = (p: number) => nonZero[Math.min(nonZero.length - 1, Math.floor(p * nonZero.length))];
  const thresholds = [at(0.2), at(0.4), at(0.6), at(0.8)];
  return (seconds: number) => {
    if (seconds <= 0) return 0;
    let s = 1;
    for (const t of thresholds) if (seconds > t) s++;
    return Math.min(5, s);
  };
}

/**
 * GitHub-style calendar heatmap. `days` must be contiguous, oldest first, and the
 * first entry should be a Monday for the columns to line up (the caller pads it).
 */
export function Heatmap({ days }: { days: HeatmapDay[] }) {
  if (days.length === 0) return null;
  const step = quantileStep(days);

  // Columns are weeks; rows are Mon..Sun.
  const firstDow = (new Date(days[0].key + "T00:00:00Z").getUTCDay() + 6) % 7; // Mon=0
  const cells: (HeatmapDay | null)[] = [...Array<null>(firstDow).fill(null), ...days];
  const weeks: (HeatmapDay | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  // Month label goes on the first week that contains the 1st of a month.
  const monthLabels = weeks.map((w) => {
    const d = w.find((c) => c && c.key.endsWith("-01"));
    return d ? MONTHS[Number(d.key.slice(5, 7)) - 1] : "";
  });

  const CELL = 11;
  const GAP = 2;
  const LEFT = 28;
  const TOP = 16;
  const width = LEFT + weeks.length * (CELL + GAP);
  const height = TOP + 7 * (CELL + GAP);

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="block text-[9px]"
        role="img"
        aria-label="Daily immersion heatmap"
      >
        {DOW.map((label, r) =>
          label ? (
            <text key={r} x={0} y={TOP + r * (CELL + GAP) + CELL - 2} fill="var(--viz-muted)">
              {label}
            </text>
          ) : null,
        )}
        {weeks.map((week, c) => (
          <g key={c} transform={`translate(${LEFT + c * (CELL + GAP)}, 0)`}>
            {monthLabels[c] && (
              <text x={0} y={10} fill="var(--viz-muted)">
                {monthLabels[c]}
              </text>
            )}
            {week.map((day, r) =>
              day ? (
                <rect
                  key={day.key}
                  x={0}
                  y={TOP + r * (CELL + GAP)}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={`var(--viz-seq-${step(day.seconds)})`}
                >
                  <title>{tooltipText(day)}</title>
                </rect>
              ) : null,
            )}
          </g>
        ))}
      </svg>
      <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4, 5].map((s) => (
          <span key={s} className="inline-block size-[10px] rounded-[2px]" style={{ background: `var(--viz-seq-${s})` }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

/** "Sat 20 Sep · 1h 13m · 3 sessions" (redesign.md §3.3). */
function tooltipText(day: HeatmapDay): string {
  const d = new Date(day.key + "T00:00:00Z");
  const date = `${WEEKDAY.format(d)} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
  if (day.seconds <= 0) return `${date} · nothing logged`;
  const parts = [date, formatDuration(day.seconds)];
  if (day.sessions) parts.push(pluralize(day.sessions, "session"));
  return parts.join(" · ");
}
