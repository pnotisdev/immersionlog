import { deck } from "../build";
import { conditionals } from "./n4/conditionals";
import { connecting } from "./n4/connecting";
import { everyday } from "./n4/everyday";
import { extras } from "./n4/extras";
import { forms } from "./n4/forms";
import { giving } from "./n4/giving";
import { hearsay } from "./n4/hearsay";
import { keigo } from "./n4/keigo";
import { purpose } from "./n4/purpose";
import { tePatterns } from "./n4/te-patterns";
import { voice } from "./n4/voice";

/**
 * JLPT N4 grammar, picking up where N5 ends. Points are written by topic in ./n4; the
 * stages below are the learning order, easiest first.
 */
export const N4 = deck(
  {
    id: "n4",
    level: "N4",
    title: "N4 grammar",
    description:
      "The grammar that takes you from textbook sentences to real conversation: potential, volitional, passive and causative forms, giving and receiving, conditionals, guessing and hearsay, the て-form patterns, and polite speech.",
  },
  [forms, giving, conditionals, voice, hearsay, tePatterns, purpose, connecting, everyday, keigo, extras],
  [
    {
      title: "1 · Joining sentences",
      ids: [
        "n4-dakara", "n4-sorede", "n4-soreni", "n4-soretomo", "n4-tokorode", "n4-node", "n4-noni", "n4-shi",
        "n4-te-reason", "n4-kitto", "n4-zehi", "n4-naa", "n4-kana", "n4-toka", "n4-mo-number", "n4-zutsu",
        "n4-sugiru", "n4-yasui-nikui", "n4-kata", "n4-hajimeru-owaru", "n4-sa",
      ],
    },
    {
      title: "2 · Thinking, saying and knowing",
      ids: [
        "n4-to-omou", "n4-to-iu", "n4-to-iu-name", "n4-tte", "n4-kamoshirenai", "n4-embedded-question",
        "n4-ka-dou-ka", "n4-koto-nominalizer", "n4-no-wa", "n4-no-vs-koto", "n4-toki-tense", "n4-yotei",
        "n4-made-ni", "n4-aida", "n4-uchi-ni",
      ],
    },
    {
      title: "3 · Can, let's and must",
      ids: [
        "n4-potential", "n4-koto-ga-dekiru", "n4-mieru-kikoeru", "n4-volitional", "n4-you-to-omou",
        "n4-imperative", "n4-nasai", "n4-naito", "n4-ga-suru", "n4-transitivity",
      ],
    },
    {
      title: "4 · What the て-form builds",
      ids: [
        "n4-te-shimau", "n4-te-oku", "n4-te-aru", "n4-te-miru", "n4-te-iku-kuru", "n4-naide", "n4-zu-ni",
        "n4-te-hoshii", "n4-mama", "n4-bakari", "n4-ta-bakari", "n4-tokoro", "n4-dasu", "n4-naku-naru",
      ],
    },
    {
      title: "5 · Giving and receiving",
      ids: [
        "n4-ageru", "n4-kureru", "n4-morau", "n4-te-ageru", "n4-te-kureru", "n4-te-morau", "n4-te-yaru",
        "n4-polite-requests", "n4-kudasaru-itadaku",
      ],
    },
    {
      title: "6 · If, when and even if",
      ids: [
        "n4-tara", "n4-ba", "n4-to-conditional", "n4-nara", "n4-temo", "n4-question-temo", "n4-demo-even",
        "n4-tara-dou", "n4-ba-ii", "n4-ba-yokatta", "n4-temo-kamawanai", "n4-demo-suggest", "n4-hitsuyou",
      ],
    },
    {
      title: "7 · Looks like, I hear, it seems",
      ids: [
        "n4-sou-looks", "n4-sou-hearsay", "n4-you-da", "n4-mitai", "n4-rashii", "n4-hazu", "n4-hazu-ga-nai",
        "n4-garu", "n4-hodo-nai", "n4-koto-ga-aru",
      ],
    },
    {
      title: "8 · Aims, decisions and change",
      ids: [
        "n4-tame-ni", "n4-no-ni-purpose", "n4-you-ni", "n4-you-ni-naru", "n4-you-ni-suru", "n4-you-ni-iu",
        "n4-koto-ni-suru", "n4-koto-ni-naru",
      ],
    },
    {
      title: "9 · Passive and causative",
      ids: ["n4-passive", "n4-passive-trouble", "n4-causative", "n4-sasete-kudasai", "n4-causative-passive"],
    },
    {
      title: "10 · Polite speech",
      ids: ["n4-sonkeigo", "n4-o-ni-naru", "n4-sonkei-reru", "n4-kenjougo", "n4-o-suru", "n4-de-gozaimasu"],
    },
  ],
);
