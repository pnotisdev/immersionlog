import { point, s } from "../../build";

/** Standpoints and set phrases: depending on, regardless of, in line with, as for, as one who is, setting aside. */

export const viewpoint = [
  point({
    id: "n1-ikan",
    title: "〜いかんで・〜いかんによって・〜いかんだ",
    meaning: "depending on",
    structure: "Noun (の) + いかんで / いかんによって / いかんでは / いかんだ",
    related: ["n2-shidai", "n1-ikan-ni-yorazu"],
    explanation: `
**いかん** (如何) means "how, what state", and after a noun, it means "depending on": 結果いかんで、次の計画を決める, "we'll decide the next plan depending on the results".

The noun is something whose outcome is still open: results, effort, the weather, sales, the interview. It can end a sentence as いかんだ ("it all depends on"), or continue as いかんで, いかんによって or いかんでは ("depending on…, possibly").

It's a formal, written version of 次第 (N2), and they're usually interchangeable.

The puzzle is its opposite, いかんにかかわらず / いかんによらず, "regardless of". Check whether the outcome depends on the noun or not.
`,
    sentences: [
      s(
        "結果{いかんで}、次の計画を決める。",
        "けっか{いかんで}、つぎのけいかくをきめる。",
        "We'll decide our next plan depending on the results.",
        {
          accept: ["いかんによって", "次第で"],
          near: [
            [
              "いかんにかかわらず",
              'いかんにかかわらず is "regardless of". For "depending on", use いかんで.',
            ],
          ],
        },
      ),
      s(
        "合否は面接の結果{いかんだ}。",
        "ごうひはめんせつのけっか{いかんだ}。",
        "Whether you pass depends on the interview.",
        {
          accept: ["次第だ", "いかんによる"],
          near: [
            [
              "いかんによらず",
              'いかんによらず is "regardless of". For "depends on", use いかんだ.',
            ],
          ],
        },
      ),
      s(
        "努力{いかんによって}、道は開ける。",
        "どりょく{いかんによって}、みちはひらける。",
        "Depending on your efforts, a way will open up.",
        {
          accept: ["いかんで", "次第で"],
          near: [
            [
              "いかんにかかわらず",
              'いかんにかかわらず is "regardless of". For "depending on", use いかんによって.',
            ],
          ],
        },
      ),
      s(
        "天候{いかんでは}、中止になることもある。",
        "てんこう{いかんでは}、ちゅうしになることもある。",
        "Depending on the weather, it may be cancelled.",
        {
          accept: ["次第では", "によっては", "いかんによっては"],
          near: [
            [
              "いかんにかかわらず",
              'いかんにかかわらず is "regardless of". For "depending on", use いかんでは.',
            ],
          ],
        },
      ),
      s(
        "会社の将来は、新製品の売れ行き{いかんだ}。",
        "かいしゃのしょうらいは、しんせいひんのうれゆき{いかんだ}。",
        "The company's future depends on how the new product sells.",
        {
          accept: ["次第だ", "いかんによる"],
          near: [
            [
              "いかんによらず",
              'いかんによらず is "regardless of". For "depends on", use いかんだ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ikan-ni-yorazu",
    title: "〜いかんにかかわらず・〜いかんによらず",
    meaning: "regardless of",
    structure:
      "Noun + の + いかんにかかわらず / いかんによらず / いかんを問わず",
    related: ["n1-ikan", "n2-ni-kakawarazu", "n2-wo-towazu"],
    explanation: `
**いかんにかかわらず** and **いかんによらず** mean "regardless of what X turns out to be": 理由のいかんにかかわらず、遅刻は認めない, "lateness won't be accepted, whatever the reason".

The noun is followed by の, then いかん ("how it is"), then the "regardless" phrase. **いかんを問わず** means the same. The second half is a fixed rule or decision.

It's the formal opposite of いかんで ("depending on"), and it's typical of rules, terms and conditions and official notices: 事情のいかんにかかわらず、返金できません, "no refunds under any circumstances".

It's a heavier version of にかかわらず (N2) and を問わず (N2).
`,
    sentences: [
      s(
        "理由の{いかんにかかわらず}、遅刻は認めない。",
        "りゆうの{いかんにかかわらず}、ちこくはみとめない。",
        "Lateness won't be accepted, whatever the reason.",
        {
          accept: ["いかんによらず", "いかんを問わず"],
          near: [
            [
              "いかんで",
              'いかんで is "depending on". For "regardless of", use いかんにかかわらず.',
            ],
          ],
        },
      ),
      s(
        "結果の{いかんによらず}、参加者全員に記念品を差し上げます。",
        "けっかの{いかんによらず}、さんかしゃぜんいんにきねんひんをさしあげます。",
        "Every participant will receive a souvenir, whatever the result.",
        {
          accept: ["いかんにかかわらず", "いかんを問わず"],
          near: [
            [
              "いかんでは",
              'いかんでは is "depending on". For "whatever the result", use いかんによらず.',
            ],
          ],
        },
      ),
      s(
        "国籍の{いかんを問わず}、誰でも応募できます。",
        "こくせきの{いかんをとわず}、だれでもおうぼできます。",
        "Anyone can apply, regardless of nationality.",
        {
          accept: ["いかんにかかわらず", "いかんによらず"],
          near: [
            [
              "いかんで",
              'いかんで is "depending on". For "regardless of", use いかんを問わず.',
            ],
          ],
        },
      ),
      s(
        "事情の{いかんにかかわらず}、一度支払われた料金は返金できません。",
        "じじょうの{いかんにかかわらず}、いちどしはらわれたりょうきんはへんきんできません。",
        "Fees once paid cannot be refunded under any circumstances.",
        {
          accept: ["いかんによらず", "いかんを問わず"],
          near: [
            [
              "いかんでは",
              'いかんでは is "depending on". For "under any circumstances", use いかんにかかわらず.',
            ],
          ],
        },
      ),
      s(
        "理由の{いかんによらず}、暴力は許されない。",
        "りゆうの{いかんによらず}、ぼうりょくはゆるされない。",
        "Violence is unacceptable, whatever the reason.",
        {
          accept: ["いかんにかかわらず", "いかんを問わず"],
          near: [
            [
              "いかんで",
              'いかんで is "depending on". For "whatever the reason", use いかんによらず.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-yorazu",
    title: "〜によらず",
    meaning: "regardless of; despite (appearances)",
    structure: "Noun + によらず · 見かけによらず",
    related: ["n2-ni-kakawarazu", "n3-ni-yotte"],
    explanation: `
**によらず** means "without depending on", so "regardless of": 年齢や性別によらず、誰でも参加できる, "anyone can take part, regardless of age or gender".

The noun is a category: age, gender, experience, or 何事 ("everything"). 何事によらず means "in anything, in all things".

The most famous use is with 見かけ ("appearance"): 彼は見かけによらず力持ちだ, "he's strong, despite how he looks". The proverb 人は見かけによらないものだ means "you can't judge a book by its cover".

It's the negative of による (N3's によって, "depending on"), so the puzzle is to check whether the result depends on the noun or not.
`,
    sentences: [
      s(
        "年齢や性別{によらず}、誰でも参加できる。",
        "ねんれいやせいべつ{によらず}、だれでもさんかできる。",
        "Anyone can take part, regardless of age or gender.",
        {
          accept: ["にかかわらず", "を問わず"],
          near: [
            [
              "によって",
              'によって is "depending on". For "regardless of", use によらず.',
            ],
          ],
        },
      ),
      s(
        "彼は見かけ{によらず}、力持ちだ。",
        "かれはみかけ{によらず}、ちからもちだ。",
        "He's strong, despite how he looks.",
        {
          near: [
            [
              "によって",
              'によって is "depending on". The phrase is 見かけによらず.',
            ],
          ],
        },
      ),
      s(
        "人は見かけ{によらない}ものだ。",
        "ひとはみかけ{によらない}ものだ。",
        "You can't judge a book by its cover.",
        {
          near: [
            [
              "による",
              "見かけによる is the opposite. The saying is 見かけによらない.",
            ],
          ],
        },
      ),
      s(
        "何事{によらず}、基本が大切だ。",
        "なにごと{によらず}、きほんがたいせつだ。",
        "In anything you do, the basics are what matter.",
        {
          near: [
            [
              "によって",
              'によって is "depending on". For "in anything", use 何事によらず.',
            ],
          ],
        },
      ),
      s(
        "経験の有無{によらず}、応募できます。",
        "けいけんのうむ{によらず}、おうぼできます。",
        "You can apply whether or not you have experience.",
        {
          accept: ["にかかわらず", "を問わず"],
          near: [
            [
              "によって",
              'によって is "depending on". For "whether or not", use によらず.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-iwasereba",
    title: "〜に言わせれば",
    meaning: "if you ask X, according to X",
    structure: "Person + に言わせれば / に言わせると / に言わせたら",
    related: ["n3-ni-yoru-to", "n2-ni-shite-mireba"],
    explanation: `
**に言わせれば** introduces someone's personal, often strong or unconventional, opinion: 母に言わせれば、私はまだ子どもだそうだ, "if you ask my mother, I'm still a child".

It's literally "if you let X say it", which implies that X has firm views. The ending is usually そうだ, らしい or だ. With 私, it introduces your own frank opinion: 私に言わせれば、それは言い訳にすぎない, "if you ask me, that's just an excuse".

Compare によれば (N3), "according to (a source)", which is neutral and used for facts and reports. に言わせれば is always an opinion.

It's close to にしてみれば (N2), "from X's point of view", which is about someone's feelings rather than their opinion.
`,
    sentences: [
      s(
        "母{に言わせれば}、私はまだ子どもだそうだ。",
        "はは{にいわせれば}、わたしはまだこどもだそうだ。",
        "If you ask my mother, I'm still a child.",
        {
          accept: ["に言わせると", "に言わせたら"],
          near: [
            [
              "によれば",
              'によれば is a neutral "according to". For someone\'s strong opinion, use に言わせれば.',
            ],
          ],
        },
      ),
      s(
        "専門家{に言わせれば}、この計画は無謀らしい。",
        "せんもんか{にいわせれば}、このけいかくはむぼうらしい。",
        "According to the experts, this plan is reckless.",
        {
          accept: ["に言わせると", "に言わせたら", "によれば", "によると"],
          near: [
            [
              "にとって",
              'にとって is "for". For "if you ask", use に言わせれば.',
            ],
          ],
        },
      ),
      s(
        "彼{に言わせると}、日本の夏は世界一暑いそうだ。",
        "かれ{にいわせると}、にほんのなつはせかいいちあついそうだ。",
        "According to him, Japanese summers are the hottest in the world.",
        {
          accept: ["に言わせれば", "に言わせたら"],
          near: [
            [
              "によると",
              'によると is a neutral "according to". For someone\'s strong opinion, use に言わせると.',
            ],
          ],
        },
      ),
      s(
        "私{に言わせれば}、それは言い訳にすぎない。",
        "わたし{にいわせれば}、それはいいわけにすぎない。",
        "If you ask me, that's just an excuse.",
        {
          accept: ["に言わせると", "に言わせたら"],
          near: [
            [
              "にとって",
              'にとって is "for". For "if you ask me", use に言わせれば.',
            ],
          ],
        },
      ),
      s(
        "祖父{に言わせれば}、昔の方が良かったらしい。",
        "そふ{にいわせれば}、むかしのほうがよかったらしい。",
        "If you ask my grandfather, things were better in the old days.",
        {
          accept: ["に言わせると", "に言わせたら"],
          near: [
            [
              "によれば",
              'によれば is a neutral "according to". For someone\'s strong opinion, use に言わせれば.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-sokushite",
    title: "〜に即して・〜に即した",
    meaning: "in line with, based on (the facts / reality)",
    structure: "Noun (事実, 現状, 実態) + に即して / に即した + Noun",
    related: ["n2-ni-motozuite", "n2-ni-sotte"],
    explanation: `
**に即して** means "in close accordance with" facts or reality: 事実に即して、報告書を書いてください, "please write the report in line with the facts".

The noun is usually about reality: 事実, 現状 ("the current situation"), 実態 ("the actual state"), 実情. It can also be a rule, like 法律. Before a noun, it's に即した: 現状に即した対策, "measures suited to the current situation".

即 means "immediate, close to", so it's "sticking close to". It's formal and common in policy, reports and law.

It's close to に基づいて (N2) and に沿って (N2). Compare に反して (N2), "contrary to".
`,
    sentences: [
      s(
        "事実{に即して}、報告書を書いてください。",
        "じじつ{にそくして}、ほうこくしょをかいてください。",
        "Please write the report in line with the facts.",
        {
          accept: ["に基づいて", "に沿って"],
          near: [
            [
              "に反して",
              'に反して is "contrary to". For "in line with", use に即して.',
              "にはんして",
            ],
          ],
        },
      ),
      s(
        "現状{に即した}対策が必要だ。",
        "げんじょう{にそくした}たいさくがひつようだ。",
        "We need measures suited to the current situation.",
        {
          accept: ["に合った"],
          near: [
            [
              "に反した",
              'に反した is "contrary to". For "suited to", use に即した.',
              "にはんした",
            ],
          ],
        },
      ),
      s(
        "実態{に即して}、制度を見直すべきだ。",
        "じったい{にそくして}、せいどをみなおすべきだ。",
        "The system should be reviewed in line with what's actually happening.",
        {
          accept: ["に基づいて"],
          near: [
            [
              "に対して",
              'に対して is "towards, against". For "in line with", use に即して.',
              "にたいして",
            ],
          ],
        },
      ),
      s(
        "法律{に即して}、厳正に処分する。",
        "ほうりつ{にそくして}、げんせいにしょぶんする。",
        "We will deal with it strictly in accordance with the law.",
        {
          accept: ["に則って", "に基づいて", "に従って"],
          near: [
            [
              "に反して",
              'に反して is "contrary to". For "in accordance with", use に即して.',
              "にはんして",
            ],
          ],
        },
      ),
      s(
        "地域の実情{に即した}支援を行う。",
        "ちいきのじつじょう{にそくした}しえんをおこなう。",
        "We provide support tailored to local conditions.",
        {
          accept: ["に合った"],
          near: [
            [
              "に反した",
              'に反した is "contrary to". For "tailored to", use に即した.',
              "にはんした",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-terashite",
    title: "〜に照らして",
    meaning: "in light of, judged against (a standard)",
    structure:
      "Noun (法律, 規則, 経験, 常識) + に照らして / に照らせば / に照らすと",
    related: ["n1-ni-sokushite"],
    explanation: `
**に照らして** means judging something by holding it up against a standard: 法律に照らして判断する, "we'll judge it against the law".

The noun is a standard of comparison: laws, rules, past examples, your own experience, common sense. The second half is a judgement or conclusion. With ば or と, it becomes conditional: 規則に照らせば、彼の行為は違反だ, "by the rules, what he did is a violation".

照らす means "to shine a light on", so it's "shining the standard on the case". It's formal and common in legal, business and analytical writing.

Compare に対して (N3), "towards, against a person or thing", and に基づいて (N2), "based on".
`,
    sentences: [
      s(
        "法律{に照らして}判断する。",
        "ほうりつ{にてらして}はんだんする。",
        "We'll judge it against the law.",
        {
          accept: ["に基づいて", "に照らし"],
          near: [
            [
              "に対して",
              'に対して is "towards, against (someone)". For "judged against a standard", use に照らして.',
              "にたいして",
            ],
          ],
        },
      ),
      s(
        "過去の例{に照らして}考えると、成功は難しいだろう。",
        "かこのれい{にてらして}かんがえると、せいこうはむずかしいだろう。",
        "In light of past examples, success looks unlikely.",
        {
          accept: ["に照らし"],
          near: [
            [
              "に対して",
              'に対して is "towards, against (someone)". For "in light of", use に照らして.',
              "にたいして",
            ],
          ],
        },
      ),
      s(
        "規則{に照らせば}、彼の行為は違反だ。",
        "きそく{にてらせば}、かれのこういはいはんだ。",
        "By the rules, what he did is a violation.",
        {
          accept: ["に照らすと", "に照らして"],
          near: [
            [
              "によれば",
              'によれば is "according to (a source)". For "judged by the rules", use に照らせば.',
            ],
          ],
        },
      ),
      s(
        "自分の経験{に照らして}、アドバイスをした。",
        "じぶんのけいけん{にてらして}、アドバイスをした。",
        "I gave advice in light of my own experience.",
        {
          accept: ["に基づいて", "に照らし"],
          near: [
            [
              "に対して",
              'に対して is "towards, against (someone)". For "in light of", use に照らして.',
              "にたいして",
            ],
          ],
        },
      ),
      s(
        "常識{に照らして}考えれば、分かるはずだ。",
        "じょうしき{にてらして}かんがえれば、わかるはずだ。",
        "If you think about it in terms of common sense, you should see it.",
        {
          accept: ["に照らし"],
          near: [
            [
              "に対して",
              'に対して is "towards, against (someone)". For "in terms of", use に照らして.',
              "にたいして",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-nottotte",
    title: "〜に則って・〜に則った",
    meaning: "in accordance with (rules, tradition)",
    structure: "Noun (ルール, 伝統, 法) + に則って / に則った + Noun",
    related: ["n1-ni-sokushite", "n3-ni-shitagatte"],
    explanation: `
**に則って** (にのっとって) means "in accordance with, following" an established standard: 大会は国際ルールに則って行われる, "the competition is held under international rules".

The noun is a formal norm: ルール, 法, 伝統, しきたり ("custom"), 契約, 手続き. It's common for ceremonies, sports, law and business. Before a noun, it becomes に則った: 古来のしきたりに則った結婚式, "a wedding held according to ancient custom".

It's close to に従って and に基づいて. Compared with に即して, it's about following a set rule, while に即して is about fitting reality.

Careful with the reading: のっとって, not のって. に乗って means "riding on".
`,
    sentences: [
      s(
        "大会は国際ルール{に則って}行われる。",
        "たいかいはこくさいルール{にのっとって}おこなわれる。",
        "The competition is held under international rules.",
        {
          accept: ["に従って", "に基づいて"],
          near: [
            [
              "に乗って",
              'に乗って is "riding on". For "in accordance with", it\'s に則って (のっとって).',
              "にのって",
            ],
          ],
        },
      ),
      s(
        "伝統{に則って}、儀式が行われた。",
        "でんとう{にのっとって}、ぎしきがおこなわれた。",
        "The ceremony was carried out according to tradition.",
        {
          accept: ["に従って"],
          near: [
            [
              "に乗って",
              'に乗って is "riding on". For "according to", it\'s に則って (のっとって).',
              "にのって",
            ],
          ],
        },
      ),
      s(
        "法{に則って}、適切に処理する。",
        "ほう{にのっとって}、てきせつにしょりする。",
        "We'll handle it properly, in accordance with the law.",
        {
          accept: ["に従って", "に基づいて", "に即して"],
          near: [
            [
              "に反して",
              'に反して is "contrary to". For "in accordance with", use に則って.',
              "にはんして",
            ],
          ],
        },
      ),
      s(
        "契約{に則って}、支払いを行う。",
        "けいやく{にのっとって}、しはらいをおこなう。",
        "Payment will be made in accordance with the contract.",
        {
          accept: ["に従って", "に基づいて"],
          near: [
            [
              "に乗って",
              'に乗って is "riding on". For "in accordance with", it\'s に則って (のっとって).',
              "にのって",
            ],
          ],
        },
      ),
      s(
        "二人は古来のしきたり{に則った}結婚式を挙げた。",
        "ふたりはこらいのしきたり{にのっとった}けっこんしきをあげた。",
        "The couple held a wedding according to ancient custom.",
        {
          accept: ["に従った"],
          near: [
            [
              "に反した",
              'に反した is "contrary to". For "according to", use に則った.',
              "にはんした",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-kakawaru",
    title: "〜にかかわる",
    meaning: "affecting, a matter of (life, reputation)",
    structure: "Noun (命, 信用, 将来, 名誉) + にかかわる",
    related: ["n2-ni-kakawarazu", "n3-ni-kanshite"],
    explanation: `
**にかかわる** means something seriously affects something important: それは命にかかわる問題だ, "that's a matter of life and death".

The noun is usually something valuable that could be damaged: 命, 信用 ("trust, credit"), 将来, 名誉 ("honour"), 健康, 安全. The phrase often comes before 問題 or こと, and it signals high stakes.

It can also mean simply "related to, involved in": 教育にかかわる仕事, "a job in education". It's written in kana or 関わる.

Don't confuse it with にかかわらず (N2), "regardless of", which looks almost the same but means the opposite: "it doesn't matter". Also compare に関して (N3), a neutral "about, concerning".
`,
    sentences: [
      s(
        "それは命{にかかわる}問題だ。",
        "それはいのち{にかかわる}もんだいだ。",
        "That's a matter of life and death.",
        {
          accept: ["に関わる"],
          near: [
            [
              "にかかわらず",
              'にかかわらず is "regardless of". For "affecting (life)", use にかかわる.',
            ],
          ],
        },
      ),
      s(
        "会社の信用{にかかわる}ことだから、慎重に対応しよう。",
        "かいしゃのしんよう{にかかわる}ことだから、しんちょうにたいおうしよう。",
        "The company's reputation is at stake, so let's handle this carefully.",
        {
          accept: ["に関わる"],
          near: [
            [
              "にかかわらず",
              'にかかわらず is "regardless of". For "at stake", use にかかわる.',
            ],
          ],
        },
      ),
      s(
        "これは将来{にかかわる}大切な決断だ。",
        "これはしょうらい{にかかわる}たいせつなけつだんだ。",
        "This is an important decision that will affect your future.",
        {
          accept: ["に関わる"],
          near: [
            [
              "に関して",
              'に関して is a neutral "about". For "affecting (the future)", use にかかわる.',
              "にかんして",
            ],
          ],
        },
      ),
      s(
        "名誉{にかかわる}問題なので、黙っていられない。",
        "めいよ{にかかわる}もんだいなので、だまっていられない。",
        "My honour is at stake, so I can't stay silent.",
        {
          accept: ["に関わる"],
          near: [
            [
              "にかかわらず",
              'にかかわらず is "regardless of". For "at stake", use にかかわる.',
            ],
          ],
        },
      ),
      s(
        "将来は教育{にかかわる}仕事がしたい。",
        "しょうらいはきょういく{にかかわる}しごとがしたい。",
        "In the future, I'd like to work in education.",
        {
          accept: ["に関わる", "に関する"],
          near: [
            [
              "にかかわらず",
              'にかかわらず is "regardless of". For "involved in", use にかかわる.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-tokitara",
    title: "〜ときたら",
    meaning: "when it comes to (complaint), honestly, X …",
    structure: "Noun (person or thing) + ときたら",
    related: ["n3-to-ieba", "n1-ttara"],
    explanation: `
**ときたら** picks out someone or something close to you in order to complain about it: うちの夫ときたら、休みの日は一日中寝ている, "honestly, my husband sleeps all day on his days off".

The noun is familiar (a family member, a colleague, a neighbour's dog, the trains), and the second half is an exasperated description of bad behaviour. It's almost always negative, and conversational.

Compare といえば (N3), "speaking of", which just changes the topic neutrally.

The casual ったら (N1) is similar and often interchangeable: うちの子ったら. ときたら sounds a little more like a grown-up grumble.
`,
    sentences: [
      s(
        "うちの夫{ときたら}、休みの日は一日中寝ている。",
        "うちのおっと{ときたら}、やすみのひはいちにちじゅうねている。",
        "Honestly, my husband sleeps all day on his days off.",
        {
          accept: ["ったら"],
          near: [
            [
              "といえば",
              'といえば is a neutral "speaking of". For a complaint, use ときたら.',
            ],
          ],
        },
      ),
      s(
        "最近の電車{ときたら}、いつも遅れている。",
        "さいきんのでんしゃ{ときたら}、いつもおくれている。",
        "The trains these days are always late, I tell you.",
        {
          near: [
            [
              "というと",
              'というと is a neutral "speaking of". For a complaint, use ときたら.',
            ],
          ],
        },
      ),
      s(
        "隣の犬{ときたら}、夜中までほえている。",
        "となりのいぬ{ときたら}、よなかまでほえている。",
        "That dog next door barks until the middle of the night.",
        {
          accept: ["ったら"],
          near: [
            [
              "といえば",
              'といえば is a neutral "speaking of". For a complaint, use ときたら.',
            ],
          ],
        },
      ),
      s(
        "息子の部屋{ときたら}、足の踏み場もない。",
        "むすこのへや{ときたら}、あしのふみばもない。",
        "As for my son's room, you can't even find a place to stand.",
        {
          accept: ["ったら"],
          near: [
            [
              "というと",
              'というと is a neutral "speaking of". For a complaint, use ときたら.',
            ],
          ],
        },
      ),
      s(
        "あの店員{ときたら}、客の話をまるで聞かない。",
        "あのてんいん{ときたら}、きゃくのはなしをまるできかない。",
        "That shop assistant doesn't listen to customers at all.",
        {
          accept: ["ったら"],
          near: [
            [
              "といえば",
              'といえば is a neutral "speaking of". For a complaint, use ときたら.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-itatte-wa",
    title: "〜に至っては",
    meaning: "as for (the most extreme case)",
    structure: "Noun + に至っては",
    related: ["n1-ni-itatte", "n1-ni-itaru-made"],
    explanation: `
**に至っては** singles out the most extreme example in a series, usually of something bad: 英語も苦手だが、数学に至ってはゼロ点だった, "I'm bad at English, but as for maths, I got zero".

The sentence usually starts by describing a general situation (everyone is against it, prices are rising), then に至っては introduces the worst case (my father won't even speak to me, vegetables cost double).

It's formal and written. 至る means "to reach", so it's literally "when it reaches X". Compare に至って (N1), "only when it reached (that point)", and に至るまで, "right down to".

Don't confuse it with にとっては (N3), "for, from the point of view of".
`,
    sentences: [
      s(
        "英語も苦手だが、数学{に至っては}ゼロ点だった。",
        "えいごもにがてだが、すうがく{にいたっては}ゼロてんだった。",
        "I'm bad at English, but as for maths, I got zero.",
        {
          near: [
            [
              "にとっては",
              'にとっては is "for, from the viewpoint of". For "as for (the worst case)", use に至っては.',
            ],
          ],
        },
      ),
      s(
        "家族は皆反対で、父{に至っては}口もきいてくれない。",
        "かぞくはみなはんたいで、ちち{にいたっては}くちもきいてくれない。",
        "My whole family is against it, and my father won't even speak to me.",
        {
          near: [
            [
              "にとっては",
              'にとっては is "for, from the viewpoint of". For "as for (the most extreme)", use に至っては.',
            ],
          ],
        },
      ),
      s(
        "最近は物価が上がり、野菜{に至っては}去年の二倍だ。",
        "さいきんはぶっかがあがり、やさい{にいたっては}きょねんのにばいだ。",
        "Prices are rising, and vegetables are twice what they were last year.",
        {
          near: [
            [
              "に関しては",
              'に関しては is a neutral "regarding". For "as for (the most extreme)", use に至っては.',
              "にかんしては",
            ],
          ],
        },
      ),
      s(
        "クラスの半分が遅刻し、田中君{に至っては}来なかった。",
        "クラスのはんぶんがちこくし、たなかくん{にいたっては}こなかった。",
        "Half the class was late, and Tanaka didn't show up at all.",
        {
          near: [
            [
              "にとっては",
              'にとっては is "for, from the viewpoint of". For "as for (the worst case)", use に至っては.',
            ],
          ],
        },
      ),
      s(
        "どの店も高いが、この店{に至っては}コーヒー一杯が二千円だ。",
        "どのみせもたかいが、このみせ{にいたっては}コーヒーいっぱいがにせんえんだ。",
        "Every shop is expensive, but this one charges two thousand yen for a coffee.",
        {
          near: [
            [
              "に関しては",
              'に関しては is a neutral "regarding". For "as for (the most extreme)", use に至っては.',
              "にかんしては",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-taru",
    title: "〜たる(もの)",
    meaning: "anyone who is (a …) should; as one who is",
    structure: "Noun (role) + たるもの · Noun + たる + 者 / Noun",
    related: ["n3-to-shite", "n1-tomo-arou"],
    explanation: `
**たるもの** sets out the duties or ideals of a role: 教師たるもの、生徒の手本でなければならない, "a teacher must be a model for their students".

たる is a classical form of である, so 教師たる者 is "one who is a teacher". The second half states what such a person must, should or must not do: なければならない, べきだ, てはいけない. The tone is lofty and moralising, like a code of conduct.

Before another noun, it's just たる: 一国のリーダーたる者, "one who leads a nation".

It's a stronger, more old-fashioned version of として (N3). Compare たるや, which only emphasises a topic.
`,
    sentences: [
      s(
        "教師{たるもの}、生徒の手本でなければならない。",
        "きょうし{たるもの}、せいとのてほんでなければならない。",
        "A teacher must be a model for their students.",
        {
          accept: ["たる者"],
          near: [
            [
              "として",
              'として is "as". For the lofty "anyone who is a …", use たるもの.',
            ],
          ],
        },
      ),
      s(
        "医者{たるもの}、患者の命を第一に考えるべきだ。",
        "いしゃ{たるもの}、かんじゃのいのちをだいいちにかんがえるべきだ。",
        "Anyone who is a doctor should put the patient's life first.",
        {
          accept: ["たる者"],
          near: [
            [
              "たるや",
              'たるや emphasises a topic. For "anyone who is a …", use たるもの.',
            ],
          ],
        },
      ),
      s(
        "社会人{たるもの}、時間は守らなければならない。",
        "しゃかいじん{たるもの}、じかんはまもらなければならない。",
        "A working adult must be punctual.",
        {
          accept: ["たる者"],
          near: [
            [
              "として",
              'として is "as". For the lofty "anyone who is a …", use たるもの.',
            ],
          ],
        },
      ),
      s(
        "一国のリーダー{たる}者は、国民の声を聞くべきだ。",
        "いっこくのリーダー{たる}ものは、こくみんのこえをきくべきだ。",
        "One who leads a nation should listen to its people.",
        {
          near: [["たるや", "たるや emphasises a topic. Before 者, use たる."]],
        },
      ),
      s(
        "男{たるもの}、人前で泣いてはいけないと言われて育った。",
        "おとこ{たるもの}、ひとまえでないてはいけないといわれてそだった。",
        "I was brought up being told that a man must never cry in front of others.",
        {
          accept: ["たる者"],
          near: [
            [
              "として",
              'として is "as". For the lofty "anyone who is a …", use たるもの.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-taru-ya",
    title: "〜たるや",
    meaning: "as for (and how!), talk about",
    structure: "Noun + たるや",
    related: ["n1-taru"],
    explanation: `
**たるや** turns a noun into a dramatic topic, then describes how extreme it is: その迫力たるや、すさまじいものだった, "talk about impact, it was overwhelming".

It's used for striking qualities: power, beauty, amount of practice, anger, excitement. The second half is an intense evaluation: すさまじい, 言葉では表せない, プロ並み, 想像を超えていた.

It comes from the classical たる (= である) plus や, and it sounds literary and a bit theatrical, perfect for reviews, essays and dramatic narration.

Compare たるもの, which states the duties of a role, and plain は, which just marks a topic without emphasis.
`,
    sentences: [
      s(
        "その迫力{たるや}、すさまじいものだった。",
        "そのはくりょく{たるや}、すさまじいものだった。",
        "Talk about impact, it was overwhelming.",
        {
          near: [
            [
              "たるもの",
              'たるもの is "anyone who is a …". For "as for (and how!)", use たるや.',
            ],
          ],
        },
      ),
      s(
        "彼の練習量{たるや}、プロ並みだ。",
        "かれのれんしゅうりょう{たるや}、プロなみだ。",
        "As for how much he practises, it's on a par with a pro.",
        {
          near: [
            [
              "たるもの",
              'たるもの is "anyone who is a …". For "as for (and how!)", use たるや.',
            ],
          ],
        },
      ),
      s(
        "その景色の美しさ{たるや}、言葉では表せない。",
        "そのけしきのうつくしさ{たるや}、ことばではあらわせない。",
        "The beauty of that view is beyond words.",
        {
          near: [
            [
              "というと",
              'というと is "speaking of". For a dramatic "as for", use たるや.',
            ],
          ],
        },
      ),
      s(
        "彼女の怒り{たるや}、想像を超えていた。",
        "かのじょのいかり{たるや}、そうぞうをこえていた。",
        "Her anger was beyond anything I'd imagined.",
        {
          near: [
            [
              "たるもの",
              'たるもの is "anyone who is a …". For "as for (and how!)", use たるや.',
            ],
          ],
        },
      ),
      s(
        "会場の熱気{たるや}、すごいものだった。",
        "かいじょうのねっき{たるや}、すごいものだった。",
        "The excitement in the hall was something else.",
        {
          near: [
            [
              "というと",
              'というと is "speaking of". For a dramatic "as for", use たるや.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-wa-sateoki",
    title: "〜はさておき",
    meaning: "setting aside, leaving aside",
    structure: "Noun + はさておき · 何はさておき",
    related: ["n2-wa-tomokaku", "n2-wa-betsu-to-shite"],
    explanation: `
**はさておき** sets one topic aside to focus on a more important one: 冗談はさておき、本題に入りましょう, "joking aside, let's get down to business".

It's close to はともかく (N2) and は別として (N2), and often interchangeable. はさておき feels like deliberately postponing a topic for now, often in conversation or meetings.

**何はさておき** is a fixed phrase meaning "before anything else, first of all": 何はさておき、まずは食事にしよう, "first things first, let's eat".

さておく means "to put aside". Compare はもちろん (N2), "of course (and)", which includes rather than sets aside.
`,
    sentences: [
      s(
        "冗談{はさておき}、本題に入りましょう。",
        "じょうだん{はさておき}、ほんだいにはいりましょう。",
        "Joking aside, let's get down to business.",
        {
          accept: ["はともかく", "は別として"],
          near: [
            [
              "はもちろん",
              'はもちろん is "of course (and)". For "setting aside", use はさておき.',
            ],
          ],
        },
      ),
      s(
        "値段{はさておき}、デザインが気に入らない。",
        "ねだん{はさておき}、デザインがきにいらない。",
        "Leaving the price aside, I don't like the design.",
        {
          accept: ["はともかく", "は別として"],
          near: [
            [
              "はもちろん",
              'はもちろん is "of course (and)". For "leaving aside", use はさておき.',
            ],
          ],
        },
      ),
      s(
        "何{はさておき}、まずは食事にしよう。",
        "なに{はさておき}、まずはしょくじにしよう。",
        "First things first, let's eat.",
        {
          accept: ["はともかく"],
          near: [
            [
              "はもちろん",
              'はもちろん is "of course (and)". The phrase for "first things first" is 何はさておき.',
            ],
          ],
        },
      ),
      s(
        "結果{はさておき}、よく頑張った。",
        "けっか{はさておき}、よくがんばった。",
        "Whatever the result, you did really well.",
        {
          accept: ["はともかく", "は別として"],
          near: [
            [
              "はおろか",
              'はおろか is "let alone". For "setting aside", use はさておき.',
            ],
          ],
        },
      ),
      s(
        "細かいこと{はさておき}、大筋では賛成だ。",
        "こまかいこと{はさておき}、おおすじではさんせいだ。",
        "Leaving the details aside, I agree in principle.",
        {
          accept: ["はともかく", "は別として"],
          near: [
            [
              "はおろか",
              'はおろか is "let alone". For "leaving aside", use はさておき.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ni-okaremashite-wa",
    title: "〜におかれましては",
    meaning: "(honorific) as for you, for (the honoured person)",
    structure: "Honoured person / organisation + におかれましては",
    related: ["n4-sonkeigo"],
    explanation: `
**におかれましては** is a highly respectful topic marker for someone you're addressing or honouring, used almost only in formal letters, speeches and business greetings: 皆様におかれましては、ますますご健勝のこととお喜び申し上げます, "we are delighted to hear that you are all in excellent health".

It replaces a plain は or には, and it's typically followed by set phrases about the person's health or prosperity: ご健勝, ご清栄 (for companies), お元気でお過ごし, or ご自愛ください.

You never use it about yourself or your own side. It comes from the honorific passive of 置く.

Compare につきましては, "regarding (a matter)", which is polite but about topics, not people.
`,
    sentences: [
      s(
        "皆様{におかれましては}、ますますご健勝のこととお喜び申し上げます。",
        "みなさま{におかれましては}、ますますごけんしょうのこととおよろこびもうしあげます。",
        "We are delighted to hear that you are all in excellent health.",
        {
          near: [
            [
              "につきましては",
              'につきましては is "regarding (a matter)". For an honoured person, use におかれましては.',
            ],
          ],
        },
      ),
      s(
        "先生{におかれましては}、お元気でお過ごしのことと存じます。",
        "せんせい{におかれましては}、おげんきでおすごしのこととぞんじます。",
        "I trust that you are keeping well, Professor.",
        {
          near: [
            [
              "につきましては",
              'につきましては is "regarding (a matter)". For an honoured person, use におかれましては.',
            ],
          ],
        },
      ),
      s(
        "貴社{におかれましては}、ますますご清栄のこととお喜び申し上げます。",
        "きしゃ{におかれましては}、ますますごせいえいのこととおよろこびもうしあげます。",
        "We are pleased to hear of your company's continued prosperity.",
        {
          near: [
            [
              "にとりましては",
              'にとりましては is "for (from the viewpoint of)". For an honoured addressee, use におかれましては.',
            ],
          ],
        },
      ),
      s(
        "皆様{におかれましては}、くれぐれもご自愛ください。",
        "みなさま{におかれましては}、くれぐれもごじあいください。",
        "Please take good care of yourselves, everyone.",
        {
          near: [
            [
              "につきましては",
              'につきましては is "regarding (a matter)". For an honoured person, use におかれましては.',
            ],
          ],
        },
      ),
      s(
        "社長{におかれましては}、ご多忙の中お越しいただき、ありがとうございます。",
        "しゃちょう{におかれましては}、ごたぼうのなかおこしいただき、ありがとうございます。",
        "Thank you, President, for coming despite your busy schedule.",
        {
          near: [
            [
              "にとりましては",
              'にとりましては is "for (from the viewpoint of)". For an honoured addressee, use におかれましては.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-ttara",
    title: "〜ったら・〜ってば",
    meaning: "honestly, (person)!; I told you!",
    structure:
      "Noun + ったら (exasperated topic) · Sentence + ってば / ったら (insistence)",
    related: ["n1-tokitara", "n3-contractions"],
    explanation: `
**ったら** and **ってば** are casual particles full of feeling.

After a person, **ったら** marks an exasperated or affectionate complaint: もう、お母さんったら、勝手に部屋に入らないでよ, "honestly, Mum, don't just come into my room!". It's the casual cousin of ときたら.

At the end of a sentence, **ってば** (or ったら) insists impatiently, when you've already said something: 分かったってば, "I said I get it!", or 早く行こうってば, "come on, let's go!".

Both come from という plus a conditional, "if I say…". They're spoken, informal and common in anime, manga and family conversation.

Don't confuse them with plain って, which quotes or means "called".
`,
    sentences: [
      s(
        "もう、お母さん{ったら}、勝手に部屋に入らないでよ。",
        "もう、おかあさん{ったら}、かってにへやにはいらないでよ。",
        "Honestly, Mum, don't just come into my room!",
        {
          accept: ["ってば"],
          near: [
            [
              "って",
              'って quotes or means "called". For an exasperated "honestly, (person)!", use ったら.',
            ],
          ],
        },
      ),
      s(
        "分かった{ってば}。今やるから。",
        "わかった{ってば}。いまやるから。",
        "I said I get it! I'm doing it now.",
        {
          accept: ["ったら"],
          near: [
            [
              "って",
              'って quotes or means "called". For an impatient "I told you!", use ってば.',
            ],
          ],
        },
      ),
      s(
        "早く行こう{ってば}。",
        "はやくいこう{ってば}。",
        "Come on, let's go!",
        {
          accept: ["ったら"],
          near: [
            [
              "って",
              'って quotes or means "called". For an impatient "come on!", use ってば.',
            ],
          ],
        },
      ),
      s(
        "うちの子{ったら}、また宿題を忘れたのよ。",
        "うちのこ{ったら}、またしゅくだいをわすれたのよ。",
        "Honestly, my kid's forgotten his homework again.",
        {
          accept: ["ときたら"],
          near: [
            [
              "って",
              'って quotes or means "called". For an exasperated "honestly, (person)", use ったら.',
            ],
          ],
        },
      ),
      s(
        "大丈夫だ{ってば}。心配しないで。",
        "だいじょうぶだ{ってば}。しんぱいしないで。",
        "I told you, I'm fine. Don't worry.",
        {
          accept: ["ったら"],
          near: [
            [
              "って",
              'って quotes or means "called". For an impatient "I told you", use ってば.',
            ],
          ],
        },
      ),
    ],
  }),
];
