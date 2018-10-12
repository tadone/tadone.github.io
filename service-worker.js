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
    "revision": "50808d6780e04f816fef789292bfb8c1"
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
    "url": "assets/css/styles.ded95406.css",
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
    "url": "assets/js/21.adfb88a5.js",
    "revision": "c97c1018c3e34848d47ae807c12ca4f6"
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
    "url": "assets/js/app.ded95406.js",
    "revision": "b514f9b151e71413c67d575f988e1906"
  },
  {
    "url": "cloud/aws.html",
    "revision": "888b6087b0a842c0ea9546db038068ff"
  },
  {
    "url": "cloud/azure.html",
    "revision": "d4b61a64a1373fc67b0ab2df36f3a823"
  },
  {
    "url": "code/bash.html",
    "revision": "3e539e68b85ed92e126b20b041e1714a"
  },
  {
    "url": "code/git.html",
    "revision": "4c1de7ee6584fd5504277772cf36971e"
  },
  {
    "url": "code/python.html",
    "revision": "01c5f14eec7f84f103f462f6f1912a33"
  },
  {
    "url": "code/python/class.html",
    "revision": "44f6b739841dc4b903f913d06db34905"
  },
  {
    "url": "code/python/list.html",
    "revision": "1b53d89fce60bee5934686273a69c9ae"
  },
  {
    "url": "devops/cicd.html",
    "revision": "bb069b1cd0c4ee0e5109171266a932b5"
  },
  {
    "url": "devops/databases.html",
    "revision": "7c4addc0c3be9251a441f625a5f1d2fd"
  },
  {
    "url": "devops/docker.html",
    "revision": "355cc26039bd8b8083b547c13bf26581"
  },
  {
    "url": "devops/index.html",
    "revision": "29c760dbac056636d86977f4d107b40f"
  },
  {
    "url": "devops/sql.html",
    "revision": "17c4848caee57d25dbff413d57855bc4"
  },
  {
    "url": "devops/terminology.html",
    "revision": "06066a65b47a3563e09028c99f164d05"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "daa4dfefc8077b1fcd456ad536512f5c"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "df713c2bd20f78aba86a5b28a9a8955a"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "c7ba46ebf4000cfe8da190c942563124"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "85221494865d3675a0c2ad5bad37072b"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "1bc9f242473b4d55a34cd725b0dcb812"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "9f5a6524806dde16d6377f08f68c2e72"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "5a921f536c374ee3240c326dd0b8719d"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "be5a0d77de71a2c6be69114241abb71d"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "a4b605cb38057d2d88f02b3e57cb28ef"
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
    "revision": "f6bc977ce1590091b9b5fc5f589fc62f"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "72fe51d29b4a7bcbcc0ab5cd472362c6"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "8d3f7db71425ad596118432982072200"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "aa99f30d3d8513e5c28ce10af9faa94a"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "a454e6f4696031939fd0b3ca7825b141"
  },
  {
    "url": "other/http.html",
    "revision": "5c5b828566430952a707376f5e5b6526"
  },
  {
    "url": "other/jq.html",
    "revision": "f163194436351e2c0ac9cfe3e24d5a13"
  },
  {
    "url": "other/markdown.html",
    "revision": "fa0966e42985898ac0c6753b9f501e4e"
  },
  {
    "url": "other/setup.html",
    "revision": "ccdad9f22fbd9402b706be1405526dcb"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "b97d80d8f9fd35c8b5ac025f8d372189"
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
