import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Pictures for the learning guide. Photos are openly licensed files from Wikimedia
 * Commons, stored resized in public/guide/ and credited in GUIDE_IMAGE_CREDITS (shown at
 * the foot of the guide). The diagrams are drawn here as SVG in the theme's colours, so
 * they follow light and dark mode.
 */

export interface ImageCredit {
  src: string;
  what: string;
  author: string;
  license: string;
  licenseUrl: string | null;
  source: string;
}

export const GUIDE_IMAGE_CREDITS: ImageCredit[] = [
  {
    src: "/guide/station-sign.webp",
    what: "Sakamoto Station name sign",
    author: "トレインファン",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Sakamoto_Station_name_sign_board.jpg",
  },
  {
    src: "/guide/hiragana-origin.webp",
    what: "Hiragana origin chart",
    author: "合略仮名",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Hiragana_origin_new.svg",
  },
  {
    src: "/guide/furigana.webp",
    what: "Furigana example",
    author: "Kang Seonghoon",
    license: "Public domain",
    licenseUrl: null,
    source: "https://commons.wikimedia.org/wiki/File:Furigana_example.svg",
  },
  {
    src: "/guide/kanji-drill.webp",
    what: "Kanji drill book",
    author: "Tatsuo Yamashita",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:%E3%81%86%E3%82%93%E3%81%93%E6%BC%A2%E5%AD%97%E3%83%89%E3%83%AA%E3%83%AB_(35068776162).jpg",
  },
  {
    src: "/guide/visual-novel.webp",
    what: "Visual novel screenshot",
    author: "31NOVA",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Visual_Novel_(%E6%81%8B%E6%84%9B%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%84%E3%82%AF%E3%83%BC%E3%83%AB%EF%BC%92).png",
  },
  {
    src: "/guide/manga-bookshop.webp",
    what: "Anime and manga bookshop in Kyoto",
    author: "Marek Ślusarczyk (Tupungato)",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:008_Anime_and_manga_bookshop_in_Japan_-_bookstore_in_Kyoto,_Japan.jpg",
  },
];

