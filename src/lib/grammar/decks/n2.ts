import { deck } from "../build";
import { adverbs } from "./n2/adverbs";
import { cause } from "./n2/cause";
import { concession } from "./n2/concession";
import { conjunctions } from "./n2/conjunctions";
import { extent } from "./n2/extent";
import { extras } from "./n2/extras";
import { likelihood } from "./n2/likelihood";
import { manner } from "./n2/manner";
import { scope } from "./n2/scope";
import { time } from "./n2/time";
import { viewpoint } from "./n2/viewpoint";

/**
 * JLPT N2 grammar: the patterns of newspapers, essays, business and fiction.
 * Points are written by topic in ./n2; the stages below set the learning order, easiest first.
 */
export const N2 = deck(
  {
    id: "n2",
    level: "N2",
    title: "N2 grammar",
    description: "The grammar of newspapers, essays, business and fiction: reasons with a stance, scope and basis, timing, degree and emphasis, likelihood and necessity, concession, viewpoints, manner, and the adverbs that colour a whole sentence.",
  },
  [cause, scope, time, extent, likelihood, concession, viewpoint, manner, adverbs, conjunctions, extras],
  [
    {
      title: "1 · Everyday adverbs and sentence joiners",
      ids: ["n2-ichiou", "n2-wazawaza", "n2-semete", "n2-youyaku", "n2-douyara", "n2-yohodo", "n2-ikanimo", "n2-iwayuru", "n2-kaette", "n2-you-suru-ni", "n2-to-iu-ka", "n2-mottomo", "n2-nao", "n2-to-iu-no-mo", "n2-shitagatte"],
    },
    {
      title: "2 · Verb compounds, manner and appearance",
      ids: ["n2-au", "n2-naosu", "n2-sokoneru", "n2-nuku", "n2-kkonai", "n2-ge", "n2-mamire", "n2-kiri-ga-nai", "n2-te-miseru", "n2-yara", "n2-bakari-da", "n2-gatera", "n2-jou", "n2-ka-no-you-ni", "n2-nari-ni", "n2-wo-komete", "n2-ni-mukete", "n2-koto-naku"],
    },
    {
      title: "3 · Scope, basis and range",
      ids: ["n2-ni-oite", "n2-ni-kakete", "n2-ni-watatte", "n2-wo-tsuujite", "n2-ni-oujite", "n2-ni-motozuite", "n2-wo-moto-ni", "n2-ni-sotte", "n2-wo-megutte", "n2-ni-kagitte", "n2-ni-kagirazu", "n2-wo-towazu", "n2-ni-kakawarazu", "n2-ni-hanshite", "n2-ni-kotaete", "n2-no-moto-de", "n2-wo-fumaete", "n2-ni-tsuki"],
    },
    {
      title: "4 · Occasions and timing",
      ids: ["n2-shidai", "n2-ni-saishite", "n2-ni-atatte", "n2-ni-sakidatte", "n2-wo-kikkake-ni", "n2-te-kara-to-iu-mono", "n2-ka-to-omottara", "n2-ka-nai-ka-no-uchi-ni", "n2-tsutsu", "n2-ni-tomonatte", "n2-tokoro-ni", "n2-ni-tsuke"],
    },
    {
      title: "5 · Adding, limiting and emphasis",
      ids: ["n2-bakari-ka", "n2-nomi-narazu", "n2-ue-ni", "n2-wa-mochiron", "n2-ni-kuwaete", "n2-dokoro-ka", "n2-dokoro-de-wa-nai", "n2-ni-sugi-nai", "n2-ni-hoka-naranai", "n2-wa-tomokaku", "n2-wa-betsu-to-shite", "n2-made", "n2-kurai-nara", "n2-dake-no", "n2-wo-nozoite", "n2-ni-kagiru"],
    },
    {
      title: "6 · Reasons with a stance",
      ids: ["n2-koto-kara", "n2-dake-ni", "n2-dake-atte", "n2-bakari-ni", "n2-no-koto-dakara", "n2-koto-dashi", "n2-ue-wa", "n2-ijou-wa", "n2-amari", "n2-ageku", "n2-sue-ni", "n2-te-koso", "n2-kai-ga-aru"],
    },
    {
      title: "7 · Could, couldn't and must",
      ids: ["n2-kaneru", "n2-kanenai", "n2-uru", "n2-gatai", "n2-you-ga-nai", "n2-you-ni-mo-nai", "n2-mai", "n2-zaru-wo-enai", "n2-zu-ni-wa-irarenai", "n2-te-wa-irarenai", "n2-te-naranai", "n2-te-wa-naranai", "n2-zu-ni-sumu", "n2-zujimai", "n2-ka-ina-ka", "n2-you-ni-yotte-wa"],
    },
    {
      title: "8 · Concession and conditions",
      ids: ["n2-mono-no", "n2-ni-mo-kakawarazu", "n2-to-wa-ie", "n2-ni-shiro", "n2-ta-tokoro-de", "n2-temo-sashitsukaenai", "n2-te-demo", "n2-mo-kamawazu", "n2-nuki-de", "n2-nai-koto-ni-wa", "n2-mono-nara", "n2-you-mono-nara", "n2-you-de-wa"],
    },
    {
      title: "9 · Viewpoints, feelings and verdicts",
      ids: ["n2-kara-suru-to", "n2-kara-shite", "n2-ni-shite-mireba", "n2-ni-kakete-wa", "n2-to-itta", "n2-to-wa", "n2-koto-ni", "n2-mono-ga-aru", "n2-ni-koshita-koto-wa-nai", "n2-to-iu-mono-da", "n2-to-iu-mono-dewa-nai", "n2-mono-dewa-nai", "n2-ta-mono-dewa-nai", "n2-mono-ka", "n2-nai-mono-ka", "n2-koto-ka"],
    },
  ],
);
