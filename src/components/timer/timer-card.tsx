"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { History, Play, Square, Timer, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { discardTimer, startTimer, stopTimer } from "@/actions/sessions";
import type { MediaType, Unit } from "@/db/schema";
import { formatClock } from "@/lib/format";
import { cn } from "@/lib/utils";
import { MEDIA_TYPE_META, activityVerb } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ItemPicker, type PickerValue } from "@/components/library/item-picker";
import type { LibraryPick } from "@/components/library/types";
import { AmountInput } from "@/components/sessions/amount-input";
import { SessionDialog } from "@/components/sessions/session-dialog";
import { useElapsed } from "./use-elapsed";

export interface ActiveTimerView {
  mediaItemId: string | null;
  mediaType: MediaType;
  label: string | null;
  startedAt: string; // ISO
  title: string | null;
  progressUnit: Unit | null;
}

export function TimerCard({
  timer,
  entries,
  tz,
  fixedItem,
}: {
  timer: ActiveTimerView | null;
  entries: LibraryPick[];
  /** Only needed when fixedItem is set, for its "log a past session" dialog. */
  tz?: string;
  /** Lock to one item (e.g. on its detail page) instead of showing the full picker. */
  fixedItem?: { mediaItemId: string; mediaType: MediaType };
}) {
  if (timer) return <RunningTimer timer={timer} />;
  return fixedItem ? (
    <FixedItemCard entries={entries} tz={tz ?? "UTC"} mediaItemId={fixedItem.mediaItemId} mediaType={fixedItem.mediaType} />
  ) : (
    <IdleTimer entries={entries} tz={tz ?? "UTC"} />
  );
}

/**
 * The media detail page already knows exactly which item this is for, so asking
 * "what are you timing?" via the full library picker (as the dashboard's idle timer
 * does) is pure redundancy. One card, one clear pair of actions: log what you already
 * did earlier, or start timing now — instead of a hero button above plus a whole separate
 * picker card below.
 */
function FixedItemCard({
  entries,
  tz,
  mediaItemId,
  mediaType,
}: {
  entries: LibraryPick[];
  tz: string;
  mediaItemId: string;
  mediaType: MediaType;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [logOpen, setLogOpen] = useState(false);

  function start() {
    startTransition(async () => {
      const res = await startTimer({ mediaItemId, mediaType, label: null });
      if (!res.ok) toast.error(res.error);
      else router.refresh();
    });
  }

  // "Log what you read", "…listened to", "…played" — never "watched" for a book.
  const verb = activityVerb(mediaType);

  return (
    <TimerShell>
      <ShellHeading title="Log a session" hint={`Time it live, or add what you ${verb} earlier.`} />
      <div className="flex flex-wrap gap-2 sm:ml-auto">
        <Button size="lg" onClick={start} disabled={pending} className="flex-1 sm:flex-none">
          <Play /> {pending ? "Starting…" : "Start timer"}
        </Button>
        <Button size="lg" variant="outline" onClick={() => setLogOpen(true)} className="flex-1 sm:flex-none">
          <History /> Log what you {verb}
        </Button>
      </div>
      <SessionDialog
        open={logOpen}
        onOpenChange={setLogOpen}
        description="Forgot to start the timer? Backdate it here."
        entries={entries}
        tz={tz}
        initial={{ mediaItemId, mediaType }}
        onDone={() => setLogOpen(false)}
      />
    </TimerShell>
  );
}

/**
 * The timer's frame: the same hairline surface as every Panel, with the accent kept for
 * the one thing that matters here, the Start button. It used to be a brown-tinted,
 * shadowed card — the only such surface left in the app, and it read as a different
 * product from everything around it.
 */
function TimerShell({ children, live = false }: { children: React.ReactNode; live?: boolean }) {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 rounded-lg border bg-surface p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5",
        live ? "border-primary/50" : "border-border",
      )}
    >
      {children}
    </section>
  );
}

function ShellHeading({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
        <Timer className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-h3 font-semibold">{title}</p>
        <p className="text-meta text-dim">{hint}</p>
      </div>
    </div>
  );
}

