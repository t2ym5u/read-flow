<script lang="ts">
	import type { StoryMeta } from '$lib/types';

	export let stories: StoryMeta[];
	export let openStory: (id: number) => void;
</script>

<div class="content-section active" id="library">
	<div class="stories-grid">
		{#each stories as story}
			<div
				class="story-card"
				role="button"
				tabindex="0"
				onclick={() => openStory(story.id)}
				onkeydown={(e) => {
					if (e.key === 'Enter') openStory(story.id);
				}}
			>
				<div class="story-image" style="background: {story.gradient}">
					<span>{story.emoji}</span>
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
</div>
