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
    "revision": "832c8ff03f9e62c43afbc3957abf20a3"
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
    "url": "assets/css/styles.90a15130.css",
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
    "url": "assets/js/app.90a15130.js",
    "revision": "c79eeb0d98d2ff5c4bef9e10cab70158"
  },
  {
    "url": "cloud/aws.html",
    "revision": "7f0bbe6e75bfc4fbc9c26a224f6c0bef"
  },
  {
    "url": "cloud/azure.html",
    "revision": "204c550126989e88ce29149d83c99af2"
  },
  {
    "url": "code/bash.html",
    "revision": "021037bf7cad0b7324e99f23897ad1f4"
  },
  {
    "url": "code/git.html",
    "revision": "2fafb46fdca1da04f79f86f4c1a46ddb"
  },
  {
    "url": "code/python.html",
    "revision": "263921e9cc174b2c52c363f32f53f832"
  },
  {
    "url": "code/python/class.html",
    "revision": "7b70c7937099ba6f5ba0c096d5a7be3b"
  },
  {
    "url": "code/python/list.html",
    "revision": "560bfc23483b9e58d0f8e4b52e977328"
  },
  {
    "url": "devops/cicd.html",
    "revision": "ae214a6fa6be4dd000f829e3283d7171"
  },
  {
    "url": "devops/databases.html",
    "revision": "12e3527abb0b8efd6f957e2b7979f90c"
  },
  {
    "url": "devops/docker.html",
    "revision": "0d559b9b2a367fa3dca9629434362c58"
  },
  {
    "url": "devops/index.html",
    "revision": "9861b9dc86176bacbe39e062cb4b734d"
  },
  {
    "url": "devops/sql.html",
    "revision": "98dd17144d5ba6ecaa47571f1797f06b"
  },
  {
    "url": "devops/terminology.html",
    "revision": "3e19e02a737135b4216e1ea1a18ec4a4"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "1a2a5dc9ab457539afc40ad1377eb85a"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "fb901dc260f8bed8677ac8e71a5a6e74"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "ab56d226ca7fd7e643d58acbd5d1edb8"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "a952e878e764db929e189b5d0c546b2a"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "b031ce214fb9fa56293cefd433e89b58"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "3e2bafc6bb6d0e47485aaecc83ce3398"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "2a312094c14f861d0c9894b31ea81d7f"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "a665bbc4bd9614e81ba36d8469231c24"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "3f106035b10b5a00d7b9a1f880df2783"
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
    "revision": "56d3462082803758b19e8f5eaa8c4876"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "bcf6680e32116e5d0e55fb049009b3f8"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "b792e4abbb4d5a476bd1a66e992ae2ae"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "451e8d2fbc962af2689aa67c2c41afc3"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "be190a231eb16b87548b8e7b7a4c018d"
  },
  {
    "url": "other/http.html",
    "revision": "2f0412d58ad53e350810e5e3662fcd1c"
  },
  {
    "url": "other/jq.html",
    "revision": "b4f8d8a5414beda5b58806ab58c4102e"
  },
  {
    "url": "other/markdown.html",
    "revision": "1c95764b40fc5c7bd0a359ff19b5a52d"
  },
  {
    "url": "other/setup.html",
    "revision": "fc2d79d49e7208a43fd6dba5a66bda99"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "30f08f0e73573752a98bd60e3f7fc898"
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
