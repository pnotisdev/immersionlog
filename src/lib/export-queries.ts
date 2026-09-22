import "server-only";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { immersionSessions, libraryEntries, mediaItems, milestones } from "@/db/schema";

/**
 * Shared source of truth for both the JSON export (src/app/api/account/export/route.ts)
 * and the CSV exports (src/app/api/account/export/*.csv/route.ts) — one query per
 * category, two output formats.
 */
export async function getExportSessions(userId: string) {
  return db
    .select({
      id: immersionSessions.id,
      mediaItemId: immersionSessions.mediaItemId,
      mediaTitle: mediaItems.title,
      mediaType: immersionSessions.mediaType,
      label: immersionSessions.label,
      startedAt: immersionSessions.startedAt,
      durationSeconds: immersionSessions.durationSeconds,
      amount: immersionSessions.amount,
      amountUnit: immersionSessions.amountUnit,
      notes: immersionSessions.notes,
      createdAt: immersionSessions.createdAt,
      updatedAt: immersionSessions.updatedAt,
    })
    .from(immersionSessions)
    .leftJoin(mediaItems, eq(immersionSessions.mediaItemId, mediaItems.id))
    .where(eq(immersionSessions.userId, userId))
    .orderBy(desc(immersionSessions.startedAt));
}

export async function getExportLibrary(userId: string) {
  return db
    .select({
      mediaItemId: libraryEntries.mediaItemId,
      mediaTitle: mediaItems.title,
      mediaType: mediaItems.type,
      status: libraryEntries.status,
      progress: libraryEntries.progress,
      progressUnit: libraryEntries.progressUnit,
      totalAmount: mediaItems.totalAmount,
      totalUnit: mediaItems.totalUnit,
      rating: libraryEntries.rating,
      notes: libraryEntries.notes,
      startedAt: libraryEntries.startedAt,
      finishedAt: libraryEntries.finishedAt,
      createdAt: libraryEntries.createdAt,
      updatedAt: libraryEntries.updatedAt,
    })
    .from(libraryEntries)
    .innerJoin(mediaItems, eq(libraryEntries.mediaItemId, mediaItems.id))
    .where(eq(libraryEntries.userId, userId));
}

export async function getExportMilestones(userId: string) {
  return db
    .select({
      title: milestones.title,
      mediaTitle: mediaItems.title,
      occurredAt: milestones.occurredAt,
      note: milestones.note,
      progressAmount: milestones.progressAmount,
      progressUnit: milestones.progressUnit,
      createdAt: milestones.createdAt,
    })
    .from(milestones)
    .innerJoin(libraryEntries, eq(milestones.libraryEntryId, libraryEntries.id))
    .innerJoin(mediaItems, eq(libraryEntries.mediaItemId, mediaItems.id))
    .where(eq(milestones.userId, userId))
    .orderBy(desc(milestones.createdAt));
}
