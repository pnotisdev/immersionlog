"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { clearDifficultyVote, setDifficultyVote } from "@/actions/difficulty";
import { cn } from "@/lib/utils";

const LABELS = ["Very easy", "Easy", "Just right", "Hard", "Very hard"] as const;

/** A 5-button difficulty vote (1 very easy - 5 very hard) plus the community average. Optimistic, click-again-to-clear. */
export function DifficultyVote({
  mediaItemId,
  initialAverage,
  initialCount,
  initialVote,
}: {
  mediaItemId: string;
  initialAverage: number | null;
  initialCount: number;
  initialVote: number | null;
}) {
  const [average, setAverage] = useState(initialAverage);
  const [count, setCount] = useState(initialCount);
  const [vote, setVote] = useState(initialVote);
  const [pending, startTransition] = useTransition();

  function pick(value: number) {
    const clearing = vote === value;
    const prevAverage = average;
    const prevCount = count;
    const prevVote = vote;

    // Optimistic recompute: the exact average will settle back to the server's number
    // on the next load, this just avoids a visible jump on click.
    if (clearing) {
      const nextCount = count - 1;
      setCount(nextCount);
      setAverage(nextCount > 0 && average != null ? (average * count - value) / nextCount : null);
      setVote(null);
    } else {
      const nextCount = prevVote == null ? count + 1 : count;
      const base = (average ?? 0) * count - (prevVote ?? 0);
      setCount(nextCount);
      setAverage((base + value) / nextCount);
      setVote(value);
    }

    startTransition(async () => {
      const res = clearing ? await clearDifficultyVote(mediaItemId) : await setDifficultyVote(mediaItemId, value);
      if (!res.ok) {
        setAverage(prevAverage);
        setCount(prevCount);
        setVote(prevVote);
        toast.error(res.error);
      }
    });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {LABELS.map((label, i) => {
          const value = i + 1;
          const active = vote === value;
          return (
            <button
              key={value}
              type="button"
              disabled={pending}
              aria-pressed={active}
              onClick={() => pick(value)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition-colors disabled:opacity-60",
                active ? "border-primary bg-accent text-accent-foreground" : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {count > 0 ? (
          <>
            <span className="font-medium text-foreground">{average!.toFixed(1)}/5</span> · {count} vote{count === 1 ? "" : "s"}
          </>
        ) : (
          "No votes yet — be the first."
        )}
      </p>
    </div>
  );
}
