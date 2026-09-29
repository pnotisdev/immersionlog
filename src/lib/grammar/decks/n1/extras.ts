import { point, s } from "../../build";

/** Paired lists and set phrases: both X and Y, everywhere, either … or, bound to, can't bear to, at most. */

export const extras = [
  point({
    id: "n1-to-ii",
    title: "〜といい〜といい",
    meaning: "both X and Y (in terms of), whether it's X or Y",
    structure: "Noun A + といい、Noun B + といい",
    related: ["n3-mo-ba-mo", "n1-to-iwazu"],
    explanation: `
**AといいBといい** picks two aspects of something as examples to support an overall judgement: 味といい、値段といい、文句なしの店だ, "in terms of both taste and price, this restaurant is perfect".

The nouns are qualities or features, like taste and price, design and function, face and voice. The second half is an evaluation of the whole, positive or negative: 最高だ, 完璧だ, そっくりだ, 申し分ない.

It's close to も〜ば〜も (N3) and 〜し〜し (N4), but more evaluative, and the list is just two examples.

Compare といわず〜といわず, which means "everywhere, all over" and doesn't evaluate.
`,
    sentences: [
      s(
        "味{といい}、値段といい、文句なしの店だ。",
        "あじ{といい}、ねだんといい、もんくなしのみせだ。",
        "In terms of both taste and price, this restaurant is perfect.",
        {
          near: [
            [
              "とか",
              "とか is a casual list. For judging by two aspects, use といい〜といい.",
            ],
          ],
        },
      ),
      s(
        "デザインといい、機能{といい}、完璧なスマホだ。",
        "デザインといい、きのう{といい}、かんぺきなスマホだ。",
        "Design and features alike, it's the perfect smartphone.",
        {
          near: [
            [
              "といわず",
              'といわず〜といわず is "everywhere, all over". For judging by two aspects, use といい〜といい.',
            ],
          ],
        },
      ),
      s(
        "顔{といい}、声といい、父親にそっくりだ。",
        "かお{といい}、こえといい、ちちおやにそっくりだ。",
        "His face and his voice are both exactly like his father's.",
        {
          near: [
            [
              "とか",
              "とか is a casual list. For judging by two aspects, use といい〜といい.",
            ],
          ],
        },
      ),
      s(
        "天気といい、景色{といい}、最高の旅行だった。",
        "てんきといい、けしき{といい}、さいこうのりょこうだった。",
        "With the weather and the scenery, it was the perfect trip.",
        {
          near: [
            [
              "といわず",
              'といわず〜といわず is "everywhere, all over". For judging by two aspects, use といい〜といい.',
            ],
          ],
        },
      ),
      s(
        "部屋の広さ{といい}、駅からの近さといい、申し分ない。",
        "へやのひろさ{といい}、えきからのちかさといい、もうしぶんない。",
        "Both the size of the room and how close it is to the station are ideal.",
        {
          near: [
            [
              "とか",
              "とか is a casual list. For judging by two aspects, use といい〜といい.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-iwazu",
    title: "〜といわず〜といわず",
    meaning: "whether X or Y, all over, everywhere",
    structure: "Noun A + といわず、Noun B + といわず",
    related: ["n1-to-ii"],
    explanation: `
**AといわずBといわず** means "not just A or B, but everywhere, all of it": 手といわず足といわず、泥だらけだ, "he's covered in mud, hands, feet, everywhere".

The two nouns are examples from a whole: parts of the body, times of day, places. The second half says something applies to all of it, often with だらけ, いつも or ずっと.

It's literally "without calling it A, without calling it B", as if there's no point distinguishing.

Compare といい〜といい, which picks two aspects to support an evaluation. といわず is about how widespread something is.
`,
    sentences: [
      s(
        "手{といわず}足といわず、泥だらけだ。",
        "て{といわず}あしといわず、どろだらけだ。",
        "He's covered in mud, hands, feet, everywhere.",
        {
          near: [
            [
              "といい",
              'といい〜といい evaluates two aspects. For "all over", use といわず〜といわず.',
            ],
          ],
        },
      ),
      s(
        "昼{といわず}夜といわず、彼は働き続けた。",
        "ひる{といわず}よるといわず、かれははたらきつづけた。",
        "Day and night, he kept on working.",
        {
          near: [
            [
              "といい",
              'といい〜といい evaluates two aspects. For "day and night", use といわず〜といわず.',
            ],
          ],
        },
      ),
      s(
        "平日といわず週末{といわず}、店はいつも混んでいる。",
        "へいじつといわずしゅうまつ{といわず}、みせはいつもこんでいる。",
        "Weekdays or weekends, the shop is always packed.",
        {
          near: [
            [
              "といい",
              'といい〜といい evaluates two aspects. For "whether X or Y", use といわず〜といわず.',
            ],
          ],
        },
      ),
      s(
        "家の中{といわず}外といわず、ごみが散らかっている。",
        "いえのなか{といわず}そとといわず、ごみがちらかっている。",
        "There's rubbish everywhere, inside and outside the house.",
        {
          near: [
            [
              "とか",
              'とか is a casual list. For "everywhere", use といわず〜といわず.',
            ],
          ],
        },
      ),
      s(
        "顔といわず体{といわず}、蚊に刺された。",
        "かおといわずからだ{といわず}、かにさされた。",
        "I got bitten by mosquitoes all over, face and body.",
        {
          near: [
            [
              "といい",
              'といい〜といい evaluates two aspects. For "all over", use といわず〜といわず.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-dano",
    title: "〜だの〜だの",
    meaning: "and so on, and this and that (complaint)",
    structure: "Plain form / Noun + だの、… + だの",
    related: ["n2-yara", "n4-toka"],
    explanation: `
**だの〜だの** lists examples, usually of complaints, demands or excuses: 彼は、疲れただのお腹がすいただの、文句ばかり言う, "he does nothing but complain: he's tired, he's hungry, and so on".

The items can be clauses (疲れた, 靴がない, 早く寝ろ) or nouns (野菜, 果物). The tone is usually negative and exasperated, especially when quoting what someone keeps saying. With nouns, it can be neutral: 野菜だの果物だの、たくさんもらった.

It's close to とか〜とか (N4) and やら〜やら (N2), but だの sounds more irritated.

Compare なり〜なり (N1), which lists options in a suggestion: 電話なりメールなり. The list often ends with と言う or と, quoting what someone keeps saying.
`,
    sentences: [
      s(
        "彼は、疲れた{だの}お腹がすいただの、文句ばかり言う。",
        "かれは、つかれた{だの}おなかがすいただの、もんくばかりいう。",
        "He does nothing but complain: he's tired, he's hungry, and so on.",
        {
          accept: ["とか"],
          near: [
            [
              "なり",
              'なり〜なり is "either … or" in a suggestion. For a complaining list, use だの.',
            ],
          ],
        },
      ),
      s(
        "彼女は、服がない{だの}靴がないだの言って、なかなか出かけない。",
        "かのじょは、ふくがない{だの}くつがないだのいって、なかなかでかけない。",
        "She keeps saying she has no clothes, no shoes, and never gets out of the house.",
        {
          accept: ["とか"],
          near: [
            [
              "なり",
              'なり〜なり is "either … or" in a suggestion. For a complaining list, use だの.',
            ],
          ],
        },
      ),
      s(
        "子どもは、ゲームが欲しいだの、お菓子が食べたい{だの}とうるさい。",
        "こどもは、ゲームがほしいだの、おかしがたべたい{だの}とうるさい。",
        "The kids keep pestering me, wanting games, wanting sweets.",
        {
          accept: ["とか"],
          near: [
            [
              "なり",
              'なり〜なり is "either … or" in a suggestion. For a complaining list, use だの.',
            ],
          ],
        },
      ),
      s(
        "野菜{だの}果物だの、たくさんもらった。",
        "やさい{だの}くだものだの、たくさんもらった。",
        "I was given loads of vegetables, fruit and so on.",
        {
          accept: ["とか", "やら"],
          near: [
            [
              "なり",
              'なり〜なり is "either … or" in a suggestion. For "and so on", use だの.',
            ],
          ],
        },
      ),
      s(
        "勉強しろ{だの}早く寝ろだの、母はうるさい。",
        "べんきょうしろ{だの}はやくねろだの、はははうるさい。",
        "My mum's always nagging: study, go to bed early, and so on.",
        {
          accept: ["とか"],
          near: [
            [
              "なり",
              'なり〜なり is "either … or" in a suggestion. For nagging, use だの.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tsu-tsu",
    title: "〜つ〜つ",
    meaning: "back and forth, mutually (fixed pairs)",
    structure: "Verb ます-stem + つ + opposite or passive ます-stem + つ",
    related: ["n2-tsutsu"],
    explanation: `
**〜つ〜つ** pairs two contrasting or reciprocal verbs to describe alternating or mutual action. It survives in a few fixed phrases:
- **持ちつ持たれつ**: give and take, mutual support.
- **行きつ戻りつ**: going back and forth.
- **抜きつ抜かれつ**: overtaking each other, neck and neck.
- **差しつ差されつ**: pouring drinks for each other.
- **浮きつ沈みつ**: bobbing up and down.

It's literary, and you can't freely create new pairs. Learn them as vocabulary.

Don't confuse it with つつ (N2), "while", which follows a single verb stem: 考えつつ歩く.
`,
    sentences: [
      s(
        "私たちは持ち{つ}持たれつの関係だ。",
        "わたしたちはもち{つ}もたれつのかんけいだ。",
        "We have a give-and-take relationship.",
        {
          near: [
            [
              "ながら",
              'ながら is "while". The fixed phrase is 持ちつ持たれつ.',
            ],
          ],
        },
      ),
      s(
        "彼は廊下を行き{つ}戻りつしながら考えた。",
        "かれはろうかをいき{つ}もどりつしながらかんがえた。",
        "He paced up and down the corridor, thinking.",
        {
          near: [
            ["ながら", 'ながら is "while". The fixed phrase is 行きつ戻りつ.'],
          ],
        },
      ),
      s(
        "抜き{つ}抜かれつの接戦だった。",
        "ぬき{つ}ぬかれつのせっせんだった。",
        "It was a close race, with the lead changing hands again and again.",
        {
          near: [
            [
              "つつ",
              'つつ is "while" after one verb. The fixed phrase is 抜きつ抜かれつ.',
            ],
          ],
        },
      ),
      s(
        "二人は差し{つ}差されつ、酒を飲み交わした。",
        "ふたりはさし{つ}さされつ、さけをのみかわした。",
        "The two of them drank together, pouring for each other.",
        {
          near: [
            [
              "つつ",
              'つつ is "while" after one verb. The fixed phrase is 差しつ差されつ.',
            ],
          ],
        },
      ),
      s(
        "木の葉が浮き{つ}沈みつしながら、川を流れていった。",
        "このはがうき{つ}しずみつしながら、かわをながれていった。",
        "A leaf floated down the river, bobbing up and down.",
        {
          near: [
            ["ながら", 'ながら is "while". The fixed phrase is 浮きつ沈みつ.'],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nari-nari",
    title: "〜なり〜なり",
    meaning: "either … or (whatever works)",
    structure: "Noun / Verb dictionary form + なり、… + なり",
    related: ["n5-ka-or", "n1-dano"],
    explanation: `
**AなりBなり** gives two examples of acceptable options, meaning "do either, or something like that": 電話なりメールなりで連絡してください, "please get in touch by phone, email or whatever".

It's usually used in suggestions, advice and instructions: しなさい, してください, 好きにすればいい. The options are examples, and there may be others. It's often said to someone junior or close, so it can sound a little bossy.

Compare か〜か (N5), a neutral "or", and だの〜だの, which lists complaints.

Don't confuse it with なり after a verb (N1), "as soon as": 帰るなり寝た.
`,
    sentences: [
      s(
        "電話{なり}メールなりで連絡してください。",
        "でんわ{なり}メールなりでれんらくしてください。",
        "Please get in touch by phone, email or whatever.",
        {
          accept: ["か"],
          near: [
            [
              "だの",
              'だの〜だの is a complaining list. For "either … or (whatever works)", use なり.',
            ],
          ],
        },
      ),
      s(
        "分からなければ、先生に聞く{なり}、辞書で調べるなりしなさい。",
        "わからなければ、せんせいにきく{なり}、じしょでしらべるなりしなさい。",
        "If you don't understand, ask your teacher or look it up, or something.",
        {
          accept: ["か"],
          near: [
            [
              "だの",
              'だの〜だの is a complaining list. For "either … or", use なり.',
            ],
          ],
        },
      ),
      s(
        "休みの日は、映画を見るなり買い物に行く{なり}、好きにすればいい。",
        "やすみのひは、えいがをみるなりかいものにいく{なり}、すきにすればいい。",
        "On your day off, see a film, go shopping, do whatever you like.",
        {
          near: [
            [
              "だの",
              'だの〜だの is a complaining list. For "either … or", use なり.',
            ],
          ],
        },
      ),
      s(
        "捨てる{なり}売るなり、好きにしていいよ。",
        "すてる{なり}うるなり、すきにしていいよ。",
        "Throw it away or sell it, do what you like.",
        {
          near: [
            [
              "だの",
              'だの〜だの is a complaining list. For "either … or", use なり.',
            ],
          ],
        },
      ),
      s(
        "コーヒー{なり}紅茶なり、お好きなものをどうぞ。",
        "コーヒー{なり}こうちゃなり、おすきなものをどうぞ。",
        "Coffee, tea, have whatever you like.",
        {
          accept: ["でも"],
          near: [
            [
              "だの",
              "だの〜だの is a complaining list. For offering options, use なり.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-beku-shite",
    title: "〜べくして",
    meaning: "(was) bound to (happen), inevitably",
    structure: "Verb dictionary form + べくして + same verb (past)",
    related: ["n1-beku", "n1-beku-mo-nai"],
    explanation: `
**〜べくして〜た** repeats a verb to say that something happened exactly as it was bound to: これは起こるべくして起こった事故だ, "this accident was bound to happen".

The pattern is dictionary form + べくして + the same verb in the past: 勝つべくして勝った ("won, as they were always going to"), 出会うべくして出会った ("were destined to meet").

It's used both for praise (a well-deserved win) and criticism (a disaster waiting to happen). It's formal and written.

It's the third of the べく family: べく ("in order to"), べくもない ("can't possibly") and べくして ("bound to"). Check whether the verb is repeated: if it is, it's べくして.
`,
    sentences: [
      s(
        "これは起こる{べくして}起こった事故だ。",
        "これはおこる{べくして}おこったじこだ。",
        "This accident was bound to happen.",
        {
          near: [
            [
              "べくもなく",
              'べくもない is "can\'t possibly". For "bound to happen (and did)", use べくして.',
            ],
          ],
        },
      ),
      s(
        "あのチームは勝つ{べくして}勝った。",
        "あのチームはかつ{べくして}かった。",
        "That team won, just as they were always going to.",
        {
          near: [
            [
              "べく",
              'Plain べく is "in order to". With the verb repeated, use べくして.',
            ],
          ],
        },
      ),
      s(
        "二人は出会う{べくして}出会ったのだ。",
        "ふたりはであう{べくして}であったのだ。",
        "The two of them were destined to meet.",
        {
          near: [
            [
              "べく",
              'Plain べく is "in order to". With the verb repeated, use べくして.',
            ],
          ],
        },
      ),
      s(
        "準備不足の計画は、失敗す{べくして}失敗した。",
        "じゅんびぶそくのけいかくは、しっぱいす{べくして}しっぱいした。",
        "The poorly prepared plan failed, as it was bound to.",
        {
          near: [
            [
              "べくもなく",
              'べくもない is "can\'t possibly". For "bound to (and did)", use べくして.',
            ],
          ],
        },
      ),
      s(
        "彼女は選ばれる{べくして}選ばれた。",
        "かのじょはえらばれる{べくして}えらばれた。",
        "She was chosen, as she was always going to be.",
        {
          near: [
            [
              "べく",
              'Plain べく is "in order to". With the verb repeated, use べくして.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-iwazu-mogana",
    title: "言わずもがな",
    meaning: "needless to say, it goes without saying",
    structure: "Noun + は言わずもがな、… · 言わずもがなだ",
    related: ["n1-made-mo-nai", "n2-wa-mochiron"],
    explanation: `
**言わずもがな** is a classical set phrase meaning "it goes without saying": 英語は言わずもがな、中国語も話せる, "she speaks Chinese, never mind English".

It's often used as Xは言わずもがな、Yも, "not to mention X, Y too", like はもちろん (N2). It can also end a sentence: 彼の実力は言わずもがなだ, "his ability goes without saying".

The ending もがな is a classical wish ("it would be good if…"), so it literally means "it would be better not to say it". It sometimes keeps that meaning, "better left unsaid": 言わずもがなのことを言ってしまった, "I said something I'd have been better off not saying".

In everyday speech, 言うまでもない is more common.
`,
    sentences: [
      s(
        "彼の実力は{言わずもがな}だ。",
        "かれのじつりょくは{いわずもがな}だ。",
        "His ability goes without saying.",
        {
          near: [
            [
              "言わず",
              '言わず is "without saying". The set phrase for "it goes without saying" is 言わずもがな.',
              "いわず",
            ],
          ],
        },
      ),
      s(
        "彼女は英語は{言わずもがな}、中国語も話せる。",
        "かのじょはえいごは{いわずもがな}、ちゅうごくごもはなせる。",
        "She speaks Chinese, never mind English.",
        {
          accept: ["もちろん", "言うまでもなく"],
          near: [
            [
              "言わず",
              '言わず is "without saying". The set phrase is 言わずもがな.',
              "いわず",
            ],
          ],
        },
      ),
      s(
        "東京は{言わずもがな}、大阪も物価が高い。",
        "とうきょうは{いわずもがな}、おおさかもぶっかがたかい。",
        "Tokyo is expensive, of course, but so is Osaka.",
        {
          accept: ["もちろん", "言うまでもなく"],
          near: [
            [
              "言わず",
              '言わず is "without saying". The set phrase is 言わずもがな.',
              "いわず",
            ],
          ],
        },
      ),
      s(
        "つい、{言わずもがな}のことを言ってしまった。",
        "つい、{いわずもがな}のことをいってしまった。",
        "I ended up saying something I'd have been better off not saying.",
        {
          near: [
            [
              "言わず",
              '言わず is "without saying". The set phrase is 言わずもがな.',
              "いわず",
            ],
          ],
        },
      ),
      s(
        "結果は{言わずもがな}、大成功だった。",
        "けっかは{いわずもがな}、だいせいこうだった。",
        "The result, needless to say, was a huge success.",
        {
          accept: ["言うまでもなく"],
          near: [
            [
              "言わず",
              '言わず is "without saying". The set phrase is 言わずもがな.',
              "いわず",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-shinobinai",
    title: "〜にしのびない",
    meaning: "can't bear to (out of pity or attachment)",
    structure: "Verb dictionary form + にしのびない (に忍びない)",
    related: ["n1-ni-taenai"],
    explanation: `
**にしのびない** means you can't bring yourself to do something because it would feel cruel, sad or wasteful: まだ使えるので、捨てるにしのびない, "it still works, so I can't bear to throw it away".

The verb is usually an action that hurts something you care about: 捨てる, 処分する ("dispose of"), 断る ("refuse"), 見る, 聞く. It's about compassion or attachment.

忍ぶ means "to endure", so it's literally "can't endure to". Compare にたえない (N1), "too awful to (watch)", which is about how unpleasant something is, not about pity.

It's formal and a bit literary.
`,
    sentences: [
      s(
        "まだ使えるので、捨てる{にしのびない}。",
        "まだつかえるので、すてる{にしのびない}。",
        "It still works, so I can't bear to throw it away.",
        {
          accept: ["に忍びない"],
          near: [
            [
              "にたえない",
              'にたえない is "too awful to". For "can\'t bear to (out of attachment)", use にしのびない.',
            ],
          ],
        },
      ),
      s(
        "被災地の様子は、見る{にしのびない}ものだった。",
        "ひさいちのようすは、みる{にしのびない}ものだった。",
        "The scenes in the disaster area were heartbreaking to see.",
        {
          accept: ["に忍びない", "にたえない"],
          near: [
            [
              "にかたくない",
              'にかたくない is "not hard to". For "heartbreaking to", use にしのびない.',
            ],
          ],
        },
      ),
      s(
        "長年使った机を処分する{にしのびない}。",
        "ながねんつかったつくえをしょぶんする{にしのびない}。",
        "I can't bring myself to get rid of the desk I've used for so many years.",
        {
          accept: ["に忍びない"],
          near: [
            [
              "にたえない",
              'にたえない is "too awful to". For "can\'t bring myself to", use にしのびない.',
            ],
          ],
        },
      ),
      s(
        "彼の必死の頼みを断る{にしのびない}。",
        "かれのひっしのたのみをことわる{にしのびない}。",
        "I can't bear to turn down his desperate request.",
        {
          accept: ["に忍びない"],
          near: [
            [
              "にかたくない",
              'にかたくない is "not hard to". For "can\'t bear to", use にしのびない.',
            ],
          ],
        },
      ),
      s(
        "その事故の話は、聞く{にしのびない}。",
        "そのじこのはなしは、きく{にしのびない}。",
        "The story of that accident is too painful to hear.",
        {
          accept: ["に忍びない", "にたえない"],
          near: [
            [
              "にかたくない",
              'にかたくない is "not hard to". For "too painful to", use にしのびない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-de-wa-sumanai",
    title: "〜では済まない・〜では済まされない",
    meaning: "won't end with just, can't be let off with",
    structure: "Noun / Plain form + では済まない / では済まされない",
    related: ["n2-zu-ni-sumu", "n1-zu-ni-wa-sumanai"],
    explanation: `
**では済まない** says that something isn't enough to settle a matter, and the consequences will be more serious: 謝るだけでは済まない, "an apology alone won't settle this".

The first half is a light response or excuse: an apology, a joke, "I didn't know", a warning. The second half is often implied: there'll be a heavier punishment or responsibility.

**では済まされない** is the passive form, "can't be let off with": 冗談では済まされない, "this is no laughing matter". 知らなかったでは済まない is a common warning: "saying you didn't know won't cut it".

It's the opposite of で済む, "get away with, be settled by": 謝るだけで済んだ.
`,
    sentences: [
      s(
        "謝るだけ{では済まない}。",
        "あやまるだけ{ではすまない}。",
        "An apology alone won't settle this.",
        {
          accept: ["では済まされない"],
          near: [
            [
              "で済む",
              'で済む is "can get away with". For "won\'t end with just", use では済まない.',
              "ですむ",
            ],
          ],
        },
      ),
      s(
        "これは冗談{では済まされない}。",
        "これはじょうだん{ではすまされない}。",
        "This is no laughing matter.",
        {
          accept: ["では済まない"],
          near: [
            [
              "で済む",
              'で済む is "can get away with". For "can\'t be let off with", use では済まされない.',
              "ですむ",
            ],
          ],
        },
      ),
      s(
        "これは知らなかった{では済まない}問題だ。",
        "これはしらなかった{ではすまない}もんだいだ。",
        "Saying you didn't know won't cut it for this.",
        {
          accept: ["では済まされない"],
          near: [
            [
              "で済む",
              'で済む is "can get away with". For "won\'t cut it", use では済まない.',
              "ですむ",
            ],
          ],
        },
      ),
      s(
        "今度遅刻したら、注意{では済まない}ぞ。",
        "こんどちこくしたら、ちゅうい{ではすまない}ぞ。",
        "Be late again and you'll get more than a warning.",
        {
          accept: ["では済まされない"],
          near: [
            [
              "ずに済む",
              'ずに済む is "get away without". For "more than a warning", use では済まない.',
              "ずにすむ",
            ],
          ],
        },
      ),
      s(
        "世の中には、ごめん{では済まない}こともある。",
        "よのなかには、ごめん{ではすまない}こともある。",
        "There are things in this world that sorry won't fix.",
        {
          accept: ["では済まされない"],
          near: [
            [
              "で済む",
              'で済む is "can get away with". For "sorry won\'t fix", use では済まない.',
              "ですむ",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ga-seki-no-yama",
    title: "〜が関の山",
    meaning: "the most one can manage, at best",
    structure: "Verb dictionary form + の / Noun + が関の山だ",
    related: ["n1-to-itta-tokoro-da", "n3-kurai"],
    explanation: `
**が関の山だ** says that something is the absolute limit of what's possible, and it's not much: 一日に十ページ読むのが関の山だ, "ten pages a day is the most I can manage".

The tone is modest, resigned or dismissive, about yourself or someone else: 彼の実力では、予選通過が関の山だ, "with his ability, getting through the qualifiers is the best he can hope for".

It's close to のがやっとだ ("barely manage") and がせいぜいだ ("at most"). Compare といったところだ, "about, at most", which is a softer estimate.

関の山 was a famous float at the Seki festival, and it was the biggest one anyone could imagine, so it came to mean "the upper limit".
`,
    sentences: [
      s(
        "一日に十ページ読むの{が関の山}だ。",
        "いちにちにじゅっページよむの{がせきのやま}だ。",
        "Ten pages a day is the most I can manage.",
        {
          accept: ["がやっと", "がせいぜい"],
          near: [
            [
              "が一番",
              'が一番 is "the best (choice)". For "the most I can manage", use が関の山.',
              "がいちばん",
            ],
          ],
        },
      ),
      s(
        "私の給料では、小さなアパートに住むの{が関の山}だ。",
        "わたしのきゅうりょうでは、ちいさなアパートにすむの{がせきのやま}だ。",
        "On my salary, a small flat is the best I can do.",
        {
          accept: ["がやっと", "がせいぜい"],
          near: [
            [
              "が一番",
              'が一番 is "the best (choice)". For "the best I can do", use が関の山.',
              "がいちばん",
            ],
          ],
        },
      ),
      s(
        "今から頑張っても、三位に入るの{が関の山}だろう。",
        "いまからがんばっても、さんいにはいるの{がせきのやま}だろう。",
        "Even if we try hard now, third place is probably the best we can hope for.",
        {
          accept: ["がせいぜい"],
          near: [
            [
              "が一番",
              'が一番 is "the best (choice)". For "the best we can hope for", use が関の山.',
              "がいちばん",
            ],
          ],
        },
      ),
      s(
        "彼の実力では、予選通過{が関の山}だ。",
        "かれのじつりょくでは、よせんつうか{がせきのやま}だ。",
        "With his ability, getting through the qualifiers is the best he can hope for.",
        {
          accept: ["がせいぜい"],
          near: [
            [
              "が限界",
              "が限界 works in meaning. This point practises the set phrase が関の山.",
              "がげんかい",
            ],
          ],
        },
      ),
      s(
        "素人が作っても、この程度{が関の山}だ。",
        "しろうとがつくっても、このていど{がせきのやま}だ。",
        "If an amateur makes it, this is about as good as it gets.",
        {
          accept: ["がせいぜい"],
          near: [
            [
              "が一番",
              'が一番 is "the best (choice)". For "about as good as it gets", use が関の山.',
              "がいちばん",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-n-to-suru",
    title: "〜んとする",
    meaning: "be about to, be trying to (literary)",
    structure:
      "Verb ない-stem + んとする / んとして / んとしている (する → せんとする)",
    related: ["n3-you-to-suru", "n1-n-bakari"],
    explanation: `
**んとする** is a literary "be about to, try to": 日が沈まんとする頃、港に着いた, "we reached the harbour just as the sun was about to set".

It's the classical version of ようとする (N3). It attaches to the ない-stem: 沈む → 沈ま + んとする, 言う → 言わ + んとする, and する → せんとする.

A very common phrase is 言わんとすること, "what someone is trying to say": 彼の言わんとすることはよく分かる, "I understand what he's getting at".

It belongs with んがため ("in order to") and んばかり ("as if about to"), which also use this classical ん. Watch the shape: ようとする needs the volitional (沈もうとする). After the ない-stem, only んとする fits.
`,
    sentences: [
      s(
        "日が沈ま{んとする}頃、港に着いた。",
        "ひがしずま{んとする}ころ、みなとについた。",
        "We reached the harbour just as the sun was about to set.",
        {
          near: [
            [
              "ようとする",
              "ようとする needs the volitional (沈もうとする). After the ない-stem, use んとする.",
            ],
          ],
        },
      ),
      s(
        "彼は何か言わ{んとして}、口を閉じた。",
        "かれはなにかいわ{んとして}、くちをとじた。",
        "He was about to say something, then closed his mouth.",
        {
          near: [
            [
              "んばかりに",
              'んばかり is "as if about to". For "was about to", use んとして.',
            ],
          ],
        },
      ),
      s(
        "今、新しい時代が始まら{んとしている}。",
        "いま、あたらしいじだいがはじまら{んとしている}。",
        "A new era is about to begin.",
        {
          near: [
            [
              "ようとしている",
              "ようとする needs the volitional (始まろうとしている). After the ない-stem, use んとしている.",
            ],
          ],
        },
      ),
      s(
        "彼の言わ{んとする}ことはよく分かる。",
        "かれのいわ{んとする}ことはよくわかる。",
        "I understand what he's getting at.",
        {
          near: [
            [
              "んばかりの",
              'んばかり is "as if about to". The phrase for "what he\'s trying to say" is 言わんとすること.',
            ],
          ],
        },
      ),
      s(
        "船は今まさに出航せ{んとしていた}。",
        "ふねはいままさにしゅっこうせ{んとしていた}。",
        "The ship was just about to set sail.",
        {
          near: [
            [
              "ようとしていた",
              "ようとする needs the volitional (しようとしていた). After せ, use んとしていた.",
            ],
          ],
        },
      ),
    ],
  }),
];
