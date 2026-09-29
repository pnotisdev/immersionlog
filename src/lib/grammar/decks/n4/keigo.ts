import { point, s, word } from "../../build";

/** Polite speech: raising others (尊敬語) and lowering yourself (謙譲語). */

export const keigo = [
  point({
    id: "n4-sonkeigo",
    title: "Respectful verbs (尊敬語)",
    meaning: "go, come, be, eat, say, see, do (said of someone you respect)",
    structure: "いらっしゃる · 召し上がる · おっしゃる · ご覧になる · なさる",
    register: "Keigo: for customers, superiors and people you don't know, never for yourself.",
    related: ["n4-o-ni-naru", "n4-kenjougo", "n4-kudasaru-itadaku"],
    explanation: `
**尊敬語** (respectful language) raises the person you're talking about. The most common verbs have their own respectful replacements:

- いる, 行く, 来る → **いらっしゃる**
- 食べる, 飲む → **召し上がる**
- 言う → **おっしゃる**
- 見る → **ご覧になる**
- する → **なさる**
- 知っている → **ご存じだ**

いらっしゃる, おっしゃる and なさる have irregular ます forms: いらっしゃいます, おっしゃいます, なさいます.

You'll hear them from shop staff, in business, and to teachers and older people. They're only ever about other people: saying 私はいらっしゃいます about yourself is a classic learner mistake.
`,
    sentences: [
      s("社長は今、会議室に{いらっしゃいます}。", "しゃちょうはいま、かいぎしつに{いらっしゃいます}。", "The company president is in the meeting room right now.", {
        near: [
          ["います", "います is plain polite. For the company president, use いらっしゃいます."],
          ["いらっしゃります", "いらっしゃる has an irregular ます form: いらっしゃいます."],
        ],
      }),
      s("先生、何を{召し上がりますか}。", "せんせい、なにを{めしあがりますか}。", "What would you like to eat, sensei?", {
        near: [["食べますか", "食べますか is plain polite. To a teacher, use 召し上がりますか."]],
      }),
      s("先生が{おっしゃった}ことをよく覚えています。", "せんせいが{おっしゃった}ことをよくおぼえています。", "I remember well what my teacher said.", {
        near: [["言った", "言った is plain. For what a teacher said, use おっしゃった."]],
      }),
      s("この写真を{ご覧になりましたか}。", "このしゃしんを{ごらんになりましたか}。", "Have you seen this photo?", {
        near: [["見ましたか", "見ましたか is plain polite. Respectfully, use ご覧になりましたか."]],
      }),
      s("週末は何を{なさいますか}。", "しゅうまつはなにを{なさいますか}。", "What will you be doing at the weekend?", {
        near: [
          ["しますか", "しますか is plain polite. Respectfully, use なさいますか."],
          ["なさりますか", "なさる has an irregular ます form: なさいます."],
        ],
      }),
    ],
  }),

  point({
    id: "n4-o-ni-naru",
    title: "お〜になる・お〜ください",
    meaning: "(respectful form of most verbs); please (do)",
    structure: "お + Verb ます-stem + になる / ください",
    related: ["n4-sonkeigo", "n4-o-suru"],
    explanation: `
Verbs without a special respectful replacement use a pattern: **お + ます-stem + になる**. 帰る → お帰りになる, 読む → お読みになる, 待つ → お待ちになる.

先生はもうお帰りになりました, "the teacher has already gone home"; この本をお読みになりましたか, "have you read this book?"

The request version is **お + stem + ください**: お待ちください, "please wait"; お座りください, "please have a seat". You'll hear these constantly in shops, stations and on the phone.

It doesn't work for verbs that already have their own respectful word: for 行く, it's いらっしゃる, not お行きになる. And for one-kanji-stem verbs like 見る and 寝る, the special words (ご覧になる, お休みになる) are used instead.
`,
    sentences: [
      s("先生はもう{お帰りになりました}。", "せんせいはもう{おかえりになりました}。", "The teacher has already gone home.", {
        hint: "帰る, respectful",
        conj: { word: word("帰る"), form: "polite", cut: "ます", head: "お", tail: "になりました", marker: "になりました" },
        near: [["帰りました", "That's plain polite. For a teacher, use お帰りになりました."]],
      }),
      s("この本を{お読みになりましたか}。", "このほんを{およみになりましたか}。", "Have you read this book?", {
        hint: "読む, respectful",
        conj: { word: word("読む"), form: "polite", cut: "ます", head: "お", tail: "になりましたか", marker: "になりましたか" },
        near: [["読みましたか", "That's plain polite. Respectfully, use お読みになりましたか."]],
      }),
      s("社長は何時に{お戻りになりますか}。", "しゃちょうはなんじに{おもどりになりますか}。", "What time will the president be back?", {
        hint: "戻る, respectful",
        conj: { word: word("戻る", "もどる", "godan"), form: "polite", cut: "ます", head: "お", tail: "になりますか", marker: "になりますか" },
        near: [["お戻りしますか", "お〜する is humble, for your own actions. For the president's, use お戻りになりますか."]],
      }),
      s("こちらで少々{お待ちください}。", "こちらでしょうしょう{おまちください}。", "Please wait here a moment.", {
        hint: "待つ, polite request",
        conj: { word: word("待つ"), form: "polite", cut: "ます", head: "お", tail: "ください", marker: "ください" },
        near: [["待ってください", "That works, but in service language it's お待ちください."]],
      }),
      s("田中様が受付で{お待ちになっています}。", "たなかさまがうけつけで{おまちになっています}。", "Mr Tanaka is waiting for you at reception.", {
        hint: "待つ, respectful",
        conj: { word: word("待つ"), form: "polite", cut: "ます", head: "お", tail: "になっています", marker: "になっています" },
        near: [["待っています", "That's plain polite. For a guest, use お待ちになっています."]],
      }),
    ],
  }),

  point({
    id: "n4-kenjougo",
    title: "Humble verbs (謙譲語)",
    meaning: "go, come, be, do, say, see (said of yourself, humbly)",
    structure: "参る · おる · いたす · 申す · 拝見する · いただく · 伺う",
    register: "Keigo: for your own actions, and your own family or company, when talking to outsiders.",
    related: ["n4-sonkeigo", "n4-o-suru", "n4-kudasaru-itadaku"],
    explanation: `
**謙譲語** (humble language) lowers yourself, which raises the listener by comparison. The key verbs:

- 行く, 来る → **参る**
- いる → **おる**
- する → **いたす**
- 言う → **申す**
- 見る → **拝見する**
- 食べる, もらう → **いただく**
- 聞く, 訪ねる → **伺う**

They're for your own actions, and for your own side (family, company) when speaking to outsiders: 父は今、家におります, "my father is at home at the moment".

The first one everyone learns is 申す: 田中と申します, "my name is Tanaka", the standard self-introduction at work.
`,
    sentences: [
      s("明日、そちらに{参ります}。", "あした、そちらに{まいります}。", "I'll come to your office tomorrow.", {
        near: [
          ["行きます", "行きます is plain polite. Humbly, for yourself, use 参ります."],
          ["いらっしゃいます", "いらっしゃる raises the other person. For yourself, lower it: 参ります."],
        ],
      }),
      s("はじめまして。田中と{申します}。", "はじめまして。たなかと{もうします}。", "How do you do. My name is Tanaka.", {
        near: [["言います", "言います works, but for introducing yourself formally, 申します."]],
      }),
      s("その仕事は私が{いたします}。", "そのしごとはわたしが{いたします}。", "I'll take care of that job.", {
        near: [["なさいます", "なさる raises the other person. For yourself, lower it: いたします."]],
      }),
      s("父は今、家に{おります}。", "ちちはいま、いえに{おります}。", "My father is at home at the moment.", {
        near: [["いらっしゃいます", "Your own family, spoken of to an outsider, takes humble おります."]],
      }),
      s("お写真を{拝見しました}。", "おしゃしんを{はいけんしました}。", "I've had a look at your photos.", {
        near: [["ご覧になりました", "ご覧になる raises the other person. For yourself, lower it: 拝見しました."]],
      }),
    ],
  }),

  point({
    id: "n4-o-suru",
    title: "お〜する",
    meaning: "(humble form: I'll do … for you)",
    structure: "お + Verb ます-stem + する · ご + する-noun + する",
    related: ["n4-kenjougo", "n4-o-ni-naru"],
    explanation: `
The humble pattern for most verbs is **お + ます-stem + する**: 持つ → お持ちする, 送る → お送りする. It describes something you do for someone you respect: 荷物をお持ちします, "let me carry your bags".

With する-nouns borrowed from Chinese, the prefix is usually ご: 連絡する → ご連絡する, 案内する → ご案内する.

It combines with other forms: お聞きしたいことがあります, "there's something I'd like to ask you"; お送りしましょうか, "shall I see you out?"

The mirror image is お〜になる, for the other person's actions. Mixing them up (お持ちになります for your own carrying) is the most common keigo slip.
`,
    sentences: [
      s("重そうですね。荷物を{お持ちします}。", "おもそうですね。にもつを{おもちします}。", "That looks heavy. Let me carry your bags.", {
        hint: "持つ, humble",
        conj: { word: word("持つ"), form: "polite", cut: "ます", head: "お", tail: "します", marker: "します" },
        near: [["お持ちになります", "お〜になる raises the other person's action. For what you do for them, use お〜します."]],
      }),
      s("後でこちらから{ご連絡します}。", "あとでこちらから{ごれんらくします}。", "We'll get in touch with you later.", {
        hint: "連絡する, humble",
        near: [
          ["お連絡します", "With Chinese-origin する nouns like 連絡, the prefix is ご: ご連絡します."],
          ["連絡します", "That's plain polite. Humbly, use ご連絡します."],
        ],
      }),
      s("駅まで{お送りします}。", "えきまで{おおくりします}。", "I'll see you to the station.", {
        hint: "送る, humble",
        conj: { word: word("送る"), form: "polite", cut: "ます", head: "お", tail: "します", marker: "します" },
        near: [["送ります", "That's plain polite. Humbly, use お送りします."]],
      }),
      s("ちょっと{お聞きしたい}ことがあるんですが。", "ちょっと{おききしたい}ことがあるんですが。", "There's something I'd like to ask you.", {
        hint: "聞く, humble",
        conj: { word: word("聞く"), form: "polite", cut: "ます", head: "お", tail: "したい", marker: "したい" },
        near: [["聞きたい", "That's plain. Humbly, to a superior, use お聞きしたい."]],
      }),
      s("新しい資料を{お見せします}。", "あたらしいしりょうを{おみせします}。", "I'll show you the new materials.", {
        hint: "見せる, humble",
        conj: { word: word("見せる", "みせる", "ichidan"), form: "polite", cut: "ます", head: "お", tail: "します", marker: "します" },
        near: [["見せます", "That's plain polite. Humbly, use お見せします."]],
      }),
    ],
  }),
];
