import { point, s } from "../../build";

/** Asking questions, and counting things, people and time. */

const NAN_BEFORE = "Right word, wrong reading here: before です, の and counters, 何 is read なん.";
const NANI_BEFORE = "Right word, wrong reading here: before を, が and most particles, 何 is read なに.";

export const questions = [
  point({
    id: "n5-nani",
    title: "何",
    meaning: "what",
    structure: "何 (なに / なん)",
    related: ["n5-question-ka", "n5-question-mo", "n5-donna"],
    explanation: `
**何** means "what". It has two readings, and which one to use depends on what follows:

- **なん** before です, before の, before counters (何時, 何人, 何回) and before words starting with t, d or n sounds: これは何ですか, 何時ですか.
- **なに** before を, が, も and most other particles: 何を食べますか, 何がほしいですか.

Get it wrong and you'll still be understood, but it's one of the first things listeners notice.

何 doesn't pick from a set: for "which one", use どれ. And for "what kind of", どんな is more natural than 何の.
`,
    sentences: [
      s("これは{何}ですか。", "これは{なん}ですか。", "What is this?", {
        near: [
          ["なに", NAN_BEFORE],
          ["どれ", "どれ is \"which one\". For \"what\", use 何."],
        ],
      }),
      s("週末は{何}をしましたか。", "しゅうまつは{なに}をしましたか。", "What did you do at the weekend?", {
        near: [["なん", NANI_BEFORE]],
      }),
      s("今、{何}時ですか。", "いま、{なん}じですか。", "What time is it now?", {
        near: [["なに", NAN_BEFORE]],
      }),
      s("趣味は{何}ですか。", "しゅみは{なん}ですか。", "What are your hobbies?", {
        near: [["なに", NAN_BEFORE]],
      }),
      s("昼ご飯に{何}が食べたい？", "ひるごはんに{なに}がたべたい？", "What do you want for lunch?", {
        near: [["なん", NANI_BEFORE]],
      }),
    ],
  }),

  point({
    id: "n5-dare",
    title: "誰・どなた",
    meaning: "who",
    structure: "誰 (polite: どなた)",
    related: ["n5-nani", "n5-question-ka"],
    explanation: `
**誰** (だれ) means "who". It takes particles like any noun: 誰が (who, as subject), 誰と (with whom), 誰に (to whom), and 誰の for "whose": これは誰のですか, "whose is this?"

As a question word it can't take は; the subject version is 誰が: 誰が来ましたか.

**どなた** is the polite version, used about or to someone you should be respectful to: 失礼ですが、どなたですか, "excuse me, may I ask who you are?" Asking a stranger 誰ですか to their face is blunt.

Add か for "someone" (誰か) and も with a negative for "no one" (誰もいない), covered a few points on.
`,
    sentences: [
      s("あの人は{誰}ですか。", "あのひとは{だれ}ですか。", "Who's that?", {
        near: [["何", "何 is \"what\". For a person, use 誰."]],
      }),
      s("これは{誰}のかばんですか。", "これは{だれ}のかばんですか。", "Whose bag is this?", {
        near: [["どれ", "どれ is \"which one\". For whose, use 誰の."]],
      }),
      s("{誰}と一緒に行きましたか。", "{だれ}といっしょにいきましたか。", "Who did you go with?", {
        near: [["何", "何 is \"what\". For a person, use 誰."]],
      }),
      s("昨日、{誰}に会いましたか。", "きのう、{だれ}にあいましたか。", "Who did you see yesterday?", {
        near: [["誰か", "誰か is \"someone\". To ask who, use 誰."]],
      }),
      s("失礼ですが、{どなた}ですか。", "しつれいですが、{どなた}ですか。", "Excuse me, may I ask who you are?", {
        hint: "polite",
        near: [["誰", "誰 is fine among friends. To a stranger, the polite word is どなた."]],
      }),
    ],
  }),

  point({
    id: "n5-itsu",
    title: "いつ",
    meaning: "when",
    structure: "いつ (no に)",
    related: ["n5-ni-time", "n5-question-ka"],
    explanation: `
**いつ** asks "when": 誕生日はいつですか, "when's your birthday?"; いつ来ましたか, "when did you come?"

Like 今日 and 明日, いつ is already a time word, so it never takes に: いつに行きますか is wrong. It does take から and まで: いつから (since when), いつまで (until when).

For the clock time specifically, ask 何時 (なんじ): 何時に始まりますか. いつ is about the day or the occasion, 何時 about the hour.

Two relatives worth knowing: いつも means "always" (いつもここで食べます) and いつか means "someday". And いつでも is "any time": いつでもいいですよ, "any time's fine".
`,
    sentences: [
      s("誕生日は{いつ}ですか。", "たんじょうびは{いつ}ですか。", "When's your birthday?", {
        near: [["何時", "何時 asks the clock time. For a date, use いつ."]],
      }),
      s("{いつ}日本に来ましたか。", "{いつ}にほんにきましたか。", "When did you come to Japan?", {
        near: [["いつに", "いつ is already a time word, so it never takes に."]],
      }),
      s("夏休みは{いつ}からですか。", "なつやすみは{いつ}からですか。", "When do the summer holidays start?", {
        near: [["何時", "何時 asks the clock time. For a date, use いつ."]],
      }),
      s("次の授業は{いつ}？", "つぎのじゅぎょうは{いつ}？", "When's the next class?", {
        near: [["どこ", "どこ is \"where\". For \"when\", use いつ."]],
      }),
      s("{いつ}でもいいですよ。", "{いつ}でもいいですよ。", "Any time is fine.", {
        near: [["何時", "何時でも would be \"at any hour\". For \"any time\" in general, use いつでも."]],
      }),
    ],
  }),

  point({
    id: "n5-doushite",
    title: "どうして・なぜ",
    meaning: "why",
    structure: "どうして / なぜ + question",
    register: "どうして is everyday; なぜ is more formal or written; なんで is casual.",
    related: ["n5-kara-because", "n5-dou"],
    explanation: `
**どうして** and **なぜ** both ask "why". どうして is the everyday word and sounds a little softer; なぜ is more formal and common in writing. Among friends you'll mostly hear なんで.

Answers usually give a reason with から: どうして休みましたか。——風邪を引いたからです, "Why were you off? Because I had a cold."

どうして on its own is a complete question: どうしてですか, "why is that?"

Be careful with なんで: 何で can also mean "by what means" (何で行きますか, "how are you getting there?"), so the polite question "why" is safer as どうして.
`,
    sentences: [
      s("{どうして}昨日休みましたか。", "{どうして}きのうやすみましたか。", "Why were you off yesterday?", {
        accept: ["なぜ"],
        near: [["なんで", "なんで is the casual \"why\". In a polite sentence, use どうして or なぜ."]],
      }),
      s("{どうして}日本語を勉強していますか。", "{どうして}にほんごをべんきょうしていますか。", "Why are you learning Japanese?", {
        accept: ["なぜ"],
        near: [["何", "何 is \"what\". For \"why\", use どうして."]],
      }),
      s("{どうして}来なかったの？", "{どうして}こなかったの？", "Why didn't you come?", {
        accept: ["なぜ", "なんで"],
        near: [["どう", "どう is \"how\". For \"why\", use どうして."]],
      }),
      s("{なぜ}空は青いのでしょうか。", "{なぜ}そらはあおいのでしょうか。", "Why is the sky blue?", {
        accept: ["どうして"],
        near: [["なんで", "なんで is casual. In a written-style question, use なぜ or どうして."]],
      }),
      s("{どうして}ですか。", "{どうして}ですか。", "Why is that?", {
        accept: ["なぜ"],
        near: [["どう", "どうですか is \"how is it?\". For \"why\", use どうして."]],
      }),
    ],
  }),

  point({
    id: "n5-dou",
    title: "どう・いかが",
    meaning: "how (is it)",
    structure: "Topic は + どう / いかが + ですか",
    register: "いかが is the polite version, used for offers and in service language.",
    related: ["n5-donna", "n5-doushite"],
    explanation: `
**どう** asks how something is: 日本の生活はどうですか, "how's life in Japan?"; 昨日の映画はどうだった? "how was the film?"

**いかが** is its polite version, and the standard way to offer something: コーヒーはいかがですか, "would you like some coffee?"

English often says "what" where Japanese says どう: 「この服、どう思う?」 is "what do you think of these clothes?"

どうやって asks by what method: 駅までどうやって行きますか, "how do you get to the station?"

Before a noun, "what kind of" is どんな, the next point. どう itself never goes directly before a noun.
`,
    sentences: [
      s("日本の生活は{どう}ですか。", "にほんのせいかつは{どう}ですか。", "How's life in Japan?", {
        accept: ["いかが"],
        near: [["何", "何ですか asks what it is. For how it is, use どう."]],
      }),
      s("コーヒーは{いかが}ですか。", "コーヒーは{いかが}ですか。", "Would you like some coffee?", {
        hint: "polite offer",
        near: [["どう", "どうですか works, but for offering something, いかがですか is the polite choice."]],
      }),
      s("昨日の映画は{どう}だった？", "きのうのえいがは{どう}だった？", "How was the film yesterday?", {
        near: [["いかが", "いかが is too formal between friends. Use どう."]],
      }),
      s("この服、{どう}思う？", "このふく、{どう}おもう？", "What do you think of these clothes?", {
        near: [["何", "English says \"what\", but Japanese asks どう思う."]],
      }),
      s("駅まで{どう}やって行きますか。", "えきまで{どう}やっていきますか。", "How do you get to the station?", {
        near: [["何", "何で could be \"by what\", but the everyday question is どうやって."]],
      }),
    ],
  }),

  point({
    id: "n5-donna",
    title: "どんな",
    meaning: "what kind of, what … like",
    structure: "どんな + Noun",
    related: ["n5-dou", "n5-kono-sono-ano"],
    explanation: `
**どんな** asks what kind of thing something is, and it always comes right before a noun: どんな音楽が好きですか, "what kind of music do you like?"; 新しい先生はどんな人ですか, "what's the new teacher like?"

It belongs to the こんな・そんな・あんな・どんな family: こんな本 is "a book like this", そんな事 "that sort of thing".

Compare its neighbours:

- どの picks one from a known set: どの本? "which book?"
- どう stands alone before です: どうですか, "how is it?"
- どんな describes the kind: どんな本? "what sort of book?"
`,
    sentences: [
      s("{どんな}音楽を聞きますか。", "{どんな}おんがくをききますか。", "What kind of music do you listen to?", {
        near: [["どの", "どの picks one from a set. For \"what kind\", use どんな."]],
      }),
      s("新しい先生は{どんな}人ですか。", "あたらしいせんせいは{どんな}ひとですか。", "What's the new teacher like?", {
        near: [["どう", "どう can't go before a noun. Before 人, use どんな."]],
      }),
      s("{どんな}映画が好きですか。", "{どんな}えいががすきですか。", "What kind of films do you like?", {
        near: [["何の", "何の映画 would ask which film. For the kind, use どんな."]],
      }),
      s("京都は{どんな}町ですか。", "きょうとは{どんな}まちですか。", "What sort of place is Kyoto?", {
        near: [["どう", "どう can't go before a noun. Before 町, use どんな."]],
      }),
      s("昨日は{どんな}料理を作りましたか。", "きのうは{どんな}りょうりをつくりましたか。", "What kind of food did you make yesterday?", {
        near: [["どの", "どの picks one from a set. For \"what kind\", use どんな."]],
      }),
    ],
  }),

  point({
    id: "n5-ikura-ikutsu",
    title: "いくら・いくつ",
    meaning: "how much (price), how many / how old",
    structure: "いくら ですか / いくつ ありますか",
    related: ["n5-counter-tsu", "n5-de-total"],
    explanation: `
**いくら** asks a price or an amount of money: これはいくらですか, "how much is this?"

**いくつ** asks how many, for things counted with つ: りんごはいくつありますか, "how many apples are there?" It also asks age, politely: おいくつですか, "how old are you?"

For things with their own counter, 何 goes in front of the counter instead: 何人 (how many people), 何本 (how many bottles), 何枚 (how many sheets).

Mixing up いくら and いくつ is one of the most common first-trip-to-Japan slips, and shop staff will usually understand anyway.
`,
    sentences: [
      s("このシャツは{いくら}ですか。", "このシャツは{いくら}ですか。", "How much is this shirt?", {
        near: [["いくつ", "いくつ counts things or asks age. For a price, use いくら."]],
      }),
      s("りんごは{いくつ}ありますか。", "りんごは{いくつ}ありますか。", "How many apples are there?", {
        near: [["いくら", "いくら asks a price. For how many, use いくつ."]],
      }),
      s("妹さんは{いくつ}ですか。", "いもうとさんは{いくつ}ですか。", "How old is your little sister?", {
        near: [["何歳", "何歳 works too, and is a bit more direct. This point practises いくつ."]],
      }),
      s("全部で{いくら}ですか。", "ぜんぶで{いくら}ですか。", "How much is it altogether?", {
        near: [["いくつ", "いくつ counts things. For the total price, use いくら."]],
      }),
      s("卵を{いくつ}買いましたか。", "たまごを{いくつ}かいましたか。", "How many eggs did you buy?", {
        near: [["いくら", "いくら asks a price. For how many, use いくつ."]],
      }),
    ],
  }),

  point({
    id: "n5-question-ka",
    title: "何か・誰か・どこか",
    meaning: "something, someone, somewhere",
    structure: "Question word + か",
    related: ["n5-question-mo", "n5-ka"],
    explanation: `
Add **か** to a question word and it becomes an indefinite "some-" word:

- 何か (なにか): something
- 誰か: someone
- どこか: somewhere
- いつか: someday

何か飲みますか is "would you like something to drink?", a yes/no question, where 何を飲みますか is "what will you drink?", asking for the drink itself.

が and を usually drop after these words (何か食べる, not 何かを食べる, though both occur); other particles stay: どこかへ行く, 誰かに聞く.

The answer to a 何か question is はい or いいえ first, then the detail: はい、お茶をお願いします.
`,
    sentences: [
      s("{何か}飲みますか。", "{なにか}のみますか。", "Would you like something to drink?", {
        near: [["何を", "何を asks what exactly. For \"something\", use 何か."]],
      }),
      s("{誰か}来ましたか。", "{だれか}きましたか。", "Did someone come?", {
        near: [["誰が", "誰が asks who. For \"someone\", use 誰か."]],
      }),
      s("週末、{どこか}へ行きましたか。", "しゅうまつ、{どこか}へいきましたか。", "Did you go anywhere at the weekend?", {
        near: [["どこ", "どこへ行きましたか asks where. For \"anywhere\", use どこか."]],
      }),
      s("{いつか}日本に住みたいです。", "{いつか}にほんにすみたいです。", "I'd like to live in Japan someday.", {
        near: [["いつ", "いつ asks when. For \"someday\", use いつか."]],
      }),
      s("冷蔵庫に{何か}ありますか。", "れいぞうこに{なにか}ありますか。", "Is there anything in the fridge?", {
        near: [["何が", "何が asks what exactly. For \"anything\", use 何か."]],
      }),
    ],
  }),

  point({
    id: "n5-question-mo",
    title: "何も・誰も・どこにも",
    meaning: "nothing, no one, nowhere (with a negative)",
    structure: "Question word + も + negative",
    related: ["n5-question-ka", "n5-mo"],
    explanation: `
A question word plus **も**, with a negative verb, makes "no" words:

- 何も〜ない: nothing
- 誰も〜ない: no one
- どこにも〜ない: nowhere

今日は何も食べていません, "I haven't eaten anything today"; 誰もいません, "there's nobody here".

は, が and を disappear before も, but other particles stay in front of it: どこにも行かない, "not go anywhere"; 誰にも言わない, "not tell anyone".

Compare 何か, "something": the question-word-plus-か words are for "some", the も words for "none". With a positive verb, a couple of them mean "every" instead: いつも is "always", and どこも is "everywhere": どこも人が多い, "it's crowded everywhere".
`,
    sentences: [
      s("今日は{何も}食べていません。", "きょうは{なにも}たべていません。", "I haven't eaten anything today.", {
        near: [["何か", "何か is \"something\". With a negative, \"nothing\" is 何も."]],
      }),
      s("教室には{誰も}いません。", "きょうしつには{だれも}いません。", "There's nobody in the classroom.", {
        near: [["誰か", "誰か is \"someone\". With a negative, \"no one\" is 誰も."]],
      }),
      s("週末は{どこにも}行きませんでした。", "しゅうまつは{どこにも}いきませんでした。", "I didn't go anywhere at the weekend.", {
        accept: ["どこへも"],
        near: [["どこも", "With a verb of going, keep the particle before も: どこにも."]],
      }),
      s("質問は{何も}ありません。", "しつもんは{なにも}ありません。", "I don't have any questions.", {
        near: [["何か", "何か is \"something\". With a negative, \"nothing\" is 何も."]],
      }),
      s("このことは{誰にも}言わないでください。", "このことは{だれにも}いわないでください。", "Please don't tell anyone about this.", {
        near: [["誰も", "言う takes に for the person, and it stays before も: 誰にも."]],
      }),
    ],
  }),

  point({
    id: "n5-counter-tsu",
    title: "〜つ",
    meaning: "general counter (one, two, three things)",
    structure: "一つ, 二つ, 三つ … 九つ, 十",
    related: ["n5-ikura-ikutsu", "n5-counter-nin", "n5-counter-hon", "n5-counter-mai"],
    explanation: `
Japanese doesn't count things with bare numbers; it adds a **counter**. The all-purpose one uses the old native numbers plus つ:

ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, and とお for ten (no つ).

It works for most things that don't have a special counter, and it's the safe choice when ordering: コーヒーを二つください. Past ten, you switch to the ordinary numbers with 個 (じゅういっこ).

The counter usually goes after the thing and its particle, right before the verb: りんごを三つ買いました, "I bought three apples".
`,
    sentences: [
      s("りんごを{三つ}ください。", "りんごを{みっつ}ください。", "Three apples, please.", {
        hint: "3",
        accept: ["3つ"],
        near: [
          ["三個", "三個 works too. This point practises the native つ counter."],
          ["三", "A bare number can't count things. Add a counter: 三つ."],
        ],
      }),
      s("部屋に椅子が{四つ}あります。", "へやにいすが{よっつ}あります。", "There are four chairs in the room.", {
        hint: "4",
        accept: ["4つ"],
        near: [["四個", "四個 works too. This point practises the native つ counter."]],
      }),
      s("質問が{一つ}あります。", "しつもんが{ひとつ}あります。", "I have one question.", {
        hint: "1",
        accept: ["1つ"],
        near: [["一", "A bare number can't count things. Add a counter: 一つ."]],
      }),
      s("コーヒーを{二つ}お願いします。", "コーヒーを{ふたつ}おねがいします。", "Two coffees, please.", {
        hint: "2",
        accept: ["2つ"],
        near: [["二杯", "二杯 (cups) works too. This point practises つ."]],
      }),
      s("箱の中に卵が{六つ}あります。", "はこのなかにたまごが{むっつ}あります。", "There are six eggs in the box.", {
        hint: "6",
        accept: ["6つ"],
        near: [["六個", "六個 works too. This point practises the native つ counter."]],
      }),
    ],
  }),

  point({
    id: "n5-counter-nin",
    title: "〜人",
    meaning: "counter for people",
    structure: "一人 (ひとり), 二人 (ふたり), 三人 (さんにん) …",
    related: ["n5-counter-tsu", "n5-imasu"],
    explanation: `
People are counted with **人**. The first two are irregular and the rest are regular:

ひとり, ふたり, さんにん, **よにん**, ごにん, ろくにん, しちにん or ななにん, はちにん, きゅうにん, じゅうにん. "How many people?" is 何人 (なんにん).

Watch 四人: it's よにん, not よんにん.

一人で means "on your own": 一人で行きました, "I went alone". 二人で is "the two of us".

In restaurants you'll be asked 何名様ですか; 名 is the polite counter for people, and you can answer with 二人です. Holding up fingers works too, and staff do it back.
`,
    sentences: [
      s("家族は{四人}です。", "かぞくは{よにん}です。", "There are four of us in my family.", {
        hint: "4",
        accept: ["4人"],
        near: [["よんにん", "四人 is read よにん, without the ん in the middle."]],
      }),
      s("兄が{二人}います。", "あにが{ふたり}います。", "I have two older brothers.", {
        hint: "2",
        accept: ["2人"],
        near: [["ににん", "The first two are irregular: 一人 ひとり, 二人 ふたり."]],
      }),
      s("{一人}で映画を見に行きました。", "{ひとり}でえいがをみにいきました。", "I went to see a film on my own.", {
        hint: "alone",
        near: [["いちにん", "The first two are irregular: 一人 is ひとり."]],
      }),
      s("教室に学生が{五人}います。", "きょうしつにがくせいが{ごにん}います。", "There are five students in the classroom.", {
        hint: "5",
        accept: ["5人"],
        near: [["五つ", "つ counts things. People are counted with 人: 五人."]],
      }),
      s("クラスに学生は{何人}いますか。", "クラスにがくせいは{なんにん}いますか。", "How many students are in the class?", {
        hint: "how many",
        near: [["いくつ", "いくつ counts things. For people, 何人."]],
      }),
    ],
  }),

  point({
    id: "n5-counter-hon",
    title: "〜本",
    meaning: "counter for long, thin things",
    structure: "一本 (いっぽん), 二本 (にほん), 三本 (さんぼん) …",
    related: ["n5-counter-tsu", "n5-counter-mai"],
    explanation: `
**本** counts long, thin things: pens, bottles, umbrellas, trees, and also trains and films (a "run" of something).

Its sound changes with the number, the same way many counters starting with h do:

- ぼん after 3: さんぼん, and 何本 is なんぼん
- っぽん after 1, 6, 8 and 10: いっぽん, ろっぽん, はっぽん, じゅっぽん
- ほん elsewhere: にほん, よんほん, ごほん, ななほん, きゅうほん

These changes (h → b, h → pp) show up across counters, so learning them here pays off with 杯 (cups) and 匹 (animals) later.
`,
    sentences: [
      s("ペンを{一本}貸してください。", "ペンを{いっぽん}かしてください。", "Could you lend me a pen?", {
        hint: "1",
        accept: ["1本"],
        near: [["いちほん", "一本 is read いっぽん."]],
      }),
      s("ビールを{三本}買いました。", "ビールを{さんぼん}かいました。", "I bought three bottles of beer.", {
        hint: "3",
        accept: ["3本"],
        near: [["さんほん", "After 3, 本 becomes ぼん: さんぼん."]],
      }),
      s("傘立てにかさが{二本}あります。", "かさたてにかさが{にほん}あります。", "There are two umbrellas in the umbrella stand.", {
        hint: "2",
        accept: ["2本"],
        near: [["二つ", "つ works for things in general, but long thin things like umbrellas take 本."]],
      }),
      s("鉛筆は{何本}ありますか。", "えんぴつは{なんぼん}ありますか。", "How many pencils are there?", {
        hint: "how many",
        near: [["なんほん", "何本 is read なんぼん."]],
      }),
      s("一時間に電車が{六本}あります。", "いちじかんにでんしゃが{ろっぽん}あります。", "There are six trains an hour.", {
        hint: "6",
        accept: ["6本"],
        near: [["ろくほん", "After 6, 本 becomes っぽん: ろっぽん."]],
      }),
    ],
  }),

  point({
    id: "n5-counter-mai",
    title: "〜枚",
    meaning: "counter for flat things",
    structure: "一枚, 二枚, 三枚 … (まい)",
    related: ["n5-counter-tsu", "n5-counter-hon"],
    explanation: `
**枚** counts flat, thin things: sheets of paper, tickets, photos, shirts, plates, stamps.

Unlike 本, it has no sound changes: いちまい, にまい, さんまい, よんまい, ごまい… and 何枚 is なんまい.

The choice of counter comes from the shape, not the category, so a shirt is 一枚 (it's flat when folded) while trousers are often 一本 (long). When you don't know the counter, つ is almost always understood, but the right counter sounds natural and is worth picking up as you go.
`,
    sentences: [
      s("切符を{二枚}ください。", "きっぷを{にまい}ください。", "Two tickets, please.", {
        hint: "2",
        accept: ["2枚"],
        near: [["二つ", "つ works for things in general, but flat things like tickets are counted with 枚."]],
      }),
      s("紙を{一枚}ください。", "かみを{いちまい}ください。", "Could I have a sheet of paper?", {
        hint: "1",
        accept: ["1枚"],
        near: [["一つ", "つ works for things in general, but paper is counted with 枚."]],
      }),
      s("写真を{五枚}撮りました。", "しゃしんを{ごまい}とりました。", "I took five photos.", {
        hint: "5",
        accept: ["5枚"],
        near: [["五本", "本 is for long, thin things. Photos are flat: 枚."]],
      }),
      s("シャツを{三枚}買いました。", "シャツを{さんまい}かいました。", "I bought three shirts.", {
        hint: "3",
        accept: ["3枚"],
        near: [["三つ", "つ works for things in general, but shirts are counted with 枚."]],
      }),
      s("お皿は{何枚}いりますか。", "おさらは{なんまい}いりますか。", "How many plates do you need?", {
        hint: "how many",
        near: [["いくつ", "いくつ works, but plates are counted with 枚: 何枚."]],
      }),
    ],
  }),

  point({
    id: "n5-gurai",
    title: "ぐらい・くらい",
    meaning: "about (an amount)",
    structure: "Amount + ぐらい / くらい",
    related: ["n5-goro"],
    explanation: `
**ぐらい** (or くらい, which is the same word) after an amount means "about" or "roughly": 十分ぐらいかかります, "it takes about ten minutes"; 二十人ぐらい来ました, "about twenty people came".

どのぐらい asks "how long", "how far" or "how much": 駅までどのぐらいかかりますか.

Compare ごろ, the next point. ごろ is "around" a **point** in time (三時ごろ, around three o'clock); ぐらい is "about" an **amount** (三時間ぐらい, about three hours). You'll hear ぐらい used for clock times too in casual speech, but keeping them apart is the safe habit.
`,
    sentences: [
      s("駅まで十分{ぐらい}かかります。", "えきまでじゅっぷん{ぐらい}かかります。", "It takes about ten minutes to the station.", {
        accept: ["くらい"],
        near: [["ごろ", "ごろ is \"around\" a point in time. For an amount of time, use ぐらい."]],
      }),
      s("毎日二時間{ぐらい}勉強します。", "まいにちにじかん{ぐらい}べんきょうします。", "I study for about two hours a day.", {
        accept: ["くらい"],
        near: [["ごろ", "ごろ is for a point in time. Two hours is an amount: ぐらい."]],
      }),
      s("パーティーには二十人{ぐらい}来ました。", "パーティーにはにじゅうにん{ぐらい}きました。", "About twenty people came to the party.", {
        accept: ["くらい"],
        near: [["ごろ", "ごろ is only for points in time. For a number of people, use ぐらい."]],
      }),
      s("東京から大阪までどの{ぐらい}かかりますか。", "とうきょうからおおさかまでどの{ぐらい}かかりますか。", "How long does it take from Tokyo to Osaka?", {
        accept: ["くらい"],
        near: [["ごろ", "どのごろ isn't a phrase. \"How long\" is どのぐらい."]],
      }),
      s("このかばんは五千円{ぐらい}でした。", "このかばんはごせんえん{ぐらい}でした。", "This bag was about 5,000 yen.", {
        accept: ["くらい"],
        near: [["ごろ", "ごろ is only for points in time. For a price, use ぐらい."]],
      }),
    ],
  }),

  point({
    id: "n5-goro",
    title: "ごろ",
    meaning: "around (a point in time)",
    structure: "Time + ごろ (に)",
    related: ["n5-gurai", "n5-ni-time"],
    explanation: `
**ごろ** after a point in time means "around" or "about": 七時ごろ起きます, "I get up around seven"; 来月の十日ごろ, "around the tenth of next month".

The に that normally follows a clock time is optional after ごろ: 三時ごろ会いましょう and 三時ごろに会いましょう are both natural.

It only works with points in time. For "about" an amount (about three hours, about ten people), use ぐらい. So 三時ごろ is "around three o'clock" but 三時間ぐらい is "about three hours".

何時ごろ asks "around what time?", a softer question than a flat 何時.
`,
    sentences: [
      s("毎朝七時{ごろ}起きます。", "まいあさしちじ{ごろ}おきます。", "I get up around seven every morning.", {
        near: [["ぐらい", "ぐらい is \"about\" an amount. Around a point in time is ごろ."]],
      }),
      s("三時{ごろ}に会いましょう。", "さんじ{ごろ}にあいましょう。", "Let's meet at around three.", {
        near: [["ぐらい", "ぐらい is \"about\" an amount. Around a point in time is ごろ."]],
      }),
      s("毎晩十一時{ごろ}寝ます。", "まいばんじゅういちじ{ごろ}ねます。", "I go to bed around eleven every night.", {
        near: [["ぐらい", "ぐらい is \"about\" an amount. Around a point in time is ごろ."]],
      }),
      s("来月の十日{ごろ}日本へ行きます。", "らいげつのとおか{ごろ}にほんへいきます。", "I'm going to Japan around the 10th of next month.", {
        near: [["ぐらい", "ぐらい is \"about\" an amount. Around a date is ごろ."]],
      }),
      s("何時{ごろ}帰りますか。", "なんじ{ごろ}かえりますか。", "Around what time will you be home?", {
        near: [["ぐらい", "何時ぐらい is heard in speech, but the standard \"around what time\" is 何時ごろ."]],
      }),
    ],
  }),

  point({
    id: "n5-dake",
    title: "だけ",
    meaning: "only, just",
    structure: "Noun / amount / verb + だけ",
    related: ["n5-shika-nai"],
    explanation: `
**だけ** means "only" or "just", and goes right after what it limits: 水だけ飲みました, "I only drank water"; 少しだけ, "just a little".

It can follow nouns, amounts and verbs: 見るだけです, "I'm just looking", is the phrase to know for shops.

が and を can drop after だけ or stay after it (水だけを飲む); other particles usually go after it: 私だけに, "only to me".

しか, a later point, also means "only", but it needs a negative verb and sounds like "nothing but, not enough": 水しか飲みませんでした. だけ is neutral.
`,
    sentences: [
      s("昨日は水{だけ}飲みました。", "きのうはみず{だけ}のみました。", "Yesterday I only drank water.", {
        near: [["しか", "しか needs a negative verb (水しか飲みませんでした). With a positive verb, use だけ."]],
      }),
      s("日本語は少し{だけ}話せます。", "にほんごはすこし{だけ}はなせます。", "I can speak just a little Japanese.", {
        near: [["しか", "しか needs a negative verb. With a positive verb, use だけ."]],
      }),
      s("一つ{だけ}質問があります。", "ひとつ{だけ}しつもんがあります。", "I have just one question.", {
        near: [["も", "も after a number means \"as many as\". For \"just one\", use だけ."]],
      }),
      s("大丈夫です。見る{だけ}です。", "だいじょうぶです。みる{だけ}です。", "It's okay, I'm just looking.", {
        near: [["しか", "しか needs a negative verb. For \"just looking\", use だけ."]],
      }),
      s("このことは私{だけ}が知っています。", "このことはわたし{だけ}がしっています。", "Only I know about this.", {
        near: [["も", "私も would be \"I also\". For \"only I\", use だけ."]],
      }),
    ],
  }),

  point({
    id: "n5-ni-per",
    title: "〜に〜回",
    meaning: "… times per …",
    structure: "Period + に + number + 回",
    related: ["n5-ni-time"],
    explanation: `
To say how often, put **に** after the period and the count after it: 一日に三回, "three times a day"; 一週間に二回, "twice a week".

回 (かい) counts occurrences: 一回 (いっかい), 二回, 三回… and 何回 asks "how many times". 度 (ど) is a slightly more formal alternative: 一年に一度, "once a year".

The same に-for-a-period appears with other counts: 一時間に電車が六本あります, "there are six trains an hour".

Don't swap in で: 一日で三回 would mean "three times within a (single) day", about finishing something, not a regular rate.
`,
    sentences: [
      s("一日{に}三回、薬を飲みます。", "いちにち{に}さんかい、くすりをのみます。", "I take the medicine three times a day.", {
        near: [["で", "で would be \"within a day\". For \"per day\", use に."]],
      }),
      s("一週間{に}二回、ジムに行きます。", "いっしゅうかん{に}にかい、ジムにいきます。", "I go to the gym twice a week.", {
        near: [["で", "で would be \"within a week\". For \"per week\", use に."]],
      }),
      s("一か月{に}一回、映画を見ます。", "いっかげつ{に}いっかい、えいがをみます。", "I see a film once a month.", {
        near: [["の", "一か月の一回 doesn't work. For \"per month\", use に."]],
      }),
      s("一年{に}一度、国へ帰ります。", "いちねん{に}いちど、くにへかえります。", "I go back to my home country once a year.", {
        near: [["は", "は would make the year the topic. For \"per year\", use に."]],
      }),
      s("一時間{に}何本電車がありますか。", "いちじかん{に}なんぼんでんしゃがありますか。", "How many trains are there an hour?", {
        near: [["で", "で would be \"within an hour\". For \"per hour\", use に."]],
      }),
    ],
  }),

  point({
    id: "n5-de-total",
    title: "で (totals and groups)",
    meaning: "altogether, as a group of",
    structure: "Amount / number of people + で",
    related: ["n5-de-means", "n5-counter-nin", "n5-ikura-ikutsu"],
    explanation: `
**で** after an amount or a number of people draws a boundary around it:

- A total: 全部で三千円です, "that's 3,000 yen altogether"; 三つで五百円, "three for 500 yen".
- A group doing something together: 二人で行きました, "the two of us went"; 家族みんなで, "as a whole family".
- 一人で: "on your own".

It's the same で as "by means of", stretched a little: the group is how the thing gets done.

と can't replace it: 二人と would need a partner ("with two people"), and 全部と isn't a phrase at all.
`,
    sentences: [
      s("全部{で}三千円です。", "ぜんぶ{で}さんぜんえんです。", "That's 3,000 yen altogether.", {
        near: [["に", "に doesn't make a total. For \"altogether\", use 全部で."]],
      }),
      s("りんごは三つ{で}五百円です。", "りんごはみっつ{で}ごひゃくえんです。", "Apples are three for 500 yen.", {
        near: [["に", "三つに五百円 doesn't work. For \"three for\", use で."]],
      }),
      s("家族みんな{で}旅行に行きました。", "かぞくみんな{で}りょこうにいきました。", "We went on a trip as a whole family.", {
        near: [["と", "と would be \"with everyone\". For doing it as the whole group, use で."]],
      }),
      s("二人{で}映画を見ました。", "ふたり{で}えいがをみました。", "The two of us watched a film.", {
        near: [["と", "二人と would be \"with two other people\". For \"the two of us\", use で."]],
      }),
      s("一人{で}できますか。", "ひとり{で}できますか。", "Can you do it by yourself?", {
        near: [["と", "一人と doesn't work. For \"by yourself\", use 一人で."]],
      }),
    ],
  }),
];
