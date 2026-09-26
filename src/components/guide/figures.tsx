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
