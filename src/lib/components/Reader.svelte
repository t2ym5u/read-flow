<script lang="ts">
import { onMount } from "svelte";
import { appStore } from "$lib/appStore";
import type { AppState, Story } from "$lib/types";

export let story: Story;
export let state: AppState;
export let translateWord: (word: string) => void;
export let translateSentence: (index: number) => void;

let showQuiz = false;
let showQuizButton = false;
let quizAnswered = false;
let selectedAnswer = -1;
let progress = 0;
let readerTextEl: HTMLElement;
let endSentinel: HTMLElement;

$: currentQuiz = story.quiz[0];

onMount(() => {
	const updateProgress = () => {
		if (!readerTextEl) return;
		const rect = readerTextEl.getBoundingClientRect();
		const totalHeight = rect.height;
		if (totalHeight === 0) return;
		const scrolled = window.innerHeight - rect.top;
		progress = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
	};

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting && !showQuizButton && !showQuiz) {
				showQuizButton = true;
			}
		},
		{ threshold: 0.5 },
	);

	if (endSentinel) observer.observe(endSentinel);

	window.addEventListener("scroll", updateProgress, { passive: true });
	updateProgress();

	// Desktop: if text fits on screen, sentinel is already visible
	requestAnimationFrame(() => {
		updateProgress();
		if (endSentinel) {
			const rect = endSentinel.getBoundingClientRect();
			if (rect.top < window.innerHeight) {
				showQuizButton = true;
			}
		}
	});

	return () => {
		observer.disconnect();
		window.removeEventListener("scroll", updateProgress);
	};
});

function startQuiz() {
	showQuizButton = false;
	showQuiz = true;
}

function goBack() {
	appStore.goBack();
}

function toggleSimplify() {
	appStore.toggleSimplify();
}

function toggleAudio() {
	appStore.toggleAudio();
}

function increaseFontSize() {
	appStore.increaseFontSize();
}

function decreaseFontSize() {
	appStore.decreaseFontSize();
}

function checkAnswer(selected: number, correct: number) {
	selectedAnswer = selected;
	quizAnswered = true;
	appStore.answerQuiz(selected, correct);

	setTimeout(() => {
		if (selected === correct) {
			alert("✅ Bravo ! Histoire terminée !");
			appStore.completeStory();
		} else {
			alert("❌ Pas tout à fait... mais tu as gagné 5 points !");
			appStore.completeStory();
		}
	}, 1000);
}
</script>

<div class="content-section active" id="reader">
	<div class="reader-view">
		<div class="reader-header">
			<button class="back-button" onclick={goBack}>
				<span>←</span>
				<span>Retour</span>
			</button>
			<div class="reader-controls">
				<button
					class="control-btn {state.isSimplified ? 'active' : ''}"
					onclick={toggleSimplify}
					title="Mode simplifié"
				>
					💡
				</button>
				<button
					class="control-btn {state.isAudioPlaying ? 'active' : ''}"
					onclick={toggleAudio}
					title="Audio"
				>
					🔊
				</button>
				<button onclick={increaseFontSize} title="Augmenter taille">A+</button>
				<button onclick={decreaseFontSize} title="Réduire taille">A-</button>
			</div>
		</div>

		<h1 class="reader-title">{story.title}</h1>

		<div class="reader-progress">
			<div class="reader-progress-bar" style="width: {progress}%"></div>
		</div>

		<div
			class="reader-text {state.isSimplified ? 'simplified' : ''}"
			style="font-size: {state.fontSize}rem;"
			bind:this={readerTextEl}
		>
			{#each story.sentences as sentence, index}
				<span
					class="sentence"
					role="button"
					tabindex="0"
					onclick={() => translateSentence(index)}
					onkeydown={(e) => {
						if (e.key === 'Enter') translateSentence(index);
					}}
				>
					{#each (state.isSimplified ? sentence.simple : sentence.en).split(' ') as word}
						<span
							class="word"
							role="button"
							tabindex="0"
							onclick={(e) => {
								e.stopPropagation();
								translateWord(word.replace(/[.,!?;]/g, '').toLowerCase());
							}}
							onkeydown={(e) => {
								if (e.key === 'Enter') {
									e.stopPropagation();
									translateWord(word.replace(/[.,!?;]/g, '').toLowerCase());
								}
							}}
						>
							{word}
						</span>{' '}
					{/each}
				</span>{' '}
			{/each}
			<div bind:this={endSentinel} style="height: 1px;"></div>
		</div>

		{#if showQuizButton && !showQuiz}
			<button class="quiz-start-btn" onclick={startQuiz}>
				📝 Passer au quiz
			</button>
		{/if}

		{#if showQuiz}
			<div class="quiz-container">
				<h3 class="quiz-question">📝 {currentQuiz.question}</h3>
				<div class="quiz-options">
					{#each currentQuiz.options as option, idx}
						<div
							class="quiz-option {quizAnswered
								? idx === currentQuiz.correct
									? 'correct'
									: idx === selectedAnswer
										? 'wrong'
										: ''
								: ''}"
							role="button"
							tabindex="0"
							onclick={() => !quizAnswered && checkAnswer(idx, currentQuiz.correct)}
							onkeydown={(e) => {
								if (e.key === 'Enter' && !quizAnswered) checkAnswer(idx, currentQuiz.correct);
							}}
						>
							{option}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.quiz-start-btn {
		display: block;
		margin: 2rem auto;
		padding: 1rem 2.5rem;
		border: none;
		border-radius: 2rem;
		background: linear-gradient(135deg, #ff6b6b, #ee5a24);
		color: white;
		font-size: 1.1rem;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.2s;
		box-shadow: 0 8px 24px rgba(255, 107, 107, 0.3);
	}

	.quiz-start-btn:hover {
		transform: scale(1.05);
	}
</style>
