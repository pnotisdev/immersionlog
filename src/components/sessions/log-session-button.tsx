"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { MediaType } from "@/db/schema";
import { Button, type buttonVariants } from "@/components/ui/button";
import type { LibraryPick } from "@/components/library/types";
import { SessionDialog } from "./session-dialog";
import type { VariantProps } from "class-variance-authority";

/** "Log session" button that opens the manual/backdated entry form. */
export function LogSessionButton({
  entries,
  tz,
  defaultMediaItemId,
  defaultMediaType,
  variant = "default",
  size = "default",
  label = "Log session",
  className,
}: {
  entries: LibraryPick[];
  tz: string;
  defaultMediaItemId?: string;
  defaultMediaType?: MediaType;
  variant?: "default" | "outline" | "secondary";
  size?: VariantProps<typeof buttonVariants>["size"];
  label?: string;
  /** e.g. weightier styling where this is the page's main call to action. */
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={variant} size={size} onClick={() => setOpen(true)} className={className}>
        <Plus /> {label}
      </Button>
      <SessionDialog
        open={open}
        onOpenChange={setOpen}
        description="Forgot to start the timer? Backdate it here."
        entries={entries}
        tz={tz}
        initial={{ mediaItemId: defaultMediaItemId ?? null, mediaType: defaultMediaType }}
        onDone={() => setOpen(false)}
      />
    </>
  );
}
