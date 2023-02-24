'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3f90341509f838b5f0bbb4dd7619059c",
"assets/FontManifest.json": "fec361d7774177bcc2742067511f8dab",
"assets/fonts/IBMPlexSansThaiLooped-Regular.ttf": "89063cd027366dce64cd4138a00e8dab",
"assets/fonts/IBMPlexSansThaiLooped-SemiBold.ttf": "c8fc4097f7179fa0189f0a09c331be29",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/android-icon-192x192.png": "12c59f16af1fbbd5146dd01f9a72e7e3",
"assets/images/apple-icon-144x144.png": "026760a06f85272d3e7c8ed58926df75",
"assets/images/favicon-96x96.png": "53e0de518003450fb38033761a079f5a",
"assets/images/ms-icon-144x144.png": "026760a06f85272d3e7c8ed58926df75",
"assets/images/weather/day/113.png": "c2750db28a0ef05560b0dec1aff9fdc9",
"assets/images/weather/day/116.png": "36f2a53623b7208e7e0c156d59dd3ebc",
"assets/images/weather/day/119.png": "edf57eb01e72a557e77e04fddeefe9f5",
"assets/images/weather/day/122.png": "1295367f5c40cb1bd6cb2d182765e523",
"assets/images/weather/day/143.png": "98cf607aeeae821fffc2eb6d61e0f95c",
"assets/images/weather/day/176.png": "27baa560f32b220ee21b7ee1c46051d1",
"assets/images/weather/day/200.png": "fea959cadad7a1bd35970b8ebaca7b8f",
"assets/images/weather/day/248.png": "42e4f71fece6ba12917baf77b15e0be0",
"assets/images/weather/day/263.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/day/266.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/day/293.png": "27baa560f32b220ee21b7ee1c46051d1",
"assets/images/weather/day/296.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/day/299.png": "27baa560f32b220ee21b7ee1c46051d1",
"assets/images/weather/day/302.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/day/305.png": "a6b359f6dcfde0c243a64e23d2b5c4c5",
"assets/images/weather/day/308.png": "4371559e94f6172bffe7da6a62c86dbf",
"assets/images/weather/day/353.png": "27baa560f32b220ee21b7ee1c46051d1",
"assets/images/weather/day/356.png": "a6b359f6dcfde0c243a64e23d2b5c4c5",
"assets/images/weather/day/359.png": "04f5c167b9788e24a316cdc920bc1432",
"assets/images/weather/day/386.png": "80488adc444bf2dd7855dc5b1383eb19",
"assets/images/weather/day/389.png": "e8648296adb9c5a10f6faa10c666b73d",
"assets/images/weather/night/113.png": "4d96feb995ca5caf0edbeaebc32cdc2f",
"assets/images/weather/night/116.png": "a156e8ac4e72dc3049c5c3311496ca44",
"assets/images/weather/night/119.png": "edf57eb01e72a557e77e04fddeefe9f5",
"assets/images/weather/night/122.png": "1295367f5c40cb1bd6cb2d182765e523",
"assets/images/weather/night/143.png": "4a3e7431e090f5fed2de667d27d36eb9",
"assets/images/weather/night/176.png": "931d32e7d77ea679cd16deeee50e5b9f",
"assets/images/weather/night/200.png": "fea959cadad7a1bd35970b8ebaca7b8f",
"assets/images/weather/night/248.png": "42e4f71fece6ba12917baf77b15e0be0",
"assets/images/weather/night/263.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/night/266.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/night/293.png": "931d32e7d77ea679cd16deeee50e5b9f",
"assets/images/weather/night/296.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/night/299.png": "931d32e7d77ea679cd16deeee50e5b9f",
"assets/images/weather/night/302.png": "04ea618a2726a0749bb0ab330a415f7c",
"assets/images/weather/night/305.png": "931d32e7d77ea679cd16deeee50e5b9f",
"assets/images/weather/night/308.png": "4371559e94f6172bffe7da6a62c86dbf",
"assets/images/weather/night/353.png": "931d32e7d77ea679cd16deeee50e5b9f",
"assets/images/weather/night/356.png": "0a7b3fc2e0a7dd6dcefbbc1904d1cb62",
"assets/images/weather/night/359.png": "04f5c167b9788e24a316cdc920bc1432",
"assets/images/weather/night/386.png": "80488adc444bf2dd7855dc5b1383eb19",
"assets/images/weather/night/389.png": "e8648296adb9c5a10f6faa10c666b73d",
"assets/images/weather/pm2_5/Good.png": "f2f0a3ddbcbffa055f5be834f45095b7",
"assets/images/weather/pm2_5/Hazardous.png": "68ef6d9728eb285ca0d42dcbee87eb73",
"assets/images/weather/pm2_5/Moderate.png": "0487702febaca129406e1ef5cb88e882",
"assets/images/weather/pm2_5/Unhealthy%2520for%2520Sensitive%2520Groups.png": "3b0454c6903c20964226e63930d7963a",
"assets/images/weather/pm2_5/Unhealthy.png": "04da385c8ff683abfa47ddc5955c39cf",
"assets/images/weather/pm2_5/Very%2520Unhealthy.png": "b89aeae6480e65e3671b7039b37555e7",
"assets/NOTICES": "298e8751fde1c484087e84c5ea88d0ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
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
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon-96x96.png": "53e0de518003450fb38033761a079f5a",
"favicon.png": "800a85b23947bbc8d360c130e68aadfa",
"icons/apple-icon-144x144.png": "026760a06f85272d3e7c8ed58926df75",
"icons/Icon-192.png": "9c485230d294e97a66a25002c6e9300b",
"icons/Icon-512.png": "daf57757e762a36bb5266c8370e4aae6",
"icons/Icon-maskable-192.png": "9c485230d294e97a66a25002c6e9300b",
"icons/Icon-maskable-512.png": "daf57757e762a36bb5266c8370e4aae6",
"index.html": "ab440aaab278dd78163d26e59e8eb416",
"/": "ab440aaab278dd78163d26e59e8eb416",
"main.dart.js": "811525e0a6cd4a1b94181c3f87706a29",
"manifest.json": "bd3ef53168cd46607d59e54200e93e32",
"version.json": "79933738fd2b1da37e92a6c439f6a32b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
