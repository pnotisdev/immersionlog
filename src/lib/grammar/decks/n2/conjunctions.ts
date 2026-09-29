import { point, s } from "../../build";

/** Formal sentence joiners: therefore, in short, mind you, note that, and the reason is. */

export const conjunctions = [
  point({
    id: "n2-shitagatte",
    title: "したがって・それゆえ",
    meaning: "therefore, consequently",
    structure: "Sentence。したがって / それゆえ、Sentence。",
    related: ["n4-dakara", "n3-ni-shitagatte"],
    explanation: `
**したがって** means "therefore, consequently": 雨が降った。したがって、試合は中止になった, "it rained. Therefore, the match was cancelled".

It's formal and logical, typical of reports, textbooks, rules and news. In conversation, だから or それで is more natural. **それゆえ** means the same and is even more literary.

The second half is a logical consequence, often an official decision or a conclusion drawn from facts.

It comes from 従う, "to follow", so it's the same word as にしたがって (N3, "in accordance with"). At the start of a sentence, it's always "therefore".
`,
    sentences: [
      s("雨が降った。{したがって}、試合は中止になった。", "あめがふった。{したがって}、しあいはちゅうしになった。", "It rained. Therefore, the match was cancelled.", {
        accept: ["それゆえ", "そのため"],
        near: [["ところが", "ところが is an unexpected \"but\". For \"therefore\", use したがって."]],
      }),
      s("この薬は副作用が強い。{したがって}、医者の指示に従って飲むこと。", "このくすりはふくさようがつよい。{したがって}、いしゃのしじにしたがってのむこと。", "This medicine has strong side effects. Therefore, take it only as your doctor directs.", {
        accept: ["それゆえ", "そのため"],
        near: [["それなのに", "それなのに is \"and yet\". For \"therefore\", use したがって."]],
      }),
      s("今年は雨が少なかった。{したがって}、野菜の値段が上がっている。", "ことしはあめがすくなかった。{したがって}、やさいのねだんがあがっている。", "There was little rain this year. Consequently, vegetable prices are rising.", {
        accept: ["それゆえ", "そのため"],
        near: [["ところが", "ところが is an unexpected \"but\". For \"consequently\", use したがって."]],
      }),
      s("会員の数が減った。{したがって}、会費を上げることになった。", "かいいんのかずがへった。{したがって}、かいひをあげることになった。", "Membership has fallen. Consequently, fees are going up.", {
        accept: ["それゆえ", "そのため"],
        near: [["すると", "すると is \"and then\". For \"consequently\", use したがって."]],
      }),
      s("彼は証拠を持っていなかった。{それゆえ}、誰も信じなかった。", "かれはしょうこをもっていなかった。{それゆえ}、だれもしんじなかった。", "He had no evidence. Therefore, no one believed him.", {
        accept: ["したがって", "そのため"],
        near: [["それなのに", "それなのに is \"and yet\". For \"therefore\", use それゆえ."]],
      }),
    ],
  }),

  point({
    id: "n2-you-suru-ni",
    title: "要するに",
    meaning: "in short, basically, in a word",
    structure: "要するに、summary",
    related: ["n3-tsumari", "n3-to-iu-koto-da"],
    explanation: `
**要するに** sums up the essential point after a long explanation: 話は長かったが、要するに彼は反対なのだ, "he talked for a long time, but in short, he's against it".

It's close to つまり (N3), which can also rephrase or define. 要するに is specifically a summary: cutting through details to the core.

As a question, 要するに、何が言いたいんですか means "so what's your point?", which can sound impatient.

It often pairs with ということだ or だ at the end. It's common in both conversation and writing. When you are listening to a long, winding explanation, 要するに is the signal that the speaker's real point is about to come.
`,
    sentences: [
      s("{要するに}、お金が足りないということですね。", "{ようするに}、おかねがたりないということですね。", "In short, you mean there isn't enough money.", {
        accept: ["つまり"],
        near: [["ところで", "ところで changes the subject. For \"in short\", use 要するに."]],
      }),
      s("話は長かったが、{要するに}彼は反対なのだ。", "はなしはながかったが、{ようするに}かれははんたいなのだ。", "He talked for a long time, but in short, he's against it.", {
        accept: ["つまり"],
        near: [["それなのに", "それなのに is \"and yet\". For \"in short\", use 要するに."]],
      }),
      s("{要するに}、何が言いたいんですか。", "{ようするに}、なにがいいたいんですか。", "So what's your point?", {
        accept: ["つまり"],
        near: [["ところで", "ところで changes the subject. For \"so, in short\", use 要するに."]],
      }),
      s("{要するに}、練習が足りなかったんだ。", "{ようするに}、れんしゅうがたりなかったんだ。", "In a word, we didn't practise enough.", {
        accept: ["つまり"],
        near: [["したがって", "したがって is \"therefore\". For summing up, use 要するに."]],
      }),
      s("条件はいろいろあるが、{要するに}早い者勝ちだ。", "じょうけんはいろいろあるが、{ようするに}はやいものがちだ。", "There are lots of conditions, but basically it's first come, first served.", {
        accept: ["つまり"],
        near: [["したがって", "したがって is \"therefore\". For \"basically\", use 要するに."]],
      }),
    ],
  }),

  point({
    id: "n2-mottomo",
    title: "もっとも (mind you)",
    meaning: "though, mind you, having said that",
    structure: "Statement。もっとも、reservation。",
    related: ["n3-tadashi", "n2-to-wa-ie"],
    explanation: `
At the start of a sentence, **もっとも** adds a reservation to what was just said: 明日は休みだ。もっとも、午前中は少し仕事をするけど, "I'm off tomorrow. Mind you, I'll do a bit of work in the morning".

It softens or qualifies the first statement without overturning it. The second half often ends with けど, が or けどね.

It's close to ただし (N3), but ただし is a formal condition (on notices, rules), while もっとも is a personal afterthought.

As a な-adjective, もっともだ means "reasonable, natural": 彼が怒るのももっともだ, "it's only natural he's angry".
`,
    sentences: [
      s("明日は休みだ。{もっとも}、午前中は少し仕事をするけど。", "あしたはやすみだ。{もっとも}、ごぜんちゅうはすこししごとをするけど。", "I'm off tomorrow. Mind you, I'll do a bit of work in the morning.", {
        accept: ["ただし"],
        near: [["ところが", "ところが is an unexpected \"but\". For a small reservation, use もっとも."]],
      }),
      s("この店は料理がおいしい。{もっとも}、値段は少し高い。", "このみせはりょうりがおいしい。{もっとも}、ねだんはすこしたかい。", "The food here is good. It's a bit pricey, mind you.", {
        near: [["それに", "それに adds a good point. For a reservation, use もっとも."]],
      }),
      s("彼の意見は正しい。{もっとも}、実行するのは難しいが。", "かれのいけんはただしい。{もっとも}、じっこうするのはむずかしいが。", "His opinion is right. Though putting it into practice would be hard.", {
        near: [["それに", "それに adds a point. For a reservation, use もっとも."]],
      }),
      s("試験には合格した。{もっとも}、ぎりぎりだったけど。", "しけんにはごうかくした。{もっとも}、ぎりぎりだったけど。", "I passed the exam. Only just, mind you.", {
        near: [["したがって", "したがって is \"therefore\". For a reservation, use もっとも."]],
      }),
      s("毎日運動している。{もっとも}、散歩だけだけどね。", "まいにちうんどうしている。{もっとも}、さんぽだけだけどね。", "I exercise every day. Well, it's only walking.", {
        near: [["それに", "それに adds a point. For a reservation, use もっとも."]],
      }),
    ],
  }),

  point({
    id: "n2-nao",
    title: "なお",
    meaning: "please note, additionally; still",
    structure: "Main information。なお、additional note。 · なお + still",
    related: ["n3-tadashi", "n2-mottomo"],
    explanation: `
At the start of a sentence, **なお** adds a supplementary note: 会議は三時からです。なお、資料は各自で印刷してください, "the meeting starts at three. Please note that you should print your own copy of the documents".

It's typical of announcements, emails and notices, introducing the practical details that follow the main message: parking, deadlines, what to bring.

Inside a sentence, なお is a formal "still": 薬を飲んだが、なお熱が下がらない, "I took medicine, but my fever still won't go down". なおさら means "all the more".

Compare ただし (a condition or exception) and もっとも (a personal reservation). なお simply adds information.
`,
    sentences: [
      s("会議は三時からです。{なお}、資料は各自で印刷してください。", "かいぎはさんじからです。{なお}、しりょうはかくじでいんさつしてください。", "The meeting starts at three. Please note that you should print your own copy of the documents.", {
        near: [["もっとも", "もっとも adds a reservation. For an extra notice, use なお."]],
      }),
      s("申し込みは今月末までです。{なお}、定員になり次第締め切ります。", "もうしこみはこんげつまつまでです。{なお}、ていいんになりしだいしめきります。", "Applications close at the end of this month. Note that we'll close early if all places are filled.", {
        near: [["もっとも", "もっとも adds a reservation. For an extra notice, use なお."]],
      }),
      s("薬を飲んだが、{なお}熱が下がらない。", "くすりをのんだが、{なお}ねつがさがらない。", "I took medicine, but my fever still won't go down.", {
        accept: ["まだ"],
        near: [["もう", "もう is \"already\". For \"still\", use なお."]],
      }),
      s("参加費は無料です。{なお}、駐車場はありません。", "さんかひはむりょうです。{なお}、ちゅうしゃじょうはありません。", "Participation is free. Please note there's no car park.", {
        near: [["もっとも", "もっとも adds a reservation. For an extra notice, use なお."]],
      }),
      s("休めば治ると思ったが、{なお}痛みが続いている。", "やすめばなおるとおもったが、{なお}いたみがつづいている。", "I thought rest would cure it, but the pain is still there.", {
        accept: ["まだ"],
        near: [["もう", "もう is \"already\". For \"still\", use なお."]],
      }),
    ],
  }),

  point({
    id: "n2-to-iu-no-mo",
    title: "というのも",
    meaning: "the reason is, you see",
    structure: "Statement。というのも、reason + からだ / のだ。",
    related: ["n3-nazenara", "n3-to-iu-no-wa"],
    explanation: `
**というのも** gives the reason behind what was just said: 最近、よく眠れない。というのも、隣の工事がうるさいからだ, "I haven't been sleeping well lately. The reason is that the building work next door is so noisy".

It's like なぜなら (N3), but softer and more conversational. The reason usually ends with からだ, のだ or んです.

It sounds like an explanation offered to help the listener understand, rather than an argument. That makes it common in explanations, apologies and storytelling.

Don't confuse it with というのは (N3, "what X means") or というと ("speaking of").
`,
    sentences: [
      s("最近、よく眠れない。{というのも}、隣の工事がうるさいからだ。", "さいきん、よくねむれない。{というのも}、となりのこうじがうるさいからだ。", "I haven't been sleeping well lately. The reason is that the building work next door is so noisy.", {
        accept: ["なぜなら"],
        near: [["というより", "That's \"rather than\". For giving the reason, use というのも."]],
      }),
      s("今日は早く帰ります。{というのも}、母が入院しているんです。", "きょうははやくかえります。{というのも}、ははがにゅういんしているんです。", "I'm going home early today. You see, my mother is in hospital.", {
        accept: ["なぜなら"],
        near: [["というと", "That's \"speaking of\". For giving the reason, use というのも."]],
      }),
      s("彼女は怒っている。{というのも}、私が約束を忘れたからだ。", "かのじょはおこっている。{というのも}、わたしがやくそくをわすれたからだ。", "She's angry, because I forgot our plans.", {
        accept: ["なぜなら"],
        near: [["というより", "That's \"rather than\". For giving the reason, use というのも."]],
      }),
      s("旅行はやめた。{というのも}、お金がないからだ。", "りょこうはやめた。{というのも}、おかねがないからだ。", "I've given up on the trip. The reason is I don't have the money.", {
        accept: ["なぜなら"],
        near: [["といっても", "That's \"though I say\". For giving the reason, use というのも."]],
      }),
      s("彼に頼んだ。{というのも}、この分野に詳しいからだ。", "かれにたのんだ。{というのも}、このぶんやにくわしいからだ。", "I asked him, because he knows this field well.", {
        accept: ["なぜなら"],
        near: [["といっても", "That's \"though I say\". For giving the reason, use というのも."]],
      }),
    ],
  }),
];
