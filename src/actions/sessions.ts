"use server";

import { and, eq, gte, lt, ne, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { MEDIA_TYPES, type MediaType, UNITS, activeTimers, immersionSessions, libraryEntries, mediaItems } from "@/db/schema";
import { dayEnd, dayKey, dayStart } from "@/lib/dates";
import { formatDate, formatDuration } from "@/lib/format";
import { importRateLimit } from "@/lib/import-rate-limit";
import { MEDIA_TYPE_META } from "@/lib/media";
import { upsertExternalItem } from "@/lib/media-upsert";
import { requireUser } from "@/lib/session";
import { findImporter, importFromUrl } from "@/lib/sources";
import type { ActionResult } from "./types";

const optionalInt = z.coerce.number().int().min(0).nullable().optional().or(z.literal(""));
const optionalUnit = z.enum(UNITS).nullable().optional().or(z.literal(""));

const sessionInputSchema = z.object({
  mediaItemId: z.string().uuid().nullable().optional().or(z.literal("")),
  mediaType: z.enum(MEDIA_TYPES),
  label: z.string().trim().max(200).nullable().optional().or(z.literal("")),
  /** ISO timestamp (UTC instant). */
  startedAt: z.string().datetime({ offset: true }),
  durationSeconds: z.coerce.number().int().min(1).max(24 * 3600),
  amount: optionalInt,
  amountUnit: optionalUnit,
  notes: z.string().trim().max(5000).nullable().optional().or(z.literal("")),
});
export type SessionInput = z.infer<typeof sessionInputSchema>;

function normalize(v: SessionInput) {
  return {
    mediaItemId: v.mediaItemId || null,
    mediaType: v.mediaType,
    label: v.label || null,
    startedAt: new Date(v.startedAt),
    durationSeconds: v.durationSeconds,
    amount: v.amount === "" || v.amount == null ? null : v.amount,
    amountUnit: v.amountUnit || null,
    notes: v.notes || null,
  };
}

// A session may end a few minutes "in the future" to absorb clock skew, never more.
const FUTURE_SLACK_MS = 5 * 60_000;
const DAY_SECONDS = 24 * 3600;
const EARLIEST = new Date("2000-01-01T00:00:00Z");

/**
 * Rankings, streaks and goals all sum durations, so a session has to be something that
 * could have happened: not in the future, and not pushing one calendar day (in the
 * user's timezone) past 24 hours. `excludeId` is the session being edited.
 */
async function checkTimes(userId: string, tz: string, startedAt: Date, durationSeconds: number, excludeId?: string): Promise<string | null> {
  if (startedAt < EARLIEST) return "That date is too far back.";
  if (startedAt.getTime() + durationSeconds * 1000 > Date.now() + FUTURE_SLACK_MS) {
    return "That session ends in the future. Check the start time and duration.";
  }
  const key = dayKey(startedAt, tz);
  const [row] = await db
    .select({ total: sql<number>`coalesce(sum(${immersionSessions.durationSeconds}), 0)::int` })
    .from(immersionSessions)
    .where(
      and(
        eq(immersionSessions.userId, userId),
        gte(immersionSessions.startedAt, dayStart(key, tz)),
        lt(immersionSessions.startedAt, dayEnd(key, tz)),
        excludeId ? ne(immersionSessions.id, excludeId) : undefined,
      ),
    );
  const logged = row?.total ?? 0;
  if (logged + durationSeconds > DAY_SECONDS) {
    const left = Math.max(0, DAY_SECONDS - logged);
    return `You've already logged ${formatDuration(logged)} on ${formatDate(key)}; a day only has 24 hours${left >= 60 ? ` (${formatDuration(left)} left)` : ""}.`;
  }
  return null;
}

/**
 * Items a user may log against: any shared (external) item, their own manual items, and
 * anything already in their library. Someone else's manual item is private to them.
 */
async function canUseItem(userId: string, mediaItemId: string): Promise<typeof mediaItems.$inferSelect | null> {
  const item = await db.query.mediaItems.findFirst({ where: eq(mediaItems.id, mediaItemId) });
  if (!item) return null;
  if (item.source !== "manual" || item.createdBy === userId) return item;
  const entry = await db.query.libraryEntries.findFirst({
    where: and(eq(libraryEntries.userId, userId), eq(libraryEntries.mediaItemId, mediaItemId)),
    columns: { id: true },
  });
  return entry ? item : null;
}

/**
 * A supported link typed as the label (pasted, then saved without pressing "Read link")
 * becomes the real item instead of a URL label. Anything that fails keeps the label.
 */
async function resolveLinkLabel<T extends { mediaItemId: string | null; mediaType: MediaType; label: string | null }>(
  userId: string,
  v: T,
): Promise<T> {
  if (v.mediaItemId || !v.label || !findImporter(v.label)) return v;
  if (!importRateLimit(userId).allowed) return v;
  try {
    const { result } = await importFromUrl(v.label, { hintType: v.mediaType });
    const item = await upsertExternalItem(db, result, userId);
    return { ...v, mediaItemId: item.id, mediaType: result.mediaType, label: null };
  } catch (err) {
    console.warn("[sessions] link label not resolved:", v.label.slice(0, 200), err instanceof Error ? err.message : err);
    return v;
  }
}

/** If the session references an item the user owns, make sure there's a library entry and bump its progress. */
async function applyProgress(userId: string, mediaItemId: string | null, amountDelta: number, unit: string | null) {
  if (!mediaItemId) return;
  const item = await db.query.mediaItems.findFirst({ where: eq(mediaItems.id, mediaItemId) });
  if (!item) return;

  const today = new Date().toISOString().slice(0, 10);
  // Logging time against something implies you're actively consuming it.
  await db
    .insert(libraryEntries)
    .values({
      userId,
      mediaItemId,
      status: "active",
      progressUnit: item.totalUnit ?? MEDIA_TYPE_META[item.type].defaultUnit,
      startedAt: today,
    })
    .onConflictDoNothing({ target: [libraryEntries.userId, libraryEntries.mediaItemId] });

  const entry = await db.query.libraryEntries.findFirst({
    where: and(eq(libraryEntries.userId, userId), eq(libraryEntries.mediaItemId, mediaItemId)),
  });
  if (!entry) return;

  const set: Partial<typeof libraryEntries.$inferInsert> = { updatedAt: new Date() };
  if (entry.status === "planning") {
    set.status = "active";
    set.startedAt = entry.startedAt ?? today;
  }
  if (amountDelta !== 0 && unit && unit === entry.progressUnit) {
    set.progress = Math.max(0, entry.progress + amountDelta);
    // Reaching the known total caps progress and auto-finishes the entry.
    if (item.totalAmount && item.totalUnit === unit && set.progress >= item.totalAmount) {
      set.progress = item.totalAmount;
      if (entry.status !== "finished") {
        set.status = "finished";
        set.finishedAt = entry.finishedAt ?? today;
      }
    }
  }
  await db.update(libraryEntries).set(set).where(eq(libraryEntries.id, entry.id));
}

export async function createSession(input: SessionInput): Promise<ActionResult<{ id: string }>> {
  const user = await requireUser();
  const parsed = sessionInputSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  const v = await resolveLinkLabel(user.id, normalize(parsed.data));
  if (v.mediaItemId && !(await canUseItem(user.id, v.mediaItemId))) return { ok: false, error: "Media item not found" };
  const timeError = await checkTimes(user.id, user.timezone || "UTC", v.startedAt, v.durationSeconds);
  if (timeError) return { ok: false, error: timeError };

  const [row] = await db
    .insert(immersionSessions)
    .values({ userId: user.id, ...v })
    .returning({ id: immersionSessions.id });

  await applyProgress(user.id, v.mediaItemId, v.amount ?? 0, v.amountUnit);
  revalidatePath("/", "layout");
  return { ok: true, data: { id: row.id } };
}

export async function updateSession(id: string, input: SessionInput): Promise<ActionResult> {
  const user = await requireUser();
  const parsed = sessionInputSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  const v = await resolveLinkLabel(user.id, normalize(parsed.data));

  const existing = await db.query.immersionSessions.findFirst({
    where: and(eq(immersionSessions.id, id), eq(immersionSessions.userId, user.id)),
  });
  if (!existing) return { ok: false, error: "Session not found" };
  if (v.mediaItemId && v.mediaItemId !== existing.mediaItemId && !(await canUseItem(user.id, v.mediaItemId))) {
    return { ok: false, error: "Media item not found" };
  }
  const timeError = await checkTimes(user.id, user.timezone || "UTC", v.startedAt, v.durationSeconds, id);
  if (timeError) return { ok: false, error: timeError };

  await db
    .update(immersionSessions)
    .set({ ...v, updatedAt: new Date() })
    .where(eq(immersionSessions.id, id));

  // Reconcile progress: undo the old contribution, apply the new one.
  if (existing.mediaItemId === v.mediaItemId) {
    const oldAmt = existing.amountUnit === v.amountUnit ? (existing.amount ?? 0) : 0;
    await applyProgress(user.id, v.mediaItemId, (v.amount ?? 0) - oldAmt, v.amountUnit);
  } else {
    await applyProgress(user.id, existing.mediaItemId, -(existing.amount ?? 0), existing.amountUnit);
    await applyProgress(user.id, v.mediaItemId, v.amount ?? 0, v.amountUnit);
  }
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}

export async function deleteSession(id: string): Promise<ActionResult> {
  const user = await requireUser();
  const existing = await db.query.immersionSessions.findFirst({
    where: and(eq(immersionSessions.id, id), eq(immersionSessions.userId, user.id)),
  });
  if (!existing) return { ok: false, error: "Session not found" };

  await db.delete(immersionSessions).where(eq(immersionSessions.id, id));
  if (existing.mediaItemId && existing.amount) {
    // Only roll back progress; don't touch status.
    await db
      .update(libraryEntries)
      .set({ progress: sql`greatest(0, ${libraryEntries.progress} - ${existing.amount})` })
      .where(
        and(
          eq(libraryEntries.userId, user.id),
          eq(libraryEntries.mediaItemId, existing.mediaItemId),
          existing.amountUnit ? eq(libraryEntries.progressUnit, existing.amountUnit) : sql`false`,
        ),
      );
  }
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}

// --- Timer ---

const startTimerSchema = z.object({
  mediaItemId: z.string().uuid().nullable().optional().or(z.literal("")),
  mediaType: z.enum(MEDIA_TYPES),
  label: z.string().trim().max(200).nullable().optional().or(z.literal("")),
});

export async function startTimer(input: z.infer<typeof startTimerSchema>): Promise<ActionResult> {
  const user = await requireUser();
  const parsed = startTimerSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Invalid input" };
  const v = await resolveLinkLabel(user.id, {
    mediaItemId: parsed.data.mediaItemId || null,
    mediaType: parsed.data.mediaType,
    label: parsed.data.label || null,
  });

  let mediaType = v.mediaType;
  const mediaItemId = v.mediaItemId;
  if (mediaItemId) {
    const item = await canUseItem(user.id, mediaItemId);
    if (!item) return { ok: false, error: "Media item not found" };
    mediaType = item.type;
  }

  await db
    .insert(activeTimers)
    .values({ userId: user.id, mediaItemId, mediaType, label: v.label || null, startedAt: new Date() })
    .onConflictDoUpdate({
      target: activeTimers.userId,
      set: { mediaItemId, mediaType, label: v.label || null, startedAt: new Date(), pausedAt: null, pausedSeconds: 0 },
    });
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}

/** Seconds actually timed: wall time since start, minus every pause (including a current one). */
function timedSeconds(timer: typeof activeTimers.$inferSelect, now = Date.now()): number {
  const end = timer.pausedAt ? timer.pausedAt.getTime() : now;
  return Math.max(0, Math.round((end - timer.startedAt.getTime()) / 1000) - timer.pausedSeconds);
}

export async function pauseTimer(): Promise<ActionResult> {
  const user = await requireUser();
  const rows = await db
    .update(activeTimers)
    .set({ pausedAt: new Date() })
    .where(and(eq(activeTimers.userId, user.id), sql`${activeTimers.pausedAt} is null`))
    .returning({ userId: activeTimers.userId });
  if (!rows.length) return { ok: false, error: "No running timer" };
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}

export async function resumeTimer(): Promise<ActionResult> {
  const user = await requireUser();
  // Computed in SQL so the pause length uses the same clock that stamped paused_at.
  const rows = await db
    .update(activeTimers)
    .set({
      pausedSeconds: sql`${activeTimers.pausedSeconds} + greatest(0, round(extract(epoch from (now() - ${activeTimers.pausedAt}))))::int`,
      pausedAt: null,
    })
    .where(and(eq(activeTimers.userId, user.id), sql`${activeTimers.pausedAt} is not null`))
    .returning({ userId: activeTimers.userId });
  if (!rows.length) return { ok: false, error: "The timer isn't paused" };
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}

const stopTimerSchema = z.object({
  /** Trim a timer that ran on after you stopped (never lengthen it). */
  durationSeconds: z.coerce.number().int().min(0).optional(),
  amount: optionalInt,
  amountUnit: optionalUnit,
  notes: z.string().trim().max(5000).nullable().optional().or(z.literal("")),
});

/** Stop the running timer and turn it into a session. Timers shorter than 30s are discarded. */
export async function stopTimer(input: z.infer<typeof stopTimerSchema>): Promise<ActionResult<{ id: string | null }>> {
  const user = await requireUser();
  const parsed = stopTimerSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Invalid input" };

  const timer = await db.query.activeTimers.findFirst({ where: eq(activeTimers.userId, user.id) });
  if (!timer) return { ok: false, error: "No running timer" };

  const timed = timedSeconds(timer);
  const durationSeconds = Math.min(DAY_SECONDS, timed, parsed.data.durationSeconds ?? timed);

  if (durationSeconds >= 30) {
    const timeError = await checkTimes(user.id, user.timezone || "UTC", timer.startedAt, durationSeconds);
    // The timer stays running so the user can shorten it and try again.
    if (timeError) return { ok: false, error: timeError };
  }
  await db.delete(activeTimers).where(eq(activeTimers.userId, user.id));

  if (durationSeconds < 30) {
    revalidatePath("/", "layout");
    return { ok: true, data: { id: null } };
  }

  const amount = parsed.data.amount === "" || parsed.data.amount == null ? null : parsed.data.amount;
  const amountUnit = parsed.data.amountUnit || null;
  const [row] = await db
    .insert(immersionSessions)
    .values({
      userId: user.id,
      mediaItemId: timer.mediaItemId,
      mediaType: timer.mediaType,
      label: timer.label,
      startedAt: timer.startedAt,
      durationSeconds,
      amount,
      amountUnit,
      notes: parsed.data.notes || null,
    })
    .returning({ id: immersionSessions.id });

  await applyProgress(user.id, timer.mediaItemId, amount ?? 0, amountUnit);
  revalidatePath("/", "layout");
  return { ok: true, data: { id: row.id } };
}

export async function discardTimer(): Promise<ActionResult> {
  const user = await requireUser();
  await db.delete(activeTimers).where(eq(activeTimers.userId, user.id));
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}
