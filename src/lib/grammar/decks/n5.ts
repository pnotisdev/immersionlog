import { deck } from "../build";
import { adjectives } from "./n5/adjectives";
import { basics } from "./n5/basics";
import { connecting } from "./n5/connecting";
import { everyday } from "./n5/everyday";
import { questions } from "./n5/questions";
import { teForm } from "./n5/te-form";
import { verbs } from "./n5/verbs";

/**
 * JLPT N5 grammar. Points are written by topic in ./n5; the stages below are the
 * learning order, easiest first, each one building only on what came before.
 */
export const N5 = deck(
  {
    id: "n5",
    level: "N5",
    title: "N5 grammar",
    description:
      "The grammar of a first Japanese textbook: です and だ, the core particles, verbs and adjectives in plain and polite forms, the て-form and what it builds, and the patterns for wanting, comparing, permission and giving reasons.",
  },
  [basics, verbs, adjectives, questions, teForm, connecting, everyday],
  [
    {
      title: "1 · Saying who and what",
      ids: [
        "n5-desu", "n5-wa", "n5-ka", "n5-ja-nai", "n5-no", "n5-mo", "n5-name-suffixes", "n5-jin-go",
        "n5-kore-sore-are", "n5-kono-sono-ano", "n5-koko-soko-asoko", "n5-nani", "n5-dare", "n5-ne", "n5-yo",
        "n5-sou", "n5-deshita", "n5-ja-nakatta",
      ],
    },
    {
      title: "2 · Where things are, and how many",
      ids: [
        "n5-arimasu", "n5-imasu", "n5-ga", "n5-ni-location", "n5-position", "n5-kochira", "n5-o-go",
        "n5-counter-tsu", "n5-counter-nin", "n5-ikura-ikutsu", "n5-time", "n5-to-and", "n5-ya", "n5-wo-kudasai",
      ],
    },
    {
      title: "3 · Polite verbs and the core particles",
      ids: [
        "n5-masu", "n5-masen", "n5-mashita", "n5-masen-deshita", "n5-wo", "n5-ni-time", "n5-itsu", "n5-goro",
        "n5-ni-destination", "n5-he", "n5-de-place", "n5-de-means", "n5-to-with", "n5-kara-made", "n5-ni-target",
        "n5-mashou", "n5-masen-ka", "n5-ni-iku", "n5-soshite",
      ],
    },
    {
      title: "4 · Describing things, likes and wants",
      ids: [
        "n5-i-adjectives", "n5-na-adjectives", "n5-i-adj-negative", "n5-i-adj-past", "n5-i-adj-past-negative",
        "n5-adj-te", "n5-donna", "n5-dou", "n5-ga-suki", "n5-ga-jouzu", "n5-wa-ga", "n5-ga-wakaru", "n5-ga-dekiru",
        "n5-ga-hoshii", "n5-tai", "n5-amari-zenzen", "n5-frequency", "n5-mashou-ka", "n5-kara-because",
        "n5-ga-but", "n5-demo",
      ],
    },
    {
      title: "5 · Counting, comparing and asking",
      ids: [
        "n5-counter-hon", "n5-counter-mai", "n5-counters-more", "n5-tachi", "n5-gurai", "n5-dake", "n5-ni-per",
        "n5-de-total", "n5-juu-chuu", "n5-question-ka", "n5-question-mo", "n5-doushite", "n5-ka-or", "n5-yori",
        "n5-yori-no-hou-ga", "n5-dochira", "n5-ichiban", "n5-motto", "n5-to-onaji", "n5-konna", "n5-wa-contrast",
      ],
    },
    {
      title: "6 · The て-form and changes",
      ids: [
        "n5-te-and", "n5-te-kudasai", "n5-te-iru", "n5-te-iru-state", "n5-te-mo-ii", "n5-te-wa-ikenai",
        "n5-te-kara", "n5-mou", "n5-mada", "n5-adverbs", "n5-naru", "n5-ku-suru", "n5-ni-suru", "n5-wo-through",
        "n5-de-cause", "n5-de-material", "n5-particle-mo", "n5-nado", "n5-no-one",
      ],
    },
    {
      title: "7 · Plain forms",
      ids: [
        "n5-plain-present", "n5-nai", "n5-ta", "n5-nakatta", "n5-da", "n5-datta", "n5-naide-kudasai",
        "n5-nakute-mo-ii", "n5-nakereba-naranai", "n5-nakute-wa-ikenai", "n5-ta-koto-ga-aru", "n5-tari-tari",
        "n5-verb-no", "n5-relative-clause", "n5-question-demo",
      ],
    },
    {
      title: "8 · Time, plans and explanations",
      ids: [
        "n5-mae-ni", "n5-ato-de", "n5-toki", "n5-nagara", "n5-kedo", "n5-n-desu", "n5-deshou", "n5-tsumori",
        "n5-hou-ga-ii", "n5-shika-nai",
      ],
    },
  ],
);
