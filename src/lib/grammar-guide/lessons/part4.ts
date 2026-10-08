import type { Lesson } from "../types";

/** Part 4: more verb forms and the speaker's attitude: asking, obliging, guessing, passives, politeness. */

export const requests: Lesson = {
  slug: "requests-commands",
  title: "Invitations, requests and commands",
  description:
    "Let's do it (volitional), please do it (て-form and ください), do it! (imperative), don't do it (な and ないで): the forms for getting other people to act, from gentle suggestion to blunt order.",
  points: ["n5-mashou", "n5-masen-ka", "n5-naide-kudasai", "n4-volitional", "n4-imperative", "n4-nasai", "n4-polite-requests", "n4-you-to-omou"],
  body: `
When you want someone to do something, Japanese has a ladder of forms from very gentle to very blunt. In stories you'll see all of them, and the choice tells you a lot about the speaker and the relationship.

## Suggestions: ましょう and the volitional

**Polite stem + ましょう** is "let's" or "shall we":

> 一緒|いっしょ|together ; に ; 行き|いき|go ; *ましょう|let's
= Let's go together.

> そろそろ ; 始め|はじめ|begin ; *ましょう|let's
= Let's start soon.

The plain version is the **volitional form**:

| Type | How | Example |
| --- | --- | --- |
| ru-verb | drop る, add **よう** | 食べる → 食べよう |
| u-verb | change final u-sound to the **o-row** + **う** | 書く → 書こう、飲む → 飲もう、行く → 行こう、買う → 買おう |
| する | **しよう** | |
| 来る | **来よう** (こよう) | |

> 映画|えいが|movie ; を ; 見|み|see ; *よう|let's
= Let's watch a movie.

> 帰ろう|かえろう|go home
= Let's go home.

The same form has another job: "I'm thinking of doing". **〜(よ)うと思う** reports an intention.

> 来年|らいねん|next year ; 日本|にほん|Japan ; に ; 行こう|いこう|go ; *と思っている|とおもっている|I'm thinking
= I'm thinking of going to Japan next year.

## Invitations: ませんか

A negative question is the polite way to invite. 

> 一緒|いっしょ|together ; に ; 食べ|たべ|eat ; *ませんか|won't you
= Won't you eat with me?

Compare with ましょう ("let's"). 〜ませんか is softer: it gives the listener room to say no. Casually: 行かない？ (won't you go?) or 行こうよ (let's go!).

## Requests: ください and its relatives

You met **て-form + ください**. Here's the whole ladder, from gentlest to bluntest:

| Form | Feel |
| --- | --- |
| お願いします | please (do me the favour), polite |
| 〜ていただけませんか | could you possibly... (very polite) |
| 〜てくださいませんか | would you kindly... |
| 〜てください | please do |
| 〜てくれませんか | won't you do for me (a bit casual) |
| 〜てくれる？ | will you? (casual) |
| 〜て | do it (casual, to friends) |

> ちょっと ; 手伝って|てつだって|help ; *いただけませんか|could you
= Could you help me for a moment?

> 窓|まど|window ; を ; 開けて|あけて|open ; *くれる|will you
= Will you open the window?

> 静かに|しずかに|quietly ; して|do ; *ください|please
= Please be quiet.

### Please don't

**ない-form + で + ください** asks someone not to do something.

> ここ|here ; で ; 写真|しゃしん|photos ; を ; 撮ら|とら|take ; *ないでください|please don't
= Please don't take photos here.

## Orders: the imperative

The **imperative** is a direct command. It's blunt, used by drill sergeants, angry parents and manga heroes.

| Type | Imperative |
| --- | --- |
| ru-verb | drop る, add **ろ**: 食べろ |
| u-verb | change to the **e-row**: 書け、飲め、行け、待て |
| する | **しろ** |
| 来る | **来い** (こい) |

> *走れ|はしれ|run
= Run!

> *止まれ|とまれ|stop
= Stop!

The negative command is **dictionary form + な**:

> *行くな|いくな|don't go
= Don't go!

This is the form on signs like 止まれ (stop) and 触るな (don't touch), and in action-story dialogue. Don't use it with anyone you want to stay friends with.

### Softer: なさい

**Polite stem + なさい** is a firm but not rude command, the way a parent or teacher speaks:

> 早く|はやく|quickly ; 寝|ね|sleep ; *なさい|(command)
= Go to bed now.

## Casual and written ways to say "please"

You'll also see:

- **〜てください** in signs and writing: 押してください (please push).
- **お〜ください**: ご注意ください (please be careful), formal.
- **〜(て)ほしい**: I want you to do it.
- **〜てもらえませんか**: "could I have you do it"? polite.

## Reading the register

When a character in a story uses 〜ろ or 〜な, they're being rough, angry or close. When they use 〜てください, they're polite or distant. When they use 〜て, they're friendly. So the form tells you about the relationship before you read a single word of the context.

## Key points

- **ましょう / volitional (よう, おう)**: let's. Also, with と思う: I'm thinking of.
- **ませんか / ない？**: inviting.
- **てください**: please do. **ないでください**: please don't.
- **Imperative** (食べろ, 書け, しろ, 来い) and **〜な** are blunt commands.
- **なさい** is a firm parental command.
`,
};

