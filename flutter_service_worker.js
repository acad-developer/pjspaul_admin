'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5bc5f8e18e393b8b66e4dfd96d8abd7c",
"version.json": "9be6fa9ea09a5374d5250c528177fe4c",
"index.html": "5fe6d971a5a98e6096323a44ff9acd04",
"/": "5fe6d971a5a98e6096323a44ff9acd04",
".firebase/hosting.cHVibGlj.cache": "bb74408b7c78d732dfc7abb4af3fde70",
".firebase/hosting..cache": "a85cfb35240e8442cefee880a77217a6",
"main.dart.js": "cc1b4fb6084f1433ccf611b55846f77b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"public/index.html": "4422790978a069c7a8f0dd2b0a6e9918",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/firebase-hosting-pull-request.yml": "8955d7bede9d3a0007e5c9ffce31ea18",
".github/workflows/firebase-hosting-merge.yml": "d40c3e31b5f9fcc45ccad5a9ab62be58",
"manifest.json": "daf0581c35a96382107fbb04632528f7",
"firebase.json": "6bcf42ed79fb26c537250453f0bdd183",
".git/ORIG_HEAD": "ab24ba4eca4d620e09a2d880822ff248",
".git/config": "8359722d87d4ec7150858e1516978796",
".git/objects/66/de833ed54eff13a214d27cce575c68f7720786": "88b2746b21c0205d47a373112165ac62",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/4b557cbdee83a967de62174c64c76cd78d3886": "c98933c93b756998cbf9e9385b82ca12",
".git/objects/69/5e1afcbdf3feb66a47e3a4b9bf3aa7a3597141": "ca23d0baf5eb1a3277e8a14252f678a4",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/19e674e4abeb37c9a04cc5a1be3b85d2028396": "dcb9f006f7dd85ee98f35d347925c477",
".git/objects/9d/c82d8a6e1fdf766dc974538559e93bd357196b": "ea23166502d6d86b24ee380324779a0f",
".git/objects/b3/833669dbb0e58a789fcfb2bce8caff8f946985": "f5e8e5c936d54b74bfca51aadee09241",
".git/objects/b3/a5ba87699cba65ceac1cd5ee5bf9d56e34acf8": "14358cd9e1f6e5fe9cbed91b6bd56b21",
".git/objects/a5/ceefdcbbe188dd5415f2bdada954fad7e3308a": "834d1d46a758d1946d0133cdb9000b48",
".git/objects/bd/39d29dfcc7c4f1e52301cee685f03e706a09f0": "d964dc35547d0d92e9f65792a5b52e87",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/af073b45e0c424c37afeb8c7808e8c9f2dcff9": "b8b6e12b478c6786f4ec4c8d113ba661",
".git/objects/d8/a77f1b44e9d6db0f35d6132f1826befeba7400": "3df0d0ed6dddee3e5cf98f95083b04bd",
".git/objects/ab/ce1478bb33f5826731c837bbb543eb841a5877": "2114d989bd98ccb7bca25b0bdd986623",
".git/objects/e5/fc032af3dd59b951126f4914c735fc24789e13": "6857ac9aa13198dfba9baa7203217397",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/33827684ce1896fe3781f2062d8fdaad2db12a": "16dd7150c6d58f697df3155502b2843b",
".git/objects/c6/8ab7a65ca03cd4f6cd2248e65e4d068d0ad744": "1d1fe5e91bc654eec7631ffc6a53c791",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/pack/pack-f5451aef87ec0f950c78487087212a64f621ee94.idx": "e97ca3c5156773bdae8519a3b0e48909",
".git/objects/pack/pack-f5451aef87ec0f950c78487087212a64f621ee94.pack": "412b40a651ab2353c5807a57c6f4b011",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/28/2cdf86317c295a5828b39a07682d9b932c4c6d": "a17f393dd38c0f220ffc387177a8046d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c1073a24bd68b940dc295c0bc3f53fe3915955": "18bc97e00f1644538af293bc3fc722a4",
".git/objects/19/605ab0d354501744868fc87118af2f303986b6": "47ebd35ef12d7aa20eb336d78d893479",
".git/objects/44/f15e28c2fd006d706686f0c5aed8dd7bda4209": "bee9f6fad300c356fb63aab4e25f53d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/5429f781d2fe7d3e03fdeca8b48db532609c1e": "39651960d0f9a73d57633630667523cc",
".git/objects/6e/443986de61c2430dca9e0f817fcd29d0fbe3b7": "d966c40293853e266cb0ea0883a60a90",
".git/objects/31/09e1e974d893380e325115626481b80a12fb30": "27b463ad991520eba178c78691959e4b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/a8000cab5bdb547cd8d20bc7b33d5d9d1f4a54": "f00076cca4a43b39f11d00c1ddf0cbd6",
".git/objects/55/cb1c85043bf9198175e38b46ddcead31b7f7ee": "a4e4787d390cd29c296b74e9f2eb4915",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0a/703a1f00fff6e0ad92d0260b419d2e2868a86f": "3da670cb8d55252589b2d233b9e291f0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/1b522951bb43288e9f6379a32dda423ab67c74": "890efe1495557b605e4d1cebe815a4ca",
".git/objects/a7/9cdef34d5563f58bafae7f8129f7b4abdf7138": "7ece87a1fe5a29d10af3b7fe57355713",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/7f6310755422d220e2c975ca4387ab465c95a0": "bfade2f38068d533f45c1eda0e60dd92",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/a7b506077e48b58bf6cedf397be449834e96e6": "dae8e26672d52de2e5f90f5cb4daf6a4",
".git/objects/e6/89de84b23bbfd9142bc072fc7d3c905090c4cd": "fd8be0fb7d4ae6fda0a9baeca6014dbb",
".git/objects/e9/0747db41d55b9027218aaece1f43cb352b5569": "2b9e0c4f6e3c7c5266c403aa32ee574f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4a/a62942f3937c5c5dc78246a54b18d26a199ed5": "a24e6270f0402a644fc56e16c9122507",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/ede66d5a8a8985027e2ceb7ecc120bab152899": "d8a45da00205f980b984bda8d8ee4084",
".git/objects/49/6188b209a0e14f60890ab0ad7a2b4736e56b15": "1fd805df671c23977e95126d09b4536c",
".git/objects/49/c829dbd444a33cda4b9e87fcaad63590f686db": "c6f6922855ea16d9beb2748072d9faf6",
".git/objects/7a/99878aa58a50925f164a5b5dca3d62818384e0": "f91be147a39c34caa4f63d1cd9986baa",
".git/objects/22/ca33575f04fd63593589fbe6c167cadab3770f": "8955dd8b6b89906ff37d1674bf3850ac",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "fc4adad065c2e8bdfc91976a653ff261",
".git/logs/refs/heads/master": "fc4adad065c2e8bdfc91976a653ff261",
".git/logs/refs/remotes/origin/master": "cd4e61b830e8df44f60f04941dfd6f4f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "507d1c6ecc2bb445d5de0c4ca620680f",
".git/refs/remotes/origin/master": "507d1c6ecc2bb445d5de0c4ca620680f",
".git/index": "94a2091886dde3f1ca74ea3d5a7bb32f",
".git/COMMIT_EDITMSG": "f87099a7880984ea298fc2633684aa9a",
".git/FETCH_HEAD": "65705b3193d8dd241ae605ec2036729e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "79f67994f3f9b33ea04af7ba7e07afca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1867996514537e933ba04092b4174fd0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "7ea7f66d5cb7fc3c090a7d52e589ed65",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
