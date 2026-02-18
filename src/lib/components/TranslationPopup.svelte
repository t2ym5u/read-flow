<script lang="ts">
export let translationData: {
	original: string;
	translation: string;
	isSentence: boolean;
};
export let closeTranslation: () => void;
export let playAudio: () => void;

let isPlaying = false;

function handlePlay() {
	isPlaying = true;
	playAudio();
	setTimeout(() => (isPlaying = false), 2000);
}
</script>

<div class="translation-popup visible">
	<div class="translation-header">
		<h3>Traduction</h3>
		<button class="translation-close" onclick={closeTranslation}>✕</button>
	</div>
	<div class="translation-original">{translationData.original}</div>
	<div class="translation-text">{translationData.translation}</div>
	<div class="translation-audio">
		<button class="audio-btn" onclick={handlePlay} disabled={isPlaying}>
			🇬🇧 Écouter
		</button>
	</div>
</div>