export const obligation: Lesson = {
  slug: "must-may",
  title: "Must, must not, may and should",
  description:
    "Obligation, permission and prohibition in Japanese: なければならない, てもいい, てはいけない, ほうがいい and relatives. These look long, but they're built from parts you already know.",
  points: ["n5-nakereba-naranai", "n5-nakute-wa-ikenai", "n5-nakute-mo-ii", "n5-te-mo-ii", "n5-te-wa-ikenai", "n5-hou-ga-ii", "n4-hitsuyou"],
  body: `
These patterns are made of two ideas you already have: the negative stem **なけれ** and the conditional **ば / ては**. Understand the logic and you can build any of them yourself.

## May: てもいい

**て-form + もいい** — "even if you do it, it's fine" — gives permission.

> 食べて|たべて|eat ; *もいい|may
= You may eat.

> ここ|here ; に ; 座って|すわって|sit ; *もいいですか|may I
= May I sit here?

Without a question mark and with a rising tone, てもいいですか is how you ask permission. The answer is いいですよ (sure) or ちょっと… (that's a problem).

## Must not: てはいけない

**て-form + はいけない** — "if you do it, it won't do" — forbids.

> ここ|here ; で ; 泳い|およい|swim ; *ではいけない|mustn't
= You mustn't swim here.

> 嘘|うそ|lie ; を ; ついて|tell ; *はいけません|mustn't
= You must not tell lies.

In casual speech, **〜ちゃだめ / 〜じゃだめ** is more common (食べちゃだめ: don't eat it!).

## Must: なければならない

**ない-form without い + ければならない** — "if you don't do it, it won't do" — expresses obligation.

> 勉強し|べんきょうし|study ; *なければならない|must
= I have to study.

The logic: 勉強しない (don't study) + ければ (if) + ならない (it won't do) = if you don't study, it won't do. So you must.

There are several interchangeable forms:

| Form | Feel |
| --- | --- |
| 〜なければならない | formal, written |
| 〜なければいけない | everyday |
| 〜なくてはいけない | everyday |
| 〜なきゃ | casual (spoken) |
| 〜ないと | casual (spoken) |

> 早く|はやく|early ; 帰ら|かえら|return ; *なきゃ|must
= I've got to go home soon.

> もう ; 行か|いか|go ; *ないと|must
= I've got to go now.

In speech, the end of the sentence is often dropped. You'll hear 行かなきゃ… and 行かないと… and understand them from context. Both mean "I have to go."

## Don't have to: なくてもいい

**ない-form without い + くてもいい** — "even if you don't do it, it's fine".

> 明日|あした|tomorrow ; は ; 来|こ|come ; *なくてもいい|don't have to
= You don't have to come tomorrow.

Compare it carefully with the "must" family:

| | Pattern | Meaning |
| --- | --- | --- |
| 食べてもいい | て-form + もいい | may eat |
| 食べなくてもいい | ない-stem + くてもいい | need not eat |
| 食べなければならない | ない-stem + ければならない | must eat |
| 食べてはいけない | て-form + はいけない | mustn't eat |

## Should: ほうがいい

**Past form + ほうがいい** gives advice: "it's better to...". The verb is in the past form even though the advice is about the future.

> 早く|はやく|early ; 寝た|ねた|slept ; *ほうがいい|better
= You'd better go to bed early.

> お酒|おさけ|alcohol ; は ; 飲まない|のまない|don't drink ; *ほうがいい|better
= It's better not to drink alcohol.
+ For a negative, the verb stays in the ない form: 飲まないほうがいい.

Another word for "should" is **べき**: dictionary form + べきだ. It is firmer: a moral "ought".

> 約束|やくそく|promise ; は ; 守る|まもる|keep ; *べきだ|ought
= One ought to keep promises.

## Needing: 必要がある

Beyond the verb patterns, **必要がある** (there is a need) and **〜が必要だ** express necessity as a noun.

> パスポート|passport ; が ; *必要|ひつよう|necessary ; です
= A passport is necessary.

## Key points

- **てもいい**: may. **てはいけない**: must not.
- **なければならない / なくてはいけない / なきゃ**: must.
- **なくてもいい**: don't have to.
- **ほうがいい**: should, advisable (past form for positive, ない-form for negative).
- **べき**: ought to.
`,
};

