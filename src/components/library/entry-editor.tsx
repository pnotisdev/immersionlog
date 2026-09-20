"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { removeEntry, updateEntry, updateMediaItem } from "@/actions/library";
import { ENTRY_STATUSES, UNITS, type EntryStatus, type MediaType, type Unit } from "@/db/schema";
import { STATUS_LABELS, UNIT_LABELS } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SessionDialog } from "@/components/sessions/session-dialog";
import type { LibraryPick } from "./types";

const STATUS_ITEMS: Record<string, string> = { ...STATUS_LABELS };
const NONE = "__none__";
const UNIT_ITEMS: Record<string, string> = { [NONE]: "no unit", ...UNIT_LABELS };
const RATING_ITEMS: Record<string, string> = { [NONE]: "—", ...Object.fromEntries(Array.from({ length: 10 }, (_, i) => [String(i + 1), `${i + 1} / 10`])) };

export interface EntryEditorData {
  mediaItemId: string;
  mediaType: MediaType;
  status: EntryStatus;
  progress: number;
  progressUnit: Unit | null;
  rating: number | null;
  notes: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  totalAmount: number | null;
  totalUnit: Unit | null;
  canEditTotal: boolean;
}

export function EntryEditor({ entry, entries, tz }: { entry: EntryEditorData; entries: LibraryPick[]; tz: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [progress, setProgress] = useState(String(entry.progress));
  const [unit, setUnit] = useState<Unit | null>(entry.progressUnit);
  const [rating, setRating] = useState<string>(entry.rating ? String(entry.rating) : NONE);
  const [notes, setNotes] = useState(entry.notes ?? "");
  const [startedAt, setStartedAt] = useState(entry.startedAt ?? "");
  const [finishedAt, setFinishedAt] = useState(entry.finishedAt ?? "");
  const [total, setTotal] = useState(entry.totalAmount ? String(entry.totalAmount) : "");
  const [totalUnit, setTotalUnit] = useState<Unit | null>(entry.totalUnit);
  // Set after a save that increased progress: prompts to log the time behind it,
  // since bumping this number alone doesn't — see the createSession delta-sync in
  // src/actions/sessions.ts, which is the *other* direction this stays in sync.
  const [logPrompt, setLogPrompt] = useState<{ amount: number; unit: Unit } | null>(null);
  // Closed by default: correcting the raw counter is a fallback for when logging a
  // session got the progress wrong, not the everyday way to move it — that's the
  // timer/log card above. Open it up front if there's nothing recorded yet, since
  // there's no summary line to show instead.
  const [progressOpen, setProgressOpen] = useState(!entry.progressUnit);
  // Progress can never exceed a known total in the same unit.
  const effectiveTotal = entry.canEditTotal ? (total === "" ? null : Number(total)) : entry.totalAmount;
  const effectiveTotalUnit = entry.canEditTotal ? totalUnit : entry.totalUnit;
  const maxProgress = effectiveTotal && effectiveTotalUnit === unit ? effectiveTotal : undefined;

  // Re-sync local fields when the server's copy of this entry actually changes — e.g. a
  // session logged elsewhere on this page (the timer) bumps progress via the delta-sync
  // in src/actions/sessions.ts. This used to be handled by remounting the whole
  // component (keyed on entry.updatedAt), but that also wiped UI-only state like an open
  // logPrompt dialog the instant our own save's revalidatePath came back. Adjusting
  // state during render (React's recommended pattern for this, rather than an effect —
  // see https://react.dev/learn/you-might-not-need-an-effect) syncs in place instead,
  // leaving logPrompt (and any other local-only state) untouched.
  // `entry` is a fresh object literal from the server on *every* render of this page,
  // not just when its data changes, so comparing object identity would resync (and
  // clobber any in-progress, unsaved edit like a half-typed note) whenever anything else
  // on the page revalidates — e.g. logging a session via the timer/log card above.
  // Compare the actual field values instead, same as the useEffect deps this replaced.
  const [prevEntry, setPrevEntry] = useState(entry);
  if (
    prevEntry.status !== entry.status ||
    prevEntry.progress !== entry.progress ||
    prevEntry.progressUnit !== entry.progressUnit ||
    prevEntry.rating !== entry.rating ||
    prevEntry.notes !== entry.notes ||
    prevEntry.startedAt !== entry.startedAt ||
    prevEntry.finishedAt !== entry.finishedAt ||
    prevEntry.totalAmount !== entry.totalAmount ||
    prevEntry.totalUnit !== entry.totalUnit
  ) {
    setPrevEntry(entry);
    setStatus(entry.status);
    setProgress(String(entry.progress));
    setUnit(entry.progressUnit);
    setRating(entry.rating ? String(entry.rating) : NONE);
    setNotes(entry.notes ?? "");
    setStartedAt(entry.startedAt ?? "");
    setFinishedAt(entry.finishedAt ?? "");
    setTotal(entry.totalAmount ? String(entry.totalAmount) : "");
    setTotalUnit(entry.totalUnit);
  }

  function save() {
    const newProgress = Math.min(Number(progress) || 0, maxProgress ?? Infinity);
    // A fresh entry has no unit yet, so the first time one's picked isn't a "change" to
    // reconcile — the whole new value is the delta. Only an actual swap between two
    // already-set units (e.g. episodes -> chapters) is genuinely ambiguous and skipped.
    const delta = !unit ? 0 : entry.progressUnit === null || entry.progressUnit === unit ? newProgress - entry.progress : 0;
    startTransition(async () => {
      const res = await updateEntry(entry.mediaItemId, {
        status,
        progress: newProgress,
        progressUnit: unit,
        rating: rating === NONE ? null : Number(rating),
        notes: notes || null,
        startedAt: startedAt || null,
        finishedAt: finishedAt || null,
      });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      if (entry.canEditTotal && (total !== (entry.totalAmount ? String(entry.totalAmount) : "") || totalUnit !== entry.totalUnit)) {
        const r2 = await updateMediaItem(entry.mediaItemId, { totalAmount: total === "" ? null : Number(total), totalUnit });
        if (!r2.ok) toast.error(r2.error);
      }
      toast.success("Saved");
      // Refreshing now would re-key EntryEditor on the entry's new updatedAt (see the
      // page's `key={entry.updatedAt...}`) and remount it mid-dialog, wiping logPrompt
      // and closing the prompt before it can be used. Defer the refresh until the
      // dialog is actually done with (closeLogPrompt) instead.
      if (delta > 0 && unit) setLogPrompt({ amount: delta, unit });
      else router.refresh();
    });
  }

  function closeLogPrompt() {
    setLogPrompt(null);
    router.refresh();
  }

  function remove() {
    if (!confirm("Remove from your library? Logged sessions are kept.")) return;
    startTransition(async () => {
      const res = await removeEntry(entry.mediaItemId);
      if (!res.ok) toast.error(res.error);
      else {
        toast("Removed from library");
        router.push("/library");
        router.refresh();
      }
    });
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="e-status">Status</Label>
          <Select items={STATUS_ITEMS} value={status} onValueChange={(v) => setStatus(v as EntryStatus)}>
            <SelectTrigger id="e-status" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ENTRY_STATUSES.map((s) => (
                <SelectItem key={s} value={s}>
                  {STATUS_LABELS[s]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="e-rating">Rating</Label>
          <Select items={RATING_ITEMS} value={rating} onValueChange={(v) => setRating(v ?? NONE)}>
            <SelectTrigger id="e-rating" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(RATING_ITEMS).map(([v, l]) => (
                <SelectItem key={v} value={v}>
                  {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <details
        className="group rounded-lg border px-3 py-2 open:pb-3"
        open={progressOpen}
        onToggle={(e) => setProgressOpen(e.currentTarget.open)}
      >
        <summary className="flex cursor-pointer list-none items-center gap-1.5 py-1 text-sm select-none [&::-webkit-details-marker]:hidden">
          <ChevronRight className="size-3.5 text-muted-foreground transition-transform group-open:rotate-90" />
          {entry.progressUnit ? (
            <span>
              <span className="font-medium">{entry.progress}</span>
              {entry.totalAmount != null && entry.totalUnit === entry.progressUnit && (
                <span className="text-muted-foreground"> / {entry.totalAmount}</span>
              )}{" "}
              {UNIT_LABELS[entry.progressUnit]}
              <span className="ml-1.5 text-xs text-muted-foreground">— correct it</span>
            </span>
          ) : (
            <span className="text-muted-foreground">Set progress</span>
          )}
        </summary>

        <div className="mt-2 grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="e-progress">Progress</Label>
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2">
              <Input id="e-progress" type="number" min={0} max={maxProgress} value={progress} onChange={(e) => setProgress(e.target.value)} />
              <Select items={UNIT_ITEMS} value={unit ?? NONE} onValueChange={(v) => setUnit(v === NONE ? null : (v as Unit))}>
                <SelectTrigger aria-label="Progress unit" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={NONE}>no unit</SelectItem>
                  {UNITS.map((u) => (
                    <SelectItem key={u} value={u}>
                      {UNIT_LABELS[u]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">
              Bumping this by hand doesn&apos;t log time on its own — you&apos;ll get a prompt to add it. Logging a session
              with a matching unit updates this automatically instead.
            </p>
          </div>

          {!entry.canEditTotal && entry.totalAmount && entry.totalUnit && (
            <p className="text-xs text-muted-foreground">Total length: {entry.totalAmount} {UNIT_LABELS[entry.totalUnit]} (from the source).</p>
          )}

          {entry.canEditTotal && (
            <div className="grid gap-1.5">
              <Label htmlFor="e-total">Total length</Label>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2">
                <Input id="e-total" type="number" min={1} value={total} onChange={(e) => setTotal(e.target.value)} placeholder="unknown" />
                <Select items={UNIT_ITEMS} value={totalUnit ?? NONE} onValueChange={(v) => setTotalUnit(v === NONE ? null : (v as Unit))}>
                  <SelectTrigger aria-label="Total unit" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={NONE}>no unit</SelectItem>
                    {UNITS.map((u) => (
                      <SelectItem key={u} value={u}>
                        {UNIT_LABELS[u]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </details>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="e-started">Started</Label>
          <Input id="e-started" type="date" value={startedAt} onChange={(e) => setStartedAt(e.target.value)} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="e-finished">Finished</Label>
          <Input id="e-finished" type="date" value={finishedAt} onChange={(e) => setFinishedAt(e.target.value)} />
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="e-notes">Notes</Label>
        <Textarea id="e-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Difficulty, where to find it, thoughts…" />
      </div>

      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="sm" onClick={remove} disabled={pending} className="text-muted-foreground">
          Remove from library
        </Button>
        <Button onClick={save} disabled={pending}>
          {pending ? "Saving…" : "Save"}
        </Button>
      </div>

      <SessionDialog
        open={logPrompt !== null}
        onOpenChange={(o) => !o && closeLogPrompt()}
        title="Log the time for that?"
        description={logPrompt && `+${logPrompt.amount} ${UNIT_LABELS[logPrompt.unit]} — how long did it take?`}
        entries={entries}
        tz={tz}
        initial={
          logPrompt
            ? { mediaItemId: entry.mediaItemId, mediaType: entry.mediaType, amount: logPrompt.amount, amountUnit: logPrompt.unit }
            : undefined
        }
        onDone={closeLogPrompt}
      />
    </div>
  );
}
