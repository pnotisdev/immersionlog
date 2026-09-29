"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import type { GrammarSettingsValues } from "@/lib/grammar/settings";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GrammarSettingsForm } from "./settings-form";

/** Pace and display, out of the page until wanted: it's set once and rarely touched. */
export function GrammarSettingsDialog({ initial }: { initial: GrammarSettingsValues }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size="lg" variant="outline" onClick={() => setOpen(true)} aria-label="Grammar settings">
        <Settings className="size-4" aria-hidden />
        <span className="hidden sm:inline">Settings</span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Grammar settings</DialogTitle>
            <DialogDescription>Pace and display</DialogDescription>
          </DialogHeader>
          <GrammarSettingsForm initial={initial} onSaved={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
