import { point, s } from "../../build";

/** Where, over what span, on what basis, and within what limits. */

export const scope = [
  point({
    id: "n2-ni-oite",
    title: "〜において・〜における",
    meaning: "in, at (formal)",
    structure: "Noun + において · Noun + における + Noun",
    related: ["n3-ni-kanshite", "n2-ni-watatte"],
    explanation: `
**において** is a formal version of で for places, times and fields: 会議は本社において行われます, "the meeting will be held at head office".

It's used in notices, speeches, news and academic writing. In conversation, で is natural; において would sound stiff.

Besides physical places, it marks areas of activity: 教育において, "in education"; 研究の分野において, "in the field of research".

Before a noun, it becomes **における**: 現代社会における問題, "problems in modern society". This form is very common in titles and headlines.

Don't confuse it with にとって (a point of view) or によって ("by"). において only says where or in what domain something happens.
`,
    sentences: [
      s("会議は本社{において}行われます。", "かいぎはほんしゃ{において}おこなわれます。", "The meeting will be held at head office.", {
        accept: ["にて"],
        near: [["で", "で is fine in speech. In formal notices, use において."]],
      }),
      s("現代社会{における}問題について考える。", "げんだいしゃかい{における}もんだいについてかんがえる。", "We'll think about the problems of modern society.", {
        near: [["において", "Before a noun, use における."]],
      }),
      s("日本{において}、少子化は大きな問題だ。", "にほん{において}、しょうしかはおおきなもんだいだ。", "In Japan, the falling birth rate is a major issue.", {
        near: [["によって", "によって is \"by\". For \"in\", use において."]],
      }),
      s("教育{において}最も大切なことは何だろうか。", "きょういく{において}もっともたいせつなことはなんだろうか。", "What is most important in education?", {
        near: [["にとって", "にとって is a point of view. For \"in the field of\", use において."]],
      }),
      s("研究の分野{において}、彼の右に出る者はいない。", "けんきゅうのぶんや{において}、かれのみぎにでるものはいない。", "In the field of research, no one can match him.", {
        near: [["で", "で is fine in speech. In formal writing, use において."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kakete",
    title: "〜にかけて",
    meaning: "from … through to (a rough span)",
    structure: "Noun から Noun + にかけて",
    related: ["n2-ni-watatte", "n5-kara-made"],
    explanation: `
**にかけて** marks a span of time or space with fuzzy edges: 昨日の夜から今朝にかけて、雪が降った, "it snowed from last night into this morning".

It usually pairs with から: AからBにかけて. The span is approximate: the snow didn't stop at an exact moment, it just continued somewhere in that range. That's the difference from から〜まで, which has clear start and end points.

It's common in weather forecasts, news and descriptions of regions: 九州から関東にかけて, "from Kyushu across to Kanto". It also works for the body: 首から肩にかけて痛い, "it hurts from my neck to my shoulders".

The unrelated にかけては means "when it comes to" and appears later in this deck.
`,
    sentences: [
      s("昨日の夜から今朝{にかけて}、雪が降った。", "きのうのよるからけさ{にかけて}、ゆきがふった。", "It snowed from last night through to this morning.", {
        near: [["まで", "That works, but for a rough span, use にかけて."]],
      }),
      s("九州から関東{にかけて}、大雨が予想されている。", "きゅうしゅうからかんとう{にかけて}、おおあめがよそうされている。", "Heavy rain is forecast from Kyushu across to Kanto.", {
        near: [["までに", "That's a deadline. For a span of area, use にかけて."]],
      }),
      s("年末から年始{にかけて}、店は休みです。", "ねんまつからねんし{にかけて}、みせはやすみです。", "The shop is closed over the New Year period.", {
        near: [["まで", "That works, but for a rough span, use にかけて."]],
      }),
      s("春から夏{にかけて}、この花が咲く。", "はるからなつ{にかけて}、このはながさく。", "This flower blooms from spring into summer.", {
        near: [["まで", "That works, but for a rough span, use にかけて."]],
      }),
      s("首から肩{にかけて}、痛みがある。", "くびからかた{にかけて}、いたみがある。", "I have pain from my neck down to my shoulders.", {
        near: [["について", "について is \"about\". For a span, use にかけて."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-watatte",
    title: "〜にわたって・〜にわたる",
    meaning: "over, throughout (a whole span)",
    structure: "Noun (period, area, number) + にわたって / にわたり · にわたる + Noun",
    related: ["n2-ni-kakete", "n2-wo-tsuujite"],
    explanation: `
**にわたって** stresses that something covers a whole span, often a long or wide one: 会議は三時間にわたって続いた, "the meeting went on for a full three hours".

It follows nouns of time (三時間, 二年, 長年), area (全国, 広い範囲) or number (数回, 十回). The emphasis is on the scale: all of it, from end to end.

Before a noun, it becomes **にわたる**: 十年にわたる研究, "ten years of research". In formal writing, にわたり replaces にわたって.

Compare にかけて, which marks a rough range between two points (AからBにかけて). にわたって takes a single span and says "the whole of it".
`,
    sentences: [
      s("会議は三時間{にわたって}続いた。", "かいぎはさんじかん{にわたって}つづいた。", "The meeting went on for a full three hours.", {
        accept: ["にわたり"],
        near: [["にかけて", "にかけて is \"from … to\". For \"over the whole span\", use にわたって."]],
      }),
      s("工事は二年{にわたって}行われる。", "こうじはにねん{にわたって}おこなわれる。", "Construction will be carried out over two years.", {
        accept: ["にわたり"],
        near: [["にかけて", "にかけて is \"from … to\". For \"over the whole span\", use にわたって."]],
      }),
      s("全国{にわたって}、雨が降った。", "ぜんこく{にわたって}、あめがふった。", "It rained right across the country.", {
        accept: ["にわたり"],
        near: [["において", "において is where something happens. For \"right across\", use にわたって."]],
      }),
      s("十年{にわたる}研究の結果が発表された。", "じゅうねん{にわたる}けんきゅうのけっかがはっぴょうされた。", "The results of ten years of research were announced.", {
        near: [["にわたって", "Before a noun, use にわたる."]],
      }),
      s("彼は長年{にわたって}、この町のために働いてきた。", "かれはながねん{にわたって}、このまちのためにはたらいてきた。", "He has worked for this town for many years.", {
        accept: ["にわたり"],
        near: [["について", "について is \"about\". For \"over many years\", use にわたって."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-tsuujite",
    title: "〜を通じて・〜を通して",
    meaning: "through, via; throughout",
    structure: "Noun + を通じて / を通して",
    related: ["n3-ni-yotte", "n2-ni-watatte"],
    explanation: `
**を通じて** and **を通して** have two meanings.

**Through, via**: a person, a medium or an experience that connects or teaches you: 友人を通じて彼女と知り合った, "I met her through a friend"; 仕事を通して多くのことを学んだ, "I learned a lot through my work".

**Throughout** a period: この地域は一年を通じて暖かい, "this region is warm all year round".

The two are largely interchangeable. を通して is a little more common for deliberate means (through a secretary, through practice); を通じて for connections and channels (through the internet, through a friend).

Compare によって, "by (means of)", which is more about method than channel.
`,
    sentences: [
      s("友人{を通じて}、彼女と知り合った。", "ゆうじん{をつうじて}、かのじょとしりあった。", "I got to know her through a friend.", {
        accept: ["を通して", "をとおして"],
        near: [["によって", "That's \"by\". For \"through (someone)\", use を通じて."]],
      }),
      s("この地域は一年{を通じて}暖かい。", "このちいきはいちねん{をつうじて}あたたかい。", "This region is warm all year round.", {
        accept: ["を通して", "をとおして"],
        near: [["にわたって", "That works too. This point practises を通じて."]],
      }),
      s("インターネット{を通じて}、世界中の人と話せる。", "インターネット{をつうじて}、せかいじゅうのひととはなせる。", "Through the internet, you can talk to people all over the world.", {
        accept: ["を通して", "をとおして"],
        near: [["によって", "That's \"by\". For \"through, via\", use を通じて."]],
      }),
      s("仕事{を通して}、多くのことを学んだ。", "しごと{をとおして}、おおくのことをまなんだ。", "I learned a lot through my work.", {
        accept: ["を通じて", "をつうじて"],
        near: [["について", "について is \"about\". For \"through\", use を通して."]],
      }),
      s("秘書{を通して}、社長に連絡した。", "ひしょ{をとおして}、しゃちょうにれんらくした。", "I contacted the president through their secretary.", {
        accept: ["を通じて", "をつうじて"],
        near: [["によって", "That's \"by\". For \"through (someone)\", use を通して."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-oujite",
    title: "〜に応じて",
    meaning: "according to, in line with, as needed",
    structure: "Noun + に応じて · に応じた + Noun",
    related: ["n3-ni-yotte", "n2-ni-kotaete"],
    explanation: `
**に応じて** says something changes to match something else: 収入に応じて、税金の額が変わる, "the amount of tax varies according to income".

The first noun is a variable (income, season, ability, a customer's wishes) and the second half adjusts to it. It's like によって ("depending on"), but with the sense of deliberately responding or matching.

**必要に応じて**, "as needed", is a very common set phrase in instructions and business writing.

Before a noun, it becomes に応じた: 能力に応じた仕事, "work that matches your abilities". Don't confuse it with に応えて, "in response to (hopes, cheers)", which is written with a different kanji.
`,
    sentences: [
      s("収入{に応じて}、税金の額が変わる。", "しゅうにゅう{におうじて}、ぜいきんのがくがかわる。", "The amount of tax varies according to income.", {
        near: [["によって", "That works too. に応じて is \"in proportion to\"."]],
      }),
      s("お客様の希望{に応じて}、料理を作ります。", "おきゃくさまのきぼう{におうじて}、りょうりをつくります。", "We cook to suit our customers' wishes.", {
        near: [["について", "について is \"about\". For \"to suit\", use に応じて."]],
      }),
      s("季節{に応じて}、メニューを変えている。", "きせつ{におうじて}、メニューをかえている。", "We change the menu with the seasons.", {
        near: [["について", "について is \"about\". For \"in line with\", use に応じて."]],
      }),
      s("能力{に応じた}仕事をする。", "のうりょく{におうじた}しごとをする。", "Do work that matches your abilities.", {
        near: [["に応じて", "Before a noun, use に応じた."]],
      }),
      s("必要{に応じて}、資料を追加します。", "ひつよう{におうじて}、しりょうをついかします。", "We'll add more materials as needed.", {
        near: [["のために", "That's \"for the need\". For \"as needed\", use に応じて."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-motozuite",
    title: "〜に基づいて",
    meaning: "based on, in accordance with",
    structure: "Noun + に基づいて / に基づき · に基づく + Noun",
    related: ["n2-wo-moto-ni", "n2-ni-sotte"],
    explanation: `
**に基づいて** says something is grounded in facts, rules or data: この映画は実話に基づいて作られた, "this film is based on a true story".

The basis is usually something objective and authoritative: a law, research results, data, a contract, experience. The second half is a judgement, a plan or something produced from it.

Before a noun, it becomes **に基づく**: データに基づく分析, "data-based analysis". In formal writing, に基づき.

It's close to をもとに. に基づいて stresses staying faithful to a standard or evidence; をもとに is looser, more about raw material you build from.
`,
    sentences: [
      s("この映画は実話{に基づいて}作られた。", "このえいがはじつわ{にもとづいて}つくられた。", "This film is based on a true story.", {
        accept: ["に基づき"],
        near: [["をもとに", "That works too. This point practises に基づいて."]],
      }),
      s("調査の結果{に基づいて}、計画を立てた。", "ちょうさのけっか{にもとづいて}、けいかくをたてた。", "We made a plan based on the survey results.", {
        accept: ["に基づき"],
        near: [["によると", "によると is a source. For \"based on\", use に基づいて."]],
      }),
      s("法律{に基づいて}、判断する。", "ほうりつ{にもとづいて}、はんだんする。", "We'll decide in accordance with the law.", {
        accept: ["に基づき"],
        near: [["について", "について is \"about\". For \"in accordance with\", use に基づいて."]],
      }),
      s("データ{に基づく}分析が必要だ。", "データ{にもとづく}ぶんせきがひつようだ。", "We need an analysis based on data.", {
        near: [["に基づいて", "Before a noun, use に基づく."]],
      }),
      s("経験{に基づいて}、アドバイスをした。", "けいけん{にもとづいて}、アドバイスをした。", "I gave advice based on my experience.", {
        accept: ["に基づき"],
        near: [["によって", "That's \"by\". For \"based on\", use に基づいて."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-moto-ni",
    title: "〜をもとに(して)",
    meaning: "based on, using as material",
    structure: "Noun + をもとに(して) · をもとにした + Noun",
    related: ["n2-ni-motozuite"],
    explanation: `
**をもとに** means using something as the source or material for making something new: この小説は作者の体験をもとに書かれた, "this novel was written based on the author's own experiences".

The second half is usually a creative or productive verb: 書く, 作る, 描く, 開発する. The new thing may differ quite a bit from its source.

Before a noun, it becomes **をもとにした**: 昔話をもとにした映画, "a film based on a folk tale". The して in をもとにして is optional.

Compare に基づいて, which is about staying faithful to rules or evidence. をもとに is about building from raw material. It's often written with kanji: を元に.
`,
    sentences: [
      s("この小説は作者の体験{をもとに}書かれた。", "このしょうせつはさくしゃのたいけん{をもとに}かかれた。", "This novel was written based on the author's own experiences.", {
        accept: ["をもとにして", "を元に"],
        near: [["に基づいて", "That works too. をもとに stresses using it as material."]],
      }),
      s("アンケートの結果{をもとに}、新しい商品を開発した。", "アンケートのけっか{をもとに}、あたらしいしょうひんをかいはつした。", "We developed a new product based on the survey results.", {
        accept: ["をもとにして", "を元に"],
        near: [["によって", "That's \"by\". For \"based on\", use をもとに."]],
      }),
      s("昔話{をもとにした}映画を見た。", "むかしばなし{をもとにした}えいがをみた。", "I saw a film based on an old folk tale.", {
        near: [["をもとに", "Before a noun, use をもとにした."]],
      }),
      s("写真{をもとに}、絵を描いた。", "しゃしん{をもとに}、えをかいた。", "I painted a picture from a photograph.", {
        accept: ["をもとにして", "を元に"],
        near: [["として", "として is \"as\". For \"using as a basis\", use をもとに."]],
      }),
      s("集めた情報{をもとに}、レポートを書いた。", "あつめたじょうほう{をもとに}、レポートをかいた。", "I wrote the report based on the information I'd gathered.", {
        accept: ["をもとにして", "を元に"],
        near: [["として", "として is \"as\". For \"using as a basis\", use をもとに."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-sotte",
    title: "〜に沿って",
    meaning: "along; in line with",
    structure: "Noun + に沿って / に沿い · に沿った + Noun",
    related: ["n2-ni-motozuite", "n3-ni-shitagatte"],
    explanation: `
**に沿って** literally means running alongside something: 川に沿って、桜の木が並んでいる, "cherry trees line the river". It's used for roads, rivers, coasts and walls.

Figuratively, it means acting in line with a plan, a policy or someone's wishes: 計画に沿って作業を進めます, "we'll proceed with the work according to the plan".

Before a noun, it becomes **に沿った**: 会社の方針に沿った行動, "conduct in line with company policy".

Compare にしたがって, "following (instructions)", which implies obeying, and に応じて, which adjusts to something variable. に沿って is about staying on course with something that's already set.
`,
    sentences: [
      s("川{に沿って}、桜の木が並んでいる。", "かわ{にそって}、さくらのきがならんでいる。", "Cherry trees line the river.", {
        accept: ["に沿い"],
        near: [["に向かって", "That's \"towards\". For \"along\", use に沿って."]],
      }),
      s("計画{に沿って}、作業を進めます。", "けいかく{にそって}、さぎょうをすすめます。", "We'll proceed with the work according to the plan.", {
        accept: ["に沿い"],
        near: [["について", "について is \"about\". For \"in line with\", use に沿って."]],
      }),
      s("お客様のご要望{に沿って}、デザインを変更しました。", "おきゃくさまのごようぼう{にそって}、デザインをへんこうしました。", "We changed the design in line with the customer's wishes.", {
        near: [["に応じて", "That works too. This point practises に沿って."]],
      }),
      s("この道{に沿って}まっすぐ行くと、駅に着く。", "このみち{にそって}まっすぐいくと、えきにつく。", "Go straight along this road and you'll reach the station.", {
        near: [["を通じて", "を通じて is \"through, via\". For \"along\", use に沿って."]],
      }),
      s("会社の方針{に沿った}行動をとってください。", "かいしゃのほうしん{にそった}こうどうをとってください。", "Please act in line with company policy.", {
        near: [["に沿って", "Before a noun, use に沿った."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-megutte",
    title: "〜をめぐって",
    meaning: "over, concerning (a dispute)",
    structure: "Noun + をめぐって / をめぐり · をめぐる + Noun",
    related: ["n3-ni-kanshite", "n3-ni-tsuite"],
    explanation: `
**をめぐって** names the issue at the centre of a dispute, debate or competition: 遺産をめぐって、兄弟が争っている, "the siblings are fighting over the inheritance". めぐる means "to go around", so the image is of people circling one issue.

The second half is a verb of conflict or discussion: 争う, 対立する, 議論する, 意見が分かれる. It's typical of news reports.

Before a noun, it becomes **をめぐる**: その事件をめぐる報道, "coverage surrounding the incident". In formal writing, をめぐり.

Compare について and に関して, which are neutral "about". をめぐって implies there are different sides.
`,
    sentences: [
      s("遺産{をめぐって}、兄弟が争っている。", "いさん{をめぐって}、きょうだいがあらそっている。", "The siblings are fighting over the inheritance.", {
        accept: ["をめぐり"],
        near: [["について", "について is neutral. For a dispute over something, use をめぐって."]],
      }),
      s("新しい空港の建設{をめぐって}、議論が続いている。", "あたらしいくうこうのけんせつ{をめぐって}、ぎろんがつづいている。", "The debate over building the new airport continues.", {
        accept: ["をめぐり"],
        near: [["について", "について is neutral. For a debate over something, use をめぐって."]],
      }),
      s("その事件{をめぐる}報道が増えている。", "そのじけん{をめぐる}ほうどうがふえている。", "Coverage surrounding the incident is growing.", {
        near: [["をめぐって", "Before a noun, use をめぐる."]],
      }),
      s("予算{をめぐって}、意見が分かれた。", "よさん{をめぐって}、いけんがわかれた。", "Opinions were divided over the budget.", {
        accept: ["をめぐり"],
        near: [["に関して", "That's neutral. For a disagreement over something, use をめぐって."]],
      }),
      s("領土{をめぐる}問題は複雑だ。", "りょうど{をめぐる}もんだいはふくざつだ。", "Territorial disputes are complicated.", {
        near: [["をめぐって", "Before a noun, use をめぐる."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kagitte",
    title: "〜に限って・〜に限り",
    meaning: "of all times/people; only (limited to)",
    structure: "Noun + に限って · Noun + に限り",
    related: ["n2-ni-kagirazu", "n2-ni-kagiru"],
    explanation: `
**に限って** has two uses.

**Of all times**: a complaint that bad luck strikes at the worst moment: 急いでいる時に限って、電車が遅れる, "it's always when I'm in a hurry that the train is late".

**Of all people**: trust that someone would never do something: うちの子に限って、そんなことをするはずがない, "my child, of all people, would never do such a thing".

**に限り** is "only, limited to", common in shops and notices: 本日に限り、全品半額です, "today only, everything is half price"; 先着百名様に限り, "first hundred customers only".

Its opposite is に限らず, "not only".
`,
    sentences: [
      s("急いでいる時{に限って}、電車が遅れる。", "いそいでいるとき{にかぎって}、でんしゃがおくれる。", "It's always when I'm in a hurry that the train's late.", {
        near: [["に限らず", "That's \"not only\". For \"of all times\", use に限って."]],
      }),
      s("うちの子{に限って}、そんなことをするはずがない。", "うちのこ{にかぎって}、そんなことをするはずがない。", "My child, of all people, would never do such a thing.", {
        near: [["に限らず", "That's \"not only\". For \"of all people\", use に限って."]],
      }),
      s("傘を持っていない日{に限って}、雨が降る。", "かさをもっていないひ{にかぎって}、あめがふる。", "It always rains on the one day I don't have an umbrella.", {
        near: [["に限らず", "That's \"not only\". For \"of all days\", use に限って."]],
      }),
      s("本日{に限り}、全品半額です。", "ほんじつ{にかぎり}、ぜんぴんはんがくです。", "Today only, everything is half price.", {
        accept: ["に限って"],
        near: [["だけに", "だけに is \"all the more because\". For \"today only\", use に限り."]],
      }),
      s("先着百名様{に限り}、プレゼントを差し上げます。", "せんちゃくひゃくめいさま{にかぎり}、プレゼントをさしあげます。", "A gift will be given to the first hundred customers only.", {
        accept: ["に限って"],
        near: [["まで", "まで is \"up to\". For \"limited to\", use に限り."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kagirazu",
    title: "〜に限らず",
    meaning: "not only, not limited to",
    structure: "Noun + に限らず … も",
    related: ["n2-ni-kagitte", "n3-dake-de-naku", "n2-nomi-narazu"],
    explanation: `
**に限らず** means "not limited to", widening the scope: この店は若者に限らず、お年寄りにも人気がある, "this shop is popular not only with young people but with older people too".

The second half usually has も, adding the wider group, or a word like 誰でも, 何でも, どこでも: スポーツに限らず、何でも練習が大切だ, "not just in sport, but in anything, practice is key".

It's a more formal equivalent of だけでなく, and very common in announcements and writing.

It's the opposite of に限って and に限り, which narrow the scope to one case. Before a noun, it becomes に限らない or に限らず, as in 若者に限らない問題, "a problem not limited to young people".
`,
    sentences: [
      s("この店は若者{に限らず}、お年寄りにも人気がある。", "このみせはわかもの{にかぎらず}、おとしよりにもにんきがある。", "This shop is popular not only with young people but with older people too.", {
        accept: ["だけでなく"],
        near: [["に限って", "That's \"of all\". For \"not only\", use に限らず."]],
      }),
      s("日本{に限らず}、多くの国で少子化が進んでいる。", "にほん{にかぎらず}、おおくのくにでしょうしかがすすんでいる。", "Not only in Japan, but in many countries, the birth rate is falling.", {
        accept: ["だけでなく"],
        near: [["に限って", "That's \"of all\". For \"not only\", use に限らず."]],
      }),
      s("週末{に限らず}、平日も込んでいる。", "しゅうまつ{にかぎらず}、へいじつもこんでいる。", "It's crowded not only at weekends but on weekdays too.", {
        accept: ["だけでなく"],
        near: [["に限って", "That's \"of all\". For \"not only\", use に限らず."]],
      }),
      s("このルールは学生{に限らず}、先生にも適用される。", "このルールはがくせい{にかぎらず}、せんせいにもてきようされる。", "This rule applies not only to students but to teachers as well.", {
        accept: ["だけでなく"],
        near: [["に対して", "That's \"towards\". For \"not only\", use に限らず."]],
      }),
      s("スポーツ{に限らず}、何でも練習が大切だ。", "スポーツ{にかぎらず}、なんでもれんしゅうがたいせつだ。", "Not just in sport, but in anything, practice is what matters.", {
        near: [["に限って", "That's \"of all\". For \"not only\", use に限らず."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-towazu",
    title: "〜を問わず",
    meaning: "regardless of, whether … or",
    structure: "Noun + を問わず",
    related: ["n2-ni-kakawarazu", "n2-ni-kagirazu"],
    explanation: `
**を問わず** means a factor makes no difference: 年齢を問わず、誰でも参加できます, "anyone can take part, regardless of age". 問う means "to ask" or "to question", so it's "without asking about".

It usually follows a noun that implies a range of values: 年齢 (age), 国籍 (nationality), 季節 (season), or pairs of opposites: 男女 (men and women), 昼夜 (day and night), 経験の有無 (with or without experience).

It's common in job adverts, event notices and rules. The meaning is very close to にかかわらず, which also works after whole clauses (するかしないか).

Compare によって, "depending on", which is the opposite: the factor does make a difference.
`,
    sentences: [
      s("年齢{を問わず}、誰でも参加できます。", "ねんれい{をとわず}、だれでもさんかできます。", "Anyone can take part, regardless of age.", {
        accept: ["にかかわらず", "に関係なく"],
        near: [["について", "について is \"about\". For \"regardless of\", use を問わず."]],
      }),
      s("男女{を問わず}、応募できます。", "だんじょ{をとわず}、おうぼできます。", "Both men and women can apply.", {
        accept: ["にかかわらず"],
        near: [["によって", "That's \"depending on\", the opposite. For \"regardless of\", use を問わず."]],
      }),
      s("経験の有無{を問わず}、歓迎します。", "けいけんのうむ{をとわず}、かんげいします。", "Everyone is welcome, with or without experience.", {
        accept: ["にかかわらず"],
        near: [["によって", "That's \"depending on\", the opposite. For \"regardless of\", use を問わず."]],
      }),
      s("この公園は季節{を問わず}、楽しめる。", "このこうえんはきせつ{をとわず}、たのしめる。", "You can enjoy this park in any season.", {
        accept: ["にかかわらず"],
        near: [["ごとに", "ごとに is \"each\". For \"regardless of\", use を問わず."]],
      }),
      s("国籍{を問わず}、多くの人が働いている。", "こくせき{をとわず}、おおくのひとがはたらいている。", "Many people of every nationality work here.", {
        accept: ["にかかわらず"],
        near: [["によって", "That's \"depending on\", the opposite. For \"regardless of\", use を問わず."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kakawarazu",
    title: "〜にかかわらず",
    meaning: "regardless of, whether or not",
    structure: "Noun · Verb dictionary form + ないか · A か B か + にかかわらず",
    related: ["n2-wo-towazu", "n2-ni-mo-kakawarazu"],
    explanation: `
**にかかわらず** says something is unaffected by a factor: 天候にかかわらず、試合は行われます, "the match will go ahead regardless of the weather".

Besides nouns, it follows pairs of options: 参加するかしないかにかかわらず, "whether or not you take part"; 好き嫌いにかかわらず, "like it or not"; 金額の大小にかかわらず, "large or small".

It's formal and common in notices and rules. Written with kanji, it's に関わらず or に拘らず.

Be careful with **にもかかわらず**: the extra も changes it to "despite, even though", which appears later in this deck. にかかわらず is "regardless"; にもかかわらず is "in spite of".
`,
    sentences: [
      s("天候{にかかわらず}、試合は行われます。", "てんこう{にかかわらず}、しあいはおこなわれます。", "The match will go ahead regardless of the weather.", {
        accept: ["に関わらず", "を問わず"],
        near: [["にもかかわらず", "にもかかわらず is \"despite\". For \"regardless of\", use にかかわらず."]],
      }),
      s("参加するかしないか{にかかわらず}、返事をください。", "さんかするかしないか{にかかわらず}、へんじをください。", "Please reply whether or not you're coming.", {
        accept: ["に関わらず"],
        near: [["にもかかわらず", "にもかかわらず is \"despite\". For \"whether or not\", use にかかわらず."]],
      }),
      s("経験の有無{にかかわらず}、応募できます。", "けいけんのうむ{にかかわらず}、おうぼできます。", "You can apply regardless of experience.", {
        accept: ["に関わらず", "を問わず"],
        near: [["にもかかわらず", "にもかかわらず is \"despite\". For \"regardless of\", use にかかわらず."]],
      }),
      s("好き嫌い{にかかわらず}、これは食べなければならない。", "すききらい{にかかわらず}、これはたべなければならない。", "Like it or not, you have to eat this.", {
        accept: ["に関わらず"],
        near: [["によって", "That's \"depending on\". For \"regardless of\", use にかかわらず."]],
      }),
      s("金額の大小{にかかわらず}、寄付は歓迎します。", "きんがくのだいしょう{にかかわらず}、きふはかんげいします。", "Donations are welcome, large or small.", {
        accept: ["に関わらず", "を問わず"],
        near: [["によって", "That's \"depending on\". For \"regardless of\", use にかかわらず."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-hanshite",
    title: "〜に反して",
    meaning: "contrary to, against",
    structure: "Noun + に反して / に反し · に反する + Noun",
    related: ["n3-ni-taishite", "n2-ni-kotaete"],
    explanation: `
**に反して** means an outcome goes against an expectation, a wish or a rule: 予想に反して、試験は簡単だった, "contrary to expectations, the exam was easy".

It's common with nouns like 予想 (prediction), 期待 (expectations), 意思 (will), 天気予報 (the forecast) and 規則 (rules).

Before a noun, it becomes **に反する**: 規則に反する行為, "acts that break the rules". In formal writing, に反し.

Don't confuse it with に対して ("towards, whereas"). に反して always means going against something. Its opposite is 期待に応えて, "living up to expectations".

The verb 反する also stands alone: 法に反する, "to break the law"; 常識に反する, "to go against common sense".
`,
    sentences: [
      s("予想{に反して}、試験は簡単だった。", "よそう{にはんして}、しけんはかんたんだった。", "Contrary to expectations, the exam was easy.", {
        accept: ["に反し"],
        near: [["に対して", "に対して is \"towards\" or \"whereas\". For \"contrary to\", use に反して."]],
      }),
      s("親の期待{に反して}、彼は大学に行かなかった。", "おやのきたい{にはんして}、かれはだいがくにいかなかった。", "Contrary to his parents' hopes, he didn't go to university.", {
        accept: ["に反し"],
        near: [["に対して", "に対して is \"towards\" or \"whereas\". For \"contrary to\", use に反して."]],
      }),
      s("規則{に反する}行為は許されない。", "きそく{にはんする}こういはゆるされない。", "Acts that break the rules won't be tolerated.", {
        near: [["に反して", "Before a noun, use に反する."]],
      }),
      s("天気予報{に反して}、一日中晴れていた。", "てんきよほう{にはんして}、いちにちじゅうはれていた。", "Contrary to the forecast, it was sunny all day.", {
        accept: ["に反し"],
        near: [["によって", "That's \"by\". For \"contrary to\", use に反して."]],
      }),
      s("本人の意思{に反して}、手術が行われた。", "ほんにんのいし{にはんして}、しゅじゅつがおこなわれた。", "The operation was carried out against the patient's will.", {
        accept: ["に反し"],
        near: [["に対して", "に対して is \"towards\" or \"whereas\". For \"against\", use に反して."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kotaete",
    title: "〜に応えて",
    meaning: "in response to, living up to",
    structure: "Noun (期待 · 要望 · 声援) + に応えて / に応え",
    related: ["n2-ni-oujite", "n2-ni-hanshite"],
    explanation: `
**に応えて** means acting in response to what others hope for or ask: ファンの声援に応えて、選手は手を振った, "the player waved in response to the fans' cheers".

The noun is usually 期待 (expectations), 要望 (requests), 声援 (cheers), 要求 (demands), 信頼 (trust) or リクエスト. 期待に応える, "live up to expectations", is a very common set phrase.

It's written with 応える (to respond), not 答える (to answer a question), even though both are read こたえる.

Compare に応じて, "in accordance with", which adjusts to a variable, and に反して, which goes against expectations.
`,
    sentences: [
      s("ファンの声援{に応えて}、選手は手を振った。", "ファンのせいえん{にこたえて}、せんしゅはてをふった。", "The player waved in response to the fans' cheers.", {
        accept: ["に応え"],
        near: [["に応じて", "That's \"according to\". For responding to cheers or hopes, use に応えて."]],
      }),
      s("両親の期待{に応えて}、医者になった。", "りょうしんのきたい{にこたえて}、いしゃになった。", "Living up to my parents' expectations, I became a doctor.", {
        accept: ["に応え"],
        near: [["に応じて", "That's \"according to\". For living up to expectations, use に応えて."]],
      }),
      s("お客様の要望{に応えて}、営業時間を延長した。", "おきゃくさまのようぼう{にこたえて}、えいぎょうじかんをえんちょうした。", "In response to customer requests, we extended our opening hours.", {
        accept: ["に応え"],
        near: [["に沿って", "That works too. This point practises に応えて."]],
      }),
      s("期待{に応えられる}よう頑張ります。", "きたい{にこたえられる}ようがんばります。", "I'll do my best to live up to your expectations.", {
        near: [["に応じられる", "The phrase is 期待に応える."]],
      }),
      s("読者のリクエスト{に応えて}、続編が出版された。", "どくしゃのリクエスト{にこたえて}、ぞくへんがしゅっぱんされた。", "A sequel was published in response to readers' requests.", {
        accept: ["に応え"],
        near: [["に応じて", "That's \"according to\". For responding to requests, use に応えて."]],
      }),
    ],
  }),

  point({
    id: "n2-no-moto-de",
    title: "〜のもとで・〜のもとに",
    meaning: "under (guidance, conditions, law)",
    structure: "Noun + のもとで / のもとに",
    related: ["n3-ni-yotte"],
    explanation: `
**のもとで** means under someone's guidance or influence, or under certain conditions: 田中先生のもとで、研究をしている, "I'm doing research under Professor Tanaka".

It's used for teachers, supervisors and leaders (新しい社長のもとで, "under the new president"), for conditions (厳しい条件のもとで, "under strict conditions") and for protection or care (両親の愛情のもとで).

**のもとに** is similar but more formal, and common with principles and authority: 法のもとに、すべての人は平等だ, "all people are equal under the law".

It's written with 下 or 元 (の下で, の元で). Don't confuse it with the physical 下に, "underneath", which describes where an object sits rather than whose influence you're under.
`,
    sentences: [
      s("田中先生{のもとで}、研究をしている。", "たなかせんせい{のもとで}、けんきゅうをしている。", "I'm doing research under Professor Tanaka.", {
        accept: ["の下で", "のもとに"],
        near: [["によって", "That's \"by\". For \"under someone's guidance\", use のもとで."]],
      }),
      s("厳しい条件{のもとで}、実験が行われた。", "きびしいじょうけん{のもとで}、じっけんがおこなわれた。", "The experiment was carried out under strict conditions.", {
        accept: ["の下で", "のもとに"],
        near: [["の中で", "That's \"inside\". For \"under conditions\", use のもとで."]],
      }),
      s("両親の愛情{のもとで}育った。", "りょうしんのあいじょう{のもとで}そだった。", "I grew up surrounded by my parents' love.", {
        accept: ["の下で"],
        near: [["によって", "That's \"by\". For \"under (someone's care)\", use のもとで."]],
      }),
      s("法{のもとに}、すべての人は平等だ。", "ほう{のもとに}、すべてのひとはびょうどうだ。", "All people are equal under the law.", {
        accept: ["のもとで", "の下に"],
        near: [["の上で", "That's \"on top of\". For \"under the law\", use のもとに."]],
      }),
      s("新しい社長{のもとで}、会社は大きく変わった。", "あたらしいしゃちょう{のもとで}、かいしゃはおおきくかわった。", "Under the new president, the company changed a great deal.", {
        accept: ["の下で"],
        near: [["によって", "That's \"by\". For \"under (a leader)\", use のもとで."]],
      }),
    ],
  }),
];
