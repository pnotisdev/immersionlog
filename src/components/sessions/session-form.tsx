"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { toast } from "sonner";
import { createSession, updateSession } from "@/actions/sessions";
import type { MediaType, Unit } from "@/db/schema";
import { fromLocalInputValue, toLocalInputValue } from "@/lib/dates";
import { MEDIA_TYPE_META } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ItemPicker, type PickerValue } from "@/components/library/item-picker";
import type { LibraryPick } from "@/components/library/types";
import { AmountInput } from "./amount-input";
import { DurationInput } from "./duration-input";

export interface SessionFormValues {
  mediaItemId: string | null;
  mediaType: MediaType;
  label: string;
  startedAt: Date;
  durationSeconds: number;
  amount: number | null;
  amountUnit: Unit | null;
  notes: string;
}

function defaultUnitFor(entries: LibraryPick[], mediaItemId: string | null, mediaType: MediaType): Unit | null {
  const e = mediaItemId ? entries.find((x) => x.mediaItemId === mediaItemId) : null;
  return e?.progressUnit ?? MEDIA_TYPE_META[mediaType].defaultUnit;
}

/**
 * When the item and episode count are already known (e.g. the entry editor's "log the
 * time for that?" prompt after bumping progress) and AniList gave us this anime's
 * average runtime, turn "N episodes" into a real duration instead of a flat guess.
 * Falls back to how long the last session against this item actually took — covers
 * everything episodeMinutes doesn't (manga, VNs, podcasts, books, anime with no
 * AniList runtime).
 */
function defaultDurationSeconds(entries: LibraryPick[], mediaItemId: string | null, amount: number | null, unit: Unit | null): number | null {
  const e = mediaItemId ? entries.find((x) => x.mediaItemId === mediaItemId) : null;
  if (!e) return null;
  if (amount && unit === "episodes" && e.episodeMinutes) return Math.round(e.episodeMinutes * amount * 60);
  return e.lastDurationSeconds ?? null;
}

/** What was logged last time for this item, only if it was in the same unit we're defaulting to. */
function defaultAmountFor(entries: LibraryPick[], mediaItemId: string | null, unit: Unit | null): number | null {
  const e = mediaItemId ? entries.find((x) => x.mediaItemId === mediaItemId) : null;
  if (!e || !unit || e.lastAmountUnit !== unit) return null;
  return e.lastAmount;
}

export function SessionForm({
  entries,
  tz,
  sessionId,
  initial,
  onDone,
}: {
  entries: LibraryPick[];
  tz: string;
  /** Present when editing. */
  sessionId?: string;
  initial?: Partial<SessionFormValues>;
  onDone?: () => void;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const [pick, setPick] = useState<PickerValue>({
    mediaItemId: initial?.mediaItemId ?? null,
    mediaType: initial?.mediaType ?? "anime",
    label: initial?.label ?? "",
  });
  const initialDuration =
    initial?.durationSeconds ??
    defaultDurationSeconds(entries, initial?.mediaItemId ?? null, initial?.amount ?? null, initial?.amountUnit ?? null) ??
    30 * 60;
  const [startedAt, setStartedAt] = useState(() =>
    toLocalInputValue(initial?.startedAt ?? new Date(Date.now() - initialDuration * 1000), tz),
  );
  const [hours, setHours] = useState(String(Math.floor(initialDuration / 3600)));
  const [minutes, setMinutes] = useState(String(Math.round((initialDuration % 3600) / 60)));
  const initialUnit = initial?.amountUnit !== undefined ? initial.amountUnit : defaultUnitFor(entries, pick.mediaItemId, pick.mediaType);
  const [amount, setAmount] = useState(() => {
    if (initial?.amount != null) return String(initial.amount);
    const last = defaultAmountFor(entries, pick.mediaItemId, initialUnit);
    return last != null ? String(last) : "";
  });
  const [unit, setUnit] = useState<Unit | null>(initialUnit);
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const typicalMinutes = pick.mediaItemId
    ? Math.round((entries.find((e) => e.mediaItemId === pick.mediaItemId)?.lastDurationSeconds ?? 0) / 60) || undefined
    : undefined;

  function onPickChange(v: PickerValue) {
    setPick(v);
    // Follow the item's unit and last-logged amount unless the user has typed one already.
    if (!amount) {
      const nextUnit = defaultUnitFor(entries, v.mediaItemId, v.mediaType);
      setUnit(nextUnit);
      const last = defaultAmountFor(entries, v.mediaItemId, nextUnit);
      if (last != null) setAmount(String(last));
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const durationSeconds = (Number(hours) || 0) * 3600 + (Number(minutes) || 0) * 60;
    if (durationSeconds < 60) {
      toast.error("Duration must be at least a minute");
      return;
    }
    const payload = {
      mediaItemId: pick.mediaItemId,
      mediaType: pick.mediaType,
      label: pick.mediaItemId ? null : pick.label,
      startedAt: fromLocalInputValue(startedAt, tz).toISOString(),
      durationSeconds,
      amount: amount === "" ? null : Number(amount),
      amountUnit: amount === "" ? null : unit,
      notes,
    };
    startTransition(async () => {
      const res = sessionId ? await updateSession(sessionId, payload) : await createSession(payload);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success(sessionId ? "Session updated" : "Session logged");
      router.refresh();
      onDone?.();
    });
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <ItemPicker entries={entries} value={pick} onChange={onPickChange} idPrefix={sessionId ? "edit" : "new"} />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="started">Started</Label>
          <Input id="started" type="datetime-local" value={startedAt} onChange={(e) => setStartedAt(e.target.value)} required />
        </div>
        <DurationInput
          hours={hours}
          minutes={minutes}
          onChange={(v) => { setHours(v.hours); setMinutes(v.minutes); }}
          typicalMinutes={typicalMinutes}
        />
      </div>

      <AmountInput amount={amount} unit={unit} onChange={(v) => { setAmount(v.amount); setUnit(v.unit); }} />

      <div className="grid gap-1.5">
        <Label htmlFor="notes">Notes (optional)</Label>
        <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} placeholder="New words, how it felt, where you stopped…" />
      </div>

      <div className="flex justify-end gap-2">
        {onDone && (
          <Button type="button" variant="ghost" onClick={onDone} disabled={pending}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={pending}>
          {pending ? "Saving…" : sessionId ? "Save changes" : "Log session"}
        </Button>
      </div>
    </form>
  );
}
