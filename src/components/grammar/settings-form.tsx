"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { updateGrammarSettings } from "@/actions/grammar";
import { GRAMMAR_LIMITS, type GrammarSettingsValues } from "@/lib/grammar/settings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function GrammarSettingsForm({ initial, onSaved }: { initial: GrammarSettingsValues; onSaved?: () => void }) {
  const router = useRouter();
  const [values, setValues] = useState(initial);
  const [pending, startTransition] = useTransition();

  function save(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const res = await updateGrammarSettings(values);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success("Grammar settings saved");
      router.refresh();
      onSaved?.();
    });
  }

  const { dailyNewLimit, reviewBatchSize } = GRAMMAR_LIMITS;
  return (
    <form onSubmit={save} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="g-new">New points a day</Label>
          <Input
            id="g-new"
            type="number"
            inputMode="numeric"
            min={dailyNewLimit.min}
            max={dailyNewLimit.max}
            value={values.dailyNewLimit}
            onChange={(e) => setValues({ ...values, dailyNewLimit: Number(e.target.value) })}
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="g-batch">Reviews per session</Label>
          <Input
            id="g-batch"
            type="number"
            inputMode="numeric"
            min={reviewBatchSize.min}
            max={reviewBatchSize.max}
            value={values.reviewBatchSize}
            onChange={(e) => setValues({ ...values, reviewBatchSize: Number(e.target.value) })}
          />
        </div>
      </div>
      <label className="flex items-start gap-2.5 text-sm">
        <input
          type="checkbox"
          className="mt-0.5 size-4 accent-[var(--viz-series)]"
          checked={values.showFurigana}
          onChange={(e) => setValues({ ...values, showFurigana: e.target.checked })}
        />
        Show furigana over kanji
      </label>
      <label className="flex items-start gap-2.5 text-sm">
        <input
          type="checkbox"
          className="mt-0.5 size-4 accent-[var(--viz-series)]"
          checked={values.showTranslation}
          onChange={(e) => setValues({ ...values, showTranslation: e.target.checked })}
        />
        Show the English translation during reviews
      </label>
      <div>
        <Button type="submit" disabled={pending}>
          {pending ? "Saving…" : "Save"}
        </Button>
      </div>
    </form>
  );
}
