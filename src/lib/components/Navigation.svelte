<script lang="ts">
export let currentTab: string;
export let switchTab: (tab: string) => void;
</script>

<div class="nav-tabs">
	<button
		class="nav-tab {currentTab === 'library' ? 'active' : ''}"
		onclick={() => switchTab('library')}
	>
		📖 Bibliothèque
	</button>
	<button
		class="nav-tab {currentTab === 'reader' ? 'active' : ''}"
		onclick={() => switchTab('reader')}
		style={currentTab === 'reader' ? '' : 'display: none;'}
	>
		📄 Lecture
	</button>
	<button
		class="nav-tab {currentTab === 'progress' ? 'active' : ''}"
		onclick={() => switchTab('progress')}
	>
		📊 Progrès
	</button>
	<button
		class="nav-tab {currentTab === 'vocabulary' ? 'active' : ''}"
		onclick={() => switchTab('vocabulary')}
	>
		📝 Vocabulaire
	</button>
</div>
