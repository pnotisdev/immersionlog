"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { createMilestone, deleteMilestone } from "@/actions/milestones";
import { formatDate } from "@/lib/format";
import { UNIT_LABELS } from "@/lib/media";
import type { MilestoneRow } from "@/lib/milestones-queries";
import { UNITS, type Unit } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Milestones on one library entry: a list plus an inline add form. Media page only — always the viewer's own entry. */
export function Milestones({ libraryEntryId, mediaItemId, items }: { libraryEntryId: string; mediaItemId: string; items: MilestoneRow[] }) {
  const [adding, setAdding] = useState(false);

  return (
    <div className="grid gap-3">
      {items.length > 0 && (
        <ul className="grid gap-2.5">
          {items.map((m) => (
            <MilestoneRowView key={m.id} milestone={m} mediaItemId={mediaItemId} />
          ))}
        </ul>
      )}

      {adding ? (
        <AddMilestoneForm libraryEntryId={libraryEntryId} onDone={() => setAdding(false)} />
      ) : (
        <Button type="button" variant="outline" size="sm" className="w-fit" onClick={() => setAdding(true)}>
          <Plus className="size-3.5" /> Add milestone
        </Button>
      )}
    </div>
  );
}

function MilestoneRowView({ milestone, mediaItemId }: { milestone: MilestoneRow; mediaItemId: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function remove() {
    startTransition(async () => {
      const res = await deleteMilestone(milestone.id, mediaItemId);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      router.refresh();
    });
  }

  return (
    <li className="flex items-start justify-between gap-3 rounded-lg border p-2.5">
      <div className="min-w-0">
        <p className="text-sm font-medium">
          {milestone.title}
          {milestone.progressAmount != null && milestone.progressUnit && (
            <span className="ml-1.5 font-normal text-muted-foreground">
              · {milestone.progressAmount} {UNIT_LABELS[milestone.progressUnit]}
            </span>
          )}
        </p>
        {(milestone.occurredAt || milestone.note) && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {milestone.occurredAt && formatDate(milestone.occurredAt)}
            {milestone.occurredAt && milestone.note && " · "}
            {milestone.note}
          </p>
        )}
      </div>
      <Button type="button" variant="ghost" size="icon-xs" aria-label="Delete milestone" disabled={pending} onClick={remove}>
        <Trash2 className="size-3.5" />
      </Button>
    </li>
  );
}

function AddMilestoneForm({ libraryEntryId, onDone }: { libraryEntryId: string; onDone: () => void }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [progressUnit, setProgressUnit] = useState<Unit | "">("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = String(form.get("title") ?? "").trim();
    if (!title) {
      toast.error("Title is required");
      return;
    }
    const occurredAt = String(form.get("occurredAt") ?? "") || null;
    const note = String(form.get("note") ?? "").trim() || null;
    const progressAmountRaw = String(form.get("progressAmount") ?? "").trim();
    const progressAmount = progressAmountRaw ? Number(progressAmountRaw) : null;

    startTransition(async () => {
      const res = await createMilestone({
        libraryEntryId,
        title,
        note,
        occurredAt,
        progressAmount,
        progressUnit: progressUnit || null,
      });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success("Milestone added");
      router.refresh();
      onDone();
    });
  }

  return (
    <form onSubmit={submit} className="grid gap-2.5 rounded-lg border p-3">
      <div className="grid gap-1.5">
        <Label htmlFor="ms-title">Title</Label>
        <Input id="ms-title" name="title" placeholder="Finished Route A" maxLength={100} required autoFocus />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="grid gap-1.5">
          <Label htmlFor="ms-date">Date (optional)</Label>
          <Input id="ms-date" name="occurredAt" type="date" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="ms-progress">Progress (optional)</Label>
          <div className="flex gap-1.5">
            <Input id="ms-progress" name="progressAmount" type="number" min={0} placeholder="12" className="w-20" />
            <select
              value={progressUnit}
              onChange={(e) => setProgressUnit(e.target.value as Unit | "")}
              className="h-9 flex-1 rounded-sm border bg-transparent px-2 text-sm outline-none focus-visible:border-ring"
            >
              <option value="">unit…</option>
              {UNITS.map((u) => (
                <option key={u} value={u}>
                  {UNIT_LABELS[u]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="ms-note">Note (optional)</Label>
        <Input id="ms-note" name="note" placeholder="Slow chapter but good vocab" maxLength={500} />
      </div>
      <div className="flex gap-2">
        <Button type="submit" size="sm" disabled={pending}>
          {pending ? "Adding…" : "Add"}
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={onDone} disabled={pending}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