/** A photo with a caption; the credit line lives in the page's image credits. */
export function Photo({
  src,
  alt,
  width,
  height,
  caption,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: ReactNode;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("my-2", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 704px, 100vw"
        className="h-auto w-full rounded-lg border border-border bg-surface"
      />
      <figcaption className="mt-2 text-meta text-dim">{caption}</figcaption>
    </figure>
  );
}

function Diagram({ caption, children, label }: { caption: ReactNode; children: ReactNode; label: string }) {
  return (
    <figure className="my-2 rounded-lg border border-border bg-surface px-4 py-5 sm:px-6">
      <div role="img" aria-label={label} className="text-foreground">
        {children}
      </div>
      <figcaption className="mt-3 text-meta text-dim">{caption}</figcaption>
    </figure>
  );
}

/**
 * The three はし, Tokyo accent, each followed by the particle が so the difference at
 * the end shows: 箸 high-low-low (atamadaka), 橋 low-high-low (odaka), 端 low-high-high
 * (heiban).
 */
export function PitchAccentDiagram() {
  const words = [
    { kanji: "箸", gloss: "chopsticks", pattern: [1, 0, 0], name: "atamadaka" },
    { kanji: "橋", gloss: "bridge", pattern: [0, 1, 0], name: "odaka" },
    { kanji: "端", gloss: "edge", pattern: [0, 1, 1], name: "heiban" },
  ];
  const morae = ["は", "し", "が"];
  return (
    <Diagram
      label="Pitch contours of hashi-ga: chopsticks high-low-low, bridge low-high-low, edge low-high-high"
      caption="Three words spelled はし, told apart by pitch. The particle が shows the difference between bridge and edge: pitch drops after 橋 but stays up after 端 (Tokyo accent)."
    >
      {/* One small chart per word: side by side from sm up, stacked on a phone so the text stays legible. */}
      <div className="grid gap-5 sm:grid-cols-3" lang="ja">
        {words.map((w) => {
          const pts = w.pattern.map((h, j) => [30 + j * 60, h ? 34 : 84] as const);
          return (
            <svg key={w.kanji} viewBox="0 0 180 170" className="mx-auto w-full max-w-[200px]">
              <text x={90} y={14} textAnchor="middle" className="fill-muted-foreground font-mono text-[13px]">
                {w.name}
              </text>
              <polyline
                points={pts.map((p) => p.join(",")).join(" ")}
                className="fill-none stroke-primary"
                strokeWidth={2.5}
                strokeLinejoin="round"
              />
              {pts.map(([x, y], j) => (
                <circle key={j} cx={x} cy={y} r={6} className={j === 2 ? "fill-surface stroke-primary" : "fill-primary"} strokeWidth={2} />
              ))}
              {morae.map((m, j) => (
                <text key={j} x={30 + j * 60} y={120} textAnchor="middle" className={cn("text-[19px]", j === 2 ? "fill-muted-foreground" : "fill-current")}>
                  {m}
                </text>
              ))}
              <text x={90} y={156} textAnchor="middle" className="fill-current text-[17px] font-semibold">
                {w.kanji} <tspan className="fill-muted-foreground font-normal">{w.gloss}</tspan>
              </text>
            </svg>
          );
        })}
      </div>
    </Diagram>
  );
}

/** 私は日本語を毎日勉強します, with each particle's job labelled. */
export function SentenceDiagram() {
  const parts = [
    { jp: "私", p: "は", role: "topic", en: "I" },
    { jp: "日本語", p: "を", role: "object", en: "Japanese" },
    { jp: "毎日", p: "", role: "when", en: "every day" },
    { jp: "勉強します", p: "", role: "verb, last", en: "study" },
  ];
  return (
    <Diagram
      label="Sentence breakdown: watashi wa (topic), nihongo o (object), mainichi (time), benkyou shimasu (verb at the end)"
      caption="Particles after each word mark its role, so the verb can wait until the end. 私は is often dropped entirely when it's obvious who's talking."
    >
      <div className="flex flex-wrap items-end justify-center gap-x-2 gap-y-4" lang="ja">
        {parts.map((x) => (
          <div key={x.jp} className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl">
              {x.jp}
              {x.p && <span className="font-semibold text-primary">{x.p}</span>}
            </div>
            <div className="mt-2 rounded-sm border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground" lang="en">
              {x.role}
            </div>
            <div className="mt-1 text-meta text-dim" lang="en">
              {x.en}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">&ldquo;I study Japanese every day.&rdquo;</p>
    </Diagram>
  );
}

/** 休 (rest) = 亻 (person) + 木 (tree), and the readings of 生 by word. */
export function KanjiAnatomyDiagram() {
  const readings = [
    { word: "先生", reading: "せんせい", en: "teacher", kind: "on" },
    { word: "一生", reading: "いっしょう", en: "a lifetime", kind: "on" },
    { word: "生きる", reading: "いきる", en: "to live", kind: "kun" },
    { word: "生ビール", reading: "なまビール", en: "draft beer", kind: "kun" },
  ];
  return (
    <Diagram
      label="The kanji 休 made of person and tree; the kanji 生 read differently in four words"
      caption="Left: most kanji are built from smaller parts, which makes them easier to tell apart. Right: one kanji, several readings. The word decides which, which is why kanji are learned through words."
    >
      <div className="grid items-center gap-6 sm:grid-cols-2" lang="ja">
        <div className="flex items-center justify-center gap-3 text-center">
          <div>
            <div className="text-4xl">亻</div>
            <div className="mt-1 text-meta text-dim" lang="en">person</div>
          </div>
          <div className="text-2xl text-dim">+</div>
          <div>
            <div className="text-4xl">木</div>
            <div className="mt-1 text-meta text-dim" lang="en">tree</div>
          </div>
          <div className="text-2xl text-dim">=</div>
          <div>
            <div className="text-5xl text-primary">休</div>
            <div className="mt-1 text-meta text-dim" lang="en">rest</div>
          </div>
        </div>
        <ul className="grid gap-1.5 text-sm">
          {readings.map((r) => (
            <li key={r.word} className="flex items-baseline gap-2">
              <span className="w-20 text-lg">{r.word}</span>
              <span className="text-muted-foreground">{r.reading}</span>
              <span className="text-meta text-dim" lang="en">
                {r.en} · {r.kind}&apos;yomi
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Diagram>
  );
}

/** Too easy / comprehensible / too hard, as a band with the target zone lit. */
export function SweetSpotDiagram() {
  return (
    <Diagram
      label="Difficulty band: too easy, then the comprehensible zone where most is understood with effort, then too hard"
      caption="Input teaches most in the middle: you follow what's happening and meet a few new things. Pop-up dictionaries and easier material move text from the right into the middle."
    >
      <div className="grid grid-cols-[1fr_2fr_1fr] overflow-hidden rounded-md border border-border text-center text-sm">
        <div className="bg-background px-2 py-4 text-muted-foreground">
          Too easy
          <div className="mt-1 text-meta text-dim">nothing new</div>
        </div>
        <div className="bg-accent-tint px-2 py-4 font-medium text-foreground ring-2 ring-primary ring-inset">
          Comprehensible
          <div className="mt-1 text-meta font-normal text-muted-foreground">most of it, with some effort</div>
        </div>
        <div className="bg-background px-2 py-4 text-muted-foreground">
          Too hard
          <div className="mt-1 text-meta text-dim">noise</div>
        </div>
      </div>
    </Diagram>
  );
}

/** A card's reviews spreading out: 1 day, 3, 8, 3 weeks, 2 months... */
export function IntervalsDiagram() {
  const reviews = [0, 1, 4, 12, 33, 90];
  const labels = ["learn", "+1d", "+3d", "+8d", "+3w", "+2mo"];
  const x = (d: number) => 20 + (Math.sqrt(d) / Math.sqrt(90)) * 560;
  return (
    <Diagram
      label="Timeline of one card's reviews, spacing out from one day to two months"
      caption="Illustrative: each label is the gap since the previous review. Every successful review pushes the next one further out, so a card you know well costs almost nothing. FSRS picks the actual gaps from your own history."
    >
      <svg viewBox="0 0 600 80" className="w-full">
        <line x1={20} y1={40} x2={585} y2={40} className="stroke-border" strokeWidth={2} />
        {reviews.map((d, i) => (
          <g key={d}>
            <circle cx={x(d)} cy={40} r={7} className="fill-primary" />
            <text x={x(d)} y={70} textAnchor="middle" className="fill-muted-foreground text-[13px]">
              {labels[i]}
            </text>
          </g>
        ))}
        <text x={20} y={18} className="fill-muted-foreground text-[12px]">
          Day 0
        </text>
        <text x={585} y={18} textAnchor="end" className="fill-muted-foreground text-[12px]">
          Day 90
        </text>
      </svg>
    </Diagram>
  );
}

/**
 * Text coverage by vocabulary size, from Nation (2006), "How large a vocabulary is
 * needed for reading and listening?", combined novel corpus: 2,000 families 87.83%,
 * 4,000 + proper nouns 94.8%, 9,000 + proper nouns 98.24%. English data; the point is
 * the shape of the curve.
 */
export function CoverageDiagram() {
  const bars = [
    { words: "2,000", pct: 87.8 },
    { words: "4,000", pct: 94.8 },
    { words: "9,000", pct: 98.2 },
  ];
  // Scale from 70% so the differences that matter are visible.
  const w = (pct: number) => `${((pct - 70) / 30) * 100}%`;
  return (
    <Diagram
      label="Text coverage of English novels: 2,000 word families 88 percent, 4,000 about 95 percent, 9,000 about 98 percent"
      caption={
        <>
          Share of the words in English novels covered by the most common 2,000, 4,000 and 9,000 word families (the last two
          counting names as known). From Nation (2006). Going from 95% to 98% means going from one unknown word in twenty to one
          in fifty, and costs five thousand more word families.
        </>
      }
    >
      <div className="grid gap-3">
        {bars.map((b) => (
          <div key={b.words} className="grid grid-cols-[4.5rem_1fr_3.5rem] items-center gap-3 text-sm">
            <span className="text-right tabular-nums text-muted-foreground">{b.words}</span>
            <div className="h-5 overflow-hidden rounded-sm bg-background">
              <div className="h-full rounded-sm bg-primary" style={{ width: w(b.pct) }} />
            </div>
            <span className="tabular-nums">{b.pct}%</span>
          </div>
        ))}
        <p className="pl-[5.25rem] text-meta text-dim">Axis starts at 70%.</p>
      </div>
    </Diagram>
  );
}

/** Syllables vs morae: English hears to-kyo, Japanese counts to-o-kyo-o. */
export function MoraDiagram() {
  const words = [
    { word: "東京", morae: ["と", "う", "きょ", "う"], romaji: "Tōkyō" },
    { word: "漢字", morae: ["か", "ん", "じ"], romaji: "kanji" },
    { word: "切手", morae: ["き", "っ", "て"], romaji: "kitte" },
  ];
  return (
    <Diagram
      label="Mora counting: Tokyo is four beats, kanji is three, kitte is three"
      caption="Every kana is one beat of the same length, including ん, the small っ (a held pause) and the second half of a long vowel. English speakers tend to squeeze 東京 into two beats; Japanese gives it four."
    >
      <div className="grid gap-4 sm:grid-cols-3" lang="ja">
        {words.map((w) => (
          <div key={w.word} className="text-center">
            <div className="text-2xl">{w.word}</div>
            <div className="mt-2 flex justify-center gap-1">
              {w.morae.map((m, i) => (
                <span key={i} className="grid size-9 place-items-center rounded-sm border border-border bg-background text-base">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-1.5 text-meta text-dim" lang="en">
              {w.romaji} · {w.morae.length} beats
            </div>
          </div>
        ))}
      </div>
    </Diagram>
  );
}

/**
 * Word pairs that differ only in length: each mora is one fixed-width slot, so the
 * extra beat shows as extra width.
 */
export function LengthPairsDiagram() {
  // `hl`: the beats of the longer word that the shorter one doesn't have.
  const pairs = [
    { short: { morae: ["き", "て"], en: "come" }, long: { morae: ["き", "っ", "て"], en: "stamp" }, hl: [1] },
    { short: { morae: ["お", "ば", "さ", "ん"], en: "aunt" }, long: { morae: ["お", "ば", "あ", "さ", "ん"], en: "grandmother" }, hl: [2] },
    { short: { morae: ["びょ", "う", "い", "ん"], en: "hospital" }, long: { morae: ["び", "よ", "う", "い", "ん"], en: "beauty salon" }, hl: [0, 1] },
  ];
  const Row = ({ morae, en, hl = [] }: { morae: string[]; en: string; hl?: number[] }) => (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <div className="flex gap-1">
        {morae.map((m, i) => (
          <span
            key={i}
            className={cn(
              "grid h-9 w-10 place-items-center rounded-sm border text-base",
              hl.includes(i) ? "border-primary bg-accent-tint" : "border-border bg-background",
            )}
          >
            {m}
          </span>
        ))}
      </div>
      <span className="text-meta text-dim" lang="en">
        {en} · {morae.length}
      </span>
    </div>
  );
  return (
    <Diagram
      label="Word pairs that differ by one beat: kite and kitte, obasan and obaasan, byouin and biyouin"
      caption="Each box is one beat of the same length. Add a beat and you have a different word: a small っ is a held silence, a long vowel is a second beat, and びょ (one beat) is not び・よ (two). Say them while tapping once per box."
    >
      <div className="grid gap-5" lang="ja">
        {pairs.map((p) => (
          <div key={p.long.en} className="grid justify-center gap-2 sm:justify-start sm:pl-4">
            <Row {...p.short} />
            <Row {...p.long} hl={p.hl} />
          </div>
        ))}
      </div>
    </Diagram>
  );
}

/**
 * One sentence broken into chunks, each particle's job named, all pointing at the verb;
 * then the same chunks shuffled, meaning unchanged.
 */
export function ParticleRolesDiagram() {
  const chunks = [
    { word: "田中さん", p: "が", role: "who" },
    { word: "友達", p: "と", role: "with whom" },
    { word: "駅", p: "で", role: "where it happens" },
    { word: "本", p: "を", role: "what" },
  ];
  return (
    <Diagram
      label="Tanaka-san ga, tomodachi to, eki de, hon o, katta: each particle marks a role for the verb at the end. Shuffled, the sentence means the same."
      caption="Every chunk tells the verb what part it plays, so the chunks can move around; only the verb stays at the end. Both lines mean “Tanaka bought a book with a friend at the station.”"
    >
      <div className="grid gap-5" lang="ja">
        <div className="flex flex-wrap items-stretch justify-center gap-2">
          {chunks.map((c) => (
            <div key={c.p} className="flex flex-col items-center rounded-md border border-border bg-background px-3 py-2">
              <span className="text-xl">
                {c.word}
                <span className="font-semibold text-primary">{c.p}</span>
              </span>
              <span className="mt-1 text-meta text-dim" lang="en">
                {c.role}
              </span>
            </div>
          ))}
          <div className="flex items-center text-dim max-sm:hidden" aria-hidden>
            →
          </div>
          <div className="flex flex-col items-center rounded-md border border-primary bg-accent-tint px-3 py-2">
            <span className="text-xl font-semibold">買った</span>
            <span className="mt-1 text-meta text-muted-foreground" lang="en">
              bought (verb, last)
            </span>
          </div>
        </div>
        <p className="text-center text-lg text-muted-foreground">
          本<span className="text-primary">を</span>田中さん<span className="text-primary">が</span>駅<span className="text-primary">で</span>
          友達<span className="text-primary">と</span>買った。
        </p>
      </div>
    </Diagram>
  );
}

/** Input builds what you understand; output draws on it and shows you what's missing. */
export function InputOutputDiagram() {
  const box = "rounded-md border border-border bg-background px-3 py-3 text-center";
  return (
    <Diagram
      label="Input (listening and reading) grows what you understand; output (speaking and writing) draws on it; output exposes gaps, which you then notice in input"
      caption="Input is where the language comes from: you can only say what you've taken in. Output turns it into something you can use at speed, and every time you get stuck, it shows you what to look out for in your next hour of input."
    >
      <div className="grid gap-2 text-sm">
        <div className="grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <div className={box}>
            <div className="font-semibold">Input</div>
            <div className="mt-0.5 text-meta text-dim">listening, reading</div>
          </div>
          <div className="text-center text-dim" aria-hidden>
            <span className="sm:hidden">↓</span>
            <span className="max-sm:hidden">→</span>
          </div>
          <div className={cn(box, "border-primary bg-accent-tint")}>
            <div className="font-semibold">What you understand</div>
            <div className="mt-0.5 text-meta text-muted-foreground">words, grammar, sounds</div>
          </div>
          <div className="text-center text-dim" aria-hidden>
            <span className="sm:hidden">↓</span>
            <span className="max-sm:hidden">→</span>
          </div>
          <div className={box}>
            <div className="font-semibold">Output</div>
            <div className="mt-0.5 text-meta text-dim">speaking, writing</div>
          </div>
        </div>
        <div className="rounded-md border border-dashed border-line-strong px-3 py-2 text-center text-muted-foreground">
          <span aria-hidden>↩ </span>Output shows you the gaps; you start noticing them in input
        </div>
      </div>
    </Diagram>
  );
}

/**
 * The stages and turning points from "A Year to Learn Japanese", as a vertical
 * timeline with the nope threshold highlighted.
 */
export function StagesDiagram() {
  const steps: { kind: "stage" | "point"; title: string; text: string; key?: boolean }[] = [
    { kind: "stage", title: "Stage one: building a foundation", text: "Kana, first words, basic grammar. Real Japanese is a brick wall; study is what tips the scales." },
    { kind: "point", title: "The nope threshold", text: "Native content becomes tolerable. Not easy, not efficient: you just stop “noping” out of it.", key: true },
    { kind: "stage", title: "Stage two: engaging with content", text: "You pick things you care about and solve the problems they throw at you. Progress is real but hard to see." },
    { kind: "point", title: "The epiphany moment", text: "Something makes you look back, and Japanese isn't so hard any more." },
    { kind: "stage", title: "Stage three: enjoying it", text: "Learning is a by-product of doing things you enjoy. The backlog grows faster than you can clear it." },
    { kind: "point", title: "The hurt-ego moment", text: "A wall: a book you can't get through, a conversation that goes badly. It spurs you to change something." },
    { kind: "stage", title: "Stage two, again", text: "A new skill or a harder kind of Japanese, starting from stage two. This loop repeats for years." },
  ];
  return (
    <Diagram
      label="Stages of learning: foundation, then the nope threshold, engaging with content, the epiphany moment, enjoying it, the hurt-ego moment, and stage two again"
      caption="Adapted from the stages in A Year to Learn Japanese. Months 3–6 usually sit on either side of the nope threshold, which is exactly where progress is hardest to feel."
    >
      <ol className="relative grid gap-3 pl-6 text-sm before:absolute before:top-2 before:bottom-2 before:left-[0.4375rem] before:w-px before:bg-line-strong">
        {steps.map((s) => (
          <li key={s.title} className="relative">
            <span
              className={cn(
                "absolute top-1.5 -left-6 size-3.5 rounded-full border-2",
                s.kind === "point" ? "rotate-45 rounded-none" : "",
                s.key ? "border-primary bg-primary" : s.kind === "point" ? "border-primary bg-surface" : "border-line-strong bg-background",
              )}
              aria-hidden
            />
            <p className={cn("font-semibold", s.kind === "point" && "text-primary")}>{s.title}</p>
            <p className="text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </Diagram>
  );
}

/** Credits for the photos used on one chapter, at its foot (CC BY needs them on the page). */
export function ImageCredits({ srcs }: { srcs: string[] }) {
  const credits = GUIDE_IMAGE_CREDITS.filter((c) => srcs.includes(c.src));
  if (credits.length === 0) return null;
  return (
    <section className="border-t border-border pt-6">
      <h2 className="text-meta font-semibold text-muted-foreground">Image credits</h2>
      <ul className="mt-2 grid gap-1 text-meta text-dim">
        {credits.map((c) => (
          <li key={c.src}>
            <a href={c.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
              {c.what}
            </a>{" "}
            by {c.author},{" "}
            {c.licenseUrl ? (
              <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline underline-offset-2 hover:text-foreground">
                {c.license}
              </a>
            ) : (
              c.license
            )}
            , resized.
          </li>
        ))}
      </ul>
    </section>
  );
}
