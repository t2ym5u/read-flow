import { writable } from "svelte/store";
import type { AppState, Progress, Story, VocabItem } from "./types";
import { getBestEnglishVoice } from "./tts";

const initialProgress: Progress = {
	streak: 0,
	points: 0,
	storiesRead: 0,
	wordsLearned: 0,
	readingTime: 0,
	lastActiveDate: null,
	readStoryIds: [],
};

const initialState: AppState = {
	currentStory: null,
	currentSentenceIndex: 0,
	isSimplified: false,
	isAudioPlaying: false,
	fontSize: 1.3,
	vocabulary: [],
	progress: initialProgress,
	startReadingTimer: null,
};

function getToday(): string {
	return new Date().toISOString().slice(0, 10);
}

function isYesterday(dateStr: string): boolean {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	return dateStr === yesterday.toISOString().slice(0, 10);
}

function createAppStore() {
	const { subscribe, set, update } = writable<AppState>(initialState);

	function save(state: AppState) {
		if (typeof window !== "undefined") {
			localStorage.setItem("readflow-progress", JSON.stringify(state.progress));
			localStorage.setItem("readflow-vocabulary", JSON.stringify(state.vocabulary));
		}
	}

	return {
		subscribe,
		set,
		update,

		loadProgress: () => {
			if (typeof window !== "undefined") {
				const saved = localStorage.getItem("readflow-progress");
				if (saved) {
					const progress: Progress = JSON.parse(saved);
					if (!progress.readStoryIds) progress.readStoryIds = [];
					const today = getToday();
					// Reset streak if last active was before yesterday
					if (
						progress.lastActiveDate &&
						progress.lastActiveDate !== today &&
						!isYesterday(progress.lastActiveDate)
					) {
						progress.streak = 0;
					}
					update((state) => ({ ...state, progress }));
				}
				const savedVocab = localStorage.getItem("readflow-vocabulary");
				if (savedVocab) {
					update((state) => ({ ...state, vocabulary: JSON.parse(savedVocab) }));
				}
			}
		},

		saveProgress: () => {
			update((state) => {
				save(state);
				return state;
			});
		},

		updateStats: () => {
			update((state) => {
				state.progress.wordsLearned = state.vocabulary.length;
				return state;
			});
		},

		openStory: (story: Story) => {
			update((state) => ({
				...state,
				currentStory: story,
				currentSentenceIndex: 0,
				startReadingTimer: Date.now(),
			}));
		},

		goBack: () => {
			update((state) => ({
				...state,
				currentStory: null,
				currentSentenceIndex: 0,
				isAudioPlaying: false,
				startReadingTimer: null,
			}));
			if (typeof window !== "undefined") {
				speechSynthesis.cancel();
			}
		},

		toggleSimplify: () => {
			update((state) => ({ ...state, isSimplified: !state.isSimplified }));
		},

		toggleAudio: () => {
			update((state) => {
				const newState = { ...state, isAudioPlaying: !state.isAudioPlaying };
				if (newState.isAudioPlaying && newState.currentStory) {
					playStoryAudio(newState, update);
				} else if (typeof window !== "undefined") {
					speechSynthesis.cancel();
				}
				return newState;
			});
		},

		increaseFontSize: () => {
			update((state) => ({ ...state, fontSize: Math.min(state.fontSize + 0.1, 2) }));
		},

		decreaseFontSize: () => {
			update((state) => ({ ...state, fontSize: Math.max(state.fontSize - 0.1, 1) }));
		},

		translateSentence: (index: number) => {
			update((state) => {
				if (state.currentStory) {
					state.currentSentenceIndex = Math.max(state.currentSentenceIndex, index);
				}
				return state;
			});
		},

		addToVocabulary: (word: string, translation: string) => {
			update((state) => {
				if (!state.vocabulary.find((v) => v.word === word)) {
					const newVocab: VocabItem = {
						word,
						translation,
						date: new Date().toISOString(),
					};
					state.vocabulary = [newVocab, ...state.vocabulary];
					state.progress.points += 5;
					state.progress.wordsLearned = state.vocabulary.length;
					save(state);
				}
				return state;
			});
		},

		completeStory: () => {
			update((state) => {
				if (state.startReadingTimer && state.currentStory) {
					const minutes = Math.max(1, Math.floor((Date.now() - state.startReadingTimer) / 60000));
					state.progress.readingTime = (state.progress.readingTime || 0) + minutes;
				}
				state.progress.storiesRead = (state.progress.storiesRead || 0) + 1;

				if (state.currentStory) {
					const storyId = state.currentStory.id;
					if (!state.progress.readStoryIds.includes(storyId)) {
						state.progress.readStoryIds = [...state.progress.readStoryIds, storyId];
					}
				}

				// Streak: increment only once per new day
				const today = getToday();
				if (state.progress.lastActiveDate !== today) {
					if (
						!state.progress.lastActiveDate ||
						isYesterday(state.progress.lastActiveDate) ||
						state.progress.lastActiveDate === today
					) {
						state.progress.streak = (state.progress.streak || 0) + 1;
					} else {
						state.progress.streak = 1;
					}
					state.progress.lastActiveDate = today;
				}

				state.currentStory = null;
				state.currentSentenceIndex = 0;
				state.startReadingTimer = null;
				save(state);
				return state;
			});
		},

		answerQuiz: (selected: number, correct: number) => {
			update((state) => {
				if (selected === correct) {
					state.progress.points += 20;
				} else {
					state.progress.points += 5;
				}
				save(state);
				return state;
			});
		},

		speakWord: (word: string) => {
			if (typeof window !== "undefined") {
				const utterance = new SpeechSynthesisUtterance(word);
				utterance.lang = "en-GB";
				utterance.rate = 0.8;
				const voice = getBestEnglishVoice();
				if (voice) utterance.voice = voice;
				speechSynthesis.speak(utterance);
			}
		},
	};
}

function playStoryAudio(state: AppState, update: (fn: (s: AppState) => AppState) => void) {
	if (!state.isAudioPlaying || !state.currentStory) return;

	const sentence = state.currentStory.sentences[state.currentSentenceIndex];
	const text = state.isSimplified ? sentence.simple : sentence.en;
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "en-GB";
	utterance.rate = 0.85;
	const voice = getBestEnglishVoice();
	if (voice) utterance.voice = voice;

	utterance.onend = () => {
		if (state.currentSentenceIndex < state.currentStory!.sentences.length - 1) {
			setTimeout(() => {
				update((s: AppState) => {
					s.currentSentenceIndex++;
					playStoryAudio(s, update);
					return s;
				});
			}, 800);
		} else {
			update((s: AppState) => ({ ...s, isAudioPlaying: false }));
		}
	};

	if (typeof window !== "undefined") {
		speechSynthesis.speak(utterance);
	}
}

export const appStore = createAppStore();
