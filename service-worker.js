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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "709d874142074e190bfe4af066396caf"
  },
  {
    "url": "assets/css/1.styles.f28abe57.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/2.styles.2de172b9.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/styles.99cce338.css",
    "revision": "97c2ff9cfd788422d1f52fb878f44634"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f28abe57.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/10.16a05b55.js",
    "revision": "5897774bdc410c0b68f9e9f300c3c1d7"
  },
  {
    "url": "assets/js/11.f4fe28fa.js",
    "revision": "7d0e00834b79b1f0dded4bf450b8db07"
  },
  {
    "url": "assets/js/12.38d6d7a7.js",
    "revision": "69f95bdf068f7e65f3257884fc53c91b"
  },
  {
    "url": "assets/js/13.dbcc1320.js",
    "revision": "0909139cf522cbc8869170a54e86049c"
  },
  {
    "url": "assets/js/14.99491fc3.js",
    "revision": "225867101138425a422906dec02ee757"
  },
  {
    "url": "assets/js/15.5c4bffce.js",
    "revision": "8785fba1c06c1c8c7d9fde653cc5eb24"
  },
  {
    "url": "assets/js/16.6e9441a4.js",
    "revision": "77894f1d7a70d83af289d23ad483bd25"
  },
  {
    "url": "assets/js/17.800126d3.js",
    "revision": "65cc5bfb8f458db269ab6a9d6bf243eb"
  },
  {
    "url": "assets/js/18.b3068d58.js",
    "revision": "9c95e8354d0ba331adef5065963a0dcb"
  },
  {
    "url": "assets/js/19.97a8dd84.js",
    "revision": "7bc1239b8851bdcf2cc64e1a46ad1883"
  },
  {
    "url": "assets/js/2.2de172b9.js",
    "revision": "fc014b1035d55c4f2163ee7cfa5b7ea2"
  },
  {
    "url": "assets/js/20.921933c2.js",
    "revision": "c1f3b364a0b6c482f86dfe234443caaa"
  },
  {
    "url": "assets/js/21.3a92c789.js",
    "revision": "e75935621e8015fcdb88671f25ba7ac6"
  },
  {
    "url": "assets/js/22.6aeb28d4.js",
    "revision": "5ab6f8a7b0dfe24210bb891b4c74b3ec"
  },
  {
    "url": "assets/js/23.4cf5065b.js",
    "revision": "62f2a7c422c76cad88d8e4315a14b240"
  },
  {
    "url": "assets/js/24.923e7832.js",
    "revision": "758ce2c046ec7716d3436911cec220a2"
  },
  {
    "url": "assets/js/25.7d9668fc.js",
    "revision": "baa2186cef9318ab0ed9ebec5f7b7ab2"
  },
  {
    "url": "assets/js/26.ea54bb10.js",
    "revision": "8978dc8982b5aba4c2172ab0bb1b6db8"
  },
  {
    "url": "assets/js/27.c461919f.js",
    "revision": "0acbcbd3d325d5446897ef45377d55d8"
  },
  {
    "url": "assets/js/28.197a2744.js",
    "revision": "07d06ab7037b89833b8f177d28dbf073"
  },
  {
    "url": "assets/js/3.436de925.js",
    "revision": "f36f7f289b7d98a7d52947c4386d4113"
  },
  {
    "url": "assets/js/4.f8618dac.js",
    "revision": "0072418427ab09e3c578ecd1c4f0d06c"
  },
  {
    "url": "assets/js/5.cefd3db2.js",
    "revision": "0b914e6861c8d5b704bc019cd3f0b11a"
  },
  {
    "url": "assets/js/6.f2a1b570.js",
    "revision": "700250c1d8a705ffec7d265d42444340"
  },
  {
    "url": "assets/js/7.f3145748.js",
    "revision": "f6c3d9ad0faac9b89afa8760c1dd18bc"
  },
  {
    "url": "assets/js/8.4a6b8d65.js",
    "revision": "85c485a26ab31658a0b3940f33ad59e5"
  },
  {
    "url": "assets/js/9.00bb4c1f.js",
    "revision": "d1f70059cf3a0cd8062f5964e13e40ec"
  },
  {
    "url": "assets/js/app.99cce338.js",
    "revision": "7541a6e27555f7c1072abee21f4204d2"
  },
  {
    "url": "cloud/aws.html",
    "revision": "803b5c6479d8cbf6f608374c4566a7ab"
  },
  {
    "url": "cloud/azure.html",
    "revision": "7b97e301d538afbf4eaf93e915f23eda"
  },
  {
    "url": "code/bash.html",
    "revision": "bc6cbff4d2385fdbabcd7e50f0355f37"
  },
  {
    "url": "code/git.html",
    "revision": "63e11551d1aa30bb323f29a8d844d767"
  },
  {
    "url": "code/python.html",
    "revision": "a74b23cc82fc42bd4c43f6c28208eeab"
  },
  {
    "url": "code/python/class.html",
    "revision": "6bfe15258565bfa0fee55f858d1c4197"
  },
  {
    "url": "code/python/list.html",
    "revision": "506fafd24490b2dd3580a898d314cf6a"
  },
  {
    "url": "devops/cicd.html",
    "revision": "2755f43e374d8fd0aba1b2b80f73a40f"
  },
  {
    "url": "devops/databases.html",
    "revision": "f10b256c0fbb9f395b35df56d6e0ac10"
  },
  {
    "url": "devops/docker.html",
    "revision": "a24502566853592dfc120fb5fe702057"
  },
  {
    "url": "devops/index.html",
    "revision": "e4fbfd067dcf23549cc69c1d411d09b5"
  },
  {
    "url": "devops/k8s_features.html",
    "revision": "378d1b49a8ea8980cc84181e98a3b4eb"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "a024fb95ae2ae57fcefa16a8dc538ec9"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "97fa294b7a090711839794368cb918c1"
  },
  {
    "url": "devops/terminology.html",
    "revision": "4b895f3b4b16e3aac5239f192d86ccf3"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "9fb47b248f06bb2aaab4359da295e4b0"
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
    "revision": "6ad5c4149c1185bd22a9a756d1982f6f"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "b08d183f599e728ffc8c7fa968396b9e"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "94a1f10a8345f0ac173ccd19fe2f23a9"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "cc76517bbddb88633ccef65f3d7b6b75"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "226e9e4059ffa6c17f7c306c2337cf13"
  },
  {
    "url": "other/http.html",
    "revision": "ab365b9028d3bfb51dc29ce8258264c6"
  },
  {
    "url": "other/jq.html",
    "revision": "b9d8114b161da60faaafbb8ce9d848c6"
  },
  {
    "url": "other/markdown.html",
    "revision": "a73d6237c7d6bef658f4cb2adaeea94d"
  },
  {
    "url": "other/setup.html",
    "revision": "078709c9a5851693ec038f04c0350865"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "e7a9731a3b573408b805c6b8167a9f89"
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
