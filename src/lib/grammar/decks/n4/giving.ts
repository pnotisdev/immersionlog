import { point, s, word } from "../../build";

/** Giving, receiving, and doing things for each other. */

const WRONG_WAY_KURERU = "くれる is someone giving to you (or your side). You're the one giving here: あげる.";
const WRONG_WAY_AGERU = "あげる is giving away from you. When it comes to you (or your side), use くれる.";

export const giving = [
  point({
    id: "n4-ageru",
    title: "あげる",
    meaning: "give (to someone else)",
    structure: "Giver は/が + receiver に + thing を + あげる",
    register: "やる is used for animals and plants, and casually to younger family.",
    related: ["n4-kureru", "n4-morau", "n4-te-ageru"],
    explanation: `
Japanese has three verbs for giving, chosen by **direction**. **あげる** is giving away from you, or between other people: 友達に本をあげました, "I gave my friend a book".

The giver is the subject; the receiver takes に; the thing takes を.

It never points towards you. When someone gives something to you or someone on your side (family, your team), the verb is くれる, the next point.

For animals and plants, the traditional word is **やる** (猫にえさをやる), though many people now say あげる to pets too.

To superiors, あげる can sound like a favour. Politely you'd say さしあげる, or avoid the giving verb altogether: お土産です, "here's a souvenir".
`,
    sentences: [
      s("友達に誕生日のプレゼントを{あげました}。", "ともだちにたんじょうびのプレゼントを{あげました}。", "I gave my friend a birthday present.", {
        near: [["くれました", WRONG_WAY_KURERU]],
      }),
      s("田中さんは山田さんに花を{あげました}。", "たなかさんはやまださんにはなを{あげました}。", "Mr Tanaka gave Ms Yamada some flowers.", {
        near: [["くれました", "Between two other people, it's あげる. くれる would put Yamada on your side."]],
      }),
      s("毎朝、猫にえさを{やります}。", "まいあさ、ねこにえさを{やります}。", "I feed the cat every morning.", {
        hint: "give (to an animal)",
        accept: ["あげます"],
        near: [["くれます", "くれる is for giving to you. To the cat, it's やる (or あげる)."]],
      }),
      s("弟にゲームを{あげる}つもりです。", "おとうとにゲームを{あげる}つもりです。", "I'm going to give my little brother a game.", {
        near: [["くれる", WRONG_WAY_KURERU]],
      }),
      s("このチョコ、一つ{あげる}よ。", "このチョコ、ひとつ{あげる}よ。", "Here, have one of these chocolates.", {
        near: [
          ["くれる", WRONG_WAY_KURERU],
          ["もらう", "もらう is receiving. You're giving: あげる."],
        ],
      }),
    ],
  }),

  point({
    id: "n4-kureru",
    title: "くれる",
    meaning: "give (to me, or my side)",
    structure: "Giver が/は + (私に) + thing を + くれる",
    related: ["n4-ageru", "n4-morau", "n4-te-kureru"],
    explanation: `
**くれる** is giving **towards** you: 友達がケーキをくれました, "a friend gave me a cake". The giver is the subject, and the receiver (you) is usually left out, since くれる already says who it is.

"Your side" includes your family and anyone you're speaking for: 田中さんが妹に本をくれた, "Mr Tanaka gave my sister a book".

The mistake to avoid is using あげる for things coming to you. 友達が私にあげた sounds as if you're describing yourself from outside.

For someone above you, the respectful version is くださる: 先生が本をくださいました, covered later in this section.
`,
    sentences: [
      s("友達が誕生日にケーキを{くれました}。", "ともだちがたんじょうびにケーキを{くれました}。", "A friend gave me a cake for my birthday.", {
        near: [["あげました", WRONG_WAY_AGERU]],
      }),
      s("これ、母が{くれた}お守りです。", "これ、ははが{くれた}おまもりです。", "This is a charm my mother gave me.", {
        near: [["あげた", WRONG_WAY_AGERU]],
      }),
      s("田中さんが妹に本を{くれました}。", "たなかさんがいもうとにほんを{くれました}。", "Mr Tanaka gave my little sister a book.", {
        near: [["あげました", "Your sister is on your side, so it's くれる."]],
      }),
      s("誰がこの花を{くれた}の？", "だれがこのはなを{くれた}の？", "Who gave you these flowers?", {
        near: [["もらった", "With 誰が as the subject, the giver's verb is くれる."]],
      }),
      s("先生が辞書を{くれました}。", "せんせいがじしょを{くれました}。", "My teacher gave me a dictionary.", {
        near: [["くださいました", "くださいました is the more respectful version, and good for a teacher. This point practises くれる."]],
      }),
    ],
  }),

  point({
    id: "n4-morau",
    title: "もらう",
    meaning: "receive, get",
    structure: "Receiver は/が + giver に/から + thing を + もらう",
    related: ["n4-kureru", "n4-ageru", "n4-te-morau"],
    explanation: `
**もらう** is the same event as くれる, told from the receiver's side: 友達に本をもらいました, "I got a book from a friend". Now the receiver is the subject, and the giver takes に or から.

から is the safer choice when the giver is an organisation or something far away: 会社からボーナスをもらった, 母から手紙をもらった.

So these two say the same thing:

- 友達が本をくれた (the friend is the subject)
- 友達に本をもらった (you are the subject)

Pick by who you want the sentence to be about. The humble version, for receiving from a superior, is いただく.
`,
    sentences: [
      s("友達に本を{もらいました}。", "ともだちにほんを{もらいました}。", "I got a book from a friend.", {
        near: [["くれました", "With 友達に, the receiver's verb is もらう. (友達が…くれた says the same from the other side.)"]],
      }),
      s("誕生日に何を{もらいました}か。", "たんじょうびになにを{もらいました}か。", "What did you get for your birthday?", {
        near: [["あげました", "あげる is giving. The question is what you got: もらう."]],
      }),
      s("会社からボーナスを{もらった}。", "かいしゃからボーナスを{もらった}。", "I got a bonus from the company.", {
        near: [["くれた", "With 会社から, the receiver's verb is もらう."]],
      }),
      s("母から手紙を{もらいました}。", "ははからてがみを{もらいました}。", "I got a letter from my mother.", {
        near: [["くれました", "With 母から, the receiver's verb is もらう."]],
      }),
      s("このシャツは兄に{もらった}んです。", "このシャツはあにに{もらった}んです。", "My older brother gave me this shirt.", {
        near: [["あげた", "あげる would mean you gave it. You received it: もらった."]],
      }),
    ],
  }),

  point({
    id: "n4-te-ageru",
    title: "〜てあげる",
    meaning: "do (something) for someone",
    structure: "Verb て-form + あげる",
    related: ["n4-ageru", "n4-te-kureru", "n4-te-morau"],
    explanation: `
The giving verbs also attach to the て-form, and then what's given is an action. **てあげる** is doing something for someone else: 妹に宿題を教えてあげました, "I helped my sister with her homework".

The direction rules are the same as for あげる: from you outward, or between other people.

Be careful with it to someone's face. 手伝ってあげます can sound like "I'll do you the favour of helping". With superiors or people you don't know well, just offer the action: 手伝いましょうか, "shall I help?"

Among friends and family it's perfectly natural, and very common when talking about what you did for others.
`,
    sentences: [
      s("妹に宿題を{教えてあげました}。", "いもうとにしゅくだいを{おしえてあげました}。", "I helped my little sister with her homework.", {
        hint: "教える",
        conj: { word: word("教える"), form: "te", tail: "あげました" },
        near: [["教えてくれました", "てくれる is someone doing it for you. You did it for your sister: てあげる."]],
      }),
      s("友達を駅まで{送ってあげた}。", "ともだちをえきまで{おくってあげた}。", "I gave my friend a lift to the station.", {
        hint: "送る",
        conj: { word: word("送る"), form: "te", tail: "あげた" },
        near: [["送ってくれた", "てくれる is someone doing it for you. You did it for your friend: てあげる."]],
      }),
      s("おばあさんの荷物を{持ってあげました}。", "おばあさんのにもつを{もってあげました}。", "I carried an old lady's bags for her.", {
        hint: "持つ",
        conj: { word: word("持つ"), form: "te", tail: "あげました" },
        near: [["持ちました", "That just says you carried them. To say it was for her, add あげる: 持ってあげました."]],
      }),
      s("毎晩、子どもに本を{読んであげます}。", "まいばん、こどもにほんを{よんであげます}。", "I read to my child every night.", {
        hint: "読む",
        conj: { word: word("読む"), form: "te", tail: "あげます" },
        near: [["読んでくれます", "てくれる is someone doing it for you. You're reading to your child: てあげる."]],
      }),
      s("写真を{撮ってあげようか}。", "しゃしんを{とってあげようか}。", "Want me to take a photo for you?", {
        hint: "撮る, offering to a friend",
        conj: { word: word("撮る", "とる", "godan"), form: "te", tail: "あげようか" },
        near: [["撮ってくれようか", "てくれる is for things done for you. Offering to do it for them: てあげようか."]],
      }),
    ],
  }),

  point({
    id: "n4-te-kureru",
    title: "〜てくれる",
    meaning: "(someone) does something for me",
    structure: "Verb て-form + くれる",
    related: ["n4-kureru", "n4-te-ageru", "n4-te-morau", "n4-polite-requests"],
    explanation: `
**てくれる** is someone doing something for you or your side: 友達が引っ越しを手伝ってくれました, "a friend helped me move". The doer is the subject.

It carries gratitude. Compare 母が弁当を作った ("my mother made a lunch", a neutral fact) with 母が弁当を作ってくれた ("my mother made me a lunch", and I'm grateful). Japanese speakers use てくれる far more than English speakers say "for me", and leaving it out can sound ungrateful.

As a question it's a casual request: ちょっと待ってくれる? "could you wait a sec?" The negative, 待ってくれない?, is softer still.
`,
    sentences: [
      s("友達が引っ越しを{手伝ってくれました}。", "ともだちがひっこしを{てつだってくれました}。", "A friend helped me move.", {
        hint: "手伝う",
        conj: { word: word("手伝う"), form: "te", tail: "くれました" },
        near: [["手伝ってあげました", "てあげる is you doing it for someone. Your friend helped you: てくれる."]],
      }),
      s("母が弁当を{作ってくれた}。", "ははがべんとうを{つくってくれた}。", "My mother made me a packed lunch.", {
        hint: "作る",
        conj: { word: word("作る"), form: "te", tail: "くれた" },
        near: [["作った", "That's just a fact. To say she did it for you (with thanks), use てくれた."]],
      }),
      s("田中さんが駅まで{送ってくれました}。", "たなかさんがえきまで{おくってくれました}。", "Mr Tanaka kindly took me to the station.", {
        hint: "送る",
        conj: { word: word("送る"), form: "te", tail: "くれました" },
        near: [["送ってあげました", "てあげる is you doing it for someone. Tanaka did it for you: てくれる."]],
      }),
      s("ちょっと{待ってくれる}？", "ちょっと{まってくれる}？", "Could you wait a sec?", {
        hint: "待つ, casual request",
        conj: { word: word("待つ"), form: "te", tail: "くれる" },
        near: [["待ってあげる", "てあげる is offering to wait for them. Asking them to wait for you: てくれる?"]],
      }),
      s("先生が漢字の読み方を{教えてくれました}。", "せんせいがかんじのよみかたを{おしえてくれました}。", "My teacher showed me how to read the kanji.", {
        hint: "教える",
        conj: { word: word("教える"), form: "te", tail: "くれました" },
        near: [["教えてもらいました", "That's \"I had the teacher show me\". With 先生が as the subject, use てくれる."]],
      }),
    ],
  }),

  point({
    id: "n4-te-morau",
    title: "〜てもらう",
    meaning: "have someone do, get someone to do",
    structure: "Receiver は + doer に + Verb て-form + もらう",
    related: ["n4-morau", "n4-te-kureru", "n4-polite-requests"],
    explanation: `
**てもらう** is receiving an action: 友達に宿題を手伝ってもらいました, "I got a friend to help with my homework". You are the subject; the person who did it takes に.

It's the other side of てくれる. 友達が手伝ってくれた and 友達に手伝ってもらった describe the same favour. てもらう puts the focus on you, often implying you asked: 医者に見てもらった, "I had a doctor look at it".

It's also how Japanese says "get something done by someone": 髪を切ってもらった, "I got my hair cut".

The potential version, てもらえますか / てもらえませんか, is a polite request, the next point.
`,
    sentences: [
      s("友達に宿題を{手伝ってもらいました}。", "ともだちにしゅくだいを{てつだってもらいました}。", "I got a friend to help me with my homework.", {
        hint: "手伝う",
        conj: { word: word("手伝う"), form: "te", tail: "もらいました" },
        near: [["手伝ってくれました", "With 友達に, the receiver's verb is てもらう. (友達が…てくれた says it from the other side.)"]],
      }),
      s("一度、医者に{見てもらった}ほうがいいですよ。", "いちど、いしゃに{みてもらった}ほうがいいですよ。", "You should get a doctor to look at it.", {
        hint: "見る",
        conj: { word: word("見る"), form: "te", tail: "もらった" },
        near: [["見た", "That would be you looking. For having the doctor look, use てもらう."]],
      }),
      s("兄に車を{貸してもらいました}。", "あににくるまを{かしてもらいました}。", "My older brother lent me his car.", {
        hint: "貸す",
        conj: { word: word("貸す"), form: "te", tail: "もらいました" },
        near: [["借りました", "借りました (\"borrowed\") works too. This point practises 貸してもらいました."]],
      }),
      s("日本人の友達に作文を{直してもらいました}。", "にほんじんのともだちにさくぶんを{なおしてもらいました}。", "I had a Japanese friend correct my essay.", {
        hint: "直す",
        conj: { word: word("直す", "なおす", "godan"), form: "te", tail: "もらいました" },
        near: [["直してくれました", "With 友達に, the receiver's verb is てもらう."]],
      }),
      s("お店の人に写真を{撮ってもらった}。", "おみせのひとにしゃしんを{とってもらった}。", "I asked someone from the shop to take a photo of us.", {
        hint: "撮る",
        conj: { word: word("撮る", "とる", "godan"), form: "te", tail: "もらった" },
        near: [["撮ってあげた", "てあげる is doing it for them. They did it for you: てもらった."]],
      }),
    ],
  }),

  point({
    id: "n4-polite-requests",
    title: "〜てもらえませんか・〜ていただけませんか",
    meaning: "could you (please)…?",
    structure: "Verb て-form + くれませんか / もらえませんか / くださいませんか / いただけませんか",
    register: "From casual to very polite: てくれない? → てくれませんか → てもらえませんか → てくださいませんか → ていただけませんか.",
    related: ["n5-te-kudasai", "n4-te-kureru", "n4-te-morau"],
    explanation: `
てください is polite, but it's still an instruction. To ask a real favour, Japanese turns it into a question, and a **negative** question is softer still:

- 撮ってくれませんか: could you take it?
- 撮ってもらえませんか: could I get you to take it?
- 撮ってくださいませんか: more respectful
- 撮っていただけませんか: the most polite, for strangers, bosses and customers

Between friends: 撮ってくれない?

The more polite versions are longer, and that's the point. Asking a stranger for help with てもらえませんか is a safe everyday choice; save ていただけませんか for when you want to be especially careful.
`,
    sentences: [
      s("すみません、写真を{撮ってもらえませんか}。", "すみません、しゃしんを{とってもらえませんか}。", "Excuse me, could you take a photo for us?", {
        hint: "撮る",
        conj: { word: word("撮る", "とる", "godan"), form: "te", tail: "もらえませんか" },
        accept: ["撮っていただけませんか", "とっていただけませんか", "撮ってくださいませんか", "とってくださいませんか", "撮ってくれませんか", "とってくれませんか"],
        near: [["撮ってください", "That works, but it's a plain request. To ask a stranger a favour, soften it: もらえませんか."]],
      }),
      s("もう一度{説明してくださいませんか}。", "もういちど{せつめいしてくださいませんか}。", "Could you explain that once more?", {
        hint: "説明する",
        conj: { word: word("説明する"), form: "te", tail: "くださいませんか" },
        accept: ["説明していただけませんか", "せつめいしていただけませんか", "説明してもらえませんか", "せつめいしてもらえませんか"],
        near: [["説明してください", "That works, but it's a plain request. For a favour, ask it as a question: くださいませんか."]],
      }),
      s("この書類を{見ていただけませんか}。", "このしょるいを{みていただけませんか}。", "Would you mind looking over this document?", {
        hint: "見る, very polite",
        conj: { word: word("見る"), form: "te", tail: "いただけませんか" },
        accept: ["見てくださいませんか", "みてくださいませんか"],
        near: [["見てくれませんか", "くれませんか is fine with friends. To a boss, use いただけませんか."]],
      }),
      s("ちょっと{手伝ってくれない}？", "ちょっと{てつだってくれない}？", "Could you give me a hand?", {
        hint: "手伝う, casual",
        conj: { word: word("手伝う"), form: "te", tail: "くれない" },
        near: [["手伝ってください", "Between friends, a negative question sounds softer: くれない?"]],
      }),
      s("窓を{閉めていただけませんか}。", "まどを{しめていただけませんか}。", "Would you mind closing the window?", {
        hint: "閉める, very polite",
        conj: { word: word("閉める"), form: "te", tail: "いただけませんか" },
        accept: ["閉めてくださいませんか", "しめてくださいませんか", "閉めてもらえませんか", "しめてもらえませんか"],
        near: [["閉めてくれない", "That's for friends. Politely, use いただけませんか."]],
      }),
    ],
  }),

  point({
    id: "n4-kudasaru-itadaku",
    title: "くださる・いただく・さしあげる",
    meaning: "give, receive (respectful and humble)",
    structure: "Superior が くださる · Superior に いただく · Superior に さしあげる",
    register: "Keigo. くださる raises the giver; いただく and さしあげる lower yourself.",
    related: ["n4-kureru", "n4-morau", "n4-ageru", "n4-sonkeigo"],
    explanation: `
Each giving verb has a polite partner for when a superior (a teacher, a boss, a customer) is involved:

- **くださる** for くれる: 先生が本をくださいました, "my teacher gave me a book"
- **いただく** for もらう: 社長にお土産をいただきました, "I received a souvenir from the company president"
- **さしあげる** for あげる: 先生に手紙をさしあげました

くださる has an irregular ます form: くださいます, not くださります.

They attach to the て-form too, which is how a lot of polite thanks are phrased: 先生に作文を直していただきました, "my teacher kindly corrected my essay".

いただきます before a meal is this いただく: "I humbly receive".
`,
    sentences: [
      s("先生が本を{くださいました}。", "せんせいがほんを{くださいました}。", "My teacher gave me a book.", {
        near: [
          ["くれました", "くれた is plain. For a teacher, use くださいました."],
          ["くださりました", "くださる has an irregular ます form: くださいました."],
        ],
      }),
      s("社長にお土産を{いただきました}。", "しゃちょうにおみやげを{いただきました}。", "I received a souvenir from the company president.", {
        near: [["もらいました", "もらった is plain. From the company president, use いただきました."]],
      }),
      s("先生にお礼の手紙を{さしあげました}。", "せんせいにおれいのてがみを{さしあげました}。", "I sent my teacher a thank-you letter.", {
        near: [["あげました", "あげた can sound like doing a favour. To a teacher, use さしあげました."]],
      }),
      s("先生に作文を直して{いただきました}。", "せんせいにさくぶんをなおして{いただきました}。", "My teacher kindly corrected my essay.", {
        near: [["もらいました", "てもらった is plain. For a teacher, use ていただきました."]],
      }),
      s("部長が駅まで送って{くださいました}。", "ぶちょうがえきまでおくって{くださいました}。", "My manager kindly drove me to the station.", {
        near: [["くれました", "てくれた is plain. For your manager, use てくださいました."]],
      }),
    ],
  }),
];
