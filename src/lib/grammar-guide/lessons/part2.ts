import type { Lesson } from "../types";

/** Part 2: verbs and adjectives, the て-form, and the first patterns built on them. */

export const verbs: Lesson = {
  slug: "verbs",
  title: "Verbs: plain, polite, negative and past",
  description:
    "The three kinds of verb, the dictionary form, and how to make every basic form (polite ます, negative, past) without memorising a hundred separate rules. Includes what Japanese 'tense' actually means.",
  points: ["n5-masu", "n5-masen", "n5-mashita", "n5-masen-deshita"],
  body: `
This is the first lesson you will need to **practise**, not just read. Conjugation (changing the shape of a verb) is the one part of Japanese worth drilling until it's automatic, because you meet it in every sentence. Everything else in the language is looser.

The good news: Japanese verbs are far more regular than English ones. There are only **two regular patterns and two irregular verbs**, and the verb never changes for who is doing it.

> 食べる|たべる|eat
= I eat / you eat / he eats / we eat / they eat
+ One form for everyone. That is the dictionary form: the one you will find in a dictionary.

## The dictionary form

Every verb ends in a **u-sound** when it appears in the dictionary: う, く, ぐ, す, つ, ぬ, ぶ, む, る. This is the **plain, non-past form**. It is used in casual speech, in narration, and inside longer sentences.

It covers the present and the future, and often "is going to" or "does habitually":

> 毎日|まいにち|every day ; *食べる|たべる|eat
= I eat every day.

> 明日|あした|tomorrow ; 学校|がっこう|school ; に ; *行く|いく|go
= I'm going to school tomorrow.

Japanese does not have a separate future tense. The same form handles both. Time words or context settle which one is meant.

## Two kinds of regular verb

**ru-verbs** (also called *ichidan* or *vowel* verbs) end in **る** preceded by an い or え sound: 食べる, 見る, 起きる, 寝る.

To conjugate: **drop the る and add the ending.**

**u-verbs** (also called *godan* or *consonant* verbs) are everything else: 書く, 飲む, 話す, 待つ, 買う, 遊ぶ, 泳ぐ, 死ぬ, and some that end in る (like 帰る).

To conjugate: **change the final u-sound** to another vowel row and add the ending.

:::warn Some る verbs are u-verbs
A few verbs end in iru or eru but are actually u-verbs: 帰る (go home), 入る (enter), 知る (know), 走る (run), 切る (cut), 要る (need). Dictionaries label the type; with time you learn them. If you guess wrong, people still understand you.
:::

## The four basic forms

Each regular verb has these four, in both plain and polite versions.

| | Plain | Polite |
| --- | --- | --- |
| does (non-past) | 食べる | 食べます |
| doesn't | 食べない | 食べません |
| did | 食べた | 食べました |
| didn't | 食べなかった | 食べませんでした |

### ru-verbs

Drop る:

| Dictionary | Negative | Polite | Past |
| --- | --- | --- | --- |
| 食べる | 食べない | 食べます | 食べた |
| 見る | 見ない | 見ます | 見た |
| 起きる | 起きない | 起きます | 起きた |

> 朝|あさ|morning ; ご飯|ごはん|meal ; を ; *食べない|たべない|don't eat
= I don't eat breakfast.

> 昨日|きのう|yesterday ; テレビ|TV ; を ; *見た|みた|watched
= I watched TV yesterday.

### u-verbs

The last kana changes. Here is the table, which you can use for every u-verb:

| Ending | Dictionary | Negative (-ない) | Polite (-ます) | Past (-た) |
| --- | --- | --- | --- | --- |
| う | 買う | 買わない | 買います | 買った |
| く | 書く | 書かない | 書きます | 書いた |
| ぐ | 泳ぐ | 泳がない | 泳ぎます | 泳いだ |
| す | 話す | 話さない | 話します | 話した |
| つ | 待つ | 待たない | 待ちます | 待った |
| ぬ | 死ぬ | 死なない | 死にます | 死んだ |
| ぶ | 遊ぶ | 遊ばない | 遊びます | 遊んだ |
| む | 飲む | 飲まない | 飲みます | 飲んだ |
| る | 帰る | 帰らない | 帰ります | 帰った |

Three things to read off this table:

1. **Negative** uses the **あ-row** (買わ, 書か, 泳が, 話さ, 待た, 死な, 遊ば, 飲ま, 帰ら). The う-verbs use **わ** instead of あ.
2. **Polite** uses the **い-row** (買い, 書き, 泳ぎ, 話し, 待ち, 死に, 遊び, 飲み, 帰り).
3. **Past** is the odd one: it changes the ending by sound. う, つ, る all become **った**; む, ぶ, ぬ become **んだ**; く becomes **いた**; ぐ becomes **いだ**; す becomes **した**.

> 本|ほん|book ; を ; *買った|かった|bought
= I bought a book.

> 水|みず|water ; を ; *飲んだ|のんだ|drank
= I drank water.

> 手紙|てがみ|letter ; を ; *書かなかった|かかなかった|didn't write
= I didn't write a letter.

The past forms look like a lot to memorise, but they follow the sound pattern you can feel: だ goes with the nasal sounds (ん), た with the others. You will say them aloud and they'll become automatic.

:::warn One exception: 行く
**行く** is a regular く-verb in every way except the past: its past is **行った** (not 行いた). Its て-form is 行って. This is the only common exception.
:::

### Irregular verbs

There are only two, and you already know them.

| | Dictionary | Negative | Polite | Past |
| --- | --- | --- | --- | --- |
| do | する | しない | します | した |
| come | 来る (くる) | 来ない (こない) | 来ます (きます) | 来た (きた) |

Many nouns turn into verbs by adding する: 勉強する (study), 料理する (cook), 結婚する (marry). All of them conjugate exactly like する.

> 毎日|まいにち|every day ; 日本語|にほんご|Japanese ; を ; *勉強する|べんきょうする|study
= I study Japanese every day.

> 友達|ともだち|friend ; が ; *来た|きた|came
= A friend came.

The negative of ある (exist) is **ない**, not あらない.

## Polite verbs

Polite forms are used with people you do not know well. The polite stem is the verb with ます removed (食べ, 書き). Then:

| | Ending |
| --- | --- |
| does | ます |
| doesn't | ません |
| did | ました |
| didn't | ませんでした |

> 私|わたし|I ; は ; 毎朝|まいあさ|every morning ; コーヒー ; を ; *飲みます|のみます|drink
= I drink coffee every morning.

> 昨日|きのう|yesterday ; は ; 学校|がっこう|school ; に ; *行きませんでした|いきませんでした|didn't go
= I didn't go to school yesterday.

Polite forms are for speaking. In books, **plain** form is the norm for narration; polite appears mostly in dialogue and in books written to sound formal.

## What do the "tenses" really mean?

English has present, past and future. Japanese basically has two forms, and they are best understood as:

- **Dictionary form (る):** the action is not finished or not yet started. This covers general truths, habits, "now" for states and the future.
- **Past form (た):** the action is complete, realised or in the past.

> 今|いま|now ; 食べる|たべる|eat ; ところ|just about to
= I'm just about to eat.

> もう ; 食べた|たべた|ate ; よ
= I've already eaten.

That second example shows something important. 食べた is not only "ate" but "have eaten": completed. And a verb marked with た describes something done by the time we are talking about, even in the future ("when I've finished eating..."). Use "completed" as your first guess for た, and "not completed" for る.

## Key points

- There are **ru-verbs**, **u-verbs**, and two irregulars (する, 来る).
- Four basic forms: does / doesn't / did / didn't, each in plain and polite.
- For u-verbs, the negative uses the あ-row, the polite uses the い-row, and the past follows sound patterns (った, んだ, いた, いだ, した).
- **行く → 行った** is the lone exception.
- る-form covers present and future; た-form means completed.
`,
};

