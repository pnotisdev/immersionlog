import type { Lesson } from "../types";

/** Added Part 4 lessons: suggesting, negative forms, transitive pairs, becoming and making, intention, self, wishes. */

export const suggesting: Lesson = {
  slug: "suggesting",
  title: "Offering, suggesting and asking opinions",
  description:
    "ましょうか and ようか for offers, たらどう and てはどう for suggestions, でも for 'how about something like', and how to ask 'what shall we do?' without sounding pushy.",
  points: ["n5-mashou-ka", "n5-masen-ka", "n4-tara-dou", "n4-demo-suggest", "n4-ba-ii"],
  body: `
## Offering: ましょうか

**Polite stem + ましょうか** = "shall I...?". It's an offer to do something for the other person.

> 荷物|にもつ|luggage ; を ; 持ち|もち|carry ; *ましょうか|shall I
= Shall I carry your luggage?

> 窓|まど|window ; を ; 開け|あけ|open ; *ましょうか|shall I
= Shall I open the window?

The answer is お願いします (please do) or 大丈夫です (it's fine, no need).

Casual: **volitional + か**. 持とうか？ 開けようか？

> 手伝って|てつだって|help ; *あげようか|shall I
= Want me to help?

## Shall we? ましょうか with a group

The same form, with "we" implied, becomes "shall we?":

> そろそろ ; 帰り|かえり|go home ; *ましょうか|shall we
= Shall we head home?

> 何|なに|what ; を ; 食べ|たべ|eat ; *ましょうか|shall we
= What shall we eat?

## Inviting: ませんか

A reminder. **ませんか** invites, gently: "Won't you...?"

> 一緒|いっしょ|together ; に ; 行き|いき|go ; *ませんか|won't you
= Won't you come with me?

## Suggesting: たらどう

**Past form + らどう(ですか)** = "how about doing...?", more direct than an invitation.

> 病院|びょういん|hospital ; に ; 行った|いった|go ; *らどう|how about ; ですか
= Why don't you go to the hospital?

> 少し|すこし|a little ; 休んだ|やすんだ|rest ; *らどう|how about
= Why not rest a bit?

**て-form + はどう** is similar and softer:

> 先生|せんせい|teacher ; に ; 聞いて|きいて|ask ; *はどう|how about ; ですか
= How about asking the teacher?

## Noun + は どう

For a noun, **は どう (ですか)** = "how about...?":

> コーヒー ; は ; *どう|how about ; ですか
= How about some coffee?

> 明日|あした|tomorrow ; は ; *どう|how about
= How about tomorrow?

Use **にしましょう / にしよう** to pick one:

> じゃあ ; ラーメン ; *にしよう|let's go with
= Okay, let's go with ramen.

## Suggestion with でも

**Noun + でも** = "something like... maybe".

> お茶|おちゃ|tea ; *でも|or something ; 飲み|のみ|drink ; ませんか
= Shall we have some tea or something?

It softens the suggestion: not necessarily tea, but something of that sort.

## Advice: ばいい / といい / ほうがいい

**ば-form + いい** or **たらいい** = "it would be good if you...":

> 先生|せんせい|teacher ; に ; 聞け|きけ|ask ; *ばいい|should
= You should just ask the teacher.

> 早く|はやく|early ; 寝る|ねる|sleep ; *といい|it'd be good
= You'd better sleep early.

**ほうがいい** (earlier lesson) is a stronger "had better".

## "What shall we do?"

Open questions:

- どうしましょうか — What shall we do?
- どうすればいいですか — What should I do?
- どうしたらいいでしょうか — What should I do (I wonder)?
- 何にしますか — What will you have?

> *どうすれば|what to do ; いい ; です ; か
= What should I do?

## Key points

- **ましょうか**: "shall I / shall we". **ませんか**: "won't you?"
- **たらどう / てはどう**: "how about doing".
- **Noun + は どう / でも**: "how about / something like".
- **ばいい / といい**: advice.
`,
};

