import { deck, inWrittenOrder } from "../build";
import { adverbs } from "./n2/adverbs";
import { cause } from "./n2/cause";
import { concession } from "./n2/concession";
import { extent } from "./n2/extent";
import { likelihood } from "./n2/likelihood";
import { manner } from "./n2/manner";
import { scope } from "./n2/scope";
import { time } from "./n2/time";
import { viewpoint } from "./n2/viewpoint";

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
  ...inWrittenOrder([
    { title: "Reasons with a stance", points: cause },
    { title: "Scope, basis and limits", points: scope },
    { title: "Occasions and timing", points: time },
    { title: "Degree, addition and emphasis", points: extent },
    { title: "Could, couldn't and must", points: likelihood },
    { title: "Concession and conditions", points: concession },
    { title: "Viewpoints and verdicts", points: viewpoint },
    { title: "Manner, appearance and verb compounds", points: manner },
    { title: "Adverbs with a point of view", points: adverbs },
  ]),
);
