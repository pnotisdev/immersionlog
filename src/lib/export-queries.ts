import "server-only";
import { asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { grammarProgress, grammarReviews, grammarSettings, immersionSessions, libraryEntries, mediaItems, milestones } from "@/db/schema";

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

/**
 * Grammar trainer state: settings, a row per learned point, and every answered review.
 * The reviews' `previous` snapshot is internal bookkeeping for undo, so it's left out.
 */
export async function getExportGrammar(userId: string) {
  const [settings, progress, reviews] = await Promise.all([
    db.query.grammarSettings.findFirst({ where: eq(grammarSettings.userId, userId), columns: { userId: false } }),
    db
      .select({
        pointId: grammarProgress.pointId,
        stage: grammarProgress.stage,
        nextReviewAt: grammarProgress.nextReviewAt,
        lastReviewedAt: grammarProgress.lastReviewedAt,
        timesCorrect: grammarProgress.timesCorrect,
        timesWrong: grammarProgress.timesWrong,
        streak: grammarProgress.streak,
        unlockedAt: grammarProgress.unlockedAt,
        burned: grammarProgress.burned,
      })
      .from(grammarProgress)
      .where(eq(grammarProgress.userId, userId))
      .orderBy(asc(grammarProgress.unlockedAt)),
    db
      .select({
        pointId: grammarReviews.pointId,
        sentenceId: grammarReviews.sentenceId,
        correct: grammarReviews.correct,
        answerGiven: grammarReviews.answerGiven,
        stageBefore: grammarReviews.stageBefore,
        stageAfter: grammarReviews.stageAfter,
        reviewedAt: grammarReviews.reviewedAt,
      })
      .from(grammarReviews)
      .where(eq(grammarReviews.userId, userId))
      .orderBy(asc(grammarReviews.reviewedAt)),
  ]);
  return { settings: settings ?? null, progress, reviews };
}