export const negativeForms: Lesson = {
  slug: "negative-forms",
  title: "More negatives: なくて, ないで, ず(に), and the double negative",
  description:
    "Four ways to connect a negative to what follows, how ない-form adjectives behave, the old negative ぬ/ん, and why 'not unlike' sentences like 行かないことはない are so common.",
  points: ["n4-naku-naru", "n4-naide", "n4-zu-ni", "n4-naito", "n5-naide-kudasai", "n5-nakereba-naranai"],
  body: `
## ない is an adjective

The negative ない is an い-adjective, so it has all the forms of one:

| | |
| --- | --- |
| 食べない | doesn't eat |
| 食べなかった | didn't eat |
| 食べなくて | doesn't eat, so... |
| 食べなければ | if one doesn't eat |
| 食べなく(なる) | become not eating |

Everything you learned about い-adjectives applies.

## なくて: not, therefore

**なくて** gives a reason or a state, like the て-form of the adjective:

> 勉強し|べんきょうし|study ; *なくて|not ; 困った|こまった|was troubled
= I was in trouble because I didn't study.

> 彼|かれ|he ; が ; 来|こ|come ; *なくて|not ; 寂しい|さびしい|lonely
= I'm lonely because he hasn't come.

It describes a negative **state or feeling** that follows. For deliberate actions, don't use it.

## ないで: without doing

**ないで** says one action happens *without* another:

> 朝ご飯|あさごはん|breakfast ; を ; 食べ|たべ|eat ; *ないで|without ; 学校|がっこう|school ; に ; 行った|いった|went
= I went to school without eating breakfast.

> 何も|なにも|anything ; 言わ|いわ|say ; *ないで|without ; 出て|でて|leave ; 行った|いった|went
= He left without saying anything.

It also makes a request: **ないでください** = "please don't".

### なくて vs ないで

| なくて | ないで |
| --- | --- |
| reason / state | manner: "without" |
| くて (like an adjective) | で (like て-form) |
| 会えなくて寂しい | 会わないで帰った |

A shortcut: if the sentence says *because I didn't*, use なくて. If it says *while not*, use ないで.

## ずに: the formal "without"

**ず(に)** is the written, formal, or slightly old-fashioned equivalent of ないで.

> 何も|なにも|anything ; 言わ|いわ|say ; *ずに|without ; 出て|でて|leave ; 行った|いった|went
= He left without saying anything.

Make it by replacing ない with ず: 食べず, 行かず, 知らず. **する** becomes **せず**: 勉強せずに.

## ぬ and ん: spoken and archaic negatives

An older negative, **ぬ**, survives in set phrases and in speech as **ん**:

- 知らん (I don't know)
- 分からん (I don't get it)
- 〜せぬ (does not)
- 〜ません (the polite negative began as ます + ぬ)

Some dialects use ん everywhere. In fiction, a character who says 知らん is usually gruff or from the Kansai area.

## Double negatives are soft yeses

A double negative is a gentle way of saying yes:

| | |
| --- | --- |
| 行かないことはない | I'm not saying I won't go (maybe I will) |
| 分からなくはない | It's not that I don't understand |
| 食べないわけではない | It's not that I don't eat |
| できなくもない | It's not that it can't be done |

> 分から|わから|understand ; *なくはない|not that I don't
= I do sort of understand.

These are soft agreements. Rather than a flat "yes", the speaker keeps some reserve.

## Negative + と: "must"

You know **ないと** (must) from earlier. Remember:

> 行か|いか|go ; *ないと|or else
= I have to go. (If I don't go...)

Spoken, the second half is dropped.

## 〜ないでいる and 〜ずにいる

State of not doing:

> 彼|かれ|he ; は ; 結婚し|けっこんし|marry ; *ないでいる|remains without
= He has remained unmarried.

## Negative questions

A negative question often seeks agreement or makes a polite invitation: 行かない？ 分からない？

> これ|this ; 、 ; 美味しく|おいしく|tasty ; *ない|isn't it
= Isn't this tasty?

## Key points

- ない is an い-adjective: なかった, なくて, なければ.
- **なくて**: reason or state. **ないで**: without (doing). **ず(に)**: formal "without".
- **ん / ぬ**: spoken or old negative.
- **〜ないことはない / 〜なくはない**: soft "yes, in a way".
`,
};

