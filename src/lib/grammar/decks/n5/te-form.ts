import { point, s, word } from "../../build";

/** Plain forms, the て-form, and everything built on them. */

const POLITE_NOT_CASUAL = "That's the polite form. This sentence is casual: use the plain form.";

export const teForm = [
  point({
    id: "n5-plain-present",
    title: "Dictionary form",
    meaning: "does, will do (plain)",
    structure: "Verb dictionary form (食べる, 行く, する)",
    register: "Casual between friends and family; standard in writing that isn't addressed to anyone.",
    related: ["n5-masu", "n5-nai", "n5-da"],
    explanation: `
The **dictionary form** is the plain, casual present: 食べる, "(I) eat, will eat"; 行く, "(I'll) go". It's the ます form without the politeness: 食べます ↔ 食べる.

Between friends and family, whole conversations run on plain forms: 明日何時に起きる? "what time are you getting up tomorrow?" Novels, diaries and news articles use them too.

Even in polite speech, the dictionary form is everywhere **inside** sentences: before nouns (読む本, "a book to read"), before 前に (寝る前に), and before のが好き (読むのが好き). Only the final verb carries the politeness.

To get it from the ます form: ichidan 食べます → 食べる; godan 飲みます → 飲む, 帰ります → 帰る; します → する; 来ます → 来る (くる).
`,
    sentences: [
      s("明日、何時に{起きる}？", "あした、なんじに{おきる}？", "What time are you getting up tomorrow?", {
        hint: "起きます, casual",
        near: [["起きます", POLITE_NOT_CASUAL]],
      }),
      s("毎朝コーヒーを{飲む}よ。", "まいあさコーヒーを{のむ}よ。", "I drink coffee every morning.", {
        hint: "飲みます, casual",
        near: [["飲みます", POLITE_NOT_CASUAL]],
      }),
      s("週末は家で{勉強する}。", "しゅうまつはいえで{べんきょうする}。", "I'm studying at home this weekend.", {
        hint: "勉強します, casual",
        near: [["勉強します", POLITE_NOT_CASUAL]],
      }),
      s("今日は早く{帰る}ね。", "きょうははやく{かえる}ね。", "I'm heading home early today.", {
        hint: "帰ります, casual",
        near: [["帰ります", POLITE_NOT_CASUAL]],
      }),
      s("田中さんも{来る}？", "たなかさんも{くる}？", "Is Tanaka coming too?", {
        hint: "来ます, casual",
        near: [
          ["来ます", POLITE_NOT_CASUAL],
          ["きる", "来る is read くる in the dictionary form: 来ます is きます, but 来る is くる."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-nai",
    title: "〜ない",
    meaning: "doesn't, won't (plain negative)",
    structure: "Verb ない-stem + ない",
    related: ["n5-plain-present", "n5-masen", "n5-nakatta"],
    explanation: `
**〜ない** is the plain negative: 食べない, "(I) don't eat"; 行かない, "(I'm) not going". It's ません without the politeness.

How to build it:

- ichidan verbs drop る: 食べる → 食べない, 見る → 見ない
- godan verbs move the last kana to the a-row: 飲む → 飲まない, 帰る → 帰らない. Verbs ending in う use わ: 会う → 会わない
- する → しない, 来る → 来ない (こない)
- ある → ない, on its own

The result behaves like an い-adjective, so it makes its past like one: 食べない → 食べなかった, the next-but-one point.
`,
    sentences: [
      s("今日は学校に{行かない}。", "きょうはがっこうに{いかない}。", "I'm not going to school today.", {
        hint: "行く",
        conj: { word: word("行く"), form: "negative", marker: "ない" },
        near: [["行きません", POLITE_NOT_CASUAL]],
      }),
      s("私はお酒を{飲まない}。", "わたしはおさけを{のまない}。", "I don't drink.", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "negative", marker: "ない" },
        near: [["飲むない", "Godan verbs move to the a-row before ない: 飲まない."]],
      }),
      s("肉は{食べない}の？", "にくは{たべない}の？", "You don't eat meat?", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "negative", marker: "ない" },
        near: [["食べません", POLITE_NOT_CASUAL]],
      }),
      s("今日は雨が{降らない}。", "きょうはあめが{ふらない}。", "It isn't going to rain today.", {
        hint: "降る",
        conj: { word: word("降る"), form: "negative", marker: "ない" },
        near: [["降りない", "降る is a godan verb: 降らない. (降りない is from 降りる, \"get off\".)"]],
      }),
      s("明日は{来ない}よ。", "あしたは{こない}よ。", "I won't be coming tomorrow.", {
        hint: "来る",
        conj: { word: word("来る"), form: "negative", marker: "ない" },
        near: [["きない", "来る is irregular: its negative is 来ない, read こない."]],
      }),
      s("最近、友達と{会わない}。", "さいきん、ともだちと{あわない}。", "I haven't been seeing my friends lately.", {
        hint: "会う",
        conj: { word: word("会う"), form: "negative", marker: "ない" },
        near: [["あいない", "Verbs ending in う use わ before ない: 会わない."]],
      }),
    ],
  }),

  point({
    id: "n5-ta",
    title: "〜た",
    meaning: "did (plain past)",
    structure: "Verb た-form",
    related: ["n5-mashita", "n5-te-and", "n5-nakatta"],
    explanation: `
**〜た** is the plain past: 食べた, "(I) ate"; 行った, "(I) went". It's ました without the politeness.

Ichidan verbs just swap る for た (食べた), and the irregulars are した and 来た (きた). Godan verbs change their last sound:

- う, つ, る → った: 買った, 待った, 帰った
- む, ぶ, ぬ → んだ: 飲んだ, 遊んだ, 死んだ
- く → いた, ぐ → いだ: 書いた, 泳いだ
- す → した: 話した
- and 行く, the one exception: 行った

Learn this once and you have the て-form too: it's the same, with て/で in place of た/だ.
`,
    sentences: [
      s("昨日、友達と映画を{見た}。", "きのう、ともだちとえいがを{みた}。", "I saw a film with a friend yesterday.", {
        hint: "見る",
        conj: { word: word("見る"), form: "past", marker: "た" },
        near: [["見ました", POLITE_NOT_CASUAL]],
      }),
      s("宿題、もう{した}？", "しゅくだい、もう{した}？", "Have you done your homework yet?", {
        hint: "する",
        conj: { word: word("する"), form: "past", marker: "た" },
        near: [["しました", POLITE_NOT_CASUAL]],
      }),
      s("駅まで{走った}。", "えきまで{はしった}。", "I ran to the station.", {
        hint: "走る",
        conj: { word: word("走る"), form: "past", marker: "た" },
        near: [["走た", "走る is a godan verb, even though it ends in る: 走った."]],
      }),
      s("昨日はよく{寝た}。", "きのうはよく{ねた}。", "I slept well last night.", {
        hint: "寝る",
        conj: { word: word("寝る"), form: "past", marker: "た" },
        near: [["寝ました", POLITE_NOT_CASUAL]],
      }),
      s("先週、京都に{行った}よ。", "せんしゅう、きょうとに{いった}よ。", "I went to Kyoto last week.", {
        hint: "行く",
        conj: { word: word("行く"), form: "past", marker: "た" },
        near: [["行いた", "行く is the one exception: 行った, not 行いた."]],
      }),
      s("母に手紙を{書いた}。", "ははにてがみを{かいた}。", "I wrote a letter to my mother.", {
        hint: "書く",
        conj: { word: word("書く"), form: "past", marker: "た" },
        near: [["書った", "Godan verbs ending in く take いた: 書いた."]],
      }),
    ],
  }),

  point({
    id: "n5-nakatta",
    title: "〜なかった",
    meaning: "didn't (plain past negative)",
    structure: "Verb ない-stem + なかった",
    related: ["n5-nai", "n5-ta", "n5-masen-deshita"],
    explanation: `
The plain past negative: take the ない form and change ない to **なかった**, exactly as an い-adjective does. 食べない → 食べなかった, "(I) didn't eat"; 行かない → 行かなかった, "(I) didn't go".

It's the casual equivalent of ませんでした.

The usual trap is 食べないだった or 食べないでした. ない never takes だ or でした; its past is built into it.

Politely, add です: 食べなかったです, which is common in conversation and means the same as 食べませんでした.

Irregulars follow their ない forms: しなかった, 来なかった (こなかった). And ある, whose negative is just ない, becomes なかった: 時間がなかった, "there wasn't time".
`,
    sentences: [
      s("昨日は何も{食べなかった}。", "きのうはなにも{たべなかった}。", "I didn't eat anything yesterday.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "past-negative", marker: "なかった" },
        near: [["食べないだった", "ない works like an い-adjective: its past is なかった."]],
      }),
      s("パーティーには{行かなかった}。", "パーティーには{いかなかった}。", "I didn't go to the party.", {
        hint: "行く",
        conj: { word: word("行く"), form: "past-negative", marker: "なかった" },
        near: [["行きませんでした", POLITE_NOT_CASUAL]],
      }),
      s("田中さん、{来なかった}ね。", "たなかさん、{こなかった}ね。", "Tanaka didn't come, did he?", {
        hint: "来る",
        conj: { word: word("来る"), form: "past-negative", marker: "なかった" },
        near: [["きなかった", "来る is irregular: its negative is こない, so the past is こなかった."]],
      }),
      s("昨日は雨が{降らなかった}。", "きのうはあめが{ふらなかった}。", "It didn't rain yesterday.", {
        hint: "降る",
        conj: { word: word("降る"), form: "past-negative", marker: "なかった" },
        near: [["降らない", "That's present. 昨日 puts this in the past."]],
      }),
      s("ごめん、宿題を{しなかった}。", "ごめん、しゅくだいを{しなかった}。", "Sorry, I didn't do my homework.", {
        hint: "する",
        conj: { word: word("する"), form: "past-negative", marker: "なかった" },
        near: [["しないでした", "ない works like an い-adjective: its past is なかった."]],
      }),
    ],
  }),

  point({
    id: "n5-te-and",
    title: "〜て (and then)",
    meaning: "…and (then)…, joining actions",
    structure: "Verb て-form, Verb",
    related: ["n5-ta", "n5-te-kara", "n5-adj-te"],
    explanation: `
The **て-form** joins actions in the order they happen: 朝起きて、顔を洗います, "I get up in the morning and wash my face".

Only the last verb shows tense and politeness; the earlier ones are all て-forms. 家に帰って、ご飯を食べました is "I went home and ate", past because of ました at the end.

It's built like the た-form, with て/で for た/だ: 食べて, 買って, 飲んで, 書いて, 泳いで, 話して, して, 来て (きて), and 行って.

The て-form is the most useful form in the language. The next several points (てください, ている, てもいい, てから…) are all built on it.
`,
    sentences: [
      s("朝{起きて}、顔を洗います。", "あさ{おきて}、かおをあらいます。", "I get up in the morning and wash my face.", {
        hint: "起きる",
        conj: { word: word("起きる"), form: "te", marker: "て" },
        near: [["起きます", "Only the last verb carries tense and politeness. Earlier ones go in the て-form."]],
      }),
      s("家に{帰って}、晩ご飯を食べました。", "いえに{かえって}、ばんごはんをたべました。", "I went home and had dinner.", {
        hint: "帰る",
        conj: { word: word("帰る"), form: "te", marker: "て" },
        near: [["帰て", "帰る is a godan verb, even though it ends in る: 帰って."]],
      }),
      s("デパートに{行って}、服を買いました。", "デパートに{いって}、ふくをかいました。", "I went to the department store and bought some clothes.", {
        hint: "行く",
        conj: { word: word("行く"), form: "te", marker: "て" },
        near: [["行いて", "行く is the one exception: 行って, not 行いて."]],
      }),
      s("本を{読んで}、寝ました。", "ほんを{よんで}、ねました。", "I read a book and went to sleep.", {
        hint: "読む",
        conj: { word: word("読む"), form: "te", marker: "で" },
        near: [["読みて", "Godan verbs ending in む take んで: 読んで."]],
      }),
      s("シャワーを{浴びて}、出かけます。", "シャワーを{あびて}、でかけます。", "I'll have a shower and head out.", {
        hint: "浴びる",
        conj: { word: word("浴びる"), form: "te", marker: "て" },
        near: [["浴びます", "Only the last verb carries tense and politeness. Earlier ones go in the て-form."]],
      }),
    ],
  }),

  point({
    id: "n5-te-kudasai",
    title: "〜てください",
    meaning: "please do",
    structure: "Verb て-form + ください",
    related: ["n5-naide-kudasai", "n5-wo-kudasai", "n5-te-and"],
    explanation: `
て-form + **ください** makes a polite request: 窓を開けてください, "please open the window"; ちょっと待ってください, "please wait a moment".

It's polite, but it's still telling someone to do something, so it suits instructions, directions and everyday favours. Teachers, doctors and signs use it constantly.

Among friends, the て-form alone does the same job: ちょっと待って! "hang on!"

For more delicate requests, adults soften it: 開けてくださいませんか ("would you mind opening it?"). And for "please give me" a thing, it's noun + をください, which you've already met.
`,
    sentences: [
      s("窓を{開けてください}。", "まどを{あけてください}。", "Please open the window.", {
        hint: "開ける",
        conj: { word: word("開ける"), form: "te", tail: "ください" },
        near: [["開けて", "That's the casual request. Add ください to make it polite."]],
      }),
      s("すみません、もう一度{言ってください}。", "すみません、もういちど{いってください}。", "Sorry, could you say that again?", {
        hint: "言う",
        conj: { word: word("言う"), form: "te", tail: "ください" },
        near: [["言いてください", "Godan verbs ending in う take って: 言って."]],
      }),
      s("ここに名前を{書いてください}。", "ここになまえを{かいてください}。", "Please write your name here.", {
        hint: "書く",
        conj: { word: word("書く"), form: "te", tail: "ください" },
        near: [["書きてください", "Godan verbs ending in く take いて: 書いて."]],
      }),
      s("ちょっと{待ってください}。", "ちょっと{まってください}。", "Please wait a moment.", {
        hint: "待つ",
        conj: { word: word("待つ"), form: "te", tail: "ください" },
        near: [["待って", "That's the casual request. Add ください to make it polite."]],
      }),
      s("もう少しゆっくり{話してください}。", "もうすこしゆっくり{はなしてください}。", "Please speak a little more slowly.", {
        hint: "話す",
        conj: { word: word("話す"), form: "te", tail: "ください" },
        near: [["話しください", "ください goes on the て-form: 話してください."]],
      }),
    ],
  }),

  point({
    id: "n5-naide-kudasai",
    title: "〜ないでください",
    meaning: "please don't",
    structure: "Verb ない-form + でください",
    related: ["n5-te-kudasai", "n5-nai", "n5-te-wa-ikenai"],
    explanation: `
To ask someone **not** to do something, add **でください** to the ない form: 写真を撮らないでください, "please don't take photos"; 心配しないでください, "please don't worry".

It's the ない form plus で, not なくて: 撮らなくてください is a common slip.

Like てください, it's a polite instruction, so you'll see it on signs everywhere: 入らないでください, 触らないでください.

Among friends, drop ください: 心配しないで, "don't worry". A flat rule, rather than a request, is てはいけません, a couple of points on.

To make it gentler still, add ね: 忘れないでくださいね, "don't forget, okay?"
`,
    sentences: [
      s("ここで写真を{撮らないでください}。", "ここでしゃしんを{とらないでください}。", "Please don't take photos here.", {
        hint: "撮る",
        conj: { word: word("撮る", "とる", "godan"), form: "negative", tail: "でください" },
        near: [["撮らなくてください", "For \"please don't\", it's ないで, not なくて."]],
      }),
      s("心配{しないでください}。", "しんぱい{しないでください}。", "Please don't worry.", {
        hint: "する",
        conj: { word: word("する"), form: "negative", tail: "でください" },
        near: [["しないで", "That's the casual version. Add ください to make it polite."]],
      }),
      s("教室で{食べないでください}。", "きょうしつで{たべないでください}。", "Please don't eat in the classroom.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "negative", tail: "でください" },
        near: [["食べなくてください", "For \"please don't\", it's ないで, not なくて."]],
      }),
      s("このドアを{開けないでください}。", "このドアを{あけないでください}。", "Please don't open this door.", {
        hint: "開ける",
        conj: { word: word("開ける"), form: "negative", tail: "でください" },
        near: [["開けてください", "That's \"please open it\". For \"please don't\", use the ない form."]],
      }),
      s("危ないですから、{触らないでください}。", "あぶないですから、{さわらないでください}。", "It's dangerous, so please don't touch it.", {
        hint: "触る",
        conj: { word: word("触る", "さわる", "godan"), form: "negative", tail: "でください" },
        near: [["触ってはいけません", "That's a rule (\"you mustn't\"). As a request, use ないでください."]],
      }),
    ],
  }),

  point({
    id: "n5-te-iru",
    title: "〜ている (in progress)",
    meaning: "is doing",
    structure: "Verb て-form + いる / います",
    register: "Casual speech shortens ている to てる: 食べてる.",
    related: ["n5-te-iru-state", "n5-te-and"],
    explanation: `
て-form + **いる** describes an action in progress: 今ご飯を食べています, "I'm eating right now"; 雨が降っている, "it's raining".

The plain dictionary form can't do this. 食べます is "I eat" or "I'll eat"; for right now, you need ています.

It also covers repeated actions over a period: 毎日ジムに通っています, "I'm going to the gym every day (these days)".

In speech the い drops: 食べてる, 何してるの? Both versions are accepted here.

With some verbs, ている means a resulting state rather than an action in progress; that's the next point.
`,
    sentences: [
      s("今、ご飯を{食べています}。", "いま、ごはんを{たべています}。", "I'm eating right now.", {
        hint: "食べる, polite",
        conj: { word: word("食べる"), form: "polite-progressive", marker: "ます" },
        near: [["食べます", "That's \"I eat / will eat\". For right now, use ています."]],
      }),
      s("弟は部屋で{寝ている}。", "おとうとはへやで{ねている}。", "My little brother is sleeping in his room.", {
        hint: "寝る, casual",
        conj: { word: word("寝る"), form: "progressive", marker: "る" },
        near: [["寝ています", POLITE_NOT_CASUAL]],
      }),
      s("外で雨が{降っています}。", "そとであめが{ふっています}。", "It's raining outside.", {
        hint: "降る, polite",
        conj: { word: word("降る"), form: "polite-progressive", marker: "ます" },
        near: [["降ります", "That's \"it will rain\". For right now, use ています."]],
      }),
      s("今、何を{していますか}。", "いま、なにを{していますか}。", "What are you doing right now?", {
        hint: "する, polite",
        conj: { word: word("する"), form: "polite-progressive", tail: "か", marker: "か" },
        near: [["しますか", "That's \"what will you do?\". For right now, use ていますか."]],
      }),
      s("子どもたちが公園で{遊んでいる}。", "こどもたちがこうえんで{あそんでいる}。", "The children are playing in the park.", {
        hint: "遊ぶ, casual",
        conj: { word: word("遊ぶ"), form: "progressive", marker: "る" },
        near: [["遊ぶ", "That's \"they play\" in general. For right now, use ている."]],
      }),
    ],
  }),

  point({
    id: "n5-te-iru-state",
    title: "〜ている (state)",
    meaning: "is (in a state), has done and still is",
    structure: "Verb て-form + いる / います",
    related: ["n5-te-iru"],
    explanation: `
With verbs that describe a change (marry, live, open, know), **ている** describes the state the change left behind, not an action in progress:

- 結婚しています: "is married" (not "is getting married")
- 住んでいます: "lives (somewhere)"
- 窓が開いています: "the window is open"
- 知っています: "knows"

So 結婚しました is the event, "got married", and 結婚しています is the result, "is married".

Wearing things works the same way: 眼鏡をかけています, "wears glasses".

One oddity: the negative of 知っています is 知りません (or 知らない), not 知っていません.

Whether a verb's ている means "in progress" or "state" comes from the verb itself; with practice you stop thinking about it.
`,
    sentences: [
      s("姉は{結婚しています}。", "あねは{けっこんしています}。", "My older sister is married.", {
        hint: "結婚する",
        conj: { word: word("結婚する", "けっこんする", "irregular"), form: "polite-progressive", marker: "ます" },
        near: [["結婚しました", "That's \"got married\", the event. For being married now, use ています."]],
      }),
      s("今、東京に{住んでいます}。", "いま、とうきょうに{すんでいます}。", "I live in Tokyo now.", {
        hint: "住む",
        conj: { word: word("住む"), form: "polite-progressive", marker: "ます" },
        near: [["住みます", "住みます is \"will live\". For where you live now, use ています."]],
      }),
      s("田中さんの電話番号を{知っていますか}。", "たなかさんのでんわばんごうを{しっていますか}。", "Do you know Mr Tanaka's phone number?", {
        hint: "知る",
        conj: { word: word("知る"), form: "polite-progressive", tail: "か", marker: "か" },
        near: [["知りますか", "知る is \"come to know\". For knowing something now, use 知っています."]],
      }),
      s("窓が{開いています}ね。", "まどが{あいています}ね。", "The window's open, isn't it?", {
        hint: "開く",
        conj: { word: word("開く", "あく", "godan"), form: "polite-progressive", marker: "ます" },
        near: [["開けています", "開ける is \"open (something)\". For the window being open, use 開く: 開いています."]],
      }),
      s("父は眼鏡を{かけています}。", "ちちはめがねを{かけています}。", "My father wears glasses.", {
        hint: "かける",
        conj: { word: word("かける", "かける", "ichidan"), form: "polite-progressive", marker: "ます" },
        near: [["かけます", "かけます is \"put on\". For wearing them, use ています."]],
      }),
    ],
  }),

  point({
    id: "n5-te-mo-ii",
    title: "〜てもいい",
    meaning: "may, it's okay to",
    structure: "Verb て-form + もいい (ですか)",
    related: ["n5-te-wa-ikenai", "n5-nakute-mo-ii"],
    explanation: `
て-form + **もいい** means "it's all right to": 帰ってもいいです, "you may go home". As a question it asks permission: 座ってもいいですか, "may I sit here?"

Literally "even if (you) do it, it's good", which is why the も is there. In speech it's often shortened to ていい: 座っていい?

Common answers: はい、どうぞ ("yes, go ahead"), or to refuse politely, すみません、ちょっと… or ここはだめなんです.

The opposite, "you mustn't", is てはいけない, the next point. And "you don't have to" is なくてもいい, which is built the same way on the ない form.
`,
    sentences: [
      s("ここに{座ってもいいですか}。", "ここに{すわってもいいですか}。", "May I sit here?", {
        hint: "座る",
        conj: { word: word("座る", "すわる", "godan"), form: "te", tail: "もいいですか" },
        near: [["座っていいですか", "That's a common spoken shortcut. This point practises the full てもいい."]],
      }),
      s("窓を{開けてもいいですか}。", "まどを{あけてもいいですか}。", "Is it okay if I open the window?", {
        hint: "開ける",
        conj: { word: word("開ける"), form: "te", tail: "もいいですか" },
        near: [["開けましょうか", "That's an offer (\"shall I?\"). To ask permission, use てもいいですか."]],
      }),
      s("もう{帰ってもいいです}よ。", "もう{かえってもいいです}よ。", "You can go home now.", {
        hint: "帰る",
        conj: { word: word("帰る"), form: "te", tail: "もいいです" },
        near: [["帰ってください", "That's \"please go home\". For permission, use てもいいです."]],
      }),
      s("写真を{撮ってもいい}？", "しゃしんを{とってもいい}？", "Can I take a photo?", {
        hint: "撮る, casual",
        conj: { word: word("撮る", "とる", "godan"), form: "te", tail: "もいい" },
        near: [["撮ってもいいですか", "Right, but that's polite. This sentence is casual."]],
      }),
      s("鉛筆で{書いてもいいです}。", "えんぴつで{かいてもいいです}。", "You may write in pencil.", {
        hint: "書く",
        conj: { word: word("書く"), form: "te", tail: "もいいです" },
        near: [["書かなくてもいいです", "That's \"you don't have to write\". For \"you may\", use てもいい."]],
      }),
    ],
  }),

  point({
    id: "n5-te-wa-ikenai",
    title: "〜てはいけない",
    meaning: "must not",
    structure: "Verb て-form + はいけない / はいけません",
    register: "Casual speech shortens ては to ちゃ (and では to じゃ): 寝ちゃいけない.",
    related: ["n5-te-mo-ii", "n5-naide-kudasai", "n5-nakereba-naranai"],
    explanation: `
て-form + **はいけない** states a prohibition: ここでたばこを吸ってはいけません, "you mustn't smoke here". Literally "if you do it, it won't do".

It sounds like a rule, so it's what teachers, parents and signs say. For a request, ないでください is softer, and for yourself, it's more natural to say what you have to do.

In speech ては becomes ちゃ and では becomes じゃ: 寝ちゃいけない, 飲んじゃだめ. だめ is a casual swap for いけない.

The は here is the particle, so it's pronounced wa, even inside this long ending.
`,
    sentences: [
      s("ここでたばこを{吸ってはいけません}。", "ここでたばこを{すってはいけません}。", "You mustn't smoke here.", {
        hint: "吸う",
        conj: { word: word("吸う", "すう", "godan"), form: "te", tail: "はいけません" },
        near: [["吸わないでください", "That's a request (\"please don't\"). This point is the rule: てはいけません."]],
      }),
      s("授業中に{寝てはいけない}。", "じゅぎょうちゅうに{ねてはいけない}。", "You mustn't sleep in class.", {
        hint: "寝る, casual",
        conj: { word: word("寝る"), form: "te", tail: "はいけない" },
        accept: ["寝ちゃいけない", "ねちゃいけない"],
        near: [["寝てもいい", "That's \"you may sleep\". For \"mustn't\", use てはいけない."]],
      }),
      s("お酒を飲んで車を{運転してはいけません}。", "おさけをのんでくるまを{うんてんしてはいけません}。", "You mustn't drive after drinking.", {
        hint: "運転する",
        conj: { word: word("運転する"), form: "te", tail: "はいけません" },
        near: [["運転しないでください", "That's a request. For a rule like this, use てはいけません."]],
      }),
      s("このボタンを{押してはいけません}。", "このボタンを{おしてはいけません}。", "You mustn't press this button.", {
        hint: "押す",
        conj: { word: word("押す"), form: "te", tail: "はいけません" },
        near: [["押さないでください", "That's a request. For a rule, use てはいけません."]],
      }),
      s("図書館で大きい声で{話してはいけません}。", "としょかんでおおきいこえで{はなしてはいけません}。", "You mustn't talk loudly in the library.", {
        hint: "話す",
        conj: { word: word("話す"), form: "te", tail: "はいけません" },
        near: [["話してもいいです", "That's \"you may talk\". For \"mustn't\", use てはいけません."]],
      }),
    ],
  }),

  point({
    id: "n5-nakereba-naranai",
    title: "〜なければならない",
    meaning: "must, have to",
    structure: "Verb ない-stem + なければならない / なりません",
    register: "なければいけない means the same; なきゃ is the casual shortcut.",
    related: ["n5-nakute-mo-ii", "n5-te-wa-ikenai"],
    explanation: `
**なければならない** means "must" or "have to": 薬を飲まなければならない, "I have to take my medicine". It's built from the ない form: ない → なければ ("if not") + ならない ("it won't do"). So, literally, "if I don't take it, it won't do".

Politely: なければなりません. なければいけません means the same and is equally common; both are accepted here.

It's long, so speech shortens it a lot: 飲まなきゃ, 飲まないと. You'll hear those far more often than the full form in anime and conversation.

For "don't have to", see the next point.
`,
    sentences: [
      s("明日は六時に{起きなければなりません}。", "あしたはろくじに{おきなければなりません}。", "I have to get up at six tomorrow.", {
        hint: "起きる",
        conj: { word: word("起きる"), form: "ba-negative", tail: "なりません" },
        accept: ["起きなければいけません", "おきなければいけません"],
        near: [["起きなきゃ", "That's the casual shortcut. This sentence is polite: なければなりません."]],
      }),
      s("毎日、薬を{飲まなければならない}。", "まいにち、くすりを{のまなければならない}。", "I have to take my medicine every day.", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "ba-negative", tail: "ならない" },
        accept: ["飲まなければいけない", "のまなければいけない"],
        near: [["飲まなきゃ", "That's the casual shortcut. This point practises the full form."]],
      }),
      s("今日中に宿題を{しなければなりません}。", "きょうじゅうにしゅくだいを{しなければなりません}。", "I have to finish my homework today.", {
        hint: "する",
        conj: { word: word("する"), form: "ba-negative", tail: "なりません" },
        accept: ["しなければいけません"],
        near: [["しないといけません", "That means the same and is common in speech. This point practises なければなりません."]],
      }),
      s("明日までにレポートを{書かなければならない}。", "あしたまでにレポートを{かかなければならない}。", "I have to write a report by tomorrow.", {
        hint: "書く",
        conj: { word: word("書く"), form: "ba-negative", tail: "ならない" },
        accept: ["書かなければいけない", "かかなければいけない"],
        near: [["書くなければならない", "なければ goes on the ない-stem: 書か + なければ."]],
      }),
      s("すみません、もう{帰らなければなりません}。", "すみません、もう{かえらなければなりません}。", "Sorry, I have to go home now.", {
        hint: "帰る",
        conj: { word: word("帰る"), form: "ba-negative", tail: "なりません" },
        accept: ["帰らなければいけません", "かえらなければいけません"],
        near: [["帰らなきゃ", "That's the casual shortcut. This sentence is polite: なければなりません."]],
      }),
    ],
  }),

  point({
    id: "n5-nakute-mo-ii",
    title: "〜なくてもいい",
    meaning: "don't have to",
    structure: "Verb ない-form − い + くてもいい",
    related: ["n5-nakereba-naranai", "n5-te-mo-ii"],
    explanation: `
**なくてもいい** means "don't have to" or "no need to": 明日は来なくてもいいです, "you don't have to come tomorrow". It's てもいい built on the ない form: 来ない → 来なくて + もいい, "even if you don't come, it's fine".

It's the natural answer to a なければなりません question: 明日も来なければなりませんか。——いいえ、来なくてもいいですよ.

Speech often drops the も: 来なくていいよ.

Don't mix it up with ないでください. 書かないでください is "please don't write"; 書かなくてもいいです is "you don't need to write" (but you can).

As a question, なくてもいいですか asks whether you can skip something: 行かなくてもいいですか, "is it okay if I don't go?"
`,
    sentences: [
      s("明日は{来なくてもいいです}。", "あしたは{こなくてもいいです}。", "You don't have to come tomorrow.", {
        hint: "来る",
        conj: { word: word("来る"), form: "negative", cut: "い", tail: "くてもいいです" },
        near: [["来ないでください", "That's \"please don't come\". For \"no need to\", use なくてもいい."]],
      }),
      s("全部{食べなくてもいい}よ。", "ぜんぶ{たべなくてもいい}よ。", "You don't have to eat it all.", {
        hint: "食べる, casual",
        conj: { word: word("食べる"), form: "negative", cut: "い", tail: "くてもいい" },
        near: [["食べなくていい", "That's the spoken shortcut. This point practises the full なくてもいい."]],
      }),
      s("靴を{脱がなくてもいいですか}。", "くつを{ぬがなくてもいいですか}。", "Is it okay not to take my shoes off?", {
        hint: "脱ぐ",
        conj: { word: word("脱ぐ"), form: "negative", cut: "い", tail: "くてもいいですか" },
        near: [["脱いでもいいですか", "That's \"may I take them off?\". For \"is it okay not to\", use なくてもいい."]],
      }),
      s("まだ時間がありますから、{急がなくてもいいです}よ。", "まだじかんがありますから、{いそがなくてもいいです}よ。", "There's still time, so no need to hurry.", {
        hint: "急ぐ",
        conj: { word: word("急ぐ"), form: "negative", cut: "い", tail: "くてもいいです" },
        near: [["急がないでください", "That's \"please don't hurry\". For \"no need to\", use なくてもいい."]],
      }),
      s("ここに名前は{書かなくてもいいです}。", "ここになまえは{かかなくてもいいです}。", "You don't need to write your name here.", {
        hint: "書く",
        conj: { word: word("書く"), form: "negative", cut: "い", tail: "くてもいいです" },
        near: [["書かないでください", "That's \"please don't write it\". For \"no need to\", use なくてもいい."]],
      }),
    ],
  }),

  point({
    id: "n5-te-kara",
    title: "〜てから",
    meaning: "after doing, once … (then)",
    structure: "Verb て-form + から",
    related: ["n5-te-and", "n5-ato-de", "n5-kara-made"],
    explanation: `
て-form + **から** means "after doing A, (then) B", with the emphasis on the order: 宿題をしてから遊びます, "I'll play after I've done my homework", in other words, not before.

Plain て-form joining (起きて、顔を洗う) just lists actions in order. てから insists the first is finished before the second starts, which is why it's the natural choice for instructions: 手を洗ってから食べてください.

It also marks a starting point in time: 日本に来てから三年です, "it's been three years since I came to Japan".

Careful: past + から (したから) means "because I did". The て-form is what makes it "after".
`,
    sentences: [
      s("宿題を{してから}遊びます。", "しゅくだいを{してから}あそびます。", "I'll play after I've done my homework.", {
        hint: "する",
        conj: { word: word("する"), form: "te", tail: "から" },
        near: [["したから", "したから is \"because I did\". For \"after doing\", use the て-form: してから."]],
      }),
      s("手を{洗ってから}食べてください。", "てを{あらってから}たべてください。", "Please wash your hands before you eat.", {
        hint: "洗う",
        conj: { word: word("洗う", "あらう", "godan"), form: "te", tail: "から" },
        near: [["洗ったから", "That's \"because I washed\". For \"after washing\", use the て-form."]],
      }),
      s("日本に{来てから}、日本語の勉強を始めました。", "にほんに{きてから}、にほんごのべんきょうをはじめました。", "I started learning Japanese after I came to Japan.", {
        hint: "来る",
        conj: { word: word("来る"), form: "te", tail: "から" },
        near: [["来たから", "That's \"because I came\". For \"after coming\", use the て-form."]],
      }),
      s("先に電話を{かけてから}行きます。", "さきにでんわを{かけてから}いきます。", "I'll call first, then head over.", {
        hint: "かける",
        conj: { word: word("かける", "かける", "ichidan"), form: "te", tail: "から" },
        near: [["かけたから", "That's \"because I called\". For \"after calling\", use the て-form."]],
      }),
      s("晩ご飯を{食べてから}、テレビを見ました。", "ばんごはんを{たべてから}、テレビをみました。", "After dinner I watched TV.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "te", tail: "から" },
        near: [["食べたから", "That's \"because I ate\". For \"after eating\", use the て-form."]],
      }),
    ],
  }),

  point({
    id: "n5-tari-tari",
    title: "〜たり〜たりする",
    meaning: "do things like A and B",
    structure: "Verb た-form + り, Verb た-form + り + する",
    related: ["n5-ta", "n5-te-and", "n5-ya"],
    explanation: `
**たり** gives examples of actions, the way や gives examples of things: 週末は本を読んだり、映画を見たりします, "at weekends I read, watch films, that sort of thing".

Build it from the た-form plus り: 読んだり, 見たり, 行ったり. The list ends with する, which carries the tense and politeness: したり**します**, したり**しました**.

Compare the て-form, which lists actions in the order they happened. たり makes no claim about order or completeness: these are just some of the things.

One たり on its own is fine too: 時々散歩したりします, "I sometimes do things like go for walks".
`,
    sentences: [
      s("週末は本を{読んだり}、映画を見たりします。", "しゅうまつはほんを{よんだり}、えいがをみたりします。", "At weekends I read, watch films, that sort of thing.", {
        hint: "読む",
        conj: { word: word("読む"), form: "past", tail: "り" },
        near: [["読んで", "The て-form lists actions in order. For examples of things you do, use たり."]],
      }),
      s("休みの日は{掃除したり}、洗濯したりします。", "やすみのひは{そうじしたり}、せんたくしたりします。", "On my days off I clean, do the washing and so on.", {
        hint: "掃除する",
        conj: { word: word("掃除する", "そうじする", "irregular"), form: "past", tail: "り" },
        near: [["掃除して", "The て-form lists actions in order. For examples, use たり."]],
      }),
      s("昨日は友達と{話したり}、ゲームをしたりしました。", "きのうはともだちと{はなしたり}、ゲームをしたりしました。", "Yesterday I chatted with friends, played games and so on.", {
        hint: "話す",
        conj: { word: word("話す"), form: "past", tail: "り" },
        near: [["話すり", "たり goes on the た-form: 話した + り."]],
      }),
      s("京都でお寺を{見たり}、写真を撮ったりしました。", "きょうとでおてらを{みたり}、しゃしんをとったりしました。", "In Kyoto I looked round temples, took photos and so on.", {
        hint: "見る",
        conj: { word: word("見る"), form: "past", tail: "り" },
        near: [["見て", "The て-form lists actions in order. For examples, use たり."]],
      }),
      s("夏休みは海で{泳いだり}、山に登ったりしたい。", "なつやすみはうみで{およいだり}、やまにのぼったりしたい。", "In the summer holidays I want to swim in the sea, climb mountains and so on.", {
        hint: "泳ぐ",
        conj: { word: word("泳ぐ"), form: "past", tail: "り" },
        near: [["泳いで", "The て-form lists actions in order. For examples, use たり."]],
      }),
    ],
  }),

  point({
    id: "n5-ta-koto-ga-aru",
    title: "〜たことがある",
    meaning: "have (ever) done",
    structure: "Verb た-form + ことがある",
    related: ["n5-ta", "n5-arimasu"],
    explanation: `
た-form + **ことがある** talks about experience: 富士山に登ったことがあります, "I've climbed Mount Fuji (at some point)". Literally "there is the fact of having climbed".

The negative is ことがない / ことがありません: 納豆を食べたことがない, "I've never eaten natto". As a question it's "have you ever…?": 日本に行ったことがありますか.

It's for experience, not for something just done. "I've already eaten (lunch)" is もう食べました, not 食べたことがある.

With the dictionary form, ことがある means something different: "there are times when" (時々遅れることがある, "I'm sometimes late"). So the た is doing real work here: it's what makes it "have done".
`,
    sentences: [
      s("富士山に{登ったことがあります}。", "ふじさんに{のぼったことがあります}。", "I've climbed Mount Fuji.", {
        hint: "登る",
        conj: { word: word("登る", "のぼる", "godan"), form: "past", tail: "ことがあります" },
        near: [["登りました", "That's just \"I climbed\". For \"I've done it (at some point)\", use たことがある."]],
      }),
      s("日本に{行ったことがありますか}。", "にほんに{いったことがありますか}。", "Have you ever been to Japan?", {
        hint: "行く",
        conj: { word: word("行く"), form: "past", tail: "ことがありますか" },
        near: [["行きましたか", "That's \"did you go?\". For \"have you ever been?\", use たことがありますか."]],
      }),
      s("納豆は{食べたことがない}。", "なっとうは{たべたことがない}。", "I've never eaten natto.", {
        hint: "食べる, casual",
        conj: { word: word("食べる"), form: "past", tail: "ことがない" },
        near: [["食べることがない", "With the dictionary form it means \"there's no occasion to eat\". For experience, use the た-form."]],
      }),
      s("その映画は{見たことがあります}。", "そのえいがは{みたことがあります}。", "I've seen that film.", {
        hint: "見る",
        conj: { word: word("見る"), form: "past", tail: "ことがあります" },
        near: [["見ることがあります", "With the dictionary form it means \"I sometimes watch it\". For experience, use the た-form."]],
      }),
      s("着物を{着たことがありません}。", "きものを{きたことがありません}。", "I've never worn a kimono.", {
        hint: "着る",
        conj: { word: word("着る"), form: "past", tail: "ことがありません" },
        near: [["着ませんでした", "That's \"I didn't wear one\". For \"never have\", use たことがありません."]],
      }),
    ],
  }),

  point({
    id: "n5-verb-no",
    title: "〜のが好き・上手",
    meaning: "like / be good at doing",
    structure: "Verb dictionary form + のが + 好き / 上手 / 下手",
    related: ["n5-ga-suki", "n5-ga-jouzu"],
    explanation: `
好き, 上手 and 下手 need a noun before が. To use a verb there, turn it into a noun with **の**: 本を読むのが好きです, "I like reading"; 料理を作るのが上手です, "(he) is good at cooking".

Think of 読むの as "reading": the dictionary form plus の is a noun made from the action.

こと does the same job and you'll see it too (読むことが好き); の sounds more everyday, こと a little more formal or abstract. Both are fine.

The が stays, because 好き is still an adjective: 読むのを好き is wrong.
`,
    sentences: [
      s("本を読む{のが}好きです。", "ほんをよむ{のが}すきです。", "I like reading.", {
        near: [
          ["が", "A verb can't take が directly. Turn it into a noun with の first: 読むのが."],
          ["のを", "好き takes が: 読むのが好き."],
          ["ことが", "ことが works too and sounds a little more formal. This point practises の."],
        ],
      }),
      s("兄は料理を作る{のが}上手です。", "あにはりょうりをつくる{のが}じょうずです。", "My older brother is good at cooking.", {
        near: [
          ["が", "A verb can't take が directly. Turn it into a noun with の first: 作るのが."],
          ["のを", "上手 takes が: 作るのが上手."],
        ],
      }),
      s("朝早く起きる{のが}苦手です。", "あさはやくおきる{のが}にがてです。", "I'm not good at getting up early.", {
        near: [["が", "A verb can't take が directly. Turn it into a noun with の first: 起きるのが."]],
      }),
      s("泳ぐ{のが}好きですか。", "およぐ{のが}すきですか。", "Do you like swimming?", {
        near: [
          ["のを", "好き takes が: 泳ぐのが好き."],
          ["ことが", "ことが works too and sounds a little more formal. This point practises の."],
        ],
      }),
      s("私は絵を描く{のが}下手です。", "わたしはえをかく{のが}へたです。", "I'm bad at drawing.", {
        near: [["が", "A verb can't take が directly. Turn it into a noun with の first: 描くのが."]],
      }),
    ],
  }),

  point({
    id: "n5-mou",
    title: "もう",
    meaning: "already, (not) anymore, more",
    structure: "もう + verb / もう + negative / もう + number",
    related: ["n5-mada", "n5-mashita"],
    explanation: `
**もう** has three everyday jobs:

- With a positive verb, "already": もう食べました, "I've already eaten". In a question, "yet": もう食べましたか, "have you eaten yet?"
- With a negative, "not anymore": もう東京に住んでいません, "I don't live in Tokyo anymore".
- Before a number, "more, another": もう一つ, "one more"; もう少し, "a little more".

Its partner is まだ, "still / not yet", the next point. The natural answer to もう〜ましたか is either はい、もう〜ました or いいえ、まだです.

On its own, with a sigh, もう! is exasperation: "honestly!"
`,
    sentences: [
      s("宿題は{もう}終わりました。", "しゅくだいは{もう}おわりました。", "I've already finished my homework.", {
        hint: "already",
        near: [["まだ", "まだ is \"still / not yet\". For \"already\", use もう."]],
      }),
      s("{もう}昼ご飯を食べましたか。", "{もう}ひるごはんをたべましたか。", "Have you had lunch yet?", {
        hint: "yet",
        near: [["まだ", "In a question like this, \"yet\" is もう."]],
      }),
      s("あ、{もう}十時ですよ。", "あ、{もう}じゅうじですよ。", "Oh, it's already ten o'clock!", {
        hint: "already",
        near: [["まだ", "まだ十時 is \"it's only ten\". For \"already\", use もう."]],
      }),
      s("{もう}一つください。", "{もう}ひとつください。", "One more, please.", {
        hint: "one more",
        near: [["また", "また is \"again\". For \"one more\", use もう一つ."]],
      }),
      s("{もう}東京に住んでいません。", "{もう}とうきょうにすんでいません。", "I don't live in Tokyo anymore.", {
        hint: "anymore",
        near: [["まだ", "まだ住んでいません is \"I don't live there yet\". For \"anymore\", use もう."]],
      }),
    ],
  }),

  point({
    id: "n5-mada",
    title: "まだ",
    meaning: "still, not yet",
    structure: "まだ + verb / まだ + ていません",
    related: ["n5-mou", "n5-te-iru"],
    explanation: `
**まだ** means "still" with a positive verb and "not yet" with a negative:

- まだ雨が降っています, "it's still raining"
- まだ食べていません, "I haven't eaten yet"

For "not yet", Japanese uses the ている form, **ていません**, because it describes the current state: you're still in the not-having-eaten state. 食べませんでした would be "I didn't eat (at that time)", which closes the door.

The quick answer to もう〜ましたか is いいえ、まだです, "no, not yet".

まだまだ is "still far from it", the modest reply to a compliment on your Japanese.
`,
    sentences: [
      s("昼ご飯は{まだ}食べていません。", "ひるごはんは{まだ}たべていません。", "I haven't had lunch yet.", {
        hint: "not yet",
        near: [["もう", "もう with a negative is \"not anymore\". For \"not yet\", use まだ."]],
      }),
      s("雨は{まだ}降っています。", "あめは{まだ}ふっています。", "It's still raining.", {
        hint: "still",
        near: [["もう", "もう is \"already\". For \"still\", use まだ."]],
      }),
      s("いいえ、{まだ}です。", "いいえ、{まだ}です。", "No, not yet.", {
        hint: "not yet",
        near: [["もう", "The answer to もう〜ましたか, when you haven't, is まだです."]],
      }),
      s("父は{まだ}会社にいます。", "ちちは{まだ}かいしゃにいます。", "My father's still at work.", {
        hint: "still",
        near: [["もう", "もう会社にいます is \"he's already at work\". For \"still\", use まだ."]],
      }),
      s("{まだ}時間がありますから、大丈夫です。", "{まだ}じかんがありますから、だいじょうぶです。", "We've still got time, so it's fine.", {
        hint: "still",
        near: [["もう", "もう時間がありません would be \"there's no time left\". For \"still\", use まだ."]],
      }),
    ],
  }),
];
