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
    "revision": "0f59011473e0aaefa371e925e8e8d4bb"
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
    "url": "assets/css/styles.95c80aa3.css",
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
    "url": "assets/js/21.f4a55162.js",
    "revision": "13705f4e07c7e672c46d36ccf721d274"
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
    "url": "assets/js/app.95c80aa3.js",
    "revision": "306363ce7770b4b9b1cfff20a790b762"
  },
  {
    "url": "cloud/aws.html",
    "revision": "8d892c063977b7d1c52dc0cb95fd2f13"
  },
  {
    "url": "cloud/azure.html",
    "revision": "76939a2e6324f3a35c0ae8691f89e78d"
  },
  {
    "url": "code/bash.html",
    "revision": "10ec6e3b46d7837a0c39b10f11997851"
  },
  {
    "url": "code/git.html",
    "revision": "8462c8450883a74bff5bf979f5f10bd8"
  },
  {
    "url": "code/python.html",
    "revision": "185d0dcbdd03d2d3b1ec52fd6eeded92"
  },
  {
    "url": "code/python/class.html",
    "revision": "b9f3d7d6fc8bfd6831e990183fa60168"
  },
  {
    "url": "code/python/list.html",
    "revision": "89fecfd301bc7009336d6eeb60a9ea68"
  },
  {
    "url": "devops/cicd.html",
    "revision": "1a22e81ff85f2c5adb10a29c651aa1da"
  },
  {
    "url": "devops/databases.html",
    "revision": "6a2ce605fd9b464ed1b3771810e8703c"
  },
  {
    "url": "devops/docker.html",
    "revision": "ecdbf506dc8c18f05260ec7925511424"
  },
  {
    "url": "devops/index.html",
    "revision": "e3ad711e715a6b3126390aaaecadeebc"
  },
  {
    "url": "devops/sql.html",
    "revision": "b4254a2ac1eed4f895fb283fed2561b0"
  },
  {
    "url": "devops/terminology.html",
    "revision": "6d62b3313267e7964d738731d11b3086"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "ec1845756dc86b994396e654045dc81a"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "6fc74ec65439e061fea6289a26b1ede8"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "879f2cfc8e3c6e2293e4073edc093be3"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "6e62a7f1af341429745ded9d7eabca26"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "8d5c94ba76dfa2296956e54519fa5974"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "7040022ad06343114d650fe0eb023a63"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "43d7134c16bd92179f5a78f34185782c"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "d2e9d0dca6e1f74c4967acfe1f34e3fc"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "73ab77967f67655efe20e00785f059cf"
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
    "revision": "f81090bc865dd1400192d2426d5e9df0"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "6b1efb2b95d2fe0cefb0602d802da292"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "01b04b0f465bebdd28d356aef8fca518"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "bb6fa11e56a6f0e12257655094671ed3"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "57e2312d6d586afd6573e10087fca148"
  },
  {
    "url": "other/http.html",
    "revision": "9195535078892e58d57d378bd839333e"
  },
  {
    "url": "other/jq.html",
    "revision": "fa833a318abfefbdddccd6ae73c599f7"
  },
  {
    "url": "other/markdown.html",
    "revision": "1dfc21c097ab2024ccce315b33deb77c"
  },
  {
    "url": "other/setup.html",
    "revision": "3ff46cfd51f7ac398282287002ecb735"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "e2bdb719b11d6a7e6bb26755b2ea900e"
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
