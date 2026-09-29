import { point, s } from "../../build";

/** What something is about, where it comes from, and whose point of view it is. */

export const topics = [
  point({
    id: "n3-ni-tsuite",
    title: "〜について",
    meaning: "about, concerning",
    structure: "Noun + について · について + の + Noun",
    related: ["n3-ni-kanshite", "n3-ni-taishite"],
    explanation: `
**について** means "about" or "on the subject of": 日本の歴史について調べています, "I'm researching Japanese history". It's the everyday way to say what you're talking, thinking, writing or asking about.

Before another noun, add の: 環境問題についての本, "a book about environmental issues".

With は it picks out a topic, often to contrast it with others: その件については、後で連絡します, "as for that matter, I'll get back to you later".

It's neutral and works in speech and writing. The formal equivalent, common in business and official writing, is に関して. For "towards" someone, as in feelings or attitudes, use に対して instead.
`,
    sentences: [
      s("日本の歴史{について}調べています。", "にほんのれきし{について}しらべています。", "I'm researching Japanese history.", {
        near: [["を", "That works too, but this point practises について, \"about\"."]],
      }),
      s("この問題{について}、どう思いますか。", "このもんだい{について}、どうおもいますか。", "What do you think about this problem?", {
        near: [["は", "は makes it the topic. That works, but this point practises について."]],
      }),
      s("将来{について}話し合った。", "しょうらい{について}はなしあった。", "We talked about the future.", {
        near: [["に関して", "That means the same but is more formal. This point practises について."]],
      }),
      s("環境問題{についての}本を読んだ。", "かんきょうもんだい{についての}ほんをよんだ。", "I read a book about environmental issues.", {
        near: [["について", "Before a noun, add の: についての本."]],
      }),
      s("その件{については}、後で連絡します。", "そのけん{については}、あとでれんらくします。", "I'll get back to you about that matter later.", {
        accept: ["について"],
        near: [["には", "には isn't \"about\". Use については."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-kanshite",
    title: "〜に関して・〜に関する",
    meaning: "regarding, concerning (formal)",
    structure: "Noun + に関して · Noun + に関する + Noun",
    related: ["n3-ni-tsuite"],
    explanation: `
**に関して** is the formal twin of について: この件に関して、ご意見をお聞かせください, "please let us know your views on this matter". You'll meet it in business emails, announcements, reports and the news.

Before a noun, it becomes **に関する**: 事故に関する情報, "information about the accident". This form is more common than に関しての.

関する means "to relate to", so the literal sense is "relating to". It's slightly more precise and official than について, but in most sentences the two can swap.

With は, it marks a topic for special comment: 個人情報に関しては、厳しく管理しています, "as for personal information, we manage it strictly".
`,
    sentences: [
      s("この件{に関して}、ご意見をお聞かせください。", "このけん{にかんして}、ごいけんをおきかせください。", "Please let us know your views on this matter.", {
        near: [["について", "That's correct but less formal. This point practises に関して."]],
      }),
      s("事故{に関する}情報を集めています。", "じこ{にかんする}じょうほうをあつめています。", "We're gathering information about the accident.", {
        near: [["に関して", "Before a noun, use に関する: 事故に関する情報."]],
      }),
      s("新しい制度{に関して}説明します。", "あたらしいせいど{にかんして}せつめいします。", "I'll explain the new system.", {
        near: [["について", "That's correct but less formal. This point practises に関して."]],
      }),
      s("経済{に関する}ニュースをよく読む。", "けいざい{にかんする}ニュースをよくよむ。", "I often read news about the economy.", {
        near: [["に関しての", "That's possible, but the usual form before a noun is に関する."]],
      }),
      s("個人情報{に関して}は、厳しく管理しています。", "こじんじょうほう{にかんして}は、きびしくかんりしています。", "Personal information is something we manage strictly.", {
        near: [["について", "That's correct but less formal. This point practises に関して."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-yoru-to",
    title: "〜によると・〜によれば",
    meaning: "according to",
    structure: "Noun + によると / によれば",
    related: ["n4-sou-hearsay", "n4-rashii", "n3-ni-yotte"],
    explanation: `
**によると** names the source of what you're reporting: 天気予報によると、明日は雪だそうです, "according to the forecast, it'll snow tomorrow". **によれば** means exactly the same.

The source can be a person's words (田中さんの話によると), a medium (ニュース, 新聞) or data (調査, 研究).

The sentence usually ends with a hearsay marker, because you're passing on information rather than claiming it yourself: そうだ, らしい or ということだ.

Don't confuse it with によって, which means "by" or "depending on". Both come from よる, "to depend on", but only によると introduces a source.
`,
    sentences: [
      s("天気予報{によると}、明日は雪だそうです。", "てんきよほう{によると}、あしたはゆきだそうです。", "According to the forecast, it'll snow tomorrow.", {
        accept: ["によれば"],
        near: [["によって", "によって is \"by\" or \"depending on\". For a source, use によると."]],
      }),
      s("ニュース{によると}、事故の原因はまだわからないらしい。", "ニュース{によると}、じこのげんいんはまだわからないらしい。", "According to the news, the cause of the accident still isn't known.", {
        accept: ["によれば"],
        near: [["によって", "によって is \"by\" or \"depending on\". For a source, use によると."]],
      }),
      s("医者の話{によれば}、手術は必要ないそうだ。", "いしゃのはなし{によれば}、しゅじゅつはひつようないそうだ。", "According to the doctor, there's no need for an operation.", {
        accept: ["によると"],
        near: [["について", "について is \"about\". For a source, use によれば."]],
      }),
      s("調査{によると}、若者の読書時間が減っている。", "ちょうさ{によると}、わかもののどくしょじかんがへっている。", "According to a survey, young people are spending less time reading.", {
        accept: ["によれば"],
        near: [["によって", "によって is \"by\" or \"depending on\". For a source, use によると."]],
      }),
      s("田中さんの話{によると}、あの店は来月閉まるそうです。", "たなかさんのはなし{によると}、あのみせはらいげつしまるそうです。", "According to Tanaka, that shop is closing next month.", {
        accept: ["によれば"],
        near: [["では", "では works with media (ニュースでは). For what someone said, use によると."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-yotte",
    title: "〜によって",
    meaning: "by; depending on; due to; by means of",
    structure: "Noun + によって · による + Noun · により (formal)",
    related: ["n3-ni-yoru-to", "n4-passive"],
    explanation: `
**によって** has several related meanings, all from よる, "to depend on":

- **by**, for who made or did something, in a formal passive: この絵はピカソによって描かれた.
- **depending on**, for things that vary: 国によって習慣が違う, "customs differ from country to country".
- **due to**, for a cause, in writing: 地震によって多くの建物が壊れた.
- **by means of**: 話し合いによって問題を解決した.

Before a noun, it becomes **による**: 地震による被害, "damage caused by the earthquake". In very formal writing, によって shortens to **により**.

For an ordinary passive in speech, に is enough: 母に叱られた. によって is for creations, discoveries and formal writing.
`,
    sentences: [
      s("この絵はピカソ{によって}描かれた。", "このえはピカソ{によって}えがかれた。", "This picture was painted by Picasso.", {
        near: [["によると", "によると gives a source. For who made something, use によって."]],
      }),
      s("国{によって}習慣が違う。", "くに{によって}しゅうかんがちがう。", "Customs differ from country to country.", {
        near: [["について", "について is \"about\". For \"depending on\", use によって."]],
      }),
      s("人{によって}考え方はさまざまだ。", "ひと{によって}かんがえかたはさまざまだ。", "Ways of thinking vary from person to person.", {
        near: [["によると", "によると gives a source. For \"depending on\", use によって."]],
      }),
      s("地震{によって}多くの建物が壊れた。", "じしん{によって}おおくのたてものがこわれた。", "Many buildings were destroyed by the earthquake.", {
        accept: ["により"],
        near: [["で", "で works in speech. In writing, the cause is によって."]],
      }),
      s("話し合い{によって}問題を解決した。", "はなしあい{によって}もんだいをかいけつした。", "We solved the problem through discussion.", {
        accept: ["により"],
        near: [["によると", "によると gives a source. For \"by means of\", use によって."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-totte",
    title: "〜にとって",
    meaning: "for, to (from someone's point of view)",
    structure: "Noun + にとって",
    related: ["n3-ni-taishite", "n4-tame-ni"],
    explanation: `
**にとって** judges something from a person's or group's point of view: 私にとって、家族が一番大切です, "for me, family is the most important thing".

What follows is an evaluation: important, difficult, easy, a problem, a precious memory. 外国人にとって、敬語は難しい, "keigo is hard for foreigners".

It's easy to mix up with のために ("for the sake of", "for the benefit of") and に対して ("towards"). にとって never means doing something for someone; it's only the standpoint from which a judgement is made.

With は, it contrasts one viewpoint with others: 子どもにとっては楽しいが、親にとっては大変だ, "it's fun for the kids, but hard work for the parents".
`,
    sentences: [
      s("私{にとって}、家族が一番大切です。", "わたし{にとって}、かぞくがいちばんたいせつです。", "For me, family is the most important thing.", {
        near: [["のために", "のために is \"for the sake of\". For \"from my point of view\", use にとって."]],
      }),
      s("この写真は私{にとって}大切な思い出だ。", "このしゃしんはわたし{にとって}たいせつなおもいでだ。", "This photo is a precious memory for me.", {
        near: [["に対して", "に対して is \"towards\" or \"against\". For \"to me\", use にとって."]],
      }),
      s("子ども{にとって}、遊びは勉強と同じくらい大事だ。", "こども{にとって}、あそびはべんきょうとおなじくらいだいじだ。", "For children, play is as important as study.", {
        near: [["のために", "のために is \"for the sake of\". For \"from their point of view\", use にとって."]],
      }),
      s("外国人{にとって}、敬語は難しい。", "がいこくじん{にとって}、けいごはむずかしい。", "Keigo is hard for foreigners.", {
        near: [["には", "That works in speech. This point practises にとって."]],
      }),
      s("学生{にとって}、夏休みは一番の楽しみだ。", "がくせい{にとって}、なつやすみはいちばんのたのしみだ。", "For students, the summer holidays are the thing to look forward to most.", {
        near: [["によって", "によって is \"depending on\". For \"to students\", use にとって."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-taishite",
    title: "〜に対して",
    meaning: "towards, against; whereas",
    structure: "Noun + に対して · に対する + Noun · Plain form + のに対して (whereas)",
    related: ["n3-ni-totte", "n3-ni-tsuite"],
    explanation: `
**に対して** points an action or attitude at someone or something: 先生に対して失礼なことを言ってはいけない, "you mustn't be rude to your teacher". It's common with feelings, responses and opposition: 質問に対して答える, 法律に対して反対する.

Before a noun, it becomes **に対する**: 環境問題に対する関心, "interest in environmental issues".

After a plain form plus の, it makes a contrast: 兄は背が高いのに対して、弟は低い, "my older brother is tall, whereas my younger brother is short". This use is formal and common in writing.

Don't confuse it with にとって: 私にとって is "from my point of view", while 私に対して is "towards me".
`,
    sentences: [
      s("先生{に対して}、失礼なことを言ってはいけない。", "せんせい{にたいして}、しつれいなことをいってはいけない。", "You mustn't say rude things to your teacher.", {
        near: [["にとって", "にとって is \"from the point of view of\". For \"towards\", use に対して."]],
      }),
      s("質問{に対して}、はっきり答えてください。", "しつもん{にたいして}、はっきりこたえてください。", "Please give a clear answer to the question.", {
        near: [["について", "について is \"about\". For responding to something, use に対して."]],
      }),
      s("兄は背が高いの{に対して}、弟は低い。", "あにはせがたかいの{にたいして}、おとうとはひくい。", "My older brother is tall, whereas my younger brother is short.", {
        near: [["にとって", "にとって is a point of view. For \"whereas\", use のに対して."]],
      }),
      s("環境問題{に対する}関心が高まっている。", "かんきょうもんだい{にたいする}かんしんがたかまっている。", "Interest in environmental issues is growing.", {
        near: [["に対して", "Before a noun, use に対する."]],
      }),
      s("新しい法律{に対して}反対する人が多い。", "あたらしいほうりつ{にたいして}はんたいするひとがおおい。", "Many people are opposed to the new law.", {
        near: [["を", "反対する doesn't take を. It's 法律に反対する, or に対して."]],
      }),
    ],
  }),

  point({
    id: "n3-to-shite",
    title: "〜として",
    meaning: "as (a role, status or purpose)",
    structure: "Noun + として · としては · としても",
    related: ["n3-ni-totte", "n3-ni-shite-wa"],
    explanation: `
**として** gives the role, status or capacity in which someone acts or something is used: 通訳として会議に参加した, "I took part in the meeting as an interpreter".

It works for people (留学生として, 親として) and for things used in a particular way (物置として使う, "use as a storeroom").

**としては** gives a position or standpoint: 私個人としては、賛成です, "personally, I'm in favour". **としても** adds "also as": 歌手としても有名だ, "also famous as a singer".

Don't mix it up with にとって: 親として is "in my role as a parent"; 親にとって is "from parents' point of view". And のように means "like", not "in the role of".
`,
    sentences: [
      s("通訳{として}会議に参加した。", "つうやく{として}かいぎにさんかした。", "I took part in the meeting as an interpreter.", {
        near: [["で", "That's heard in speech, but for a role, use として."]],
      }),
      s("留学生{として}日本に来ました。", "りゅうがくせい{として}にほんにきました。", "I came to Japan as an exchange student.", {
        near: [["に", "に isn't a role. Use として."]],
      }),
      s("この部屋は物置{として}使っている。", "このへやはものおき{として}つかっている。", "We use this room as a storeroom.", {
        near: [["のように", "のように is \"like\". For \"in the role of\", use として."]],
      }),
      s("親{として}、子どもの将来が心配だ。", "おや{として}、こどものしょうらいがしんぱいだ。", "As a parent, I worry about my child's future.", {
        near: [["にとって", "にとって is \"from the viewpoint of\". For \"in the role of\", use として."]],
      }),
      s("私個人{としては}、賛成です。", "わたしこじん{としては}、さんせいです。", "Personally, I'm in favour.", {
        accept: ["として"],
        near: [["には", "For your own position, use としては."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-kurabete",
    title: "〜に比べて",
    meaning: "compared with",
    structure: "Noun + に比べて / に比べると (と比べて also works)",
    related: ["n5-yori", "n4-hodo-nai"],
    explanation: `
**に比べて** sets up a comparison: 去年に比べて、今年は雨が多い, "compared with last year, there's more rain this year". 比べる means "to compare", so the literal sense is "compared to".

It's a little more formal and explicit than より, and it's common in reports, news and when you're weighing two things up. **に比べると** means the same, and と比べて is fine too.

The second half says how the main subject differs: more, less, better, cheaper, quieter. It's also common with change over time: 前に比べて、日本語が上手になりましたね, "your Japanese has improved compared with before".

In formal writing, it shortens to に比べ.
`,
    sentences: [
      s("去年{に比べて}、今年は雨が多い。", "きょねん{にくらべて}、ことしはあめがおおい。", "Compared with last year, there's more rain this year.", {
        accept: ["と比べて", "とくらべて", "に比べ", "にくらべ", "に比べると", "にくらべると"],
        near: [["より", "より works too. This point practises に比べて."]],
      }),
      s("東京{に比べて}、大阪は物価が安い。", "とうきょう{にくらべて}、おおさかはぶっかがやすい。", "Compared with Tokyo, Osaka is cheaper to live in.", {
        accept: ["と比べて", "とくらべて", "に比べ", "にくらべ", "に比べると", "にくらべると"],
        near: [["より", "より works too. This point practises に比べて."]],
      }),
      s("兄{に比べて}、私は背が低い。", "あに{にくらべて}、わたしはせがひくい。", "Compared with my brother, I'm short.", {
        accept: ["と比べて", "とくらべて", "に比べると", "にくらべると"],
        near: [["ほど", "ほど needs a negative (兄ほど高くない). For \"compared with\", use に比べて."]],
      }),
      s("前{に比べて}、日本語が上手になりましたね。", "まえ{にくらべて}、にほんごがじょうずになりましたね。", "Your Japanese has improved compared with before.", {
        accept: ["と比べて", "とくらべて", "に比べると", "にくらべると"],
        near: [["より", "より works too. This point practises に比べて."]],
      }),
      s("都会{に比べると}、田舎は静かだ。", "とかい{にくらべると}、いなかはしずかだ。", "Compared with the city, the countryside is quiet.", {
        accept: ["に比べて", "にくらべて", "と比べると", "とくらべると"],
        near: [["より", "より works too. This point practises に比べると."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-kawatte",
    title: "〜に代わって",
    meaning: "in place of, on behalf of",
    structure: "Noun + に代わって / に代わり",
    related: ["n3-to-shite", "n3-kawari-ni"],
    explanation: `
**に代わって** means someone or something takes another's place: 社長に代わって、私がご挨拶いたします, "I will give the greeting on behalf of the president".

It covers two ideas. One is standing in for a person: 病気の母に代わって、姉が料理をした, "my sister cooked in place of our sick mother". The other is one thing replacing another over time: 手紙に代わって、メールが使われるようになった, "email has replaced letters".

It's formal and common in speeches, announcements and writing. In everyday speech, の代わりに does the same job: 母の代わりに料理をした.

In very formal writing, it shortens to に代わり.
`,
    sentences: [
      s("社長{に代わって}、私がご挨拶いたします。", "しゃちょう{にかわって}、わたしがごあいさついたします。", "I will give the greeting on behalf of the president.", {
        accept: ["に代わり", "にかわり"],
        near: [["の代わりに", "That's fine in speech. In a formal speech, use に代わって."]],
      }),
      s("病気の母{に代わって}、姉が料理をした。", "びょうきのはは{にかわって}、あねがりょうりをした。", "My sister cooked in place of our mother, who was ill.", {
        near: [["のために", "That's \"for her sake\". For \"in her place\", use に代わって."]],
      }),
      s("最近は、人{に代わって}ロボットが働く工場も多い。", "さいきんは、ひと{にかわって}ロボットがはたらくこうじょうもおおい。", "These days, many factories have robots working in place of people.", {
        near: [["によって", "によって is \"by\". For \"in place of\", use に代わって."]],
      }),
      s("手紙{に代わって}、メールが使われるようになった。", "てがみ{にかわって}、メールがつかわれるようになった。", "Email has come to be used instead of letters.", {
        near: [["によって", "によって is \"by\". For \"in place of\", use に代わって."]],
      }),
      s("担当者{に代わって}お答えします。", "たんとうしゃ{にかわって}おこたえします。", "I'll answer on behalf of the person in charge.", {
        near: [["について", "について is \"about\". For \"on behalf of\", use に代わって."]],
      }),
    ],
  }),

  point({
    id: "n3-wo-hajime",
    title: "〜をはじめ",
    meaning: "starting with, including (and others)",
    structure: "Noun + をはじめ / をはじめとして · をはじめとする + Noun",
    related: ["n3-wo-chuushin-ni", "n5-nado"],
    explanation: `
**をはじめ** leads a list with its most important or typical member, and implies there are others: 東京をはじめ、大きな町はどこも込んでいる, "big cities, starting with Tokyo, are crowded everywhere".

It's a formal way to say "X and others" or "including, above all, X". You'll hear it in speeches and thank-yous: 社長をはじめ、社員全員, "everyone from the president down".

**をはじめとして** means the same. Before a noun, it becomes **をはじめとする**: 京都をはじめとする古い町, "old towns such as Kyoto".

The はじめ is the noun "beginning", related to 始める. Compare など, which goes after a list and adds "and so on" without singling anything out.
`,
    sentences: [
      s("東京{をはじめ}、大きな町はどこも込んでいる。", "とうきょう{をはじめ}、おおきなまちはどこもこんでいる。", "Big cities, starting with Tokyo, are crowded everywhere.", {
        accept: ["をはじめとして"],
        near: [["から", "から is \"from\". For \"starting with, and others\", use をはじめ."]],
      }),
      s("社長{をはじめ}、社員全員がパーティーに参加した。", "しゃちょう{をはじめ}、しゃいんぜんいんがパーティーにさんかした。", "Everyone from the president down came to the party.", {
        accept: ["をはじめとして"],
        near: [["など", "など goes after a list. To lead it with the main example, use をはじめ."]],
      }),
      s("すしや天ぷら{をはじめ}、日本料理は世界中で人気だ。", "すしやてんぷら{をはじめ}、にほんりょうりはせかいじゅうでにんきだ。", "Japanese food, with sushi and tempura leading the way, is popular all over the world.", {
        accept: ["をはじめとして"],
        near: [["など", "など goes after a list. To lead it with the main example, use をはじめ."]],
      }),
      s("両親{をはじめ}、多くの人に助けてもらった。", "りょうしん{をはじめ}、おおくのひとにたすけてもらった。", "I was helped by many people, above all my parents.", {
        accept: ["をはじめとして"],
        near: [["を始めて", "を始めて means \"begin something\". For \"starting with\", it's をはじめ."]],
      }),
      s("京都{をはじめとする}古い町を旅行した。", "きょうと{をはじめとする}ふるいまちをりょこうした。", "I travelled around old towns, Kyoto among them.", {
        near: [["をはじめ", "Before a noun, use をはじめとする."]],
      }),
    ],
  }),

  point({
    id: "n3-wo-chuushin-ni",
    title: "〜を中心に",
    meaning: "centred on, mainly",
    structure: "Noun + を中心に / を中心として · を中心とする + Noun",
    related: ["n3-wo-hajime"],
    explanation: `
**を中心に** says what something revolves around, literally or figuratively: この町は駅を中心に発展した, "this town grew up around the station".

It often means "mainly" or "focusing on": 今日は文法を中心に勉強します, "today we'll focus mainly on grammar"; 若者を中心に人気だ, "it's popular, mainly among young people".

It can be literal, too: 地球は太陽を中心に回っている, "the Earth revolves around the sun".

**を中心として** means the same, and before a noun it becomes **を中心とする**: 東京を中心とする地域, "the area centred on Tokyo". 中心 on its own is simply "centre", as in 町の中心, "the town centre", or 話の中心, "the heart of the story".
`,
    sentences: [
      s("この町は駅{を中心に}発展した。", "このまちはえき{をちゅうしんに}はってんした。", "This town grew up around the station.", {
        accept: ["を中心として", "をちゅうしんとして"],
        near: [["の中に", "That's \"inside\". For \"centred on\", use を中心に."]],
      }),
      s("若者{を中心に}、このアプリが人気だ。", "わかもの{をちゅうしんに}、このアプリがにんきだ。", "This app is popular, mainly among young people.", {
        accept: ["を中心として", "をちゅうしんとして"],
        near: [["のために", "That's \"for\". For \"mainly among\", use を中心に."]],
      }),
      s("今日は文法{を中心に}勉強します。", "きょうはぶんぽう{をちゅうしんに}べんきょうします。", "Today we'll focus mainly on grammar.", {
        accept: ["を中心として", "をちゅうしんとして"],
        near: [["について", "について is \"about\". For \"focusing on\", use を中心に."]],
      }),
      s("地球は太陽{を中心に}回っている。", "ちきゅうはたいよう{をちゅうしんに}まわっている。", "The Earth revolves around the sun.", {
        accept: ["を中心として", "をちゅうしんとして"],
        near: [["に", "That's \"to the sun\". For revolving around it, use を中心に."]],
      }),
      s("彼女{を中心に}、新しいチームができた。", "かのじょ{をちゅうしんに}、あたらしいチームができた。", "A new team formed around her.", {
        accept: ["を中心として", "をちゅうしんとして"],
        near: [["をはじめ", "をはじめ is \"starting with\". For \"centred on\", use を中心に."]],
      }),
    ],
  }),

  point({
    id: "n3-muke-muki",
    title: "〜向け・〜向き",
    meaning: "made for; suited to",
    structure: "Noun + 向け / 向き (+ の Noun · + だ)",
    related: ["n3-ni-totte"],
    explanation: `
**向け** means "aimed at, made for" a particular group: 子ども向けの本, "a book for children"; 外国人向けのガイド, "a guide for foreigners". Someone designed it with that audience in mind.

**向き** means "suited to", whether or not it was designed that way: この仕事は人と話すのが好きな人向きだ, "this job suits people who like talking to others". Its negative, 向きではない or 不向き, is "not suited".

向き also means the direction something faces: 南向きの部屋, "a south-facing room".

Both come from 向く, "to face". A rough guide: 向け is about the maker's intention; 向き is about the fit.
`,
    sentences: [
      s("これは子ども{向け}の本です。", "これはこども{むけ}のほんです。", "This is a book written for children.", {
        near: [["向き", "向き is \"suited to\". Something made for children is 子ども向け."]],
      }),
      s("この番組は外国人{向け}に作られた。", "このばんぐみはがいこくじん{むけ}につくられた。", "This programme was made for foreigners.", {
        near: [["向き", "向き is \"suited to\". Something made for an audience is 向け."]],
      }),
      s("この仕事は、人と話すのが好きな人{向き}だ。", "このしごとは、ひととはなすのがすきなひと{むき}だ。", "This job suits people who like talking to others.", {
        near: [["向け", "向け is \"made for\". For \"suited to\", use 向き."]],
      }),
      s("この部屋は南{向き}で明るい。", "このへやはみなみ{むき}であかるい。", "This room faces south, so it's bright.", {
        near: [["向け", "向け is \"made for\". For the direction a room faces, use 向き."]],
      }),
      s("初心者{向け}の料理教室に通っている。", "しょしんしゃ{むけ}のりょうりきょうしつにかよっている。", "I go to a cooking class for beginners.", {
        near: [["のため", "That works, but 初心者向け is the usual label."]],
      }),
    ],
  }),

  point({
    id: "n3-teki",
    title: "〜的",
    meaning: "-ic, -ical; in terms of",
    structure: "Noun + 的 + な (adjective) / に (adverb)",
    related: ["n5-na-adjectives", "n5-adverbs"],
    explanation: `
**的** turns a noun, usually a Chinese-origin one, into a な-adjective: 経済 (economy) → 経済的な (economic, economical); 伝統 (tradition) → 伝統的な (traditional).

With に, it makes an adverb meaning "in terms of" or "-ally": 技術的に難しい, "technically difficult"; 個人的には, "personally speaking".

Some words only really live with 的: 積極的 (proactive), 具体的 (concrete), 基本的 (basic). And some nouns can't take it at all, so learn the combinations as you meet them.

In casual speech, young people stick 的 onto almost anything, including pronouns: 私的には, "for me". It's jokey slang, not textbook use.
`,
    sentences: [
      s("経済{的}な理由で、大学をやめた。", "けいざい{てき}なりゆうで、だいがくをやめた。", "I left university for financial reasons.", {
        near: [["の", "経済の理由 isn't natural. Make it an adjective: 経済的な."]],
      }),
      s("この問題は、技術{的}には難しくない。", "このもんだいは、ぎじゅつ{てき}にはむずかしくない。", "Technically, this problem isn't difficult.", {
        near: [["の", "To say \"technically\", make an adverb: 技術的に."]],
      }),
      s("彼はとても積極{的}な人だ。", "かれはとてもせっきょく{てき}なひとだ。", "He's a very proactive person.", {
        near: [["な", "積極 isn't used on its own. Add 的: 積極的な."]],
      }),
      s("個人{的}には、この映画が好きです。", "こじん{てき}には、このえいががすきです。", "Personally, I like this film.", {
        near: [["の", "個人の is \"an individual's\". For \"personally\", use 個人的に."]],
      }),
      s("日本の伝統{的}な家に泊まった。", "にほんのでんとう{てき}ないえにとまった。", "I stayed in a traditional Japanese house.", {
        near: [["の", "伝統の家 is odd. Use the adjective 伝統的な."]],
      }),
    ],
  }),
];
