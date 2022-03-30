const Ho3ein_Cache = "version-1";

const self = this;

//install the Service Worker
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(Ho3ein_Cache).then(function (cache) {
      return cache.addAll([
        "/public/S-Logo.png",
        "/public/index.html",
        "/src/Pages/AboutUs.js",
        "/src/Pages/Author.js",
        "/src/Pages/Home.js",
        "/src/Pages/HomeLayout.js",
        "/src/Pages/WebBlog.js",
        "/src/Pages/PopularAuthors.js",
        "/src/App.css",
        "/src/index.css",
        "/src/slick.css",
        "/offline.html",
      ]);
    })
  );
});
//Listen for requests
self.addEventListener("fetch", (event) => {
  console.log("Fetch event for ", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log("Found ", event.request.url, " in cache");
          return response;
        }
        console.log("Network request for ", event.request.url);
        return fetch(event.request).then((response) => {
          return caches.open(Ho3ein_Cache).then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch((error) => {})
  );
});

self.addEventListener("activate", (event) => {
  console.log("Activating new service worker...");

  const cacheAllowlist = [Ho3ein_Cache];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
