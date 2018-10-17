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
    "revision": "e361c3feca0f0756ea68e15e91915fd3"
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
    "url": "assets/css/styles.5aa96e16.css",
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
    "url": "assets/js/18.a10cad9f.js",
    "revision": "205898d52f20d75fbbe1fb976cb74344"
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
    "url": "assets/js/21.8bb418fd.js",
    "revision": "1f7ea8e49c99799fbe7a43e7c4d67315"
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
    "url": "assets/js/app.5aa96e16.js",
    "revision": "2657fe5fc85228354c66d94033fd9c46"
  },
  {
    "url": "cloud/aws.html",
    "revision": "1180914e39bc3aa4cf2b6848d4af03c6"
  },
  {
    "url": "cloud/azure.html",
    "revision": "2a25864e3d84aeeae44c467123f240d3"
  },
  {
    "url": "code/bash.html",
    "revision": "86d7ae44a43e7aea8c10ccc005ac2874"
  },
  {
    "url": "code/git.html",
    "revision": "f2072b1aad457c3901700da72b8ebd9f"
  },
  {
    "url": "code/python.html",
    "revision": "6ac562ec048de741c229e416d38de55d"
  },
  {
    "url": "code/python/class.html",
    "revision": "6f70437d43be43b886945301754c790f"
  },
  {
    "url": "code/python/list.html",
    "revision": "20eea5e42d5c6664a1cb808fdc85d6b4"
  },
  {
    "url": "devops/cicd.html",
    "revision": "47ccdb846b8592e33a0ff56d308a5699"
  },
  {
    "url": "devops/databases.html",
    "revision": "a4ff45763f57bcd5d3de438e7cacd4b3"
  },
  {
    "url": "devops/docker.html",
    "revision": "2ffafb3fd6fe7dd83bfe8340711a92ca"
  },
  {
    "url": "devops/index.html",
    "revision": "ea66184f6541b71abb3839f73190a1a9"
  },
  {
    "url": "devops/sql.html",
    "revision": "f8837d67508d18dd29da8f25e4e09069"
  },
  {
    "url": "devops/terminology.html",
    "revision": "c25d91ff2bf9ebd1892686f09282d1b7"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "2cd2fbcd5886750105efbae7201f70ac"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "9daeb2be60f93aada68d60973b64da01"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "7134bf517ca7664cceb0e9ae1275353f"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "890692026e1164eca9745de09722b91a"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "a7b8ef2390910e08c246b1b01ee169fa"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "eac8aadebd7a81565aed629c7c61717f"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "9c89d8cacca9a5c6a59fba5c21dbb14f"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "b2f9bbdba7283b4b926f9e4b21d049b2"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "ce15a72aed1752d239dbc389e28f4f0b"
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
    "revision": "73f0694e8f4cdbb3e0360a31afd6a5b9"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "f2d6027fbe091832062a66d168e57a8d"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "26a116f79b4230843c2592a76d1323bb"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "2a68a695ce395d97e0f3b80b5427e024"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "a743d6a2fcb9db66a4e3216efced2452"
  },
  {
    "url": "other/http.html",
    "revision": "e13453629978d36640067f0f233caef0"
  },
  {
    "url": "other/jq.html",
    "revision": "46c630f2528cff7be3d34a551170f1f4"
  },
  {
    "url": "other/markdown.html",
    "revision": "7ddf2d98cea618c02777ac67564b618c"
  },
  {
    "url": "other/setup.html",
    "revision": "6bc453528f945796201a36b80e8bf311"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "b3595da4e4b4f9fc9686abab0ca08819"
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
