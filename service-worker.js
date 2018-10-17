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
    "revision": "5119b1cce2572029988715505b4d52b1"
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
    "url": "assets/css/styles.8ced4ed7.css",
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
    "url": "assets/js/18.de168fff.js",
    "revision": "8a156981cce9dab3bf0962d056526ea2"
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
    "url": "assets/js/21.5442c8ed.js",
    "revision": "62b5e7058eb04f86da25c37e7b1305d8"
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
    "url": "assets/js/app.8ced4ed7.js",
    "revision": "b3a1d3e483d575b44bc17c49eb4c9b46"
  },
  {
    "url": "cloud/aws.html",
    "revision": "9d87d5f5b5b15b66e105fe2aac8e9713"
  },
  {
    "url": "cloud/azure.html",
    "revision": "2c2e6c831b0edeeafcc5d1e884fc2421"
  },
  {
    "url": "code/bash.html",
    "revision": "20a1e0051f270b41f3204e05029e605c"
  },
  {
    "url": "code/git.html",
    "revision": "f3ecbc5b4493c1a7e185ec4361637d2a"
  },
  {
    "url": "code/python.html",
    "revision": "36622bf4455efeaabe11357dbeecdf81"
  },
  {
    "url": "code/python/class.html",
    "revision": "a44e1906590d1b1f92d3eb90f94ee90c"
  },
  {
    "url": "code/python/list.html",
    "revision": "793103ac4fb1a794edfab587b62e1f08"
  },
  {
    "url": "devops/cicd.html",
    "revision": "9a77a727b7860086b9a9148dbf2476a0"
  },
  {
    "url": "devops/databases.html",
    "revision": "6f69831d328fe1cb4f7bed6f221a629b"
  },
  {
    "url": "devops/docker.html",
    "revision": "c68fe7cf7235f6d126377993e86caf98"
  },
  {
    "url": "devops/index.html",
    "revision": "cf7521cfe92643e0a8c8d46549441473"
  },
  {
    "url": "devops/sql.html",
    "revision": "9bd20c4f6b51d1c8dfbeb3549ab82c23"
  },
  {
    "url": "devops/terminology.html",
    "revision": "b4255ea8f4e9ed0c1255ea9a02a17987"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "322aec26b78866cf4d61e88bdd5ca0bf"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "e4d1cf3be793cd17d4a44ff93378b5c0"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "d642f93137d6d6a42929dcbd426fb074"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "4d654113264bfd75a0fee14cf0c297f7"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "fce82bea231fcbec4cc1b1dd239f0f38"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "874adc20a9ec76e8addabc381143bdbd"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "b8179de24e05991171f4feb4742f9ca1"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "0aa6c49da23f6fe51ab8e29b0032ffbe"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "79bcb846a0e1fff8298f5d1e033c526f"
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
    "revision": "16d37c1713fff794e8deb4e1db5d9a7b"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "e4e4fcd511498d33268303859dfcfaee"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "0ad5af24c06a01ed7a12e3ce36604587"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "2d4d8e18937eee798e8992669e8eae7c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "0b793578e8be865afb87be664278ab30"
  },
  {
    "url": "other/http.html",
    "revision": "980cd2c928814355afd09b6dc6d739b5"
  },
  {
    "url": "other/jq.html",
    "revision": "617152ba243c904f1915d0be0be200f6"
  },
  {
    "url": "other/markdown.html",
    "revision": "59c0e2a1ff7adcf86c342e5ae32675db"
  },
  {
    "url": "other/setup.html",
    "revision": "433365760e2824f388d4a56867b3e121"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "1f6ca4c48c223b26ea1ef281772855b9"
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
