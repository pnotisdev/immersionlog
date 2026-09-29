// Builds src/lib/kanji/data.json: the 2,136 jōyō kanji with meanings and on/kun readings.
// Source: kanjiapi.dev, which is KANJIDIC2 (EDRDG, CC BY-SA 4.0). Run: node scripts/build-kanji-data.mjs
import { writeFileSync } from "node:fs";

const API = "https://kanjiapi.dev/v1/kanji";
const list = await (await fetch(`${API}/jouyou`)).json();

async function one(ch) {
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(`${API}/${encodeURIComponent(ch)}`);
      if (r.ok) return r.json();
    } catch {}
    await new Promise((r) => setTimeout(r, 400 * (i + 1)));
  }
  throw new Error(`failed: ${ch}`);
}

const raw = [];
for (let i = 0; i < list.length; i += 20) raw.push(...(await Promise.all(list.slice(i, i + 20).map(one))));

// Grades 1-6 are the elementary kanji, 8 the remaining jōyō taught in secondary school. 9-10 are jinmeiyō.
// The 2010 list counts four variant pairs once (剥/剝, 叱/𠮟, 填/塡, 頬/頰), but kanjiapi has both forms of each.
// Keep the one people type and fonts render (剥 叱 填 頬), which leaves exactly 2,136.
const VARIANTS = new Set(["剝", "𠮟", "塡", "頰"]);
const jouyou = raw.filter((k) => [1, 2, 3, 4, 5, 6, 8].includes(k.grade) && !VARIANTS.has(k.kanji));
jouyou.sort(
  (a, b) =>
    (a.grade === 8 ? 7 : a.grade) - (b.grade === 8 ? 7 : b.grade) ||
    (a.freq_mainichi_shinbun ?? 9999) - (b.freq_mainichi_shinbun ?? 9999) ||
    a.stroke_count - b.stroke_count ||
    a.unicode.localeCompare(b.unicode),
);

const out = jouyou.map((k) => ({
  c: k.kanji,
  g: k.grade,
  m: k.meanings.slice(0, 4),
  on: k.on_readings,
  kun: k.kun_readings,
  s: k.stroke_count,
  ...(k.jlpt ? { n: k.jlpt } : {}),
}));
writeFileSync("src/lib/kanji/data.json", JSON.stringify(out));
console.log(out.length, "kanji; by grade:", [1, 2, 3, 4, 5, 6, 8].map((g) => `${g}:${out.filter((k) => k.g === g).length}`).join(" "));
console.log("no meaning:", out.filter((k) => !k.m.length).length, "no on:", out.filter((k) => !k.on.length).length, "no kun:", out.filter((k) => !k.kun.length).length, "neither:", out.filter((k) => !k.on.length && !k.kun.length).length);
