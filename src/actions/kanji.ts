"use server";

import { and, eq, lte } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { kanjiProgress, kanjiReviews, kanjiSettings } from "@/db/schema";
import { BURNED_STAGE, FIRST_STAGE, nextReviewAt, nextStage } from "@/lib/grammar/srs";
import { getKanji, promptsFor } from "@/lib/kanji";
import { gradeAll } from "@/lib/kanji/check";
import { KANJI_LIMITS } from "@/lib/kanji/settings";
import { countKanjiUnlockedToday, getKanjiRow, getKanjiSettings } from "@/lib/kanji-queries";
import { requireUser } from "@/lib/session";
import type { ActionResult } from "./types";

/**
 * Kanji SRS actions. As with grammar (src/actions/grammar.ts), the client only says which
 * kanji and what was typed: whether each answer was right, the stage and the due time are
 * all worked out here. No revalidatePath, for the same reason: a session mid-flight must not be re-rendered under the learner.
 */

const kanjiChar = z
  .string()
  .max(4)
  .refine((c) => !!getKanji(c), "Unknown kanji");

// Clock skew between a review page loading and the answer arriving shouldn't make a due card "not due".
const DUE_GRACE_MS = 60_000;

const unlockSchema = z.array(kanjiChar).min(1).max(KANJI_LIMITS.dailyNewLimit.max);

/** Learned kanji enter the schedule at stage 1, first due in four hours. Capped by the daily limit in the user's timezone. */
export async function unlockKanji(chars: string[]): Promise<ActionResult<{ unlocked: string[] }>> {
  const user = await requireUser();
  const parsed = unlockSchema.safeParse(chars);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  const ids = [...new Set(parsed.data)];

  const now = new Date();
  const [settings, today, existing] = await Promise.all([
    getKanjiSettings(user.id),
    countKanjiUnlockedToday(user.id, user.timezone ?? "UTC", now),
    db.select({ kanji: kanjiProgress.kanji }).from(kanjiProgress).where(eq(kanjiProgress.userId, user.id)),
  ]);
  const learned = new Set(existing.map((r) => r.kanji));
  const room = settings.dailyNewLimit - today;
  const fresh = ids.filter((c) => !learned.has(c));
  if (fresh.length === 0) return { ok: true, data: { unlocked: [] } };
  if (room <= 0) {
    return {
      ok: false,
      error: `That's today's ${settings.dailyNewLimit} new kanji. Raise the daily limit in Kanji settings, or come back tomorrow.`,
    };
  }

  const next = nextReviewAt(FIRST_STAGE, now);
  const rows = await db
    .insert(kanjiProgress)
    .values(fresh.slice(0, room).map((kanji) => ({ userId: user.id, kanji, stage: FIRST_STAGE, nextReviewAt: next, unlockedAt: now })))
    .onConflictDoNothing()
    .returning({ kanji: kanjiProgress.kanji });
  return { ok: true, data: { unlocked: rows.map((r) => r.kanji) } };
}

const reviewSchema = z.object({
  kanji: kanjiChar,
  answers: z.object({ meaning: z.string().max(200).optional(), on: z.string().max(200).optional(), kun: z.string().max(200).optional() }),
});

export type KanjiReviewInput = z.infer<typeof reviewSchema>;

export interface KanjiReviewOutcome {
  correct: boolean;
  /** Which prompts were right, so the session can say what to work on. */
  each: Record<string, boolean>;
  stageBefore: number;
  stageAfter: number;
  /** ISO; null once burned. */
  nextReviewAt: string | null;
}

/**
 * Grade one kanji: right only if every prompt it has (meaning, on'yomi, kun'yomi) is right.
 * The stage moves, the kanji is rescheduled and the review is logged in one transaction guarded
 * on the row still being due, so a double submit can't count twice.
 */
export async function submitKanjiReview(input: KanjiReviewInput): Promise<ActionResult<KanjiReviewOutcome>> {
  const user = await requireUser();
  const parsed = reviewSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };

  const k = getKanji(parsed.data.kanji)!;
  const now = new Date();
  const row = await getKanjiRow(user.id, k.c);
  if (!row) return { ok: false, error: "You haven't learned this kanji yet" };
  if (row.burned || !row.nextReviewAt || row.nextReviewAt.getTime() > now.getTime() + DUE_GRACE_MS) {
    return { ok: false, error: "This kanji isn't due for review yet" };
  }

  const graded = gradeAll(k, parsed.data.answers, promptsFor(k));
  const stageAfter = nextStage(row.stage, graded.correct);
  const next = nextReviewAt(stageAfter, now);

  const ok = await db.transaction(async (tx) => {
    const updated = await tx
      .update(kanjiProgress)
      .set({
        stage: stageAfter,
        nextReviewAt: next,
        lastReviewedAt: now,
        timesCorrect: row.timesCorrect + (graded.correct ? 1 : 0),
        timesWrong: row.timesWrong + (graded.correct ? 0 : 1),
        streak: graded.correct ? row.streak + 1 : 0,
        burned: stageAfter >= BURNED_STAGE,
      })
      .where(and(eq(kanjiProgress.id, row.id), eq(kanjiProgress.stage, row.stage), lte(kanjiProgress.nextReviewAt, new Date(now.getTime() + DUE_GRACE_MS))))
      .returning({ id: kanjiProgress.id });
    if (updated.length === 0) return false;
    await tx.insert(kanjiReviews).values({
      userId: user.id,
      kanji: k.c,
      correct: graded.correct,
      meaningOk: graded.each.meaning ?? null,
      onOk: graded.each.on ?? null,
      kunOk: graded.each.kun ?? null,
      stageBefore: row.stage,
      stageAfter,
      reviewedAt: now,
    });
    return true;
  });
  if (!ok) return { ok: false, error: "That review was already answered" };

  return {
    ok: true,
    data: { correct: graded.correct, each: graded.each, stageBefore: row.stage, stageAfter, nextReviewAt: next?.toISOString() ?? null },
  };
}

const int = (b: { min: number; max: number }) => z.coerce.number().int().min(b.min).max(b.max);
const settingsSchema = z.object({ dailyNewLimit: int(KANJI_LIMITS.dailyNewLimit), reviewBatchSize: int(KANJI_LIMITS.reviewBatchSize) });

export async function updateKanjiSettings(input: z.input<typeof settingsSchema>): Promise<ActionResult> {
  const user = await requireUser();
  const parsed = settingsSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  const values = { ...parsed.data, updatedAt: new Date() };
  await db.insert(kanjiSettings).values({ userId: user.id, ...values }).onConflictDoUpdate({ target: kanjiSettings.userId, set: values });
  return { ok: true, data: undefined };
}
