<script lang="ts">
import { onMount } from "svelte";
import type { StoryMeta } from "$lib/types";

export let stories: StoryMeta[];
export let openStory: (id: number) => void;
export let readStoryIds: number[] = [];

const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
let filterLevel = "Tous";
let filterUnread = false;

$: filtered = stories
	.filter((s) => filterLevel === "Tous" || s.level === filterLevel)
	.filter((s) => !filterUnread || !readStoryIds.includes(s.id));

onMount(() => {
	const firstUnread = stories.find((s) => !readStoryIds.includes(s.id));
	if (firstUnread) {
		setTimeout(() => {
			document
				.getElementById(`story-${firstUnread.id}`)
				?.scrollIntoView({ behavior: "smooth", block: "center" });
		}, 100);
	}
});
</script>

<div class="content-section active" id="library">
	<div class="library-filters">
		{#each levels as level}
			<button
				class="filter-btn {filterLevel === level ? 'active' : ''}"
				onclick={() => (filterLevel = level)}
			>
				{level}
			</button>
		{/each}
		<button
			class="filter-btn filter-unread {filterUnread ? 'active' : ''}"
			onclick={() => (filterUnread = !filterUnread)}
		>
			{filterUnread ? "✓ Non lus" : "Non lus"}
		</button>
	</div>

	{#if filtered.length === 0}
		<div class="library-empty">
			<span>🎉</span>
			<p>Toutes les histoires de ce niveau ont été lues !</p>
		</div>
	{:else}
		<div class="stories-grid">
			{#each filtered as story (story.id)}
				{@const isRead = readStoryIds.includes(story.id)}
				<div
					id="story-{story.id}"
					class="story-card {isRead ? 'story-card--read' : ''}"
					role="button"
					tabindex="0"
					onclick={() => openStory(story.id)}
					onkeydown={(e) => {
						if (e.key === "Enter") openStory(story.id);
					}}
				>
					<div class="story-image" style="background: {story.gradient}">
						<span>{story.emoji}</span>
						{#if isRead}
							<span class="story-read-badge">✓ Lu</span>
						{/if}
					</div>
					<div class="story-content">
						<span class="story-level" style="background: {story.levelColor}">{story.level}</span>
						<h3 class="story-title">{story.title}</h3>
						<p class="story-desc">{story.desc}</p>
						<div class="story-meta">
							<span>⏱️ {story.duration}</span>
							<span>📝 {story.words} mots</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
