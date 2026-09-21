import {
  buildGroupTotals,
  buildHeatmapDays,
  buildStatsColumns,
  buildTopTitles,
  buildTypeBreakdown,
  getPreviewShelves,
  pickPool,
} from "@/lib/marketing-preview";
import { formatDuration } from "@/lib/format";
import { SectionHeader } from "@/components/layout/page-header";
import { MonthCompare } from "@/components/progression/month-compare";
import { ColumnChart } from "@/components/stats/column-chart";
import { Heatmap } from "@/components/stats/heatmap";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TopTitles } from "@/components/stats/top-titles";
import { TypeBars } from "@/components/stats/type-bars";
import { PreviewMain, PreviewNav } from "./preview-shell";

export async function StatsPreview() {
  const pool = pickPool(await getPreviewShelves());
  const columns = buildStatsColumns();
  const heatDays = buildHeatmapDays();
  const top = buildTopTitles(pool, 5);
  const breakdown = buildTypeBreakdown();
  const { current, previous } = buildGroupTotals();

  const totalSeconds = 612 * 3600 + 1400;

  return (
    <>
      <PreviewNav active="Stats" />
      <PreviewMain>
        <div className="grid gap-1.5 text-sm text-muted-foreground">
          <button type="button" className="w-fit rounded-full border border-primary bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            All time
          </button>
        </div>

        <div className="mt-7">
          <p className="section-label">All time</p>
          <h1 className="mt-1.5 text-display font-semibold text-foreground">{formatDuration(totalSeconds)}</h1>
          <p className="mt-2.5 text-sm text-muted-foreground">184,300 XP · 612 sessions · 284 active days · 2h 10m per active day</p>
        </div>

        <div className="mt-6">
          <ColumnChart columns={columns} height={190} />
        </div>

        <StatStrip
          className="mt-8"
          stats={[
            { label: "Daily average", value: "1h 58m", hint: "since Mar 2025" },
            { label: "Current streak", value: "47d", hint: "consecutive days" },
            { label: "Longest streak", value: "61d", hint: "all time" },
            { label: "All time", value: formatDuration(totalSeconds), hint: "612 sessions" },
          ]}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <section>
            <SectionHeader title="What you spent it on" />
            <TopTitles items={top} />
          </section>

          <section>
            <SectionHeader title="Reading vs listening" />
            <SplitBar
              segments={[
                { label: "Reading", seconds: current.reading, color: "bg-d-reading" },
                { label: "Listening", seconds: current.listening, color: "bg-d-listening" },
              ]}
            />
            <p className="mt-2 text-xs text-muted-foreground">
              {formatDuration(current.reading)} reading · {formatDuration(current.listening)} listening
            </p>
            <div className="mt-7">
              <SectionHeader title="By medium" />
              <TypeBars rows={breakdown} />
            </div>
          </section>
        </div>

        <section className="mt-10">
          <SectionHeader title="This month vs last" />
          <MonthCompare current={current} previous={previous} />
        </section>

        <section className="mt-10">
          <SectionHeader title="Past year" action={<span className="text-xs text-muted-foreground">All time</span>} />
          <Heatmap days={heatDays} />
          <p className="mt-3 text-xs text-muted-foreground">284 active days all time · tracking since Mar 2025</p>
        </section>
      </PreviewMain>
    </>
  );
}
