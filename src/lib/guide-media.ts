/**
 * Media recommendations for the learning guide's "What to watch and read" chapter.
 *
 * Difficulty and character counts are Jiten.moe's (difficultyRaw on a 0–5 scale, from
 * api.jiten.moe/api/media-deck/get-media-decks), fetched 2026-09-27; `jiten` is the deck
 * id, linked from the table. Visual novel lengths and age ratings are VNDB's (kana API,
 * Japanese-language official releases), fetched the same day: only titles with a release
 * rated 15 or younger are listed, and `rating` is the youngest Japanese rating found.
 * Titles were chosen from the community lists the chapter cites; the numbers decide the
 * order, not the choice.
 */

export interface GuideMedia {
  ja: string;
  en: string;
  /** Jiten.moe difficulty, 0 (easiest) – 5. */
  difficulty: number;
  /** Japanese characters in the whole work (all episodes/volumes Jiten counts). */
  chars: number;
  jiten: number;
  note: string;
}

export interface GuideVisualNovel extends GuideMedia {
  /** VNDB average length, hours. */
  hours: number;
  vndb: string;
  voiced: string;
  platforms: string;
  rating: string;
}

export const GUIDE_ANIME: GuideMedia[] = [
  { ja: "からかい上手の高木さん", en: "Teasing Master Takagi-san", difficulty: 0.6, chars: 47_148, jiten: 34772, note: "Two classmates, short everyday scenes, very repetitive vocabulary." },
  { ja: "しろくまカフェ", en: "Polar Bear Café", difficulty: 0.76, chars: 177_681, jiten: 10382, note: "Dry humour at an animal-run café. Slow, clear dialogue." },
  { ja: "のんのんびより", en: "Non Non Biyori", difficulty: 1.01, chars: 46_788, jiten: 16685, note: "Country slice of life. Some rural speech, very little plot to follow." },
  { ja: "クレヨンしんちゃん", en: "Crayon Shin-chan", difficulty: 1.04, chars: 2_720_858, jiten: 9594, note: "Family comedy; Shin-chan's own speech is deliberately rude, the adults' isn't." },
  { ja: "けいおん!", en: "K-On!", difficulty: 1.48, chars: 50_855, jiten: 10305, note: "High-school band club. Casual girls' speech." },
  { ja: "ちいかわ", en: "Chiikawa", difficulty: 1.53, chars: 27_377, jiten: 116807, note: "Very short episodes, easy to fit into a day." },
  { ja: "ポケットモンスター", en: "Pokémon (anime)", difficulty: 1.57, chars: 1_304_302, jiten: 8868, note: "Made for children; endless episodes." },
  { ja: "夏目友人帳", en: "Natsume's Book of Friends", difficulty: 1.8, chars: 46_706, jiten: 53962, note: "Gentle, episodic; some folklore vocabulary." },
  { ja: "小林さんちのメイドラゴン", en: "Miss Kobayashi's Dragon Maid", difficulty: 1.83, chars: 69_997, jiten: 37988, note: "Everyday comedy with a few fantasy words." },
  { ja: "ご注文はうさぎですか？", en: "Is the Order a Rabbit?", difficulty: 2.08, chars: 52_385, jiten: 7565, note: "Café slice of life, lots of polite speech." },
  { ja: "ぼっち・ざ・ろっく！", en: "Bocchi the Rock!", difficulty: 2.09, chars: 59_191, jiten: 51407, note: "Fast inner monologue in places, but everyday language." },
  { ja: "ばらかもん", en: "Barakamon", difficulty: 2.13, chars: 61_053, jiten: 53753, note: "Many characters speak the Gotō islands dialect." },
  { ja: "ゆるキャン△", en: "Laid-Back Camp", difficulty: 2.34, chars: 38_673, jiten: 2222, note: "Camping and gear vocabulary, calm pace." },
  { ja: "日常", en: "Nichijou", difficulty: 2.43, chars: 109_192, jiten: 9595, note: "Absurd gag comedy; visual jokes help." },
  { ja: "葬送のフリーレン", en: "Frieren", difficulty: 2.68, chars: 102_481, jiten: 40963, note: "Fantasy vocabulary, but slow, clear delivery." },
  { ja: "SPY×FAMILY", en: "Spy × Family", difficulty: 2.74, chars: 57_011, jiten: 8766, note: "Spy jargon on top of family comedy." },
  { ja: "シュタインズ・ゲート", en: "Steins;Gate", difficulty: 2.95, chars: 116_907, jiten: 22541, note: "Science terms and otaku slang. A good later goal." },
  { ja: "かぐや様は告らせたい", en: "Kaguya-sama: Love Is War", difficulty: 3.33, chars: 58_333, jiten: 53865, note: "Rapid narration and wordplay. Harder than it looks; save it." },
];

