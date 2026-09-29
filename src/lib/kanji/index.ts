import data from "./data.json";
import type { Kanji } from "./readings";

export * from "./readings";

/** All 2,136, in learning order: grade by grade, each by newspaper frequency. Server-side only: the browser gets the few a session needs. */
export const KANJI: Kanji[] = data as Kanji[];

const BY_CHAR = new Map(KANJI.map((k) => [k.c, k]));

export function getKanji(c: string): Kanji | undefined {
  return BY_CHAR.get(c);
}

export interface KanjiGroup {
  /** URL-safe id: grade-1 ... grade-6, secondary. */
  id: string;
  title: string;
  /** Short label for the cover badge. */
  badge: string;
  kanji: Kanji[];
}

const GROUP_DEFS: { id: string; title: string; badge: string; grade: number }[] = [
  { id: "grade-1", title: "Grade 1", badge: "1年", grade: 1 },
  { id: "grade-2", title: "Grade 2", badge: "2年", grade: 2 },
  { id: "grade-3", title: "Grade 3", badge: "3年", grade: 3 },
  { id: "grade-4", title: "Grade 4", badge: "4年", grade: 4 },
  { id: "grade-5", title: "Grade 5", badge: "5年", grade: 5 },
  { id: "grade-6", title: "Grade 6", badge: "6年", grade: 6 },
  { id: "secondary", title: "Secondary school", badge: "中高", grade: 8 },
];

export const KANJI_GROUPS: KanjiGroup[] = GROUP_DEFS.map((d) => ({
  id: d.id,
  title: d.title,
  badge: d.badge,
  kanji: KANJI.filter((k) => k.g === d.grade),
}));

export function getGroup(id: string): KanjiGroup | undefined {
  return KANJI_GROUPS.find((g) => g.id === id);
}
