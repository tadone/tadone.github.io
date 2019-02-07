/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5021fd1a9306339da8bfbab299904379"
  },
  {
    "url": "assets/css/0.styles.d9b151b8.css",
    "revision": "64f74b3eb9cbf29f5fb3b2d08168e506"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.89ae5d30.js",
    "revision": "b164c2f3e03c0e3df465214be66d2277"
  },
  {
    "url": "assets/js/11.a75a28d9.js",
    "revision": "58f4bfdb8787a0dee75cfb40a7acf5bd"
  },
  {
    "url": "assets/js/12.97cb21a4.js",
    "revision": "3ef19861621dc19bc6f72e16fcce3436"
  },
  {
    "url": "assets/js/13.63fba130.js",
    "revision": "6a09886a86cfd648ed053a04f70c68ef"
  },
  {
    "url": "assets/js/14.3f23b28e.js",
    "revision": "a628a462cb95ba9456b75a6f982137cb"
  },
  {
    "url": "assets/js/15.5c212fdd.js",
    "revision": "e2a7e363735dfe288a1d00eb56c4072d"
  },
  {
    "url": "assets/js/16.6c4741f5.js",
    "revision": "d69c886dce9ced8bfbe6129af602248b"
  },
  {
    "url": "assets/js/17.316138ad.js",
    "revision": "2d14e0381ae3057bc2670cc3ee3bd3a4"
  },
  {
    "url": "assets/js/18.712774dc.js",
    "revision": "af09d14cc3c784e6018f46308699f90f"
  },
  {
    "url": "assets/js/19.8cac1d03.js",
    "revision": "6343f5b1b47caf664c77095c32e9f9ff"
  },
  {
    "url": "assets/js/2.fcb46994.js",
    "revision": "88a50d356832a4aee33f105c016fe614"
  },
  {
    "url": "assets/js/20.c6295b52.js",
    "revision": "919dfcc032d28f02d895f778d3c2267e"
  },
  {
    "url": "assets/js/21.4f5dd63e.js",
    "revision": "99d614b56b829316f3420a33e9c0f542"
  },
  {
    "url": "assets/js/22.b8c50060.js",
    "revision": "4fdfea2c02284ac3c4333de9975e2b97"
  },
  {
    "url": "assets/js/23.d068b859.js",
    "revision": "d48e2b08559fb8cec6a0b81fc884d772"
  },
  {
    "url": "assets/js/24.00bae11a.js",
    "revision": "b686cade30400d5e603b9399dfa5ad8c"
  },
  {
    "url": "assets/js/25.599b3271.js",
    "revision": "8dc57439c1809d365dcf5f50eb25f553"
  },
  {
    "url": "assets/js/26.fc534f83.js",
    "revision": "24b6f7167f71439b596aabf923508924"
  },
  {
    "url": "assets/js/27.f7fd5b9e.js",
    "revision": "f3639dc1e56597e9981c6f4a268e579c"
  },
  {
    "url": "assets/js/28.bebfaf48.js",
    "revision": "1ffeb34900afb12b7f24d3aea64a13f5"
  },
  {
    "url": "assets/js/29.1c3a4caf.js",
    "revision": "8adc85e60b1f00cc79b52e037f2898fd"
  },
  {
    "url": "assets/js/3.fc9eb5c0.js",
    "revision": "6ad09d6185c961d9b188ea1bcd901695"
  },
  {
    "url": "assets/js/30.a1a7b142.js",
    "revision": "469e2b784157b1849e927c73a5b23585"
  },
  {
    "url": "assets/js/31.074b511e.js",
    "revision": "f51999e3553bb457b36504dd502cae6c"
  },
  {
    "url": "assets/js/32.2f76116b.js",
    "revision": "7624db8e3b0bc09f9c9fe59ba41ed6e7"
  },
  {
    "url": "assets/js/33.1e7f1c30.js",
    "revision": "7c895725053c4ff69465bdb320b99686"
  },
  {
    "url": "assets/js/34.63fbe35b.js",
    "revision": "13ffded952fbe7f418911ff759f37111"
  },
  {
    "url": "assets/js/35.47a5079a.js",
    "revision": "8e310a9ef9c93b837c20a45113bbdb22"
  },
  {
    "url": "assets/js/36.a47a0a4e.js",
    "revision": "59e14271ef38efed281e01d2d964d775"
  },
  {
    "url": "assets/js/37.3580690c.js",
    "revision": "457ae05280d218b53f781ac8a06dde72"
  },
  {
    "url": "assets/js/38.e86d7803.js",
    "revision": "73a0d7a04ae9c5b7a1cf68e98d344364"
  },
  {
    "url": "assets/js/39.e89f71d4.js",
    "revision": "5287ef754e5d95023fa74f4a010d9702"
  },
  {
    "url": "assets/js/4.5f7daeb5.js",
    "revision": "8ef8b505cc83e10cadbc83a34a6dc1c6"
  },
  {
    "url": "assets/js/40.889340c7.js",
    "revision": "8aa9e2193c1764c843e4c63610515899"
  },
  {
    "url": "assets/js/5.417dffac.js",
    "revision": "031641b8b6d1601ae3c46e486f66e68b"
  },
  {
    "url": "assets/js/6.f52330c7.js",
    "revision": "ca69ee1496922bb1f3a37520d7128cc2"
  },
  {
    "url": "assets/js/7.e6b95d50.js",
    "revision": "e15192b72e2f1f526aa2fb301b0cfe47"
  },
  {
    "url": "assets/js/8.2b154f0d.js",
    "revision": "725712438c450ef3bdb8401b610da4fd"
  },
  {
    "url": "assets/js/9.cd3c1513.js",
    "revision": "d939c6673207c50c88a592a30cdee75c"
  },
  {
    "url": "assets/js/app.8ac8da26.js",
    "revision": "27a4f8051048ddd78b143115525dd3b4"
  },
  {
    "url": "cloud/aws.html",
    "revision": "7a336d8510bc879e68e6f1d98480a274"
  },
  {
    "url": "cloud/azure.html",
    "revision": "069234a1d324ba2b129e02c0454df960"
  },
  {
    "url": "code/bash.html",
    "revision": "7000d0eaf37511b39d839ae68873cb76"
  },
  {
    "url": "code/git.html",
    "revision": "e5139bfdfdbc6afc64d923b1ba7fe67f"
  },
  {
    "url": "code/python.html",
    "revision": "cc0258cee6128392980d3b72c86f868f"
  },
  {
    "url": "code/python/class.html",
    "revision": "9baf01dbcafcc75ab482ac72467f9dd8"
  },
  {
    "url": "code/python/list.html",
    "revision": "b4c017a0d09e4d47d2d642ef56268da8"
  },
  {
    "url": "code/webdev.html",
    "revision": "c8f0f1e8ddb2e439d92df6b527427619"
  },
  {
    "url": "devops/cicd.html",
    "revision": "e20f4efcac8c5c42b51c4de3e8f5473f"
  },
  {
    "url": "devops/databases.html",
    "revision": "0045b6746f6e3a0186d3b5cc5744b386"
  },
  {
    "url": "devops/docker.html",
    "revision": "49ff10ef9e3bf162bf16a5eaa25ddd00"
  },
  {
    "url": "devops/index.html",
    "revision": "2d5175a9d0c2b44ad6bef788bf859441"
  },
  {
    "url": "devops/sql.html",
    "revision": "c501cbcf7d2b1c30e3212e2998035924"
  },
  {
    "url": "devops/terminology.html",
    "revision": "46554b0b3ea226ca03ca2cd1184126f9"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "d115e7f638f5330f2f52b90baf69d25e"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "b30d783de5ba2b7bbc8e15b1ef79a721"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "ab784f034add8e80707d3cd861259d91"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "88b2042c85de10840d42685d689d1e0b"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "bad9309b3bf5452c04d08c8c1c0f5d96"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "685a2aa2df14bc25a801e9d69a2c4b7a"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "ec7176286e0bc44a5f6b4a3f68f0ca06"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "3a621852ace8886932bffc12a8704d6f"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "f48c3412e23517aab71602ae63d2a468"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "64b2c7a10d39ef30e0adf8ae6c944c62"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "a0377f5f95b6ffdedbdbc537be36b6fd"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "8a79c74cc2e499211f7bfc1ce477c9eb"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "linux/bash_shell.html",
    "revision": "9ecbadf4b6f35fbb572f6ff09a1fc450"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "cefb2a9aeda5daa280faabbfba8c9a91"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "b99039e9efe4ee70744dfa8e48fcd21f"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "73cb0638f37450ae0b889f001d93740d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "d4562e5a758f9aaf6d1cfa98bffcb1bc"
  },
  {
    "url": "other/http.html",
    "revision": "53872436981beb46eb48a69d3835ff9d"
  },
  {
    "url": "other/jq.html",
    "revision": "1263d2b74eefd3ae587678bd2095978e"
  },
  {
    "url": "other/markdown.html",
    "revision": "faddda80a8c934289be644bff34cc9eb"
  },
  {
    "url": "other/personal.html",
    "revision": "14fe7f9d00855fa023327fd04217e07b"
  },
  {
    "url": "other/setup.html",
    "revision": "07b08eef1f45266e16b49ba7ec9c7d48"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "d367d1bc3cba72b925fc4fa5bbef1fa0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
