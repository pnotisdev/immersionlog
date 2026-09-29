import { deck } from "../build";
import { cause } from "./n3/cause";
import { saying } from "./n3/saying";
import { time } from "./n3/time";
import { topics } from "./n3/topics";

/**
 * JLPT N3 grammar, the bridge from everyday conversation to books, news and work.
 * Sections live in ./n3; the order here is the learning order.
 */
export const N3 = deck(
  {
    id: "n3",
    level: "N3",
    title: "N3 grammar",
    description:
      "The grammar of real books, news and work: giving causes and results, talking about topics and sources, time and change, degree and emphasis, judging how things are, contrast and concession, and the attitudes behind what people say.",
  },
  [
    { title: "Cause, reason and result", points: cause },
    { title: "Topics, sources and standpoints", points: topics },
    { title: "Defining, reporting and casual speech", points: saying },
    { title: "Time, change and occasions", points: time },
  ],
);
