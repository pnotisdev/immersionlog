/**
 * The learning guide's chapters, in reading order. One list drives the chapter nav,
 * prev/next links, metadata and the sitemap, so adding a chapter is one entry here
 * plus its page under src/app/(profile)/guide/.
 */

export const GUIDE_UPDATED = "2026-09-27";

/** u/SuikaCider's "A Year to Learn Japanese", cited throughout the guide. */
export const A_YEAR_TO_LEARN_JAPANESE = "https://docs.google.com/document/d/10bRzVblKVOsQJjTc2PIi1Gbj_LrsJCkMkh0SutXCZdI/edit";

/** morg.systems, whose notes the guide draws on for the learning loop, output, reading and traps. */
export const MORG = "https://morg.systems";

export const REFOLD_ROADMAP = "https://refold.la/roadmap";

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
      { id: "loop", label: "The loop" },
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
    slug: "natural-japanese",
    nav: "Sounding natural",
    title: "Casual Japanese: how to sound natural, not like a textbook",
    description:
      "Why textbook Japanese sounds stiff, and what real speech does instead: plain forms, contractions, dropped particles, sentence-ending particles, fillers and back-channelling, onomatopoeia, slang, anime role language, Kansai dialect and when politeness still matters.",
    minutes: 20,
    sections: [
      { id: "why", label: "Why textbook Japanese sounds stiff" },
      { id: "plain-polite", label: "Plain and polite" },
      { id: "contractions", label: "Contractions" },
      { id: "fragments", label: "Dropped words and fragments" },
      { id: "particles", label: "Sentence-ending particles" },
      { id: "pronouns", label: "Pronouns and names" },
      { id: "fillers", label: "Fillers and back-channelling" },
      { id: "softening", label: "Softening and indirectness" },
      { id: "set-phrases", label: "Set phrases" },
      { id: "onomatopoeia", label: "Onomatopoeia" },
      { id: "slang", label: "Slang" },
      { id: "role-language", label: "Anime speech and role language" },
      { id: "kansai", label: "Kansai dialect" },
      { id: "keigo", label: "When politeness goes up" },
      { id: "textbook-skips", label: "What textbooks skip" },
      { id: "practice", label: "How to learn it" },
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
      { id: "ambiguity", label: "Letting things go" },
      { id: "listening", label: "Listening" },
      { id: "reading", label: "Reading" },
      { id: "narrow", label: "Read narrow" },
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
      "Beginner-friendly podcasts, YouTube channels, graded readers, anime, films, manga, visual novels, games and books, ranked by measured difficulty from Jiten.moe, with the all-ages status of every visual novel checked, and a finder that filters every title in the guide.",
    minutes: 20,
    sections: [
      { id: "choosing", label: "How to choose" },
      { id: "find", label: "Find something" },
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
      { id: "practice", label: "Practising output" },
      { id: "pitch-accent", label: "Pitch accent" },
      { id: "writing", label: "Writing" },
    ],
  },
  {
    slug: "routine",
    nav: "Routine and milestones",
    title: "A daily Japanese study routine, and what to expect",
    description:
      "Sample routines for your first week and first months, a plan for 30–45 minutes a day, what to emphasise if your goal is anime, novels, travel or work, milestones, what to do when progress feels invisible, and how to stay consistent through bad weeks.",
    minutes: 18,
    sections: [
      { id: "first-week", label: "Your first week" },
      { id: "first-months", label: "The first months" },
      { id: "short-on-time", label: "Only 30–45 minutes a day" },
      { id: "goals", label: "If you have one main goal" },
      { id: "milestones", label: "Milestones" },
      { id: "plateaus", label: "When progress feels invisible" },
      { id: "consistency", label: "Staying consistent" },
      { id: "mistakes", label: "Common mistakes" },
    ],
  },
  {
    slug: "traps",
    nav: "Traps to skip",
    title: "Bad ideas for learning Japanese (and what to do instead)",
    description:
      "The popular shortcuts that cost you months: romaji, Duolingo, machine translation, fill-in-the-blank exercises, English-first flashcards, studying song lyrics, children's books, waiting until you're ready, and the fixed study partner. Plus the things people worry about that are actually fine.",
    minutes: 11,
    sections: [
      { id: "why", label: "Why a list of bad ideas" },
      { id: "shortcuts", label: "Shortcuts that aren't" },
      { id: "exercises", label: "Exercises that waste your time" },
      { id: "material", label: "Material traps" },
      { id: "people", label: "The study-buddy trap" },
      { id: "fine", label: "Things that are actually fine" },
    ],
  },
  {
    slug: "intermediate",
    nav: "Intermediate",
    title: "Intermediate Japanese: from learner material to native content",
    description:
      "What intermediate means, why progress seems to slow down, and what to change: reading volume, Japanese-Japanese dictionaries, casual listening, grammar review and first conversations, with a ranked list of anime, dramas, manga, books and games for this stage.",
    minutes: 16,
    sections: [
      { id: "where-you-are", label: "Where you are" },
      { id: "plateau", label: "The intermediate plateau" },
      { id: "what-changes", label: "What to change" },
      { id: "dictionaries", label: "Japanese-Japanese dictionaries" },
      { id: "grammar-review", label: "Filling grammar gaps" },
      { id: "recommendations", label: "What to watch and read" },
    ],
  },
  {
    slug: "upper-intermediate",
    nav: "Upper intermediate",
    title: "Upper-intermediate Japanese: fluency in what you enjoy",
    description:
      "When most entertainment is comfortable but some things still aren't: fast group talk, specialist dramas, long novels, native radio and podcasts. How to widen your range, speed up reading and start producing natural Japanese, with harder recommendations.",
    minutes: 14,
    sections: [
      { id: "where-you-are", label: "Where you are" },
      { id: "widen", label: "Widen your range" },
      { id: "listening", label: "Native listening" },
      { id: "reading", label: "Reading faster and longer" },
      { id: "output", label: "Output and feedback" },
      { id: "recommendations", label: "What to watch and read" },
    ],
  },
  {
    slug: "advanced",
    nav: "Advanced",
    title: "Advanced Japanese: literature, keigo, news and beyond",
    description:
      "The long road past N1: modern and Meiji-era literature, news and editorials, keigo you can actually use, formal writing, idioms and four-character compounds, dialects, classical Japanese, linguistics and the history of the language, kanji proficiency, and the hardest popular media.",
    minutes: 18,
    sections: [
      { id: "where-you-are", label: "What advanced means" },
      { id: "literature", label: "Literature" },
      { id: "news", label: "News and non-fiction" },
      { id: "keigo", label: "Keigo you can use" },
      { id: "writing", label: "Formal writing" },
      { id: "idioms", label: "Idioms and set expressions" },
      { id: "dialects", label: "Dialects" },
      { id: "classical", label: "Classical Japanese" },
      { id: "linguistics", label: "Linguistics and language history" },
      { id: "tests", label: "Tests and credentials" },
      { id: "recommendations", label: "The hardest popular media" },
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