export const GUIDE_FILMS: GuideMedia[] = [
  { ja: "となりのトトロ", en: "My Neighbor Totoro", difficulty: 0.8, chars: 8_949, jiten: 7389, note: "Short, gentle, mostly children talking." },
  { ja: "魔女の宅急便", en: "Kiki's Delivery Service", difficulty: 1.37, chars: 14_284, jiten: 4273, note: "Everyday conversation, clear speech." },
  { ja: "聲の形", en: "A Silent Voice", difficulty: 1.4, chars: 19_303, jiten: 24700, note: "School life; some signing scenes with little dialogue." },
  { ja: "千と千尋の神隠し", en: "Spirited Away", difficulty: 1.86, chars: 12_026, jiten: 21906, note: "A few old-fashioned words from the bathhouse staff." },
  { ja: "すずめの戸締まり", en: "Suzume", difficulty: 1.94, chars: 21_998, jiten: 30081, note: "Road trip; regional speech in places." },
  { ja: "君の名は。", en: "Your Name", difficulty: 2.09, chars: 23_433, jiten: 119548, note: "Fast in places, natural modern speech." },
  { ja: "天気の子", en: "Weathering with You", difficulty: 2.36, chars: 17_270, jiten: 28061, note: "Tokyo youth speech, a little slang." },
];

export const GUIDE_MANGA: GuideMedia[] = [
  { ja: "からかい上手の高木さん", en: "Teasing Master Takagi-san", difficulty: 0.65, chars: 213_436, jiten: 96748, note: "Short chapters, the same two characters, simple dialogue." },
  { ja: "よつばと！", en: "Yotsuba&!", difficulty: 0.8, chars: 167_600, jiten: 96859, note: "The classic first manga. A five-year-old's everyday adventures." },
  { ja: "チーズスイートホーム", en: "Chi's Sweet Home", difficulty: 1.65, chars: 107_346, jiten: 105023, note: "A kitten's life. Chi talks in baby speech, which throws some readers." },
  { ja: "聲の形", en: "A Silent Voice", difficulty: 2.08, chars: 84_709, jiten: 98132, note: "Seven volumes of school drama; a complete story." },
  { ja: "SPY×FAMILY", en: "Spy × Family", difficulty: 2.46, chars: 358_447, jiten: 123744, note: "Popular, funny, some jargon." },
  { ja: "ワンパンマン", en: "One-Punch Man", difficulty: 2.99, chars: 336_062, jiten: 104047, note: "Action with lots of pictures carrying the story." },
  { ja: "ハイキュー!!", en: "Haikyu!!", difficulty: 3.07, chars: 676_188, jiten: 141263, note: "Volleyball terms and shouting; long." },
  { ja: "葬送のフリーレン", en: "Frieren", difficulty: 3.12, chars: 250_442, jiten: 104950, note: "Fantasy vocabulary and some formal speech." },
  { ja: "ONE PIECE", en: "One Piece", difficulty: 3.43, chars: 2_454_540, jiten: 98285, note: "Huge, dense and full of made-up words. Not a first manga." },
];

