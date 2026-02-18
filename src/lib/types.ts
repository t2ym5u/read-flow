export interface Sentence {
	en: string;
	simple: string;
	fr: string;
	audio: boolean;
}

export interface Quiz {
	question: string;
	options: string[];
	correct: number;
}

export interface KeyVocabulary {
	word: string;
	translation: string;
	example: string;
	phonetic?: string;
}

export interface GrammarTip {
	title: string;
	explanation: string;
	examples: string[];
}

export interface StoryMeta {
	id: number;
	title: string;
	level: string;
	levelColor: string;
	emoji: string;
	gradient: string;
	desc: string;
	duration: string;
	words: number;
	category?: string;
	tags?: string[];
}

export interface Story extends StoryMeta {
	sentences: Sentence[];
	quiz: Quiz[];
	keyVocabulary?: KeyVocabulary[];
	grammarTips?: GrammarTip[];
	summary?: string;
}

export interface VocabItem {
	word: string;
	translation: string;
	date: string;
}

export interface Progress {
	streak: number;
	points: number;
	storiesRead: number;
	wordsLearned: number;
	readingTime: number;
	lastActiveDate: string | null;
	readStoryIds: number[];
}

export interface AppState {
	currentStory: Story | null;
	currentSentenceIndex: number;
	isSimplified: boolean;
	isAudioPlaying: boolean;
	fontSize: number;
	vocabulary: VocabItem[];
	progress: Progress;
	startReadingTimer: number | null;
}
