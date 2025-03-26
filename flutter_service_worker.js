'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7b736a54ff2beed3612e27bf7f99a761",
"version.json": "9be6fa9ea09a5374d5250c528177fe4c",
"index.html": "5fe6d971a5a98e6096323a44ff9acd04",
"/": "5fe6d971a5a98e6096323a44ff9acd04",
"main.dart.js": "f6048f642c68d9c9c7053a35c7b9c751",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "daf0581c35a96382107fbb04632528f7",
".git/ORIG_HEAD": "810b190dd5a998a305a283ec43e31e82",
".git/config": "3404972dd764f0c85153410881450a6e",
".git/objects/0d/67c701eb6495dd6a3b379f6f0d6a51cb497cc1": "62fba78872f92f9e7036346c5e024652",
".git/objects/59/dca6b49f52d1ed5e0dbb42a49163cb883fb447": "8e89e03374dd5e19c3d0f86808ceff18",
".git/objects/92/8091e406b230eb27cfd777c0165443b10751a8": "43b43f1cde0da75c830466dc27805ee8",
".git/objects/66/de833ed54eff13a214d27cce575c68f7720786": "88b2746b21c0205d47a373112165ac62",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/a11b52c37f7a5d112c95c5f672379a5a818dc6": "2e5023ae4ef86c5228ae6229f742bfa5",
".git/objects/6a/b702046c5bef1419ef195167d21520c725003e": "c2a3576b3dd944f2eeb4915f150bdc84",
".git/objects/69/5e1afcbdf3feb66a47e3a4b9bf3aa7a3597141": "ca23d0baf5eb1a3277e8a14252f678a4",
".git/objects/69/50deedc01543aacdd52168f6d6d4ec086459e3": "7333fc96f00dcf9d04889e457edb3618",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/93/d35d5ea22008207f69a5c14e37c8a69f6a9741": "5e4a1bb15a48f6ccc3acc0eb78642841",
".git/objects/60/52a96749231ce3136a555ea4733dae89fea1fc": "1736415505ecfd1b2aafeb69bad4a722",
".git/objects/34/8d4d34d4f4deb40233bede1a6c532e190f47d6": "977207d4860bfe00bef9887593931cc6",
".git/objects/5f/bfa022277305ddf1a7d14d6a6ee4d96e46ec73": "d5fee1c7a6fe2911e0e89feefe7235dc",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/9d/c82d8a6e1fdf766dc974538559e93bd357196b": "ea23166502d6d86b24ee380324779a0f",
".git/objects/02/07cc64d98f49e626cdec7d3689f501d572554e": "5e93383d1a7d1b980f0c18dbcd59b630",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/a4/a46cb28570880757a5defd3602826a69e2451a": "24e0823ece4cfc0e44db6aa362c2674e",
".git/objects/d9/6559e84345f50aa5c4ea3b17f3a167d377e844": "8fc0b7269b30514bf00e8e0e4a25c8f3",
".git/objects/d0/866beeb3c405de4f9bd2c7ebef15eab24aa97d": "ff0a3332a12c59f64908137874c99c18",
".git/objects/a5/8f1a19bf6e5dc1278cbd62cfc400aaf6027e32": "6c0a8754bae1ee52306ec36c547d88f5",
".git/objects/a5/ceefdcbbe188dd5415f2bdada954fad7e3308a": "834d1d46a758d1946d0133cdb9000b48",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e0fbc11f20aec547daa70f9c7075d6a8cc2210": "7c61f378752217f175676096eb8b07d0",
".git/objects/ae/00a9ca5fb993ca2d40df0a21c7aa3ef052a01a": "c783fdf66d2ccdffb0ceaeb815612c40",
".git/objects/ab/dba27fa58352e35acdbc2ef109e350550af647": "e98187757dd523eebae0636f9a830581",
".git/objects/ab/1948562b9850b4cad6a62179754e5fd397d849": "7d571ba61df6d176d95a4a5cf4199e05",
".git/objects/e5/60531de8d6e50b8e7d9be2ab2c165e9883dfc0": "65067482a218c03fa8c3d86b45495b67",
".git/objects/f4/e7ad27720ce8004de0f2851f68a9d4eee165a0": "f1d285b43892f7b60271a55f1ab5d22c",
".git/objects/f4/2e3e66138b1a7d52e3cf95c9c145d162e953b1": "b7d99ee9904b8b425b59581093f22ef8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/810317333f0e57112e13cc467b8c369b101067": "d1191d64dfa9dc069fd337a0ecf6dd04",
".git/objects/fd/85a961f86971912b9dd51bae81d65c6572c4d1": "0c3ed3a3ccfeaae8d3c45c33416badfc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/df896ac4a4a63e231135d430c814b998df8e40": "3981cccac025adc7062e0e0bee13c203",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/11/2ddfdbfa11e4c4452a380dc47fcadcc23cd599": "2d9ea2a301f6cc64689c47b04bfae54c",
".git/objects/16/c8fb8b82e7d101253ebf8c8655cd2415b792f4": "c07d292bbf9561b00cd99a19e801d18e",
".git/objects/89/d218bf44a675e68b82204ff6b7b9fda91e47ff": "6b3842df3b67d3e3d0f7caa366f1ac9a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/72f2c45b7167e306704b1f8b3cc71944da5765": "571cfc9395be8260bfa96962b82e92d0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/d431a94d1965caa0240b35bee96e7dfdac8292": "78c08df547717a807e7ece9bfba0c82e",
".git/objects/44/f15e28c2fd006d706686f0c5aed8dd7bda4209": "bee9f6fad300c356fb63aab4e25f53d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/5429f781d2fe7d3e03fdeca8b48db532609c1e": "39651960d0f9a73d57633630667523cc",
".git/objects/6e/443986de61c2430dca9e0f817fcd29d0fbe3b7": "d966c40293853e266cb0ea0883a60a90",
".git/objects/98/ab33df1cf584704c9cae6af7259f7d044cdb3b": "e569fefca328005339c8f11f3fb484f2",
".git/objects/5b/9f7e63f54a7b7ca456e9e82de194997bff238a": "aa3b644cbb2b8d5c7eec82e216c32b41",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/52/8c9d7de48870d89cd0e5d47397fbf8c41f5a5d": "885c29c4f54bcb12aa0920cf9484984a",
".git/objects/52/0e4559a93dfde24fb8682dbbb4c656c8892662": "0d2c5eb24bad52f3e429d8e60209e19a",
".git/objects/55/df26ed56574907106b099fd1092c3548d13ca3": "f63fdcdd50b5918a54521794a2f6ed15",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/90/616c1825e5fd69fd4e1a712ef32cb61880d869": "2bd6499e9cfad246820eeaa4a06964e7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/794a923419d6beb63e35b6c88fdb2df83c2207": "ebac988d8234c1b3373ce0d553c46abc",
".git/objects/a9/948677c4c847e8e2b43d48f55faef316a7d80d": "6c1ca866cf3976f912fb7b5f417d57fb",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f7b44b42da20fce952a20b5a3f47e2d36e5685": "1afa3c67799908532211a5d114c04f40",
".git/objects/a8/66e3d5648fcca493e4f05d0aadb60a800888db": "f0d13b2d99f373b5bb59ef5c2ca3afd5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/ae469a1e81c8aba43584a6291e202dc9f9eab7": "d477676d8955ae246c7b50e96217c486",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/ba8b66c8e698f00cfcfb5467b2f02cf81de8e1": "3647f7675878f0d6ae811a16a19f0c6f",
".git/objects/e6/33e78bae169ece7efdff6a1fd5746076fa7baf": "d27c30e60099ad8fc27cbafd24d940b3",
".git/objects/f6/2ff27e2766f76a145a65733c31855530c6eda4": "30ea7b5015bf044426a37edf15e19fd7",
".git/objects/e7/36e5d2600693792f01250ea7895ec84980e0af": "28248a1c4ac3a8e11e89e8416d216480",
".git/objects/cb/7b8c788857361eceb0b3a4a7abc2f6dd12d3fb": "304f97bd2866871a0d19775f9127bbce",
".git/objects/e0/1ac87a7151516182414bad6ae0f133dec16547": "f1769f1a49c2370276f8cef6f1ebe3fc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/2615e436315bcb23a68535ea3b306da4660764": "c4d15a7b568f529bdbb012f362d3f25f",
".git/objects/1e/008d0a8cdbf5b00f8698f263c0e2c3e68e82d9": "ab700fe0a18e75ee7cf4da25250decf3",
".git/objects/23/525de0001cb4e4156ed3fae05f17d085c31123": "0717e49180b8499ed796164eea709767",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/ede66d5a8a8985027e2ceb7ecc120bab152899": "d8a45da00205f980b984bda8d8ee4084",
".git/objects/15/ea0599a6cf173d4463da7ba88f28bca65ac67b": "43c0528546337745408b08f46f0e8431",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/1c/e2ca77fcecd3d8c37fc6e11ee09d49865d02a0": "c64c1e70dd0e8a91c55e3c9663718845",
".git/objects/49/6188b209a0e14f60890ab0ad7a2b4736e56b15": "1fd805df671c23977e95126d09b4536c",
".git/objects/7a/99878aa58a50925f164a5b5dca3d62818384e0": "f91be147a39c34caa4f63d1cd9986baa",
".git/objects/7a/ba410c0b09b893e6d2ba5ed895a43451acdab4": "07615d301b06523d51a4c13c22b3001d",
".git/objects/7a/917d60ba42f25c4fc29b472d1d1111be7a870c": "b9a8e5b968476c3c3c3a23567e459872",
".git/objects/25/e5d713c50fbd487ef17742ca664ed4c9620ec7": "fd3ee8fcc75352b1bc09439e585b9be9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "efab9812a6abcdce36eec9f6156d9e70",
".git/logs/refs/heads/master": "efab9812a6abcdce36eec9f6156d9e70",
".git/logs/refs/remotes/origin/master": "0ee81b0e9aa23948d0ed63bbdeaa1a21",
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
".git/refs/heads/master": "ff0742a4a373557c80edff0d8d7ac551",
".git/refs/remotes/origin/master": "ff0742a4a373557c80edff0d8d7ac551",
".git/index": "7cf2a30c249df547d20999dce37cff6f",
".git/COMMIT_EDITMSG": "aa5e3f78fd531d80e6877a7270caadec",
".git/FETCH_HEAD": "9cb987ed3b87315761b4c241ece27d02",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "997ae50b932a9600b4ae16c12934066f",
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
