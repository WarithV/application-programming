'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2e7ef8873de0e0ee2ecacd3f61a1b6f9",
"assets/AssetManifest.bin.json": "219e2e89c002f21c328924ffaf33aef9",
"assets/AssetManifest.json": "e9cfdbcb50ae429640bcecce412aab6b",
"assets/assets/Cash.png": "fcd07260358936d060c2101f4c9ad2e4",
"assets/assets/GrabPay%2520Wallet.png": "0e38c8b84dd7b3afb1a0d4b785acf44d",
"assets/assets/GSB.png": "7134aff1a809b5a3bfa82ab843cc714f",
"assets/assets/HOP%2520Card.png": "0f8ec0210be6c65ef2fdd69c417ac87c",
"assets/assets/KTB.png": "5730ab3a6b1c8fa45a6d4e864c8af067",
"assets/assets/MRT%2520Card.png": "a2d2d45f3b95d289e18bb718bf0b1585",
"assets/assets/Rabbit%2520Card.png": "9a00a13e8750ebaafd68168f371a828e",
"assets/assets/SCB.png": "6062b583f3b699a75ef5c1573380e2f5",
"assets/assets/True%2520Money%2520Wallet.png": "75d6f87cdd24d9fd46bf8e6a298fb477",
"assets/FontManifest.json": "27fbd7ffde80205139006d53f7a0c2d1",
"assets/fonts/IBMPlexSansThaiLooped-Regular.ttf": "89063cd027366dce64cd4138a00e8dab",
"assets/fonts/IBMPlexSansThaiLooped-SemiBold.ttf": "c8fc4097f7179fa0189f0a09c331be29",
"assets/fonts/MaterialIcons-Regular.otf": "fca989aa5ab3ee388968e168d3586b9f",
"assets/NOTICES": "6fe01d2e1684336e3a28e89835e3c74d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "573ac14033ad209940fc7ce71402fa22",
"/": "573ac14033ad209940fc7ce71402fa22",
"main.dart.js": "8ec9968d6061cecfe18933c1f5c7af2b",
"manifest.json": "fc6a56cf96242bf0fc9fa32c7a08fc8f",
"paotung/assets/AssetManifest.json": "3b6490e199677aa2f70ba6913426bd80",
"paotung/assets/FontManifest.json": "27fbd7ffde80205139006d53f7a0c2d1",
"paotung/assets/fonts/IBMPlexSansThaiLooped-Regular.ttf": "89063cd027366dce64cd4138a00e8dab",
"paotung/assets/fonts/IBMPlexSansThaiLooped-SemiBold.ttf": "c8fc4097f7179fa0189f0a09c331be29",
"paotung/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"paotung/assets/NOTICES": "55f7e0e53f45682c81b96ce6b15863a5",
"paotung/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"paotung/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"paotung/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"paotung/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"paotung/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"paotung/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"paotung/index.html": "71e0c4fc55dc9757956c8f08f1c8f91c",
"paotung/main.dart.js": "5b7b60a1bd415cd78073c8fe2102a641",
"paotung/manifest.json": "fc6a56cf96242bf0fc9fa32c7a08fc8f",
"paotung/version.json": "7b44d3057237a43a6f2cf2395b9cb881",
"version.json": "7b44d3057237a43a6f2cf2395b9cb881"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}