'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dd07c016efd143d42039b311e22c301f",
"assets/AssetManifest.bin.json": "10a1aed5a9af87299d3822418f3c9be4",
"assets/AssetManifest.json": "136e8fedef49f59e17fdfe50f1e7d16a",
"assets/assets/account.json": "9c6338e4d8ca752fdfd944fe6969ffd4",
"assets/assets/ARL.png": "6cd7f3f78418b0a84414cb2c6e70767d",
"assets/assets/bangkok_metro_system.json": "4794ae6f48bf658248c433079f6b21ea",
"assets/assets/BTSGold.png": "167abe585c0cfdf95be07b882a551330",
"assets/assets/BTSSilom.png": "1f1aadb21d8df6cb042e1e669a18814b",
"assets/assets/BTSSukhumvit.png": "0c5b079ae8213517abf34945ea454d42",
"assets/assets/Cash.png": "fcd07260358936d060c2101f4c9ad2e4",
"assets/assets/EMV.png": "0f4ac0773fbe42a158885147bfd21e16",
"assets/assets/fares.json": "b00fadcdfd4daa03a6d5a9d91c575c3d",
"assets/assets/GrabPay%2520Wallet.png": "0e38c8b84dd7b3afb1a0d4b785acf44d",
"assets/assets/gradient.png": "9eac24f1aa7bca7763613c1acafedd48",
"assets/assets/gradient.zip": "e707148ccce142f711821dce862982b1",
"assets/assets/GSB.png": "7134aff1a809b5a3bfa82ab843cc714f",
"assets/assets/HOP%2520Card.png": "0f8ec0210be6c65ef2fdd69c417ac87c",
"assets/assets/KTB.png": "5730ab3a6b1c8fa45a6d4e864c8af067",
"assets/assets/line_info.json": "877caf3dc0bf64ef0e7b9b58d7c7621f",
"assets/assets/logo.psd": "6b633161d16ea03ce461d6d0659048ac",
"assets/assets/MRT%2520Card.png": "a2d2d45f3b95d289e18bb718bf0b1585",
"assets/assets/MRTBlue.png": "90989c8a5519e25942569c64be29897f",
"assets/assets/MRTPink.png": "34feb73e1734089409365e1e21fd433a",
"assets/assets/MRTPurple.png": "90db7f4dfb223460a86cc09a05ae81b6",
"assets/assets/MRTYellow.png": "467c7e6fabf87c7e79e2411a64ac7b83",
"assets/assets/option.json": "ba056a126bb77eae14c2594a51406614",
"assets/assets/promotion.json": "e3dc781e0d23fbf5a27f07f7d895a0e2",
"assets/assets/Rabbit%2520Card.png": "9a00a13e8750ebaafd68168f371a828e",
"assets/assets/request_page_48dp_FILL0_wght300_GRAD0_opsz48.png": "b3590d412648578c0a6392ca43614e7a",
"assets/assets/route.json": "0a876c59b2377e4f01d0b458b3cba08e",
"assets/assets/SCB.png": "6062b583f3b699a75ef5c1573380e2f5",
"assets/assets/SRTET.png": "3b7ac65af19086b4660b2eba5cbd5897",
"assets/assets/True%2520Money%2520Wallet.png": "75d6f87cdd24d9fd46bf8e6a298fb477",
"assets/assets/type.json": "7baf4de4b2d4f8b3bfd757991e68764f",
"assets/FontManifest.json": "ada19d34bd4acc2c9baafda1eedc944e",
"assets/fonts/IBMPlexSansThaiLooped-Regular.ttf": "89063cd027366dce64cd4138a00e8dab",
"assets/fonts/IBMPlexSansThaiLooped-SemiBold.ttf": "c8fc4097f7179fa0189f0a09c331be29",
"assets/fonts/MaterialIcons-Regular.otf": "1a28e08ff749d1f95aa51d27c8c90aef",
"assets/fonts/SaoChingcha-Bold.otf": "5715ede61a19d58472cc1b2311bacf81",
"assets/fonts/SaoChingcha-Regular.otf": "7d3acbe314c3b0e149305e69c9607fba",
"assets/NOTICES": "5b724652a5372834cb3dec70dc4436ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "628d2ac32c168c627f122f7c216275f5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2036b57becd6712d967cf8912b467045",
"icons/Icon-192.png": "eb3528b699857bb705280ef69ffa441d",
"icons/Icon-512.png": "ba25c2171a3c37c9da13adcb647f920b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ecf2b11217d4e93104ec7e476280bb2b",
"/": "ecf2b11217d4e93104ec7e476280bb2b",
"main.dart.js": "000efdb6c449d1848f46f52ee6da0af9",
"manifest.json": "6c3aae6eb1022fefb9f64f1abe8ef4ad",
"version.json": "7b44d3057237a43a6f2cf2395b9cb881"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