export const GUIDE_VISUAL_NOVELS: GuideVisualNovel[] = [
  {
    ja: "ツユチル・レター～海と栞に雨音を～",
    en: "Letters From a Rainy Day",
    difficulty: 0.35,
    chars: 117_542,
    jiten: 119382,
    note: "Short and gentle. The easiest title on VN Club's beginner list.",
    hours: 8,
    vndb: "v31212",
    voiced: "Full",
    platforms: "Windows",
    rating: "All ages",
  },
  {
    ja: "Kanon",
    en: "Kanon",
    difficulty: 1.62,
    chars: 527_026,
    jiten: 118876,
    note: "Key's classic. Winter town, several heroine routes.",
    hours: 30,
    vndb: "v33",
    voiced: "Full (later editions)",
    platforms: "Switch, Windows, PS2, PSP, mobile",
    rating: "All ages",
  },
  {
    ja: "9-nine-ここのつここのかここのいろ",
    en: "9-nine- Episode 1",
    difficulty: 1.69,
    chars: 143_413,
    jiten: 272,
    note: "First of a series; short episodes make it a good first finish.",
    hours: 8.5,
    vndb: "v19829",
    voiced: "Full",
    platforms: "Windows (all-ages edition)",
    rating: "All ages",
  },
  {
    ja: "マルコと銀河竜",
    en: "Marco & The Galaxy Dragon",
    difficulty: 1.82,
    chars: 79_943,
    jiten: 117015,
    note: "Short, fully voiced adventure with lively art.",
    hours: 7,
    vndb: "v26902",
    voiced: "Full",
    platforms: "Switch, Windows",
    rating: "All ages",
  },
  {
    ja: "CLANNAD",
    en: "CLANNAD",
    difficulty: 1.86,
    chars: 1_391_637,
    jiten: 186,
    note: "Very long, very well loved. Easy language, big commitment.",
    hours: 78,
    vndb: "v4",
    voiced: "Full (later editions)",
    platforms: "Switch, PS4, Windows and more",
    rating: "All ages",
  },
  {
    ja: "逆転裁判",
    en: "Phoenix Wright: Ace Attorney",
    difficulty: 1.96,
    chars: 440_077,
    jiten: 133,
    note: "Courtroom puzzles; you have to understand to progress, which is great practice.",
    hours: 22,
    vndb: "v711",
    voiced: "Partial",
    platforms: "Switch, PS4, Windows, mobile and more",
    rating: "All ages",
  },
  {
    ja: "ファミコン探偵倶楽部 消えた後継者",
    en: "Famicom Detective Club: The Missing Heir",
    difficulty: 2.07,
    chars: 99_525,
    jiten: 113936,
    note: "Nintendo's mystery adventure, remade for Switch.",
    hours: 10,
    vndb: "v3433",
    voiced: "Full (Switch remake)",
    platforms: "Switch (remake), older Nintendo consoles",
    rating: "15+",
  },
  {
    ja: "Summer Pockets",
    en: "Summer Pockets",
    difficulty: 2.32,
    chars: 732_095,
    jiten: 78,
    note: "Island summer, Key again. Long.",
    hours: 54,
    vndb: "v20424",
    voiced: "Full",
    platforms: "Switch, PS4, Windows",
    rating: "All ages",
  },
  {
    ja: "蒼の彼方のフォーリズム",
    en: "Aokana: Four Rhythms Across the Blue",
    difficulty: 2.62,
    chars: 875_659,
    jiten: 159,
    note: "Sports and romance. The all-ages editions are rated 15+; the original PC release is 18+.",
    hours: 44,
    vndb: "v12849",
    voiced: "Full",
    platforms: "Switch, PS4, Windows, mobile",
    rating: "15+",
  },
  {
    ja: "STEINS;GATE",
    en: "Steins;Gate",
    difficulty: 2.94,
    chars: 695_712,
    jiten: 283,
    note: "Science and internet slang. A classic goal once easier titles feel comfortable.",
    hours: 44,
    vndb: "v2002",
    voiced: "Full",
    platforms: "Switch, PS4, Windows, mobile and more",
    rating: "12+",
  },
];

