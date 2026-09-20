"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { removeEntry, updateEntry, updateMediaItem } from "@/actions/library";
import { ENTRY_STATUSES, UNITS, type EntryStatus, type MediaType, type Unit } from "@/db/schema";
import { STATUS_LABELS, UNIT_LABELS } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SessionForm } from "@/components/sessions/session-form";
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
  // Progress can never exceed a known total in the same unit.
  const effectiveTotal = entry.canEditTotal ? (total === "" ? null : Number(total)) : entry.totalAmount;
  const effectiveTotalUnit = entry.canEditTotal ? totalUnit : entry.totalUnit;
  const maxProgress = effectiveTotal && effectiveTotalUnit === unit ? effectiveTotal : undefined;

  function save() {
    const newProgress = Math.min(Number(progress) || 0, maxProgress ?? Infinity);
    // Same unit as before the edit: a unit change alongside the bump makes "how much
    // more" ambiguous, so only offer the prompt when it's unambiguous.
    const delta = unit && unit === entry.progressUnit ? newProgress - entry.progress : 0;
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
      if (delta > 0 && unit) setLogPrompt({ amount: delta, unit });
      router.refresh();
    });
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
          {maxProgress != null && `of ${maxProgress} ${UNIT_LABELS[unit!]} · `}Bumping this by hand doesn&apos;t log time on
          its own — you&apos;ll get a prompt to add it. Logging a session with a matching unit updates this automatically
          instead.
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

      <Dialog open={logPrompt !== null} onOpenChange={(o) => !o && setLogPrompt(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Log the time for that?</DialogTitle>
            <DialogDescription>
              {logPrompt && `+${logPrompt.amount} ${UNIT_LABELS[logPrompt.unit]}`} — how long did it take?
            </DialogDescription>
          </DialogHeader>
          {logPrompt && (
            <SessionForm
              entries={entries}
              tz={tz}
              initial={{
                mediaItemId: entry.mediaItemId,
                mediaType: entry.mediaType,
                amount: logPrompt.amount,
                amountUnit: logPrompt.unit,
              }}
              onDone={() => setLogPrompt(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
