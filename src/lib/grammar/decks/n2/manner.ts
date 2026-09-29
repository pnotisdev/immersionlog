import { point, s, word } from "../../build";

/** How things look and how they're done, plus the verb compounds that add nuance. */

export const manner = [
  point({
    id: "n2-ka-no-you-ni",
    title: "〜かのように",
    meaning: "as if (though it isn't so)",
    structure: "Plain form + かのように / かのようだ / かのような + Noun",
    related: ["n4-you-da", "n3-you-ni-mieru", "n1-gotoku", "n1-n-bakari"],
    explanation: `
**かのように** describes something as if it were true, when it isn't: 彼は何も知らないかのように、平気な顔をしている, "he's acting calm, as if he knew nothing". The speaker knows, or suspects, that he does know.

It's often introduced with まるで ("just like"): まるで夢を見ているかのようだ, "it's as if I'm dreaming".

At the end of a sentence it's かのようだ; before a noun, かのような: 春が来たかのような暖かさ, "warmth as if spring had arrived".

Compare ように and ようだ (N4), which describe a likeness or an impression. The か adds a clear sense of "though it isn't really so". Nouns take である: 自分の家であるかのように.
`,
    sentences: [
      s("彼は何も知らない{かのように}、平気な顔をしている。", "かれはなにもしらない{かのように}、へいきなかおをしている。", "He's acting calm, as if he knew nothing about it.", {
        near: [["ように", "ように is \"like\". For \"as if (though it isn't so)\", use かのように."]],
      }),
      s("まるで夢を見ている{かのようだ}。", "まるでゆめをみている{かのようだ}。", "It's as if I'm dreaming.", {
        near: [["ようだ", "That's \"seems\". For \"as if (though it isn't)\", use かのようだ."]],
      }),
      s("彼女は何もなかった{かのように}笑った。", "かのじょはなにもなかった{かのように}わらった。", "She laughed as if nothing had happened.", {
        near: [["ように", "ように is \"like\". For \"as if (though it isn't so)\", use かのように."]],
      }),
      s("春が来た{かのような}暖かさだ。", "はるがきた{かのような}あたたかさだ。", "It's so warm it feels as if spring has arrived.", {
        near: [["かのように", "Before a noun, use かのような."]],
      }),
      s("彼はまるで自分の家である{かのように}振る舞った。", "かれはまるでじぶんのいえである{かのように}ふるまった。", "He behaved as if it were his own house.", {
        near: [["ように", "ように is \"like\". For \"as if (though it isn't so)\", use かのように."]],
      }),
    ],
  }),

  point({
    id: "n2-ge",
    title: "〜げ",
    meaning: "-looking, with an air of",
    structure: "い-adj stem · な-adj stem · たい stem + げ (な / に / だ)",
    related: ["n4-sou-looks", "n3-ppoi"],
    explanation: `
**げ** describes how someone appears to feel, judging from their face or manner: 彼女は悲しげな顔をしていた, "she had a sad look on her face".

It attaches to the stem of an adjective (悲しい → 悲しげ, 楽しい → 楽しげ, 寂しい → 寂しげ) or to たい (言いたげ, "looking as if they want to say something"). It works like a な-adjective: 悲しげな顔, 楽しげに遊ぶ.

It's close to そう (N4, "looks like"), but more literary and more focused on emotion and atmosphere. You'll meet it often in novels.

A few set phrases use it too: 自信ありげ, "with an air of confidence"; 意味ありげ, "meaningfully".
`,
    sentences: [
      s("彼女は悲し{げ}な顔をしていた。", "かのじょはかなし{げ}なかおをしていた。", "She had a sad look on her face.", {
        near: [["そう", "悲しそうな works too. This point practises げ."]],
      }),
      s("子どもたちは楽し{げ}に遊んでいる。", "こどもたちはたのし{げ}にあそんでいる。", "The children are playing happily.", {
        near: [["そう", "楽しそうに works too. This point practises げ."]],
      }),
      s("彼は何か言いた{げ}だった。", "かれはなにかいいた{げ}だった。", "He looked as if he wanted to say something.", {
        near: [["そう", "言いたそう works too. This point practises げ."]],
      }),
      s("自信あり{げ}に答えた。", "じしんあり{げ}にこたえた。", "They answered with an air of confidence.", {
        near: [["そうに", "The set phrase is 自信ありげに."]],
      }),
      s("寂し{げ}な後ろ姿を見送った。", "さびし{げ}なうしろすがたをみおくった。", "I watched them walk away, looking lonely.", {
        near: [["そう", "寂しそうな works too. This point practises げ."]],
      }),
    ],
  }),

  point({
    id: "n2-mamire",
    title: "〜まみれ",
    meaning: "covered in, smeared with",
    structure: "Noun + まみれ (+ の Noun · + になる · + だ)",
    related: ["n3-darake"],
    explanation: `
**まみれ** means covered all over in something, usually something liquid, sticky or powdery: 泥まみれ, "covered in mud"; 汗まみれ, "drenched in sweat"; 血まみれ, "covered in blood"; ほこりまみれ, "covered in dust".

It works like a noun: 泥まみれになる, 汗まみれで働く, 油まみれの手.

Compare だらけ (N3), which is "full of" things scattered around: 間違いだらけ, ゴミだらけ. まみれ is a coating that sticks to the surface. You can't say 間違いまみれ, and 汗だらけ sounds odd.

Both are negative in tone: things you'd want to wash off. Figuratively, you'll also see 借金まみれ ("drowning in debt") and 嘘まみれ ("riddled with lies").
`,
    sentences: [
      s("子どもが泥{まみれ}で帰ってきた。", "こどもがどろ{まみれ}でかえってきた。", "My child came home covered in mud.", {
        accept: ["だらけ"],
        near: [["いっぱい", "That's neutral. For \"covered in\", use まみれ."]],
      }),
      s("汗{まみれ}になって働いた。", "あせ{まみれ}になってはたらいた。", "I worked until I was drenched in sweat.", {
        near: [["だらけ", "だらけ is for things scattered all over. For a coating of sweat, use まみれ."]],
      }),
      s("彼の服は血{まみれ}だった。", "かれのふくはち{まみれ}だった。", "His clothes were covered in blood.", {
        near: [["だらけ", "だらけ is for things scattered all over. For blood soaked in, use まみれ."]],
      }),
      s("油{まみれ}の手を洗った。", "あぶら{まみれ}のてをあらった。", "I washed my oily hands.", {
        near: [["だらけ", "だらけ is for things scattered all over. For a coating of oil, use まみれ."]],
      }),
      s("ほこり{まみれ}の本棚を掃除した。", "ほこり{まみれ}のほんだなをそうじした。", "I cleaned the dust-covered bookshelf.", {
        accept: ["だらけ"],
        near: [["いっぱい", "That's neutral. For \"covered in\", use まみれ."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-mukete",
    title: "〜に向けて",
    meaning: "towards, in preparation for",
    structure: "Noun + に向けて · に向けた + Noun",
    related: ["n3-muke-muki", "n3-ni-taishite"],
    explanation: `
**に向けて** means working towards a goal or future event: 試験に向けて、毎日勉強している, "I'm studying every day for the exam".

It's common with events and goals: オリンピック, 開店, 問題の解決, 来年の選挙. The second half is usually preparation or effort: 準備, 練習, 話し合い.

It can also be physical direction, heading towards a place: 東京に向けて出発した, "we set off for Tokyo".

Before a noun, it's に向けた: 開店に向けた準備, "preparations for the opening". Compare 向け (N3), which means "aimed at an audience": 子ども向けの本. And に向かって is the more physical "facing, heading towards", common with people and places.
`,
    sentences: [
      s("試験{に向けて}、毎日勉強している。", "しけん{にむけて}、まいにちべんきょうしている。", "I'm studying every day for the exam.", {
        near: [["向けに", "向け is \"aimed at an audience\". For \"working towards\", use に向けて."]],
      }),
      s("オリンピック{に向けて}、準備が進んでいる。", "オリンピック{にむけて}、じゅんびがすすんでいる。", "Preparations are under way for the Olympics.", {
        near: [["について", "について is \"about\". For \"in preparation for\", use に向けて."]],
      }),
      s("問題の解決{に向けて}、話し合いが続いている。", "もんだいのかいけつ{にむけて}、はなしあいがつづいている。", "Talks are continuing with a view to solving the problem.", {
        near: [["について", "について is \"about\". For \"towards\", use に向けて."]],
      }),
      s("東京{に向けて}出発した。", "とうきょう{にむけて}しゅっぱつした。", "We set off for Tokyo.", {
        near: [["に向かって", "That works too. This point practises に向けて."]],
      }),
      s("来年の開店{に向けた}準備をしている。", "らいねんのかいてん{にむけた}じゅんびをしている。", "We're getting ready to open next year.", {
        near: [["に向けて", "Before a noun, use に向けた."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-komete",
    title: "〜を込めて",
    meaning: "with (feeling), full of",
    structure: "Noun + を込めて · を込めた + Noun",
    related: ["n2-ni-mukete"],
    explanation: `
**を込めて** means putting a feeling or effort into an action: 心を込めて料理を作った, "I cooked with love", literally "putting my heart into it". 込める means "to put into, to load".

It's used with nouns of emotion or intention: 心, 愛, 感謝の気持ち, 願い, 思い. And physically with 力: 力を込めて押す, "push with all your strength".

**愛を込めて** is the standard way to sign off a letter: "with love".

Before a noun, it's を込めた: 心を込めたプレゼント, "a heartfelt present". Compare を入れて, "put in", which is for physical things.
`,
    sentences: [
      s("心{を込めて}料理を作った。", "こころ{をこめて}りょうりをつくった。", "I cooked with love.", {
        near: [["を入れて", "That's \"put in\". The set phrase is 心を込めて."]],
      }),
      s("感謝の気持ち{を込めて}、手紙を書いた。", "かんしゃのきもち{をこめて}、てがみをかいた。", "I wrote a letter full of gratitude.", {
        near: [["を入れて", "That's \"put in\". For feelings, use を込めて."]],
      }),
      s("愛{を込めて}。", "あい{をこめて}。", "With love.", {
        near: [["で", "That's \"by means of\". For \"with (feeling)\", use を込めて."]],
      }),
      s("願い{を込めて}、千羽鶴を折った。", "ねがい{をこめて}、せんばづるをおった。", "I folded a thousand paper cranes as a prayer.", {
        near: [["で", "That's \"by means of\". For \"with (a wish)\", use を込めて."]],
      }),
      s("力{を込めて}、ドアを押した。", "ちから{をこめて}、ドアをおした。", "I pushed the door with all my strength.", {
        near: [["を入れて", "That works too. This point practises 力を込めて."]],
      }),
    ],
  }),

  point({
    id: "n2-nari-ni",
    title: "〜なりに・〜なりの",
    meaning: "in one's own way, as best one can",
    structure: "Noun / Plain form + なりに · なりの + Noun",
    related: ["n3-rashii-typical", "n3-to-shite", "n1-nari"],
    explanation: `
**なりに** means "in a way that fits who or what someone is", accepting their limits: 私なりに、一生懸命頑張った, "I tried my best, in my own way". It's modest: maybe not perfect, but sincere.

Before a noun, it's **なりの**: 子どもには子どもなりの考えがある, "children have their own way of thinking". The pattern "X には X なりの" is common: 安い店には安い店なりの良さがある, "cheap places have their own merits".

It often defends someone's effort or view: 彼なりに考えた結果だろう, "he must have thought about it in his own way".

Compare らしく, "like a proper X should", which judges against an ideal. なりに accepts the person as they are.
`,
    sentences: [
      s("私{なりに}、一生懸命頑張った。", "わたし{なりに}、いっしょうけんめいがんばった。", "I tried my best, in my own way.", {
        near: [["として", "として is a role. For \"in my own way\", use なりに."]],
      }),
      s("子どもには子ども{なりの}考えがある。", "こどもにはこども{なりの}かんがえがある。", "Children have their own way of thinking.", {
        near: [["なりに", "Before a noun, use なりの."]],
      }),
      s("彼{なりに}考えた結果だろう。", "かれ{なりに}かんがえたけっかだろう。", "He must have thought it over in his own way.", {
        near: [["として", "として is a role. For \"in his own way\", use なりに."]],
      }),
      s("安い店には安い店{なりの}良さがある。", "やすいみせにはやすいみせ{なりの}よさがある。", "Cheap places have their own good points.", {
        near: [["なりに", "Before a noun, use なりの."]],
      }),
      s("自分{なりに}工夫してみた。", "じぶん{なりに}くふうしてみた。", "I tried working out my own way of doing it.", {
        near: [["らしく", "らしく is \"like a proper\". For \"in my own way\", use なりに."]],
      }),
    ],
  }),

  point({
    id: "n2-koto-naku",
    title: "〜ことなく",
    meaning: "without (ever) doing",
    structure: "Verb dictionary form + ことなく",
    related: ["n4-zu-ni", "n2-zu-ni-sumu", "n1-koto-nashi-ni"],
    explanation: `
**ことなく** means "without doing", like ずに and ないで, but more formal and emphatic: 彼は休むことなく働き続けた, "he kept working without a single break".

It follows the dictionary form of a verb. It often implies something that might have been expected didn't happen at all: 一度も失敗することなく, "without failing even once"; 迷うことなく, "without a moment's hesitation".

It's typical of writing, speeches and news. In conversation, ずに or ないで is more natural.

A related form, ことなしに, means "without doing (it's impossible)": 努力することなしに、成功はない, "there's no success without effort".
`,
    sentences: [
      s("彼は休む{ことなく}働き続けた。", "かれはやすむ{ことなく}はたらきつづけた。", "He kept working without a single break.", {
        accept: ["ことなしに"],
        near: [["ずに", "ずに needs the ない-form (休まずに). After the dictionary form, use ことなく."]],
      }),
      s("一度も失敗する{ことなく}、最後までやり遂げた。", "いちどもしっぱいする{ことなく}、さいごまでやりとげた。", "I saw it through to the end without failing even once.", {
        near: [["ことがなく", "The set pattern is ことなく."]],
      }),
      s("迷う{ことなく}、この道を選んだ。", "まよう{ことなく}、このみちをえらんだ。", "I chose this path without hesitation.", {
        near: [["ずに", "ずに needs the ない-form (迷わずに). After the dictionary form, use ことなく."]],
      }),
      s("雨の日も休む{ことなく}、毎日走っている。", "あめのひもやすむ{ことなく}、まいにちはしっている。", "I run every day without fail, even when it rains.", {
        near: [["ずに", "ずに needs the ない-form (休まずに). After the dictionary form, use ことなく."]],
      }),
      s("誰にも知られる{ことなく}、町を出た。", "だれにもしられる{ことなく}、まちをでた。", "I left town without anyone knowing.", {
        near: [["ことがなく", "The set pattern is ことなく."]],
      }),
    ],
  }),

  point({
    id: "n2-wo-nozoite",
    title: "〜を除いて",
    meaning: "except for, apart from",
    structure: "Noun + を除いて / を除き · を除く + Noun",
    related: ["n3-igai", "n2-wa-betsu-to-shite"],
    explanation: `
**を除いて** means "except for, excluding": 日曜日を除いて、毎日営業しています, "we're open every day except Sunday". 除く means "to remove, to exclude".

It's a little more formal than 以外, and it's common in notices, rules and weather forecasts: 一部の地域を除いて、晴れるでしょう, "apart from some areas, it'll be sunny".

In formal writing, it's を除き. Before a noun, it's を除く: 日曜日を除く毎日, "every day except Sunday".

Compare を問わず ("regardless of"), which includes everything, and に限り ("limited to"), which includes only one thing. を除いて sits between them: everything, minus one or two exceptions.
`,
    sentences: [
      s("日曜日{を除いて}、毎日営業しています。", "にちようび{をのぞいて}、まいにちえいぎょうしています。", "We're open every day except Sunday.", {
        accept: ["を除き", "以外"],
        near: [["を問わず", "That's \"regardless of\". For \"except\", use を除いて."]],
      }),
      s("一人{を除いて}、全員が賛成した。", "ひとり{をのぞいて}、ぜんいんがさんせいした。", "Everyone except one person agreed.", {
        accept: ["を除き", "以外"],
        near: [["を問わず", "That's \"regardless of\". For \"except\", use を除いて."]],
      }),
      s("子ども{を除き}、入場料は千円です。", "こども{をのぞき}、にゅうじょうりょうはせんえんです。", "Admission is 1,000 yen, except for children.", {
        accept: ["を除いて"],
        near: [["に限り", "That's \"limited to\". For \"except\", use を除き."]],
      }),
      s("一部の地域{を除いて}、晴れるでしょう。", "いちぶのちいき{をのぞいて}、はれるでしょう。", "Apart from some areas, it'll be sunny.", {
        accept: ["を除き"],
        near: [["を問わず", "That's \"regardless of\". For \"apart from\", use を除いて."]],
      }),
      s("祝日{を除いて}、郵便局は開いている。", "しゅくじつ{をのぞいて}、ゆうびんきょくはあいている。", "The post office is open except on public holidays.", {
        accept: ["を除き", "以外"],
        near: [["に限り", "That's \"limited to\". For \"except\", use を除いて."]],
      }),
    ],
  }),

  point({
    id: "n2-te-miseru",
    title: "〜てみせる",
    meaning: "show (how); I'll definitely (you'll see)",
    structure: "Verb て-form + みせる",
    related: ["n4-te-miru"],
    explanation: `
**てみせる** has two uses, both built on 見せる, "to show".

**Demonstrate**: doing something so others can see how: 先生が手本を書いてみせた, "the teacher wrote it out to show us how". やってみせてください means "please show me how".

**Determination**: declaring you'll achieve something, as if to prove it to others: 今度こそ、絶対に合格してみせる, "this time I'll pass, you'll see". This use is common in anime and dramas.

It can also mean putting on an appearance: 笑ってみせた, "put on a smile".

Don't confuse it with てみる, "try and see". みせる is about other people watching.
`,
    sentences: [
      s("今度こそ、絶対に{合格してみせる}。", "こんどこそ、ぜったいに{ごうかくしてみせる}。", "This time, I'll pass for sure. You'll see.", {
        hint: "合格する, I'll show you",
        conj: { word: word("合格する", "ごうかくする", "irregular"), form: "te", tail: "みせる" },
        near: [["合格してみる", "てみる is \"try and see\". For \"I'll show you\", use 合格してみせる."]],
      }),
      s("先生が手本を{書いてみせた}。", "せんせいがてほんを{かいてみせた}。", "The teacher wrote it out to show us how.", {
        hint: "書く, showed how",
        conj: { word: word("書く", "かく", "godan"), form: "te", tail: "みせた" },
        near: [["書いてみた", "てみた is \"tried\". For \"showed how\", use 書いてみせた."]],
      }),
      s("必ず{勝ってみせます}。", "かならず{かってみせます}。", "I'll win, I promise you.", {
        hint: "勝つ, I'll show you",
        conj: { word: word("勝つ", "かつ", "godan"), form: "te", tail: "みせます" },
        near: [["勝ってみます", "てみます is \"I'll try\". For \"I'll show you\", use 勝ってみせます."]],
      }),
      s("彼は笑って{みせた}が、本当は悲しかった。", "かれはわらって{みせた}が、ほんとうはかなしかった。", "He put on a smile, but he was really sad.", {
        near: [["みた", "てみた is \"tried\". For \"put on a show of\", use てみせた."]],
      }),
      s("使い方を{やってみせて}ください。", "つかいかたを{やってみせて}ください。", "Please show me how to use it.", {
        hint: "やる, show",
        conj: { word: word("やる", "やる", "godan"), form: "te", tail: "みせて" },
        near: [["やってみて", "That asks them to try it. For \"show me\", use やってみせて."]],
      }),
    ],
  }),

  point({
    id: "n2-yara",
    title: "〜やら〜やら",
    meaning: "what with … and …; all sorts of",
    structure: "Noun / Plain form + やら + Noun / Plain form + やら",
    related: ["n4-toka", "n5-ya", "n1-dano"],
    explanation: `
**やら〜やら** lists examples from a chaotic or overwhelming situation: 引っ越しやら仕事やらで、忙しい, "what with the move and work, I'm really busy".

It's like とか〜とか, but with a sense of things piling up and being hard to cope with. It's often followed by で to give a reason, or by a word like 大変 or 大騒ぎ.

It can mix conflicting feelings: うれしいやら恥ずかしいやら, "happy and embarrassed at the same time".

On its own, **何やら** means "something or other", a vague "something": 何やら変な音がする, "there's some strange noise".
`,
    sentences: [
      s("引っ越し{やら}仕事やらで、忙しい。", "ひっこし{やら}しごとやらで、いそがしい。", "What with the move and work, I'm really busy.", {
        near: [["とか", "That works in speech. やら adds \"all sorts of things piling up\"."]],
      }),
      s("うれしい{やら}恥ずかしいやらで、顔が赤くなった。", "うれしい{やら}はずかしいやらで、かおがあかくなった。", "I was so happy and embarrassed that I went red.", {
        near: [["とか", "That works in speech. やら adds \"all mixed up together\"."]],
      }),
      s("泣く{やら}叫ぶやら、大騒ぎだった。", "なく{やら}さけぶやら、おおさわぎだった。", "What with the crying and shouting, it was a real commotion.", {
        near: [["たり", "たり lists actions neutrally. For a chaotic mix, use やら."]],
      }),
      s("何{やら}変な音がする。", "なに{やら}へんなおとがする。", "There's some strange noise or other.", {
        near: [["か", "That works too. 何やら is \"something or other\"."]],
      }),
      s("宿題{やら}レポートやらで、寝る時間もない。", "しゅくだい{やら}レポートやらで、ねるじかんもない。", "What with homework and reports, I don't even have time to sleep.", {
        near: [["とか", "That works in speech. やら adds \"all sorts of things piling up\"."]],
      }),
    ],
  }),

  point({
    id: "n2-nuku",
    title: "〜抜く",
    meaning: "(do) to the very end, thoroughly",
    structure: "Verb ます-stem + 抜く",
    related: ["n3-kiru", "n4-hajimeru-owaru"],
    explanation: `
**抜く** after a ます-stem means doing something all the way through, usually in spite of difficulty: 最後まで走り抜いた, "I ran all the way to the end". 抜く means "to pull through".

It stresses endurance and determination: 耐え抜く, "endure to the end"; やり抜く, "see it through"; 戦い抜く, "fight to the finish".

With thinking verbs, it means "thoroughly": 考え抜いた結果, "after thinking it through thoroughly". And 選び抜かれた means "carefully selected", common in advertising.

It's close to 切る (N3). 切る is about finishing completely; 抜く adds the sense of pushing through something hard.
`,
    sentences: [
      s("最後まで{走り抜いた}。", "さいごまで{はしりぬいた}。", "I ran all the way to the end.", {
        hint: "走る, to the end",
        conj: { word: word("走る", "はしる", "godan"), form: "polite", cut: "ます", tail: "抜いた" },
        near: [["走り切った", "That works too. 抜く stresses pushing through hardship."]],
      }),
      s("{考え抜いた}結果、会社を辞めることにした。", "{かんがえぬいた}けっか、かいしゃをやめることにした。", "After thinking it through thoroughly, I decided to quit my job.", {
        hint: "考える, thoroughly",
        conj: { word: word("考える", "かんがえる", "ichidan"), form: "polite", cut: "ます", tail: "抜いた" },
        near: [["考え切った", "The usual phrase is 考え抜いた."]],
      }),
      s("苦しい時期を{耐え抜いた}。", "くるしいじきを{たえぬいた}。", "I endured the hard times to the end.", {
        hint: "耐える, to the end",
        conj: { word: word("耐える", "たえる", "ichidan"), form: "polite", cut: "ます", tail: "抜いた" },
        near: [["耐えた", "That's just \"endured\". For \"endured to the end\", use 耐え抜いた."]],
      }),
      s("一度決めたことは、最後まで{やり抜く}。", "いちどきめたことは、さいごまで{やりぬく}。", "Once I decide on something, I see it through to the end.", {
        hint: "やる, to the end",
        conj: { word: word("やる", "やる", "godan"), form: "polite", cut: "ます", tail: "抜く" },
        near: [["やり続ける", "That's \"keep doing\". For \"see it through\", use やり抜く."]],
      }),
      s("{選び抜かれた}材料だけを使っています。", "{えらびぬかれた}ざいりょうだけをつかっています。", "We use only carefully selected ingredients.", {
        near: [["選ばれた", "That's just \"chosen\". For \"carefully selected\", use 選び抜かれた."]],
      }),
    ],
  }),

  point({
    id: "n2-au",
    title: "〜合う",
    meaning: "(do) to each other, together",
    structure: "Verb ます-stem + 合う",
    related: ["n4-te-ageru"],
    explanation: `
**合う** after a ます-stem makes an action mutual: 助け合う, "help each other"; 見つめ合う, "gaze at each other"; 話し合う, "talk it over together".

It's a very productive pattern, and some combinations have become words in their own right: 話し合い ("discussion"), 付き合う ("go out with, keep company"), 知り合う ("get acquainted").

With 出す, it means everyone contributing: 意見を出し合う, "share ideas"; お金を出し合う, "chip in".

It conjugates like 合う itself, a godan verb: 合った, 合って, 合いましょう.

Compare てあげる and てくれる, which describe a favour going one way. 合う makes it two-way, so it's a natural fit for friendship, teamwork and negotiation.
`,
    sentences: [
      s("困った時は、{助け合う}ことが大切だ。", "こまったときは、{たすけあう}ことがたいせつだ。", "When times are hard, it's important to help each other.", {
        hint: "助ける, each other",
        conj: { word: word("助ける", "たすける", "ichidan"), form: "polite", cut: "ます", tail: "合う" },
        near: [["助けてあげる", "That's one-way. For \"each other\", use 助け合う."]],
      }),
      s("二人は{見つめ合った}。", "ふたりは{みつめあった}。", "The two of them gazed at each other.", {
        hint: "見つめる, each other",
        conj: { word: word("見つめる", "みつめる", "ichidan"), form: "polite", cut: "ます", tail: "合った" },
        near: [["見つめた", "That's one-way. For \"each other\", use 見つめ合った."]],
      }),
      s("みんなで意見を{出し合った}。", "みんなでいけんを{だしあった}。", "Everyone pitched in with ideas.", {
        hint: "出す, together",
        conj: { word: word("出す", "だす", "godan"), form: "polite", cut: "ます", tail: "合った" },
        near: [["出した", "That's plain. For \"shared with each other\", use 出し合った."]],
      }),
      s("問題について{話し合いましょう}。", "もんだいについて{はなしあいましょう}。", "Let's talk the problem over together.", {
        hint: "話す, together",
        conj: { word: word("話す", "はなす", "godan"), form: "polite", cut: "ます", tail: "合いましょう" },
        near: [["話しましょう", "That's \"let's talk\". For \"discuss together\", use 話し合いましょう."]],
      }),
      s("私たちは毎日連絡を{取り合っている}。", "わたしたちはまいにちれんらくを{とりあっている}。", "We keep in touch with each other every day.", {
        hint: "取る, each other",
        conj: { word: word("取る", "とる", "godan"), form: "polite", cut: "ます", tail: "合っている" },
        near: [["取っている", "That's one-way. For \"with each other\", use 取り合っている."]],
      }),
    ],
  }),

  point({
    id: "n2-naosu",
    title: "〜直す",
    meaning: "redo, do again (properly)",
    structure: "Verb ます-stem + 直す",
    related: ["n2-nuku", "n3-kiru"],
    explanation: `
**直す** after a ます-stem means doing something again, usually to fix or improve it: もう一度書き直してください, "please write it again". 直す means "to fix, to correct".

Common combinations: 書き直す (rewrite), やり直す (redo, start over), 考え直す (reconsider), 読み直す (reread), かけ直す (call back).

**見直す** has two meanings: "look over again" and "see someone in a better light": 彼のことを見直した, "I've come to think better of him".

It conjugates like 直す itself: 直した, 直して, 直そう. Compare もう一度 + verb, which is simple repetition; 直す implies correcting something.
`,
    sentences: [
      s("もう一度{書き直して}ください。", "もういちど{かきなおして}ください。", "Please write it again.", {
        hint: "書く, redo",
        conj: { word: word("書く", "かく", "godan"), form: "polite", cut: "ます", tail: "直して" },
        near: [["また書いて", "That's \"write again\" without fixing. For \"rewrite\", use 書き直して."]],
      }),
      s("計算を{やり直した}。", "けいさんを{やりなおした}。", "I redid the calculation.", {
        hint: "やる, redo",
        conj: { word: word("やる", "やる", "godan"), form: "polite", cut: "ます", tail: "直した" },
        near: [["もう一度した", "That's \"did again\". For \"redid (to correct it)\", use やり直した."]],
      }),
      s("彼のことを{見直した}。", "かれのことを{みなおした}。", "I've come to see him in a new light.", {
        hint: "見る, see anew",
        conj: { word: word("見る", "みる", "ichidan"), form: "polite", cut: "ます", tail: "直した" },
        near: [["また見た", "That's \"saw again\". For \"think better of\", use 見直した."]],
      }),
      s("最初から{考え直そう}。", "さいしょから{かんがえなおそう}。", "Let's rethink it from the start.", {
        hint: "考える, redo",
        conj: { word: word("考える", "かんがえる", "ichidan"), form: "polite", cut: "ます", tail: "直そう" },
        near: [["また考えよう", "That's \"think again\". For \"rethink\", use 考え直そう."]],
      }),
      s("電話が切れたので、{かけ直した}。", "でんわがきれたので、{かけなおした}。", "The call got cut off, so I called back.", {
        hint: "かける, again",
        conj: { word: word("かける", "かける", "ichidan"), form: "polite", cut: "ます", tail: "直した" },
        near: [["またかけた", "That's plain. For \"called back\", use かけ直した."]],
      }),
    ],
  }),

  point({
    id: "n2-sokoneru",
    title: "〜損ねる・〜損なう",
    meaning: "miss (the chance to), fail to",
    structure: "Verb ます-stem + 損ねる / 損なう",
    related: ["n2-naosu", "n4-te-shimau"],
    explanation: `
**損ねる** and **損なう** after a ます-stem mean missing the chance to do something, or failing to do it properly: 寝坊して、電車に乗り損ねた, "I overslept and missed the train".

Common combinations: 乗り損ねる (miss a train or bus), 食べ損ねる (miss a meal), 見損なう (miss seeing something), 言い損ねる (not get round to saying). There's usually a sense of regret.

**見損なう** also means "misjudge someone": 君を見損なったよ, "I thought better of you" or "I've lost respect for you". It's the opposite of 見直す.

損ねる is more common in speech; 損なう is a little more formal. Both come from 損, "loss".
`,
    sentences: [
      s("寝坊して、電車に{乗り損ねた}。", "ねぼうして、でんしゃに{のりそこねた}。", "I overslept and missed the train.", {
        hint: "乗る, missed",
        conj: { word: word("乗る", "のる", "godan"), form: "polite", cut: "ます", tail: "損ねた" },
        accept: ["乗り遅れた", "のりおくれた"],
        near: [["乗れなかった", "That's a plain \"couldn't get on\". For \"missed\", use 乗り損ねた."]],
      }),
      s("忙しくて、昼ご飯を{食べ損ねた}。", "いそがしくて、ひるごはんを{たべそこねた}。", "I was so busy that I missed lunch.", {
        hint: "食べる, missed",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "polite", cut: "ます", tail: "損ねた" },
        near: [["食べなかった", "That's a plain \"didn't eat\". For \"missed (the chance)\", use 食べ損ねた."]],
      }),
      s("話題の映画を{見損なった}。", "わだいのえいがを{みそこなった}。", "I missed the film everyone's talking about.", {
        hint: "見る, missed",
        conj: { word: word("見る", "みる", "ichidan"), form: "polite", cut: "ます", tail: "損なった" },
        accept: ["見逃した", "みのがした"],
        near: [["見なかった", "That's a plain \"didn't see\". For \"missed (the chance)\", use 見損なった."]],
      }),
      s("大事なことを{言い損ねた}。", "だいじなことを{いいそこねた}。", "I didn't get round to saying something important.", {
        hint: "言う, missed",
        conj: { word: word("言う", "いう", "godan"), form: "polite", cut: "ます", tail: "損ねた" },
        near: [["言えなかった", "That's a plain \"couldn't say\". For \"missed the chance to say\", use 言い損ねた."]],
      }),
      s("君を{見損なったよ}。", "きみを{みそこなったよ}。", "I thought better of you.", {
        near: [["見直したよ", "That's the opposite: \"I think better of you now\". For \"I misjudged you\", use 見損なったよ."]],
      }),
    ],
  }),
];
