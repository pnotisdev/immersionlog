"use client";

import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { LibraryPick } from "@/components/library/types";
import { SessionForm, type SessionFormValues } from "./session-form";

/**
 * The "log a session" modal — one Dialog+SessionForm pairing shared by every place
 * that opens it (the log button, quick-log grid, library tile hover button, session
 * list's edit action, the entry editor's "log the time for that?" prompt), instead of
 * five near-identical copies of the same Dialog/DialogHeader/DialogTitle wrapper.
 */
export function SessionDialog({
  open,
  onOpenChange,
  title = "Log a session",
  description,
  entries,
  tz,
  sessionId,
  initial,
  onDone,
  /** Remount the form when this changes (e.g. switching which session is being edited). */
  formKey,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: ReactNode;
  entries: LibraryPick[];
  tz: string;
  sessionId?: string;
  initial?: Partial<SessionFormValues>;
  onDone: () => void;
  formKey?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {open && <SessionForm key={formKey} entries={entries} tz={tz} sessionId={sessionId} initial={initial} onDone={onDone} />}
      </DialogContent>
    </Dialog>
  );
}