export const adjectives: Lesson = {
  slug: "adjectives",
  title: "Adjectives: い and な",
  description:
    "Two kinds of adjective, how each one conjugates, how to use them before a noun and at the end of a sentence, and why い-adjectives behave more like verbs than like English adjectives.",
  points: ["n5-i-adjectives", "n5-na-adjectives", "n5-i-adj-negative", "n5-i-adj-past", "n5-adj-te"],
  body: `
Japanese adjectives come in two kinds, named after how they look when they describe a noun. The names are ugly, but the patterns are small and easy.

## い-adjectives

An **い-adjective** ends in **い**: 高い (tall/expensive), 新しい (new), おいしい (delicious), 大きい (big). Think of the い as part of the word, and the word as a full, self-contained predicate. It can close a sentence without だ:

> この ; 山|やま|mountain ; は ; *高い|たかい|tall
= This mountain is tall.

> 空|そら|sky ; が ; *青い|あおい|blue
= The sky is blue.

It can also describe a noun directly, placed before it:

> *高い|たかい|tall ; 山|やま|mountain
= a tall mountain

That is all there is to the basic use. In English you need "is" in the first case. In Japanese the adjective *is* the predicate. That's why **い-adjectives behave like verbs**: they change form to show negative and past, and they can close a sentence.

### Conjugating い-adjectives

| | Plain | Polite |
| --- | --- | --- |
| is | 高い | 高いです |
| is not | 高くない | 高くないです / 高くありません |
| was | 高かった | 高かったです |
| was not | 高くなかった | 高くなかったです / 高くありませんでした |

The recipe: drop the **い** and add **くない** (not), **かった** (was) or **くなかった** (was not).

> この ; 本|ほん|book ; は ; *高くない|たかくない|isn't expensive
= This book isn't expensive.

> 昨日|きのう|yesterday ; は ; *寒かった|さむかった|was cold
= It was cold yesterday.

> 映画|えいが|movie ; は ; *面白くなかった|おもしろくなかった|wasn't interesting
= The movie wasn't interesting.

Add **です** to be polite. You don't add です to make the past: **高かったです**, not 高いでした.

:::warn Don't add だ to an い-adjective
**高いだ** and **おいしいだ** are wrong. The adjective already closes the sentence by itself.
:::

### The special case: いい

The adjective **いい** (good) is irregular only in that its stem is **よ**. It conjugates as if it were **よい**:

| | Form |
| --- | --- |
| is good | いい |
| is not good | よくない |
| was good | よかった |
| was not good | よくなかった |

> 天気|てんき|weather ; が ; *よかった|was good
= The weather was good.

The same happens with かっこいい → かっこよくない. Anything ending in いい does it.

## な-adjectives

A **な-adjective** (also called a *na-adjective* or *adjectival noun*) is a noun-like word that describes things: 静か (quiet), きれい (pretty, clean), 有名 (famous), 元気 (healthy, energetic). It does not end in い (with a few exceptions, like きれい and 嫌い).

Because it is noun-like, it behaves like a noun when it closes a sentence: you put だ or です after it.

> この ; 町|まち|town ; は ; *静か|しずか|quiet ; だ
= This town is quiet.

When it describes a noun it takes **な**:

> *静かな|しずかな|quiet ; 町|まち|town
= a quiet town

That's where the name comes from. And it conjugates exactly like a noun + だ:

| | Plain | Polite |
| --- | --- | --- |
| is | 静かだ | 静かです |
| is not | 静かじゃない | 静かじゃありません |
| was | 静かだった | 静かでした |
| was not | 静かじゃなかった | 静かじゃありませんでした |

> 彼女|かのじょ|she ; は ; *有名|ゆうめい|famous ; *だった|was
= She was famous.

> 部屋|へや|room ; は ; *きれいじゃない|isn't clean
= The room isn't clean.

:::note Which kind is it?
If it ends in い (and isn't きれい or 嫌い), it's almost certainly an い-adjective. Everything else is a な-adjective. A dictionary will tell you; the habit of noticing comes fast. Learn each new adjective with a short example, like 静かな町, and the な will stick.
:::

## Using adjectives as adverbs

To describe how something is done, change the adjective:

- **い-adjective**: change い to **く** (早い → 早く, 安い → 安く)
- **な-adjective**: change な to **に** (静か → 静かに, きれい → きれいに)

> *早く|はやく|early/quickly ; 起きる|おきる|get up
= I get up early.

> *静かに|しずかに|quietly ; 話す|はなす|speak
= Speak quietly.

> 部屋|へや|room ; を ; *きれいに|clean ; する
= I'll clean up the room. (Make the room clean.)

The same く/に form also appears with **なる** ("become") and **する** ("make into"):

> 寒く|さむく|cold ; *なった|became
= It got cold.

> 元気に|げんきに|healthy ; *なった|became
= I got well.

## Joining adjectives: くて and で

To say "tall **and** handsome" or "cheap **and** delicious", change the adjective's ending:

- い-adjective: い → **くて** (安くておいしい: cheap and delicious)
- な-adjective: → **で** (静かで便利: quiet and convenient)

> この ; 店|みせ|shop ; は ; *安くて|やすくて|cheap and ; おいしい|delicious
= This shop is cheap and delicious.

> この ; 町|まち|town ; は ; *静かで|しずかで|quiet and ; 便利|べんり|convenient ; だ
= This town is quiet and convenient.

This is the "connecting" form. It's the same idea as the て-form for verbs, which we'll see soon.

## Too much and very much

Two useful endings:

- **〜すぎる** — "too much": 高すぎる (too expensive), 静かすぎる (too quiet).
- **とても / すごく / かなり** — "very".

> この ; 本|ほん|book ; は ; *高すぎる|たかすぎる|too expensive
= This book is too expensive.

> *とても|very ; 面白かった|おもしろかった|was interesting
= It was very interesting.

## Key points

- **い-adjectives** end in い, close a sentence by themselves, and conjugate (くない, かった, くなかった).
- **な-adjectives** are noun-like: だ/です to close, な to describe a noun.
- **いい** conjugates from **よい**: よくない, よかった.
- **く** and **に** turn them into adverbs; **くて** and **で** join them.
- Don't add だ to an い-adjective.
`,
};

