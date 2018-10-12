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
    "revision": "731560df3252a858458c7cd731c1ae30"
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
    "url": "assets/css/styles.ccf667af.css",
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
    "url": "assets/js/21.d882b166.js",
    "revision": "c6782ffa5777aacbfa998ac1c5327004"
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
    "url": "assets/js/app.ccf667af.js",
    "revision": "03a297a15f107c45e759b7eabc950b40"
  },
  {
    "url": "cloud/aws.html",
    "revision": "9b2e9446975b00a30bf5ca809faad1c6"
  },
  {
    "url": "cloud/azure.html",
    "revision": "a4709f3e4af2f652739b1868785ed478"
  },
  {
    "url": "code/bash.html",
    "revision": "8994e08538dc9a0af08e816ce6bdd8ba"
  },
  {
    "url": "code/git.html",
    "revision": "66306a07c349f07ef2358a63101a8775"
  },
  {
    "url": "code/python.html",
    "revision": "b1e6ed505d3bc87d24a83f7abe476425"
  },
  {
    "url": "code/python/class.html",
    "revision": "7e109cb88a8ca71e2096a1f393ed52cc"
  },
  {
    "url": "code/python/list.html",
    "revision": "2636ce9928d2cc462f50d8e4292eec77"
  },
  {
    "url": "devops/cicd.html",
    "revision": "fb373a65f0f3c4a53911d685f8ae2669"
  },
  {
    "url": "devops/databases.html",
    "revision": "3ab9be3155570bdfdb1cd3e8aaaaaa55"
  },
  {
    "url": "devops/docker.html",
    "revision": "6679fe63cd03194a69ce479dfb514cbf"
  },
  {
    "url": "devops/index.html",
    "revision": "5741269921c497b0e2cc0099af2c6858"
  },
  {
    "url": "devops/sql.html",
    "revision": "38034107b13743d60cccc9ae0bd96a7c"
  },
  {
    "url": "devops/terminology.html",
    "revision": "e897baadc6cd8fe43c0155d0db8c7a6e"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "55cb298ee6d936dcc1817883f04ecea6"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "2c6635715d7d846de4e05882a218001b"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "186c96e5264aa7785eff2b014373a476"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "7495f597b54ee237b0f89a9e2f61f532"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "75f9dcd3108fd768dc522341be1933c3"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "d1b6f891da3bed58570284c73b51e873"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "1c5d665b093b3f85085e42f3348db37e"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "a911008df131c739097e568f45ef12b1"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "a3ca1b2351ebce22da760f1684604b92"
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
    "revision": "18e09d758343c0310f5a8da606f09526"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "aa965358051a44772ef7db57dece82ed"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "6c876cd9db0dbea9c74fa5b0374b9253"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "45a6acfc4a8d6b64d0cfef4eb30c94fb"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "721b60ecb3c7899cf7cbe088ae5aa85e"
  },
  {
    "url": "other/http.html",
    "revision": "9d1e8ae59312dd3949dfd68a0ab5de80"
  },
  {
    "url": "other/jq.html",
    "revision": "5cb7e9a68238e36f16bcb19cb17d3c49"
  },
  {
    "url": "other/markdown.html",
    "revision": "4e6f0a19b25cda11bb1208ee3aad7389"
  },
  {
    "url": "other/setup.html",
    "revision": "0dc924c6911b05063773a7d27dc3d17f"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "2eac7aa99cea41299686f61fdd6edea3"
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