export const passive: Lesson = {
  slug: "passive",
  title: "The passive: things that happen to you",
  description:
    "How the passive is built, and the two ways Japanese uses it that English doesn't: the 'adversity' passive (something bad happened to me) and the polite, neutral passive.",
  points: ["n4-passive", "n4-passive-trouble"],
  body: `
The passive turns the sentence around: instead of "the dog bit me", "I was bitten by the dog". It exists in English, but Japanese has a wider use, including something English doesn't have at all.

## How to make it

| Type | How | Example |
| --- | --- | --- |
| ru-verb | drop る, add **られる** | 食べる → 食べられる |
| u-verb | change to the **あ-row** + **れる** | 書く → 書かれる、飲む → 飲まれる、買う → 買われる |
| する | **される** | |
| 来る | **来られる** (こられる) | |

The passive is a ru-verb, so it conjugates like one: 食べられた, 食べられない.

:::warn Passive and potential look the same
For ru-verbs the passive and the potential have exactly the same form: 食べられる can mean "is eaten" or "can eat". Context decides. For u-verbs they differ: 書かれる (passive) vs 書ける (potential). Also, 来られる and 見られる can be passive, potential or honorific. Read the context.
:::

## The direct passive

Like English: the person who does the action takes **に**; the one affected is the topic.

> 先生|せんせい|teacher ; *に|by ; 褒められた|ほめられた|was praised
= I was praised by the teacher.

> この ; 本|ほん|book ; は ; 多く|おおく|many ; の ; 人|ひと|people ; *に|by ; 読まれている|よまれている|is read
= This book is read by many people.

The doer takes に (or, with certain verbs such as 作る, によって).

## The adversity passive

This is the one English doesn't have. In Japanese you can use the passive for something that **happens to you and affects you badly**, even when English would use an ordinary active verb with no "passive" at all.

> 雨|あめ|rain ; に ; *降られた|ふられた|was rained on
= I got caught in the rain. (The rain "rained at me".)

> 友達|ともだち|friend ; に ; 日記|にっき|diary ; を ; *読まれた|よまれた|had read
= My friend read my diary on me. (And I'm upset.)

> 子供|こども|child ; に ; *泣かれた|なかれた|was cried at
= My child cried on me. (It troubled me.)

Notice 降られた: in English, "it rained" has no object, but in Japanese the person affected is the topic, and the passive of 降る says they suffered the rain. This kind of passive is called the **suffering passive** or **adversity passive**. It shows up in everyday complaints and is a good thing to recognise: whenever a verb is in passive form but the English translation sounds odd, it might be a "this happened to me and I didn't like it" sentence.

## The neutral passive

Written Japanese uses the passive to describe facts without naming who did them, which is common in news and formal writing:

> 日本語|にほんご|Japanese ; は ; 多く|おおく|many ; の ; 国|くに|countries ; で ; *話されている|はなされている|is spoken
= Japanese is spoken in many countries.

> 新しい|あたらしい|new ; 駅|えき|station ; が ; *建てられた|たてられた|was built
= A new station was built.

Here no one is blamed, and no one is hurt. It's just a neutral way of describing something without needing to say who did it.

## Passive as honorific

The same passive form (**れる / られる**) is also used for **respect**. A speaker may say 先生が来られた meaning "the teacher came" with respect. You'll learn more about that in the lesson on polite language.

## Key points

- Build: ru-verb + **られる**; u-verb **あ-row + れる**; する → **される**; 来る → **来られる**.
- Doer is marked with **に**.
- **Adversity passive**: something happened to you and it troubled you.
- Neutral passive for facts in news and writing.
- The same form can be potential or honorific; context tells you.
`,
};

