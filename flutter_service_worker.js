'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2dabd850f537a837fa09a0d06c97f3c1",
".git/config": "557f10cb4a25958d798bceef94962fd1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0052f9981cfbd487e737322cdf4c70e5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8a45544553f89fe2fe76a6f8271940a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "43268bfb126ca8d091dc38bad436590e",
".git/logs/refs/heads/master": "1f0d867c57d9cd666600924da6ca2a83",
".git/logs/refs/remotes/origin/main": "fdf538f5d252f76a64d9f6bde26c3654",
".git/logs/refs/remotes/origin/master": "c3df8d6b10d79c0c1c973f2eaa4a306a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/14/fd5a822edda6000ffad1d4f92a8472228ee3e2": "a6b0d237c455d32a4075bd2132154d04",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/c99f714051daf3dd28ae34d618904c097e8bac": "62a9a9e8c50e9b49456fdb1feecfd832",
".git/objects/21/d6ceed080be07418afe4a6505fc04ea9d65365": "00c03749e2fe1d214f3a3767403c7445",
".git/objects/24/7677e8ea753bdc9deba4b9e3c6721777b3910c": "6dca9915fb88e9a50073aaaa83e743cb",
".git/objects/25/9d47a8b88a255d5e83d80f3fced957010fcbe5": "b9aa0b62a541ebdbcd5cafb7a016e774",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/e34aa13ab0ea27fcc28dee164e2ab794b8bc5a": "4c19d41f5a9e98db27ca5c0ff701c96b",
".git/objects/36/747a510b1891d5ff94f11818a9869cdfa6b98c": "dddd0d624eaa925d63529176e53d7449",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/89966e2dd42f4bbe412691fde9bff2f4eb0534": "e265e62aef5d97ba0a085808b4c6e04b",
".git/objects/46/12ca0995aa6a9127691b2096826515b03a9c7c": "6c527f2c342fdf71b701dbec8820451b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/eebc4b2eebe50f659898c144e9808da656b0e6": "68f1a13fbfe5caa0a3bc8d85476d834b",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/6b/9c40e169fe21b3eb93cbd9a4898cdea15bc42c": "db9854d52c4154751b155b6be2986704",
".git/objects/6e/df17489b166afc82fdf8a3f58fecbb2af57e28": "450fd57e52baa8a5354eaf37e496aad0",
".git/objects/73/8b96335a0c7b817b88b2f7f500220be91e7155": "0ac45166d596166e832eec9872715ef4",
".git/objects/75/3aae1a7ed6b2b1a6988b07f7a91bfcd5cb8d10": "d65362cb22f694b194d6865b5a71c76e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ea55d780680142022e05995f96440d83296ca2": "8a46a17e92128f48d4b0118e5f5176a9",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e284fd2d2ae422478f4d445e3144b9c97dcea4": "00a6c2280713af9ce7fd62ac8fec46be",
".git/objects/91/aabd2bfb95f99e5464105d14951364e33abdf9": "a62e88090a55adcbe40717dc1df5de53",
".git/objects/92/ccc9d6620076c6e2b7afb431bc0d85a5b96be4": "0f8ca19af479c0373c3338bf06877597",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e265b0478da99c2b9dff0d0c7bfe3199c87fd7": "de43a60b84abe52e16ff1b93010b54e6",
".git/objects/a6/a4aa96a91f2f634143a30a4d0d29ec8010065c": "f3497401acdaa6cf05257011cb7841b8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/617d24b4cede9b516ea820bd3fb505aa10ca1b": "20b390f63da603983cd96031b0b67559",
".git/objects/c0/5ae8a979724cd04e0e8f686debf1bcbcc29a54": "4b72cdd572f0a34c5a54ae0d8eee0bff",
".git/objects/c2/32bcd9c873d64ef63ebe1301130a873e3d13d8": "419328e3e2796ba8204803aeddef5f74",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/c0f5055dafe3f25f08c52bbf3510d4f912e993": "fe4c604bc272bd814594c9dc339f3106",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c13d181da593c873c8ccecce7615fe8af46c37": "fc2cbd297c72f52847b8e97241f574f0",
".git/objects/db/06ffd2788c2769c63867ee15a77b93072ce42f": "518f9075c0c34c4922a25092f4f2f1fc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/56baa9180eeac4aaa10ec72143a04544cf2c32": "5ae23d3aa4cb508b74595f4c55e95ebc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/7a64143d7a4718e26bc99a8c156dbd8bd2e5a0": "fb31f7b12b9c8d85d1a5f746a86c3a52",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/fb/acaaf63e733379216238c571e963bd61a81e91": "64f7af2747e007d96b3d65a0d4625931",
".git/ORIG_HEAD": "a6338de07be3846ef1bc26ab5f689b80",
".git/refs/heads/master": "137ab1c202ad3394bff5edf045cae526",
".git/refs/remotes/origin/main": "6750d4fad3acb0677ea594bacfe378df",
".git/refs/remotes/origin/master": "137ab1c202ad3394bff5edf045cae526",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "970463859b5279152ee0f0a95bf2ab51",
"/": "970463859b5279152ee0f0a95bf2ab51",
"main.dart.js": "470f7a97f352e018ee070b6f5f90bf79",
"manifest.json": "396ef2a5180db3105068ff3d9153d6bd",
"README.md": "f618779947a1728ee920b7f9d6971d8e",
"version.json": "d46be47db524e6ee0b8292c84c824f94"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
