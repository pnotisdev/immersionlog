import { deck } from "../build";
import { adverbs } from "./n1/adverbs";
import { time } from "./n1/time";

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
  [adverbs, time],
  [
    { title: "1 · Adverbs with an attitude", ids: adverbs.map((p) => p.id) },
    { title: "2 · Timing and sequence", ids: time.map((p) => p.id) },
  ],
);