export const causative: Lesson = {
  slug: "causative",
  title: "The causative: make and let",
  description:
    "せる/させる for 'make someone do' and 'let someone do', させてください for asking permission, and the causative-passive for 'was made to'.",
  points: ["n4-causative", "n4-causative-passive", "n4-sasete-kudasai"],
  body: `
The causative is the form for **making** or **letting** someone do something.

## How to make it

| Type | How | Example |
| --- | --- | --- |
| ru-verb | drop る, add **させる** | 食べる → 食べさせる |
| u-verb | change to the **あ-row** + **せる** | 書く → 書かせる、飲む → 飲ませる、買う → 買わせる |
| する | **させる** | |
| 来る | **来させる** (こさせる) | |

The causative is a ru-verb: 食べさせた, 食べさせない.

## Make: forcing or ordering

> 先生|せんせい|teacher ; は ; 生徒|せいと|student ; に ; 宿題|しゅくだい|homework ; を ; *させた|made do
= The teacher made the students do homework.

The person made to do it takes **に** (or を for verbs that have no object):

> 母|はは|mother ; は ; 弟|おとうと|younger brother ; を ; 買い物|かいもの|shopping ; に ; *行かせた|いかせた|made go
= Mother sent my brother to go shopping.

The rule: if the verb already has a を object, the person takes に. If the verb has no object, the person can take を (to be forced) or に (to be allowed).

## Let: giving permission

The same form can mean "allow" or "let".

> 親|おや|parents ; は ; 子供|こども|child ; に ; 好きな|すきな|liked ; こと ; を ; *させた|let do
= The parents let their child do what he likes.

Which one it is, "make" or "let", depends on context: a harsh teacher "makes", a kind parent "lets".

## させてください: let me

**Causative te-form + ください** means "please let me", the most useful causative.

> 私|わたし|me ; に ; *やらせて|let do ; ください
= Please let me do it.

> 少し|すこし|a little ; *考えさせて|かんがえさせて|let me think ; ください
= Please let me think about it for a moment.

> ちょっと ; *使わせて|つかわせて|let me use ; もらえますか
= Could I borrow it for a moment?

In these, you are asking for permission. Because the causative gives them the power to say yes or no, it sounds humble.

## Causative-passive: was made to

Combine causative and passive and you get "was made to do" (a forced action, usually unwelcome).

| Type | How | Example |
| --- | --- | --- |
| ru-verb | させ + **られる** | 食べさせられる |
| u-verb | **あ-row + せられる** (or short form **される**) | 書かされる、飲まされる、行かされる |
| する | **させられる** | |

> 子供|こども|child ; の ; とき ; 野菜|やさい|vegetables ; を ; *食べさせられた|たべさせられた|was made to eat
= When I was a child, I was made to eat vegetables.

> 上司|じょうし|boss ; に ; 残業|ざんぎょう|overtime ; を ; *させられた|was made to do
= I was made to work overtime by my boss.

You can imagine the speaker grumbling. That's why this form is common in complaints and in stories about authority.

:::key Picture the chain
The causative-passive stacks two meanings: "someone made me do it" (causative) + "it happened to me" (passive). Break it into parts and you can read any of them.
:::

## Key points

- Causative: ru-verb **させる**; u-verb **あ-row + せる**; する → **させる**.
- Means *make* (force) or *let* (allow), decided by context.
- The person made to act takes **に** (or を when the verb has no object).
- **させてください**: please let me.
- Causative-passive: **was made to do**, usually with complaint.
`,
};

