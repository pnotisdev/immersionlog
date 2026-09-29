import { point, s } from "../../build";

/** Manner and appearance: as if about to, like, showing signs of, acting like, entirely, like crazy. */

export const manner = [
  point({
    id: "n1-nagara-ni",
    title: "〜ながらに(して)・〜ながらの",
    meaning: "while (in a state); since (birth); as in (the old days)",
    structure: "Noun / Verb ます-stem + ながらに(して) / ながらの",
    related: ["n5-nagara", "n3-nagara-mo"],
    explanation: `
**ながらに** describes a state that continues unchanged while something else happens. It lives in fixed phrases:
- **涙ながらに**: in tears. 彼女は涙ながらに事故の様子を語った.
- **生まれながらに(して)**: from birth, innately. 人は生まれながらにして平等である, "all people are born equal".
- **家にいながらにして**: without leaving home. 家にいながらにして世界中の人と話せる.
- **昔ながらの**: as in the old days, traditional. 昔ながらの町並み.

It's different from ながら (N5), "while doing two actions". ながらに describes an unchanged state or condition.

It's literary and set-phrase based, so learn the combinations as a group. In a puzzle, the noun in front (涙, 生まれ, 昔, いる) usually tells you this is the pattern.
`,
    sentences: [
      s("彼女は涙{ながらに}、事故の様子を語った。", "かのじょはなみだ{ながらに}、じこのようすをかたった。", "In tears, she described what happened in the accident.", {
        near: [["ながら", "Plain ながら is \"while doing\". The fixed phrase is 涙ながらに."]],
      }),
      s("彼は生まれ{ながらに}、音楽の才能を持っていた。", "かれはうまれ{ながらに}、おんがくのさいのうをもっていた。", "He was born with a gift for music.", {
        accept: ["ながらにして"],
        near: [["ながら", "Plain ながら is \"while doing\". The fixed phrase is 生まれながらに."]],
      }),
      s("ネットがあれば、家にい{ながらにして}世界中の人と話せる。", "ネットがあれば、いえにい{ながらにして}せかいじゅうのひととはなせる。", "With the internet, you can talk to people all over the world without leaving home.", {
        accept: ["ながらに"],
        near: [["ながら", "Plain ながら is \"while doing\". For \"without leaving home\", use いながらにして."]],
      }),
      s("この辺りには昔{ながらの}町並みが残っている。", "このあたりにはむかし{ながらの}まちなみがのこっている。", "The traditional streetscape survives around here.", {
        near: [["ながら", "Plain ながら is \"while doing\". Before a noun, 昔ながらの means \"traditional\"."]],
      }),
      s("人は生まれ{ながらにして}平等である。", "ひとはうまれ{ながらにして}びょうどうである。", "All people are born equal.", {
        accept: ["ながらに"],
        near: [["ながら", "Plain ながら is \"while doing\". The fixed phrase is 生まれながらにして."]],
      }),
    ],
  }),

  point({
    id: "n1-tomo-naku",
    title: "〜ともなく・〜ともなしに",
    meaning: "without meaning to, idly; (from) somewhere or other",
    structure: "Verb dictionary form + ともなく · Question word (+ particle) + ともなく",
    related: ["n2-koto-naku"],
    explanation: `
**ともなく** describes an action done idly, without a clear intention: 見るともなくテレビを見ていた, "I was idly watching TV". The verb is usually repeated: 見るともなく見る, 聞くともなく聞く, 考えるともなく考える.

With a question word, it means "some … or other": どこからともなく, "from somewhere or other". 誰に言うともなく means "to no one in particular".

ともなしに means the same. It's literary and descriptive, common in novels.

Compare ことなく (N2), "without doing", which states that something didn't happen at all. With ともなく, the action does happen, just without intent. It paints a relaxed, absent-minded scene, which is why novelists like it.
`,
    sentences: [
      s("見る{ともなく}テレビを見ていた。", "みる{ともなく}テレビをみていた。", "I was idly watching TV.", {
        accept: ["ともなしに"],
        near: [["ことなく", "ことなく is \"without doing (at all)\". For \"idly, without meaning to\", use ともなく."]],
      }),
      s("聞く{ともなく}、隣の人の話が耳に入った。", "きく{ともなく}、となりのひとのはなしがみみにはいった。", "Without really meaning to listen, I overheard the people next to me.", {
        accept: ["ともなしに"],
        near: [["ことなく", "ことなく is \"without doing (at all)\". For \"without really meaning to\", use ともなく."]],
      }),
      s("どこから{ともなく}、いい匂いがしてきた。", "どこから{ともなく}、いいにおいがしてきた。", "A nice smell came wafting from somewhere or other.", {
        near: [["でも", "どこからでも is \"from anywhere\". For \"from somewhere or other\", use ともなく."]],
      }),
      s("考える{ともなく}、昔のことを考えていた。", "かんがえる{ともなく}、むかしのことをかんがえていた。", "I found myself idly thinking about the past.", {
        accept: ["ともなしに"],
        near: [["ことなく", "ことなく is \"without doing (at all)\". For \"idly\", use ともなく."]],
      }),
      s("彼は誰に言う{ともなく}、「疲れた」とつぶやいた。", "かれはだれにいう{ともなく}、「つかれた」とつぶやいた。", "He muttered \"I'm tired\" to no one in particular.", {
        accept: ["ともなしに"],
        near: [["ことなく", "ことなく is \"without doing (at all)\". For \"to no one in particular\", use ともなく."]],
      }),
    ],
  }),

  point({
    id: "n1-n-bakari",
    title: "〜んばかり(に・の)",
    meaning: "as if about to, almost",
    structure: "Verb ない-stem + んばかり(に / の / だ) (する → せんばかり)",
    related: ["n2-ka-no-you-ni", "n1-to-bakari-ni"],
    explanation: `
**んばかり** means something is so intense it looks as if it's about to happen: 彼女は泣き出さんばかりの顔をしていた, "she looked as if she was about to burst into tears".

It attaches to the ない-stem: 泣き出す → 泣き出さ + んばかり, 割れる → 割れ + んばかり. The ん is the classical volitional む. It's usually followed by の + noun, or に + verb.

Set phrases include 割れんばかりの拍手 ("thunderous applause"), あふれんばかりの笑顔 ("a beaming smile") and 飛び上がらんばかりに喜ぶ ("jump for joy").

言わんばかりに means "as if to say", and とばかりに (N1) is the other way to say it. Plain ばかり means "only".
`,
    sentences: [
      s("彼女は泣き出さ{んばかり}の顔をしていた。", "かのじょはなきださ{んばかり}のかおをしていた。", "She looked as if she was about to burst into tears.", {
        near: [["ばかり", "Plain ばかり is \"only\". After the ない-stem, \"as if about to\" is んばかり."]],
      }),
      s("会場は割れ{んばかり}の拍手に包まれた。", "かいじょうはわれ{んばかり}のはくしゅにつつまれた。", "The hall was filled with thunderous applause.", {
        near: [["ばかり", "Plain ばかり is \"only\". The set phrase is 割れんばかりの拍手."]],
      }),
      s("彼は「お前が悪い」と言わ{んばかりに}、私をにらんだ。", "かれは「おまえがわるい」といわ{んばかりに}、わたしをにらんだ。", "He glared at me as if to say it was my fault.", {
        near: [["ばかりに", "ばかりに is \"just because\". After 言わ, \"as if to say\" is んばかりに."]],
      }),
      s("彼女はあふれ{んばかり}の笑顔で迎えてくれた。", "かのじょはあふれ{んばかり}のえがおでむかえてくれた。", "She greeted us with a beaming smile.", {
        near: [["ばかり", "Plain ばかり is \"only\". The set phrase is あふれんばかりの笑顔."]],
      }),
      s("合格の知らせに、彼は飛び上がら{んばかりに}喜んだ。", "ごうかくのしらせに、かれはとびあがら{んばかりに}よろこんだ。", "He practically jumped for joy at the news that he'd passed.", {
        near: [["ばかりに", "ばかりに is \"just because\". For \"almost (jumping)\", use んばかりに."]],
      }),
    ],
  }),

  point({
    id: "n1-to-bakari-ni",
    title: "〜とばかりに",
    meaning: "as if to say",
    structure: "Quote / Noun + とばかりに",
    related: ["n1-n-bakari"],
    explanation: `
**とばかりに** describes an action that seems to say something, without words: 彼は「待ってました」とばかりに立ち上がった, "he stood up as if to say 'finally!'".

The first half is a quote, often in 「」, or a short phrase (今がチャンス, ここぞ). The second half is an eager or pointed gesture: standing up, attacking, wagging a tail, walking out.

It's close to と言わんばかりに, which means the same. ここぞとばかりに, "seizing the moment", is a very common set phrase.

Don't confuse it with ばかりに (N2), "just because", which gives a cause of something bad.
`,
    sentences: [
      s("彼は「待ってました」{とばかりに}、立ち上がった。", "かれは「まってました」{とばかりに}、たちあがった。", "He stood up as if to say \"finally!\".", {
        accept: ["と言わんばかりに"],
        near: [["ばかりに", "ばかりに is \"just because\". After a quote, \"as if to say\" is とばかりに."]],
      }),
      s("今がチャンス{とばかりに}、一気に攻め込んだ。", "いまがチャンス{とばかりに}、いっきにせめこんだ。", "Seeing their chance, they launched an all-out attack.", {
        accept: ["と言わんばかりに"],
        near: [["ばかりに", "ばかりに is \"just because\". For \"as if to say\", use とばかりに."]],
      }),
      s("犬は「散歩に行こう」{とばかりに}、しっぽを振った。", "いぬは「さんぽにいこう」{とばかりに}、しっぽをふった。", "The dog wagged its tail as if to say \"let's go for a walk\".", {
        accept: ["と言わんばかりに"],
        near: [["ばかりか", "ばかりか is \"not only\". For \"as if to say\", use とばかりに."]],
      }),
      s("彼女は「もう知らない」{とばかりに}、部屋を出て行った。", "かのじょは「もうしらない」{とばかりに}、へやをでていった。", "She walked out of the room as if to say \"I've had enough\".", {
        accept: ["と言わんばかりに"],
        near: [["ばかりに", "ばかりに is \"just because\". After a quote, \"as if to say\" is とばかりに."]],
      }),
      s("ファンはここぞ{とばかりに}、大声で応援した。", "ファンはここぞ{とばかりに}、おおごえでおうえんした。", "Seizing the moment, the fans cheered at the top of their voices.", {
        near: [["ばかりか", "ばかりか is \"not only\". The set phrase is ここぞとばかりに."]],
      }),
    ],
  }),

  point({
    id: "n1-gotoku",
    title: "〜ごとく・〜ごとき・〜ごとし",
    meaning: "like, as (literary)",
    structure: "Noun の / Verb + (かの)ごとく (+ verb) · ごとき (+ noun) · ごとし (end)",
    related: ["n2-ka-no-you-ni", "n3-marude"],
    explanation: `
**ごとく** is the classical version of ように, "like, as", and it changes shape depending on what follows:
- **ごとく** before a verb: 風のごとく走り去った, "he ran off like the wind".
- **ごとき** before a noun: 夢のごとき日々, "dreamlike days".
- **ごとし** at the end: 光陰矢のごとし, "time flies like an arrow".

It also appears as かのごとく, "as if", like かのように (N2), and 前述のごとく, "as mentioned above".

Person + ごとき is a special use for contempt or humility: 私ごときが意見を言うのは失礼だ, "it would be rude for someone like me to give an opinion".

So the puzzle is what follows: a verb, a noun, or the end of the sentence.
`,
    sentences: [
      s("光陰矢の{ごとし}。", "こういんやの{ごとし}。", "Time flies like an arrow.", {
        near: [["ごとく", "ごとく comes before a verb. To end a sentence, use ごとし."]],
      }),
      s("彼は風の{ごとく}走り去った。", "かれはかぜの{ごとく}はしりさった。", "He ran off like the wind.", {
        accept: ["ように"],
        near: [["ごとき", "ごとき comes before a noun. Before a verb, use ごとく."]],
      }),
      s("前述の{ごとく}、計画は変更された。", "ぜんじゅつの{ごとく}、けいかくはへんこうされた。", "As mentioned above, the plan has been changed.", {
        accept: ["ように", "とおり", "通り"],
        near: [["ごとし", "ごとし ends a sentence. Before a clause, use ごとく."]],
      }),
      s("私{ごとき}が意見を言うのは失礼だ。", "わたし{ごとき}がいけんをいうのはしつれいだ。", "It would be rude for someone like me to give an opinion.", {
        accept: ["なんか", "など"],
        near: [["ごとく", "ごとく comes before a verb. For \"someone like me\", use ごとき."]],
      }),
      s("彼は何事もなかったかの{ごとく}振る舞った。", "かれはなにごともなかったかの{ごとく}ふるまった。", "He behaved as if nothing had happened.", {
        accept: ["ように"],
        near: [["ごとき", "ごとき comes before a noun. Before a verb, use ごとく."]],
      }),
    ],
  }),

  point({
    id: "n1-meku",
    title: "〜めく・〜めいた",
    meaning: "showing signs of, -ish, having an air of",
    structure: "Noun + めく / めいて / めいた + Noun",
    related: ["n3-ppoi", "n1-jimiru"],
    explanation: `
**めく** means something takes on the air or signs of a noun: 日差しが春めいてきた, "the sunshine is starting to feel like spring".

It follows a limited set of nouns:
- Seasons: 春めく, 秋めく.
- Mystery and irony: 謎めいた, 皮肉めいた.
- Joking and excuses: 冗談めいた, 言い訳めいた.

Before a noun, it's めいた: 謎めいた女性, "a mysterious woman". It conjugates like a godan verb.

Compare っぽい (N3), a casual "-ish", and じみる, which is negative ("smacks of"). めく is mostly neutral and a bit literary, and it's especially loved for seasonal descriptions.
`,
    sentences: [
      s("日差しが春{めいて}きた。", "ひざしがはる{めいて}きた。", "The sunshine is starting to feel like spring.", {
        accept: ["らしくなって"],
        near: [["っぽく", "っぽく is a casual \"-ish\". For \"showing signs of (spring)\", use めいて."]],
      }),
      s("彼の言い方は皮肉{めいて}いた。", "かれのいいかたはひにく{めいて}いた。", "The way he said it had an ironic edge.", {
        accept: ["っぽかった"],
        near: [["らしく", "らしく is \"typical of\". For \"having an air of\", use めいて."]],
      }),
      s("謎{めいた}女性が現れた。", "なぞ{めいた}じょせいがあらわれた。", "A mysterious woman appeared.", {
        near: [["らしい", "らしい is \"typical of\". For \"mysterious\", use 謎めいた."]],
      }),
      s("彼は冗談{めいた}口調で言った。", "かれはじょうだん{めいた}くちょうでいった。", "He said it in a half-joking tone.", {
        near: [["じみた", "じみた is \"smacking of\" (negative). For \"half-joking\", use めいた."]],
      }),
      s("秋{めいた}風が吹いている。", "あき{めいた}かぜがふいている。", "There's an autumnal breeze blowing.", {
        accept: ["らしい"],
        near: [["じみた", "じみた is \"smacking of\" (negative). For \"autumnal\", use めいた."]],
      }),
    ],
  }),

  point({
    id: "n1-jimiru",
    title: "〜じみる・〜じみた",
    meaning: "smacking of, looking like (negative)",
    structure: "Noun + じみる / じみた + Noun / じみて",
    related: ["n1-meku", "n3-ppoi"],
    explanation: `
**じみる** means something seems like a noun, in an unwelcome way: 子どもじみたことを言うな, "stop saying such childish things".

It follows nouns such as 子ども ("childish"), 年寄り ("old-fashioned"), 説教 ("preachy"), 芝居 ("theatrical, put on") and 所帯 ("drab, domestic"). Before a noun, it's じみた.

It's always critical. Compare めく, which is mostly neutral ("showing signs of"), and らしい (N3), which is positive ("typical of, as it should be"). A 子どもらしい drawing is charmingly childlike, while a 子どもじみた remark is immature.

It conjugates like an ichidan verb: じみる, じみて, じみた.
`,
    sentences: [
      s("子ども{じみた}ことを言うな。", "こども{じみた}ことをいうな。", "Stop saying such childish things.", {
        near: [["らしい", "らしい is \"typical of\" in a good way. For \"childish\" (critical), use じみた."]],
      }),
      s("彼女は年寄り{じみた}服を着ている。", "かのじょはとしより{じみた}ふくをきている。", "She wears clothes that make her look old.", {
        near: [["めいた", "めいた is \"showing signs of\", mostly neutral. For a critical \"smacking of\", use じみた."]],
      }),
      s("彼の話は説教{じみて}いて、聞き飽きた。", "かれのはなしはせっきょう{じみて}いて、ききあきた。", "His talk was preachy, and I got tired of it.", {
        accept: ["くさくて"],
        near: [["らしく", "らしく is \"typical of\". For \"preachy\" (critical), use じみて."]],
      }),
      s("最近、彼女は所帯{じみた}格好をしている。", "さいきん、かのじょはしょたい{じみた}かっこうをしている。", "Lately, she's been dressing in a frumpy, domestic way.", {
        near: [["めいた", "めいた is \"showing signs of\", mostly neutral. For a critical \"smacking of\", use じみた."]],
      }),
      s("芝居{じみた}謝り方だった。", "しばい{じみた}あやまりかただった。", "It was a theatrical, insincere apology.", {
        near: [["らしい", "らしい is \"typical of\". For \"theatrical\" (critical), use じみた."]],
      }),
    ],
  }),

  point({
    id: "n1-buru",
    title: "〜ぶる",
    meaning: "act like, put on airs of",
    structure: "Noun / い-adj stem / な-adj stem + ぶる / ぶって / ぶった",
    related: ["n4-garu", "n3-furi"],
    explanation: `
**ぶる** means putting on an air of something you aren't, or making a show of it: 彼は偉ぶっている, "he's acting all important".

It follows a noun or adjective stem: 偉ぶる ("act important"), 学者ぶる ("act the scholar"), 上品ぶる ("act refined"), いい子ぶる ("play the good child"), 大人ぶる ("act grown-up"). It conjugates like a godan verb.

It's always a criticism or a gentle tease. Compare ふりをする (N3), "pretend to", which is a neutral description of deception. ぶる is about showing off.

Don't confuse it with がる (N4), which is about visibly showing a feeling: 痛がる, 欲しがる.
`,
    sentences: [
      s("彼はいつも偉{ぶって}いる。", "かれはいつもえら{ぶって}いる。", "He's always acting all important.", {
        near: [["がって", "がって shows someone's feelings (痛がる). For \"acting important\", use ぶって."]],
      }),
      s("彼は学者{ぶった}話し方をする。", "かれはがくしゃ{ぶった}はなしかたをする。", "He talks as if he's some kind of scholar.", {
        near: [["らしい", "らしい is \"typical of\". For \"acting like\", use ぶった."]],
      }),
      s("彼女は上品{ぶって}いるが、本当は下品だ。", "かのじょはじょうひん{ぶって}いるが、ほんとうはげひんだ。", "She puts on refined airs, but she's actually rather vulgar.", {
        near: [["がって", "がって shows someone's feelings. For \"putting on airs\", use ぶって."]],
      }),
      s("先生の前でいい子{ぶる}のはやめなさい。", "せんせいのまえでいいこ{ぶる}のはやめなさい。", "Stop playing the good kid in front of the teacher.", {
        near: [["がる", "がる shows someone's feelings. For \"playing the good kid\", use ぶる."]],
      }),
      s("彼女は大人{ぶって}、コーヒーをブラックで飲んだ。", "かのじょはおとな{ぶって}、コーヒーをブラックでのんだ。", "Trying to act grown-up, she drank her coffee black.", {
        near: [["らしく", "らしく is \"like a proper\". For \"trying to act\", use ぶって."]],
      }),
    ],
  }),

  point({
    id: "n1-gamashii",
    title: "〜がましい",
    meaning: "smacking of (unpleasantly), sounding like",
    structure: "Noun / Verb ます-stem + がましい",
    related: ["n1-jimiru"],
    explanation: `
**がましい** means an attitude or remark has an unpleasant flavour of something: 恩着せがましい言い方, "a patronising way of speaking, as if doing you a favour".

It combines with only a handful of words, so learn them as vocabulary:
- **恩着せがましい**: making a show of doing a favour.
- **言い訳がましい**: sounding like excuses.
- **押し付けがましい**: pushy.
- **未練がましい**: unable to let go.
- **差し出がましい**: presumptuous, forward. 差し出がましいようですが is a polite way to offer an unasked-for opinion.

It's always critical, or humble when used about yourself.
`,
    sentences: [
      s("恩着せ{がましい}言い方をするな。", "おんきせ{がましい}いいかたをするな。", "Don't talk as if you're doing me a favour.", {
        near: [["らしい", "らしい is \"typical of\". For \"smacking of (unpleasantly)\", use がましい."]],
      }),
      s("言い訳{がましい}ことは言いたくない。", "いいわけ{がましい}ことはいいたくない。", "I don't want to say anything that sounds like an excuse.", {
        near: [["っぽい", "っぽい is a casual \"-ish\". The set phrase is 言い訳がましい."]],
      }),
      s("押し付け{がましい}アドバイスはやめてほしい。", "おしつけ{がましい}アドバイスはやめてほしい。", "I wish you'd stop giving pushy advice.", {
        near: [["らしい", "らしい is \"typical of\". The set phrase is 押し付けがましい."]],
      }),
      s("差し出{がましい}ようですが、一言よろしいでしょうか。", "さしで{がましい}ようですが、ひとことよろしいでしょうか。", "I hope I'm not being presumptuous, but may I say something?", {
        near: [["っぽい", "っぽい is a casual \"-ish\". The set phrase is 差し出がましい."]],
      }),
      s("未練{がましい}ことを言うようだけど、もう一度会いたい。", "みれん{がましい}ことをいうようだけど、もういちどあいたい。", "I know it sounds like I can't let go, but I want to see you again.", {
        near: [["らしい", "らしい is \"typical of\". The set phrase is 未練がましい."]],
      }),
    ],
  }),

  point({
    id: "n1-zukume",
    title: "〜ずくめ",
    meaning: "nothing but, entirely",
    structure: "Noun + ずくめ(の + Noun / だ)",
    related: ["n3-darake", "n2-mamire"],
    explanation: `
**ずくめ** means something is made up entirely of one thing: 今年はいいことずくめだった, "this year was nothing but good things".

It's often positive: いいこと, めでたいこと ("happy events"), ごちそう ("feasts"). It also describes colour: 黒ずくめの服, "all in black". Occasionally it's negative: 規則ずくめの生活, "a life that's all rules".

Compare だらけ (N3), "full of", which is almost always negative and suggests mess (間違いだらけ, 傷だらけ), and まみれ (N2), "covered in (something messy)". ずくめ is about the overall character of a whole period or outfit. A quick test: if the thing is good, or it's a colour, ずくめ is almost always the answer.
`,
    sentences: [
      s("今年はいいこと{ずくめ}だった。", "ことしはいいこと{ずくめ}だった。", "This year was nothing but good things.", {
        near: [["だらけ", "だらけ is \"full of (bad things)\". For \"nothing but good things\", use ずくめ."]],
      }),
      s("彼女はいつも黒{ずくめ}の服を着ている。", "かのじょはいつもくろ{ずくめ}のふくをきている。", "She always dresses all in black.", {
        near: [["まみれ", "まみれ is \"covered in (something messy)\". For \"all in black\", use ずくめ."]],
      }),
      s("結婚に昇進と、めでたいこと{ずくめ}の一年だった。", "けっこんにしょうしんと、めでたいこと{ずくめ}のいちねんだった。", "With a wedding and a promotion, it was a year full of happy events.", {
        near: [["だらけ", "だらけ is \"full of (bad things)\". For \"full of happy events\", use ずくめ."]],
      }),
      s("規則{ずくめ}の生活にうんざりしている。", "きそく{ずくめ}のせいかつにうんざりしている。", "I'm fed up with a life that's all rules.", {
        accept: ["だらけ"],
        near: [["まみれ", "まみれ is \"covered in (something messy)\". For \"all rules\", use ずくめ."]],
      }),
      s("旅行中はごちそう{ずくめ}の毎日だった。", "りょこうちゅうはごちそう{ずくめ}のまいにちだった。", "Every day of the trip was one feast after another.", {
        near: [["だらけ", "だらけ is \"full of (bad things)\". For \"one feast after another\", use ずくめ."]],
      }),
    ],
  }),

  point({
    id: "n1-gurumi",
    title: "〜ぐるみ",
    meaning: "the whole (family, town), including everyone",
    structure: "Noun (家族, 町, 会社, 地域) + ぐるみ",
    related: ["n1-zukume"],
    explanation: `
**ぐるみ** means everyone or everything in a group is involved together: 家族ぐるみで付き合っている, "our whole families are friends".

It follows a group: 家族, 町, 会社, 地域 ("community"), 組織. It's used for joint activities (町ぐるみで祭りを準備する) and, in the news, for organised wrongdoing (会社ぐるみの不正, "company-wide fraud").

The fixed phrase **身ぐるみはがされる** means "be stripped of everything you own".

It comes from くるむ, "to wrap up". Compare ごと, "including, (swallowing) whole": 皮ごと食べる, "eat it skin and all". ぐるみ is about groups of people. It often comes before で or の: 家族ぐるみで, 会社ぐるみの.
`,
    sentences: [
      s("うちとあの家は、家族{ぐるみ}で付き合っている。", "うちとあのいえは、かぞく{ぐるみ}でつきあっている。", "Our two families are close friends.", {
        near: [["ごと", "ごと is \"including (swallowed whole)\". For \"the whole family together\", use ぐるみ."]],
      }),
      s("町{ぐるみ}で祭りの準備をした。", "まち{ぐるみ}でまつりのじゅんびをした。", "The whole town got the festival ready together.", {
        near: [["ごと", "ごと is \"including (swallowed whole)\". For \"the whole town together\", use ぐるみ."]],
      }),
      s("会社{ぐるみ}の不正が発覚した。", "かいしゃ{ぐるみ}のふせいがはっかくした。", "Company-wide fraud has come to light.", {
        near: [["ずくめ", "ずくめ is \"nothing but\". For \"company-wide\", use ぐるみ."]],
      }),
      s("地域{ぐるみ}で子どもたちを見守る。", "ちいき{ぐるみ}でこどもたちをみまもる。", "The whole community looks out for the children.", {
        near: [["ごと", "ごと is \"including (swallowed whole)\". For \"the whole community\", use ぐるみ."]],
      }),
      s("旅行中に強盗にあい、身{ぐるみ}はがされた。", "りょこうちゅうにごうとうにあい、み{ぐるみ}はがされた。", "I was robbed on holiday and stripped of everything I had.", {
        near: [["ずくめ", "ずくめ is \"nothing but\". The set phrase is 身ぐるみはがされる."]],
      }),
    ],
  }),

  point({
    id: "n1-nami",
    title: "〜並み",
    meaning: "on a par with, as … as, average",
    structure: "Noun + 並み(の + Noun / だ / に)",
    related: ["n3-kurai"],
    explanation: `
**並み** after a noun means "at the same level as": 彼の料理の腕はプロ並みだ, "his cooking is up there with a professional's".

It's used for comparisons of level or degree: プロ並み, 真夏並みの暑さ ("midsummer heat"), 台風並みの風 ("typhoon-strength wind").

人並み and 世間並み mean "like ordinary people, average": 人並みの生活がしたい, "I just want a normal life". 並み on its own also means "average, ordinary" (並の成績).

Compare 向き (N3), "suited to", and ぐらい (N3), "about". 並み is a compact way to say "as … as". It's especially common in weather reports and reviews, where a vivid comparison is wanted.
`,
    sentences: [
      s("彼の料理の腕はプロ{並み}だ。", "かれのりょうりのうではプロ{なみ}だ。", "His cooking is up there with a professional's.", {
        near: [["向き", "向き is \"suited to\". For \"on a par with\", use 並み.", "むき"]],
      }),
      s("今日は真夏{並み}の暑さだ。", "きょうはまなつ{なみ}のあつさだ。", "It's as hot as midsummer today.", {
        near: [["向き", "向き is \"suited to\". For \"as hot as\", use 並み.", "むき"]],
      }),
      s("私は人{並み}の生活がしたいだけだ。", "わたしはひと{なみ}のせいかつがしたいだけだ。", "I just want a normal life, like everyone else.", {
        near: [["らしい", "人らしい is \"humane\". For \"like everyone else\", use 人並み."]],
      }),
      s("昨夜は台風{並み}の強い風が吹いた。", "さくやはたいふう{なみ}のつよいかぜがふいた。", "Last night, there were typhoon-strength winds.", {
        near: [["向き", "向き is \"suited to\". For \"as strong as\", use 並み.", "むき"]],
      }),
      s("彼も世間{並み}に、結婚して家を買った。", "かれもせけん{なみ}に、けっこんしていえをかった。", "Like most people, he got married and bought a house.", {
        near: [["らしく", "らしく is \"typical of\". For \"like most people\", use 世間並みに."]],
      }),
    ],
  }),

  point({
    id: "n1-makuru",
    title: "〜まくる",
    meaning: "do like crazy, non-stop",
    structure: "Verb ます-stem + まくる",
    related: ["n2-nuku", "n3-kiru"],
    explanation: `
**まくる** after a verb stem means doing something relentlessly, over and over, with abandon: 休みの日は、ゲームをしまくった, "on my day off, I played games non-stop".

It's casual and energetic, and very common in conversation, blogs and manga: 食べまくる ("eat like crazy"), 買いまくる ("go on a shopping spree"), 撮りまくる, 歌いまくる.

It conjugates like a godan verb. There's often a note of excess or excitement, sometimes with consequences: 歌いまくって、声が出なくなった, "I sang so much I lost my voice".

Compare 切る (N3), "do completely", and 抜く (N2), "do all the way to the end". まくる is about quantity and intensity, not completion.
`,
    sentences: [
      s("休みの日は、ゲームをし{まくった}。", "やすみのひは、ゲームをし{まくった}。", "On my day off, I played games non-stop.", {
        near: [["きった", "きった is \"did completely\". For \"did like crazy\", use まくった."]],
      }),
      s("旅行先で写真を撮り{まくった}。", "りょこうさきでしゃしんをとり{まくった}。", "I took photos like crazy on the trip.", {
        near: [["ぬいた", "ぬいた is \"saw it through\". For \"like crazy\", use まくった."]],
      }),
      s("カラオケで歌い{まくって}、声が出なくなった。", "カラオケでうたい{まくって}、こえがでなくなった。", "I sang so much at karaoke that I lost my voice.", {
        near: [["きって", "きって is \"completely\". For \"so much\", use まくって."]],
      }),
      s("その試合で、彼は点を取り{まくった}。", "そのしあいで、かれはてんをとり{まくった}。", "He scored goal after goal in that match.", {
        near: [["ぬいた", "ぬいた is \"saw it through\". For \"goal after goal\", use まくった."]],
      }),
      s("セールで服を買い{まくった}。", "セールでふくをかい{まくった}。", "I went on a clothes-buying spree in the sale.", {
        near: [["きった", "きった is \"did completely\". For \"on a spree\", use まくった."]],
      }),
    ],
  }),

  point({
    id: "n1-mo-sokosoko-ni",
    title: "〜もそこそこに",
    meaning: "barely (finishing), hurriedly cutting short",
    structure: "Noun (挨拶, 食事, 準備) + もそこそこに",
    related: ["n2-mo-kamawazu"],
    explanation: `
**もそこそこに** means cutting something short, doing only the bare minimum because you're in a hurry to get to something else: 挨拶もそこそこに、本題に入った, "with barely a greeting, he got straight down to business".

The noun is something you'd normally do properly: 挨拶, 食事, 朝ご飯, 仕事, 宿題, 準備. The second half is the rush to the next thing: leaving, getting started, going out to play.

そこそこ on its own means "so-so, reasonably": そこそこおいしい. With も〜に, it becomes "only half-done".

Compare も構わず (N2), "without caring about", which ignores something completely.
`,
    sentences: [
      s("挨拶{もそこそこに}、彼は本題に入った。", "あいさつ{もそこそこに}、かれはほんだいにはいった。", "With barely a greeting, he got straight down to business.", {
        near: [["も構わず", "も構わず is \"without caring about\". For \"barely bothering with (in a hurry)\", use もそこそこに.", "もかまわず"]],
      }),
      s("朝ご飯{もそこそこに}、家を飛び出した。", "あさごはん{もそこそこに}、いえをとびだした。", "I rushed out of the house, barely touching my breakfast.", {
        near: [["も構わず", "も構わず is \"without caring about\". For \"barely touching\", use もそこそこに.", "もかまわず"]],
      }),
      s("彼は仕事{もそこそこに}、飲みに出かけた。", "かれはしごと{もそこそこに}、のみにでかけた。", "He knocked off work early and went out drinking.", {
        near: [["もかまわず", "もかまわず is \"without caring about\". For \"cutting work short\", use もそこそこに."]],
      }),
      s("息子は宿題{もそこそこに}、遊びに行ってしまった。", "むすこはしゅくだい{もそこそこに}、あそびにいってしまった。", "My son rushed through his homework and went off to play.", {
        near: [["もかまわず", "もかまわず is \"without caring about\". For \"rushing through\", use もそこそこに."]],
      }),
      s("準備{もそこそこに}、会議が始まった。", "じゅんび{もそこそこに}、かいぎがはじまった。", "The meeting started before we'd barely prepared.", {
        near: [["も構わず", "も構わず is \"without caring about\". For \"barely prepared\", use もそこそこに.", "もかまわず"]],
      }),
    ],
  }),
];
