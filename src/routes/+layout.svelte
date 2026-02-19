<script lang="ts">
import favicon from "$lib/assets/favicon.svg";
import "$lib/app.css";
import { onMount } from "svelte";
import { base } from "$app/paths";

export let children;

let isOffline = false;

const VERSION_KEY = "readflow-version";

async function handleVersionUpdate() {
	const isDev = import.meta.env.DEV;

	if (isDev) {
		// In dev mode, always unregister any stale SWs (from previous production builds)
		// to prevent them from intercepting Vite's dev server module requests.
		const registrations = await navigator.serviceWorker.getRegistrations();
		await Promise.all(registrations.map((r) => r.unregister()));
		const keys = await caches.keys();
		await Promise.all(keys.map((key) => caches.delete(key)));
		return;
	}

	const currentVersion = __APP_VERSION__;
	const storedVersion = localStorage.getItem(VERSION_KEY);

	if (storedVersion && storedVersion !== currentVersion) {
		// Clear all SW caches
		const keys = await caches.keys();
		await Promise.all(keys.map((key) => caches.delete(key)));

		// Unregister existing service workers
		const registrations = await navigator.serviceWorker.getRegistrations();
		await Promise.all(registrations.map((r) => r.unregister()));

		// Save new version and re-register SW
		localStorage.setItem(VERSION_KEY, currentVersion);
		navigator.serviceWorker.register(`${base}/sw.js`).catch(() => {});
	} else {
		localStorage.setItem(VERSION_KEY, currentVersion);
		navigator.serviceWorker.register(`${base}/sw.js`).catch(() => {});
	}
}

// Register service worker with version check
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
	handleVersionUpdate();
}

onMount(() => {
	isOffline = !navigator.onLine;

	const goOnline = () => (isOffline = false);
	const goOffline = () => (isOffline = true);

	window.addEventListener("online", goOnline);
	window.addEventListener("offline", goOffline);

	return () => {
		window.removeEventListener("online", goOnline);
		window.removeEventListener("offline", goOffline);
	};
});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=DM+Sans:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if isOffline}
	<div class="offline-banner">
		<span>📡 Vous êtes hors ligne — les données sauvegardées restent accessibles</span>
	</div>
{/if}

{@render children()}

<style>
	.offline-banner {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9999;
		background: linear-gradient(135deg, #ff6b6b, #ee5a24);
		color: white;
		text-align: center;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		animation: slideDown 0.3s ease;
	}

	@keyframes slideDown {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