export const GUIDE_GAMES: GuideMedia[] = [
  { ja: "あつまれ どうぶつの森", en: "Animal Crossing: New Horizons", difficulty: 0.73, chars: 1_540_937, jiten: 323, note: "Endless everyday conversation with villagers, at your own pace." },
  { ja: "ゼルダの伝説 時のオカリナ", en: "Zelda: Ocarina of Time", difficulty: 2.22, chars: 66_804, jiten: 114675, note: "Not much text, and the world explains itself." },
  { ja: "ポケットモンスター ソード", en: "Pokémon Sword", difficulty: 2.06, chars: 214_287, jiten: 114019, note: "Newer Pokémon games can switch between kana-only and kanji text." },
  { ja: "ポケットモンスター 赤", en: "Pokémon Red", difficulty: 2.32, chars: 64_141, jiten: 114018, note: "Written almost entirely in kana: simple words, but harder to parse without kanji." },
  { ja: "ドラゴンクエストV 天空の花嫁", en: "Dragon Quest V", difficulty: 2.58, chars: 125_800, jiten: 321, note: "Classic RPG; old-fashioned fantasy speech." },
];

export const GUIDE_BOOKS: GuideMedia[] = [
  { ja: "魔女の宅急便（1〜6）", en: "Kiki's Delivery Service (novels)", difficulty: 1.14, chars: 595_960, jiten: 129969, note: "Eiko Kadono's children's novels behind the film. Warm and simple." },
  { ja: "世界から猫が消えたなら", en: "If Cats Disappeared from the World", difficulty: 1.68, chars: 72_403, jiten: 105479, note: "Short, plain language, popular first novel." },
  { ja: "コンビニ人間", en: "Convenience Store Woman", difficulty: 2.19, chars: 63_545, jiten: 105475, note: "Short literary novel in very clear prose." },
  { ja: "君の膵臓をたべたい", en: "I Want to Eat Your Pancreas", difficulty: 2.6, chars: 126_015, jiten: 113176, note: "Mostly dialogue between two students." },
  { ja: "星の王子さま", en: "The Little Prince (Japanese)", difficulty: 2.75, chars: 40_594, jiten: 136539, note: "A story you may know already, which helps." },
  { ja: "キッチン", en: "Kitchen", difficulty: 3.05, chars: 73_929, jiten: 131743, note: "Banana Yoshimoto's short novel; more reflective." },
  { ja: "キノの旅", en: "Kino's Journey", difficulty: 3.09, chars: 1_831_060, jiten: 55039, note: "Light novel of short, self-contained stories. Read one at a time." },
  { ja: "ハリー・ポッターと賢者の石", en: "Harry Potter (book 1)", difficulty: 3.14, chars: 193_061, jiten: 114550, note: "Translated fantasy; lots of invented terms. Harder than people expect." },
  { ja: "ノルウェイの森", en: "Norwegian Wood", difficulty: 3.19, chars: 272_592, jiten: 105368, note: "Murakami's most straightforward novel." },
  { ja: "涼宮ハルヒの憂鬱", en: "The Melancholy of Haruhi Suzumiya", difficulty: 3.41, chars: 112_407, jiten: 54707, note: "Witty, wordy narration. A good intermediate target." },
];

export function jitenUrl(deckId: number): string {
  return `https://jiten.moe/decks/media/${deckId}/detail`;
}

/**
 * Recommendations for the intermediate, upper-intermediate and advanced chapters. Same
 * sources and date as above (Jiten difficulty; VNDB length and youngest Japanese rating),
 * grouped by the level where each title is a comfortable stretch rather than by genre.
 */
export interface LevelMedia {
  anime: GuideMedia[];
  dramas: GuideMedia[];
  manga: GuideMedia[];
  books: GuideMedia[];
  visualNovels: GuideVisualNovel[];
  games: GuideMedia[];
}

