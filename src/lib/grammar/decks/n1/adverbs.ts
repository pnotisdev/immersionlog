import { point, s } from "../../build";

/** Adverbs that carry an attitude: daring, doubt, near-failure, sympathy and resignation. */

export const adverbs = [
  point({
    id: "n1-aete",
    title: "あえて",
    meaning: "deliberately, dare to (despite a reason not to)",
    structure: "あえて + Verb",
    related: ["n2-wazawaza"],
    explanation: `
**あえて** means doing something on purpose even though there's a reason not to: difficulty, risk, or other people's disapproval. 反対されるのを承知で、あえて本当のことを言った, "knowing I'd be opposed, I deliberately told the truth".

Compare わざわざ (N2), which is going to the trouble of doing something, often for someone else's sake. あえて is about choosing the harder or less expected path.

あえて言うなら means "if I had to say something" and softens a criticism. With a negative, あえて〜ない means "I won't go so far as to": あえて反対はしない, "I won't go out of my way to object".

It's common in speeches, interviews and essays whenever someone explains a deliberate, slightly brave choice.
`,
    sentences: [
      s(
        "反対されるのを承知で、{あえて}本当のことを言った。",
        "はんたいされるのをしょうちで、{あえて}ほんとうのことをいった。",
        "Knowing I'd be opposed, I deliberately told the truth.",
        {
          near: [
            [
              "わざわざ",
              'わざわざ is "going to the trouble". For choosing to do it despite the risk, use あえて.',
            ],
          ],
        },
      ),
      s(
        "楽な道もあったが、彼は{あえて}厳しい道を選んだ。",
        "らくなみちもあったが、かれは{あえて}きびしいみちをえらんだ。",
        "There was an easy route, but he chose the hard one on purpose.",
        {
          near: [
            [
              "わざわざ",
              'わざわざ is "going to the trouble". For a deliberate, harder choice, use あえて.',
            ],
          ],
        },
      ),
      s(
        "{あえて}言うなら、少し長すぎると思う。",
        "{あえて}いうなら、すこしながすぎるとおもう。",
        "If I had to say something, I'd say it's a little too long.",
        {
          near: [
            [
              "もし",
              'もし is a plain "if". For "if I had to say something", use あえて.',
            ],
          ],
        },
      ),
      s(
        "パソコンもあるが、{あえて}手で日記を書いている。",
        "パソコンもあるが、{あえて}てでにっきをかいている。",
        "I have a computer, but I choose to write my diary by hand.",
        {
          near: [
            [
              "わざと",
              "わざと is doing something (often bad) on purpose. For a deliberate choice of method, use あえて.",
            ],
          ],
        },
      ),
      s(
        "失敗を恐れず、{あえて}新しいことに挑戦する。",
        "しっぱいをおそれず、{あえて}あたらしいことにちょうせんする。",
        "Not fearing failure, I dare to try new things.",
        {
          near: [
            [
              "わざわざ",
              'わざわざ is "going to the trouble". For "daring to", use あえて.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-anagachi",
    title: "あながち〜ない",
    meaning: "not necessarily, not entirely",
    structure: "あながち + negative (〜ない・〜とは言えない)",
    related: ["n3-to-wa-kagiranai"],
    explanation: `
**あながち** always comes with a negative and means "not necessarily, not entirely": 彼の話もあながち嘘ではない, "what he says isn't necessarily a lie".

It rescues an idea that people might dismiss too quickly. There's usually a hint that you thought it was wrong at first, but on reflection there's some truth to it.

Typical endings are 〜ではない, 〜とは言えない, 〜とは限らない and 無理はない ("it's not unreasonable").

It's close to 必ずしも〜ない, which is more neutral and logical. あながち has more of a "you can't just dismiss it" feeling. Don't use it with a positive verb: あながち正しい is wrong. And don't confuse it with まったく〜ない, "not at all", which is the opposite strength.
`,
    sentences: [
      s(
        "彼の話も{あながち}嘘ではない。",
        "かれのはなしも{あながち}うそではない。",
        "What he says isn't necessarily a lie.",
        {
          accept: ["必ずしも"],
          near: [
            [
              "まったく",
              'まったく〜ない is "not at all". For "not necessarily", use あながち.',
            ],
          ],
        },
      ),
      s(
        "その考えは{あながち}間違いとは言えない。",
        "そのかんがえは{あながち}まちがいとはいえない。",
        "That idea can't necessarily be called wrong.",
        {
          accept: ["必ずしも"],
          near: [
            [
              "まったく",
              'まったく〜ない is "not at all". For "not necessarily", use あながち.',
            ],
          ],
        },
      ),
      s(
        "あの噂も{あながち}的外れではなかった。",
        "あのうわさも{あながち}まとはずれではなかった。",
        "That rumour wasn't entirely off the mark.",
        {
          near: [
            [
              "ぜんぜん",
              'ぜんぜん〜ない is "not at all". For "not entirely", use あながち.',
            ],
          ],
        },
      ),
      s(
        "値段が高いものが{あながち}良いものとは限らない。",
        "ねだんがたかいものが{あながち}よいものとはかぎらない。",
        "Expensive things aren't necessarily good things.",
        {
          accept: ["必ずしも"],
          near: [
            [
              "まったく",
              'まったく〜ない is "not at all". For "not necessarily", use あながち.',
            ],
          ],
        },
      ),
      s(
        "彼が怒るのも{あながち}無理はない。",
        "かれがおこるのも{あながち}むりはない。",
        "It's not entirely unreasonable for him to be angry.",
        {
          near: [
            [
              "ぜんぜん",
              'ぜんぜん〜ない is "not at all". For "not entirely", use あながち.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-iza",
    title: "いざ",
    meaning: "when it actually comes to it; now then",
    structure: "いざ + Verb · いざとなると / いざとなれば · いざという時",
    explanation: `
**いざ** marks the moment when something stops being an idea and becomes real: いざとなると、なかなか言葉が出ない, "when it actually comes to it, the words just don't come".

Its most common uses are set phrases:
- いざとなると / いざとなったら: "when push comes to shove".
- いざという時: "in an emergency, when it really matters". いざという時のために貯金する, "save for a rainy day".
- いざ〜してみると: "when I actually tried it". The result is often a surprise.

On its own, いざ is an old-fashioned "now then, here we go": いざ、出発だ.

Compare いよいよ, "at last, finally", which is about a long-awaited moment arriving. いざ is about how things feel once you're really in it.
`,
    sentences: [
      s(
        "{いざ}となると、なかなか言葉が出ない。",
        "{いざ}となると、なかなかことばがでない。",
        "When it actually comes to it, the words just don't come.",
        {
          near: [
            [
              "いよいよ",
              'いよいよ is "at last". For "when it actually comes to it", use いざ.',
            ],
          ],
        },
      ),
      s(
        "{いざ}という時のために貯金している。",
        "{いざ}というときのためにちょきんしている。",
        "I'm saving for a rainy day.",
        {
          near: [
            [
              "もし",
              'もし is a plain "if". The set phrase for "a time of need" is いざという時.',
            ],
          ],
        },
      ),
      s(
        "準備はできた。{いざ}、出発だ。",
        "じゅんびはできた。{いざ}、しゅっぱつだ。",
        "We're ready. Now then, off we go.",
        {
          accept: ["さあ"],
          near: [
            [
              "いよいよ",
              'いよいよ is "at last". For the rallying "now then", use いざ.',
            ],
          ],
        },
      ),
      s(
        "{いざ}始めてみると、思ったより簡単だった。",
        "{いざ}はじめてみると、おもったよりかんたんだった。",
        "When I actually started, it was easier than I'd thought.",
        {
          near: [
            [
              "いよいよ",
              'いよいよ is "at last". For "when I actually tried", use いざ.',
            ],
          ],
        },
      ),
      s(
        "練習では上手なのに、{いざ}本番になると緊張してしまう。",
        "れんしゅうではじょうずなのに、{いざ}ほんばんになるときんちょうしてしまう。",
        "I'm fine in practice, but when the real thing comes, I get nervous.",
        {
          near: [
            [
              "いよいよ",
              'いよいよ is "at last". For "when it actually comes to it", use いざ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-karoujite",
    title: "かろうじて",
    meaning: "barely, only just",
    structure: "かろうじて + Verb (usually past)",
    related: ["n2-youyaku"],
    explanation: `
**かろうじて** means something only just succeeded, and very nearly didn't: かろうじて終電に間に合った, "I only just made the last train".

The result is positive but the margin is tiny: passing by one point, surviving by luck, winning by a single goal. It's usually past tense, because you're reporting a narrow escape.

It's close to なんとか and どうにか ("somehow, managed to"), which focus on the effort. かろうじて focuses on how close it was to failure. ぎりぎり is the casual version.

Compare ようやく (N2), "at last, finally", which is about a long wait, not a narrow margin. And やっと can mean both, depending on context.

It comes from the classical からくして, "with hardship".
`,
    sentences: [
      s(
        "走って、{かろうじて}終電に間に合った。",
        "はしって、{かろうじて}しゅうでんにまにあった。",
        "I ran and only just made the last train.",
        {
          accept: ["なんとか", "どうにか", "ぎりぎり"],
          near: [
            [
              "ようやく",
              'ようやく is "at last, after a long wait". For "only just", use かろうじて.',
            ],
          ],
        },
      ),
      s(
        "試験には{かろうじて}合格した。",
        "しけんには{かろうじて}ごうかくした。",
        "I barely passed the exam.",
        {
          accept: ["なんとか", "どうにか", "ぎりぎり"],
          near: [
            [
              "たまたま",
              'たまたま is "by chance". For "barely", use かろうじて.',
            ],
          ],
        },
      ),
      s(
        "事故に遭ったが、{かろうじて}命は助かった。",
        "じこにあったが、{かろうじて}いのちはたすかった。",
        "He was in an accident but barely survived.",
        {
          accept: ["なんとか"],
          near: [
            [
              "ようやく",
              'ようやく is "at last, after a long wait". For "barely", use かろうじて.',
            ],
          ],
        },
      ),
      s(
        "悲しい知らせを聞いたが、彼は{かろうじて}笑顔を作った。",
        "かなしいしらせをきいたが、かれは{かろうじて}えがおをつくった。",
        "He heard the sad news but just managed to force a smile.",
        {
          accept: ["なんとか"],
          near: [
            [
              "わざと",
              'わざと is "on purpose". For "just managed to", use かろうじて.',
            ],
          ],
        },
      ),
      s(
        "一点差で、{かろうじて}勝った。",
        "いってんさで、{かろうじて}かった。",
        "We won, but only just, by a single point.",
        {
          accept: ["なんとか", "ぎりぎり"],
          near: [
            [
              "ようやく",
              'ようやく is "at last, after a long wait". For a narrow margin, use かろうじて.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-sazo",
    title: "さぞ(かし)",
    meaning: "surely, must have been (imagining someone's feelings)",
    structure: "さぞ(かし) + 〜でしょう / 〜ことだろう / 〜に違いない",
    explanation: `
**さぞ** imagines how strongly someone must feel, especially in a situation you weren't in yourself: 長旅でさぞお疲れでしょう, "you must be exhausted after such a long journey".

It almost always ends with a guess: でしょう, だろう, ことだろう or に違いない. The feeling is usually strong, like tiredness, joy, sadness or anger, and さぞ adds sympathy.

さぞかし and さぞや are more emphatic versions.

It's close to きっと, but きっと is just a confident guess about anything. さぞ is specifically "I can only imagine how…". That makes it polite and warm, and common in letters, condolences and congratulations.

You don't use it about your own feelings.
`,
    sentences: [
      s(
        "長旅で{さぞ}お疲れでしょう。",
        "ながたびで{さぞ}おつかれでしょう。",
        "You must be exhausted after such a long journey.",
        {
          accept: ["さぞかし", "さぞや"],
          near: [
            [
              "きっと",
              'きっと works as a guess. For sympathy ("I can only imagine"), this point practises さぞ.',
            ],
          ],
        },
      ),
      s(
        "合格して、ご両親も{さぞ}お喜びでしょう。",
        "ごうかくして、ごりょうしんも{さぞ}およろこびでしょう。",
        "Your parents must be delighted that you passed.",
        {
          accept: ["さぞかし", "さぞや"],
          near: [
            [
              "たぶん",
              'たぶん is a flat "probably". For imagining strong feelings, use さぞ.',
            ],
          ],
        },
      ),
      s(
        "一人で{さぞ}寂しかったことだろう。",
        "ひとりで{さぞ}さびしかったことだろう。",
        "You must have been so lonely on your own.",
        {
          accept: ["さぞかし", "さぞや"],
          near: [
            [
              "きっと",
              "きっと works as a guess. For sympathy, this point practises さぞ.",
            ],
          ],
        },
      ),
      s(
        "山頂からの景色は{さぞ}美しかったに違いない。",
        "さんちょうからのけしきは{さぞ}うつくしかったにちがいない。",
        "The view from the summit must have been beautiful.",
        {
          accept: ["さぞかし", "さぞや"],
          near: [
            [
              "たぶん",
              'たぶん is a flat "probably". For "surely must have been", use さぞ.',
            ],
          ],
        },
      ),
      s(
        "あんなことを言われて、{さぞ}腹が立ったでしょう。",
        "あんなことをいわれて、{さぞ}はらがたったでしょう。",
        "You must have been furious to be told that.",
        {
          accept: ["さぞかし", "さぞや"],
          near: [
            [
              "きっと",
              "きっと works as a guess. For sympathy, this point practises さぞ.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-sukasazu",
    title: "すかさず",
    meaning: "instantly, without missing a beat",
    structure: "すかさず + Verb",
    explanation: `
**すかさず** means reacting the instant an opportunity appears, without leaving a gap: 質問されると、彼はすかさず答えた, "when asked, he answered without missing a beat".

It literally means "without leaving a gap" (透かさず). The action is quick, alert and often clever: a sharp reply, a counter-attack, grabbing a free seat, or a comeback to a joke.

It's more vivid than すぐ or すぐに, which are just "immediately". すかさず implies you were watching for the moment and seized it.

It's used about people's reactions, not about events. You can't say 雨がすかさず降った. It's common in sports commentary, stories and descriptions of conversations.
`,
    sentences: [
      s(
        "質問されると、彼は{すかさず}答えた。",
        "しつもんされると、かれは{すかさず}こたえた。",
        "When asked, he answered without missing a beat.",
        {
          near: [
            [
              "すぐ",
              "すぐ works in meaning. For seizing the moment, this point practises すかさず.",
            ],
          ],
        },
      ),
      s(
        "相手がミスをした瞬間、{すかさず}攻めた。",
        "あいてがミスをしたしゅんかん、{すかさず}せめた。",
        "The moment the opponent slipped up, we attacked.",
        {
          near: [
            [
              "すぐに",
              "すぐに works in meaning. For seizing the moment, this point practises すかさず.",
            ],
          ],
        },
      ),
      s(
        "前の人が席を立つと、{すかさず}別の客が座った。",
        "まえのひとがせきをたつと、{すかさず}べつのきゃくがすわった。",
        "As soon as the person in front got up, another customer grabbed the seat.",
        {
          near: [
            [
              "ゆっくり",
              'ゆっくり is "slowly". For "instantly", use すかさず.',
            ],
          ],
        },
      ),
      s(
        "冗談を言ったら、{すかさず}つっこまれた。",
        "じょうだんをいったら、{すかさず}つっこまれた。",
        "When I made a joke, someone came straight back at me.",
        {
          near: [
            [
              "すぐ",
              "すぐ works in meaning. For a sharp comeback, this point practises すかさず.",
            ],
          ],
        },
      ),
      s(
        "チャンスと見て、{すかさず}手を挙げた。",
        "チャンスとみて、{すかさず}てをあげた。",
        "Seeing my chance, I put my hand up at once.",
        {
          near: [
            [
              "そろそろ",
              'そろそろ is "soon, about time". For "at once", use すかさず.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tada-de-sae",
    title: "ただでさえ",
    meaning: "even at the best of times, already (and now…)",
    structure: "ただでさえ A のに、B",
    related: ["n3-sae"],
    explanation: `
**ただでさえ** says that a situation is already difficult even in normal conditions, and then something makes it worse: ただでさえ忙しいのに、また仕事が増えた, "I'm busy enough as it is, and now I've got even more work".

The first half is a normal, ongoing state: busy, cramped, hot, short-staffed. The second half is an extra burden, and the tone is usually a complaint. のに and うえに often join the two halves.

It combines ただ ("ordinary, as it is") with でさえ ("even"). So the feeling is "even in the ordinary state it's X, so now…".

Compare いつも, which just says "always". ただでさえ adds "and now it's even worse".
`,
    sentences: [
      s(
        "{ただでさえ}忙しいのに、また仕事が増えた。",
        "{ただでさえ}いそがしいのに、またしごとがふえた。",
        "I'm busy enough as it is, and now I've got even more work.",
        {
          near: [
            [
              "いつも",
              'いつも is just "always". For "already … and now even more", use ただでさえ.',
            ],
          ],
        },
      ),
      s(
        "{ただでさえ}狭い部屋に、大きなソファを置いた。",
        "{ただでさえ}せまいへやに、おおきなソファをおいた。",
        "We put a big sofa in a room that was already cramped.",
        {
          near: [
            [
              "とても",
              'とても is just "very". For "already … and now", use ただでさえ.',
            ],
          ],
        },
      ),
      s(
        "{ただでさえ}暑いのに、エアコンが壊れた。",
        "{ただでさえ}あついのに、エアコンがこわれた。",
        "It's hot enough already, and now the air conditioner's broken.",
        {
          near: [
            [
              "いつも",
              'いつも is just "always". For "already … and now", use ただでさえ.',
            ],
          ],
        },
      ),
      s(
        "{ただでさえ}人手が足りないのに、二人も休んだ。",
        "{ただでさえ}ひとでがたりないのに、ふたりもやすんだ。",
        "We're short-staffed at the best of times, and two people are off.",
        {
          near: [
            [
              "いつも",
              'いつも is just "always". For "at the best of times", use ただでさえ.',
            ],
          ],
        },
      ),
      s(
        "彼は{ただでさえ}声が大きいのに、酔うともっとうるさくなる。",
        "かれは{ただでさえ}こえがおおきいのに、ようともっとうるさくなる。",
        "He's loud enough normally, and he gets even louder when he's drunk.",
        {
          near: [
            [
              "さえ",
              'Just さえ is "even". The fixed phrase for "normally, as it is" is ただでさえ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tekkiri",
    title: "てっきり",
    meaning: "I was sure (but I was wrong)",
    structure: "てっきり + 〜と思っていた / 〜と思った",
    explanation: `
**てっきり** means "I was convinced that…", and it almost always comes before a mistaken belief: てっきり晴れると思っていたのに、雨だった, "I was sure it would be sunny, but it rained".

The ending is nearly always と思っていた or と思った, followed by the reality that proved you wrong. Often のに, が or けど introduce the correction, or it's simply left unsaid.

That's the key difference from きっと. きっと is a confident guess about something that hasn't happened yet: 明日はきっと晴れる. てっきり looks back at a belief that turned out false.

It's a conversational word, perfect for describing surprises and misunderstandings.
`,
    sentences: [
      s(
        "{てっきり}晴れると思っていたのに、雨だった。",
        "{てっきり}はれるとおもっていたのに、あめだった。",
        "I was sure it would be sunny, but it rained.",
        {
          near: [
            [
              "きっと",
              'きっと is a confident guess about the future. For "I was sure (and wrong)", use てっきり.',
            ],
          ],
        },
      ),
      s(
        "{てっきり}彼が犯人だと思っていた。",
        "{てっきり}かれがはんにんだとおもっていた。",
        "I was convinced he was the culprit.",
        {
          near: [
            [
              "きっと",
              "きっと is a confident guess about the future. For a mistaken belief, use てっきり.",
            ],
          ],
        },
      ),
      s(
        "{てっきり}休みだと思っていたら、店は開いていた。",
        "{てっきり}やすみだとおもっていたら、みせはあいていた。",
        "I was sure it was closed, but the shop was open.",
        {
          near: [
            [
              "たしか",
              'たしか is "if I remember rightly". For "I was sure (but wrong)", use てっきり.',
            ],
          ],
        },
      ),
      s(
        "静かだったので、{てっきり}誰もいないと思った。",
        "しずかだったので、{てっきり}だれもいないとおもった。",
        "It was so quiet I assumed no one was there.",
        {
          near: [
            [
              "きっと",
              "きっと is a confident guess about the future. For a mistaken assumption, use てっきり.",
            ],
          ],
        },
      ),
      s(
        "{てっきり}怒られると思ったが、褒められた。",
        "{てっきり}おこられるとおもったが、ほめられた。",
        "I was sure I'd be told off, but I was praised.",
        {
          near: [
            [
              "きっと",
              'きっと is a confident guess about the future. For "I was sure (but wrong)", use てっきり.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tokaku",
    title: "とかく",
    meaning: "all too often, tend to; in any case",
    structure: "とかく + 〜がちだ / 〜やすい",
    related: ["n3-gachi"],
    explanation: `
**とかく** describes a general, usually unwelcome, tendency: 人はとかく他人の欠点に目が行きがちだ, "people all too often notice other people's faults".

It often pairs with がち (N3) or やすい, both of which also express tendencies, and it typically states a general truth about people or life. The tone is reflective, a little like a proverb.

とかく is also used in the famous opening of Natsume Sōseki's 草枕: 兎角に人の世は住みにくい, "in any case, the world of people is a hard place to live". Here it means "in any case, all told".

Compare ともすれば, "apt to, if you're not careful", which is similar but warns more about a risk. よく is just "often", without the sense of an unfortunate habit.
`,
    sentences: [
      s(
        "人は{とかく}他人の欠点に目が行きがちだ。",
        "ひとは{とかく}たにんのけってんにめがいきがちだ。",
        "People all too often notice other people's faults.",
        {
          accept: ["ともすれば", "ともすると"],
          near: [
            [
              "よく",
              'よく is just "often". For an unfortunate general tendency, use とかく.',
            ],
          ],
        },
      ),
      s(
        "若いうちは{とかく}無理をしがちだ。",
        "わかいうちは{とかく}むりをしがちだ。",
        "When you're young, you tend to push yourself too hard.",
        {
          accept: ["ともすれば", "ともすると"],
          near: [
            [
              "よく",
              'よく is just "often". For an unfortunate general tendency, use とかく.',
            ],
          ],
        },
      ),
      s(
        "忙しいと、食事が{とかく}おろそかになる。",
        "いそがしいと、しょくじが{とかく}おろそかになる。",
        "When you're busy, meals all too easily get neglected.",
        {
          near: [
            [
              "よく",
              'よく is just "often". For an unfortunate tendency, use とかく.',
            ],
          ],
        },
      ),
      s(
        "この世は{とかく}住みにくい。",
        "このよは{とかく}すみにくい。",
        "All told, this world is a hard place to live.",
        {
          near: [
            [
              "とても",
              'とても is just "very". For a reflective "all told", use とかく.',
            ],
          ],
        },
      ),
      s(
        "新しい制度は{とかく}批判されやすい。",
        "あたらしいせいどは{とかく}ひはんされやすい。",
        "New systems tend to attract criticism.",
        {
          near: [
            [
              "よく",
              'よく is just "often". For a general tendency, use とかく.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-namaji",
    title: "なまじ(っか)",
    meaning: "half-heartedly, a little (which only makes it worse)",
    structure: "なまじ + Verb / Noun · なまじの + Noun",
    related: ["n2-kaette"],
    explanation: `
**なまじ** says that doing or having something only partly backfires, and you'd have been better off with none at all: なまじ知識があるせいで、かえって迷ってしまう, "knowing just a little is exactly what gets me confused".

The typical shape is なまじ A から / ために / せいで, followed by an unfortunate result, often with かえって ("on the contrary") or so on. As a modifier, なまじの means "half-baked": なまじの知識.

なまじっか is a more emphatic, conversational version.

Compare せっかく, "having gone to the trouble", which regrets that an effort was wasted. なまじ regrets that the half-effort itself caused the problem.
`,
    sentences: [
      s(
        "{なまじ}知識があるせいで、かえって迷ってしまう。",
        "{なまじ}ちしきがあるせいで、かえってまよってしまう。",
        "Knowing just a little is exactly what gets me confused.",
        {
          accept: ["なまじっか"],
          near: [
            [
              "せっかく",
              'せっかく is "having gone to the trouble". For a half-measure that backfires, use なまじ.',
            ],
          ],
        },
      ),
      s(
        "{なまじ}期待したので、がっかりも大きかった。",
        "{なまじ}きたいしたので、がっかりもおおきかった。",
        "Because I'd half got my hopes up, the disappointment was all the bigger.",
        {
          accept: ["なまじっか"],
          near: [
            [
              "せっかく",
              'せっかく is "having gone to the trouble". For a half-measure that backfires, use なまじ.',
            ],
          ],
        },
      ),
      s(
        "{なまじ}口を出すと、話がややこしくなる。",
        "{なまじ}くちをだすと、はなしがややこしくなる。",
        "Butting in half-heartedly only makes things complicated.",
        {
          accept: ["なまじっか"],
          near: [
            [
              "わざと",
              'わざと is "on purpose". For a half-measure that backfires, use なまじ.',
            ],
          ],
        },
      ),
      s(
        "{なまじ}顔を知っているから、かえって断りにくい。",
        "{なまじ}かおをしっているから、かえってことわりにくい。",
        "Because I sort of know him, it's actually harder to say no.",
        {
          accept: ["なまじっか"],
          near: [
            [
              "せっかく",
              'せっかく is "having gone to the trouble". For a half-connection that backfires, use なまじ.',
            ],
          ],
        },
      ),
      s(
        "{なまじ}の知識では役に立たない。",
        "{なまじ}のちしきではやくにたたない。",
        "Half-baked knowledge is no use.",
        {
          accept: ["なまじっか"],
          near: [
            [
              "少し",
              '少しの知識 is neutral. For "half-baked", use なまじの.',
              "すこし",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-mashite",
    title: "まして(や)",
    meaning: "let alone, much less; all the more",
    structure: "A でも〜。まして(や) B は〜",
    related: ["n3-sae"],
    explanation: `
**まして** takes an obvious fact about A and says it applies even more strongly to B: 大人でも難しいのだから、まして子どもには無理だ, "it's hard even for adults, let alone children".

The first half usually has でも, さえ or も ("even"). The second half gives the stronger case, often ending in 無理だ, できるはずがない, なおさらだ or a question like なおさらではないか.

It works in both directions. With a negative, it means "let alone": 平仮名も読めないのに、まして漢字は読めない. With a positive, it means "all the more": 平日でも混むのだから、まして週末は大変だ.

ましてや is a more emphatic form. Compare むしろ, "rather, if anything", which prefers one option over another instead of escalating.
`,
    sentences: [
      s(
        "大人でも難しいのだから、{まして}子どもには無理だ。",
        "おとなでもむずかしいのだから、{まして}こどもにはむりだ。",
        "It's hard even for adults, let alone children.",
        {
          accept: ["ましてや"],
          near: [
            ["むしろ", 'むしろ is "rather". For "let alone", use まして.'],
          ],
        },
      ),
      s(
        "平仮名も読めないのに、{まして}漢字なんて読めない。",
        "ひらがなもよめないのに、{まして}かんじなんてよめない。",
        "I can't even read hiragana, much less kanji.",
        {
          accept: ["ましてや"],
          near: [
            ["むしろ", 'むしろ is "rather". For "much less", use まして.'],
          ],
        },
      ),
      s(
        "友達にも話していない。{まして}親には言えない。",
        "ともだちにもはなしていない。{まして}おやにはいえない。",
        "I haven't even told my friends, let alone my parents.",
        {
          accept: ["ましてや"],
          near: [
            [
              "それに",
              'それに just adds a point. For "let alone", use まして.',
            ],
          ],
        },
      ),
      s(
        "平日でも混むのだから、{まして}週末は大変だろう。",
        "へいじつでもこむのだから、{まして}しゅうまつはたいへんだろう。",
        "It's crowded even on weekdays, so it'll be all the worse at the weekend.",
        {
          accept: ["ましてや"],
          near: [
            ["むしろ", 'むしろ is "rather". For "all the more", use まして.'],
          ],
        },
      ),
      s(
        "自分の国の歴史も知らない。{まして}外国の歴史など知るはずもない。",
        "じぶんのくにのれきしもしらない。{まして}がいこくのれきしなどしるはずもない。",
        "I don't even know my own country's history, let alone other countries'.",
        {
          accept: ["ましてや"],
          near: [
            [
              "それに",
              'それに just adds a point. For "let alone", use まして.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-manzara",
    title: "まんざら〜でもない",
    meaning: "not altogether (bad), rather pleased",
    structure: "まんざら + でもない / 〜ではない / 悪くない",
    related: ["n1-anagachi"],
    explanation: `
**まんざら** comes with a negative and means "not altogether, not entirely": 田舎暮らしもまんざら悪くない, "country life isn't so bad after all".

The set phrase **まんざらでもない** describes someone who is quietly pleased while pretending not to be: 褒められて、彼はまんざらでもない様子だった, "he looked rather pleased at the praise". This is its most common use, and it's a lovely, very Japanese piece of understatement.

It's close to あながち〜ない, "not necessarily". Both rescue something from being dismissed, but あながち is about truth or correctness, while まんざら is more about value and feelings. Only まんざら forms the set phrase まんざらでもない.
`,
    sentences: [
      s(
        "褒められて、彼は{まんざら}でもない様子だった。",
        "ほめられて、かれは{まんざら}でもないようすだった。",
        "He looked rather pleased at the praise.",
        {
          near: [
            [
              "あながち",
              'あながち〜ない is "not necessarily". The set phrase for "quietly pleased" is まんざらでもない.',
            ],
          ],
        },
      ),
      s(
        "彼の料理の腕も{まんざら}ではない。",
        "かれのりょうりのうでも{まんざら}ではない。",
        "His cooking isn't half bad.",
        {
          near: [
            [
              "ぜんぜん",
              'ぜんぜん〜ない is "not at all". For "not half bad", use まんざら.',
            ],
          ],
        },
      ),
      s(
        "田舎暮らしも{まんざら}悪くない。",
        "いなかぐらしも{まんざら}わるくない。",
        "Country life isn't so bad after all.",
        {
          near: [
            [
              "ぜんぜん",
              'ぜんぜん〜ない is "not at all". For "not so bad after all", use まんざら.',
            ],
          ],
        },
      ),
      s(
        "その話も{まんざら}嘘ではなさそうだ。",
        "そのはなしも{まんざら}うそではなさそうだ。",
        "That story doesn't seem to be entirely untrue.",
        {
          accept: ["あながち"],
          near: [
            [
              "まったく",
              'まったく〜ない is "not at all". For "not entirely", use まんざら.',
            ],
          ],
        },
      ),
      s(
        "デートに誘われて、{まんざら}でもない顔をしていた。",
        "デートにさそわれて、{まんざら}でもないかおをしていた。",
        "When she was asked on a date, she looked rather pleased.",
        {
          near: [
            [
              "あながち",
              'あながち〜ない is "not necessarily". The set phrase for "rather pleased" is まんざらでもない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-mohaya",
    title: "もはや",
    meaning: "already, no longer (it's past that point)",
    structure: "もはや + 〜だ / 〜ない",
    explanation: `
**もはや** says that things have passed a point of no return: もはや手遅れだ, "it's already too late".

With a positive, it means "has now become": スマホはもはや生活に欠かせない, "smartphones have become indispensable". With a negative, it means "no longer": 彼はもはや子どもではない, "he's no longer a child".

It's a written, dramatic version of もう. Where もう is neutral, もはや carries a sense that the change is complete and irreversible, often with resignation. もはやこれまでだ, "this is the end", is a classic line from period dramas.

Compare すでに, "already", which is neutral and factual, and いまだに, "still, even now", which is the opposite.
`,
    sentences: [
      s(
        "{もはや}手遅れだ。",
        "{もはや}ておくれだ。",
        "It's already too late.",
        {
          accept: ["もう", "すでに"],
          near: [
            [
              "いまだに",
              'いまだに is "still, even now". For "already (past that point)", use もはや.',
            ],
          ],
        },
      ),
      s(
        "スマホは{もはや}生活に欠かせない。",
        "スマホは{もはや}せいかつにかかせない。",
        "Smartphones have become indispensable to daily life.",
        {
          accept: ["もう"],
          near: [
            [
              "いまだに",
              'いまだに is "still, even now". For "has now become", use もはや.',
            ],
          ],
        },
      ),
      s(
        "こうなっては、{もはや}誰にも止められない。",
        "こうなっては、{もはや}だれにもとめられない。",
        "Now that it's come to this, no one can stop it any more.",
        {
          accept: ["もう"],
          near: [
            ["まだ", 'まだ is "still, yet". For "no longer", use もはや.'],
          ],
        },
      ),
      s(
        "彼は{もはや}子どもではない。",
        "かれは{もはや}こどもではない。",
        "He's no longer a child.",
        {
          accept: ["もう"],
          near: [["まだ", 'まだ is "still". For "no longer", use もはや.']],
        },
      ),
      s("{もはや}これまでだ。", "{もはや}これまでだ。", "This is the end.", {
        accept: ["もう"],
        near: [
          [
            "いまだに",
            'いまだに is "still, even now". For "this is the end", use もはや.',
          ],
        ],
      }),
    ],
  }),

  point({
    id: "n1-yomoya",
    title: "よもや",
    meaning: "surely not, I never imagined",
    structure: "よもや + 〜まい / 〜ないだろう / 〜とは思わなかった",
    related: ["n3-masaka", "n2-mai"],
    explanation: `
**よもや** strongly doubts that something could happen, or expresses shock that it did: よもや負けるとは思わなかった, "I never imagined we would lose".

It's a literary, more intense version of まさか (N3), and they're often interchangeable. The ending is negative or doubtful: まい, ないだろう, とは思わなかった, or とは alone for shock.

A common use is a pointed warning: よもや忘れてはいないだろうね, "you haven't forgotten, surely?". The speaker suspects the worst.

Compare もしや, "could it be…?", which suspects that something *is* true. よもや insists that it surely isn't.
`,
    sentences: [
      s(
        "{よもや}負けるとは思わなかった。",
        "{よもや}まけるとはおもわなかった。",
        "I never imagined we would lose.",
        {
          accept: ["まさか"],
          near: [
            [
              "もしや",
              'もしや is "could it be that…?". For "I never imagined", use よもや.',
            ],
          ],
        },
      ),
      s(
        "{よもや}彼が嘘をつくことはあるまい。",
        "{よもや}かれがうそをつくことはあるまい。",
        "Surely he wouldn't lie.",
        {
          accept: ["まさか"],
          near: [
            [
              "たぶん",
              'たぶん is a flat "probably". For "surely not", use よもや.',
            ],
          ],
        },
      ),
      s(
        "{よもや}こんな結果になるとは。",
        "{よもや}こんなけっかになるとは。",
        "Who'd have thought it would end like this?",
        {
          accept: ["まさか"],
          near: [
            [
              "もしや",
              'もしや is "could it be that…?". For shock at what happened, use よもや.',
            ],
          ],
        },
      ),
      s(
        "{よもや}約束を忘れてはいないだろうね。",
        "{よもや}やくそくをわすれてはいないだろうね。",
        "You haven't forgotten our promise, surely?",
        {
          accept: ["まさか"],
          near: [
            [
              "もしや",
              'もしや is "could it be that…?". For a pointed "surely not", use よもや.',
            ],
          ],
        },
      ),
      s(
        "{よもや}本気ではあるまい。",
        "{よもや}ほんきではあるまい。",
        "Surely he isn't serious.",
        {
          accept: ["まさか"],
          near: [
            [
              "たぶん",
              'たぶん is a flat "probably". For "surely not", use よもや.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-toutei",
    title: "到底〜ない",
    meaning: "by no means, utterly (impossible)",
    structure: "到底 + potential negative / 〜ない",
    related: ["n3-totemo-nai"],
    explanation: `
**到底** with a negative says that something is completely impossible, however you try: 一日でこの量は到底終わらない, "there's no way I can finish this much in a day".

It usually comes with a potential negative (できない, 信じられない, 払えない, 理解できない) or a verb of reaching, like 及ばない ("can't match") or かなわない ("no match for").

It's the formal equivalent of とても〜ない (N3). 全然 is casual and less about ability, so it sounds out of place in formal writing.

The kanji mean "reach the bottom": however deep you go, it won't happen. Don't use it with a positive verb.
`,
    sentences: [
      s(
        "一日でこの量は{到底}終わらない。",
        "いちにちでこのりょうは{とうてい}おわらない。",
        "There's no way I can finish this much in a day.",
        {
          accept: ["とても"],
          near: [
            [
              "全然",
              '全然 works casually. For "utterly impossible", this point practises 到底.',
              "ぜんぜん",
            ],
          ],
        },
      ),
      s(
        "彼の説明には{到底}納得できない。",
        "かれのせつめいには{とうてい}なっとくできない。",
        "I can't possibly accept his explanation.",
        {
          accept: ["とても"],
          near: [
            [
              "全然",
              '全然 works casually. For "can\'t possibly", this point practises 到底.',
              "ぜんぜん",
            ],
          ],
        },
      ),
      s(
        "そんな大金は{到底}払えない。",
        "そんなたいきんは{とうてい}はらえない。",
        "I could never pay that kind of money.",
        {
          accept: ["とても"],
          near: [
            [
              "少し",
              '少し is "a little". For "could never", use 到底.',
              "すこし",
            ],
          ],
        },
      ),
      s(
        "彼女の才能には{到底}かなわない。",
        "かのじょのさいのうには{とうてい}かなわない。",
        "I'm no match at all for her talent.",
        {
          accept: ["とても"],
          near: [
            [
              "全然",
              '全然 works casually. For "no match at all", this point practises 到底.',
              "ぜんぜん",
            ],
          ],
        },
      ),
      s(
        "{到底}信じられない話だ。",
        "{とうてい}しんじられないはなしだ。",
        "It's an utterly unbelievable story.",
        {
          accept: ["とても"],
          near: [
            [
              "全然",
              '全然 works casually. For "utterly", this point practises 到底.',
              "ぜんぜん",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nanra",
    title: "何ら〜ない",
    meaning: "no … whatsoever, not in the least",
    structure: "何ら + (Noun) + negative",
    explanation: `
**何ら** (なんら) is a formal "not at all", used with a negative: 二つの事件には何ら関係がない, "the two incidents have no connection whatsoever".

It usually comes before a noun, as in 何ら問題はない ("no problem at all"), 何ら関係がない or 何ら説明がない. It can also come before a verb: 何ら変わらない, "hasn't changed in the least".

It's common in official statements, news, legal writing and formal denials: 私は何らやましいことはしていない, "I have done nothing wrong whatsoever".

In conversation, you'd say 何も, 全然 or 少しも. Note that 何ら goes directly before the noun, while 何も usually comes after the object: 関係は何もない.
`,
    sentences: [
      s(
        "二つの事件には{何ら}関係がない。",
        "ふたつのじけんには{なんら}かんけいがない。",
        "The two incidents have no connection whatsoever.",
        {
          near: [
            [
              "何も",
              '何も is the everyday "nothing". Before a noun in formal speech, use 何ら.',
              "なにも",
            ],
          ],
        },
      ),
      s(
        "私は{何ら}やましいことはしていない。",
        "わたしは{なんら}やましいことはしていない。",
        "I have done nothing wrong whatsoever.",
        {
          near: [
            [
              "何か",
              '何か is "something". For "nothing whatsoever", use 何ら.',
              "なにか",
            ],
          ],
        },
      ),
      s(
        "この方法には{何ら}問題はない。",
        "このほうほうには{なんら}もんだいはない。",
        "There's no problem at all with this method.",
        {
          near: [
            [
              "何も",
              '何も is the everyday "nothing". Before a noun in formal speech, use 何ら.',
              "なにも",
            ],
          ],
        },
      ),
      s(
        "会社側からは{何ら}説明がなかった。",
        "かいしゃがわからは{なんら}せつめいがなかった。",
        "The company offered no explanation whatsoever.",
        {
          near: [
            [
              "何も",
              '何も is the everyday "nothing". Before a noun in formal speech, use 何ら.',
              "なにも",
            ],
          ],
        },
      ),
      s(
        "彼の態度は以前と{何ら}変わらない。",
        "かれのたいどはいぜんと{なんら}かわらない。",
        "His attitude hasn't changed in the least.",
        {
          accept: ["少しも", "全く"],
          near: [
            [
              "何か",
              '何か is "something". For "not in the least", use 何ら.',
              "なにか",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ichigai-ni",
    title: "一概に〜ない",
    meaning: "you can't generalise, not across the board",
    structure: "一概に + 〜とは言えない / 〜できない",
    related: ["n3-to-wa-kagiranai"],
    explanation: `
**一概に** with a negative says that you can't make a sweeping, one-size-fits-all statement: どちらが正しいとは一概に言えない, "you can't simply say which one is right".

The ending is nearly always 言えない, 言い切れない, 決めつけられない or 否定できない. It's a careful, balanced expression, typical of essays, interviews and discussions of complex topics.

It's close to 必ずしも〜ない ("not necessarily"). The difference is focus: 一概に is about generalising, while 必ずしも is about whether something is always true.

Don't confuse it with 一気に, "in one go", or 一緒に, "together". The kanji mean "one" and "general outline", so it's literally "in one broad stroke".
`,
    sentences: [
      s(
        "どちらが正しいとは{一概に}言えない。",
        "どちらがただしいとは{いちがいに}いえない。",
        "You can't simply say which one is right.",
        {
          near: [
            [
              "一気に",
              '一気に is "in one go". For "can\'t generalise", use 一概に.',
              "いっきに",
            ],
          ],
        },
      ),
      s(
        "若者が本を読まないとは{一概に}言えない。",
        "わかものがほんをよまないとは{いちがいに}いえない。",
        "You can't say across the board that young people don't read.",
        {
          accept: ["必ずしも"],
          near: [
            [
              "一気に",
              '一気に is "in one go". For "across the board", use 一概に.',
              "いっきに",
            ],
          ],
        },
      ),
      s(
        "安いものが悪いとは{一概に}決めつけられない。",
        "やすいものがわるいとは{いちがいに}きめつけられない。",
        "You can't just assume cheap things are bad.",
        {
          near: [
            [
              "一緒に",
              '一緒に is "together". For "can\'t generalise", use 一概に.',
              "いっしょに",
            ],
          ],
        },
      ),
      s(
        "原因がこれだとは{一概に}言い切れない。",
        "げんいんがこれだとは{いちがいに}いいきれない。",
        "You can't state flatly that this is the cause.",
        {
          accept: ["必ずしも"],
          near: [
            [
              "一気に",
              '一気に is "in one go". For "can\'t state flatly", use 一概に.',
              "いっきに",
            ],
          ],
        },
      ),
      s(
        "田舎と都会のどちらが住みやすいかは、{一概に}は言えない。",
        "いなかととかいのどちらがすみやすいかは、{いちがいに}はいえない。",
        "Whether the country or the city is easier to live in is hard to say in general.",
        {
          near: [
            [
              "一緒に",
              '一緒に is "together". For "in general", use 一概に.',
              "いっしょに",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tomosureba",
    title: "ともすれば・ともすると",
    meaning: "apt to, liable to (if you're not careful)",
    structure: "ともすれば / ともすると + 〜がちだ / 〜やすい / 〜しまう",
    related: ["n1-tokaku", "n3-gachi"],
    explanation: `
**ともすれば** and **ともすると** mean "if you're not careful, things tend to go this way": 忙しいと、ともすれば家族のことを忘れがちだ, "when you're busy, you're apt to forget your family".

The ending usually shows a tendency: がちだ, やすい, or 〜てしまう. The result is undesirable, and the phrase carries a gentle warning.

It's close to とかく ("all too often"), which is a more general, reflective observation. ともすれば stresses that it happens easily, given the chance.

Don't confuse it with もしかすると, "perhaps", which is a guess, not a tendency. Both come from する, but ともすると means "at the slightest opportunity".
`,
    sentences: [
      s(
        "忙しいと、{ともすれば}家族のことを忘れがちだ。",
        "いそがしいと、{ともすれば}かぞくのことをわすれがちだ。",
        "When you're busy, you're apt to forget about your family.",
        {
          accept: ["ともすると", "とかく"],
          near: [
            [
              "もしかすると",
              'もしかすると is "perhaps". For "apt to", use ともすれば.',
            ],
          ],
        },
      ),
      s(
        "一人暮らしだと、{ともすれば}食事が偏りがちになる。",
        "ひとりぐらしだと、{ともすれば}しょくじがかたよりがちになる。",
        "Living alone, your diet is liable to become unbalanced.",
        {
          accept: ["ともすると", "とかく"],
          near: [
            [
              "もしかすると",
              'もしかすると is "perhaps". For "liable to", use ともすれば.',
            ],
          ],
        },
      ),
      s(
        "私たちは{ともすると}楽な方を選んでしまう。",
        "わたしたちは{ともすると}らくなほうをえらんでしまう。",
        "We're all too apt to choose the easy option.",
        {
          accept: ["ともすれば", "とかく"],
          near: [
            [
              "もしかすると",
              'もしかすると is "perhaps". For "apt to", use ともすると.',
            ],
          ],
        },
      ),
      s(
        "冬は{ともすれば}運動不足になりやすい。",
        "ふゆは{ともすれば}うんどうぶそくになりやすい。",
        "In winter, it's easy to end up not getting enough exercise.",
        {
          accept: ["ともすると", "とかく"],
          near: [
            [
              "たまに",
              'たまに is "occasionally". For "apt to", use ともすれば.',
            ],
          ],
        },
      ),
      s(
        "成功すると、人は{ともすれば}謙虚さを忘れてしまう。",
        "せいこうすると、ひとは{ともすれば}けんきょさをわすれてしまう。",
        "When people succeed, they're apt to forget humility.",
        {
          accept: ["ともすると", "とかく"],
          near: [
            [
              "もしかすると",
              'もしかすると is "perhaps". For "apt to", use ともすれば.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kare-kare",
    title: "〜かれ〜かれ",
    meaning: "whether X or Y (遅かれ早かれ, 多かれ少なかれ, 良かれ悪しかれ)",
    structure: "い-adj stem + かれ + opposite stem + かれ",
    explanation: `
**〜かれ〜かれ** pairs two opposite い-adjectives to mean "whether X or Y, either way". It survives in a handful of fixed phrases:
- **遅かれ早かれ**: sooner or later. 遅かれ早かれ、真実は明らかになる, "sooner or later, the truth will come out".
- **多かれ少なかれ**: to a greater or lesser extent. 誰でも多かれ少なかれ悩みがある.
- **良かれ悪しかれ** (よかれあしかれ): for better or worse.

The かれ is a classical imperative-concessive ending ("be it X"), so you can't make new pairs freely. Learn them as vocabulary.

Note that English says "sooner or later", but Japanese usually puts 遅かれ first. 良かれと思って is a separate phrase meaning "meaning well".
`,
    sentences: [
      s(
        "{遅かれ早かれ}、真実は明らかになる。",
        "{おそかれはやかれ}、しんじつはあきらかになる。",
        "Sooner or later, the truth will come out.",
        {
          accept: ["早かれ遅かれ"],
          near: [
            [
              "いずれ",
              "いずれ works in meaning. This point practises the set phrase 遅かれ早かれ.",
            ],
          ],
        },
      ),
      s(
        "人は{多かれ少なかれ}悩みを抱えている。",
        "ひとは{おおかれすくなかれ}なやみをかかえている。",
        "Everyone has worries, to a greater or lesser extent.",
        {
          near: [
            [
              "多少",
              '多少 is "somewhat". For "to a greater or lesser extent", use 多かれ少なかれ.',
              "たしょう",
            ],
          ],
        },
      ),
      s(
        "{良かれ悪しかれ}、彼は町の有名人だ。",
        "{よかれあしかれ}、かれはまちのゆうめいじんだ。",
        "For better or worse, he's famous around town.",
        {
          near: [
            [
              "とにかく",
              'とにかく is "anyway". For "for better or worse", use 良かれ悪しかれ.',
            ],
          ],
        },
      ),
      s(
        "{遅かれ早かれ}、彼もそのことに気づくだろう。",
        "{おそかれはやかれ}、かれもそのことにきづくだろう。",
        "He'll realise it too, sooner or later.",
        {
          accept: ["早かれ遅かれ"],
          near: [
            [
              "いずれ",
              "いずれ works in meaning. This point practises the set phrase 遅かれ早かれ.",
            ],
          ],
        },
      ),
      s(
        "誰でも{多かれ少なかれ}嘘をつくものだ。",
        "だれでも{おおかれすくなかれ}うそをつくものだ。",
        "Everyone lies to some extent.",
        {
          near: [
            [
              "多少",
              '多少 is "somewhat". For "to a greater or lesser extent", use 多かれ少なかれ.',
              "たしょう",
            ],
          ],
        },
      ),
    ],
  }),
];
