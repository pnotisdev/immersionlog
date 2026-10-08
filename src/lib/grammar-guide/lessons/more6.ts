import type { Lesson } from "../types";

/** Lessons filling the last gaps: why and yes/no, のだ, the copula ladder, sounds, grammar terms, old-fashioned speech. */

export const whyYesNo: Lesson = {
  slug: "why-yes-no",
  title: "Asking why, and saying yes and no",
  description:
    "なぜ, なんで and どうして compared; how to answer 'because'; and the words for yes and no (はい, ええ, うん, いいえ, ううん, いや) with the small reaction sounds that make up half of real conversation.",
  points: ["n5-doushite", "n5-kara-because"],
  body: `
## Three ways to say "why"

| Word | Feel | Where you hear it |
| --- | --- | --- |
| なぜ | neutral, a little formal, bookish | writing, speeches, serious questions |
| どうして | neutral to soft, can sound sympathetic | everyday speech, both polite and casual |
| なんで | casual, can sound blunt | friends, family, anime |

> *なぜ|why ; そう|so ; 思う|おもう|think ; の ; ですか
= Why do you think so?

> *どうして|why ; 泣いている|ないている|are crying ; の ; ？
= Why are you crying?

> *なんで|why ; 来なかった|こなかった|didn't come ; の ; ？
= Why didn't you come?

All three attach to a full sentence, usually ending in の or んですか because you are asking for an explanation (see the lesson on のだ).

### どうして can mean "how come"

どうして often carries surprise or worry rather than a clean request for a reason:

> *どうして|how come ; こんな ; こと ; に ; なった|became ; の ; ？
= How did it come to this?

When someone says どうして？ with a soft voice, they may be concerned. When someone says なんで！ sharply, they may be annoyed. Tone does the work.

### なんで has a second meaning

**何で** can also mean "by what means" (the particle で plus 何): 何で行く？ is "How will you go?". The two are told apart by context, and in writing by the kanji: 何で (なにで) means "by what", while "why" is usually written in kana, なんで.

> 駅|えき|station ; まで ; *何で|なにで|by what means ; 行く|いく|go ; の ; ？
= How are you going to the station?

## Answering "why"

The answer usually ends in **から** or **ので**, or in **のです** (see the next lesson). The question's なぜ is not repeated.

> どうして ; 遅れた|おくれた|were late ; の ; ？
= A: Why were you late?

> 電車|でんしゃ|train ; が ; 止まった|とまった|stopped ; *から|because ; です
= B: Because the train stopped.

In a written argument, the reason sometimes comes after **なぜなら** (because; see the conjunctions lesson): 行かない。なぜなら、時間がないからだ。

## Yes and no

English asks you to say yes or no to the *question*. Japanese answers say whether the *statement* is right. This matters most with negative questions, which you met earlier.

| Word | Meaning | Register |
| --- | --- | --- |
| はい | yes; "I'm listening"; present! | polite, standard |
| ええ | yes (a softer, spoken はい) | polite, relaxed |
| うん | yes | casual |
| そう / そうです | that's right | any |
| いいえ | no | polite, standard |
| いえ | no, not at all (modest denial) | polite, to compliments or thanks |
| ううん | no | casual |
| いや | no; wait, hmm | casual; also a hesitation |

> コーヒー ; を ; 飲み|のみ|drink ; ますか
= A: Will you have coffee?

> *はい|yes ; 、 ; いただき|receive ; ます
= B: Yes, I will.

> *いいえ|no ; 、 ; 結構|けっこう|fine ; です
= B: No, I'm fine, thanks.

### はい does not always mean yes

**はい** also means "I hear you" or "I understand". When a boss gives instructions and you say はい, you are saying "understood", not "I agree". A listener who keeps saying はい, はい while you talk is following you, nothing more.

### いいえ is stronger than you think

**いいえ** is a firm "no", and Japanese speakers soften refusals. You will hear more of:

- ちょっと… (that's a bit... of a problem)
- 難しいですね (that's difficult)
- 考えておきます (I'll think about it, usually no)
- 結構です (no thank you; also "that's fine/good", so tone and context decide)

### いや is two words

**いや** (casual no) is also a filler like "well..." or "no, hold on". In a fast conversation, いや、でも can start a sentence with no actual refusal, just a pause.

## Reaction sounds (あいづち)

Japanese conversation needs constant small signals that you are listening. They are called あいづち, and they are as much a part of grammar as particles.

| Sound | Meaning |
| --- | --- |
| うん / ええ / はい | I'm listening; yes |
| そうですね / そうだね | that's right; I agree |
| そうなんだ / そうなんですか | oh I see (new information) |
| なるほど | I see; that makes sense |
| へえ | oh? (surprise or interest) |
| ふうん / ふーん | hm (neutral, can sound uninterested) |
| ほんと / 本当？ | really? |
| まじで | seriously? (casual) |
| えっ | what? (surprise) |

> 昨日|きのう|yesterday ; 富士山|ふじさん|Mt. Fuji ; に ; 登った|のぼった|climbed ; よ
= A: I climbed Mt. Fuji yesterday.

> *へえ|oh ; 、 ; すごい
= B: Wow, that's amazing.

> *そうなんだ|oh is that so
= B: Oh, I see.

If you do not use あいづち when someone speaks to you in Japanese, the speaker may think you are not following or are bored. If you hear a lot of うん and ええ in a recording, that is not people being redundant. It is the rhythm.

## Key points

- **なぜ** (formal), **どうして** (everyday), **なんで** (casual). All usually end in の/んですか.
- **何で** can mean "by what means".
- Answers to "why" end in から / ので / のです.
- はい / ええ / うん = yes; いいえ / ううん / いや = no. Answers agree with the statement, not the question form.
- はい can mean "I understand", not "I agree".
- あいづち (うん, なるほど, へえ) are part of every conversation.
`,
};

