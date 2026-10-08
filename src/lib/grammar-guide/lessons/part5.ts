import type { Lesson } from "../types";

/** Part 5: real Japanese. Casual speech, the narrator's voice, formal nouns, and a method for reading anything. */

export const casual: Lesson = {
  slug: "casual-speech",
  title: "Casual speech: what people actually say",
  description:
    "Contractions, dropped particles, sentence-ending sounds and the gendered and character speech styles of anime and manga. The gap between the textbook and the street, explained.",
  points: ["n4-tte", "n4-kana", "n4-naa", "n4-toka", "n5-n-desu"],
  body: `
After a few lessons of textbook Japanese, you open an anime or a chat and cannot follow a word. That is normal. Casual speech is built from the same grammar, but it **compresses**, **drops** and **adds colour**. Once you know the patterns, it clicks.

## Contractions

Fast speech slurs sounds together. These are the ones to learn first, because they're everywhere.

| Full | Casual | Meaning |
| --- | --- | --- |
| 〜ている | 〜てる | is doing |
| 〜ていない | 〜てない | isn't doing |
| 〜てしまう | 〜ちゃう | end up doing |
| 〜でしまう | 〜じゃう | end up doing |
| 〜ておく | 〜とく | do in advance |
| 〜なければ | 〜なきゃ | must |
| 〜のだ / 〜のです | 〜んだ / 〜んです | explaining |
| 〜というのは | 〜ってのは | the thing about |
| 〜ては | 〜ちゃ | if you |
| それは | そりゃ | that's |
| では | じゃ | then |
| 〜ている + の | 〜てんの | are you doing? |

> 何|なに|what ; *してる|are doing ; の ; ？
= What are you doing?

> 全部|ぜんぶ|all ; *食べちゃった|たべちゃった|ended up eating
= I ate it all (oops).

> そんなの|such a thing ; *知らない|しらない|don't know ; *よ
= I don't know anything about that!

> 何|なに|what ; *言ってんの|いってんの|are saying ; ？
= What are you saying?
+ 言っている → 言ってる → 言ってん (before の).

## Dropped particles

In casual talk, small particles often disappear when the meaning is clear:

> ご飯|ごはん|meal ; 食べた|たべた|ate ; ？
= Did you eat?
+ The full version: ご飯を食べた？

> 学校|がっこう|school ; 行く|いく|go ; ？
= Are you going to school?
+ The full version: 学校に行く？

> これ ; 、 ; いい|good ; ね
= This is nice, isn't it?
+ The full version: これはいいね。

The particles dropped most often are **は, が, を, に, へ**. The ones that don't drop are those that carry meaning that nothing else would supply: **で, と, から, まで**. If you ever feel a sentence is "missing" a particle, check whether it's one of those five.

## Ending sounds that colour the sentence

Casual sentences end with small sounds that say what the speaker feels. They're the "tone of voice" of Japanese writing.

| Ending | Feels like |
| --- | --- |
| **よ** | I'm telling you |
| **ね** | right? / isn't it? |
| **よね** | I'm sure, right? |
| **な / なあ** | musing to yourself, wish |
| **かな** | I wonder |
| **かも** | maybe |
| **だって** | but, I said / I heard |
| **じゃん** | isn't it obvious? |
| **よな** | (masculine) you know what I mean |
| **もん** | because (with a pout) |
| **っけ** | what was it again? |

> あした|tomorrow ; 休み|やすみ|day off ; *だっけ|was it
= Is tomorrow a day off? (I forgot.)

> いい ; *じゃん
= That's good, isn't it? / Why not? 

> 明日|あした|tomorrow ; 晴れる|はれる|clear ; *かな|I wonder
= I wonder if it'll be sunny tomorrow.

> だって ; 眠かった|ねむかった|was sleepy ; *もん|because
= Well, I was sleepy, okay?

When you see a final particle you don't know, you usually don't need to translate it. Notice what it adds: gentle, assertive, questioning, wondering.

## Questions without か

In speech, か is often dropped. A question is shown by rising intonation, or by adding の:

> 行く|いく|go ; ？
= Are you going?

> 行く|いく|go ; *の|(asking) ; ？
= Are you going?

> 行かない|いかない|won't go ; ？
= Won't you go? / Wanna go?

## Casual forms of です

Without politeness, です disappears. It does not become だ everywhere; most of the time you simply drop it.

| Polite | Casual |
| --- | --- |
| 学生です。 | 学生だ。 / 学生。 |
| 学生ですか。 | 学生？ |
| 学生ですよ。 | 学生だよ。 |
| 学生でしょう？ | 学生でしょ？ / 学生だよね？ |
| 食べませんでした | 食べなかった |

Men often add だ before ending particles (行くんだ, 学生だよ); women often leave it off (行くのよ, 学生よ). The gap has narrowed in modern speech.

## Gendered and character speech

In fiction, characters speak in recognisable styles. They are exaggerations of real tendencies, and they tell you who the speaker is.

| Style | Example | Speaker |
| --- | --- | --- |
| 〜ぜ / 〜ぞ | 行くぞ！ | rough young man |
| 〜わ / 〜かしら / 〜のよ | 行くわ。 | feminine (formal, old-fashioned) |
| 〜ですわ / 〜ますわ | そうですわね。 | noble lady |
| 〜じゃ / 〜のう / 〜わい | そうじゃ。 | old man or wise elder |
| 〜でござる | 参るでござる。 | samurai |
| 〜ッス | 行くっす。 | junior to senior, sporty |
| 〜にゃ / 〜だにゃ | 行くにゃ。 | cat-like character |
| 〜アル | そうアル。 | stereotyped Chinese speaker |

You do not use these yourself. Real people speak more neutrally. But recognising them is part of enjoying anime, manga and games, where a character's identity is carried by their endings.

## First-person words

Japanese has many words for "I". Which one a character uses is characterisation:

| Word | Feel |
| --- | --- |
| 私 (わたし) | neutral, polite, any gender |
| あたし | feminine, casual |
| 僕 (ぼく) | boyish or polite male |
| 俺 (おれ) | rough, masculine |
| 我 (われ) / 儂 (わし) | archaic, elder |
| 自分 (じぶん) | oneself; also "I" in some contexts |

The same goes for "you": あなた, 君 (きみ), お前 (おまえ), 貴様 (きさま). Many are rude. Japanese often avoids "you" and uses the person's name or role (先生, お母さん) instead.

## Listening is where this pays off

You will learn more from listening to casual speech with subtitles than from any table. Follow the contraction, the dropped particle, the ending sound. After a few hours of anime, it gets automatic.

## Key points

- Contractions: ている → てる, てしまう → ちゃう, ておく → とく, なければ → なきゃ.
- Particles drop: は, が, を, に, へ. Others carry meaning and stay.
- Sentence-ending sounds colour the sentence: よ, ね, かな, かも, じゃん, っけ.
- Gendered and character speech tell you who is speaking; don't copy them blindly.
- "I" and "you" words are character choices.
`,
};

