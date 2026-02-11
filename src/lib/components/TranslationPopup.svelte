<script lang="ts">
export let translationData: {
	original: string;
	translation: string;
	isSentence: boolean;
};
export let closeTranslation: () => void;
export let playAudio: (accent: "us" | "uk") => void;

let isPlaying = false;

function playAudioUS() {
	isPlaying = true;
	playAudio("us");
	setTimeout(() => (isPlaying = false), 2000);
}

function playAudioUK() {
	isPlaying = true;
	playAudio("uk");
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
		<button class="audio-btn" onclick={playAudioUS} disabled={isPlaying}>
			🇺🇸 Accent américain
		</button>
		<button class="audio-btn" onclick={playAudioUK} disabled={isPlaying}>
			🇬🇧 Accent britannique
		</button>
	</div>
</div>
