import type { HeatmapActivity } from "@/lib/queries";
import { formatNumber, pluralize } from "@/lib/format";
import { Panel, PanelLink } from "@/components/layout/panel";
import { StatStrip } from "@/components/stats/stat-strip";
import { Heatmap, HeatmapLegend, type HeatmapDay } from "@/components/stats/heatmap";

const DAYS = 365;

function shiftKey(key: string, days: number): string {
  const d = new Date(key + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Grammar reviews on the stats page: their own numbers and heatmap, kept apart from the
 * immersion figures above them. Reviews are study, not immersion, so they never add to
 * hours or XP.
 */
export function GrammarActivity({
  activity,
  learned,
  burned,
  className,
}: {
  /** Review counts per day, from getGrammarHeatmap. */
  activity: HeatmapActivity;
  learned: number;
  burned: number;
  className?: string;
}) {
  const byKey = new Map(activity.days.map(([k, reviews, correct]) => [k, { reviews, correct }]));
  const days: HeatmapDay[] = [];
  for (let i = DAYS - 1; i >= 0; i--) {
    const key = shiftKey(activity.today, -i);
    const d = byKey.get(key);
    days.push({ key, seconds: d?.reviews ?? 0, sessions: d?.correct ?? 0 });
  }

  const last30 = days.slice(-30);
  const reviews30 = last30.reduce((a, d) => a + d.seconds, 0);
  const correct30 = last30.reduce((a, d) => a + (d.sessions ?? 0), 0);
  const active30 = last30.filter((d) => d.seconds > 0).length;
  const yearTotal = days.reduce((a, d) => a + d.seconds, 0);

  return (
    <section className={className}>
      <StatStrip
        stats={[
          { label: "Grammar reviews", value: formatNumber(reviews30), hint: "last 30 days" },
          { label: "Accuracy", value: reviews30 ? `${Math.round((correct30 / reviews30) * 100)}%` : "—", hint: "last 30 days" },
          { label: "Reviews per day", value: active30 ? formatNumber(Math.round(reviews30 / active30)) : "—", hint: `on ${pluralize(active30, "active day")}` },
          { label: "Points learned", value: formatNumber(learned), hint: `${formatNumber(burned)} burned` },
        ]}
      />
      <Panel
        className="mt-6"
        title="Grammar reviews"
        description={
          <>
            <span className="font-medium text-foreground tabular-nums">{formatNumber(yearTotal)}</span> in the past 12 months ·
            study time, not immersion
          </>
        }
        action={<PanelLink href="/grammar">Grammar</PanelLink>}
      >
        <Heatmap days={days} highlightKey={activity.today} unit={{ one: "review", many: "reviews", detail: "right" }} label="Daily grammar reviews heatmap" />
        <div className="mt-3 flex justify-end">
          <HeatmapLegend />
        </div>
      </Panel>
    </section>
  );
}
