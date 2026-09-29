import { point, s } from "../../build";

/** Opinions, standpoints, exclamations and the fixed phrases that carry them. */

export const viewpoint = [
  point({
    id: "n2-to-iu-mono-da",
    title: "〜というものだ",
    meaning: "that's what (X) is; that's simply",
    structure: "Noun / Plain form + というものだ",
    related: ["n2-to-iu-mono-dewa-nai", "n3-mono-da"],
    explanation: `
**というものだ** states a general truth or a firm judgement about the nature of something: 困っている人を助けるのが友達というものだ, "helping people in trouble is what friends are for".

It's often used to pass judgement on an action, calling it by its proper name: 一日で全部覚えるのは無理というものだ, "trying to learn it all in a day is simply impossible"; 人の物を黙って使うのは、失礼というものだ, "using someone's things without asking is just plain rude".

Nouns and な-adjectives attach directly, without だ. それが人生というものだ, "that's life", is a common sigh.

Compare ということだ, which reports or draws a conclusion. というものだ is the speaker's own verdict.
`,
    sentences: [
      s("困っている人を助けるのが友達{というものだ}。", "こまっているひとをたすけるのがともだち{というものだ}。", "Helping people in trouble is what friends are for.", {
        near: [["ということだ", "ということだ reports or concludes. For \"that's what X is\", use というものだ."]],
      }),
      s("一日で全部覚えるのは無理{というものだ}。", "いちにちでぜんぶおぼえるのはむり{というものだ}。", "Trying to learn it all in a day is simply impossible.", {
        near: [["ということだ", "ということだ reports or concludes. For \"that's simply\", use というものだ."]],
      }),
      s("人の物を黙って使うのは、失礼{というものだ}。", "ひとのものをだまってつかうのは、しつれい{というものだ}。", "Using someone's things without asking is just plain rude.", {
        near: [["というわけだ", "わけだ explains a reason. For \"that's just (rude)\", use というものだ."]],
      }),
      s("それが人生{というものだ}。", "それがじんせい{というものだ}。", "That's life.", {
        near: [["ということだ", "ということだ reports or concludes. For \"that's what life is\", use というものだ."]],
      }),
      s("彼一人に責任を押しつけるのは、不公平{というものだ}。", "かれひとりにせきにんをおしつけるのは、ふこうへい{というものだ}。", "Putting all the blame on him alone is simply unfair.", {
        near: [["というわけだ", "わけだ explains a reason. For \"that's simply (unfair)\", use というものだ."]],
      }),
    ],
  }),

  point({
    id: "n2-to-iu-mono-dewa-nai",
    title: "〜というものではない",
    meaning: "it doesn't follow that, not necessarily",
    structure: "Plain form (often ばいい) + というものではない / というものでもない",
    related: ["n2-to-iu-mono-da", "n3-to-wa-kagiranai", "n3-wake-de-wa-nai"],
    explanation: `
**というものではない** rejects a simple rule of thumb: お金があれば幸せになれるというものではない, "having money doesn't automatically make you happy".

It very often follows ばいい or ば + a result: 高ければいいというものではない, "expensive doesn't automatically mean good"; 謝れば済むというものではない, "an apology doesn't settle everything".

It's the speaker's opinion that a common assumption is too simple. **というものでもない** softens it slightly: "it's not always the case, either".

It overlaps with とは限らない and わけではない. というものではない is especially good for arguing against an oversimplified attitude, such as thinking that more effort, money or speed automatically brings better results.
`,
    sentences: [
      s("お金があれば幸せになれる{というものではない}。", "おかねがあればしあわせになれる{というものではない}。", "Having money doesn't automatically make you happy.", {
        accept: ["というものでもない", "というわけではない"],
        near: [["というものだ", "That's \"that's what it is\". For \"it doesn't follow that\", use というものではない."]],
      }),
      s("高ければいい{というものではない}。", "たかければいい{というものではない}。", "Expensive doesn't automatically mean good.", {
        accept: ["というものでもない", "というわけではない"],
        near: [["というものだ", "That's \"that's what it is\". For \"it doesn't follow that\", use というものではない."]],
      }),
      s("長く勉強すればいい{というものではない}。", "ながくべんきょうすればいい{というものではない}。", "It's not just a matter of studying for longer.", {
        accept: ["というものでもない", "というわけではない"],
        near: [["というものだ", "That's \"that's what it is\". For \"it's not just a matter of\", use というものではない."]],
      }),
      s("謝れば済む{というものではない}。", "あやまればすむ{というものではない}。", "An apology doesn't settle everything.", {
        accept: ["というものでもない", "というわけではない"],
        near: [["わけがない", "That's \"no way\". For \"it doesn't follow that\", use というものではない."]],
      }),
      s("早ければいい{というものでもない}。", "はやければいい{というものでもない}。", "Faster isn't always better, either.", {
        accept: ["というものではない"],
        near: [["わけがない", "That's \"no way\". For \"not always, either\", use というものでもない."]],
      }),
    ],
  }),

  point({
    id: "n2-kara-shite",
    title: "〜からして",
    meaning: "judging just from; starting with (even)",
    structure: "Noun + からして",
    related: ["n2-kara-suru-to"],
    explanation: `
**からして** picks out one small detail and says it's enough to judge the whole: 名前からして、面白そうな店だ, "just from the name, it looks like an interesting shop".

It also means "starting with even this", when one example stands for everything: この映画はタイトルからして怖い, "this film is scary, starting with the title". If even the title is scary, the rest surely is.

It's often used for criticism: あの態度からして、反省していない, "judging from that attitude alone, he's not sorry".

The detail is usually something basic or first: a name, a title, an attitude, a way of speaking. Compare からすると, which is a more neutral "judging from".
`,
    sentences: [
      s("名前{からして}、面白そうな店だ。", "なまえ{からして}、おもしろそうなみせだ。", "Just from the name, it looks like an interesting shop.", {
        near: [["からすると", "That works too. からして adds \"just from this alone\"."]],
      }),
      s("あの態度{からして}、反省していない。", "あのたいど{からして}、はんせいしていない。", "Judging from that attitude alone, he's not sorry at all.", {
        near: [["からすると", "That works too. からして adds \"just from this alone\"."]],
      }),
      s("この映画はタイトル{からして}怖い。", "このえいがはタイトル{からして}こわい。", "This film is scary, starting with the title.", {
        near: [["から", "から alone is \"from\". For \"starting with even\", use からして."]],
      }),
      s("彼は話し方{からして}、先生らしい。", "かれははなしかた{からして}、せんせいらしい。", "Even from the way he talks, he seems like a teacher.", {
        near: [["から", "から alone is \"from\". For \"even from\", use からして."]],
      }),
      s("この店は入口{からして}高そうだ。", "このみせはいりぐち{からして}たかそうだ。", "This shop looks expensive, starting with the entrance.", {
        near: [["から", "から alone is \"from\". For \"starting with even\", use からして."]],
      }),
    ],
  }),

  point({
    id: "n2-kara-suru-to",
    title: "〜からすると・〜から見ると",
    meaning: "judging from; from the standpoint of",
    structure: "Noun + からすると / からすれば / から見ると / から言うと",
    related: ["n2-kara-shite", "n2-ni-shite-mireba", "n3-ni-totte", "n1-tokoro-wo-miru-to"],
    explanation: `
**からすると** has two uses.

**Judging from** evidence: 空の様子からすると、もうすぐ雨が降りそうだ, "judging by the sky, it looks like it'll rain soon". The second half is usually a guess with ようだ, そうだ or らしい.

**From the standpoint of** a person or group: 親からすれば、子どもはいつまでも子どもだ, "to parents, their children are always children".

**から見ると** / **から見れば** and **から言うと** / **から言えば** work the same way: 日本人から見ると、この習慣は不思議だ, "from a Japanese point of view, this custom is strange".

Compare にとって, which is a standpoint for evaluations (important, difficult). からすると often explains why someone sees things differently.
`,
    sentences: [
      s("空の様子{からすると}、もうすぐ雨が降りそうだ。", "そらのようす{からすると}、もうすぐあめがふりそうだ。", "Judging by the sky, it looks like it'll rain soon.", {
        accept: ["からすれば", "から見ると"],
        near: [["にとって", "にとって is a point of view. For \"judging by\", use からすると."]],
      }),
      s("親{からすれば}、子どもはいつまでも子どもだ。", "おや{からすれば}、こどもはいつまでもこどもだ。", "To parents, their children are always children.", {
        accept: ["からすると", "から見れば", "から見ると"],
        near: [["によって", "That's \"depending on\". For \"from a parent's point of view\", use からすれば."]],
      }),
      s("彼の口ぶり{からすると}、何か知っているようだ。", "かれのくちぶり{からすると}、なにかしっているようだ。", "From the way he talks, he seems to know something.", {
        accept: ["からすれば"],
        near: [["にとって", "にとって is a point of view. For \"judging by\", use からすると."]],
      }),
      s("日本人{から見ると}、この習慣は不思議だ。", "にほんじん{からみると}、このしゅうかんはふしぎだ。", "From a Japanese point of view, this custom is strange.", {
        accept: ["からすると", "からすれば", "から見れば"],
        near: [["によると", "That's a source. For \"from the point of view of\", use から見ると."]],
      }),
      s("結果{から言うと}、計画は失敗だった。", "けっか{からいうと}、けいかくはしっぱいだった。", "Judging by the results, the plan was a failure.", {
        accept: ["からすると", "から言えば"],
        near: [["によると", "That's a source. For \"judging by\", use から言うと."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-shite-mireba",
    title: "〜にしてみれば・〜にしたら",
    meaning: "from (someone's) point of view, for (someone)",
    structure: "Person + にしてみれば / にしたら / にすれば",
    related: ["n2-kara-suru-to", "n3-ni-totte"],
    explanation: `
**にしてみれば** puts yourself in someone else's shoes and imagines how they feel: 子どもにしてみれば、親の心配はうるさいだけだ, "from the child's point of view, their parents' worrying is just annoying".

It's used for people or groups, and the second half is their likely feelings or reactions: 困る, 迷惑だ, 腹が立つ, うれしい. It often suggests their view differs from the speaker's.

**にしたら** and **にすれば** mean the same, and are a little more casual.

Compare にとって, which is a more neutral standpoint for judgements. にしてみれば stresses empathy: "if you were them, you'd feel…".
`,
    sentences: [
      s("子ども{にしてみれば}、親の心配はうるさいだけだ。", "こども{にしてみれば}、おやのしんぱいはうるさいだけだ。", "From the child's point of view, their parents' worrying is just annoying.", {
        accept: ["にしたら", "にすれば"],
        near: [["にとって", "That works too. にしてみれば imagines their feelings."]],
      }),
      s("彼女{にしたら}、迷惑な話だろう。", "かのじょ{にしたら}、めいわくなはなしだろう。", "From her point of view, it must be a real nuisance.", {
        accept: ["にしてみれば", "にすれば"],
        near: [["として", "として is a role. For \"from her point of view\", use にしたら."]],
      }),
      s("店{にしてみれば}、キャンセルは困る。", "みせ{にしてみれば}、キャンセルはこまる。", "For the shop, cancellations are a real problem.", {
        accept: ["にしたら", "にすれば"],
        near: [["として", "として is a role. For \"from the shop's point of view\", use にしてみれば."]],
      }),
      s("新入社員{にすれば}、会社のルールは難しい。", "しんにゅうしゃいん{にすれば}、かいしゃのルールはむずかしい。", "For new employees, company rules are hard to get used to.", {
        accept: ["にしたら", "にしてみれば"],
        near: [["によって", "That's \"depending on\". For \"for new employees\", use にすれば."]],
      }),
      s("待たされた人{にしてみれば}、腹が立つのも当然だ。", "またされたひと{にしてみれば}、はらがたつのもとうぜんだ。", "For the people who were kept waiting, it's only natural to be angry.", {
        accept: ["にしたら", "にすれば"],
        near: [["として", "として is a role. For \"from their point of view\", use にしてみれば."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kakete-wa",
    title: "〜にかけては",
    meaning: "when it comes to (skill)",
    structure: "Noun + にかけては / にかけても",
    related: ["n2-ni-kakete", "n3-ni-kanshite"],
    explanation: `
**にかけては** introduces a field in which someone is especially good: 料理にかけては、母に勝てる人はいない, "when it comes to cooking, no one can beat my mother".

The second half praises ability, often in superlatives: 誰にも負けない ("second to none"), 天才だ, 一番だ, 右に出る者はいない ("no one surpasses").

It's used for positive skills and qualities, not for criticism. It's often used to boast modestly about oneself, too: 足の速さにかけては、誰にも負けない.

The は is what makes it "when it comes to". Without it, にかけて means "from … to" (a span). にかけても adds "even", for extra emphasis.
`,
    sentences: [
      s("料理{にかけては}、母に勝てる人はいない。", "りょうり{にかけては}、ははにかてるひとはいない。", "When it comes to cooking, no one can beat my mother.", {
        accept: ["にかけても"],
        near: [["にかけて", "Without は, it's \"from … to\". For \"when it comes to\", use にかけては."]],
      }),
      s("足の速さ{にかけては}、誰にも負けない。", "あしのはやさ{にかけては}、だれにもまけない。", "When it comes to speed, I'm second to none.", {
        accept: ["にかけても"],
        near: [["にかけて", "Without は, it's \"from … to\". For \"when it comes to\", use にかけては."]],
      }),
      s("彼は数学{にかけては}天才だ。", "かれはすうがく{にかけては}てんさいだ。", "When it comes to maths, he's a genius.", {
        near: [["について", "について is \"about\". For \"when it comes to (skill)\", use にかけては."]],
      }),
      s("歌{にかけては}、クラスで一番だ。", "うた{にかけては}、クラスでいちばんだ。", "When it comes to singing, they're the best in the class.", {
        near: [["について", "について is \"about\". For \"when it comes to (skill)\", use にかけては."]],
      }),
      s("忍耐強さ{にかけては}、彼女の右に出る者はいない。", "にんたいづよさ{にかけては}、かのじょのみぎにでるものはいない。", "When it comes to patience, no one can match her.", {
        accept: ["にかけても"],
        near: [["にかけて", "Without は, it's \"from … to\". For \"when it comes to\", use にかけては."]],
      }),
    ],
  }),

  point({
    id: "n2-koto-ni",
    title: "〜ことに",
    meaning: "to (my) surprise, (unfortunately, strangely)",
    structure: "Emotion adjective / Verb た-form + ことに",
    related: ["n2-koto-kara", "n2-koto-ka"],
    explanation: `
**ことに** at the start of a sentence gives the speaker's feeling about what follows: 驚いたことに、彼は一人で全部やった, "to my surprise, he did it all himself".

It follows words of emotion: 驚いた, 残念な, うれしい, 不思議な, ありがたい, 困った. Together they work like English adverbs: "surprisingly", "unfortunately", "to my delight", "strangely", "thankfully".

It's written and slightly formal, common in essays, speeches and narration. In conversation, people often just say 残念だけど or びっくりしたけど.

Don't confuse it with ことから ("from the fact that") or ことで ("by doing").
`,
    sentences: [
      s("驚いた{ことに}、彼は一人で全部やった。", "おどろいた{ことに}、かれはひとりでぜんぶやった。", "To my surprise, he did it all by himself.", {
        near: [["ことから", "ことから is \"from the fact that\". For \"to my surprise\", use ことに."]],
      }),
      s("残念な{ことに}、試合は中止になった。", "ざんねんな{ことに}、しあいはちゅうしになった。", "Unfortunately, the match was called off.", {
        near: [["ことで", "ことで is \"by doing\". For \"unfortunately\", use 残念なことに."]],
      }),
      s("うれしい{ことに}、友達が会いに来てくれた。", "うれしい{ことに}、ともだちがあいにきてくれた。", "To my delight, a friend came to see me.", {
        near: [["ことから", "ことから is \"from the fact that\". For \"to my delight\", use ことに."]],
      }),
      s("不思議な{ことに}、誰もその音を聞いていなかった。", "ふしぎな{ことに}、だれもそのおとをきいていなかった。", "Strangely, nobody had heard the sound.", {
        near: [["ことで", "ことで is \"by doing\". For \"strangely\", use 不思議なことに."]],
      }),
      s("ありがたい{ことに}、みんなが手伝ってくれた。", "ありがたい{ことに}、みんながてつだってくれた。", "Thankfully, everyone helped me.", {
        near: [["ことから", "ことから is \"from the fact that\". For \"thankfully\", use ありがたいことに."]],
      }),
    ],
  }),

  point({
    id: "n2-koto-ka",
    title: "〜ことか",
    meaning: "how (very)! (exclamation)",
    structure: "どんなに / 何度 / どれほど + Plain form + ことか",
    related: ["n2-koto-ni", "n2-mono-ka"],
    explanation: `
**ことか** turns a sentence into a heartfelt exclamation: 合格の知らせを聞いて、どんなにうれしかったことか, "how happy I was to hear I'd passed!"

It usually pairs with a question word of degree: どんなに, どれほど, どれだけ ("how much") or 何度 ("how many times"). The sentence looks like a question, but it's really an emphatic statement.

It's common for strong feelings (joy, loneliness, longing) and for exasperation: 何度注意したことか, "how many times have I told you!"

It's literary and a bit dramatic. Don't confuse it with ものか, "as if I would!", which is a refusal.
`,
    sentences: [
      s("合格の知らせを聞いて、どんなにうれしかった{ことか}。", "ごうかくのしらせをきいて、どんなにうれしかった{ことか}。", "How happy I was to hear I'd passed!", {
        near: [["ものか", "ものか is \"as if I would\". For \"how (very)!\", use ことか."]],
      }),
      s("何度注意した{ことか}。", "なんどちゅういした{ことか}。", "How many times have I told you!", {
        near: [["ことだ", "ことだ is advice. For an exclamation, use ことか."]],
      }),
      s("一人で暮らすのがどれほど寂しい{ことか}。", "ひとりでくらすのがどれほどさびしい{ことか}。", "You have no idea how lonely it is to live alone.", {
        near: [["ものか", "ものか is \"as if I would\". For \"how (very)!\", use ことか."]],
      }),
      s("この日をどんなに待っていた{ことか}。", "このひをどんなにまっていた{ことか}。", "How long I've waited for this day!", {
        near: [["ものか", "ものか is \"as if I would\". For \"how (very)!\", use ことか."]],
      }),
      s("母の料理がどれだけ懐かしかった{ことか}。", "ははのりょうりがどれだけなつかしかった{ことか}。", "How I missed my mother's cooking!", {
        near: [["ことだ", "ことだ is advice. For an exclamation, use ことか."]],
      }),
    ],
  }),

  point({
    id: "n2-mono-ka",
    title: "〜ものか・〜もんか",
    meaning: "as if (I) would!, no way",
    structure: "Plain form + ものか / もんか / ものですか",
    related: ["n2-koto-ka", "n2-kkonai", "n3-wake-ga-nai"],
    explanation: `
**ものか** is a strong, emotional refusal or denial: あんな店、二度と行くものか, "as if I'd ever go to that shop again!" It looks like a question, but it means "never".

It's used for the speaker's own determination (負けるもんか, "there's no way I'm losing!") or disbelief (信じるものか, "as if I'd believe that!").

In casual speech, it's **もんか**; a softer, more feminine version is ものですか.

Compare ことか, which is an exclamation of degree ("how very!"). ものか is always a flat rejection. The meaning is close to わけがない, but much more emotional.
`,
    sentences: [
      s("あんな店、二度と行く{ものか}。", "あんなみせ、にどといく{ものか}。", "As if I'd ever go to that shop again!", {
        accept: ["もんか"],
        near: [["ことか", "ことか is \"how (very)!\". For \"as if I would\", use ものか."]],
      }),
      s("負ける{もんか}。", "まける{もんか}。", "There's no way I'm losing!", {
        accept: ["ものか"],
        near: [["ことか", "ことか is \"how (very)!\". For \"no way\", use もんか."]],
      }),
      s("こんな所で諦める{ものか}。", "こんなところであきらめる{ものか}。", "I'm not giving up here!", {
        accept: ["もんか"],
        near: [["ものだ", "ものだ is a general truth. For \"as if I would\", use ものか."]],
      }),
      s("彼の言うことなんか、信じる{ものか}。", "かれのいうことなんか、しんじる{ものか}。", "As if I'd believe anything he says!", {
        accept: ["もんか"],
        near: [["ことか", "ことか is \"how (very)!\". For \"as if I would\", use ものか."]],
      }),
      s("こんなまずい料理、食べられる{ものか}。", "こんなまずいりょうり、たべられる{ものか}。", "There's no way anyone could eat food this bad!", {
        accept: ["もんか"],
        near: [["ものだ", "ものだ is a general truth. For \"no way\", use ものか."]],
      }),
    ],
  }),

  point({
    id: "n2-mono-dewa-nai",
    title: "〜ものではない",
    meaning: "you shouldn't (it's not done)",
    structure: "Verb dictionary form + ものではない (casual: もんじゃない)",
    related: ["n3-mono-da", "n3-beki"],
    explanation: `
**ものではない** states a social rule: something people shouldn't do. 人の悪口を言うものではない, "you shouldn't speak ill of others".

It's the negative of ものだ (N3) in its "social norm" use. It's what parents, teachers and elders say when correcting behaviour, and it sounds like a general principle rather than a personal order.

The polite form is ものではありません; in speech, it's もんじゃない.

Compare べきではない, which is the speaker's opinion. ものではない appeals to common sense: "that's just not done". It's often said to children, and it can sound old-fashioned or preachy between adults.
`,
    sentences: [
      s("人の悪口を言う{ものではない}。", "ひとのわるくちをいう{ものではない}。", "You shouldn't speak ill of others.", {
        accept: ["ものじゃない", "もんじゃない"],
        near: [["ことではない", "For what people in general shouldn't do, use ものではない."]],
      }),
      s("目上の人に、そんな言い方をする{ものではない}。", "めうえのひとに、そんないいかたをする{ものではない}。", "You shouldn't talk to your elders like that.", {
        accept: ["ものじゃない", "もんじゃない"],
        near: [["べきだ", "That's \"should\". For \"shouldn't\", use ものではない."]],
      }),
      s("食べ物を無駄にする{ものではない}。", "たべものをむだにする{ものではない}。", "You shouldn't waste food.", {
        accept: ["ものじゃない", "もんじゃない"],
        near: [["べきだ", "That's \"should\". For \"shouldn't\", use ものではない."]],
      }),
      s("人の手紙を勝手に読む{ものではありません}。", "ひとのてがみをかってによむ{ものではありません}。", "You shouldn't read other people's letters without permission.", {
        accept: ["ものじゃありません"],
        near: [["ことではありません", "For what people in general shouldn't do, use ものではありません."]],
      }),
      s("子どもが夜遅くまで遊ぶ{ものではない}。", "こどもがよるおそくまであそぶ{ものではない}。", "Children shouldn't stay out playing so late.", {
        accept: ["ものじゃない", "もんじゃない"],
        near: [["ことではない", "For what people in general shouldn't do, use ものではない."]],
      }),
    ],
  }),

  point({
    id: "n2-mono-ga-aru",
    title: "〜ものがある",
    meaning: "there's something (about it); is truly",
    structure: "Plain form + ものがある (な-adj + な)",
    related: ["n3-mono-da", "n4-koto-ga-aru"],
    explanation: `
**ものがある** expresses a strong impression that the speaker finds hard to put into words: 彼の歌には、心を打つものがある, "there's something about his singing that really moves you".

It follows a verb or adjective describing the effect: 心を打つ, 引きつける, 大変な, 驚く, 感心させられる. The subject usually has には: 彼の歌には, この絵には.

It's evaluative and a little formal, common in reviews, essays and speeches. It's softer and more reflective than just saying 感動的だ or 大変だ.

Don't confuse it with ことがある, "sometimes" or "have (done)". ものがある is about a quality you sense.
`,
    sentences: [
      s("彼の歌には、心を打つ{ものがある}。", "かれのうたには、こころをうつ{ものがある}。", "There's something about his singing that really moves you.", {
        near: [["ことがある", "ことがある is \"sometimes\". For \"there's something about\", use ものがある."]],
      }),
      s("一人で海外に住むのは、大変な{ものがある}。", "ひとりでかいがいにすむのは、たいへんな{ものがある}。", "Living abroad on your own is genuinely hard.", {
        near: [["ことがある", "ことがある is \"sometimes\". For \"is genuinely\", use ものがある."]],
      }),
      s("この絵には、人を引きつける{ものがある}。", "このえには、ひとをひきつける{ものがある}。", "There's something captivating about this painting.", {
        near: [["ことがある", "ことがある is \"sometimes\". For \"there's something about\", use ものがある."]],
      }),
      s("彼女の努力には、感心させられる{ものがある}。", "かのじょのどりょくには、かんしんさせられる{ものがある}。", "There's something truly admirable about her effort.", {
        near: [["ことがある", "ことがある is \"sometimes\". For \"there's something about\", use ものがある."]],
      }),
      s("子どもの成長の早さには、驚く{ものがある}。", "こどものせいちょうのはやさには、おどろく{ものがある}。", "How fast children grow is truly astonishing.", {
        near: [["ことがある", "ことがある is \"sometimes\". For \"is truly\", use ものがある."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-koshita-koto-wa-nai",
    title: "〜に越したことはない",
    meaning: "it's best to, you can't go wrong with",
    structure: "Plain form / Noun + に越したことはない",
    related: ["n2-ni-kagiru", "n5-hou-ga-ii", "n1-ni-shiku-wa-nai"],
    explanation: `
**に越したことはない** means nothing could be better than this: 用心するに越したことはない, "it's best to be careful". 越す means "to go beyond", so it's "nothing goes beyond this".

It's used for common-sense advice where the point is obvious: cheaper is better (安いに越したことはない), earlier is better (早いに越したことはない), it's good to have savings (貯金はあるに越したことはない).

It often implies "but it's not essential": the ideal would be this, even if it's not always possible.

Compare ほうがいい, which is direct advice. に越したことはない sounds wiser and more general. Nouns and な-adjectives can take である, but often attach directly.
`,
    sentences: [
      s("用心する{に越したことはない}。", "ようじんする{にこしたことはない}。", "It's best to be careful.", {
        near: [["しかない", "That's \"no choice but\". For \"it's best to\", use に越したことはない."]],
      }),
      s("安い{に越したことはない}。", "やすい{にこしたことはない}。", "Cheaper is always better.", {
        near: [["ことはない", "ことはない is \"no need\". For \"it's best\", use に越したことはない."]],
      }),
      s("準備は早い{に越したことはない}。", "じゅんびははやい{にこしたことはない}。", "When it comes to preparation, the earlier the better.", {
        near: [["ことはない", "ことはない is \"no need\". For \"it's best\", use に越したことはない."]],
      }),
      s("貯金はある{に越したことはない}。", "ちょきんはある{にこしたことはない}。", "It's always better to have savings.", {
        near: [["しかない", "That's \"no choice but\". For \"it's always better\", use に越したことはない."]],
      }),
      s("事故が起きないように、気をつける{に越したことはない}。", "じこがおきないように、きをつける{にこしたことはない}。", "It's best to be careful so that accidents don't happen.", {
        near: [["ことだ", "That works too. This point practises に越したことはない."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kagiru",
    title: "〜に限る",
    meaning: "(X) is the best, nothing beats",
    structure: "Noun / Verb dictionary form / ない-form + に限る",
    related: ["n2-ni-koshita-koto-wa-nai", "n2-ni-kagitte"],
    explanation: `
**に限る** means "the best thing is": 疲れた時は、寝るに限る, "when you're tired, the best thing is to sleep". 限る means "to limit", so it's "limited to this one": nothing else will do.

It's the speaker's personal conviction, often about everyday pleasures: 夏は冷たいビールに限る, "in summer, nothing beats a cold beer"; 寒い日は温泉に限る.

It follows a noun or a verb in the dictionary or ない-form. The first half often sets a situation with は or 時は.

Compare に越したことはない, which is more general advice, and に限って, "of all times", which is completely different.
`,
    sentences: [
      s("疲れた時は、寝る{に限る}。", "つかれたときは、ねる{にかぎる}。", "When you're tired, the best thing is to sleep.", {
        near: [["に限らない", "That's \"not limited to\". For \"the best thing is\", use に限る."]],
      }),
      s("夏は冷たいビール{に限る}。", "なつはつめたいビール{にかぎる}。", "In summer, nothing beats a cold beer.", {
        near: [["に限って", "That's \"of all times\". For \"nothing beats\", use に限る."]],
      }),
      s("旅行は春{に限る}。", "りょこうははる{にかぎる}。", "Spring is the best time to travel.", {
        near: [["に限って", "That's \"of all times\". For \"the best\", use に限る."]],
      }),
      s("嫌なことがあった日は、早く寝る{に限る}。", "いやなことがあったひは、はやくねる{にかぎる}。", "On a bad day, the best thing is an early night.", {
        near: [["しかない", "That's \"no choice but\". For \"the best thing is\", use に限る."]],
      }),
      s("寒い日は温泉{に限る}。", "さむいひはおんせん{にかぎる}。", "On a cold day, nothing beats a hot spring.", {
        near: [["に限って", "That's \"of all times\". For \"nothing beats\", use に限る."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-tsuki",
    title: "〜につき",
    meaning: "due to; per (on notices and prices)",
    structure: "Noun + につき",
    related: ["n3-tame-reason", "n5-ni-per"],
    explanation: `
**につき** has two uses, both typical of signs, notices and official writing.

**Due to**: it gives the reason for a notice: 工事中につき、立ち入り禁止, "no entry: construction in progress"; 本日は定休日につき, "as today is our regular holiday".

**Per**: it gives a rate: 参加費は一人につき千円です, "the fee is 1,000 yen per person"; 一回につき, "each time".

It's very formal and compact. In conversation, the reason would be ので or ため, and the rate あたり or に. Don't confuse it with について, "about", even though the two look very alike on a page.
`,
    sentences: [
      s("工事中{につき}、立ち入り禁止。", "こうじちゅう{につき}、たちいりきんし。", "No entry: construction in progress.", {
        near: [["について", "について is \"about\". On notices, \"due to\" is につき."]],
      }),
      s("本日は定休日{につき}、お休みさせていただきます。", "ほんじつはていきゅうび{につき}、おやすみさせていただきます。", "We're closed today for our regular day off.", {
        near: [["によって", "That's \"by\". On notices, \"due to\" is につき."]],
      }),
      s("参加費は一人{につき}千円です。", "さんかひはひとり{につき}せんえんです。", "The fee is 1,000 yen per person.", {
        accept: ["あたり"],
        near: [["ずつ", "That works in speech. In prices, \"per\" is につき."]],
      }),
      s("雨天{につき}、試合は中止します。", "うてん{につき}、しあいはちゅうしします。", "The match is cancelled due to rain.", {
        near: [["について", "について is \"about\". On notices, \"due to\" is につき."]],
      }),
      s("一回{につき}、三百円かかります。", "いっかい{につき}、さんびゃくえんかかります。", "It costs 300 yen each time.", {
        accept: ["あたり"],
        near: [["ごとに", "That works too. This point practises につき."]],
      }),
    ],
  }),

  point({
    id: "n2-to-itta",
    title: "〜といった",
    meaning: "such as, like",
    structure: "Noun や Noun + といった + Noun",
    related: ["n5-nado", "n3-wo-hajime"],
    explanation: `
**といった** introduces examples of a category: 京都や奈良といった古い町が好きだ, "I like old towns such as Kyoto and Nara".

The examples usually come in a list with や or と, and the category follows: 日本料理, スポーツ, 高い買い物. It's like などの, but a little more formal and descriptive.

With a negative, これといった means "nothing in particular": これといった趣味はない, "I don't have any hobby in particular".

Compare という ("called"), which names one specific thing, and をはじめ, which leads a list with its most important member. といった implies the list could go on.
`,
    sentences: [
      s("京都や奈良{といった}古い町が好きだ。", "きょうとやなら{といった}ふるいまちがすきだ。", "I like old towns such as Kyoto and Nara.", {
        accept: ["などの", "のような"],
        near: [["という", "という names one thing. For \"such as\" with a list, use といった."]],
      }),
      s("すしや天ぷら{といった}日本料理は人気がある。", "すしやてんぷら{といった}にほんりょうりはにんきがある。", "Japanese dishes such as sushi and tempura are popular.", {
        accept: ["などの", "のような"],
        near: [["という", "という names one thing. For \"such as\" with a list, use といった."]],
      }),
      s("車や家{といった}高い買い物は、よく考えてから決めたい。", "くるまやいえ{といった}たかいかいものは、よくかんがえてからきめたい。", "With big purchases like a car or a house, I want to think carefully first.", {
        accept: ["などの", "のような"],
        near: [["という", "という names one thing. For \"such as\" with a list, use といった."]],
      }),
      s("これ{といった}趣味はない。", "これ{といった}しゅみはない。", "I don't have any hobby in particular.", {
        near: [["という", "The set phrase is これといった."]],
      }),
      s("サッカーや野球{といった}スポーツが得意だ。", "サッカーややきゅう{といった}スポーツがとくいだ。", "I'm good at sports like football and baseball.", {
        accept: ["などの", "のような"],
        near: [["として", "として is \"as\". For \"such as\", use といった."]],
      }),
    ],
  }),
];
