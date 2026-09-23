"use client";

import { useEffect, useMemo, useState } from "react";
import type { HeatmapActivity } from "@/lib/queries";
import { formatDate, formatDuration, formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Panel } from "@/components/layout/panel";
import { Heatmap, HeatmapLegend, type HeatmapDay } from "./heatmap";

type RangeId = "3m" | "6m" | "12m" | "2y" | "all";

const RANGES: { id: RangeId; label: string; phrase: string; days?: number; maxCell: number }[] = [
  { id: "3m", label: "3M", phrase: "in the past 3 months", days: 91, maxCell: 28 },
  { id: "6m", label: "6M", phrase: "in the past 6 months", days: 182, maxCell: 24 },
  { id: "12m", label: "12M", phrase: "in the past 12 months", days: 365, maxCell: 20 },
  { id: "2y", label: "2Y", phrase: "in the past 2 years", days: 730, maxCell: 20 },
  { id: "all", label: "All", phrase: "all time", maxCell: 20 },
];
const DEFAULT: RangeId = "12m";
/** One choice for every heatmap this viewer sees — dashboard, stats and profiles alike. */
const STORAGE_KEY = "immersionlog:heatmap-range";

/** Calendar arithmetic on "YYYY-MM-DD" keys. Keys are already in the owner's timezone, so plain UTC dates are exact. */
function shiftKey(key: string, days: number): string {
  const d = new Date(key + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * The profile / dashboard / stats heatmap, with the span in the viewer's hands: past
 * 12 months by default (the GitHub convention), down to 3 months or back to the first
 * session. All of the owner's active days arrive at once (see getHeatmapActivity), so
 * switching span is instant and never refetches.
 */
export function ActivityHeatmap({
  activity,
  title = "Activity",
  className,
}: {
  activity: HeatmapActivity;
  title?: string;
  className?: string;
}) {
  const [range, setRange] = useState<RangeId>(DEFAULT);
  const earliest = activity.days[0]?.[0] ?? activity.today;

  // A span that would only add empty weeks in front of the first session isn't offered.
  const available = RANGES.filter((r) => {
    if (r.id === "2y") return earliest < shiftKey(activity.today, -729);
    if (r.id === "all") return earliest < shiftKey(activity.today, -364);
    return true;
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as RangeId | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring a stored preference after hydration
      if (stored && RANGES.some((r) => r.id === stored)) setRange(stored);
    } catch {
      // Storage blocked (private mode, sandboxed preview): stay on the default.
    }
  }, []);

  function choose(id: RangeId) {
    setRange(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Not persisting is fine.
    }
  }

  // A stored "All" on a profile with only a few months of history falls back to 12M.
  const active = available.find((r) => r.id === range) ?? RANGES.find((r) => r.id === DEFAULT)!;

  const { days, stats } = useMemo(() => {
    const byKey = new Map(activity.days.map(([k, s, n]) => [k, { s, n }]));
    const start = active.days ? shiftKey(activity.today, -(active.days - 1)) : earliest < activity.today ? earliest : activity.today;
    const out: HeatmapDay[] = [];
    let total = 0;
    let activeDays = 0;
    let run = 0;
    let longest = 0;
    let best: HeatmapDay | null = null;
    for (let k = start; k <= activity.today; k = shiftKey(k, 1)) {
      const d = byKey.get(k);
      const day = { key: k, seconds: d?.s ?? 0, sessions: d?.n ?? 0 };
      out.push(day);
      if (day.seconds > 0) {
        total += day.seconds;
        activeDays++;
        run++;
        longest = Math.max(longest, run);
        if (!best || day.seconds > best.seconds) best = day;
      } else {
        run = 0;
      }
    }
    return { days: out, stats: { total, activeDays, longest, best, span: out.length } };
  }, [activity, active, earliest]);

  return (
    <Panel
      className={className}
      title={title}
      description={
        <>
          <span className="font-medium text-foreground tabular-nums">{formatDuration(stats.total)}</span> {active.phrase}
        </>
      }
      action={<RangeTabs ranges={available} value={active.id} onChange={choose} />}
    >
      <Heatmap days={days} maxCell={active.maxCell} highlightKey={activity.today} />
      <div className="mt-3 flex justify-end">
        <HeatmapLegend />
      </div>

      <dl className="-mx-4 mt-4 grid grid-cols-2 gap-y-3 border-t border-border px-4 pt-4 sm:-mx-5 sm:grid-cols-4 sm:px-5">
        <Stat label="Active days" value={formatNumber(stats.activeDays)} hint={`of ${formatNumber(stats.span)}`} />
        <Stat label="Longest streak" value={`${stats.longest}d`} />
        <Stat
          label="Best day"
          value={stats.best ? formatDuration(stats.best.seconds) : "—"}
          hint={stats.best ? formatDate(stats.best.key) : undefined}
        />
        <Stat
          label="Per active day"
          value={stats.activeDays ? formatDuration(stats.total / stats.activeDays) : "—"}
        />
      </dl>
    </Panel>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="min-w-0 sm:border-l sm:border-border sm:pl-4 sm:first:border-l-0 sm:first:pl-0">
      <dt className="truncate text-micro text-dim">{label}</dt>
      <dd className="mt-0.5 truncate text-h3 font-semibold tabular-nums">
        {value}
        {hint && <span className="ml-1.5 text-micro font-normal text-dim">{hint}</span>}
      </dd>
    </div>
  );
}

function RangeTabs({
  ranges,
  value,
  onChange,
}: {
  ranges: typeof RANGES;
  value: RangeId;
  onChange: (id: RangeId) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Heatmap range" className="inline-flex rounded-md border border-border bg-background p-0.5">
      {ranges.map((r) => (
        <button
          key={r.id}
          type="button"
          role="radio"
          aria-checked={r.id === value}
          onClick={() => onChange(r.id)}
          className={cn(
            "h-7 min-w-9 rounded-sm px-2 text-micro font-medium tabular-nums transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
            r.id === value ? "bg-surface-2 text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
