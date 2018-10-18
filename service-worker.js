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
    "revision": "cb2e98c51caf5b0b0311c1052b852ac1"
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
    "url": "assets/css/styles.3366575a.css",
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
    "url": "assets/js/21.84c95adc.js",
    "revision": "4a188187c2b8f7b61cacec4e3d398116"
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
    "url": "assets/js/app.3366575a.js",
    "revision": "0b386aa721c77d5ba1f51a28073fd384"
  },
  {
    "url": "cloud/aws.html",
    "revision": "4890daa27cb9653c1726cc61ab607025"
  },
  {
    "url": "cloud/azure.html",
    "revision": "56a58b7d2edb393e4dba13f753decaef"
  },
  {
    "url": "code/bash.html",
    "revision": "8238953cabe7794eb9b5bea1fc19af6d"
  },
  {
    "url": "code/git.html",
    "revision": "ae78a4d26b0d2c25167f4cd438885193"
  },
  {
    "url": "code/python.html",
    "revision": "bb2237b02e6f6fc4bd8ea64c09db4b94"
  },
  {
    "url": "code/python/class.html",
    "revision": "476031114e7ccea3567f505485ee6361"
  },
  {
    "url": "code/python/list.html",
    "revision": "fc56796f7590378000eccac860408405"
  },
  {
    "url": "devops/cicd.html",
    "revision": "00cbd621f092cde96498dfd4b88225e0"
  },
  {
    "url": "devops/databases.html",
    "revision": "f3d616790e6c41d5da35512d2928d3b3"
  },
  {
    "url": "devops/docker.html",
    "revision": "b87321dfa80a82339742d67a9c0c7208"
  },
  {
    "url": "devops/index.html",
    "revision": "f7c5eebff87e1854f4c73219f9eb51a2"
  },
  {
    "url": "devops/sql.html",
    "revision": "a6b24b496eebf618ed1793132c860261"
  },
  {
    "url": "devops/terminology.html",
    "revision": "16bacb9f8104160b42781ed33196e8b4"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "df8370cb69ac7cf512f8ecf36a8c18c2"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "4568de5ce14e402c87fc0db4719394d0"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "90b55def8a52ba30e57e88d266efc034"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "d6453e0d640b6781e7f0cbc77dcf861c"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "68d6f79f2db5ee5c79aa04f17357a20f"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "93686f493aedf72aed1d080bb22b891b"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "051a986f9b9f50d105f6a7dc256a190c"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "005d159718986a83dd51fae8c80aa3b8"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "932d3d67f9cc8dd68715acf90b1f7492"
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
    "revision": "34ebf0d5f9b72b6d40ff1b2510eccaca"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "1b88e27ff7cd7be3c96d9b30f0b9139b"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "6183498c46a1581ad5cb115a00eb27ce"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "a7b8bdde3eed9eebe1d4f5c001b94b5b"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "d89de6ba22da76f7b9697074cde87ebb"
  },
  {
    "url": "other/http.html",
    "revision": "6c186a5f0ed1bdf1f4ef431f169620ce"
  },
  {
    "url": "other/jq.html",
    "revision": "fcae17d09c4014ed434f6cac1b143b38"
  },
  {
    "url": "other/markdown.html",
    "revision": "322b0c3beaafcad99abcf360eba09dd5"
  },
  {
    "url": "other/setup.html",
    "revision": "771ba5d9baa02657d9e39da064892500"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "66604ae6f82d10364ed714e977adc92b"
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