export const INTERMEDIATE_MEDIA: LevelMedia = {
  anime: [
    { ja: "響け！ユーフォニアム", en: "Sound! Euphonium", difficulty: 2.02, chars: 59_396, jiten: 27787, note: "School band drama; natural dialogue between classmates." },
    { ja: "【推しの子】", en: "Oshi no Ko", difficulty: 2.38, chars: 76_125, jiten: 19790, note: "Showbiz vocabulary, but mostly everyday speech." },
    { ja: "モブサイコ100", en: "Mob Psycho 100", difficulty: 2.56, chars: 54_574, jiten: 19711, note: "Action with a lot of ordinary school and office talk." },
    { ja: "鬼滅の刃", en: "Demon Slayer", difficulty: 2.59, chars: 86_722, jiten: 38122, note: "Some old-fashioned and sword-art terms; clear delivery." },
    { ja: "氷菓", en: "Hyouka", difficulty: 2.62, chars: 112_972, jiten: 13874, note: "School mysteries told through long conversations." },
    { ja: "四月は君の嘘", en: "Your Lie in April", difficulty: 2.7, chars: 73_177, jiten: 13708, note: "Music and inner monologue; emotional, not technical." },
    { ja: "ヴァイオレット・エヴァーガーデン", en: "Violet Evergarden", difficulty: 2.72, chars: 46_562, jiten: 6034, note: "Formal speech and letters; good polite-Japanese practice." },
    { ja: "ダンジョン飯", en: "Delicious in Dungeon", difficulty: 2.79, chars: 123_852, jiten: 35709, note: "Fantasy and cooking vocabulary, lots of explanation." },
    { ja: "魔法少女まどか☆マギカ", en: "Puella Magi Madoka Magica", difficulty: 2.79, chars: 46_897, jiten: 32245, note: "Short, tightly written; a few abstract conversations." },
    { ja: "呪術廻戦", en: "Jujutsu Kaisen", difficulty: 2.97, chars: 95_986, jiten: 13769, note: "Battle jargon and fast casual speech." },
  ],
  dramas: [
    { ja: "ブラッシュアップライフ", en: "Brush Up Life", difficulty: 1.62, chars: 108_805, jiten: 58999, note: "Everyday life and friendship. The easiest drama here, and very natural speech." },
    { ja: "深夜食堂", en: "Midnight Diner", difficulty: 2.03, chars: 89_514, jiten: 62462, note: "Short, self-contained episodes set in a late-night diner." },
    { ja: "逃げるは恥だが役に立つ", en: "We Married as a Job", difficulty: 2.16, chars: 113_666, jiten: 78852, note: "Romantic comedy with office and home life." },
    { ja: "カルテット", en: "Quartet", difficulty: 2.16, chars: 67_517, jiten: 76777, note: "Four adults talking, a lot, in natural modern Japanese." },
    { ja: "silent", en: "Silent", difficulty: 2.16, chars: 49_187, jiten: 66779, note: "Quiet romance; some scenes in Japanese Sign Language." },
    { ja: "テラスハウス Tokyo 2019-2020", en: "Terrace House: Tokyo 2019–2020", difficulty: 2.35, chars: 217_608, jiten: 116359, note: "Reality TV: largely unscripted casual conversation, as people actually talk." },
    { ja: "孤独のグルメ", en: "Solitary Gourmet", difficulty: 2.65, chars: 351_326, jiten: 71467, note: "A man eats alone and narrates his thoughts. Food vocabulary galore." },
  ],
  manga: [
    { ja: "違国日記", en: "Journal with Witch", difficulty: 2.06, chars: 138_974, jiten: 96487, note: "Quiet everyday drama between an author and her niece." },
    { ja: "ダンジョン飯", en: "Delicious in Dungeon", difficulty: 2.21, chars: 246_903, jiten: 99403, note: "Easier as a manga than as an anime, with pictures for every ingredient." },
    { ja: "よふかしのうた", en: "Call of the Night", difficulty: 2.45, chars: 301_123, jiten: 119106, note: "Casual teenage speech and night-time Tokyo." },
    { ja: "チェンソーマン", en: "Chainsaw Man", difficulty: 2.64, chars: 200_005, jiten: 97316, note: "Rough, casual speech; action carries a lot." },
    { ja: "寄生獣", en: "Parasyte", difficulty: 2.65, chars: 141_290, jiten: 100122, note: "A classic; some science talk." },
    { ja: "3月のライオン", en: "March Comes in Like a Lion", difficulty: 2.69, chars: 505_286, jiten: 102793, note: "Shogi and family life; long." },
    { ja: "銀の匙", en: "Silver Spoon", difficulty: 2.81, chars: 406_713, jiten: 105142, note: "Farming school; lots of agricultural vocabulary, explained in the story." },
  ],
  books: [
    { ja: "かがみの孤城", en: "Lonely Castle in the Mirror", difficulty: 1.78, chars: 247_817, jiten: 114855, note: "Long but easy: teenagers, plain modern prose." },
    { ja: "変な家", en: "Strange Houses", difficulty: 1.84, chars: 62_322, jiten: 129194, note: "A mystery told through floor plans and conversation. A quick read." },
    { ja: "火花", en: "Spark", difficulty: 2.45, chars: 80_198, jiten: 62581, note: "Short prize-winning novel about two comedians." },
    { ja: "告白", en: "Confessions", difficulty: 2.77, chars: 127_046, jiten: 95468, note: "Minato Kanae's thriller, told in monologues." },
    { ja: "容疑者Xの献身", en: "The Devotion of Suspect X", difficulty: 2.93, chars: 169_662, jiten: 114848, note: "Higashino Keigo's mystery; clear, plot-driven prose." },
    { ja: "正欲", en: "Seiyoku", difficulty: 2.94, chars: 205_738, jiten: 130033, note: "Asai Ryō's novel about hidden desires; modern and direct." },
    { ja: "海辺のカフカ", en: "Kafka on the Shore", difficulty: 2.97, chars: 441_368, jiten: 107619, note: "Scores easier than Norwegian Wood on Jiten, despite its length." },
    { ja: "ようこそ実力至上主義の教室へ", en: "Classroom of the Elite (light novel)", difficulty: 2.63, chars: 1_797_953, jiten: 54767, note: "Light novel series; school scheming, lots of dialogue." },
    { ja: "狼と香辛料", en: "Spice and Wolf (light novel)", difficulty: 2.85, chars: 2_618_286, jiten: 55005, note: "Medieval trade and economics, at a gentle pace." },
  ],
  visualNovels: [
    {
      ja: "リトルバスターズ！",
      en: "Little Busters!",
      difficulty: 2.42,
      chars: 1_344_622,
      jiten: 113385,
      note: "Key's school comedy-drama. Very long, very casual.",
      hours: 83,
      vndb: "v5",
      voiced: "Full (later editions)",
      platforms: "Switch, PS3, PS Vita, Windows",
      rating: "All ages",
    },
    {
      ja: "428 〜封鎖された渋谷で〜",
      en: "428: Shibuya Scramble",
      difficulty: 2.75,
      chars: 600_994,
      jiten: 127014,
      note: "Live-action photo thriller with several intertwined characters.",
      hours: 33.5,
      vndb: "v1299",
      voiced: "Partial",
      platforms: "PS4, Windows, mobile and more",
      rating: "All ages",
    },
    {
      ja: "かまいたちの夜",
      en: "Banshee's Last Cry",
      difficulty: 2.79,
      chars: 330_972,
      jiten: 134146,
      note: "Classic snowbound murder mystery; the score is for the recent remake.",
      hours: 15,
      vndb: "v1241",
      voiced: "Varies by edition",
      platforms: "Switch, PS4, Windows, mobile and more",
      rating: "12+",
    },
    {
      ja: "Ever17 -the out of infinity-",
      en: "Ever17",
      difficulty: 2.91,
      chars: 626_352,
      jiten: 118931,
      note: "Sci-fi mystery set in an underwater theme park.",
      hours: 33,
      vndb: "v17",
      voiced: "Full (console and later editions)",
      platforms: "Windows, PS2, PSP, mobile and more",
      rating: "12+",
    },
  ],
  games: [
    { ja: "龍が如く0 誓いの場所", en: "Yakuza 0", difficulty: 2.23, chars: 654_692, jiten: 129207, note: "Gangster drama and side stories; lots of rough casual speech." },
    { ja: "ゼノブレイド ディフィニティブ・エディション", en: "Xenoblade Chronicles: Definitive Edition", difficulty: 2.72, chars: 981_251, jiten: 114914, note: "Huge RPG; fantasy terms, clearly voiced cutscenes." },
  ],
};

