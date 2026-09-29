import { boolean, index, integer, pgTable, smallint, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";

/**
 * The kanji trainer's user state. The kanji themselves (meanings, readings) live in code
 * (src/lib/kanji), so `kanji` is the character, not a foreign key. It reuses the grammar
 * schedule (src/lib/grammar/srs.ts): stages 1-10 with growing gaps, 11 once burned.
 * Like grammar, kanji reviews are study, not immersion: no sessions, no XP.
 */

/** One row per kanji a user has learned. No row means it's still new. */
export const kanjiProgress = pgTable(
  "kanji_progress",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    kanji: text("kanji").notNull(),
    stage: smallint("stage").notNull().default(1),
    // Null once burned.
    nextReviewAt: timestamp("next_review_at", { withTimezone: true }),
    lastReviewedAt: timestamp("last_reviewed_at", { withTimezone: true }),
    timesCorrect: integer("times_correct").notNull().default(0),
    timesWrong: integer("times_wrong").notNull().default(0),
    streak: integer("streak").notNull().default(0),
    unlockedAt: timestamp("unlocked_at", { withTimezone: true }).notNull().defaultNow(),
    burned: boolean("burned").notNull().default(false),
  },
  (t) => [
    uniqueIndex("kanji_progress_user_kanji_idx").on(t.userId, t.kanji),
    index("kanji_progress_user_next_review_idx").on(t.userId, t.nextReviewAt),
  ],
);

/** Append-only log of answered reviews. Which prompts were missed says whether it's the meaning or a reading type that isn't sticking. */
export const kanjiReviews = pgTable(
  "kanji_reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    kanji: text("kanji").notNull(),
    correct: boolean("correct").notNull(),
    // Null where the kanji has no such prompt (no on or no kun reading).
    meaningOk: boolean("meaning_ok"),
    onOk: boolean("on_ok"),
    kunOk: boolean("kun_ok"),
    stageBefore: smallint("stage_before").notNull(),
    stageAfter: smallint("stage_after").notNull(),
    reviewedAt: timestamp("reviewed_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("kanji_reviews_user_reviewed_idx").on(t.userId, t.reviewedAt)],
);

/** Per-user kanji preferences. No row means the defaults. */
export const kanjiSettings = pgTable("kanji_settings", {
  userId: text("user_id")
    .primaryKey()
    .references(() => user.id, { onDelete: "cascade" }),
  dailyNewLimit: smallint("daily_new_limit").notNull().default(10),
  reviewBatchSize: smallint("review_batch_size").notNull().default(30),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
