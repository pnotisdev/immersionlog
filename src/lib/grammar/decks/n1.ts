import { deck } from "../build";
import { adverbs } from "./n1/adverbs";
import { cause } from "./n1/cause";
import { classical } from "./n1/classical";
import { concession } from "./n1/concession";
import { condition } from "./n1/condition";
import { endings } from "./n1/endings";
import { extent } from "./n1/extent";
import { extras } from "./n1/extras";
import { manner } from "./n1/manner";
import { time } from "./n1/time";
import { verdict } from "./n1/verdict";
import { viewpoint } from "./n1/viewpoint";

/**
 * JLPT N1 grammar: the literary, formal and rhetorical patterns of essays, news, speeches
 * and fiction. Points are written by topic in ./n1; the stages below set the learning
 * order, easiest first: spoken patterns and adverbs, then the everyday-formal core, then
 * the stiff written patterns, and classical forms last.
 */
export const N1 = deck(
  {
    id: "n1",
    level: "N1",
    title: "N1 grammar",
    description: "The grammar of editorials, speeches, literature and formal writing: spoken emphasis, attitude adverbs, the moment and turning points, reasons and purpose, concession and defiance, conditions, verdicts, inference, literary manner and the classical forms that live on in modern Japanese.",
  },
  [adverbs, time, cause, concession, condition, extent, verdict, endings, viewpoint, manner, extras, classical],
  [
    {
      title: "1 · Everyday spoken patterns",
      ids: ["n1-ttara", "n1-tokitara", "n1-makuru", "n1-mo-nan-to-mo-nai", "n1-no-nan-no-tte", "n1-te-motomoto", "n1-dano", "n1-nari-nari", "n1-to-itta-tokoro-da", "n1-kurai-no-mono-da", "n1-nami", "n1-buru", "n1-ni-mo-hodo-ga-aru", "n1-dewa-arumai-shi", "n1-tara-de", "n1-mo-sokosoko-ni"],
    },
    {
      title: "2 · Adverbs with an attitude",
      ids: ["n1-tekkiri", "n1-iza", "n1-karoujite", "n1-sazo", "n1-sukasazu", "n1-tada-de-sae", "n1-aete", "n1-mashite", "n1-mohaya", "n1-toutei", "n1-nanra", "n1-ichigai-ni", "n1-anagachi", "n1-manzara", "n1-yomoya", "n1-tokaku", "n1-tomosureba", "n1-namaji", "n1-kare-kare"],
    },
    {
      title: "3 · The moment and turning points",
      ids: ["n1-ga-hayai-ka", "n1-ya-ina-ya", "n1-nari", "n1-hyoushi-ni", "n1-sobakara", "n1-yasaki", "n1-wo-mae-ni", "n1-wo-ki-ni", "n1-wo-sakai-ni", "n1-wo-kagiri-ni", "n1-wo-kawakiri-ni", "n1-ni-sakigakete", "n1-te-kono-kata", "n1-to-iu-mono"],
    },
    {
      title: "4 · Even, let alone, not only",
      ids: ["n1-sura", "n1-tari-tomo", "n1-nari-tomo", "n1-wa-oroka", "n1-mo-sarukoto-nagara", "n1-ni-todomarazu", "n1-tada-nomi", "n1-ni-mo-mashite", "n1-kitte-no", "n1-kara-aru", "n1-dani", "n1-tote", "n1-to-iedomo"],
    },
    {
      title: "5 · Reasons, pretexts and purpose",
      ids: ["n1-to-atte", "n1-to-areba", "n1-temae", "n1-no-wo-ii-koto-ni", "n1-ni-kakotsukete", "n1-ni-kamakete", "n1-ba-koso", "n1-yue", "n1-beku", "n1-n-ga-tame", "n1-koto-tote", "n1-atte-no", "n1-to-aimatte"],
    },
    {
      title: "6 · Even if, whatever, if only",
      ids: ["n1-to-omoikiya", "n1-you-ga", "n1-you-ga-mai-ga", "n1-de-are", "n1-to-wa-iu-mono-no", "n1-to-shita-tokoro-de", "n1-mono-wo", "n1-kai-mo-naku", "n1-nara-madashimo", "n1-nara-iza-shirazu", "n1-zu-tomo", "n1-nai-made-mo"],
    },
    {
      title: "7 · Contrast, defiance and standpoints",
      ids: ["n1-ni-hikikae", "n1-to-wa-urahara-ni", "n1-wo-yoso-ni", "n1-wo-monotomosezu", "n1-wo-oshite", "n1-ni-yorazu", "n1-ikan", "n1-ikan-ni-yorazu", "n1-wa-sateoki", "n1-ni-iwasereba", "n1-tomo-naru-to", "n1-tomo-arou"],
    },
    {
      title: "8 · Without, only, once and at most",
      ids: ["n1-naku-shite", "n1-nashi-ni", "n1-koto-nashi-ni", "n1-ba-sore-made", "n1-ga-saigo", "n1-wo-oite", "n1-nara-de-wa", "n1-wo-motte", "n1-wo-motte-sureba", "n1-ga-nara", "n1-ga-seki-no-yama", "n1-de-wa-sumanai", "n1-iwazu-mogana"],
    },
    {
      title: "9 · Feelings, extremes and verdicts",
      ids: ["n1-kagiri-da", "n1-to-ittara-nai", "n1-koto-kono-ue-nai", "n1-kiwamaru", "n1-no-kiwami", "n1-no-itari", "n1-made-mo-nai", "n1-made-da", "n1-ni-wa-oyobanai", "n1-ni-wa-ataranai", "n1-ni-kataku-nai", "n1-wo-kinjienai", "n1-ni-shinobinai", "n1-ni-taenai", "n1-ni-taru", "n1-ni-atai-suru"],
    },
    {
      title: "10 · Inference, tendency and obligation",
      ids: ["n1-to-mieru", "n1-tokoro-wo-miru-to", "n1-mono-to-omowareru", "n1-ni-soui-nai", "n1-kirai-ga-aru", "n1-shimatsu-da", "n1-nai-to-mo-kagiranai", "n1-nai-de-mo-nai", "n1-nai-mono-demo-nai", "n1-wo-yoginaku", "n1-zu-ni-wa-sumanai", "n1-zu-ni-wa-okanai", "n1-te-wa-kanawanai", "n1-te-yamanai", "n1-te-habakaranai", "n1-te-shikarubeki"],
    },
    {
      title: "11 · Formal settings, stages and standards",
      ids: ["n1-katawara", "n1-katagata", "n1-ori", "n1-ni-itatte", "n1-ni-itaru-made", "n1-ni-itatte-wa", "n1-ni-oyonde", "n1-wo-hete", "n1-ni-shite", "n1-ni-atte", "n1-ni-kakawaru", "n1-ni-sokushite", "n1-ni-terashite", "n1-ni-nottotte", "n1-ni-okaremashite-wa"],
    },
    {
      title: "12 · Literary manner and description",
      ids: ["n1-nagara-ni", "n1-tomo-naku", "n1-n-bakari", "n1-to-bakari-ni", "n1-gotoku", "n1-meku", "n1-jimiru", "n1-gamashii", "n1-zukume", "n1-gurumi", "n1-to-ii", "n1-to-iwazu", "n1-tsu-tsu", "n1-taru", "n1-taru-ya"],
    },
    {
      title: "13 · Classical forms in modern Japanese",
      ids: ["n1-tamae", "n1-neba-naranai", "n1-de-wa-nakarou-ka", "n1-beshi", "n1-bekarazu", "n1-nakare", "n1-zaru", "n1-zu-shite", "n1-majiki", "n1-beku-mo-nai", "n1-beku-shite", "n1-n-to-suru", "n1-ni-shiku-wa-nai", "n1-de-nakute-nan-darou"],
    },
  ],
);
