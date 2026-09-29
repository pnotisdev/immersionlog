import {
  buildContinueItems,
  buildDashboardColumns,
  buildGoals,
  buildHeatmapActivity,
  buildSessions,
  buildTimer,
  buildTypeBreakdown,
  getPreviewShelves,
  pickPool,
} from "@/lib/marketing-preview";
import { formatDuration } from "@/lib/format";
import { MEDIA_TYPE_META, type MediaGroup } from "@/lib/media";
import { Panel } from "@/components/layout/panel";
import { GoalCard } from "@/components/goals/goal-card";
import { QuickLogGrid } from "@/components/sessions/quick-log-grid";
import { SessionList } from "@/components/sessions/session-list";
import type { LibraryPick } from "@/components/library/types";
import { ActivityHeatmap } from "@/components/stats/activity-heatmap";
import { ColumnChart } from "@/components/stats/column-chart";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TypeBars } from "@/components/stats/type-bars";
import { TimerCard } from "@/components/timer/timer-card";
import { PreviewMain, PreviewNav } from "./preview-shell";

const NO_ENTRIES: LibraryPick[] = [];

/** A panel header's quiet link, as a span: PanelLink's styling without a real Link. */
function PreviewLink({ children }: { children: React.ReactNode }) {
  return <span className="text-meta text-dim">{children}</span>;
}

/**
 * The home screen, laid out exactly as src/app/(app)/dashboard/page.tsx lays it out for
 * an account with some history. When that page changes, this is the one to follow.
 */
export async function DashboardPreview() {
  const pool = pickPool(await getPreviewShelves());
  const timer = buildTimer(pool);
  const columns = buildDashboardColumns();
  const goals = buildGoals();
  const sessions = buildSessions(pool, 4);
  const continueItems = buildContinueItems(pool, 10);
  const activity = buildHeatmapActivity();
  const breakdown = buildTypeBreakdown();
  const last30Total = columns.reduce((sum, c) => sum + c.seconds, 0);
  const total = (group: MediaGroup) =>
    breakdown.filter((r) => MEDIA_TYPE_META[r.mediaType].group === group).reduce((sum, r) => sum + r.seconds, 0);

  return (
    <>
      <PreviewNav active="Home" />
      <PreviewMain>
        <div className="grid gap-6">
          <TimerCard timer={timer} entries={NO_ENTRIES} tz="UTC" />

          <StatStrip
            stats={[
              { label: "Streak", value: "47d", hint: "longest 61 days" },
              { label: "This week", value: "12h 40m", hint: "612h all time", hero: true },
              { label: "Today", value: "1h 52m" },
              { label: "Level", value: 18, hint: "2,340 XP to Lv 19" },
            ]}
          />

          <QuickLogGrid items={continueItems} entries={NO_ENTRIES} tz="UTC" action={<PreviewLink>Library</PreviewLink>} />

          <ActivityHeatmap activity={activity} />

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="grid gap-6">
              <Panel
                title="Last 30 days"
                description={
                  <>
                    <span className="font-medium text-foreground tabular-nums">{formatDuration(last30Total)}</span> across{" "}
                    {columns.length} days
                  </>
                }
                action={<PreviewLink>All stats</PreviewLink>}
              >
                <ColumnChart columns={columns} height={180} />
              </Panel>

              <Panel title="Recent sessions" action={<PreviewLink>Full log</PreviewLink>} flush>
                <SessionList sessions={sessions} entries={NO_ENTRIES} tz="UTC" groupByDay={false} framed={false} />
              </Panel>
            </div>

            <div className="grid gap-6">
              <Panel title="Goals" action={<PreviewLink>All goals</PreviewLink>} bodyClassName="grid gap-5">
                {goals.map((g) => (
                  <GoalCard key={g.id} goal={g} bare />
                ))}
              </Panel>

              <Panel title="What you immerse in" description="All time">
                <SplitBar
                  segments={[
                    { label: "Reading", seconds: total("reading"), color: "bg-d-reading" },
                    { label: "Listening", seconds: total("listening"), color: "bg-d-listening" },
                  ]}
                />
                <div className="mt-5">
                  <TypeBars rows={breakdown} limit={6} />
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </PreviewMain>
    </>
  );
}
