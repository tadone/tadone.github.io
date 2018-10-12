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
    "revision": "904e2ec030d0e0afea0926eb4aea8f2c"
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
    "url": "assets/css/styles.0fa718a5.css",
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
    "url": "assets/js/21.7bff90e2.js",
    "revision": "9d3bedb4404c99b0a6484b86fabed01a"
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
    "url": "assets/js/app.0fa718a5.js",
    "revision": "4e8cb15fe1e4d7f078d255ce4a5f3e96"
  },
  {
    "url": "cloud/aws.html",
    "revision": "fa62e4eee575745ce03e167cb0077861"
  },
  {
    "url": "cloud/azure.html",
    "revision": "e31c9faaec70e2bf4c6bfc83d01d88a6"
  },
  {
    "url": "code/bash.html",
    "revision": "8454e3a583b96b804e43250571ba8cfc"
  },
  {
    "url": "code/git.html",
    "revision": "102c8ea6e018379475c6ed8e32e6ee97"
  },
  {
    "url": "code/python.html",
    "revision": "06a6dd92042611573725b2008f0bcb49"
  },
  {
    "url": "code/python/class.html",
    "revision": "b22f486e4ba9093fca65fe0ef848f7dc"
  },
  {
    "url": "code/python/list.html",
    "revision": "0b64291f7b3ef9590d4d65e6306d19f1"
  },
  {
    "url": "devops/cicd.html",
    "revision": "9125e501ab120018236e308abbc02b5e"
  },
  {
    "url": "devops/databases.html",
    "revision": "277498fdfd3d025181c34622b002d388"
  },
  {
    "url": "devops/docker.html",
    "revision": "816f9b0bed552ccfcb95ffbd26f68039"
  },
  {
    "url": "devops/index.html",
    "revision": "852965aea80e38720e4a69b3de442d0b"
  },
  {
    "url": "devops/sql.html",
    "revision": "a0246f7627742596d7aafea4973e7fa4"
  },
  {
    "url": "devops/terminology.html",
    "revision": "2b106d36455a7e6b29556f1fdf60c8ba"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "e34f114548fc6c5ca0eb6859361d6cde"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "d89ad48fb47426447e1acc027f3a8a09"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "05b518e7d93ea1aaafdc5fcb70341ec9"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "7c6afe929a805354163a70ae00564dbf"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "07296db00f30b00665940990011145ba"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "69e9dca29b2631a971b8444c1984275e"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "245f8a5604415728fccd6395b3f5bb43"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "c89eea7466b77ee92032499151615644"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "da884427ed82300e35127b77070ed2bf"
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
    "revision": "15f7c7e0d9258c7d7f5b2bbb4df9c862"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "ceff4a42c7bd0c55c6dec84aee1b2aa8"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "1874aacc9e54fbeaade63a18de09170a"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "09009256007fcfd714c130953465f567"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "eaf3e8e334d04e4386e503d7339a8135"
  },
  {
    "url": "other/http.html",
    "revision": "a1a8c2eda0d971aa8a16369d3cc41802"
  },
  {
    "url": "other/jq.html",
    "revision": "fdbbc54293e5047e7f0d1a29b859bd0a"
  },
  {
    "url": "other/markdown.html",
    "revision": "6b3ac913c401a554cfe51952c0270d48"
  },
  {
    "url": "other/setup.html",
    "revision": "75c8b953e69cf7072e00eba41b5c0a21"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "5558a1b08bc837245016212887686f0c"
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
