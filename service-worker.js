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
    "revision": "abf580e40c45dfbf769ae2415f083108"
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
    "url": "assets/css/styles.977a7cd8.css",
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
    "url": "assets/js/app.977a7cd8.js",
    "revision": "7a3357c4f557578d4079ad800e6b1f97"
  },
  {
    "url": "cloud/aws.html",
    "revision": "74c8cf5380c9ce1ae7524a687adf407a"
  },
  {
    "url": "cloud/azure.html",
    "revision": "dd36914976d3b89aea7e2b0c7d53ea42"
  },
  {
    "url": "code/bash.html",
    "revision": "b206f6897eccf258d1b2f3fb02af43d0"
  },
  {
    "url": "code/git.html",
    "revision": "3a824b6c92edd949176233c8b818f504"
  },
  {
    "url": "code/python.html",
    "revision": "b19031b7d0c4b11e74a9f5724adfbf8d"
  },
  {
    "url": "code/python/class.html",
    "revision": "b65fc335d9e910ab71c0db1582656f16"
  },
  {
    "url": "code/python/list.html",
    "revision": "eed08a925b88c0daf2feaa9bb51bac16"
  },
  {
    "url": "devops/cicd.html",
    "revision": "a80d329f3c9c62ed30e9957184e6f28a"
  },
  {
    "url": "devops/databases.html",
    "revision": "2c95aaf220a12f5eb593e5753cc5920d"
  },
  {
    "url": "devops/docker.html",
    "revision": "83fcd262fcde88e9258a5c17eaed502f"
  },
  {
    "url": "devops/index.html",
    "revision": "f77de87f54c8e0f23b0f17cc002b3001"
  },
  {
    "url": "devops/sql.html",
    "revision": "d41be431cfdb64787257ab95316cdae0"
  },
  {
    "url": "devops/terminology.html",
    "revision": "8bad54bd1bbe9f24986ee8561b76a43f"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "dbda8df17d9b6fea49adef4f3281b3d4"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "26e17f307a8ee40ef418a10e5601855b"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "7a9c3cbba97715e818826e5e39d17fd4"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "2b9bd5fbfb7fc07f8439ca25d46d012b"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "089bdddcdff146f4f9c60ada7c8968d6"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "b47f0a92cb1341d6b5b87626b4c8cd63"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "d0ed8ef305f77731aafb1e810b514ebd"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "ca22f7e670a17659ded3dd7e6c5bb245"
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
    "revision": "6de12afade06d5ae91c47d98ea5aaf1e"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "609ebfce26c5aa4305dc4d81bafcf735"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "eb3dd4786f288c15fd39293fb6872fee"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "674b35214b3f2477af84df1d70a5e5c1"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "d72bb4799dda8d6eeb4676c128cd2208"
  },
  {
    "url": "other/http.html",
    "revision": "9eea73799748a8a8afec95edb90d1256"
  },
  {
    "url": "other/jq.html",
    "revision": "721ee54158da6c0a16829358771c27b2"
  },
  {
    "url": "other/markdown.html",
    "revision": "edd7160565a5780fc318e8a0659ca192"
  },
  {
    "url": "other/setup.html",
    "revision": "b5f40a725561b163c7a72abf5021efa4"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "519747376382ea457cf60a37142eb3f1"
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