export const narration: Lesson = {
  slug: "reading-narration",
  title: "How novels and manga narration work",
  description:
    "The grammar of written narration: plain-form past, where the subject went, why the tense jumps, noun endings, long chains of clauses, dialogue tags and the written-style words that never appear in speech.",
  body: `
Speech and writing differ more in Japanese than in English. When you start reading novels, the dialogue feels familiar but the narration feels strange. The reason is that narration has its own habits.

## Plain form, usually past

Narration is written in **plain form**. The narrator does not say です / ます; the narrator reports. Past events are usually told in the **past** (た) form.

> 彼|かれ|he ; は ; 駅|えき|station ; に ; *着いた|ついた|arrived
= He arrived at the station.

> 空|そら|sky ; は ; 暗く|くらく|dark ; *なっていた|had become
= The sky had grown dark.

The **ていた** form (was ...ing, was in the state of) is the narrator's way of setting the scene. Most background description is ていた; the plot moves forward with plain た.

> 雨|あめ|rain ; が ; *降っていた|ふっていた|was falling
> 彼|かれ|he ; は ; 傘|かさ|umbrella ; を ; *開いた|ひらいた|opened
= It was raining. He opened his umbrella.
+ Scene (ていた), then action (た).

## Present tense in a past story

A narrator may suddenly switch to the dictionary form (る) in the middle of a past story. This isn't a mistake; it is used to make a moment vivid, like English "he walks in; the room goes silent."

> ドア|door ; を ; *開ける|あける|opens
> 部屋|へや|room ; は ; *空っぽ|からっぽ|empty ; *だった|was
= He opens the door. The room was empty.

When you see the tense jump, think of a camera zooming in.

## Where is the subject?

Narration drops subjects constantly. In a novel you might read five sentences with no subject. Keep track of who is the topic:

> 彼女|かのじょ|she ; は ; 窓|まど|window ; の ; 外|そと|outside ; を ; 見つめた|みつめた|stared
> 何も|なにも|nothing ; 言わなかった|いわなかった|said
> ただ ; 静かに|しずかに|quietly ; 息|いき|breath ; を ; 吐いた|はいた|exhaled
= She stared out of the window. She said nothing. She just exhaled quietly.
+ One は at the start covers three sentences.

The skill is to remember the last stated subject until a new one replaces it, which usually comes with は or が. If an action doesn't fit the old subject, a new one has probably changed.

## Listing with the stem

In writing, a verb's polite stem (the part before ます) is used to join clauses, in a more literary way than て:

> 彼|かれ|he ; は ; 立ち上がり|たちあがり|stood up ; 、 ; 窓|まど|window ; を ; 開けた|あけた|opened
= He stood up and opened the window.

You'll also see negative joining: **〜ず (に)**: 食べずに (without eating), 言わず (without saying).

> 彼|かれ|he ; は ; 何も|なにも|nothing ; 言わず|いわず|without saying ; に ; 出て|でて|went out ; 行った|いった|went
= He went out without saying anything.

## Noun endings (体言止め)

Sometimes a sentence ends in a noun. This creates a pause or an image, like a title or a snapshot:

> 静かな|しずかな|quiet ; 夜|よる|night
= A quiet night.

It's common in poetry, descriptions and the opening of chapters. There is no missing verb to guess.

## Written-style words

Writing prefers more formal words than speech:

| Speech | Writing |
| --- | --- |
| だから | そのため / したがって |
| でも | しかし / だが |
| ので | ため |
| けど | が / ものの |
| すごく | 非常に |
| ちょっと | 少し |
| ～じゃない | ～ではない |
| ～なきゃ | ～なければならない |

**である** replaces だ in essays and non-fiction. So don't be surprised at 「これは問題である」 ("this is a problem") in a news article.

## Inner thoughts and free indirect speech

Novels in Japanese often slip from narration into a character's thoughts without any marker. The grammar changes: the thought is in the character's own voice, with casual endings.

> 彼女|かのじょ|she ; は ; 立ち止まった|たちどまった|stopped ; 。 ; どうして ; 彼|かれ|he ; が ; ここ ; に ; いる|is ; の ; だろう|I wonder
= She stopped. Why was he here, she wondered.
+ 彼がここにいるのだろう is her thought, in plain form with だろう.

If a sentence in narration suddenly sounds casual, emotional or questioning, it's probably a character's thought.

## Onomatopoeia

Japanese uses sound-and-feeling words everywhere. They are mostly written in hiragana or katakana and often come with と or だ:

> 雨|あめ|rain ; が ; *ざあざあ|pouring ; と ; 降って|ふって|falling ; いる
= The rain is pouring down.

> 心臓|しんぞう|heart ; が ; *どきどき|pounding ; する
= My heart pounds.

> *ふわふわ|fluffy ; の ; パン
= soft, fluffy bread

Treat them as vocabulary and look them up. There are thousands.

## Dialogue and who says it

Dialogue is in 「」. A line of speech may be followed by と and a verb of saying, or by nothing:

> 「行こう」|「いこう」 ; と ; 彼|かれ|he ; は ; 言った|いった|said
= "Let's go," he said.

> 「うん」 ; 彼女|かのじょ|she ; は ; うなずいた|nodded
= "Yes," she nodded.

In a long scene, speech marks alternate with no tags at all. Use speech register (casual / polite, 俺 / 私, ending particles) to work out who is speaking.

## Reading long sentences

Long sentences in novels are built by chaining clauses with **て**, **が**, **し**, the **stem**, **ので**, **とき** and so on. Use the same method you learned: find the main verb at the end, then find each clause, then each noun-describing clause inside it. We'll practise that method in the next lessons.

## Key points

- Narration is plain form; scene-setting is ていた, plot is た.
- A narrator may switch to present tense for vividness.
- Subjects are dropped; track the topic until it changes.
- Join clauses with the stem, て, or ず(に) in writing.
- Noun endings, written-style words (しかし, ため, である) and inner thoughts are normal.
- Onomatopoeia are vocabulary; look them up.
`,
};