export const noDa: Lesson = {
  slug: "noda",
  title: "のだ and んです: explaining, asking and insisting",
  description:
    "The explaining のだ in full: how to form it, the five jobs it does (reason, request for an explanation, realisation, insistence and softening), how it differs from から, and when you must not use it.",
  points: ["n5-n-desu", "n4-no-wa"],
  body: `
Few patterns appear in so many Japanese sentences, and so few textbooks explain them well. **のだ** (**んだ** in speech, **のです / んです** when polite) does not mean anything on its own. It changes the *role* of a sentence: it turns a plain statement into an **explanation** or a **request for one**.

## How to build it

Put the sentence in plain form, then attach **のだ**. Nouns and な-adjectives use **な** before の:

| Base | Plain + のだ | Spoken | Polite |
| --- | --- | --- | --- |
| 行く | 行くのだ | 行くんだ | 行くんです |
| 行かない | 行かないのだ | 行かないんだ | 行かないんです |
| 行った | 行ったのだ | 行ったんだ | 行ったんです |
| 高い | 高いのだ | 高いんだ | 高いんです |
| 学生 | 学生なのだ | 学生なんだ | 学生なんです |
| 静か | 静かなのだ | 静かなんだ | 静かなんです |

A noun does *not* take だ before んだ. It is **学生なんだ**, not 学生だんだ.

The question is **のか / の？** (casual) or **のですか / んですか** (polite):

> 何|なに|what ; を ; 食べている|たべている|eating ; *んです|(explaining) ; か
= What are you eating?

## What it does

### 1. Gives an explanation

You are saying "here is the reason or the situation".

> 電車|でんしゃ|train ; が ; 止まった|とまった|stopped ; *んです
= The thing is, the train stopped.

> 頭|あたま|head ; が ; 痛い|いたい|hurts ; *んです
= I have a headache, you see.

### 2. Asks for an explanation

Because the speaker expects an explanation, んですか is the natural way to ask about something you can see is unusual:

> どうしたん|what happened ; *ですか
= What happened? What's the matter?

> 日本語|にほんご|Japanese ; が ; 上手|じょうず|good ; *なんですね
= Your Japanese is good!

A plain 日本語が上手ですね is a compliment. 上手なんですね is a compliment with a hint of "I notice you can".

### 3. Realisation

When you suddenly understand something:

> そう|so ; *なんだ
= Oh, so that's how it is!

> あ ; 、 ; 雨|あめ|rain ; が ; 降っている|ふっている|is falling ; *んだ
= Ah, it's raining.

### 4. Insistence or command

In a firm voice, んだ can insist:

> 行く|いく|go ; *んだ
= You're going! (I'm telling you.)

> 早く|はやく|quickly ; 食べる|たべる|eat ; *んだ
= Eat up, now.

### 5. Softening the opening of a request

Before asking something, speakers set the scene with んですが:

> 実は|じつは|actually ; 相談|そうだん|consult ; が ; ある ; *んですが
= Actually, there's something I'd like to talk to you about.

> 道|みち|road ; に ; 迷った|まよった|got lost ; *んですが
= I seem to be lost...

The sentence trails off, and the other person is invited to help.

## のだ vs から

| | から | のだ |
| --- | --- | --- |
| structure | reason joined to a result | the sentence itself is an explanation |
| 雨が降っているから行かない | rain, so I won't go | |
| 行かないんです。雨が降っているので。 | | I'm not going. It's because of the rain. |

**から** hands over a reason; **のだ** presents a situation as the explanation for something the listener has noticed or asked. In an answer, both are fine.

## When not to use it

- **A simple factual report** that needs no explanation: 昨日、映画を見ました is natural; 昨日、映画を見たんです makes it sound like you are answering a question.
- **After a completely new topic**: if you are not explaining anything, the listener will wonder what you are explaining.

If a learner uses んです everywhere it sounds like constant justification. If a learner never uses it, they miss half of the polite conversation.

## のだ in writing: である

In writing, のだ shifts to **のである**, giving a firm, explanatory tone in essays:

> これ|this ; が ; 問題|もんだい|problem ; *なのである
= This is exactly the problem.

## Male, female and soft

Casual speech has fine-tuned endings:

| | Style |
| --- | --- |
| 行くんだ。 | neutral/masculine |
| 行くのよ。 | feminine, softer |
| 行くのね。 | feminine, seeking agreement |
| 行くんだよ。 | friendly telling |
| 行くんだよね？ | checking |

## Reading tip

When you see **んだ / んです / のだ**, ask "What is being explained, and who asked for it?". Very often the answer is "the previous sentence", and the speaker is justifying it.

## Key points

- **Plain form + のだ** (**な** after nouns and な-adjectives) = "it is the case that...".
- Spoken **んだ / んです**; questions **のか / んですか**.
- Jobs: explain, ask for explanation, realise, insist, soften a request.
- Not for plain reports with nothing to explain.
- Written: **のである**.
`,
};

