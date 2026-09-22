import Link from "next/link";
import { subDays } from "date-fns";
import { dayKey, eachDayKey, presetRange } from "@/lib/dates";
import { formatDate, formatDuration, formatNumber, relativeTime } from "@/lib/format";
import { UNIT_LABELS } from "@/lib/media";
import { listRecentMilestones } from "@/lib/milestones-queries";
import { getProgression } from "@/lib/progression-queries";
import { getMyClubStandings } from "@/lib/club-queries";
import { buildHeatmapDays, getDailyTotals, getGoalsWithProgress, getRecentItems, getRecentSessions, getTypeBreakdown, sumDuration } from "@/lib/queries";
import { getFeed } from "@/lib/social-queries";
import { requireUser } from "@/lib/session";
import { getActiveTimerView, getLibraryPicks } from "@/lib/view-models";
import { SectionHeader } from "@/components/layout/page-header";
import { ActivityFeed } from "@/components/community/activity-feed";
import { ClubStandings } from "@/components/clubs/club-standings";
import { GoalCard } from "@/components/goals/goal-card";
import { QuickLogGrid } from "@/components/sessions/quick-log-grid";
import { SessionList } from "@/components/sessions/session-list";
import { toSessionView } from "@/components/sessions/types";
import { ColumnChart } from "@/components/stats/column-chart";
import { Heatmap } from "@/components/stats/heatmap";
import { StatStrip } from "@/components/stats/stat-strip";
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
  const heatRange = presetRange("365d", tz, now);
  const all = presetRange("all", tz, now);

  const [picks, progression, todaySec, weekSec, daily, heat, breakdown, goals, recent, recentItems, standings, friends, milestones] =
    await Promise.all([
      getLibraryPicks(user.id),
      getProgression(user.id, tz, now),
      sumDuration(user.id, today.from, today.to),
      sumDuration(user.id, week.from, week.to),
      getDailyTotals(user.id, last30.from, last30.to, tz),
      getDailyTotals(user.id, heatRange.from, heatRange.to, tz),
      getTypeBreakdown(user.id, all.from, all.to),
      getGoalsWithProgress(user.id, tz),
      getRecentSessions(user.id, 5),
      getRecentItems(user.id, 6),
      getMyClubStandings(user.id, month.from, month.to),
      getFeed(user.id, { scope: "following", limit: 6 }),
      listRecentMilestones(user.id, 5),
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
  const heatDaysFull = buildHeatmapDays(heat, heatRange.from, heatRange.to, tz);
  const activeDaysInHeatRange = heatDaysFull.filter((d) => d.seconds > 0).length;
  // Same "a light user's 52 flat weeks read as one step" trim as the profile page.
  const heatDays = activeDaysInHeatRange < 10 ? heatDaysFull.slice(-84) : heatDaysFull;
  const activeGoals = goals.filter((g) => g.isActive).slice(0, 2);
  // Your own sessions are in this feed too; only show it when someone else is in it.
  const friendItems = friends.items.filter((i) => i.userId !== user.id).slice(0, 5);

  return (
    <div className="grid gap-8">
      {/* Above the fold: log action, current state, what to continue — never a
          headline (redesign.md §1.5). At most one onboarding line, and it's text,
          not a bordered card. */}
      {recent.length === 0 && (
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
          action={
            <Link href="/library" className="text-xs text-muted-foreground hover:text-foreground">
              Library →
            </Link>
          }
        />
      )}

      <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="grid gap-8">
          <section>
            <SectionHeader
              title="Activity"
              action={
                <Link href="/stats" className="text-xs text-muted-foreground hover:text-foreground">
                  All stats
                </Link>
              }
            />
            {/* Never an axis with nothing on it (redesign.md §7). */}
            {activeChartDays >= 3 ? (
              <ColumnChart columns={columns} />
            ) : (
              <p className="py-10 text-center text-sm text-muted-foreground">Log 3 days to see your trend.</p>
            )}
          </section>

          <section>
            <SectionHeader
              title={activeDaysInHeatRange < 10 ? "Last 12 weeks" : "Past year"}
              action={<span className="text-xs text-muted-foreground">{activeDaysInHeatRange} active days</span>}
            />
            <Heatmap days={heatDays} />
          </section>

          <section>
            <SectionHeader
              title="Recent sessions"
              action={
                <Link href="/log" className="text-xs text-muted-foreground hover:text-foreground">
                  Full log
                </Link>
              }
            />
            <SessionList
              sessions={recent.map(toSessionView)}
              entries={picks}
              tz={tz}
              groupByDay={false}
              emptyText="Start the timer or log a session to see it here."
            />
          </section>
        </div>

        <div className="grid gap-8">
          {/* Omitted entirely when empty, not filled with a prompt (redesign.md §7). */}
          {activeGoals.length > 0 && (
            <section>
              <SectionHeader
                title="Goals"
                action={
                  <Link href="/goals" className="text-xs text-muted-foreground hover:text-foreground">
                    All goals
                  </Link>
                }
              />
              <div className="grid gap-3">
                {activeGoals.map((g) => (
                  <GoalCard key={g.id} goal={g} compact />
                ))}
              </div>
            </section>
          )}

          {breakdown.length > 0 && (
            <section>
              <SectionHeader title="By medium" />
              <TypeBars rows={breakdown} limit={6} />
            </section>
          )}

          {milestones.length > 0 && (
            <section>
              <SectionHeader title="Recent milestones" />
              <ul className="grid gap-2.5">
                {milestones.map((m) => (
                  <li key={m.id} className="text-sm">
                    <Link href={`/media/${m.mediaItemId}`} className="font-medium hover:underline">
                      {m.title}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {m.mediaTitle}
                      {m.occurredAt && ` · ${formatDate(m.occurredAt)}`}
                      {m.progressAmount != null && m.progressUnit && ` · ${m.progressAmount} ${UNIT_LABELS[m.progressUnit]}`}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* The "Following" feed is omitted (not filled with a prompt) when there's
              nothing to show; Club standings already omit themselves (redesign.md §7). */}
          {(friendItems.length > 0 || standings.length > 0) && (
            <section>
              {friendItems.length > 0 && (
                <>
                  <SectionHeader
                    title="From people you follow"
                    action={
                      <Link href="/community" className="text-xs text-muted-foreground hover:text-foreground">
                        Activity
                      </Link>
                    }
                  />
                  <ActivityFeed items={friendItems} viewerId={user.id} />
                </>
              )}
              <div className={friendItems.length > 0 ? "mt-6" : undefined}>
                <ClubStandings standings={standings} />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
