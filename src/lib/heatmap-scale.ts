/**
 * Sequential step 0-5 by quantile of the user's *own* non-zero days, not a fixed global
 * scale — otherwise a light user's whole year reads as a single step (redesign.md §3.3).
 * Shared by the in-app heatmap and the server-rendered report card, so the two agree.
 */
export function quantileStep(seconds: number[]): (s: number) => number {
  const nonZero = seconds.filter((s) => s > 0).sort((a, b) => a - b);
  if (nonZero.length === 0) return () => 0;
  const at = (p: number) => nonZero[Math.min(nonZero.length - 1, Math.floor(p * nonZero.length))];
  const thresholds = [at(0.2), at(0.4), at(0.6), at(0.8)];
  return (s: number) => {
    if (s <= 0) return 0;
    let step = 1;
    for (const t of thresholds) if (s > t) step++;
    return Math.min(5, step);
  };
}
