import "server-only";
import { and, asc, count, eq, gte, isNotNull, lt, lte, sql } from "drizzle-orm";
import { db } from "@/db";
import { grammarProgress, grammarReviews, grammarSettings } from "@/db/schema";
import { dayKey, dayStart } from "./dates";
import { allPoints, DECKS, getDeck, getPoint } from "./grammar/decks";
import { GRAMMAR_DEFAULTS, type GrammarSettingsValues } from "./grammar/settings";
import { BUILD_MIN_STAGE, BUILD_SHARE, dueCount, forecast, forecastHours, nextDue, pickSentence, stageGroup, STAGE_GROUPS, type StageGroupId } from "./grammar/srs";
import { chunkBoundaries } from "./grammar/tiles";
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

/** The next points to learn, in deck order (or from just `deckId`), skipping any already learned. */
export function nextNewPoints(learned: Set<string>, limit: number, deckId?: string): GrammarPoint[] {
  if (limit <= 0) return [];
  const out: GrammarPoint[] = [];
  for (const p of deckId ? getDeck(deckId)?.points ?? [] : allPoints()) {
    if (learned.has(p.id)) continue;
    out.push(p);
    if (out.length >= limit) break;
  }
  return out;
}

export interface DeckStageCounts {
  deckId: string;
  total: number;
  /** Points in this deck not yet in the user's reviews. */
  unlearned: number;
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
  /** Learned points missed often enough to practise on their own. */
  weakCount: number;
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
    return { deckId: d.id, total: d.points.length, unlearned: d.points.filter((p) => !learned.has(p.id)).length, counts };
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
    weakCount: weakRows(known).length,
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
  /** Markdown, shown after a miss. */
  explanation: string;
  stage: number;
  sentence: GrammarSentence;
  sentences: GrammarSentence[];
  /** Ask this one as a sentence to build rather than a blank to fill. Only when its sentence can be cut into tiles. */
  build: boolean;
  /** Tile cut points per sentence id, for the sentences that can be built. */
  splits: Record<string, number[]>;
  timesWrong: number;
  timesCorrect: number;
}

function cardFor(r: ProgressRow, p: GrammarPoint, sentence: GrammarSentence): ReviewCard {
  const splits: Record<string, number[]> = {};
  for (const x of p.sentences) {
    const b = chunkBoundaries(x);
    if (b) splits[x.id] = b;
  }
  return {
    pointId: p.id,
    deck: p.deck,
    title: p.title,
    meaning: p.meaning,
    structure: p.structure,
    explanation: p.explanation,
    stage: r.stage,
    sentence,
    sentences: p.sentences,
    build: r.stage >= BUILD_MIN_STAGE && sentence.id in splits && Math.random() < BUILD_SHARE,
    splits,
    timesWrong: r.timesWrong,
    timesCorrect: r.timesCorrect,
  };
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
    cards.push(cardFor(r, p, pickSentence(p, r.lastSentenceId)));
  }
  return { cards: shuffled(cards), dueTotal };
}

/** Fisher-Yates, so a session mixes levels and topics instead of running through one deck's points in a row. */
export function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Share of reviews answered wrong, for ranking trouble spots. */
function missRate(r: ProgressRow): number {
  return r.timesWrong / Math.max(1, r.timesWrong + r.timesCorrect);
}

/** Learned points the learner keeps missing: missed at least twice and wrong in over a third of reviews, worst first. */
export function weakRows(rows: ProgressRow[]): ProgressRow[] {
  return rows
    .filter((r) => getPoint(r.pointId) && r.timesWrong >= 2 && missRate(r) > 1 / 3)
    .sort((a, b) => missRate(b) - missRate(a) || b.timesWrong - a.timesWrong);
}

export type PracticeScope = "weak" | { deck: string };

/**
 * Practice outside the schedule: learned points only, answered in the browser, nothing
 * recorded. "weak" is the trouble spots; a deck is a random mix of what's learned in it.
 */
export async function getPracticeQueue(userId: string, scope: PracticeScope, limit: number): Promise<{ cards: ReviewCard[]; total: number }> {
  const rows = (await getGrammarProgress(userId)).filter((r) => getPoint(r.pointId));
  const chosen = scope === "weak" ? weakRows(rows) : shuffled(rows.filter((r) => getPoint(r.pointId)!.deck === scope.deck));
  const cards = (scope === "weak" ? shuffled(chosen.slice(0, limit)) : chosen.slice(0, limit)).map((r) => {
    const p = getPoint(r.pointId)!;
    return cardFor(r, p, p.sentences[Math.floor(Math.random() * p.sentences.length)]);
  });
  return { cards, total: chosen.length };
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
