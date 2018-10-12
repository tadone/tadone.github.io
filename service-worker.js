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
    "revision": "133ad89c7d0e69171a61f53d172ac0ef"
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
    "url": "assets/css/styles.532c89a7.css",
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
    "url": "assets/js/21.8d649f82.js",
    "revision": "40d191bf824caf072b868f62fc0f237e"
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
    "url": "assets/js/app.532c89a7.js",
    "revision": "79eb7fb7a237fc9d72e2a8dc9593beae"
  },
  {
    "url": "cloud/aws.html",
    "revision": "63a6256f440d186b49c012e1e1d905dd"
  },
  {
    "url": "cloud/azure.html",
    "revision": "c9c6c7f57d6d37e40e5dfa9fe2dcca51"
  },
  {
    "url": "code/bash.html",
    "revision": "242611d53424efda1452fc0ef745edb8"
  },
  {
    "url": "code/git.html",
    "revision": "611e194b8c4210acda140141e9d7213e"
  },
  {
    "url": "code/python.html",
    "revision": "6056f572d0ab6ac9a7fdf2b1764146d7"
  },
  {
    "url": "code/python/class.html",
    "revision": "7216b1fbeeda9a445769d7aeb239db5d"
  },
  {
    "url": "code/python/list.html",
    "revision": "82b597b3d509f5ec56b55a9050ea5374"
  },
  {
    "url": "devops/cicd.html",
    "revision": "dca55d90ac6fcc2bbcf07e90e9fba286"
  },
  {
    "url": "devops/databases.html",
    "revision": "9949fedfdd603b998f3fcba535c92f1e"
  },
  {
    "url": "devops/docker.html",
    "revision": "dc7f18cd66a5af2d491911742e1406cd"
  },
  {
    "url": "devops/index.html",
    "revision": "b716d2d3b33fd9ff4c439a35243f6d18"
  },
  {
    "url": "devops/sql.html",
    "revision": "505b79599aba4f06211e147eaa616920"
  },
  {
    "url": "devops/terminology.html",
    "revision": "68186b47a3447afd5b08ddf2962a61c2"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "3346af67fb9d53fd93cb1f4673c58486"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "3631c3449c861e5a5a1e2dc1423dad2a"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "397cad29b503b655b77e79396092c2bd"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "7db1b479e6868afd5396ad29eb0d7cb5"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "87f08b6c05c698e5b153e9daeef0dda9"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "bd538a353475df41dd2e6fec01688271"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "03bf7333277be89ccbc3734ac0f08c6d"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "b07a290ca781de4fdca64b62220fe5eb"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "38c7e70f48d360a12b92581d80a2d6a1"
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
    "revision": "2716433224419e096a479c88e79ce300"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "2be0350dbf6457377238eead854a1c3c"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "3ee62346203e95cb5a5e6b56bea0027a"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "ea3e3e4ed8b495d05e9072758f5ab66f"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "029d9f669b27c7482e2f2ac569350aa1"
  },
  {
    "url": "other/http.html",
    "revision": "78a6e22cce9fcb77f1820183f4e52fa4"
  },
  {
    "url": "other/jq.html",
    "revision": "6e450c1033e55e193c8d0c1043b3d67b"
  },
  {
    "url": "other/markdown.html",
    "revision": "2257c369725f73da452978eab16e161b"
  },
  {
    "url": "other/setup.html",
    "revision": "451212a69cd8eed0692e9054c8ef0892"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "7ba23d575d4a3f00fc23a37eda6bd4f5"
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
