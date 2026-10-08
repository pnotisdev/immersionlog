import type { Lesson } from "../types";

/** Part 1: how a Japanese sentence is put together, and the particles that hold it up. */

export const sentenceShape: Lesson = {
  slug: "sentence-shape",
  title: "How a Japanese sentence is built",
  description:
    "The one idea that makes Japanese readable: the sentence ends with its verb, small particle words tag every other piece with its job, and anything obvious gets left out.",
  body: `
Before any rules, here is the whole machine in one picture. Almost everything else in this course is a detail of it.

A Japanese sentence is a row of **pieces**, and each piece is tagged with a little word that says what job it does. The row always ends with the word that says what is happening or what something is: the **predicate**. Usually that is a verb.

## The verb goes last

> 私|わたし|I ; *は|(topic) ; りんご|apple ; *を|(thing acted on) ; 食べる|たべる|eat
= I eat an apple.
+ Read it left to right and you get "I, apple, eat". That is not broken English. It is exactly what the Japanese says.

English builds sentences in the order **who → does → what**. Japanese builds them **who → what → does**. Everything that gives information (who, what, where, when, why, how) comes first, and the word that tells you what *happened* waits until the end.

This has a nice side effect when you read. You never have to hold a verb in your head while waiting for its details. You pile the details up, and the last word closes the sentence.

:::key The last word closes the sentence
In a normal sentence, find the end first. That is the verb, the adjective, or **だ/です** ("is"). Everything before it is detail about that final word.
:::

## Particles are name tags

How does Japanese know who ate what, if the order is not doing the work? Through **particles**: short words stuck right after a piece, each one a tag that names its job.

> 猫|ねこ|cat ; *が|(does it) ; 魚|さかな|fish ; *を|(it's acted on) ; 食べた|たべた|ate
= The cat ate the fish.

> 魚|さかな|fish ; *が|(does it) ; 猫|ねこ|cat ; *を|(it's acted on) ; 食べた|たべた|ate
= The fish ate the cat.
+ Same words and same order. Only the tags moved, and the meaning flipped.

That is the central trick. English uses position to say who did what ("the cat ate the fish" vs "the fish ate the cat"). Japanese uses tags, so position is free to do other things.

Because of that, the pieces can move around, as long as each stays with its tag and the verb stays last:

> りんごを ; 私は|わたしは ; 食べる|たべる
> 私は|わたしは ; りんごを ; 食べる|たべる

Both are fine. The first puts the apple first, the way English might say "An apple? I'll eat one." Moving a piece to the front draws attention to it; it does not change who does what.

:::note Three words you will see everywhere
A **particle** is a small word that follows a noun (or sometimes a whole clause) and tags it. A **noun** is a thing: 猫, 魚, 学校. A **predicate** is the word that closes the sentence: a verb, an adjective, or です. You will meet all three on every page of this course.
:::

## Particles attach to the word on their left

A particle always belongs to whatever comes just before it. That is the rule for the whole language: **modifiers go to the left of what they modify**. Remember it, because it is also how adjectives, relative clauses and everything else work.

> 友達|ともだち|friend ; *と|with ; 学校|がっこう|school ; *に|to ; 行く|いく|go
= I go to school with a friend.
+ Nobody says "I" here. See the next section.

## Leave out what everyone knows

Look at that last example again. There is no "I". Japanese does not insist on a subject. If it is clear who you are talking about, you do not say it. This is called **dropping** the subject, and it is not sloppy. It is the normal way to talk.

Here is a short exchange. Read the second line carefully: it has only a verb.

> 昨日|きのう|yesterday ; 映画|えいが|movie ; *を|(object) ; 見た|みた|saw ; *？
= Did you see the movie yesterday?
+ Nobody says "you" because the question is obviously to the listener.

> うん ; 見た|みた
= Yeah, I saw it.
+ Two words. No "I", no "it", no "movie". Everyone knows.

The listener fills in what has been dropped from the situation. So when you read a Japanese sentence and find it has no subject, do not assume something is missing. Ask: **who has been the subject of the last few sentences?** Usually it is still them.

:::warn Do not insert English pronouns in your head
It is tempting to read 食べた and think "he ate" or "I ate" every time. Resist it. 食べた means just "ate". Who ate comes from the situation. Books and subtitles will show you this constantly, and by the end of this course it will feel natural.
:::

## Two shapes cover nearly every sentence

Almost every sentence is one of two shapes:

| Shape | Closes with | Example |
| --- | --- | --- |
| A is B | a noun + だ/です | 私は学生です。 |
| A does B / A is like that | a verb or adjective | 私は食べる。 / 空が青い。 |

> 私|わたし|I ; は|(topic) ; 学生|がくせい|student ; *です|is
= I'm a student.

> 空|そら|sky ; が|(subject) ; *青い|あおい|blue
= The sky is blue.

> 私|わたし|I ; は|(topic) ; 毎日|まいにち|every day ; 本|ほん|book ; を|(object) ; *読む|よむ|read
= I read books every day.

Long Japanese sentences are these two shapes with more and more pieces stuffed in front of the end. The rest of the course is about what kinds of pieces there are and how to stuff them in.

## A reading habit to start now

When a sentence looks like a wall, do this, in order:

1. **Find the end.** What is the last word? Verb, adjective, or です?
2. **Find the tags.** Look for は, が, を, に, で, と and so on. Each one closes a piece.
3. **Read each piece with its tag.** "Cat (does it). Fish (is acted on). Ate."
4. **Put it together in whatever English order is natural.**

You will do this slowly at first and then not at all. That is what learning to read is.

:::try Look for it
Open any manga page or subtitle line and, before you read it, find the last word. Then spot two or three particles. Do not worry about meaning yet. You are building the habit of seeing the shape.
:::

## Key points

- The predicate (verb, adjective or です) is last. Everything before it is detail.
- Particles tag each piece with its job, so position can be flexible.
- Modifiers always go to the **left** of what they describe.
- Subjects, objects and "it" are dropped whenever the situation makes them clear.
`,
};

