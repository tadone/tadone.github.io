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
    "revision": "d0640b5a05c9b483d7e13a0e35953555"
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
    "url": "assets/js/20.cfbf1745.js",
    "revision": "bf5b159a650ce712e3f354ed6c77f50e"
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
    "url": "assets/js/7.e3a7712c.js",
    "revision": "878155876799dcac5ef3f57b6af54531"
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
    "url": "assets/js/app.cd82b0da.js",
    "revision": "58d34b129285b8c063dd1ab7b6dcaaca"
  },
  {
    "url": "cloud/aws.html",
    "revision": "87e37706ab08c2fdccd1dc9717115d21"
  },
  {
    "url": "cloud/azure.html",
    "revision": "219d0962074d2051786666ea30aa5e1f"
  },
  {
    "url": "code/bash.html",
    "revision": "2834ede5c33df8c8ae003348f4fc15ee"
  },
  {
    "url": "code/git.html",
    "revision": "57bb2dc238bdf381d8e10ffea3cb6859"
  },
  {
    "url": "code/python.html",
    "revision": "0a1b0a236a3ac00df338563b47de3f72"
  },
  {
    "url": "code/python/class.html",
    "revision": "6c086ae4db78b16004295434baacce25"
  },
  {
    "url": "code/python/list.html",
    "revision": "55d6dac407765e9132f273f6a2042152"
  },
  {
    "url": "devops/cicd.html",
    "revision": "ece820b0ff68eccdecd4423ab097b506"
  },
  {
    "url": "devops/databases.html",
    "revision": "68007b6789aaa3b2be9bf1c88f1c437f"
  },
  {
    "url": "devops/docker.html",
    "revision": "61e464d16a7aabbf50193ae19430a64d"
  },
  {
    "url": "devops/index.html",
    "revision": "2b01b16f0ab9f7f0476a6ce590fe0d02"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "24744ea0dc9d4b7157fc27dedd7a495c"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "7c5467e9e1f00a3df5c9c3aeb91a003e"
  },
  {
    "url": "devops/terminology.html",
    "revision": "2479972f376009fab15b4f9c28b0cd02"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "dce13a67fa0b56503b5bf435d441fada"
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
    "revision": "6128ada12203dcb0f78599dbd6cad0fe"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "72c555c1f110c8141f2b75c0d8437f25"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "bbe86678759c3daec945fbe57962b651"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "e90d0437f24729c59ce0f5cac4476f8e"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "0cf18c5362acfd5df0f80a7bf8bd02bd"
  },
  {
    "url": "other/markdown.html",
    "revision": "f0ac382fd1ae853c2314838815d640f0"
  },
  {
    "url": "other/setup.html",
    "revision": "2ee1fe6d8e5716d15e212dae4cb259f0"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "d94b483e4a3415f87ead45376dc0b7e2"
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