export const copulaLadder: Lesson = {
  slug: "copula-ladder",
  title: "The ladder of 'is': だ, です, である, でございます, じゃ and っす",
  description:
    "Every way to say 'is' from rough to ceremonial, who uses each (and why a samurai says ござる), the negative and past of each, and what the choice tells you when you meet it in a book, a game or an announcement.",
  points: ["n5-desu", "n4-de-gozaimasu"],
  body: `
You know **だ** and **です**. Japanese has several more, and each one tells you something about the speaker or the setting. Learn them as a ladder, from rough to ceremonial.

## The ladder

| Style | Form | Feel | Where |
| --- | --- | --- | --- |
| rough | だ | plain, blunt | friends, thoughts |
| none | (nothing) | casual; just the noun | friends, chat |
| polite | です | standard polite | strangers, colleagues |
| written | である | formal, firm | essays, lectures, news analysis |
| formal speech | であります | stiff, military-sounding | old military, formal speeches |
| humble-polite | でございます | very polite, ceremonial | shops, hotels, announcements |
| elder | じゃ | old man or woman, fictional | fantasy wizards, grandparents |
| Kansai | や | friendly, regional | Osaka and around |
| sporty | っす | casual-respectful | juniors to seniors, athletes |

## The core: だ and です

> 彼|かれ|he ; は ; 先生|せんせい|teacher ; *だ
> 彼|かれ|he ; は ; 先生|せんせい|teacher ; *です
= He is a teacher.

Dropping だ entirely is common in casual speech: 彼は先生。 In some patterns だ must go: it disappears before ので, のに, and before nouns (replaced by な or の), and before んだ (replaced by な). It also changes to **で** in the て-form (学生で).

## である: the written copula

**である** is the formal, firm "is" of essays, textbooks and editorials. Its negative is **ではない** and its past is **であった**.

> これ|this ; は ; 重要|じゅうよう|important ; *である
= This is important.

> 結果|けっか|result ; は ; 失敗|しっぱい|failure ; *であった
= The result was a failure.

It is also the basis of the written forms **であり** (is, and), **であろう** (probably is) and **であるが** (is, but). You will see them throughout non-fiction and in the narration of older novels.

> 彼|かれ|he ; は ; 優秀|ゆうしゅう|excellent ; *であり|and ; 誠実|せいじつ|sincere ; *である
= He is excellent and sincere.

A lecturer or a blogger using である keeps a firm, impersonal voice. A fiction narrator may use だ or である for flavour.

## であります: stiff and militaristic

**であります** is the polite form of である. Today you mostly meet it in fiction. A character who says 「であります！」 is usually a soldier, an official, or someone doing an impression of one.

> 自分|じぶん|I ; は ; 兵隊|へいたい|soldier ; *であります
= I am a soldier, sir!

## でございます: ceremonial politeness

**でございます** is the humble-polite form of です. It is the voice of department stores, hotels, airlines and station announcements.

> いらっしゃいませ ; 。 ; こちら ; が ; メニュー ; *でございます
= Welcome. This is the menu.

> 次|つぎ|next ; は ; 東京|とうきょう|Tokyo ; *でございます
= The next stop is Tokyo.

The verb ある has the same polite shape, **ございます**: 駐車場がございます (we have a car park). The negative is **ございません**.

## じゃ and や: regional and fictional

**じゃ** stands for だ in several dialects, and became the way fiction writes an elderly or wise speaker (a "role language", 役割語). In fantasy, a sage says:

> わし|I ; は ; 魔法使い|まほうつかい|wizard ; *じゃ
= I am a wizard, you see.

It has no place in your own speech outside a joke. In Kansai, the equivalent is **や**:

> これ|this ; は ; 本|ほん|book ; *や
= It's a book. (Kansai)

## っす: casual-respectful

**っす** is a shortened です used by young people, sports club members, and juniors speaking to seniors. It sounds friendly and slightly deferential:

> 俺|おれ|I ; は ; 学生|がくせい|student ; *っす
= I'm a student, sir.

> *あざっす|thanks
= Thanks! (very casual, from ありがとうございます)

Do not use っす with someone you want to be properly polite to. In anime it is the sound of a keen junior or a street-smart character.

## Negatives and past: one table

| | だ | です | である | でございます |
| --- | --- | --- | --- | --- |
| is | だ | です | である | でございます |
| is not | じゃない | じゃありません | ではない | ではございません |
| was | だった | でした | であった | でございました |
| was not | じゃなかった | じゃありませんでした | ではなかった | ではございませんでした |

## What the choice tells you

When you meet a new character or text, the copula is a quick profile:

- **だ** in a narrator's voice: plain, close, narrative.
- **です** throughout: a careful, polite narrator or a speaker to strangers.
- **である**: a formal essay, an old-fashioned narrator, a lecturer.
- **でございます**: a shop or a service.
- **じゃ**: an old or fantastical character.
- **っす**: a junior, a sports kid.
- **や**: a friendly Kansai character.

## Key points

- だ (plain), です (polite), である (written), でございます (ceremonial).
- じゃ, や, であります and っす are character or regional flavours.
- Negatives: じゃない / じゃありません / ではない / ではございません.
- The copula tells you about the speaker, the setting and the distance.
`,
};

