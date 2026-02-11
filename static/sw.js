const CACHE_VERSION = 'v2';
const STATIC_CACHE = `readflow-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `readflow-dynamic-${CACHE_VERSION}`;

const BASE = self.location.pathname.replace('/sw.js', '');

const STATIC_ASSETS = [
	`${BASE}/`,
	`${BASE}/manifest.json`,
	`${BASE}/icon-192.png`,
	`${BASE}/icon-512.png`,
	`${BASE}/apple-touch-icon.png`,
	`${BASE}/offline.html`
];

// Install: pre-cache static assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(STATIC_CACHE)
			.then((cache) => cache.addAll(STATIC_ASSETS))
			.then(() => self.skipWaiting())
	);
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys
						.filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
						.map((key) => caches.delete(key))
				)
			)
			.then(() => self.clients.claim())
	);
});

// Fetch: different strategies per request type
self.addEventListener('fetch', (event) => {
	const { request } = event;

	if (request.method !== 'GET') return;
	if (!request.url.startsWith('http')) return;

	// Navigation: network-first with offline fallback
	if (request.mode === 'navigate') {
		event.respondWith(
			fetch(request)
				.then((response) => {
					const clone = response.clone();
					caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
					return response;
				})
				.catch(() =>
					caches.match(request).then((r) => r || caches.match(`${BASE}/offline.html`))
				)
		);
		return;
	}

	// Static assets: cache-first
	if (request.url.match(/\.(js|css|png|jpg|jpeg|svg|woff2?|ico|webp)(\?.*)?$/)) {
		event.respondWith(
			caches.match(request).then((cached) => {
				if (cached) return cached;
				return fetch(request).then((response) => {
					if (response.ok) {
						const clone = response.clone();
						caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
					}
					return response;
				});
			})
		);
		return;
	}

	// Everything else: stale-while-revalidate
	event.respondWith(
		caches.match(request).then((cached) => {
			const fetchPromise = fetch(request)
				.then((response) => {
					if (response.ok) {
						const clone = response.clone();
						caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
					}
					return response;
				})
				.catch(() => cached);
			return cached || fetchPromise;
		})
	);
});
