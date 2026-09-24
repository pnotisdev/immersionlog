import "server-only";
import { and, desc, eq, ne, sql } from "drizzle-orm";
import { db } from "@/db";
import { immersionSessions, libraryEntries, type MediaType, mediaDifficultyVotes, mediaItems, user } from "@/db/schema";
import type { JitenStats } from "@/lib/sources/types";
import { parseTitleParam, slugify, titlePath, titleSlug } from "./title-path";

export { parseTitleParam, slugify, titlePath, titleSlug };

/*
 * Public title pages (/titles/…): what a search engine, or someone opening a shared
 * link, sees for a media item. Only shared external items have one; manual items are
 * their creator's own and never public. Community numbers only count people with a
 * public profile and sessions that aren't hidden, and averages need a minimum number
 * of people behind them so no single person's time can be read off the page.
 */

export const MIN_FOR_AVERAGE = 3;

type Item = typeof mediaItems.$inferSelect;

export async function getPublicTitle(id: string): Promise<Item | null> {
  const item = await db.query.mediaItems.findFirst({ where: and(eq(mediaItems.id, id), ne(mediaItems.source, "manual")) });
  return item ?? null;
}

export function isAdult(item: Pick<Item, "metadata">): boolean {
  return item.metadata?.adult === true;
}

export function jitenOf(item: Pick<Item, "metadata">): JitenStats | null {
  const j = item.metadata?.jiten;
  return j && typeof j === "object" ? (j as JitenStats) : null;
}

export interface TitleStats {
  /** Public learners who logged time on it. */
  learners: number;
  seconds: number;
  sessions: number;
  /** Public learners who marked it finished. */
  finished: number;
  /** Average logged time of finished public learners; null below MIN_FOR_AVERAGE. */
  avgSecondsToFinish: number | null;
  difficulty: { average: number | null; count: number };
}

const publicSessions = and(eq(immersionSessions.hidden, false), eq(user.publicProfile, true));

export async function getTitleStats(id: string): Promise<TitleStats> {
  const [[totals], finishedRows, [diff]] = await Promise.all([
    db
      .select({
        learners: sql<number>`count(distinct ${immersionSessions.userId})::int`.mapWith(Number),
        seconds: sql<number>`coalesce(sum(${immersionSessions.durationSeconds}), 0)::int`.mapWith(Number),
        sessions: sql<number>`count(*)::int`.mapWith(Number),
      })
      .from(immersionSessions)
      .innerJoin(user, eq(user.id, immersionSessions.userId))
      .where(and(eq(immersionSessions.mediaItemId, id), publicSessions)),
    // Each finished public learner's total logged time on this title.
    db
      .select({ seconds: sql<number>`coalesce(sum(${immersionSessions.durationSeconds}), 0)::int`.mapWith(Number) })
      .from(libraryEntries)
      .innerJoin(user, eq(user.id, libraryEntries.userId))
      .leftJoin(
        immersionSessions,
        and(
          eq(immersionSessions.userId, libraryEntries.userId),
          eq(immersionSessions.mediaItemId, libraryEntries.mediaItemId),
          eq(immersionSessions.hidden, false),
        ),
      )
      .where(and(eq(libraryEntries.mediaItemId, id), eq(libraryEntries.status, "finished"), eq(user.publicProfile, true)))
      .groupBy(libraryEntries.id),
    db
      .select({
        average: sql<number | null>`avg(${mediaDifficultyVotes.value})`.mapWith((v) => (v == null ? null : Number(v))),
        count: sql<number>`count(*)::int`.mapWith(Number),
      })
      .from(mediaDifficultyVotes)
      .where(eq(mediaDifficultyVotes.mediaItemId, id)),
  ]);

  const withTime = finishedRows.filter((r) => r.seconds > 0);
  return {
    learners: totals?.learners ?? 0,
    seconds: totals?.seconds ?? 0,
    sessions: totals?.sessions ?? 0,
    finished: finishedRows.length,
    avgSecondsToFinish:
      withTime.length >= MIN_FOR_AVERAGE ? Math.round(withTime.reduce((a, r) => a + r.seconds, 0) / withTime.length) : null,
    difficulty: {
      average: diff?.count && diff.count >= MIN_FOR_AVERAGE ? diff.average : null,
      count: diff?.count ?? 0,
    },
  };
}

/**
 * Worth a search result: something beyond what the source site already says. A Jiten
 * character count (reading-time estimates are computed from it), or real activity.
 * Adult items are never indexed.
 */
export function isIndexable(item: Item, stats: Pick<TitleStats, "learners" | "difficulty">): boolean {
  if (isAdult(item)) return false;
  return jitenOf(item)?.characterCount != null || stats.learners >= 1 || stats.difficulty.count >= MIN_FOR_AVERAGE;
}

export interface TitleListing {
  id: string;
  title: string;
  titleNative: string | null;
  type: MediaType;
  coverUrl: string | null;
  year: number | null;
  metadata: Record<string, unknown> | null;
  learners: number;
  seconds: number;
  updatedAt: Date;
}

/**
 * Titles for the /titles index and the sitemap: shared, non-adult items that are
 * indexable by the rule above (public activity, or Jiten stats). Most-tracked first.
 */
export async function listPublicTitles(opts: { type?: MediaType; excludeId?: string; limit?: number } = {}): Promise<TitleListing[]> {
  const activity = db
    .select({
      mediaItemId: immersionSessions.mediaItemId,
      learners: sql<number>`count(distinct ${immersionSessions.userId})::int`.as("learners"),
      seconds: sql<number>`sum(${immersionSessions.durationSeconds})::int`.as("seconds"),
      lastAt: sql<Date>`max(${immersionSessions.startedAt})`.as("last_at"),
    })
    .from(immersionSessions)
    .innerJoin(user, eq(user.id, immersionSessions.userId))
    .where(publicSessions)
    .groupBy(immersionSessions.mediaItemId)
    .as("activity");

  const rows = await db
    .select({
      id: mediaItems.id,
      title: mediaItems.title,
      titleNative: mediaItems.titleNative,
      type: mediaItems.type,
      coverUrl: mediaItems.coverUrl,
      year: mediaItems.year,
      metadata: mediaItems.metadata,
      createdAt: mediaItems.createdAt,
      learners: sql<number>`coalesce(${activity.learners}, 0)`.mapWith(Number),
      seconds: sql<number>`coalesce(${activity.seconds}, 0)`.mapWith(Number),
      lastAt: activity.lastAt,
    })
    .from(mediaItems)
    .leftJoin(activity, eq(activity.mediaItemId, mediaItems.id))
    .where(
      and(
        ne(mediaItems.source, "manual"),
        sql`coalesce((${mediaItems.metadata}->>'adult')::boolean, false) = false`,
        sql`(${activity.learners} > 0 or ${mediaItems.metadata}->'jiten'->>'characterCount' is not null)`,
        opts.type ? eq(mediaItems.type, opts.type) : undefined,
        opts.excludeId ? ne(mediaItems.id, opts.excludeId) : undefined,
      ),
    )
    .orderBy(desc(sql`coalesce(${activity.learners}, 0)`), desc(sql`coalesce(${activity.seconds}, 0)`), mediaItems.title)
    .limit(opts.limit ?? 5000);

  return rows.map((r) => ({
    ...r,
    updatedAt: r.lastAt ? new Date(r.lastAt) : r.createdAt,
  }));
}
