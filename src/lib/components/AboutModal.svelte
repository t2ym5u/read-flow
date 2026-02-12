<script lang="ts">
	import changelogRaw from "../../../CHANGELOG.md?raw";

	export let onclose: () => void;

	const version = __APP_VERSION__;

	// Parse changelog markdown into simple HTML
	function parseChangelog(md: string): string {
		return md
			.split("\n")
			.filter((line) => {
				// Skip the main title and description lines
				if (line.startsWith("# ")) return false;
				if (line.startsWith("Tous les changements")) return false;
				if (line.startsWith("Le format est basé")) return false;
				if (line.startsWith("et ce projet")) return false;
				if (line.trim() === "") return false;
				return true;
			})
			.map((line) => {
				if (line.startsWith("## "))
					return `<h3 class="changelog-version">${line.replace("## ", "")}</h3>`;
				if (line.startsWith("### "))
					return `<h4 class="changelog-section">${line.replace("### ", "")}</h4>`;
				if (line.startsWith("- "))
					return `<li>${line.replace("- ", "")}</li>`;
				return `<p>${line}</p>`;
			})
			.join("\n");
	}

	const changelogHtml = parseChangelog(changelogRaw);
</script>

<div
	class="about-overlay"
	role="button"
	tabindex="-1"
	onclick={onclose}
	onkeydown={(e) => e.key === "Escape" && onclose()}
>
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_interactive_supports_focus -->
	<div
		class="about-modal"
		role="dialog"
		aria-label="À propos"
		onclick={(e) => e.stopPropagation()}
	>
		<div class="about-header">
			<h2>À propos</h2>
			<button class="about-close" onclick={onclose} aria-label="Fermer">✕</button>
		</div>

		<!-- Version -->
		<div class="about-section">
			<div class="version-badge">
				<span class="version-icon">📚</span>
				<div>
					<div class="version-name">ReadFlow</div>
					<div class="version-number">v{version}</div>
				</div>
			</div>
		</div>

		<!-- Changelog -->
		<div class="about-section">
			<h3 class="about-section-title">Changelog</h3>
			<div class="changelog-content">
				{@html changelogHtml}
			</div>
		</div>

		<!-- Crédits -->
		<div class="about-section">
			<h3 class="about-section-title">Crédits</h3>
			<div class="credits-content">
				<div class="credit-item">
					<span class="credit-label">Développé par</span>
					<a href="https://github.com/t2ym5u" target="_blank" rel="noopener noreferrer" class="credit-link">
						t2ym5u
					</a>
				</div>
				<div class="credit-item">
					<span class="credit-label">Technologies</span>
					<div class="credit-tags">
						<span class="credit-tag">SvelteKit</span>
						<span class="credit-tag">Tailwind CSS</span>
						<span class="credit-tag">TypeScript</span>
						<span class="credit-tag">Vite</span>
					</div>
				</div>
				<div class="credit-item">
					<span class="credit-label">Dépendances</span>
					<div class="credit-tags">
						<span class="credit-tag">Svelte 5</span>
						<span class="credit-tag">Biome</span>
						<span class="credit-tag">Playwright</span>
						<span class="credit-tag">Vitest</span>
					</div>
				</div>
				<div class="credit-item">
					<span class="credit-label">Hébergement</span>
					<span class="credit-value">GitHub Pages</span>
				</div>
				<div class="credit-item">
					<span class="credit-label">Code source</span>
					<a href="https://github.com/t2ym5u/read-flow" target="_blank" rel="noopener noreferrer" class="credit-link">
						github.com/t2ym5u/read-flow
					</a>
				</div>
				<div class="credit-item">
					<span class="credit-label">Licence</span>
					<span class="credit-value">MIT</span>
				</div>
			</div>
		</div>
	</div>
</div>
