"use client";

import { useRouter } from "next/navigation";
import type { LibraryPick } from "@/components/library/types";
import { SessionForm } from "./session-form";

/** Thin client wrapper so the /log/new page can stay a server component. */
export function NewLogForm({ entries, tz }: { entries: LibraryPick[]; tz: string }) {
  const router = useRouter();
  return (
    <div className="max-w-[560px]">
      <SessionForm entries={entries} tz={tz} onDone={() => router.push("/log")} />
    </div>
  );
}
