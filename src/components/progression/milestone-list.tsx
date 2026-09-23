import Link from "next/link";
import { Flag } from "lucide-react";
import type { Unit } from "@/db/schema";
import { formatDate } from "@/lib/format";
import { UNIT_LABELS } from "@/lib/media";

export interface MilestoneRow {
  id: string;
  mediaItemId: string;
  title: string;
  mediaTitle: string;
  occurredAt: string | null;
  progressAmount: number | null;
  progressUnit: Unit | null;
}

/** Milestones as a short timeline: what happened, in which title, when. Shared by Home, profiles and reports. */
export function MilestoneList({ milestones, inset = false }: { milestones: MilestoneRow[]; inset?: boolean }) {
  return (
    <ul className="grid">
      {milestones.map((m) => (
        <li key={m.id} className={inset ? "flex gap-3 px-4 py-2.5 sm:px-5" : "flex gap-3 py-2.5"}>
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Flag className="size-3" />
          </span>
          <div className="min-w-0">
            <Link href={`/media/${m.mediaItemId}`} className="block truncate text-sm font-medium hover:underline">
              {m.title}
            </Link>
            <p className="truncate text-meta text-dim">
              {m.mediaTitle}
              {m.occurredAt && ` · ${formatDate(m.occurredAt)}`}
              {m.progressAmount != null && m.progressUnit && ` · ${m.progressAmount} ${UNIT_LABELS[m.progressUnit]}`}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
