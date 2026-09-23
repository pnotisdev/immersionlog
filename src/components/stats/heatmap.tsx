"use client";

import { useRef, useState, type CSSProperties } from "react";
import { formatDuration, pluralize } from "@/lib/format";
import { quantileStep } from "@/lib/heatmap-scale";
import { cn } from "@/lib/utils";

export interface HeatmapDay {
  key: string; // YYYY-MM-DD
  seconds: number;
  sessions?: number;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DOW = ["Mon", "", "Wed", "", "Fri", "", ""];
const WEEKDAY = new Intl.DateTimeFormat("en", { weekday: "short", timeZone: "UTC" });

/** Width of the weekday label column. */
const LABEL_W = 28;

/**
 * GitHub-style calendar heatmap. `days` must be contiguous and oldest first; weeks run
 * Monday to Sunday, and the first column is padded if `days` doesn't start on a Monday.
 *
 * Cells are fluid: the grid fills its container, up to `maxCell` px per cell, so a year
 * reads at a real size on a desktop panel instead of a fixed 11px strip. Below `minCell`
 * it stops shrinking and scrolls sideways instead — and because the scroller is a
 * `row-reverse` flex box, it opens at its *right* edge (the most recent weeks) with no
 * script and no jump after hydration, which is what a phone visitor needs to see.
 */
export function Heatmap({
  days,
  maxCell = 20,
  minCell = 10,
  gap = 3,
  highlightKey,
  className,
}: {
  days: HeatmapDay[];
  /** Largest a cell may grow, in px. */
  maxCell?: number;
  /** Smallest a cell may shrink to before the grid scrolls sideways instead, in px. */
  minCell?: number;
  /** Space between cells, in px. */
  gap?: number;
  /** A day to outline, usually today. */
  highlightKey?: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<{ i: number; x: number; y: number; w: number } | null>(null);
  if (days.length === 0) return null;

  const step = quantileStep(days.map((d) => d.seconds));
  const firstDow = (new Date(days[0].key + "T00:00:00Z").getUTCDay() + 6) % 7; // Mon=0
  const weeks = Math.ceil((firstDow + days.length) / 7);

  // A month label sits over the first week holding its 1st. The very first column gets
  // its month too, when enough of that month is visible to deserve one.
  const labels: { col: number; text: string }[] = [];
  days.forEach((d, i) => {
    const isFirst = d.key.endsWith("-01");
    const leadIn = i === 0 && Number(d.key.slice(8)) <= 18;
    if (isFirst || leadIn) labels.push({ col: Math.floor((firstDow + i) / 7), text: MONTHS[Number(d.key.slice(5, 7)) - 1] });
  });
  // Drop a label that would collide with the next one (a partial first month).
  const monthLabels = labels.filter((l, i) => !labels[i + 1] || labels[i + 1].col - l.col >= 3);

  const gridStyle: CSSProperties = {
    gridTemplateColumns: `${LABEL_W}px repeat(${weeks}, minmax(0, ${maxCell}px))`,
    gap,
    minWidth: LABEL_W + weeks * (minCell + gap),
  };

  function show(e: React.PointerEvent) {
    const target = (e.target as HTMLElement).closest<HTMLElement>("[data-i]");
    const wrap = wrapRef.current;
    if (!target || !wrap) return;
    const r = target.getBoundingClientRect();
    const w = wrap.getBoundingClientRect();
    setTip({ i: Number(target.dataset.i), x: r.left - w.left + r.width / 2, y: r.top - w.top, w: w.width });
  }

  const tipDay = tip ? days[tip.i] : null;

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      {/* 2px of padding (cancelled by the margin) so today's outline isn't clipped by the scroller. */}
      <div className="no-scrollbar -m-[2px] flex flex-row-reverse overflow-x-auto p-[2px]" onPointerLeave={() => setTip(null)}>
        <div
          role="img"
          aria-label="Daily immersion heatmap"
          className="grid w-full flex-none justify-start text-[10px] leading-none text-[var(--viz-muted)] select-none"
          style={gridStyle}
          onPointerOver={show}
          onPointerDown={show}
        >
          {monthLabels.map((l) => (
            <span key={`m${l.col}`} className="pb-1 whitespace-nowrap" style={{ gridRow: 1, gridColumn: l.col + 2 }}>
              {l.text}
            </span>
          ))}
          {DOW.map((label, r) =>
            label ? (
              // Zero-height and centred on its row, so a 10px label never makes a row taller than its cells.
              <span key={`d${r}`} className="flex h-0 items-center self-center" style={{ gridRow: r + 2, gridColumn: 1 }}>
                {label}
              </span>
            ) : null,
          )}
          {days.map((day, i) => {
            const pos = firstDow + i;
            return (
              <span
                key={day.key}
                data-i={i}
                className={cn(
                  "aspect-square w-full rounded-[18%] hover:brightness-125",
                  day.key === highlightKey && "outline-1 outline-offset-1 outline-foreground/50",
                )}
                style={{
                  gridRow: (pos % 7) + 2,
                  gridColumn: Math.floor(pos / 7) + 2,
                  background: `var(--viz-seq-${step(day.seconds)})`,
                }}
              />
            );
          })}
        </div>
      </div>

      {tip && tipDay && (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-sm border border-line-strong bg-popover px-2.5 py-1.5 text-micro whitespace-nowrap text-popover-foreground shadow-lg"
          // Clamped so it never hangs off either end of the grid.
          style={{ left: Math.min(Math.max(tip.x, 100), Math.max(100, tip.w - 100)), top: tip.y - 6 }}
        >
          <TooltipBody day={tipDay} />
        </div>
      )}
    </div>
  );
}

/** "Less ▢▢▢▢▢▢ More" — the ramp, for a caption row. */
export function HeatmapLegend({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 text-[10px] text-muted-foreground", className)}>
      <span className="mr-0.5">Less</span>
      {[0, 1, 2, 3, 4, 5].map((s) => (
        <span key={s} className="inline-block size-[10px] rounded-[2px]" style={{ background: `var(--viz-seq-${s})` }} />
      ))}
      <span className="ml-0.5">More</span>
    </div>
  );
}

/** "1h 13m · 3 sessions · Sat 20 Sep 2026" (redesign.md §3.3). */
function TooltipBody({ day }: { day: HeatmapDay }) {
  const d = new Date(day.key + "T00:00:00Z");
  const date = `${WEEKDAY.format(d)} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  if (day.seconds <= 0) {
    return (
      <>
        <span className="text-muted-foreground">{date}</span> · nothing logged
      </>
    );
  }
  return (
    <>
      <span className="font-semibold tabular-nums">{formatDuration(day.seconds)}</span>
      {day.sessions ? <span className="text-muted-foreground"> · {pluralize(day.sessions, "session")}</span> : null}
      <span className="text-muted-foreground"> · {date}</span>
    </>
  );
}
