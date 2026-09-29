import { point, s } from "../../build";

/** Conditions and exclusivity: if it's for, without, once …, only X, with X's power, nothing to lose. */

export const condition = [
  point({
    id: "n1-to-areba",
    title: "〜とあれば",
    meaning: "if it's (for), if that's what it takes",
    structure: "Noun / Plain form + とあれば",
    related: ["n4-nara", "n1-to-atte"],
    explanation: `
**とあれば** means "if it's for X, if X is the case", and it's followed by a willingness to do whatever it takes: 子どものためとあれば、どんなことでもする, "if it's for my children, I'll do anything".

The first half is usually a special reason: someone important, a request from someone you care about, an order, or a need. The second half shows readiness or resignation: する, 従うしかない, 断れない, いつでも手伝う.

It's a more formal, emphatic version of なら. Don't confuse it with とあって (N1), which gives a reason for something that has already happened: 連休とあって混んでいる.
`,
    sentences: [
      s(
        "子どものため{とあれば}、どんなことでもする。",
        "こどものため{とあれば}、どんなことでもする。",
        "If it's for my children, I'll do anything.",
        {
          accept: ["なら"],
          near: [
            [
              "とあって",
              'とあって is "because it\'s". For "if it\'s for", use とあれば.',
            ],
          ],
        },
      ),
      s(
        "社長の命令{とあれば}、従うしかない。",
        "しゃちょうのめいれい{とあれば}、したがうしかない。",
        "If it's the president's orders, we have no choice but to follow them.",
        {
          accept: ["なら"],
          near: [
            [
              "とあって",
              'とあって is "because it\'s". For "if it\'s", use とあれば.',
            ],
          ],
        },
      ),
      s(
        "必要{とあれば}、いつでもお手伝いします。",
        "ひつよう{とあれば}、いつでもおてつだいします。",
        "If it's needed, I'll help any time.",
        {
          accept: ["なら", "であれば"],
          near: [
            ["として", 'として is "as". For "if it\'s needed", use とあれば.'],
          ],
        },
      ),
      s(
        "君の頼み{とあれば}、断れない。",
        "きみのたのみ{とあれば}、ことわれない。",
        "If it's you asking, I can't say no.",
        {
          accept: ["なら"],
          near: [
            [
              "とあって",
              'とあって is "because it\'s". For "if it\'s you asking", use とあれば.',
            ],
          ],
        },
      ),
      s(
        "彼女が来る{とあれば}、僕も行こう。",
        "かのじょがくる{とあれば}、ぼくもいこう。",
        "If she's coming, I'll go too.",
        {
          accept: ["なら"],
          near: [
            ["として", 'として is "as". For "if she\'s coming", use とあれば.'],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-naku-shite",
    title: "〜なくして(は)",
    meaning: "without (X, Y is impossible)",
    structure: "Noun + なくして(は) + negative",
    related: ["n2-nuki-de", "n1-nashi-ni"],
    explanation: `
**なくして** means "without X", with the implication that Y can't happen without it: 努力なくして、成功はありえない, "without effort, success is impossible".

The noun is something essential (effort, cooperation, trust, health), and the second half is negative: ありえない, できない, 語れない, ない. With は, it's even more emphatic.

It's a formal, written version of なしには and なければ. It's popular in speeches and slogans: 皆さんの協力なくしては、この計画は実現できなかった, "without your cooperation, this project would never have happened".

Compare なしに / なしで, which is a plain "without (doing)": 断りなしに, "without asking".
`,
    sentences: [
      s(
        "努力{なくして}、成功はありえない。",
        "どりょく{なくして}、せいこうはありえない。",
        "Without effort, success is impossible.",
        {
          accept: ["なくしては", "なしには", "なしに"],
          near: [
            [
              "なくて",
              'なくて is "isn\'t, and". For "without X, no Y", use なくして.',
            ],
          ],
        },
      ),
      s(
        "皆さんの協力{なくしては}、この計画は実現できなかった。",
        "みなさんのきょうりょく{なくしては}、このけいかくはじつげんできなかった。",
        "Without your cooperation, this project would never have happened.",
        {
          accept: ["なくして", "なしには"],
          near: [
            [
              "なくても",
              'なくても is "even without". For "without X, no Y", use なくしては.',
            ],
          ],
        },
      ),
      s(
        "信頼関係{なくして}、良い仕事はできない。",
        "しんらいかんけい{なくして}、よいしごとはできない。",
        "You can't do good work without a relationship of trust.",
        {
          accept: ["なくしては", "なしには", "なしに"],
          near: [
            [
              "なくて",
              'なくて is "isn\'t, and". For "without X, no Y", use なくして.',
            ],
          ],
        },
      ),
      s(
        "彼の助け{なくしては}、ここまで来られなかった。",
        "かれのたすけ{なくしては}、ここまでこられなかった。",
        "I could never have come this far without his help.",
        {
          accept: ["なくして", "なしには"],
          near: [
            [
              "なくても",
              'なくても is "even without". For "without X, no Y", use なくしては.',
            ],
          ],
        },
      ),
      s(
        "健康{なくして}、本当の幸せはない。",
        "けんこう{なくして}、ほんとうのしあわせはない。",
        "Without health, there's no true happiness.",
        {
          accept: ["なくしては", "なしには", "なしに"],
          near: [
            [
              "なくて",
              'なくて is "isn\'t, and". For "without X, no Y", use なくして.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nashi-ni",
    title: "〜なしに・〜なしで",
    meaning: "without (asking, warning, a break)",
    structure: "Noun + なしに / なしで / なしでは",
    related: ["n1-naku-shite", "n2-nuki-de"],
    explanation: `
**なしに** and **なしで** mean "without": 彼は断りなしに、私の車を使った, "he used my car without asking".

The noun is usually something that should have been there: permission (断り, 許可), a warning (前触れ), a booking (予約), a break (休憩). なしに is more written, and なしで is more conversational.

With a negative, なしでは means "can't do without": スマホなしでは生活できない.

Compare なくして (N1), a formal "without X, Y is impossible", and 抜きで (N2), "leaving something out on purpose". Don't confuse it with なくて, "isn't, and". The tone is often a mild complaint when someone skips a step they should have taken.
`,
    sentences: [
      s(
        "彼は断り{なしに}、私の車を使った。",
        "かれはことわり{なしに}、わたしのくるまをつかった。",
        "He used my car without asking.",
        {
          accept: ["なしで", "もなく"],
          near: [
            [
              "なくして",
              'なくして is "without X, Y is impossible". For a plain "without (asking)", use なしに.',
            ],
          ],
        },
      ),
      s(
        "この店は予約{なしで}入れる。",
        "このみせはよやく{なしで}はいれる。",
        "You can get into this restaurant without a booking.",
        {
          accept: ["なしに", "なしでも"],
          near: [
            ["なくて", 'なくて is "isn\'t, and". For "without", use なしで.'],
          ],
        },
      ),
      s(
        "何の前触れも{なしに}、突然雨が降り出した。",
        "なんのまえぶれも{なしに}、とつぜんあめがふりだした。",
        "Without any warning, it suddenly started to rain.",
        {
          accept: ["なく", "なしで"],
          near: [
            [
              "なくして",
              'なくして is "without X, Y is impossible". For a plain "without", use なしに.',
            ],
          ],
        },
      ),
      s(
        "休憩{なしで}、五時間働いた。",
        "きゅうけい{なしで}、ごじかんはたらいた。",
        "I worked five hours without a break.",
        {
          accept: ["なしに"],
          near: [
            ["なくて", 'なくて is "isn\'t, and". For "without", use なしで.'],
          ],
        },
      ),
      s(
        "許可{なしに}、写真を撮らないでください。",
        "きょか{なしに}、しゃしんをとらないでください。",
        "Please don't take photos without permission.",
        {
          accept: ["なしで"],
          near: [
            [
              "なくして",
              'なくして is "without X, Y is impossible". For a plain "without", use なしに.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-koto-nashi-ni",
    title: "〜ことなしに",
    meaning: "without doing (you can't)",
    structure: "Verb dictionary form + ことなしに(は) + negative",
    related: ["n2-koto-naku", "n1-naku-shite"],
    explanation: `
**ことなしに** means "without doing X", and the second half says the goal is impossible that way: 努力することなしに、成功は得られない, "you can't succeed without making an effort".

It's the verb version of なくして: a noun takes なくして, and a verb takes ことなしに (or ことなくして). The second half is a negative potential or ありえない.

Compare ことなく (N2), a neutral "without doing": 休むことなく働いた, "worked without resting". ことなしに stresses that the action is a necessary condition.

It's formal and a little preachy, typical of essays and life advice.
`,
    sentences: [
      s(
        "努力する{ことなしに}、成功は得られない。",
        "どりょくする{ことなしに}、せいこうはえられない。",
        "You can't succeed without making an effort.",
        {
          accept: ["ことなしには", "ことなくして"],
          near: [
            [
              "ことなく",
              'ことなく is a neutral "without doing". For "without it, you can\'t", use ことなしに.',
            ],
          ],
        },
      ),
      s(
        "相手の話を聞く{ことなしに}、理解し合うことはできない。",
        "あいてのはなしをきく{ことなしに}、りかいしあうことはできない。",
        "You can't understand each other without listening.",
        {
          accept: ["ことなしには", "ことなくして"],
          near: [
            [
              "ことなく",
              'ことなく is a neutral "without doing". For "without it, you can\'t", use ことなしに.',
            ],
          ],
        },
      ),
      s(
        "失敗する{ことなしに}、何かを学ぶことはできない。",
        "しっぱいする{ことなしに}、なにかをまなぶことはできない。",
        "You can't learn anything without failing.",
        {
          accept: ["ことなしには", "ことなくして"],
          near: [
            [
              "ことなく",
              'ことなく is a neutral "without doing". For "without it, you can\'t", use ことなしに.',
            ],
          ],
        },
      ),
      s(
        "危険を冒す{ことなしに}、大きな成果は得られない。",
        "きけんをおかす{ことなしに}、おおきなせいかはえられない。",
        "You can't achieve great results without taking risks.",
        {
          accept: ["ことなしには", "ことなくして"],
          near: [
            [
              "ことから",
              'ことから is "from the fact that". For "without doing", use ことなしに.',
            ],
          ],
        },
      ),
      s(
        "練習を重ねる{ことなしに}、上達はありえない。",
        "れんしゅうをかさねる{ことなしに}、じょうたつはありえない。",
        "Improvement is impossible without repeated practice.",
        {
          accept: ["ことなしには", "ことなくして"],
          near: [
            [
              "ことなく",
              'ことなく is a neutral "without doing". For "without it, it\'s impossible", use ことなしに.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tara-de",
    title: "〜たら〜で・〜ば〜で・〜なら〜で",
    meaning: "if it does happen, then (there's another problem)",
    structure:
      "Verb たら / ば + same verb た-form + で · Adj なら + same adj + で",
    related: ["n4-tara"],
    explanation: `
**〜たら〜で** repeats a word to say that even if the thing happens, it brings its own problems: お金はなければ困るが、あればあったで悩みが増える, "no money is a problem, but if you have it, that brings its own worries".

The shape is conditional + the same word in the past tense + で: あればあったで, いたらいたで, 降ったら降ったで. For adjectives and nouns, it's なら〜で: 暇なら暇で, "if I'm free, that's a problem too".

It often comes after a statement about the opposite situation, so the whole sentence says "you can't win either way". It can also be positive and resigned: 失敗したら失敗したで、次を頑張ればいい, "if I fail, I fail, and I'll just try harder next time".
`,
    sentences: [
      s(
        "お金はなければ困るが、{あればあったで}悩みが増える。",
        "おかねはなければこまるが、{あればあったで}なやみがふえる。",
        "No money is a problem, but if you have it, that brings its own worries.",
        {
          accept: ["あったらあったで"],
          near: [
            [
              "あっても",
              'あっても is "even if there is". For "if there is, then (another problem)", use あればあったで.',
            ],
          ],
        },
      ),
      s(
        "子どもは、いないと寂しいし、{いたらいたで}うるさい。",
        "こどもは、いないとさびしいし、{いたらいたで}うるさい。",
        "It's lonely without the kids, but when they're here, they're noisy.",
        {
          accept: ["いればいたで"],
          near: [
            [
              "いても",
              'いても is "even if they\'re here". For "when they\'re here, then (another problem)", use いたらいたで.',
            ],
          ],
        },
      ),
      s(
        "雨が降らないと困るが、{降ったら降ったで}出かけられない。",
        "あめがふらないとこまるが、{ふったらふったで}でかけられない。",
        "We need the rain, but when it does rain, I can't go out.",
        {
          accept: ["降れば降ったで"],
          near: [
            [
              "降っても",
              '降っても is "even if it rains". For "when it does, then (another problem)", use 降ったら降ったで.',
              "ふっても",
            ],
          ],
        },
      ),
      s(
        "{失敗したら失敗したで}、次を頑張ればいい。",
        "{しっぱいしたらしっぱいしたで}、つぎをがんばればいい。",
        "If I fail, I fail, and I'll just try harder next time.",
        {
          accept: ["失敗すれば失敗したで"],
          near: [
            [
              "失敗しても",
              '失敗しても is "even if I fail". For "if I fail, I fail", use 失敗したら失敗したで.',
              "しっぱいしても",
            ],
          ],
        },
      ),
      s(
        "忙しいのは嫌だが、{暇なら暇で}退屈だ。",
        "いそがしいのはいやだが、{ひまならひまで}たいくつだ。",
        "I hate being busy, but when I'm free, I get bored.",
        {
          accept: ["暇だったら暇で"],
          near: [
            [
              "暇でも",
              '暇でも is "even if free". For "when I\'m free, then (another problem)", use 暇なら暇で.',
              "ひまでも",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ba-sore-made",
    title: "〜ばそれまでだ・〜たらそれまでだ",
    meaning: "if …, that's the end of it",
    structure: "Verb ば / たら + それまでだ",
    related: ["n4-ba"],
    explanation: `
**ばそれまでだ** means that if a certain thing happens, everything else becomes pointless: いくら練習しても、本番で失敗すればそれまでだ, "however much you practise, if you fail on the day, that's the end of it".

The first half is often a single decisive event: a failure, an accident, spending the money, losing your life. The sentence stresses how fragile all the effort or value was. The first part often has いくら〜ても or どんなに.

The fixed phrase 言ってしまえばそれまでだが means "that's all there is to it, but…", used when a simple explanation doesn't feel satisfying: 運が悪かったと言ってしまえばそれまでだが.

それまで means "up to that point", so it's literally "it only goes up to there".
`,
    sentences: [
      s(
        "いくら練習しても、本番で失敗すれ{ばそれまでだ}。",
        "いくられんしゅうしても、ほんばんでしっぱいすれ{ばそれまでだ}。",
        "However much you practise, if you fail on the day, that's the end of it.",
        {
          accept: ["ばそれまで"],
          near: [
            [
              "ばいい",
              'ばいい is "should, it\'s enough to". For "that\'s the end of it", use ばそれまでだ.',
            ],
          ],
        },
      ),
      s(
        "どんなに高い車も、事故を起こせ{ばそれまでだ}。",
        "どんなにたかいくるまも、じこをおこせ{ばそれまでだ}。",
        "However expensive a car is, one accident and it's all over.",
        {
          accept: ["ばそれまで"],
          near: [
            [
              "ばいい",
              'ばいい is "should, it\'s enough to". For "it\'s all over", use ばそれまでだ.',
            ],
          ],
        },
      ),
      s(
        "いくら貯金しても、使ってしまえ{ばそれまでだ}。",
        "いくらちょきんしても、つかってしまえ{ばそれまでだ}。",
        "However much you save, once you spend it, it's gone.",
        {
          accept: ["ばそれまで"],
          near: [
            [
              "ばいい",
              'ばいい is "should, it\'s enough to". For "once…, it\'s gone", use ばそれまでだ.',
            ],
          ],
        },
      ),
      s(
        "どんなに成功しても、命をなくし{たらそれまでだ}。",
        "どんなにせいこうしても、いのちをなくし{たらそれまでだ}。",
        "However successful you are, if you lose your life, that's the end.",
        {
          accept: ["たらそれまで"],
          near: [
            [
              "たらいい",
              'たらいい is "should". For "that\'s the end", use たらそれまでだ.',
            ],
          ],
        },
      ),
      s(
        "運が悪かったと言ってしまえ{ばそれまでだ}が、準備も足りなかった。",
        "うんがわるかったといってしまえ{ばそれまでだ}が、じゅんびもたりなかった。",
        "You could just say it was bad luck, but we didn't prepare enough either.",
        {
          near: [
            [
              "ばいい",
              'ばいい is "should, it\'s enough to". The set phrase is 言ってしまえばそれまでだが.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-oite",
    title: "〜をおいて(他に)ない",
    meaning: "no one / nothing but X",
    structure: "Noun + をおいて(他に)〜ない",
    related: ["n2-ni-kagiru"],
    explanation: `
**をおいて〜ない** means "apart from X, there's nothing else", which strongly praises X as the only possible choice: この仕事を任せられるのは、彼をおいて他にいない, "there's no one but him I can trust with this job".

The noun is a person, a company or a time. The second half is 他にいない / 他にない / ない. With time words, it means "now or never": 今をおいてチャンスはない, "there'll never be a better chance than now".

It's formal and highly evaluative, common in recommendations and speeches. The verb 置く here means "to set aside", so it's literally "setting X aside, there's nothing".

Compare をもって (N1), "by means of", which looks similar but means something very different.
`,
    sentences: [
      s(
        "この仕事を任せられるのは、彼{をおいて}他にいない。",
        "このしごとをまかせられるのは、かれ{をおいて}ほかにいない。",
        "There's no one but him I can trust with this job.",
        {
          near: [
            [
              "をもって",
              'をもって is "by means of". For "no one but", use をおいて.',
            ],
          ],
        },
      ),
      s(
        "日本でこの技術を持っているのは、この会社{をおいて}ない。",
        "にほんでこのぎじゅつをもっているのは、このかいしゃ{をおいて}ない。",
        "No company in Japan but this one has this technology.",
        {
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "no one but", use をおいて.',
            ],
          ],
        },
      ),
      s(
        "今{をおいて}チャンスはない。",
        "いま{をおいて}チャンスはない。",
        "It's now or never.",
        {
          near: [
            [
              "をもって",
              'をもって is "as of". For "now or never", use 今をおいて.',
            ],
          ],
        },
      ),
      s(
        "話し合うなら、今日{をおいて}他にない。",
        "はなしあうなら、きょう{をおいて}ほかにない。",
        "If we're going to talk, today is the only time.",
        {
          near: [
            [
              "をもって",
              'をもって is "as of". For "today is the only time", use をおいて.',
            ],
          ],
        },
      ),
      s(
        "リーダーにふさわしいのは、あなた{をおいて}他にいません。",
        "リーダーにふさわしいのは、あなた{をおいて}ほかにいません。",
        "There's no one more suited to be leader than you.",
        {
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "no one but", use をおいて.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nara-de-wa",
    title: "〜ならでは",
    meaning: "unique to, that only X can offer",
    structure: "Noun + ならでは(の + Noun) · Noun + ならではだ",
    related: ["n3-rashii-typical", "n2-dake-atte"],
    explanation: `
**ならでは** praises something that only X can provide: これは京都ならではの風景だ, "this is a scene you can only find in Kyoto".

The most common shape is XならではのY, "a Y unique to X": 手作りならではの温かさ ("a warmth only handmade things have"), 地元の人ならではの情報 ("inside information only locals know"). It can also end a sentence: この味はこの店ならではだ.

It's always positive, so it's popular in travel writing, advertising and reviews.

Compare らしい (N3), "typical of", which is about being characteristic, and だけあって (N2), "as you'd expect from". ならでは says "you couldn't get this anywhere else". Don't confuse it with ならば, "if".
`,
    sentences: [
      s(
        "これは京都{ならでは}の風景だ。",
        "これはきょうと{ならでは}のふうけいだ。",
        "This is a scene you can only find in Kyoto.",
        {
          near: [
            [
              "らしい",
              'らしい is "typical of". For "unique to", use ならでは.',
            ],
          ],
        },
      ),
      s(
        "手作り{ならでは}の温かさがある。",
        "てづくり{ならでは}のあたたかさがある。",
        "It has a warmth that only handmade things have.",
        {
          near: [
            ["ならば", 'ならば is "if". For "that only X has", use ならでは.'],
          ],
        },
      ),
      s(
        "子ども{ならでは}の自由な発想だ。",
        "こども{ならでは}のじゆうなはっそうだ。",
        "It's the kind of free thinking only a child could come up with.",
        {
          near: [
            [
              "らしい",
              'らしい is "typical of". For "only a child could", use ならでは.',
            ],
          ],
        },
      ),
      s(
        "地元の人{ならでは}の情報を教えてもらった。",
        "じもとのひと{ならでは}のじょうほうをおしえてもらった。",
        "I got some inside information that only locals would know.",
        {
          near: [
            [
              "として",
              'として is "as". For "that only locals would know", use ならでは.',
            ],
          ],
        },
      ),
      s(
        "この味はこの店{ならでは}だ。",
        "このあじはこのみせ{ならでは}だ。",
        "You can't get this flavour anywhere but this restaurant.",
        {
          near: [["ならば", 'ならば is "if". For "unique to", use ならでは.']],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-motte",
    title: "〜をもって",
    meaning: "by means of, with; as of (formal)",
    structure: "Noun + をもって(して)",
    related: ["n3-ni-yotte", "n1-wo-kagiri-ni"],
    explanation: `
**をもって** has two formal uses:
- **Means**: "by means of, with". 結果は書面をもってお知らせします, "we'll notify you of the results in writing". 誠意をもって, "with sincerity".
- **Time limit**: "as of, at", marking an official start or end. 本日をもって受付を終了いたします, "applications close as of today". 以上をもって、本日の会議を終わります, "with that, today's meeting is closed".

Both are stiff and official, found in announcements, letters, ceremonies and business documents. In ordinary speech, the means use becomes で, and the time use becomes で or までで.

It comes from 持つ, "to hold", so it's literally "holding X".
`,
    sentences: [
      s(
        "本日{をもって}、受付を終了いたします。",
        "ほんじつ{をもって}、うけつけをしゅうりょういたします。",
        "Applications close as of today.",
        {
          accept: ["で", "を限りに"],
          near: [
            [
              "までに",
              'までに is a deadline to do something by. For "as of", use をもって.',
            ],
          ],
        },
      ),
      s(
        "結果は書面{をもって}お知らせします。",
        "けっかはしょめん{をもって}おしらせします。",
        "We'll notify you of the results in writing.",
        {
          accept: ["で", "にて"],
          near: [
            [
              "をもとに",
              'をもとに is "based on". For "by means of", use をもって.',
            ],
          ],
        },
      ),
      s(
        "彼は誠意{をもって}謝罪した。",
        "かれはせいい{をもって}しゃざいした。",
        "He apologised with sincerity.",
        {
          near: [
            ["をもとに", 'をもとに is "based on". For "with", use をもって.'],
          ],
        },
      ),
      s(
        "以上{をもって}、本日の会議を終わります。",
        "いじょう{をもって}、ほんじつのかいぎをおわります。",
        "With that, today's meeting is closed.",
        {
          accept: ["で"],
          near: [
            [
              "までに",
              'までに is a deadline to do something by. For "with that", use をもって.',
            ],
          ],
        },
      ),
      s(
        "三月末日{をもって}退職いたします。",
        "さんがつまつじつ{をもって}たいしょくいたします。",
        "I will retire as of the end of March.",
        {
          accept: ["で", "を限りに"],
          near: [
            [
              "までに",
              'までに is a deadline to do something by. For "as of", use をもって.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wo-motte-sureba",
    title: "〜をもってすれば・〜をもってしても",
    meaning: "with (X's power) … could; even with X … couldn't",
    structure:
      "Noun + をもってすれば (positive) · Noun + をもってしても (negative)",
    related: ["n1-wo-motte"],
    explanation: `
These two build on をもって, "by means of":
- **をもってすれば**: "with X, it would be possible". 彼の実力をもってすれば、優勝も夢ではない, "with his ability, winning isn't just a dream".
- **をもってしても**: "even with X, it's impossible". 最新の技術をもってしても、この病気は治せない, "even the latest technology can't cure this disease".

The noun is always something powerful: ability, skill, technology, a top expert, modern science. The second half is positive for すれば and negative for しても.

That makes them a natural pair for puzzles: check whether the result is possible or impossible, then pick the matching form.
`,
    sentences: [
      s(
        "彼の実力{をもってすれば}、優勝も夢ではない。",
        "かれのじつりょく{をもってすれば}、ゆうしょうもゆめではない。",
        "With his ability, winning isn't just a dream.",
        {
          near: [
            [
              "をもってしても",
              'をもってしても is "even with (it\'s impossible)". For "with this, it\'s possible", use をもってすれば.',
            ],
          ],
        },
      ),
      s(
        "最新の技術{をもってしても}、この病気は治せない。",
        "さいしんのぎじゅつ{をもってしても}、このびょうきはなおせない。",
        "Even the latest technology can't cure this disease.",
        {
          near: [
            [
              "をもってすれば",
              'をもってすれば is "with this, it\'s possible". For "even with (it\'s impossible)", use をもってしても.',
            ],
          ],
        },
      ),
      s(
        "君の語学力{をもってすれば}、どこでも働ける。",
        "きみのごがくりょく{をもってすれば}、どこでもはたらける。",
        "With your language skills, you could work anywhere.",
        {
          near: [
            [
              "をもってしても",
              'をもってしても is "even with (it\'s impossible)". For "with this, it\'s possible", use をもってすれば.',
            ],
          ],
        },
      ),
      s(
        "世界一の医師{をもってしても}、彼を救うことはできなかった。",
        "せかいいちのいし{をもってしても}、かれをすくうことはできなかった。",
        "Even the best doctor in the world couldn't save him.",
        {
          near: [
            [
              "をもってすれば",
              'をもってすれば is "with this, it\'s possible". For "even with (it was impossible)", use をもってしても.',
            ],
          ],
        },
      ),
      s(
        "今の科学{をもってすれば}、それは十分可能だ。",
        "いまのかがく{をもってすれば}、それはじゅうぶんかのうだ。",
        "With today's science, that's entirely possible.",
        {
          near: [
            [
              "をもってしても",
              'をもってしても is "even with (it\'s impossible)". For "with this, it\'s possible", use をもってすれば.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ga-nara",
    title: "〜が〜なら",
    meaning: "if A is like that, (no wonder B is too)",
    structure: "Noun A が Noun A なら、Noun B も Noun B だ",
    explanation: `
**AがAなら、BもBだ** says that A and B are as bad as each other: 親が親なら、子も子だ, "like parent, like child", said critically.

A and B are a related pair: parent and child, boss and staff, shop and customer, husband and wife, teacher and student. Repeating each noun means "the kind of X they are". The tone is always disapproving: both sides are to blame.

It's a fixed rhetorical pattern, common in conversation, gossip and TV dramas, and you can't make it positive.

Compare the proverb あの親にしてこの子あり (N1's にして), which can be either admiring or critical.
`,
    sentences: [
      s(
        "{親が親なら}、子も子だ。",
        "{おやがおやなら}、こもこだ。",
        "Like parent, like child.",
        {
          near: [
            [
              "親が親でも",
              '親が親でも is "even if the parent is". The saying is 親が親なら.',
              "おやがおやでも",
            ],
          ],
        },
      ),
      s(
        "{上司が上司なら}、部下も部下だ。",
        "{じょうしがじょうしなら}、ぶかもぶかだ。",
        "The boss is bad, and his staff are no better.",
        {
          near: [
            [
              "上司が上司でも",
              '上司が上司でも is "even if the boss is". The pattern is 上司が上司なら.',
              "じょうしがじょうしでも",
            ],
          ],
        },
      ),
      s(
        "{店が店なら}、客も客だ。",
        "{みせがみせなら}、きゃくもきゃくだ。",
        "The shop is dodgy, and the customers are just as bad.",
        {
          near: [
            [
              "店が店でも",
              '店が店でも is "even if the shop is". The pattern is 店が店なら.',
              "みせがみせでも",
            ],
          ],
        },
      ),
      s(
        "{夫が夫なら}、妻も妻だ。",
        "{おっとがおっとなら}、つまもつまだ。",
        "The husband is bad, and the wife is no better.",
        {
          near: [
            [
              "夫が夫でも",
              '夫が夫でも is "even if the husband is". The pattern is 夫が夫なら.',
              "おっとがおっとでも",
            ],
          ],
        },
      ),
      s(
        "{先生が先生なら}、生徒も生徒だ。",
        "{せんせいがせんせいなら}、せいともせいとだ。",
        "The teacher is hopeless, and so are the students.",
        {
          near: [
            [
              "先生が先生でも",
              '先生が先生でも is "even if the teacher is". The pattern is 先生が先生なら.',
              "せんせいがせんせいでも",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-te-motomoto",
    title: "〜てもともと",
    meaning: "nothing to lose (if it fails)",
    structure: "Verb て-form + もともと · Noun / な-adj + でもともと",
    explanation: `
**てもともと** says that failing would just leave you where you started, so you might as well try: 断られてもともとだから、頼んでみる, "I've got nothing to lose if they say no, so I'll ask".

もともと (元々) means "originally, from the start". So the logic is "even if it fails, I'm just back at zero". It's encouraging and upbeat.

The most famous version is **だめでもともと**, often shortened to ダメ元: ダメ元で応募してみた, "I applied, figuring I had nothing to lose". The second half is usually an attempt: やってみよう, 頼んでみる, 受けてみた.

Don't confuse it with てもいい, "it's okay to".
`,
    sentences: [
      s(
        "失敗し{てもともと}だ。挑戦してみよう。",
        "しっぱいし{てもともと}だ。ちょうせんしてみよう。",
        "We've got nothing to lose. Let's give it a try.",
        {
          accept: ["ても元々"],
          near: [
            [
              "てもいい",
              'てもいい is "it\'s okay to". For "nothing to lose", use てもともと.',
            ],
          ],
        },
      ),
      s(
        "断られ{てもともと}だから、頼んでみる。",
        "ことわられ{てもともと}だから、たのんでみる。",
        "I've got nothing to lose if they say no, so I'll ask.",
        {
          accept: ["ても元々"],
          near: [
            [
              "てもいい",
              'てもいい is "it\'s okay to". For "nothing to lose", use てもともと.',
            ],
          ],
        },
      ),
      s(
        "負け{てもともと}の気持ちで戦った。",
        "まけ{てもともと}のきもちでたたかった。",
        "We played with nothing to lose.",
        {
          accept: ["ても元々"],
          near: [
            [
              "てもいい",
              'てもいい is "it\'s okay to". For "nothing to lose", use てもともと.',
            ],
          ],
        },
      ),
      s(
        "落ち{てもともと}だと思って、試験を受けてみた。",
        "おち{てもともと}だとおもって、しけんをうけてみた。",
        "I took the exam, figuring I had nothing to lose if I failed.",
        {
          accept: ["ても元々"],
          near: [
            [
              "てもいい",
              'てもいい is "it\'s okay to". For "nothing to lose", use てもともと.',
            ],
          ],
        },
      ),
      s(
        "だめ{でもともと}、やってみよう。",
        "だめ{でもともと}、やってみよう。",
        "We've got nothing to lose. Let's go for it.",
        {
          accept: ["でも元々"],
          near: [
            [
              "でもいい",
              'でもいい is "it\'s okay if". For "nothing to lose", use でもともと.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tomo-naru-to",
    title: "〜ともなると・〜ともなれば",
    meaning: "when it comes to (a higher level), once you're",
    structure: "Noun + ともなると / ともなれば",
    related: ["n3-to-ieba"],
    explanation: `
**ともなると** means that once you reach a certain level, age, position or time, things naturally change: 大学生ともなると、自分で考えて行動しなければならない, "once you're a university student, you have to think and act for yourself".

The noun is a stage that's a step up: 大学生, 社長, プロ, or a peak time like 十二月 or 週末. The second half is what is naturally expected at that level: more responsibility, higher standards, crowds, a festive mood.

ともなれば means the same. Plain となると, "when it comes to", is close, but ともなると adds a sense of "at such an elevated level".

Compare ともあろう (N1), which criticises someone for failing to live up to their status.
`,
    sentences: [
      s(
        "大学生{ともなると}、自分で考えて行動しなければならない。",
        "だいがくせい{ともなると}、じぶんでかんがえてこうどうしなければならない。",
        "Once you're a university student, you have to think and act for yourself.",
        {
          accept: ["ともなれば", "になると", "になれば"],
          near: [
            [
              "となると",
              "となると works too. This point practises ともなると, for a step-up level.",
            ],
          ],
        },
      ),
      s(
        "社長{ともなれば}、責任も重い。",
        "しゃちょう{ともなれば}、せきにんもおもい。",
        "When you're company president, the responsibility is heavy.",
        {
          accept: ["ともなると", "になると", "になれば"],
          near: [
            [
              "となれば",
              "となれば works too. This point practises ともなれば, for a step-up level.",
            ],
          ],
        },
      ),
      s(
        "十二月{ともなると}、街はクリスマス一色になる。",
        "じゅうにがつ{ともなると}、まちはクリスマスいっしょくになる。",
        "Come December, the whole town turns Christmassy.",
        {
          accept: ["ともなれば", "になると", "になれば"],
          near: [
            [
              "ともあろう",
              'ともあろう is "someone of such standing". For "when it comes to", use ともなると.',
            ],
          ],
        },
      ),
      s(
        "プロ{ともなれば}、ミスは許されない。",
        "プロ{ともなれば}、ミスはゆるされない。",
        "At the professional level, mistakes aren't allowed.",
        {
          accept: ["ともなると", "になると", "になれば"],
          near: [
            [
              "ともあろう",
              'ともあろう is "someone of such standing". For "at that level", use ともなれば.',
            ],
          ],
        },
      ),
      s(
        "週末{ともなると}、この公園は家族連れでいっぱいだ。",
        "しゅうまつ{ともなると}、このこうえんはかぞくづれでいっぱいだ。",
        "At the weekend, this park is full of families.",
        {
          accept: ["ともなれば", "になると", "になれば"],
          near: [
            [
              "となると",
              "となると works too. This point practises ともなると.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tomo-arou",
    title: "〜ともあろう",
    meaning: "someone (of such standing) as",
    structure: "Noun (status) + ともあろう + 人 / 者 / 会社 + が",
    related: ["n1-tomo-naru-to"],
    explanation: `
**ともあろう** criticises someone for acting in a way unworthy of their position: 大臣ともあろう人が、そんな発言をするとは, "for a government minister, of all people, to make such a remark!".

The noun is a respected role: 大臣, 教師, 警察官, 医者, or a first-rate company. It's followed by 人, 者 or a similar noun, then が. The sentence usually ends with shock or disapproval: とは, なんて, 〜べきではない.

It's literally "someone who should be X", and you expect better from them. Compare ともなると, which just describes what's natural at a higher level.
`,
    sentences: [
      s(
        "大臣{ともあろう}人が、そんな発言をするとは。",
        "だいじん{ともあろう}ひとが、そんなはつげんをするとは。",
        "For a government minister of all people to make such a remark!",
        {
          near: [
            [
              "ともなると",
              'ともなると is "when it comes to (a level)". For criticising someone\'s conduct given their status, use ともあろう.',
            ],
          ],
        },
      ),
      s(
        "教師{ともあろう}者が、生徒に手を上げるなんて。",
        "きょうし{ともあろう}ものが、せいとにてをあげるなんて。",
        "For a teacher of all people to hit a student!",
        {
          near: [
            [
              "という",
              'という is "called". For "someone of such standing", use ともあろう.',
            ],
          ],
        },
      ),
      s(
        "警察官{ともあろう}人が、交通ルールを守らないとは。",
        "けいさつかん{ともあろう}ひとが、こうつうルールをまもらないとは。",
        "For a police officer of all people not to follow the traffic rules!",
        {
          near: [
            [
              "ともなると",
              'ともなると is "when it comes to (a level)". For criticising conduct unworthy of status, use ともあろう.',
            ],
          ],
        },
      ),
      s(
        "一流企業{ともあろう}会社が、こんなミスをするとは。",
        "いちりゅうきぎょう{ともあろう}かいしゃが、こんなミスをするとは。",
        "For a first-rate company like that to make such a mistake!",
        {
          near: [
            [
              "という",
              'という is "called". For "of such standing", use ともあろう.',
            ],
          ],
        },
      ),
      s(
        "医者{ともあろう}人が、たばこを吸うなんて。",
        "いしゃ{ともあろう}ひとが、たばこをすうなんて。",
        "For a doctor, of all people, to smoke!",
        {
          near: [
            [
              "ともなると",
              'ともなると is "when it comes to (a level)". For criticising conduct unworthy of status, use ともあろう.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ga-saigo",
    title: "〜たが最後・〜たら最後",
    meaning: "once (you do it), that's it (no going back)",
    structure: "Verb た-form + が最後 / ら最後",
    related: ["n1-ba-sore-made"],
    explanation: `
**たが最後** says that once something happens, the result is inevitable and usually bad, and there's no stopping it: 彼は寝たが最後、何があっても起きない, "once he's asleep, nothing will wake him".

The first half is a trigger, and the second half is an unstoppable consequence: it spreads, you can't stop, trust can't be recovered, you can't leave without buying something. たら最後 is the more conversational form.

It's vivid and a little humorous in everyday use, but serious in warnings: 一度嘘をついたが最後、信用は取り戻せない, "once you've lied, you'll never win back trust".

Compare ばそれまでだ, "if…, that's the end of it", which is about wasted effort, not an unstoppable chain.
`,
    sentences: [
      s(
        "彼に話し{たら最後}、すぐにみんなに広まってしまう。",
        "かれにはなし{たらさいご}、すぐにみんなにひろまってしまう。",
        "Tell him, and it'll be all over the place in no time.",
        {
          accept: ["たが最後"],
          near: [
            [
              "たら",
              'Plain たら is "if". For "once you…, there\'s no going back", use たら最後.',
            ],
          ],
        },
      ),
      s(
        "彼は寝{たが最後}、何があっても起きない。",
        "かれはね{たがさいご}、なにがあってもおきない。",
        "Once he's asleep, nothing will wake him.",
        {
          accept: ["たら最後"],
          near: [
            [
              "たあと",
              'たあと is "after". For "once…, there\'s no stopping it", use たが最後.',
            ],
          ],
        },
      ),
      s(
        "この本は読み始め{たら最後}、止まらない。",
        "このほんはよみはじめ{たらさいご}、とまらない。",
        "Once you start this book, you can't put it down.",
        {
          accept: ["たが最後"],
          near: [
            [
              "たら",
              'Plain たら is "if". For "once…, you can\'t stop", use たら最後.',
            ],
          ],
        },
      ),
      s(
        "一度嘘をつい{たが最後}、信用は取り戻せない。",
        "いちどうそをつい{たがさいご}、しんようはとりもどせない。",
        "Once you've lied, you'll never win back trust.",
        {
          accept: ["たら最後"],
          near: [
            [
              "たあと",
              'たあと is "after". For "once…, there\'s no going back", use たが最後.',
            ],
          ],
        },
      ),
      s(
        "あの店に入っ{たら最後}、何か買わずには出られない。",
        "あのみせにはいっ{たらさいご}、なにかかわずにはでられない。",
        "Once you go into that shop, you can't leave without buying something.",
        {
          accept: ["たが最後"],
          near: [
            [
              "たら",
              'Plain たら is "if". For "once…, you can\'t", use たら最後.',
            ],
          ],
        },
      ),
    ],
  }),
];
