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
    "revision": "951f47e3b8fbc81bc015e924e6119f9d"
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
    "url": "assets/css/styles.54db5f1f.css",
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
    "url": "assets/js/21.f2fe8674.js",
    "revision": "6cc35a3b17d891d4e28f906fb97651e0"
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
    "url": "assets/js/app.54db5f1f.js",
    "revision": "e884306643c0187c7155af20b548234e"
  },
  {
    "url": "cloud/aws.html",
    "revision": "e6b5ed2e68866c0cca8ab956431f29d6"
  },
  {
    "url": "cloud/azure.html",
    "revision": "08f1d4b06774b42a00f3d9ecef379d36"
  },
  {
    "url": "code/bash.html",
    "revision": "f8e9f8c802affc3a6c880691be7c84ed"
  },
  {
    "url": "code/git.html",
    "revision": "786d84a790cdcfdb6e316eb03d8a9433"
  },
  {
    "url": "code/python.html",
    "revision": "6b8765fba731245521e39b7788180cb6"
  },
  {
    "url": "code/python/class.html",
    "revision": "c05f3704a38398e5aa491096604805a4"
  },
  {
    "url": "code/python/list.html",
    "revision": "be22edd1bbd13a821a5b3dba66f960f0"
  },
  {
    "url": "devops/cicd.html",
    "revision": "376a6e256f9d9113d8ed5990aa6874c0"
  },
  {
    "url": "devops/databases.html",
    "revision": "53ef0113442ee5c26543257466692c7a"
  },
  {
    "url": "devops/docker.html",
    "revision": "c34987e8594778ab760061dab25d6ea4"
  },
  {
    "url": "devops/index.html",
    "revision": "3eb3b1b3447c129ae92ac3a7099401f8"
  },
  {
    "url": "devops/sql.html",
    "revision": "ffd2efd4fbc7eeb3658fd7f42544cfd5"
  },
  {
    "url": "devops/terminology.html",
    "revision": "9f12275db13f51332969e3c357a8054c"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "a69d7427398eb2be49c2438f1f094bd3"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "9e9ae1a61edde39b0e92273bc5e2fa4a"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "e569f38f956b30665030aef36642567d"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "e5d7a1056fbe0625ac2ebfb5e065dc1a"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "cfba5d16c0a8d1cc13b4ba01851b69f0"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "a6a25fb5720ef40772e14d3726bb104b"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "d7fe4c28ec731c9fe927f1052540f206"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "41159ad557ae71abb46d7325ff7f1daf"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "56673fb852ccafeb1ca282768fc305a1"
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
    "revision": "cdc0be76c820ea232ada6dba07ac16e7"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "2167955f1158898f439c69d059d134d0"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "c3b363a2f00de63e6f5e91f739db8617"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "59bf73999a80cd9908cd72dbc2f42be6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "bee2ef0534dc9b26cdd06bcb2323926d"
  },
  {
    "url": "other/http.html",
    "revision": "cbbc9687cc4155f1d96b5731b61f40fd"
  },
  {
    "url": "other/jq.html",
    "revision": "d01549c45f41cbb19fd9c0a4b51d671c"
  },
  {
    "url": "other/markdown.html",
    "revision": "77976d3a56507bf5950eb9fc86032ec7"
  },
  {
    "url": "other/setup.html",
    "revision": "db73b63a6f790e7e8d19a9866a4be16f"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "e7d2a7b36f40e58d46bf5391e61c9c6a"
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
