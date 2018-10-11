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
    "revision": "af47fa62d8a1b481ab49e17d6af42f20"
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
    "url": "assets/css/styles.9333a5b2.css",
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
    "url": "assets/js/19.d9d02bc0.js",
    "revision": "361e8767c231c7a5e1d8dec240cb35cf"
  },
  {
    "url": "assets/js/2.117645b2.js",
    "revision": "11cc3b4f977780b929495607ed75ed59"
  },
  {
    "url": "assets/js/20.6b82e7a5.js",
    "revision": "43dede005b482c4b0990ff2d5749b8a5"
  },
  {
    "url": "assets/js/21.f3e81f8e.js",
    "revision": "1bb5f13bf2ba5cac31fba2810bbc3c49"
  },
  {
    "url": "assets/js/22.68fca1ac.js",
    "revision": "c9d760105b25e1d37b49cbc458564771"
  },
  {
    "url": "assets/js/23.f610ca52.js",
    "revision": "b098931e67387e419f3eabd32cd017c0"
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
    "url": "assets/js/6.4e69f499.js",
    "revision": "5704b70b7d49ad0d0a6ceb5d7c0d2e09"
  },
  {
    "url": "assets/js/7.ee03ef24.js",
    "revision": "14b31931386615bf1fb353fcd77449d1"
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
    "url": "assets/js/app.9333a5b2.js",
    "revision": "2ad07773c85900973476fce81bc04e79"
  },
  {
    "url": "cloud/aws.html",
    "revision": "31cd32b7daa856469e7bb92ce8cf3c28"
  },
  {
    "url": "cloud/azure.html",
    "revision": "6e3b5ace0f8537a0841542936e99a6ff"
  },
  {
    "url": "code/bash.html",
    "revision": "85121c9daf6982df3debe3d09de1a1e6"
  },
  {
    "url": "code/git.html",
    "revision": "3c9e72ec4ebe86f8c93505e78f4f365d"
  },
  {
    "url": "code/python.html",
    "revision": "6db790edbea98b82c14631e72dcb0932"
  },
  {
    "url": "code/python/class.html",
    "revision": "896b5cf68e4209fc2f593b4f0eb7bf2c"
  },
  {
    "url": "code/python/list.html",
    "revision": "296235536d6ed828379a533c5d6c3a31"
  },
  {
    "url": "devops/cicd.html",
    "revision": "93a55b35c6a75bf4e241e5ebf77fa4f5"
  },
  {
    "url": "devops/databases.html",
    "revision": "e0c2a0d5feffff74ed4e5b6735e26535"
  },
  {
    "url": "devops/docker.html",
    "revision": "4f06dfca900dd352d8437add96962b77"
  },
  {
    "url": "devops/index.html",
    "revision": "43d0a72d689e4f176e1ad8ca90bcadb1"
  },
  {
    "url": "devops/sql.html",
    "revision": "405ad95b641ef31b8694207754a9a64e"
  },
  {
    "url": "devops/terminology.html",
    "revision": "85694eefc842d29f2353c6653e79ddbc"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "40eea9ac711e6ec268b127a5caf2c9cd"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "8b1c7dd57f4b0794e46beb6436cdc573"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "c2a8b6c1040f604a344b5f7997a71b7e"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "9aab7a6cb18ca886b37c050f5b17f806"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "bdf801ef177353d629d3715900eb1c69"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "3fd6fa6e57f189e842103ae713e87762"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "10ec4cbfc86c8248919fafcf56dbb8ff"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "0dea0418f97fbad4971b643baaa593e7"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "859237b0f6847778473cb578d93ab999"
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
    "revision": "702663925a94dc2d03dc6a0e2e71c8da"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "a4f11ce02b2119b2da95ce80a19b2c6a"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "89822ec1dd38e740f83502434cd4bcee"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "1249ef18555f16fa2cc945e95739e585"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "dceeb2e38125996a8ae97f334620889d"
  },
  {
    "url": "other/http.html",
    "revision": "b87e9ce162d1869ed4f0eac2af0b406f"
  },
  {
    "url": "other/jq.html",
    "revision": "4dc8d0d0050bb7b809c3989f74019e8d"
  },
  {
    "url": "other/markdown.html",
    "revision": "bb7e72fad679eb181fc3fed552f51d83"
  },
  {
    "url": "other/setup.html",
    "revision": "70805dc8383ad5384953dcc85867e978"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "9ad554a5f259bb53ffdab2990b9d90d6"
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