export const transitivePairs: Lesson = {
  slug: "transitive-pairs",
  title: "Transitive and intransitive pairs: 開ける and 開く",
  description:
    "Japanese has two verbs where English has one: one for someone opening something, one for something opening by itself. How to tell them apart, the particles each takes, and why ている and てある choose between them.",
  points: ["n4-transitivity", "n4-te-aru", "n5-te-iru-state"],
  body: `
English uses one verb for both "I opened the door" and "the door opened". Japanese uses two different verbs.

| | Transitive (someone does it) | Intransitive (it happens) |
| --- | --- | --- |
| open | ドアを**開ける** | ドアが**開く** |
| close | ドアを**閉める** | ドアが**閉まる** |

> 私|わたし|I ; が ; ドア|door ; を ; *開けた|あけた|opened
= I opened the door.

> ドア|door ; が ; *開いた|あいた|opened
= The door opened (by itself).

A **transitive** verb has someone doing it to something and takes **を**. An **intransitive** verb just happens and takes **が** with its subject.

## Common pairs

| Meaning | Intransitive (が) | Transitive (を) |
| --- | --- | --- |
| open | 開く あく | 開ける あける |
| close | 閉まる しまる | 閉める しめる |
| turn on | つく | つける |
| go out / turn off | 消える きえる | 消す けす |
| begin | 始まる はじまる | 始める はじめる |
| end | 終わる おわる | 終える おえる |
| stop | 止まる とまる | 止める とめる |
| move | 動く うごく | 動かす うごかす |
| enter / put in | 入る はいる | 入れる いれる |
| exit / put out | 出る でる | 出す だす |
| rise / raise | 上がる あがる | 上げる あげる |
| fall / drop | 落ちる おちる | 落とす おとす |
| break | 壊れる こわれる | 壊す こわす |
| split | 割れる われる | 割る わる |
| change | 変わる かわる | 変える かえる |
| be fixed / fix | 直る なおる | 直す なおす |
| wake / wake up | 起きる おきる | 起こす おこす |
| line up | 並ぶ ならぶ | 並べる ならべる |
| gather | 集まる あつまる | 集める あつめる |
| be decided / decide | 決まる きまる | 決める きめる |
| be found / find | 見つかる みつかる | 見つける みつける |

### Patterns in the pairs

There are common shapes. Intransitive often ends in **〜る/〜う/〜く** where the transitive ends in **〜す/〜める/〜げる/〜ける**:

- 〜**る** (が) ↔ 〜**す** (を): 落ちる/落とす, 壊れる/壊す, 直る/直す
- 〜**まる** (が) ↔ 〜**める** (を): 閉まる/閉める, 始まる/始める, 決まる/決める
- 〜**る** ↔ 〜**ける**: 開く/開ける, つく/つける

These are tendencies, not rules. Learn each pair as a unit, like 開く/開ける.

> 電気|でんき|light ; を ; *消した|けした|turned off
> 電気|でんき|light ; が ; *消えた|きえた|went out
= I turned off the light. / The light went out.

## Why it matters: ている and てある

You met these in an earlier lesson. They use the two kinds of verb differently.

| | Pattern | Meaning |
| --- | --- | --- |
| ドアが**開いている** | intransitive + ている | the door is open (a plain state) |
| ドアが**開けてある** | transitive + てある | the door has been opened (someone did it, on purpose) |

> 窓|まど|window ; が ; *開いている|あいている|is open
> 窓|まど|window ; が ; *開けてある|あけてある|has been opened (and left)
= The window is open. / The window has been left open (on purpose).

So 窓が開いている describes a state that just is; 窓が開けてある tells you someone arranged it.

## Responsibility: transitive vs intransitive

Japanese speakers choose a verb to show whether a person is responsible. Intransitive can be a way to avoid blame or to talk about an accident:

> 財布|さいふ|wallet ; が ; *見つからない|みつからない|can't be found
= I can't find my wallet. (Literally: my wallet isn't being found.)

> 花瓶|かびん|vase ; が ; *割れた|われた|broke
= The vase broke. (Not "I broke it.")

When someone does admit responsibility, the transitive appears:

> 私|わたし|I ; が ; 花瓶|かびん|vase ; を ; *割った|わった|broke
= I broke the vase.

## Reading tip

If you see を with a verb, it's transitive, and someone is doing it. If you see が with a verb and no を, it's likely intransitive: it happens. When a verb surprises you, check whether its partner exists: 壊す (break something) has 壊れる (be broken).

## Key points

- Many verbs come in pairs: **intransitive (が)** and **transitive (を)**.
- Common sound patterns help, but learn each pair.
- **intransitive + ている**: state; **transitive + てある**: deliberately arranged state.
- Intransitive can express an accident or avoid blame.
`,
};

