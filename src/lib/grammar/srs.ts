import { TZDate } from "@date-fns/tz";
import { dayEnd, dayKey, eachDayKey } from "@/lib/dates";
import type { GrammarPoint, GrammarSentence } from "./types";

/**
 * The grammar review schedule. Pure functions only: the server actions
 * (src/actions/grammar.ts) are the one place stages change, and they call these with the
 * stored row, never with a stage or due time from the client.
 *
 * Stage 0 is a point not yet learned. Learning it puts it at stage 1; each right answer
 * moves it up one and waits longer, each wrong one drops it two (never below 1). A right
 * answer at stage 10 burns it: it has stuck, and it leaves the review queue for good.
 */

export const NEW_STAGE = 0;
export const FIRST_STAGE = 1;
export const BURNED_STAGE = 11;

const HOUR = 3_600_000;
const DAY = 24 * HOUR;

/** How long a point waits at each stage before it's due again. */
export const STAGE_INTERVALS: Readonly<Record<number, number>> = {
  1: 4 * HOUR,
  2: 8 * HOUR,
  3: DAY,
  4: 2 * DAY,
  5: 4 * DAY,
  6: 8 * DAY,
  7: 14 * DAY,
  8: 30 * DAY,
  9: 60 * DAY,
  10: 120 * DAY,
};

/** Stages lost on a wrong answer. */
export const WRONG_DROP = 2;

/** The stage after an answer. */
export function nextStage(stage: number, correct: boolean): number {
  if (correct) return Math.min(BURNED_STAGE, Math.max(FIRST_STAGE, stage + 1));
  return Math.max(FIRST_STAGE, Math.min(stage, BURNED_STAGE - 1) - WRONG_DROP);
}

/** When a point at `stage` is next due, counting from `from`. Burned points never are. */
export function nextReviewAt(stage: number, from: Date): Date | null {
  if (stage >= BURNED_STAGE) return null;
  const interval = STAGE_INTERVALS[Math.max(FIRST_STAGE, stage)];
  return new Date(from.getTime() + interval);
}

export type StageGroupId = "new" | "beginner" | "adept" | "seasoned" | "expert" | "burned";

export interface StageGroup {
  id: StageGroupId;
  label: string;
  /** Inclusive. */
  from: number;
  to: number;
}

export const STAGE_GROUPS: StageGroup[] = [
  { id: "new", label: "New", from: 0, to: 0 },
  { id: "beginner", label: "Beginner", from: 1, to: 3 },
  { id: "adept", label: "Adept", from: 4, to: 6 },
  { id: "seasoned", label: "Seasoned", from: 7, to: 8 },
  { id: "expert", label: "Expert", from: 9, to: 10 },
  { id: "burned", label: "Burned", from: 11, to: 11 },
];

export function stageGroup(stage: number): StageGroup {
  return STAGE_GROUPS.find((g) => stage >= g.from && stage <= g.to) ?? STAGE_GROUPS[STAGE_GROUPS.length - 1];
}

/** "Adept 5", "Burned", "New". */
export function stageLabel(stage: number): string {
  const g = stageGroup(stage);
  return g.from === g.to ? g.label : `${g.label} ${stage}`;
}

// ---------------------------------------------------------------------------
// Sentences

/**
 * Round-robin through a point's sentences, starting after the one used last time, so a
 * review never repeats the sentence the learner just saw (unless there is only one).
 */
export function pickSentence(point: Pick<GrammarPoint, "sentences">, lastSentenceId?: string | null): GrammarSentence {
  const { sentences } = point;
  const last = lastSentenceId ? sentences.findIndex((s) => s.id === lastSentenceId) : -1;
  return sentences[(last + 1) % sentences.length];
}

/** How many sentences a lesson shows as examples before the quiz. */
export const EXAMPLE_COUNT = 3;

