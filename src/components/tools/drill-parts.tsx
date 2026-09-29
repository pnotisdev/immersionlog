"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Settings a drill remembers between visits. Restored after hydration so the server
 * render and the first client render agree; a stored value that no longer parses (an
 * older shape, blocked storage) just leaves the defaults.
 */
export function useStoredSettings<T extends object>(key: string, defaults: T, isValid: (v: unknown) => v is T) {
  const [value, setValue] = useState<T>(defaults);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      const parsed: unknown = raw ? JSON.parse(raw) : null;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring stored preferences after hydration
      if (isValid(parsed)) setValue(parsed);
    } catch {
      // Storage blocked (private mode, sandboxed preview): stay on the defaults.
    }
    // isValid is a module-level guard; the key never changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  function update(next: T) {
    setValue(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      // Not persisting is fine.
    }
  }

  return [value, update] as const;
}

/** A toggle button for a multi-select setting. */
export function Chip({
  on,
  onClick,
  children,
  className,
  lang,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  lang?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      lang={lang}
      onClick={onClick}
      className={cn(
        "rounded-sm border px-3 py-1.5 text-sm transition-colors",
        on ? "border-primary bg-accent/40 text-foreground" : "text-muted-foreground hover:border-primary/50 hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function SettingRow({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <div className="grid gap-2">
      <div className="text-sm font-medium">
        {label}
        {hint && <span className="ml-2 font-normal text-dim">{hint}</span>}
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function toggle<T>(list: T[], item: T): T[] {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

export function Stat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <div className="text-meta text-dim">{label}</div>
      <div className="text-lg font-semibold tabular-nums">{value}</div>
    </div>
  );
}
