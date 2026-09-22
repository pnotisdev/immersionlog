"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./button";

/** Copies `value` to the clipboard, same pattern as src/components/clubs/join-code.tsx. */
export function CopyButton({
  value,
  label = "Copy link",
  copiedLabel = "Copied",
  size = "sm",
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
  size?: "sm" | "default";
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Could not copy");
    }
  }

  return (
    <Button type="button" variant="outline" size={size} onClick={copy}>
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? copiedLabel : label}
    </Button>
  );
}
