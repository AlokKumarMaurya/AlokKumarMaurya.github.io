'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "8425bfd8d67225539cb58bc09c80f2d7",
"/": "8425bfd8d67225539cb58bc09c80f2d7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"version.json": "d46be47db524e6ee0b8292c84c824f94",
"main.dart.js": "6d0bf156386e2053ce4edf67a9a99856",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "396ef2a5180db3105068ff3d9153d6bd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/config": "0aecf37548e805c00487f086b5e7e102",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/db/06ffd2788c2769c63867ee15a77b93072ce42f": "518f9075c0c34c4922a25092f4f2f1fc",
".git/objects/d7/c13d181da593c873c8ccecce7615fe8af46c37": "fc2cbd297c72f52847b8e97241f574f0",
".git/objects/e3/56baa9180eeac4aaa10ec72143a04544cf2c32": "5ae23d3aa4cb508b74595f4c55e95ebc",
".git/objects/e8/2934c0ec566a85785b3fe909fa9346d6d0fe3d": "1fc71daccbc0c0d57254dba54ab9924f",
".git/objects/be/9b718f7f47ae0a3f23e6e0c5402f2e157168e1": "c0231621ee3250109917e8a51d787429",
".git/objects/1d/a433892cad2d981d86db97f0afc41f28bee030": "e323acb891b366b3a385d5519217c0ab",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/1c/6e46b937dfe2651280624c124a0f0f803709a1": "55ff49aa38fa6f4b436c529631dcd617",
".git/objects/e9/fe54eba026cb6eae855110f5410cfe04e08cea": "da76bcc037ae200c3f24b3bd2e784e57",
".git/objects/b1/1e22c70479faa1b641a816370919bce102a7ed": "5ff749554dd9a77a69ad0dfec419e6c7",
".git/objects/d3/89dcc77100c7a03f4f721eb3cd8cda0ef49fb0": "5664dc6480839b0cd8e1e3a174658834",
".git/objects/c6/ced42141962083ce1c69330bc61286e6093c16": "af66884961fa17a7bd96f297c1dfc4de",
".git/objects/37/cfa62394d62f920c9cbb3c3e0da473fac5249b": "c797fa62f1be70adf3887a5a446ac025",
".git/objects/a2/e56c48034d82cd32089645bf17dacf239dc33d": "395c5251999c2bbb7c1fca75bc2cd4dd",
".git/objects/a2/e265b0478da99c2b9dff0d0c7bfe3199c87fd7": "de43a60b84abe52e16ff1b93010b54e6",
".git/objects/a2/2b61ac2661bd8ea773a2369c0ddae0f251f68a": "81f270e87a00225bffffde9a31706d69",
".git/objects/2e/e34aa13ab0ea27fcc28dee164e2ab794b8bc5a": "4c19d41f5a9e98db27ca5c0ff701c96b",
".git/objects/24/7677e8ea753bdc9deba4b9e3c6721777b3910c": "6dca9915fb88e9a50073aaaa83e743cb",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/655b525813a2b4a0e0aad6e289858b1d3d2f0d": "fde15e04bd7a64ab447072c4154997df",
".git/objects/91/c94703bb320375db1e254d554725385a600616": "6bdf90f91a4ff15c68333b8c9275251a",
".git/objects/91/aabd2bfb95f99e5464105d14951364e33abdf9": "a62e88090a55adcbe40717dc1df5de53",
".git/objects/75/3aae1a7ed6b2b1a6988b07f7a91bfcd5cb8d10": "d65362cb22f694b194d6865b5a71c76e",
".git/objects/7b/717c132753a00611345f8b1d3934a56526e2b4": "28d8fc628149e787d1f67664bef7060a",
".git/objects/7b/ea55d780680142022e05995f96440d83296ca2": "8a46a17e92128f48d4b0118e5f5176a9",
".git/objects/c0/5ae8a979724cd04e0e8f686debf1bcbcc29a54": "4b72cdd572f0a34c5a54ae0d8eee0bff",
".git/objects/c0/63b32a2e8639d38c33133d23ed8ef0a5a72fc4": "cb38997c0b017de2130f301482988996",
".git/objects/f1/7a64143d7a4718e26bc99a8c156dbd8bd2e5a0": "fb31f7b12b9c8d85d1a5f746a86c3a52",
".git/objects/0d/03d8c86ddbd492cda045624f0fd633b6a80887": "6ca1efd3cac702ae914165d738ae8ff4",
".git/objects/0d/a81b3c848b25792285cdb27834276576c3b792": "2aefce09f974177200be2ceb61b43f45",
".git/objects/33/3dc1cc666abf4acb57d66c4a346e2755157656": "df4b796ec506024da044ea6b10d5adf5",
".git/objects/64/fd0627602a60c0d489b00ba3da39f430c744d0": "ade54ba8eb41c32fbee3488cd0543c1f",
".git/objects/4f/e80773e29cdd3b5c0deb61fc9e289ed0e1875a": "677643a9a47bd9565005dbf01ed20d32",
".git/objects/42/89966e2dd42f4bbe412691fde9bff2f4eb0534": "e265e62aef5d97ba0a085808b4c6e04b",
".git/objects/6b/9c40e169fe21b3eb93cbd9a4898cdea15bc42c": "db9854d52c4154751b155b6be2986704",
".git/objects/d9/32d09c2a93305f17ae70bca4f745fa3eb906b8": "fe74f9bac6cc8d57f34bc3a38a0b33d0",
".git/objects/36/747a510b1891d5ff94f11818a9869cdfa6b98c": "dddd0d624eaa925d63529176e53d7449",
".git/objects/8f/926663f90d9ce468d37a4f8cdfb9f981f6fc83": "904c5e4ebed469dd5228fef2a075664a",
".git/objects/8f/0bdb773c19f7e1eae865342c892405d47c5431": "ebbcbb6e6be3ac25041d458e3269634c",
".git/objects/e6/9876252e18d22800c33eb6c1c5c53335d34b4e": "8fcc2777c66a4fe86f8acc84a92f4037",
".git/objects/72/4fd8af671b84b74932078a291d27596d915011": "dfbca6db56abd270cf49aac33d4c0274",
".git/objects/25/9d47a8b88a255d5e83d80f3fced957010fcbe5": "b9aa0b62a541ebdbcd5cafb7a016e774",
".git/objects/4e/eebc4b2eebe50f659898c144e9808da656b0e6": "68f1a13fbfe5caa0a3bc8d85476d834b",
".git/objects/86/63e97c2bd610b0f091310001ca6b92c9005203": "cf16d6c93b07e7447a2c0cca3d00989a",
".git/objects/fd/369cfc23c2025c593f313bad91d8c165fa6939": "f83d5ea077e43458181495cda3f871d2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d23a7c0d36f1c7fb9c855a1b2fa38c40c0b704": "7dc87684723ca453bfd08867fe2606e5",
".git/objects/12/b0488a96ddcc556a8159b890143280612bf3bc": "16820e3be1ab3879b8cb0bc7520bc696",
".git/objects/ce/c39cae65fcef4916fa71ed0819e22026d91664": "7bb3ef0311ce326791b2a0f4f95d6884",
".git/objects/b0/233c73b63d7fb2d2a9f96c6a77b417af842a43": "37bfc972817fa52f70a1c21bfacc59cd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/12ca0995aa6a9127691b2096826515b03a9c7c": "6c527f2c342fdf71b701dbec8820451b",
".git/objects/46/54659f694f027cb58b700db8eb1002c7207e3c": "133e5a3824914f54fc0ccc66c456db7e",
".git/objects/16/e7083d7b88b3ab1813dcd44bbd6bbb643c6c05": "1da88ac77fe8869083945620b5489da4",
".git/objects/16/06141bba0f80d934bdd98598c9be26eb2cfd3e": "be84884b7ccbbd4a956568825e015f71",
".git/objects/16/e71a08937468bfd6956bb71494854af845f408": "0ffabd15252aa35d4e1d4abb799357b6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/13/586a1a28e8780a2b34a184798da5dfc4615f9c": "0ea5d79d34d172cd7ab5c24d2d805558",
".git/objects/fb/acaaf63e733379216238c571e963bd61a81e91": "64f7af2747e007d96b3d65a0d4625931",
".git/objects/05/95d1c6a4b2f01e6c1dfd84eb59c82363727ec8": "34f5622fc6ee9ad7286819aa94892bb2",
".git/objects/c3/84fa7a2ee098909975548abcf707053f08ce9f": "577a9acac217bdc32274a69ffc4e869e",
".git/objects/66/9a5000baf8e270ef67e057f4dd8b4c2ced7caf": "76a397c9393f7ce056f855ab6d3f8052",
".git/objects/66/4439cd1e3bf1d2b9fe055b8b98a5997e9a483b": "8b36681e10f9a65c36e47e5fc1e22284",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/a1/68a69649ce937b97ae6fd614df1ce36367e423": "90ffe1a184e684726d2e6109a9009f44",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/3f/42e756ea3a6e030ee37d1b52f476683e40219e": "fd0b902c51a8c1560532e7e7a7907b05",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/e2/bb13b34736e10cb4d04b578a278215d88c337b": "1f8abc96ab58786990c228b57641b762",
".git/objects/68/c89d64eb56f13e9bbec37730434017b6345c7b": "d55fb0ee0bbc25240476bfc720b89fa1",
".git/objects/6e/699069f386742797a3533a8e73dfdc1999a3e2": "14668229710b952dff48178d584ca505",
".git/objects/6e/df17489b166afc82fdf8a3f58fecbb2af57e28": "450fd57e52baa8a5354eaf37e496aad0",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/30/8936a7b82749d603eaea626b3bf97c12760f2a": "4f89a2960d1146e5b43c715ead8d82dd",
".git/objects/30/58e2a716875d4aa56ff47c4edcab114c9014ee": "0c70b86a5deec2688b59aa965b70edc7",
".git/objects/3a/346cbb0b9f8a52da3c0e5ef94172c8bdee4c9c": "0e63da0146a5e3e461349581f32f4515",
".git/objects/31/37006805a75567e5d5b109ce11bf874e898b37": "7bfa8f9d09242d61d2ba45dbbf21458e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f4/97026812e00632e48335843a0cbfe2338edd70": "4a05119f55679303933567d922276aaa",
".git/objects/ca/7e33db8a1b8ae3ff1368983ee324492b8957fc": "562ed8b7c009ae53b4a27e680e38a387",
".git/objects/20/c99f714051daf3dd28ae34d618904c097e8bac": "62a9a9e8c50e9b49456fdb1feecfd832",
".git/objects/21/d6ceed080be07418afe4a6505fc04ea9d65365": "00c03749e2fe1d214f3a3767403c7445",
".git/objects/cd/c0f5055dafe3f25f08c52bbf3510d4f912e993": "fe4c604bc272bd814594c9dc339f3106",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/b9/7ecaf90211294d0da5c905451dc1b998799cb6": "67826276176791f9c8ea1197aee22f0f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/98/c8d310e37360cb5c3e70688c4cc3730c6d2cee": "27bc03a87d7bdcb34b44d5829ff616f1",
".git/objects/b2/379feb04a94d49275e695fb6959680e8298815": "b5f780e8b95d5f32549efe6fad6601fd",
".git/objects/93/ab8013743744c6d9e2e3cd00a9198187366eb9": "91653f13345eb5703306250fa50923fc",
".git/objects/9a/0cc0ebf03b7cf6e7e38fcd84bfb496fa01f44e": "68376de3450d74a392e4a89f9ce4a56b",
".git/objects/9d/8804c787813a41ea3be6f5ddca9adfd0d7920e": "b3597ff360e55e59b38faa3e767d8868",
".git/objects/9d/b82b786c34ec6e49e65c173288c43f4e38da5b": "c9b67eaa6ded7d6438c096b0d57faf0a",
".git/objects/7c/b1e07965ba72204fb7f8e81dd17b7f7afc57e9": "8bc19b96741b6e2cf64cf1eb38f03854",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/ae/730a135971c147932fcbe57c823d78c191e670": "2ad0330575d98163bc653c7ca0a26778",
".git/objects/14/f936f22a342319be715178843dfe131fa1965c": "e3d0033d30a5422fa403f8904f776a2e",
".git/objects/14/fd5a822edda6000ffad1d4f92a8472228ee3e2": "a6b0d237c455d32a4075bd2132154d04",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3b/71c862113ce21b97221622a4a3380580f9088e": "2144daf6310058b48995cca355008e9a",
".git/objects/5e/aca21c20771849956ed475fa46d6d9b6aedaa8": "edc738b5d74c6427e015a310c868798b",
".git/objects/52/f650aa1a4650fbc0fc931f640178bf20d43703": "a466a08d3edc31a761130251d3094864",
".git/objects/52/373b0f97fe459dcd15f985faaa8e8fd5302b80": "9b4db0019a0d1510fd33cbc6b013d983",
".git/objects/f8/4a0632f6ea1195d1a683f21960cbe4cee12696": "6d11f6397ee52ab1fa17470f873e6e7e",
".git/objects/27/c0733afbbae9795b9c0f28db757450f2971556": "d2fab0a1bc45281120824052f39234df",
".git/objects/27/37a58c4e3c316e7aa6be38a62966928048576d": "b90a843cfd0521845319baecf9f2c5d4",
".git/objects/bb/09d3a037c81dcc76b99c961a4cbc46ed543a21": "a97604a9ef276290ab24492bef07e6d2",
".git/objects/76/8b840232b4d85967f6c9e392cf84f117e78f8d": "68dc805dbdaa278b974a656c9bdab7dc",
".git/objects/8d/e284fd2d2ae422478f4d445e3144b9c97dcea4": "00a6c2280713af9ce7fd62ac8fec46be",
".git/objects/92/ccc9d6620076c6e2b7afb431bc0d85a5b96be4": "0f8ca19af479c0373c3338bf06877597",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/f2/23ce690a061302a0db44dcace8a3bfd6520e58": "6c883064c4650b2e0bd11e4d95e60dac",
".git/objects/c2/32bcd9c873d64ef63ebe1301130a873e3d13d8": "419328e3e2796ba8204803aeddef5f74",
".git/objects/a6/a4aa96a91f2f634143a30a4d0d29ec8010065c": "f3497401acdaa6cf05257011cb7841b8",
".git/objects/ea/bdc168cf938bdf3f58116323b0cfc411f7ff7a": "415b73bb5f2e7e317e5c32830d542f6f",
".git/objects/ea/9dbb9df3b3c2184207c9318f726481c2127f02": "8bc311c12cf4c634cd2c176d82e85de7",
".git/objects/bc/617d24b4cede9b516ea820bd3fb505aa10ca1b": "20b390f63da603983cd96031b0b67559",
".git/objects/bc/c67a155a2a6cfaa8ea06104e2e57ea777a78cf": "f7762c7f974772311d48b23f63d5cbc4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/f7/398226b60d5887eaa5fea2a1ed39e7fcd888bf": "2d305d32f751bdaf8e002e7e20311fee",
".git/objects/73/8b96335a0c7b817b88b2f7f500220be91e7155": "0ac45166d596166e832eec9872715ef4",
".git/objects/e4/e4b1751a750493040d562f46f7324cde2ca77e": "b781713e5a136fbf87ec6d8626efe4dd",
".git/objects/e4/f1ec4e6812d0420f26210eef6e721ea46de7ed": "93b5ff10d2aa8836d0ac02c2110a6eef",
".git/HEAD": "972130d23282723aaed660dc203e0a15",
".git/COMMIT_EDITMSG": "c285a59b2f45923ead53fb0afef6cb5a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "318baca3997af569b2a33a3528a12c6f",
".git/logs/refs/remotes/origin/masternew": "c9714ae4af699917f7ccfb771c6f4d07",
".git/logs/refs/remotes/origin/master": "a5a8f5c7096a7020e515ea2ebb70cb4f",
".git/logs/refs/remotes/origin/main": "19cdf879c84a215b21d5d793c9189430",
".git/logs/refs/heads/masternew": "91938442d59fa904e78adaf2cf2014e2",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/index": "db56c165727ebeeaad31483040f4033e",
".git/refs/remotes/origin/masternew": "1fd863904bf0a872ec2f08b0fe7ab8b8",
".git/refs/remotes/origin/master": "3d17e2be0ca8994c4647b55e2670fef0",
".git/refs/remotes/origin/main": "6750d4fad3acb0677ea594bacfe378df",
".git/refs/heads/masternew": "1fd863904bf0a872ec2f08b0fe7ab8b8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "eba1e72e81c5646193641e8490e42318",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "e62563680a4ef309402b631a6de08857",
"assets/AssetManifest.json": "cf62e8b12534798081215074c48085cb",
"assets/assets/splash_images/splash_image.jpg": "2058c3b3a95be7c5a441aed44a313884",
"assets/assets/images/dashBoard_bg.jpeg": "561c9371517d4a959dcc9c132f7666fc",
"assets/assets/images/insta.png": "0cd3be8e81a8ec2e80122532342fadce",
"assets/assets/images/faceBook.png": "c9503e2afd9723192f2f80c7525412f9",
"assets/assets/images/linkedIn.png": "8984e7176c133b8585a507973bf34cea",
"assets/assets/images/whatsApp.png": "8a3560da50bd0b5826758f0e17a5ba9f",
"assets/assets/alok/alok_poster.png": "82fe50df369316a507cd54069945807b",
"assets/assets/alok/alok_poster_new.jpg": "97b094aa25fcbb3b32d55c1a6d30f653"
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
