<script lang="ts">
export let currentTab: string;
export let switchTab: (tab: string) => void;
</script>

<div class="nav-tabs">
	<button
		class="nav-tab {currentTab === 'library' ? 'active' : ''}"
		onclick={() => switchTab('library')}
	>
		<span class="nav-icon">📖</span><span class="nav-label"> Bibliothèque</span>
	</button>
	<button
		class="nav-tab {currentTab === 'reader' ? 'active' : ''}"
		onclick={() => switchTab('reader')}
		style={currentTab === 'reader' ? '' : 'display: none;'}
	>
		<span class="nav-icon">📄</span><span class="nav-label"> Lecture</span>
	</button>
	<button
		class="nav-tab {currentTab === 'progress' ? 'active' : ''}"
		onclick={() => switchTab('progress')}
	>
		<span class="nav-icon">📊</span><span class="nav-label"> Progrès</span>
	</button>
	<button
		class="nav-tab {currentTab === 'vocabulary' ? 'active' : ''}"
		onclick={() => switchTab('vocabulary')}
	>
		<span class="nav-icon">📝</span><span class="nav-label"> Vocab</span>
	</button>
</div>
