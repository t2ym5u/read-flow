<script lang="ts">
	import type { AppState } from '$lib/types';

	export let state: AppState;
</script>

<div class="content-section active" id="progress">
	<div class="progress-card">
		<h3>📈 Tes statistiques</h3>
		<div class="progress-stat">
			<span>Jours consécutifs</span>
			<span class="progress-stat-value">{state.progress.streak || 0}</span>
		</div>
		<div class="progress-stat">
			<span>Histoires lues</span>
			<span class="progress-stat-value">{state.progress.storiesRead || 0}</span>
		</div>
		<div class="progress-stat">
			<span>Mots appris</span>
			<span class="progress-stat-value">{state.progress.wordsLearned || 0}</span>
		</div>
		<div class="progress-stat">
			<span>Temps de lecture</span>
			<span class="progress-stat-value">{Math.floor(state.progress.readingTime || 0)}min</span>
		</div>
	</div>

	<div class="progress-card">
		<h3>🎯 Objectifs quotidiens</h3>
		<div class="progress-stat">
			<span>Lire 15 minutes</span>
			<span class="progress-stat-value">✓</span>
		</div>
		<div class="progress-stat">
			<span>Apprendre 5 mots</span>
			<span class="progress-stat-value">{Math.min(state.progress.wordsLearned || 0, 5)}/5</span>
		</div>
		<div class="progress-stat">
			<span>Finir 1 histoire</span>
			<span class="progress-stat-value">{(state.progress.storiesRead || 0) > 0 ? '✓' : '○'}</span>
		</div>
	</div>
</div>