export const UPPER_INTERMEDIATE_MEDIA: LevelMedia = {
  anime: [
    { ja: "僕のヒーローアカデミア", en: "My Hero Academia", difficulty: 3.06, chars: 50_680, jiten: 30082, note: "Hero jargon and shouting, but the story is easy to follow." },
    { ja: "進撃の巨人", en: "Attack on Titan", difficulty: 3.21, chars: 96_454, jiten: 412, note: "Military and political vocabulary." },
    { ja: "銀魂", en: "Gintama", difficulty: 3.32, chars: 1_097_329, jiten: 21013, note: "Rapid comedy, parody and wordplay. A real test of listening." },
    { ja: "ゴールデンカムイ", en: "Golden Kamuy", difficulty: 3.62, chars: 46_340, jiten: 39296, note: "Historical Hokkaido, Ainu words and military speech." },
    { ja: "新世紀エヴァンゲリオン", en: "Neon Genesis Evangelion", difficulty: 3.68, chars: 115_407, jiten: 34427, note: "Technical jargon and psychological monologue." },
  ],
  dramas: [
    { ja: "ドクターX 〜外科医・大門未知子〜", en: "Doctor-X", difficulty: 2.97, chars: 617_277, jiten: 75775, note: "Hospital drama; medical terms, formal and blunt speech side by side." },
    { ja: "アンナチュラル", en: "Unnatural", difficulty: 2.97, chars: 105_857, jiten: 87890, note: "Forensic mysteries; specialist vocabulary, excellent writing." },
    { ja: "MIU404", en: "MIU404", difficulty: 2.98, chars: 107_143, jiten: 86701, note: "Police procedural with fast, natural banter." },
    { ja: "半沢直樹", en: "Hanzawa Naoki", difficulty: 3.27, chars: 253_775, jiten: 64085, note: "Banking drama: business Japanese and keigo at full volume." },
    { ja: "リーガル・ハイ", en: "Legal High", difficulty: 3.59, chars: 246_555, jiten: 88422, note: "Courtroom comedy with very fast legal monologues." },
  ],
  manga: [
    { ja: "進撃の巨人", en: "Attack on Titan", difficulty: 3.01, chars: 414_864, jiten: 101900, note: "Long and dense, but pictures carry the action." },
    { ja: "DEATH NOTE", en: "Death Note", difficulty: 3.26, chars: 569_454, jiten: 102273, note: "Page after page of reasoning; text-heavy for a manga." },
    { ja: "ゴールデンカムイ", en: "Golden Kamuy", difficulty: 3.33, chars: 450_292, jiten: 100522, note: "History, hunting, cooking and Ainu culture." },
    { ja: "鬼滅の刃", en: "Demon Slayer", difficulty: 3.49, chars: 303_580, jiten: 104809, note: "Harder than the anime: old-fashioned narration and kanji-heavy terms." },
  ],
  books: [
    { ja: "博士の愛した数式", en: "The Housekeeper and the Professor", difficulty: 3.17, chars: 112_584, jiten: 127718, note: "Short, gentle novel with a little mathematics." },
    { ja: "1Q84", en: "1Q84", difficulty: 3.28, chars: 963_296, jiten: 125141, note: "Murakami at length; readable sentences, huge book." },
    { ja: "舟を編む", en: "The Great Passage", difficulty: 3.3, chars: 132_413, jiten: 125510, note: "About making a dictionary; a love letter to words." },
    { ja: "新世界より", en: "From the New World", difficulty: 3.38, chars: 550_212, jiten: 107300, note: "Kishi Yūsuke's sci-fi; invented terms and a big world." },
    { ja: "薬屋のひとりごと", en: "The Apothecary Diaries (light novel)", difficulty: 3.42, chars: 1_878_436, jiten: 55132, note: "Court intrigue and medicine; lots of historical vocabulary." },
    { ja: "十角館の殺人", en: "The Decagon House Murders", difficulty: 3.61, chars: 149_573, jiten: 107426, note: "Classic mystery; formal narration and puzzle detail." },
    { ja: "三体", en: "The Three-Body Problem (Japanese edition)", difficulty: 3.7, chars: 1_297_687, jiten: 128938, note: "Translated hard science fiction. Physics and history vocabulary." },
  ],
  visualNovels: [
    {
      ja: "マブラヴ",
      en: "Muv-Luv",
      difficulty: 3.25,
      chars: 783_374,
      jiten: 95422,
      note: "School comedy that turns into something else. Get the all-ages version.",
      hours: 46,
      vndb: "v93",
      voiced: "Full",
      platforms: "Windows, mobile",
      rating: "All ages",
    },
    {
      ja: "うみねこのなく頃に",
      en: "Umineko: When They Cry",
      difficulty: 3.29,
      chars: 1_188_581,
      jiten: 105993,
      note: "Locked-room mystery on an island; enormous and wordy.",
      hours: 76,
      vndb: "v24",
      voiced: "Full (later editions)",
      platforms: "Windows, macOS, Linux, iOS",
      rating: "All ages",
    },
    {
      ja: "ひぐらしのなく頃に",
      en: "Higurashi: When They Cry",
      difficulty: 3.44,
      chars: 908_832,
      jiten: 106006,
      note: "Easy conversation, novel-like narration; a village with a dark secret.",
      hours: 50,
      vndb: "v67",
      voiced: "Varies by edition",
      platforms: "Windows, macOS, Linux, mobile",
      rating: "All ages",
    },
    {
      ja: "Fate/stay night",
      en: "Fate/stay night",
      difficulty: 3.75,
      chars: 1_587_146,
      jiten: 233,
      note: "Very long, dense with lore and battle narration. Réalta Nua is the all-ages edition.",
      hours: 89,
      vndb: "v11",
      voiced: "Full (Réalta Nua)",
      platforms: "Windows, PS Vita, mobile",
      rating: "12+",
    },
  ],
  games: [
    { ja: "ニーア オートマタ", en: "NieR:Automata", difficulty: 3.05, chars: 257_117, jiten: 327, note: "Philosophical themes and sci-fi terms." },
    { ja: "ゼノブレイド 3", en: "Xenoblade Chronicles 3", difficulty: 3.2, chars: 873_372, jiten: 140593, note: "Long, lore-heavy RPG, fully voiced." },
  ],
};