export const sounds: Lesson = {
  slug: "sounds",
  title: "Sounds that change: long vowels, small っ, ん, silent vowels and voicing",
  description:
    "The sound rules that kana charts leave out: long vowels and why they matter, the small っ, three sounds of ん, vowels that go silent, the irregular consonants (し, ち, つ, ふ), は/へ/を as particles, rendaku, and an introduction to pitch accent.",
  points: [],
  body: `
Hiragana look like a perfect one-to-one code, but spoken Japanese adds rules on top. None is hard; skipping them is what makes a learner sound foreign. This lesson summarises what to listen for. The [kana chapter](/guide/kana) covers the charts and the basic sounds.

## The five vowels are pure

Japanese has five vowels, always pronounced the same way: **あ** (ah), **い** (ee), **う** (oo, lips not rounded as in English), **え** (eh), **お** (oh, shorter than English). They do not glide into other sounds, and they do not shrink. A word like **さくら** has three equal beats.

## Beats, not syllables

Japanese counts in **morae** (beats). Each kana is one beat, except the small ゃ ゅ ょ, which join the kana before them. Compare:

| Word | Kana | Beats |
| --- | --- | --- |
| 東京 | と・う・きょ・う | 4 |
| 学校 | が・っ・こ・う | 4 |
| 日本 | に・ほ・ん | 3 |

If you give long vowels, small っ and ん a full beat, you will already sound much more natural.

## Long vowels

A long vowel is held for two beats. Length changes meaning, so it matters.

| Short | Long |
| --- | --- |
| おばさん (aunt, middle-aged woman) | おばあさん (grandmother) |
| おじさん (uncle, middle-aged man) | おじいさん (grandfather) |
| ビル (building) | ビール (beer) |
| ゆき (snow) | ゆうき (courage) |
| ここ (here) | こうこう (high school) |

How a long vowel is **written** in hiragana:

- **あ・い・う・え**: add an extra あ, い, う or い. おかあさん, おにいさん, すうじ, ねえさん.
- **o-sound**: usually add **う** (とうきょう, ありがとう), but some words use **お** (おおきい, とおい, おおかみ, ほおずき).
- **え-sound**: usually add **い** (せんせい, けいかく), though a few use え (ええ, おねえさん).
- **Katakana** always uses ー: ビール, コーヒー, スーパー.

So とうきょう is Tokyo, read "tohkyoh", not "to-u-kyo-u".

## The small っ (gemination)

A small **っ** makes the next consonant last one beat. It is a silent beat before a hard consonant.

| Without | With っ |
| --- | --- |
| かた (shoulder) | かった (bought) |
| きて (come) | きって (stamp) |
| いた (was) | いった (went) |
| さか (slope) | さっか (writer) |

It appears before **k, s, t, p** (and sh, ch, ts): がっこう, ざっし, きって, いっぱい, まっちゃ. You do not say a vowel in the gap: just hold the mouth shape for a beat.

## ん: three sounds, one letter

**ん** is a full beat, but its sound depends on what follows.

- Before **p, b, m**: an **m** sound (しんぶん, さんぽ, みんな).
- Before **t, d, n, r, s, z**: an **n** sound (ほんとう, せんせい).
- Before **k, g** or at the end: an "ng" sound (りんご, ほん).
- Before a vowel or **y**: the vowel is nasal and there is a clear break: ほんや (book shop), not ほにゃ. Hiragana separates them: ほんや versus ほにゃ.

You will do this automatically if you simply do not close your mouth for ん.

## Vowels that go silent (devoicing)

In Tokyo-style speech, **い** and **う** between voiceless consonants (k, s, t, p, h, sh, ch, ts, f), and at the end of words after voiceless consonants, are whispered or dropped:

| Word | Said as |
| --- | --- |
| です | des(u) |
| ます | mas(u) |
| すき | s(u)ki |
| ひと | h(i)to |
| した | sh(i)ta |
| つくえ | ts(u)kue |
| きた | k(i)ta |

The vowel is still counted as a beat; the sound just becomes breath. This is why です sounds like "dess" in conversation. If you pronounce every vowel fully, you will sound careful, like a learner. It is not wrong, just slower.

## Spelling quirks that sound different

### Particles

Three kana are pronounced differently when they are particles:

| Written | Particle sound | Elsewhere |
| --- | --- | --- |
| は | wa | ha |
| へ | e | he |
| を | o | (only particle) |

So こんにちは is "konnichiwa" and わたしは is "watashi wa". The sound を is the same as お.

### じ/ぢ and ず/づ

**じ** and **ぢ** are both "ji"; **ず** and **づ** are both "zu". The ぢ and づ spellings appear only in compounds: はなぢ (nosebleed), つづく (continue), こづつみ (parcel). When typing, ぢ is "di" and づ is "du".

## Irregular consonants

The kana chart has a neat grid, but the sounds in it are not all regular:

| Kana | Sound | Expected | Because |
| --- | --- | --- | --- |
| し | shi | si | before い, s softens |
| ち | chi | ti | before い, t softens |
| つ | tsu | tu | before う, t softens |
| ふ | fu | hu | h becomes a soft breath |
| じ | ji | zi | |
| ぢ | ji | di | |
| づ | zu | du | |

Learn the sounds as the kana says them; do not try to rebuild them from the grid.

## Voicing in compounds: rendaku

When two words join into a compound, the first sound of the second word often becomes voiced (か → が, さ → ざ, た → だ, は → ば). This is called **rendaku**.

| Words | Compound | Reading |
| --- | --- | --- |
| て + かみ (hand + paper) | 手紙 | てがみ |
| ひと + ひと | 人々 | ひとびと |
| いり + くち | 入り口 | いりぐち |
| ひ + はな | 火花 | ひばな |
| あお + そら | 青空 | あおぞら |

You cannot predict it fully, but it is a very common reason that a kanji has several readings. If a compound looks unfamiliar, a voiced first sound is likely rendaku.

## Pitch accent

Japanese words have a **pitch** pattern: some beats are high and some low, and the pattern is part of the word. Tokyo Japanese has patterns like low-high (LH) or high-low (HL).

| Word | Pitch | Meaning |
| --- | --- | --- |
| はし | HL | chopsticks (箸) |
| はし | LH | bridge (橋) |
| あめ | HL | rain (雨) |
| あめ | LH | candy (飴) |

Note that the pitch is relative: a drop is what you hear. You do not need to learn it from rules at the start. Learn it from a dictionary that marks accent, and above all from **a lot of listening**. Wrong pitch rarely makes you incomprehensible, but listeners notice.

## Listening and speaking tips

1. **Give every beat equal time.** Don't stress syllables like in English.
2. **Hold long vowels and small っ.**
3. **Do not diphthongise.** こう is "ko-o", not "koh-w".
4. **Say ん with the mouth open before vowels** (ほんや, not ほにゃ).
5. **Listen for silent vowels** in です and ます and copy them.

## Key points

- Five pure vowels; each kana is one beat.
- Long vowels (おばさん vs おばあさん) and small っ (かた vs かった) change meaning.
- ん is a nasal beat, with three sounds.
- Devoiced い and う in です, ます, すき make speech smooth.
- は/へ/を are wa/e/o as particles.
- し, ち, つ, ふ, じ are irregular consonants. Rendaku voices compounds.
- Pitch accent is learned from listening.
`,
};

