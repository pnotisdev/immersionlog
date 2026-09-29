import { point, s } from "../../build";

/**
 * Words that join whole sentences. Reading passages and grammar questions test these
 * constantly, and the trap is always a near neighbour: so vs. and yet, but vs. but
 * unexpectedly, and then vs. so I did.
 */

export const conjunctions = [
  point({
    id: "n3-tsumari",
    title: "つまり・すなわち",
    meaning: "in other words, that is, namely",
    structure: "A、つまり B · Sentence。つまり、Sentence。",
    related: ["n3-to-iu-koto-da", "n3-wake-da"],
    explanation: `
**つまり** restates what was just said in a clearer or shorter way: 彼は母の兄、つまり私のおじです, "he's my mother's older brother; in other words, my uncle".

It also draws a conclusion: 彼女は何も言わなかった。つまり、反対ではないのだろう, "she didn't say anything. In other words, she's probably not against it". It often pairs with ということだ or わけだ at the end.

As a question, つまり、どういうことですか asks someone to get to the point.

**すなわち** means the same, but is formal and written, typical of definitions and textbooks. Compare だから, which gives a result; つまり gives the same thing in different words.
`,
    sentences: [
      s("彼は母の兄、{つまり}私のおじです。", "かれはははのあに、{つまり}わたしのおじです。", "He's my mother's older brother; in other words, my uncle.", {
        accept: ["すなわち"],
        near: [["だから", "だから is \"so\". For \"in other words\", use つまり."]],
      }),
      s("来週は休み、{つまり}授業がないということだ。", "らいしゅうはやすみ、{つまり}じゅぎょうがないということだ。", "Next week is a holiday, which means there are no classes.", {
        accept: ["すなわち"],
        near: [["それに", "それに adds a point. For rephrasing, use つまり."]],
      }),
      s("{つまり}、どういうことですか。", "{つまり}、どういうことですか。", "So what exactly are you saying?", {
        near: [["ところで", "ところで changes the subject. For \"so, in other words\", use つまり."]],
      }),
      s("彼女は何も言わなかった。{つまり}、反対ではないのだろう。", "かのじょはなにもいわなかった。{つまり}、はんたいではないのだろう。", "She didn't say anything. In other words, she's probably not against it.", {
        near: [["だから", "だから is \"so\" for a result. For \"in other words\", use つまり."]],
      }),
      s("日本の首都、{すなわち}東京。", "にほんのしゅと、{すなわち}とうきょう。", "The capital of Japan, namely Tokyo.", {
        accept: ["つまり"],
        near: [["それとも", "それとも is \"or\". For \"namely\", use すなわち."]],
      }),
    ],
  }),

  point({
    id: "n3-tokoroga",
    title: "ところが",
    meaning: "but, however (unexpectedly)",
    structure: "Sentence。ところが、unexpected result。",
    related: ["n3-sore-nanoni", "n5-demo", "n4-tokorode"],
    explanation: `
**ところが** introduces a result that goes against what was expected: 朝はいい天気だった。ところが、午後から雨が降り出した, "the morning was lovely. But in the afternoon it started raining".

It's a "but" with surprise. The second half is usually a fact that already happened, often something outside the speaker's control. That's why it can't lead to your own intention, request or command.

Compare しかし and でも, which are general "but"s, and それなのに, which adds frustration ("and yet"). ところが is closer to "as it turned out".

Don't confuse it with ところで, "by the way", which changes the subject.
`,
    sentences: [
      s("朝はいい天気だった。{ところが}、午後から雨が降り出した。", "あさはいいてんきだった。{ところが}、ごごからあめがふりだした。", "The morning was lovely. But in the afternoon it started to rain.", {
        near: [["しかし", "That works, but ところが adds \"unexpectedly\"."]],
      }),
      s("すぐ終わると思っていた。{ところが}、三時間もかかった。", "すぐおわるとおもっていた。{ところが}、さんじかんもかかった。", "I thought it would be over quickly. As it turned out, it took three hours.", {
        near: [["それで", "それで is a result. For an unexpected turn, use ところが."]],
      }),
      s("急いで駅に行った。{ところが}、電車はもう出た後だった。", "いそいでえきにいった。{ところが}、でんしゃはもうでたあとだった。", "I hurried to the station. But the train had already gone.", {
        near: [["だから", "だから is \"so\". For an unexpected turn, use ところが."]],
      }),
      s("彼は簡単だと言った。{ところが}、実際はとても難しかった。", "かれはかんたんだといった。{ところが}、じっさいはとてもむずかしかった。", "He said it was easy. But in fact it was really hard.", {
        near: [["しかし", "That works, but ところが adds \"unexpectedly\"."]],
      }),
      s("店に電話した。{ところが}、誰も出なかった。", "みせにでんわした。{ところが}、だれもでなかった。", "I rang the shop. But nobody answered.", {
        near: [["ところで", "ところで changes the subject. For \"but, unexpectedly\", use ところが."]],
      }),
    ],
  }),

  point({
    id: "n3-sore-nanoni",
    title: "それなのに・なのに",
    meaning: "and yet, even so (frustrated)",
    structure: "Sentence。それなのに / なのに、Sentence。",
    related: ["n4-noni", "n3-tokoroga"],
    explanation: `
**それなのに** is のに (N4) at the start of a sentence: "and yet", with disappointment or frustration: 一生懸命勉強した。それなのに、試験に落ちた, "I studied really hard. And yet I failed".

The first sentence sets up an expectation, and the second breaks it in a way the speaker finds unfair or annoying. In casual speech, it's just **なのに**.

Compare ところが, which is surprise, often neutral, and しかし, a plain "but". それなのに carries a complaint.

Like のに, it describes facts, not requests or intentions: you can't follow it with "so please…".
`,
    sentences: [
      s("一生懸命勉強した。{それなのに}、試験に落ちた。", "いっしょうけんめいべんきょうした。{それなのに}、しけんにおちた。", "I studied really hard. And yet I failed the exam.", {
        accept: ["なのに"],
        near: [["それで", "それで is \"so\". For \"and yet\", use それなのに."]],
      }),
      s("約束した。{それなのに}、彼は来なかった。", "やくそくした。{それなのに}、かれはこなかった。", "He promised. And yet he didn't come.", {
        accept: ["なのに"],
        near: [["ところで", "ところで changes the subject. For \"and yet\", use それなのに."]],
      }),
      s("薬を飲んだ。{それなのに}、熱が下がらない。", "くすりをのんだ。{それなのに}、ねつがさがらない。", "I took the medicine. Even so, my fever won't go down.", {
        accept: ["なのに"],
        near: [["それで", "それで is \"so\". For \"even so\", use それなのに."]],
      }),
      s("何度も説明した。{それなのに}、まだわかってくれない。", "なんどもせつめいした。{それなのに}、まだわかってくれない。", "I've explained it again and again, and they still don't get it.", {
        accept: ["なのに"],
        near: [["それに", "それに adds a point. For \"and yet\", use それなのに."]],
      }),
      s("日曜日だ。{それなのに}、会社に行かなければならない。", "にちようびだ。{それなのに}、かいしゃにいかなければならない。", "It's Sunday. And yet I have to go to work.", {
        accept: ["なのに"],
        near: [["それで", "それで is \"so\". For \"and yet\", use それなのに."]],
      }),
    ],
  }),

  point({
    id: "n3-sonoue",
    title: "そのうえ・しかも",
    meaning: "moreover, on top of that, what's more",
    structure: "Sentence。そのうえ / しかも、Sentence。",
    related: ["n4-soreni", "n2-ue-ni"],
    explanation: `
**そのうえ** and **しかも** add a further point in the same direction, often a stronger one: このホテルは安い。そのうえ、朝ご飯もついている, "this hotel is cheap. On top of that, breakfast is included".

They're the written, slightly formal relatives of それに (N4). しかも often adds something surprising: 頭がいい。しかも、スポーツも得意だ, "he's clever. And what's more, he's good at sports".

しかも can also join within a sentence: 歌が上手で、しかも作曲もできる.

The second point is usually marked with も. Compare ところが, which turns against the first point; そのうえ piles on. Both usually add points of the same kind: good plus good, or bad plus bad.
`,
    sentences: [
      s("このホテルは安い。{そのうえ}、朝ご飯もついている。", "このホテルはやすい。{そのうえ}、あさごはんもついている。", "This hotel is cheap. On top of that, breakfast is included.", {
        accept: ["しかも", "それに"],
        near: [["それで", "それで is a result. For adding a point, use そのうえ."]],
      }),
      s("道に迷った。{そのうえ}、雨も降ってきた。", "みちにまよった。{そのうえ}、あめもふってきた。", "I got lost. On top of that, it started raining.", {
        accept: ["しかも", "それに"],
        near: [["ところが", "ところが is an unexpected \"but\". For adding a point, use そのうえ."]],
      }),
      s("彼は頭がいい。{しかも}、スポーツも得意だ。", "かれはあたまがいい。{しかも}、スポーツもとくいだ。", "He's clever. And what's more, he's good at sports.", {
        accept: ["そのうえ", "それに"],
        near: [["ところが", "ところが is an unexpected \"but\". For adding a point, use しかも."]],
      }),
      s("この仕事は給料が安い。{しかも}、休みも少ない。", "このしごとはきゅうりょうがやすい。{しかも}、やすみもすくない。", "This job pays badly. What's more, there's hardly any time off.", {
        accept: ["そのうえ", "それに"],
        near: [["だから", "だから is \"so\". For adding a point, use しかも."]],
      }),
      s("彼女は歌が上手で、{しかも}作曲もできる。", "かのじょはうたがじょうずで、{しかも}さっきょくもできる。", "She's a great singer, and she can compose music too.", {
        accept: ["そのうえ"],
        near: [["それとも", "それとも is \"or\". For \"and what's more\", use しかも."]],
      }),
    ],
  }),

  point({
    id: "n3-suruto",
    title: "すると",
    meaning: "and then, at that; so (you mean)",
    structure: "Action。すると、what happened next。",
    related: ["n4-to-conditional", "n3-sokode"],
    explanation: `
**すると** describes what happened right after an action, often as its result or a discovery: ボタンを押した。すると、ドアが開いた, "I pressed the button. At that, the door opened".

The second half is something that happened, usually outside the speaker's control, so it's common in stories and descriptions. It's like the と of "whenever" (N4) turned into a sentence opener.

In conversation, すると also draws an inference from what someone said: 「明日は休みです。」「すると、会議はないんですね。」, "so there's no meeting, then?"

Compare そこで, where the speaker takes action in response. すると is what happened; そこで is what someone decided to do.
`,
    sentences: [
      s("ボタンを押した。{すると}、ドアが開いた。", "ボタンをおした。{すると}、ドアがあいた。", "I pressed the button. At that, the door opened.", {
        near: [["そして", "そして is a plain \"and\". For \"and then, as a result\", use すると."]],
      }),
      s("窓を開けた。{すると}、冷たい風が入ってきた。", "まどをあけた。{すると}、つめたいかぜがはいってきた。", "I opened the window, and a cold wind blew in.", {
        near: [["そして", "そして is a plain \"and\". For \"and then, as a result\", use すると."]],
      }),
      s("「明日は休みです。」「{すると}、会議はないんですね。」", "「あしたはやすみです。」「{すると}、かいぎはないんですね。」", "\"Tomorrow's a holiday.\" \"So there's no meeting, then?\"", {
        accept: ["じゃあ"],
        near: [["ところで", "ところで changes the subject. For \"so then\", use すると."]],
      }),
      s("薬を飲んだ。{すると}、すぐに痛みが消えた。", "くすりをのんだ。{すると}、すぐにいたみがきえた。", "I took the medicine, and the pain went away at once.", {
        near: [["だから", "だから is \"so\" for reasons. For what happened next, use すると."]],
      }),
      s("猫の名前を呼んだ。{すると}、猫が走ってきた。", "ねこのなまえをよんだ。{すると}、ねこがはしってきた。", "I called the cat's name, and it came running.", {
        near: [["そして", "そして is a plain \"and\". For \"and then, as a result\", use すると."]],
      }),
    ],
  }),

  point({
    id: "n3-sokode",
    title: "そこで",
    meaning: "so, and so (someone took action)",
    structure: "Situation。そこで、action taken。",
    related: ["n4-sorede", "n3-suruto"],
    explanation: `
**そこで** introduces a deliberate action taken in response to a situation: 道がわからなかった。そこで、交番で聞いた, "I didn't know the way. So I asked at the police box".

The first sentence is a problem or a need; the second is what someone decided to do about it: 聞いた, 頼んだ, 決めた, 始めた.

It's close to それで, but それで can describe any consequence, including feelings and things that just happened. そこで is specifically "and so, we acted".

Compare すると, which is what happened next, not what anyone chose. そこで literally means "there", as in "at that point".
`,
    sentences: [
      s("道がわからなかった。{そこで}、交番で聞いた。", "みちがわからなかった。{そこで}、こうばんできいた。", "I didn't know the way. So I asked at the police box.", {
        accept: ["それで"],
        near: [["すると", "すると is \"and then (something happened)\". For \"so I did\", use そこで."]],
      }),
      s("客が減ってきた。{そこで}、値段を下げることにした。", "きゃくがへってきた。{そこで}、ねだんをさげることにした。", "Customers were falling away. So we decided to lower our prices.", {
        accept: ["それで"],
        near: [["すると", "すると is \"and then (something happened)\". For \"so we decided\", use そこで."]],
      }),
      s("一人では無理だった。{そこで}、友達に手伝いを頼んだ。", "ひとりではむりだった。{そこで}、ともだちにてつだいをたのんだ。", "I couldn't manage on my own. So I asked a friend for help.", {
        accept: ["それで"],
        near: [["ところが", "ところが is an unexpected \"but\". For \"so (I took action)\", use そこで."]],
      }),
      s("英語が苦手だ。{そこで}、毎朝ラジオで勉強している。", "えいごがにがてだ。{そこで}、まいあさラジオでべんきょうしている。", "I'm bad at English. So I study with the radio every morning.", {
        accept: ["それで"],
        near: [["すると", "すると is \"and then (something happened)\". For \"so I do\", use そこで."]],
      }),
      s("雨がやまない。{そこで}、試合を来週に延ばした。", "あめがやまない。{そこで}、しあいをらいしゅうにのばした。", "The rain wouldn't stop. So we postponed the match to next week.", {
        accept: ["それで"],
        near: [["ところが", "ところが is an unexpected \"but\". For \"so we did\", use そこで."]],
      }),
    ],
  }),

  point({
    id: "n3-tadashi",
    title: "ただし",
    meaning: "however, but (a condition or exception)",
    structure: "Statement。ただし、condition / exception。",
    related: ["n3-tokoroga", "n5-demo"],
    explanation: `
**ただし** adds a condition or an exception to what was just said: 入場は無料です。ただし、予約が必要です, "entry is free. However, you need to book".

It's the "terms and conditions" but. The first sentence is generally true or allowed; ただし narrows it: 写真を撮ってもいいです。ただし、フラッシュは使わないでください.

It's common on notices, in rules, instructions and explanations. It doesn't contradict the first sentence, it limits it.

Compare しかし, a general "but" that can contradict, and ところが, which describes an unexpected turn of events. In a reading passage, ただし usually introduces the detail that matters most, so it's worth slowing down for.
`,
    sentences: [
      s("明日は休みです。{ただし}、午前中は電話に出ます。", "あしたはやすみです。{ただし}、ごぜんちゅうはでんわにでます。", "I'm off tomorrow. However, I'll answer the phone in the morning.", {
        near: [["しかし", "しかし is a general \"but\". For adding a condition, use ただし."]],
      }),
      s("入場は無料です。{ただし}、予約が必要です。", "にゅうじょうはむりょうです。{ただし}、よやくがひつようです。", "Entry is free. However, you need to book.", {
        near: [["しかし", "しかし is a general \"but\". For adding a condition, use ただし."]],
      }),
      s("写真を撮ってもいいです。{ただし}、フラッシュは使わないでください。", "しゃしんをとってもいいです。{ただし}、フラッシュはつかわないでください。", "You may take photos. However, please don't use the flash.", {
        near: [["ところが", "ところが is an unexpected turn. For a condition, use ただし."]],
      }),
      s("毎日営業しています。{ただし}、祝日は休みです。", "まいにちえいぎょうしています。{ただし}、しゅくじつはやすみです。", "We're open every day. However, we're closed on public holidays.", {
        near: [["しかし", "しかし is a general \"but\". For an exception, use ただし."]],
      }),
      s("辞書を使っても構いません。{ただし}、電子辞書はだめです。", "じしょをつかってもかまいません。{ただし}、でんしじしょはだめです。", "You may use a dictionary. Electronic dictionaries aren't allowed, though.", {
        near: [["ところが", "ところが is an unexpected turn. For an exception, use ただし."]],
      }),
    ],
  }),

  point({
    id: "n3-nazenara",
    title: "なぜなら〜からだ",
    meaning: "the reason is (that), because",
    structure: "Statement。なぜなら / なぜかというと、reason + からだ。",
    related: ["n5-kara-because", "n4-dakara", "n3-ka-to-iu-to"],
    explanation: `
**なぜなら** gives the reason after the statement, and the sentence usually ends with **からだ** or からです: 私は反対だ。なぜなら、お金がかかりすぎるからだ, "I'm against it. The reason is that it costs too much".

It's formal and logical, common in essays, speeches and debates. In conversation, people usually just add から to the end.

**なぜかというと** is a slightly softer version. Don't confuse it with なぜか, "for some reason".

Compare だから, which goes the other way: reason first, then result. With なぜなら, the result comes first and the reason follows.
`,
    sentences: [
      s("私は反対だ。{なぜなら}、お金がかかりすぎるからだ。", "わたしははんたいだ。{なぜなら}、おかねがかかりすぎるからだ。", "I'm against it. The reason is that it costs too much.", {
        accept: ["なぜかというと"],
        near: [["だから", "だから is \"so\" (a result). For giving the reason, use なぜなら."]],
      }),
      s("今日は早く帰ります。{なぜなら}、子どもの誕生日だからです。", "きょうははやくかえります。{なぜなら}、こどものたんじょうびだからです。", "I'm going home early today, because it's my child's birthday.", {
        accept: ["なぜかというと"],
        near: [["だから", "だから is \"so\" (a result). For giving the reason, use なぜなら."]],
      }),
      s("彼は来ないだろう。{なぜなら}、風邪をひいているからだ。", "かれはこないだろう。{なぜなら}、かぜをひいているからだ。", "He probably won't come, because he's got a cold.", {
        accept: ["なぜかというと"],
        near: [["それで", "それで is a result. For giving the reason, use なぜなら."]],
      }),
      s("日本語を勉強している。{なぜなら}、日本で働きたいからだ。", "にほんごをべんきょうしている。{なぜなら}、にほんではたらきたいからだ。", "I'm studying Japanese, because I want to work in Japan.", {
        accept: ["なぜかというと"],
        near: [["だから", "だから is \"so\" (a result). For giving the reason, use なぜなら."]],
      }),
      s("私は猫が好きだ。{なぜかというと}、自由だからだ。", "わたしはねこがすきだ。{なぜかというと}、じゆうだからだ。", "I like cats. The reason is that they're so independent.", {
        accept: ["なぜなら"],
        near: [["なぜか", "なぜか is \"for some reason\". For \"the reason is\", use なぜかというと."]],
      }),
    ],
  }),
];
