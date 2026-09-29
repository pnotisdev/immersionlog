import { STAGE_GROUPS, type StageGroupId } from "@/lib/grammar/srs";
import { cn } from "@/lib/utils";

/** Each stage group on the site's sequential ramp: the further along, the deeper the colour. */
export const STAGE_COLOR: Record<StageGroupId, string> = {
  new: "var(--viz-seq-0)",
  beginner: "var(--viz-seq-1)",
  adept: "var(--viz-seq-2)",
  seasoned: "var(--viz-seq-3)",
  expert: "var(--viz-seq-4)",
  burned: "var(--viz-seq-5)",
};

/** A deck's points by stage group, as one bar with a legend underneath. */
export function StageBar({ counts, total, className }: { counts: Record<StageGroupId, number>; total: number; className?: string }) {
  return (
    <div className={className}>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full" style={{ background: STAGE_COLOR.new }}>
        {STAGE_GROUPS.filter((g) => g.id !== "new" && counts[g.id] > 0).map((g) => (
          <div
            key={g.id}
            className="h-full"
            style={{ width: `${(counts[g.id] / Math.max(1, total)) * 100}%`, background: STAGE_COLOR[g.id] }}
            title={`${g.label}: ${counts[g.id]}`}
          />
        ))}
      </div>
      <dl className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
        {STAGE_GROUPS.map((g) => (
          <div key={g.id} className="flex items-baseline gap-1.5 text-sm">
            <span className="size-2 shrink-0 translate-y-[-1px] rounded-full" style={{ background: STAGE_COLOR[g.id] }} aria-hidden />
            <dt className="text-muted-foreground">{g.label}</dt>
            <dd className={cn("font-medium tabular-nums", counts[g.id] === 0 && "text-dim")}>{counts[g.id]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
