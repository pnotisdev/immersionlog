import { deck, inWrittenOrder } from "../build";
import { conditionals } from "./n4/conditionals";
import { connecting } from "./n4/connecting";
import { everyday } from "./n4/everyday";
import { forms } from "./n4/forms";
import { giving } from "./n4/giving";
import { hearsay } from "./n4/hearsay";
import { keigo } from "./n4/keigo";
import { purpose } from "./n4/purpose";
import { tePatterns } from "./n4/te-patterns";
import { voice } from "./n4/voice";

/**
 * JLPT N4 grammar, picking up where N5 ends. Sections live in ./n4; the order here is
 * the learning order.
 */
export const N4 = deck(
  {
    id: "n4",
    level: "N4",
    title: "N4 grammar",
    description:
      "The grammar that takes you from textbook sentences to real conversation: potential, volitional, passive and causative forms, giving and receiving, conditionals, guessing and hearsay, the て-form patterns, and polite speech.",
  },
  ...inWrittenOrder([
    { title: "Can, let's and commands", points: forms },
    { title: "Giving and receiving", points: giving },
    { title: "Conditionals", points: conditionals },
    { title: "Passive and causative", points: voice },
    { title: "Guessing, hearsay and quoting", points: hearsay },
    { title: "What the て-form builds", points: tePatterns },
    { title: "Aims, decisions and change", points: purpose },
    { title: "Connecting, timing and nuance", points: connecting },
    { title: "More everyday patterns", points: everyday },
    { title: "Polite speech (keigo)", points: keigo },
  ]),
);
