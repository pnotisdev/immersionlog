import { point, s } from "../../build";

/** Timing and sequence: the instant after, turning points, starting points, side activities and periods. */

export const time = [
  point({
    id: "n1-ga-hayai-ka",
    title: "〜が早いか",
    meaning: "no sooner had … than",
    structure: "Verb dictionary / た-form + が早いか",
    related: ["n3-ta-totan", "n2-ka-nai-ka-no-uchi-ni"],
    explanation: `
**が早いか** says that the second action happened the very instant the first one did, almost at the same time: ベルが鳴るが早いか、生徒たちは教室を飛び出した, "no sooner had the bell rung than the students burst out of the classroom".

The second half is a past event that someone observed, usually sudden and energetic. You don't use it for your own plans, requests or intentions.

It's a literary cousin of たとたん (N3) and か〜ないかのうちに (N2). や否や and なり (both N1) are very close. The feeling is "you couldn't even tell which came first".

Compare 次第 (N2), "as soon as", which is about future plans: 着き次第連絡します. が早いか only reports what already happened.
`,
    sentences: [
      s(
        "ベルが鳴る{が早いか}、生徒たちは教室を飛び出した。",
        "ベルがなる{がはやいか}、せいとたちはきょうしつをとびだした。",
        "No sooner had the bell rung than the students burst out of the classroom.",
        {
          accept: ["や否や", "やいなや"],
          near: [
            [
              "次第",
              '次第 is "as soon as" for future plans. For a past "no sooner than", use が早いか.',
              "しだい",
            ],
          ],
        },
      ),
      s(
        "子どもは家に帰る{が早いか}、ゲームを始めた。",
        "こどもはいえにかえる{がはやいか}、ゲームをはじめた。",
        "The moment the kids got home, they started playing video games.",
        {
          accept: ["や否や", "やいなや", "なり"],
          near: [
            [
              "とたん",
              "とたん needs a た-form and is the everyday choice. With the dictionary form here, use が早いか.",
            ],
          ],
        },
      ),
      s(
        "彼は給料をもらう{が早いか}、全部使ってしまった。",
        "かれはきゅうりょうをもらう{がはやいか}、ぜんぶつかってしまった。",
        "No sooner had he been paid than he spent it all.",
        {
          accept: ["や否や", "やいなや", "なり"],
          near: [
            [
              "次第",
              '次第 is "as soon as" for future plans. For a past "no sooner than", use が早いか.',
              "しだい",
            ],
          ],
        },
      ),
      s(
        "店が開く{が早いか}、客が殺到した。",
        "みせがあく{がはやいか}、きゃくがさっとうした。",
        "The moment the shop opened, customers came flooding in.",
        {
          accept: ["や否や", "やいなや"],
          near: [
            ["ながら", 'ながら is "while". For "the moment", use が早いか.'],
          ],
        },
      ),
      s(
        "犬は餌を見る{が早いか}、飛びついた。",
        "いぬはえさをみる{がはやいか}、とびついた。",
        "The dog pounced on its food the instant it saw it.",
        {
          accept: ["や否や", "やいなや", "なり"],
          near: [
            [
              "次第",
              '次第 is "as soon as" for future plans. For a past "the instant", use が早いか.',
              "しだい",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ya-ina-ya",
    title: "〜や否や・〜や",
    meaning: "the moment, as soon as",
    structure: "Verb dictionary form + や否や / や",
    related: ["n1-ga-hayai-ka", "n3-ta-totan"],
    explanation: `
**や否や** (やいなや) means "the moment", literally "whether it was or wasn't": ドアが開くや否や、猫が飛び込んできた, "the moment the door opened, the cat ran in". Shortened to **や**, it's even more literary: 席に着くや、話し始めた.

Like が早いか, it describes a past event, where the second action follows the first instantly, often as a reaction. It isn't used for requests, plans or the speaker's intentions.

It follows the dictionary form, even when the story is in the past.

The three N1 "the moment" patterns are close:
- が早いか stresses speed.
- や否や stresses immediacy and is the most common in writing.
- なり needs the same subject for both actions and suggests something unexpected.
`,
    sentences: [
      s(
        "ドアが開く{や否や}、猫が飛び込んできた。",
        "ドアがあく{やいなや}、ねこがとびこんできた。",
        "The moment the door opened, the cat ran in.",
        {
          accept: ["が早いか", "や"],
          near: [
            [
              "次第",
              '次第 is "as soon as" for future plans. For a past "the moment", use や否や.',
              "しだい",
            ],
          ],
        },
      ),
      s(
        "彼はそのニュースを聞く{や否や}、家を飛び出した。",
        "かれはそのニュースをきく{やいなや}、いえをとびだした。",
        "The moment he heard the news, he rushed out of the house.",
        {
          accept: ["が早いか", "なり", "や"],
          near: [
            [
              "とたん",
              "とたん needs a た-form. After the dictionary form, use や否や.",
            ],
          ],
        },
      ),
      s(
        "試合終了の笛が鳴る{や否や}、選手たちは抱き合った。",
        "しあいしゅうりょうのふえがなる{やいなや}、せんしゅたちはだきあった。",
        "As soon as the final whistle blew, the players hugged each other.",
        {
          accept: ["が早いか", "や"],
          near: [
            ["ながら", 'ながら is "while". For "as soon as", use や否や.'],
          ],
        },
      ),
      s(
        "新商品は発売される{や否や}、売り切れた。",
        "しんしょうひんははつばいされる{やいなや}、うりきれた。",
        "The new product sold out the moment it was released.",
        {
          accept: ["が早いか", "や"],
          near: [
            [
              "次第",
              '次第 is "as soon as" for future plans. For a past "the moment", use や否や.',
              "しだい",
            ],
          ],
        },
      ),
      s(
        "彼は席に着く{や}、すぐに話し始めた。",
        "かれはせきにつく{や}、すぐにはなしはじめた。",
        "The moment he sat down, he started talking.",
        {
          accept: ["や否や", "やいなや", "が早いか", "なり"],
          near: [
            [
              "と",
              'と alone is a plain "when". For the literary "the moment", use や or や否や.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nari",
    title: "〜なり (as soon as)",
    meaning: "the moment (and then, unexpectedly)",
    structure: "Verb dictionary form + なり",
    related: ["n1-ya-ina-ya", "n2-nari-ni"],
    explanation: `
**なり** after a dictionary-form verb means "the moment", and the second action is usually unexpected or abrupt: 彼女は私の顔を見るなり、泣き出した, "the moment she saw my face, she burst into tears".

Both actions have the same subject, and it's a third person. You don't use it about yourself, or for plans and requests.

It's close to や否や and が早いか. What makes なり distinct is the same subject and the sense of surprise at what they did next.

Don't confuse it with なりに (N2), "in one's own way", or with 〜なり〜なり (N1), "either … or". And the た-form + なり is a different pattern again: 出かけたなり帰ってこない, "went out and never came back".
`,
    sentences: [
      s(
        "彼は家に帰る{なり}、部屋に閉じこもった。",
        "かれはいえにかえる{なり}、へやにとじこもった。",
        "The moment he got home, he shut himself in his room.",
        {
          accept: ["や否や", "やいなや", "が早いか"],
          near: [
            [
              "なりに",
              'なりに is "in one\'s own way". For "the moment", use なり.',
            ],
          ],
        },
      ),
      s(
        "彼女は私の顔を見る{なり}、泣き出した。",
        "かのじょはわたしのかおをみる{なり}、なきだした。",
        "The moment she saw my face, she burst into tears.",
        {
          accept: ["や否や", "やいなや", "が早いか"],
          near: [["ながら", 'ながら is "while". For "the moment", use なり.']],
        },
      ),
      s(
        "父は電話に出る{なり}、怒鳴り始めた。",
        "ちちはでんわにでる{なり}、どなりはじめた。",
        "The moment my father picked up the phone, he started shouting.",
        {
          accept: ["や否や", "やいなや", "が早いか"],
          near: [["ながら", 'ながら is "while". For "the moment", use なり.']],
        },
      ),
      s(
        "息子は座る{なり}、「お腹すいた」と言った。",
        "むすこはすわる{なり}、「おなかすいた」といった。",
        'The moment my son sat down, he said "I\'m hungry".',
        {
          accept: ["や否や", "やいなや"],
          near: [
            [
              "なりに",
              'なりに is "in one\'s own way". For "the moment", use なり.',
            ],
          ],
        },
      ),
      s(
        "彼は一口食べる{なり}、顔をしかめた。",
        "かれはひとくちたべる{なり}、かおをしかめた。",
        "He grimaced as soon as he took a bite.",
        {
          accept: ["や否や", "やいなや", "が早いか"],
          near: [["ながら", 'ながら is "while". For "as soon as", use なり.']],
        },
      ),
    ],
  }),

  point({
    id: "n1-sobakara",
    title: "〜そばから",
    meaning: "no sooner … than (again and again)",
    structure: "Verb dictionary / た-form + そばから",
    related: ["n3-tabi-ni"],
    explanation: `
**そばから** says that as soon as something is done, it's undone, over and over: 片付けるそばから、子どもが散らかす, "no sooner do I tidy up than the kids make a mess again".

Unlike が早いか and や否や, which describe a single event, そばから describes a frustrating repeated cycle. The tone is usually exasperated.

The first half is an effort (tidying, memorising, earning, warning someone), and the second half cancels it (messing up, forgetting, spending, doing it again).

It comes from そば, "right beside", so it's "right beside the action, it's undone". Compare たびに (N3), "every time", which is neutral and doesn't imply undoing.
`,
    sentences: [
      s(
        "片付ける{そばから}、子どもが散らかす。",
        "かたづける{そばから}、こどもがちらかす。",
        "No sooner do I tidy up than the kids make a mess again.",
        {
          near: [
            [
              "たびに",
              'たびに is a neutral "every time". For effort undone as soon as it\'s made, use そばから.',
            ],
          ],
        },
      ),
      s(
        "覚える{そばから}忘れてしまう。",
        "おぼえる{そばから}わすれてしまう。",
        "I forget things as fast as I learn them.",
        {
          near: [
            [
              "たびに",
              'たびに is a neutral "every time". For "as fast as", use そばから.',
            ],
          ],
        },
      ),
      s(
        "注意した{そばから}、また同じミスをする。",
        "ちゅういした{そばから}、またおなじミスをする。",
        "The moment I warn him, he makes the same mistake again.",
        {
          near: [
            [
              "ばかりに",
              'ばかりに is "just because". For "no sooner than (again)", use そばから.',
            ],
          ],
        },
      ),
      s(
        "雪は降る{そばから}溶けていった。",
        "ゆきはふる{そばから}とけていった。",
        "The snow melted as soon as it fell.",
        {
          near: [
            [
              "たびに",
              'たびに is a neutral "every time". For "as soon as (it\'s undone)", use そばから.',
            ],
          ],
        },
      ),
      s(
        "彼は稼ぐ{そばから}使ってしまう。",
        "かれはかせぐ{そばから}つかってしまう。",
        "He spends money as fast as he earns it.",
        {
          near: [
            ["ながら", 'ながら is "while". For "as fast as", use そばから.'],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-kawakiri-ni",
    title: "〜を皮切りに(して)",
    meaning: "starting with, beginning with (and then spreading)",
    structure: "Noun + を皮切りに(して) / を皮切りとして",
    related: ["n3-wo-hajime"],
    explanation: `
**を皮切りに** names the first in a series of events that then spread or continue: 東京公演を皮切りに、全国ツアーが始まる, "the national tour kicks off with a show in Tokyo".

The second half is a series or expansion: a tour, a run of complaints, new branches opening, a wave of people speaking out. It's common in news, business and entertainment.

Compare をはじめ (N3), "including, starting with", which lists representative members of a group that already exists. を皮切りに is about time: this was the first, and more followed.

皮切り originally meant the first moxibustion treatment on the skin, the first "cut".
`,
    sentences: [
      s(
        "東京公演{を皮切りに}、全国ツアーが始まる。",
        "とうきょうこうえん{をかわきりに}、ぜんこくツアーがはじまる。",
        "The national tour kicks off with a show in Tokyo.",
        {
          accept: ["を皮切りにして", "を皮切りとして"],
          near: [
            [
              "をはじめ",
              'をはじめ is "including". For "starting with (and then more)", use を皮切りに.',
            ],
          ],
        },
      ),
      s(
        "彼の発言{を皮切りに}、次々と反対意見が出た。",
        "かれのはつげん{をかわきりに}、つぎつぎとはんたいいけんがでた。",
        "Starting with his remark, one objection followed another.",
        {
          accept: ["を皮切りにして", "を皮切りとして", "をきっかけに"],
          near: [
            [
              "をはじめ",
              'をはじめ is "including". For "starting with (and then more)", use を皮切りに.',
            ],
          ],
        },
      ),
      s(
        "大阪店{を皮切りに}、海外にも出店した。",
        "おおさかてん{をかわきりに}、かいがいにもしゅってんした。",
        "Beginning with the Osaka shop, they opened stores abroad as well.",
        {
          accept: ["を皮切りにして", "を皮切りとして"],
          near: [
            [
              "を中心に",
              'を中心に is "centred on". For "beginning with", use を皮切りに.',
              "をちゅうしんに",
            ],
          ],
        },
      ),
      s(
        "今日の会議{を皮切りに}、話し合いを重ねていく。",
        "きょうのかいぎ{をかわきりに}、はなしあいをかさねていく。",
        "Starting with today's meeting, we'll hold a series of discussions.",
        {
          accept: ["を皮切りにして", "を皮切りとして"],
          near: [
            [
              "をはじめ",
              'をはじめ is "including". For "starting with (a series)", use を皮切りに.',
            ],
          ],
        },
      ),
      s(
        "一人の告白{を皮切りに}、多くの被害者が声を上げた。",
        "ひとりのこくはく{をかわきりに}、おおくのひがいしゃがこえをあげた。",
        "One person's confession was the first of many victims speaking out.",
        {
          accept: ["を皮切りにして", "を皮切りとして", "をきっかけに"],
          near: [
            [
              "をはじめ",
              'をはじめ is "including". For "starting with (a wave)", use を皮切りに.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-kagiri-ni",
    title: "〜を限りに",
    meaning: "as of, (with this) as the last time",
    structure: "Time noun + を限りに",
    related: ["n2-ni-kagitte"],
    explanation: `
**を限りに** marks a point in time as the last of something, after which it stops: 今日を限りに、たばこをやめる, "as of today, I'm giving up smoking".

The noun is usually a time: 今日, 今月末, 今シーズン, この試合. The second half is an ending: quitting, retiring, closing, leaving. It's typical of announcements and resolutions: 今月末を限りに閉店いたします, "we will close at the end of this month".

It's close to を最後に, "as the last". Compare までに, a deadline for doing something.

There's a separate fixed phrase, **声を限りに**, which means "at the top of one's voice", as far as the voice goes.
`,
    sentences: [
      s(
        "今日{を限りに}、たばこをやめる。",
        "きょう{をかぎりに}、たばこをやめる。",
        "As of today, I'm giving up smoking.",
        {
          accept: ["を最後に"],
          near: [
            [
              "までに",
              'までに is a deadline. For "as of today, no more", use を限りに.',
            ],
          ],
        },
      ),
      s(
        "当店は今月末{を限りに}、閉店いたします。",
        "とうてんはこんげつまつ{をかぎりに}、へいてんいたします。",
        "This shop will close its doors at the end of this month.",
        {
          accept: ["をもって", "を最後に"],
          near: [
            [
              "までに",
              'までに is a deadline. For "as the last day", use を限りに.',
            ],
          ],
        },
      ),
      s(
        "彼は今シーズン{を限りに}引退する。",
        "かれはこんシーズン{をかぎりに}いんたいする。",
        "He's retiring at the end of this season.",
        {
          accept: ["を最後に", "をもって"],
          near: [
            [
              "に限って",
              'に限って is "only (on this occasion)". For "as the last", use を限りに.',
              "にかぎって",
            ],
          ],
        },
      ),
      s(
        "この試合{を限りに}、彼はチームを離れる。",
        "このしあい{をかぎりに}、かれはチームをはなれる。",
        "After this match, he's leaving the team.",
        {
          accept: ["を最後に"],
          near: [
            [
              "までに",
              'までに is a deadline. For "as the last", use を限りに.',
            ],
          ],
        },
      ),
      s(
        "彼女は声{を限りに}助けを求めた。",
        "かのじょはこえ{をかぎりに}たすけをもとめた。",
        "She cried for help at the top of her voice.",
        {
          near: [
            [
              "に限って",
              'に限って is "only (on this occasion)". The set phrase is 声を限りに.',
              "にかぎって",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-sakai-ni",
    title: "〜を境に(して)",
    meaning: "from … on, since (a turning point)",
    structure: "Noun + を境に(して)",
    related: ["n2-wo-kikkake-ni"],
    explanation: `
**を境に** marks a clear dividing line in time, after which things were different: あの事故を境に、彼は変わった, "he changed after that accident".

境 means "boundary". The noun is a moment or event: an accident, a date, an age, a marriage. The second half is a change of state: stopped, began, became.

Compare をきっかけに (N2), "triggered by", which focuses on the cause that set something off. を境に focuses on the before-and-after contrast, and the event may not have caused the change at all: 四月を境に料金が上がる, "prices go up from April".

The deliberate "taking the opportunity to" is を機に (N1).
`,
    sentences: [
      s(
        "あの事故{を境に}、彼は変わった。",
        "あのじこ{をさかいに}、かれはかわった。",
        "He changed after that accident.",
        {
          accept: ["を境にして"],
          near: [
            [
              "をきっかけに",
              "をきっかけに works, focusing on the trigger. This point practises を境に, a before-and-after line.",
            ],
          ],
        },
      ),
      s(
        "四月{を境に}、料金が上がる。",
        "しがつ{をさかいに}、りょうきんがあがる。",
        "Prices go up from April.",
        {
          accept: ["を境にして", "から"],
          near: [
            ["までに", 'までに is a deadline. For "from … on", use を境に.'],
          ],
        },
      ),
      s(
        "結婚{を境に}、酒をやめた。",
        "けっこん{をさかいに}、さけをやめた。",
        "He gave up drinking once he got married.",
        {
          accept: ["を境にして", "を機に"],
          near: [
            [
              "をきっかけに",
              "をきっかけに works, focusing on the trigger. This point practises を境に.",
            ],
          ],
        },
      ),
      s(
        "三十歳{を境に}、体力が落ちてきた。",
        "さんじゅっさい{をさかいに}、たいりょくがおちてきた。",
        "Since turning thirty, my stamina has been going down.",
        {
          accept: ["を境にして"],
          near: [
            [
              "にしては",
              'にしては is "for (surprisingly)". For "since (a turning point)", use を境に.',
            ],
          ],
        },
      ),
      s(
        "その日{を境に}、二人は口をきかなくなった。",
        "そのひ{をさかいに}、ふたりはくちをきかなくなった。",
        "From that day on, the two of them stopped speaking to each other.",
        {
          accept: ["を境にして"],
          near: [
            [
              "をきっかけに",
              "をきっかけに works, focusing on the trigger. This point practises を境に.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-ki-ni",
    title: "〜を機に",
    meaning: "taking the opportunity of, on the occasion of",
    structure: "Noun + を機に / を機として",
    related: ["n2-wo-kikkake-ni", "n1-wo-sakai-ni"],
    explanation: `
**を機に** means using an event as the opportunity to make a deliberate change: 退職を機に、田舎に引っ越した, "when I retired, I took the chance to move to the countryside".

The event is usually a milestone in life or business: retirement, marriage, a new job, a hospital stay, an anniversary. The second half is a decision someone made because of it.

It's a formal relative of をきっかけに and を契機に (N2). をきっかけに can be accidental or even negative, while を機に sounds deliberate, the way you'd explain a choice.

Compare を境に, which just marks a before-and-after line without implying a decision.
`,
    sentences: [
      s(
        "退職{を機に}、田舎に引っ越した。",
        "たいしょく{をきに}、いなかにひっこした。",
        "When I retired, I took the chance to move to the countryside.",
        {
          accept: ["を機として", "をきっかけに", "を契機に"],
          near: [
            [
              "を境に",
              'を境に marks a before-and-after line. For "taking the opportunity", use を機に.',
              "をさかいに",
            ],
          ],
        },
      ),
      s(
        "入院{を機に}、たばこをやめた。",
        "にゅういん{をきに}、たばこをやめた。",
        "Being in hospital was my chance to give up smoking.",
        {
          accept: ["を機として", "をきっかけに", "を契機に"],
          near: [
            [
              "を境に",
              'を境に marks a before-and-after line. For "taking the opportunity", use を機に.',
              "をさかいに",
            ],
          ],
        },
      ),
      s(
        "結婚{を機に}、家を買った。",
        "けっこん{をきに}、いえをかった。",
        "We bought a house when we got married.",
        {
          accept: ["を機として", "をきっかけに", "を契機に"],
          near: [
            [
              "に際して",
              'に際して is "on the occasion of (a procedure)". For a decision prompted by an event, use を機に.',
              "にさいして",
            ],
          ],
        },
      ),
      s(
        "転職{を機に}、生活を見直した。",
        "てんしょく{をきに}、せいかつをみなおした。",
        "Changing jobs was my chance to rethink my lifestyle.",
        {
          accept: ["を機として", "をきっかけに", "を契機に"],
          near: [
            [
              "を境に",
              'を境に marks a before-and-after line. For "taking the opportunity", use を機に.',
              "をさかいに",
            ],
          ],
        },
      ),
      s(
        "開業十周年{を機に}、店を改装した。",
        "かいぎょうじゅっしゅうねん{をきに}、みせをかいそうした。",
        "We renovated the shop for our tenth anniversary.",
        {
          accept: ["を機として", "を契機に"],
          near: [
            [
              "に際して",
              'に際して is "on the occasion of (a procedure)". For a decision prompted by an event, use を機に.',
              "にさいして",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-katawara",
    title: "〜かたわら",
    meaning: "while also (alongside one's main work)",
    structure: "Verb dictionary form / Noun + の + かたわら",
    related: ["n5-nagara", "n3-ippou-de"],
    explanation: `
**かたわら** describes a second, long-term activity someone pursues alongside their main occupation: 彼は会社に勤めるかたわら、小説を書いている, "he writes novels on the side while working at a company".

The first half is the main role (a job, study, raising children) and the second is a side activity (writing, volunteering, studying). Both continue over a long period.

It's different from ながら (N5), which is two actions at the same moment, like eating while watching TV. You can't write a novel literally during your office hours, but かたわら works because both run in parallel over years.

It's formal and written, common in biographies and profiles. The word itself means "beside".
`,
    sentences: [
      s(
        "彼は会社に勤める{かたわら}、小説を書いている。",
        "かれはかいしゃにつとめる{かたわら}、しょうせつをかいている。",
        "He writes novels on the side while working at a company.",
        {
          near: [
            [
              "ながら",
              "ながら is two actions at the same moment. For a long-term side activity, use かたわら.",
            ],
          ],
        },
      ),
      s(
        "母は子育ての{かたわら}、大学に通った。",
        "はははこそだての{かたわら}、だいがくにかよった。",
        "While raising us, my mother also went to university.",
        {
          near: [
            [
              "ついでに",
              'ついでに is "while you\'re at it". For a long-term side activity, use かたわら.',
            ],
          ],
        },
      ),
      s(
        "教師の仕事の{かたわら}、ボランティアをしている。",
        "きょうしのしごとの{かたわら}、ボランティアをしている。",
        "Alongside her teaching job, she does volunteer work.",
        {
          near: [
            [
              "ながら",
              "ながら is two actions at the same moment. For a long-term side activity, use かたわら.",
            ],
          ],
        },
      ),
      s(
        "彼は研究の{かたわら}、後輩の指導もしている。",
        "かれはけんきゅうの{かたわら}、こうはいのしどうもしている。",
        "Alongside his research, he also mentors junior colleagues.",
        {
          near: [
            [
              "ついでに",
              'ついでに is "while you\'re at it". For a long-term side activity, use かたわら.',
            ],
          ],
        },
      ),
      s(
        "彼は家業を手伝う{かたわら}、絵を描き続けた。",
        "かれはかぎょうをてつだう{かたわら}、えをかきつづけた。",
        "He kept painting while helping with the family business.",
        {
          near: [
            [
              "ながら",
              "ながら is two actions at the same moment. For a long-term side activity, use かたわら.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-katagata",
    title: "〜かたがた",
    meaning: "while also, partly to (formal)",
    structure: "Noun (often a する-verb noun) + かたがた",
    related: ["n2-gatera", "n1-katawara"],
    explanation: `
**かたがた** means doing one thing with a second purpose at the same time, and it's formal: お礼かたがた、ご挨拶に伺いました, "I've come to say hello, and also to thank you".

It follows a noun, especially one of a small set: お礼, ご挨拶, ご報告, お見舞い, 散歩, 出張. It's most at home in business visits and letters.

がてら (N2) means the same but is more casual and often about walks and errands. ついでに is the everyday "while you're at it".

Don't confuse it with かたわら, which is a long-term side activity alongside a main job. かたがた is a single outing or letter serving two purposes.
`,
    sentences: [
      s(
        "お礼{かたがた}、ご挨拶に伺いました。",
        "おれい{かたがた}、ごあいさつにうかがいました。",
        "I've come to say hello, and also to thank you.",
        {
          near: [
            [
              "がてら",
              "がてら is the casual version. In a formal visit, use かたがた.",
            ],
          ],
        },
      ),
      s(
        "散歩{かたがた}、パンを買いに行った。",
        "さんぽ{かたがた}、パンをかいにいった。",
        "I went for a walk and picked up some bread while I was at it.",
        {
          accept: ["がてら"],
          near: [
            [
              "かたわら",
              "かたわら is a long-term side activity. For one outing with two purposes, use かたがた.",
            ],
          ],
        },
      ),
      s(
        "近くまで来たので、ご報告{かたがた}お邪魔しました。",
        "ちかくまできたので、ごほうこく{かたがた}おじゃましました。",
        "I was in the area, so I dropped by, partly to report back.",
        {
          near: [
            [
              "がてら",
              "がてら is the casual version. In a formal visit, use かたがた.",
            ],
          ],
        },
      ),
      s(
        "出張{かたがた}、実家に寄った。",
        "しゅっちょう{かたがた}、じっかによった。",
        "I was on a business trip, so I stopped by my parents' place too.",
        {
          accept: ["がてら"],
          near: [
            [
              "かたわら",
              "かたわら is a long-term side activity. For one trip with two purposes, use かたがた.",
            ],
          ],
        },
      ),
      s(
        "略儀ながら、書中にてお礼{かたがた}お知らせ申し上げます。",
        "りゃくぎながら、しょちゅうにておれい{かたがた}おしらせもうしあげます。",
        "Please forgive this brief letter, which is to inform you and to thank you.",
        {
          near: [
            [
              "がてら",
              "がてら is the casual version. In a formal letter, use かたがた.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-te-kono-kata",
    title: "〜てこのかた",
    meaning: "ever since",
    structure: "Verb て-form + このかた",
    related: ["n3-te-irai", "n2-te-kara-to-iu-mono"],
    explanation: `
**てこのかた** means "ever since", looking back over the whole period from a past event to now: 生まれてこのかた、病気をしたことがない, "I've never been ill in my life".

The second half is usually a continuing state or something that has never happened in all that time. It often comes with 一度も〜ない or ずっと.

It's a literary version of て以来 (N3) and てから. The feeling is weightier, like looking back over a long stretch of life. 生まれてこのかた, "since I was born", is by far the most common use.

Don't confuse it with この前, "the other day". このかた here means "since then, from this side".
`,
    sentences: [
      s(
        "生まれて{このかた}、病気をしたことがない。",
        "うまれて{このかた}、びょうきをしたことがない。",
        "I've never been ill in my life.",
        {
          accept: ["以来", "から"],
          near: [
            [
              "この前",
              'この前 is "the other day". For "ever since", use てこのかた.',
              "このまえ",
            ],
          ],
        },
      ),
      s(
        "日本に来て{このかた}、一度も国に帰っていない。",
        "にほんにきて{このかた}、いちどもくににかえっていない。",
        "I haven't been home once since I came to Japan.",
        {
          accept: ["以来", "から"],
          near: [
            [
              "この前",
              'この前 is "the other day". For "ever since", use てこのかた.',
              "このまえ",
            ],
          ],
        },
      ),
      s(
        "社会人になって{このかた}、休みらしい休みがない。",
        "しゃかいじんになって{このかた}、やすみらしいやすみがない。",
        "Ever since I started working, I haven't had a proper holiday.",
        {
          accept: ["以来", "から"],
          near: [
            [
              "このごろ",
              'このごろ is "these days". For "ever since", use てこのかた.',
            ],
          ],
        },
      ),
      s(
        "彼と別れて{このかた}、一度も連絡を取っていない。",
        "かれとわかれて{このかた}、いちどもれんらくをとっていない。",
        "I haven't been in touch with him once since we split up.",
        {
          accept: ["以来", "から"],
          near: [
            [
              "この前",
              'この前 is "the other day". For "ever since", use てこのかた.',
              "このまえ",
            ],
          ],
        },
      ),
      s(
        "物心ついて{このかた}、ずっとこの町に住んでいる。",
        "ものごころついて{このかた}、ずっとこのまちにすんでいる。",
        "I've lived in this town for as long as I can remember.",
        {
          accept: ["以来", "から"],
          near: [
            [
              "このごろ",
              'このごろ is "these days". For "ever since", use てこのかた.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-yasaki",
    title: "〜矢先(に)",
    meaning: "just when (about to), just as",
    structure: "Verb volitional + とした矢先に · Verb た-form + 矢先に",
    related: ["n4-tokoro", "n3-saichuu"],
    explanation: `
**矢先に** means "just as", right at the moment someone was about to do something, or had just done it, when something unexpected happened: 出かけようとした矢先に、電話が鳴った, "just as I was about to go out, the phone rang".

The two common shapes are 〜ようとした矢先に (about to) and 〜た矢先に (had just). The event in the second half is almost always unwelcome: an accident, bad news, an interruption.

矢先 is literally "the tip of an arrow", the moment of release. Compare 最中に (N3), "in the middle of doing", and ところに (N2), "just then", which is more neutral.
`,
    sentences: [
      s(
        "出かけようとした{矢先に}、電話が鳴った。",
        "でかけようとした{やさきに}、でんわがなった。",
        "Just as I was about to go out, the phone rang.",
        {
          accept: ["矢先", "ところに", "ところへ"],
          near: [
            [
              "最中に",
              '最中に is "in the middle of doing". For "just as I was about to", use 矢先に.',
              "さいちゅうに",
            ],
          ],
        },
      ),
      s(
        "家を買った{矢先に}、転勤を命じられた。",
        "いえをかった{やさきに}、てんきんをめいじられた。",
        "Just after we'd bought a house, I was ordered to transfer.",
        {
          accept: ["矢先"],
          near: [
            [
              "最中に",
              '最中に is "in the middle of doing". For "just after", use 矢先に.',
              "さいちゅうに",
            ],
          ],
        },
      ),
      s(
        "禁煙を決めた{矢先に}、たばこをもらった。",
        "きんえんをきめた{やさきに}、たばこをもらった。",
        "Just when I'd decided to quit smoking, someone gave me cigarettes.",
        {
          accept: ["矢先"],
          near: [
            [
              "うちに",
              'うちに is "while (still)". For "just when", use 矢先に.',
            ],
          ],
        },
      ),
      s(
        "注意しようと思っていた{矢先に}、事故が起きた。",
        "ちゅういしようとおもっていた{やさきに}、じこがおきた。",
        "Just as I'd been meaning to warn them, there was an accident.",
        {
          accept: ["矢先"],
          near: [
            [
              "最中に",
              '最中に is "in the middle of doing". For "just as I\'d been meaning to", use 矢先に.',
              "さいちゅうに",
            ],
          ],
        },
      ),
      s(
        "仕事に慣れてきた{矢先}、病気で倒れた。",
        "しごとになれてきた{やさき}、びょうきでたおれた。",
        "Just as he was getting used to the job, he fell ill.",
        {
          accept: ["矢先に"],
          near: [
            ["うちに", 'うちに is "while (still)". For "just as", use 矢先.'],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ori",
    title: "〜折(に)",
    meaning: "on the occasion, when (formal)",
    structure: "Verb plain / Noun + の + 折(に・には)",
    related: ["n3-sai", "n2-ni-saishite"],
    explanation: `
**折** is a formal, gracious "when, on the occasion of": 先日お会いした折に、その話を伺いました, "when I met you the other day, you told me about it".

It's typical of polite speech and letters. お越しの折には means "when you come this way", and 帰国の折には means "when you're back in the country".

Compare 際 (N3), a formal "when" used on notices and procedures: 地震の際は. 折 is warmer and more personal, and it's used for pleasant occasions, not emergencies.

In letters, 折 also appears in seasonal greetings: 寒さ厳しき折、どうぞご自愛ください, "in this bitterly cold season, please take care of yourself". The pattern is 〜の折から or 〜折.
`,
    sentences: [
      s(
        "近くにお越しの{折には}、ぜひお立ち寄りください。",
        "ちかくにおこしの{おりには}、ぜひおたちよりください。",
        "When you're in the area, please do drop by.",
        {
          accept: ["際には", "時には"],
          near: [
            [
              "最中には",
              '最中 is "in the middle of". For a gracious "when", use 折には.',
              "さいちゅうには",
            ],
          ],
        },
      ),
      s(
        "先日お会いした{折に}、その話を伺いました。",
        "せんじつおあいした{おりに}、そのはなしをうかがいました。",
        "When I met you the other day, you told me about it.",
        {
          accept: ["際に", "時に", "折"],
          near: [
            [
              "最中に",
              '最中 is "in the middle of". For a gracious "when", use 折に.',
              "さいちゅうに",
            ],
          ],
        },
      ),
      s(
        "京都を訪れた{折}、古い友人に会った。",
        "きょうとをおとずれた{おり}、ふるいゆうじんにあった。",
        "When I visited Kyoto, I met an old friend.",
        {
          accept: ["際", "時", "折に"],
          near: [
            [
              "うちに",
              'うちに is "while (still)". For a formal "when", use 折.',
            ],
          ],
        },
      ),
      s(
        "寒さ厳しき{折}、どうぞご自愛ください。",
        "さむさきびしき{おり}、どうぞごじあいください。",
        "In this bitterly cold season, please take good care of yourself.",
        {
          near: [
            [
              "際",
              "際 is for procedures and notices. The letter phrase is 寒さ厳しき折.",
              "さい",
            ],
          ],
        },
      ),
      s(
        "帰国の{折には}、ご連絡ください。",
        "きこくの{おりには}、ごれんらくください。",
        "Please get in touch when you're back in the country.",
        {
          accept: ["際には", "時には"],
          near: [
            [
              "最中には",
              '最中 is "in the middle of". For a gracious "when", use 折には.',
              "さいちゅうには",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-mae-ni",
    title: "〜を前に(して)",
    meaning: "ahead of, facing, with … looming",
    structure: "Noun + を前に(して) / を控えて",
    related: ["n5-mae-ni", "n2-ni-sakidatte"],
    explanation: `
**を前に** means an event or presence is right in front of you, in time or in space: 試験を前に、緊張している, "I'm nervous with the exam coming up".

In time, it's an important upcoming event: exams, graduation, a final, an election. In space, it's something impressive in front of you: a big audience, a beautiful view, a mountain of work.

It's more vivid and formal than の前に (N5), which is just a plain "before". を前に implies facing the thing and feeling something about it: nerves, awe, resolve. を控えて is close in the time sense and means "with … coming up".
`,
    sentences: [
      s(
        "試験{を前に}、緊張している。",
        "しけん{をまえに}、きんちょうしている。",
        "I'm nervous with the exam coming up.",
        {
          accept: ["を前にして", "を控えて"],
          near: [
            [
              "の前に",
              'の前に is a plain "before". For "with … looming", use を前に.',
              "のまえに",
            ],
          ],
        },
      ),
      s(
        "大勢の観客{を前にして}、足が震えた。",
        "おおぜいのかんきゃく{をまえにして}、あしがふるえた。",
        "Facing a huge audience, my legs shook.",
        {
          accept: ["を前に"],
          near: [
            [
              "の前で",
              'の前で is a plain "in front of". For facing something daunting, use を前にして.',
              "のまえで",
            ],
          ],
        },
      ),
      s(
        "卒業{を前に}、先生にお礼の手紙を書いた。",
        "そつぎょう{をまえに}、せんせいにおれいのてがみをかいた。",
        "With graduation approaching, I wrote my teacher a thank-you letter.",
        {
          accept: ["を前にして", "を控えて"],
          near: [
            [
              "の前に",
              'の前に is a plain "before". For "with … approaching", use を前に.',
              "のまえに",
            ],
          ],
        },
      ),
      s(
        "決勝戦{を前に}、選手たちは気合十分だ。",
        "けっしょうせん{をまえに}、せんしゅたちはきあいじゅうぶんだ。",
        "With the final coming up, the players are fired up.",
        {
          accept: ["を前にして", "を控えて"],
          near: [
            [
              "の前に",
              'の前に is a plain "before". For "with … coming up", use を前に.',
              "のまえに",
            ],
          ],
        },
      ),
      s(
        "美しい景色{を前にして}、言葉を失った。",
        "うつくしいけしき{をまえにして}、ことばをうしなった。",
        "Faced with the beautiful view, I was lost for words.",
        {
          accept: ["を前に"],
          near: [
            [
              "の前で",
              'の前で is a plain "in front of". For being faced with something, use を前にして.',
              "のまえで",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-sakigakete",
    title: "〜に先駆けて",
    meaning: "ahead of (others), leading the way",
    structure: "Noun + に先駆けて",
    related: ["n2-ni-sakidatte"],
    explanation: `
**に先駆けて** means doing something before anyone else, leading the way: 当社は他社に先駆けて、新製品を発売した, "we launched the new product ahead of our competitors".

The noun is a competitor or a wider group: 他社, 世界, 全国, 日本, or 時代 ("ahead of its time"). The feeling is pride in being a pioneer, so it's common in company announcements and news.

Compare に先立って (N2), "prior to", which is about preparation before an event: 開会に先立って挨拶がある. に先駆けて is about coming first in a race against others.

It also appears in marketing: 一般発売に先駆けて, "ahead of the general release", for early access.
`,
    sentences: [
      s(
        "当社は他社{に先駆けて}、新製品を発売した。",
        "とうしゃはたしゃ{にさきがけて}、しんせいひんをはつばいした。",
        "We launched the new product ahead of our competitors.",
        {
          near: [
            [
              "に先立って",
              'に先立って is "prior to (as preparation)". For "ahead of everyone else", use に先駆けて.',
              "にさきだって",
            ],
          ],
        },
      ),
      s(
        "その映画は日本{に先駆けて}、海外で公開された。",
        "そのえいがはにほん{にさきがけて}、かいがいでこうかいされた。",
        "The film came out abroad before it did in Japan.",
        {
          near: [
            [
              "に先立って",
              'に先立って is "prior to (as preparation)". For "ahead of", use に先駆けて.',
              "にさきだって",
            ],
          ],
        },
      ),
      s(
        "全国{に先駆けて}、この町でサービスが始まった。",
        "ぜんこく{にさきがけて}、このまちでサービスがはじまった。",
        "The service started in this town before anywhere else in the country.",
        {
          near: [
            [
              "に比べて",
              'に比べて is "compared with". For "ahead of", use に先駆けて.',
              "にくらべて",
            ],
          ],
        },
      ),
      s(
        "彼は時代{に先駆けて}、その技術を開発した。",
        "かれはじだい{にさきがけて}、そのぎじゅつをかいはつした。",
        "He developed the technology ahead of his time.",
        {
          near: [
            [
              "に先立って",
              'に先立って is "prior to (as preparation)". For "ahead of his time", use に先駆けて.',
              "にさきだって",
            ],
          ],
        },
      ),
      s(
        "一般発売{に先駆けて}、会員向けに販売する。",
        "いっぱんはつばい{にさきがけて}、かいいんむけにはんばいする。",
        "Members can buy it ahead of the general release.",
        {
          accept: ["に先立って"],
          near: [
            [
              "に比べて",
              'に比べて is "compared with". For "ahead of", use に先駆けて.',
              "にくらべて",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-itatte",
    title: "〜に至って(ようやく)",
    meaning: "only when it came to, only after it reached",
    structure: "Verb dictionary form / Noun + に至って(ようやく・初めて)",
    related: ["n3-te-hajimete"],
    explanation: `
**に至って** means "only when things reached this (extreme) point": 死者が出るに至って、ようやく国は対策を始めた, "only when people started dying did the government finally take action".

It's usually followed by ようやく, やっと or 初めて, and the tone is critical: someone should have acted much earlier. The first half describes a serious stage: deaths, bankruptcy, a lawsuit, a worsening illness.

It's a formal, emphatic relative of てはじめて (N3). 至る means "to reach", so it's literally "having reached as far as…".

There are two related patterns: に至るまで, "right down to", and に至っては, "as for (the most extreme case)".
`,
    sentences: [
      s(
        "死者が出る{に至って}、ようやく国は対策を始めた。",
        "ししゃがでる{にいたって}、ようやくくにはたいさくをはじめた。",
        "Only when people started dying did the government finally take action.",
        {
          accept: ["に及んで"],
          near: [
            [
              "にあたって",
              'にあたって is "on the occasion of". For "only when it got that bad", use に至って.',
            ],
          ],
        },
      ),
      s(
        "事態がここ{に至って}、会社はやっと非を認めた。",
        "じたいがここ{にいたって}、かいしゃはやっとひをみとめた。",
        "Only when things came to this did the company finally admit fault.",
        {
          accept: ["に及んで"],
          near: [
            [
              "にあたって",
              'にあたって is "on the occasion of". For "only when it came to this", use に至って.',
            ],
          ],
        },
      ),
      s(
        "倒産寸前{に至って}、社長はようやく改革に乗り出した。",
        "とうさんすんぜん{にいたって}、しゃちょうはようやくかいかくにのりだした。",
        "Only on the brink of bankruptcy did the president finally start reforms.",
        {
          near: [
            [
              "にとって",
              'にとって is "for, from the viewpoint of". For "only when it reached", use に至って.',
            ],
          ],
        },
      ),
      s(
        "病気が悪化する{に至って}、初めて病院に行った。",
        "びょうきがあっかする{にいたって}、はじめてびょういんにいった。",
        "Only when his illness got worse did he finally go to hospital.",
        {
          accept: ["に及んで"],
          near: [
            [
              "にあたって",
              'にあたって is "on the occasion of". For "only when it got worse", use に至って.',
            ],
          ],
        },
      ),
      s(
        "裁判になる{に至って}、相手はようやく話し合いに応じた。",
        "さいばんになる{にいたって}、あいてはようやくはなしあいにおうじた。",
        "Only when it went to court did the other side finally agree to talk.",
        {
          accept: ["に及んで"],
          near: [
            [
              "にとって",
              'にとって is "for, from the viewpoint of". For "only when it went that far", use に至って.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-itaru-made",
    title: "〜に至るまで",
    meaning: "right down to, all the way to",
    structure: "(Noun から) Noun + に至るまで",
    related: ["n1-ni-itatte", "n4-made-ni"],
    explanation: `
**に至るまで** stresses how far a range extends, usually to something surprising at the far end: 服装から言葉遣いに至るまで、厳しく注意された, "I was told off about everything, from my clothes right down to the way I talk".

It often pairs with から to give a full span: 子どもから大人に至るまで, "from children to adults". The last item is the extreme or unexpected one, and the second half usually includes 全部, すべて, 幅広く or 細かく.

It's a formal, emphatic まで. Don't confuse it with までに (N4), which is a deadline, "by".

至る means "to reach", so it's literally "all the way until reaching".
`,
    sentences: [
      s(
        "服装から言葉遣い{に至るまで}、厳しく注意された。",
        "ふくそうからことばづかい{にいたるまで}、きびしくちゅういされた。",
        "I was told off about everything, from my clothes right down to the way I talk.",
        {
          accept: ["まで"],
          near: [
            [
              "までに",
              'までに is a deadline. For "right down to", use に至るまで.',
            ],
          ],
        },
      ),
      s(
        "このアニメは子どもから大人{に至るまで}、幅広く愛されている。",
        "このアニメはこどもからおとな{にいたるまで}、はばひろくあいされている。",
        "This anime is loved by everyone, from children to adults.",
        {
          accept: ["まで"],
          near: [
            [
              "までに",
              'までに is a deadline. For "all the way to", use に至るまで.',
            ],
          ],
        },
      ),
      s(
        "細かい点{に至るまで}、よく調べてある。",
        "こまかいてん{にいたるまで}、よくしらべてある。",
        "It's been thoroughly checked, right down to the smallest detail.",
        {
          accept: ["まで"],
          near: [
            [
              "に至って",
              'に至って is "only when it reached". For "right down to", use に至るまで.',
              "にいたって",
            ],
          ],
        },
      ),
      s(
        "食器から家具{に至るまで}、全部手作りだ。",
        "しょっきからかぐ{にいたるまで}、ぜんぶてづくりだ。",
        "Everything is handmade, from the tableware to the furniture.",
        {
          accept: ["まで"],
          near: [
            [
              "までに",
              'までに is a deadline. For "all the way to", use に至るまで.',
            ],
          ],
        },
      ),
      s(
        "事件の発生から解決{に至るまで}の経緯を説明する。",
        "じけんのはっせいからかいけつ{にいたるまで}のけいいをせつめいする。",
        "I'll explain what happened, from the start of the incident to its resolution.",
        {
          accept: ["まで"],
          near: [
            [
              "に至って",
              'に至って is "only when it reached". For "all the way to", use に至るまで.',
              "にいたって",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-oyonde",
    title: "〜に及んで",
    meaning: "when it came to, at the stage of",
    structure: "Verb dictionary form / Noun + に及んで(は)",
    related: ["n1-ni-itatte"],
    explanation: `
**に及んで** means "when things reached this stage": 警察が来るに及んで、ようやく彼は罪を認めた, "only when the police arrived did he finally confess".

Like に至って, it often introduces a late reaction with ようやく or 初めて. It's also used when a conversation or problem extends to a new area: 話が結婚に及んで、彼は急に黙った, "when the talk turned to marriage, he suddenly went quiet".

The set phrase **この期に及んで** means "at this late stage" and is always critical: この期に及んで、まだ言い訳をするのか, "you're still making excuses at this late stage?"

及ぶ means "to reach, extend to". Don't confuse it with には及ばない, "there's no need".
`,
    sentences: [
      s(
        "この期{に及んで}、まだ言い訳をするのか。",
        "このご{におよんで}、まだいいわけをするのか。",
        "You're still making excuses at this late stage?",
        {
          near: [
            [
              "に及ばず",
              'に及ばず is "there\'s no need". The set phrase for "at this late stage" is この期に及んで.',
              "におよばず",
            ],
          ],
        },
      ),
      s(
        "警察が来る{に及んで}、ようやく彼は罪を認めた。",
        "けいさつがくる{におよんで}、ようやくかれはつみをみとめた。",
        "Only when the police arrived did he finally confess.",
        {
          accept: ["に至って"],
          near: [
            [
              "にあたって",
              'にあたって is "on the occasion of". For "only when it reached this stage", use に及んで.',
            ],
          ],
        },
      ),
      s(
        "話が結婚{に及んで}、彼は急に黙った。",
        "はなしがけっこん{におよんで}、かれはきゅうにだまった。",
        "When the talk turned to marriage, he suddenly went quiet.",
        {
          near: [
            [
              "について",
              'について is "about". For "when it came to", use に及んで.',
            ],
          ],
        },
      ),
      s(
        "被害が全国{に及んで}、政府はやっと動いた。",
        "ひがいがぜんこく{におよんで}、せいふはやっとうごいた。",
        "Only when the damage had spread nationwide did the government act.",
        {
          accept: ["に至って"],
          near: [
            [
              "にわたって",
              'にわたって is "over, throughout". For "when it reached", use に及んで.',
            ],
          ],
        },
      ),
      s(
        "事ここ{に及んでは}、もう隠しようがない。",
        "ことここ{におよんでは}、もうかくしようがない。",
        "Now that it's come to this, there's no way to hide it.",
        {
          accept: ["に至っては"],
          near: [
            [
              "に及ばず",
              'に及ばず is "there\'s no need". For "now that it\'s come to this", use に及んでは.',
              "におよばず",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-hete",
    title: "〜を経て",
    meaning: "through, after going through, via",
    structure: "Noun + を経て",
    related: ["n2-wo-tsuujite"],
    explanation: `
**を経て** means passing through a stage, process, place or length of time on the way to a result: 厳しい審査を経て、代表に選ばれた, "after a rigorous selection process, she was chosen as the representative".

It works with processes (審査, 交渉, 議論), with time (十年の歳月), and with places on a route (ソウルを経て東京へ). The second half is where you ended up.

Compare を通じて (N2), "through (a channel, or throughout a period)". を経て stresses completing each stage in order before moving on.

経る (へる) means "to pass through", and 経由 (via) uses the same kanji.
`,
    sentences: [
      s(
        "厳しい審査{を経て}、代表に選ばれた。",
        "きびしいしんさ{をへて}、だいひょうにえらばれた。",
        "After a rigorous selection process, she was chosen as the representative.",
        {
          near: [
            [
              "を通じて",
              'を通じて is "through (a channel)". For "after going through a stage", use を経て.',
              "をつうじて",
            ],
          ],
        },
      ),
      s(
        "長い交渉{を経て}、ようやく合意に至った。",
        "ながいこうしょう{をへて}、ようやくごういにいたった。",
        "After long negotiations, they finally reached an agreement.",
        {
          near: [
            [
              "を通じて",
              'を通じて is "through (a channel)". For "after going through", use を経て.',
              "をつうじて",
            ],
          ],
        },
      ),
      s(
        "飛行機はソウル{を経て}、東京に到着した。",
        "ひこうきはソウル{をへて}、とうきょうにとうちゃくした。",
        "The plane arrived in Tokyo via Seoul.",
        {
          accept: ["を経由して"],
          near: [
            [
              "を通して",
              'を通して is "through (a channel)". For a stop on a route, use を経て.',
              "をとおして",
            ],
          ],
        },
      ),
      s(
        "十年の歳月{を経て}、建物が完成した。",
        "じゅうねんのさいげつ{をへて}、たてものがかんせいした。",
        "After ten years, the building was completed.",
        {
          near: [
            [
              "にわたって",
              'にわたって is "over, throughout". For "after (a length of time)", use を経て.',
            ],
          ],
        },
      ),
      s(
        "様々な困難{を経て}、今の会社がある。",
        "さまざまなこんなん{をへて}、いまのかいしゃがある。",
        "The company is what it is today after going through all kinds of hardships.",
        {
          near: [
            [
              "を通じて",
              'を通じて is "through (a channel)". For "after going through", use を経て.',
              "をつうじて",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-shite",
    title: "〜にして",
    meaning: "at (the age / stage of); only (someone like)",
    structure: "Noun + にして(初めて・ようやく)",
    related: ["n3-ni-shite-wa", "n3-te-hajimete"],
    explanation: `
**にして** after a noun marks a point, stage or person, often with a sense that it took exactly this to happen:
- An age or attempt: 五十歳にして初めて海外に行った, "he went abroad for the first time at fifty". 三度目にしてようやく合格した, "he finally passed on the third try".
- Only someone like: この技は名人にして初めてできる, "only a master can do this".
- A speed: 一瞬にして, "in an instant".
- A proverb: あの親にしてこの子あり, "like father, like son".

It's a formal, emphatic に. Don't confuse it with にしては (N3), "for (surprisingly)": 五十歳にしては若い, "young for fifty".
`,
    sentences: [
      s(
        "彼は五十歳{にして}、初めて海外に行った。",
        "かれはごじゅっさい{にして}、はじめてかいがいにいった。",
        "He went abroad for the first time at the age of fifty.",
        {
          accept: ["で"],
          near: [
            [
              "にしては",
              'にしては is "for (surprisingly)". For "at the age of (and only then)", use にして.',
            ],
          ],
        },
      ),
      s(
        "この技は名人{にして}初めてできるものだ。",
        "このわざはめいじん{にして}はじめてできるものだ。",
        "Only a master can pull off this technique.",
        {
          near: [
            [
              "にしては",
              'にしては is "for (surprisingly)". For "only someone like", use にして.',
            ],
          ],
        },
      ),
      s(
        "あの親{にして}この子あり。",
        "あのおや{にして}このこあり。",
        "Like father, like son.",
        {
          near: [
            ["にしても", 'にしても is "even if". The proverb uses にして.'],
          ],
        },
      ),
      s(
        "三度目{にして}ようやく合格した。",
        "さんどめ{にして}ようやくごうかくした。",
        "I finally passed on my third try.",
        {
          accept: ["で"],
          near: [
            [
              "にしては",
              'にしては is "for (surprisingly)". For "on the third try (at last)", use にして.',
            ],
          ],
        },
      ),
      s(
        "火事で、一瞬{にして}すべてを失った。",
        "かじで、いっしゅん{にして}すべてをうしなった。",
        "In the fire, I lost everything in an instant.",
        {
          accept: ["で"],
          near: [
            [
              "にしても",
              'にしても is "even if". For "in an instant", use 一瞬にして.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-iu-mono",
    title: "〜というもの",
    meaning: "for the whole (period), all through",
    structure: "Period (この / ここ + time) + というもの",
    related: ["n2-te-kara-to-iu-mono"],
    explanation: `
**というもの** after a length of time stresses that something continued for that entire period, and the period feels long: この一週間というもの、ほとんど寝ていない, "I've barely slept this whole week".

The time phrase usually starts with この or ここ ("these past"), and the second half is an unusual continuing state: not sleeping, constant rain, non-stop work.

It's closely related to てからというもの (N2), "ever since", which starts from an event. というもの after a period just stresses its length.

Don't confuse it with というものだ (N2), "that's what … is", or というのは (N3), which defines a word.
`,
    sentences: [
      s(
        "この一週間{というもの}、ほとんど寝ていない。",
        "このいっしゅうかん{というもの}、ほとんどねていない。",
        "I've barely slept this whole week.",
        {
          near: [
            [
              "というのは",
              'というのは defines a word. For "this whole period", use というもの.',
            ],
          ],
        },
      ),
      s(
        "ここ数年{というもの}、休みを取っていない。",
        "ここすうねん{というもの}、やすみをとっていない。",
        "I haven't taken a holiday in all these years.",
        {
          near: [
            [
              "というのは",
              'というのは defines a word. For "in all these years", use というもの.',
            ],
          ],
        },
      ),
      s(
        "この三日間{というもの}、雨が降り続いている。",
        "このみっかかん{というもの}、あめがふりつづいている。",
        "It's been raining non-stop for the past three days.",
        {
          near: [
            [
              "というより",
              'というより is "rather than". For "for the whole period", use というもの.',
            ],
          ],
        },
      ),
      s(
        "子犬が来てからの一か月{というもの}、家の中がにぎやかだ。",
        "こいぬがきてからのいっかげつ{というもの}、いえのなかがにぎやかだ。",
        "The whole month since the puppy arrived, the house has been lively.",
        {
          near: [
            [
              "というのは",
              'というのは defines a word. For "the whole month", use というもの.',
            ],
          ],
        },
      ),
      s(
        "この十年{というもの}、彼女は母の介護を続けてきた。",
        "このじゅうねん{というもの}、かのじょはははのかいごをつづけてきた。",
        "For ten long years, she has been caring for her mother.",
        {
          near: [
            [
              "というより",
              'というより is "rather than". For "for ten long years", use というもの.',
            ],
          ],
        },
      ),
    ],
  }),
];
