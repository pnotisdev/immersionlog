import { point, s } from "../../build";

/** Why things happen: thanks, blame, formal causes, excuses and results. */

export const cause = [
  point({
    id: "n3-okage-de",
    title: "〜おかげで",
    meaning: "thanks to (a good result)",
    structure: "Noun + のおかげで · Plain form + おかげで (な-adj + な)",
    related: ["n3-sei-de", "n4-node"],
    explanation: `
**おかげで** gives the cause of something good, with a note of gratitude: 先生のおかげで合格できました, "thanks to my teacher, I passed". After a noun it takes の; after a verb or adjective it follows the plain form directly: 薬を飲んだおかげで, 天気がよかったおかげで.

Its opposite is せいで, which blames the cause for something bad. Picking the wrong one changes the whole feeling of the sentence.

**おかげさまで** is a set phrase for answering "how are you?" or "how did it go?": はい、おかげさまで, "fine, thank you". It thanks the other person politely, even if they didn't do anything in particular.

Used for a bad result, おかげで turns sarcastic: 君のおかげで遅刻したよ, "thanks a lot, you made me late".
`,
    sentences: [
      s("先生の{おかげで}、試験に合格できました。", "せんせいの{おかげで}、しけんにごうかくできました。", "Thanks to my teacher, I was able to pass the exam.", {
        near: [["せいで", "せいで blames something for a bad result. For a good one, use おかげで."]],
      }),
      s("薬を飲んだ{おかげで}、熱が下がった。", "くすりをのんだ{おかげで}、ねつがさがった。", "Thanks to the medicine, my fever went down.", {
        near: [["せいで", "せいで blames something for a bad result. For a good one, use おかげで."]],
      }),
      s("友達が手伝ってくれた{おかげで}、早く終わりました。", "ともだちがてつだってくれた{おかげで}、はやくおわりました。", "Because my friend helped me, I finished early.", {
        near: [["ために", "ために works in writing, but to sound grateful, use おかげで."]],
      }),
      s("天気がよかった{おかげで}、楽しい旅行になりました。", "てんきがよかった{おかげで}、たのしいりょこうになりました。", "Thanks to the good weather, it turned into a fun trip.", {
        near: [["せいで", "せいで blames something for a bad result. For a good one, use おかげで."]],
      }),
      s("「お元気ですか。」「はい、{おかげさまで}。」", "「おげんきですか。」「はい、{おかげさまで}。」", "\"How are you?\" \"Fine, thank you.\"", {
        near: [["おかげで", "In the set reply, it's the polite おかげさまで."]],
      }),
    ],
  }),

  point({
    id: "n3-sei-de",
    title: "〜せいで・〜せいか",
    meaning: "because of (blame); maybe because",
    structure: "Noun + のせいで · Plain form + せいで (な-adj + な)",
    related: ["n3-okage-de", "n3-tame-reason"],
    explanation: `
**せいで** gives the cause of something bad and puts the blame on it: 雨のせいで試合が中止になった, "the match was called off because of the rain". It attaches like おかげで: の after a noun, the plain form after a verb or adjective.

It's often used to point a finger: 彼が遅れたせいで, "because he was late". Said about yourself, 私のせいで, it's an apology: "it's my fault".

**せいか** softens it to a guess: 年のせいか、最近よく疲れる, "maybe it's my age, but I get tired easily these days". The speaker suspects the cause but isn't sure.

For a neutral statement of cause, as in news reports, ため is used instead.
`,
    sentences: [
      s("雨の{せいで}、試合が中止になった。", "あめの{せいで}、しあいがちゅうしになった。", "The match was called off because of the rain.", {
        near: [["おかげで", "おかげで is for good results. For a bad one, use せいで."]],
      }),
      s("寝不足の{せいで}、頭が痛い。", "ねぶそくの{せいで}、あたまがいたい。", "My head hurts because I didn't get enough sleep.", {
        near: [["おかげで", "おかげで is for good results. For a bad one, use せいで."]],
      }),
      s("彼が遅れた{せいで}、電車に乗り遅れた。", "かれがおくれた{せいで}、でんしゃにのりおくれた。", "Because he was late, we missed the train.", {
        near: [["おかげで", "おかげで is for good results, or sarcasm. To lay the blame, use せいで."]],
      }),
      s("私の{せいで}、みんなに迷惑をかけてしまった。", "わたしの{せいで}、みんなにめいわくをかけてしまった。", "It's my fault that everyone was put to trouble.", {
        near: [["ために", "ために is neutral. To take the blame, use せいで."]],
      }),
      s("年の{せいか}、最近よく疲れる。", "としの{せいか}、さいきんよくつかれる。", "Maybe it's my age, but I get tired easily these days.", {
        near: [["せいで", "せいで states the cause. For \"maybe because\", use せいか."]],
      }),
    ],
  }),

  point({
    id: "n3-tame-reason",
    title: "〜ため(に) (because)",
    meaning: "because of, due to (formal)",
    structure: "Noun + のため(に) · Plain form + ため(に) (な-adj + な)",
    related: ["n4-tame-ni", "n3-sei-de", "n4-node"],
    explanation: `
At N4, ために meant "in order to". The same word also gives a **cause**, in a formal, neutral way: 大雪のため、電車が止まっています, "trains are stopped due to heavy snow".

You'll meet it in announcements, news, notices and business writing. In conversation, から and ので are far more common.

How do you tell the two meanings apart? Purpose needs a verb someone chooses to do, and usually the dictionary form: 合格するために勉強する. A cause is often a past event, a state or a noun: 事故があったため, 体調が悪いため.

The に is optional in the cause meaning, and is often left off: 工事のため、通れません.
`,
    sentences: [
      s("大雪の{ため}、電車が止まっています。", "おおゆきの{ため}、でんしゃがとまっています。", "Trains are stopped due to heavy snow.", {
        accept: ["ために"],
        near: [["せいで", "That blames the snow. Announcements use the neutral のため."]],
      }),
      s("事故があった{ため}、道が込んでいる。", "じこがあった{ため}、みちがこんでいる。", "The roads are busy because there was an accident.", {
        accept: ["ために"],
        near: [["ので", "That works in speech. News and notices use ため."]],
      }),
      s("工事の{ため}、この道は通れません。", "こうじの{ため}、このみちはとおれません。", "This road is closed due to construction work.", {
        accept: ["ために"],
        near: [["ので", "After a noun, ので needs な (工事なので). The formal choice is のため."]],
      }),
      s("体調が悪い{ため}、今日は休みます。", "たいちょうがわるい{ため}、きょうはやすみます。", "I'll be off today as I'm not feeling well.", {
        accept: ["ために"],
        near: [["から", "That's fine in speech. In a formal message, use ため."]],
      }),
      s("台風の{ために}、飛行機が遅れた。", "たいふうの{ために}、ひこうきがおくれた。", "The flight was delayed because of the typhoon.", {
        accept: ["ため"],
        near: [["おかげで", "おかげで is for good results. For a neutral cause, use ために."]],
      }),
    ],
  }),

  point({
    id: "n3-mono-da-kara",
    title: "〜ものだから・〜もので",
    meaning: "because, you see (an excuse)",
    structure: "Plain form + ものだから / もので (な-adj, Noun + な)",
    related: ["n4-node", "n5-kara-because", "n3-mon"],
    explanation: `
**ものだから** gives a reason as an excuse or a personal explanation: 目覚ましが鳴らなかったものですから、遅れてしまいました, "my alarm didn't go off, you see, so I was late". It says "it couldn't be helped".

**もので** is a shorter version, common in polite apologies: 道が込んでいたもので, "the roads were busy, you see". In casual speech, both shrink to もんだから and もんで.

After a noun or な-adjective, add な: 初めてなもので, "it's my first time, you see".

It's not for giving orders or requests: ものだから can't be followed by "so please …". It explains what already happened, usually something you're apologising for or excusing.
`,
    sentences: [
      s("目覚ましが鳴らなかった{ものですから}、遅れてしまいました。", "めざましがならなかった{ものですから}、おくれてしまいました。", "My alarm didn't go off, you see, so I was late.", {
        accept: ["もので", "ものだから", "もんですから", "もんで"],
        near: [["から", "That states a reason. For a polite excuse, use ものですから."]],
      }),
      s("道が込んでいた{もので}、遅くなりました。", "みちがこんでいた{もので}、おそくなりました。", "The roads were busy, I'm afraid, so I'm late.", {
        accept: ["ものですから", "ものだから", "もんで"],
        near: [["ので", "ので is neutral. As an apologetic excuse, use もので."]],
      }),
      s("子どもが熱を出した{ものだから}、会議を休んだ。", "こどもがねつをだした{ものだから}、かいぎをやすんだ。", "My child came down with a fever, so I missed the meeting.", {
        accept: ["もので", "もんだから"],
        near: [["から", "That states a reason. For an excuse, use ものだから."]],
      }),
      s("あまりにおいしかった{もので}、全部食べてしまいました。", "あまりにおいしかった{もので}、ぜんぶたべてしまいました。", "It was so good that I ended up eating it all.", {
        accept: ["ものですから", "ものだから", "もんで"],
        near: [["ので", "ので is neutral. To excuse yourself, use もので."]],
      }),
      s("初めてな{もので}、よくわからないんです。", "はじめてな{もので}、よくわからないんです。", "It's my first time, you see, so I don't really understand.", {
        accept: ["ものですから", "ものだから"],
        near: [["もの", "With a reason, it's もので or ものですから."]],
      }),
    ],
  }),

  point({
    id: "n3-kekka",
    title: "〜結果",
    meaning: "as a result of, after (doing)",
    structure: "Verb た-form + 結果 · Noun + の + 結果",
    related: ["n3-tame-reason", "n4-koto-ni-suru"],
    explanation: `
**結果** means "result". After a た-form or a noun with の, it introduces the outcome of an effort, a process or a decision: よく考えた結果、留学することにしました, "after thinking it over, I decided to study abroad".

It's common with 考える, 話し合う (discuss), 調べる and 調査 (investigation), and in reports: 調査の結果、原因がわかった, "the investigation found the cause".

Compare あとで, which only gives the order of events. 結果 says the second part came out of the first.

As an ordinary noun it's "results": 検査の結果, "test results"; 試合の結果, "the result of the match". その結果 at the start of a sentence means "as a result".
`,
    sentences: [
      s("よく考えた{結果}、留学することにしました。", "よくかんがえた{けっか}、りゅうがくすることにしました。", "After thinking it over carefully, I decided to study abroad.", {
        near: [["あとで", "あとで is just \"after\". For \"as a result of\", use 結果."]],
      }),
      s("調査の{結果}、原因がわかった。", "ちょうさの{けっか}、げんいんがわかった。", "As a result of the investigation, the cause became clear.", {
        near: [["ために", "ために is a cause or an aim. For an outcome, use 結果."]],
      }),
      s("毎日練習した{結果}、上手に話せるようになった。", "まいにちれんしゅうした{けっか}、じょうずにはなせるようになった。", "As a result of practising every day, I became able to speak well.", {
        near: [["ので", "ので gives a reason. 結果 presents the outcome of an effort."]],
      }),
      s("話し合った{結果}、計画を変えることになった。", "はなしあった{けっか}、けいかくをかえることになった。", "After discussing it, we ended up changing the plan.", {
        near: [["あとで", "あとで is just \"after\". For \"as a result of\", use 結果."]],
      }),
      s("検査の{結果}は来週わかります。", "けんさの{けっか}はらいしゅうわかります。", "The test results will be out next week.", {
        near: [["おかげ", "おかげ is for thanks. Test results are 結果."]],
      }),
    ],
  }),

  point({
    id: "n3-kara-ni-wa",
    title: "〜からには",
    meaning: "now that, since (so I must)",
    structure: "Plain form + からには",
    related: ["n5-kara-because", "n5-nakereba-naranai"],
    explanation: `
**からには** gives a reason that commits you to something: やると決めたからには、最後まで頑張ります, "now that I've decided to do it, I'll see it through".

The first part is a decision, a promise or a situation you've accepted. The second part is what that obliges you to do or want: a resolve (頑張る), a duty (なければならない), a wish (たい) or advice (べきだ).

Compare plain から, which just gives a cause: 約束したから行く, "I'm going because I promised". 約束したからには行かなければならない adds "having promised, I have no choice".

It sounds determined, a little formal, and is common in speeches and resolutions.
`,
    sentences: [
      s("やると決めた{からには}、最後まで頑張ります。", "やるときめた{からには}、さいごまでがんばります。", "Now that I've decided to do it, I'll see it through to the end.", {
        near: [["から", "から is a plain reason. For \"now that … I must\", use からには."]],
      }),
      s("約束した{からには}、守らなければならない。", "やくそくした{からには}、まもらなければならない。", "Since I promised, I have to keep my word.", {
        near: [["から", "から is a plain reason. For \"having promised, I must\", use からには."]],
      }),
      s("日本に来た{からには}、日本語をしっかり勉強したい。", "にほんにきた{からには}、にほんごをしっかりべんきょうしたい。", "Now that I've come to Japan, I want to study Japanese properly.", {
        near: [["ので", "ので is neutral. からには adds \"so I'm going to make it count\"."]],
      }),
      s("試合に出る{からには}、勝ちたい。", "しあいにでる{からには}、かちたい。", "If I'm going to play in the match, I want to win.", {
        near: [["から", "から is a plain reason. For \"if I'm going to, then\", use からには."]],
      }),
      s("引き受けた{からには}、責任を持ってやります。", "ひきうけた{からには}、せきにんをもってやります。", "Having taken it on, I'll do it responsibly.", {
        near: [["けど", "That's \"but\". For \"now that I've taken it on\", use からには."]],
      }),
    ],
  }),

  point({
    id: "n3-kara-to-itte",
    title: "〜からといって",
    meaning: "just because … (doesn't mean)",
    structure: "Plain form + からといって + negative",
    related: ["n5-kara-because", "n4-temo", "n3-wake-de-wa-nai", "n3-to-wa-kagiranai"],
    explanation: `
**からといって** heads off a conclusion someone might jump to: 高いからといって、いい物とは限らない, "just because it's expensive doesn't mean it's good".

The first part is a reason; the second says it's not enough. So the end is almost always negative: とは限らない (not necessarily), わけではない (it's not that), のはよくない (it's not good to), 必要はない (no need to).

Nouns and な-adjectives take だ: 日本人だからといって, "just because someone is Japanese".

In casual speech it shortens to **からって**: 忙しいからって、ご飯を抜いちゃだめだよ, "being busy is no excuse to skip meals".
`,
    sentences: [
      s("高い{からといって}、いい物とは限らない。", "たかい{からといって}、いいものとはかぎらない。", "Just because it's expensive doesn't mean it's good.", {
        accept: ["からって"],
        near: [["から", "から alone makes it a reason. For \"just because … doesn't mean\", use からといって."]],
      }),
      s("日本人だ{からといって}、敬語が上手なわけではない。", "にほんじんだ{からといって}、けいごがじょうずなわけではない。", "Being Japanese doesn't necessarily mean you're good at keigo.", {
        accept: ["からって"],
        near: [["から", "から alone makes it a reason. For \"just because … doesn't mean\", use からといって."]],
      }),
      s("忙しい{からといって}、ご飯を食べないのはよくない。", "いそがしい{からといって}、ごはんをたべないのはよくない。", "Being busy is no excuse for skipping meals.", {
        accept: ["からって"],
        near: [["のに", "のに is \"even though\". For \"just because\", use からといって."]],
      }),
      s("一度失敗した{からといって}、あきらめる必要はない。", "いちどしっぱいした{からといって}、あきらめるひつようはない。", "Just because you failed once doesn't mean you have to give up.", {
        accept: ["からって"],
        near: [["から", "から alone makes it a reason. For \"just because … doesn't mean\", use からといって."]],
      }),
      s("子どもだ{からといって}、何をしてもいいわけじゃない。", "こどもだ{からといって}、なにをしてもいいわけじゃない。", "Being a child doesn't mean you can do whatever you like.", {
        accept: ["からって"],
        near: [["ので", "ので is a plain reason. For \"just because\", use からといって."]],
      }),
    ],
  }),
];
