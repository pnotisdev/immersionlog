import { deck } from "../build";
import { adverbs } from "./n1/adverbs";
import { cause } from "./n1/cause";
import { concession } from "./n1/concession";
import { condition } from "./n1/condition";
import { extent } from "./n1/extent";
import { time } from "./n1/time";
import { verdict } from "./n1/verdict";

/**
 * JLPT N1 grammar: the literary, formal and rhetorical patterns of essays, news, speeches
 * and fiction. Points are written by topic in ./n1; the stages below set the learning
 * order, easiest first.
 */
export const N1 = deck(
  {
    id: "n1",
    level: "N1",
    title: "N1 grammar",
    description:
      "The grammar of editorials, speeches, literature and formal writing: attitude adverbs, timing, reasons and purpose, concession, conditions, degree and emphasis, verdicts, standpoints and manner.",
  },
  [adverbs, time, cause, concession, condition, extent, verdict],
  [
    { title: "1 · Adverbs with an attitude", ids: adverbs.map((p) => p.id) },
    { title: "2 · Timing and sequence", ids: time.map((p) => p.id) },
    { title: "3 · Reasons and purpose", ids: cause.map((p) => p.id) },
    { title: "4 · Concession and contrast", ids: concession.map((p) => p.id) },
    {
      title: "5 · Conditions and exclusivity",
      ids: condition.map((p) => p.id),
    },
    { title: "6 · Degree and emphasis", ids: extent.map((p) => p.id) },
    { title: "7 · Verdicts", ids: verdict.map((p) => p.id) },
  ],
);
