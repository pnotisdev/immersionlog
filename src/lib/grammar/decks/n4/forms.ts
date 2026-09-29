import { point, s, word } from "../../build";

/** Can, let's, and commands: the verb forms N4 opens with. */

const RA_NUKI = "That's the everyday ら-less form, very common in speech. The standard potential keeps the ら: ";

export const forms = [
  point({
    id: "n4-potential",
    title: "Potential form",
    meaning: "can, be able to",
    structure: "Godan: e-row + る (書ける) · Ichidan: られる (食べられる) · できる · 来られる",
    related: ["n4-koto-ga-dekiru", "n4-mieru-kikoeru", "n5-ga-dekiru"],
    explanation: `
The **potential form** says what someone can do: 漢字が読める, "I can read kanji"; 明日は来られますか, "can you come tomorrow?"

- godan verbs move the last kana to the e-row and add る: 書く → 書ける, 話す → 話せる, 行く → 行ける
- ichidan verbs swap る for られる: 食べる → 食べられる, 見る → 見られる
- する becomes できる, and 来る becomes 来られる (こられる)

The result is itself an ichidan verb, so it conjugates as one: 書けない, 書けます, 書けた.

The object usually switches from を to が: 日本語が話せます. を is also heard, especially in longer sentences.

In casual speech, ichidan verbs often drop the ら: 食べれる, 見れる. It's everywhere in conversation but still counted as non-standard, so here it's a near miss.
`,
    sentences: [
      s("私は漢字があまり{読めません}。", "わたしはかんじがあまり{よめません}。", "I can't read kanji very well.", {
        hint: "読む, can't",
        conj: { word: word("読める", "よめる", "ichidan"), form: "polite-negative", marker: "ません" },
        near: [["読みません", "That's \"I don't read\". For \"can't\", use the potential: 読めません."]],
      }),
      s("明日のパーティーに{来られますか}。", "あしたのパーティーに{こられますか}。", "Can you come to the party tomorrow?", {
        hint: "来る, can",
        conj: { word: word("来られる", "こられる", "ichidan"), form: "polite", tail: "か", marker: "か" },
        near: [["来れますか", `${RA_NUKI}来られますか.`]],
      }),
      s("日本語が少し{話せます}。", "にほんごがすこし{はなせます}。", "I can speak a little Japanese.", {
        hint: "話す, can",
        conj: { word: word("話せる", "はなせる", "ichidan"), form: "polite", marker: "ます" },
        near: [["話します", "That's \"I speak\". For \"can speak\", use the potential: 話せます."]],
      }),
      s("刺身は{食べられない}。", "さしみは{たべられない}。", "I can't eat sashimi.", {
        hint: "食べる, can't, casual",
        conj: { word: word("食べる"), form: "potential-negative", marker: "ない" },
        near: [["食べれない", `${RA_NUKI}食べられない.`]],
      }),
      s("一人で{行ける}？", "ひとりで{いける}？", "Can you get there on your own?", {
        hint: "行く, can, casual",
        conj: { word: word("行く"), form: "potential", marker: "る" },
        near: [["行く", "That's \"will you go?\". For \"can you\", use the potential: 行ける."]],
      }),
      s("子どもの時は{泳げなかった}。", "こどものときは{およげなかった}。", "I couldn't swim as a kid.", {
        hint: "泳ぐ, couldn't",
        conj: { word: word("泳げる", "およげる", "ichidan"), form: "past-negative", marker: "なかった" },
        near: [["泳がなかった", "That's \"I didn't swim\". For \"couldn't\", use the potential: 泳げなかった."]],
      }),
    ],
  }),

  point({
    id: "n4-koto-ga-dekiru",
    title: "〜ことができる",
    meaning: "can, be able to (formal)",
    structure: "Verb dictionary form + ことができる",
    related: ["n4-potential", "n5-ga-dekiru"],
    explanation: `
Dictionary form + **ことができる** is another way to say "can": ピアノを弾くことができます, "I can play the piano". こと turns the verb into a noun, and できる does the rest, just as in 日本語ができる.

It means the same as the potential form but sounds more formal and deliberate, so it's common in writing, rules and instructions: このカードで電車に乗ることができます, "you can ride trains with this card".

It also covers what's allowed or possible, not just ability: ここでは写真を撮ることはできません, "you can't take photos here". Adding は makes the "no" sound firmer.

Don't confuse it with ことがある (experience, "have done"), which differs by one word.
`,
    sentences: [
      s("私はピアノを弾く{ことができます}。", "わたしはピアノをひく{ことができます}。", "I can play the piano.", {
        near: [
          ["ができます", "A verb needs こと before が: 弾くことができる."],
          ["ことがあります", "ことがある is about experience. For \"can\", use ことができる."],
        ],
      }),
      s("このカードで電車に乗る{ことができます}。", "このカードででんしゃにのる{ことができます}。", "You can ride the trains with this card.", {
        near: [["ことがあります", "ことがある is about experience or occasions. For \"can\", use ことができる."]],
      }),
      s("ここでは写真を撮る{ことはできません}。", "ここではしゃしんをとる{ことはできません}。", "You can't take photos here.", {
        near: [["ことができません", "That works too. With は it sounds more like a firm rule, which is what's practised here."]],
      }),
      s("一人で着物を着る{ことができません}。", "ひとりできものをきる{ことができません}。", "I can't put on a kimono by myself.", {
        near: [["ができません", "A verb needs こと before が: 着ることができません."]],
      }),
      s("図書館では本を三冊まで借りる{ことができます}。", "としょかんではほんをさんさつまでかりる{ことができます}。", "At the library you can borrow up to three books.", {
        near: [["のができます", "の doesn't go with できる. Use こと: 借りることができます."]],
      }),
    ],
  }),

  point({
    id: "n4-mieru-kikoeru",
    title: "見える・聞こえる",
    meaning: "can be seen, can be heard",
    structure: "Thing + が + 見える / 聞こえる",
    related: ["n4-potential"],
    explanation: `
**見える** and **聞こえる** say that something is visible or audible, that it reaches your eyes or ears by itself: 窓から海が見えます, "you can see the sea from the window"; 音楽が聞こえます, "I can hear music".

Compare the potential forms 見られる and 聞ける. Those are about being able to see or hear something because you have the chance: この映画はネットで見られます, "you can watch this film online"; ラジオで聞けます, "you can listen on the radio".

So a view or a noise is 見える / 聞こえる; a film, a concert or a show you can get to is 見られる / 聞ける.

Both take が for what's seen or heard, and both are ichidan verbs: 見えない, 聞こえました.
`,
    sentences: [
      s("窓から海が{見えます}。", "まどからうみが{みえます}。", "You can see the sea from the window.", {
        near: [["見られます", "見られる is being able to see something you go and watch. For a view, use 見える."]],
      }),
      s("隣の部屋から音楽が{聞こえます}。", "となりのへやからおんがくが{きこえます}。", "I can hear music from the next room.", {
        near: [["聞けます", "聞ける is having the chance to listen. For sound reaching you, use 聞こえる."]],
      }),
      s("暗くて何も{見えない}。", "くらくてなにも{みえない}。", "It's so dark I can't see anything.", {
        near: [["見られない", "見られない is not having the chance to watch. For not being able to make anything out, use 見えない."]],
      }),
      s("すみません、よく{聞こえません}。", "すみません、よく{きこえません}。", "Sorry, I can't hear you very well.", {
        near: [["聞けません", "聞けません is not being able to listen (to a show, say). For not catching the sound, use 聞こえません."]],
      }),
      s("ここから富士山が{見えますか}。", "ここからふじさんが{みえますか}。", "Can you see Mount Fuji from here?", {
        near: [["見られますか", "見られる is being able to go and see something. For what's in view, use 見える."]],
      }),
    ],
  }),

  point({
    id: "n4-volitional",
    title: "Volitional form",
    meaning: "let's (casual), I'll",
    structure: "Godan: o-row + う (行こう) · Ichidan: よう (食べよう) · しよう · 来よう",
    register: "Casual. The polite version is ましょう.",
    related: ["n5-mashou", "n4-you-to-omou"],
    explanation: `
The **volitional form** is the casual "let's": 行こう, "let's go"; 食べよう, "let's eat". It's what ましょう is to the polite register.

- godan verbs move the last kana to the o-row and add う: 行く → 行こう, 飲む → 飲もう, 帰る → 帰ろう
- ichidan verbs swap る for よう: 食べる → 食べよう, 見る → 見よう
- する → しよう, 来る → 来よう (こよう)

Said to yourself, it's a decision: よし、頑張ろう, "right, let's do this". With か, it's "shall we?" or, with かな, thinking aloud: 何を食べようかな, "hmm, what shall I eat?"

It's also the base of 〜ようと思う ("I'm thinking of doing"), the next point.
`,
    sentences: [
      s("一緒に{帰ろう}。", "いっしょに{かえろう}。", "Let's go home together.", {
        hint: "帰る, casual",
        conj: { word: word("帰る"), form: "volitional", marker: "う" },
        near: [["帰りましょう", "That's the polite \"let's\". This sentence is casual."]],
      }),
      s("明日、映画を{見よう}よ。", "あした、えいがを{みよう}よ。", "Let's see a film tomorrow.", {
        hint: "見る, casual",
        conj: { word: word("見る"), form: "volitional", marker: "う" },
        near: [["見ましょう", "That's the polite \"let's\". This sentence is casual."]],
      }),
      s("疲れたね。ちょっと{休もう}か。", "つかれたね。ちょっと{やすもう}か。", "You look tired. Shall we take a break?", {
        hint: "休む, casual",
        conj: { word: word("休む"), form: "volitional", marker: "う" },
        near: [["休む", "That's \"I'll rest\" as a plain statement. For \"shall we\", use the volitional."]],
      }),
      s("よし、今日から毎日{走ろう}。", "よし、きょうからまいにち{はしろう}。", "Right, from today I'm going to run every day.", {
        hint: "走る",
        conj: { word: word("走る"), form: "volitional", marker: "う" },
        near: [["走よう", "走る is a godan verb, even though it ends in る: 走ろう."]],
      }),
      s("何を{食べよう}かな。", "なにを{たべよう}かな。", "Hmm, what shall I eat?", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "volitional", marker: "う" },
        near: [["食べろう", "食べる is ichidan: swap る for よう, 食べよう."]],
      }),
    ],
  }),

  point({
    id: "n4-you-to-omou",
    title: "〜ようと思う",
    meaning: "be thinking of doing, plan to",
    structure: "Volitional form + と思う / と思っている",
    related: ["n4-volitional", "n5-tsumori", "n4-to-omou"],
    explanation: `
Volitional + **と思う** says what you're thinking of doing: 夏休みに日本へ行こうと思います, "I'm thinking of going to Japan in the summer holidays". Literally "I think 'let's go'".

と思っています suggests a plan you've had for a while: 来年から一人で住もうと思っています.

Compare its neighbours:

- 行くと思う: "I think (someone) will go", a prediction, not a plan
- 行こうと思う: "I'm thinking of going", an intention still taking shape
- 行くつもりだ: "I intend to go", a firmer decision

It's the natural, slightly modest way to talk about your own plans.
`,
    sentences: [
      s("夏休みに日本へ{行こうと思います}。", "なつやすみににほんへ{いこうとおもいます}。", "I'm thinking of going to Japan in the summer holidays.", {
        hint: "行く",
        conj: { word: word("行く"), form: "volitional", tail: "と思います", marker: "と思います" },
        near: [["行くと思います", "行くと思う is a prediction (\"I think I'll probably go\"). For your intention, use the volitional: 行こうと思う."]],
      }),
      s("来年から一人で{住もうと思っています}。", "らいねんからひとりで{すもうとおもっています}。", "I'm planning to live on my own from next year.", {
        hint: "住む",
        conj: { word: word("住む"), form: "volitional", tail: "と思っています", marker: "と思っています" },
        near: [["住むつもりです", "つもり works too and sounds firmer. This point practises ようと思う."]],
      }),
      s("今日は早く{寝ようと思う}。", "きょうははやく{ねようとおもう}。", "I think I'll go to bed early today.", {
        hint: "寝る, casual",
        conj: { word: word("寝る"), form: "volitional", tail: "と思う", marker: "と思う" },
        near: [["寝ると思う", "寝ると思う is a prediction. For your intention, use the volitional: 寝ようと思う."]],
      }),
      s("新しいパソコンを{買おうと思っています}。", "あたらしいパソコンを{かおうとおもっています}。", "I've been thinking of buying a new computer.", {
        hint: "買う",
        conj: { word: word("買う"), form: "volitional", tail: "と思っています", marker: "と思っています" },
        near: [["買いたいと思っています", "That's \"I've been wanting to buy\". This point practises the volitional: 買おうと思う."]],
      }),
      s("週末は部屋を{掃除しようと思います}。", "しゅうまつはへやを{そうじしようとおもいます}。", "I'm going to clean my room at the weekend.", {
        hint: "掃除する",
        conj: { word: word("掃除する", "そうじする", "irregular"), form: "volitional", tail: "と思います", marker: "と思います" },
        near: [["掃除すると思います", "That's a prediction. For your intention, use the volitional: 掃除しようと思う."]],
      }),
    ],
  }),

  point({
    id: "n4-imperative",
    title: "Imperative・〜な",
    meaning: "do it! / don't!",
    structure: "Godan: e-row (行け) · Ichidan: ろ (食べろ) · しろ · 来い · Dictionary form + な",
    register: "Blunt. Heard from coaches, in emergencies, on signs, and in manga; rude said directly to most people.",
    related: ["n5-te-kudasai", "n5-naide-kudasai"],
    explanation: `
The **imperative** is a bare command:

- godan verbs move to the e-row: 行く → 行け, 飲む → 飲め, 頑張る → 頑張れ
- ichidan verbs swap る for ろ: 食べる → 食べろ, 逃げる → 逃げろ
- する → しろ, 来る → 来い (こい)

The negative is the dictionary form plus **な**: 行くな, "don't go"; 撮るな, "don't take (photos)".

It's blunt. You'll hear it shouted in emergencies (逃げろ!), from sports coaches, on road signs (止まれ), in cheering (頑張れ!) and constantly in manga. Said to a colleague, it's rude.

Parents and teachers use the softer **なさい** on the ます-stem: 早く寝なさい, "go to bed now".
`,
    sentences: [
      s("早く{逃げろ}！", "はやく{にげろ}！", "Run! Get out of here, quick!", {
        hint: "逃げる",
        conj: { word: word("逃げる", "にげる", "ichidan"), form: "imperative", first: true, marker: "ろ" },
        near: [["逃げて", "That's a request. As a shouted command, use the imperative: 逃げろ."]],
      }),
      s("危ない！{止まれ}！", "あぶない！{とまれ}！", "Watch out! Stop!", {
        hint: "止まる",
        conj: { word: word("止まる", "とまる", "godan"), form: "imperative", marker: "れ" },
        near: [["止まって", "That's a request. As a shouted command (or a road sign), use 止まれ."]],
      }),
      s("ここで写真を{撮るな}。", "ここでしゃしんを{とるな}。", "Don't take photos here.", {
        hint: "撮る, don't",
        conj: { word: word("撮る", "とる", "godan"), form: "imperative-negative", marker: "な" },
        near: [["撮らないで", "That's a request. As a blunt command, use the dictionary form + な."]],
      }),
      s("もっと{頑張れ}！", "もっと{がんばれ}！", "Come on, keep going!", {
        hint: "頑張る",
        conj: { word: word("頑張る", "がんばる", "godan"), form: "imperative", marker: "れ" },
        near: [["頑張って", "That's the gentler \"do your best\". As a cheer from the sidelines, 頑張れ."]],
      }),
      s("もう十時よ。早く{寝なさい}。", "もうじゅうじよ。はやく{ねなさい}。", "It's already ten. Go to bed, now.", {
        hint: "寝る, parent to child",
        conj: { word: word("寝る"), form: "polite", cut: "ます", tail: "なさい", marker: "なさい" },
        near: [["寝ろ", "寝ろ is blunt. From a parent to a child, 寝なさい."]],
      }),
    ],
  }),
];
