import { point, s, word } from "../../build";

/**
 * The rest of N2: formal permission and whether-or-not, surprise with とは, things
 * never done, trends that only get worse, doing two things at once, efforts that pay
 * off, wishes that something could be done, and viewpoints set by 上 and ようによっては.
 */

export const extras = [
  point({
    id: "n2-temo-sashitsukaenai",
    title: "〜ても差し支えない",
    meaning: "it's all right to, you may (formal)",
    structure: "Verb て-form + も差し支えない / 差し支えありません · 差し支えなければ",
    related: ["n4-temo-kamawanai", "n5-te-mo-ii"],
    explanation: `
**ても差し支えない** is a very formal way of giving permission: 鉛筆で書いても差し支えありません, "you may write in pencil". 差し支え means "hindrance", so it's literally "there's no obstacle if you do".

It's the business and official equivalent of てもいい and ても構わない. You'll see it in instructions, forms and customer service.

As a question, ても差し支えないでしょうか is a very polite way to ask permission.

The set phrase **差し支えなければ** means "if you don't mind", and softens a request for personal information: 差し支えなければ、ご住所を教えていただけますか. In both uses, the speaker is being careful not to impose, so the pattern suits emails, forms, offices and polite requests to strangers.
`,
    sentences: [
      s("鉛筆で書い{ても差し支えありません}。", "えんぴつでかい{てもさしつかえありません}。", "You may write in pencil.", {
        accept: ["ても構いません", "てもいいです"],
        near: [["ては差し支えありません", "ては is for prohibitions. For permission, use ても差し支えありません."]],
      }),
      s("少し遅れ{ても差し支えない}。", "すこしおくれ{てもさしつかえない}。", "It's fine to be a little late.", {
        accept: ["ても構わない", "てもいい"],
        near: [["ても差し支える", "The set phrase is negative: 差し支えない."]],
      }),
      s("こちらの席を使っ{ても差し支えないでしょうか}。", "こちらのせきをつかっ{てもさしつかえないでしょうか}。", "Would it be all right if I used this seat?", {
        accept: ["ても構わないでしょうか", "てもいいでしょうか"],
        near: [["てはいけないでしょうか", "That asks whether it's forbidden. For asking permission, use ても差し支えないでしょうか."]],
      }),
      s("お名前は書かなく{ても差し支えありません}。", "おなまえはかかなく{てもさしつかえありません}。", "You don't need to write your name.", {
        accept: ["ても構いません", "てもいいです"],
        near: [["ては差し支えありません", "ては is for prohibitions. For \"no need\", use ても差し支えありません."]],
      }),
      s("{差し支えなければ}、ご住所を教えていただけますか。", "{さしつかえなければ}、ごじゅうしょをおしえていただけますか。", "If you don't mind, could you give me your address?", {
        near: [["差し支えれば", "The polite set phrase is 差し支えなければ."]],
      }),
    ],
  }),

  point({
    id: "n2-to-wa",
    title: "〜とは (surprise)",
    meaning: "(I'm amazed) that, to think that",
    structure: "Plain form + とは (…思わなかった · 驚いた)",
    related: ["n3-nanka-nante", "n3-to-iu-no-wa"],
    explanation: `
After a plain form, **とは** expresses surprise or disbelief: 彼が優勝するとは、誰も思わなかった, "no one imagined he would win".

It's the written, slightly formal version of なんて (N3). It's often followed by 思わなかった, 驚いた or 信じられない, or left hanging as an exclamation: こんな所で昔の友達に会うとは, "fancy meeting an old friend in a place like this!"

とは also defines words (「積ん読」とは…, N3). Context tells you which: a definition explains a term; surprise reacts to a fact.

まさか often comes earlier in the sentence to strengthen it: まさか試験に落ちるとは思わなかった.
`,
    sentences: [
      s("彼が優勝する{とは}、誰も思わなかった。", "かれがゆうしょうする{とは}、だれもおもわなかった。", "No one imagined he would win.", {
        near: [["なんて", "That works in speech. In writing, surprise uses とは."]],
      }),
      s("こんな所で昔の友達に会う{とは}。", "こんなところでむかしのともだちにあう{とは}。", "Fancy meeting an old friend in a place like this.", {
        accept: ["なんて"],
        near: [["には", "には isn't surprise. For \"fancy that\", use とは."]],
      }),
      s("一日でこんなに雪が積もる{とは}驚いた。", "いちにちでこんなにゆきがつもる{とは}おどろいた。", "I was amazed that this much snow could fall in a single day.", {
        accept: ["なんて"],
        near: [["ので", "That's a plain reason. For astonishment, use とは."]],
      }),
      s("まさか試験に落ちる{とは}思わなかった。", "まさかしけんにおちる{とは}おもわなかった。", "I never thought I'd fail the exam.", {
        near: [["ことは", "The pattern is とは思わなかった."]],
      }),
      s("子どもにこんな絵が描ける{とは}、すごい。", "こどもにこんなえがかける{とは}、すごい。", "It's amazing that a child can draw a picture like this.", {
        accept: ["なんて"],
        near: [["には", "には isn't surprise. For \"it's amazing that\", use とは."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-tsuke",
    title: "〜につけ",
    meaning: "whenever, every time; whether … or",
    structure: "Verb dictionary form + につけ · A につけ B につけ · 何かにつけ",
    related: ["n3-tabi-ni", "n2-ni-shiro"],
    explanation: `
**につけ** after a verb of perception means "whenever": この写真を見るにつけ、故郷を思い出す, "whenever I look at this photo, I think of home". The second half is usually a feeling or memory that's triggered.

The set phrase **何かにつけ** means "at every opportunity, on every occasion": 何かにつけ、母は私を心配する.

Doubled, it means "whether … or": いいにつけ悪いにつけ, "good or bad"; 雨につけ風につけ, "rain or wind".

It's literary and a little old-fashioned. Compare たびに (N3), which is the everyday "every time", and につれ, which describes gradual change. A common set phrase is 何かにつけ, "at every opportunity, for every little thing": 母は何かにつけ文句を言う.
`,
    sentences: [
      s("この写真を見る{につけ}、故郷を思い出す。", "このしゃしんをみる{につけ}、こきょうをおもいだす。", "Whenever I look at this photo, I think of home.", {
        accept: ["たびに"],
        near: [["について", "について is \"about\". For \"whenever\", use につけ."]],
      }),
      s("何か{につけ}、母は私を心配する。", "なにか{につけ}、はははわたしをしんぱいする。", "My mother worries about me at every turn.", {
        near: [["について", "について is \"about\". The set phrase is 何かにつけ."]],
      }),
      s("いい{につけ}悪いにつけ、結果は受け入れるしかない。", "いい{につけ}わるいにつけ、けっかはうけいれるしかない。", "Good or bad, we have to accept the result.", {
        accept: ["にしろ", "にせよ"],
        near: [["につれ", "につれ is \"as (it changes)\". For \"whether good or bad\", use につけ."]],
      }),
      s("そのニュースを聞く{につけ}、胸が痛む。", "そのニュースをきく{につけ}、むねがいたむ。", "Every time I hear that news, my heart aches.", {
        accept: ["たびに"],
        near: [["につれ", "につれ is \"as (it changes)\". For \"every time\", use につけ."]],
      }),
      s("雨{につけ}風につけ、子どものことが心配だ。", "あめ{につけ}かぜにつけ、こどものことがしんぱいだ。", "Rain or wind, I worry about my children.", {
        near: [["について", "について is \"about\". For \"whether rain or wind\", use につけ."]],
      }),
    ],
  }),

  point({
    id: "n2-ka-ina-ka",
    title: "〜か否か",
    meaning: "whether or not (formal)",
    structure: "Plain form + か否か (Noun, な-adj + である)",
    related: ["n4-ka-dou-ka"],
    explanation: `
**か否か** means "whether or not", like かどうか (N4), but formal and written: 参加するか否か、明日までに決めてください, "please decide by tomorrow whether or not you'll take part". 否 (いな) means "no".

It's used in reports, news, official documents and formal speech. In conversation, かどうか is natural.

It works as a noun clause with は, を or が: それが事実であるか否かは、まだわからない, "whether it's true is still unknown".

Nouns and な-adjectives usually take である before it: 事実であるか否か. In conversation, the same idea is simply かどうか, so treat か否か as the written, formal version you meet in news reports, questionnaires, contracts and academic papers.
`,
    sentences: [
      s("参加する{か否か}、明日までに決めてください。", "さんかする{かいなか}、あしたまでにきめてください。", "Please decide by tomorrow whether or not you'll take part.", {
        accept: ["かどうか"],
        near: [["かも", "That's \"maybe\". For \"whether or not\", use か否か."]],
      }),
      s("それが事実である{か否か}は、まだわからない。", "それがじじつである{かいなか}は、まだわからない。", "Whether or not it's true is still unknown.", {
        accept: ["かどうか"],
        near: [["かも", "That's \"maybe\". For \"whether or not\", use か否か."]],
      }),
      s("合格できる{か否か}は、努力次第だ。", "ごうかくできる{かいなか}は、どりょくしだいだ。", "Whether or not you pass depends on your effort.", {
        accept: ["かどうか"],
        near: [["かもしれない", "That's \"might\". For \"whether or not\", use か否か."]],
      }),
      s("契約を続ける{か否か}を検討している。", "けいやくをつづける{かいなか}をけんとうしている。", "We're considering whether or not to continue the contract.", {
        accept: ["かどうか"],
        near: [["かも", "That's \"maybe\". For \"whether or not\", use か否か."]],
      }),
      s("薬が効く{か否か}を調べる。", "くすりがきく{かいなか}をしらべる。", "We'll investigate whether or not the drug works.", {
        accept: ["かどうか"],
        near: [["かも", "That's \"maybe\". For \"whether or not\", use か否か."]],
      }),
    ],
  }),

  point({
    id: "n2-zujimai",
    title: "〜ずじまい",
    meaning: "ended up never (doing), never got round to",
    structure: "Verb ない-form minus ない + ずじまい(だ · で)",
    related: ["n4-zu-ni", "n2-sokoneru"],
    explanation: `
**ずじまい** means you intended or hoped to do something, but the chance passed and it never happened: 忙しくて、結局その映画は見ずじまいだった, "I was so busy that I never did get to see that film".

Build it like ずに (N4): 見ない → 見ずじまい, 聞かない → 聞かずじまい. する becomes せずじまい. It works with potential verbs too: 会えずじまい, "never managed to meet".

It's usually in the past (ずじまいだった) and carries regret. 結局 ("in the end") often comes before it.

Compare ずに ("without doing"), which is neutral, and 損ねる (N2, "missed the chance"), which is about one occasion. ずじまい is about it never happening at all.
`,
    sentences: [
      s("忙しくて、結局その映画は{見ずじまい}だった。", "いそがしくて、けっきょくそのえいがは{みずじまい}だった。", "I was so busy that I never did get to see that film.", {
        hint: "見る, never",
        conj: { word: word("見る", "みる", "ichidan"), form: "negative", cut: "ない", tail: "ずじまい" },
        near: [["見ないで", "That's \"without seeing\". For \"never got round to\", use 見ずじまい."]],
      }),
      s("彼女の名前は{聞かずじまい}だった。", "かのじょのなまえは{きかずじまい}だった。", "I never did find out her name.", {
        hint: "聞く, never",
        conj: { word: word("聞く", "きく", "godan"), form: "negative", cut: "ない", tail: "ずじまい" },
        near: [["聞かずに", "That's \"without asking\". For \"never did ask\", use 聞かずじまい."]],
      }),
      s("せっかく買ったのに、一度も{使わずじまい}だった。", "せっかくかったのに、いちども{つかわずじまい}だった。", "I bought it specially, and never once used it.", {
        hint: "使う, never",
        conj: { word: word("使う", "つかう", "godan"), form: "negative", cut: "ない", tail: "ずじまい" },
        near: [["使わずに", "That's \"without using\". For \"never used\", use 使わずじまい."]],
      }),
      s("本当のことは{言わずじまい}だった。", "ほんとうのことは{いわずじまい}だった。", "I never did tell them the truth.", {
        hint: "言う, never",
        conj: { word: word("言う", "いう", "godan"), form: "negative", cut: "ない", tail: "ずじまい" },
        near: [["言わずに", "That's \"without saying\". For \"never did say\", use 言わずじまい."]],
      }),
      s("結局、彼には{会えずじまい}だった。", "けっきょく、かれには{あえずじまい}だった。", "In the end, I never got to see him.", {
        hint: "会える, never",
        conj: { word: word("会う", "あう", "godan"), form: "potential-negative", cut: "ない", tail: "ずじまい" },
        near: [["会わずに", "That's \"without meeting\". For \"never managed to\", use 会えずじまい."]],
      }),
    ],
  }),

  point({
    id: "n2-te-wa-irarenai",
    title: "〜てはいられない",
    meaning: "can't afford to (keep doing)",
    structure: "Verb て-form + はいられない",
    related: ["n3-wake-ni-wa-ikanai", "n2-zu-ni-wa-irarenai"],
    explanation: `
**てはいられない** says you can't stay in a situation or keep doing something, because circumstances demand action: 試験まで一週間だ。遊んではいられない, "the exam is a week away. I can't afford to mess around".

It's literally "can't remain doing". The action is usually passive or idle (waiting, crying, playing, lazing), and the situation pushes you to act.

It often expresses resolve: 負けてはいられない, "I can't let myself be beaten".

Compare てはいけない ("mustn't", a rule) and ずにはいられない ("can't help doing"). てはいられない is "can't afford to keep doing".
`,
    sentences: [
      s("試験まで一週間だ。遊んで{はいられない}。", "しけんまでいっしゅうかんだ。あそんで{はいられない}。", "The exam is a week away. I can't afford to mess around.", {
        accept: ["いられない"],
        near: [["はいけない", "That's \"mustn't\", a rule. For \"can't afford to\", use はいられない."]],
      }),
      s("いつまでも泣いて{はいられない}。", "いつまでもないて{はいられない}。", "I can't go on crying forever.", {
        accept: ["いられない"],
        near: [["はいけない", "That's \"mustn't\", a rule. For \"can't go on\", use はいられない."]],
      }),
      s("待って{はいられない}。自分で探しに行こう。", "まって{はいられない}。じぶんでさがしにいこう。", "I can't just wait around. I'll go and look myself.", {
        accept: ["いられない"],
        near: [["はならない", "That's \"must not\". For \"can't just\", use はいられない."]],
      }),
      s("こんな所でのんびりして{はいられない}。", "こんなところでのんびりして{はいられない}。", "I can't afford to be lazing around here.", {
        accept: ["いられない"],
        near: [["はいけない", "That's \"mustn't\", a rule. For \"can't afford to\", use はいられない."]],
      }),
      s("負けて{はいられない}。", "まけて{はいられない}。", "I can't let myself be beaten.", {
        accept: ["いられない"],
        near: [["はならない", "That's \"must not\". For \"can't let myself\", use はいられない."]],
      }),
    ],
  }),

  point({
    id: "n2-gatera",
    title: "〜がてら",
    meaning: "while (doing), on the way (two things at once)",
    structure: "Noun (often a する-noun) / Verb ます-stem + がてら",
    related: ["n3-tsuide-ni", "n5-nagara", "n1-katagata"],
    explanation: `
**がてら** means doing one thing while taking the chance to do another: 散歩がてら、パンを買ってきた, "I bought some bread while I was out for a walk".

The first part is usually a movement or an outing (散歩, 買い物, 花見, 送る), and the second half is the extra thing achieved along the way. It's like "killing two birds with one stone".

It follows a noun directly or a ます-stem: 駅まで送りがてら, "while seeing them to the station".

It's close to ついでに (N3). がてら is a little more literary, and focuses on the first activity having a second purpose. Compare ながら, which is two actions at literally the same time.
`,
    sentences: [
      s("散歩{がてら}、パンを買ってきた。", "さんぽ{がてら}、パンをかってきた。", "I bought some bread while I was out for a walk.", {
        accept: ["のついでに", "ついでに"],
        near: [["ながら", "ながら is two actions at once. For \"while out doing\", use がてら."]],
      }),
      s("買い物{がてら}、駅前を歩いた。", "かいもの{がてら}、えきまえをあるいた。", "I strolled around the station area while doing some shopping.", {
        accept: ["のついでに"],
        near: [["ながら", "ながら is two actions at once. For \"while out doing\", use がてら."]],
      }),
      s("花見{がてら}、公園でお弁当を食べた。", "はなみ{がてら}、こうえんでおべんとうをたべた。", "We had a packed lunch in the park while enjoying the cherry blossoms.", {
        near: [["ながら", "ながら is two actions at once. For \"while out doing\", use がてら."]],
      }),
      s("駅まで送り{がてら}、少し話をした。", "えきまでおくり{がてら}、すこしはなしをした。", "While seeing them to the station, we chatted a little.", {
        near: [["ために", "That's purpose. For \"while (doing)\", use がてら."]],
      }),
      s("運動{がてら}、自転車で通勤している。", "うんどう{がてら}、じてんしゃでつうきんしている。", "I cycle to work, partly for the exercise.", {
        near: [["ために", "That's purpose. For \"partly for\", use がてら."]],
      }),
    ],
  }),

  point({
    id: "n2-bakari-da",
    title: "〜ばかりだ",
    meaning: "keeps getting (worse); all that's left is",
    structure: "Verb dictionary form + ばかりだ",
    related: ["n3-ippou-da", "n4-bakari"],
    explanation: `
After a verb of change, **ばかりだ** describes a trend that keeps going in one direction, usually a bad one: 病状は悪くなるばかりだ, "the patient's condition just keeps getting worse". It's very close to 一方だ (N3).

In the middle of a sentence, it's ばかりで: 仕事は増えるばかりで、ちっとも減らない.

With あとは, it means "all that's left is": あとは結果を待つばかりだ, "all that's left is to wait for the results". Everything else is done.

Don't confuse it with ばかりか ("not only") or たばかり (N4, "just did"). With the dictionary form and だ, it's a trend or the only remaining step.
`,
    sentences: [
      s("病状は悪くなる{ばかりだ}。", "びょうじょうはわるくなる{ばかりだ}。", "The patient's condition just keeps getting worse.", {
        accept: ["一方だ"],
        near: [["ばかりか", "ばかりか needs a second half. At the end, for \"keeps getting\", use ばかりだ."]],
      }),
      s("物価は上がる{ばかりだ}。", "ぶっかはあがる{ばかりだ}。", "Prices just keep rising.", {
        accept: ["一方だ"],
        near: [["ところだ", "That's \"about to\". For a trend, use ばかりだ."]],
      }),
      s("仕事は増える{ばかりで}、ちっとも減らない。", "しごとはふえる{ばかりで}、ちっともへらない。", "The work just keeps piling up and never goes down.", {
        accept: ["一方で"],
        near: [["ばかりか", "ばかりか is \"not only\". For \"just keeps\", use ばかりで."]],
      }),
      s("あとは結果を待つ{ばかりだ}。", "あとはけっかをまつ{ばかりだ}。", "All that's left is to wait for the results.", {
        near: [["一方だ", "一方だ is a trend. For \"all that's left is\", use ばかりだ."]],
      }),
      s("準備はできて、あとは出発する{ばかりだ}。", "じゅんびはできて、あとはしゅっぱつする{ばかりだ}。", "Everything's ready; all that's left is to set off.", {
        near: [["一方だ", "一方だ is a trend. For \"all that's left is\", use ばかりだ."]],
      }),
    ],
  }),

  point({
    id: "n2-to-iu-ka",
    title: "〜というか・〜っていうか",
    meaning: "or rather, I mean",
    structure: "Word / Plain form + というか · A というか B というか",
    register: "Conversational. っていうか is very casual.",
    related: ["n3-to-iu-yori", "n3-to-ittemo"],
    explanation: `
**というか** corrects or refines a word as you speak: 彼は優しいというか、人がいい, "he's kind, or rather, too good-natured". The speaker searches for the right description.

Doubled, it lists two ways of putting something, often trailing off: 失礼というか何というか, "rude, or… I don't know what to call it".

At the start of a sentence, **っていうか** means "I mean" or "actually", and is a very common casual filler, sometimes used to change the subject bluntly.

Compare というより (N3), which firmly prefers the second description. というか is looser and more hesitant.
`,
    sentences: [
      s("彼は優しい{というか}、人がいい。", "かれはやさしい{というか}、ひとがいい。", "He's kind, or rather, too good-natured.", {
        accept: ["っていうか", "というより"],
        near: [["といっても", "That's \"though I say\". For \"or rather\", use というか."]],
      }),
      s("無口{というか}、恥ずかしがり屋なんだ。", "むくち{というか}、はずかしがりやなんだ。", "He's not quiet exactly, more shy.", {
        accept: ["っていうか", "というより"],
        near: [["といっても", "That's \"though I say\". For \"or rather\", use というか."]],
      }),
      s("驚いた{というか}、あきれた。", "おどろいた{というか}、あきれた。", "I was surprised, or rather, dumbfounded.", {
        accept: ["っていうか", "というより"],
        near: [["といっても", "That's \"though I say\". For \"or rather\", use というか."]],
      }),
      s("彼の態度は、失礼{というか}何というか。", "かれのたいどは、しつれい{というか}なんというか。", "His attitude was rude, or… I don't know what to call it.", {
        accept: ["っていうか"],
        near: [["というと", "That's \"speaking of\". For \"or… whatever you call it\", use というか."]],
      }),
      s("{っていうか}、それ、私のケーキなんだけど。", "{っていうか}、それ、わたしのケーキなんだけど。", "I mean, that's my cake, actually.", {
        accept: ["というか"],
        near: [["というと", "That's \"speaking of\". For \"I mean\", use っていうか."]],
      }),
    ],
  }),

  point({
    id: "n2-ta-mono-dewa-nai",
    title: "〜たものではない",
    meaning: "can't possibly, is simply not (bearable)",
    structure: "Potential verb た-form + ものではない / もんじゃない",
    related: ["n2-mono-ka", "n2-mono-dewa-nai"],
    explanation: `
**たものではない** after a potential verb in the た-form means something is so bad it's impossible: こんなまずい料理、食べられたものではない, "food this bad is simply inedible". The criticism is strong.

It usually follows 食べられた, 見られた, 聞けた, やっていられた. In speech, it's たもんじゃない.

With わかる, it means "there's no telling": 何が起こるか、わかったものではない, "there's no telling what might happen".

Don't confuse it with ものではない (N2, "you shouldn't"), which follows the dictionary form and gives advice. The た is what makes this "can't possibly". It's usually a complaint about quality or an extreme situation: 聞けたものではない for awful singing, 読めたものではない for a messy essay.
`,
    sentences: [
      s("こんな下手な絵は、見られた{ものではない}。", "こんなへたなえは、みられた{ものではない}。", "A picture this bad isn't fit to be seen.", {
        accept: ["もんじゃない", "ものじゃない"],
        near: [["ものだ", "ものだ is a general truth. For \"not fit to be\", use ものではない."]],
      }),
      s("暑くて、仕事なんかやっていられた{もんじゃない}。", "あつくて、しごとなんかやっていられた{もんじゃない}。", "It's so hot, you couldn't possibly work.", {
        accept: ["ものではない", "ものじゃない"],
        near: [["ものだ", "ものだ is a general truth. For \"couldn't possibly\", use もんじゃない."]],
      }),
      s("こんなまずい料理、食べられた{ものではない}。", "こんなまずいりょうり、たべられた{ものではない}。", "Food this bad is simply inedible.", {
        accept: ["もんじゃない", "ものじゃない"],
        near: [["ことではない", "The pattern is たものではない."]],
      }),
      s("何が起こるか、わかった{ものではない}。", "なにがおこるか、わかった{ものではない}。", "There's no telling what might happen.", {
        accept: ["もんじゃない", "ものじゃない"],
        near: [["ものだ", "ものだ is a general truth. For \"there's no telling\", use ものではない."]],
      }),
      s("あんな危ない所には、行けた{もんじゃない}。", "あんなあぶないところには、いけた{もんじゃない}。", "You couldn't possibly go somewhere that dangerous.", {
        accept: ["ものではない", "ものじゃない"],
        near: [["ことではない", "The pattern is たもんじゃない."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-fumaete",
    title: "〜を踏まえて",
    meaning: "based on, taking into account",
    structure: "Noun + を踏まえて / を踏まえ · を踏まえた + Noun",
    related: ["n2-ni-motozuite", "n2-wo-moto-ni"],
    explanation: `
**を踏まえて** means taking something into account as the basis for what comes next: 前回の反省を踏まえて、計画を立て直した, "taking into account the lessons of last time, we redrew the plan". 踏まえる means "to stand firmly on".

It's formal, common in business, politics and academic writing. The basis is usually experience, results, opinions or the current situation.

Before a noun, it's を踏まえた: 現状を踏まえた判断, "a judgement that takes the current situation into account".

Compare に基づいて (strictly following evidence or rules) and をもとに (using as raw material). を踏まえて is about considering something carefully before deciding.
`,
    sentences: [
      s("前回の反省{を踏まえて}、計画を立て直した。", "ぜんかいのはんせい{をふまえて}、けいかくをたてなおした。", "Taking into account the lessons of last time, we redrew the plan.", {
        accept: ["を踏まえ"],
        near: [["をめぐって", "をめぐって is \"over (a dispute)\". For \"taking into account\", use を踏まえて."]],
      }),
      s("調査の結果{を踏まえて}、対策を考えます。", "ちょうさのけっか{をふまえて}、たいさくをかんがえます。", "We'll consider measures in light of the survey results.", {
        accept: ["を踏まえ", "に基づいて"],
        near: [["をめぐって", "をめぐって is \"over (a dispute)\". For \"in light of\", use を踏まえて."]],
      }),
      s("皆さんの意見{を踏まえて}、最終案を作りました。", "みなさんのいけん{をふまえて}、さいしゅうあんをつくりました。", "We drew up the final proposal taking everyone's views into account.", {
        accept: ["を踏まえ"],
        near: [["について", "について is \"about\". For \"taking into account\", use を踏まえて."]],
      }),
      s("現状{を踏まえた}上で、判断してください。", "げんじょう{をふまえた}うえで、はんだんしてください。", "Please make your decision in light of the current situation.", {
        near: [["を踏まえて", "Before 上で, use を踏まえた."]],
      }),
      s("過去の経験{を踏まえて}、アドバイスします。", "かこのけいけん{をふまえて}、アドバイスします。", "I'll give you advice drawing on past experience.", {
        accept: ["を踏まえ", "をもとに"],
        near: [["について", "について is \"about\". For \"drawing on\", use を踏まえて."]],
      }),
    ],
  }),

  point({
    id: "n2-jou",
    title: "〜上 (じょう)",
    meaning: "from the standpoint of, in terms of, -ally",
    structure: "Noun + 上 (+ は · の + Noun)",
    related: ["n3-teki", "n3-to-shite"],
    explanation: `
**上** read じょう after a noun means "from the standpoint of" or "in terms of": 法律上、問題はない, "legally, there's no problem". It's like English "-ally" or "for … reasons".

Common combinations: 法律上 (legally), 健康上 (for health reasons), 教育上 (educationally), 立場上 (given one's position), 仕事上 (for work), 計算上 (on paper, by calculation).

Before a noun, it takes の: 健康上の理由, "health reasons". It's formal and compact, common in writing and business.

Compare 的 (N3), which makes a な-adjective (教育的な). 上 marks a viewpoint or area; it isn't an adjective itself. Don't confuse it with 上で (うえで).
`,
    sentences: [
      s("法律{上}、問題はない。", "ほうりつ{じょう}、もんだいはない。", "Legally, there's no problem.", {
        near: [["的", "的 needs な or に. For \"from a legal standpoint\", use 法律上."]],
      }),
      s("健康{上}の理由で、仕事を辞めた。", "けんこう{じょう}のりゆうで、しごとをやめた。", "I left my job for health reasons.", {
        near: [["的", "的 needs な or に. For \"health reasons\", use 健康上の理由."]],
      }),
      s("立場{上}、何も言えない。", "たちば{じょう}、なにもいえない。", "Given my position, I can't say anything.", {
        near: [["上で", "上で is \"after, based on\". For \"given my position\", use 立場上."]],
      }),
      s("教育{上}、よくない。", "きょういく{じょう}、よくない。", "It's not good from an educational point of view.", {
        near: [["的", "的 needs な or に. For \"educationally\", use 教育上."]],
      }),
      s("計算{上}は、これで間に合うはずだ。", "けいさん{じょう}は、これでまにあうはずだ。", "On paper, this should be enough.", {
        near: [["上で", "上で is \"after, based on\". For \"on paper\", use 計算上."]],
      }),
    ],
  }),

  point({
    id: "n2-kai-ga-aru",
    title: "〜かいがある・〜がいがある",
    meaning: "(it) was worth it, paid off; rewarding",
    structure: "Verb た-form + かいがある / かいもなく · Verb ます-stem + がいがある",
    related: ["n3-okage-de", "n2-sue-ni", "n1-kai-mo-naku"],
    explanation: `
**かいがある** means an effort was worth it, because it brought results: 頑張ったかいがあって、合格できた, "my hard work paid off, and I passed". かい (甲斐) means "worth, effect".

It follows a た-form describing the effort. The negative, **かいもなく**, means "all for nothing": 練習したかいもなく、負けてしまった, "despite all our practice, we lost".

After a ます-stem, it becomes **がい**: やりがいがある, "rewarding (to do)"; 生きがい, "a reason to live"; 教えがいがある, "rewarding to teach".

It's a warm expression, often used to celebrate success or encourage someone to keep going.
`,
    sentences: [
      s("頑張った{かいがあって}、合格できた。", "がんばった{かいがあって}、ごうかくできた。", "My hard work paid off, and I passed.", {
        accept: ["甲斐があって"],
        near: [["おかげで", "That's thanks to someone or something. For effort paying off, use かいがあって."]],
      }),
      s("苦労した{かいがあった}。", "くろうした{かいがあった}。", "All the hard work was worth it.", {
        accept: ["甲斐があった"],
        near: [["ことがあった", "That's \"it has happened\". For \"it was worth it\", use かいがあった."]],
      }),
      s("練習した{かいもなく}、負けてしまった。", "れんしゅうした{かいもなく}、まけてしまった。", "Despite all our practice, we lost.", {
        accept: ["甲斐もなく"],
        near: [["かいがあって", "That's \"it paid off\". For \"all for nothing\", use かいもなく."]],
      }),
      s("早起きした{かいがあって}、きれいな日の出が見られた。", "はやおきした{かいがあって}、きれいなひのでがみられた。", "Getting up early paid off: we saw a beautiful sunrise.", {
        accept: ["甲斐があって"],
        near: [["おかげで", "That's thanks to someone or something. For effort paying off, use かいがあって."]],
      }),
      s("この仕事は、やり{がいがある}。", "このしごとは、やり{がいがある}。", "This job is really rewarding.", {
        accept: ["甲斐がある"],
        near: [["かいがある", "After a ます-stem, it becomes がい: やりがいがある."]],
      }),
    ],
  }),

  point({
    id: "n2-nai-mono-ka",
    title: "〜ないものか・〜ないものだろうか",
    meaning: "isn't there some way to …?, if only",
    structure: "Verb ない-form (often potential) + ものか / ものだろうか",
    related: ["n2-mono-ka", "n3-ba-noni"],
    explanation: `
**ないものか** expresses a strong wish that something could somehow happen, phrased as a question: もっと安く行ける方法はないものか, "isn't there some cheaper way to get there?"

It's often used with potential verbs and 何とか ("somehow"): 何とかならないものか, "isn't there something that can be done?" The speaker is searching for a solution, not really asking.

**ないものだろうか** is softer and more polite.

Don't confuse it with ものか (N2, "as if I would!"), which after a positive verb is a strong refusal. With a negative, the meaning flips into a longing wish.
`,
    sentences: [
      s("もっと安く行ける方法は{ないものか}。", "もっとやすくいけるほうほうは{ないものか}。", "Isn't there some cheaper way to get there?", {
        accept: ["ないものだろうか"],
        near: [["ないことか", "The pattern is ないものか."]],
      }),
      s("何とかならない{ものか}。", "なんとかならない{ものか}。", "Isn't there something that can be done?", {
        accept: ["ものだろうか"],
        near: [["ことか", "ことか is an exclamation. For \"isn't there some way\", use ものか."]],
      }),
      s("この状況を変えられない{ものだろうか}。", "このじょうきょうをかえられない{ものだろうか}。", "Is there really no way to change this situation?", {
        accept: ["ものか"],
        near: [["ことだろうか", "The pattern is ないものだろうか."]],
      }),
      s("早く夏休みにならない{ものか}。", "はやくなつやすみにならない{ものか}。", "If only the summer holidays would hurry up and come.", {
        accept: ["ものだろうか"],
        near: [["ことか", "ことか is an exclamation. For a longing wish, use ものか."]],
      }),
      s("彼の病気が治らない{ものか}と、毎日祈っている。", "かれのびょうきがなおらない{ものか}と、まいにちいのっている。", "Every day I pray that somehow his illness will be cured.", {
        near: [["ことか", "ことか is an exclamation. For a longing wish, use ものか."]],
      }),
    ],
  }),

  point({
    id: "n2-you-ni-yotte-wa",
    title: "〜ようによっては",
    meaning: "depending on how (you look at it / do it)",
    structure: "Verb ます-stem + ようによっては",
    related: ["n2-you-ga-nai", "n3-ni-yotte"],
    explanation: `
**ようによっては** means "depending on how": 考えようによっては、これはチャンスだ, "depending on how you look at it, this is a chance". よう is "way, manner", the same as in ようがない (N2).

It attaches to a ます-stem: 考えよう, 見よう, 言いよう, やりよう, 使いよう. The second half is a possibility that opens up if you approach it the right way.

It's often used to reframe things positively, or to warn that something can come across badly: 言いようによっては、失礼に聞こえる, "depending on how you put it, it can sound rude".

The set phrase 物は考えよう means "it all depends on how you look at it".
`,
    sentences: [
      s("考え{ようによっては}、これはチャンスだ。", "かんがえ{ようによっては}、これはチャンスだ。", "Depending on how you look at it, this is a chance.", {
        near: [["方によって", "That's close, but the set pattern is 考えようによっては."]],
      }),
      s("見{ようによっては}、猫の顔に見える。", "み{ようによっては}、ねこのかおにみえる。", "Looked at a certain way, it looks like a cat's face.", {
        near: [["ように", "ように is \"so that\" or \"like\". For \"depending on how\", use ようによっては."]],
      }),
      s("言い{ようによっては}、失礼に聞こえる。", "いい{ようによっては}、しつれいにきこえる。", "Depending on how you put it, it can sound rude.", {
        near: [["ように", "ように is \"so that\" or \"like\". For \"depending on how\", use ようによっては."]],
      }),
      s("やり{ようによっては}、一日で終わる。", "やり{ようによっては}、いちにちでおわる。", "Done the right way, it could be finished in a day.", {
        near: [["ように", "ように is \"so that\" or \"like\". For \"depending on how\", use ようによっては."]],
      }),
      s("使い{ようによっては}、便利な道具だ。", "つかい{ようによっては}、べんりなどうぐだ。", "Used the right way, it's a handy tool.", {
        near: [["方によって", "That's close, but the set pattern is 使いようによっては."]],
      }),
    ],
  }),
];
