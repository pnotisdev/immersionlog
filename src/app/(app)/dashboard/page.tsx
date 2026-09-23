import Link from "next/link";
import { subDays } from "date-fns";
import { dayKey, eachDayKey, presetRange } from "@/lib/dates";
import { formatDuration, formatNumber, relativeTime } from "@/lib/format";
import { listRecentMilestones } from "@/lib/milestones-queries";
import { getProgression } from "@/lib/progression-queries";
import { getMyClubStandings } from "@/lib/club-queries";
import {
  getDailyTotals,
  getGoalsWithProgress,
  getHeatmapActivity,
  getRecentItems,
  getRecentSessions,
  getTypeBreakdown,
  sumDuration,
} from "@/lib/queries";
import { getFeed } from "@/lib/social-queries";
import { requireUser } from "@/lib/session";
import { getActiveTimerView, getLibraryPicks } from "@/lib/view-models";
import { Panel, PanelLink } from "@/components/layout/panel";
import { ActivityFeed } from "@/components/community/activity-feed";
import { ClubStandings } from "@/components/clubs/club-standings";
import { GoalCard } from "@/components/goals/goal-card";
import { MilestoneList } from "@/components/progression/milestone-list";
import { QuickLogGrid } from "@/components/sessions/quick-log-grid";
import { SessionList } from "@/components/sessions/session-list";
import { toSessionView } from "@/components/sessions/types";
import { ActivityHeatmap } from "@/components/stats/activity-heatmap";
import { ColumnChart } from "@/components/stats/column-chart";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TypeBars } from "@/components/stats/type-bars";
import { TimerCard } from "@/components/timer/timer-card";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const now = new Date();

  const today = presetRange("today", tz, now);
  const week = presetRange("week", tz, now);
  const month = presetRange("month", tz, now);
  const last30 = presetRange("30d", tz, now);
  const all = presetRange("all", tz, now);

  const [picks, progression, todaySec, weekSec, daily, heat, breakdown, goals, recent, recentItems, standings, friends, milestones] =
    await Promise.all([
      getLibraryPicks(user.id),
      getProgression(user.id, tz, now),
      sumDuration(user.id, today.from, today.to),
      sumDuration(user.id, week.from, week.to),
      getDailyTotals(user.id, last30.from, last30.to, tz),
      getHeatmapActivity(user.id, tz, now),
      getTypeBreakdown(user.id, all.from, all.to),
      getGoalsWithProgress(user.id, tz),
      getRecentSessions(user.id, 6),
      getRecentItems(user.id, 10),
      getMyClubStandings(user.id, month.from, month.to),
      getFeed(user.id, { scope: "following", limit: 6 }),
      listRecentMilestones(user.id, 4),
    ]);
  const timer = await getActiveTimerView(user.id, picks);

  const todayKey = dayKey(now, tz);
  // 30 days, not 14 — a fortnight with one bar looks broken; a month gives the series a
  // shape even when sparse (redesign.md §3.2).
  const columns = eachDayKey(subDays(today.from, 29), today.to, tz).map((k) => ({
    label: k.slice(8),
    title: k,
    seconds: daily.get(k)?.seconds ?? 0,
    emphasized: k === todayKey,
  }));
  const activeChartDays = columns.filter((c) => c.seconds > 0).length;
  const last30Total = columns.reduce((sum, c) => sum + c.seconds, 0);
  const activeGoals = goals.filter((g) => g.isActive).slice(0, 3);
  // Your own sessions are in this feed too; only show it when someone else is in it.
  const friendItems = friends.items.filter((i) => i.userId !== user.id).slice(0, 5);
  const hasHistory = recent.length > 0;

  return (
    <div className="grid gap-6">
      {/* Above the fold: log action, current state, what to continue — never a
          headline (redesign.md §1.5). At most one onboarding line, and it's text,
          not a bordered card. */}
      {!hasHistory && (
        <p className="text-sm text-muted-foreground">
          Start the timer below for anything, even something not in your library yet, or{" "}
          <Link href="/discover" className="text-primary hover:underline">
            browse Discover
          </Link>{" "}
          to add what you&apos;re into first.
        </p>
      )}

      <TimerCard timer={timer} entries={picks} tz={tz} />

      <StatStrip
        stats={[
          {
            label: "Streak",
            value: `${progression.currentStreak}d`,
            hint:
              progression.currentStreak > 0
                ? `longest ${progression.longestStreak} day${progression.longestStreak === 1 ? "" : "s"}`
                : "log today to start one",
          },
          { label: "This week", value: formatDuration(weekSec), hint: `${formatDuration(progression.totals.total)} all time`, hero: true },
          { label: "Today", value: formatDuration(todaySec) },
          {
            label: "Level",
            value: progression.overall.level,
            // The XP bar lives here as a line of text, not a full-width progress bar (redesign.md §5.1).
            hint: `${formatNumber(progression.overall.xpForNext - progression.overall.xpIntoLevel)} XP to Lv ${progression.overall.level + 1}`,
          },
        ]}
      />

      {recentItems.length > 0 && (
        <QuickLogGrid
          items={recentItems.map((r) => ({ ...r, lastLabel: relativeTime(r.lastAt, now) }))}
          entries={picks}
          tz={tz}
          action={<PanelLink href="/library">Library</PanelLink>}
        />
      )}

      {/* Full width: the heatmap is the most ownable object in the product, and a year
          only reads at a real cell size when it gets the whole column. */}
      {hasHistory && <ActivityHeatmap activity={heat} />}

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="grid gap-6">
          <Panel
            title="Last 30 days"
            description={
              activeChartDays > 0 ? (
                <>
                  <span className="font-medium text-foreground tabular-nums">{formatDuration(last30Total)}</span> across{" "}
                  {activeChartDays} day{activeChartDays === 1 ? "" : "s"}
                </>
              ) : undefined
            }
            action={<PanelLink href="/stats">All stats</PanelLink>}
          >
            {/* Never an axis with nothing on it (redesign.md §7). */}
            {activeChartDays >= 3 ? (
              <ColumnChart columns={columns} height={180} />
            ) : (
              <p className="py-10 text-center text-sm text-muted-foreground">Log 3 days to see your trend.</p>
            )}
          </Panel>

          <Panel title="Recent sessions" action={<PanelLink href="/log">Full log</PanelLink>} flush>
            <SessionList
              sessions={recent.map(toSessionView)}
              entries={picks}
              tz={tz}
              groupByDay={false}
              framed={false}
              emptyText="Start the timer or log a session to see it here."
            />
          </Panel>
        </div>

        <div className="grid gap-6">
          {/* Omitted entirely when empty, not filled with a prompt (redesign.md §7). */}
          {activeGoals.length > 0 && (
            <Panel title="Goals" action={<PanelLink href="/goals">All goals</PanelLink>} bodyClassName="grid gap-5">
              {activeGoals.map((g) => (
                <GoalCard key={g.id} goal={g} bare />
              ))}
            </Panel>
          )}

          {breakdown.length > 0 && (
            <Panel title="What you immerse in" description="All time">
              <SplitBar
                segments={[
                  { label: "Reading", seconds: progression.totals.reading, color: "bg-d-reading" },
                  { label: "Listening", seconds: progression.totals.listening, color: "bg-d-listening" },
                ]}
              />
              <div className="mt-5">
                <TypeBars rows={breakdown} limit={6} />
              </div>
            </Panel>
          )}

          {/* The "Following" feed is omitted (not filled with a prompt) when there's
              nothing to show; Club standings already omit themselves (redesign.md §7). */}
          {friendItems.length > 0 && (
            <Panel title="From people you follow" action={<PanelLink href="/community">Activity</PanelLink>} flush>
              <ActivityFeed items={friendItems} viewerId={user.id} inset />
            </Panel>
          )}

          <ClubStandings standings={standings} />

          {milestones.length > 0 && (
            <Panel title="Recent milestones" flush>
              <MilestoneList milestones={milestones} inset />
            </Panel>
          )}
        </div>
      </div>
    </div>
  );
}