export const grammarTerms: Lesson = {
  slug: "grammar-terms",
  title: "Grammar words decoded: jargon, auxiliary verbs and why guides disagree",
  description:
    "What the technical words mean, how Japanese school grammar names things (and why other guides name them differently), what an auxiliary verb is, why Japanese has no infinitive, and how words are built by gluing endings together.",
  points: [],
  body: `
Once you read a second or third grammar guide, you will find that they disagree on names. One calls 食べない a "negative form". Another calls ない an "auxiliary verb". A third says 食べ is a "stem". They are all describing the same word. This lesson gives you the vocabulary to compare them.

## The jargon, in plain English

| Term | Meaning | Example |
| --- | --- | --- |
| noun | thing, concept | 猫, 本 |
| verb | action or event word | 食べる, 行く |
| adjective | describing word | 高い, 静か |
| adverb | describes a verb or adjective | ゆっくり, とても |
| particle | small word that tags a noun | は, が, を |
| predicate | the word (or phrase) that closes the sentence | 食べる, 高い, 学生だ |
| subject | the thing that does or is | 猫が |
| topic | what the sentence is about | 猫は |
| object | the thing acted on | 魚を |
| copula | the "is" word | だ, です |
| clause | a sentence-like unit inside a bigger sentence | 昨日買った |
| conjugation | the changes a word makes | 食べる → 食べた |
| stem | the part that stays when endings change | 食べ |
| nominalizer | makes a clause into a noun | の, こと |
| transitive | takes an object | 開ける |
| intransitive | no object | 開く |
| register | politeness and style level | plain, polite, keigo |

## Japanese has no infinitive

English has "to eat" (the infinitive): a form with no tense, no subject, and no mood, used when a verb is the name of an action. Japanese has no equivalent. What you find in a dictionary (食べる) is a real finite form: a plain, present/future-tense verb, usable as a complete sentence ("I eat / will eat"). So "the dictionary form" is not an infinitive. It is the plain non-past form that happens to be listed.

When an English infinitive is needed ("I want to eat"), Japanese uses the stem (食べたい), the て-form (食べてほしい), or a nominalized clause (食べるのが好き).

## How Japanese builds words: gluing

Japanese is called **agglutinative**: words are built by gluing endings onto a stem, each ending doing one job. English mixes meanings into single words (went = go + past), and Latin or Spanish packs several meanings into one ending (hablaré = I-will-speak). Japanese lines them up:

> 食べ|たべ|eat ; させ|make ; られ|(passive) ; たく|want ; なかっ|not ; た|(past)
= (I) didn't want to be made to eat

Each piece does one thing, and the order is predictable. That is why the earlier lessons felt like building with blocks. When you meet a long word, peel it from the right.

## School grammar and the six forms

Japanese schools teach 学校文法 (school grammar). It is the grammar most dictionaries, textbooks for Japanese children, and the JLPT-style Japanese reference books use. Its basic idea is that every verb has **six conjugation forms** (活用形), named by their *typical use*:

| Name | Typical use | 書く | 食べる |
| --- | --- | --- | --- |
| 未然形 (mizenkei, "not yet") | before ない, せる, れる, う/よう | 書か / 書こ | 食べ |
| 連用形 (ren'youkei) | before ます, た, て, ながら | 書き / 書い | 食べ |
| 終止形 (shuushikei) | ends a sentence | 書く | 食べる |
| 連体形 (rentaikei) | before a noun | 書く | 食べる |
| 仮定形 (kateikei) | before ば | 書け | 食べれ |
| 命令形 (meireikei) | commands | 書け | 食べろ |

Notice the logic. Instead of "the negative form" it says "the form that goes before ない". **Western-style guides** (including this course) give names by meaning instead: negative, polite, past, te-form. Both describe the same facts. The school-grammar system explains why 書か, 書き, 書く, 書け, 書こ form a pattern: the five vowels あ, い, う, え, お.

## What is an auxiliary verb?

In school grammar, the endings that attach to a verb are mostly **auxiliary verbs** (助動詞, jodōshi). They include:

| Auxiliary | Job | In this course |
| --- | --- | --- |
| ない | negative | "negative form" |
| ます | polite | "polite form" |
| た | past | "past form" |
| れる / られる | passive, potential, honorific | "passive" |
| せる / させる | causative | "causative" |
| たい | want | "want form" |
| う / よう | let's, intend | "volitional" |
| だ / です | is | "copula" |
| らしい | apparently | "hearsay" |

The same word is thus "a verb ending" or "an auxiliary verb" depending on the guide. What matters is that they are all small units with one job, glued on in a fixed order.

By contrast, **helper verbs** in the Western sense (いる in 食べている, しまう in 食べてしまう) are full verbs used after the て-form. School grammar calls these 補助動詞 (supplementary verbs).

## Parts of speech in school grammar

School grammar sorts words into ten classes:

| Class | Japanese | Examples |
| --- | --- | --- |
| noun | 名詞 | 猫, 学校 |
| verb | 動詞 | 食べる |
| i-adjective | 形容詞 | 高い |
| na-adjective | 形容動詞 | 静かだ |
| adnominal | 連体詞 | この, あの, 大きな, いわゆる |
| adverb | 副詞 | ゆっくり, とても |
| conjunction | 接続詞 | しかし, だから |
| interjection | 感動詞 | ああ, はい, もしもし |
| auxiliary verb | 助動詞 | ない, ます, た |
| particle | 助詞 | は, が, を |

The odd one is **連体詞** (adnominal): words that only ever come before a noun and cannot be used alone. この (this), その, あの, 大きな (big), 小さな (small), ある (a certain), いわゆる (so-called). They are not adjectives because they do not conjugate.

Particles are split into case particles (が, を, に), binding particles (は, も), conjunctive particles (て, ば, から), and sentence-final particles (ね, よ).

## Why guides disagree

There are three reasons.

1. **Different schools.** Japanese school grammar, Western-style learner grammar, and academic linguistics each choose their own names.
2. **Different goals.** A guide for beginners wants to say "negative form" and move on. A guide for linguists wants to explain why.
3. **Real ambiguity.** Is だ an auxiliary verb or a copula verb? Is ない an adjective or an auxiliary? Linguists argue, and there is no single right answer.

The best response: **do not fight the terms**. When a guide uses a name you don't know, translate it into the thing it describes, and carry on.

## Why parsing is hard

Parsing a Japanese sentence by machine (or by eye) is harder than in English because:

1. **There are no spaces.** You decide where words begin and end.
2. **Words carry long strings of endings.** 食べさせられたくなかった is one word with six meaningful parts.
3. **Dictionary tools disagree.** Tools like MeCab (used by many dictionaries and pop-up readers) split text into morphemes using a dictionary and statistics. One may split 食べている as one unit and another as 食べ + て + いる.
4. **Subjects vanish.** The grammar of what to supply is in context.

If your pop-up dictionary breaks a word oddly, it isn't you. Check whether a verb plus endings has been cut into pieces.

## Archaic or "poetic" forms

Old grammar names also survive in writing: the adjective ending **-き** (美しき姫: a beautiful princess), **-し** (美し), **-ぬ** (知らぬ: don't know). They are covered in the lesson on old-fashioned Japanese.

## Key points

- A **predicate** closes the sentence; a **particle** tags a noun; a **clause** is a sentence inside a sentence.
- Japanese has **no infinitive**. The dictionary form is a plain present/future verb.
- Japanese is **agglutinative**: endings are glued on, one job each.
- School grammar's six forms (未然形, 連用形, 終止形, 連体形, 仮定形, 命令形) name forms by use.
- An **auxiliary verb** (助動詞) is an ending like ない, ます, た, れる, せる, たい.
- Guides disagree on names, not on facts.
`,
};

