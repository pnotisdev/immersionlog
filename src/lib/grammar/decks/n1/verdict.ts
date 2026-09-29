import { point, s } from "../../build";

/** Verdicts: no need to, not worth, worthy of, can't help, can't possibly, must not, surely. */

export const verdict = [
  point({
    id: "n1-made-mo-nai",
    title: "〜までもない・〜までもなく",
    meaning: "no need to (it's obvious), it goes without saying",
    structure: "Verb dictionary form + までもない / までもなく",
    related: ["n3-koto-wa-nai"],
    explanation: `
**までもない** says something is so obvious or simple that there's no need to go as far as doing it: そんなことは言うまでもない, "that goes without saying".

**までもなく** continues the sentence: 確認するまでもなく、答えは明らかだ, "there's no need to check, the answer is obvious". 言うまでもなく, "needless to say", is a very common sentence opener.

The verb is usually one of saying, checking, going or asking. The logic is that the action would be overkill.

Compare ことはない (N3), "there's no need to (don't worry)", which reassures someone. までもない says the action is unnecessary because the answer is already clear.
`,
    sentences: [
      s(
        "そんなことは言う{までもない}。",
        "そんなことはいう{までもない}。",
        "That goes without saying.",
        {
          near: [
            [
              "ことはない",
              '言うことはない is "nothing to add". For "it goes without saying", use までもない.',
            ],
          ],
        },
      ),
      s(
        "わざわざ行く{までもない}。電話で済む。",
        "わざわざいく{までもない}。でんわですむ。",
        "There's no need to go all that way. A phone call will do.",
        {
          accept: ["ことはない"],
          near: [
            [
              "までに",
              'までに is a deadline. For "no need to", use までもない.',
            ],
          ],
        },
      ),
      s(
        "確認する{までもなく}、答えは明らかだ。",
        "かくにんする{までもなく}、こたえはあきらかだ。",
        "There's no need to check. The answer is obvious.",
        {
          near: [
            [
              "ことなく",
              'ことなく is "without doing". For "no need to (it\'s obvious)", use までもなく.',
            ],
          ],
        },
      ),
      s(
        "医者に診てもらう{までもない}軽いけがだ。",
        "いしゃにみてもらう{までもない}かるいけがだ。",
        "It's a minor injury, not worth seeing a doctor about.",
        {
          near: [
            [
              "までに",
              'までに is a deadline. For "not worth", use までもない.',
            ],
          ],
        },
      ),
      s(
        "言う{までもなく}、健康は何より大切だ。",
        "いう{までもなく}、けんこうはなによりたいせつだ。",
        "Needless to say, health matters more than anything.",
        {
          near: [
            [
              "ことなく",
              'ことなく is "without doing". For "needless to say", use までもなく.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-made-da",
    title: "〜までだ・〜までのことだ",
    meaning: "(I'll) just (do that); it's only that",
    structure:
      "Verb dictionary form + までだ (resolve) · Verb た-form + までだ (just)",
    related: ["n1-made-mo-nai"],
    explanation: `
**までだ** has two uses, depending on tense.

After the dictionary form, it's a calm resolve: if one plan fails, you'll simply do something else. 電車がないなら、歩いて帰るまでだ, "if there are no trains, I'll just walk home". The feeling is "no big deal, that's all there is to it".

After the た-form, it downplays your own action: 気になったから聞いてみたまでです, "I only asked because I was curious". This is often defensive, meaning "I had no other motive".

までのことだ is a slightly more formal version of both. The everyday equivalent is だけだ.

Don't confuse it with までに, "by (a deadline)", or までもない, "no need to".
`,
    sentences: [
      s(
        "電車がないなら、歩いて帰る{までだ}。",
        "でんしゃがないなら、あるいてかえる{までだ}。",
        "If there are no trains, I'll just walk home.",
        {
          accept: ["までのことだ", "だけだ"],
          near: [
            [
              "までに",
              'までに is a deadline. For "I\'ll just do X", use までだ.',
            ],
          ],
        },
      ),
      s(
        "反対されても、やる{までだ}。",
        "はんたいされても、やる{までだ}。",
        "Even if they oppose it, I'll just go ahead.",
        {
          accept: ["までのことだ", "だけだ"],
          near: [
            ["までに", 'までに is a deadline. For "I\'ll just", use までだ.'],
          ],
        },
      ),
      s(
        "失敗したら、もう一度やり直す{までのことだ}。",
        "しっぱいしたら、もういちどやりなおす{までのことだ}。",
        "If I fail, I'll just start again. Simple as that.",
        {
          accept: ["までだ", "だけだ"],
          near: [
            [
              "までもない",
              'までもない is "no need to". For "I\'ll just", use までのことだ.',
            ],
          ],
        },
      ),
      s(
        "気になったから聞いてみた{までです}。",
        "きになったからきいてみた{までです}。",
        "I only asked because I was curious.",
        {
          accept: ["までのことです", "だけです"],
          near: [
            ["までに", 'までに is a deadline. For "I only", use までです.'],
          ],
        },
      ),
      s(
        "私は本当のことを言った{までだ}。",
        "わたしはほんとうのことをいった{までだ}。",
        "I only told the truth.",
        {
          accept: ["までのことだ", "だけだ"],
          near: [
            [
              "までもない",
              'までもない is "no need to". For "I only", use までだ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-wa-oyobanai",
    title: "〜には及ばない",
    meaning: "there's no need to; no match for",
    structure: "Noun / Verb dictionary form + には及ばない / には及びません",
    related: ["n1-made-mo-nai"],
    explanation: `
**には及ばない** has two meanings.

- **No need to**: a polite way to decline someone's concern or effort. ご心配には及びません, "please don't worry". お礼には及びません, "there's no need to thank me". The polite form 及びません is usual here.
- **No match for**: "can't reach the level of". 私の料理は、まだ母の料理には及ばない, "my cooking is still nowhere near my mother's".

及ぶ means "to reach, extend to", so both meanings come from "doesn't reach". In the "no need" sense, it's close to までもない. In the "no match" sense, it's close to にはかなわない.

Compare にすぎない (N2), "nothing more than".
`,
    sentences: [
      s(
        "ご心配{には及びません}。",
        "ごしんぱい{にはおよびません}。",
        "Please don't worry.",
        {
          accept: ["には及ばない"],
          near: [
            [
              "にすぎません",
              'にすぎません is "nothing more than". For "there\'s no need", use には及びません.',
            ],
          ],
        },
      ),
      s(
        "わざわざお越しいただく{には及びません}。",
        "わざわざおこしいただく{にはおよびません}。",
        "There's no need for you to come all this way.",
        {
          accept: ["には及ばない", "までもありません"],
          near: [
            [
              "にすぎません",
              'にすぎません is "nothing more than". For "there\'s no need", use には及びません.',
            ],
          ],
        },
      ),
      s(
        "お礼{には及びません}。当然のことをしたまでです。",
        "おれい{にはおよびません}。とうぜんのことをしたまでです。",
        "There's no need to thank me. I only did what anyone would.",
        {
          accept: ["には及ばない"],
          near: [
            [
              "にすぎません",
              'にすぎません is "nothing more than". For "there\'s no need", use には及びません.',
            ],
          ],
        },
      ),
      s(
        "私の料理は、まだ母の料理{には及ばない}。",
        "わたしのりょうりは、まだははのりょうり{にはおよばない}。",
        "My cooking is still nowhere near my mother's.",
        {
          accept: ["にはかなわない"],
          near: [
            [
              "には限らない",
              'とは限らない is "not necessarily". For "no match for", use には及ばない.',
              "にはかぎらない",
            ],
          ],
        },
      ),
      s(
        "英語力では、彼女{には及ばない}。",
        "えいごりょくでは、かのじょ{にはおよばない}。",
        "When it comes to English, I'm no match for her.",
        {
          accept: ["にはかなわない"],
          near: [
            [
              "には限らない",
              'とは限らない is "not necessarily". For "no match for", use には及ばない.',
              "にはかぎらない",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-wa-ataranai",
    title: "〜には当たらない",
    meaning: "there's no reason to, it's not warranted",
    structure: "Verb dictionary form (驚く, 責める, 非難する) + には当たらない",
    related: ["n1-ni-wa-oyobanai"],
    explanation: `
**には当たらない** says that a reaction like surprise, blame or praise isn't justified by the situation: 彼が怒ったのも、驚くには当たらない, "it's no surprise that he got angry".

The verb is a reaction: 驚く, 責める, 非難する, 感心する, 心配する. The first half usually explains why the reaction is unnecessary: it's natural, it's minor, or it's understandable.

It's formal and measured, typical of commentary and essays. It's close to には及ばない ("no need to"), but には当たらない is specifically about whether a reaction is deserved. 当たる here means "to be appropriate".

Compare にかたくない, "not hard to (imagine)".
`,
    sentences: [
      s(
        "彼が怒ったのも、驚く{には当たらない}。",
        "かれがおこったのも、おどろく{にはあたらない}。",
        "It's no surprise that he got angry.",
        {
          accept: ["には及ばない"],
          near: [
            [
              "にかたくない",
              'にかたくない is "not hard to (imagine)". For "no reason to", use には当たらない.',
            ],
          ],
        },
      ),
      s(
        "子どもが失敗しても、責める{には当たらない}。",
        "こどもがしっぱいしても、せめる{にはあたらない}。",
        "There's no reason to blame a child for failing.",
        {
          accept: ["には及ばない"],
          near: [
            [
              "にかたくない",
              'にかたくない is "not hard to". For "no reason to", use には当たらない.',
            ],
          ],
        },
      ),
      s(
        "その程度のことで、感心する{には当たらない}。",
        "そのていどのことで、かんしんする{にはあたらない}。",
        "Something like that is nothing to be impressed by.",
        {
          accept: ["には及ばない"],
          near: [
            [
              "にすぎない",
              'にすぎない is "nothing more than". For "nothing to be impressed by", use には当たらない.',
            ],
          ],
        },
      ),
      s(
        "よくあることだから、心配する{には当たらない}。",
        "よくあることだから、しんぱいする{にはあたらない}。",
        "It happens all the time, so there's no cause for concern.",
        {
          accept: ["には及ばない"],
          near: [
            [
              "にかたくない",
              'にかたくない is "not hard to". For "no cause for", use には当たらない.',
            ],
          ],
        },
      ),
      s(
        "状況を考えれば、彼の判断は非難する{には当たらない}。",
        "じょうきょうをかんがえれば、かれのはんだんはひなんする{にはあたらない}。",
        "Given the situation, his decision doesn't deserve criticism.",
        {
          near: [
            [
              "にすぎない",
              'にすぎない is "nothing more than". For "doesn\'t deserve", use には当たらない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-kataku-nai",
    title: "〜にかたくない",
    meaning: "it's not hard to (imagine, understand)",
    structure:
      "Noun / Verb dictionary form (想像, 察する, 予想) + にかたくない",
    related: ["n1-ni-wa-ataranai"],
    explanation: `
**にかたくない** (に難くない) means "it's easy to imagine, understand or guess": 彼女の悲しみは想像にかたくない, "it's not hard to imagine her grief".

It combines with a small set of words for imagining and inferring: 想像, 察する ("sense"), 予想, 理解 and 推測. The subject is usually someone's feelings or a likely outcome.

かたい (難い) here means "difficult", as in 忘れがたい, so it's literally "not difficult". It's formal and written, common in news and essays when describing how others must feel.

Compare にたえない, "unbearable to", and には当たらない, "there's no reason to".
`,
    sentences: [
      s(
        "彼女の悲しみは想像{にかたくない}。",
        "かのじょのかなしみはそうぞう{にかたくない}。",
        "It's not hard to imagine her grief.",
        {
          accept: ["に難くない"],
          near: [
            [
              "にたえない",
              'にたえない is "unbearable to". For "easy to imagine", use にかたくない.',
            ],
          ],
        },
      ),
      s(
        "子を失った親の気持ちは、察する{にかたくない}。",
        "こをうしなったおやのきもちは、さっする{にかたくない}。",
        "It's easy to sense how the parents who lost their child must feel.",
        {
          accept: ["に難くない"],
          near: [
            [
              "にたえない",
              'にたえない is "unbearable to". For "easy to sense", use にかたくない.',
            ],
          ],
        },
      ),
      s(
        "彼が反対することは、予想{にかたくない}。",
        "かれがはんたいすることは、よそう{にかたくない}。",
        "It's easy to predict that he'll object.",
        {
          accept: ["に難くない"],
          near: [
            [
              "には当たらない",
              'には当たらない is "there\'s no reason to". For "easy to predict", use にかたくない.',
              "にはあたらない",
            ],
          ],
        },
      ),
      s(
        "被害の大きさは想像する{にかたくない}。",
        "ひがいのおおきさはそうぞうする{にかたくない}。",
        "The scale of the damage is easy to imagine.",
        {
          accept: ["に難くない"],
          near: [
            [
              "にたえない",
              'にたえない is "unbearable to". For "easy to imagine", use にかたくない.',
            ],
          ],
        },
      ),
      s(
        "彼がどれほど苦労したかは、理解{にかたくない}。",
        "かれがどれほどくろうしたかは、りかい{にかたくない}。",
        "It's easy to understand how much he must have struggled.",
        {
          accept: ["に難くない"],
          near: [
            [
              "には当たらない",
              'には当たらない is "there\'s no reason to". For "easy to understand", use にかたくない.',
              "にはあたらない",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-kinjienai",
    title: "〜を禁じ得ない",
    meaning: "can't help (feeling), can't hold back",
    structure: "Emotion noun (涙, 怒り, 同情, 驚き) + を禁じ得ない",
    related: ["n2-zu-ni-wa-irarenai"],
    explanation: `
**を禁じ得ない** means "can't suppress a feeling": 彼の話を聞いて、涙を禁じ得なかった, "hearing his story, I couldn't hold back my tears".

The noun is an emotion or its sign: 涙, 怒り, 同情 ("sympathy"), 驚き, 憤り ("indignation"), 失笑 ("laughter"). It's usually a reaction to someone else's situation or behaviour.

It's literally "can't forbid (the feeling)", and it's very formal, found in editorials, speeches and statements. The everyday equivalent is ずにはいられない (N2): 泣かずにはいられなかった.

Don't confuse it with を余儀なくされる, "be forced to do", which is about actions, not feelings.
`,
    sentences: [
      s(
        "彼の話を聞いて、涙{を禁じ得なかった}。",
        "かれのはなしをきいて、なみだ{をきんじえなかった}。",
        "Hearing his story, I couldn't hold back my tears.",
        {
          accept: ["を禁じえなかった"],
          near: [
            [
              "を余儀なくされた",
              'を余儀なくされる is "be forced to (do)". For a feeling you couldn\'t hold back, use を禁じ得ない.',
              "をよぎなくされた",
            ],
          ],
        },
      ),
      s(
        "その判決には、怒り{を禁じ得ない}。",
        "そのはんけつには、いかり{をきんじえない}。",
        "I can't help feeling angry at that verdict.",
        {
          accept: ["を禁じえない"],
          near: [
            [
              "を余儀なくされる",
              'を余儀なくされる is "be forced to (do)". For a feeling you can\'t hold back, use を禁じ得ない.',
              "をよぎなくされる",
            ],
          ],
        },
      ),
      s(
        "被害者の話には、同情{を禁じ得ない}。",
        "ひがいしゃのはなしには、どうじょう{をきんじえない}。",
        "I can't help feeling for the victims.",
        {
          accept: ["を禁じえない"],
          near: [
            [
              "をえない",
              'ざるをえない is "have no choice but to". For a feeling you can\'t hold back, use を禁じ得ない.',
            ],
          ],
        },
      ),
      s(
        "彼の無責任な発言には、驚き{を禁じ得ない}。",
        "かれのむせきにんなはつげんには、おどろき{をきんじえない}。",
        "I can't help being astonished at his irresponsible remarks.",
        {
          accept: ["を禁じえない"],
          near: [
            [
              "を余儀なくされる",
              'を余儀なくされる is "be forced to (do)". For a feeling you can\'t hold back, use を禁じ得ない.',
              "をよぎなくされる",
            ],
          ],
        },
      ),
      s(
        "事件の残酷さに、憤り{を禁じ得ない}。",
        "じけんのざんこくさに、いきどおり{をきんじえない}。",
        "The cruelty of the crime fills me with indignation.",
        {
          accept: ["を禁じえない"],
          near: [
            [
              "をえない",
              'ざるをえない is "have no choice but to". For a feeling you can\'t hold back, use を禁じ得ない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-taenai",
    title: "〜にたえない・〜にたえる",
    meaning: "unbearable to (see / hear); worthy of; deeply (grateful)",
    structure:
      "Verb dictionary form (見る, 聞く, 読む) + にたえない · Noun + にたえる · 感謝 / 遺憾 + にたえない",
    related: ["n1-ni-taru", "n1-ni-kataku-nai"],
    explanation: `
**にたえない** (に堪えない) has two uses:
- **Too awful to bear**, after 見る, 聞く or 読む: 彼の歌は聞くにたえない, "his singing is unbearable to listen to".
- **Overwhelmed with a feeling**, in formal speech: 感謝にたえません, "I'm deeply grateful". 遺憾にたえない means "deeply regrettable".

The positive **にたえる** means "worth, able to stand up to": 大人の鑑賞にたえる作品, "a work that stands up to adult appreciation".

たえる (堪える) means "to endure, withstand". So the puzzle is to read the sentence: praise needs たえる, an awful sight or sound needs たえない, and a formal thank-you needs たえません.

Compare にかたくない, "not hard to".
`,
    sentences: [
      s(
        "彼の歌は聞く{にたえない}。",
        "かれのうたはきく{にたえない}。",
        "His singing is unbearable to listen to.",
        {
          accept: ["に堪えない"],
          near: [
            [
              "にたえる",
              'にたえる is "worth (it)". For "unbearable", use にたえない.',
            ],
          ],
        },
      ),
      s(
        "見る{にたえない}ひどい映像だった。",
        "みる{にたえない}ひどいえいぞうだった。",
        "The footage was too awful to watch.",
        {
          accept: ["に堪えない"],
          near: [
            [
              "にかたくない",
              'にかたくない is "not hard to". For "too awful to", use にたえない.',
            ],
          ],
        },
      ),
      s(
        "これは大人の鑑賞{にたえる}作品だ。",
        "これはおとなのかんしょう{にたえる}さくひんだ。",
        "This is a work that stands up to adult appreciation.",
        {
          accept: ["に堪える", "に足る"],
          near: [
            [
              "にたえない",
              'にたえない is "unbearable". For "worthy of", use にたえる.',
            ],
          ],
        },
      ),
      s(
        "皆様のご支援には、感謝{にたえません}。",
        "みなさまのごしえんには、かんしゃ{にたえません}。",
        "I'm deeply grateful for all your support.",
        {
          accept: ["に堪えません", "にたえない", "に堪えない"],
          near: [
            [
              "には及びません",
              'には及びません is "there\'s no need". For "deeply grateful", use 感謝にたえません.',
              "にはおよびません",
            ],
          ],
        },
      ),
      s(
        "誤字だらけで、読む{にたえない}文章だ。",
        "ごじだらけで、よむ{にたえない}ぶんしょうだ。",
        "It's so full of typos that it's unbearable to read.",
        {
          accept: ["に堪えない"],
          near: [
            [
              "にたえる",
              'にたえる is "worth (it)". For "unbearable", use にたえない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-taru",
    title: "〜に足る・〜に足りない",
    meaning: "worthy of, enough to; not worth",
    structure: "Verb dictionary form / Noun + に足る · に足りない / に足らない",
    related: ["n1-ni-atai-suru"],
    explanation: `
**に足る** means "worthy of, sufficient for": 彼は信頼するに足る人物だ, "he's a man worthy of trust". It's formal and usually comes before a noun: 満足するに足る結果, 信じるに足る証拠.

The negative **に足りない** (or に足らない) means "not worth": 取るに足らない問題, "a trivial problem" (literally "not worth picking up"). 恐れるに足りない means "nothing to fear".

足る is the classical form of 足りる, "to be enough". So the puzzle is to read the sentence's tone: praise takes に足る, and dismissal takes に足りない.

It's close to に値する, "worth, deserve", which is more common with nouns: 称賛に値する.
`,
    sentences: [
      s(
        "彼は信頼する{に足る}人物だ。",
        "かれはしんらいする{にたる}じんぶつだ。",
        "He's a man worthy of trust.",
        {
          accept: ["に値する"],
          near: [
            [
              "に足りない",
              'に足りない is "not worth". This sentence is praise, so use に足る.',
              "にたりない",
            ],
          ],
        },
      ),
      s(
        "そんなのは取る{に足らない}問題だ。",
        "そんなのはとる{にたらない}もんだいだ。",
        "That's a trivial problem.",
        {
          accept: ["に足りない"],
          near: [
            [
              "に足る",
              'に足る is "worthy of". For "trivial, not worth", use に足らない.',
              "にたる",
            ],
          ],
        },
      ),
      s(
        "彼の話は信じる{に足る}ものだ。",
        "かれのはなしはしんじる{にたる}ものだ。",
        "His story is believable.",
        {
          accept: ["に値する"],
          near: [
            [
              "に足りない",
              'に足りない is "not worth". This sentence is positive, so use に足る.',
              "にたりない",
            ],
          ],
        },
      ),
      s(
        "残念ながら、満足する{に足る}結果は得られなかった。",
        "ざんねんながら、まんぞくする{にたる}けっかはえられなかった。",
        "Unfortunately, we didn't get a satisfactory result.",
        {
          near: [
            [
              "に足りない",
              'に足りない is "not worth". For "sufficient for (satisfaction)", use に足る.',
              "にたりない",
            ],
          ],
        },
      ),
      s(
        "あんな相手は恐れる{に足りない}。",
        "あんなあいてはおそれる{にたりない}。",
        "An opponent like that is nothing to fear.",
        {
          accept: ["に足らない"],
          near: [
            [
              "に足る",
              'に足る is "worthy of". For "nothing to fear", use に足りない.',
              "にたる",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-atai-suru",
    title: "〜に値する",
    meaning: "worth, deserve",
    structure: "Noun / Verb dictionary form + に値する (negative: に値しない)",
    related: ["n1-ni-taru"],
    explanation: `
**に値する** (にあたいする) means "worth, deserving of": 彼の努力は称賛に値する, "his efforts deserve praise".

It follows nouns of evaluation, like 称賛 ("praise"), 注目 ("attention"), 一読 ("a read"), 検討 ("consideration") and 非難 ("criticism"), or a dictionary-form verb: 検討するに値する. The negative に値しない means "not worth".

It's formal and evaluative, common in reviews, reports and recommendations. 値 means "value, price".

It's very close to に足る, which usually follows verbs (信頼するに足る). に値する is more common after nouns, and it's neutral about whether the verdict is good or bad: 非難に値する, "deserves criticism".
`,
    sentences: [
      s(
        "この本は一読{に値する}。",
        "このほんはいちどく{にあたいする}。",
        "This book is worth reading.",
        {
          accept: ["に足る"],
          near: [
            [
              "に値しない",
              'に値しない is "not worth". This sentence is a recommendation, so use に値する.',
              "にあたいしない",
            ],
          ],
        },
      ),
      s(
        "彼の努力は称賛{に値する}。",
        "かれのどりょくはしょうさん{にあたいする}。",
        "His efforts deserve praise.",
        {
          near: [
            [
              "に値しない",
              'に値しない is "not worth". For "deserve", use に値する.',
              "にあたいしない",
            ],
          ],
        },
      ),
      s(
        "その提案は検討する{に値する}。",
        "そのていあんはけんとうする{にあたいする}。",
        "That proposal is worth considering.",
        {
          accept: ["に足る"],
          near: [
            [
              "に値しない",
              'に値しない is "not worth". For "worth considering", use に値する.',
              "にあたいしない",
            ],
          ],
        },
      ),
      s(
        "彼のしたことは非難{に値する}。",
        "かれのしたことはひなん{にあたいする}。",
        "What he did deserves criticism.",
        {
          near: [
            [
              "に当たらない",
              'には当たらない is "not warranted". For "deserves", use に値する.',
              "にあたらない",
            ],
          ],
        },
      ),
      s(
        "これは注目{に値する}研究だ。",
        "これはちゅうもく{にあたいする}けんきゅうだ。",
        "This is research worth paying attention to.",
        {
          near: [
            [
              "に値しない",
              'に値しない is "not worth". For "worth paying attention to", use に値する.',
              "にあたいしない",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-beku-mo-nai",
    title: "〜べくもない",
    meaning: "can't possibly, there's no way to",
    structure: "Verb dictionary form + べくもない",
    related: ["n1-beku", "n3-beki"],
    explanation: `
**べくもない** means something is completely out of the question: プロの選手とは比べるべくもない, "there's no comparison with a professional player".

The verb is usually one of comparing, knowing, hoping, doubting or winning: 比べる, 知る, 望む, 疑う, 勝つ. 疑うべくもない is positive in effect: "beyond doubt".

It's formal and literary. It comes from べく (N1, "in order to"), the adverbial form of べき, plus もない. So the sense is "there's not even a way to".

Don't confuse it with べきではない, "shouldn't". べくもない is about impossibility, not advice.
`,
    sentences: [
      s(
        "プロの選手とは比べる{べくもない}。",
        "プロのせんしゅとはくらべる{べくもない}。",
        "There's no comparison with a professional player.",
        {
          near: [
            [
              "べきではない",
              'べきではない is "shouldn\'t". For "there\'s no way to", use べくもない.',
            ],
          ],
        },
      ),
      s(
        "素人の私には、その理由は知る{べくもない}。",
        "しろうとのわたしには、そのりゆうはしる{べくもない}。",
        "As an amateur, I couldn't possibly know the reason.",
        {
          near: [
            [
              "べきではない",
              'べきではない is "shouldn\'t". For "couldn\'t possibly", use べくもない.',
            ],
          ],
        },
      ),
      s(
        "今の収入では、家など望む{べくもない}。",
        "いまのしゅうにゅうでは、いえなどのぞむ{べくもない}。",
        "On my current income, a house is out of the question.",
        {
          near: [
            [
              "べきだ",
              'べきだ is "should". For "out of the question", use べくもない.',
            ],
          ],
        },
      ),
      s(
        "彼の実力は疑う{べくもない}。",
        "かれのじつりょくはうたがう{べくもない}。",
        "His ability is beyond doubt.",
        {
          near: [
            [
              "べきではない",
              'べきではない is "shouldn\'t". For "beyond doubt", use べくもない.',
            ],
          ],
        },
      ),
      s(
        "相手はプロだ。私たちが勝つ{べくもない}。",
        "あいてはプロだ。わたしたちがかつ{べくもない}。",
        "They're professionals. There's no way we can win.",
        {
          near: [
            [
              "べきだ",
              'べきだ is "should". For "there\'s no way", use べくもない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-bekarazu",
    title: "〜べからず・〜べからざる",
    meaning: "must not (signs, maxims); unacceptable",
    structure:
      "Verb dictionary form + べからず (する → すべからず) · べからざる + Noun",
    related: ["n3-beki", "n1-majiki"],
    explanation: `
**べからず** is a classical prohibition, "must not", found on signs, notices and old sayings: 芝生に入るべからず, "keep off the grass".

Famous maxims use it too: 働かざる者食うべからず, "he who does not work shall not eat", and 初心忘るべからず, "never forget your beginner's spirit" (忘る is the classical 忘れる).

Before a noun, it becomes **べからざる**, "unacceptable, not to be done": 許すべからざる行為, "an unforgivable act". 欠くべからざる means "indispensable".

It's the negative of べし, the classical source of べき (N3). In everyday Japanese, you'd say 〜てはいけない or 〜ないでください.
`,
    sentences: [
      s(
        "芝生に入る{べからず}。",
        "しばふにはいる{べからず}。",
        "Keep off the grass.",
        {
          near: [
            [
              "べき",
              'べき is "should". For a sign saying "do not", use べからず.',
            ],
          ],
        },
      ),
      s(
        "ここにごみを捨てる{べからず}。",
        "ここにごみをすてる{べからず}。",
        "No dumping rubbish here.",
        {
          near: [
            [
              "べき",
              'べき is "should". For a sign saying "do not", use べからず.',
            ],
          ],
        },
      ),
      s(
        "働かざる者食う{べからず}。",
        "はたらかざるものくう{べからず}。",
        "He who does not work shall not eat.",
        {
          near: [
            [
              "べからざる",
              "べからざる comes before a noun. To end a maxim, use べからず.",
            ],
          ],
        },
      ),
      s(
        "初心忘る{べからず}。",
        "しょしんわする{べからず}。",
        "Never forget your beginner's spirit.",
        {
          near: [
            ["べき", 'べき is "should". The maxim uses べからず, "must not".'],
          ],
        },
      ),
      s(
        "それは許す{べからざる}行為だ。",
        "それはゆるす{べからざる}こういだ。",
        "That's an unforgivable act.",
        {
          accept: ["まじき"],
          near: [
            [
              "べからず",
              "べからず ends a sentence. Before a noun, use べからざる.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-majiki",
    title: "〜まじき",
    meaning: "unacceptable for (someone in a role)",
    structure: "Role + に / として + あるまじき + Noun (行為, 発言, 態度)",
    related: ["n1-bekarazu", "n1-tomo-arou"],
    explanation: `
**まじき** is a classical "should not", used almost only in the set phrase **あるまじき**, "unbecoming of": 教師にあるまじき行為だ, "that's behaviour unbecoming of a teacher".

The pattern is Role + に / として + あるまじき + Noun. The role is a respected position (teacher, politician, doctor, police officer), and the noun is behaviour: 行為, 発言, 態度 or ミス. The tone is strong condemnation, the kind you hear in news reports of scandals.

Occasionally, it follows other verbs: 許すまじき, "unforgivable".

It's the adjectival form of まじ, the negative of べし, so it's a partner of べからざる. Compare ともあろう, which criticises someone for acting below their status: 教師ともあろう者が….
`,
    sentences: [
      s(
        "それは教師にある{まじき}行為だ。",
        "それはきょうしにある{まじき}こういだ。",
        "That's behaviour unbecoming of a teacher.",
        {
          accept: ["べからざる"],
          near: [
            ["べき", 'べき is "should". For "unbecoming of", use あるまじき.'],
          ],
        },
      ),
      s(
        "政治家としてある{まじき}発言だ。",
        "せいじかとしてある{まじき}はつげんだ。",
        "That's a remark no politician should ever make.",
        {
          accept: ["べからざる"],
          near: [
            ["べき", 'べき is "should". For "unbecoming of", use あるまじき.'],
          ],
        },
      ),
      s(
        "医者にある{まじき}ミスだった。",
        "いしゃにある{まじき}ミスだった。",
        "It was a mistake a doctor should never make.",
        {
          accept: ["べからざる"],
          near: [
            [
              "べき",
              'べき is "should". For "a doctor should never", use あるまじき.',
            ],
          ],
        },
      ),
      s(
        "それは人として許す{まじき}行為だ。",
        "それはひととしてゆるす{まじき}こういだ。",
        "As a human being, that's an unforgivable act.",
        {
          accept: ["べからざる"],
          near: [["べき", 'べき is "should". For "unforgivable", use まじき.']],
        },
      ),
      s(
        "警察官にある{まじき}態度だ。",
        "けいさつかんにある{まじき}たいどだ。",
        "That attitude is unbecoming of a police officer.",
        {
          accept: ["べからざる"],
          near: [
            ["べき", 'べき is "should". For "unbecoming of", use あるまじき.'],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-te-shikarubeki",
    title: "〜てしかるべきだ",
    meaning: "ought to (as is only proper)",
    structure: "Verb て-form + しかるべきだ",
    related: ["n3-beki"],
    explanation: `
**てしかるべきだ** says something is the proper, natural thing to happen, and often implies it hasn't: 彼の努力は報われてしかるべきだ, "his efforts ought to be rewarded".

しかるべき means "appropriate, proper", from 然る ("to be so") plus べき. The verb is often passive (評価される, 報われる), or an action expected from an authority: 説明責任を果たす, 謝る, 補償がある.

It's a formal, persuasive way of saying べきだ, typical of editorials and arguments about fairness. On its own, しかるべき before a noun means "appropriate": しかるべき処置, "appropriate measures". The subject is often a third party, such as a company, a government or a person in authority.
`,
    sentences: [
      s(
        "彼は当然謝っ{てしかるべきだ}。",
        "かれはとうぜんあやまっ{てしかるべきだ}。",
        "He really ought to apologise.",
        {
          accept: ["てしかるべき"],
          near: [
            [
              "てもいい",
              'てもいい is "may". For "ought to (as is proper)", use てしかるべきだ.',
            ],
          ],
        },
      ),
      s(
        "彼女の研究は、もっと評価され{てしかるべきだ}。",
        "かのじょのけんきゅうは、もっとひょうかされ{てしかるべきだ}。",
        "Her research deserves more recognition.",
        {
          accept: ["てしかるべき"],
          near: [
            [
              "てほしい",
              'てほしい is "I want (someone) to". For "ought to (as is proper)", use てしかるべきだ.',
            ],
          ],
        },
      ),
      s(
        "会社は説明責任を果たし{てしかるべきだ}。",
        "かいしゃはせつめいせきにんをはたし{てしかるべきだ}。",
        "The company ought to account for itself.",
        {
          accept: ["てしかるべき"],
          near: [
            [
              "てもいい",
              'てもいい is "may". For "ought to", use てしかるべきだ.',
            ],
          ],
        },
      ),
      s(
        "彼の努力は報われ{てしかるべきだ}。",
        "かれのどりょくはむくわれ{てしかるべきだ}。",
        "His efforts ought to be rewarded.",
        {
          accept: ["てしかるべき"],
          near: [
            [
              "てほしい",
              'てほしい is "I want (someone) to". For "ought to", use てしかるべきだ.',
            ],
          ],
        },
      ),
      s(
        "被害者には十分な補償があっ{てしかるべきだ}。",
        "ひがいしゃにはじゅうぶんなほしょうがあっ{てしかるべきだ}。",
        "The victims ought to receive proper compensation.",
        {
          accept: ["てしかるべき"],
          near: [
            [
              "てもいい",
              'てもいい is "may". For "ought to", use てしかるべきだ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-de-nakute-nan-darou",
    title: "〜でなくてなんだろう",
    meaning: "if this isn't X, what is?",
    structure: "Noun + でなくてなんだろう / でなくてなんであろう",
    explanation: `
**でなくてなんだろう** is a rhetorical question insisting that something can only be X: これが愛でなくてなんだろう, "if this isn't love, what is?".

The noun is a strong, abstract word: 愛, 奇跡 ("miracle"), 運命 ("fate"), 差別 ("discrimination"), 犯罪. The speaker is moved or outraged, and the question has no real answer. It means "this is X, without a doubt".

It's literary and dramatic, found in essays, speeches, novels and song lyrics. でなくてなんであろう is even more formal.

Don't confuse it with ではないだろう, "probably isn't", which is a genuine guess.
`,
    sentences: [
      s(
        "これが愛{でなくてなんだろう}。",
        "これがあい{でなくてなんだろう}。",
        "If this isn't love, what is?",
        {
          accept: ["でなくて何だろう", "でなくてなんであろう"],
          near: [
            [
              "ではないだろう",
              'ではないだろう is "probably isn\'t". For "if this isn\'t X, what is?", use でなくてなんだろう.',
            ],
          ],
        },
      ),
      s(
        "全員が助かったのは、奇跡{でなくてなんだろう}。",
        "ぜんいんがたすかったのは、きせき{でなくてなんだろう}。",
        "Everyone survived. If that isn't a miracle, what is?",
        {
          accept: ["でなくて何だろう", "でなくてなんであろう"],
          near: [
            [
              "ではないだろう",
              'ではないだろう is "probably isn\'t". For "if that isn\'t X, what is?", use でなくてなんだろう.',
            ],
          ],
        },
      ),
      s(
        "二人の出会いは運命{でなくてなんだろう}。",
        "ふたりのであいはうんめい{でなくてなんだろう}。",
        "If their meeting wasn't fate, what was it?",
        {
          accept: ["でなくて何だろう", "でなくてなんであろう"],
          near: [
            [
              "かもしれない",
              'かもしれない is "might be". For "it can only be", use でなくてなんだろう.',
            ],
          ],
        },
      ),
      s(
        "見た目だけで判断するのは、差別{でなくてなんだろう}。",
        "みためだけではんだんするのは、さべつ{でなくてなんだろう}。",
        "Judging people on looks alone. If that isn't discrimination, what is?",
        {
          accept: ["でなくて何だろう", "でなくてなんであろう"],
          near: [
            [
              "ではないだろう",
              'ではないだろう is "probably isn\'t". For "if that isn\'t X, what is?", use でなくてなんだろう.',
            ],
          ],
        },
      ),
      s(
        "こんな偶然が重なるとは、神の導き{でなくてなんであろう}。",
        "こんなぐうぜんがかさなるとは、かみのみちびき{でなくてなんであろう}。",
        "So many coincidences at once. What could it be, if not the hand of God?",
        {
          accept: ["でなくてなんだろう", "でなくて何だろう"],
          near: [
            [
              "かもしれない",
              'かもしれない is "might be". For "what could it be, if not", use でなくてなんであろう.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-soui-nai",
    title: "〜に相違ない",
    meaning: "must be, surely, without doubt (formal)",
    structure: "Plain form (Noun, な-adj without だ) + に相違ない",
    related: ["n3-ni-chigainai"],
    explanation: `
**に相違ない** means "there's no doubt that…", a confident conclusion: 犯人は彼に相違ない, "he must be the culprit".

It's the formal, written equivalent of に違いない (N3), and they're interchangeable. 相違 means "difference", so it's literally "there's no difference from…".

It appears in detective novels, formal reports and official documents. On forms, 上記の通り相違ありません means "I certify the above is correct".

Don't confuse it with に相当する, "equivalent to", which uses a similar-looking word. In conversation, に違いない or きっと〜だ is far more natural, so save に相違ない for formal writing, where a firm, impersonal conclusion is wanted.
`,
    sentences: [
      s(
        "犯人は彼{に相違ない}。",
        "はんにんはかれ{にそういない}。",
        "He must be the culprit.",
        {
          accept: ["に違いない"],
          near: [
            [
              "に相当する",
              'に相当する is "equivalent to". For "must be", use に相違ない.',
              "にそうとうする",
            ],
          ],
        },
      ),
      s(
        "これは本物{に相違ない}。",
        "これはほんもの{にそういない}。",
        "This is surely the real thing.",
        {
          accept: ["に違いない"],
          near: [
            [
              "に相当する",
              'に相当する is "equivalent to". For "surely", use に相違ない.',
              "にそうとうする",
            ],
          ],
        },
      ),
      s(
        "彼の言っていることは事実{に相違ない}。",
        "かれのいっていることはじじつ{にそういない}。",
        "What he's saying is undoubtedly true.",
        {
          accept: ["に違いない"],
          near: [
            [
              "かもしれない",
              'かもしれない is "might". For "undoubtedly", use に相違ない.',
            ],
          ],
        },
      ),
      s(
        "上記の内容は事実{に相違ありません}。",
        "じょうきのないようはじじつ{にそういありません}。",
        "I certify that the above is true.",
        {
          accept: ["に違いありません"],
          near: [
            [
              "に相当します",
              'に相当する is "equivalent to". For "is true, without doubt", use に相違ありません.',
              "にそうとうします",
            ],
          ],
        },
      ),
      s(
        "彼女は何か隠している{に相違ない}。",
        "かのじょはなにかかくしている{にそういない}。",
        "She must be hiding something.",
        {
          accept: ["に違いない"],
          near: [
            [
              "かもしれない",
              'かもしれない is "might". For "must be", use に相違ない.',
            ],
          ],
        },
      ),
    ],
  }),
];
