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
    "revision": "ea4372b8c985cf41ce70d7a3afe47510"
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
    "url": "assets/css/styles.cce9170e.css",
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
    "url": "assets/js/23.c48c317a.js",
    "revision": "c343d4c638ac33567537d290f51f0930"
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
    "url": "assets/js/app.cce9170e.js",
    "revision": "651f2b52b0f8f6d61d357ed89a0fdc75"
  },
  {
    "url": "cloud/aws.html",
    "revision": "c0b56ed21db31fabec11aac69bffddd9"
  },
  {
    "url": "cloud/azure.html",
    "revision": "d2c7a30fea4e1497bad1541a08796b12"
  },
  {
    "url": "code/bash.html",
    "revision": "7a4ef78c8ca7586fa1c83d1738bc2a35"
  },
  {
    "url": "code/git.html",
    "revision": "0819f2b18dc8426cddf2aee2f9c04ac1"
  },
  {
    "url": "code/python.html",
    "revision": "0b30b9073316c724f9efc98eabce8c0b"
  },
  {
    "url": "code/python/class.html",
    "revision": "5763141e1332488c88b4e7ce7588abc8"
  },
  {
    "url": "code/python/list.html",
    "revision": "a736056624ee00a87be19b28ebb7da89"
  },
  {
    "url": "devops/cicd.html",
    "revision": "12175e0b5a5e58d20f56b2c4b2064de4"
  },
  {
    "url": "devops/databases.html",
    "revision": "4269c26d079f381de2bff83401ba8631"
  },
  {
    "url": "devops/docker.html",
    "revision": "21e9bfaf0885a3d68547b44881a43233"
  },
  {
    "url": "devops/index.html",
    "revision": "2f53f1e22fa97a38935240e06f5dbefc"
  },
  {
    "url": "devops/sql.html",
    "revision": "f6f8fb31b4aab378fe6dd1854730932f"
  },
  {
    "url": "devops/terminology.html",
    "revision": "04ebcebe0e8e4f3ae95f086f54433e45"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "9cca58c5760415f4ae53c430e3b4dffe"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "ba75252b2100ef281e96e69664b21c87"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "2094a749a3132800c1e2c5f95d6bab36"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "32dafb7856ab72237bb6ba0c736270ae"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "14090fe909b1c802d4cf10fe119932cf"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "7d35b6e0ae230a86510ff14037a3f392"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "5023e80fedd71c056fbaa73df68e216b"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "14a628385f4299c2daf424b26822d8e1"
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
    "revision": "f23cdee229a9e6efb1e11852a3883f39"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "591b3f1a591fb24f3ae22e70868fc62f"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "be8630be1cd959bb73aa016ee5f79191"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "6ebf2cfeb59d87a39067361c6eae2472"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "844c2883ee9230be4e8fb52e9d087fbc"
  },
  {
    "url": "other/http.html",
    "revision": "13a2b4a5216243b707fbefdf0f793b21"
  },
  {
    "url": "other/jq.html",
    "revision": "cdee2580c2f1875e623198703659c4bb"
  },
  {
    "url": "other/markdown.html",
    "revision": "931aeb528b29cab15b275c177df72d61"
  },
  {
    "url": "other/setup.html",
    "revision": "56c9db1399b2e313d3facb1633d5d5bd"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "c835cf5653b5fcff69c9a000eb53d016"
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
