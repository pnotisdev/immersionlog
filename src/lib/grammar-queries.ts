import "server-only";
import { and, asc, count, eq, gte, isNotNull, lt, lte, sql } from "drizzle-orm";
import { db } from "@/db";
import { grammarProgress, grammarReviews, grammarSettings } from "@/db/schema";
import { dayKey, dayStart } from "./dates";
import { allPoints, DECKS, getPoint } from "./grammar/decks";
import { GRAMMAR_DEFAULTS, type GrammarSettingsValues } from "./grammar/settings";
import { dueCount, forecast, forecastHours, nextDue, pickSentence, stageGroup, STAGE_GROUPS, type StageGroupId } from "./grammar/srs";
import type { GrammarPoint, GrammarSentence } from "./grammar/types";
import type { HeatmapActivity } from "./queries";

export async function getGrammarSettings(userId: string): Promise<GrammarSettingsValues> {
  const row = await db.query.grammarSettings.findFirst({ where: eq(grammarSettings.userId, userId) });
  if (!row) return GRAMMAR_DEFAULTS;
  return {
    dailyNewLimit: row.dailyNewLimit,
    reviewBatchSize: row.reviewBatchSize,
    showFurigana: row.showFurigana,
    showTranslation: row.showTranslation,
  };
}

export type ProgressRow = typeof grammarProgress.$inferSelect;

/** Every point the user has learned. At most one row per point, so a few hundred rows at most. */
export async function getGrammarProgress(userId: string): Promise<ProgressRow[]> {
  return db.select().from(grammarProgress).where(eq(grammarProgress.userId, userId));
}

export async function getPointProgress(userId: string, pointId: string): Promise<ProgressRow | undefined> {
  return db.query.grammarProgress.findFirst({
    where: and(eq(grammarProgress.userId, userId), eq(grammarProgress.pointId, pointId)),
  });
}

/** Points learned since midnight in the user's timezone: what the daily new-point limit counts. */
export async function countUnlockedToday(userId: string, tz: string, now = new Date()): Promise<number> {
  const [row] = await db
    .select({ n: count() })
    .from(grammarProgress)
    .where(and(eq(grammarProgress.userId, userId), gte(grammarProgress.unlockedAt, dayStart(dayKey(now, tz), tz))));
  return row?.n ?? 0;
}

/** Reviews due right now, for the dashboard card. Points no longer in any deck don't count. */
export async function getGrammarDueCount(userId: string, now = new Date()): Promise<number> {
  const rows = await db
    .select({ pointId: grammarProgress.pointId })
    .from(grammarProgress)
    .where(and(eq(grammarProgress.userId, userId), isNotNull(grammarProgress.nextReviewAt), lte(grammarProgress.nextReviewAt, now)));
  return rows.filter((r) => getPoint(r.pointId)).length;
}

/** The next points to learn, in deck order, skipping any already learned. */
export function nextNewPoints(learned: Set<string>, limit: number): GrammarPoint[] {
  if (limit <= 0) return [];
  const out: GrammarPoint[] = [];
  for (const p of allPoints()) {
    if (learned.has(p.id)) continue;
    out.push(p);
    if (out.length >= limit) break;
  }
  return out;
}

export interface DeckStageCounts {
  deckId: string;
  total: number;
  counts: Record<StageGroupId, number>;
}

export interface GrammarOverview {
  settings: GrammarSettingsValues;
  learnedCount: number;
  dueNow: number;
  dueToday: number;
  /** New points the daily limit still allows today, capped by how many are left to learn. */
  newAvailable: number;
  newLeft: number;
  unlockedToday: number;
  nextDueAt: Date | null;
  hours: ReturnType<typeof forecastHours>;
  days: ReturnType<typeof forecast>;
  decks: DeckStageCounts[];
}