export const becomingMaking: Lesson = {
  slug: "becoming-making",
  title: "なる and する: becoming, choosing and making",
  description:
    "The two most useful verbs in Japanese for expressing change: なる for what becomes, する for what is made or chosen. With nouns, adjectives, and the polite 'is' that's really 'becomes'.",
  points: ["n5-naru", "n5-ni-suru", "n5-ku-suru", "n4-koto-ni-naru", "n4-koto-ni-suru", "n4-you-ni-naru", "n4-you-ni-suru"],
  body: `
## なる: become

**Noun + になる**, **い-adjective (く) + なる**, **な-adjective + になる**:

| | Pattern | Example |
| --- | --- | --- |
| noun | 〜になる | 先生になる (become a teacher) |
| い-adj | 〜くなる | 寒くなる (get cold) |
| な-adj | 〜になる | 静かになる (get quiet) |
| verb | 〜ようになる | 話せるようになる (come to be able to) |

> 彼|かれ|he ; は ; 医者|いしゃ|doctor ; *になった|became
= He became a doctor.

> だんだん ; 寒く|さむく|cold ; *なってきた|has become
= It's gradually getting colder.

> 日本語|にほんご|Japanese ; が ; 話せる|はなせる|can speak ; *ようになった|came to
= I've become able to speak Japanese.

## する: make, choose, decide

**する** works with the same pieces, but someone is making the change:

| | Pattern | Example |
| --- | --- | --- |
| noun | 〜にする | これにする (I'll take this) |
| い-adj | 〜くする | 小さくする (make small) |
| な-adj | 〜にする | きれいにする (make clean) |
| verb | 〜ようにする | 毎日書くようにする (try to write daily) |

> 部屋|へや|room ; を ; *きれいにした|made clean
= I cleaned up the room.

> 音|おと|sound ; を ; *小さくして|ちいさくして|make small ; ください
= Please turn the sound down.

> 私|わたし|I ; は ; コーヒー ; *にします|I'll have
= I'll have coffee.

## なる vs する

**Is someone causing it?**

| Natural change | Deliberate change |
| --- | --- |
| 部屋がきれいになった | 部屋をきれいにした |
| 寒くなった | 寒くした |
| 音が小さくなった | 音を小さくした |

The first column uses **が** and なる; the second uses **を** and する. The same logic as the transitive/intransitive pairs.

## ように / ことに: a family

You have seen these before. Here they are together:

| | Meaning | Pattern |
| --- | --- | --- |
| ようになる | come to (change in ability or habit) | 話せるようになる |
| ようにする | make an effort to | 毎日読むようにする |
| ことになる | it has been decided / it turns out | 行くことになった |
| ことにする | I decide to | 行くことにした |
| ことになっている | it's the rule that | 九時に始まることになっている |
| ことにしている | I make a habit of | 毎日走ることにしている |

> 毎日|まいにち|every day ; 日本語|にほんご|Japanese ; を ; 読む|よむ|read ; *ようにしている|try to
= I make a point of reading Japanese every day.

> ここ|here ; で ; は ; 靴|くつ|shoes ; を ; 脱ぐ|ぬぐ|take off ; *ことになっている|it's the rule
= Shoes are to be taken off here.

## 〜になります / 〜になる as polite "is"

In shops and formal speech, you hear 〜になります instead of です:

> こちら|this ; が ; メニュー ; *になります|is
= Here is the menu.

> お会計|おかいけい|bill ; は ; 千円|せんえん|1,000 yen ; *になります|comes to
= The total comes to 1,000 yen.

It sounds soft and slightly indirect: "it becomes". Some people dislike it, but you will hear it every day.

## 〜になる for roles and status

> 来月|らいげつ|next month ; 二十歳|はたち|twenty ; *になる|become
= I turn twenty next month.

> もう ; 三時|さんじ|three o'clock ; *になった|became
= It's already three o'clock.

## Key points

- **〜になる / 〜くなる**: become. **〜にする / 〜くする**: make, choose.
- **が + なる** = natural change; **を + する** = deliberate.
- **ようになる / ようにする / ことになる / ことにする** are a family.
- **〜になります** in shops means "is" (softly).
`,
};

