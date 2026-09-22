import "server-only";
import { and, eq, inArray, sql } from "drizzle-orm";
import { db } from "@/db";
import { mediaDifficultyVotes } from "@/db/schema";

export interface DifficultyStats {
  average: number | null;
  count: number;
}

const avgValue = sql<number | null>`avg(${mediaDifficultyVotes.value})`.mapWith((v) => (v == null ? null : Number(v)));
const countVotes = sql<number>`count(*)::int`.mapWith(Number);

/** Aggregate difficulty for one media item (media page). */
export async function getDifficultyStats(mediaItemId: string): Promise<DifficultyStats> {
  const [row] = await db
    .select({ average: avgValue, count: countVotes })
    .from(mediaDifficultyVotes)
    .where(eq(mediaDifficultyVotes.mediaItemId, mediaItemId));
  return { average: row?.average ?? null, count: row?.count ?? 0 };
}

/** The viewer's own vote, if any (media page, to highlight their choice). */
export async function getMyDifficultyVote(userId: string, mediaItemId: string): Promise<number | null> {
  const [row] = await db
    .select({ value: mediaDifficultyVotes.value })
    .from(mediaDifficultyVotes)
    .where(and(eq(mediaDifficultyVotes.mediaItemId, mediaItemId), eq(mediaDifficultyVotes.userId, userId)));
  return row?.value ?? null;
}

/** Batched aggregate for a set of items — Discover's "Popular with members" rail. */
export async function getDifficultyForItems(mediaItemIds: string[]): Promise<Map<string, DifficultyStats>> {
  if (mediaItemIds.length === 0) return new Map();
  const rows = await db
    .select({ mediaItemId: mediaDifficultyVotes.mediaItemId, average: avgValue, count: countVotes })
    .from(mediaDifficultyVotes)
    .where(inArray(mediaDifficultyVotes.mediaItemId, mediaItemIds))
    .groupBy(mediaDifficultyVotes.mediaItemId);
  return new Map(rows.map((r) => [r.mediaItemId, { average: r.average, count: r.count }]));
}
