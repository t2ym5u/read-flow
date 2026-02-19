<script lang="ts">
import { onMount } from "svelte";
import { appStore } from "$lib/appStore";
import AboutModal from "$lib/components/AboutModal.svelte";
import Header from "$lib/components/Header.svelte";
import Library from "$lib/components/Library.svelte";
import Navigation from "$lib/components/Navigation.svelte";
import Progress from "$lib/components/Progress.svelte";
import Reader from "$lib/components/Reader.svelte";
import TranslationPopup from "$lib/components/TranslationPopup.svelte";
import Vocabulary from "$lib/components/Vocabulary.svelte";
import { loadStory, storyMetas, translations } from "$lib/stories";
import type { AppState } from "$lib/types";

let currentTab = "library";
let showTranslation = false;
let showAbout = false;
let translationData = { original: "", translation: "", isSentence: false };
let state: AppState | null = null;

// Subscribe to store
const unsubscribe = appStore.subscribe((value) => {
	state = value;
});

onMount(() => {
	appStore.loadProgress();
	appStore.updateStats();
	speechSynthesis.getVoices();
	speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
	return unsubscribe;
});

function switchTab(tab: string) {
	currentTab = tab;
	if (state.currentStory && tab !== "reader") {
		appStore.goBack();
	}
}

async function openStory(storyId: number) {
	const story = await loadStory(storyId);
	appStore.openStory(story);
	currentTab = "reader";
}

function translateWord(word: string) {
	const translation = translations[word] || "Traduction non disponible";
	translationData = { original: word, translation, isSentence: false };
	showTranslation = true;
	appStore.addToVocabulary(word, translation);
}

function translateSentence(index: number) {
	if (state.currentStory) {
		const sentence = state.currentStory.sentences[index];
		const text = state.isSimplified ? sentence.simple : sentence.en;
		translationData = { original: text, translation: sentence.fr, isSentence: true };
		showTranslation = true;
		appStore.translateSentence(index);
	}
}

function closeTranslation() {
	showTranslation = false;
}

function getBestVoice(lang: string): SpeechSynthesisVoice | null {
	const voices = speechSynthesis.getVoices();
	const matching = voices.filter((v) => v.lang.startsWith(lang));
	// Prefer premium/natural voices (macOS Enhanced, Chrome Online, etc.)
	const premium = matching.find((v) => /premium|enhanced|natural|neural|online/i.test(v.name));
	return premium || matching[0] || null;
}

function playAudio() {
	if (typeof window !== "undefined") {
		speechSynthesis.cancel();
		const utterance = new SpeechSynthesisUtterance(translationData.original);
		utterance.lang = "en-GB";
		const voice = getBestVoice("en-GB");
		if (voice) utterance.voice = voice;
		utterance.rate = 0.9;
		utterance.pitch = 1;
		speechSynthesis.speak(utterance);
	}
}

$: if (state.currentStory) {
	currentTab = "reader";
}
</script>

<div class="bg-decoration"></div>

<div class="app-container">
	<Header {state} onopenabout={() => (showAbout = true)} />

	<Navigation {currentTab} {switchTab} />

	<!-- Library Section -->
	{#if currentTab === 'library'}
		<Library stories={storyMetas} {openStory} readStoryIds={state?.progress?.readStoryIds ?? []} />
	{/if}

	<!-- Reader Section -->
	{#if currentTab === 'reader' && state.currentStory}
		<Reader
			story={state.currentStory}
			{state}
			{translateWord}
			{translateSentence}
			oncomplete={() => { currentTab = 'library'; }}
		/>
	{/if}

	<!-- Progress Section -->
	{#if currentTab === 'progress'}
		<Progress {state} />
	{/if}

	<!-- Vocabulary Section -->
	{#if currentTab === 'vocabulary'}
		<Vocabulary {state} />
	{/if}
</div>

<!-- Translation Popup -->
{#if showTranslation}
	<TranslationPopup {translationData} {closeTranslation} {playAudio} />
{/if}

<!-- About Modal -->
{#if showAbout}
	<AboutModal onclose={() => (showAbout = false)} />
{/if}
