import "server-only";
import { and, desc, eq, gte, lt } from "drizzle-orm";
import { db } from "@/db";
import { libraryEntries, mediaItems, milestones, type Unit } from "@/db/schema";
import { dayKey } from "./dates";

export interface MilestoneRow {
  id: string;
  libraryEntryId: string;
  mediaItemId: string;
  mediaTitle: string;
  mediaCoverUrl: string | null;
  title: string;
  note: string | null;
  occurredAt: string | null;
  progressAmount: number | null;
  progressUnit: Unit | null;
  createdAt: Date;
}

const baseSelect = {
  id: milestones.id,
  libraryEntryId: milestones.libraryEntryId,
  mediaItemId: libraryEntries.mediaItemId,
  mediaTitle: mediaItems.title,
  mediaCoverUrl: mediaItems.coverUrl,
  title: milestones.title,
  note: milestones.note,
  occurredAt: milestones.occurredAt,
  progressAmount: milestones.progressAmount,
  progressUnit: milestones.progressUnit,
  createdAt: milestones.createdAt,
};

function fromMilestones() {
  return db
    .select(baseSelect)
    .from(milestones)
    .innerJoin(libraryEntries, eq(milestones.libraryEntryId, libraryEntries.id))
    .innerJoin(mediaItems, eq(libraryEntries.mediaItemId, mediaItems.id));
}

/** All milestones on one entry, newest first (media page). */
export async function listMilestonesForEntry(libraryEntryId: string): Promise<MilestoneRow[]> {
  return fromMilestones().where(eq(milestones.libraryEntryId, libraryEntryId)).orderBy(desc(milestones.occurredAt), desc(milestones.createdAt));
}

/** Most recent milestones across every entry (profile Highlights). */
export async function listRecentMilestones(userId: string, limit = 6): Promise<MilestoneRow[]> {
  return fromMilestones().where(eq(milestones.userId, userId)).orderBy(desc(milestones.createdAt)).limit(limit);
}

/** Milestones whose occurredAt falls in [from, to) (Immersion Report). Undated milestones never match a range. */
export async function listMilestonesInRange(userId: string, from: Date, to: Date, tz: string): Promise<MilestoneRow[]> {
  return fromMilestones()
    .where(and(eq(milestones.userId, userId), gte(milestones.occurredAt, dayKey(from, tz)), lt(milestones.occurredAt, dayKey(to, tz))))
    .orderBy(desc(milestones.occurredAt));
}
