import { deck } from "../build";
import { attitude } from "./n3/attitude";
import { cause } from "./n3/cause";
import { conjunctions } from "./n3/conjunctions";
import { contrast } from "./n3/contrast";
import { degree } from "./n3/degree";
import { extras } from "./n3/extras";
import { intent } from "./n3/intent";
import { judgement } from "./n3/judgement";
import { saying } from "./n3/saying";
import { time } from "./n3/time";
import { topics } from "./n3/topics";

/**
 * JLPT N3 grammar, the bridge from everyday conversation to books, news and work.
 * Points are written by topic in ./n3; the stages below are the learning order,
 * easiest first.
 */
export const N3 = deck(
  {
    id: "n3",
    level: "N3",
    title: "N3 grammar",
    description:
      "The grammar of real books, news and work: giving causes and results, talking about topics and sources, time and change, degree and emphasis, judging how things are, contrast and concession, and the attitudes behind what people say.",
  },
  [cause, topics, saying, time, degree, judgement, contrast, intent, attitude, conjunctions, extras],
  [
    {
      title: "1 · Everyday adverbs and casual speech",
      ids: [
        "n3-contractions", "n3-kke", "n3-mon", "n3-yappari", "n3-tashika", "n3-itsunomanika", "n3-narubeku",
        "n3-metta-ni", "n3-chittomo", "n3-totemo-nai", "n3-doushitemo", "n3-ittai", "n3-marude", "n3-nakanaka",
        "n3-sekkaku", "n3-masaka", "n3-sasuga", "n3-douse", "n3-mushiro", "n3-tsuini",
      ],
    },
    {
      title: "2 · Joining sentences",
      ids: [
        "n3-tsumari", "n3-sore-nanoni", "n3-sonoue", "n3-tokoroga", "n3-suruto", "n3-sokode", "n3-tadashi",
        "n3-nazenara", "n3-ka-to-iu-to", "n3-to-iu-no-wa", "n3-to-iu-koto-da", "n3-to-iu-yori", "n3-to-ittemo",
        "n3-to-ieba",
      ],
    },
    {
      title: "3 · Topics, sources and standpoints",
      ids: [
        "n3-ni-tsuite", "n3-ni-totte", "n3-ni-yoru-to", "n3-to-shite", "n3-ni-kurabete", "n3-ni-taishite",
        "n3-ni-yotte", "n3-ni-kanshite", "n3-ni-kawatte", "n3-wo-hajime", "n3-wo-chuushin-ni", "n3-muke-muki",
        "n3-teki",
      ],
    },
    {
      title: "4 · Feelings, guesses and judgements",
      ids: [
        "n3-you-ni-mieru", "n3-you-na-ki-ga-suru", "n3-ppoi", "n3-rashii-typical", "n3-gachi", "n3-gimi",
        "n3-no-dewa-nai-ka", "n3-janai-ka", "n3-n-dakara", "n3-ni-chigainai", "n3-ni-kimatteiru", "n3-sou-ni-nai",
        "n3-hazu-datta", "n3-tokoro-datta", "n3-te-tamaranai", "n3-temo-shikata-ga-nai",
      ],
    },
    {
      title: "5 · Moments, spans and sequence",
      ids: [
        "n3-ta-totan", "n3-tabi-ni", "n3-te-irai", "n3-te-hajimete", "n3-te-kara-de-nai-to", "n3-ta-tokoro",
        "n3-to-douji-ni", "n3-saichuu", "n3-sai", "n3-okini", "n3-goto-ni", "n3-tate", "n3-kake", "n3-kiru",
        "n3-ppanashi", "n3-ippou-da", "n3-tsutsu-aru",
      ],
    },
    {
      title: "6 · Degree and emphasis",
      ids: [
        "n3-hodo", "n3-kurai", "n3-ba-hodo", "n3-sae", "n3-sae-ba", "n3-koso", "n3-nanka-nante", "n3-dake-de-naku",
        "n3-igai", "n3-shika-nai-verb", "n3-darake", "n3-kiri", "n3-mo-ba-mo",
      ],
    },
    {
      title: "7 · Wishes, intentions and advice",
      ids: [
        "n3-you-to-suru", "n3-tsumori-de", "n3-furi", "n3-koto-ni-shiteiru", "n3-you-ni-wish", "n3-ba-noni",
        "n3-sasete-morau", "n3-tsuide-ni", "n3-toori", "n3-you-ni-as", "n3-beki", "n3-koto-da", "n3-koto-wa-nai",
        "n3-mono-da", "n3-nai-koto-wa-nai", "n3-ni-wa-purpose",
      ],
    },
    {
      title: "8 · Reasons and results",
      ids: [
        "n3-okage-de", "n3-sei-de", "n3-tame-reason", "n3-mono-da-kara", "n3-kekka", "n3-kara-ni-wa",
        "n3-kara-to-itte", "n3-wake-da", "n3-wake-ga-nai", "n3-wake-de-wa-nai", "n3-wake-ni-wa-ikanai",
        "n3-to-wa-kagiranai",
      ],
    },
    {
      title: "9 · Contrast, conditions and concession",
      ids: [
        "n3-ni-shite-wa", "n3-wari-ni", "n3-kawari-ni", "n3-kuse-ni", "n3-to-shitara", "n3-to-shitemo",
        "n3-ni-shitemo", "n3-tatoe", "n3-ikura-temo", "n3-tatte", "n3-nagara-mo", "n3-kagiri", "n3-baai",
        "n3-hanmen", "n3-ippou-de",
      ],
    },
    {
      title: "10 · Change, risk and formal links",
      ids: [
        "n3-ni-tsurete", "n3-ni-shitagatte", "n3-to-tomo-ni", "n3-ue-de", "n3-osore", "n3-buri",
      ],
    },
  ],
);
