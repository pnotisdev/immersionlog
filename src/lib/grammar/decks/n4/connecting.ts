import { point, s, word } from "../../build";

/** Reasons, contrasts, timing, amounts, and the small words that shade a sentence. */

export const connecting = [
  point({
    id: "n4-node",
    title: "〜ので",
    meaning: "because, so (softer, explanatory)",
    structure: "Plain form + ので · Noun / な-adj + なので",
    related: ["n5-kara-because", "n4-noni", "n4-te-reason"],
    explanation: `
**ので** gives a reason, like から: 雨が降っているので、出かけません, "it's raining, so I'm not going out".

The difference is tone. から puts your reason forward as your reason. ので presents it as a plain fact that leads naturally to the result, which sounds softer and more polite. That makes ので the usual choice for excuses and requests: 熱があるので、休ませてください.

Nouns and な-adjectives take な before it: 休みなので, 静かなので.

In polite speech you'll also hear ですので and ますので. Among friends, it often shrinks to んで: 雨なんで.
`,
    sentences: [
      s("雨が降っている{ので}、今日は出かけません。", "あめがふっている{ので}、きょうはでかけません。", "It's raining, so I'm not going out today.", {
        near: [["から", "から works too, and sounds more direct. This point practises ので."]],
      }),
      s("熱がある{ので}、休ませてください。", "ねつがある{ので}、やすませてください。", "I have a fever, so please let me take the day off.", {
        near: [["から", "から works, but for an excuse to a boss ので sounds softer."]],
      }),
      s("明日は休み{なので}、ゆっくり寝ます。", "あしたはやすみ{なので}、ゆっくりねます。", "Tomorrow's my day off, so I'll sleep in.", {
        near: [
          ["ので", "After a noun, add な: 休みなので."],
          ["だので", "After a noun, it's なので, not だので."],
        ],
      }),
      s("道が込んでいた{ので}、遅くなりました。", "みちがこんでいた{ので}、おそくなりました。", "The roads were busy, so I'm late.", {
        near: [["のに", "のに is \"even though\". For a reason, use ので."]],
      }),
      s("この辺は静か{なので}、よく眠れます。", "このへんはしずか{なので}、よくねむれます。", "It's quiet around here, so I sleep well.", {
        near: [["ので", "After a な-adjective, add な: 静かなので."]],
      }),
    ],
  }),

  point({
    id: "n4-noni",
    title: "〜のに",
    meaning: "even though, and yet (frustration)",
    structure: "Plain form + のに · Noun / な-adj + なのに",
    related: ["n4-node", "n4-temo", "n5-kedo"],
    explanation: `
**のに** means "even though" or "and yet", with feeling: 薬を飲んだのに、熱が下がらない, "I took the medicine, and my fever still won't go down".

It's the shape of ので, but the result goes against what you'd expect, and the speaker is usually surprised, disappointed or annoyed. けど is a neutral "but"; のに complains.

Nouns and な-adjectives take な: 日曜日なのに, "even though it's Sunday".

Said at the end of a sentence, it's pure regret: 言ってくれればよかったのに, "you could have told me". And don't mix it up with のに meaning "for (doing)", which comes a few points on.
`,
    sentences: [
      s("薬を飲んだ{のに}、まだ熱が下がりません。", "くすりをのんだ{のに}、まだねつがさがりません。", "I took the medicine, but my fever still hasn't gone down.", {
        near: [["けど", "けど is a neutral \"but\". For frustration (\"even though\"), use のに."]],
      }),
      s("約束した{のに}、彼は来なかった。", "やくそくした{のに}、かれはこなかった。", "He promised, and yet he didn't come.", {
        near: [["ので", "ので gives a reason. For \"and yet\", use のに."]],
      }),
      s("日曜日{なのに}、仕事に行かなければならない。", "にちようび{なのに}、しごとにいかなければならない。", "It's Sunday, and I still have to go to work.", {
        near: [["のに", "After a noun, add な: 日曜日なのに."]],
      }),
      s("一生懸命勉強した{のに}、試験に落ちた。", "いっしょうけんめいべんきょうした{のに}、しけんにおちた。", "I studied so hard, and I still failed the exam.", {
        near: [["けど", "けど is a neutral \"but\". For your disappointment, use のに."]],
      }),
      s("高かった{のに}、全然おいしくなかった。", "たかかった{のに}、ぜんぜんおいしくなかった。", "It was expensive, and it wasn't even good.", {
        near: [["から", "から gives a reason. For \"and yet\", use のに."]],
      }),
    ],
  }),

  point({
    id: "n4-shi",
    title: "〜し",
    meaning: "and what's more, and besides",
    structure: "Plain form + し, (plain form + し,) …",
    related: ["n5-adj-te", "n4-node"],
    explanation: `
**し** after a plain form lists reasons or points that pile up: この店は安いし、おいしいし、いつも込んでいます, "this place is cheap, it's good, and it's always packed".

It often implies a conclusion: 今日は雨だし、寒いし、家にいよう, "it's raining and it's cold, so let's stay in". Even a single し suggests "among other reasons": お金もないし, "I've got no money, for one thing".

Nouns and な-adjectives keep だ: 雨だし, 静かだし.

The て-form also lists (安くておいしい), but neutrally. し adds the sense of building a case, the way English piles up "and besides".
`,
    sentences: [
      s("この店は安い{し}、おいしいし、いつも込んでいます。", "このみせはやすい{し}、おいしいし、いつもこんでいます。", "This place is cheap, it's good, and it's always packed.", {
        near: [["くて", "安くて lists them plainly. For piling up reasons, use し."]],
      }),
      s("今日は雨だ{し}、寒いし、家にいよう。", "きょうはあめだ{し}、さむいし、いえにいよう。", "It's raining and it's cold, so let's stay in.", {
        near: [["から", "から gives one reason. For stacking up several, use し."]],
      }),
      s("田中さんは優しい{し}、頭もいい。", "たなかさんはやさしい{し}、あたまもいい。", "Tanaka's kind, and clever too.", {
        near: [["くて", "優しくて lists them plainly. To pile up his good points, use し."]],
      }),
      s("お金もない{し}、今年は旅行に行きません。", "おかねもない{し}、ことしはりょこうにいきません。", "I've got no money, for one thing, so no trip this year.", {
        near: [["から", "から gives the reason flatly. し suggests it's one of several."]],
      }),
      s("駅から近い{し}、この部屋にします。", "えきからちかい{し}、このへやにします。", "It's close to the station and all, so I'll take this room.", {
        near: [["ので", "ので gives one reason. し suggests there are others too."]],
      }),
    ],
  }),

  point({
    id: "n4-made-ni",
    title: "〜までに",
    meaning: "by (a deadline)",
    structure: "Time / Verb dictionary form + までに",
    related: ["n5-kara-made"],
    explanation: `
**までに** sets a deadline: 金曜日までにレポートを出してください, "please hand in the report by Friday". The action happens once, at some point before the limit.

Compare まで, "until", where the action continues the whole time: 金曜日まで休みます, "I'm off until Friday".

A quick test: if English says "by", it's までに; if it says "until" or "till", it's まで.

It works after verbs too: 夏休みが終わるまでに, "before the summer holidays end". And 何時までに asks for a deadline: 何時までに来ればいいですか, "by what time should I come?" Shop signs and forms use it all the time.
`,
    sentences: [
      s("金曜日{までに}レポートを出してください。", "きんようび{までに}レポートをだしてください。", "Please hand in the report by Friday.", {
        near: [["まで", "まで is \"until\" (doing it the whole time). For a deadline, use までに."]],
      }),
      s("五時{までに}帰ります。", "ごじ{までに}かえります。", "I'll be back by five.", {
        near: [["まで", "まで帰ります doesn't work. For \"back by five\", use までに."]],
      }),
      s("夏休みが終わる{までに}、この本を読みたい。", "なつやすみがおわる{までに}、このほんをよみたい。", "I want to read this book before the summer holidays end.", {
        near: [["まで", "まで would be reading it the whole time until then. To finish before then, use までに."]],
      }),
      s("明日の朝{までに}返事をください。", "あしたのあさ{までに}へんじをください。", "Please reply by tomorrow morning.", {
        near: [["まで", "まで is \"until\". For a deadline, use までに."]],
      }),
      s("何時{までに}来ればいいですか。", "なんじ{までに}くればいいですか。", "By what time should I come?", {
        near: [["まで", "何時まで asks how long. For \"by what time\", use までに."]],
      }),
    ],
  }),

  point({
    id: "n4-aida",
    title: "〜間・〜間に",
    meaning: "during, while (the whole time / at some point)",
    structure: "Verb (ている) / Noun の + 間 / 間に",
    related: ["n4-uchi-ni", "n5-nagara"],
    explanation: `
**間** (あいだ) means "during" or "while", and the particle after it changes the meaning:

- **間** alone: the whole time. 夏休みの間、国に帰っていた, "I was back home for the entire summer holidays".
- **間に**: at some point during it. 母が買い物をしている間に、部屋を掃除した, "while my mother was out shopping, I cleaned the room".

Nouns take の (授業の間); verbs are usually in the ている form or plain (寝ている間に, 日本にいる間に).

Compare ながら, where one person does two things at once. With 間, the two parts can be done by different people: 私が寝ている間に雪が降った, "it snowed while I was asleep".
`,
    sentences: [
      s("夏休みの{間}、ずっと国に帰っていました。", "なつやすみの{あいだ}、ずっとくににかえっていました。", "I was back home for the whole summer holidays.", {
        near: [["間に", "間に is \"at some point during\". For the whole time, just 間."]],
      }),
      s("母が買い物をしている{間に}、部屋を掃除しました。", "ははがかいものをしている{あいだに}、へやをそうじしました。", "While my mother was out shopping, I cleaned the room.", {
        near: [["間", "間 alone is \"the whole time\". For something done at some point during it, use 間に."]],
      }),
      s("授業の{間}、ずっと寝ていた。", "じゅぎょうの{あいだ}、ずっとねていた。", "I slept through the whole class.", {
        near: [["間に", "間に is \"at some point during\". With ずっと, the whole time, just 間."]],
      }),
      s("日本にいる{間に}、富士山に登りたい。", "にほんにいる{あいだに}、ふじさんにのぼりたい。", "I want to climb Mount Fuji while I'm in Japan.", {
        near: [["間", "間 alone is \"the whole time\". Climbing happens at some point during your stay: 間に."]],
      }),
      s("私が寝ている{間に}、雪が降った。", "わたしがねている{あいだに}、ゆきがふった。", "It snowed while I was asleep.", {
        near: [["ながら", "ながら is one person doing two things. For something else happening meanwhile, use 間に."]],
      }),
    ],
  }),

  point({
    id: "n4-uchi-ni",
    title: "〜うちに",
    meaning: "while (still), before (it changes)",
    structure: "Verb / い-adj / Noun の + うちに · Verb ない-form + うちに",
    related: ["n4-aida", "n5-mae-ni"],
    explanation: `
**うちに** means "while it's still…", doing something before a situation changes: 温かいうちに食べてください, "please eat it while it's hot"; 若いうちに旅行したい, "I want to travel while I'm young".

With a negative it means "before": 雨が降らないうちに帰ろう, "let's go home before it rains" (literally "while it's not raining yet"). 忘れないうちに, "before I forget", is a common one.

Compare 間に, which is simply "during a period". うちに carries a sense of urgency: the chance won't last.

Nouns take の: 学生のうちに, "while you're still a student".
`,
    sentences: [
      s("温かい{うちに}食べてください。", "あたたかい{うちに}たべてください。", "Please eat it while it's hot.", {
        near: [["間に", "間に is for a set period. For \"while it's still…, before it changes\", use うちに."]],
      }),
      s("若い{うちに}、いろいろな国に行きたい。", "わかい{うちに}、いろいろなくににいきたい。", "I want to travel to lots of countries while I'm young.", {
        near: [["時", "時 is just \"when\". For \"while you still can\", use うちに."]],
      }),
      s("雨が降らない{うちに}、帰りましょう。", "あめがふらない{うちに}、かえりましょう。", "Let's go home before it starts raining.", {
        near: [["前に", "降る前に works too. This point practises ないうちに."]],
      }),
      s("忘れない{うちに}、メモしておきます。", "わすれない{うちに}、メモしておきます。", "I'll write it down before I forget.", {
        near: [["ように", "ように is \"so that\". For \"before I forget\", use ないうちに."]],
      }),
      s("明るい{うちに}、駅に着きたい。", "あかるい{うちに}、えきにつきたい。", "I want to get to the station while it's still light.", {
        near: [["間に", "間に is for a set period. For \"while it's still light\", use うちに."]],
      }),
    ],
  }),

  point({
    id: "n4-bakari",
    title: "〜ばかり",
    meaning: "nothing but, only (too much)",
    structure: "Noun + ばかり · Verb て-form + ばかりいる",
    related: ["n4-ta-bakari", "n5-dake"],
    explanation: `
**ばかり** after a noun means "nothing but": 弟はゲームばかりしています, "my little brother does nothing but play games". Compared with だけ ("only", neutral), ばかり suggests there's too much of it, and often complains.

After a て-form, with いる, it describes someone doing only one thing: 寝てばかりいないで、手伝って, "stop lying around and help".

Particles が and を usually disappear after ばかり; others go after it: 甘い物ばかり食べる.

It also appears after the た-form with a different meaning, "just did", which is covered in the next point of this deck.
`,
    sentences: [
      s("弟はゲーム{ばかり}しています。", "おとうとはゲーム{ばかり}しています。", "My little brother does nothing but play games.", {
        near: [["だけ", "だけ is a neutral \"only\". For \"nothing but (too much)\", use ばかり."]],
      }),
      s("毎日雨{ばかり}ですね。", "まいにちあめ{ばかり}ですね。", "It's nothing but rain every day.", {
        near: [["だけ", "だけ is a neutral \"only\". To complain about all the rain, use ばかり."]],
      }),
      s("甘い物{ばかり}食べてはいけません。", "あまいもの{ばかり}たべてはいけません。", "You shouldn't eat nothing but sweet things.", {
        near: [["しか", "しか needs a negative verb. For \"nothing but\", use ばかり."]],
      }),
      s("彼は文句{ばかり}言っている。", "かれはもんく{ばかり}いっている。", "He does nothing but complain.", {
        near: [["だけ", "だけ is a neutral \"only\". For \"nothing but\", use ばかり."]],
      }),
      s("寝て{ばかり}いないで、手伝って。", "ねて{ばかり}いないで、てつだって。", "Stop lying around and give me a hand.", {
        near: [["だけ", "寝てだけ isn't a phrase. For \"doing nothing but sleep\", use てばかり."]],
      }),
    ],
  }),

  point({
    id: "n4-ta-bakari",
    title: "〜たばかり",
    meaning: "have just (done)",
    structure: "Verb た-form + ばかり",
    related: ["n4-tokoro", "n4-bakari"],
    explanation: `
た-form + **ばかり** means something happened recently: 日本に来たばかりです, "I've only just arrived in Japan". It's how the speaker feels about the time: it could be minutes ago or months, as long as it feels recent.

That's the difference from たところ (next point), which is "just this moment", right now.

It often explains a situation: さっき食べたばかりなので、お腹がいっぱいです, "I've only just eaten, so I'm full". ばかり is a noun here, so it takes なので or です after it.

Compare ばかり after a noun, "nothing but", from the previous point.
`,
    sentences: [
      s("日本に{来たばかり}です。", "にほんに{きたばかり}です。", "I've only just arrived in Japan.", {
        hint: "来る",
        conj: { word: word("来る"), form: "past", tail: "ばかり", marker: "ばかり" },
        near: [["来たところ", "来たところ is \"just this moment\". For \"only recently\", use たばかり."]],
      }),
      s("さっきご飯を{食べたばかり}なので、お腹がいっぱいです。", "さっきごはんを{たべたばかり}なので、おなかがいっぱいです。", "I've only just eaten, so I'm full.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "past", tail: "ばかり", marker: "ばかり" },
        near: [["食べるばかり", "Use the た-form: 食べたばかり."]],
      }),
      s("この本は{買ったばかり}です。", "このほんは{かったばかり}です。", "I've only just bought this book.", {
        hint: "買う",
        conj: { word: word("買う"), form: "past", tail: "ばかり", marker: "ばかり" },
        near: [["買いました", "That's just \"I bought it\". To say it's new, use 買ったばかり."]],
      }),
      s("{起きたばかり}で、まだ眠い。", "{おきたばかり}で、まだねむい。", "I've only just got up and I'm still sleepy.", {
        hint: "起きる",
        conj: { word: word("起きる"), form: "past", tail: "ばかり", marker: "ばかり" },
        near: [["起きたところ", "That's \"just this moment\". Explaining why you're sleepy, use たばかり."]],
      }),
      s("先月{結婚したばかり}です。", "せんげつ{けっこんしたばかり}です。", "We only got married last month.", {
        hint: "結婚する",
        conj: { word: word("結婚する", "けっこんする", "irregular"), form: "past", tail: "ばかり", marker: "ばかり" },
        near: [["結婚したところ", "たところ is \"just this moment\", which doesn't fit last month. Use たばかり."]],
      }),
    ],
  }),

  point({
    id: "n4-tokoro",
    title: "〜ところ",
    meaning: "about to / in the middle of / just did",
    structure: "Dictionary form / ている form / た-form + ところ",
    related: ["n4-ta-bakari"],
    explanation: `
**ところ** means "place", and in time it pins down the exact point you're at. The verb form before it says which point:

- dictionary form: about to. これから出かけるところです, "I'm just about to head out".
- ている form: in the middle of. 今、晩ご飯を作っているところです, "I'm in the middle of making dinner".
- た-form: just finished. ちょうど今、駅に着いたところです, "I've just this moment got to the station".

It's very handy on the phone: 今、家を出るところ, "I'm just leaving".

たところ is "just this moment"; たばかり is "recently, as it feels to me".
`,
    sentences: [
      s("これから出かける{ところ}です。", "これからでかける{ところ}です。", "I'm just about to head out.", {
        near: [["ばかり", "ばかり after a dictionary form doesn't mean \"about to\". Use ところ."]],
      }),
      s("今、晩ご飯を作っている{ところ}です。", "いま、ばんごはんをつくっている{ところ}です。", "I'm in the middle of making dinner.", {
        near: [["ばかり", "ているばかり isn't \"in the middle of\". Use ところ."]],
      }),
      s("ちょうど今、駅に着いた{ところ}です。", "ちょうどいま、えきについた{ところ}です。", "I've just this moment got to the station.", {
        near: [["ばかり", "たばかり is \"recently\". For \"just this moment\", use たところ."]],
      }),
      s("今、家を出る{ところ}だから、少し待って。", "いま、いえをでる{ところ}だから、すこしまって。", "I'm just leaving the house, so hang on a bit.", {
        near: [["まえ", "出る前 is \"before leaving\". For \"just about to\", use ところ."]],
      }),
      s("ちょうど宿題が終わった{ところ}です。", "ちょうどしゅくだいがおわった{ところ}です。", "I've just finished my homework.", {
        near: [["ばかり", "With ちょうど (\"just now\"), use たところ."]],
      }),
    ],
  }),

  point({
    id: "n4-mama",
    title: "〜まま",
    meaning: "as it is, leaving (something) in a state",
    structure: "Verb た-form / ない form / Noun の / Adjective + まま",
    related: ["n5-nagara", "n4-te-oku"],
    explanation: `
**まま** means "as is", with something left unchanged: テレビをつけたまま寝てしまった, "I fell asleep with the TV on".

It usually follows a た-form, describing the state something was left in: 靴を履いたまま, "with your shoes on"; 窓を開けたまま, "with the window open". Often it's a state that shouldn't have stayed that way.

After nouns it takes の: 昔のまま, "just as it used to be". このまま (like this, as it is) and そのまま (as it is, just like that) are everyday words: このままでいいです, "it's fine as it is".

Compare ながら, which is doing two things at once. まま is one state carrying on while something else happens.
`,
    sentences: [
      s("テレビをつけた{まま}寝てしまった。", "テレビをつけた{まま}ねてしまった。", "I fell asleep with the TV on.", {
        near: [["ながら", "ながら is doing two things at once. For leaving the TV on, use まま."]],
      }),
      s("靴を履いた{まま}、部屋に入らないでください。", "くつをはいた{まま}、へやにはいらないでください。", "Please don't come into the room with your shoes on.", {
        near: [["ながら", "ながら is doing two things at once. For keeping your shoes on, use まま."]],
      }),
      s("窓を開けた{まま}出かけてしまった。", "まどをあけた{まま}でかけてしまった。", "I went out and left the window open.", {
        near: [["て", "開けて出かけた is just \"opened it and went out\". For leaving it open, use まま."]],
      }),
      s("この{まま}でいいです。", "この{まま}でいいです。", "It's fine as it is.", {
        near: [["よう", "このようでいい isn't a phrase. For \"as it is\", use このまま."]],
      }),
      s("この町は昔の{まま}ですね。", "このまちはむかしの{まま}ですね。", "This town is just the way it used to be.", {
        near: [["よう", "昔のよう is \"like the old days\". For \"unchanged\", use 昔のまま."]],
      }),
    ],
  }),

  point({
    id: "n4-mo-number",
    title: "Number + も",
    meaning: "as many as, a whole … (emphasis)",
    structure: "Number + counter + も",
    related: ["n5-mo", "n4-zutsu"],
    explanation: `
**も** after a number stresses that it's a lot, more than expected: 駅で一時間も待ちました, "I waited at the station for a whole hour"; このかばんは十万円もした, "this bag cost as much as 100,000 yen".

It's the same も as "also", stretched: "even as much as".

The opposite feeling, "only", is しか with a negative (一時間しかない) or だけ.

With a negative verb, a number with も means "not even": 一人も来なかった, "not a single person came"; 一度も行ったことがない, "I've never been, not even once". Either way, the も adds emphasis.
`,
    sentences: [
      s("駅で一時間{も}待ちました。", "えきでいちじかん{も}まちました。", "I waited at the station for a whole hour.", {
        near: [["だけ", "だけ would be \"only an hour\". To stress how long it was, use も."]],
      }),
      s("このかばんは十万円{も}しました。", "このかばんはじゅうまんえん{も}しました。", "This bag cost a whole 100,000 yen.", {
        near: [["ぐらい", "ぐらい is \"about\". To stress how expensive it was, use も."]],
      }),
      s("昨日はビールを五杯{も}飲んだ。", "きのうはビールをごはい{も}のんだ。", "I drank five whole beers last night.", {
        near: [["だけ", "だけ would be \"only five\". To stress how many, use も."]],
      }),
      s("毎日十時間{も}働いています。", "まいにちじゅうじかん{も}はたらいています。", "I'm working a whole ten hours a day.", {
        near: [["しか", "しか needs a negative and means \"only\". To stress how long, use も."]],
      }),
      s("三回{も}電話したのに、出なかった。", "さんかい{も}でんわしたのに、でなかった。", "I called three times, and you still didn't pick up.", {
        near: [["だけ", "だけ would be \"only three times\". To stress how many, use も."]],
      }),
    ],
  }),

  point({
    id: "n4-zutsu",
    title: "〜ずつ",
    meaning: "each, at a time",
    structure: "Number + counter + ずつ / 少しずつ",
    related: ["n4-mo-number"],
    explanation: `
**ずつ** after a number means "each" or "at a time": 一人二つずつ取ってください, "please take two each"; 一つずつ説明します, "I'll explain them one at a time".

It shares out an amount evenly (みんなに千円ずつ, "1,000 yen each to everyone") or spreads it over time (一日三十分ずつ, "thirty minutes a day").

少しずつ, "little by little, a bit at a time", is one of the most useful phrases in the language, and exactly how Japanese is learned: 毎日少しずつ.

ずつ never goes on its own; there's always a number or an amount before it.
`,
    sentences: [
      s("一人二つ{ずつ}取ってください。", "ひとりふたつ{ずつ}とってください。", "Please take two each.", {
        near: [["だけ", "だけ is \"only two\". For \"two each\", use ずつ."]],
      }),
      s("毎日少し{ずつ}日本語を勉強しています。", "まいにちすこし{ずつ}にほんごをべんきょうしています。", "I'm learning Japanese a little at a time every day.", {
        near: [["だけ", "少しだけ is \"just a little\". For \"little by little\", use 少しずつ."]],
      }),
      s("一つ{ずつ}説明します。", "ひとつ{ずつ}せつめいします。", "I'll explain them one at a time.", {
        near: [["だけ", "一つだけ is \"only one\". For \"one at a time\", use ずつ."]],
      }),
      s("みんなに千円{ずつ}あげました。", "みんなにせんえん{ずつ}あげました。", "I gave everyone 1,000 yen each.", {
        near: [["も", "千円も is \"a whole 1,000 yen\". For \"each\", use ずつ."]],
      }),
      s("一日に三十分{ずつ}歩いています。", "いちにちにさんじゅっぷん{ずつ}あるいています。", "I walk thirty minutes each day.", {
        near: [["ぐらい", "ぐらい is \"about\". For a set amount each day, use ずつ."]],
      }),
    ],
  }),

  point({
    id: "n4-garu",
    title: "〜がる",
    meaning: "(someone else) shows signs of feeling",
    structure: "Feeling adjective − い + がる · 〜たい → 〜たがる · ほしい → ほしがる",
    related: ["n5-ga-hoshii", "n5-tai"],
    explanation: `
Japanese treats feelings as private: you can say 私は怖い, "I'm scared", but not flatly that someone else is. For other people, add **がる** to the adjective, "show signs of": 子どもが注射を怖がった, "the child was scared of the injection".

- い-adjectives: drop い: 怖い → 怖がる, 暑い → 暑がる
- たい → たがる: 妹は日本に行きたがっています, "my sister wants to go to Japan"
- ほしい → ほしがる: 弟は新しいゲームをほしがっている

がる verbs are godan and usually appear as がっている. The thing felt about takes を, not が.
`,
    sentences: [
      s("弟は新しいゲームを{ほしがっています}。", "おとうとはあたらしいゲームを{ほしがっています}。", "My little brother wants the new game.", {
        near: [["ほしいです", "ほしい is for your own wants. For someone else's, use ほしがっています."]],
      }),
      s("子どもが注射を{怖がって}泣いた。", "こどもがちゅうしゃを{こわがって}ないた。", "The child was scared of the injection and cried.", {
        near: [["怖くて", "怖くて is how you feel. For what you saw in the child, use 怖がって."]],
      }),
      s("妹は日本に{行きたがっています}。", "いもうとはにほんに{いきたがっています}。", "My little sister wants to go to Japan.", {
        hint: "行く, she wants to",
        conj: { word: word("行く"), form: "tai", cut: "い", tail: "がっています", marker: "がっています" },
        near: [["行きたいです", "たい is for your own wants. For someone else's, use たがっています."]],
      }),
      s("犬が散歩に{行きたがっている}。", "いぬがさんぽに{いきたがっている}。", "The dog wants to go for a walk.", {
        hint: "行く, it wants to",
        conj: { word: word("行く"), form: "tai", cut: "い", tail: "がっている", marker: "がっている" },
        near: [["行きたい", "たい is for your own wants. For the dog's, use たがっている."]],
      }),
      s("彼は寒い日もいつも{暑がって}いる。", "かれはさむいひもいつも{あつがって}いる。", "He's always saying he's hot, even on cold days.", {
        near: [["暑くて", "暑くて is how you feel. For how he acts, use 暑がって."]],
      }),
    ],
  }),

  point({
    id: "n4-sa",
    title: "〜さ",
    meaning: "-ness (adjective as noun)",
    structure: "い-adj − い + さ · な-adj + さ",
    related: ["n5-i-adjectives", "n4-koto-nominalizer"],
    explanation: `
Add **さ** to an adjective's stem and it becomes a noun of degree: 高い → 高さ, "height"; 暑い → 暑さ, "the heat"; 優しい → 優しさ, "kindness". な-adjectives work too: 静か → 静かさ, 便利 → 便利さ.

It's how Japanese talks about measurements (この山の高さ, "the height of this mountain"; 箱の重さ, "the weight of the box") and qualities (彼の優しさ, "his kindness").

いい becomes よさ: このホテルのよさ, "what's good about this hotel".

A few adjectives have a second noun form with み, for a felt quality (楽しみ, "something to look forward to"; 痛み, "pain"), but さ works for almost every adjective.
`,
    sentences: [
      s("この山の{高さ}は三千メートルです。", "このやまの{たかさ}はさんぜんメートルです。", "This mountain is 3,000 metres high.", {
        hint: "高い",
        near: [["高い", "高い is the adjective. Before は, as a noun, use 高さ."]],
      }),
      s("日本の夏の{暑さ}に驚きました。", "にほんのなつの{あつさ}におどろきました。", "I was surprised by how hot Japanese summers are.", {
        hint: "暑い",
        near: [["暑い", "暑い is the adjective. As a noun (\"the heat\"), use 暑さ."]],
      }),
      s("この箱の{重さ}はどのくらいですか。", "このはこの{おもさ}はどのくらいですか。", "How heavy is this box?", {
        hint: "重い",
        near: [["重い", "重い is the adjective. As a noun (\"the weight\"), use 重さ."]],
      }),
      s("彼の{優しさ}が好きです。", "かれの{やさしさ}がすきです。", "I love his kindness.", {
        hint: "優しい",
        near: [["優しい", "優しい is the adjective. After の, as a noun, use 優しさ."]],
      }),
      s("富士山の{美しさ}は言葉で説明できない。", "ふじさんの{うつくしさ}はことばでせつめいできない。", "Words can't describe how beautiful Mount Fuji is.", {
        hint: "美しい",
        near: [["美しい", "美しい is the adjective. As a noun (\"the beauty\"), use 美しさ."]],
      }),
    ],
  }),

  point({
    id: "n4-koto-nominalizer",
    title: "〜こと",
    meaning: "(doing), the fact that",
    structure: "Plain form + こと",
    related: ["n5-verb-no", "n4-koto-ga-dekiru", "n4-no-wa"],
    explanation: `
**こと** turns a verb phrase into a noun, like の does: 写真を撮ること, "taking photos". It then takes particles and です like any noun.

こと and の often overlap, but not always:

- before です, only こと works: 趣味は写真を撮ることです, "my hobby is taking photos"
- こと is more abstract and formal: 大切なのは続けることです, "what matters is keeping at it"
- の is more immediate, for things you perceive: 歌っているのが聞こえる

こと also means "the fact that": 結婚したことを知っていますか, "did you know (the fact) that he got married?"

It's the base of many patterns you've met: ことができる, ことがある, ことにする.
`,
    sentences: [
      s("私の趣味は写真を撮る{こと}です。", "わたしのしゅみはしゃしんをとる{こと}です。", "My hobby is taking photos.", {
        near: [["の", "の can't come right before です here. For \"my hobby is doing\", use こと."]],
      }),
      s("日本語を話す{こと}は難しくない。", "にほんごをはなす{こと}はむずかしくない。", "Speaking Japanese isn't difficult.", {
        near: [["の", "の works too. This point practises こと."]],
      }),
      s("大切なのは毎日続ける{こと}です。", "たいせつなのはまいにちつづける{こと}です。", "What matters is keeping at it every day.", {
        near: [["の", "の can't come right before です here. Use こと."]],
      }),
      s("私の夢は世界中を旅行する{こと}です。", "わたしのゆめはせかいじゅうをりょこうする{こと}です。", "My dream is to travel all over the world.", {
        near: [["の", "の can't come right before です here. Use こと."]],
      }),
      s("田中さんが結婚した{こと}を知っていますか。", "たなかさんがけっこんした{こと}をしっていますか。", "Did you know that Tanaka got married?", {
        near: [["の", "の works too in speech. For \"the fact that\", こと is the usual choice."]],
      }),
    ],
  }),

  point({
    id: "n4-no-wa",
    title: "〜のは〜だ",
    meaning: "the one who / the thing that … is …",
    structure: "Plain form + のは + focus + だ / です",
    related: ["n4-koto-nominalizer", "n5-n-desu"],
    explanation: `
**のは〜だ** moves the important part of a sentence to the end, like "it was … that" in English: 私が生まれたのは大阪です, "it was Osaka where I was born".

The の turns the first part into a noun ("the one where I was born"), は makes it the topic, and the focus goes before です.

It's how Japanese stresses one piece of information: 昨日来たのは田中さんです, "it was Tanaka who came yesterday" (not someone else).

With から, it gives a reason as the focus: 遅れたのは電車が止まったからです, "the reason I was late is that the train stopped".

Adjectives work the same way: 日本語で難しいのは漢字です.
`,
    sentences: [
      s("私が生まれた{のは}大阪です。", "わたしがうまれた{のは}おおさかです。", "It was Osaka where I was born.", {
        near: [["は", "A verb can't take は directly. Make it a noun with の: 生まれたのは."]],
      }),
      s("一番好きな{のは}夏です。", "いちばんすきな{のは}なつです。", "The one I like best is summer.", {
        near: [["は", "An adjective can't take は directly here. Make it a noun with の: 好きなのは."]],
      }),
      s("昨日来た{のは}田中さんです。", "きのうきた{のは}たなかさんです。", "It was Tanaka who came yesterday.", {
        near: [["のが", "のが would make it the subject. To put Tanaka in focus at the end, use のは."]],
      }),
      s("日本語で難しい{のは}漢字です。", "にほんごでむずかしい{のは}かんじです。", "The hard part of Japanese is the kanji.", {
        near: [["ことは", "ことは is heard too. This point practises のは."]],
      }),
      s("遅れた{のは}電車が止まったからです。", "おくれた{のは}でんしゃがとまったからです。", "The reason I was late is that the train stopped.", {
        near: [["から", "遅れたから would start with the reason. To put it at the end, use のは…からです."]],
      }),
    ],
  }),

  point({
    id: "n4-kana",
    title: "〜かな",
    meaning: "I wonder",
    structure: "Plain form + かな (feminine, older: かしら)",
    register: "Casual, often said to yourself. Politely: でしょうか.",
    related: ["n5-ka", "n5-deshou"],
    explanation: `
**かな** at the end of a sentence means "I wonder": 明日、雨が降るかな, "I wonder if it'll rain tomorrow". It's か (question) + な (musing), often said half to yourself.

It follows plain forms directly, including nouns (雨かな) without だ.

With the volitional, it's thinking aloud about what to do: 何を着て行こうかな, "hmm, what shall I wear?"

With a negative, it's a wish: 誰か手伝ってくれないかな, "I wish someone would help".

かしら means the same and is heard in older and more feminine speech. The polite equivalent is でしょうか.
`,
    sentences: [
      s("明日、雨が降る{かな}。", "あした、あめがふる{かな}。", "I wonder if it'll rain tomorrow.", {
        near: [["でしょうか", "でしょうか is the polite version. This is you musing to yourself: かな."]],
      }),
      s("田中さん、もう着いた{かな}。", "たなかさん、もうついた{かな}。", "I wonder if Tanaka's arrived yet.", {
        near: [["か", "か alone asks outright. For \"I wonder\", use かな."]],
      }),
      s("これ、おいしい{かな}？", "これ、おいしい{かな}？", "Is this any good, I wonder?", {
        near: [["ね", "ね assumes it is. For wondering, use かな."]],
      }),
      s("何を着て行こう{かな}。", "なにをきていこう{かな}。", "Hmm, what shall I wear?", {
        near: [["か", "こうか asks someone else. Thinking aloud to yourself, use かな."]],
      }),
      s("誰か手伝ってくれない{かな}。", "だれかてつだってくれない{かな}。", "I wish someone would help me.", {
        near: [["か", "くれないか is a direct request. For a wish half to yourself, use かな."]],
      }),
    ],
  }),

  point({
    id: "n4-toka",
    title: "〜とか",
    meaning: "things like, … or something",
    structure: "Noun / plain form + とか (+ Noun / plain form + とか)",
    register: "Casual. や and など are the neutral equivalents.",
    related: ["n5-ya", "n5-nado"],
    explanation: `
**とか** gives examples, like や: 映画とか音楽とか, "films, music, that sort of thing". It's casual, and very common in speech.

Unlike や, it can follow verbs and whole phrases: 掃除するとか、買い物に行くとか, "cleaning, going shopping, stuff like that".

On its own it softens a suggestion or a statement, much like "or something": 先生に聞くとかしたらどう?, "why not ask the teacher or something?"

The last item can take とか too, and often does in conversation. In careful or formal writing, stick to や and など instead.
`,
    sentences: [
      s("休みの日は映画{とか}を見ます。", "やすみのひはえいが{とか}をみます。", "On my days off I watch films and things.", {
        near: [["や", "や works too, but needs another item after it. This point practises とか."]],
      }),
      s("りんご{とか}みかんとかが好きです。", "りんご{とか}みかんとかがすきです。", "I like things like apples and mandarins.", {
        near: [["と", "と would say it's exactly these two. For examples, use とか."]],
      }),
      s("週末は掃除する{とか}、買い物に行くとか、いろいろしました。", "しゅうまつはそうじする{とか}、かいものにいくとか、いろいろしました。", "At the weekend I did stuff like cleaning and shopping.", {
        near: [["や", "や can only join nouns. After a verb, use とか."]],
      }),
      s("分からなかったら、先生に聞く{とか}したらどう？", "わからなかったら、せんせいにきく{とか}したらどう？", "If you don't get it, why not ask the teacher or something?", {
        near: [["や", "や can only join nouns. After a verb, \"or something\" is とか."]],
      }),
      s("田中さん{とか}、山田さんとかが来ました。", "たなかさん{とか}、やまださんとかがきました。", "People like Tanaka and Yamada came.", {
        near: [["と", "と would say it was exactly these two. For examples, use とか."]],
      }),
    ],
  }),

  point({
    id: "n4-no-ni-purpose",
    title: "〜のに (for doing)",
    meaning: "for (doing), in order to",
    structure: "Verb dictionary form + のに + 使う / 便利 / かかる / 必要",
    related: ["n4-tame-ni", "n4-noni"],
    explanation: `
Dictionary form + **のに** can also mean "for (doing)", describing what something is used for, how useful it is, or what it takes: このかばんは旅行するのに便利です, "this bag is handy for travelling"; 駅まで行くのに三十分かかる, "it takes thirty minutes to get to the station".

It goes with a small set of words: 使う (use), 便利 (handy), いい (good), 役に立つ (useful), かかる (take time or money), 必要 (necessary).

It's a different のに from "even though"; the words after it tell you which. And ために is for deliberate goals: 旅行するために休みを取った, "I took time off in order to travel".
`,
    sentences: [
      s("このかばんは旅行する{のに}便利です。", "このかばんはりょこうする{のに}べんりです。", "This bag is handy for travelling.", {
        near: [["ために", "ために is a goal. For what something is useful for, use のに."]],
      }),
      s("駅まで行く{のに}三十分かかります。", "えきまでいく{のに}さんじゅっぷんかかります。", "It takes thirty minutes to get to the station.", {
        near: [["ために", "ために is a goal. For how long something takes, use のに."]],
      }),
      s("このナイフはパンを切る{のに}使います。", "このナイフはパンをきる{のに}つかいます。", "This knife is for cutting bread.", {
        near: [["ために", "ために is a goal. For what a tool is used for, use のに."]],
      }),
      s("家を買う{のに}お金がたくさん必要です。", "いえをかう{のに}おかねがたくさんひつようです。", "You need a lot of money to buy a house.", {
        near: [["ので", "ので gives a reason. For what it takes, use のに."]],
      }),
      s("日本語を覚える{のに}、アニメは役に立ちます。", "にほんごをおぼえる{のに}、アニメはやくにたちます。", "Anime is useful for picking up Japanese.", {
        near: [["ために", "ために is a goal. For what something is useful for, use のに."]],
      }),
    ],
  }),

  point({
    id: "n4-yotei",
    title: "〜予定",
    meaning: "plan, schedule, is due to",
    structure: "Verb dictionary form / Noun の + 予定 (です)",
    related: ["n5-tsumori", "n4-koto-ni-naru"],
    explanation: `
**予定** means "plan" or "schedule", and after a verb it says something is scheduled: 来週、京都へ行く予定です, "I'm due to go to Kyoto next week".

Compare つもり, which is your intention. 予定 sounds more fixed and less personal: it's in the diary. That makes it the natural word for timetables and arrangements: 会議は三時に始まる予定です, "the meeting is due to start at three".

As a noun it's everyday: 明日の予定は?, "what are your plans for tomorrow?"; 週末は予定がありません, "I've got nothing on at the weekend".

予定でした is "was supposed to", usually when things changed: 十時に着く予定でしたが、遅れました.
`,
    sentences: [
      s("来週、京都へ行く{予定}です。", "らいしゅう、きょうとへいく{よてい}です。", "I'm due to go to Kyoto next week.", {
        near: [["つもり", "つもり is your intention. For a fixed plan, use 予定."]],
      }),
      s("会議は三時に始まる{予定}です。", "かいぎはさんじにはじまる{よてい}です。", "The meeting is due to start at three.", {
        near: [["つもり", "つもり is a person's intention. For a schedule, use 予定."]],
      }),
      s("明日の{予定}は何ですか。", "あしたの{よてい}はなんですか。", "What are your plans for tomorrow?", {
        near: [["つもり", "明日のつもり isn't a phrase. \"Your plans\" is 予定."]],
      }),
      s("電車は十時に着く{予定}でしたが、遅れました。", "でんしゃはじゅうじにつく{よてい}でしたが、おくれました。", "The train was due at ten, but it was late.", {
        near: [["はず", "はず works too (\"was supposed to\"). For a timetable, 予定 is the usual word."]],
      }),
      s("週末は特に{予定}がありません。", "しゅうまつはとくに{よてい}がありません。", "I've got nothing planned for the weekend.", {
        near: [["つもり", "つもりがない is \"no intention\". For \"no plans\", use 予定."]],
      }),
    ],
  }),
];