export const archaic: Lesson = {
  slug: "old-fashioned",
  title: "Old-fashioned and literary Japanese",
  description:
    "The pieces of classical and period speech you meet in samurai dramas, fantasy games, light novels and old books: 〜ぬ, 〜き, 〜べし, ござる, じゃ, old pronouns and the historical kana spelling.",
  points: [],
  body: `
Modern Japanese is full of fossils. In samurai dramas, fantasy RPGs, light novels, historical manga and older books, characters talk with the grammar of earlier centuries. This is not a complete grammar of classical Japanese (古文). It is a field guide to the pieces that show up in entertainment.

:::note Flavour, not history
Samurai in TV dramas do not speak real period Japanese. They speak a theatrical style that signals "old" to the audience (called 時代劇 jidaigeki speech). The grammar below is what that style borrows. Treat it as a costume.
:::

## The old negative: ぬ and ず

Modern **ない** has an older form **ぬ**, still common in formal and literary writing, and **ず** (the connective, "without doing").

| Modern | Old |
| --- | --- |
| 知らない | 知らぬ |
| 知らないで | 知らず(に) |
| 言わなかった | 言わざる (attributive) |
| しない | せぬ |

> 何|なに|what ; も ; 知ら|しら|know ; *ぬ
= I know nothing.

> 知らざる|しらざる|unknown ; 者|もの|person
= an unknown person / a person one doesn't know

Famous phrases use it: **見ざる、聞かざる、言わざる** ("see no evil, hear no evil, speak no evil"); **やむを得ない / やむを得ず** ("having no choice"). The modern polite negative **〜ません** began as ます + ぬ.

## -き and -し: old adjective endings

Old い-adjectives end in **-し** in the dictionary form and **-き** when they modify a noun.

| Modern | Old (before a noun) | Old (end of sentence) |
| --- | --- | --- |
| 美しい姫 | 美しき姫 | 姫は美し |
| 高い山 | 高き山 | 山は高し |
| 良い人 | 良き人 | 人は良し |
| 悪い奴 | 悪しき奴 | |

> 美しき|うつくしき|beautiful ; 姫|ひめ|princess
= a beautiful princess

> *高き|たかき|lofty ; 山|やま|mountain
= a lofty mountain

You will meet **-き** forms in titles, mottos and the names of techniques (anime attacks like 古き良き or 赤き血).

## -べし and -べき

**べし** meant "should, must, will surely". Modern Japanese keeps **べき** (attributive) and **べきだ**:

> 守るべき|まもるべき|should be protected ; もの
= something that should be protected

> 約束|やくそく|promise ; は ; 守る|まもる|keep ; *べし|must
= One must keep one's promises.

## Imperatives: せよ, たまえ, なさい

| Form | Meaning | Typical user |
| --- | --- | --- |
| せよ | do! (old する imperative) | stern commanders, textbooks |
| たまえ | please do (from 給う) | senior men, school headmasters |
| なさい | do (firm, polite) | mothers, teachers |
| い / え (e.g. 行け) | do! (blunt) | young tough characters |

> 急げ|いそげ|hurry
> 早く|はやく|quickly ; *行きたまえ|いきたまえ|go (if you please)
= Hurry! / Go quickly, if you please.

## Old copulas and endings

| Form | Meaning | Register |
| --- | --- | --- |
| じゃ | is (old dialect) | elderly, wise |
| であろう | probably is | written |
| なり | is (classical) | classical writing |
| ござる | is, exists, humble | samurai |
| 候 (そうろう) | is, humble polite | historical letters |
| ておる | is doing | old or stern |
| ぞよ | you know (old emphasis) | villains and elders |
| わい / のう | emphasising/sighing | old men |

> 拙者|せっしゃ|I (humble samurai) ; は ; 浪人|ろうにん|masterless samurai ; *でござる
= I am a rōnin.

> 見事|みごと|splendid ; *じゃ
= Splendid!

## Old pronouns

Old speech has a rich set of "I" and "you". You will see these constantly in costume dramas, historical fiction and fantasy.

| Word | Meaning | User |
| --- | --- | --- |
| 拙者 | I | samurai (humble) |
| 某 (それがし) | I | samurai, warrior |
| 我 / 吾 (われ) | I | old, forceful |
| 余 (よ) | I | emperor, tyrant |
| 妾 (わらわ) | I | noblewoman, princess |
| 吾輩 (わがはい) | I | pompous or comic (Natsume Sōseki's cat) |
| 儂 (わし) | I | old man |
| 貴殿 / 貴様 | you | respectful in old times; now rude |
| 汝 (なんじ) | you | biblical, fantasy |
| お主 (おぬし) | you | samurai |
| そなた | you | royalty and nobility |

## Everyday remnants

Some old forms persist in daily Japanese:

- **〜ず** in **知らず知らず** ("without realising").
- **ゆえに / 故に**: therefore.
- **〜のみ**: only (formal; のみならず "not only").
- **〜たる / 〜なる**: attributive classical copulas: 王たる者 ("one who is king").
- **いかなる**: whatever kind.
- **〜(ん)とする**: be about to (〜んとす).
- **ござる / ござい**: ございます is a descendant.

## Historical kana spelling (旧仮名遣い)

Before 1946, Japanese was written with a spelling that does not match sound. Older books and poetry still use it.

| Old | Modern | Meaning |
| --- | --- | --- |
| けふ | きょう | today |
| てふてふ | ちょうちょう | butterfly |
| おもふ | おもう | think |
| いふ | いう | say |
| ゐる | いる | be (ゐ = wi) |
| ゑ | え | picture (ゑ = we) |
| をとこ | おとこ | man |
| くわ | か | (kwa) |
| やうに | ように | like |

> 思ふ|おもふ|think
= 思ふ is the old spelling of 思う.

Two quick rules: a word-medial **ふ** often becomes **う**, and **ゐ/ゑ/を** often become **い/え/お**. If a word reads wrongly aloud, try the modern sound.

## How to read them

1. **Recognise the ending.** If you see 〜ぬ, 〜ず, 〜き, 〜べし, 〜ござる, 〜じゃ, ask which modern form it stands for.
2. **Translate to the modern pattern.** 知らぬ → 知らない; 美しき → 美しい; 行くべし → 行くべきだ.
3. **Take the flavour.** The speaker is a samurai, a priest, an emperor, an elder, or a pompous narrator.

If you want to read real classical texts (古文) such as *The Tale of Genji* or *Tsurezuregusa*, you will need a dedicated textbook; this lesson is only enough to enjoy period drama and fantasy.

## Key points

- **ぬ / ず / ざる**: old negative. **-き**: old adjective before a noun. **べし / べき**: should.
- **せよ, たまえ**: old imperatives. **ござる, 候, じゃ, ぞよ**: samurai and elder endings.
- Old pronouns (拙者, 我, 余, 妾, 吾輩, 汝, お主, そなた) mark character.
- Historical kana (けふ, おもふ) appear in old books.
- Think of it as costume: recognise it, map it to the modern form.
`,
};
