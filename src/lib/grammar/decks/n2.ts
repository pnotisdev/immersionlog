import { deck } from "../build";
import { cause } from "./n2/cause";
import { scope } from "./n2/scope";

/**
 * JLPT N2 grammar: the patterns of newspapers, essays, business and fiction.
 * Sections live in ./n2; the order here is the learning order.
 */
export const N2 = deck(
  {
    id: "n2",
    level: "N2",
    title: "N2 grammar",
    description:
      "The grammar of newspapers, essays, business and fiction: reasons with a stance, scope and basis, timing, degree and emphasis, likelihood and necessity, concession, viewpoints, manner, and the adverbs that colour a whole sentence.",
  },
  [
    { title: "Reasons with a stance", points: cause },
    { title: "Scope, basis and limits", points: scope },
  ],
);
