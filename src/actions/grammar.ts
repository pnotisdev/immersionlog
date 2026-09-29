"use server";

import { and, desc, eq, gt } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { grammarProgress, grammarReviews, grammarSettings, type GrammarProgressSnapshot } from "@/db/schema";
import { checkAnswer } from "@/lib/grammar/check";
import { getPoint } from "@/lib/grammar/decks";
import { GRAMMAR_LIMITS, UNDO_WINDOW_MS } from "@/lib/grammar/settings";
import { BURNED_STAGE, FIRST_STAGE, lessonSentences, nextReviewAt, nextStage } from "@/lib/grammar/srs";
import { countUnlockedToday, getGrammarSettings, getPointProgress } from "@/lib/grammar-queries";
import { requireUser } from "@/lib/session";
import type { ActionResult } from "./types";

/**
 * Grammar SRS actions. The client only ever says which point, which sentence and what
 * was typed: stages, due times and whether the answer was right are all worked out here
 * from the stored row and the deck, so nothing about the schedule can be forged.
 *
 * None of these call revalidatePath. Every page that shows grammar state is rendered per
 * request anyway, and revalidating from an action re-renders the page it was called
 * from: mid-session that would swap a finished lesson for the "limit reached" state, or
 * rebuild a review queue under the learner. Callers that want fresh data (the settings
 * form, the point page's controls) call router.refresh() themselves.
 */

const pointId = z
  .string()
  .max(100)
  .refine((id) => !!getPoint(id), "Unknown grammar point");

// Clock skew between a review page loading and the answer arriving shouldn't make a due card "not due".
const DUE_GRACE_MS = 60_000;

const unlockSchema = z.array(pointId).min(1).max(GRAMMAR_LIMITS.dailyNewLimit.max);

/**
 * Learned points enter the review schedule at stage 1, first due in four hours. Capped
 * by the daily new-point limit, counted in the user's timezone; points already learned
 * are skipped rather than reset.
 */
export async function unlockPoints(pointIds: string[]): Promise<ActionResult<{ unlocked: string[] }>> {
  const user = await requireUser();
  const parsed = unlockSchema.safeParse(pointIds);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  const ids = [...new Set(parsed.data)];

  const now = new Date();
  const [settings, today, existing] = await Promise.all([
    getGrammarSettings(user.id),
    countUnlockedToday(user.id, user.timezone ?? "UTC", now),
    db.select({ pointId: grammarProgress.pointId }).from(grammarProgress).where(eq(grammarProgress.userId, user.id)),
  ]);
  const learned = new Set(existing.map((r) => r.pointId));
  const room = settings.dailyNewLimit - today;
  const fresh = ids.filter((id) => !learned.has(id));
  if (fresh.length === 0) return { ok: true, data: { unlocked: [] } };
  if (room <= 0) {
    return {
      ok: false,
      error: `That's today's ${settings.dailyNewLimit} new point${settings.dailyNewLimit === 1 ? "" : "s"}. Raise the daily limit in Grammar settings, or come back tomorrow.`,
    };
  }

  const take = fresh.slice(0, room);
  const next = nextReviewAt(FIRST_STAGE, now);
  const rows = await db
    .insert(grammarProgress)
    .values(
      take.map((id) => ({
        userId: user.id,
        pointId: id,
        stage: FIRST_STAGE,
        nextReviewAt: next,
        unlockedAt: now,
        // The lesson's quiz sentence, so the first review asks a different one.
        lastSentenceId: lessonSentences(getPoint(id)!).quiz.id,
      })),
    )
    .onConflictDoNothing()
    .returning({ pointId: grammarProgress.pointId });

  return { ok: true, data: { unlocked: rows.map((r) => r.pointId) } };
}

const reviewSchema = z.object({
  pointId,
  sentenceId: z.string().max(120),
  answer: z.string().max(200),
});

export type ReviewInput = z.infer<typeof reviewSchema>;

export type ReviewOutcome =
  | { result: "nearMiss"; nudge: string }
  | {
      result: "correct" | "wrong";
      reviewId: string;
      stageBefore: number;
      stageAfter: number;
      /** ISO; null once burned. */
      nextReviewAt: string | null;
    };

/**
 * Grade one review. A near miss is returned without touching anything, so the learner
 * can try again. A right or wrong answer moves the stage, reschedules the point and is
 * logged, all in one transaction guarded on the row still being the one that was due,
 * so a double submit can't count twice.
 */