export const ADVANCED_MEDIA: Pick<LevelMedia, "anime" | "books"> = {
  anime: [
    { ja: "攻殻機動隊 S.A.C. 2nd GIG", en: "Ghost in the Shell: S.A.C. 2nd GIG", difficulty: 3.75, chars: 109_719, jiten: 35829, note: "Politics, cyber-crime and military jargon." },
    { ja: "薬屋のひとりごと", en: "The Apothecary Diaries", difficulty: 3.84, chars: 93_913, jiten: 50274, note: "Popular, but historical court language and medicine make it one of the harder shows." },
    { ja: "コードギアス 反逆のルルーシュ", en: "Code Geass", difficulty: 3.91, chars: 130_641, jiten: 17119, note: "Grand speeches, strategy and politics." },
    { ja: "化物語", en: "Bakemonogatari", difficulty: 4.09, chars: 88_826, jiten: 38564, note: "Wordplay and rapid-fire dialogue that native viewers pause to read." },
    { ja: "PSYCHO-PASS サイコパス", en: "Psycho-Pass", difficulty: 4.47, chars: 90_314, jiten: 52739, note: "Philosophy quotes and abstract debate. The hardest anime we measured." },
  ],
  books: [
    { ja: "仮面の告白", en: "Confessions of a Mask (Mishima)", difficulty: 4.02, chars: 132_907, jiten: 123924, note: "Dense, ornate post-war literary prose." },
    { ja: "こころ", en: "Kokoro (Sōseki)", difficulty: 4.03, chars: 154_412, jiten: 124797, note: "Sōseki's 1914 classic; older vocabulary and spellings. Free on Aozora Bunko." },
    { ja: "Re:ゼロから始める異世界生活", en: "Re:Zero (light novel)", difficulty: 4.28, chars: 5_956_122, jiten: 54904, note: "Popular light novel with unusually dense, flowery narration." },
    { ja: "人間失格", en: "No Longer Human (Dazai)", difficulty: 4.37, chars: 70_987, jiten: 54631, note: "Short but hard: 1940s prose and introspection. Free on Aozora Bunko." },
  ],
};