export const existence: Lesson = {
  slug: "existence",
  title: "ある, いる and where things are",
  description:
    "How Japanese says that something exists, has been placed somewhere, or is possessed; the two verbs 'to be' (ある and いる) and the position words (上, 下, 中, 隣) that finish the picture.",
  points: ["n5-arimasu", "n5-imasu", "n5-ni-location", "n5-position"],
  body: `
Japanese has two "exist" verbs, and they depend on **what** is there.

| Verb | Used for | Polite |
| --- | --- | --- |
| ある | things, plants, events: anything without its own will | あります |
| いる | people and animals: anything that can move on its own | います |

> 机|つくえ|desk ; の ; 上|うえ|top ; に ; 本|ほん|book ; が ; *ある
= There's a book on the desk.

> 庭|にわ|garden ; に ; 犬|いぬ|dog ; が ; *いる
= There's a dog in the garden.

The pattern is **place に + thing が + ある/いる**. The place takes に (because it's where something *is*) and the thing takes が (it's new information).

:::key Existence = に. Doing = で.
Remember the earlier lesson: に is for where something exists. で is for where an action happens. Since ある and いる are about existing, the place takes に.
:::

## Negatives and past

| | ある | いる |
| --- | --- | --- |
| plain | ある | いる |
| negative | **ない** | いない |
| past | あった | いた |
| past negative | なかった | いなかった |
| polite negative | ありません | いません |

> 冷蔵庫|れいぞうこ|fridge ; に ; 牛乳|ぎゅうにゅう|milk ; が ; *ない|isn't
= There's no milk in the fridge.

> 昨日|きのう|yesterday ; は ; 家|いえ|home ; に ; 誰|だれ|anyone ; も ; *いなかった|wasn't
= There was nobody home yesterday.

## Flipping it: the thing as the topic

Instead of "in the garden there's a dog", you can start with the thing you are talking about:

> 犬|いぬ|dog ; は ; 庭|にわ|garden ; に ; *いる
= The dog is in the garden.

> 駅|えき|station ; は ; あそこ|over there ; に ; *ある
= The station is over there.

Both are correct, but they ask different questions. **Place に + thing が + ある** answers "what is in the garden?" **Thing は + place に + ある** answers "where is the dog?" Notice that the thing changes from が to は because it's now known.

## Position words

To say "on", "under", "inside", Japanese uses nouns: **place の position に**.

| Word | Meaning |
| --- | --- |
| 上 (うえ) | above, on top |
| 下 (した) | below, under |
| 中 (なか) | inside |
| 外 (そと) | outside |
| 前 (まえ) | in front |
| 後ろ (うしろ) | behind |
| 隣 (となり) | next to (same kind) |
| 横 (よこ) | beside |
| 間 (あいだ) | between |
| 近く (ちかく) | nearby |

> 猫|ねこ|cat ; は ; 机|つくえ|desk ; の ; *下|した|under ; に ; いる
= The cat is under the desk.

> 銀行|ぎんこう|bank ; は ; 駅|えき|station ; の ; *隣|となり|next to ; に ; ある
= The bank is next to the station.

> かばん ; の ; *中|なか|inside ; に ; 財布|さいふ|wallet ; が ; ある
= My wallet is in the bag.

These are just nouns, so they take の (like any noun describing another) and に (like any place).

## Having

Possession in Japanese is existence. "I have a car" is "(for me) a car exists":

> 私|わたし|I ; は ; 車|くるま|car ; が ; *ある
= I have a car.

> 彼|かれ|he ; に ; は ; 兄弟|きょうだい|siblings ; が ; *いない
= He has no siblings.

In the second sentence, に marks the person who "has" (a spot where the thing exists), and は adds contrast: "He, at least, has none." For people you can use either に or は for the owner; both are common.

## A related verb: 持っている

When you mean physically holding or carrying, or owning something as a possession, use **持っている**.

> 彼|かれ|he ; は ; 車|くるま|car ; を ; *持っている|もっている|has
= He owns a car.

Don't worry about the ている part yet. It's explained in a few lessons.

## Events and the ある verb

ある is also used for things that happen:

> 明日|あした|tomorrow ; 試験|しけん|exam ; が ; *ある
= There's an exam tomorrow.

> 学校|がっこう|school ; で ; 祭り|まつり|festival ; が ; *あった|there was
= There was a festival at school.

Notice what happened there: the festival (an event) is *happening at* a place, so the place takes で instead of に. For events, ある means "take place", and で is for where events happen.

## Key points

- **ある** for things; **いる** for living things.
- **Place に + thing が + ある/いる.** Or **thing は + place に + ある/いる.**
- Position words are nouns joined with の: 机の上に, 駅の隣に.
- ある negative is **ない**. いる negative is **いない**.
- "To have" is just "exists": 私は車がある.
- Events use **で**, not に: 学校で祭りがあった.
`,
};

