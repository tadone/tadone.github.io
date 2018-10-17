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
    "revision": "87755ef909cce73ec76c0ce8e2ef4afc"
  },
  {
    "url": "assets/css/1.styles.b381e534.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/2.styles.117645b2.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/styles.00e27f98.css",
    "revision": "97c2ff9cfd788422d1f52fb878f44634"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b381e534.js",
    "revision": "aa0a3e3ca70cfb3cbf1c8c7dd2c544d9"
  },
  {
    "url": "assets/js/10.81170a9d.js",
    "revision": "168096b733215cf62ba3a737aa9786e4"
  },
  {
    "url": "assets/js/11.f3b63aa3.js",
    "revision": "f4a0d2327afcca0b1a0897ab5241ada1"
  },
  {
    "url": "assets/js/12.1db942a0.js",
    "revision": "ebad390a05e91d6cfeae0f3e1c9b2c15"
  },
  {
    "url": "assets/js/13.39221676.js",
    "revision": "f810253383ef11369b6f8f70776f110a"
  },
  {
    "url": "assets/js/14.f59d9620.js",
    "revision": "46023bfe7925167f068896805765be9b"
  },
  {
    "url": "assets/js/15.2ea851e2.js",
    "revision": "9da6e9aac85a2402f876cdc710303937"
  },
  {
    "url": "assets/js/16.c9fc3453.js",
    "revision": "0e59cfffffe881e897d44e70291c0fa9"
  },
  {
    "url": "assets/js/17.a0509b86.js",
    "revision": "74b7ac6d07f2db7d28eff6a6faa72b55"
  },
  {
    "url": "assets/js/18.9809b7a5.js",
    "revision": "73ae15a7ef0dc0809152f76d08f797d1"
  },
  {
    "url": "assets/js/19.0a4ac3e1.js",
    "revision": "8b2fd796e710fb45a3a589544d0cedde"
  },
  {
    "url": "assets/js/2.117645b2.js",
    "revision": "11cc3b4f977780b929495607ed75ed59"
  },
  {
    "url": "assets/js/20.b1738c0d.js",
    "revision": "36367bef9c29d3ff0eb6ed9d81399755"
  },
  {
    "url": "assets/js/21.1ef1142e.js",
    "revision": "b634ed88854b6ea0919a31c7cf1112ad"
  },
  {
    "url": "assets/js/22.3de5c086.js",
    "revision": "e6e88a0fd6251262c87974d35150987d"
  },
  {
    "url": "assets/js/23.8cc78002.js",
    "revision": "f6f44594c38a574ca0d6d157364fc584"
  },
  {
    "url": "assets/js/24.4f4b0bdc.js",
    "revision": "4dcd829ba9b4376c66879a770f63200b"
  },
  {
    "url": "assets/js/25.19e77aa6.js",
    "revision": "cfefded6c141001780254d5728d022f1"
  },
  {
    "url": "assets/js/26.ef76cd52.js",
    "revision": "97ad11608426e8fe3a4b063197ef1739"
  },
  {
    "url": "assets/js/27.4e2d44e6.js",
    "revision": "8ec9c81fe3b5bb5d38278422d114fb8f"
  },
  {
    "url": "assets/js/28.0193cd38.js",
    "revision": "9c36accc35cca2018fe40ff6c39c7680"
  },
  {
    "url": "assets/js/29.ca40e9b4.js",
    "revision": "6a38cf1eb4375e9760d75f884714995e"
  },
  {
    "url": "assets/js/3.782202b1.js",
    "revision": "a75af2028fafdce4e59d36f9f0926cf9"
  },
  {
    "url": "assets/js/30.5471b40e.js",
    "revision": "30e83007764b138801f390dd7615a9bd"
  },
  {
    "url": "assets/js/31.d7bc4934.js",
    "revision": "e378ac595de61e7314e5335c18e78f86"
  },
  {
    "url": "assets/js/32.89422ce1.js",
    "revision": "7d095a90b58f99a7720b48e514385349"
  },
  {
    "url": "assets/js/33.01f0c270.js",
    "revision": "a3fc8407288284963d8cd3b9d1678da1"
  },
  {
    "url": "assets/js/34.60b489eb.js",
    "revision": "23327ef2a1ca6a7bb60537d3b95f5ecd"
  },
  {
    "url": "assets/js/4.a6a5d4e3.js",
    "revision": "3e5ed5a41d1e475a4d1dfccb69b61e3f"
  },
  {
    "url": "assets/js/5.6f82863a.js",
    "revision": "9d24610b608fff071e80a303e8b79f55"
  },
  {
    "url": "assets/js/6.655e6998.js",
    "revision": "5e1470b86507c20b869acb3590a8bbca"
  },
  {
    "url": "assets/js/7.006efceb.js",
    "revision": "0b3d44ec4cca7a1d465f59f53383388e"
  },
  {
    "url": "assets/js/8.b332af39.js",
    "revision": "202d6f659f4a41414368c4089af68be4"
  },
  {
    "url": "assets/js/9.772e9d0c.js",
    "revision": "987c5b889833c28998073b2dfe7cab8f"
  },
  {
    "url": "assets/js/app.00e27f98.js",
    "revision": "e92157fcd1280cbe5acb8e40e0a3e868"
  },
  {
    "url": "cloud/aws.html",
    "revision": "ccbc7c8c24258c6aeb042e66af70b608"
  },
  {
    "url": "cloud/azure.html",
    "revision": "a52a789e1a15a1a197407564f47f5448"
  },
  {
    "url": "code/bash.html",
    "revision": "92c9a86f21fd0f14b2d43f16696e0acb"
  },
  {
    "url": "code/git.html",
    "revision": "eb81b4956c5e14ba62d7dc9cfa9f5495"
  },
  {
    "url": "code/python.html",
    "revision": "ce3d120a0959f5ad66977770159a08fa"
  },
  {
    "url": "code/python/class.html",
    "revision": "3a7a445713a969155e6f0f4d67673b0e"
  },
  {
    "url": "code/python/list.html",
    "revision": "5dab7a85e12b7f92d6bd0dfaaa003645"
  },
  {
    "url": "devops/cicd.html",
    "revision": "a67413a63146375679eb27e745c75cf5"
  },
  {
    "url": "devops/databases.html",
    "revision": "54583daab527e65c5d148e41ed075836"
  },
  {
    "url": "devops/docker.html",
    "revision": "f361922bbf8f2995334586b3ac7c9e6e"
  },
  {
    "url": "devops/index.html",
    "revision": "fd9cd5089b2196c074bd7651fad00f7d"
  },
  {
    "url": "devops/sql.html",
    "revision": "35efa4346ca5c53b2de2d0f1a55f2632"
  },
  {
    "url": "devops/terminology.html",
    "revision": "773e743c6539126d11bb89d2d884b9d5"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "759749d7e7fe0c54e17f5dd008ebeaf8"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "4087bdc492cee0c2f7a896067f7666c3"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "34366f55c3f19b6f14ae41366ec50361"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "73dfe451b7766ba99ce7e6cf3c9596cb"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "ae213d1ff36b5ae0491f069cfa646c1e"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "03baaf8050ad1821050fc8f7dd0035cf"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "03f1d87b979275386c51f4eb4ae47b6e"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "21cc5de98fea05bd4d62ca466a92b2a4"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "32e78d41c2d4d7116a52b322c1d07748"
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
    "revision": "df6b00737991969747540b137668d9d8"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "1eff7456fcdeb753f6a18f000b106944"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "78ac6280e79b7939151ded1648f1241f"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "389fa28ef01b97517bdd86f2f1cd50ce"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "852875348212998cea200049c36ccde9"
  },
  {
    "url": "other/http.html",
    "revision": "69b6ece1829ba0a835a0d9dc325c86fa"
  },
  {
    "url": "other/jq.html",
    "revision": "c72a607b96162da9e6e62c5c5d19a242"
  },
  {
    "url": "other/markdown.html",
    "revision": "07a34ef9f001b9f6127f31085a502d53"
  },
  {
    "url": "other/setup.html",
    "revision": "0894a142a4ef2ababa5ad86f039956c3"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "77e25a8e537b6a734bf0e378776f59c5"
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