export const formalNouns: Lesson = {
  slug: "formal-nouns",
  title: "Nouns with no meaning of their own: こと, もの, わけ, ところ and friends",
  description:
    "A small group of nouns turns clauses into grammar: こと, もの, わけ, はず, つもり, ところ, ため, ほう, うち. Know them and a huge share of 'mystery patterns' stops being mysterious.",
  points: ["n5-tsumori", "n4-tokoro", "n4-yotei", "n4-tame-ni", "n4-you-ni", "n4-hazu", "n3-wake-ga-nai"],
  body: `
You met the idea in the lesson on nominalizers: a clause plus a general noun makes a new noun. Japanese has about a dozen of these "formal nouns" (形式名詞). Each one is a noun that has lost most of its meaning, so it can sit after any clause and add one specific shade.

Because they all work the same way (**clause + noun**), you can learn one pattern and read them all.

## The pattern

> 【 clause 】 + こと / もの / わけ / はず / つもり / ところ / ため / ほう / うち

Here is what each one adds.

| Noun | Original sense | What it adds | Example |
| --- | --- | --- | --- |
| こと | matter, thing | an event or fact | 行ったことがある |
| もの | thing, object | a general truth, or a pout | 若いものだ |
| わけ | reason, meaning | a logical conclusion | 知らないわけがない |
| はず | expectation | "should be" | 来るはずだ |
| つもり | intention | "intend to" | 行くつもりだ |
| ところ | place | "at the point of" | 食べるところだ |
| ため | sake | purpose or reason | 勉強するために |
| ほう | direction, side | comparison | 早いほうがいい |
| うち | inside | while | 若いうちに |
| とおり | way | "just as" | 言ったとおり |
| よう | appearance | "like", or purpose | 夢のようだ |

## つもり: intend to

> 来年|らいねん|next year ; 日本|にほん|Japan ; に ; 行く|いく|go ; *つもり|intend ; だ
= I intend to go to Japan next year.

> 行かない|いかない|won't go ; *つもり|intend ; です
= I don't intend to go.

## ところ: the point where

**ところ** combines with tense to give different stages:

| | Meaning |
| --- | --- |
| 食べる**ところ**だ | about to eat |
| 食べている**ところ**だ | in the middle of eating |
| 食べた**ところ**だ | has just eaten |

> 今|いま|now ; 帰る|かえる|go home ; *ところ|about to ; です
= I'm just about to go home.

> 今|いま|now ; 料理|りょうり|cooking ; を ; している|is doing ; *ところ|in the middle ; だ
= I'm in the middle of cooking.

> 今|いま|now ; 着いた|ついた|arrived ; *ところ|just ; だ
= I've just arrived.

## わけ: so that means / it's no wonder

**わけ** gives the logical conclusion: "so that means...", or in the negative, "it doesn't mean that...".

> 毎日|まいにち|every day ; 練習している|れんしゅうしている|practise ; *わけ|it follows ; だ
= So that's why (he's good): he practises every day.

> 知らない|しらない|doesn't know ; *わけ|can't be that ; が ; ない
= There's no way he doesn't know.

> 嫌いな|きらいな|dislike ; *わけ|it's not that ; じゃない
= It's not that I dislike it.

Hear this in anime as 「そういうわけか」("so that's how it is").

## ため: for, because

**ため** has two jobs:

- **Purpose**: 勉強するために (in order to study)
- **Reason** (formal): 雨が降ったため (because it rained)

> 日本語|にほんご|Japanese ; を ; 勉強する|べんきょうする|study ; *ために|in order to ; 日本|にほん|Japan ; に ; 来た|きた|came
= I came to Japan in order to study Japanese.

> 雨|あめ|rain ; が ; 降った|ふった|fell ; *ため|because ; 試合|しあい|match ; は ; 中止|ちゅうし|cancelled ; に ; なった|became
= The match was cancelled because it rained.

For purposes you can also use the **ように** pattern, which is about a state rather than an act:

> 忘れない|わすれない|won't forget ; *ように|so that ; メモ|note ; する|make
= I take notes so that I won't forget.

**ために** (deliberate action) vs **ように** (hoped-for state).

## ほう: this side

> 早い|はやい|early ; *ほう|side ; が ; いい|good
= The earlier one is better. / It's better to be early.

## うち: while it lasts

> 熱い|あつい|hot ; *うち|while ; に ; 食べて|たべて|eat ; ください
= Please eat it while it's hot.

## とおり: just as

> 先生|せんせい|teacher ; が ; 言った|いった|said ; *とおり|just as ; に ; やった|did
= I did it just as the teacher said.

## もの: the pout and the proverb

**もの** at the end of a sentence expresses a reason with a pout, usually from children or women in casual speech (so もん):

> だって ; 眠い|ねむい|sleepy ; *もん|because
= But I'm sleepy!

**ものだ** states a general truth or fond remembrance:

> 子供|こども|child ; は ; よく|often ; 泣く|なく|cry ; *ものだ|it's the nature
= Children do cry a lot.

> 若い|わかい|young ; ころ|time ; は ; よく ; 遊んだ|あそんだ|played ; *ものだ|used to
= When I was young I used to play a lot.

## How to read a mystery pattern

When you meet an unfamiliar grammar pattern, ask three questions:

1. **Is it clause + noun?** (Check for こと, もの, わけ, はず, ところ, ため, ほう, うち, とおり.)
2. **What is the plain-form tense of the clause?** (dictionary = not yet, past = done.)
3. **What does the noun contribute?** (event, truth, reason, expectation, stage, purpose, comparison.)

That alone resolves most of the intermediate grammar you will meet.

## Key points

- Formal nouns follow a plain-form clause and add one shade of meaning.
- **つもり** = intend. **ところ** = about to / doing / just done. **わけ** = so it follows. **ため** = purpose / reason.
- **はず** = should. **ほう** = comparison. **うち** = while. **とおり** = just as.
- When stuck, ask: clause + noun? what does the noun add?
`,
};