export const desu: Lesson = {
  slug: "desu",
  title: "Saying what something is: だ, です and negatives",
  description:
    "The two words for \"is\": plain だ and polite です, how to make them negative and past, and how the choice between them changes the feel of everything on the page.",
  points: ["n5-desu", "n5-ja-nai", "n5-deshita", "n5-ja-nakatta"],
  body: `
The first predicate to learn is the one that means "is": it ties a noun to a description or another noun. Japanese has two forms of it, and the difference is **politeness**, not meaning.

## だ and です

> 猫|ねこ|cat ; *だ|is
= It's a cat.

> 猫|ねこ|cat ; *です|is (polite)
= It's a cat.

**です** is the polite form. **だ** is the plain form, the one you use with friends, family, and inside your own head. You will see **だ** in casual speech, in novel narration, and in most subtitles of casual dialogue. You will see **です** with strangers, in shops, on the news, and in many learner materials.

:::note Plain and polite
Japanese has two registers that run through the whole language. **Plain form** (also called dictionary or casual form) is for friends, thoughts and narration. **Polite form** (ます/です) is for people you do not know well or should respect. Every verb, every adjective and the "is" word has both. The two styles mean the same; only the feel differs.
:::

A plain **だ** at the end of a statement often sounds blunt or emphatic, which is why Japanese people frequently leave it off in casual speech (just 猫。 or 猫ね。). You will also hear it dropped before sentence-ending particles. We will come back to that.

## The noun comes first

Unlike English "X is Y", the "is" comes **after** what it describes, just like every other predicate.

> 彼|かれ|he ; は|(topic) ; 先生|せんせい|teacher ; *だ|is
= He's a teacher.

> これ|this ; は|(topic) ; 水|みず|water ; *です|is
= This is water.

> 今日|きょう|today ; は|(topic) ; 雨|あめ|rain ; *です|is
= Today it's raining. (literally "Today is rain.")

That last one shows something useful: です is not just "is". It is a general "this is the case" linker, and English sometimes needs a different verb to say the same thing. Do not expect every だ/です to translate as "is".

## Making it negative

To say "is not", you add **じゃない** (plain) or **じゃありません** (polite):

> 彼|かれ|he ; は|(topic) ; 先生|せんせい|teacher ; *じゃない|is not
= He's not a teacher.

> 彼|かれ|he ; は|(topic) ; 先生|せんせい|teacher ; *じゃありません|is not (polite)
= He's not a teacher.

> 彼|かれ|he ; は|(topic) ; 先生|せんせい|teacher ; *じゃないです|is not (polite)
= He's not a teacher.
+ Plain ない plus です. Perfectly normal. Many people prefer it to じゃありません in conversation.

じゃ is a slurred form of **では**, which you will see in writing and in formal speech: ではない, ではありません. They mean the same.

## Making it past

The past of **だ** is **だった**; the past of **です** is **でした**. For "was not" you attach the past tense to the negative:

| | Plain | Polite |
| --- | --- | --- |
| is | 猫だ | 猫です |
| is not | 猫じゃない | 猫じゃありません |
| was | 猫だった | 猫でした |
| was not | 猫じゃなかった | 猫じゃありませんでした |

> 昨日|きのう|yesterday ; は|(topic) ; 休み|やすみ|day off ; *だった|was
= Yesterday was a day off.

> あの|that ; 人|ひと|person ; は|(topic) ; 先生|せんせい|teacher ; *じゃなかった|was not
= That person wasn't a teacher.

:::key What "past" really covers
Japanese past tense does not mean quite what English past means. It marks something as **completed or realised**: "turned out to be", "has become", "was the case". You will see this when we reach verbs. For now, treat it as "was".
:::

## Describing with 「の」 and 「な」: a preview

One thing that surprises English speakers: you do not put だ in front of a noun to describe it. Instead you attach a **linker** (の for nouns, な for a certain kind of adjective). You will meet this properly in the lessons on の and adjectives. For now just notice that だ/です only ever closes a sentence; it does not sit in the middle.

## Where you will meet this

Near-everywhere. Names tell you who someone is:

> 私|わたし|I ; は|(topic) ; 田中|たなか|Tanaka ; *です|am
= I'm Tanaka.

Shop signs, titles, definitions, subtitles: all です and だ. And in novels, the narrator often ends sentences with **だ** or **だった** to state facts plainly.

## Key points

- **だ** is plain "is", **です** is polite "is". Meaning is the same.
- Negative: **じゃない / じゃありません** (written: ではない / ではありません).
- Past: **だった / でした**, past negative: **じゃなかった / じゃありませんでした**.
- It always comes at the end of what it closes, never before the noun.
- Do not translate every です as "is". Treat it as "this is the case".
`,
};

