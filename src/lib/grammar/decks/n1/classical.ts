import { point, s } from "../../build";

/** Classical forms that live on in modern writing: ざる, ずして, べし, なかれ, ねばならない, たまえ, なかろうか, にしくはない. */

export const classical = [
  point({
    id: "n1-zaru",
    title: "〜ざる",
    meaning: "un-, not (classical negative before a noun)",
    structure: "Verb ない-stem + ざる + Noun (する → せざる)",
    related: ["n2-zaru-wo-enai", "n1-bekarazu"],
    explanation: `
**ざる** is the classical negative (ず) in its noun-modifying form. It means "not", like ない, but with a literary, dramatic feel: 知られざる名作, "an unknown masterpiece".

It attaches to the ない-stem: 知られる → 知られ + ざる, 見える → 見え + ざる, 招く → 招かれ + ざる. It's common in titles, headlines and set phrases: 招かれざる客 ("an uninvited guest"), 見えざる敵 ("an invisible enemy"), 働かざる者食うべからず, and the three monkeys, 見ざる言わざる聞かざる.

You've met it before inside ざるを得ない (N2), "have no choice but to", literally "can't not do".

In plain speech, ない does the same job: 知られない名作.
`,
    sentences: [
      s("これは知られ{ざる}名作だ。", "これはしられ{ざる}めいさくだ。", "This is an unknown masterpiece.", {
        near: [["ない", "ない works in plain speech. This point practises the literary ざる."]],
      }),
      s("我々は見え{ざる}敵と戦っている。", "われわれはみえ{ざる}てきとたたかっている。", "We're fighting an invisible enemy.", {
        near: [["ない", "ない works in plain speech. This point practises the literary ざる."]],
      }),
      s("パーティーに招かれ{ざる}客が来た。", "パーティーにまねかれ{ざる}きゃくがきた。", "An uninvited guest turned up at the party.", {
        near: [["ざるを得ない", "ざるを得ない is \"have no choice but to\". Before a noun, the classical \"not\" is ざる.", "ざるをえない"]],
      }),
      s("働か{ざる}者食うべからず。", "はたらか{ざる}ものくうべからず。", "He who does not work shall not eat.", {
        near: [["ない", "ない works in plain speech. The saying uses the classical ざる."]],
      }),
      s("見ざる、言わ{ざる}、聞かざる。", "みざる、いわ{ざる}、きかざる。", "See no evil, speak no evil, hear no evil.", {
        near: [["ない", "ない works in plain speech. The saying uses the classical ざる."]],
      }),
    ],
  }),

  point({
    id: "n1-zu-shite",
    title: "〜ずして",
    meaning: "without (doing)",
    structure: "Verb ない-stem + ずして (する → せずして)",
    related: ["n4-zu-ni", "n1-zu-tomo"],
    explanation: `
**ずして** is a literary "without doing": 戦わずして勝つ, "to win without fighting", a famous line from Sun Tzu.

It attaches to the ない-stem: 戦う → 戦わずして, 流す → 流さずして, する → せずして. It usually means achieving something without the expected effort or cost, or it states a condition: 努力せずして、成功はない, "without effort, there's no success".

Set phrases include 労せずして ("effortlessly") and 期せずして ("unexpectedly, by coincidence").

It's a weightier version of ずに (N4). Compare ずとも, "even without", which says the action is unnecessary.
`,
    sentences: [
      s("戦わ{ずして}勝つ。", "たたかわ{ずして}かつ。", "To win without fighting.", {
        accept: ["ずに"],
        near: [["ずとも", "ずとも is \"even without (it's fine)\". For \"without (and still)\", use ずして."]],
      }),
      s("彼は労せ{ずして}大金を手に入れた。", "かれはろうせ{ずして}たいきんをてにいれた。", "He made a fortune without lifting a finger.", {
        accept: ["ずに"],
        near: [["ずとも", "ずとも is \"even without (it's fine)\". For \"without (effort)\", use ずして."]],
      }),
      s("期せ{ずして}、二人は同じ答えを出した。", "きせ{ずして}、ふたりはおなじこたえをだした。", "By coincidence, the two of them came up with the same answer.", {
        near: [["ずとも", "ずとも is \"even without\". The set phrase for \"by coincidence\" is 期せずして."]],
      }),
      s("努力せ{ずして}、成功はない。", "どりょくせ{ずして}、せいこうはない。", "Without effort, there's no success.", {
        accept: ["ずに"],
        near: [["ずとも", "ずとも is \"even without (it's fine)\". For \"without (there's no)\", use ずして."]],
      }),
      s("一滴の血も流さ{ずして}、革命は成功した。", "いってきのちもながさ{ずして}、かくめいはせいこうした。", "The revolution succeeded without a drop of blood being shed.", {
        accept: ["ずに"],
        near: [["ずとも", "ずとも is \"even without (it's fine)\". For \"without\", use ずして."]],
      }),
    ],
  }),

  point({
    id: "n1-beshi",
    title: "〜べし",
    meaning: "should, must (classical, sentence-final)",
    structure: "Verb dictionary form + べし (する → すべし)",
    related: ["n3-beki", "n1-bekarazu"],
    explanation: `
**べし** is the classical ancestor of べき (N3), used at the end of a sentence for strong advice, orders or rules: 時間を厳守すべし, "punctuality is a must".

It follows the dictionary form, and with する it's usually すべし. You'll see it in rules, slogans, old sayings, school mottos and playful internet writing: この映画は必ず見るべし, "this film is a must-see".

**恐るべし** ("fear it!", from classical 恐る) is a popular exclamation of awe: 恐るべし、日本の夏, "the Japanese summer is terrifying!".

The negative is べからず (N1). Remember that べき comes before a noun or だ, while べし ends the sentence.
`,
    sentences: [
      s("学生はよく学び、よく遊ぶ{べし}。", "がくせいはよくまなび、よくあそぶ{べし}。", "Students should study hard and play hard.", {
        near: [["べき", "べき comes before a noun or だ. To end the sentence with a classical \"should\", use べし."]],
      }),
      s("時間を厳守す{べし}。", "じかんをげんしゅす{べし}。", "Punctuality is a must.", {
        near: [["べからず", "べからず is \"must not\". For \"must\", use べし."]],
      }),
      s("明日は八時に集合す{べし}。", "あしたははちじにしゅうごうす{べし}。", "Assemble at eight tomorrow.", {
        near: [["べき", "べき comes before a noun or だ. To end the sentence, use べし."]],
      }),
      s("恐る{べし}、日本の夏。", "おそる{べし}、にほんのなつ。", "The Japanese summer is terrifying!", {
        near: [["べき", "べき comes before a noun or だ. The exclamation is 恐るべし."]],
      }),
      s("この映画は必ず見る{べし}。", "このえいがはかならずみる{べし}。", "This film is a must-see.", {
        accept: ["べきだ"],
        near: [["べからず", "べからず is \"must not\". For \"a must\", use べし."]],
      }),
    ],
  }),

  point({
    id: "n1-nakare",
    title: "〜なかれ",
    meaning: "do not (classical command)",
    structure: "Verb dictionary form + なかれ",
    related: ["n4-imperative", "n1-bekarazu"],
    explanation: `
**なかれ** is a classical negative command, "do not", found in mottos, dramatic writing and set phrases: 失敗を恐れるなかれ, "do not fear failure".

It follows the dictionary form, like the plain prohibitive な (N4's imperative): 恐れるな. なかれ sounds lofty, like "thou shalt not".

**驚くなかれ** is a lively way to introduce surprising news, "believe it or not": 驚くなかれ、彼はまだ十歳だ, "believe it or not, he's only ten".

**事なかれ主義** is a common noun meaning a "don't rock the boat" attitude, avoiding trouble at all costs. In everyday speech, you'd simply say 〜な or 〜ないで.
`,
    sentences: [
      s("驚く{なかれ}、彼はまだ十歳だ。", "おどろく{なかれ}、かれはまだじゅっさいだ。", "Believe it or not, he's only ten.", {
        accept: ["な"],
        near: [["ことなく", "ことなく is \"without doing\". For \"don't (be surprised)\", use なかれ."]],
      }),
      s("あの会社は事{なかれ}主義だ。", "あのかいしゃはこと{なかれ}しゅぎだ。", "That company has a don't-rock-the-boat attitude.", {
        near: [["なし", "なし is \"without\". The set phrase is 事なかれ主義."]],
      }),
      s("失敗を恐れる{なかれ}。", "しっぱいをおそれる{なかれ}。", "Do not fear failure.", {
        accept: ["な"],
        near: [["ことなく", "ことなく is \"without doing\". For \"do not\", use なかれ."]],
      }),
      s("汝、嘘をつく{なかれ}。", "なんじ、うそをつく{なかれ}。", "Thou shalt not lie.", {
        accept: ["な"],
        near: [["べし", "べし is \"should\". For \"shalt not\", use なかれ."]],
      }),
      s("最後まで油断する{なかれ}。", "さいごまでゆだんする{なかれ}。", "Don't let your guard down until the very end.", {
        accept: ["な"],
        near: [["べし", "べし is \"should\". For \"don't\", use なかれ."]],
      }),
    ],
  }),

  point({
    id: "n1-neba-naranai",
    title: "〜ねばならない・〜ねばならぬ",
    meaning: "must, have to (formal)",
    structure: "Verb ない-stem + ねばならない / ねばならぬ (する → せねばならない)",
    related: ["n5-nakereba-naranai", "n2-zaru-wo-enai"],
    explanation: `
**ねばならない** is a formal, literary "must": 約束は守らねばならない, "promises must be kept".

It's built from the classical negative ぬ in its conditional form (ね + ば), so it's the old version of なければならない (N5). ねばならぬ is even more old-fashioned and resolute.

It attaches to the ない-stem: 守る → 守ら + ねば, 進む → 進ま + ねば, and する → せねば. Careful: する gives せねば, not しねば.

You'll meet it in speeches, novels and the speech of dignified characters. The short form せねば (without ならない) is a common spoken resolve: 急がねば!, "I must hurry!".
`,
    sentences: [
      s("約束は守ら{ねばならない}。", "やくそくはまもら{ねばならない}。", "Promises must be kept.", {
        accept: ["なければならない", "ねばならぬ"],
        near: [["なくてもいい", "なくてもいい is \"don't have to\". For \"must\", use ねばならない."]],
      }),
      s("我々は前に進ま{ねばならない}。", "われわれはまえにすすま{ねばならない}。", "We must move forward.", {
        accept: ["なければならない", "ねばならぬ"],
        near: [["なくてもいい", "なくてもいい is \"don't have to\". For \"must\", use ねばならない."]],
      }),
      s("明日までに報告書を書か{ねばならない}。", "あしたまでにほうこくしょをかか{ねばならない}。", "I have to write the report by tomorrow.", {
        accept: ["なければならない", "ねばならぬ"],
        near: [["ねばいい", "ねばいい isn't a pattern. For \"have to\", use ねばならない."]],
      }),
      s("そろそろ出発せ{ねばならない}。", "そろそろしゅっぱつせ{ねばならない}。", "It's about time we set off.", {
        accept: ["ねばならぬ"],
        near: [["なくてもいい", "なくてもいい is \"don't have to\". For \"must\", use ねばならない."]],
      }),
      s("真実を明らかにせ{ねばならぬ}。", "しんじつをあきらかにせ{ねばならぬ}。", "The truth must be brought to light.", {
        accept: ["ねばならない"],
        near: [["ねばいい", "ねばいい isn't a pattern. For \"must\", use ねばならぬ."]],
      }),
    ],
  }),

  point({
    id: "n1-tamae",
    title: "〜たまえ",
    meaning: "(do it), go ahead and (said by a man to a junior)",
    structure: "Verb ます-stem + たまえ",
    related: ["n4-nasai", "n4-imperative"],
    explanation: `
**たまえ** is a command used by men speaking to someone of lower status, such as a boss to a subordinate or a professor to a student: 遠慮せずに、座りたまえ, "don't be shy, have a seat".

It attaches to the ます-stem: 座り + たまえ, 飲み + たまえ, 考え + たまえ. It sounds authoritative but not rude, a bit old-fashioned, and very common for company presidents, teachers and aristocrats in fiction.

It comes from the classical honorific 給う ("to bestow"), so it was originally respectful. Today it's the opposite: only a superior uses it.

In everyday speech, you'd use なさい (N4) or てください.
`,
    sentences: [
      s("遠慮せずに、座り{たまえ}。", "えんりょせずに、すわり{たまえ}。", "Don't be shy, have a seat.", {
        accept: ["なさい"],
        near: [["たい", "たい is \"want to\". For a superior's \"go ahead and\", use たまえ."]],
      }),
      s("君も一杯飲み{たまえ}。", "きみもいっぱいのみ{たまえ}。", "Have a drink yourself.", {
        accept: ["なさい"],
        near: [["たい", "たい is \"want to\". For a superior's \"go ahead and\", use たまえ."]],
      }),
      s("早く答え{たまえ}。", "はやくこたえ{たまえ}。", "Answer me, quickly.", {
        accept: ["なさい"],
        near: [["たがる", "たがる is \"(someone) wants to\". For a command, use たまえ."]],
      }),
      s("まあ、落ち着き{たまえ}。", "まあ、おちつき{たまえ}。", "Now, calm down.", {
        accept: ["なさい"],
        near: [["たい", "たい is \"want to\". For a superior's command, use たまえ."]],
      }),
      s("自分の頭で考え{たまえ}。", "じぶんのあたまでかんがえ{たまえ}。", "Think for yourself.", {
        accept: ["なさい"],
        near: [["たがる", "たがる is \"(someone) wants to\". For a command, use たまえ."]],
      }),
    ],
  }),

  point({
    id: "n1-de-wa-nakarou-ka",
    title: "〜ではなかろうか・〜ではあるまいか",
    meaning: "isn't it (perhaps) that, I suspect",
    structure: "Plain form (+ の) + ではなかろうか / ではあるまいか",
    related: ["n3-no-dewa-nai-ka", "n2-mai"],
    explanation: `
**ではなかろうか** is a cautious, formal way to put forward your opinion as a question: この計画は無理があるのではなかろうか, "I wonder if this plan isn't a little unrealistic".

It's the classical version of ではないだろうか and のではないか (N3). なかろう is the old volitional of ない. **ではあるまいか** is the same, built with まい (N2).

It's typical of essays, editorials and academic writing, where the author wants to make a point without sounding pushy. The sentence often has の before it: 〜のではなかろうか.

Don't confuse it with ではなかったか, "wasn't it?", which asks about the past.
`,
    sentences: [
      s("この計画には無理があるの{ではなかろうか}。", "このけいかくにはむりがあるの{ではなかろうか}。", "I wonder if this plan isn't a little unrealistic.", {
        accept: ["ではないだろうか", "ではあるまいか", "ではないか"],
        near: [["ではなかったか", "ではなかったか is \"wasn't it?\". For a cautious \"isn't it perhaps\", use ではなかろうか."]],
      }),
      s("彼の言うことにも一理あるの{ではあるまいか}。", "かれのいうことにもいちりあるの{ではあるまいか}。", "Perhaps there's something to what he says.", {
        accept: ["ではなかろうか", "ではないだろうか", "ではないか"],
        near: [["ではあるまいし", "ではあるまいし is \"it's not as if\". For \"perhaps\", use ではあるまいか."]],
      }),
      s("問題は別のところにあるの{ではなかろうか}。", "もんだいはべつのところにあるの{ではなかろうか}。", "I suspect the real problem lies elsewhere.", {
        accept: ["ではないだろうか", "ではあるまいか", "ではないか"],
        near: [["ではなかったか", "ではなかったか is \"wasn't it?\". For \"I suspect\", use ではなかろうか."]],
      }),
      s("もう少し待つべきなの{ではなかろうか}。", "もうすこしまつべきなの{ではなかろうか}。", "Shouldn't we perhaps wait a little longer?", {
        accept: ["ではないだろうか", "ではあるまいか", "ではないか"],
        near: [["ではあるまいし", "ではあるまいし is \"it's not as if\". For \"perhaps\", use ではなかろうか."]],
      }),
      s("このままでは、会社はつぶれるの{ではあるまいか}。", "このままでは、かいしゃはつぶれるの{ではあるまいか}。", "At this rate, I fear the company may go under.", {
        accept: ["ではなかろうか", "ではないだろうか", "ではないか"],
        near: [["ではあるまいし", "ではあるまいし is \"it's not as if\". For \"I fear\", use ではあるまいか."]],
      }),
    ],
  }),

  point({
    id: "n1-ni-shiku-wa-nai",
    title: "〜にしくはない・〜にしかず",
    meaning: "nothing beats, it's best to",
    structure: "Verb dictionary form / Noun + にしくはない · にしかず (proverbs)",
    related: ["n2-ni-koshita-koto-wa-nai", "n2-ni-kagiru"],
    explanation: `
**にしくはない** means "nothing is better than": 用心するにしくはない, "you can't be too careful".

しく (如く) is a classical verb meaning "to equal, match", so it's literally "nothing matches X". It's a literary relative of に越したことはない (N2) and に限る (N2), which are more everyday.

The classical form **にしかず** lives on in proverbs:
- **百聞は一見にしかず**: a hundred hearings aren't worth one look, "seeing is believing".
- **三十六計逃げるにしかず**: of the thirty-six stratagems, running away is best.

Don't confuse it with にすぎない (N2), "nothing more than".
`,
    sentences: [
      s("用心する{にしくはない}。", "ようじんする{にしくはない}。", "You can't be too careful.", {
        accept: ["に越したことはない"],
        near: [["にすぎない", "にすぎない is \"nothing more than\". For \"nothing beats\", use にしくはない."]],
      }),
      s("健康のためには、早寝早起き{にしくはない}。", "けんこうのためには、はやねはやおき{にしくはない}。", "For your health, nothing beats early to bed and early to rise.", {
        accept: ["に越したことはない", "に限る"],
        near: [["にすぎない", "にすぎない is \"nothing more than\". For \"nothing beats\", use にしくはない."]],
      }),
      s("迷ったら、専門家に聞く{にしくはない}。", "まよったら、せんもんかにきく{にしくはない}。", "If in doubt, it's best to ask an expert.", {
        accept: ["に越したことはない", "に限る"],
        near: [["にすぎない", "にすぎない is \"nothing more than\". For \"it's best to\", use にしくはない."]],
      }),
      s("百聞は一見{にしかず}。", "ひゃくぶんはいっけん{にしかず}。", "Seeing is believing.", {
        near: [["にしくはない", "にしくはない is the modern form. The proverb uses にしかず."]],
      }),
      s("三十六計逃げる{にしかず}。", "さんじゅうろっけいにげる{にしかず}。", "When in doubt, run.", {
        near: [["にしくはない", "にしくはない is the modern form. The proverb uses にしかず."]],
      }),
    ],
  }),
];