export const parsing: Lesson = {
  slug: "reading-method",
  title: "A method for reading any sentence",
  description:
    "Four steps and four worked examples: how to take apart a long Japanese sentence, find its structure, and know when to stop analysing and keep reading. The lesson to return to when something won't parse.",
  points: ["n5-relative-clause"],
  body: `
You have all the pieces now. This lesson is about the **habit** that puts them to use when you meet a real sentence you can't immediately read. It's a short method, followed by four worked examples.

## The method

1. **Mark the clause boundaries.** Look for particles that close a clause: **て, が (but), から, ので, し, と, たら, ば, ながら, ず, 、**.
2. **Find the main verb.** It's the very last word before 。 (or before a quote's closing 」).
3. **Attach each piece to its particle.** Subject, object, place, time.
4. **Find noun-describing clauses.** A plain-form verb or adjective directly before a noun (no particle in between) is a clause describing that noun.

Then read it in whatever English order works.

:::key When to stop
You can read something even if you cannot analyse every word. The goal is to understand the sentence, not to account for every particle. If you get the sense and move on, you're reading. If you can name each part but lost the meaning, you've studied but not read.
:::

## Example 1: a short one

> 彼女|かのじょ|she ; は ; 窓|まど|window ; の ; 外|そと|outside ; を ; 見つめた|みつめた|gazed ; まま|as it was ; 、 ; 何も|なにも|nothing ; 言わなかった|いわなかった|didn't say
= She gazed out of the window and said nothing.

1. Clause boundary: after まま, a comma. 
2. Main verb: **言わなかった**.
3. Pieces: 彼女は (topic), 窓の外を (object of gazing), 何も (not anything).
4. Clause: 窓の外を見つめたまま ("remaining, having gazed out the window"). The word まま means "left in that state", so the first clause describes a state that continued.

Result: "(She) said nothing, still staring out of the window."

## Example 2: describing clauses

> 雨|あめ|rain ; の ; 降る|ふる|falls ; 夜|よる|night ; 、 ; 彼|かれ|he ; が ; 忘れて|わすれて|forgot ; いった|left ; 傘|かさ|umbrella ; が ; 玄関|げんかん|entrance ; に ; 残って|のこって|remained ; いた
= On a rainy night, the umbrella he had forgotten and left behind remained in the entrance.

1. Main verb: **残っていた** ("remained").
2. Subject of that verb: 傘が. Place: 玄関に.
3. Before 傘: **彼が忘れていった**: a clause. "the umbrella that he forgot and left."
4. Before 夜: **雨の降る**: another clause. "the night that rain falls."

So: [雨の降る] 夜、[彼が忘れていった] 傘が 玄関に 残っていた.

## Example 3: a chain

> 何|なに|what ; を ; 言えば|いえば|if I say ; いい|good ; の|(nominalizer) ; か ; 分からない|わからない|don't know ; まま|while ; 、 ; 私|わたし|I ; は ; ただ ; 黙って|だまって|silently ; 彼|かれ|his ; の ; 話|はなし|talk ; を ; 聞いて|きいて|listening ; いた
= Not knowing what to say, I just sat in silence, listening to what he was saying.

1. Main verb: **聞いていた** ("was listening"). Subject (私は), object (彼の話を), manner (黙って).
2. Before まま: **何を言えばいいのか分からない** — "I don't know what I should say."
3. Inside that: 何を言えばいい ("what should I say") + のか (nominalizer + question) + 分からない (don't know).

The nesting is: ［［何を言えばいい］のか分からない］まま、私は［黙って］［彼の話を］聞いていた.

## Example 4: nouns inside nouns

> 子供|こども|child ; の ; ころ|time ; 祖母|そぼ|grandmother ; が ; 話して|はなして|told ; くれた|gave ; 昔話|むかしばなし|old tale ; を ; 、 ; 私|わたし|I ; は ; 今|いま|now ; でも ; はっきり|clearly ; と ; 覚えて|おぼえて|remember ; いる
= I still remember clearly the old tale my grandmother told me when I was a child.

1. Main verb: **覚えている**. Subject: 私は. Object: **…昔話を**. Adverbs: 今でも, はっきりと.
2. The object is a long noun phrase ending in 昔話: **子供のころ祖母が話してくれた** describes it.
3. Inside it, a time word, a subject (祖母が), and the verb 話してくれた ("told for me").

Notice how the object (昔話を) was **moved to the front** for emphasis: it comes before 私は. Once you see the noun phrase marked off, the sentence is simple.

## Common sticking points

### "I know all the words but it doesn't make sense."

You probably misjoined two clauses. Find the particles that end clauses (て, が, から) and read each clause separately. Then ask how they relate: cause, contrast, sequence?

### "The sentence ends but I'm still waiting for the verb."

Check whether the final word is a verb or a noun. Writing sometimes ends on a noun (体言止め). Or you may be inside a quote, where the verb comes after 」.

### "There's no subject."

Look at the last sentence that had one. The same person is probably still the subject.

### "A particle doesn't fit what I expected."

Check what verb it's attached to. Verbs and adjectives sometimes take unexpected particles: 〜が好き, 〜が分かる, 〜に会う, 〜と結婚する, 〜を渡る.

### "Everything is an unfamiliar pattern."

Look for the formal nouns (こと, もの, わけ, はず, ところ…). Look for て-form helper verbs (〜ている, 〜てしまう). Look the pattern up in the [JLPT grammar lists](/grammar/n5) (N5 to N1), and read the sentence again.

## Where to go from here

By now you've met most of the grammar in everyday Japanese. What remains is bigger than any course: nuance, vocabulary, idiom, register. You learn those by reading and listening to a great deal.

- Start with something you want to read. Easy manga and visual novels with furigana are a good start.
- Use a pop-up dictionary so lookups cost no effort.
- When a sentence stops you, parse it with the method above, check the pattern, and move on.
- Return to lessons when a pattern keeps appearing. Meeting a pattern fifty times does more than any lesson.
- Log what you read and listen to, and watch the hours add up.

The grammar in this course gets you across the starting line. Reading carries you the rest of the way.

## Key points

- Find clause boundaries, find the main verb, attach pieces to particles, find the describing clauses.
- Work from the end of the sentence backward.
- You don't need to analyse everything. Understanding is the goal.
- Keep a short list of "sticking points" and their fixes.
- Then read. A lot.
`,
};
