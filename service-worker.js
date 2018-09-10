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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6dff2ce43631b18431f045178aa48bf4"
  },
  {
    "url": "assets/css/0.styles.0d0cead2.css",
    "revision": "64f74b3eb9cbf29f5fb3b2d08168e506"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aa5f0524.js",
    "revision": "af20220d9579d429a187051fd50a8c7b"
  },
  {
    "url": "assets/js/11.ac43ff3e.js",
    "revision": "756a1945c590aec081b547f9c2b2346e"
  },
  {
    "url": "assets/js/12.df285fec.js",
    "revision": "a3ae33a350a8f559984e0e297262fa5d"
  },
  {
    "url": "assets/js/13.d737b4ae.js",
    "revision": "d1efa9c5fcfbd96dfa15574737dac3f2"
  },
  {
    "url": "assets/js/14.25d03c01.js",
    "revision": "30a2fd60150ec8d16e135feaeab9ea51"
  },
  {
    "url": "assets/js/15.8aad5f20.js",
    "revision": "4a59fc40cae769fb4d6a686c29ea18e1"
  },
  {
    "url": "assets/js/16.f1ba950e.js",
    "revision": "faa0bb3411545fdd4e5eff181160d5a2"
  },
  {
    "url": "assets/js/17.8637b25d.js",
    "revision": "57996a2388f6ca9e1f0c9d58facd07a2"
  },
  {
    "url": "assets/js/18.052f6cd0.js",
    "revision": "2801a6d9607610a74076c3cfa34b6412"
  },
  {
    "url": "assets/js/19.aec02ba9.js",
    "revision": "bd9c899e210343844e84ddcf6bfdc01f"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.bcf1dcba.js",
    "revision": "37faa3ead82f2aedbb0820e2051a31c0"
  },
  {
    "url": "assets/js/21.45fdb543.js",
    "revision": "f21faa83b03b2af005be3e8f04944b30"
  },
  {
    "url": "assets/js/22.33f3b6e3.js",
    "revision": "de3bddd4c2c0b0e14a27d475f115ec6a"
  },
  {
    "url": "assets/js/23.b18199fa.js",
    "revision": "d3678124909e3cfb4a284b8d60bb9ebf"
  },
  {
    "url": "assets/js/24.3797fad7.js",
    "revision": "899e21abf660961f642e065f5e818c3e"
  },
  {
    "url": "assets/js/25.84f3b2bf.js",
    "revision": "8d108a888ab0378fc4a15e34ed90e7d3"
  },
  {
    "url": "assets/js/26.44a24a3e.js",
    "revision": "2409eae28ea844484710f77a45a7fc6e"
  },
  {
    "url": "assets/js/3.7c862992.js",
    "revision": "67afcae258f29290736a213075839510"
  },
  {
    "url": "assets/js/4.f18143d6.js",
    "revision": "93751afab35417a49719fcf16f72717f"
  },
  {
    "url": "assets/js/5.c6f8ec49.js",
    "revision": "11821cdd0cfe1b2642eb995aac7f8a96"
  },
  {
    "url": "assets/js/6.73fb740f.js",
    "revision": "1f8aa89152480f2c68bff20dcca8b2e8"
  },
  {
    "url": "assets/js/7.b20134ba.js",
    "revision": "b9c9b4855b8cbe1b29f6459325a73ecc"
  },
  {
    "url": "assets/js/8.227c887a.js",
    "revision": "6c39419c3c5a2904ecb43f4ece77acda"
  },
  {
    "url": "assets/js/9.bd5e5552.js",
    "revision": "5fc39079bf91f6dfb2e3253528899c22"
  },
  {
    "url": "assets/js/app.7c754415.js",
    "revision": "961ef1abc80a8b6b55df721b2d974ffc"
  },
  {
    "url": "cloud/aws.html",
    "revision": "c5ee01ee130d799651dbd967514f8971"
  },
  {
    "url": "cloud/azure.html",
    "revision": "a293526f7f03f68d67e222a881405dcc"
  },
  {
    "url": "code/bash.html",
    "revision": "72f83a61efaac384f19257d3a7f0af98"
  },
  {
    "url": "code/git.html",
    "revision": "5d1fc37294e63cf00062d4dd9367ec3b"
  },
  {
    "url": "code/python.html",
    "revision": "773e49e2e102919c127c910632184733"
  },
  {
    "url": "code/python/class.html",
    "revision": "5f91bf7e857043c9c56e711b231931ac"
  },
  {
    "url": "code/python/list.html",
    "revision": "873985a89d98bba4bc55687e30e784a0"
  },
  {
    "url": "devops/cicd.html",
    "revision": "c06a2eb7e3c1e352365b6163c9cfbe8f"
  },
  {
    "url": "devops/databases.html",
    "revision": "77bbe324b9faed196bf207058f6eae57"
  },
  {
    "url": "devops/docker.html",
    "revision": "2375265e831a1247703c7ed595047b99"
  },
  {
    "url": "devops/index.html",
    "revision": "bb0b96f09137e8e7231a1f39bcce6271"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "28836fb91bab0aae48efe3eaa1b4bc63"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "b9b1178c57d52e4b823f18fe9f14076b"
  },
  {
    "url": "devops/terminology.html",
    "revision": "f1cd8d192f3915019fe59e1f6018cedb"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "434ad5287bcb56054ffbbd277f2ebed4"
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
    "revision": "1fe3ce7842be6be57ceca2cfae9f381c"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "f7944acfafc859051759c176e2bcca53"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "092f64fcebeab3085c5455b6aabd923a"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "4fb5337f3b7ef98951cb51755bc0c4d7"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "7f41549265c00bba5a3af17be55cf8f6"
  },
  {
    "url": "other/markdown.html",
    "revision": "2c69a4a321b269ed6921914eedcecf01"
  },
  {
    "url": "other/setup.html",
    "revision": "0ff95d81039c347830ccf56df0c39de6"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "e27ffe7e38616d7d66476be3939229df"
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
