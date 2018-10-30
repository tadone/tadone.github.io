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
    "revision": "8dd2adfdeb9a59eeb8a1f1aff9a723a2"
  },
  {
    "url": "assets/css/1.styles.8129c0d7.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/2.styles.c5aa97a7.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/styles.617d1252.css",
    "revision": "97c2ff9cfd788422d1f52fb878f44634"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8129c0d7.js",
    "revision": "3abddab7e5ddf7560ece92fd6b8fa86d"
  },
  {
    "url": "assets/js/10.87990c44.js",
    "revision": "a6523844eb496c383b27f6b82f03039e"
  },
  {
    "url": "assets/js/11.5958ff09.js",
    "revision": "1c2ba9a4be36cff6a39c210961f22ce7"
  },
  {
    "url": "assets/js/12.7b198ceb.js",
    "revision": "34832c4e2d54077d4b8e7adf6ce28a99"
  },
  {
    "url": "assets/js/13.f95562cc.js",
    "revision": "6b8c1dafabe0f2de4da4286280a6928b"
  },
  {
    "url": "assets/js/14.e9d1e1b1.js",
    "revision": "9e22e5ef5c2a220da4e88cb0f34b7675"
  },
  {
    "url": "assets/js/15.2778f12e.js",
    "revision": "2f9f1578f28d235e9a586a88b7d43584"
  },
  {
    "url": "assets/js/16.0f49bc38.js",
    "revision": "ee3038bbd8f17eca5390e39a918cd784"
  },
  {
    "url": "assets/js/17.3487865c.js",
    "revision": "cbbddaa33447eb17624c3d32faf09049"
  },
  {
    "url": "assets/js/18.c72ee485.js",
    "revision": "c2c671130862d4ede14fcb0a9f3caf18"
  },
  {
    "url": "assets/js/19.53117c99.js",
    "revision": "37286f2da8ce2c46d53e17160bc986fd"
  },
  {
    "url": "assets/js/2.c5aa97a7.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.e10cff6d.js",
    "revision": "e2983aaba42469e522b8dd97b2e13ecd"
  },
  {
    "url": "assets/js/21.88768c3b.js",
    "revision": "5de897e4ebeb4e42e7763f39d835d666"
  },
  {
    "url": "assets/js/22.7da80cc2.js",
    "revision": "8d2fdc0d78e04186e134bb0f9f5487d7"
  },
  {
    "url": "assets/js/23.08c220f1.js",
    "revision": "076f2d119eddf065896cdd74e0c8164c"
  },
  {
    "url": "assets/js/24.982e4c28.js",
    "revision": "59cbfa9c8ca84a173e431ed3bb0fd27f"
  },
  {
    "url": "assets/js/25.4871135d.js",
    "revision": "71466f8bd574a92a151e86efd4477eb0"
  },
  {
    "url": "assets/js/26.461e2960.js",
    "revision": "7e61a01bec38575a156f63be0ba67270"
  },
  {
    "url": "assets/js/27.d9b6a1b4.js",
    "revision": "8886617213876a3186e850e678cde90b"
  },
  {
    "url": "assets/js/28.c9605504.js",
    "revision": "b9b02e1db1860e23b781c0db581b0e88"
  },
  {
    "url": "assets/js/29.c558d31c.js",
    "revision": "8487d17a496facb0d46d468ed31c7a94"
  },
  {
    "url": "assets/js/3.7a7c2ada.js",
    "revision": "fc02404820693b6c0a1c4467bf651d55"
  },
  {
    "url": "assets/js/30.303399e1.js",
    "revision": "e3cfdd6f9fc2c949005e3febd477e50e"
  },
  {
    "url": "assets/js/31.06cc4274.js",
    "revision": "5b2115468e518a2a9d047a788ed8f5ca"
  },
  {
    "url": "assets/js/32.1ce7e320.js",
    "revision": "2235bda3dee555dddbb070a47ded0769"
  },
  {
    "url": "assets/js/33.e2469a9e.js",
    "revision": "0dc497b08cb39a5728d68968cbb57ea7"
  },
  {
    "url": "assets/js/4.3273090a.js",
    "revision": "f75cda27a8b8fb877433a114f23b1a16"
  },
  {
    "url": "assets/js/5.64c754e9.js",
    "revision": "761d6eda63caa45953a408122290ba5c"
  },
  {
    "url": "assets/js/6.9ba55a73.js",
    "revision": "7708036f9b2be6089081a2cdde2d0ee1"
  },
  {
    "url": "assets/js/7.ccc80a46.js",
    "revision": "582f7e692e8053297ca72299dc4549fa"
  },
  {
    "url": "assets/js/8.bd6da320.js",
    "revision": "28e873ab9c810e8918d4fec1947603bf"
  },
  {
    "url": "assets/js/9.ef3fb516.js",
    "revision": "ebecfe561f43cfc05f1679d14f955ca2"
  },
  {
    "url": "assets/js/app.617d1252.js",
    "revision": "e22afdddf7d5e3523e499494d6e2d728"
  },
  {
    "url": "cloud/aws.html",
    "revision": "51f2a470d50cb92badf41cb200f67364"
  },
  {
    "url": "cloud/azure.html",
    "revision": "8419ccea8e886f25a0b8b2027a1550d1"
  },
  {
    "url": "code/bash.html",
    "revision": "9df82562b13b7ef0738a9dbcff67d3f9"
  },
  {
    "url": "code/git.html",
    "revision": "fb7c3efe6afe6a841f218f20b85de34f"
  },
  {
    "url": "code/python.html",
    "revision": "4b6723dba40dd79b64bf68b65a512a51"
  },
  {
    "url": "code/python/class.html",
    "revision": "874a9feef2e392ae91cd7fd75a4097d4"
  },
  {
    "url": "code/python/list.html",
    "revision": "053701d6e2675fdd04ea0f9d6dbeb911"
  },
  {
    "url": "devops/cicd.html",
    "revision": "80f18fa541641cd9f9eda0744397ce13"
  },
  {
    "url": "devops/databases.html",
    "revision": "2e167bb215edb44f5d8ff53d8226e235"
  },
  {
    "url": "devops/docker.html",
    "revision": "d04481bcdb8195a7423e2923bcb66b96"
  },
  {
    "url": "devops/index.html",
    "revision": "470f858f761c772de14b3e995eac27df"
  },
  {
    "url": "devops/sql.html",
    "revision": "c59478629ca81bf9ab2369fa489342e9"
  },
  {
    "url": "devops/terminology.html",
    "revision": "c99cd4832c859f7a49c9541cee06dc2e"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "c21944fbfac6bafc3a3f5bd5b60c12f6"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "e8e1c4e4f4e6c74444f21e8f85c3487a"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "12e5725ebb17567378d4e74b6cd810ab"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "c70b571b078eb4f8fbd9453c1737bf1c"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "0a0147d85a3a4a9eb178536e8d670ce6"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "e2917f3465272dab8da5a304240544e7"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "5f696c2b85d88d85eb5e3d3542155cc0"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "b220f22eeb03bbd8ee8500539b226832"
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
    "revision": "8929e78f9a7971e739afc3859d3426a9"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "0c72e181f04687eafa9218cead1343bb"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "e8b9f26e4a27257358f11c2e283ae848"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "159d920d0402e91a6b69901e72da32e1"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "b0e35fd7e9268049379efe22a4401bb7"
  },
  {
    "url": "other/http.html",
    "revision": "bdc5bb36e7888f44642fa97c0578452e"
  },
  {
    "url": "other/jq.html",
    "revision": "6c3bcd7b0b8ecfb033849a2aa271833e"
  },
  {
    "url": "other/markdown.html",
    "revision": "c75c80a802a10a24f6a19999b037ee3d"
  },
  {
    "url": "other/setup.html",
    "revision": "64c791b726c181185aab0921d25ed187"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "d687a7ab67db8cfc900eb28ffb5461d7"
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
