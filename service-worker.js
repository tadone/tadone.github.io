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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "14508590b4c634b69b7b4a433979d8b4"
  },
  {
    "url": "assets/css/1.styles.f28abe57.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/2.styles.0b8a5f5f.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/styles.cbe5d356.css",
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
    "url": "assets/js/10.9b4a386a.js",
    "revision": "2edb792254c426729af6d4ec9fc8f9f4"
  },
  {
    "url": "assets/js/11.004f00a0.js",
    "revision": "e523cf65de17a01592e11c0ee4473065"
  },
  {
    "url": "assets/js/12.dd59f0d1.js",
    "revision": "59aa56b86b9ba6fe368410bc6d6c9811"
  },
  {
    "url": "assets/js/13.a0bd1e34.js",
    "revision": "5b85bef63873e6923716ddd58b53701b"
  },
  {
    "url": "assets/js/14.665be6a0.js",
    "revision": "a69fe2576b1a45a2c4e63a62804b6842"
  },
  {
    "url": "assets/js/15.bd648c3b.js",
    "revision": "ce0eed5e7622c5937869f9bbff7b04af"
  },
  {
    "url": "assets/js/16.bfb1fb53.js",
    "revision": "df327081dc3b2583a00ca48456d49fa5"
  },
  {
    "url": "assets/js/17.60ed8250.js",
    "revision": "57996a2388f6ca9e1f0c9d58facd07a2"
  },
  {
    "url": "assets/js/18.7af30070.js",
    "revision": "baf779048ccab0eaebd84cfc200192a5"
  },
  {
    "url": "assets/js/19.687e5829.js",
    "revision": "bd9c899e210343844e84ddcf6bfdc01f"
  },
  {
    "url": "assets/js/2.0b8a5f5f.js",
    "revision": "24be5b0ec087c5e9c55bff15903c8b07"
  },
  {
    "url": "assets/js/20.08419376.js",
    "revision": "37faa3ead82f2aedbb0820e2051a31c0"
  },
  {
    "url": "assets/js/21.7946e105.js",
    "revision": "f21faa83b03b2af005be3e8f04944b30"
  },
  {
    "url": "assets/js/22.0c5b21df.js",
    "revision": "de3bddd4c2c0b0e14a27d475f115ec6a"
  },
  {
    "url": "assets/js/23.c340a7fe.js",
    "revision": "d3678124909e3cfb4a284b8d60bb9ebf"
  },
  {
    "url": "assets/js/24.c0e98b5c.js",
    "revision": "899e21abf660961f642e065f5e818c3e"
  },
  {
    "url": "assets/js/25.66b6b395.js",
    "revision": "8d108a888ab0378fc4a15e34ed90e7d3"
  },
  {
    "url": "assets/js/26.80e406c1.js",
    "revision": "6ccec517d4fb666e5e6ef9fbea67ed23"
  },
  {
    "url": "assets/js/3.323285ac.js",
    "revision": "7bc0acbec6b291f13378e6e182162646"
  },
  {
    "url": "assets/js/4.a07393ff.js",
    "revision": "604b27adc156720f5700da73406f51fe"
  },
  {
    "url": "assets/js/5.15a429c2.js",
    "revision": "88ad9dc657030d22097885e6e3aef2ff"
  },
  {
    "url": "assets/js/6.65559d12.js",
    "revision": "b7d63a18610c999b2edabec43abd08d5"
  },
  {
    "url": "assets/js/7.12d4c3a9.js",
    "revision": "c68c1f97af3ee28ed52cbfffda3b1b5a"
  },
  {
    "url": "assets/js/8.8a7adc1b.js",
    "revision": "cdec6304c0c32d716bc6f73db7b2fe4d"
  },
  {
    "url": "assets/js/9.dbddf9b9.js",
    "revision": "ae553176e2921f9b6b10796e0ec79d2a"
  },
  {
    "url": "assets/js/app.cbe5d356.js",
    "revision": "6eb5c987a5dbc2b794203bbc12dd63d2"
  },
  {
    "url": "cloud/aws.html",
    "revision": "bac4d7098cdfc5d4d07f65bc9f8bdbc5"
  },
  {
    "url": "cloud/azure.html",
    "revision": "8f64633c2910a968f975cce8a9613299"
  },
  {
    "url": "code/bash.html",
    "revision": "6291887d3972cb0154795fcb9e953d97"
  },
  {
    "url": "code/git.html",
    "revision": "8ae36ad594930313c93023549ec523de"
  },
  {
    "url": "code/python.html",
    "revision": "1b127844d6e5974a4ceaedbb79c94085"
  },
  {
    "url": "code/python/class.html",
    "revision": "8d54b8f1824247d2fd64c81aee2ef4f6"
  },
  {
    "url": "code/python/list.html",
    "revision": "e98f142db426664d4cf1f91346c6901a"
  },
  {
    "url": "devops/cicd.html",
    "revision": "d368f5885fab52ab40aaa2b24a2ca157"
  },
  {
    "url": "devops/databases.html",
    "revision": "724e0d529e4a4d736081a1ece686ffdf"
  },
  {
    "url": "devops/docker.html",
    "revision": "e324cb9c1eaf8b1b0db60fd6372b3917"
  },
  {
    "url": "devops/index.html",
    "revision": "e6b2a11e7530694dfb69ec7e6bcb2512"
  },
  {
    "url": "devops/k8s_features.html",
    "revision": "263c855fbcd14017de3f59c01629742c"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "e4e2310da527b48ac528a6c27f1161af"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "b27b047a3c852e8649db2995502dc530"
  },
  {
    "url": "devops/terminology.html",
    "revision": "288d38b3a2c8c4dc652a092172ed2029"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "95987faa6f2078ff49a4d2d0ddf8635f"
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
    "revision": "d3e199e65ab45ee3c8b50952010315d6"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "08a86d93d8f4e3f244ec91cb287a97b6"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "33282c5482b58c49545669b11a5517ad"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "3f41a123e8964d3fbba107dc6d3a84e9"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "4fe6c55c2c46b7ff8b7c72d08f9eff2e"
  },
  {
    "url": "other/markdown.html",
    "revision": "6faf9f9885764eb0e84a87d5715c80d4"
  },
  {
    "url": "other/setup.html",
    "revision": "92b60e71a1b1fff7deec61630b38635d"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "0837ec687421671f0f68d4da297eadf2"
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
