const CACHE_NAME = "rta";
const urlsToCache = [
    "/",
    "/styles.css",
    "/index.js",
    "/icon/512.png"
];


async function preCache() {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(urlsToCache);
}

function install(e) {
    e.waitUntil(preCache);
}

self.addEventListener("install", install);
