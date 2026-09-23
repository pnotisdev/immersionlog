import Link from "next/link";
import { formatDuration } from "@/lib/format";
import type { getMyClubStandings } from "@/lib/club-queries";
import { Panel, PanelLink } from "@/components/layout/panel";

type Standing = Awaited<ReturnType<typeof getMyClubStandings>>[number];

/** Not shown to users without a club — advertising a feature by its own empty state
 * is the most template-like move in the product (redesign.md §7). */
export function ClubStandings({ standings }: { standings: Standing[] }) {
  if (standings.length === 0) return null;
  return (
    <Panel title="Club ranking" description="Where you stand this month" action={<PanelLink href="/clubs">Clubs</PanelLink>} flush>
      <ul className="divide-y divide-border/70">
        {standings.map((s) => (
          <li key={s.club.id} className="flex items-center gap-3 px-4 py-3 text-sm sm:px-5">
            <Link href={`/clubs/${s.club.id}`} className="min-w-0 flex-1 truncate font-medium hover:underline">
              {s.club.name}
            </Link>
            <span className="tabular-nums text-muted-foreground">{formatDuration(s.seconds)}</span>
            <span className="w-16 text-right font-semibold tabular-nums">
              {s.rank ? `#${s.rank}` : "—"}
              <span className="text-xs font-normal text-muted-foreground"> / {s.total}</span>
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
