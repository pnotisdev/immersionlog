import type { LevelInfo } from "@/lib/progression";
import { formatNumber } from "@/lib/format";

/** Compact "Lv 12" pill. */
export function LevelPill({ info, label, title }: { info: LevelInfo; label?: string; title?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium tabular-nums" title={title ?? `${formatNumber(info.xp)} XP`}>
      {label && <span className="font-normal text-muted-foreground">{label}</span>}
      Lv {info.level}
    </span>
  );
}
