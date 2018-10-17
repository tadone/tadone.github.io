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
    "revision": "b4dd3371c700aa2832d098e2ff4ce2a8"
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
    "url": "assets/css/styles.ce0aede3.css",
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
    "url": "assets/js/17.0fc1a8bc.js",
    "revision": "9ab4560f726f4ca8faba0eff0fef5bcd"
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
    "url": "assets/js/21.61da7c69.js",
    "revision": "8d4e28735a89c7a1e877595e23d43a09"
  },
  {
    "url": "assets/js/22.68fca1ac.js",
    "revision": "c9d760105b25e1d37b49cbc458564771"
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
    "url": "assets/js/app.ce0aede3.js",
    "revision": "af380ae11dbb942f2c6469bed65feecb"
  },
  {
    "url": "cloud/aws.html",
    "revision": "936f7df22031cf58afe6447564031ab3"
  },
  {
    "url": "cloud/azure.html",
    "revision": "378441bf0e3118d50c73a618bf0256e7"
  },
  {
    "url": "code/bash.html",
    "revision": "6eab1fd32243b7ffe25d675a58f0174b"
  },
  {
    "url": "code/git.html",
    "revision": "14a3bdff85b26dac4d625a60829e3571"
  },
  {
    "url": "code/python.html",
    "revision": "423a7d2c3f24fe8ab79dede0e96023f4"
  },
  {
    "url": "code/python/class.html",
    "revision": "c1a73c9a3394f7a271e90ebbd552f0d5"
  },
  {
    "url": "code/python/list.html",
    "revision": "ac16d4b0d1abaff03942b1330fa55329"
  },
  {
    "url": "devops/cicd.html",
    "revision": "e74dfec2490f32045c69146ecf68dec7"
  },
  {
    "url": "devops/databases.html",
    "revision": "427247bc256606f7fa6225cf9673d6e4"
  },
  {
    "url": "devops/docker.html",
    "revision": "7c874317c614ee00c77bae222d2c4a49"
  },
  {
    "url": "devops/index.html",
    "revision": "a2c630e38e91fd466f94beb30d05cb33"
  },
  {
    "url": "devops/sql.html",
    "revision": "05dfc97a48381619c7465c5a2d7c1708"
  },
  {
    "url": "devops/terminology.html",
    "revision": "e720b83e97ad36532c613bc434138e39"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "e236080a3da92142e16d5455246a5cdd"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "67236c3956fc7eb44a8ec0fc7a7bcd80"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "f5c30696b9ea221088bd556510992632"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "60f922b85d7e09ce004da0c714d90848"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "3c3c6e3c6dac0cf3dd9c30d1fd60dc24"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "45f3b1eedb4baaf0fa1e7da3ff84e25b"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "908aad6519a9c98dc9f751a86954a2ca"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "58d04b1feae4c33281d1b96bdcb9ff44"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "0d4c1bb7688d8bb5659d2fd70fbb801b"
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
    "revision": "b9c74a4525a215ebb2453ad7681e3f1a"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "3331dfed7f3164fb5fd0244eda6ab566"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "05fddf4e371f497bd78c74def058dcc2"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "79b71e0968587867e0f92770262dd9c4"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "adcb9c99e2b39afc77db90bff0f21743"
  },
  {
    "url": "other/http.html",
    "revision": "e14bbb6059e6109f0b2096dbf7f95591"
  },
  {
    "url": "other/jq.html",
    "revision": "10dc8bbe621eab476f304a8975903204"
  },
  {
    "url": "other/markdown.html",
    "revision": "5e04cc61005ad3a88545db3339ab7941"
  },
  {
    "url": "other/setup.html",
    "revision": "3f55d6ebc3d301c942e1692f0912f698"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "609b83f9c450a2ae21078984d683a835"
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
