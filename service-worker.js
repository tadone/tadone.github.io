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
    "revision": "8efbb948f0ddd5643371f71f7dbf5e29"
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
    "url": "assets/css/styles.0a5f4ddc.css",
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
    "url": "assets/js/21.61da7c69.js",
    "revision": "8d4e28735a89c7a1e877595e23d43a09"
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
    "url": "assets/js/6.97ee4abd.js",
    "revision": "556536d50fc44b3829d2a221227d0e0e"
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
    "url": "assets/js/app.0a5f4ddc.js",
    "revision": "5b7ee3648b4efb5d24e9fa483b112e58"
  },
  {
    "url": "cloud/aws.html",
    "revision": "8adcd5c2d179bb4fa8a62ff515831ff4"
  },
  {
    "url": "cloud/azure.html",
    "revision": "db5d92e4afdc1c79306318123c44b6c4"
  },
  {
    "url": "code/bash.html",
    "revision": "b93a8cc94cf3561d22ee9d097fd01376"
  },
  {
    "url": "code/git.html",
    "revision": "212e78609cdafd28678076e5816e8774"
  },
  {
    "url": "code/python.html",
    "revision": "1edca2bb329520332e6174d2ff37eb90"
  },
  {
    "url": "code/python/class.html",
    "revision": "5b23bdb8465abc0bbb46244a7cb5578c"
  },
  {
    "url": "code/python/list.html",
    "revision": "d06a361da8f8995f95f5fefd4f8c1128"
  },
  {
    "url": "devops/cicd.html",
    "revision": "b8e60e724782699dd2872508cd8341fa"
  },
  {
    "url": "devops/databases.html",
    "revision": "8b3df8413ecbbf7bce7887428fb44915"
  },
  {
    "url": "devops/docker.html",
    "revision": "d88a10a70d60dac5aa6e0cd67d3bba19"
  },
  {
    "url": "devops/index.html",
    "revision": "acf3b6a2656a10cf442211f9f1465d7b"
  },
  {
    "url": "devops/sql.html",
    "revision": "0875ec34775d72aebe2afdb4c30b8000"
  },
  {
    "url": "devops/terminology.html",
    "revision": "1b89935e492c17d71ca9c06de01e93ab"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "ebcc535d851162e70779f35973eaca93"
  },
  {
    "url": "kubernetes/extras.html",
    "revision": "f309d65b23f94af98aa0da1c1a47cdad"
  },
  {
    "url": "kubernetes/ingress.html",
    "revision": "857017ee3664fd590f0760c9f46042f1"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "5d9514e9c9a3a105fa500276c7040e3b"
  },
  {
    "url": "kubernetes/minikube.html",
    "revision": "dec65a4f559142b2027b1150ad3e3e70"
  },
  {
    "url": "kubernetes/objects.html",
    "revision": "a5753d74c2d0862f9a01149a509f25e1"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "b36977de7bef9bc7d7d293f7e5f027f4"
  },
  {
    "url": "kubernetes/own_cluster.html",
    "revision": "fcf4e5929b5e9a5a7548bb35d507b058"
  },
  {
    "url": "kubernetes/yaml.html",
    "revision": "a027ad728250cfb2c28f64b7dc28693b"
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
    "revision": "7eed3b65100a4369304977830841a9b4"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "8e54d41279484a31f3baaf87a2c41f9a"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "6247e85113248f59cf7a20a38b123211"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "fc89764b99ed8335cc1b25321e51339d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "b8376f8b42a13e501a65f297222d0a53"
  },
  {
    "url": "other/http.html",
    "revision": "bda4c02524398e47c74220776f694d46"
  },
  {
    "url": "other/jq.html",
    "revision": "ac112c7fac90aac9a2c13d33517c3152"
  },
  {
    "url": "other/markdown.html",
    "revision": "6521373483bb6d5a2f7ed10a35fec4e5"
  },
  {
    "url": "other/setup.html",
    "revision": "748954702acec9adcc67acfb86321152"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "630b187cb12c6395a919dda04dc73aaa"
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