export const teForm: Lesson = {
  slug: "te-form",
  title: "The て-form: the joining verb",
  description:
    "How to make the て-form of every verb, and the half-dozen jobs it does: giving requests, linking actions in order, giving reasons, and acting as the base for dozens of everyday patterns.",
  points: ["n5-te-kudasai", "n5-te-kara", "n5-te-and"],
  body: `
If there is one verb form to know well, it's this one. The **て-form** is the connecting form: it does not mean anything by itself, but it joins a verb to what comes next. You'll use it, in some shape, in nearly every sentence you read.

## How to make it

The て-form is the same as the past (-た) form, except that **た** becomes **て** and **だ** becomes **で**. If you know the past, you know the て-form:

| Type | Past (-た) | て-form |
| --- | --- | --- |
| ru-verb | 食べた | 食べて |
| う, つ, る | 買った | 買って |
| く | 書いた | 書いて |
| ぐ | 泳いだ | 泳いで |
| す | 話した | 話して |
| ぬ, ぶ, む | 飲んだ | 飲んで |
| する | した | して |
| 来る | 来た | 来て |
| 行く | 行った | 行って |

> 待って|まって|wait
= wait (informal)

> 見て|みて|look
= look

> 読んで|よんで|read
= read

Used on its own at the end of a sentence, the て-form is a casual request: 見て (look), 待って (wait). To make it polite, you add more words.

## Job 1: "Please do it"

**て-form + ください** = "please do". It's the polite request.

> ちょっと ; *待って|まって|wait ; ください
= Please wait a moment.

> ここ ; に ; 名前|なまえ|name ; を ; *書いて|かいて|write ; ください
= Please write your name here.

> もう ; 一度|いちど|once ; *言って|いって|say ; ください
= Please say it once more.

Dropping the ください gives the casual version (待って, 書いて). Adding ね makes it softer (待ってね).

## Job 2: First this, then that

The て-form lists actions one after the other. The tense comes at the very end: only the last verb carries it.

> 朝|あさ|morning ; 起きて|おきて|got up ; 顔|かお|face ; を ; 洗って|あらって|washed ; 朝ご飯|あさごはん|breakfast ; を ; *食べた|たべた|ate
= I got up, washed my face and ate breakfast.

Think of て as "and then". Everything before the last verb is in て-form, and the last verb says when it all happened.

> 本屋|ほんや|bookshop ; に ; *行って|いって|going ; 本|ほん|book ; を ; 買った|かった|bought
= I went to the bookshop and bought a book.

## Job 3: Doing X by doing Y

Sometimes the first て-verb is the manner or the means of the second:

> 走って|はしって|running ; 学校|がっこう|school ; に ; 行った|いった|went
= I ran to school.

> 歩いて|あるいて|walking ; 帰った|かえった|returned
= I walked home.

## Job 4: Reason

The て-form can also give a loose reason or cause, especially for feelings and states:

> 雨|あめ|rain ; が ; 降って|ふって|fell ; 困った|こまった|was troubled
= It rained and I had trouble. (I was troubled because it rained.)

> その ; 話|はなし|story ; を ; 聞いて|きいて|hearing ; 安心した|あんしんした|felt relieved
= I felt relieved to hear that story.

This use is for emotion or a natural consequence. For deliberate reasons (because I decided to...), you need から or ので, covered later.

## Job 5: The base for patterns

Most of the useful verb patterns are built on the て-form. Here is a preview of what is coming. Don't try to remember these; just see how common they are.

| Pattern | Meaning |
| --- | --- |
| 〜ている | is doing; is in the state of |
| 〜てください | please |
| 〜てもいい | may |
| 〜てはいけない | must not |
| 〜てみる | try doing |
| 〜てしまう | end up doing |
| 〜ておく | do in advance |
| 〜てあげる / くれる / もらう | give / receive a favour |
| 〜てから | after doing |
| 〜てくる / ていく | come / go while doing |

All the patterns attach the same way: the verb's て-form, then the pattern. If you know the て-form you can learn each pattern in minutes.

## て-form of adjectives and です

Adjectives and です also have a て-form, with the same joining job:

| | て-form |
| --- | --- |
| 高い | 高くて |
| 静か | 静かで |
| 学生だ | 学生で |
| ない | なくて |

> 彼|かれ|he ; は ; 学生|がくせい|student ; *で|and ; 田中|たなか|Tanaka ; さん ; は ; 先生|せんせい|teacher ; だ
= He is a student, and Tanaka is a teacher.

## Practise the form until it's automatic

The て-form is worth drilling. The [conjugation drill](/tools/conjugation) is made for this. Start with the common verbs and practise them until you can produce the て-form instantly. You will then recognise it everywhere.

## Key points

- To make the て-form, take the past form and change た→て, だ→で.
- Used alone, it's a casual request. With ください, it's a polite one.
- It joins actions in order, gives manner or loose reason, and builds many patterns.
- Tense is carried by the last verb only.
- Adjectives and です have joining forms too (くて, で).
`,
};
