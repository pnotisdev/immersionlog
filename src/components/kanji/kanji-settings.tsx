"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Settings } from "lucide-react";
import { toast } from "sonner";
import { updateKanjiSettings } from "@/actions/kanji";
import { KANJI_LIMITS, type KanjiSettingsValues } from "@/lib/kanji/settings";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Pace, out of the page until wanted: it's set once and rarely touched. */
export function KanjiSettingsDialog({ initial }: { initial: KanjiSettingsValues }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initial);
  const [pending, startTransition] = useTransition();

  function save(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const res = await updateKanjiSettings(values);
      if (!res.ok) return void toast.error(res.error);
      toast.success("Kanji settings saved");
      router.refresh();
      setOpen(false);
    });
  }

  const { dailyNewLimit, reviewBatchSize } = KANJI_LIMITS;
  return (
    <>
      <Button size="lg" variant="outline" onClick={() => setOpen(true)} aria-label="Kanji settings">
        <Settings className="size-4" aria-hidden />
        <span className="hidden sm:inline">Settings</span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kanji settings</DialogTitle>
            <DialogDescription>Pace</DialogDescription>
          </DialogHeader>
          <form onSubmit={save} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="k-new">New kanji a day</Label>
                <Input id="k-new" type="number" inputMode="numeric" min={dailyNewLimit.min} max={dailyNewLimit.max} value={values.dailyNewLimit} onChange={(e) => setValues({ ...values, dailyNewLimit: Number(e.target.value) })} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="k-batch">Reviews per session</Label>
                <Input id="k-batch" type="number" inputMode="numeric" min={reviewBatchSize.min} max={reviewBatchSize.max} value={values.reviewBatchSize} onChange={(e) => setValues({ ...values, reviewBatchSize: Number(e.target.value) })} />
              </div>
            </div>
            <div>
              <Button type="submit" disabled={pending}>
                {pending ? "Saving…" : "Save"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
