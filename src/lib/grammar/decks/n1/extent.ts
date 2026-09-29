import { point, s } from "../../build";

/** Degree and emphasis: even, let alone, not only, the utmost, extremely, too much, at least, only. */

export const extent = [
  point({
    id: "n1-sura",
    title: "〜すら・〜ですら",
    meaning: "even (the most basic)",
    structure: "Noun (+ particle) + すら · Noun + ですら",
    related: ["n3-sae", "n1-dani"],
    explanation: `
**すら** means "even", pointing to an extreme or very basic example: 忙しくて、食事をする時間すらない, "I'm so busy I don't even have time to eat".

It's a more written, emphatic version of さえ (N3), and in most sentences the two are interchangeable. After a noun as the subject, ですら is common: 専門家ですら、この問題は難しい, "even experts find this problem hard".

It's most common with negatives: not even the minimum is possible, like 名前すら書けない or 歩くことすらできない. After a verb, turn it into a noun with こと: 聞いたことすらない.

Compare だけ, "only", and まで, "even (that far)", which extends upward instead of pointing to the bare minimum.
`,
    sentences: [
      s(
        "忙しくて、食事をする時間{すら}ない。",
        "いそがしくて、しょくじをするじかん{すら}ない。",
        "I'm so busy I don't even have time to eat.",
        {
          accept: ["さえ", "も"],
          near: [["だけ", 'だけ is "only". For "not even", use すら.']],
        },
      ),
      s(
        "彼は自分の名前{すら}書けない。",
        "かれはじぶんのなまえ{すら}かけない。",
        "He can't even write his own name.",
        {
          accept: ["さえ", "も"],
          near: [["だけ", 'だけ is "only". For "not even", use すら.']],
        },
      ),
      s(
        "専門家{ですら}、この問題は難しい。",
        "せんもんか{ですら}、このもんだいはむずかしい。",
        "Even experts find this problem hard.",
        {
          accept: ["でさえ", "でも"],
          near: [["だけ", 'だけ is "only". For "even", use ですら.']],
        },
      ),
      s(
        "足が痛くて、歩くこと{すら}できない。",
        "あしがいたくて、あるくこと{すら}できない。",
        "My leg hurts so much I can't even walk.",
        {
          accept: ["さえ", "も"],
          near: [
            [
              "まで",
              'まで is "even (that far)", extending upwards. For "not even the minimum", use すら.',
            ],
          ],
        },
      ),
      s(
        "そんな話は聞いたこと{すら}ない。",
        "そんなはなしはきいたこと{すら}ない。",
        "I've never even heard of such a thing.",
        {
          accept: ["さえ", "も"],
          near: [["だけ", 'だけ is "only". For "never even", use すら.']],
        },
      ),
    ],
  }),

  point({
    id: "n1-dani",
    title: "〜だに",
    meaning: "even (just) thinking; not even",
    structure:
      "Verb dictionary form (考える, 想像する, 聞く) + だに · Noun + だに + negative",
    related: ["n1-sura"],
    explanation: `
**だに** is a literary "even" with two uses.

After a verb of thinking or hearing, it means "just doing that is enough": 考えるだに恐ろしい, "it's terrifying even to think about". The verbs are few (考える, 想像する, 聞く), and the second half is a strong feeling like 恐ろしい or ぞっとする. The everyday version is だけで.

After a noun with a negative, it means "not even": 夢にだに思わなかった, "I never even dreamt of it". 微動だにしない, "doesn't budge an inch", is a fixed phrase.

It's old-fashioned and appears mostly in fixed expressions and literary writing. Compare すら and さえ, which are more flexible.
`,
    sentences: [
      s(
        "考える{だに}恐ろしい。",
        "かんがえる{だに}おそろしい。",
        "It's terrifying even to think about.",
        {
          accept: ["だけで"],
          near: [
            [
              "すら",
              "すら follows a noun. After a verb of thinking, use だに.",
            ],
          ],
        },
      ),
      s(
        "想像する{だに}ぞっとする。",
        "そうぞうする{だに}ぞっとする。",
        "Just imagining it gives me the shivers.",
        {
          accept: ["だけで"],
          near: [
            [
              "すら",
              "すら follows a noun. After a verb of imagining, use だに.",
            ],
          ],
        },
      ),
      s(
        "こんな日が来るとは、夢に{だに}思わなかった。",
        "こんなひがくるとは、ゆめに{だに}おもわなかった。",
        "I never even dreamt this day would come.",
        {
          accept: ["すら", "さえ", "も"],
          near: [["だけ", 'だけ is "only". For "never even", use だに.']],
        },
      ),
      s(
        "兵士たちは微動{だに}しなかった。",
        "へいしたちはびどう{だに}しなかった。",
        "The soldiers didn't budge an inch.",
        {
          accept: ["すら", "も"],
          near: [
            ["だけ", 'だけ is "only". The fixed phrase is 微動だにしない.'],
          ],
        },
      ),
      s(
        "聞く{だに}恐ろしい話だ。",
        "きく{だに}おそろしいはなしだ。",
        "It's a story that's frightening just to hear.",
        {
          accept: ["だけで"],
          near: [["すら", "すら follows a noun. After 聞く, use だに."]],
        },
      ),
    ],
  }),

  point({
    id: "n1-wa-oroka",
    title: "〜はおろか",
    meaning: "let alone, not to mention",
    structure: "Noun + はおろか、Noun + も / さえ / すら / まで",
    related: ["n2-dokoro-ka", "n2-wa-mochiron", "n1-mashite"],
    explanation: `
**はおろか** says that the obvious case is out of the question, and even a lesser one fails: 彼は漢字はおろか、ひらがなも読めない, "he can't read hiragana, let alone kanji".

The first noun is the bigger or harder thing, and the second, with も, さえ, すら or まで, is the smaller, more basic thing. It's usually negative, and often expresses surprise or criticism. With a positive, it can mean "not to mention": 貯金はおろか、借金まである, "far from having savings, I've even got debts".

It's close to どころか (N2). Compare はもちろん (N2), "of course", which lists good things. はおろか is almost always about something bad.

Note the order: まして puts the harder case second, but はおろか puts it first.
`,
    sentences: [
      s(
        "彼は漢字{はおろか}、ひらがなも読めない。",
        "かれはかんじ{はおろか}、ひらがなもよめない。",
        "He can't read hiragana, let alone kanji.",
        {
          accept: ["どころか"],
          near: [
            [
              "はもちろん",
              'はもちろん is "of course", usually for positives. For "let alone", use はおろか.',
            ],
          ],
        },
      ),
      s(
        "旅行{はおろか}、近所に出かける時間もない。",
        "りょこう{はおろか}、きんじょにでかけるじかんもない。",
        "Forget travelling, I don't even have time to pop out locally.",
        {
          accept: ["どころか"],
          near: [
            [
              "はもちろん",
              'はもちろん is "of course", usually for positives. For "let alone", use はおろか.',
            ],
          ],
        },
      ),
      s(
        "貯金{はおろか}、借金まである。",
        "ちょきん{はおろか}、しゃっきんまである。",
        "Far from having savings, I've even got debts.",
        {
          accept: ["どころか"],
          near: [
            [
              "はともかく",
              'はともかく is "setting aside". For "far from", use はおろか.',
            ],
          ],
        },
      ),
      s(
        "彼は謝罪{はおろか}、説明すらしなかった。",
        "かれはしゃざい{はおろか}、せつめいすらしなかった。",
        "He didn't even explain, let alone apologise.",
        {
          accept: ["どころか"],
          near: [
            [
              "はもちろん",
              'はもちろん is "of course", usually for positives. For "let alone", use はおろか.',
            ],
          ],
        },
      ),
      s(
        "車{はおろか}、自転車も持っていない。",
        "くるま{はおろか}、じてんしゃももっていない。",
        "I don't even own a bike, let alone a car.",
        {
          accept: ["どころか"],
          near: [
            [
              "はともかく",
              'はともかく is "setting aside". For "let alone", use はおろか.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-mo-sarukoto-nagara",
    title: "〜もさることながら",
    meaning: "X is of course (good / important), but even more so Y",
    structure: "Noun + もさることながら",
    related: ["n2-wa-mochiron", "n2-nomi-narazu"],
    explanation: `
**もさることながら** grants that X is important or impressive, then adds that Y is even more so, or equally so: 味もさることながら、店の雰囲気もいい, "the food is great of course, but the atmosphere is good too".

It's used for evaluations: reviews, praise, analysis of what really matters. The second half often has も or が大切だ: 能力もさることながら、人柄が大切だ, "ability matters, but character matters even more".

It's more elegant than はもちろん (N2) and puts more weight on the second item. さることながら is literally "while that is so".

Don't confuse it with も構わず (N2), "regardless of".
`,
    sentences: [
      s(
        "この店は味{もさることながら}、雰囲気もいい。",
        "このみせはあじ{もさることながら}、ふんいきもいい。",
        "The food here is great of course, but the atmosphere is good too.",
        {
          accept: ["はもちろん", "はもとより"],
          near: [
            [
              "も構わず",
              'も構わず is "regardless of". For "not only, but also", use もさることながら.',
              "もかまわず",
            ],
          ],
        },
      ),
      s(
        "彼女は歌{もさることながら}、ダンスも素晴らしい。",
        "かのじょはうた{もさることながら}、ダンスもすばらしい。",
        "Her singing is great, but her dancing is wonderful too.",
        {
          accept: ["はもちろん", "はもとより"],
          near: [
            [
              "も構わず",
              'も構わず is "regardless of". For "not only, but also", use もさることながら.',
              "もかまわず",
            ],
          ],
        },
      ),
      s(
        "能力{もさることながら}、人柄が大切だ。",
        "のうりょく{もさることながら}、ひとがらがたいせつだ。",
        "Ability matters of course, but character matters even more.",
        {
          near: [
            [
              "はともかく",
              'はともかく is "setting aside". For "X matters, but Y even more", use もさることながら.',
            ],
          ],
        },
      ),
      s(
        "デザイン{もさることながら}、使いやすさが人気の理由だ。",
        "デザイン{もさることながら}、つかいやすさがにんきのりゆうだ。",
        "The design is good, but it's the ease of use that makes it popular.",
        {
          near: [
            [
              "はともかく",
              'はともかく is "setting aside". For "X of course, but Y even more", use もさることながら.',
            ],
          ],
        },
      ),
      s(
        "本人の努力{もさることながら}、家族の支えも大きかった。",
        "ほんにんのどりょく{もさることながら}、かぞくのささえもおおきかった。",
        "His own efforts counted, of course, but his family's support mattered a lot too.",
        {
          accept: ["はもちろん", "はもとより"],
          near: [
            [
              "も構わず",
              'も構わず is "regardless of". For "not only, but also", use もさることながら.',
              "もかまわず",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-todomarazu",
    title: "〜にとどまらず",
    meaning: "not limited to, going beyond",
    structure: "Noun + にとどまらず",
    related: ["n2-ni-kagirazu", "n2-nomi-narazu"],
    explanation: `
**にとどまらず** says that something doesn't stop within a certain range but spreads beyond it: その影響は国内にとどまらず、海外にまで広がった, "the impact wasn't limited to Japan, it spread overseas too".

とどまる means "to stay, remain within". The noun is a limited area, like a country, a town, a field or an age group, and the second half shows a wider range, often with まで, にも or 全体.

It's close to に限らず (N2), "not only", and だけでなく. にとどまらず stresses spreading or expanding, so it's typical in news and analysis of influence, damage and popularity.

Don't confuse it with にかかわらず (N2), "regardless of".
`,
    sentences: [
      s(
        "その影響は国内{にとどまらず}、海外にまで広がった。",
        "そのえいきょうはこくない{にとどまらず}、かいがいにまでひろがった。",
        "The impact wasn't limited to Japan. It spread overseas too.",
        {
          accept: ["だけでなく", "に限らず"],
          near: [
            [
              "にかかわらず",
              'にかかわらず is "regardless of". For "not limited to", use にとどまらず.',
            ],
          ],
        },
      ),
      s(
        "彼の活動は音楽{にとどまらず}、映画や小説にも及ぶ。",
        "かれのかつどうはおんがく{にとどまらず}、えいがやしょうせつにもおよぶ。",
        "His work goes beyond music, extending to films and novels.",
        {
          accept: ["だけでなく", "に限らず"],
          near: [
            [
              "にかかわらず",
              'にかかわらず is "regardless of". For "goes beyond", use にとどまらず.',
            ],
          ],
        },
      ),
      s(
        "被害は一つの町{にとどまらず}、県全体に広がった。",
        "ひがいはひとつのまち{にとどまらず}、けんぜんたいにひろがった。",
        "The damage wasn't confined to one town. It spread across the whole prefecture.",
        {
          accept: ["だけでなく"],
          near: [
            [
              "に沿って",
              'に沿って is "in line with". For "not confined to", use にとどまらず.',
              "にそって",
            ],
          ],
        },
      ),
      s(
        "この問題は個人{にとどまらず}、社会全体の問題だ。",
        "このもんだいはこじん{にとどまらず}、しゃかいぜんたいのもんだいだ。",
        "This isn't just a personal problem. It's a problem for society as a whole.",
        {
          accept: ["だけでなく", "に限らず"],
          near: [
            [
              "にかかわらず",
              'にかかわらず is "regardless of". For "not just", use にとどまらず.',
            ],
          ],
        },
      ),
      s(
        "彼女の人気は若者{にとどまらず}、幅広い世代に及んでいる。",
        "かのじょのにんきはわかもの{にとどまらず}、はばひろいせだいにおよんでいる。",
        "Her popularity goes beyond young people, reaching all generations.",
        {
          accept: ["だけでなく", "に限らず"],
          near: [
            [
              "に沿って",
              'に沿って is "in line with". For "goes beyond", use にとどまらず.',
              "にそって",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tada-nomi",
    title: "ただ〜のみ・ただ〜のみならず",
    meaning: "only, nothing but; not only … but also",
    structure:
      "ただ + Verb dictionary / Noun + のみ(だ) · ただ + … + のみならず",
    related: ["n2-nomi-narazu", "n5-dake"],
    explanation: `
**ただ〜のみ** is a formal "only, nothing but": 今はただ結果を待つのみだ, "all we can do now is wait for the result". It's a solemn version of だけ, often expressing resolve or resignation: ただ祈るのみです, "all I can do is pray".

**ただ〜のみならず** is "not only … but also", the formal version of だけでなく. It builds on のみならず (N2), and ただ adds emphasis: 彼はただ技術があるのみならず、人柄もいい, "he's not only skilled, he's a good person too".

The puzzle is the ending. If the sentence stops at that point (のみだ, のみです), it's "only". If a second item follows (も, まで), it's "not only".
`,
    sentences: [
      s(
        "今はただ結果を待つ{のみ}だ。",
        "いまはただけっかをまつ{のみ}だ。",
        "All we can do now is wait for the result.",
        {
          accept: ["だけ"],
          near: [
            [
              "のみならず",
              'のみならず is "not only (but also)". For "nothing but", use のみ.',
            ],
          ],
        },
      ),
      s(
        "成功するには、ただ努力ある{のみ}だ。",
        "せいこうするには、ただどりょくある{のみ}だ。",
        "To succeed, all there is is hard work.",
        {
          accept: ["だけ"],
          near: [
            [
              "のみならず",
              'のみならず is "not only (but also)". For "only", use のみ.',
            ],
          ],
        },
      ),
      s(
        "無事を、ただ祈る{のみ}です。",
        "ぶじを、ただいのる{のみ}です。",
        "All I can do is pray they're safe.",
        {
          accept: ["だけ"],
          near: [
            [
              "のみならず",
              'のみならず is "not only (but also)". For "all I can do", use のみ.',
            ],
          ],
        },
      ),
      s(
        "彼はただ技術がある{のみならず}、人柄もいい。",
        "かれはただぎじゅつがある{のみならず}、ひとがらもいい。",
        "He's not only skilled, he's a good person too.",
        {
          accept: ["だけでなく", "ばかりでなく"],
          near: [
            [
              "のみ",
              'のみ alone is "only". For "not only … but also", use のみならず.',
            ],
          ],
        },
      ),
      s(
        "この問題はただ日本{のみならず}、世界中で起きている。",
        "このもんだいはただにほん{のみならず}、せかいじゅうでおきている。",
        "This problem is happening not only in Japan but all over the world.",
        {
          accept: ["だけでなく", "ばかりでなく"],
          near: [
            [
              "のみ",
              'のみ alone is "only". For "not only … but", use のみならず.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kiwamaru",
    title: "〜極まる・〜極まりない",
    meaning: "extremely, utterly (negative)",
    structure: "な-adjective stem + 極まる / 極まりない",
    related: ["n1-no-kiwami"],
    explanation: `
**極まりない** and **極まる** mean "extremely, to the utmost", and they usually intensify a negative な-adjective: 彼の態度は失礼極まりない, "his attitude is incredibly rude".

Both forms mean the same thing, even though one looks negative. 極まる means "to reach the limit", and 極まりない means "without limit". 極まりない is more common.

Typical adjectives are 失礼, 危険, 不愉快, 退屈, 無責任, 不便, 残念 and 迷惑. Attach it directly to the stem, without な: 危険極まりない運転.

It's formal, strong and critical, typical of complaints and editorials. Compare の極み, "the height of", which follows nouns and can be positive.
`,
    sentences: [
      s(
        "彼の態度は失礼{極まりない}。",
        "かれのたいどはしつれい{きわまりない}。",
        "His attitude is incredibly rude.",
        {
          accept: ["極まる"],
          near: [
            [
              "限りない",
              '限りない is "endless". For "extremely (rude)", use 極まりない.',
              "かぎりない",
            ],
          ],
        },
      ),
      s(
        "あれは危険{極まりない}運転だ。",
        "あれはきけん{きわまりない}うんてんだ。",
        "That's extremely dangerous driving.",
        {
          accept: ["極まる"],
          near: [
            [
              "すぎない",
              'すぎない is "nothing more than". For "extremely", use 極まりない.',
            ],
          ],
        },
      ),
      s(
        "それは不愉快{極まる}発言だった。",
        "それはふゆかい{きわまる}はつげんだった。",
        "That was a thoroughly offensive remark.",
        {
          accept: ["極まりない"],
          near: [
            [
              "限りない",
              '限りない is "endless". For "thoroughly", use 極まる.',
              "かぎりない",
            ],
          ],
        },
      ),
      s(
        "退屈{極まりない}授業だった。",
        "たいくつ{きわまりない}じゅぎょうだった。",
        "It was an unbearably boring class.",
        {
          accept: ["極まる"],
          near: [
            [
              "すぎない",
              'すぎない is "nothing more than". For "unbearably", use 極まりない.',
            ],
          ],
        },
      ),
      s(
        "彼の行為は無責任{極まりない}。",
        "かれのこういはむせきにん{きわまりない}。",
        "What he did was utterly irresponsible.",
        {
          accept: ["極まる"],
          near: [
            [
              "限りない",
              '限りない is "endless". For "utterly", use 極まりない.',
              "かぎりない",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-no-itari",
    title: "〜の至り",
    meaning: "the height of, most (humble set phrases)",
    structure: "Noun (光栄, 恐縮, 感激, 若気) + の至り",
    related: ["n1-no-kiwami"],
    explanation: `
**の至り** means "the utmost, the height of", and it lives in a few set phrases:
- **光栄の至り**: "the greatest honour", as in an acceptance speech: このような賞をいただき、光栄の至りです.
- **恐縮の至り**: "deeply grateful / sorry", in humble apologies.
- **感激の至り**: "deeply moved".
- **若気の至り**: "youthful folly", an excuse for things you did when young.

Apart from 若気の至り, it's formal and humble, used in speeches and letters about your own feelings.

Compare の極み, which is more flexible and descriptive: 贅沢の極み, 疲労の極み. 光栄の極み also exists, but 光栄の至り is the classic phrase. And 至り is from 至る, "to reach".
`,
    sentences: [
      s(
        "このような賞をいただき、光栄{の至り}です。",
        "このようなしょうをいただき、こうえい{のいたり}です。",
        "It's the greatest honour to receive such an award.",
        {
          near: [
            [
              "の限り",
              'の限り is "as much as possible". The set phrase is 光栄の至り.',
              "のかぎり",
            ],
          ],
        },
      ),
      s(
        "若気{の至り}で、ばかなことをした。",
        "わかげ{のいたり}で、ばかなことをした。",
        "I did something stupid in the folly of youth.",
        {
          near: [
            [
              "の極み",
              'の極み is "the height of". The set phrase is 若気の至り.',
              "のきわみ",
            ],
          ],
        },
      ),
      s(
        "皆様にご迷惑をおかけし、恐縮{の至り}です。",
        "みなさまにごめいわくをおかけし、きょうしゅく{のいたり}です。",
        "I'm deeply sorry to have caused you all such trouble.",
        {
          near: [
            [
              "の限り",
              'の限り is "as much as possible". The set phrase is 恐縮の至り.',
              "のかぎり",
            ],
          ],
        },
      ),
      s(
        "お褒めの言葉をいただき、感激{の至り}です。",
        "おほめのことばをいただき、かんげき{のいたり}です。",
        "I'm deeply moved by your kind words.",
        {
          accept: ["の極み"],
          near: [
            [
              "の限り",
              'の限り is "as much as possible". The set phrase is 感激の至り.',
              "のかぎり",
            ],
          ],
        },
      ),
      s(
        "若気{の至り}とはいえ、恥ずかしい。",
        "わかげ{のいたり}とはいえ、はずかしい。",
        "It was youthful folly, but I'm still embarrassed.",
        {
          near: [
            [
              "の極み",
              'の極み is "the height of". The set phrase is 若気の至り.',
              "のきわみ",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-no-kiwami",
    title: "〜の極み",
    meaning: "the height of, the ultimate in",
    structure: "Noun + の極み(だ)",
    related: ["n1-no-itari", "n1-kiwamaru"],
    explanation: `
**の極み** means "the peak, the ultimate": 贅沢の極みだ, "it's the height of luxury".

It follows a noun and describes a state at its extreme, positive or negative: 贅沢, 疲労 ("exhaustion"), 悲しみ, 無責任, 光栄. It can end a sentence (〜の極みだ), or follow a verb like 達する ("reach").

It's more descriptive and flexible than の至り, which is limited to a few humble set phrases.

Compare 極まりない, which follows な-adjectives and is almost always critical. 極み is also used in marketing: 美の極み, "the ultimate in beauty".
`,
    sentences: [
      s(
        "一流ホテルに一か月泊まるなんて、贅沢{の極み}だ。",
        "いちりゅうホテルにいっかげつとまるなんて、ぜいたく{のきわみ}だ。",
        "A month in a top hotel is the height of luxury.",
        {
          near: [
            [
              "の至り",
              'の至り is for humble set phrases (光栄の至り). For "the height of luxury", use の極み.',
              "のいたり",
            ],
          ],
        },
      ),
      s(
        "三日間寝ずに働いて、疲労{の極み}に達していた。",
        "みっかかんねずにはたらいて、ひろう{のきわみ}にたっしていた。",
        "After three days of work without sleep, I'd reached the limit of exhaustion.",
        {
          near: [
            [
              "の限り",
              'の限り is "as much as possible". For "the limit of", use の極み.',
              "のかぎり",
            ],
          ],
        },
      ),
      s(
        "友を失い、彼は悲しみ{の極み}にあった。",
        "ともをうしない、かれはかなしみ{のきわみ}にあった。",
        "Having lost his friend, he was in the depths of grief.",
        {
          near: [
            [
              "の至り",
              'の至り is for humble set phrases (光栄の至り). For "the depths of", use の極み.',
              "のいたり",
            ],
          ],
        },
      ),
      s(
        "こんな大きな賞をいただけるとは、光栄{の極み}です。",
        "こんなおおきなしょうをいただけるとは、こうえい{のきわみ}です。",
        "Receiving such a big award is the greatest honour.",
        {
          accept: ["の至り"],
          near: [
            [
              "の限り",
              'の限り is "as much as possible". For "the greatest honour", use の極み.',
              "のかぎり",
            ],
          ],
        },
      ),
      s(
        "約束を破って謝りもしないとは、無責任{の極み}だ。",
        "やくそくをやぶってあやまりもしないとは、むせきにん{のきわみ}だ。",
        "Breaking a promise and not even apologising is the height of irresponsibility.",
        {
          accept: ["極まりない"],
          near: [
            [
              "の至り",
              'の至り is for humble set phrases (光栄の至り). For "the height of", use の極み.',
              "のいたり",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-ittara-nai",
    title: "〜といったらない",
    meaning: "incredibly, beyond words",
    structure:
      "Noun (often an adjective + さ) / い-adj + といったらない / といったらありゃしない",
    related: ["n2-koto-ka"],
    explanation: `
**といったらない** means something is so extreme that words can't describe it: 彼の部屋の汚さといったらない, "you wouldn't believe how messy his room is".

It usually follows a noun made from an adjective with さ, like 汚さ, 暑さ, 悔しさ or うまさ, or an emotion noun like 感動. In the past, it becomes といったらなかった.

It's literally "if you try to say it, there's no way", and it works for good and bad. といったらありゃしない is a more emotional, colloquial version, usually negative, and ったらない is the casual form.

Compare といっても (N3), "although I say", which is a concession.
`,
    sentences: [
      s(
        "彼の部屋の汚さ{といったらない}。",
        "かれのへやのきたなさ{といったらない}。",
        "You wouldn't believe how messy his room is.",
        {
          accept: ["といったらありゃしない", "ったらない"],
          near: [
            [
              "といっても",
              'といっても is "although I say". For "beyond words", use といったらない.',
            ],
          ],
        },
      ),
      s(
        "初めて富士山を見た時の感動{といったらなかった}。",
        "はじめてふじさんをみたときのかんどう{といったらなかった}。",
        "I can't describe how moved I was the first time I saw Mount Fuji.",
        {
          accept: ["ったらなかった"],
          near: [
            [
              "といっても",
              'といっても is "although I say". For "beyond words" in the past, use といったらなかった.',
            ],
          ],
        },
      ),
      s(
        "満員電車の暑さ{といったらない}。",
        "まんいんでんしゃのあつさ{といったらない}。",
        "The heat in a packed train is unbelievable.",
        {
          accept: ["といったらありゃしない", "ったらない"],
          near: [
            [
              "といっても",
              'といっても is "although I say". For "unbelievable", use といったらない.',
            ],
          ],
        },
      ),
      s(
        "決勝で負けた時の悔しさ{といったらなかった}。",
        "けっしょうでまけたときのくやしさ{といったらなかった}。",
        "I can't tell you how frustrated I was when we lost the final.",
        {
          accept: ["ったらなかった"],
          near: [
            [
              "というものだった",
              'というものだ is "that\'s what … is". For "beyond words", use といったらなかった.',
            ],
          ],
        },
      ),
      s(
        "彼女の歌のうまさ{といったらない}。",
        "かのじょのうたのうまさ{といったらない}。",
        "She sings incredibly well.",
        {
          accept: ["ったらない"],
          near: [
            [
              "といっても",
              'といっても is "although I say". For "incredibly", use といったらない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-koto-kono-ue-nai",
    title: "〜ことこの上ない",
    meaning: "nothing could be more, extremely",
    structure: "い-adj / な-adj + な + ことこの上ない",
    related: ["n1-kiwamaru"],
    explanation: `
**ことこの上ない** means "nothing is above this", so "as … as it could possibly be": 山の上から見る夕日は美しいことこの上ない, "the sunset from the mountaintop is as beautiful as it gets".

It follows an adjective: い-adjectives directly (美しい, 嬉しい), and な-adjectives with な (危険な, 退屈な). It works for positive and negative feelings.

It's formal and written, and it sounds more measured than 極まりない. You can also use この上ない as an adjective before a noun: この上ない喜び, "the greatest joy".

Don't confuse it with ことはない (N3), "there's no need to".
`,
    sentences: [
      s(
        "彼の説明は分かりにくい{ことこの上ない}。",
        "かれのせつめいはわかりにくい{ことこのうえない}。",
        "His explanation couldn't be harder to follow.",
        {
          near: [
            [
              "ことはない",
              'ことはない is "there\'s no need to". For "nothing could be more", use ことこの上ない.',
            ],
          ],
        },
      ),
      s(
        "山の上から見る夕日は美しい{ことこの上ない}。",
        "やまのうえからみるゆうひはうつくしい{ことこのうえない}。",
        "The sunset from the mountaintop is as beautiful as it gets.",
        {
          near: [
            [
              "ことはない",
              'ことはない is "there\'s no need to". For "as … as it gets", use ことこの上ない.',
            ],
          ],
        },
      ),
      s(
        "夜道を一人で歩くのは危険な{ことこの上ない}。",
        "よみちをひとりであるくのはきけんな{ことこのうえない}。",
        "Walking alone at night couldn't be more dangerous.",
        {
          near: [
            [
              "ことだ",
              'ことだ is advice ("you should"). For "couldn\'t be more", use ことこの上ない.',
            ],
          ],
        },
      ),
      s(
        "毎日同じ作業ばかりで、退屈な{ことこの上ない}。",
        "まいにちおなじさぎょうばかりで、たいくつな{ことこのうえない}。",
        "Doing the same work every day is as boring as it gets.",
        {
          near: [
            [
              "ことはない",
              'ことはない is "there\'s no need to". For "as boring as it gets", use ことこの上ない.',
            ],
          ],
        },
      ),
      s(
        "優勝できて、嬉しい{ことこの上ない}。",
        "ゆうしょうできて、うれしい{ことこのうえない}。",
        "I couldn't be happier that we won.",
        {
          near: [
            [
              "ことだ",
              'ことだ is advice ("you should"). For "couldn\'t be happier", use ことこの上ない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kagiri-da",
    title: "〜限りだ",
    meaning: "I feel so (very) …",
    structure: "Emotion adjective (い-adj / な-adj + な) + 限りだ",
    related: ["n3-kagiri"],
    explanation: `
**限りだ** after an emotion adjective means the speaker feels that emotion as strongly as possible: 友達がみんな結婚して、うらやましい限りだ, "all my friends are married, and I'm so envious".

It's for the speaker's own feelings, with words like 嬉しい, 悔しい, 寂しい, 心強い, うらやましい, 情けない and 残念な. The first half usually gives the situation causing the feeling.

It's formal and a little old-fashioned, and 限りです is common in speeches: 皆さんに応援していただき、心強い限りです, "I'm so encouraged by your support".

Don't confuse it with 限り (N3), "as long as", or ばかりだ (N2), "keeps getting (worse)".
`,
    sentences: [
      s(
        "友達がみんな結婚して、うらやましい{限りだ}。",
        "ともだちがみんなけっこんして、うらやましい{かぎりだ}。",
        "All my friends are married, and I'm so envious.",
        {
          near: [
            [
              "ばかりだ",
              'ばかりだ is "keeps getting". For "I feel so", use 限りだ.',
            ],
          ],
        },
      ),
      s(
        "大切な試合に負けて、悔しい{限りだ}。",
        "たいせつなしあいにまけて、くやしい{かぎりだ}。",
        "I'm so frustrated that we lost such an important match.",
        {
          near: [
            [
              "ばかりだ",
              'ばかりだ is "keeps getting". For "I feel so", use 限りだ.',
            ],
          ],
        },
      ),
      s(
        "皆さんに応援していただき、心強い{限りです}。",
        "みなさんにおうえんしていただき、こころづよい{かぎりです}。",
        "I'm so encouraged by all your support.",
        {
          accept: ["限りだ"],
          near: [
            [
              "ばかりです",
              'ばかりです is "keeps getting". For "I feel so", use 限りです.',
            ],
          ],
        },
      ),
      s(
        "故郷の町がなくなるとは、寂しい{限りだ}。",
        "こきょうのまちがなくなるとは、さびしい{かぎりだ}。",
        "It's so sad that my hometown is disappearing.",
        {
          near: [
            [
              "ものだ",
              'ものだ is "that\'s how it is". For "I feel so", use 限りだ.',
            ],
          ],
        },
      ),
      s(
        "優勝できて、嬉しい{限りです}。",
        "ゆうしょうできて、うれしい{かぎりです}。",
        "I'm so happy that we won.",
        {
          accept: ["限りだ"],
          near: [
            [
              "ばかりです",
              'ばかりです is "keeps getting". For "I feel so", use 限りです.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-mo-hodo-ga-aru",
    title: "〜にもほどがある",
    meaning: "there's a limit to (this is going too far)",
    structure: "Noun / Verb dictionary form + にもほどがある",
    related: ["n3-hodo"],
    explanation: `
**にもほどがある** is an exasperated "there's a limit to X!", meaning someone has gone way too far: 冗談にもほどがある, "that's taking a joke too far".

It follows a noun (冗談, わがまま, 失礼) or a verb (ふざける, ばかにする). It's usually an angry response to someone's behaviour, often ending the sentence with だ or よ.

ほど means "degree, limit", so it's literally "even X has its proper limit". It's common in conversation and TV dramas. ばかにするにもほどがある, "that's too insulting!", is a very typical line.

Compare にすぎない (N2), "nothing more than", which minimises instead of complaining.
`,
    sentences: [
      s(
        "そんなことを言うなんて、冗談{にもほどがある}。",
        "そんなことをいうなんて、じょうだん{にもほどがある}。",
        "Saying something like that is taking a joke too far.",
        {
          accept: ["にも程がある"],
          near: [
            [
              "にすぎない",
              'にすぎない is "nothing more than". For "that\'s going too far", use にもほどがある.',
            ],
          ],
        },
      ),
      s(
        "二時間も遅れるなんて、遅刻{にもほどがある}。",
        "にじかんもおくれるなんて、ちこく{にもほどがある}。",
        "Two hours late? There are limits.",
        {
          accept: ["にも程がある"],
          near: [
            [
              "にすぎない",
              'にすぎない is "nothing more than". For "there are limits", use にもほどがある.',
            ],
          ],
        },
      ),
      s(
        "こんな時にふざける{にもほどがある}。",
        "こんなときにふざける{にもほどがある}。",
        "Messing about at a time like this is going too far.",
        {
          accept: ["にも程がある"],
          near: [
            [
              "ほどではない",
              'ほどではない is "not as much as". For "going too far", use にもほどがある.',
            ],
          ],
        },
      ),
      s(
        "人をばかにする{にもほどがある}。",
        "ひとをばかにする{にもほどがある}。",
        "That's far too insulting.",
        {
          accept: ["にも程がある"],
          near: [
            [
              "にすぎない",
              'にすぎない is "nothing more than". For "far too", use にもほどがある.',
            ],
          ],
        },
      ),
      s(
        "自分のことばかりで、わがまま{にもほどがある}。",
        "じぶんのことばかりで、わがまま{にもほどがある}。",
        "Thinking only of yourself? There's a limit to how selfish you can be.",
        {
          accept: ["にも程がある"],
          near: [
            [
              "ほどではない",
              'ほどではない is "not as much as". For "there\'s a limit", use にもほどがある.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kara-aru",
    title: "〜からある・〜からする・〜からの",
    meaning: "as much as, a whopping (amount)",
    structure:
      "Number + counter + からある (size, weight) / からする (price) / からの (people, things)",
    related: ["n3-kurai"],
    explanation: `
After a large number, these emphasise how big it is: "as much as, a whole…". Each one goes with a different kind of amount:
- **からある**: size, weight, length. 百キロからある荷物, "a load weighing a hundred kilos or more".
- **からする**: price. 百万円からする時計, "a watch costing a million yen or more".
- **からの**: a number of people or things. 一万人からの観客, "an audience of as many as ten thousand".

The number is always large and surprising, and the feeling is "at least that much, maybe more".

Compare ぐらい (N3), "about", which is neutral and doesn't emphasise size.
`,
    sentences: [
      s(
        "彼は百キロ{からある}荷物を一人で運んだ。",
        "かれはひゃくキロ{からある}にもつをひとりではこんだ。",
        "He carried a load of a hundred kilos or more on his own.",
        {
          near: [
            ["からする", "からする is for prices. For weight, use からある."],
            [
              "ぐらいの",
              'ぐらいの is a neutral "about". For "a whopping", use からある.',
            ],
          ],
        },
      ),
      s(
        "会場には一万人{からの}観客が集まった。",
        "かいじょうにはいちまんにん{からの}かんきゃくがあつまった。",
        "As many as ten thousand spectators gathered at the venue.",
        {
          near: [
            [
              "からする",
              "からする is for prices. For numbers of people, use からの.",
            ],
            [
              "ぐらいの",
              'ぐらいの is a neutral "about". For "as many as", use からの.',
            ],
          ],
        },
      ),
      s(
        "彼は百万円{からする}時計をしている。",
        "かれはひゃくまんえん{からする}とけいをしている。",
        "He wears a watch that costs a million yen or more.",
        {
          near: [
            [
              "からある",
              "からある is for size and weight. For a price, use からする.",
            ],
          ],
        },
      ),
      s(
        "毎日二十キロ{からある}道のりを歩いて通った。",
        "まいにちにじゅっキロ{からある}みちのりをあるいてかよった。",
        "Every day, he walked a good twenty kilometres to get there.",
        {
          near: [
            ["からする", "からする is for prices. For distance, use からある."],
          ],
        },
      ),
      s(
        "この絵は一億円{からする}らしい。",
        "このえはいちおくえん{からする}らしい。",
        "Apparently, this painting costs as much as a hundred million yen.",
        {
          near: [
            [
              "からある",
              "からある is for size and weight. For a price, use からする.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kitte-no",
    title: "〜きっての",
    meaning: "the best / most … in (all of)",
    structure: "Noun (a group or place) + きっての + Noun",
    related: ["n1-nara-de-wa"],
    explanation: `
**きっての** means "the top … in the whole of X": 彼は社内きっての実力者だ, "he's the most capable person in the whole company".

The first noun is a group or place: 社内 ("the company"), 学内 ("the school"), 町, 日本, 業界 ("the industry"). The second is a person or thing praised as the best: 秀才, 名店, 名門, 実力者.

It's written, admiring and a little old-fashioned, found in profiles and news. It's always positive.

Don't confuse it with ならではの, "unique to". A 京都ならではの店 is a shop you can only find in Kyoto, while a 京都きっての店 is the best shop in Kyoto.
`,
    sentences: [
      s(
        "彼は社内{きっての}実力者だ。",
        "かれはしゃない{きっての}じつりょくしゃだ。",
        "He's the most capable person in the whole company.",
        {
          near: [
            [
              "ならではの",
              'ならではの is "unique to". For "the best in", use きっての.',
            ],
          ],
        },
      ),
      s(
        "ここは町{きっての}名店だ。",
        "ここはまち{きっての}めいてんだ。",
        "This is the finest restaurant in town.",
        {
          near: [
            [
              "ならではの",
              'ならではの is "unique to". For "the finest in", use きっての.',
            ],
          ],
        },
      ),
      s(
        "彼女は学内{きっての}秀才だ。",
        "かのじょはがくない{きっての}しゅうさいだ。",
        "She's the brightest student in the whole school.",
        {
          near: [
            [
              "としての",
              'としての is "as a". For "the brightest in", use きっての.',
            ],
          ],
        },
      ),
      s(
        "彼は日本{きっての}名門大学を卒業した。",
        "かれはにほん{きっての}めいもんだいがくをそつぎょうした。",
        "He graduated from one of the most prestigious universities in Japan.",
        {
          near: [
            [
              "ならではの",
              'ならではの is "unique to". For "the most prestigious in", use きっての.',
            ],
          ],
        },
      ),
      s(
        "彼女は業界{きっての}切れ者として知られている。",
        "かのじょはぎょうかい{きっての}きれものとしてしられている。",
        "She's known as the sharpest mind in the industry.",
        {
          near: [
            [
              "としての",
              'としての is "as a". For "the sharpest in", use きっての.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nari-tomo",
    title: "〜なりとも",
    meaning: "at least (a little), even just",
    structure: "Small amount (少し, 一目, わずか, 多少) + なりとも",
    related: ["n2-semete", "n1-tari-tomo"],
    explanation: `
**なりとも** after a small amount means "even just that much, at least": 少しなりとも、お役に立てれば幸いです, "I'd be glad to be of even a little help".

The amount is modest (少し, わずか, 多少, 一目, 一日) and the second half is a hope or wish: 会いたい, 幸いです, 早く完成させたい, or 探している.

It's formal and humble, and the everyday version is でも: 少しでも, 一目でも. It often pairs with せめて (N2), "at least".

Compare たりとも, which follows 一 + counter with a negative, "not even one". Don't confuse it with なりに (N2), "in its own way".
`,
    sentences: [
      s(
        "少し{なりとも}、お役に立てれば幸いです。",
        "すこし{なりとも}、おやくにたてればさいわいです。",
        "I'd be glad to be of even a little help.",
        {
          accept: ["でも"],
          near: [
            [
              "なりに",
              'なりに is "in its own way". For "at least a little", use なりとも.',
            ],
          ],
        },
      ),
      s(
        "一目{なりとも}会いたい。",
        "ひとめ{なりとも}あいたい。",
        "I want to see her, even if only for a moment.",
        {
          accept: ["でも"],
          near: [
            [
              "たりとも",
              'たりとも comes with a negative ("not even one"). For a wish, use なりとも.',
            ],
          ],
        },
      ),
      s(
        "わずか{なりとも}、寄付をしたい。",
        "わずか{なりとも}、きふをしたい。",
        "I'd like to donate, even just a little.",
        {
          accept: ["でも"],
          near: [
            [
              "なりに",
              'なりに is "in its own way". For "even just a little", use なりとも.',
            ],
          ],
        },
      ),
      s(
        "一日{なりとも}早く完成させたい。",
        "いちにち{なりとも}はやくかんせいさせたい。",
        "I want to finish it even one day sooner.",
        {
          accept: ["でも"],
          near: [
            [
              "たりとも",
              'たりとも comes with a negative ("not even one"). For a wish, use なりとも.',
            ],
          ],
        },
      ),
      s(
        "多少{なりとも}経験がある人を探している。",
        "たしょう{なりとも}けいけんがあるひとをさがしている。",
        "We're looking for someone with at least some experience.",
        {
          accept: ["でも"],
          near: [
            [
              "なりに",
              'なりに is "in its own way". For "at least some", use なりとも.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kurai-no-mono-da",
    title: "〜くらいのものだ・〜ぐらいのものだ",
    meaning: "only X (hardly anyone / anything else)",
    structure: "Noun + くらい / ぐらい + のものだ",
    related: ["n3-kurai"],
    explanation: `
**くらいのものだ** means "X is about the only one": こんなことを頼めるのは、君くらいのものだ, "you're about the only person I can ask something like this".

The sentence usually starts with 〜のは ("the one who…"), and ends with a person or thing plus くらいのものだ. It picks out a rare exception, with a hint of admiration, complaint or irony: そんなことを気にするのは、君ぐらいのものだよ, "you're the only one who'd worry about that".

It builds on くらい (N3) in its "minimal extent" sense, and のものだ adds "that's about it". It's conversational and more natural than だけだ when you mean "hardly anyone else".
`,
    sentences: [
      s(
        "こんなことを頼めるのは、君{くらいのものだ}。",
        "こんなことをたのめるのは、きみ{くらいのものだ}。",
        "You're about the only person I can ask something like this.",
        {
          accept: ["ぐらいのものだ", "くらいだ", "ぐらいだ", "だけだ"],
          near: [
            [
              "ほどだ",
              'ほどだ is "to the extent that". For "about the only one", use くらいのものだ.',
            ],
          ],
        },
      ),
      s(
        "毎日運動しているのは、うちの家族では父{ぐらいのものだ}。",
        "まいにちうんどうしているのは、うちのかぞくではちち{ぐらいのものだ}。",
        "In our family, my dad's about the only one who exercises every day.",
        {
          accept: ["くらいのものだ", "くらいだ", "ぐらいだ", "だけだ"],
          near: [
            [
              "ほどだ",
              'ほどだ is "to the extent that". For "about the only one", use ぐらいのものだ.',
            ],
          ],
        },
      ),
      s(
        "彼に意見できるのは、社長{くらいのものだ}。",
        "かれにいけんできるのは、しゃちょう{くらいのものだ}。",
        "The president is about the only one who can tell him what to do.",
        {
          accept: ["ぐらいのものだ", "くらいだ", "ぐらいだ", "だけだ"],
          near: [
            [
              "ほどだ",
              'ほどだ is "to the extent that". For "about the only one", use くらいのものだ.',
            ],
          ],
        },
      ),
      s(
        "この辺で夜遅くまで開いているのは、コンビニ{くらいのものだ}。",
        "このへんでよるおそくまであいているのは、コンビニ{くらいのものだ}。",
        "Around here, convenience stores are about the only thing open late.",
        {
          accept: ["ぐらいのものだ", "くらいだ", "ぐらいだ", "だけだ"],
          near: [
            [
              "ほどだ",
              'ほどだ is "to the extent that". For "about the only thing", use くらいのものだ.',
            ],
          ],
        },
      ),
      s(
        "そんなことを気にするのは、君{ぐらいのものだ}よ。",
        "そんなことをきにするのは、きみ{ぐらいのものだ}よ。",
        "You're the only one who'd worry about that.",
        {
          accept: ["くらいのものだ", "くらいだ", "ぐらいだ", "だけだ"],
          near: [
            [
              "ほどだ",
              'ほどだ is "to the extent that". For "the only one", use ぐらいのものだ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-no-nan-no-tte",
    title: "〜のなんのって",
    meaning: "so incredibly …, you wouldn't believe how",
    structure: "い-adj / Verb plain form + のなんのって",
    related: ["n1-to-ittara-nai"],
    explanation: `
**のなんのって** is a spoken way of saying something was indescribably intense: 痛いのなんのって、声も出なかった, "it hurt so much I couldn't even make a sound".

It follows an adjective or verb of feeling: 痛い, 寒い, おいしい, 驚いた, 喜んだ. It often trails off, leaving the listener to imagine, or it's followed by an extreme result: 声も出なかった, 腰を抜かしそうだった, 泣き出した.

It's lively and conversational, a colloquial cousin of といったらない (N1). のなんの is sometimes used on its own, too.

Don't confuse it with のに, "even though". Because it's so colloquial, you'll hear it in stories told among friends rather than read it in formal writing.
`,
    sentences: [
      s(
        "痛い{のなんのって}、声も出なかった。",
        "いたい{のなんのって}、こえもでなかった。",
        "It hurt so much I couldn't even make a sound.",
        {
          accept: ["のなんの"],
          near: [
            [
              "のに",
              'のに is "even though". For "so incredibly", use のなんのって.',
            ],
          ],
        },
      ),
      s(
        "驚いた{のなんのって}、腰を抜かしそうだった。",
        "おどろいた{のなんのって}、こしをぬかしそうだった。",
        "I was so shocked I nearly fell over.",
        {
          accept: ["のなんの"],
          near: [
            [
              "のに",
              'のに is "even though". For "so incredibly", use のなんのって.',
            ],
          ],
        },
      ),
      s(
        "あの店のラーメン、おいしい{のなんのって}。",
        "あのみせのラーメン、おいしい{のなんのって}。",
        "The ramen at that place is unbelievably good.",
        {
          accept: ["のなんの", "といったらない"],
          near: [
            [
              "のだから",
              'のだから is "since". For "unbelievably", use のなんのって.',
            ],
          ],
        },
      ),
      s(
        "寒い{のなんのって}、手がかじかんで動かなかった。",
        "さむい{のなんのって}、てがかじかんでうごかなかった。",
        "It was so cold my hands went numb.",
        {
          accept: ["のなんの"],
          near: [
            [
              "のに",
              'のに is "even though". For "so incredibly", use のなんのって.',
            ],
          ],
        },
      ),
      s(
        "彼女が喜んだ{のなんのって}、泣き出してしまった。",
        "かのじょがよろこんだ{のなんのって}、なきだしてしまった。",
        "She was so happy she burst into tears.",
        {
          accept: ["のなんの"],
          near: [
            [
              "のだから",
              'のだから is "since". For "so incredibly", use のなんのって.',
            ],
          ],
        },
      ),
    ],
  }),
];
