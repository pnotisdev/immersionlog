import {
  buildDashboardColumns,
  buildGoals,
  buildSessions,
  buildTimer,
  getPreviewShelves,
  pickPool,
} from "@/lib/marketing-preview";
import { SectionHeader } from "@/components/layout/page-header";
import { GoalCard } from "@/components/goals/goal-card";
import { SessionList } from "@/components/sessions/session-list";
import type { LibraryPick } from "@/components/library/types";
import { ColumnChart } from "@/components/stats/column-chart";
import { StatStrip } from "@/components/stats/stat-strip";
import { TimerCard } from "@/components/timer/timer-card";
import { PreviewMain, PreviewNav } from "./preview-shell";

const NO_ENTRIES: LibraryPick[] = [];

export async function DashboardPreview() {
  const pool = pickPool(await getPreviewShelves());
  const timer = buildTimer(pool);
  const columns = buildDashboardColumns();
  const goals = buildGoals();
  const sessions = buildSessions(pool, 4);

  return (
    <>
      <PreviewNav active="Home" />
      <PreviewMain>
        <div className="grid gap-8">
          <TimerCard timer={timer} entries={NO_ENTRIES} tz="UTC" />

          <StatStrip
            stats={[
              { label: "Streak", value: "47d", hint: "longest 61 days" },
              { label: "This week", value: "12h 40m", hint: "612h all time", hero: true },
              { label: "Today", value: "1h 52m" },
              { label: "Level", value: 18, hint: "2,340 XP to Lv 19" },
            ]}
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="grid gap-8">
              <section>
                <SectionHeader title="Activity" action={<span className="text-xs text-muted-foreground">All stats</span>} />
                <ColumnChart columns={columns} />
              </section>

              <section>
                <SectionHeader title="Recent sessions" action={<span className="text-xs text-muted-foreground">Full log</span>} />
                <SessionList sessions={sessions} entries={NO_ENTRIES} tz="UTC" groupByDay={false} />
              </section>
            </div>

            <div className="grid gap-8">
              <section>
                <SectionHeader title="Goals" action={<span className="text-xs text-muted-foreground">All goals</span>} />
                <div className="grid gap-3">
                  {goals.map((g) => (
                    <GoalCard key={g.id} goal={g} compact />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </PreviewMain>
    </>
  );
}
