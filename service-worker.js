const CACHE_NAME = 'amor-v1';
const URLS_TO_CACHE = [
  'index.html',
  'musica fundo.mp3',
  'photo 2.jpg',
  'icon.png',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});