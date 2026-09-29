import { point, s } from "../../build";

/** Occasions, turning points, and the exact moment one thing follows another. */

export const time = [
  point({
    id: "n2-shidai",
    title: "〜次第",
    meaning: "as soon as; depends on",
    structure: "Verb ます-stem + 次第 · Noun + 次第だ / 次第で",
    related: ["n3-ta-totan", "n3-ni-yotte", "n1-ikan"],
    explanation: `
**次第** has two common uses.

After a ます-stem, it means "as soon as", for something that will happen: 準備ができ次第、出発します, "we'll leave as soon as we're ready". It's formal and very common in business: 結果がわかり次第、ご連絡いたします. Because it's about the future, it can't describe a past event; for that, use たとたん or とすぐ.

After a noun, **次第だ** means "depends on": 旅行に行くかどうかは、天気次第だ, "whether we go depends on the weather". 次第で does the same mid-sentence: 努力次第で, "depending on your effort".

The literal meaning is "order, sequence", so both uses are about what follows from what.
`,
    sentences: [
      s("準備ができ{次第}、出発します。", "じゅんびができ{しだい}、しゅっぱつします。", "We'll leave as soon as we're ready.", {
        near: [["たら", "That works, but for \"as soon as\" in formal speech, use 次第."]],
      }),
      s("結果がわかり{次第}、ご連絡いたします。", "けっかがわかり{しだい}、ごれんらくいたします。", "We'll contact you as soon as we know the results.", {
        near: [["たとたん", "とたん is for sudden past events. For \"as soon as\" in the future, use 次第."]],
      }),
      s("旅行に行くかどうかは、天気{次第}だ。", "りょこうにいくかどうかは、てんき{しだい}だ。", "Whether we go on the trip depends on the weather.", {
        near: [["によって", "によって needs a verb after it. For \"depends on\", end with 次第だ."]],
      }),
      s("合格できるかどうかは、あなたの努力{次第}です。", "ごうかくできるかどうかは、あなたのどりょく{しだい}です。", "Whether you pass depends on your effort.", {
        near: [["によって", "によって needs a verb after it. For \"depends on\", end with 次第です."]],
      }),
      s("到着し{次第}、お電話ください。", "とうちゃくし{しだい}、おでんわください。", "Please call as soon as you arrive.", {
        near: [["てから", "That's just \"after\". For \"as soon as\", use 次第."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-saishite",
    title: "〜に際して",
    meaning: "on the occasion of, when (formal)",
    structure: "Noun / Verb dictionary form + に際して / に際し",
    related: ["n3-sai", "n2-ni-atatte"],
    explanation: `
**に際して** marks a special occasion, often an important one: 出発に際して、注意事項を説明します, "before we set off, I'll explain some points to be aware of".

It's a more formal version of 際に (N3), and it's typical of official procedures, speeches and written instructions: 入学に際して, "on enrolment"; 契約に際し, "when signing a contract".

It follows a noun (often a する-noun) or a dictionary-form verb. In very formal writing, に際し drops the て.

It's close to にあたって. に際して focuses on the occasion itself; にあたって suggests preparing for an important step. Often either works.
`,
    sentences: [
      s("出発{に際して}、注意事項を説明します。", "しゅっぱつ{にさいして}、ちゅういじこうをせつめいします。", "Before we set off, I'll explain some points to be aware of.", {
        accept: ["に際し", "にあたって"],
        near: [["の際", "That works too. This point practises に際して."]],
      }),
      s("入学{に際して}、必要な書類を提出してください。", "にゅうがく{にさいして}、ひつようなしょるいをていしゅつしてください。", "On enrolling, please submit the required documents.", {
        accept: ["に際し", "にあたって"],
        near: [["について", "について is \"about\". For \"on the occasion of\", use に際して."]],
      }),
      s("契約{に際し}、身分証明書が必要です。", "けいやく{にさいし}、みぶんしょうめいしょがひつようです。", "Identification is required when signing the contract.", {
        accept: ["に際して", "にあたり"],
        near: [["について", "について is \"about\". For \"when signing\", use に際し."]],
      }),
      s("留学する{に際して}、多くの人にお世話になった。", "りゅうがくする{にさいして}、おおくのひとにおせわになった。", "When I went to study abroad, many people helped me.", {
        accept: ["に際し", "にあたって"],
        near: [["ために", "That's purpose. For \"on the occasion of\", use に際して."]],
      }),
      s("帰国{に際して}、お世話になった方々にお礼を申し上げます。", "きこく{にさいして}、おせわになったかたがたにおれいをもうしあげます。", "As I return home, I'd like to thank everyone who has helped me.", {
        accept: ["に際し", "にあたって"],
        near: [["によって", "That's \"by\". For \"on the occasion of\", use に際して."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-atatte",
    title: "〜にあたって",
    meaning: "when (about to take an important step)",
    structure: "Noun / Verb dictionary form + にあたって / にあたり",
    related: ["n2-ni-saishite", "n2-ni-sakidatte"],
    explanation: `
**にあたって** introduces an important step or new start, usually with what you do to prepare for it: 新しい事業を始めるにあたって、市場調査を行った, "before starting the new business, we did market research".

It's formal, and it's the classic opening of speeches and greetings: 開会にあたり、一言ご挨拶申し上げます, "as we open, allow me to say a few words".

The first half is something significant: starting a job, opening an event, writing a thesis, moving house. The second half is a preparation, a resolve or a formal statement.

にあたり is the more formal version. It overlaps heavily with に際して; にあたって leans more towards getting ready for what's coming.
`,
    sentences: [
      s("新しい事業を始める{にあたって}、市場調査を行った。", "あたらしいじぎょうをはじめる{にあたって}、しじょうちょうさをおこなった。", "Before starting the new business, we did market research.", {
        accept: ["にあたり", "に際して"],
        near: [["について", "について is \"about\". For \"when about to\", use にあたって."]],
      }),
      s("開会{にあたり}、一言ご挨拶申し上げます。", "かいかい{にあたり}、ひとことごあいさつもうしあげます。", "As we open, allow me to say a few words.", {
        accept: ["にあたって", "に際し", "に際して"],
        near: [["によって", "That's \"by\". For \"on the occasion of\", use にあたり."]],
      }),
      s("引っ越し{にあたって}、たくさんの物を捨てた。", "ひっこし{にあたって}、たくさんのものをすてた。", "When I moved house, I threw away lots of things.", {
        accept: ["にあたり", "に際して"],
        near: [["について", "について is \"about\". For \"when moving\", use にあたって."]],
      }),
      s("論文を書く{にあたって}、多くの本を読んだ。", "ろんぶんをかく{にあたって}、おおくのほんをよんだ。", "To prepare for writing my thesis, I read a lot of books.", {
        accept: ["にあたり", "に際して"],
        near: [["ために", "That works too. にあたって stresses \"at this important step\"."]],
      }),
      s("就職{にあたって}、スーツを買った。", "しゅうしょく{にあたって}、スーツをかった。", "I bought a suit for starting my new job.", {
        accept: ["にあたり", "に際して"],
        near: [["として", "として is \"as\". For \"when starting\", use にあたって."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-sakidatte",
    title: "〜に先立って",
    meaning: "prior to, ahead of",
    structure: "Noun / Verb dictionary form + に先立って / に先立ち",
    related: ["n2-ni-atatte", "n5-mae-ni", "n1-ni-sakigakete"],
    explanation: `
**に先立って** means "before", for something done in preparation for, or ahead of, a main event: 試合に先立って、開会式が行われた, "an opening ceremony was held before the match".

It's the formal, written version of の前に, and it's common in news and announcements: 映画の公開に先立って、試写会が開かれた, "a preview screening was held ahead of the film's release".

The first half is usually a significant public event, and the second is a preliminary step. 先立つ literally means "to stand ahead".

In formal writing, it's に先立ち. Before a noun, it's に先立つ.
`,
    sentences: [
      s("試合{に先立って}、開会式が行われた。", "しあい{にさきだって}、かいかいしきがおこなわれた。", "An opening ceremony was held before the match.", {
        accept: ["に先立ち"],
        near: [["の前に", "That's the everyday version. In formal writing, use に先立って."]],
      }),
      s("映画の公開{に先立って}、試写会が開かれた。", "えいがのこうかい{にさきだって}、ししゃかいがひらかれた。", "A preview screening was held ahead of the film's release.", {
        accept: ["に先立ち"],
        near: [["の前に", "That's the everyday version. In formal writing, use に先立って."]],
      }),
      s("工事を始める{に先立ち}、住民に説明した。", "こうじをはじめる{にさきだち}、じゅうみんにせつめいした。", "Before starting the construction, we explained it to the residents.", {
        accept: ["に先立って"],
        near: [["にあたって", "That works too. This point practises に先立ち."]],
      }),
      s("出発{に先立って}、荷物を確認してください。", "しゅっぱつ{にさきだって}、にもつをかくにんしてください。", "Please check your luggage before departure.", {
        accept: ["に先立ち"],
        near: [["の前に", "That's the everyday version. In formal instructions, use に先立って."]],
      }),
      s("会議{に先立って}、資料が配られた。", "かいぎ{にさきだって}、しりょうがくばられた。", "The documents were handed out ahead of the meeting.", {
        accept: ["に先立ち"],
        near: [["の後で", "That's \"after\". For \"prior to\", use に先立って."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-kikkake-ni",
    title: "〜をきっかけに・〜を契機に",
    meaning: "prompted by, taking (X) as a turning point",
    structure: "Noun / Plain form + の + をきっかけに · を契機に",
    related: ["n3-te-irai", "n2-te-kara-to-iu-mono", "n1-wo-ki-ni", "n1-wo-sakai-ni"],
    explanation: `
**をきっかけに** names the event that triggered a change or a new start: 留学をきっかけに、国際関係に興味を持った, "studying abroad got me interested in international relations".

The first half is a turning point (an illness, a meeting, a move, a book), and the second is what began because of it: a new interest, a decision, a habit.

It follows a noun, or a clause made into a noun with の or こと: 日本に来たのをきっかけに.

**を契機に** means the same but is more formal and written, typical of news and history. をきっかけとして and をきっかけにして are also common.
`,
    sentences: [
      s("留学{をきっかけに}、国際関係に興味を持った。", "りゅうがく{をきっかけに}、こくさいかんけいにきょうみをもった。", "Studying abroad got me interested in international relations.", {
        accept: ["をきっかけとして", "を契機に"],
        near: [["のために", "That's purpose. For \"prompted by\", use をきっかけに."]],
      }),
      s("病気{をきっかけに}、たばこをやめた。", "びょうき{をきっかけに}、たばこをやめた。", "My illness prompted me to give up smoking.", {
        accept: ["をきっかけとして", "を契機に"],
        near: [["によって", "That works, but for a turning point, use をきっかけに."]],
      }),
      s("ある本との出会い{をきっかけに}、作家を目指した。", "あるほんとのであい{をきっかけに}、さっかをめざした。", "Coming across a certain book made me want to become a writer.", {
        accept: ["をきっかけとして", "を契機に"],
        near: [["のために", "That's purpose. For \"prompted by\", use をきっかけに."]],
      }),
      s("結婚{をきっかけに}、仕事を辞めた。", "けっこん{をきっかけに}、しごとをやめた。", "I quit my job when I got married.", {
        accept: ["をきっかけとして", "を契機に"],
        near: [["として", "として is \"as\". For \"prompted by\", use をきっかけに."]],
      }),
      s("地震{を契機に}、防災意識が高まった。", "じしん{をけいきに}、ぼうさいいしきがたかまった。", "The earthquake raised awareness of disaster prevention.", {
        accept: ["をきっかけに"],
        near: [["によって", "That works, but for a turning point, formal writing uses を契機に."]],
      }),
    ],
  }),

  point({
    id: "n2-te-kara-to-iu-mono",
    title: "〜てからというもの",
    meaning: "ever since (and everything changed)",
    structure: "Verb て-form + からというもの",
    related: ["n3-te-irai", "n2-wo-kikkake-ni"],
    explanation: `
**てからというもの** means "ever since", with strong emphasis on how much has changed: 子どもが生まれてからというもの、生活が一変した, "ever since our child was born, our lives have completely changed".

It's like て以来 (N3), but more emotional and literary. The first half is a turning point, and the second describes a new state that has continued ever since, often a dramatic difference from before.

The second half can't be a single event or a future plan; it's a situation or habit that has lasted: 元気がない, 毎朝散歩するようになった, 毎日が新しい発見だ.

It's common in essays, memoirs and storytelling.
`,
    sentences: [
      s("子どもが生まれて{からというもの}、生活が一変した。", "こどもがうまれて{からというもの}、せいかつがいっぺんした。", "Ever since our child was born, our lives have completely changed.", {
        near: [["から", "That's just \"after\". For \"ever since (and it's all changed)\", use からというもの."]],
      }),
      s("彼女と別れて{からというもの}、彼は元気がない。", "かのじょとわかれて{からというもの}、かれはげんきがない。", "Ever since he broke up with her, he's been down.", {
        near: [["から", "That's just \"after\". For \"ever since\", use からというもの."]],
      }),
      s("犬を飼い始めて{からというもの}、毎朝散歩するようになった。", "いぬをかいはじめて{からというもの}、まいあささんぽするようになった。", "Ever since I got a dog, I've gone for a walk every morning.", {
        near: [["以来", "て以来 works too. からというもの stresses the big change."]],
      }),
      s("日本に来て{からというもの}、毎日が新しい発見だ。", "にほんにきて{からというもの}、まいにちがあたらしいはっけんだ。", "Ever since I came to Japan, every day has brought something new.", {
        near: [["以来", "て以来 works too. からというもの stresses the big change."]],
      }),
      s("禁煙して{からというもの}、体の調子がいい。", "きんえんして{からというもの}、からだのちょうしがいい。", "Ever since I gave up smoking, I've felt great.", {
        near: [["から", "That's just \"after\". For \"ever since\", use からというもの."]],
      }),
    ],
  }),

  point({
    id: "n2-ka-to-omottara",
    title: "〜かと思ったら・〜かと思うと",
    meaning: "just when (I thought); no sooner … than",
    structure: "Verb た-form + かと思ったら / かと思うと",
    related: ["n3-ta-totan", "n2-ka-nai-ka-no-uchi-ni"],
    explanation: `
**かと思ったら** describes one thing followed immediately by an unexpected change: 晴れたかと思ったら、また雨が降り出した, "just when I thought it had cleared up, it started raining again".

**かと思うと** is similar and common in narration: 帰ってきたかと思うと、すぐに出かけてしまった, "no sooner had he come home than he went out again".

Both describe what the speaker observed, usually about other people or things, not the speaker's own actions. The second half is often surprising, and the two events are close together or in contrast.

Compare たとたん (N3), which is also "the moment", but doesn't carry the "or so I thought" sense of a quick reversal.
`,
    sentences: [
      s("晴れた{かと思ったら}、また雨が降り出した。", "はれた{かとおもったら}、またあめがふりだした。", "Just when I thought it had cleared up, it started raining again.", {
        accept: ["かと思うと"],
        near: [["と思ったら", "That works too. This point practises かと思ったら."]],
      }),
      s("帰ってきた{かと思うと}、すぐに出かけてしまった。", "かえってきた{かとおもうと}、すぐにでかけてしまった。", "No sooner had he come home than he went out again.", {
        accept: ["かと思ったら"],
        near: [["とたん", "That works too. This point practises かと思うと."]],
      }),
      s("赤ちゃんは泣いた{かと思ったら}、もう笑っている。", "あかちゃんはないた{かとおもったら}、もうわらっている。", "One moment the baby's crying, the next it's laughing.", {
        accept: ["かと思うと"],
        near: [["とたん", "That works too. This point practises かと思ったら."]],
      }),
      s("静かになった{かと思ったら}、子どもたちは寝ていた。", "しずかになった{かとおもったら}、こどもたちはねていた。", "It had suddenly gone quiet, and I found the children asleep.", {
        accept: ["かと思うと"],
        near: [["ところ", "That's \"when I did\". For a sudden change you noticed, use かと思ったら."]],
      }),
      s("彼は来た{かと思うと}、何も言わずに帰った。", "かれはきた{かとおもうと}、なにもいわずにかえった。", "No sooner had he arrived than he left without a word.", {
        accept: ["かと思ったら"],
        near: [["ばかりで", "That's \"having just\". For \"no sooner … than\", use かと思うと."]],
      }),
    ],
  }),

  point({
    id: "n2-ka-nai-ka-no-uchi-ni",
    title: "〜か〜ないかのうちに",
    meaning: "almost before, the very moment",
    structure: "Verb dictionary form + か + same verb ない-form + かのうちに",
    related: ["n2-ka-to-omottara", "n3-ta-totan"],
    explanation: `
**か〜ないかのうちに** says the second thing happened so quickly that the first had barely finished, or barely begun: ベルが鳴るか鳴らないかのうちに、学生たちは教室を出た, "the bell had barely started ringing when the students left".

Say the verb twice, first in the dictionary form and then in the ない-form: 座るか座らないか, 明けるか明けないか. The literal sense is "while it's unclear whether it happened or not".

The second half is a past event, usually something someone did quickly or eagerly. It's a vivid, descriptive pattern, common in stories.

The meaning overlaps with たとたん and と同時に, but it stresses how incredibly fast it was.
`,
    sentences: [
      s("ベルが鳴る{か鳴らないかのうちに}、学生たちは教室を出た。", "ベルがなる{かならないかのうちに}、がくせいたちはきょうしつをでた。", "The bell had barely started ringing when the students left the classroom.", {
        near: [["と同時に", "That works, but this point practises か鳴らないかのうちに."]],
      }),
      s("横になる{かならないかのうちに}、眠ってしまった。", "よこになる{かならないかのうちに}、ねむってしまった。", "I fell asleep almost the moment I lay down.", {
        near: [["とたん", "That's for a past verb. After the dictionary form, the pattern is かならないかのうちに."]],
      }),
      s("席に座る{か座らないかのうちに}、電車が動き出した。", "せきにすわる{かすわらないかのうちに}、でんしゃがうごきだした。", "The train started moving before I'd even sat down.", {
        near: [["と同時に", "That works, but this point practises か座らないかのうちに."]],
      }),
      s("夜が明ける{か明けないかのうちに}、出発した。", "よるがあける{かあけないかのうちに}、しゅっぱつした。", "We set off just as dawn was breaking.", {
        near: [["前に", "That's \"before\". For \"just as, barely\", use か明けないかのうちに."]],
      }),
      s("彼は話を聞き終わる{か終わらないかのうちに}、部屋を飛び出した。", "かれははなしをききおわる{かおわらないかのうちに}、へやをとびだした。", "He dashed out of the room before he'd even finished hearing the story.", {
        near: [["とたん", "That's for a past verb. After the dictionary form, the pattern is か終わらないかのうちに."]],
      }),
    ],
  }),

  point({
    id: "n2-tsutsu",
    title: "〜つつ・〜つつも",
    meaning: "while (doing); although",
    structure: "Verb ます-stem + つつ / つつも",
    related: ["n5-nagara", "n3-nagara-mo", "n3-tsutsu-aru", "n1-tsu-tsu"],
    explanation: `
**つつ** is a written, literary version of ながら, with the same two meanings.

**While**: two actions by the same person at once: 音楽を聴きつつ、勉強する, "I study while listening to music". 周りの意見を聞きつつ、計画を進める.

**Although**, usually as **つつも**: 体に悪いと知りつつも、つい食べてしまう, "even though I know it's bad for me, I can't help eating it". The first half is often 知る, 思う or わかる, admitting you know better.

It attaches to the ます-stem. Don't confuse it with つつある (N3), "in the process of". In conversation, ながら is far more natural; つつ belongs in essays, speeches and fiction.
`,
    sentences: [
      s("音楽を聴き{つつ}、勉強する。", "おんがくをきき{つつ}、べんきょうする。", "I study while listening to music.", {
        accept: ["ながら"],
        near: [["つつある", "つつある is \"in the process of\". For \"while\", use つつ."]],
      }),
      s("体に悪いと知り{つつも}、つい食べてしまう。", "からだにわるいとしり{つつも}、ついたべてしまう。", "Even though I know it's bad for me, I can't help eating it.", {
        accept: ["ながらも"],
        near: [["つつある", "つつある is \"in the process of\". For \"although\", use つつも."]],
      }),
      s("景色を楽しみ{つつ}、歩いた。", "けしきをたのしみ{つつ}、あるいた。", "I walked along, enjoying the scenery.", {
        accept: ["ながら"],
        near: [["つつある", "つつある is \"in the process of\". For \"while\", use つつ."]],
      }),
      s("悪いと思い{つつも}、約束を破ってしまった。", "わるいとおもい{つつも}、やくそくをやぶってしまった。", "Although I knew it was wrong, I broke my promise.", {
        accept: ["ながらも", "ながら"],
        near: [["のに", "That works, but after the ます-stem, use つつも."]],
      }),
      s("周りの意見を聞き{つつ}、計画を進める。", "まわりのいけんをきき{つつ}、けいかくをすすめる。", "We'll move the plan forward while listening to people's views.", {
        accept: ["ながら"],
        near: [["つつある", "つつある is \"in the process of\". For \"while\", use つつ."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-tomonatte",
    title: "〜に伴って",
    meaning: "along with, as (one change brings another)",
    structure: "Noun / Verb dictionary form + に伴って / に伴い · に伴う + Noun",
    related: ["n3-ni-tsurete", "n3-to-tomo-ni"],
    explanation: `
**に伴って** says one change comes with, or is caused by, another: 人口の増加に伴って、住宅が不足している, "along with population growth, there's a housing shortage".

It's a formal, written relative of につれて and とともに, and it's typical of news, reports and official explanations. 伴う means "to accompany".

It works for both gradual change (as the economy grows) and single events that bring consequences (the typhoon's approach, construction work).

Before a noun, it becomes **に伴う**: 工事に伴う騒音, "noise accompanying the construction". In formal writing, に伴い. On train and road notices, you'll often see 工事に伴い, "due to construction work".
`,
    sentences: [
      s("人口の増加{に伴って}、住宅が不足している。", "じんこうのぞうか{にともなって}、じゅうたくがふそくしている。", "Along with population growth, there's a shortage of housing.", {
        accept: ["に伴い", "につれて", "とともに"],
        near: [["によって", "That's \"by\". For one change bringing another, use に伴って."]],
      }),
      s("経済の発展{に伴い}、環境問題が深刻になった。", "けいざいのはってん{にともない}、かんきょうもんだいがしんこくになった。", "As the economy developed, environmental problems became serious.", {
        accept: ["に伴って", "とともに"],
        near: [["によって", "That's \"by\". For one change bringing another, use に伴い."]],
      }),
      s("年をとる{に伴って}、体力が落ちる。", "としをとる{にともなって}、たいりょくがおちる。", "Physical strength declines with age.", {
        accept: ["につれて", "とともに", "に伴い"],
        near: [["ながら", "ながら is two actions at once. For one change bringing another, use に伴って."]],
      }),
      s("工事{に伴う}騒音で、眠れない。", "こうじ{にともなう}そうおんで、ねむれない。", "I can't sleep because of the noise from the construction.", {
        near: [["に伴って", "Before a noun, use に伴う."]],
      }),
      s("台風の接近{に伴い}、風が強くなってきた。", "たいふうのせっきん{にともない}、かぜがつよくなってきた。", "As the typhoon approaches, the wind is getting stronger.", {
        accept: ["に伴って", "につれて"],
        near: [["によると", "That's a source. For \"along with\", use に伴い."]],
      }),
    ],
  }),

  point({
    id: "n2-tokoro-ni",
    title: "〜ところに・〜ところへ・〜ところを",
    meaning: "just when; (caught) in the middle of",
    structure: "Verb plain form (often ている / た) + ところに / ところへ / ところを",
    related: ["n4-tokoro", "n3-ta-tokoro"],
    explanation: `
**ところに** and **ところへ** mean "just at that moment", when someone or something arrives and interrupts: 出かけようとしているところに、電話がかかってきた, "just as I was about to go out, the phone rang". The second half is usually 来る, かかってくる or another arrival.

**ところを** is used when someone is seen, caught or helped in the middle of something: たばこを吸っているところを、先生に見られた, "my teacher caught me smoking". The second half is often a passive verb (見られる, 起こされる) or 助ける.

The set phrase お忙しいところを, "when you're so busy", thanks someone for their time.

These are all built on ところ, "the point in time", from N4.
`,
    sentences: [
      s("出かけようとしている{ところに}、電話がかかってきた。", "でかけようとしている{ところに}、でんわがかかってきた。", "Just as I was about to go out, the phone rang.", {
        accept: ["ところへ"],
        near: [["ところを", "ところを is for being caught or seen. For \"just then, something arrived\", use ところに."]],
      }),
      s("困っている{ところへ}、友達が助けに来てくれた。", "こまっている{ところへ}、ともだちがたすけにきてくれた。", "Just when I was in trouble, a friend came to help.", {
        accept: ["ところに"],
        near: [["うちに", "うちに is \"while\". For \"just at that moment\", use ところへ."]],
      }),
      s("たばこを吸っている{ところを}、先生に見られた。", "たばこをすっている{ところを}、せんせいにみられた。", "My teacher caught me smoking.", {
        near: [["ところに", "ところに is for something arriving. For being seen in the act, use ところを."]],
      }),
      s("お忙しい{ところを}、ありがとうございます。", "おいそがしい{ところを}、ありがとうございます。", "Thank you for taking the time when you're so busy.", {
        accept: ["ところ"],
        near: [["のに", "The set phrase is お忙しいところを."]],
      }),
      s("寝ている{ところを}起こされた。", "ねている{ところを}おこされた。", "I was woken up while I was asleep.", {
        near: [["ところに", "ところに is for something arriving. With a passive like 起こされた, use ところを."]],
      }),
    ],
  }),
];
