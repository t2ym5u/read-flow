<script lang="ts">
	import { appStore } from '$lib/appStore';
	import type { AppState } from '$lib/types';

	export let state: AppState;

	function speakWord(word: string) {
		appStore.speakWord(word);
	}
</script>

<div class="content-section active" id="vocabulary">
	<div class="progress-card">
		<h3>📚 Ton dictionnaire personnel</h3>
		<div class="vocab-list">
			{#if state.vocabulary.length === 0}
				<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">
					Commence à lire pour construire ton vocabulaire !
				</p>
			{:else}
				{#each state.vocabulary as item}
					<div class="vocab-item">
						<div>
							<div class="vocab-word">{item.word}</div>
							<div class="vocab-translation">{item.translation}</div>
						</div>
						<button class="control-btn" onclick={() => speakWord(item.word)}>🔊</button>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
