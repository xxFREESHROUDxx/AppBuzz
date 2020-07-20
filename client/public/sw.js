// function receivePushNotification(event) {
//   // console.log("[ Service Worker] Push Received.");
//   console.log(event.data.json());
//   const { image, tag, url, title, text, timestamp } = event.data.json();
//   const options = {
//     data: url,
//     body: text,
//     icon: image,
//     vibrate: [200, 100, 200],
//     tag: tag,
//     timestamp: timestamp, // set the time for the push notification
//     image: image,
//     badge: "https://spyna.it/icons/favicon.ico",
//     actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
//   };

//  event.waitUntil(self.registration.showNotification(title, options));
// }

// function openPushNotification(event) {
//   console.log("[Service Worker] Notification click Received.", event.notification.data);
  
//   event.notification.close();
//   event.waitUntil(clients.openWindow(event.notification.data));
// }




// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
const OFFLINE_VERSION = 1;
const CACHE_NAME = 'offline';
// Customize this with a different URL if needed.
const OFFLINE_URL = 'offline.html' ;

function alert(string){
  return alert(string);
}
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // First, try to use the navigation preload response if it's supported.
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        // catch is only triggered if an exception is thrown, which is likely
        // due to a network error.
        // If fetch() returns a valid HTTP response with a response code in
        // the 4xx or 5xx range, the catch() will NOT be called.
        console.log('Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});

// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });

// self.addEventListener("push", receivePushNotification);
// self.addEventListener("notificationclick", openPushNotification);
