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
