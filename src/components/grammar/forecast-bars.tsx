import { pluralize } from "@/lib/format";
import type { ForecastHour } from "@/lib/grammar/srs";

/**
 * Reviews becoming due in each of the next 24 hours, as thin columns: enough to see
 * "a few this evening, a pile tomorrow morning" at a glance. Hours are the user's own
 * (the buckets come from forecastHours in their timezone).
 */
export function ForecastBars({ hours }: { hours: ForecastHour[] }) {
  const max = Math.max(1, ...hours.map((h) => h.count));
  const total = hours.reduce((a, h) => a + h.count, 0);

  return (
    <div>
      <div className="flex h-24 items-end gap-[3px]" role="img" aria-label={`${pluralize(total, "review")} due in the next 24 hours`}>
        {hours.map((h, i) => (
          <div
            key={i}
            title={`${String(h.hour).padStart(2, "0")}:00 · ${pluralize(h.count, "review")}`}
            className="flex h-full min-w-0 flex-1 flex-col justify-end"
          >
            <div
              className={h.count ? "rounded-t-[2px] bg-[var(--viz-series)]" : "h-px bg-border"}
              style={h.count ? { height: `${Math.max(8, (h.count / max) * 100)}%` } : undefined}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex gap-[3px] text-[10px] text-dim tabular-nums">
        {hours.map((h, i) => (
          <span key={i} className="min-w-0 flex-1 text-center">
            {i % 6 === 0 ? String(h.hour).padStart(2, "0") : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