export const intention: Lesson = {
  slug: "intention",
  title: "Intending, trying and arranging: つもり, ようとする, ようにする",
  description:
    "How to say what you plan, what you are about to do, what you tried and failed at, and what you make a point of doing. Short patterns that separate 'I will' from 'I'm trying to'.",
  points: ["n5-tsumori", "n4-yotei", "n4-te-miru", "n4-you-to-omou", "n4-you-ni-suru"],
  body: `
## つもり: plan

**Dictionary form + つもり** = "I intend to". 

> 来年|らいねん|next year ; 日本|にほん|Japan ; に ; 行く|いく|go ; *つもり|intend ; です
= I plan to go to Japan next year.

> もう ; 行かない|いかない|won't go ; *つもり|intend ; だ
= I don't intend to go any more.

**Past + つもり** = "I thought I had" (actually I hadn't) or "I intended to" (but):

> 鍵|かぎ|key ; を ; 閉めた|しめた|locked ; *つもり|thought ; だった
= I thought I'd locked up.

> 行く|いく|go ; *つもり|intended ; だった ; が ; 行けなかった|いけなかった|couldn't
= I was going to go, but I couldn't.

## 予定: schedule

**予定** is a fixed plan.

> 来週|らいしゅう|next week ; 出張|しゅっちょう|business trip ; する ; *予定|よてい|plan ; です
= I'm scheduled for a business trip next week.

つもり is your will; 予定 is your calendar.

## ようと思う: thinking of

**Volitional + と思う** = "I'm thinking of".

> 来月|らいげつ|next month ; 引っ越そう|ひっこそう|move ; *と思っている|とおもっている|am thinking
= I'm thinking of moving next month.

## ようとする: about to; trying to

**Volitional + とする** has two uses:

1. **Trying to** do something (often failing):

> ドア|door ; を ; 開けよう|あけよう|open ; *とした|tried to ; が ; 開かなかった|あかなかった|wouldn't open
= I tried to open the door, but it wouldn't.

2. **Being about to** do something:

> 家|いえ|home ; を ; 出よう|でよう|leave ; *とした|was about to ; とき|when ; 電話|でんわ|phone ; が ; 鳴った|なった|rang
= The phone rang just as I was about to leave.

For the plain "try" (just do and see), use **てみる**.

## てみる: try it and see

> 食べて|たべて|eat ; *みる|try
= I'll try eating it.

> 着て|きて|wear ; *みて|try ; ください
= Please try wearing it.

Use てみる for experiments and ようとする for efforts at something hard.

## ようにする: make an effort

**Dictionary form + ようにする** = "I try to / I make sure to".

> 野菜|やさい|vegetables ; を ; 食べる|たべる|eat ; *ようにしている|make a point
= I try to eat vegetables.

**Negative form + ようにする** = "I try not to":

> 夜|よる|night ; は ; 食べ|たべ|eat ; *ないようにしている|try not to
= I try not to eat at night.

## ことにしている: I've made it a rule

> 毎朝|まいあさ|every morning ; 走る|はしる|run ; *ことにしている|make it a rule
= I've made it a habit to run every morning.

## Intention vs prediction

| | Pattern | Who decides |
| --- | --- | --- |
| 行くつもりだ | intention | me |
| 行く予定だ | schedule | me or someone |
| 行くことにした | decision made | me |
| 行くことになった | it was decided | others/circumstance |
| 行こうと思う | thinking of | me, tentative |
| 行こうとする | trying to | me, effort |

## Key points

- **つもり**: plan. **予定**: schedule.
- **ようと思う**: thinking of. **ようとする**: tried to / about to.
- **てみる**: try and see.
- **ようにする**: make an effort. **ことにしている**: make a habit.
`,
};