/**
 * The log bar: the product's primary action, and the only tinted surface on Home
 * (redesign.md §5.1). One medium/title picker, a Start button, and a "Log manually"
 * escape hatch for backdating a session instead of timing it live.
 */
function IdleTimer({ entries, tz }: { entries: LibraryPick[]; tz: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [logOpen, setLogOpen] = useState(false);
  const preset = entries.find((e) => e.status === "active");
  const [pick, setPick] = useState<PickerValue>({
    mediaItemId: preset?.mediaItemId ?? null,
    mediaType: preset?.type ?? "anime",
    label: "",
  });

  function start() {
    startTransition(async () => {
      const res = await startTimer({ mediaItemId: pick.mediaItemId, mediaType: pick.mediaType, label: pick.label });
      if (!res.ok) toast.error(res.error);
      else router.refresh();
    });
  }

  return (
    <TimerShell>
      <ShellHeading title="Start a session" hint="Pick what you're about to read, watch or listen to." />
      <div className="min-w-0 flex-1">
        <ItemPicker entries={entries} value={pick} onChange={setPick} idPrefix="timer" hideLabel />
      </div>
      <div className="flex shrink-0 gap-2 sm:self-start">
        <Button size="lg" onClick={start} disabled={pending} className="flex-1 sm:flex-none">
          <Play /> Start timer
        </Button>
        <Button size="lg" variant="outline" onClick={() => setLogOpen(true)} className="flex-1 sm:flex-none">
          <History /> Log past session
        </Button>
      </div>

      <SessionDialog
        open={logOpen}
        onOpenChange={setLogOpen}
        description="Backdate a session instead of timing it live."
        entries={entries}
        tz={tz}
        initial={
          pick.mediaItemId ? { mediaItemId: pick.mediaItemId, mediaType: pick.mediaType } : { mediaType: pick.mediaType, label: pick.label }
        }
        onDone={() => setLogOpen(false)}
      />
    </TimerShell>
  );
}

function RunningTimer({ timer }: { timer: ActiveTimerView }) {
  const router = useRouter();
  const elapsed = useElapsed(timer.startedAt);
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState<Unit | null>(timer.progressUnit ?? MEDIA_TYPE_META[timer.mediaType].defaultUnit);
  const [notes, setNotes] = useState("");

  const what = timer.title ?? timer.label ?? MEDIA_TYPE_META[timer.mediaType].label;

  function stop() {
    startTransition(async () => {
      const res = await stopTimer({ amount: amount === "" ? null : Number(amount), amountUnit: amount === "" ? null : unit, notes });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success(res.data.id ? "Session saved" : "Timer was under 30s, nothing saved");
      setOpen(false);
      router.refresh();
    });
  }

  function discard() {
    startTransition(async () => {
      const res = await discardTimer();
      if (!res.ok) toast.error(res.error);
      else {
        toast("Timer discarded");
        router.refresh();
      }
    });
  }

  return (
    <TimerShell live>
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="relative flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-3 rounded-full bg-primary" />
          </span>
          <div className="min-w-0">
            <div className="truncate text-base font-semibold">{what}</div>
            <div className="text-xs text-muted-foreground">{MEDIA_TYPE_META[timer.mediaType].label}</div>
          </div>
        </div>
        <div className="ml-auto font-mono text-4xl font-medium tabular-nums tracking-tight">{formatClock(elapsed)}</div>
        <div className="flex w-full gap-2 sm:w-auto">
          <Button onClick={() => setOpen(true)} className="flex-1 sm:flex-none">
            <Square /> Stop
          </Button>
          <Button variant="ghost" size="icon" aria-label="Discard timer" onClick={discard} disabled={pending}>
            <Trash2 />
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Finish session</DialogTitle>
            <DialogDescription>
              {what} · {formatClock(elapsed)}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <AmountInput amount={amount} unit={unit} onChange={(v) => { setAmount(v.amount); setUnit(v.unit); }} idPrefix="stop-amount" />
            <div className="grid gap-1.5">
              <Label htmlFor="stop-notes">Notes (optional)</Label>
              <Textarea id="stop-notes" rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)} disabled={pending}>
              Keep going
            </Button>
            <Button onClick={stop} disabled={pending}>
              {pending ? "Saving…" : "Save session"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TimerShell>
  );
}
