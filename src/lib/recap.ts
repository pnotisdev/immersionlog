import "server-only";
import { subDays } from "date-fns";
import { presetRange } from "./dates";
import { getGoalsWithProgress, getTopItems, sumDuration } from "./queries";
import { getUserRank } from "./ranking-queries";

export interface WeeklyRecap {
  seconds: number;
  /** The 7 days before that, for a "vs last week" comparison. */
  previousSeconds: number;
  topItems: { title: string; seconds: number }[];
  activeGoals: { title: string; percent: number }[];
  rank: number | null;
}

/**
 * A user's last 7 days, entirely from existing query helpers (src/lib/queries.ts,
 * src/lib/ranking-queries.ts) — no new aggregation. Rendered by weeklyRecapEmail
 * (src/lib/emails.ts) for the weekly recap cron (src/app/api/cron/weekly-recap/route.ts).
 */
export async function getWeeklyRecap(userId: string, tz: string, now = new Date()): Promise<WeeklyRecap> {
  const range = presetRange("7d", tz, now);
  const previousRange = { from: subDays(range.from, 7), to: range.from };

  const [seconds, previousSeconds, topItems, goals, rank] = await Promise.all([
    sumDuration(userId, range.from, range.to),
    sumDuration(userId, previousRange.from, previousRange.to),
    getTopItems(userId, range.from, range.to, 3),
    getGoalsWithProgress(userId, tz),
    getUserRank(userId, { from: range.from, to: range.to }),
  ]);

  return {
    seconds,
    previousSeconds,
    topItems: topItems.map((t) => ({ title: t.title, seconds: t.seconds })),
    activeGoals: goals.filter((g) => g.isActive).map((g) => ({ title: g.title, percent: Math.round(g.percent) })),
    rank: rank.rank,
  };
}
