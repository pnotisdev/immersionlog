/**
 * The learning guide's chapters, in reading order. One list drives the chapter nav,
 * prev/next links, metadata and the sitemap, so adding a chapter is one entry here
 * plus its page under src/app/(profile)/guide/.
 */

export const GUIDE_UPDATED = "2026-09-27";

/** u/SuikaCider's "A Year to Learn Japanese", cited throughout the guide. */
export const A_YEAR_TO_LEARN_JAPANESE = "https://docs.google.com/document/d/10bRzVblKVOsQJjTc2PIi1Gbj_LrsJCkMkh0SutXCZdI/edit";

export interface GuideChapter {
  /** "" for the overview at /guide. */
  slug: string;
  /** Short name for navigation. */
  nav: string;
  title: string;
  description: string;
  minutes: number;
  sections: { id: string; label: string }[];
}

export const GUIDE_CHAPTERS: GuideChapter[] = [
  {
    slug: "",
    nav: "Start here",
    title: "How to learn Japanese: a getting-started guide",
    description:
      "A practical path from zero to reading and watching real Japanese: the kana, a starter vocabulary with Anki, kanji without the grind, grammar, comprehensible input, the free tools, and what to watch and read first.",
    minutes: 12,
    sections: [
      { id: "short-version", label: "The short version" },
      { id: "chapters", label: "The chapters" },
      { id: "expectations", label: "What to expect" },
      { id: "how-japanese-works", label: "How Japanese works" },
      { id: "faq", label: "Questions" },
    ],
  },
  {
    slug: "kana",
    nav: "Kana and pronunciation",
    title: "Hiragana, katakana and Japanese pronunciation",
    description:
      "Learn to read both kana scripts in days, not months, and get the sounds of Japanese right from the start: charts, spelling quirks, the mora rhythm, and the handful of sounds English speakers get wrong.",
    minutes: 14,
    sections: [
      { id: "kana", label: "The two kana scripts" },
      { id: "how-to-learn", label: "How to learn them" },
      { id: "extra-marks", label: "Voiced sounds and combinations" },
      { id: "quirks", label: "Spelling quirks" },
      { id: "pronunciation", label: "Pronunciation" },
      { id: "typing-fonts", label: "Typing and fonts" },
      { id: "origins", label: "Where kana came from" },
    ],
  },
  {
    slug: "vocabulary",
    nav: "Vocabulary and Anki",
    title: "Vocabulary and Anki: your first 1,500 words",
    description:
      "Why the first thousand words matter so much, how to set up Anki with FSRS and the Kaishi 1.5k deck, how to review without fooling yourself, and when to stop using pre-made decks.",
    minutes: 13,
    sections: [
      { id: "why", label: "How many words you need" },
      { id: "anki", label: "Anki" },
      { id: "kaishi", label: "Kaishi 1.5k" },
      { id: "settings", label: "Settings that matter" },
      { id: "reviewing", label: "How to review" },
      { id: "leeches", label: "Cards that won't stick" },
      { id: "after-kaishi", label: "After the starter deck" },
    ],
  },
  {
    slug: "kanji",
    nav: "Kanji",
    title: "How to learn kanji without the grind",
    description:
      "How kanji are built and read, why learning them through words works, the three routes learners take (and what each costs), and when to learn to write them.",
    minutes: 12,
    sections: [
      { id: "how-kanji-work", label: "How kanji work" },
      { id: "readings", label: "Readings" },
      { id: "routes", label: "Three routes through the kanji" },
      { id: "frequency", label: "Not all kanji are equal" },
      { id: "writing", label: "Writing by hand" },
    ],
  },
  {
    slug: "grammar",
    nav: "Grammar",
    title: "How to learn Japanese grammar",
    description:
      "Grammar as a map, not a checklist: the core ideas of Japanese sentences, how to study grammar in passes, and an honest comparison of the free guides, videos and textbooks.",
    minutes: 13,
    sections: [
      { id: "approach", label: "Learn it in passes" },
      { id: "core-ideas", label: "The core ideas" },
      { id: "resources", label: "Guides and videos" },
      { id: "textbooks", label: "Textbooks" },
      { id: "references", label: "When you get stuck" },
    ],
  },
  {
    slug: "immersion",
    nav: "Immersion and tools",
    title: "Immersion: how to learn from real Japanese",
    description:
      "Comprehensible input without the hype, when to start, active and passive listening, intensive and extensive reading, why you don't understand what you hear, and the free tools that make native content readable.",
    minutes: 18,
    sections: [
      { id: "input", label: "Comprehensible input" },
      { id: "when", label: "When to start" },
      { id: "listening", label: "Listening" },
      { id: "reading", label: "Reading" },
      { id: "subtitles", label: "Subtitles" },
      { id: "tools", label: "Tools" },
      { id: "mining", label: "Mining" },
    ],
  },
  {
    slug: "what-to-watch-and-read",
    nav: "What to watch and read",
    title: "What to watch and read: Japanese for beginners",
    description:
      "Beginner-friendly podcasts, YouTube, graded readers, anime, films, manga, visual novels, games and books, ranked by measured difficulty from Jiten.moe, with the all-ages status of every visual novel checked.",
    minutes: 16,
    sections: [
      { id: "choosing", label: "How to choose" },
      { id: "learner", label: "Made for learners" },
      { id: "podcasts", label: "Podcasts and YouTube" },
      { id: "anime", label: "Anime and films" },
      { id: "manga", label: "Manga" },
      { id: "visual-novels", label: "Visual novels" },
      { id: "games", label: "Games" },
      { id: "books", label: "Books" },
    ],
  },
  {
    slug: "speaking",
    nav: "Speaking and pitch accent",
    title: "Speaking, pitch accent and writing Japanese",
    description:
      "When to start speaking, what to practise before your first conversation, how to get something out of tutors and exchanges, pitch accent explained, and learning to write.",
    minutes: 12,
    sections: [
      { id: "when", label: "When to start" },
      { id: "before", label: "Before your first conversation" },
      { id: "conversations", label: "Conversations" },
      { id: "pitch-accent", label: "Pitch accent" },
      { id: "writing", label: "Writing" },
    ],
  },
  {
    slug: "routine",
    nav: "Routine and milestones",
    title: "A daily Japanese study routine, and what to expect",
    description:
      "Sample routines for your first week, first month and first year, milestones to aim for, how to stay consistent, and the most common mistakes.",
    minutes: 10,
    sections: [
      { id: "first-week", label: "Your first week" },
      { id: "first-months", label: "The first months" },
      { id: "milestones", label: "Milestones" },
      { id: "consistency", label: "Staying consistent" },
      { id: "mistakes", label: "Common mistakes" },
    ],
  },
];

export function guidePath(slug: string): string {
  return slug ? `/guide/${slug}` : "/guide";
}

export function guideChapter(slug: string): GuideChapter {
  const c = GUIDE_CHAPTERS.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown guide chapter: ${slug}`);
  return c;
}

export function adjacentChapters(slug: string): { prev: GuideChapter | null; next: GuideChapter | null } {
  const i = GUIDE_CHAPTERS.findIndex((x) => x.slug === slug);
  return { prev: GUIDE_CHAPTERS[i - 1] ?? null, next: GUIDE_CHAPTERS[i + 1] ?? null };
}
