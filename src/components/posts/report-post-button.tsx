"use client";

import { useState, useTransition, type FormEvent } from "react";
import { Flag } from "lucide-react";
import { toast } from "sonner";
import { reportPost } from "@/actions/posts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/** Flags a post for the admins (src/app/(app)/admin). Only offered to signed-in readers who didn't write it. */
export function ReportPostButton({ postId }: { postId: string }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const reason = String(new FormData(e.currentTarget).get("reason") ?? "");
    startTransition(async () => {
      const res = await reportPost(postId, reason);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setOpen(false);
      setDone(true);
      toast.success("Thanks, an admin will take a look");
    });
  }

  return (
    <>
      <Button type="button" variant="ghost" size="sm" disabled={done} onClick={() => setOpen(true)} className="text-muted-foreground">
        <Flag /> {done ? "Reported" : "Report"}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report this post</DialogTitle>
            <DialogDescription>Admins will see your report. The author won&apos;t know who sent it.</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="report-reason">What&apos;s wrong with it? (optional)</Label>
              <Textarea id="report-reason" name="reason" maxLength={500} rows={3} autoFocus />
            </div>
            <DialogFooter showCloseButton>
              <Button type="submit" variant="destructive" disabled={pending}>
                Send report
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
