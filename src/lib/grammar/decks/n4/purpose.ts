import { point, s, word } from "../../build";

/** Aims, decisions, habits and change, and verbs built onto other verbs. */

export const purpose = [
  point({
    id: "n4-tame-ni",
    title: "〜ために",
    meaning: "in order to, for (the sake of)",
    structure: "Verb dictionary form + ために · Noun + のために",
    related: ["n4-you-ni", "n5-ni-iku", "n3-tame-reason"],
    explanation: `
**ために** gives a purpose: 日本の大学に入るために勉強しています, "I'm studying to get into a Japanese university".

After a noun it takes の and means "for (the sake of)": 家族のために働く, "work for my family"; 健康のために走る, "run for my health".

With verbs, ために is for goals you can act on directly, with the same person doing both parts. For results you can't just decide (being able to see, not catching a cold), Japanese uses ように, the next point: 見えるように, 風邪を引かないように.

A quick test: if the verb before it is something you can choose to do, it's ために.
`,
    sentences: [
      s("日本の大学に入る{ために}、毎日勉強しています。", "にほんのだいがくにはいる{ために}、まいにちべんきょうしています。", "I study every day to get into a Japanese university.", {
        near: [["ように", "ように is for results you can't directly control. For a deliberate goal, use ために."]],
      }),
      s("家族{のために}働いています。", "かぞく{のために}はたらいています。", "I work for my family.", {
        near: [["ために", "After a noun, add の: 家族のために."]],
      }),
      s("健康{のために}、毎朝走っています。", "けんこう{のために}、まいあさはしっています。", "I run every morning for my health.", {
        near: [["ために", "After a noun, add の: 健康のために."]],
      }),
      s("車を買う{ために}、お金を貯めています。", "くるまをかう{ために}、おかねをためています。", "I'm saving up to buy a car.", {
        near: [["ように", "ように is for results you can't directly control. Buying is a choice: ために."]],
      }),
      s("京都へ旅行に行く{ために}、休みを取りました。", "きょうとへりょこうにいく{ために}、やすみをとりました。", "I took some time off to go on a trip to Kyoto.", {
        near: [["から", "から would give a reason. For the purpose, use ために."]],
      }),
    ],
  }),

  point({
    id: "n4-you-ni",
    title: "〜ように",
    meaning: "so that, in order that",
    structure: "Verb (potential / negative / non-volitional) + ように",
    related: ["n4-tame-ni", "n4-you-ni-naru", "n4-you-ni-suru"],
    explanation: `
**ように** also gives a purpose, but for results you can't simply choose: 黒板がよく見えるように前に座った, "I sat at the front so I could see the board". You can't decide to see; you can only arrange things so that you will.

So ように usually follows:

- the potential form: 見えるように, 話せるように
- a negative: 風邪を引かないように, 忘れないように
- verbs that happen by themselves: 分かるように, 間に合うように

The two parts can have different subjects: 子どもでも分かるように説明してください, "please explain so that even a child can understand".

For deliberate goals (勉強する, 買う, 行く), use ために.
`,
    sentences: [
      s("黒板の字がよく見える{ように}、前に座りました。", "こくばんのじがよくみえる{ように}、まえにすわりました。", "I sat at the front so I could see the board.", {
        near: [["ために", "見える isn't something you do on purpose. For \"so that\", use ように."]],
      }),
      s("風邪を引かない{ように}、コートを着ています。", "かぜをひかない{ように}、コートをきています。", "I'm wearing a coat so I don't catch a cold.", {
        near: [["ために", "Not catching a cold isn't an action you take. For \"so that not\", use ように."]],
      }),
      s("忘れない{ように}、メモしておきます。", "わすれない{ように}、メモしておきます。", "I'll make a note so I don't forget.", {
        near: [["ために", "Not forgetting isn't an action you take. Use ように."]],
      }),
      s("子どもでも分かる{ように}、簡単に説明してください。", "こどもでもわかる{ように}、かんたんにせつめいしてください。", "Please explain it simply, so even a child can understand.", {
        near: [["ために", "The child understanding isn't your action. For \"so that they can\", use ように."]],
      }),
      s("遅れない{ように}、早く家を出ました。", "おくれない{ように}、はやくいえをでました。", "I left home early so as not to be late.", {
        near: [["ために", "Not being late is a result, not an action. Use ように."]],
      }),
    ],
  }),

  point({
    id: "n4-you-ni-naru",
    title: "〜ようになる",
    meaning: "come to (do), become able to",
    structure: "Verb dictionary / potential form + ようになる",
    related: ["n4-you-ni-suru", "n4-potential", "n5-naru"],
    explanation: `
**ようになる** describes a change in what someone does or can do: 日本語の新聞が読めるようになりました, "I've become able to read Japanese newspapers".

With the potential form, it's a new ability: 泳げるようになった, "(the child) can swim now".

With the ordinary dictionary form, it's a new habit: 最近、野菜を食べるようになりました, "I've started eating vegetables lately".

Compare なる with nouns and adjectives (上手になる, 寒くなる). Verbs can't go straight before なる, so ように is the bridge.

For a change to not doing something, the negative is usually なくなる: 見なくなった, "I stopped watching".
`,
    sentences: [
      s("日本語の新聞が{読めるようになりました}。", "にほんごのしんぶんが{よめるようになりました}。", "I've become able to read Japanese newspapers.", {
        hint: "読む, can",
        conj: { word: word("読む"), form: "potential", tail: "ようになりました" },
        near: [["読めました", "That's \"I could read it\". For a new ability, use ようになりました."]],
      }),
      s("最近、野菜を{食べるようになりました}。", "さいきん、やさいを{たべるようになりました}。", "I've started eating vegetables lately.", {
        hint: "食べる",
        near: [["食べるようにしました", "ようにする is making an effort. For a change that's happened, use ようになりました."]],
      }),
      s("子どもは一人で{泳げるようになった}。", "こどもはひとりで{およげるようになった}。", "My child can swim on their own now.", {
        hint: "泳ぐ, can",
        conj: { word: word("泳ぐ"), form: "potential", tail: "ようになった" },
        near: [["泳ぐようになった", "That's a new habit (\"started swimming\"). For a new ability, use the potential: 泳げるようになった."]],
      }),
      s("毎朝早く{起きるようになりました}。", "まいあさはやく{おきるようになりました}。", "I've got into the habit of getting up early.", {
        hint: "起きる",
        near: [["起きました", "That's just \"I got up\". For a change in habit, use ようになりました."]],
      }),
      s("前は納豆が嫌いでしたが、今は{食べられるようになりました}。", "まえはなっとうがきらいでしたが、いまは{たべられるようになりました}。", "I used to hate natto, but now I can eat it.", {
        hint: "食べる, can",
        conj: { word: word("食べる"), form: "potential", tail: "ようになりました" },
        near: [["食べれるようになりました", "That's the everyday ら-less form. The standard potential keeps the ら: 食べられる."]],
      }),
    ],
  }),

  point({
    id: "n4-you-ni-suru",
    title: "〜ようにする",
    meaning: "make a point of, try to (as a habit)",
    structure: "Verb dictionary / ない form + ようにする",
    related: ["n4-you-ni-naru", "n4-koto-ni-suru"],
    explanation: `
**ようにする** means making an effort to do something, usually as an ongoing habit: 毎日野菜を食べるようにしています, "I make a point of eating vegetables every day".

With the ない form, it's trying not to: 夜は甘い物を食べないようにしています, "I try not to eat sweets at night".

ようにしています describes a habit you keep up; ようにします is a resolution: これからは早く寝るようにします, "from now on I'll try to get to bed early".

As a request it's a polite reminder: 遅れないようにしてください, "please make sure you're not late".

Compare ようになる (a change that happened) and ことにする (a decision).
`,
    sentences: [
      s("毎日野菜を{食べるようにしています}。", "まいにちやさいを{たべるようにしています}。", "I make a point of eating vegetables every day.", {
        hint: "食べる",
        near: [["食べるようになっています", "ようになる is a change that happened. For a habit you keep up on purpose, use ようにする."]],
      }),
      s("夜は甘い物を{食べないようにしています}。", "よるはあまいものを{たべないようにしています}。", "I try not to eat sweets at night.", {
        hint: "食べる, not",
        conj: { word: word("食べる"), form: "negative", tail: "ようにしています" },
        near: [["食べないことにしています", "That's a rule you've decided on. For trying to, use ようにしています."]],
      }),
      s("明日は遅れない{ようにしてください}。", "あしたはおくれない{ようにしてください}。", "Please make sure you're not late tomorrow.", {
        near: [["でください", "遅れないでください (\"please don't be late\") works too. This point practises ようにしてください."]],
      }),
      s("毎日三十分歩く{ようにしています}。", "まいにちさんじゅっぷんあるく{ようにしています}。", "I try to walk for thirty minutes every day.", {
        near: [["ようになっています", "ようになる is a change that happened. For an effort you keep up, use ようにする."]],
      }),
      s("これからは早く寝る{ようにします}。", "これからははやくねる{ようにします}。", "From now on, I'll try to get to bed early.", {
        near: [["ことにします", "That's a firm decision. For \"I'll try to\", use ようにします."]],
      }),
    ],
  }),

  point({
    id: "n4-koto-ni-suru",
    title: "〜ことにする",
    meaning: "decide to",
    structure: "Verb dictionary / ない form + ことにする",
    related: ["n4-koto-ni-naru", "n5-ni-suru", "n5-tsumori", "n3-koto-ni-shiteiru"],
    explanation: `
**ことにする** is deciding to do something: 来年、日本へ留学することにしました, "I've decided to study in Japan next year". It's the verb version of にする ("decide on", with nouns).

ことにしました reports a decision you've made. ことにします announces one now.

ことにしている describes a personal rule you've kept for a while: お酒は飲まないことにしている, "I make it a rule not to drink".

The contrast is ことになる, the next point, where the decision was made by others or by circumstances. Choosing between them says who decided, and Japanese speakers pick carefully: claiming a group decision as your own can sound pushy.
`,
    sentences: [
      s("来年、日本へ留学する{ことにしました}。", "らいねん、にほんへりゅうがくする{ことにしました}。", "I've decided to study in Japan next year.", {
        near: [["ことになりました", "ことになる is decided for you. You made this choice: ことにしました."]],
      }),
      s("今日から毎日運動する{ことにします}。", "きょうからまいにちうんどうする{ことにします}。", "From today, I'm going to exercise every day.", {
        near: [["ようにします", "That's \"I'll try to\". For a firm decision, use ことにします."]],
      }),
      s("雨なので、出かけない{ことにしました}。", "あめなので、でかけない{ことにしました}。", "It's raining, so I've decided not to go out.", {
        near: [["ことになりました", "ことになる is decided for you. You chose to stay in: ことにしました."]],
      }),
      s("お酒はもう飲まない{ことにしている}。", "おさけはもうのまない{ことにしている}。", "I've made it a rule not to drink anymore.", {
        near: [["ようにしている", "That's \"I try not to\". For a firm personal rule, use ことにしている."]],
      }),
      s("週末は京都に行く{ことにしました}。", "しゅうまつはきょうとにいく{ことにしました}。", "We've decided to go to Kyoto at the weekend.", {
        near: [["つもりです", "つもり is a plan. For announcing the decision, use ことにしました."]],
      }),
    ],
  }),

  point({
    id: "n4-koto-ni-naru",
    title: "〜ことになる",
    meaning: "it's been decided that, it turns out that",
    structure: "Verb dictionary / ない form + ことになる",
    related: ["n4-koto-ni-suru", "n5-naru"],
    explanation: `
**ことになる** says something has been decided, by others or by circumstances: 来月、大阪へ転勤することになりました, "I'm being transferred to Osaka next month".

It's also a modest way to announce your own news, playing down your role: 結婚することになりました, "we're getting married" (as if it simply came about).

ことになっている describes an arrangement or rule: この部屋ではたばこを吸ってはいけないことになっています, "smoking isn't allowed in this room".

The contrast with ことにする is who decided. にする puts you in charge; になる lets the decision come from outside. News, schedules and company announcements lean heavily on ことになりました for that reason.
`,
    sentences: [
      s("来月、大阪へ転勤する{ことになりました}。", "らいげつ、おおさかへてんきんする{ことになりました}。", "I'm being transferred to Osaka next month.", {
        near: [["ことにしました", "ことにする is your own decision. A transfer is decided for you: ことになりました."]],
      }),
      s("次の会議は金曜日にする{ことになりました}。", "つぎのかいぎはきんようびにする{ことになりました}。", "The next meeting's been set for Friday.", {
        near: [["ことにしました", "ことにした puts you in charge. For a group decision, use ことになりました."]],
      }),
      s("この部屋ではたばこを吸ってはいけない{ことになっています}。", "このへやではたばこをすってはいけない{ことになっています}。", "Smoking isn't allowed in this room.", {
        near: [["ことにしています", "That's a personal rule. For an arrangement that applies to everyone, use ことになっています."]],
      }),
      s("実は、結婚する{ことになりました}。", "じつは、けっこんする{ことになりました}。", "Actually, we're getting married.", {
        near: [["ことにしました", "That works too, but ことになりました is the modest, usual way to announce it."]],
      }),
      s("来年から新しい学校に通う{ことになった}。", "らいねんからあたらしいがっこうにかよう{ことになった}。", "I'll be going to a new school from next year.", {
        near: [["ことにした", "ことにした puts you in charge. If it was decided for you, use ことになった."]],
      }),
    ],
  }),

  point({
    id: "n4-sugiru",
    title: "〜すぎる",
    meaning: "too much, over-",
    structure: "Verb ます-stem / い-adj − い / な-adj + すぎる",
    related: ["n4-yasui-nikui"],
    explanation: `
**すぎる** means "too much": 飲みすぎた, "I drank too much"; 高すぎる, "too expensive".

- verbs: ます-stem + すぎる: 食べすぎる, 働きすぎる
- い-adjectives: drop い: 高すぎる, 難しすぎる (and いい → よすぎる)
- な-adjectives: add directly: 静かすぎる, 簡単すぎる

It's an ichidan verb, so it conjugates as one: すぎます, すぎた, すぎて. The て-form is common for a reason: 食べすぎて、お腹が痛い, "I ate too much and my stomach hurts".

The noun すぎ is also common: 飲みすぎ, "overdrinking"; 働きすぎだよ, "you're working too hard". It usually sounds like a complaint, so to praise something as very good, use とても instead.
`,
    sentences: [
      s("昨日は{飲みすぎました}。", "きのうは{のみすぎました}。", "I drank too much yesterday.", {
        hint: "飲む, too much",
        conj: { word: word("飲む"), form: "polite", cut: "ます", tail: "すぎました", marker: "すぎました" },
        near: [["たくさん飲みました", "That's \"drank a lot\". For \"too much\", use すぎました."]],
      }),
      s("このかばんは{高すぎます}。", "このかばんは{たかすぎます}。", "This bag is too expensive.", {
        hint: "高い, too",
        near: [["高いすぎます", "Drop the い before すぎる: 高すぎます."]],
      }),
      s("この部屋は{静かすぎる}。", "このへやは{しずかすぎる}。", "This room is too quiet.", {
        hint: "静か, too",
        near: [["静かなすぎる", "な-adjectives take すぎる directly: 静かすぎる."]],
      }),
      s("{食べすぎて}、お腹が痛い。", "{たべすぎて}、おなかがいたい。", "I ate too much and my stomach hurts.", {
        hint: "食べる, too much",
        conj: { word: word("食べる"), form: "polite", cut: "ます", tail: "すぎて", marker: "すぎて" },
        near: [["食べるすぎて", "すぎる goes on the ます-stem: 食べすぎて."]],
      }),
      s("仕事が{多すぎて}、休めません。", "しごとが{おおすぎて}、やすめません。", "I've got too much work to take a break.", {
        hint: "多い, too",
        near: [["多いすぎて", "Drop the い before すぎる: 多すぎて."]],
      }),
    ],
  }),

  point({
    id: "n4-yasui-nikui",
    title: "〜やすい・〜にくい",
    meaning: "easy to, hard to",
    structure: "Verb ます-stem + やすい / にくい",
    related: ["n4-sugiru", "n4-kata"],
    explanation: `
Verb ます-stem + **やすい** means "easy to do", and + **にくい** means "hard to do": このペンは書きやすい, "this pen is easy to write with"; この漢字は覚えにくい, "this kanji is hard to remember".

The result is an い-adjective: 書きやすくない, 分かりやすかった.

やすい also means "likely to, prone to", for things that happen by themselves: 雨の日は道が滑りやすい, "roads get slippery on rainy days".

Don't confuse it with 安い ("cheap"), the same sound. And for "difficult" in general, not tied to a verb, it's 難しい; にくい is always about doing something.
`,
    sentences: [
      s("このペンは{書きやすい}です。", "このペンは{かきやすい}です。", "This pen is easy to write with.", {
        hint: "書く, easy",
        conj: { word: word("書く"), form: "polite", cut: "ます", tail: "やすい", marker: "やすい" },
        near: [["書くやすい", "やすい goes on the ます-stem: 書きやすい."]],
      }),
      s("先生の説明はいつも{分かりやすい}。", "せんせいのせつめいはいつも{わかりやすい}。", "The teacher's explanations are always easy to follow.", {
        hint: "分かる, easy",
        conj: { word: word("分かる"), form: "polite", cut: "ます", tail: "やすい", marker: "やすい" },
        near: [["簡単", "簡単 is \"simple\". For \"easy to understand\", use 分かりやすい."]],
      }),
      s("この漢字は{覚えにくい}です。", "このかんじは{おぼえにくい}です。", "This kanji is hard to remember.", {
        hint: "覚える, hard",
        conj: { word: word("覚える"), form: "polite", cut: "ます", tail: "にくい", marker: "にくい" },
        near: [["覚えるのが難しい", "That works too. This point practises the shorter 覚えにくい."]],
      }),
      s("雨の日は道が{滑りやすい}。", "あめのひはみちが{すべりやすい}。", "Roads get slippery on rainy days.", {
        hint: "滑る, likely to",
        conj: { word: word("滑る"), form: "polite", cut: "ます", tail: "やすい", marker: "やすい" },
        near: [["滑る", "That's just \"slip\". For \"prone to slipping\", use 滑りやすい."]],
      }),
      s("この靴は{歩きにくい}です。", "このくつは{あるきにくい}です。", "These shoes are hard to walk in.", {
        hint: "歩く, hard",
        conj: { word: word("歩く"), form: "polite", cut: "ます", tail: "にくい", marker: "にくい" },
        near: [["歩くにくい", "にくい goes on the ます-stem: 歩きにくい."]],
      }),
    ],
  }),

  point({
    id: "n4-kata",
    title: "〜方",
    meaning: "way of doing, how to",
    structure: "Verb ます-stem + 方 (かた)",
    related: ["n4-yasui-nikui", "n4-embedded-question"],
    explanation: `
Verb ます-stem + **方** (かた) makes a noun, "the way of doing": 読み方, "how to read, reading"; 使い方, "how to use"; 作り方, "how to make, a recipe".

It's a noun, so it takes の for its object instead of を: 漢字の読み方, "how to read the kanji"; 箸の使い方, "how to use chopsticks".

する becomes 仕方 (しかた), "the way to do": 勉強の仕方. You'll also hear やり方 with the same meaning, from やる.

It's the natural way to ask for instructions: 行き方を教えてください, "please tell me how to get there".
`,
    sentences: [
      s("この漢字の{読み方}を教えてください。", "このかんじの{よみかた}をおしえてください。", "Please tell me how to read this kanji.", {
        hint: "読む, how to",
        conj: { word: word("読む"), form: "polite", cut: "ます", tail: "方", marker: "方" },
        near: [["読むの方", "Use the ます-stem + 方: 読み方."]],
      }),
      s("駅への{行き方}が分かりません。", "えきへの{いきかた}がわかりません。", "I don't know how to get to the station.", {
        hint: "行く, how to",
        conj: { word: word("行く"), form: "polite", cut: "ます", tail: "方", marker: "方" },
        near: [["行く方", "Use the ます-stem + 方: 行き方."]],
      }),
      s("日本で箸の{使い方}を習いました。", "にほんではしの{つかいかた}をならいました。", "I learned how to use chopsticks in Japan.", {
        hint: "使う, how to",
        conj: { word: word("使う"), form: "polite", cut: "ます", tail: "方", marker: "方" },
        near: [["使う方", "Use the ます-stem + 方: 使い方."]],
      }),
      s("このケーキの{作り方}を知っていますか。", "このケーキの{つくりかた}をしっていますか。", "Do you know how to make this cake?", {
        hint: "作る, how to",
        conj: { word: word("作る"), form: "polite", cut: "ます", tail: "方", marker: "方" },
        near: [["作るの方", "Use the ます-stem + 方: 作り方."]],
      }),
      s("勉強の{仕方}がよく分からない。", "べんきょうの{しかた}がよくわからない。", "I don't really know how to study.", {
        hint: "する, how to",
        near: [["やり方", "やり方 works too. する's own version is 仕方 (しかた)."]],
      }),
    ],
  }),

  point({
    id: "n4-hajimeru-owaru",
    title: "〜始める・〜終わる・〜続ける",
    meaning: "start, finish, keep (doing)",
    structure: "Verb ます-stem + 始める / 終わる / 続ける",
    related: ["n4-sugiru", "n4-te-shimau"],
    explanation: `
Three verbs attach to the ます-stem to mark where an action is:

- **始める**: start doing: 雨が降り始めた, "it started to rain"
- **終わる**: finish doing: 本を読み終わった, "I finished reading the book"
- **続ける**: keep doing: 三時間歩き続けた, "we kept walking for three hours"

Each one then conjugates as usual: 始めました, 終わったら, 続けています.

For things you start doing on purpose, 〜出す is a livelier alternative at N3 (降り出す, 走り出す).

Compare the て-form + しまう, which is about completion with a feeling attached. 読み終わる is a plain fact: the reading is done.
`,
    sentences: [
      s("あ、雨が{降り始めました}。", "あ、あめが{ふりはじめました}。", "Oh, it's started raining.", {
        hint: "降る, start",
        conj: { word: word("降る"), form: "polite", cut: "ます", tail: "始めました", marker: "始めました" },
        near: [["降るを始めました", "Attach 始める to the ます-stem: 降り始めました."]],
      }),
      s("やっとこの本を{読み終わりました}。", "やっとこのほんを{よみおわりました}。", "I've finally finished reading this book.", {
        hint: "読む, finish",
        conj: { word: word("読む"), form: "polite", cut: "ます", tail: "終わりました", marker: "終わりました" },
        near: [["読みました", "That's just \"I read it\". For finishing, use 読み終わりました."]],
      }),
      s("三時間も{歩き続けました}。", "さんじかんも{あるきつづけました}。", "We kept walking for three whole hours.", {
        hint: "歩く, keep",
        conj: { word: word("歩く"), form: "polite", cut: "ます", tail: "続けました", marker: "続けました" },
        near: [["歩きました", "That's just \"walked\". For keeping going, use 歩き続けました."]],
      }),
      s("日本語を{勉強し始めた}のは去年です。", "にほんごを{べんきょうしはじめた}のはきょねんです。", "It was last year that I started learning Japanese.", {
        hint: "勉強する, start",
        conj: { word: word("勉強する"), form: "polite", cut: "ます", tail: "始めた", marker: "始めた" },
        near: [["勉強を始めた", "That works too. This point practises the stem + 始める: 勉強し始めた."]],
      }),
      s("{食べ終わったら}、お皿を洗ってください。", "{たべおわったら}、おさらをあらってください。", "When you've finished eating, please wash your plate.", {
        hint: "食べる, finish",
        conj: { word: word("食べる"), form: "polite", cut: "ます", tail: "終わったら", marker: "終わったら" },
        near: [["食べたら", "That's \"when you've eaten\". To stress finishing, use 食べ終わったら."]],
      }),
    ],
  }),

  point({
    id: "n4-naku-naru",
    title: "〜なくなる",
    meaning: "run out; stop doing, no longer",
    structure: "Noun が なくなる · Verb ない-form − い + くなる",
    related: ["n4-you-ni-naru", "n5-naru"],
    explanation: `
**なくなる** is ない plus なる: "come to not be". With a noun, it's running out or disappearing: 時間がなくなりました, "we've run out of time"; 牛乳がなくなった, "the milk's gone".

With a verb's ない form (ない → なく + なる), it's stopping a habit or losing an ability: 最近テレビを見なくなりました, "I've stopped watching TV lately". It's the negative partner of ようになる.

With adjectives it works the same way: 痛くなくなった, "it doesn't hurt anymore".

Be aware that 亡くなる, written with a different kanji, is the polite way to say someone has died.
`,
    sentences: [
      s("もう時間が{なくなりました}。", "もうじかんが{なくなりました}。", "We've run out of time.", {
        near: [["ありませんでした", "That's \"there wasn't time\". For running out, use なくなりました."]],
      }),
      s("冷蔵庫の牛乳が{なくなった}。", "れいぞうこのぎゅうにゅうが{なくなった}。", "The milk in the fridge has run out.", {
        near: [["ない", "That's \"there isn't any\". For running out, use なくなった."]],
      }),
      s("最近、テレビを{見なくなりました}。", "さいきん、テレビを{みなくなりました}。", "I've stopped watching TV lately.", {
        hint: "見る, no longer",
        conj: { word: word("見る"), form: "negative", cut: "い", tail: "くなりました", marker: "くなりました" },
        near: [["見ませんでした", "That's \"I didn't watch\". For no longer watching, use 見なくなりました."]],
      }),
      s("薬を飲んだら、頭が{痛くなくなりました}。", "くすりをのんだら、あたまが{いたくなくなりました}。", "After I took the medicine, my head stopped hurting.", {
        hint: "痛い, no longer",
        conj: { word: word("痛い", "いたい", "i-adj"), form: "negative", cut: "い", tail: "くなりました", marker: "くなりました" },
        near: [["痛くなかったです", "That's \"it didn't hurt\". For stopping hurting, use 痛くなくなりました."]],
      }),
      s("彼女は急に連絡を{くれなくなった}。", "かのじょはきゅうにれんらくを{くれなくなった}。", "She suddenly stopped getting in touch.", {
        hint: "くれる, no longer",
        conj: { word: word("くれる", "くれる", "ichidan"), form: "negative", cut: "い", tail: "くなった", marker: "くなった" },
        near: [["くれなかった", "That's \"didn't get in touch (once)\". For stopping, use くれなくなった."]],
      }),
    ],
  }),
];
