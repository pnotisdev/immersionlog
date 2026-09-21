import { formatDuration } from "@/lib/format";
import { percentChange } from "@/lib/progression";
import type { GroupTotals } from "@/lib/progression-queries";
import { StatStrip, type StripStat } from "@/components/stats/stat-strip";

const ROWS: { label: string; key: keyof GroupTotals }[] = [
  { label: "Reading", key: "reading" },
  { label: "Listening", key: "listening" },
  { label: "Total", key: "total" },
];

function delta(cur: number, prev: number): StripStat["delta"] {
  const pct = percentChange(cur, prev);
  if (pct === null) return undefined;
  return { label: `${Math.abs(Math.round(pct))}% vs last month`, direction: pct > 0 ? "up" : pct < 0 ? "down" : "flat" };
}

/** Reading / listening / total this month against the same period last month — the
 * shared stat strip, not a trio of icon-badge cards (redesign.md §3.1 / ai-slop.md #18). */
export function MonthCompare({ current, previous }: { current: GroupTotals; previous: GroupTotals }) {
  return (
    <StatStrip
      stats={ROWS.map((r) => ({
        label: r.label,
        value: formatDuration(current[r.key]),
        delta: delta(current[r.key], previous[r.key]),
      }))}
    />
  );
}