export const guessing: Lesson = {
  slug: "guessing-appearance",
  title: "Guessing, appearances and hearsay",
  description:
    "でしょう, かもしれない, はず, そう, よう, らしい and みたい: eight ways to say how sure you are and how you know. Includes the difference between 'looks like', 'seems like' and 'I heard'.",
  points: ["n5-deshou", "n4-kamoshirenai", "n4-hazu", "n4-sou-looks", "n4-sou-hearsay", "n4-you-da", "n4-rashii", "n4-mitai"],
  body: `
Japanese speakers constantly mark how they know something and how confident they are. There are many patterns, but they sort into a few groups.

## How sure am I?

From most to least sure:

| Pattern | Feeling | Example |
| --- | --- | --- |
| 〜に違いない | I'm sure | 彼は来るに違いない。 |
| 〜はずだ | should be, expected | 彼は来るはずだ。 |
| 〜だろう / でしょう | probably | 彼は来るだろう。 |
| 〜かもしれない | might | 彼は来るかもしれない。 |

> 彼|かれ|he ; は ; 来る|くる|come ; *に違いない|にちがいない|surely
= He must be coming.

> 彼|かれ|he ; は ; 来る|くる|come ; *はずだ|should
= He should be coming. (as far as I know)

> 明日|あした|tomorrow ; は ; 雨|あめ|rain ; *だろう|probably
= It'll probably rain tomorrow.

> 彼|かれ|he ; は ; 来る|くる|come ; *かもしれない|might
= He might come.

### だろう / でしょう

**だろう** (plain) and **でしょう** (polite) are "probably". With rising tone, でしょう? becomes "right?":

> 明日|あした|tomorrow ; は ; 雨|あめ|rain ; *でしょう|probably
= It will probably rain tomorrow.

> 美味しい|おいしい|delicious ; *でしょう|right
= Delicious, isn't it?

### かもしれない

Short for かもしれません (polite) / かも (casual). Take the plain form.

> 間に合わない|まにあわない|won't make it ; *かも|maybe
= I might not make it.

### はず

**Plain form + はず** is "should be, expected to be", based on knowledge or logic. Its negative is **はずがない** ("there's no way").

> あの ; 人|ひと|person ; が ; 知らない|しらない|doesn't know ; *はずがない|no way
= There's no way he doesn't know.

## How do I know?

### そう: it looks like (appearance)

**Stem + そう** says something looks like it's going to happen, from what you can see.

> このケーキ ; は ; おいし|delicious ; *そう|looks
= This cake looks delicious.

> 今にも|いまにも|at any moment ; 雨|あめ|rain ; が ; 降り|ふり|fall ; *そう|looks like
= It looks like it's about to rain.

Note: the stem of the い-adjective loses い (おいし + そう); the stem of a verb is the polite stem (降り + そう). The exceptions: **よさそう** (looks good) and **なさそう** (doesn't look like there is).

### そうだ: I heard (hearsay)

**Plain form + そうだ** reports what you heard.

> 明日|あした|tomorrow ; は ; 雨|あめ|rain ; *だそうだ|I heard
= I hear it'll rain tomorrow.

Compare: 雨が降りそうだ (it looks like rain) vs 雨が降るそうだ (I heard it will rain). The difference is just the form before そうだ: stem for appearance, plain for hearsay.

### ようだ / みたい: it seems

**Plain form + ようだ** (formal) or **みたい** (casual) says something seems to be so, based on the speaker's own senses or reasoning.

> 外|そと|outside ; は ; 寒い|さむい|cold ; *ようだ|seems
= It seems to be cold outside.

> 彼|かれ|he ; は ; 疲れている|つかれている|is tired ; *みたい|seems
= He seems tired.

With nouns, ようだ/みたい also make comparisons: 夢のようだ ("it's like a dream"), 子供みたい ("like a child").

### らしい: apparently, hearsay-based

**Plain form + らしい** means "apparently" based on what you've heard, or "typical of":

> 彼|かれ|he ; は ; 結婚する|けっこんする|marry ; *らしい|apparently
= Apparently he's getting married.

> 男|おとこ|man ; *らしい|like a man ; 人|ひと|person
= a manly person

### Which one?

| Pattern | Source of information |
| --- | --- |
| 〜そう (stem) | what I can see, a first impression |
| 〜そうだ (plain) | what someone told me |
| 〜ようだ / みたい | my own reasoning from evidence |
| 〜らしい | what I've heard, secondhand |

They overlap; careful speakers choose carefully, but beginners often use them interchangeably without issue.

## Key points

- Confidence: に違いない > はず > だろう > かもしれない.
- **Stem + そう** = looks like. **Plain + そうだ** = I heard.
- **ようだ / みたい** = it seems. **らしい** = apparently.
- **はずがない** = no way.
`,
};

