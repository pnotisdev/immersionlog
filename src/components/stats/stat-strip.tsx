import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface StripStat {
  label: string;
  value: ReactNode;
  /** Must carry new information — a delta, a record, a denominator. Omit if it would only restate the value. */
  hint?: ReactNode;
  /** Signed delta, colored by direction only — never the value itself (redesign.md §3.1). */
  delta?: { label: string; direction: "up" | "down" | "flat" };
  /** Exactly one hero figure per view (≥34px) if any; every other stat sits at 24px. */
  hero?: boolean;
}

/**
 * Numbers as typography, not as boxes: no card, no border — four stats in a row
 * separated by 1px vertical rules, with a hairline above and below the whole strip.
 * Cards around single numbers are what makes a dashboard look generic.
 */
export function StatStrip({ stats, className }: { stats: StripStat[]; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-2 divide-x divide-y divide-border border-y border-border sm:grid-cols-4 sm:divide-y-0", className)}>
      {stats.map((s) => (
        <div key={s.label} className="min-w-0 px-4 py-3 first:pl-0">
          <dt className="section-label truncate">{s.label}</dt>
          <dd className={cn("mt-1 truncate font-semibold text-foreground", s.hero ? "text-display" : "text-h1")}>{s.value}</dd>
          {(s.hint || s.delta) && (
            <dd className="mt-1 truncate text-micro text-dim">
              {s.delta && (
                <span
                  className={cn(
                    "mr-1",
                    s.delta.direction === "up" && "text-success",
                    s.delta.direction === "down" && "text-danger",
                  )}
                >
                  {s.delta.label}
                </span>
              )}
              {s.hint}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}

export interface Segment {
  label: string;
  seconds: number;
  /** Tailwind background class for the segment and its legend dot. */
  color: string;
}

/** One bar, two or three parts — the shape of someone's input at a glance. */
export function SplitBar({ segments, className }: { segments: Segment[]; className?: string }) {
  const total = segments.reduce((a, s) => a + s.seconds, 0);
  if (total === 0) return null;

  return (
    <div className={className}>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-muted">
        {segments.map((s) => (
          <div
            key={s.label}
            className={cn("h-full first:rounded-l-full last:rounded-r-full", s.color)}
            style={{ width: `${(s.seconds / total) * 100}%` }}
            title={`${s.label}: ${Math.round((s.seconds / total) * 100)}%`}
          />
        ))}
      </div>
      <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5">
        {segments.map((s) => (
          <div key={s.label} className="flex items-baseline gap-1.5 text-sm">
            <span className={cn("size-2 shrink-0 translate-y-[-1px] rounded-full", s.color)} aria-hidden />
            <span className="text-muted-foreground">{s.label}</span>
            <span className="font-medium tabular-nums">{Math.round((s.seconds / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
