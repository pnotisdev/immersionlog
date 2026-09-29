import { point, s } from "../../build";

/** Reasons and purpose: motives, occasions, face-saving, excuses, pretexts and literary "in order to". */

export const cause = [
  point({
    id: "n1-ba-koso",
    title: "〜ばこそ",
    meaning: "precisely because (a good motive)",
    structure: "Verb ば-form + こそ (〜ていればこそ, 〜であればこそ)",
    related: ["n3-koso", "n2-te-koso"],
    explanation: `
**ばこそ** means "it's precisely because…", and stresses a positive, often misunderstood motive: 子どものためを思えばこそ、厳しく叱るのだ, "it's precisely because I care about my child that I'm strict with him".

The second half often ends in のだ or のである, explaining why someone acted as they did. The motive is usually love, trust, expectation or health, something good behind a harsh-looking action.

It's a literary form of からこそ (N3's こそ). Watch the shape: からこそ follows the plain form (思うからこそ), while ばこそ follows the ば-form (思えばこそ). It's common as 〜ていればこそ and 〜であればこそ.

In classical Japanese, ばこそ could also mean "far from", but that use is rare today.
`,
    sentences: [
      s("子どものためを思え{ばこそ}、厳しく叱るのだ。", "こどものためをおもえ{ばこそ}、きびしくしかるのだ。", "It's precisely because I care about my child that I'm strict with him.", {
        near: [["からこそ", "からこそ needs the plain form (思うからこそ). After the ば-form, use ばこそ."]],
      }),
      s("君を信頼していれ{ばこそ}、この仕事を任せるのだ。", "きみをしんらいしていれ{ばこそ}、このしごとをまかせるのだ。", "It's precisely because I trust you that I'm leaving this job to you.", {
        near: [["からこそ", "からこそ needs the plain form (しているからこそ). After the ば-form, use ばこそ."]],
      }),
      s("健康であれ{ばこそ}、好きなことができる。", "けんこうであれ{ばこそ}、すきなことができる。", "It's only because you're healthy that you can do what you love.", {
        near: [["ば", "Plain ば is just \"if\". For \"precisely because\", add こそ: ばこそ."]],
      }),
      s("愛していれ{ばこそ}、別れを選んだのだ。", "あいしていれ{ばこそ}、わかれをえらんだのだ。", "It was precisely because I loved her that I chose to leave.", {
        near: [["からこそ", "からこそ needs the plain form (いるからこそ). After the ば-form, use ばこそ."]],
      }),
      s("期待していれ{ばこそ}、厳しいことを言うのだ。", "きたいしていれ{ばこそ}、きびしいことをいうのだ。", "I say harsh things precisely because I expect a lot of you.", {
        near: [["ば", "Plain ば is just \"if\". For \"precisely because\", add こそ: ばこそ."]],
      }),
    ],
  }),

  point({
    id: "n1-to-atte",
    title: "〜とあって",
    meaning: "because (it's a special occasion)",
    structure: "Plain form / Noun + とあって",
    related: ["n2-dake-ni"],
    explanation: `
**とあって** gives a special or unusual situation as the reason for what you can see happening: 連休とあって、観光地はどこも混雑している, "because it's a long weekend, tourist spots are packed everywhere".

The first half is a notable circumstance, like a holiday, a celebrity visit, a sale or a first time. The second half describes a natural, observable result, often crowds or excitement. It's a favourite of news reports.

The speaker is describing the situation objectively, so the second half isn't a request, a wish or the speaker's own plan.

Compare だけに (N2), "as you'd expect from", which evaluates. とあって just reports cause and effect. Don't confuse it with とあれば, "if it's for".
`,
    sentences: [
      s("連休{とあって}、観光地はどこも混雑している。", "れんきゅう{とあって}、かんこうちはどこもこんざつしている。", "Because it's a long weekend, tourist spots are packed everywhere.", {
        near: [["として", "として is \"as\". For \"because it's (a special occasion)\", use とあって."]],
      }),
      s("人気歌手が来る{とあって}、会場は満員だった。", "にんきかしゅがくる{とあって}、かいじょうはまんいんだった。", "With a popular singer coming, the hall was full.", {
        near: [["とあれば", "とあれば is \"if it's for\". For \"because\", use とあって."]],
      }),
      s("初めての海外旅行{とあって}、娘は興奮している。", "はじめてのかいがいりょこう{とあって}、むすめはこうふんしている。", "It's her first trip abroad, so my daughter is excited.", {
        near: [["として", "として is \"as\". For \"because it's\", use とあって."]],
      }),
      s("半額セール{とあって}、朝から長い行列ができた。", "はんがくセール{とあって}、あさからながいぎょうれつができた。", "With a half-price sale on, a long queue formed from the morning.", {
        near: [["とあれば", "とあれば is \"if it's for\". For \"because\", use とあって."]],
      }),
      s("久しぶりの晴天{とあって}、公園は家族連れでにぎわった。", "ひさしぶりのせいてん{とあって}、こうえんはかぞくづれでにぎわった。", "With clear skies for the first time in ages, the park was full of families.", {
        near: [["として", "として is \"as\". For \"because it's\", use とあって."]],
      }),
    ],
  }),

  point({
    id: "n1-yue",
    title: "〜ゆえ(に)・〜がゆえに",
    meaning: "because of, therefore (literary)",
    structure: "Noun (の) + ゆえ(に) · Plain form + が + ゆえ(に) · Sentence。ゆえに、…",
    related: ["n3-tame-reason", "n2-shitagatte"],
    explanation: `
**ゆえ** (故) is a literary "because": 若さゆえに、失敗することもある, "being young, you sometimes fail". After a verb or adjective, it becomes **がゆえに**: 正直であるがゆえに、損をする, "he loses out precisely because he's honest".

At the start of a sentence, **ゆえに** means "therefore", as in logic and philosophy: 我思う、ゆえに我あり, "I think, therefore I am".

It's common in essays, speeches, song lyrics and anime, wherever a weighty, old-fashioned tone is wanted. In conversation, you'd use から, ので, or ために.

The kanji 故 is also in 故郷 (hometown) and 事故 (accident), though with different readings.
`,
    sentences: [
      s("若さ{ゆえに}、失敗することもある。", "わかさ{ゆえに}、しっぱいすることもある。", "Being young, you sometimes fail.", {
        accept: ["ゆえ", "故に", "故"],
        near: [["せいで", "せいで blames, and needs の after a noun. The literary \"because of\" is ゆえに."]],
      }),
      s("貧しさ{ゆえに}、学校に行けない子どもたちがいる。", "まずしさ{ゆえに}、がっこうにいけないこどもたちがいる。", "There are children who can't go to school because of poverty.", {
        accept: ["ゆえ", "故に", "故"],
        near: [["として", "として is \"as\". For \"because of\", use ゆえに."]],
      }),
      s("彼は正直である{がゆえに}、損をすることが多い。", "かれはしょうじきである{がゆえに}、そんをすることがおおい。", "He often loses out precisely because he's honest.", {
        accept: ["ゆえに", "が故に"],
        near: [["ために", "ために works in meaning. This point practises the literary がゆえに."]],
      }),
      s("愛する{がゆえに}、厳しくするのだ。", "あいする{がゆえに}、きびしくするのだ。", "It's because I love you that I'm strict.", {
        accept: ["ゆえに", "が故に"],
        near: [["ために", "ために works in meaning. This point practises the literary がゆえに."]],
      }),
      s("我思う、{ゆえに}我あり。", "われおもう、{ゆえに}われあり。", "I think, therefore I am.", {
        accept: ["故に"],
        near: [["しかし", "しかし is \"however\". For \"therefore\", use ゆえに."]],
      }),
    ],
  }),

  point({
    id: "n1-temae",
    title: "〜手前",
    meaning: "because of (how it would look), having said so",
    structure: "Verb plain (often た-form) / Noun + の + 手前",
    related: ["n2-ijou-wa", "n3-kara-ni-wa"],
    explanation: `
**手前** gives a reason based on face: because of what you've already said or done, or because of who is watching, you can't act otherwise. 自分から言い出した手前、今さらやめられない, "since it was my idea, I can't back out now".

There are two common shapes:
- 〜た手前: having said or done something (言った手前, 約束した手前).
- Person + の手前: in front of someone you need to look good for (子どもの手前, 部下の手前).

The second half is usually something you must or can't do: わけにはいかない, 〜られない, しかない.

It's close to 以上 (N2), but 手前 specifically adds embarrassment and appearances. Literally, it means "this side, in front of".
`,
    sentences: [
      s("自分から言い出した{手前}、今さらやめられない。", "じぶんからいいだした{てまえ}、いまさらやめられない。", "Since it was my idea in the first place, I can't back out now.", {
        accept: ["以上"],
        near: [["前に", "前に is \"before\". For \"having said it (and to save face)\", use 手前.", "まえに"]],
      }),
      s("子どもの{手前}、泣くわけにはいかなかった。", "こどもの{てまえ}、なくわけにはいかなかった。", "With the children watching, I couldn't let myself cry.", {
        near: [["前で", "前で is a literal \"in front of\". For \"for appearances' sake in front of\", use 手前.", "まえで"]],
      }),
      s("大丈夫だと言った{手前}、助けを求めにくい。", "だいじょうぶだといった{てまえ}、たすけをもとめにくい。", "Having said I was fine, it's hard to ask for help.", {
        accept: ["以上"],
        near: [["前に", "前に is \"before\". For \"having said so (and to save face)\", use 手前.", "まえに"]],
      }),
      s("部下の{手前}、弱音は吐けない。", "ぶかの{てまえ}、よわねははけない。", "I can't complain in front of my staff.", {
        near: [["前で", "前で is a literal \"in front of\". For \"for appearances' sake\", use 手前.", "まえで"]],
      }),
      s("約束した{手前}、行かないわけにはいかない。", "やくそくした{てまえ}、いかないわけにはいかない。", "Having promised, I can't not go.", {
        accept: ["以上"],
        near: [["前に", "前に is \"before\". For \"having promised (and to save face)\", use 手前.", "まえに"]],
      }),
    ],
  }),

  point({
    id: "n1-koto-tote",
    title: "〜こととて",
    meaning: "since, as (apologetic and formal)",
    structure: "Plain form / Noun + の + こととて",
    related: ["n2-koto-kara"],
    explanation: `
**こととて** gives a reason, usually to excuse or apologise for something: 慣れぬこととて、失礼いたしました, "please forgive me, I'm not used to this".

It's old-fashioned and very formal, found in polite speech, letters and period dramas. Classical forms like 慣れぬ (= 慣れない) and 知らぬ often come before it.

The second half is often an apology (失礼しました, お許しください) or an explanation of why something can't be done: 休日のこととて、担当者が不在です, "as it's a holiday, the person in charge is away".

Compare ことから (N2), "from the fact that", which gives neutral, logical grounds. こととて is humble and apologetic.
`,
    sentences: [
      s("慣れぬ{こととて}、失礼いたしました。", "なれぬ{こととて}、しつれいいたしました。", "Please forgive me, I'm not used to this.", {
        near: [["ことだし", "ことだし is a casual reason. For a formal, apologetic \"as\", use こととて."]],
      }),
      s("子どものした{こととて}、どうかお許しください。", "こどものした{こととて}、どうかおゆるしください。", "It was only a child who did it, so please forgive them.", {
        near: [["ことから", "ことから gives neutral grounds. For an apologetic \"as\", use こととて."]],
      }),
      s("休日の{こととて}、担当者が不在です。", "きゅうじつの{こととて}、たんとうしゃがふざいです。", "As it's a holiday, the person in charge is away.", {
        near: [["ことだし", "ことだし is a casual reason. For a formal \"as\", use こととて."]],
      }),
      s("急な{こととて}、何の準備もできておりません。", "きゅうな{こととて}、なんのじゅんびもできておりません。", "As it was so sudden, we haven't been able to prepare anything.", {
        near: [["ことから", "ことから gives neutral grounds. For an apologetic \"as\", use こととて."]],
      }),
      s("初めての{こととて}、至らない点もあるかと思います。", "はじめての{こととて}、いたらないてんもあるかとおもいます。", "As this is my first time, I'm sure there will be shortcomings.", {
        near: [["ことだし", "ことだし is a casual reason. For a humble \"as\", use こととて."]],
      }),
    ],
  }),

  point({
    id: "n1-dewa-arumai-shi",
    title: "〜ではあるまいし・〜じゃあるまいし",
    meaning: "it's not as if, you're not a …",
    structure: "Noun / Verb plain + わけ + ではあるまいし",
    related: ["n2-mai"],
    explanation: `
**ではあるまいし** points out an obvious fact to criticise or reassure: 子どもではあるまいし、一人で帰れるよ, "I'm not a child, I can get home by myself".

The first half is something obviously untrue: you're not a child, not a god, it's not the first time. The second half is the judgement that follows: a criticism, an order or a reassurance, often 〜な, 〜なさい or 〜よ.

In speech, it's usually **じゃあるまいし**. It comes from まい (N2), a negative guess, plus し. With verbs, use わけではあるまいし: 一生会えないわけではあるまいし, "it's not as if we'll never meet again".

Plain じゃないし is the everyday version, but it doesn't have the same scolding tone.
`,
    sentences: [
      s("子ども{ではあるまいし}、一人で帰れるよ。", "こども{ではあるまいし}、ひとりでかえれるよ。", "I'm not a child, I can get home by myself.", {
        accept: ["じゃあるまいし"],
        near: [["ではないし", "ではないし is a plain \"it isn't, and\". For the scolding \"it's not as if\", use ではあるまいし."]],
      }),
      s("神様{ではあるまいし}、未来のことなんて分からない。", "かみさま{ではあるまいし}、みらいのことなんてわからない。", "I'm not God. How should I know the future?", {
        accept: ["じゃあるまいし"],
        near: [["だから", "だから is \"so\". For \"it's not as if\", use ではあるまいし."]],
      }),
      s("初めて{じゃあるまいし}、そんなに緊張するな。", "はじめて{じゃあるまいし}、そんなにきんちょうするな。", "It's not your first time. Don't be so nervous.", {
        accept: ["ではあるまいし"],
        near: [["じゃないし", "じゃないし is the plain version. For the scolding \"it's not as if\", use じゃあるまいし."]],
      }),
      s("一生会えないわけ{ではあるまいし}、そんなに泣かないで。", "いっしょうあえないわけ{ではあるまいし}、そんなになかないで。", "It's not as if we'll never see each other again. Don't cry so much.", {
        accept: ["じゃあるまいし"],
        near: [["ではないし", "ではないし is a plain \"it isn't, and\". For \"it's not as if\", use ではあるまいし."]],
      }),
      s("小学生{じゃあるまいし}、こんなことで喧嘩するな。", "しょうがくせい{じゃあるまいし}、こんなことでけんかするな。", "You're not primary school kids. Don't fight over something like this.", {
        accept: ["ではあるまいし"],
        near: [["だから", "だから is \"so\". For \"it's not as if\", use じゃあるまいし."]],
      }),
    ],
  }),

  point({
    id: "n1-n-ga-tame",
    title: "〜んがため(に)",
    meaning: "in order to, for the sake of (strong resolve)",
    structure: "Verb ない-stem + んがため(に・の) (する → せんがため)",
    related: ["n4-tame-ni", "n1-beku"],
    explanation: `
**んがため** is a literary "in order to" with a sense of fierce determination: 勝たんがために、手段を選ばない, "he'll use any means to win".

It attaches to the ない-stem: 勝つ → 勝た + んがため, 知る → 知ら + んがため, 生きる → 生き + んがため, and する → せんがため.

The ん is the classical volitional む, so it literally means "for the sake of trying to". The purpose is usually serious: to win, to survive, to learn the truth, to realise a dream. The second half is often a desperate or extreme effort.

In everyday language, you'd use ために after the dictionary form (勝つために). Be careful with the shape: after 勝た, only んがため fits.
`,
    sentences: [
      s("夢を実現させ{んがため}、彼は必死に働いた。", "ゆめをじつげんさせ{んがため}、かれはひっしにはたらいた。", "He worked desperately to make his dream come true.", {
        accept: ["んがために"],
        near: [["ために", "ために needs the dictionary form (させるために). After this stem, use んがため."]],
      }),
      s("勝た{んがために}、手段を選ばない。", "かた{んがために}、しゅだんをえらばない。", "He'll use any means to win.", {
        accept: ["んがため"],
        near: [["ために", "ために needs the dictionary form (勝つために). After 勝た, use んがために."]],
      }),
      s("生き{んがため}、彼は盗みを働いた。", "いき{んがため}、かれはぬすみをはたらいた。", "He stole in order to survive.", {
        accept: ["んがために"],
        near: [["ために", "ために needs the dictionary form (生きるために). After this stem, use んがため."]],
      }),
      s("真実を知ら{んがため}、彼は調査を続けた。", "しんじつをしら{んがため}、かれはちょうさをつづけた。", "He kept investigating, determined to learn the truth.", {
        accept: ["んがために"],
        near: [["ために", "ために needs the dictionary form (知るために). After 知ら, use んがため."]],
      }),
      s("合格せ{んがため}、毎晩遅くまで勉強した。", "ごうかくせ{んがため}、まいばんおそくまでべんきょうした。", "To pass, I studied late into the night every night.", {
        accept: ["んがために"],
        near: [["ために", "ために needs the dictionary form (するために). After せ, use んがため."]],
      }),
    ],
  }),

  point({
    id: "n1-beku",
    title: "〜べく",
    meaning: "in order to (formal)",
    structure: "Verb dictionary form + べく (する → すべく or するべく)",
    related: ["n3-beki", "n4-tame-ni", "n1-n-ga-tame"],
    explanation: `
**べく** is a formal, written "in order to": 夢をかなえるべく、上京した, "I moved to Tokyo to pursue my dream".

It follows the dictionary form. With する, the classical すべく is common (解決すべく), though するべく is also used. The second half is a deliberate action the subject takes, so it's typical of news reports and formal statements: 原因を調べるべく、調査団が派遣された.

It's the adverbial form of べき (N3, "should"), so the feeling is "as one should, in order to". Don't mix them up: 行くべき人 is "a person who should go", but 行くべく is "in order to go".

The negative 〜べくもない (N1) means "can't possibly".
`,
    sentences: [
      s("夢をかなえる{べく}、上京した。", "ゆめをかなえる{べく}、じょうきょうした。", "I moved to Tokyo to pursue my dream.", {
        accept: ["ために"],
        near: [["べき", "べき is \"should\". For \"in order to\", use べく."]],
      }),
      s("問題を解決す{べく}、全力を尽くします。", "もんだいをかいけつす{べく}、ぜんりょくをつくします。", "We'll do everything we can to resolve the problem.", {
        near: [["べき", "べき is \"should\". For \"in order to\", use べく."]],
      }),
      s("家族を養う{べく}、懸命に働いた。", "かぞくをやしなう{べく}、けんめいにはたらいた。", "He worked hard to support his family.", {
        accept: ["ために"],
        near: [["べき", "べき is \"should\". For \"in order to\", use べく."]],
      }),
      s("新記録を出す{べく}、毎日練習している。", "しんきろくをだす{べく}、まいにちれんしゅうしている。", "She practises every day to set a new record.", {
        accept: ["ために"],
        near: [["ように", "ように is \"so that\", for things you can't control. For a deliberate aim, use べく."]],
      }),
      s("事故の原因を調べる{べく}、調査団が派遣された。", "じこのげんいんをしらべる{べく}、ちょうさだんがはけんされた。", "An investigation team was sent to find the cause of the accident.", {
        accept: ["ために"],
        near: [["べき", "べき is \"should\". For \"in order to\", use べく."]],
      }),
    ],
  }),

  point({
    id: "n1-no-wo-ii-koto-ni",
    title: "〜のをいいことに",
    meaning: "taking (unfair) advantage of",
    structure: "Plain form (な-adj な, Noun な) + のをいいことに",
    explanation: `
**のをいいことに** means someone uses a situation as a chance to do something they shouldn't: 先生がいないのをいいことに、生徒たちは騒いでいた, "taking advantage of the teacher's absence, the students were making a racket".

The first half is a circumstance that removes a check: nobody's watching, parents are out, someone is too kind, no one complains. The second half is bad or selfish behaviour, and the speaker disapproves.

It's literally "treating it as a good thing that…". Compare おかげで, "thanks to", which is grateful, and をきっかけに (N2), "triggered by", which is neutral.

After な-adjectives and nouns, use な: 留守なのをいいことに.
`,
    sentences: [
      s("先生がいない{のをいいことに}、生徒たちは騒いでいた。", "せんせいがいない{のをいいことに}、せいとたちはさわいでいた。", "Taking advantage of the teacher's absence, the students were making a racket.", {
        near: [["おかげで", "おかげで is grateful. For taking unfair advantage, use のをいいことに."]],
      }),
      s("親が留守な{のをいいことに}、夜遅くまで遊んだ。", "おやがるすな{のをいいことに}、よるおそくまであそんだ。", "With my parents away, I took the chance to stay out late.", {
        near: [["のをきっかけに", "のをきっかけに is \"triggered by\". For taking unfair advantage, use のをいいことに."]],
      }),
      s("誰も見ていない{のをいいことに}、ごみを捨てた。", "だれもみていない{のをいいことに}、ごみをすてた。", "Since no one was looking, he dumped his rubbish.", {
        near: [["おかげで", "おかげで is grateful. For taking unfair advantage, use のをいいことに."]],
      }),
      s("彼女が優しい{のをいいことに}、彼は甘えてばかりいる。", "かのじょがやさしい{のをいいことに}、かれはあまえてばかりいる。", "He takes advantage of her kindness and relies on her for everything.", {
        near: [["おかげで", "おかげで is grateful. For taking unfair advantage, use のをいいことに."]],
      }),
      s("注意されない{のをいいことに}、彼は遅刻を繰り返している。", "ちゅういされない{のをいいことに}、かれはちこくをくりかえしている。", "Since nobody tells him off, he keeps turning up late.", {
        near: [["のをきっかけに", "のをきっかけに is \"triggered by\". For taking unfair advantage, use のをいいことに."]],
      }),
    ],
  }),

  point({
    id: "n1-ni-kakotsukete",
    title: "〜にかこつけて",
    meaning: "under the pretext of, using … as an excuse",
    structure: "Noun + にかこつけて",
    explanation: `
**にかこつけて** means using something as a convenient excuse to do what you really wanted to: 仕事にかこつけて、海外旅行を楽しんだ, "he used work as an excuse to enjoy a trip abroad".

The noun is a legitimate-sounding reason (work, illness, a birthday, a business trip, the rain), and the second half is the real motive. The tone is knowing or disapproving, even when you say it about yourself.

Compare を理由に, "for the reason of", which is neutral and can be genuine. にかこつけて always implies the reason is a pretext.

Don't confuse it with にかまけて (N1), "too wrapped up in", or にかけて (N2), "through (a period)".
`,
    sentences: [
      s("仕事{にかこつけて}、海外旅行を楽しんだ。", "しごと{にかこつけて}、かいがいりょこうをたのしんだ。", "He used work as an excuse to enjoy a trip abroad.", {
        near: [["にかまけて", "にかまけて is \"too wrapped up in\". For \"using as an excuse\", use にかこつけて."]],
      }),
      s("病気{にかこつけて}、会議を休んだ。", "びょうき{にかこつけて}、かいぎをやすんだ。", "She used illness as an excuse to skip the meeting.", {
        near: [["を理由に", "を理由に is neutral. For \"using as a pretext\", use にかこつけて.", "をりゆうに"]],
      }),
      s("息子の誕生日{にかこつけて}、自分の欲しい物を買った。", "むすこのたんじょうび{にかこつけて}、じぶんのほしいものをかった。", "I used my son's birthday as an excuse to buy something I wanted.", {
        near: [["にかけて", "にかけて is \"through (a period)\". For \"as an excuse\", use にかこつけて."]],
      }),
      s("出張{にかこつけて}、昔の友人に会いに行った。", "しゅっちょう{にかこつけて}、むかしのゆうじんにあいにいった。", "I used a business trip as a pretext to go and see an old friend.", {
        near: [["にかまけて", "にかまけて is \"too wrapped up in\". For \"as a pretext\", use にかこつけて."]],
      }),
      s("雨{にかこつけて}、練習をさぼった。", "あめ{にかこつけて}、れんしゅうをさぼった。", "He used the rain as an excuse to skip practice.", {
        near: [["を理由に", "を理由に is neutral. For \"using as an excuse\", use にかこつけて.", "をりゆうに"]],
      }),
    ],
  }),

  point({
    id: "n1-ni-kamakete",
    title: "〜にかまけて",
    meaning: "too wrapped up in (and neglecting)",
    structure: "Noun + にかまけて",
    related: ["n1-ni-kakotsukete"],
    explanation: `
**にかまけて** means being so absorbed in one thing that you neglect something else you should be doing: 仕事にかまけて、家族をほったらかしにしていた, "I was so wrapped up in work that I neglected my family".

The noun is what you're busy with (work, play, childcare, games, busyness itself). The second half is what got neglected, often with おろそかにする ("neglect"), ほったらかす ("leave untouched"), 後回し ("put off") or 〜しなかった.

It often sounds like an admission or a regret. It's also a common excuse: 忙しさにかまけて連絡しなかった, "I was so busy I didn't get in touch".

Don't confuse it with にかこつけて, "using as a pretext": with かこつけて the busyness is fake, but with かまけて it's real.
`,
    sentences: [
      s("仕事{にかまけて}、家族をほったらかしにしていた。", "しごと{にかまけて}、かぞくをほったらかしにしていた。", "I was so wrapped up in work that I neglected my family.", {
        near: [["にかこつけて", "にかこつけて is \"using as a pretext\". For \"too wrapped up in\", use にかまけて."]],
      }),
      s("遊び{にかまけて}、勉強をおろそかにした。", "あそび{にかまけて}、べんきょうをおろそかにした。", "I was so busy having fun that I neglected my studies.", {
        near: [["にかけて", "にかけて is \"through (a period)\". For \"too wrapped up in\", use にかまけて."]],
      }),
      s("子育て{にかまけて}、自分のことは後回しだ。", "こそだて{にかまけて}、じぶんのことはあとまわしだ。", "I'm so caught up in raising the kids that I put myself last.", {
        near: [["にかこつけて", "にかこつけて is \"using as a pretext\". For \"too caught up in\", use にかまけて."]],
      }),
      s("忙しさ{にかまけて}、しばらく連絡しなかった。", "いそがしさ{にかまけて}、しばらくれんらくしなかった。", "I was so busy I didn't get in touch for a while.", {
        near: [["にかこつけて", "にかこつけて is \"using as a pretext\". For \"too busy with\", use にかまけて."]],
      }),
      s("ゲーム{にかまけて}、宿題を忘れた。", "ゲーム{にかまけて}、しゅくだいをわすれた。", "He was so absorbed in his game that he forgot his homework.", {
        near: [["にかけて", "にかけて is \"through (a period)\". For \"too absorbed in\", use にかまけて."]],
      }),
    ],
  }),

  point({
    id: "n1-atte-no",
    title: "〜あっての",
    meaning: "which only exists because of, owes everything to",
    structure: "Noun A + あっての + Noun B",
    explanation: `
**AあってのB** means B can only exist because A is there: お客様あっての商売です, "our business exists only thanks to our customers".

A is the essential foundation (customers, health, fans, cooperation, failure), and B is what depends on it. The sentence usually ends with だ or です and states a conviction or a note of gratitude.

It's often used humbly, to credit others: 皆さんの協力あっての成功です, "this success was only possible thanks to your cooperation". It also works as a life lesson: 健康あっての人生だ, "without health, there's no life worth living".

Don't confuse it with あっても, "even if there is", or としての, "as a".
`,
    sentences: [
      s("お客様{あっての}商売です。", "おきゃくさま{あっての}しょうばいです。", "Our business exists only thanks to our customers.", {
        near: [["あっても", "あっても is \"even if there is\". For \"owes its existence to\", use あっての."]],
      }),
      s("健康{あっての}人生だ。", "けんこう{あっての}じんせいだ。", "Without your health, you have nothing.", {
        near: [["としての", "としての is \"as a\". For \"only possible because of\", use あっての."]],
      }),
      s("ファン{あっての}選手だと思っている。", "ファン{あっての}せんしゅだとおもっている。", "I believe a player is nothing without the fans.", {
        near: [["あっても", "あっても is \"even if there is\". For \"nothing without\", use あっての."]],
      }),
      s("失敗{あっての}成功だ。", "しっぱい{あっての}せいこうだ。", "Success is built on failure.", {
        near: [["としての", "としての is \"as a\". For \"built on\", use あっての."]],
      }),
      s("今回の成功は皆さんのご協力{あっての}ことです。", "こんかいのせいこうはみなさんのごきょうりょく{あっての}ことです。", "This success was only possible thanks to your cooperation.", {
        near: [["あっても", "あっても is \"even if there is\". For \"only possible thanks to\", use あっての."]],
      }),
    ],
  }),

  point({
    id: "n1-to-aimatte",
    title: "〜と相まって",
    meaning: "combined with, together with (reinforcing)",
    structure: "Noun + と相まって / Noun A と Noun B が相まって",
    related: ["n3-to-douji-ni"],
    explanation: `
**と相まって** means two factors combine and reinforce each other to produce a result: 天気の良さと相まって、会場は大勢の人でにぎわった, "together with the fine weather, it meant the venue was packed".

The factors add up, for good or bad: talent plus effort, music plus visuals, a weak yen plus a tourism boom, lack of sleep plus fatigue. The second half is the combined effect.

Another shape is AとBが相まって, "A and B together".

It's formal and written, common in reviews, analysis and news. Compare と同時に (N3), "at the same time as", which is only about timing, not combined effect.
`,
    sentences: [
      s("天気の良さ{と相まって}、会場は大勢の人でにぎわった。", "てんきのよさ{とあいまって}、かいじょうはおおぜいのひとでにぎわった。", "Together with the fine weather, it meant the venue was packed.", {
        near: [["と同時に", "と同時に is only about timing. For two factors combining, use と相まって.", "とどうじに"]],
      }),
      s("彼の努力は才能{と相まって}、大きな成果を生んだ。", "かれのどりょくはさいのう{とあいまって}、おおきなせいかをうんだ。", "His hard work, combined with his talent, produced great results.", {
        near: [["と比べて", "と比べて is \"compared with\". For \"combined with\", use と相まって.", "とくらべて"]],
      }),
      s("美しい音楽が映像{と相まって}、感動的な作品になった。", "うつくしいおんがくがえいぞう{とあいまって}、かんどうてきなさくひんになった。", "Beautiful music together with the visuals made it a moving work.", {
        near: [["と同時に", "と同時に is only about timing. For two things reinforcing each other, use と相まって.", "とどうじに"]],
      }),
      s("円安が観光ブーム{と相まって}、外国人客が急増した。", "えんやすがかんこうブーム{とあいまって}、がいこくじんきゃくがきゅうぞうした。", "The weak yen, combined with the tourism boom, led to a surge in foreign visitors.", {
        near: [["と比べて", "と比べて is \"compared with\". For \"combined with\", use と相まって.", "とくらべて"]],
      }),
      s("寝不足が疲れ{と相まって}、ひどい頭痛がした。", "ねぶそくがつかれ{とあいまって}、ひどいずつうがした。", "Lack of sleep on top of fatigue gave me a terrible headache.", {
        near: [["と同時に", "と同時に is only about timing. For things adding up, use と相まって.", "とどうじに"]],
      }),
    ],
  }),

  point({
    id: "n1-ni-atte",
    title: "〜にあって",
    meaning: "in, under (a special circumstance)",
    structure: "Noun + にあって(は・も)",
    related: ["n2-ni-oite"],
    explanation: `
**にあって** means "in, being in" a particular situation or position, and it highlights what that situation demands or how someone copes with it: 厳しい状況にあって、彼は冷静さを失わなかった, "even in a tough situation, he kept his cool".

The noun is usually a special circumstance (a recession, wartime, a foreign land) or a position (社長という立場, "the position of president"). The second half is either what the circumstance requires or how someone rises above it. With も, it means "even in".

It's more literary than において (N2), which is a neutral, formal "in, at". にあって makes you feel the weight of being in that situation.
`,
    sentences: [
      s("厳しい状況{にあって}、彼は冷静さを失わなかった。", "きびしいじょうきょう{にあって}、かれはれいせいさをうしなわなかった。", "Even in a tough situation, he kept his cool.", {
        accept: ["にあっても"],
        near: [["において", "において is a neutral \"in\". For \"in (and facing) a situation\", this point practises にあって."]],
      }),
      s("異国の地{にあって}、家族のことを思う。", "いこくのち{にあって}、かぞくのことをおもう。", "Living in a foreign land, I think of my family.", {
        near: [["にとって", "にとって is \"for, from the viewpoint of\". For \"being in\", use にあって."]],
      }),
      s("不況の中{にあって}、この会社は業績を伸ばした。", "ふきょうのなか{にあって}、このかいしゃはぎょうせきをのばした。", "In the middle of a recession, this company grew its business.", {
        accept: ["にあっても"],
        near: [["において", "において is a neutral \"in\". For \"even in (a hard time)\", this point practises にあって."]],
      }),
      s("社長という立場{にあって}、軽率な発言は許されない。", "しゃちょうというたちば{にあって}、けいそつなはつげんはゆるされない。", "In the position of company president, careless remarks can't be allowed.", {
        accept: ["にあっては"],
        near: [["にとって", "にとって is \"for, from the viewpoint of\". For \"being in a position\", use にあって."]],
      }),
      s("戦時下{にあって}も、人々は希望を失わなかった。", "せんじか{にあって}も、ひとびとはきぼうをうしなわなかった。", "Even in wartime, people didn't lose hope.", {
        near: [["において", "において is a neutral \"in\". For \"even in (a hard time)\", this point practises にあって."]],
      }),
    ],
  }),
];