export async function submitReview(input: ReviewInput): Promise<ActionResult<ReviewOutcome>> {
  const user = await requireUser();
  const parsed = reviewSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  const { answer } = parsed.data;

  const point = getPoint(parsed.data.pointId)!;
  const sentence = point.sentences.find((s) => s.id === parsed.data.sentenceId);
  if (!sentence) return { ok: false, error: "Unknown sentence" };

  const now = new Date();
  const row = await getPointProgress(user.id, point.id);
  if (!row) return { ok: false, error: "You haven't learned this point yet" };
  if (row.burned || !row.nextReviewAt || row.nextReviewAt.getTime() > now.getTime() + DUE_GRACE_MS) {
    return { ok: false, error: "This point isn't due for review yet" };
  }

  const check = checkAnswer(sentence, answer);
  if (check.result === "nearMiss") return { ok: true, data: check };

  const correct = check.result === "correct";
  const stageAfter = nextStage(row.stage, correct);
  const next = nextReviewAt(stageAfter, now);
  const previous: GrammarProgressSnapshot = {
    stage: row.stage,
    nextReviewAt: row.nextReviewAt.toISOString(),
    lastReviewedAt: row.lastReviewedAt?.toISOString() ?? null,
    lastSentenceId: row.lastSentenceId,
    streak: row.streak,
    burned: row.burned,
  };

  const reviewId = await db.transaction(async (tx) => {
    const updated = await tx
      .update(grammarProgress)
      .set({
        stage: stageAfter,
        nextReviewAt: next,
        lastReviewedAt: now,
        lastSentenceId: sentence.id,
        timesCorrect: row.timesCorrect + (correct ? 1 : 0),
        timesWrong: row.timesWrong + (correct ? 0 : 1),
        streak: correct ? row.streak + 1 : 0,
        burned: stageAfter >= BURNED_STAGE,
      })
      .where(and(eq(grammarProgress.id, row.id), eq(grammarProgress.stage, row.stage), eq(grammarProgress.nextReviewAt, row.nextReviewAt!)))
      .returning({ id: grammarProgress.id });
    if (updated.length === 0) return null;
    const [log] = await tx
      .insert(grammarReviews)
      .values({
        userId: user.id,
        pointId: point.id,
        sentenceId: sentence.id,
        correct,
        answerGiven: answer.trim(),
        stageBefore: row.stage,
        stageAfter,
        previous,
        reviewedAt: now,
      })
      .returning({ id: grammarReviews.id });
    return log.id;
  });
  if (!reviewId) return { ok: false, error: "That review was already answered" };

  return {
    ok: true,
    data: { result: check.result, reviewId, stageBefore: row.stage, stageAfter, nextReviewAt: next?.toISOString() ?? null },
  };
}

/**
 * Take back a wrong answer that was a typo: the point goes back exactly as it was and
 * the review is removed from the log, so it counts nowhere. Only the latest review of
 * a point, only a wrong one, and only for a few minutes.
 */
export async function undoLastReview(reviewId: string): Promise<ActionResult> {
  const user = await requireUser();
  if (!z.uuid().safeParse(reviewId).success) return { ok: false, error: "Unknown review" };

  const review = await db.query.grammarReviews.findFirst({
    where: and(eq(grammarReviews.id, reviewId), eq(grammarReviews.userId, user.id)),
  });
  if (!review || !review.previous) return { ok: false, error: "Unknown review" };
  if (review.correct) return { ok: false, error: "Only a wrong answer can be undone" };
  if (Date.now() - review.reviewedAt.getTime() > UNDO_WINDOW_MS) return { ok: false, error: "Too late to undo that one" };

  const [later] = await db
    .select({ id: grammarReviews.id })
    .from(grammarReviews)
    .where(and(eq(grammarReviews.userId, user.id), eq(grammarReviews.pointId, review.pointId), gt(grammarReviews.reviewedAt, review.reviewedAt)))
    .orderBy(desc(grammarReviews.reviewedAt))
    .limit(1);
  if (later) return { ok: false, error: "That point has been reviewed again since" };

  const prev = review.previous;
  const restored = await db.transaction(async (tx) => {
    const row = await tx.query.grammarProgress.findFirst({
      where: and(eq(grammarProgress.userId, user.id), eq(grammarProgress.pointId, review.pointId)),
    });
    // Only if nothing else (a reset, another review) has touched it since.
    if (!row || row.stage !== review.stageAfter || row.lastReviewedAt?.getTime() !== review.reviewedAt.getTime()) return false;
    await tx
      .update(grammarProgress)
      .set({
        stage: prev.stage,
        nextReviewAt: prev.nextReviewAt ? new Date(prev.nextReviewAt) : null,
        lastReviewedAt: prev.lastReviewedAt ? new Date(prev.lastReviewedAt) : null,
        lastSentenceId: prev.lastSentenceId,
        streak: prev.streak,
        burned: prev.burned,
        timesWrong: Math.max(0, row.timesWrong - 1),
      })
      .where(eq(grammarProgress.id, row.id));
    await tx.delete(grammarReviews).where(eq(grammarReviews.id, review.id));
    return true;
  });
  if (!restored) return { ok: false, error: "That point has changed since" };
  return { ok: true, data: undefined };
}

/** Back to new: the point leaves the review schedule and returns to the learn queue. The review log is kept. */
export async function resetPoint(id: string): Promise<ActionResult> {
  const user = await requireUser();
  const parsed = pointId.safeParse(id);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  await db.delete(grammarProgress).where(and(eq(grammarProgress.userId, user.id), eq(grammarProgress.pointId, parsed.data)));
  return { ok: true, data: undefined };
}

const int = (bounds: { min: number; max: number }) => z.coerce.number().int().min(bounds.min).max(bounds.max);

const settingsSchema = z.object({
  dailyNewLimit: int(GRAMMAR_LIMITS.dailyNewLimit),
  reviewBatchSize: int(GRAMMAR_LIMITS.reviewBatchSize),
  showFurigana: z.boolean(),
  showTranslation: z.boolean(),
});

export type GrammarSettingsInput = z.input<typeof settingsSchema>;

export async function updateGrammarSettings(input: GrammarSettingsInput): Promise<ActionResult> {
  const user = await requireUser();
  const parsed = settingsSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  const values = { ...parsed.data, updatedAt: new Date() };
  await db
    .insert(grammarSettings)
    .values({ userId: user.id, ...values })
    .onConflictDoUpdate({ target: grammarSettings.userId, set: values });
  return { ok: true, data: undefined };
}
