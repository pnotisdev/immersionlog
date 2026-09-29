import { point, s, word } from "../../build";

/** Passive and causative: things done to you, and making or letting others act. */

export const voice = [
  point({
    id: "n4-passive",
    title: "Passive form",
    meaning: "be done (by someone)",
    structure: "Godan: a-row + れる (読まれる) · Ichidan: られる · される · 来られる · Doer + に",
    related: ["n4-passive-trouble", "n4-causative", "n4-potential"],
    explanation: `
The **passive** says something is done to the subject: 先生に褒められた, "I was praised by my teacher". The doer takes に.

- godan verbs: a-row + れる: 読む → 読まれる, 呼ぶ → 呼ばれる, 言う → 言われる
- ichidan verbs: られる: 褒める → 褒められる (the same form as the potential; context tells them apart)
- する → される, 来る → 来られる

The result is an ichidan verb: 褒められた, 褒められます.

Japanese uses the passive more for things that happen to people than for facts about things, but both occur: この歌は世界中で歌われています, "this song is sung all over the world"; このお寺は八百年前に建てられた, "this temple was built eight hundred years ago".
`,
    sentences: [
      s("先生に{褒められました}。", "せんせいに{ほめられました}。", "I was praised by my teacher.", {
        hint: "褒める, passive",
        conj: { word: word("褒める", "ほめる", "ichidan"), form: "passive", cut: "る", tail: "ました", marker: "ました" },
        near: [["褒めました", "That's \"praised (someone)\". You were the one praised: 褒められました."]],
      }),
      s("この歌は世界中で{歌われています}。", "このうたはせかいじゅうで{うたわれています}。", "This song is sung all over the world.", {
        hint: "歌う, passive",
        conj: { word: word("歌う", "うたう", "godan"), form: "passive", cut: "る", tail: "ています", marker: "ています" },
        near: [["歌っています", "That's \"(someone) is singing it\". For \"is sung\", use the passive: 歌われています."]],
      }),
      s("公園で犬に{かまれた}。", "こうえんでいぬに{かまれた}。", "I got bitten by a dog in the park.", {
        hint: "かむ, passive",
        conj: { word: word("かむ", "かむ", "godan"), form: "passive", cut: "る", tail: "た", marker: "た" },
        near: [["かんだ", "That's \"bit (something)\". You were the one bitten: かまれた."]],
      }),
      s("このお寺は八百年前に{建てられました}。", "このおてらははっぴゃくねんまえに{たてられました}。", "This temple was built eight hundred years ago.", {
        hint: "建てる, passive",
        conj: { word: word("建てる", "たてる", "ichidan"), form: "passive", cut: "る", tail: "ました", marker: "ました" },
        near: [["建ちました", "建つ (\"stand, be built\") works too. This point practises the passive: 建てられました."]],
      }),
      s("母に{呼ばれて}、台所へ行きました。", "ははに{よばれて}、だいどころへいきました。", "My mother called me, so I went to the kitchen.", {
        hint: "呼ぶ, passive",
        conj: { word: word("呼ぶ"), form: "passive", cut: "る", tail: "て", marker: "て" },
        near: [["呼んで", "That would be you calling her. You were called: 呼ばれて."]],
      }),
    ],
  }),

  point({
    id: "n4-passive-trouble",
    title: "Passive of trouble",
    meaning: "have something (annoying) happen to you",
    structure: "Affected person は + doer に + (thing を) + passive",
    related: ["n4-passive"],
    explanation: `
The Japanese passive has a use English lacks: saying that something happened **to you** and you were put out by it. 雨に降られた, "I got rained on"; 弟にケーキを食べられた, "my little brother ate my cake (and I'm not happy)".

The affected person is the subject, the doer takes に, and the thing affected keeps を: 電車で足を踏まれた, "someone stepped on my foot on the train".

It works even with verbs that have no object, which English can't passivise at all: 赤ちゃんに泣かれて寝られなかった, "the baby cried (on me) and I couldn't sleep".

Compare 弟がケーキを食べた, a neutral report. The passive version tells the listener how you feel about it.
`,
    sentences: [
      s("帰りに雨に{降られました}。", "かえりにあめに{ふられました}。", "I got caught in the rain on the way home.", {
        hint: "降る, passive",
        conj: { word: word("降る"), form: "passive", cut: "る", tail: "ました", marker: "ました" },
        near: [["降りました", "That's just \"it rained\". For \"I got rained on\", use the passive."]],
      }),
      s("弟に私のケーキを{食べられた}。", "おとうとにわたしのケーキを{たべられた}。", "My little brother went and ate my cake.", {
        hint: "食べる, passive",
        conj: { word: word("食べる"), form: "passive", cut: "る", tail: "た", marker: "た" },
        near: [["食べた", "That just says who ate it. To show you were on the losing end, use the passive."]],
      }),
      s("電車で足を{踏まれました}。", "でんしゃであしを{ふまれました}。", "Someone stepped on my foot on the train.", {
        hint: "踏む, passive",
        conj: { word: word("踏む", "ふむ", "godan"), form: "passive", cut: "る", tail: "ました", marker: "ました" },
        near: [["踏みました", "That's \"I stepped on (something)\". For having your foot stepped on, use the passive."]],
      }),
      s("夜中に赤ちゃんに{泣かれて}、寝られなかった。", "よなかにあかちゃんに{なかれて}、ねられなかった。", "The baby cried in the night, so I couldn't sleep.", {
        hint: "泣く, passive",
        conj: { word: word("泣く", "なく", "godan"), form: "passive", cut: "る", tail: "て", marker: "て" },
        near: [["泣いて", "That just says the baby cried. To show it kept you up, use the passive: 泣かれて."]],
      }),
      s("電車で財布を{盗まれました}。", "でんしゃでさいふを{ぬすまれました}。", "My wallet was stolen on the train.", {
        hint: "盗む, passive",
        conj: { word: word("盗む", "ぬすむ", "godan"), form: "passive", cut: "る", tail: "ました", marker: "ました" },
        near: [["盗みました", "That's \"I stole\". For having your wallet stolen, use the passive."]],
      }),
    ],
  }),

  point({
    id: "n4-causative",
    title: "Causative form",
    meaning: "make or let (someone) do",
    structure: "Godan: a-row + せる (書かせる) · Ichidan: させる · させる · 来させる",
    related: ["n4-sasete-kudasai", "n4-causative-passive", "n4-passive"],
    explanation: `
The **causative** says someone makes or lets someone else do something:

- godan verbs: a-row + せる: 書く → 書かせる, 行く → 行かせる
- ichidan verbs: させる: 食べる → 食べさせる
- する → させる, 来る → 来させる (こさせる)

Whether it's "make" or "let" comes from context: 母は弟に野菜を食べさせた is "made him eat his vegetables"; 子どもを公園で遊ばせた is "let the children play in the park".

The person who acts takes に when there's also an object (弟に野菜を), and usually を when there isn't (子どもを遊ばせる).

It also causes feelings: みんなを笑わせた, "made everyone laugh".
`,
    sentences: [
      s("母は弟に野菜を{食べさせました}。", "はははおとうとにやさいを{たべさせました}。", "My mother made my little brother eat his vegetables.", {
        hint: "食べる, make",
        conj: { word: word("食べる"), form: "causative", cut: "る", tail: "ました", marker: "ました" },
        near: [["食べられました", "That's passive (\"was eaten\"). For \"made him eat\", use the causative."]],
      }),
      s("先生は学生に作文を{書かせました}。", "せんせいはがくせいにさくぶんを{かかせました}。", "The teacher had the students write an essay.", {
        hint: "書く, make",
        conj: { word: word("書く"), form: "causative", cut: "る", tail: "ました", marker: "ました" },
        near: [["書かれました", "That's passive (\"was written\"). For \"had them write\", use the causative."]],
      }),
      s("週末は子どもを公園で{遊ばせます}。", "しゅうまつはこどもをこうえんで{あそばせます}。", "At weekends I let the children play in the park.", {
        hint: "遊ぶ, let",
        conj: { word: word("遊ぶ"), form: "causative", cut: "る", tail: "ます", marker: "ます" },
        near: [["遊びます", "That's \"(they) play\". For letting them play, use the causative."]],
      }),
      s("部長は私を大阪へ{行かせました}。", "ぶちょうはわたしをおおさかへ{いかせました}。", "My manager sent me to Osaka.", {
        hint: "行く, make",
        conj: { word: word("行く"), form: "causative", cut: "る", tail: "ました", marker: "ました" },
        near: [["行きました", "That's \"went\". For your manager making you go, use the causative."]],
      }),
      s("冗談を言って、みんなを{笑わせた}。", "じょうだんをいって、みんなを{わらわせた}。", "He told a joke and made everyone laugh.", {
        hint: "笑う, make",
        conj: { word: word("笑う"), form: "causative", cut: "る", tail: "た", marker: "た" },
        near: [["笑った", "That's \"laughed\". For making everyone laugh, use the causative."]],
      }),
    ],
  }),

  point({
    id: "n4-sasete-kudasai",
    title: "〜させてください",
    meaning: "please let me",
    structure: "Causative て-form + ください / もらえませんか",
    related: ["n4-causative", "n4-polite-requests"],
    explanation: `
The causative て-form + **ください** asks permission to do something yourself: 今日は早く帰らせてください, "please let me go home early today". Literally "please make/let me go home".

It's the standard polite way to ask to be allowed to do something, and it also frames offers humbly: 私にも手伝わせてください, "please let me help too". ちょっと考えさせてください, "let me think about it", is a polite way to not say yes right away.

Softer still: させてもらえませんか or させていただけませんか, "would you let me…?"

Don't mix it up with plain てください: 帰ってください is telling the other person to go home.
`,
    sentences: [
      s("今日は早く{帰らせてください}。", "きょうははやく{かえらせてください}。", "Please let me go home early today.", {
        hint: "帰る, let me",
        conj: { word: word("帰る"), form: "causative", cut: "る", tail: "てください" },
        near: [["帰ってください", "That's telling them to go home. To ask to go yourself, use させてください."]],
      }),
      s("ちょっと{考えさせてください}。", "ちょっと{かんがえさせてください}。", "Let me think about it for a moment.", {
        hint: "考える, let me",
        conj: { word: word("考える"), form: "causative", cut: "る", tail: "てください" },
        near: [["考えてください", "That's asking them to think. To ask for time yourself, use させてください."]],
      }),
      s("私にも{手伝わせてください}。", "わたしにも{てつだわせてください}。", "Please let me help too.", {
        hint: "手伝う, let me",
        conj: { word: word("手伝う"), form: "causative", cut: "る", tail: "てください" },
        near: [["手伝ってください", "That's asking them to help. To offer your help, use させてください."]],
      }),
      s("一言{言わせてください}。", "ひとこと{いわせてください}。", "Let me say one thing.", {
        hint: "言う, let me",
        conj: { word: word("言う"), form: "causative", cut: "る", tail: "てください" },
        near: [["言ってください", "That's asking them to say it. To ask to speak yourself, use させてください."]],
      }),
      s("写真を{撮らせてもらえませんか}。", "しゃしんを{とらせてもらえませんか}。", "Would you mind if I took a photo?", {
        hint: "撮る, polite",
        conj: { word: word("撮る", "とる", "godan"), form: "causative", cut: "る", tail: "てもらえませんか" },
        accept: ["撮らせていただけませんか", "とらせていただけませんか", "撮らせてくれませんか", "とらせてくれませんか"],
        near: [["撮ってもらえませんか", "That's asking them to take the photo. To ask to take it yourself, use させて."]],
      }),
    ],
  }),

  point({
    id: "n4-causative-passive",
    title: "Causative-passive",
    meaning: "be made to (do)",
    structure: "Causative + passive: 食べさせられる · Godan short form: 飲まされる",
    related: ["n4-causative", "n4-passive"],
    explanation: `
Put the causative and the passive together and you get "be made to do": 子どもの時、毎日ピアノを練習させられた, "as a kid I was made to practise the piano every day". The person who made you takes に.

- ichidan verbs: させられる: 食べさせられる
- godan verbs: せられる, or the shorter される that's usual in speech: 飲ませられる / 飲まされる, 待たせられる / 待たされる. Verbs ending in す only take the long form: 話させられる.
- する → させられる, 来る → 来させられる

It almost always means you didn't want to: being kept waiting (待たされた), being made to drink (飲まされた), being made to eat your vegetables.
`,
    sentences: [
      s("子どもの時、毎日ピアノを{練習させられました}。", "こどものとき、まいにちピアノを{れんしゅうさせられました}。", "As a kid, I was made to practise the piano every day.", {
        hint: "練習する, be made to",
        conj: { word: word("練習する", "れんしゅうする", "irregular"), form: "causative-passive", cut: "る", tail: "ました", marker: "ました" },
        near: [["練習させました", "That's \"made (someone) practise\". You were the one made to: させられました."]],
      }),
      s("飲み会でお酒を{飲まされた}。", "のみかいでおさけを{のまされた}。", "I was made to drink at the party.", {
        hint: "飲む, be made to",
        conj: { word: word("飲む"), form: "causative-passive", cut: "る", tail: "た", marker: "た" },
        near: [["飲ませた", "That's \"made (someone) drink\". You were the one made to: 飲まされた."]],
      }),
      s("先生に作文を{書き直させられました}。", "せんせいにさくぶんを{かきなおさせられました}。", "The teacher made me rewrite my essay.", {
        hint: "書き直す, be made to",
        conj: { word: word("書き直す", "かきなおす", "godan"), form: "causative-passive", cut: "る", tail: "ました", marker: "ました" },
        near: [["書き直さされました", "Verbs ending in す only take the long form: 書き直させられました."]],
      }),
      s("駅で一時間も{待たされた}。", "えきでいちじかんも{またされた}。", "I was kept waiting at the station for a whole hour.", {
        hint: "待つ, be made to",
        conj: { word: word("待つ"), form: "causative-passive", cut: "る", tail: "た", marker: "た" },
        near: [["待った", "That's just \"I waited\". To say you were kept waiting, use 待たされた."]],
      }),
      s("嫌いな野菜を{食べさせられた}。", "きらいなやさいを{たべさせられた}。", "I was made to eat vegetables I hate.", {
        hint: "食べる, be made to",
        conj: { word: word("食べる"), form: "causative-passive", cut: "る", tail: "た", marker: "た" },
        near: [["食べられた", "That's the plain passive (\"was eaten\"). For \"was made to eat\", use させられた."]],
      }),
    ],
  }),
];
