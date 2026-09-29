"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { resetPoint, unlockPoints } from "@/actions/grammar";
import { stageLabel } from "@/lib/grammar/srs";
import { Button } from "@/components/ui/button";

/**
 * A signed-in reader's place in the schedule for one point, with the two things they
 * can do about it here: start reviewing it (it counts toward today's new points), or
 * send it back to new.
 */
export function PointControls({
  pointId,
  progress,
}: {
  pointId: string;
  /** `due` is worded on the server ("next review in 3h"), so the first render can't disagree with it. */
  progress: { stage: number; due: string } | null;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function add() {
    startTransition(async () => {
      const res = await unlockPoints([pointId]);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success("Added to your reviews. First one in about four hours.");
      router.refresh();
    });
  }

  function reset() {
    if (!confirm("Reset this point? It leaves your reviews and goes back to the learn queue.")) return;
    startTransition(async () => {
      const res = await resetPoint(pointId);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success("Reset to new");
      router.refresh();
    });
  }

  if (!progress) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-meta text-dim">Not in your reviews yet</span>
        <Button size="sm" onClick={add} disabled={pending}>
          Add to reviews
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium">{stageLabel(progress.stage)}</span>
      <span className="text-meta text-dim">{progress.due}</span>
      <Button size="sm" variant="ghost" onClick={reset} disabled={pending}>
        Reset
      </Button>
    </div>
  );
}
