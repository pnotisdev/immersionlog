import { boolean, index, integer, jsonb, pgTable, smallint, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";

/**
 * The grammar trainer's user state. The grammar itself (points, explanations, sentences)
 * lives in code (src/lib/grammar/decks), so `point_id` and `sentence_id` are stable
 * slugs from there, not foreign keys. A point that's later removed from a deck just
 * stops showing up; its rows stay in the export.
 *
 * Grammar reviews are deliberately not immersion: they never create a session and never
 * award XP (src/lib/progression.ts).
 */

/** One row per point a user has learned. No row means the point is still new (stage 0). */
export const grammarProgress = pgTable(
  "grammar_progress",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    pointId: text("point_id").notNull(),
    // 1-10 while in review, 11 once burned (src/lib/grammar/srs.ts).
    stage: smallint("stage").notNull().default(1),
    // Null once burned.
    nextReviewAt: timestamp("next_review_at", { withTimezone: true }),
    lastReviewedAt: timestamp("last_reviewed_at", { withTimezone: true }),
    // So the next review picks a different sentence (pickSentence).
    lastSentenceId: text("last_sentence_id"),
    timesCorrect: integer("times_correct").notNull().default(0),
    timesWrong: integer("times_wrong").notNull().default(0),
    // Right answers in a row.
    streak: integer("streak").notNull().default(0),
    unlockedAt: timestamp("unlocked_at", { withTimezone: true }).notNull().defaultNow(),
    burned: boolean("burned").notNull().default(false),
  },
  (t) => [
    uniqueIndex("grammar_progress_user_point_idx").on(t.userId, t.pointId),
    // "What's due", the query behind the review queue, the dashboard card and the forecast.
    index("grammar_progress_user_next_review_idx").on(t.userId, t.nextReviewAt),
  ],
);

/** The progress row as it was before a review, kept so a typo can be undone exactly. */
export interface GrammarProgressSnapshot {
  stage: number;
  nextReviewAt: string | null;
  lastReviewedAt: string | null;
  lastSentenceId: string | null;
  streak: number;
  burned: boolean;
}

/** Append-only log of answered reviews: stats, the heatmap, and undo. */
export const grammarReviews = pgTable(
  "grammar_reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    pointId: text("point_id").notNull(),
    sentenceId: text("sentence_id").notNull(),
    correct: boolean("correct").notNull(),
    answerGiven: text("answer_given").notNull(),
    stageBefore: smallint("stage_before").notNull(),
    stageAfter: smallint("stage_after").notNull(),
    // Only needed until the review can no longer be undone; small enough to keep.
    previous: jsonb("previous").$type<GrammarProgressSnapshot>(),
    reviewedAt: timestamp("reviewed_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("grammar_reviews_user_reviewed_idx").on(t.userId, t.reviewedAt)],
);

/** Per-user grammar preferences. No row means the defaults below. */
export const grammarSettings = pgTable("grammar_settings", {
  userId: text("user_id")
    .primaryKey()
    .references(() => user.id, { onDelete: "cascade" }),
  // New points a day through /grammar/learn and "Add to reviews".
  dailyNewLimit: smallint("daily_new_limit").notNull().default(5),
  // Reviews per session; more stay due for the next one.
  reviewBatchSize: smallint("review_batch_size").notNull().default(20),
  showFurigana: boolean("show_furigana").notNull().default(true),
  showTranslation: boolean("show_translation").notNull().default(true),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