export const selfEachOther: Lesson = {
  slug: "self-each-other",
  title: "Self and each other: 自分, お互い, 〜合う",
  description:
    "How 自分 points back at the subject, how to say 'by myself' and 'on their own', and how to express reciprocal actions: helping each other, talking with each other.",
  points: [],
  body: `
## 自分: self

**自分** ("oneself") refers back to the subject of the sentence. It can mean "myself", "himself", "herself", "themselves", depending on who the subject is.

> 私|わたし|I ; は ; *自分|じぶん|myself ; で ; 作った|つくった|made
= I made it myself.

> 彼|かれ|he ; は ; *自分|じぶん|himself ; の ; 部屋|へや|room ; を ; 掃除した|そうじした|cleaned
= He cleaned his own room.

> 彼女|かのじょ|she ; は ; *自分|じぶん|herself ; を ; 責めた|せめた|blamed
= She blamed herself.

Used by itself, 自分 can also be a casual "I" (especially in the military, sports and the Kansai area).

## 自分で: by oneself

**自分で** = "by oneself, on one's own":

> *自分で|じぶんで|by yourself ; やって|do ; ください
= Please do it yourself.

> 子供|こども|child ; が ; *自分で|じぶんで|by himself ; 服|ふく|clothes ; を ; 着た|きた|put on
= The child put on his clothes by himself.

## 自分の: one's own

> *自分の|じぶんの|your own ; 意見|いけん|opinion ; を ; 言って|いって|say ; ください
= Please say your own opinion.

## One-person-only: 一人で

**一人で** = alone, by oneself (as the only person).

> *一人で|ひとりで|alone ; 旅行|りょこう|travel ; した|did
= I traveled alone.

自分で is about doing it without help; 一人で is about being alone. They can overlap.

## 自身: emphasis

**自身** reflects the subject and emphasises it:

> 私|わたし|I ; *自身|じしん|myself ; が ; 見た|みた|saw
= I saw it myself.

> 彼|かれ|he ; *自身|じしん|himself ; は ; 知らなかった|しらなかった|didn't know
= He himself didn't know.

## Doing things for each other: お互い

**お互い** = "each other, both parties":

> *お互い|おたがい|each other ; に ; 頑張り|がんばり|do one's best ; ましょう
= Let's both do our best.

> *お互いに|おたがいに|mutually ; 助け|たすけ|help ; 合う|あう|(each other)
= We help each other.

お互いさま ("we're in the same boat / no problem") is a common phrase of mutual understanding.

## 〜合う: do to each other

**Polite stem + 合う** makes a reciprocal verb:

| Verb | + 合う | Meaning |
| --- | --- | --- |
| 助ける | 助け合う | help each other |
| 話す | 話し合う | discuss |
| 愛す | 愛し合う | love each other |
| 分かる | 分かり合う | understand each other |
| 殴る | 殴り合う | hit each other |

> 二人|ふたり|two people ; は ; 毎日|まいにち|every day ; *話し合った|はなしあった|talked it over
= The two of them talked it over every day.

> 家族|かぞく|family ; で ; *助け合って|たすけあって|helping each other ; 生きて|いきて|live ; いる
= We live helping each other as a family.

## ひとりでに: on its own

**ひとりでに** = "by itself, of its own accord" (without anyone doing it):

> ドア|door ; が ; *ひとりでに|by itself ; 開いた|あいた|opened
= The door opened by itself.

## A note on tone

Be careful: 自分で can also be critical: 自分でやりなさい ("do it yourself!"). Tone and context decide.

## Key points

- **自分** points back at the subject: myself/himself/herself.
- **自分で**: by oneself. **一人で**: alone.
- **自身** emphasises who.
- **お互い** and **〜合う**: each other.
- **ひとりでに**: by itself.
`,
};

