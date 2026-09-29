import "server-only";
import { and, count, eq, gte, isNotNull, lte, asc } from "drizzle-orm";
import { db } from "@/db";
import { kanjiProgress, kanjiSettings } from "@/db/schema";
import { dayKey, dayStart } from "./dates";
import { dueCount, forecast, forecastHours, nextDue } from "./grammar/srs";
import { getKanji, KANJI, KANJI_GROUPS, getGroup, type Kanji } from "./kanji";
import { KANJI_DEFAULTS, type KanjiSettingsValues } from "./kanji/settings";

export async function getKanjiSettings(userId: string): Promise<KanjiSettingsValues> {
  const row = await db.query.kanjiSettings.findFirst({ where: eq(kanjiSettings.userId, userId) });
  return row ? { dailyNewLimit: row.dailyNewLimit, reviewBatchSize: row.reviewBatchSize } : KANJI_DEFAULTS;
}

export type KanjiProgressRow = typeof kanjiProgress.$inferSelect;

/** Every kanji the user has learned: at most 2,136 rows. */
export async function getKanjiProgress(userId: string): Promise<KanjiProgressRow[]> {
  return db.select().from(kanjiProgress).where(eq(kanjiProgress.userId, userId));
}

export async function getKanjiRow(userId: string, kanji: string): Promise<KanjiProgressRow | undefined> {
  return db.query.kanjiProgress.findFirst({ where: and(eq(kanjiProgress.userId, userId), eq(kanjiProgress.kanji, kanji)) });
}

/** Kanji learned since midnight in the user's timezone: what the daily limit counts. */
export async function countKanjiUnlockedToday(userId: string, tz: string, now = new Date()): Promise<number> {
  const [row] = await db
    .select({ n: count() })
    .from(kanjiProgress)
    .where(and(eq(kanjiProgress.userId, userId), gte(kanjiProgress.unlockedAt, dayStart(dayKey(now, tz), tz))));
  return row?.n ?? 0;
}

/** The next kanji to learn, in learning order (or from just `groupId`), skipping any already learned. */
export function nextNewKanji(learned: Set<string>, limit: number, groupId?: string): Kanji[] {
  if (limit <= 0) return [];
  const pool = groupId ? (getGroup(groupId)?.kanji ?? []) : KANJI;
  const out: Kanji[] = [];
  for (const k of pool) {
    if (learned.has(k.c)) continue;
    out.push(k);
    if (out.length >= limit) break;
  }
  return out;
}

export interface KanjiGroupProgress {
  groupId: string;
  total: number;
  learned: number;
}

export interface KanjiOverview {
  settings: KanjiSettingsValues;
  learnedCount: number;
  total: number;
  dueNow: number;
  dueToday: number;
  newAvailable: number;
  unlockedToday: number;
  nextDueAt: Date | null;
  hours: ReturnType<typeof forecastHours>;
  days: ReturnType<typeof forecast>;
  groups: KanjiGroupProgress[];
}

export async function getKanjiOverview(userId: string, tz: string, now = new Date()): Promise<KanjiOverview> {
  const [settings, rows, unlockedToday] = await Promise.all([
    getKanjiSettings(userId),
    getKanjiProgress(userId),
    countKanjiUnlockedToday(userId, tz, now),
  ]);
  const known = rows.filter((r) => getKanji(r.kanji));
  const learned = new Set(known.map((r) => r.kanji));
  const newLeft = KANJI.length - learned.size;
  const days = forecast(known, 7, now, tz);
  return {
    settings,
    learnedCount: learned.size,
    total: KANJI.length,
    dueNow: dueCount(known, now),
    dueToday: days[0]?.count ?? 0,
    newAvailable: Math.max(0, Math.min(settings.dailyNewLimit - unlockedToday, newLeft)),
    unlockedToday,
    nextDueAt: nextDue(known, now),
    hours: forecastHours(known, 24, now, tz),
    days,
    groups: KANJI_GROUPS.map((g) => ({ groupId: g.id, total: g.kanji.length, learned: g.kanji.filter((k) => learned.has(k.c)).length })),
  };
}

/** Reviews due right now, for the nav and dashboard. */
export async function getKanjiDueCount(userId: string, now = new Date()): Promise<number> {
  const rows = await db
    .select({ kanji: kanjiProgress.kanji })
    .from(kanjiProgress)
    .where(and(eq(kanjiProgress.userId, userId), isNotNull(kanjiProgress.nextReviewAt), lte(kanjiProgress.nextReviewAt, now)));
  return rows.filter((r) => getKanji(r.kanji)).length;
}

/** The oldest-due kanji first, up to `limit`. */
export async function getDueKanji(userId: string, limit: number, now = new Date()): Promise<Kanji[]> {
  const rows = await db
    .select({ kanji: kanjiProgress.kanji })
    .from(kanjiProgress)
    .where(and(eq(kanjiProgress.userId, userId), isNotNull(kanjiProgress.nextReviewAt), lte(kanjiProgress.nextReviewAt, now)))
    .orderBy(asc(kanjiProgress.nextReviewAt));
  return rows.map((r) => getKanji(r.kanji)).filter((k): k is Kanji => !!k).slice(0, limit);
}