/** The examples a lesson shows, and the sentence its quiz asks: one the learner hasn't just read. */
export function lessonSentences(point: Pick<GrammarPoint, "sentences">): { examples: GrammarSentence[]; quiz: GrammarSentence } {
  const n = point.sentences.length;
  const shown = Math.min(EXAMPLE_COUNT, Math.max(1, n - 1));
  return { examples: point.sentences.slice(0, shown), quiz: point.sentences[shown % n] };
}

/** A missed point comes back this many cards later in the same session, with another sentence. */
export const RETRY_GAP = 3;

/** Where in a session queue to put a missed card again: a few cards on, or at the end if the queue is shorter. */
export function retryPosition(queueLength: number, current: number): number {
  return Math.min(queueLength, current + 1 + RETRY_GAP);
}

// ---------------------------------------------------------------------------
// Counting what's due. All of these take the stored due times, so the dashboard, the
// review page and the forecast can never disagree.

export interface Scheduled {
  nextReviewAt: Date | null;
}

/** Points due at or before `until` (now, for "due now"). */
export function dueCount(items: Scheduled[], until: Date): number {
  const t = until.getTime();
  return items.filter((i) => i.nextReviewAt && i.nextReviewAt.getTime() <= t).length;
}

/** Points due before the end of today, in the user's timezone: what "N reviews today" means. */
export function dueTodayCount(items: Scheduled[], now: Date, tz: string): number {
  return dueCount(items, new Date(dayEnd(dayKey(now, tz), tz).getTime() - 1));
}

export interface ForecastDay {
  /** "YYYY-MM-DD" in the user's timezone. */
  key: string;
  /** Becoming due that day. Today includes everything already overdue. */
  count: number;
  /** Due by the end of that day, if nothing is reviewed in between. */
  cumulative: number;
}

/** Reviews per calendar day for the next `days` days, starting today, in the user's timezone. */
export function forecast(items: Scheduled[], days: number, now: Date, tz: string): ForecastDay[] {
  const keys = eachDayKey(now, new Date(now.getTime() + days * DAY), tz).slice(0, days);
  const counts = new Map(keys.map((k) => [k, 0]));
  const today = keys[0];
  for (const i of items) {
    if (!i.nextReviewAt) continue;
    const k = i.nextReviewAt.getTime() <= now.getTime() ? today : dayKey(i.nextReviewAt, tz);
    if (counts.has(k)) counts.set(k, counts.get(k)! + 1);
  }
  let running = 0;
  return keys.map((key) => {
    running += counts.get(key)!;
    return { key, count: counts.get(key)!, cumulative: running };
  });
}

export interface ForecastHour {
  /** Start of the hour, as a UTC instant. */
  start: Date;
  /** Hour of day (0-23) in the user's timezone, for the axis. */
  hour: number;
  count: number;
}

/**
 * Reviews becoming due in each of the next `hours` hours, the first bucket being the rest
 * of the current hour. Overdue reviews aren't in it: they're "due now".
 */
export function forecastHours(items: Scheduled[], hours: number, now: Date, tz: string): ForecastHour[] {
  const top = new TZDate(now, tz);
  top.setMinutes(0, 0, 0);
  const first = top.getTime();
  const buckets: ForecastHour[] = Array.from({ length: hours }, (_, i) => {
    const start = new Date(first + i * HOUR);
    return { start, hour: new TZDate(start, tz).getHours(), count: 0 };
  });
  for (const i of items) {
    const t = i.nextReviewAt?.getTime();
    if (t === undefined || t <= now.getTime()) continue;
    const idx = Math.floor((t - first) / HOUR);
    if (idx < hours) buckets[idx].count++;
  }
  return buckets;
}

/** The soonest upcoming review after `now`, if any. */
export function nextDue(items: Scheduled[], now: Date): Date | null {
  let best: number | null = null;
  for (const i of items) {
    const t = i.nextReviewAt?.getTime();
    if (t !== undefined && t > now.getTime() && (best === null || t < best)) best = t;
  }
  return best === null ? null : new Date(best);
}