export const wishes: Lesson = {
  slug: "wishes-regrets",
  title: "Wishes, regrets and 'if only'",
  description:
    "How to hope (ように, といい), how to wish for something contrary to fact (たらいいのに, ばいいのに), and how to say 'I should have' (ばよかった) and 'I wish I hadn't' (なければよかった).",
  points: ["n4-ba-yokatta", "n4-te-hoshii", "n4-zehi", "n4-naa"],
  body: `
## Hoping: ように

**Verb + ように** at the end of a sentence is a prayer or good wish:

> 明日|あした|tomorrow ; 晴れます|はれます|clear ; *ように|may it
= I hope it's sunny tomorrow.

> 試験|しけん|exam ; に ; 合格できます|ごうかくできます|can pass ; *ように|may I
= May I pass the exam.

> 風邪|かぜ|cold ; を ; 引かない|ひかない|catch not ; *ように|take care to not
= Don't catch a cold. (Take care.)

The written wish **ますように** is what you see on a tanabata strip or a shrine wish plaque.

## Hoping: といい

**Plain form + といい** (+な) = "I hope that...", "it would be nice if":

> 明日|あした|tomorrow ; 晴れる|はれる|clear ; *といい|hope ; ね
= I hope it's sunny tomorrow.

> 彼|かれ|he ; が ; 来る|くる|come ; *といい|hope ; な
= I hope he comes.

## Wanting someone to: てほしい

**て-form + ほしい** (or **もらいたい**) = "I want you to".

> もう少し|もうすこし|a bit more ; 静かに|しずかに|quietly ; して|do ; *ほしい|want
= I wish you'd be a bit quieter.

> 彼|かれ|he ; に ; 来て|きて|come ; *ほしい|want
= I want him to come.

## Contrary-to-fact wishes: たらいいのに / ばいいのに

**たらいいのに / ばいいのに** = "I wish that... (but it's not so)". The のに carries disappointment.

> もっと ; お金|おかね|money ; が ; あれ|あれ|were ; *ばいいのに|I wish
= I wish I had more money.

> 明日|あした|tomorrow ; が ; 休み|やすみ|holiday ; だったら|だったら|if it were ; *いいのに|I wish
= I wish tomorrow were a day off.

> 彼|かれ|he ; が ; もう少し|もうすこし|a bit more ; 優しけれ|やさしけれ|kind ; *ばいいのに|I wish
= I wish he were a bit kinder.

## Regret: ばよかった

**ば-form + よかった** = "I should have" (I didn't).

> もっと ; 勉強すれ|べんきょうすれ|study ; *ばよかった|should have
= I should have studied more.

> 行け|いけ|go ; *ばよかった|should have
= I should have gone.

**なければよかった** = "I shouldn't have" (I did):

> 食べ|たべ|eat ; *なければよかった|shouldn't have
= I shouldn't have eaten.

> あんなこと ; 言わ|いわ|say ; *なければよかった|shouldn't have
= I shouldn't have said that.

In casual speech: **〜ばよかった / 〜なきゃよかった / 〜ればよかったのに** ("you should have").

## Guessing a different past: たら

**Past + ら** also expresses speculation about a past that did not happen:

> あの ; とき|time ; 行った|いった|went ; *ら|if ; どう|how ; なって|become ; いた|would have ; だろう
= What would have happened if I'd gone then?

## Exclamations of wish: たいなあ, ほしいなあ

**なあ** after a wish expresses longing:

> 日本|にほん|Japan ; に ; 行き|いき|go ; *たいなあ|I want to
= Oh, I want to go to Japan.

> 車|くるま|car ; が ; 欲しい|ほしい|want ; *なあ|oh
= I'd love a car.

## Must-have wishes: ぜひ

**ぜひ** is an adverb that makes wishes and invitations stronger:

> *ぜひ|by all means ; 来て|きて|come ; ください
= Please do come!

> *ぜひ|really ; 行き|いき|go ; たい
= I really want to go.

## Key points

- **ように / といい**: hope. **てほしい**: want someone to.
- **たらいいのに / ばいいのに**: "I wish" (contrary to fact).
- **ばよかった**: "I should have". **なければよかった**: "I shouldn't have".
- **ぜひ**: strengthens wishes and invitations.
`,
};