export const politeSpeech: Lesson = {
  slug: "keigo",
  title: "Polite language: keigo",
  description:
    "Respectful and humble speech, explained as a system: honorific forms for others' actions, humble forms for your own, the special verbs worth learning, and how to recognise them in anime, drama and customer service.",
  points: ["n4-sonkeigo", "n4-kenjougo", "n4-o-ni-naru", "n4-o-suru", "n4-kudasaru-itadaku", "n4-de-gozaimasu", "n4-sonkei-reru"],
  body: `
Japanese has three levels of politeness, and you can see them in the verbs. The levels aren't ranks of formality only; they express **who is above whom**.

| Level | Used for | Example (to eat) |
| --- | --- | --- |
| Plain | friends, family, yourself | 食べる |
| Polite (ます) | strangers, colleagues | 食べます |
| Honorific / humble | customers, bosses, formal | 召し上がる / いただく |

You already know plain and polite. This lesson is the third level: **keigo** (敬語).

## Two directions

Keigo has two directions, and which one you use depends on whose action it is.

- **Honorific (尊敬語)**: raise the other person by describing **their** action in a respectful way.
- **Humble (謙譲語)**: lower **yourself** by describing **your own** action in a modest way.

> 先生|せんせい|teacher ; が ; *いらっしゃる|honorific "come"
= The teacher comes.

> 私|わたし|I ; が ; *参る|まいる|humble "come"
= I come.

Never use humble forms for someone else's action, or honorific forms for your own.

## Honorific patterns

### お〜になる

**お + polite stem + になる** raises the other person's action.

> 先生|せんせい|teacher ; は ; もう ; *お帰りになりました|おかえりになりました|has gone home
= The teacher has already gone home.

| Plain | Honorific |
| --- | --- |
| 読む | お読みになる |
| 書く | お書きになる |
| 待つ | お待ちになる |

For する-verbs: **ご + noun + になる** (ご利用になる, ご覧になる).

### れる/られる

The passive form can be used honorifically. It's a quick, light way to be polite.

> 社長|しゃちょう|president ; は ; 何時|なんじ|what time ; に ; *来られます|こられます|will come ; か
= What time will the president come?

### Special verbs

Many common verbs have their own honorific and humble forms. These are worth learning because they're everywhere.

| Plain | Honorific | Humble |
| --- | --- | --- |
| する | なさる | いたす |
| 行く | いらっしゃる | 参る / 伺う |
| 来る | いらっしゃる / お見えになる | 参る |
| いる | いらっしゃる | おる |
| 言う | おっしゃる | 申す / 申し上げる |
| 食べる / 飲む | 召し上がる | いただく |
| 見る | ご覧になる | 拝見する |
| 知っている | ご存じ | 存じている |
| くれる | くださる | |
| あげる | | さしあげる |
| もらう | | いただく |
| 会う | | お目にかかる |
| 聞く | | 伺う |

> 何|なに|what ; を ; *召し上がります|めしあがります|eat ; か
= What would you like to eat?

> 私|わたし|I ; は ; 田中|たなか|Tanaka ; と ; *申します|もうします|am called
= My name is Tanaka.

> 先生|せんせい|teacher ; は ; 何|なん|what ; と ; *おっしゃいました|said ; か
= What did the teacher say?

## Humble patterns

### お〜する / お〜いたす

**お + polite stem + する** presents your action as a service to the other person.

> 荷物|にもつ|luggage ; を ; *お持ちします|おもちします|will carry
= Let me carry your luggage.

> 後|あと|later ; で ; *お送りいたします|おおくりいたします|will send
= I'll send it to you later.

### いただく / くださる

**〜ていただく** (humble, receive a favour) and **〜てくださる** (honorific, they give a favour) are polite versions of 〜てもらう / 〜てくれる.

> 先生|せんせい|teacher ; が ; 教えて|おしえて|teaching ; *くださった|gave
= The teacher kindly taught me.

> 教えて|おしえて|teach ; *いただけませんか|could I
= Could you please teach me?

## ございます

**ございます** is the polite form of ある, and **でございます** of です, used in shops and announcements.

> こちら|this ; が ; メニュー ; *でございます|is
= Here is the menu.

## Why you need to know it

You do not need to speak keigo at the start. But you'll hear it constantly: shops, trains, announcements, anime with butlers or noble families, formal dramas, and business. You need to **recognise** it so that you do not get confused when 食べる becomes 召し上がる and 来る becomes いらっしゃる.

When you hear the honorific verbs, ask: *whose action is this?* If it's the other person's, it's honorific. If it's the speaker's own, it's humble.

## Key points

- **Honorific** (尊敬語) elevates the other person's actions; **humble** (謙譲語) lowers your own.
- Patterns: **お〜になる** (honorific), **お〜する** (humble).
- Learn the special verbs: いらっしゃる, おっしゃる, 召し上がる, いただく, 申す, 伺う, くださる.
- **ございます** is polite ある; **でございます** is polite です.
`,
};

