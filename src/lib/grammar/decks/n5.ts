import { deck } from "../build";
import { basics } from "./n5/basics";

/**
 * JLPT N5 grammar, in the order a beginner meets it. Sections live in ./n5 so each
 * stays a manageable file; the order here is the learning order.
 */
export const N5 = deck(
  {
    id: "n5",
    level: "N5",
    title: "N5 grammar",
    description:
      "The grammar of a first Japanese textbook: です and だ, the core particles, verbs and adjectives in plain and polite forms, the て-form and what it builds, and the patterns for wanting, comparing, permission and giving reasons.",
  },
  [{ title: "First sentences", points: basics }],
);