export const topic: Lesson = {
  slug: "topic-wa",
  title: "The topic marker は (and も)",
  description:
    "は does not mean 'subject'. It sets the topic: the thing the rest of the sentence is about. How to read it, how it contrasts things, and how も swaps it for 'also'.",
  points: ["n5-wa", "n5-mo", "n5-ka", "n5-ne", "n5-yo"],
  body: `
Few things confuse beginners more than **は**, and it mostly comes from a bad label. Textbooks often call it "the subject marker". It is not. It is the **topic marker**, and the difference is the whole lesson.

## The topic is "as for..."

**は** (written は, pronounced **wa** when it is a particle) tags the thing you are about to talk about. Everything after it is a comment on that thing.

> 私|わたし|I ; *は|as for ; 学生|がくせい|student ; です|is
= I'm a student.

Read it literally as "As for me: student." You put something on the table, and the rest of the sentence is a statement about it. English can do this ("As for the movie, it was great"), but Japanese does it all the time, for everything.

The topic does **not** have to be the doer of the action. It can be anything the speaker wants to talk about:

> 昨日|きのう|yesterday ; の ; 試験|しけん|exam ; *は|as for ; 難しかった|むずかしかった|was hard
= Yesterday's exam was hard.

> この ; 店|みせ|shop ; *は|as for ; ラーメン|ramen ; が ; おいしい|delicious
= As for this shop, the ramen is delicious.
+ We will get to the が later. For now see that the topic (this shop) and the thing described (the ramen) are different.

That last sentence has a pattern worth naming: **topic は + thing が + description**. English would say "This shop's ramen is delicious". Japanese says "This shop: ramen is delicious". It is hugely common, and you will see it in the next lesson too.

## Once you've set a topic, you can drop it

A topic stays active until the conversation changes it. That's how Japanese can leave out so much:

> 田中|たなか|Tanaka ; さん ; *は|as for ; 学生|がくせい|student ; です
= Mr. Tanaka is a student.

> 毎日|まいにち|every day ; 学校|がっこう|school ; に ; 行きます|いきます|goes
= He goes to school every day.
+ Same topic, not mentioned again.

## は means "this, not necessarily others"

Because は sets a topic out of everything possible, it can carry a hint of **contrast**: this one, as opposed to others.

> 肉|にく|meat ; *は|as for ; 食べる|たべる|eat ; が ; 魚|さかな|fish ; *は|as for ; 食べない|たべない|don't eat
= I eat meat, but I don't eat fish.

> コーヒー|coffee ; *は|as for ; 飲まない|のまない|don't drink
= Coffee, I don't drink. (Tea I might.)
+ Marking the thing with は in a negative sentence often implies "but something else, yes".

This is why は is common with negatives: if you say you do not do something, you are usually contrasting it with something you do.

:::key Topic first, comment second
If you can say "As for X, ..." naturally in English, you can use は in Japanese. If a sentence starts with a noun and は, ask: what is being said **about** it? The answer is whatever follows.
:::

## も: the "also" version

Replace は with **も** and you get "also / too". It takes the place of は (and が, を) rather than sitting next to them:

> 私|わたし|I ; *も|also ; 学生|がくせい|student ; です|am
= I'm a student too.

> 猫|ねこ|cat ; *も|also ; 犬|いぬ|dog ; *も|also ; 好き|すき|liked ; です
= I like both cats and dogs.
+ Using も twice means "both X and Y".

> 彼|かれ|he ; は ; 来|こ|come ; ない
= He's not coming.

> 彼女|かのじょ|she ; *も|also ; 来|こ|come ; ない
= She's not coming either.

In a negative sentence も becomes "not ... either" or "neither".

:::warn は replaces が and を, but も sits beside other particles
も can substitute for は, が and を (they simply disappear). With other particles it joins them: に becomes にも ("to also"), で becomes でも ("also at/with"), と becomes とも. For example 学校にも行く means "I go to school too".
:::

## Asking questions with か

A statement becomes a question with **か** at the end. No word order change, no special verb:

> あなた|you ; は ; 学生|がくせい|student ; です ; *か
= Are you a student?

> これ|this ; は ; 何|なん|what ; です ; *か
= What is this?

In casual speech people drop か and just raise their voice, or say **の**: 学生？ 食べる？ We will cover this later.

## ね and よ: small words with big jobs

Two particles that change how a sentence lands:

> いい ; 天気|てんき|weather ; です ; *ね
= Nice weather, isn't it?
+ ね: "right? / isn't it?" — seeks agreement or shares a feeling.

> もう ; 行く|いく ; *よ
= I'm going now, you know.
+ よ: "just so you know" — gives the listener new information.

These two are in nearly every conversation. Do not try to translate them. Notice who knows what: ね when you both know, よ when you are informing them.

## Key points

- **は** marks the topic, "as for X". The topic need not be the doer.
- Once a topic is set, you can omit it.
- は can carry contrast, especially in negative sentences.
- **も** means "also / too" and takes the place of は, が, を.
- **か** at the end makes a question.
- **ね** looks for agreement; **よ** gives new information.
`,
};