export const comparing: Lesson = {
  slug: "comparing-degree",
  title: "Comparing things and measuring degree",
  description:
    "より, のほうが, 一番, ほど and the little words that limit and emphasise: だけ, しか, ばかり, も, さえ and でも. Short patterns, constant in real Japanese.",
  points: ["n5-yori", "n5-yori-no-hou-ga", "n5-ichiban", "n5-dake", "n5-shika-nai", "n4-bakari", "n4-demo-even", "n4-mo-number"],
  body: `
## Comparing two things: より and のほうが

**A より B のほうが 〜** says B is more 〜 than A. **より** marks the thing compared against.

> 犬|いぬ|dog ; *より|than ; 猫|ねこ|cat ; *のほうが|is more ; 好き|すき|liked
= I like cats more than dogs.

> 電車|でんしゃ|train ; *のほうが|is more ; バス|bus ; *より|than ; 速い|はやい|fast
= The train is faster than the bus.

You can drop either half when it's clear:

> こちら|this one ; *のほうが|is more ; 安い|やすい|cheap|やすい|cheap
= This one is cheaper.

To ask which of two: どちらのほうが 〜 ですか。

## The most: 一番

**一番 + adjective** — "the most".

> これ|this ; が ; *一番|いちばん|most ; 好き|すき|liked
= I like this the best.

> 日本|にほん|Japan ; で ; *一番|いちばん|most ; 高い|たかい|tall ; 山|やま|mountain
= the tallest mountain in Japan

## As much as: ほど

**ほど** is "to the extent of", and in a negative sentence it says "not as 〜 as".

> 今日|きょう|today ; は ; 昨日|きのう|yesterday ; *ほど|as ; 寒く|さむく|cold ; ない
= Today isn't as cold as yesterday.

Same as: **と同じくらい / 同じ** ("the same as"):

> 彼|かれ|he ; は ; 私|わたし|me ; *と同じくらい|とおなじくらい|about as ; 背|せ|height ; が ; 高い|たかい|tall
= He's about as tall as I am.

## Only: だけ and しか

**だけ** means "only", **しか** means "nothing but" and always goes with a **negative**.

> 水|みず|water ; *だけ|only ; 飲んだ|のんだ|drank
= I only drank water.

> 水|みず|water ; *しか|nothing but ; 飲まなかった|のまなかった|didn't drink
= I drank nothing but water. (There was nothing else.)

The English sentences are nearly identical, but しか adds a feeling of "so little". 100円しかない — "I've only got 100 yen" — suggests disappointment.

## Only, mostly: ばかり

**ばかり** means "nothing but, all the time" and often shows a complaint.

> ゲーム|game ; *ばかり|only ; している|is doing
= He does nothing but play games.

## Even: さえ and でも

**さえ** and **でも** mean "even": the extreme case. It implies "if even this, then of course the rest".

> 子供|こども|child ; *でも|even ; 分かる|わかる|understands
= Even a child understands.

> 自分|じぶん|oneself ; の ; 名前|なまえ|name ; *さえ|even ; 忘れた|わすれた|forgot
= I even forgot my own name.

## Emphasising a number: も

**も after a number** means "as many as, a whole":

> 三時間|さんじかん|three hours ; *も|as many as ; 待った|まった|waited
= I waited for no less than three hours.

> 一人|ひとり|one person ; *も|not even ; いない|there isn't
= There isn't a single person.

## Key points

- **A より B のほうが** = B more than A. **一番** = the most.
- **ほど + negative** = not as 〜 as.
- **だけ** = only. **しか + negative** = nothing but.
- **ばかり** = nothing but (often with complaint).
- **さえ / でも** = even. **Number + も** = as many as.
`,
};
