import { adjectives, existence, teForm, verbs } from "./lessons/part2";
import { giving, teIru, wantAbility } from "./lessons/part2b";
import { clauses, conditionals, nominalizers, quotes, reasons, timeWords } from "./lessons/part3";
import { causative, comparing, guessing, obligation, passive, politeSpeech, requests } from "./lessons/part4";
import { casual, formalNouns, narration, parsing } from "./lessons/part5";
import { adverbs, counting, nouns, particlesCompared, politeCasual, timeExpressions, verbChart } from "./lessons/more1";
import { conjunctions, listing, purposeCause, thinkingFeeling, timing } from "./lessons/more2";
import { becomingMaking, intention, negativeForms, selfEachOther, suggesting, transitivePairs, wishes } from "./lessons/more3";
import { approximately, cannotHelp, compoundParticles, extraParticles, likeness, stemEndings } from "./lessons/more4";
import { questionEndings, sentenceEndings } from "./lessons/more5";
import { archaic, copulaLadder, grammarTerms, noDa, sounds, whyYesNo } from "./lessons/more6";
import { readingLab } from "./lessons/lab";
import { desu, sentenceShape, topic } from "./lessons/part1";
import { ga, no, pointing, roles } from "./lessons/part1b";
import { PRACTICE } from "./practice";
import { lessonMinutes, lessonSections, parseBody } from "./parse";
import type { Lesson, Node, Part } from "./types";

export const GUIDE_UPDATED = "2026-10-08";

/** The course in reading order. A new lesson is one entry here plus its text in ./lessons. */
export const PARTS: Part[] = [
  {
    id: "foundations",
    title: "Part 1 · How a sentence works",
    blurb: "The shape of a Japanese sentence, the particles that hold it together, names, politeness and pointing words.",
    lessons: [sentenceShape, desu, nouns, topic, ga, roles, particlesCompared, no, pointing, sounds, politeCasual],
  },
  {
    id: "verbs-adjectives",
    title: "Part 2 · Verbs, adjectives and the everyday basics",
    blurb: "Every basic form of verbs and adjectives, the て-form, numbers and time, and the first patterns built on them.",
    lessons: [verbs, adjectives, existence, counting, timeExpressions, teForm, verbChart, teIru, wantAbility, giving, adverbs],
  },
  {
    id: "joining-ideas",
    title: "Part 3 · Joining ideas",
    blurb: "Clauses that describe nouns, lists, reasons, conditions, time and quoted speech: how to read long sentences.",
    lessons: [clauses, nominalizers, listing, reasons, purposeCause, conditionals, timeWords, timing, quotes, thinkingFeeling, conjunctions],
  },
  {
    id: "attitude",
    title: "Part 4 · Actions and attitude",
    blurb: "Asking others to act, obligation, negatives, passives and causatives, change and intention, wishes and regrets.",
    lessons: [requests, suggesting, obligation, negativeForms, passive, transitivePairs, causative, becomingMaking, intention, selfEachOther, wishes],
  },
  {
    id: "nuance",
    title: "Part 5 · Judgement and nuance",
    blurb: "Guessing and likeness, comparing and approximating, the smaller particles, verb endings, written-style particles, and keigo.",
    lessons: [guessing, likeness, comparing, approximately, extraParticles, stemEndings, compoundParticles, cannotHelp, politeSpeech, archaic],
  },
  {
    id: "real-japanese",
    title: "Part 6 · Reading real Japanese",
    blurb: "Casual speech, sentence endings, questions, the voice of narration, the small nouns that make patterns, and a method for any sentence.",
    lessons: [casual, sentenceEndings, questionEndings, whyYesNo, noDa, copulaLadder, narration, formalNouns, grammarTerms, parsing, readingLab],
  },
];

/**
 * Longer reading passages for a lesson live in ./practice, keyed by slug, and are spliced
 * in before the lesson's "Key points" so each lesson ends with the short list, as before.
 */
function withPractice(lesson: Lesson): Lesson {
  const extra = PRACTICE[lesson.slug];
  if (!extra) return lesson;
  const at = lesson.body.lastIndexOf("\n## Key points");
  const body = at === -1 ? `${lesson.body}\n${extra}` : `${lesson.body.slice(0, at)}\n${extra}\n${lesson.body.slice(at)}`;
  return { ...lesson, body };
}

for (const part of PARTS) part.lessons = part.lessons.map(withPractice);

export const LESSONS: Lesson[] = PARTS.flatMap((p) => p.lessons);

export function lessonPath(l: { slug: string }): string {
  return `/grammar-guide/${l.slug}`;
}

export function getLesson(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

export function adjacentLessons(slug: string): { prev: Lesson | null; next: Lesson | null } {
  const i = LESSONS.findIndex((l) => l.slug === slug);
  return { prev: LESSONS[i - 1] ?? null, next: LESSONS[i + 1] ?? null };
}

export function partOf(slug: string): Part | undefined {
  return PARTS.find((p) => p.lessons.some((l) => l.slug === slug));
}

export interface ParsedLesson {
  lesson: Lesson;
  nodes: Node[];
  sections: { id: string; label: string }[];
  minutes: number;
}

const cache = new Map<string, ParsedLesson>();

/** The lesson with its text parsed; parsing is pure, so it's done once per server process. */
export function parseLesson(lesson: Lesson): ParsedLesson {
  let hit = cache.get(lesson.slug);
  if (!hit) {
    const nodes = parseBody(lesson.body);
    hit = { lesson, nodes, sections: lessonSections(nodes), minutes: lessonMinutes(nodes) };
    cache.set(lesson.slug, hit);
  }
  return hit;
}
