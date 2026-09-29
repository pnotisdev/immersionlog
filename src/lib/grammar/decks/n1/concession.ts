import { point, s } from "../../build";

/** Concession and contrast: even though, whatever, not even, despite, contrary to, if only. */

export const concession = [
  point({
    id: "n1-to-iedomo",
    title: "〜といえども",
    meaning: "even though, even (someone who is)",
    structure: "Noun / Plain form + といえども",
    related: ["n2-to-wa-ie", "n1-tote"],
    explanation: `
**といえども** means "even though it's X, even X": 子どもといえども、ルールは守らなければならない, "even children have to follow the rules".

The first half names someone or something you'd expect to be an exception: a child, an expert, a joke, a single yen, a holiday. The second half says the general rule still applies, often with なければならない, ことはある or できない.

It's a formal, written relative of とはいえ (N2) and でも. It's common in speeches, essays and rules. With a minimal amount, it means "not even": 一円といえども無駄にはできない, "we can't waste even a single yen".

Don't confuse it with といえば (N3), "speaking of".
`,
    sentences: [
      s(
        "子ども{といえども}、ルールは守らなければならない。",
        "こども{といえども}、ルールはまもらなければならない。",
        "Even children have to follow the rules.",
        {
          accept: ["とはいえ", "でも"],
          near: [
            [
              "といえば",
              'といえば is "speaking of". For "even though it\'s", use といえども.',
            ],
          ],
        },
      ),
      s(
        "冗談{といえども}、言っていいことと悪いことがある。",
        "じょうだん{といえども}、いっていいこととわるいことがある。",
        "Even as a joke, there are things you shouldn't say.",
        {
          accept: ["とはいえ", "でも"],
          near: [
            [
              "というと",
              'というと is "speaking of". For "even as", use といえども.',
            ],
          ],
        },
      ),
      s(
        "一円{といえども}、無駄にはできない。",
        "いちえん{といえども}、むだにはできない。",
        "We can't waste even a single yen.",
        {
          accept: ["たりとも", "でも"],
          near: [
            [
              "といえば",
              'といえば is "speaking of". For "not even", use といえども.',
            ],
          ],
        },
      ),
      s(
        "専門家{といえども}、間違えることはある。",
        "せんもんか{といえども}、まちがえることはある。",
        "Even experts make mistakes.",
        {
          accept: ["とはいえ", "でも"],
          near: [
            [
              "というと",
              'というと is "speaking of". For "even", use といえども.',
            ],
          ],
        },
      ),
      s(
        "休日{といえども}、彼は仕事のことばかり考えている。",
        "きゅうじつ{といえども}、かれはしごとのことばかりかんがえている。",
        "Even on his days off, he thinks about nothing but work.",
        {
          accept: ["とはいえ", "でも"],
          near: [
            [
              "といえば",
              'といえば is "speaking of". For "even on", use といえども.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-omoikiya",
    title: "〜と思いきや",
    meaning: "I thought …, but (actually)",
    structure: "Plain form (Noun, な-adj か optional) + と思いきや",
    related: ["n2-ka-to-omottara"],
    explanation: `
**と思いきや** sets up an expectation and then overturns it: 簡単に勝てると思いきや、苦戦した, "I thought we'd win easily, but it was a hard fight".

The second half is a surprise: the opposite of what you expected, or something unexpected. It's a lively, slightly playful expression, common in written stories, blogs, TV narration and manga.

It's close to と思ったら and かと思ったら (N2), but と思いきや always involves a mistaken expectation, never just "the moment". と思ったが is the plain equivalent.

Don't use it for your present thoughts. It always looks back at an expectation that turned out wrong. Compare と思って, "thinking that (so I did)", which isn't contrastive.
`,
    sentences: [
      s(
        "簡単に勝てる{と思いきや}、苦戦した。",
        "かんたんにかてる{とおもいきや}、くせんした。",
        "I thought we'd win easily, but it was a hard fight.",
        {
          accept: ["と思ったら", "と思ったが"],
          near: [
            [
              "と思って",
              'と思って is "thinking that (so I did)". For "I thought…, but no", use と思いきや.',
              "とおもって",
            ],
          ],
        },
      ),
      s(
        "雨がやんだ{と思いきや}、また降り出した。",
        "あめがやんだ{とおもいきや}、またふりだした。",
        "Just when I thought the rain had stopped, it started again.",
        {
          accept: ["と思ったら", "かと思ったら", "と思ったが"],
          near: [
            [
              "と思って",
              'と思って is "thinking that (so I did)". For "I thought…, but no", use と思いきや.',
              "とおもって",
            ],
          ],
        },
      ),
      s(
        "彼は怒る{と思いきや}、笑って許してくれた。",
        "かれはおこる{とおもいきや}、わらってゆるしてくれた。",
        "I thought he'd be angry, but he laughed and forgave me.",
        {
          accept: ["と思ったら", "と思ったが"],
          near: [
            [
              "と思って",
              'と思って is "thinking that (so I did)". For "I thought…, but no", use と思いきや.',
              "とおもって",
            ],
          ],
        },
      ),
      s(
        "高い{と思いきや}、意外に安かった。",
        "たかい{とおもいきや}、いがいにやすかった。",
        "I assumed it would be expensive, but it was surprisingly cheap.",
        {
          accept: ["と思ったら", "と思ったが"],
          near: [
            [
              "と思えば",
              'と思えば is "if you think of it as". For "I assumed…, but no", use と思いきや.',
              "とおもえば",
            ],
          ],
        },
      ),
      s(
        "今日は休みか{と思いきや}、店は開いていた。",
        "きょうはやすみか{とおもいきや}、みせはあいていた。",
        "I thought it might be closed today, but the shop was open.",
        {
          accept: ["と思ったら", "と思ったが"],
          near: [
            [
              "と思って",
              'と思って is "thinking that (so I did)". For "I thought…, but no", use と思いきや.',
              "とおもって",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-de-are",
    title: "〜であれ・〜であれ〜であれ",
    meaning: "whatever, whoever; whether … or",
    structure: "Question word + であれ · Noun A であれ Noun B であれ",
    related: ["n2-ni-shiro"],
    explanation: `
**であれ** means "whatever it is, it doesn't change the conclusion": 理由が何であれ、暴力は許されない, "whatever the reason, violence is unacceptable".

With a question word (何, 誰, どんな), it means "whatever, whoever". Doubled, AであれBであれ means "whether A or B": 晴れであれ雨であれ、試合は行う, "rain or shine, the match goes ahead".

The second half is a firm judgement or rule that applies to every case: 許されない, 同じだ, 認めない, べきだ.

It's the formal version of でも and にしろ / にせよ (N2), and であろうと means the same. Don't confuse it with であり, "is, and", which just links sentences in writing.
`,
    sentences: [
      s(
        "理由が何{であれ}、暴力は許されない。",
        "りゆうがなん{であれ}、ぼうりょくはゆるされない。",
        "Whatever the reason, violence is unacceptable.",
        {
          accept: ["であろうと", "にしろ", "にせよ"],
          near: [
            [
              "であり",
              'であり is "is, and". For "whatever it is", use であれ.',
            ],
          ],
        },
      ),
      s(
        "大人であれ子ども{であれ}、ルールは同じだ。",
        "おとなであれこども{であれ}、ルールはおなじだ。",
        "Adult or child, the rules are the same.",
        {
          near: [
            [
              "であり",
              'であり is "is, and". For "whether … or", pair であれ with であれ.',
            ],
          ],
        },
      ),
      s(
        "晴れ{であれ}雨であれ、試合は行う。",
        "はれ{であれ}あめであれ、しあいはおこなう。",
        "Rain or shine, the match will go ahead.",
        {
          near: [
            ["であり", 'であり is "is, and". For "whether … or", use であれ.'],
          ],
        },
      ),
      s(
        "誰{であれ}、例外は認めない。",
        "だれ{であれ}、れいがいはみとめない。",
        "No exceptions, whoever it is.",
        {
          accept: ["であろうと", "でも", "にしろ", "にせよ"],
          near: [
            ["であり", 'であり is "is, and". For "whoever it is", use であれ.'],
          ],
        },
      ),
      s(
        "どんな仕事{であれ}、責任を持ってやるべきだ。",
        "どんなしごと{であれ}、せきにんをもってやるべきだ。",
        "Whatever the job, you should do it responsibly.",
        {
          accept: ["であろうと", "でも", "にしろ", "にせよ"],
          near: [
            [
              "であり",
              'であり is "is, and". For "whatever the job", use であれ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-you-ga",
    title: "〜(よ)うが・〜(よ)うと",
    meaning: "no matter (what / how), even if",
    structure: "Verb volitional + が / と (often with 何, どんなに, 誰が)",
    related: ["n3-ikura-temo", "n3-tatoe"],
    explanation: `
**〜うが** and **〜うと** after the volitional form mean "no matter what happens, it won't change things": 誰が何と言おうと、私の気持ちは変わらない, "whatever anyone says, my feelings won't change".

The first half often has a question word or どんなに, and the second half is a firm resolve or an unchanging fact.

It's a stronger, more defiant version of ても. The shape is the volitional: 言う → 言おう + と, 降る → 降ろう + と, される → されよう + が. い-adjectives use かろう: 高かろうが.

The two forms are interchangeable. Pair it with まい for "whether or not": 行こうが行くまいが (the next point).
`,
    sentences: [
      s(
        "誰が何と言お{うと}、私の気持ちは変わらない。",
        "だれがなんといお{うと}、わたしのきもちはかわらない。",
        "Whatever anyone says, my feelings won't change.",
        {
          accept: ["うが"],
          near: [
            [
              "ても",
              "ても needs the て-form (言っても). After the volitional, use うと or うが.",
            ],
          ],
        },
      ),
      s(
        "どんなに反対されよ{うが}、やめるつもりはない。",
        "どんなにはんたいされよ{うが}、やめるつもりはない。",
        "However much they oppose me, I've no intention of quitting.",
        {
          accept: ["うと"],
          near: [
            [
              "ても",
              "ても needs the て-form (されても). After the volitional, use うが or うと.",
            ],
          ],
        },
      ),
      s(
        "雨が降ろ{うと}、試合は行われる。",
        "あめがふろ{うと}、しあいはおこなわれる。",
        "The match will go ahead even if it rains.",
        {
          accept: ["うが"],
          near: [
            [
              "ても",
              "ても needs the て-form (降っても). After the volitional, use うと or うが.",
            ],
          ],
        },
      ),
      s(
        "何が起ころ{うと}、私は君の味方だ。",
        "なにがおころ{うと}、わたしはきみのみかただ。",
        "Whatever happens, I'm on your side.",
        {
          accept: ["うが"],
          near: [
            [
              "うか",
              'うか is "shall I?". For "whatever happens", use うと or うが.',
            ],
          ],
        },
      ),
      s(
        "周りにどう思われよ{うが}、気にしない。",
        "まわりにどうおもわれよ{うが}、きにしない。",
        "I don't care what people think of me.",
        {
          accept: ["うと"],
          near: [
            [
              "うか",
              'うか is "shall I?". For "no matter how", use うが or うと.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-you-ga-mai-ga",
    title: "〜うが〜まいが・〜うと〜まいと",
    meaning: "whether or not",
    structure: "Verb volitional + が / と + same verb + まいが / まいと",
    related: ["n1-you-ga", "n2-mai"],
    explanation: `
**〜うが〜まいが** pairs a verb's volitional form with its まい form (N2, a negative intention or guess) to mean "whether or not": 雨が降ろうが降るまいが、出かける, "I'm going out whether it rains or not".

The second half states that the outcome doesn't depend on it: a firm decision, or a fact that won't change. と〜まいと works the same way.

The まい form attaches to the dictionary form of godan verbs (降るまい, 行くまい). Ichidan verbs can drop る (信じまい), and する and 来る become するまい / しまい and くるまい / こまい.

Plain Japanese would say 降っても降らなくても. The うが〜まいが shape is more emphatic and a little defiant.
`,
    sentences: [
      s(
        "雨が降ろうが降る{まいが}、出かける。",
        "あめがふろうがふる{まいが}、でかける。",
        "I'm going out whether it rains or not.",
        {
          accept: ["まいと"],
          near: [
            [
              "ないが",
              'ないが is "isn\'t, but". For "whether or not", pair うが with まいが.',
            ],
          ],
        },
      ),
      s(
        "君が行こうと行く{まいと}、私は行く。",
        "きみがいこうといく{まいと}、わたしはいく。",
        "Whether you go or not, I'm going.",
        {
          accept: ["まいが"],
          near: [
            [
              "ないと",
              'ないと is "if not". For "whether or not", pair うと with まいと.',
            ],
          ],
        },
      ),
      s(
        "信じようが信じ{まいが}、これは事実だ。",
        "しんじようがしんじ{まいが}、これはじじつだ。",
        "Believe it or not, this is a fact.",
        {
          accept: ["まいと"],
          near: [
            [
              "ないが",
              'ないが is "isn\'t, but". For "whether or not", pair うが with まいが.',
            ],
          ],
        },
      ),
      s(
        "彼が来ようが来る{まいが}、会議は始める。",
        "かれがこようがくる{まいが}、かいぎははじめる。",
        "We'll start the meeting whether he comes or not.",
        {
          accept: ["まいと"],
          near: [
            [
              "ないが",
              'ないが is "isn\'t, but". For "whether or not", pair うが with まいが.',
            ],
          ],
        },
      ),
      s(
        "賛成しようがする{まいが}、結果は変わらない。",
        "さんせいしようがする{まいが}、けっかはかわらない。",
        "Whether you agree or not, the result won't change.",
        {
          accept: ["まいと"],
          near: [
            [
              "ないが",
              'ないが is "isn\'t, but". For "whether or not", pair うが with まいが.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tari-tomo",
    title: "〜たりとも",
    meaning: "not even (one)",
    structure: "One + counter + たりとも + negative",
    related: ["n3-sae"],
    explanation: `
**たりとも** after the smallest possible amount means "not even one": 一円たりとも無駄にはできない, "we can't waste a single yen".

It follows 一 + counter: 一円, 一日, 一瞬, 一秒, 一人 (誰一人たりとも). The second half is negative, usually a prohibition or strong determination: できない, してはならない, 許さない, 〜な.

It's emphatic and formal, and it appears in speeches, rules and dramatic dialogue. The everyday versions are 一円も and 一円でも.

It comes from the classical たり (= である) plus とも ("even if"), so it's literally "even if it is one yen".
`,
    sentences: [
      s(
        "一円{たりとも}無駄にはできない。",
        "いちえん{たりとも}むだにはできない。",
        "We can't waste a single yen.",
        {
          accept: ["も"],
          near: [
            [
              "でも",
              'でも works casually. For the emphatic "not even one", this point practises たりとも.',
            ],
          ],
        },
      ),
      s(
        "一日{たりとも}練習を休んだことはない。",
        "いちにち{たりとも}れんしゅうをやすんだことはない。",
        "I've never missed a single day of practice.",
        {
          accept: ["も"],
          near: [
            [
              "でも",
              'でも works casually. For the emphatic "not a single", this point practises たりとも.',
            ],
          ],
        },
      ),
      s(
        "試合中は一瞬{たりとも}気を抜けない。",
        "しあいちゅうはいっしゅん{たりとも}きをぬけない。",
        "During a match, you can't relax for even a moment.",
        {
          accept: ["も"],
          near: [["だけ", 'だけ is "only". For "not even", use たりとも.']],
        },
      ),
      s(
        "一秒{たりとも}遅れてはならない。",
        "いちびょう{たりとも}おくれてはならない。",
        "You must not be even one second late.",
        {
          accept: ["も", "でも"],
          near: [["だけ", 'だけ is "only". For "not even", use たりとも.']],
        },
      ),
      s(
        "誰一人{たりとも}ここを通すな。",
        "だれひとり{たりとも}ここをとおすな。",
        "Don't let a single person through here.",
        {
          accept: ["として"],
          near: [
            [
              "だけ",
              'だけ is "only". For "not a single person", use たりとも.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nara-iza-shirazu",
    title: "〜ならいざ知らず・〜はいざ知らず",
    meaning: "X would be one thing, but; I don't know about X, but",
    structure: "Noun / Plain form + ならいざ知らず · Noun + はいざ知らず",
    related: ["n1-nara-madashimo"],
    explanation: `
**ならいざ知らず** sets aside a case where something might be understandable, to criticise the actual case: 子どもならいざ知らず、大人がそんなことをするなんて, "from a child, maybe, but for an adult to do that…".

The first half is an easier case (a child, an amateur, the old days, a single time), and the second half is the real situation, which is less excusable. The tone is critical or surprised.

**はいざ知らず** separates yourself from others: 他の人はいざ知らず、私は反対だ, "I don't know about anyone else, but I'm against it".

いざ知らず is literally "I don't know (about that)". ならまだしも and ならともかく are close, more everyday relatives.
`,
    sentences: [
      s(
        "子ども{ならいざ知らず}、大人がそんなことをするなんて。",
        "こども{ならいざしらず}、おとながそんなことをするなんて。",
        "From a child, maybe, but for an adult to do something like that!",
        {
          accept: ["ならまだしも", "ならともかく"],
          near: [
            [
              "なら",
              'Plain なら is "if". For "X would be one thing, but", use ならいざ知らず.',
            ],
          ],
        },
      ),
      s(
        "昔{ならいざ知らず}、今どきそんな考えは通用しない。",
        "むかし{ならいざしらず}、いまどきそんなかんがえはつうようしない。",
        "It might have worked in the old days, but that kind of thinking doesn't fly today.",
        {
          accept: ["ならまだしも", "ならともかく", "はいざ知らず"],
          near: [
            [
              "なら",
              'Plain なら is "if". For "X would be one thing, but", use ならいざ知らず.',
            ],
          ],
        },
      ),
      s(
        "素人{ならいざ知らず}、プロがこんなミスをするとは。",
        "しろうと{ならいざしらず}、プロがこんなミスをするとは。",
        "From an amateur, perhaps, but a professional making a mistake like this?",
        {
          accept: ["ならまだしも", "ならともかく"],
          near: [
            [
              "ならでは",
              'ならでは is "unique to". For "X would be one thing, but", use ならいざ知らず.',
            ],
          ],
        },
      ),
      s(
        "一度{ならいざ知らず}、何度も同じことを言わせるな。",
        "いちど{ならいざしらず}、なんどもおなじことをいわせるな。",
        "Once would be one thing, but don't make me say the same thing over and over.",
        {
          accept: ["ならまだしも", "ならともかく"],
          near: [
            [
              "なら",
              'Plain なら is "if". For "once would be one thing, but", use ならいざ知らず.',
            ],
          ],
        },
      ),
      s(
        "他の人{はいざ知らず}、私は反対だ。",
        "ほかのひと{はいざしらず}、わたしははんたいだ。",
        "I don't know about anyone else, but I'm against it.",
        {
          accept: ["ならいざ知らず", "はともかく"],
          near: [
            [
              "は別として",
              "は別として works in meaning. This point practises はいざ知らず.",
              "はべつとして",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nara-madashimo",
    title: "〜ならまだしも",
    meaning: "X would be acceptable, but",
    structure: "Noun / Plain form + ならまだしも",
    related: ["n1-nara-iza-shirazu"],
    explanation: `
**ならまだしも** grants that a milder case could be tolerated, then complains about the actual, worse case: 一度ならまだしも、三度も遅刻するなんて, "once would be forgivable, but being late three times?".

まだしも means "still better, more acceptable". The first half is the lesser evil, and the second half is what really happened, often ending in なんて, とは or a criticism.

It's very close to ならいざ知らず, and the two are often interchangeable. ならまだしも is a little more conversational and focuses on "tolerable vs. intolerable", while ならいざ知らず suggests "I can't judge that case, but this one…". ならともかく is the most everyday of the three.
`,
    sentences: [
      s(
        "一度{ならまだしも}、三度も遅刻するなんて。",
        "いちど{ならまだしも}、さんどもちこくするなんて。",
        "Once would be forgivable, but being late three times?",
        {
          accept: ["ならいざ知らず", "ならともかく"],
          near: [
            [
              "なら",
              'Plain なら is "if". For "X would be acceptable, but", use ならまだしも.',
            ],
          ],
        },
      ),
      s(
        "冗談{ならまだしも}、本気で言っているから困る。",
        "じょうだん{ならまだしも}、ほんきでいっているからこまる。",
        "If it were a joke, fine, but the trouble is he means it.",
        {
          accept: ["ならいざ知らず", "ならともかく"],
          near: [
            [
              "なら",
              'Plain なら is "if". For "X would be fine, but", use ならまだしも.',
            ],
          ],
        },
      ),
      s(
        "少し{ならまだしも}、こんなに高いとは思わなかった。",
        "すこし{ならまだしも}、こんなにたかいとはおもわなかった。",
        "A little expensive would be fine, but I never thought it would cost this much.",
        {
          accept: ["ならともかく"],
          near: [
            [
              "ならでは",
              'ならでは is "unique to". For "X would be fine, but", use ならまだしも.',
            ],
          ],
        },
      ),
      s(
        "自分が損をするの{ならまだしも}、人に迷惑をかけるのは許せない。",
        "じぶんがそんをするの{ならまだしも}、ひとにめいわくをかけるのはゆるせない。",
        "Losing out yourself is one thing, but causing trouble for others is unforgivable.",
        {
          accept: ["ならいざ知らず", "ならともかく"],
          near: [
            [
              "なら",
              'Plain なら is "if". For "X would be one thing, but", use ならまだしも.',
            ],
          ],
        },
      ),
      s(
        "雨{ならまだしも}、雪の中を歩いて帰るのは大変だ。",
        "あめ{ならまだしも}、ゆきのなかをあるいてかえるのはたいへんだ。",
        "Rain would be one thing, but walking home in the snow is hard.",
        {
          accept: ["ならともかく"],
          near: [
            [
              "ならでは",
              'ならでは is "unique to". For "X would be one thing, but", use ならまだしも.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-hikikae",
    title: "〜にひきかえ",
    meaning: "in (stark) contrast to",
    structure: "Noun / Plain form + の + にひきかえ",
    related: ["n3-ni-taishite", "n3-ni-kurabete"],
    explanation: `
**にひきかえ** draws a sharp contrast between two things, usually with a clear judgement that one is better: 兄にひきかえ、弟は勉強が嫌いだ, "unlike his older brother, the younger one hates studying".

It compares two things of the same kind (siblings, bosses, this year and last year, the past and the present) and implies approval of one and disapproval of the other.

That evaluative tone is the difference from に比べて (N3) and に対して (N3), which are neutral comparisons. After a clause, add の: 姉が社交的なのにひきかえ.

It's written and a little old-fashioned. The verb 引き換える means "to exchange".
`,
    sentences: [
      s(
        "兄{にひきかえ}、弟は勉強が嫌いだ。",
        "あに{にひきかえ}、おとうとはべんきょうがきらいだ。",
        "Unlike his older brother, the younger one hates studying.",
        {
          near: [
            [
              "に比べて",
              "に比べて is a neutral comparison. For a sharp, judgemental contrast, use にひきかえ.",
              "にくらべて",
            ],
          ],
        },
      ),
      s(
        "去年の猛暑{にひきかえ}、今年は涼しい。",
        "きょねんのもうしょ{にひきかえ}、ことしはすずしい。",
        "In contrast to last year's heatwave, this year is cool.",
        {
          accept: ["に比べて"],
          near: [
            [
              "に対して",
              'に対して is a neutral "whereas". For a stark contrast, use にひきかえ.',
              "にたいして",
            ],
          ],
        },
      ),
      s(
        "前の上司{にひきかえ}、今の上司はとても優しい。",
        "まえのじょうし{にひきかえ}、いまのじょうしはとてもやさしい。",
        "Unlike my old boss, my current one is very kind.",
        {
          near: [
            [
              "に比べて",
              "に比べて is a neutral comparison. For a judgemental contrast, use にひきかえ.",
              "にくらべて",
            ],
          ],
        },
      ),
      s(
        "姉が社交的なの{にひきかえ}、妹は人見知りだ。",
        "あねがしゃこうてきなの{にひきかえ}、いもうとはひとみしりだ。",
        "Whereas the older sister is outgoing, the younger one is shy.",
        {
          near: [
            [
              "に対して",
              'に対して is a neutral "whereas". For a stark contrast, use にひきかえ.',
              "にたいして",
            ],
          ],
        },
      ),
      s(
        "活気のあった昔{にひきかえ}、今の商店街は寂しい。",
        "かっきのあったむかし{にひきかえ}、いまのしょうてんがいはさびしい。",
        "Compared with how lively it used to be, the shopping street is desolate now.",
        {
          near: [
            [
              "に比べて",
              "に比べて is a neutral comparison. For a judgemental contrast, use にひきかえ.",
              "にくらべて",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-wa-urahara-ni",
    title: "〜とは裏腹に",
    meaning: "contrary to, at odds with",
    structure: "Noun + とは裏腹に / と裏腹に",
    related: ["n2-ni-hanshite"],
    explanation: `
**とは裏腹に** means the reality is the opposite of what was expected, said or shown: 期待とは裏腹に、結果は散々だった, "contrary to our hopes, the results were dismal".

The noun is an expectation, a statement or an appearance: 期待, 予想, 言葉, 表情, 発表, or 明るい性格. The second half reveals the contrasting reality.

It's close to に反して (N2), "contrary to". 裏腹 literally means "back and belly", two opposite sides of the same body. It's especially good for a gap between words and feelings: 言葉とは裏腹に、彼女の顔は悲しそうだった, "her face looked sad, despite her words".

Compare に沿って (N2), "in line with", which is the opposite relationship.
`,
    sentences: [
      s(
        "期待{とは裏腹に}、結果は散々だった。",
        "きたい{とはうらはらに}、けっかはさんざんだった。",
        "Contrary to our hopes, the results were dismal.",
        {
          accept: ["に反して", "と裏腹に"],
          near: [
            [
              "に沿って",
              'に沿って is "in line with". For "contrary to", use とは裏腹に.',
              "にそって",
            ],
          ],
        },
      ),
      s(
        "言葉{とは裏腹に}、彼女の顔は悲しそうだった。",
        "ことば{とはうらはらに}、かのじょのかおはかなしそうだった。",
        "Despite her words, her face looked sad.",
        {
          accept: ["と裏腹に"],
          near: [
            [
              "に沿って",
              'に沿って is "in line with". For "at odds with", use とは裏腹に.',
              "にそって",
            ],
          ],
        },
      ),
      s(
        "予想{とは裏腹に}、試合は一方的な展開になった。",
        "よそう{とはうらはらに}、しあいはいっぽうてきなてんかいになった。",
        "Contrary to predictions, the match turned out one-sided.",
        {
          accept: ["に反して", "と裏腹に"],
          near: [
            [
              "に基づいて",
              'に基づいて is "based on". For "contrary to", use とは裏腹に.',
              "にもとづいて",
            ],
          ],
        },
      ),
      s(
        "明るい性格{とは裏腹に}、彼は繊細な一面を持っている。",
        "あかるいせいかく{とはうらはらに}、かれはせんさいないちめんをもっている。",
        "Behind his cheerful personality, he has a sensitive side.",
        {
          accept: ["と裏腹に"],
          near: [
            [
              "に沿って",
              'に沿って is "in line with". For "at odds with", use とは裏腹に.',
              "にそって",
            ],
          ],
        },
      ),
      s(
        "政府の発表{とは裏腹に}、生活は苦しくなる一方だ。",
        "せいふのはっぴょう{とはうらはらに}、せいかつはくるしくなるいっぽうだ。",
        "Contrary to what the government says, life just keeps getting harder.",
        {
          accept: ["に反して", "と裏腹に"],
          near: [
            [
              "に基づいて",
              'に基づいて is "based on". For "contrary to", use とは裏腹に.',
              "にもとづいて",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-yoso-ni",
    title: "〜をよそに",
    meaning: "ignoring, unconcerned by",
    structure: "Noun + をよそに",
    related: ["n2-mo-kamawazu"],
    explanation: `
**をよそに** means someone carries on regardless of other people's feelings or the situation around them: 親の心配をよそに、息子は一人で旅に出た, "ignoring his parents' worries, the son set off travelling alone".

The noun is usually other people's worry, opposition, criticism or excitement: 心配, 反対, 不安, 期待, 騒ぎ. The second half is what the subject did anyway. It can be critical ("inconsiderately"), or just descriptive: 周りの騒ぎをよそに、赤ちゃんはぐっすり眠っていた, "oblivious to the commotion, the baby slept soundly".

よそ means "somewhere else", so it's literally "treating it as someone else's business". Compare も構わず (N2), "without caring about", and をものともせず, which is about overcoming obstacles bravely.
`,
    sentences: [
      s(
        "親の心配{をよそに}、息子は一人で旅に出た。",
        "おやのしんぱい{をよそに}、むすこはひとりでたびにでた。",
        "Ignoring his parents' worries, the son set off travelling alone.",
        {
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "ignoring", use をよそに.',
            ],
          ],
        },
      ),
      s(
        "周囲の反対{をよそに}、彼は会社を辞めた。",
        "しゅういのはんたい{をよそに}、かれはかいしゃをやめた。",
        "In spite of everyone's objections, he quit his job.",
        {
          accept: ["を押して", "をものともせず"],
          near: [
            [
              "をめぐって",
              'をめぐって is "over, concerning". For "ignoring", use をよそに.',
            ],
          ],
        },
      ),
      s(
        "住民の不安{をよそに}、工事は進められた。",
        "じゅうみんのふあん{をよそに}、こうじはすすめられた。",
        "The construction went ahead, regardless of residents' concerns.",
        {
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "regardless of", use をよそに.',
            ],
          ],
        },
      ),
      s(
        "周りの騒ぎ{をよそに}、赤ちゃんはぐっすり眠っていた。",
        "まわりのさわぎ{をよそに}、あかちゃんはぐっすりねむっていた。",
        "Oblivious to the commotion, the baby slept soundly.",
        {
          near: [
            [
              "をめぐって",
              'をめぐって is "over, concerning". For "oblivious to", use をよそに.',
            ],
          ],
        },
      ),
      s(
        "世間の期待{をよそに}、彼は突然引退を発表した。",
        "せけんのきたい{をよそに}、かれはとつぜんいんたいをはっぴょうした。",
        "Ignoring the public's hopes, he suddenly announced his retirement.",
        {
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "ignoring", use をよそに.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-monotomosezu",
    title: "〜をものともせず(に)",
    meaning: "undeterred by, in defiance of",
    structure: "Noun + をものともせず(に)",
    related: ["n1-wo-yoso-ni", "n1-wo-oshite"],
    explanation: `
**をものともせず** means bravely overcoming an obstacle as if it were nothing: 彼は大けがをものともせず、試合に出場した, "undeterred by a serious injury, he played in the match".

The noun is a hardship: injury, strong wind, cold, criticism, difficulty. The second half is an admirable achievement. The tone is praise, so it's common in sports reports and inspiring stories. You don't use it about yourself.

It's literally "not treating it as anything". Compare をよそに, "ignoring (others' feelings)", which is often critical, and を押して, "pushing through (one's own illness or others' objections)".
`,
    sentences: [
      s(
        "彼は大けが{をものともせず}、試合に出場した。",
        "かれはおおけが{をものともせず}、しあいにしゅつじょうした。",
        "Undeterred by a serious injury, he played in the match.",
        {
          accept: ["をものともせずに", "を押して"],
          near: [
            [
              "をよそに",
              "をよそに is ignoring other people's feelings. For bravely overcoming an obstacle, use をものともせず.",
            ],
          ],
        },
      ),
      s(
        "強い風{をものともせず}、船は進んだ。",
        "つよいかぜ{をものともせず}、ふねはすすんだ。",
        "The boat pressed on, undaunted by the strong wind.",
        {
          accept: ["をものともせずに"],
          near: [
            [
              "をよそに",
              "をよそに is ignoring other people's feelings. For defying an obstacle, use をものともせず.",
            ],
          ],
        },
      ),
      s(
        "周囲の批判{をものともせずに}、彼女は自分の道を貫いた。",
        "しゅういのひはん{をものともせずに}、かのじょはじぶんのみちをつらぬいた。",
        "Undeterred by criticism, she stayed true to her own path.",
        {
          accept: ["をものともせず", "をよそに"],
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "undeterred by", use をものともせずに.',
            ],
          ],
        },
      ),
      s(
        "寒さ{をものともせず}、子どもたちは外で遊んでいる。",
        "さむさ{をものともせず}、こどもたちはそとであそんでいる。",
        "The children are playing outside, oblivious to the cold.",
        {
          accept: ["をものともせずに"],
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "undeterred by", use をものともせず.',
            ],
          ],
        },
      ),
      s(
        "数々の困難{をものともせず}、彼らは山頂を目指した。",
        "かずかずのこんなん{をものともせず}、かれらはさんちょうをめざした。",
        "Undaunted by countless difficulties, they pushed on for the summit.",
        {
          accept: ["をものともせずに"],
          near: [
            [
              "をよそに",
              "をよそに is ignoring other people's feelings. For defying difficulties, use をものともせず.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-oshite",
    title: "〜を押して",
    meaning: "despite (and pushing through)",
    structure: "Noun + を押して",
    related: ["n1-wo-monotomosezu"],
    explanation: `
**を押して** means doing something despite an obstacle, by forcing your way through it: 彼は病気を押して、会議に出席した, "despite being ill, he forced himself to attend the meeting".

The noun is usually your own physical condition (病気, 熱, 痛み, けが) or other people's objections (反対). Occasionally it's the weather: 悪天候を押して. The second half is what you did anyway, often out of duty or determination.

押す means "to push", so it's literally "pushing it aside". It's close to をものともせず, but を押して stresses the effort and strain, while をものともせず stresses that the obstacle didn't matter.

Don't confuse it with を通して, "through (a channel)".
`,
    sentences: [
      s(
        "彼は病気{を押して}、会議に出席した。",
        "かれはびょうき{をおして}、かいぎにしゅっせきした。",
        "Despite being ill, he forced himself to attend the meeting.",
        {
          accept: ["をものともせず"],
          near: [
            [
              "を通して",
              'を通して is "through (a channel)". For "despite (and pushing through)", use を押して.',
              "をとおして",
            ],
          ],
        },
      ),
      s(
        "二人は周囲の反対{を押して}、結婚した。",
        "ふたりはしゅういのはんたい{をおして}、けっこんした。",
        "The two of them married in the face of everyone's objections.",
        {
          accept: ["をよそに", "をものともせず"],
          near: [
            [
              "を通して",
              'を通して is "through (a channel)". For "in the face of", use を押して.',
              "をとおして",
            ],
          ],
        },
      ),
      s(
        "熱{を押して}、試験を受けた。",
        "ねつ{をおして}、しけんをうけた。",
        "I took the exam despite having a fever.",
        {
          near: [
            [
              "を通して",
              'を通して is "through (a channel)". For "despite (a fever)", use を押して.',
              "をとおして",
            ],
          ],
        },
      ),
      s(
        "足の痛み{を押して}、最後まで走り抜いた。",
        "あしのいたみ{をおして}、さいごまではしりぬいた。",
        "She pushed through the pain in her leg and ran to the end.",
        {
          accept: ["をものともせず"],
          near: [
            [
              "を込めて",
              'を込めて is "full of (feeling)". For "pushing through", use を押して.',
              "をこめて",
            ],
          ],
        },
      ),
      s(
        "悪天候{を押して}、捜索が続けられた。",
        "あくてんこう{をおして}、そうさくがつづけられた。",
        "The search continued despite the bad weather.",
        {
          accept: ["をものともせず"],
          near: [
            [
              "を通して",
              'を通して is "through (a channel)". For "despite", use を押して.',
              "をとおして",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-wa-iu-mono-no",
    title: "〜とはいうものの",
    meaning: "having said that, although (it's true that)",
    structure: "Plain form / Noun + とはいうものの",
    related: ["n2-to-wa-ie", "n2-mono-no"],
    explanation: `
**とはいうものの** admits something is true in name or in principle, then adds a reality that doesn't match: 春とはいうものの、まだ寒い日が続く, "it may be spring, but the cold days go on".

It's built from と言う ("say") plus ものの (N2, "although"), so it's literally "although one says that…". The second half is usually a gap between the label and reality, or a lingering doubt.

It's very close to とはいえ (N2) and とはいっても. とはいうものの is a little more formal and reflective.

Compare というより (N3), "rather than", which corrects a description instead of conceding it.
`,
    sentences: [
      s(
        "春{とはいうものの}、まだ寒い日が続く。",
        "はる{とはいうものの}、まださむいひがつづく。",
        "It may be spring, but the cold days go on.",
        {
          accept: ["とはいえ", "とはいっても", "と言うものの"],
          near: [
            [
              "というより",
              'というより is "rather than". For "it may be X, but", use とはいうものの.',
            ],
          ],
        },
      ),
      s(
        "自分で決めた{とはいうものの}、不安もある。",
        "じぶんできめた{とはいうものの}、ふあんもある。",
        "Although it was my own decision, I do have worries.",
        {
          accept: ["とはいえ", "とはいっても", "と言うものの"],
          near: [
            [
              "ということは",
              'ということは is "which means". For "although", use とはいうものの.',
            ],
          ],
        },
      ),
      s(
        "日本語を勉強している{とはいうものの}、まだ簡単な会話しかできない。",
        "にほんごをべんきょうしている{とはいうものの}、まだかんたんなかいわしかできない。",
        "I say I'm studying Japanese, but I can still only manage simple conversations.",
        {
          accept: ["とはいえ", "とはいっても", "と言うものの"],
          near: [
            [
              "というより",
              'というより is "rather than". For "I say…, but", use とはいうものの.',
            ],
          ],
        },
      ),
      s(
        "夏休み{とはいうものの}、毎日部活がある。",
        "なつやすみ{とはいうものの}、まいにちぶかつがある。",
        "It's the summer holidays, supposedly, but I have club activities every day.",
        {
          accept: ["とはいえ", "とはいっても", "と言うものの"],
          near: [
            [
              "ということは",
              'ということは is "which means". For "supposedly, but", use とはいうものの.',
            ],
          ],
        },
      ),
      s(
        "安い{とはいうものの}、やはり買うのは迷う。",
        "やすい{とはいうものの}、やはりかうのはまよう。",
        "Cheap as it is, I'm still in two minds about buying it.",
        {
          accept: ["とはいえ", "とはいっても", "と言うものの"],
          near: [
            [
              "というより",
              'というより is "rather than". For "cheap as it is", use とはいうものの.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-zu-tomo",
    title: "〜ずとも",
    meaning: "even without, even if (one) doesn't",
    structure: "Verb ない-stem + ずとも (する → せずとも)",
    related: ["n4-zu-ni", "n4-temo"],
    explanation: `
**ずとも** is a literary "even without doing": わざわざ言わずとも、分かっている, "you don't need to tell me, I know".

The form is the ない-stem + ず (a classical negative, as in ずに, N4) + とも ("even if"). So 言う → 言わずとも, 急ぐ → 急がずとも, and する → せずとも.

The second half usually says the result is fine anyway: 分かる, 間に合う, 治る, 大丈夫だ. It's the formal equivalent of なくても: 急がなくても間に合う = 急がずとも間に合う.

Don't confuse it with ずに, "without doing (and doing something else instead)": 朝ご飯を食べずに出かけた.
`,
    sentences: [
      s(
        "わざわざ言わ{ずとも}、分かっている。",
        "わざわざいわ{ずとも}、わかっている。",
        "You don't need to tell me. I know.",
        {
          accept: ["なくても"],
          near: [
            [
              "ずに",
              'ずに is "without doing (and doing something else)". For "even without", use ずとも.',
            ],
          ],
        },
      ),
      s(
        "急が{ずとも}、間に合うだろう。",
        "いそが{ずとも}、まにあうだろう。",
        "We'll make it even if we don't hurry.",
        {
          accept: ["なくても"],
          near: [
            [
              "ずに",
              'ずに is "without doing (and doing something else)". For "even if we don\'t", use ずとも.',
            ],
          ],
        },
      ),
      s(
        "高い薬を使わ{ずとも}、治る病気だ。",
        "たかいくすりをつかわ{ずとも}、なおるびょうきだ。",
        "It's an illness that gets better even without expensive medicine.",
        {
          accept: ["なくても"],
          near: [
            [
              "ずに",
              'ずに is "without doing (and doing something else)". For "even without", use ずとも.',
            ],
          ],
        },
      ),
      s(
        "説明され{ずとも}、見れば分かる。",
        "せつめいされ{ずとも}、みればわかる。",
        "You can tell just by looking, without it being explained.",
        {
          accept: ["なくても"],
          near: [
            [
              "ずに",
              'ずに is "without doing (and doing something else)". For "even without", use ずとも.',
            ],
          ],
        },
      ),
      s(
        "そんなに心配せ{ずとも}、大丈夫だ。",
        "そんなにしんぱいせ{ずとも}、だいじょうぶだ。",
        "It'll be fine, even if you don't worry so much.",
        {
          near: [
            [
              "ずに",
              'ずに is "without doing (and doing something else)". For "even if you don\'t", use ずとも.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nai-made-mo",
    title: "〜ないまでも",
    meaning: "even if not (quite), at least",
    structure: "Verb ない-form + までも",
    related: ["n3-sae", "n2-semete"],
    explanation: `
**ないまでも** sets a high standard aside and asks for a lower one instead: 毎日とは言わないまでも、週に一度は運動したい, "not every day, perhaps, but I'd like to exercise at least once a week".

The first half is the ideal or the extreme, and the second half is a more modest level that you want, expect or demand. The second half often has せめて (N2), ぐらいは, or は.

Common shapes are 〜とは言わないまでも ("I won't go as far as saying"), 〜はできないまでも, and 〜ではないまでも.

Compare なくても, "even without", which doesn't set up a lower target. ないまでも is always "not X, but at least Y".
`,
    sentences: [
      s(
        "毎日とは言わ{ないまでも}、週に一度は運動したい。",
        "まいにちとはいわ{ないまでも}、しゅうにいちどはうんどうしたい。",
        "Not every day, perhaps, but I'd like to exercise at least once a week.",
        {
          near: [
            [
              "なくても",
              'なくても is "even without". For "not X, but at least Y", use ないまでも.',
            ],
          ],
        },
      ),
      s(
        "優勝はでき{ないまでも}、三位には入りたい。",
        "ゆうしょうはでき{ないまでも}、さんいにははいりたい。",
        "Even if we can't win, I'd like us to make the top three.",
        {
          near: [
            [
              "なくても",
              'なくても is "even without". For "not X, but at least Y", use ないまでも.',
            ],
          ],
        },
      ),
      s(
        "完璧では{ないまでも}、合格点は取れるはずだ。",
        "かんぺきでは{ないまでも}、ごうかくてんはとれるはずだ。",
        "It may not be perfect, but it should get a pass mark.",
        {
          near: [
            [
              "なくても",
              'なくても is "even without". For "not X, but at least Y", use ないまでも.',
            ],
          ],
        },
      ),
      s(
        "謝ら{ないまでも}、説明ぐらいはすべきだ。",
        "あやまら{ないまでも}、せつめいぐらいはすべきだ。",
        "He doesn't have to apologise, but he should at least explain.",
        {
          near: [
            [
              "ないで",
              'ないで is "without". For "not X, but at least Y", use ないまでも.',
            ],
          ],
        },
      ),
      s(
        "手伝わ{ないまでも}、邪魔はしないでほしい。",
        "てつだわ{ないまでも}、じゃまはしないでほしい。",
        "If you won't help, at least don't get in the way.",
        {
          near: [
            [
              "ないで",
              'ないで is "without". For "not X, but at least Y", use ないまでも.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-shita-tokoro-de",
    title: "〜としたところで・〜にしたところで",
    meaning: "even if, even for (it wouldn't make a difference)",
    structure: "Plain form + としたところで · Noun + にしたところで",
    related: ["n2-ta-tokoro-de", "n3-to-shitemo", "n3-ni-shitemo"],
    explanation: `
**としたところで** means "even supposing that", and the second half says it wouldn't help or change anything: 今から急いだとしたところで、間に合わないだろう, "even if we hurried now, we wouldn't make it".

**にしたところで** after a noun (usually a person) means "even for X, X is no different": 私にしたところで、いい案があるわけではない, "even I don't have a good idea". It spreads a problem to everyone, often defensively.

Both are emphatic versions of としても and にしても (N3), and they're related to たところで (N2), "even if (it's pointless)". The tone is resigned or a little argumentative.
`,
    sentences: [
      s(
        "今から急いだ{としたところで}、間に合わないだろう。",
        "いまからいそいだ{としたところで}、まにあわないだろう。",
        "Even if we hurried now, we probably wouldn't make it.",
        {
          accept: ["としても", "ところで"],
          near: [
            [
              "としたら",
              'としたら is "if (supposing)". For "even if (it wouldn\'t help)", use としたところで.',
            ],
          ],
        },
      ),
      s(
        "私{にしたところで}、いい案があるわけではない。",
        "わたし{にしたところで}、いいあんがあるわけではない。",
        "It's not as if I have a good idea either.",
        {
          accept: ["にしても", "としても"],
          near: [
            [
              "にしては",
              'にしては is "for (surprisingly)". For "even for me", use にしたところで.',
            ],
          ],
        },
      ),
      s(
        "彼{にしたところで}、全部分かっているわけではない。",
        "かれ{にしたところで}、ぜんぶわかっているわけではない。",
        "Even he doesn't understand all of it.",
        {
          accept: ["にしても", "としても"],
          near: [
            [
              "にしては",
              'にしては is "for (surprisingly)". For "even he", use にしたところで.',
            ],
          ],
        },
      ),
      s(
        "今さら謝った{としたところで}、許してもらえないだろう。",
        "いまさらあやまった{としたところで}、ゆるしてもらえないだろう。",
        "Even if I apologised now, they probably wouldn't forgive me.",
        {
          accept: ["としても", "ところで"],
          near: [
            [
              "としたら",
              'としたら is "if (supposing)". For "even if (it wouldn\'t help)", use としたところで.',
            ],
          ],
        },
      ),
      s(
        "私一人が反対した{としたところで}、結果は変わらない。",
        "わたしひとりがはんたいした{としたところで}、けっかはかわらない。",
        "Even if I alone objected, it wouldn't change the result.",
        {
          accept: ["としても", "ところで"],
          near: [
            [
              "としたら",
              'としたら is "if (supposing)". For "even if (it wouldn\'t matter)", use としたところで.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tote",
    title: "〜とて",
    meaning: "even (X), X too",
    structure: "Noun + とて",
    related: ["n1-to-iedomo"],
    explanation: `
**とて** after a noun is a literary "even X, X too": 私とて、この結果には納得していない, "even I'm not satisfied with this result".

It usually follows a person (私, 誰, 先生, 親) or a time (今). It points out that X is no exception to something obvious: 先生とて人間だ, "teachers are human too".

The everyday equivalent is だって or でも. It's close to といえども, which is more formal and concessive. とて is a little softer and appears in speeches, novels and sympathetic arguments.

With a negative, 誰とて〜ない means "no one at all". Don't confuse it with として, "as (a role)".
`,
    sentences: [
      s(
        "私{とて}、この結果には納得していない。",
        "わたし{とて}、このけっかにはなっとくしていない。",
        "Even I'm not satisfied with this result.",
        {
          accept: ["だって", "も", "でも"],
          near: [
            ["として", 'として is "as (a role)". For "even I", use とて.'],
          ],
        },
      ),
      s(
        "誰{とて}、死ぬのは怖い。",
        "だれ{とて}、しぬのはこわい。",
        "Everyone is afraid of dying.",
        {
          accept: ["だって", "でも"],
          near: [
            [
              "として",
              'として is "as (a role)". For "anyone at all", use とて.',
            ],
          ],
        },
      ),
      s(
        "先生{とて}人間だ。間違えることもある。",
        "せんせい{とて}にんげんだ。まちがえることもある。",
        "Teachers are human too. They make mistakes.",
        {
          accept: ["だって", "も", "でも"],
          near: [["として", 'として is "as (a role)". For "X too", use とて.']],
        },
      ),
      s(
        "今{とて}、その気持ちは変わらない。",
        "いま{とて}、そのきもちはかわらない。",
        "Even now, that feeling hasn't changed.",
        {
          accept: ["でも", "も"],
          near: [
            ["として", 'として is "as (a role)". For "even now", use とて.'],
          ],
        },
      ),
      s(
        "親{とて}、子どもの気持ちがすべて分かるわけではない。",
        "おや{とて}、こどものきもちがすべてわかるわけではない。",
        "Even parents don't understand everything their children feel.",
        {
          accept: ["だって", "でも"],
          near: [
            [
              "として",
              'として is "as (a role)". For "even parents", use とて.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kai-mo-naku",
    title: "〜かいもなく",
    meaning: "despite (all the effort), in vain",
    structure: "Verb た-form / Noun + の + かいもなく",
    related: ["n2-kai-ga-aru"],
    explanation: `
**かいもなく** says an effort failed to pay off: 努力のかいもなく、試験に落ちた, "despite all my efforts, I failed the exam".

It's the negative of かいがある (N2), "it's worth it, it paid off". かい (甲斐) means "the worth or reward of an effort". The first half is an effort (studying, treatment, cheering, persuading), and the second half is a disappointing result.

It's a sad, sympathetic expression, often used in reports of illness and defeat: 懸命な治療のかいもなく、彼は亡くなった, "despite every effort to treat him, he passed away".

Compare おかげで, "thanks to", which is the grateful opposite.
`,
    sentences: [
      s(
        "努力の{かいもなく}、試験に落ちた。",
        "どりょくの{かいもなく}、しけんにおちた。",
        "Despite all my efforts, I failed the exam.",
        {
          accept: ["甲斐もなく"],
          near: [
            [
              "かいがあって",
              'かいがあって is "it paid off". For "in vain", use かいもなく.',
            ],
          ],
        },
      ),
      s(
        "懸命な治療の{かいもなく}、彼は亡くなった。",
        "けんめいなちりょうの{かいもなく}、かれはなくなった。",
        "Despite every effort to treat him, he passed away.",
        {
          accept: ["甲斐もなく"],
          near: [
            [
              "おかげで",
              'おかげで is "thanks to". For "despite (in vain)", use かいもなく.',
            ],
          ],
        },
      ),
      s(
        "必死に応援した{かいもなく}、チームは負けた。",
        "ひっしにおうえんした{かいもなく}、チームはまけた。",
        "Despite our desperate cheering, the team lost.",
        {
          accept: ["甲斐もなく"],
          near: [
            [
              "かいがあって",
              'かいがあって is "it paid off". For "in vain", use かいもなく.',
            ],
          ],
        },
      ),
      s(
        "毎日練習した{かいもなく}、一回戦で敗退した。",
        "まいにちれんしゅうした{かいもなく}、いっかいせんではいたいした。",
        "All that daily practice was for nothing. We went out in the first round.",
        {
          accept: ["甲斐もなく"],
          near: [
            [
              "おかげで",
              'おかげで is "thanks to". For "for nothing", use かいもなく.',
            ],
          ],
        },
      ),
      s(
        "何度も説得した{かいもなく}、彼は会社を辞めた。",
        "なんどもせっとくした{かいもなく}、かれはかいしゃをやめた。",
        "Despite all my attempts to persuade him, he quit the company.",
        {
          accept: ["甲斐もなく"],
          near: [
            [
              "かいがあって",
              'かいがあって is "it paid off". For "in vain", use かいもなく.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-mono-wo",
    title: "〜ものを",
    meaning: "if only; it could have (but)",
    structure: "Plain form + ものを",
    related: ["n4-noni", "n2-mono-no"],
    explanation: `
**ものを** at the end of a clause expresses regret or reproach that things didn't go the way they easily could have: 早く言ってくれれば手伝ったものを, "if only you'd told me sooner, I'd have helped".

The first half is usually a condition (ば, たら, なら) and a result that would have followed. ものを adds "but it didn't happen, what a pity". It can end the sentence, or continue into what actually happened.

It's a stronger, more literary version of のに (N4): 素直に謝ればいいものを、彼は言い訳ばかりする, "he could just apologise, but all he does is make excuses".

Don't confuse it with ものの (N2), "although", which is a neutral concession.
`,
    sentences: [
      s(
        "早く言ってくれれば手伝った{ものを}。",
        "はやくいってくれればてつだった{ものを}。",
        "If only you'd told me sooner, I'd have helped.",
        {
          accept: ["のに"],
          near: [
            [
              "ものの",
              'ものの is "although". For regret ("if only"), use ものを.',
            ],
          ],
        },
      ),
      s(
        "知っていれば教えてあげた{ものを}、なぜ黙っていたのか。",
        "しっていればおしえてあげた{ものを}、なぜだまっていたのか。",
        "I'd have told you if I'd known. Why did you keep quiet?",
        {
          accept: ["のに"],
          near: [
            [
              "ものの",
              'ものの is "although". For regret ("I\'d have"), use ものを.',
            ],
          ],
        },
      ),
      s(
        "素直に謝ればいい{ものを}、彼は言い訳ばかりする。",
        "すなおにあやまればいい{ものを}、かれはいいわけばかりする。",
        "He could just apologise, but all he does is make excuses.",
        {
          accept: ["のに"],
          near: [
            [
              "ものの",
              'ものの is "although". For reproach ("he could just"), use ものを.',
            ],
          ],
        },
      ),
      s(
        "もう少し待てば会えた{ものを}、先に帰ってしまった。",
        "もうすこしまてばあえた{ものを}、さきにかえってしまった。",
        "If I'd waited a little longer I'd have seen them, but I went home first.",
        {
          accept: ["のに"],
          near: [
            [
              "ものだ",
              'ものだ is "that\'s how it is". For regret, use ものを.',
            ],
          ],
        },
      ),
      s(
        "黙っていればいい{ものを}、余計なことを言ってしまった。",
        "だまっていればいい{ものを}、よけいなことをいってしまった。",
        "I should have kept quiet, but I went and said too much.",
        {
          accept: ["のに"],
          near: [
            [
              "ものの",
              'ものの is "although". For regret ("I should have"), use ものを.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-mo-mashite",
    title: "〜にもまして",
    meaning: "even more than, above all",
    structure: "Noun + にもまして · Question word + にもまして",
    related: ["n5-yori"],
    explanation: `
**にもまして** means "even more than X": 今年は去年にもまして暑い, "this year is even hotter than last year".

The point is that X was already remarkable, and now it's exceeded. That's the difference from plain より, which is just a comparison.

With a question word, it means "above all": 何にもまして健康が大切だ, "health matters more than anything", and 誰にもまして, "more than anyone". It's also common with time: 以前にもまして, "even more than before".

It's formal and written. The ました here isn't polite ます. It comes from 増す, "to increase". Don't confuse it with にしても, "even if".
`,
    sentences: [
      s(
        "今年は去年{にもまして}暑い。",
        "ことしはきょねん{にもまして}あつい。",
        "This year is even hotter than last year.",
        {
          accept: ["よりも", "より"],
          near: [
            [
              "にしても",
              'にしても is "even if". For "even more than", use にもまして.',
            ],
          ],
        },
      ),
      s(
        "何{にもまして}、健康が大切だ。",
        "なに{にもまして}、けんこうがたいせつだ。",
        "Above all, health is what matters.",
        {
          accept: ["よりも", "より"],
          near: [
            [
              "にしても",
              'にしても is "even if". For "above all", use 何にもまして.',
            ],
          ],
        },
      ),
      s(
        "以前{にもまして}、仕事が忙しくなった。",
        "いぜん{にもまして}、しごとがいそがしくなった。",
        "Work has got even busier than before.",
        {
          accept: ["よりも", "より"],
          near: [
            [
              "に比べて",
              'に比べて is a neutral comparison. For "even more than", use にもまして.',
              "にくらべて",
            ],
          ],
        },
      ),
      s(
        "優勝も嬉しかったが、それ{にもまして}仲間の言葉が嬉しかった。",
        "ゆうしょうもうれしかったが、それ{にもまして}なかまのことばがうれしかった。",
        "Winning was great, but my teammates' words made me even happier.",
        {
          accept: ["よりも", "より"],
          near: [
            [
              "にしても",
              'にしても is "even if". For "even more than", use にもまして.',
            ],
          ],
        },
      ),
      s(
        "彼は前{にもまして}熱心に練習するようになった。",
        "かれはまえ{にもまして}ねっしんにれんしゅうするようになった。",
        "He's started practising even harder than before.",
        {
          accept: ["よりも", "より"],
          near: [
            [
              "に比べて",
              'に比べて is a neutral comparison. For "even more than", use にもまして.',
              "にくらべて",
            ],
          ],
        },
      ),
    ],
  }),
];