export async function getGrammarOverview(userId: string, tz: string, now = new Date()): Promise<GrammarOverview> {
  const [settings, rows, unlockedToday] = await Promise.all([
    getGrammarSettings(userId),
    getGrammarProgress(userId),
    countUnlockedToday(userId, tz, now),
  ]);
  const known = rows.filter((r) => getPoint(r.pointId));
  const learned = new Set(known.map((r) => r.pointId));
  const newLeft = allPoints().length - learned.size;

  const decks = DECKS.map((d) => {
    const counts = Object.fromEntries(STAGE_GROUPS.map((g) => [g.id, 0])) as Record<StageGroupId, number>;
    const byId = new Map(known.map((r) => [r.pointId, r]));
    for (const p of d.points) counts[stageGroup(byId.get(p.id)?.stage ?? 0).id]++;
    return { deckId: d.id, total: d.points.length, counts };
  });

  const days = forecast(known, 7, now, tz);
  return {
    settings,
    learnedCount: learned.size,
    dueNow: dueCount(known, now),
    dueToday: days[0]?.count ?? 0,
    newAvailable: Math.max(0, Math.min(settings.dailyNewLimit - unlockedToday, newLeft)),
    newLeft,
    unlockedToday,
    nextDueAt: nextDue(known, now),
    hours: forecastHours(known, 24, now, tz),
    days,
    decks,
  };
}

/** A point in a review session: enough of it to show, plus every sentence for in-session retries. */
export interface ReviewCard {
  pointId: string;
  deck: string;
  title: string;
  meaning: string;
  structure: string;
  stage: number;
  sentence: GrammarSentence;
  sentences: GrammarSentence[];
}

/** The oldest-due reviews first, up to `limit`, each with its next sentence picked round-robin. */
export async function getReviewQueue(userId: string, limit: number, now = new Date()): Promise<{ cards: ReviewCard[]; dueTotal: number }> {
  const rows = await db
    .select()
    .from(grammarProgress)
    .where(and(eq(grammarProgress.userId, userId), isNotNull(grammarProgress.nextReviewAt), lte(grammarProgress.nextReviewAt, now)))
    .orderBy(asc(grammarProgress.nextReviewAt));
  const cards: ReviewCard[] = [];
  let dueTotal = 0;
  for (const r of rows) {
    const p = getPoint(r.pointId);
    if (!p) continue;
    dueTotal++;
    if (cards.length >= limit) continue;
    cards.push({
      pointId: p.id,
      deck: p.deck,
      title: p.title,
      meaning: p.meaning,
      structure: p.structure,
      stage: r.stage,
      sentence: pickSentence(p, r.lastSentenceId),
      sentences: p.sentences,
    });
  }
  return { cards, dueTotal };
}

const reviewCount = sql<number>`count(*)::int`.mapWith(Number);
const correctCount = sql<number>`count(*) filter (where ${grammarReviews.correct})::int`.mapWith(Number);

/** Reviews and right answers per day ("YYYY-MM-DD" in tz) within [from, to). Days without reviews are absent. */
export async function getGrammarDaily(userId: string, from: Date, to: Date, tz: string) {
  // Grouped by the output alias, for the same reason as getDailyTotals.
  const day = sql<string>`to_char(${grammarReviews.reviewedAt} at time zone ${tz}, 'YYYY-MM-DD')`.as("day");
  const rows = await db
    .select({ day, reviews: reviewCount, correct: correctCount })
    .from(grammarReviews)
    .where(and(eq(grammarReviews.userId, userId), gte(grammarReviews.reviewedAt, from), lt(grammarReviews.reviewedAt, to)))
    .groupBy(sql`"day"`)
    .orderBy(sql`"day"`);
  return new Map(rows.map((r) => [r.day, { reviews: r.reviews, correct: r.correct }]));
}

/**
 * Every day with grammar reviews, shaped like the immersion heatmap's data so the same
 * component draws it; the "seconds" slot carries the review count.
 */
export async function getGrammarHeatmap(userId: string, tz: string, now = new Date()): Promise<HeatmapActivity> {
  const daily = await getGrammarDaily(userId, new Date(0), new Date(now.getTime() + 86_400_000), tz);
  return {
    today: dayKey(now, tz),
    days: [...daily.entries()].map(([key, d]) => [key, d.reviews, d.correct] as [string, number, number]),
  };
}
