"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Common session lengths — covers a single episode/chapter/short read through a longer sit-down. */
const PRESETS_MINUTES = [5, 15, 20, 25, 30, 45, 60, 90];

function presetLabel(m: number): string {
  if (m < 60) return `${m}m`;
  return m % 60 === 0 ? `${m / 60}h` : `${Math.floor(m / 60)}h${m % 60}m`;
}

function fromMinutes(total: number): { hours: string; minutes: string } {
  return { hours: String(Math.floor(total / 60)), minutes: String(total % 60) };
}

/**
 * Hours/minutes entry for a session's duration, with one-tap presets for the common
 * lengths (an episode, a chapter, a round half hour) so most logs never need the
 * number inputs at all. The inputs stay for anything a preset doesn't cover.
 */
export function DurationInput({
  hours,
  minutes,
  onChange,
  label = "Duration",
  typicalMinutes,
}: {
  hours: string;
  minutes: string;
  onChange: (v: { hours: string; minutes: string }) => void;
  label?: string;
  /** This item's own average session length, if there's history — shown as a distinguished "usual" chip. */
  typicalMinutes?: number | null;
}) {
  const totalMinutes = (Number(hours) || 0) * 60 + (Number(minutes) || 0);
  const presets =
    typicalMinutes && !PRESETS_MINUTES.includes(typicalMinutes)
      ? [...PRESETS_MINUTES, typicalMinutes].sort((a, b) => a - b)
      : PRESETS_MINUTES;

  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-1.5">
        {presets.map((m) => {
          const isTypical = m === typicalMinutes;
          const isSelected = totalMinutes === m;
          return (
            <button
              key={m}
              type="button"
              onClick={() => onChange(fromMinutes(m))}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                isSelected
                  ? "border-foreground bg-foreground text-background"
                  : isTypical
                    ? "border-primary/50 text-primary hover:bg-primary/10"
                    : "hover:bg-muted",
              )}
            >
              {presetLabel(m)}
              {isTypical && !isSelected && " · usual"}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <Input
            type="number"
            min={0}
            max={24}
            value={hours}
            onChange={(e) => onChange({ hours: e.target.value, minutes })}
            aria-label="Hours"
            className="pr-8"
          />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">h</span>
        </div>
        <div className="relative">
          <Input
            type="number"
            min={0}
            max={59}
            value={minutes}
            onChange={(e) => onChange({ hours, minutes: e.target.value })}
            aria-label="Minutes"
            className="pr-8"
          />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">m</span>
        </div>
      </div>
    </div>
  );
}
