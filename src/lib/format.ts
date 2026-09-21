/**
 * The one duration format used everywhere (redesign.md §6): under an hour is just
 * minutes, under ten hours shows both units, ten and up drops minutes, and zero is
 * an em dash rather than "0m". Never decimal hours.
 * 5400 -> "1h 30m"; 90 -> "1m"; 37800 -> "10h"; 0 -> "—".
 */
export function formatDuration(seconds: number): string {
  const total = Math.max(0, Math.round(seconds));
  if (total === 0) return "—";
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  if (h === 0) return `${m}m`;
  if (h >= 10 || m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

/** 1 -> "1 session"; 3 -> "3 sessions". Avoids the classic "1 sessions" bug. */
export function pluralize(n: number, singular: string, plural = `${singular}s`): string {
  return `${formatNumber(n)} ${n === 1 ? singular : plural}`;
}

/** 5400 -> "01:30:00" for the live timer. */
export function formatClock(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

/** Hours with one decimal: 5400 -> "1.5". */
export function toHours(seconds: number, digits = 1): string {
  return (seconds / 3600).toFixed(digits);
}

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
const full = new Intl.NumberFormat("en");

/** 1234567 -> "1.2M" */
export function formatCompact(n: number) {
  return compact.format(n);
}

export function formatNumber(n: number) {
  return full.format(n);
}

const shortDate = new Intl.DateTimeFormat("en", { day: "numeric", month: "short" });
const shortDateWithYear = new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" });

/**
 * The one date format used everywhere (redesign.md §6): relative under a week,
 * then a calendar date — "21 Sep" this year, "21 Sep 2025" otherwise. Never
 * "3w ago" / "2mo ago"; nobody reads elapsed time in weeks or months at a glance.
 * "just now", "42m ago", "10h ago", "3d ago", "21 Sep", "21 Sep 2025".
 */
export function relativeTime(date: Date | string, now = new Date()): string {
  const d = new Date(date);
  const minutes = Math.floor((now.getTime() - d.getTime()) / 60_000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const h = Math.floor(minutes / 60);
  if (h < 24) return `${h}h ago`;
  const days = Math.floor(h / 24);
  if (days < 7) return `${days}d ago`;
  return d.getFullYear() === now.getFullYear() ? shortDate.format(d) : shortDateWithYear.format(d);
}

/** "2026-09-20" -> "Sep 2026". Used for "tracking since" style copy — never a raw ISO date in UI. */
export function formatMonthYear(dateKey: string): string {
  const [y, m] = dateKey.slice(0, 7).split("-").map(Number);
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(Date.UTC(y, m - 1, 1)));
}
