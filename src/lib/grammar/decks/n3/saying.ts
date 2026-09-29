import { point, s } from "../../build";

/** Defining, reporting, rephrasing, and the texture of casual speech. */

export const saying = [
  point({
    id: "n3-to-iu-no-wa",
    title: "〜というのは・〜とは",
    meaning: "(X) means, what (X) is",
    structure: "Noun / Clause + というのは / とは … (という意味だ · のことだ)",
    related: ["n4-to-iu", "n4-tte"],
    explanation: `
**というのは** picks out a word or idea so you can define or explain it: 「積ん読」というのは、買った本を読まずに積んでおくことだ, "tsundoku means buying books and leaving them piled up unread".

The explanation usually ends with のことだ ("it's the thing that…") or という意味だ ("it means…").

**とは** is the written, more formal version: 「もったいない」とは、無駄にするのが惜しいという意味だ. In speech, the casual version is って, which you met at N4.

After a whole clause, というのは means "the fact that", often when checking something you heard: 会社を休んだというのは本当ですか, "is it true that you took the day off?"
`,
    sentences: [
      s("「積ん読」{というのは}、買った本を読まずに積んでおくことだ。", "「つんどく」{というのは}、かったほんをよまずにつんでおくことだ。", "\"Tsundoku\" means buying books and leaving them piled up unread.", {
        accept: ["とは"],
        near: [["って", "That's the casual version. In a definition, use というのは."]],
      }),
      s("コンビニ{というのは}、コンビニエンスストアのことです。", "コンビニ{というのは}、コンビニエンスストアのことです。", "\"Konbini\" is short for convenience store.", {
        accept: ["とは"],
        near: [["には", "To define a word, use というのは."]],
      }),
      s("友達{というのは}、困ったときに助けてくれる人のことだ。", "ともだち{というのは}、こまったときにたすけてくれるひとのことだ。", "A friend is someone who helps you when you're in trouble.", {
        accept: ["とは"],
        near: [["について", "について is \"about\". To define something, use というのは."]],
      }),
      s("「もったいない」{とは}、無駄にするのが惜しいという意味だ。", "「もったいない」{とは}、むだにするのがおしいといういみだ。", "\"Mottainai\" means it's a shame to waste something.", {
        accept: ["というのは"],
        near: [["では", "では isn't for definitions. Use とは."]],
      }),
      s("会社を休んだ{というのは}、本当ですか。", "かいしゃをやすんだ{というのは}、ほんとうですか。", "Is it true that you took the day off work?", {
        near: [["のは", "That works too. というのは adds \"what I heard\"."]],
      }),
    ],
  }),

  point({
    id: "n3-to-iu-koto-da",
    title: "〜ということだ",
    meaning: "I'm told that; that means",
    structure: "Plain form + ということだ",
    related: ["n4-sou-hearsay", "n3-ni-yoru-to", "n4-to-iu"],
    explanation: `
**ということだ** has two jobs.

The first is passing on information, like そうだ but a little more formal: 明日の会議は中止だということです, "I'm told tomorrow's meeting is cancelled". It often follows a source marked with によると.

The second is drawing a conclusion, "which means": 誰も来ない。つまり、今日は休みということだ, "nobody's here, which means today's a day off". It's common after つまり ("in other words").

After a noun, the だ is often left out in the conclusion use: 休みということだ. In casual speech, it becomes ってことだ or just ってこと: じゃあ、明日は休みってこと?, "so tomorrow's off, then?"
`,
    sentences: [
      s("明日の会議は中止だ{ということです}。", "あしたのかいぎはちゅうしだ{ということです}。", "I'm told tomorrow's meeting has been cancelled.", {
        near: [["そうです", "That's right too. This point practises ということです."]],
      }),
      s("電車が遅れている{ということだ}。", "でんしゃがおくれている{ということだ}。", "Apparently the trains are running late.", {
        near: [["ことだ", "ことだ alone is advice. For passing on news, use ということだ."]],
      }),
      s("部長によると、新しい店は来月オープンする{ということです}。", "ぶちょうによると、あたらしいみせはらいげつオープンする{ということです}。", "According to the manager, the new shop opens next month.", {
        near: [["わけです", "わけです draws a conclusion. For passing on news, use ということです."]],
      }),
      s("誰も来ない。つまり、今日は休み{ということだ}。", "だれもこない。つまり、きょうはやすみ{ということだ}。", "Nobody's here. In other words, today's a day off.", {
        near: [["そうだ", "そうだ passes on hearsay. For \"in other words\", use ということだ."]],
      }),
      s("試験に合格した。春から大学生{ということだ}。", "しけんにごうかくした。はるからだいがくせい{ということだ}。", "I passed the exam. That means I'm a university student from spring.", {
        near: [["そうだ", "そうだ passes on hearsay. For \"that means\", use ということだ."]],
      }),
    ],
  }),

  point({
    id: "n3-to-iu-yori",
    title: "〜というより",
    meaning: "rather than, not so much … as",
    structure: "Plain form / Noun + というより",
    related: ["n5-yori", "n3-to-ittemo"],
    explanation: `
**というより** corrects a description to a better one: 彼は友達というより、家族のような存在だ, "he's not so much a friend as family".

The first part isn't wrong, just not quite right; the second part fits better. It's common for adjusting a word: 暖かいというより、暑いくらいだ, "it's not so much warm as hot".

Plain より compares amounts (more than, less than). というより compares descriptions: which word describes the thing better?

In casual speech, it's っていうより, and っていうか at the start of a sentence means "or rather" or "I mean", a very common filler among young people.
`,
    sentences: [
      s("彼は友達{というより}、家族のような存在だ。", "かれはともだち{というより}、かぞくのようなそんざいだ。", "He's not so much a friend as family.", {
        accept: ["っていうより"],
        near: [["より", "より alone compares amounts. For \"not so much X as Y\", use というより."]],
      }),
      s("今日は暖かい{というより}、暑いくらいだ。", "きょうはあたたかい{というより}、あついくらいだ。", "Today isn't so much warm as hot.", {
        accept: ["っていうより"],
        near: [["より", "より alone compares amounts. For \"not so much X as Y\", use というより."]],
      }),
      s("これは料理{というより}、芸術だ。", "これはりょうり{というより}、げいじゅつだ。", "This isn't so much cooking as art.", {
        accept: ["っていうより"],
        near: [["というのは", "That's for definitions. For \"rather than\", use というより."]],
      }),
      s("疲れた{というより}、眠いんです。", "つかれた{というより}、ねむいんです。", "It's not that I'm tired so much as sleepy.", {
        accept: ["っていうより"],
        near: [["より", "より alone compares amounts. For \"not so much X as Y\", use というより."]],
      }),
      s("怒っている{というより}、悲しんでいるように見えた。", "おこっている{というより}、かなしんでいるようにみえた。", "They looked sad rather than angry.", {
        accept: ["っていうより"],
        near: [["といっても", "といっても is \"though I say\". For \"rather than\", use というより."]],
      }),
    ],
  }),

  point({
    id: "n3-to-ittemo",
    title: "〜といっても",
    meaning: "although I say, it's true … but",
    structure: "Plain form / Noun + といっても",
    related: ["n4-temo", "n3-to-iu-yori"],
    explanation: `
**といっても** lowers expectations: you say something, then immediately limit it. 料理ができるといっても、簡単なものだけです, "I can cook, but only simple things".

It admits the first part is true, then warns that it's less than it sounds: a trip of one night, a garden that's tiny, a company of three people.

It's more specific than けど or が. Those just contrast; といっても says "don't read too much into what I just said".

At the start of a sentence, といっても works alone: 旅行に行った。といっても、一泊だけだ, "I went on a trip. Mind you, it was only one night".
`,
    sentences: [
      s("料理ができる{といっても}、簡単なものだけです。", "りょうりができる{といっても}、かんたんなものだけです。", "I can cook, but only simple things.", {
        near: [["けど", "That works, but といっても adds \"don't expect too much\"."]],
      }),
      s("旅行した{といっても}、一泊だけだ。", "りょこうした{といっても}、いっぱくだけだ。", "I did go on a trip, but only for one night.", {
        near: [["というより", "というより is \"rather than\". For \"although I say\", use といっても."]],
      }),
      s("日本語が話せる{といっても}、日常会話ぐらいです。", "にほんごがはなせる{といっても}、にちじょうかいわぐらいです。", "I do speak Japanese, but only enough for everyday conversation.", {
        near: [["けど", "That works, but といっても adds \"don't expect too much\"."]],
      }),
      s("庭がある{といっても}、とても狭いです。", "にわがある{といっても}、とてもせまいです。", "There is a garden, but it's tiny.", {
        near: [["のに", "のに complains. For \"though it's not much\", use といっても."]],
      }),
      s("社長{といっても}、社員は三人しかいない。", "しゃちょう{といっても}、しゃいんはさんにんしかいない。", "They may be the company president, but there are only three employees.", {
        near: [["として", "として is \"as\". For \"may be … but\", use といっても."]],
      }),
    ],
  }),

  point({
    id: "n3-to-ieba",
    title: "〜といえば・〜というと",
    meaning: "speaking of, when you think of",
    structure: "Noun + といえば / というと / といったら",
    related: ["n3-to-iu-no-wa", "n4-nara"],
    explanation: `
**といえば** picks up a topic and says what it brings to mind: 京都といえば、お寺が有名ですね, "speaking of Kyoto, it's famous for its temples". 夏といえば花火だ, "summer means fireworks".

It's also a conversational pivot: someone mentions a topic, and you take it somewhere new. 旅行といえば、来月どこか行かない?, "speaking of trips, want to go somewhere next month?"

**というと** and **といったら** work much the same way.

The fixed phrase **そういえば** means "that reminds me" or "come to think of it", and is one of the most common ways to change the subject in conversation.
`,
    sentences: [
      s("京都{といえば}、お寺が有名ですね。", "きょうと{といえば}、おてらがゆうめいですね。", "Speaking of Kyoto, it's famous for its temples.", {
        accept: ["というと", "といったら"],
        near: [["については", "That's \"as for\". For what comes to mind, use といえば."]],
      }),
      s("夏{といえば}、花火だ。", "なつ{といえば}、はなびだ。", "When you think of summer, you think of fireworks.", {
        accept: ["というと", "といったら"],
        near: [["なら", "That's \"if it's summer\". For \"when you think of\", use といえば."]],
      }),
      s("旅行{といえば}、来月どこか行かない?", "りょこう{といえば}、らいげつどこかいかない?", "Speaking of trips, want to go somewhere next month?", {
        accept: ["というと", "といったら"],
        near: [["って", "って marks a topic. For \"speaking of\", use といえば."]],
      }),
      s("日本の料理{というと}、すしを思い出す人が多い。", "にほんのりょうり{というと}、すしをおもいだすひとがおおい。", "When people think of Japanese food, many think of sushi.", {
        accept: ["といえば", "といったら"],
        near: [["といっても", "といっても is \"even though I say\". For \"when you think of\", use というと."]],
      }),
      s("{そういえば}、田中さんは元気かな。", "{そういえば}、たなかさんはげんきかな。", "That reminds me, I wonder how Tanaka is doing.", {
        near: [["そういうと", "The set phrase is そういえば."]],
      }),
    ],
  }),

  point({
    id: "n3-you-ni-as",
    title: "〜ように (as)",
    meaning: "as, just as",
    structure: "Verb plain form + ように · Noun + のように · 次のように",
    related: ["n4-you-da", "n4-you-ni"],
    explanation: `
**ように** also means "as", pointing to something already said, known or shown: 前にも言ったように、明日は休みです, "as I said before, tomorrow's a day off".

Common set phrases: ご存じのように, "as you know"; 次のように, "as follows"; 図のように, "as shown in the diagram"; 予想したように, "as expected".

This ように comes at the start of a sentence and sets up what follows. That's different from the N4 ように, "so that", which gives a goal: 忘れないようにメモする.

Before a verb, it's ように; before a noun, it's ような: 次のような問題, "problems like the following". In casual speech, みたいに does the same job after verbs and nouns, without の.
`,
    sentences: [
      s("前にも言った{ように}、明日は休みです。", "まえにもいった{ように}、あしたはやすみです。", "As I said before, tomorrow is a day off.", {
        near: [["ために", "ために is purpose. For \"as I said\", use ように."]],
      }),
      s("ご存じの{ように}、来月から料金が変わります。", "ごぞんじの{ように}、らいげつからりょうきんがかわります。", "As you know, prices change from next month.", {
        near: [["として", "として is a role. For \"as you know\", use ように."]],
      }),
      s("図の{ように}、線を引いてください。", "ずの{ように}、せんをひいてください。", "Please draw a line as shown in the diagram.", {
        near: [["みたいに", "みたいに doesn't take の. Here it's のように."]],
      }),
      s("次の{ように}書いてください。", "つぎの{ように}かいてください。", "Please write it as follows.", {
        near: [["ような", "Before a verb, use ように."]],
      }),
      s("天気予報で言っていた{ように}、雨が降ってきた。", "てんきよほうでいっていた{ように}、あめがふってきた。", "Just as the forecast said, it's started to rain.", {
        near: [["ために", "ために is purpose. For \"just as it said\", use ように."]],
      }),
    ],
  }),

  point({
    id: "n3-you-ni-wish",
    title: "〜ますように・〜ように (wishes and reminders)",
    meaning: "may …, I hope; (reminder) be sure to",
    structure: "Verb ます-form + ように (wish) · Plain form + ように。 (reminder)",
    related: ["n4-you-ni", "n4-you-ni-iu"],
    explanation: `
At the end of a sentence, **ように** can express a wish or prayer: 試験に合格できますように, "please let me pass the exam". You'll see it written on shrine prayer boards (絵馬) and in cards: 早く元気になりますように, "hoping you get well soon".

The wish uses the polite ます-form, even though no one is being addressed directly.

The same ending also gives a firm but indirect instruction, as in notices, teachers' reminders and meetings: 明日は遅れないように, "don't be late tomorrow". Here the plain form comes before ように.

Both uses leave off the verb that would normally follow (祈る, "pray", or 言う, "tell"), which is why they feel soft and formal.
`,
    sentences: [
      s("試験に合格できます{ように}。", "しけんにごうかくできます{ように}。", "Please let me pass the exam.", {
        near: [["ために", "ために is purpose. For a wish, end with ように."]],
      }),
      s("早く元気になります{ように}。", "はやくげんきになります{ように}。", "Hoping you get well soon.", {
        near: [["といい", "といいですね works too. This point practises the wish ように."]],
      }),
      s("明日晴れます{ように}。", "あしたはれます{ように}。", "Please let it be sunny tomorrow.", {
        near: [["たい", "たい is your own desire. For praying for the weather, use ように."]],
      }),
      s("明日は{遅れないように}。", "あしたは{おくれないように}。", "Make sure you're not late tomorrow.", {
        near: [["遅れないで", "That's a casual request. As a reminder or notice, use 遅れないように."]],
      }),
      s("明日は八時までに集まる{ように}。", "あしたははちじまでにあつまる{ように}。", "Be here by eight tomorrow.", {
        accept: ["こと"],
        near: [["ために", "ために is purpose. As an instruction, end with ように."]],
      }),
    ],
  }),

  point({
    id: "n3-kke",
    title: "〜っけ",
    meaning: "was it? (trying to remember)",
    structure: "Plain past / だった + っけ · ましたっけ · でしたっけ",
    register: "Casual, but ましたっけ and でしたっけ are fine in polite speech.",
    related: ["n5-question-ka", "n4-kana"],
    explanation: `
**っけ** turns a question into "remind me…" or "was it…?": 会議は何時からだったっけ, "what time was the meeting again?" You're searching your memory, and half asking the listener, half asking yourself.

It usually follows a past form, because you're checking something you once knew: だったっけ, 置いたっけ. The polite versions are ましたっけ and でしたっけ: 前にも話しましたっけ, "did I tell you this before?"

Compare よね, which checks that the listener agrees with something you're fairly sure of. っけ admits you've forgotten.

Talking to yourself, it's a mutter: 鍵、どこに置いたっけ, "where did I put my keys?"
`,
    sentences: [
      s("会議は何時からだった{っけ}。", "かいぎはなんじからだった{っけ}。", "What time was the meeting again?", {
        near: [["か", "That's a plain question. When trying to remember, use っけ."]],
      }),
      s("あの人の名前、何だった{っけ}?", "あのひとのなまえ、なんだった{っけ}?", "What was that person's name again?", {
        near: [["か", "That's a plain question. When trying to remember, use っけ."]],
      }),
      s("明日は休みだった{っけ}?", "あしたはやすみだった{っけ}?", "Wait, is tomorrow a day off?", {
        near: [["よね", "よね checks with the listener. For searching your own memory, use っけ."]],
      }),
      s("鍵、どこに置いた{っけ}。", "かぎ、どこにおいた{っけ}。", "Now where did I put my keys?", {
        near: [["か", "That's a plain question. When trying to remember, use っけ."]],
      }),
      s("前にも話しました{っけ}。", "まえにもはなしました{っけ}。", "Did I tell you this before?", {
        near: [["か", "That's a plain question. To check your memory, use っけ."]],
      }),
    ],
  }),

  point({
    id: "n3-mon",
    title: "〜もん・〜もの (excuses)",
    meaning: "because, but (casual excuse)",
    structure: "Plain form + もん / もの · often with だって and んだ",
    register: "Casual, and a little childish or cute.",
    related: ["n3-mono-da-kara", "n5-kara-because"],
    explanation: `
At the end of a casual sentence, **もん** (or **もの**) gives a reason as a self-justifying excuse: だって、知らなかったんだもん, "but I didn't know!"

It often pairs with だって ("but") at the start, and with んだ just before: 行きたくない。寒いんだもん, "I don't want to go. It's cold".

It sounds like a child or someone sulking, so it can be cute or whiny depending on the speaker. Adults use it jokingly among friends. もの is a little softer and more feminine than もん.

The polite relative is ものですから, "you see", from the start of this deck. Never use もん at work or with people above you.
`,
    sentences: [
      s("だって、知らなかったんだ{もん}。", "だって、しらなかったんだ{もん}。", "But I didn't know!", {
        accept: ["もの"],
        near: [["から", "That works, but a sulky excuse ends with もん."]],
      }),
      s("行きたくない。寒い{もん}。", "いきたくない。さむい{もん}。", "I don't want to go. It's cold.", {
        accept: ["もの"],
        near: [["から", "That works, but a sulky excuse ends with もん."]],
      }),
      s("しょうがないよ、子どもだ{もん}。", "しょうがないよ、こどもだ{もん}。", "It can't be helped, they're only a kid.", {
        accept: ["もの"],
        near: [["だから", "To tack an excuse on the end, use もん."]],
      }),
      s("だって、まだ眠いんだ{もの}。", "だって、まだねむいんだ{もの}。", "But I'm still sleepy.", {
        accept: ["もん"],
        near: [["から", "That works, but a sulky excuse ends with もの."]],
      }),
      s("食べられないよ、辛すぎる{もん}。", "たべられないよ、からすぎる{もん}。", "I can't eat it, it's way too spicy.", {
        accept: ["もの"],
        near: [["ので", "ので is neutral. For a casual excuse, use もん."]],
      }),
    ],
  }),

  point({
    id: "n3-contractions",
    title: "Casual contractions (〜てる・〜とく・〜ちゃ)",
    meaning: "the shortened forms of ている, ておく, ては and では",
    structure: "ている → てる · ておく → とく · ては → ちゃ · では → じゃ",
    register: "Casual: everyday speech, messages and manga.",
    related: ["n4-te-shimau", "n4-te-oku", "n4-naito"],
    explanation: `
Casual Japanese squeezes common patterns. You've met ちゃう (てしまう) and なきゃ (なければ); here are the others you'll hear constantly:

- ている → **てる**: 何してるの?, "what are you doing?"; でいる → でる: 読んでる.
- ておく → **とく**: 冷蔵庫に入れとくね, "I'll put it in the fridge"; でおく → どく.
- ては → **ちゃ**: 撮っちゃだめ, "you can't take photos"; では → じゃ: 飲んじゃだめ.

They conjugate like the full forms: といた, といて; てた, てない.

These are normal speech, not slang, but they don't belong in writing or formal situations. Recognising them matters most: in anime, dramas and chat, the full forms are the unusual ones.
`,
    sentences: [
      s("今、何{してる}の?", "いま、なに{してる}の?", "What are you doing right now?", {
        near: [["している", "That's the full form. In casual speech, ている shrinks to てる."]],
      }),
      s("飲み物は冷蔵庫に{入れとく}ね。", "のみものはれいぞうこに{いれとく}ね。", "I'll put the drinks in the fridge.", {
        near: [["入れておく", "That's the full form. Casually, ておく shrinks to とく."]],
      }),
      s("ここで写真を{撮っちゃ}だめだよ。", "ここでしゃしんを{とっちゃ}だめだよ。", "You're not allowed to take photos here.", {
        near: [["撮っては", "That's the full form. Casually, ては shrinks to ちゃ."]],
      }),
      s("宿題、もう{やっといた}よ。", "しゅくだい、もう{やっといた}よ。", "I've already done the homework.", {
        near: [["やっておいた", "That's the full form. Casually, ておいた shrinks to といた."]],
      }),
      s("雨、まだ{降ってる}?", "あめ、まだ{ふってる}?", "Is it still raining?", {
        near: [["降っている", "That's the full form. Casually, ている shrinks to てる."]],
      }),
      s("お酒を{飲んじゃ}だめ。", "おさけを{のんじゃ}だめ。", "You mustn't drink.", {
        near: [["飲んでは", "That's the full form. Casually, では shrinks to じゃ."]],
      }),
    ],
  }),

  point({
    id: "n3-no-dewa-nai-ka",
    title: "〜のではないか・〜んじゃない",
    meaning: "I think maybe; isn't it the case that",
    structure: "Plain form + のではないか / んじゃない(か) (な-adj, Noun + な)",
    related: ["n4-kamoshirenai", "n5-deshou"],
    explanation: `
**のではないか** puts forward an opinion tentatively, as a question that expects "yes": 彼はもう帰ったのではないかと思う, "I think he may have gone home already". It's softer than stating it and firmer than かもしれない.

The polite form **のではないでしょうか** is a standard way to disagree or suggest something at work: このままでは間に合わないのではないでしょうか, "at this rate, won't we be too late?"

In speech, it becomes **んじゃない?**, "isn't it…?": それ、ちょっと高すぎるんじゃない?, "isn't that a bit too expensive?" んじゃないかな is "I think maybe".

Note that the ない here isn't really negative: the speaker thinks it is the case.
`,
    sentences: [
      s("彼はもう帰った{のではないか}と思う。", "かれはもうかえった{のではないか}とおもう。", "I think he may have already gone home.", {
        accept: ["んじゃないか"],
        near: [["ではないか", "After a verb, add の: のではないか."]],
      }),
      s("このままでは間に合わない{のではないでしょうか}。", "このままではまにあわない{のではないでしょうか}。", "At this rate, won't we be too late?", {
        accept: ["んじゃないでしょうか"],
        near: [["でしょうか", "That's a plain question. For a tentative opinion, use のではないでしょうか."]],
      }),
      s("それ、ちょっと高すぎる{んじゃない}?", "それ、ちょっとたかすぎる{んじゃない}?", "Isn't that a bit too expensive?", {
        accept: ["のではないか", "んじゃないか", "のではない"],
        near: [["じゃない", "After an adjective or verb, add ん: んじゃない."]],
      }),
      s("田中さんなら知っている{んじゃないかな}。", "たなかさんならしっている{んじゃないかな}。", "I think Tanaka might know.", {
        accept: ["のではないかな"],
        near: [["かな", "That's a plain wonder. For \"might, I think\", use んじゃないかな."]],
      }),
      s("明日は雨が降る{のではないか}と心配だ。", "あしたはあめがふる{のではないか}としんぱいだ。", "I'm worried it might rain tomorrow.", {
        accept: ["んじゃないか"],
        near: [["かどうか", "かどうか is \"whether\". For a worry that it will, use のではないか."]],
      }),
    ],
  }),
];
