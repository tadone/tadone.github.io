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
    "revision": "8bf840a994ace51f3565557d9f9fc01c"
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
    "url": "assets/css/styles.e9f337b2.css",
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
    "url": "assets/js/17.f97d0bf4.js",
    "revision": "4c5aa9a2b4da92a19c66809ff608f18f"
  },
  {
    "url": "assets/js/18.9809b7a5.js",
    "revision": "73ae15a7ef0dc0809152f76d08f797d1"
  },
  {
    "url": "assets/js/19.738a7cd6.js",
    "revision": "125a8b11a4190f68d5e977e7b54867b6"
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
    "url": "assets/js/21.ae4e371b.js",
    "revision": "be45a7b0e553860a187b6fb6b66cd7af"
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
    "url": "assets/js/28.61600cd9.js",
    "revision": "1480f3393d1ec7ee6fdcd2721a20389f"
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
    "url": "assets/js/5.7e4e2970.js",
    "revision": "2db2c943587f30e2da8297e1c9788fdb"
  },
  {
    "url": "assets/js/6.43c927be.js",
    "revision": "7aacbb09989d038c7ce9e65cb883decd"
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
    "url": "assets/js/app.e9f337b2.js",
    "revision": "c416782e7dc3a030e43a9909afd27dd4"
  },
  {
    "url": "cloud/aws.html",
    "revision": "203e3e2ec94bcde93851d2280190ab47"
  },
  {
    "url": "cloud/azure.html",
    "revision": "44abaaa5bbcae280db98e0cab9c8cebb"
  },
  {
    "url": "code/bash.html",
    "revision": "8e1ad897c05d569ce93970a74f2fa269"
  },
  {
    "url": "code/git.html",
    "revision": "a6f9c23d1d7d16b1d19ca1ead0061f43"
  },
  {
    "url": "code/python.html",
    "revision": "d3f7c170776a408b0359f2de16b2ef16"
  },
  {
    "url": "code/python/class.html",
    "revision": "524791c29a47d572936a916f1fe6c616"
  },
  {
    "url": "code/python/list.html",
    "revision": "b1f30c335dd675ae525eb3b36cd2bd64"
  },
  {
    "url": "devops/cicd.html",
    "revision": "023fb87fff7074cdff6cbb8c91e53274"
  },
  {
    "url": "devops/databases.html",
    "revision": "e1f089f20f5bdf6d4d929c738057d00a"
  },
  {
    "url": "devops/docker.html",
    "revision": "346815632c14d9c1093ce76241c5c90a"
  },
  {
    "url": "devops/index.html",
    "revision": "d5bc0d0601a70ac8da8836bf6317acdd"
  },
  {
    "url": "devops/sql.html",
    "revision": "a44ed820dd169ec33619a695cea1e5db"
  },
  {
    "url": "devops/terminology.html",
    "revision": "e16f2d95c92eafb4e6a3efbc24d8c713"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "27f1368cd363efef002519978cb4373f"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "e1aa170f9e7f9300bb270536903fad25"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "16f1a816a84a2d47de1baa25d2c407fa"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "b75a2195cbc9c989d6387da5df4601aa"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "94bddad7bf470d36bd6061a02e4675b1"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "1be608f06eaba48da8b904d3e41feb44"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "f06dd755fee100836e898eeb51dedc4f"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "a885170bbc9398bfc3dd27b8b1d16ef6"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "b08302e7d584dee1571b3c3d1510c2b6"
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
    "revision": "98d88ca5dfb27f24d5129e1da55d8d97"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "584cfcf42e97c445d8d3cc3480c0a5b1"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "ea5a14216ff965bf51d04c9594df9628"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "bb0643b6ddd4205982c9c020f72093fb"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "7143fbb6db49f17fbacea5f0fa81a12f"
  },
  {
    "url": "other/http.html",
    "revision": "9ce7ceb170c6059da9b0c8c1c5c06bfc"
  },
  {
    "url": "other/jq.html",
    "revision": "4ea6704b90077b4412e5368e49a8a65d"
  },
  {
    "url": "other/markdown.html",
    "revision": "2aa7e95297a88f7998af2611c34ea190"
  },
  {
    "url": "other/setup.html",
    "revision": "ffb3026a947ca84035c3cdd1d1eb7e85"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "feca5391b95ee4e177c428f0aee4a0bf"
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
