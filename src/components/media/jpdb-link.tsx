"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { toast } from "sonner";
import { setJpdbLink } from "@/actions/import";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** Attach or remove a JPDB page link. Link-out only: JPDB's terms forbid fetching it. */
export function JpdbLinkControl({ mediaItemId, current }: { mediaItemId: string; current: string | null }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [url, setUrl] = useState("");
  const [pending, startTransition] = useTransition();

  function save(next: string | null, e?: FormEvent) {
    e?.preventDefault();
    startTransition(async () => {
      const res = await setJpdbLink(mediaItemId, next);
      if (!res.ok) return void toast.error(res.error);
      setEditing(false);
      setUrl("");
      router.refresh();
    });
  }

  if (current && !editing) {
    return (
      <Button size="xs" variant="ghost" onClick={() => save(null)} disabled={pending}>
        Remove JPDB link
      </Button>
    );
  }
  if (!editing) {
    return (
      <Button size="xs" variant="ghost" onClick={() => setEditing(true)}>
        Add JPDB link
      </Button>
    );
  }
  return (
    <form onSubmit={(e) => save(url, e)} className="flex w-full items-center gap-2">
      <Input
        autoFocus
        type="url"
        placeholder="https://jpdb.io/visual-novel/…"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        aria-label="JPDB page link"
        className="h-7 text-xs"
      />
      <Button size="xs" type="submit" disabled={pending || !url.trim()}>
        Save
      </Button>
      <Button size="xs" type="button" variant="ghost" onClick={() => setEditing(false)}>
        Cancel
      </Button>
    </form>
  );
}
