<script lang="ts">
import type { AppState } from "$lib/types";

export let state: AppState | null;
export let onopenabout: () => void;
</script>

<div class="header">
	<div class="logo">
		<div class="logo-icon">📚</div>
		<div class="logo-text">ReadFlow</div>
	</div>
	<div class="stats-bar">
		<div class="stat-item">
			<span class="stat-icon">🔥</span>
			<span class="stat-value">{state?.progress?.streak || 0}</span>
		</div>
		<div class="stat-item">
			<span class="stat-icon">⭐</span>
			<span class="stat-value">{state?.progress?.points || 0}</span>
		</div>
		<button class="stat-item info-btn" onclick={onopenabout} aria-label="À propos">
			<span class="stat-icon">ℹ️</span>
		</button>
	</div>
</div>
