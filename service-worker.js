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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f7c39ba2172bb23a3516355f72291f78"
  },
  {
    "url": "assets/css/0.styles.d9b151b8.css",
    "revision": "64f74b3eb9cbf29f5fb3b2d08168e506"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.89ae5d30.js",
    "revision": "b164c2f3e03c0e3df465214be66d2277"
  },
  {
    "url": "assets/js/11.a75a28d9.js",
    "revision": "58f4bfdb8787a0dee75cfb40a7acf5bd"
  },
  {
    "url": "assets/js/12.97cb21a4.js",
    "revision": "3ef19861621dc19bc6f72e16fcce3436"
  },
  {
    "url": "assets/js/13.63fba130.js",
    "revision": "6a09886a86cfd648ed053a04f70c68ef"
  },
  {
    "url": "assets/js/14.3f23b28e.js",
    "revision": "a628a462cb95ba9456b75a6f982137cb"
  },
  {
    "url": "assets/js/15.5c212fdd.js",
    "revision": "e2a7e363735dfe288a1d00eb56c4072d"
  },
  {
    "url": "assets/js/16.6c4741f5.js",
    "revision": "d69c886dce9ced8bfbe6129af602248b"
  },
  {
    "url": "assets/js/17.316138ad.js",
    "revision": "2d14e0381ae3057bc2670cc3ee3bd3a4"
  },
  {
    "url": "assets/js/18.712774dc.js",
    "revision": "af09d14cc3c784e6018f46308699f90f"
  },
  {
    "url": "assets/js/19.8cac1d03.js",
    "revision": "6343f5b1b47caf664c77095c32e9f9ff"
  },
  {
    "url": "assets/js/2.fcb46994.js",
    "revision": "88a50d356832a4aee33f105c016fe614"
  },
  {
    "url": "assets/js/20.c6295b52.js",
    "revision": "919dfcc032d28f02d895f778d3c2267e"
  },
  {
    "url": "assets/js/21.4f5dd63e.js",
    "revision": "99d614b56b829316f3420a33e9c0f542"
  },
  {
    "url": "assets/js/22.b8c50060.js",
    "revision": "4fdfea2c02284ac3c4333de9975e2b97"
  },
  {
    "url": "assets/js/23.d068b859.js",
    "revision": "d48e2b08559fb8cec6a0b81fc884d772"
  },
  {
    "url": "assets/js/24.00bae11a.js",
    "revision": "b686cade30400d5e603b9399dfa5ad8c"
  },
  {
    "url": "assets/js/25.599b3271.js",
    "revision": "8dc57439c1809d365dcf5f50eb25f553"
  },
  {
    "url": "assets/js/26.fc534f83.js",
    "revision": "24b6f7167f71439b596aabf923508924"
  },
  {
    "url": "assets/js/27.f7fd5b9e.js",
    "revision": "f3639dc1e56597e9981c6f4a268e579c"
  },
  {
    "url": "assets/js/28.bebfaf48.js",
    "revision": "1ffeb34900afb12b7f24d3aea64a13f5"
  },
  {
    "url": "assets/js/29.1c3a4caf.js",
    "revision": "8adc85e60b1f00cc79b52e037f2898fd"
  },
  {
    "url": "assets/js/3.fc9eb5c0.js",
    "revision": "6ad09d6185c961d9b188ea1bcd901695"
  },
  {
    "url": "assets/js/30.a1a7b142.js",
    "revision": "469e2b784157b1849e927c73a5b23585"
  },
  {
    "url": "assets/js/31.074b511e.js",
    "revision": "f51999e3553bb457b36504dd502cae6c"
  },
  {
    "url": "assets/js/32.2f76116b.js",
    "revision": "7624db8e3b0bc09f9c9fe59ba41ed6e7"
  },
  {
    "url": "assets/js/33.1e7f1c30.js",
    "revision": "7c895725053c4ff69465bdb320b99686"
  },
  {
    "url": "assets/js/34.63fbe35b.js",
    "revision": "13ffded952fbe7f418911ff759f37111"
  },
  {
    "url": "assets/js/35.47a5079a.js",
    "revision": "8e310a9ef9c93b837c20a45113bbdb22"
  },
  {
    "url": "assets/js/36.a47a0a4e.js",
    "revision": "59e14271ef38efed281e01d2d964d775"
  },
  {
    "url": "assets/js/37.3580690c.js",
    "revision": "457ae05280d218b53f781ac8a06dde72"
  },
  {
    "url": "assets/js/38.e86d7803.js",
    "revision": "73a0d7a04ae9c5b7a1cf68e98d344364"
  },
  {
    "url": "assets/js/39.e89f71d4.js",
    "revision": "5287ef754e5d95023fa74f4a010d9702"
  },
  {
    "url": "assets/js/4.069b95dd.js",
    "revision": "f97fcb435d742c2ae7b54b9b934e66ba"
  },
  {
    "url": "assets/js/40.889340c7.js",
    "revision": "8aa9e2193c1764c843e4c63610515899"
  },
  {
    "url": "assets/js/5.417dffac.js",
    "revision": "031641b8b6d1601ae3c46e486f66e68b"
  },
  {
    "url": "assets/js/6.f52330c7.js",
    "revision": "ca69ee1496922bb1f3a37520d7128cc2"
  },
  {
    "url": "assets/js/7.e6b95d50.js",
    "revision": "e15192b72e2f1f526aa2fb301b0cfe47"
  },
  {
    "url": "assets/js/8.2b154f0d.js",
    "revision": "725712438c450ef3bdb8401b610da4fd"
  },
  {
    "url": "assets/js/9.cd3c1513.js",
    "revision": "d939c6673207c50c88a592a30cdee75c"
  },
  {
    "url": "assets/js/app.d2d468e2.js",
    "revision": "2a7f5c6695d0667ea21367c98f9008bc"
  },
  {
    "url": "cloud/aws.html",
    "revision": "9166c08c782654fe96e1e79e022fc53b"
  },
  {
    "url": "cloud/azure.html",
    "revision": "bbab8e4d48e2ecb8739266acf66b9cd6"
  },
  {
    "url": "code/bash.html",
    "revision": "51ae24775d34397e956a96723aa1869f"
  },
  {
    "url": "code/git.html",
    "revision": "718c015fb5435b75685241f4f0edea01"
  },
  {
    "url": "code/python.html",
    "revision": "fb68e7bd451d0a47d9bf56a690e8b221"
  },
  {
    "url": "code/python/class.html",
    "revision": "70b45c859ca84f679eeb170a83fe2359"
  },
  {
    "url": "code/python/list.html",
    "revision": "7731c5eb772c32c35c880214f6750b8a"
  },
  {
    "url": "code/webdev.html",
    "revision": "84cbd2678e02691b131b182b8e8cd4f7"
  },
  {
    "url": "devops/cicd.html",
    "revision": "1c783fba9306ded29563f330d3b90641"
  },
  {
    "url": "devops/databases.html",
    "revision": "88a95da321c342e988c121117a0458bf"
  },
  {
    "url": "devops/docker.html",
    "revision": "611de313b9a4b7149d2401964b8d48a8"
  },
  {
    "url": "devops/index.html",
    "revision": "ff9e51dac66c3ac44a2baf4855dfefe7"
  },
  {
    "url": "devops/sql.html",
    "revision": "cb1da3f5140cfbc80824f37f447d017c"
  },
  {
    "url": "devops/terminology.html",
    "revision": "e2b0c03d582b668e5958b6bf836028b5"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "2be0c9f5b3c25d352db5e915b59b77a1"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "3c15bd252ca249befefd54dcae07e060"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "65a75019889fa7a6bd04f9f1d6113c90"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "53b3c1e4dfab682cb58e1a96aa51e37d"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "79175dbe9c012db10322a9285f54fc5d"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "9bab93972b90f5a657d4c1a9d029e613"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "5b6afc5d210a3a2453ca5e89681756fb"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "e2acb6092014ea6bca3b8735145e11cc"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "c58719384f45efd54a83ece4bad5979c"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "b3e21bcd496859fa69d9649b666c0831"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "8869e355a1e329b2c25f7edf53f0a39a"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "cce2baae317426260ff46300193fdafd"
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
    "revision": "db11c584090bae66958498f5af02a3ff"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "a987bcfa20ba1cbccdbf5aaae7c04e15"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "01087cc7480599ac2df611c92cecbcb4"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "637e6b77023f64eddf95c30a60669913"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "5fb4387dfc2631fbd496044adbd02092"
  },
  {
    "url": "other/http.html",
    "revision": "1e0011ff7c5801fe7ae7e4dd056b971c"
  },
  {
    "url": "other/jq.html",
    "revision": "eff9a7cbbc76c165d8295e462f5f0d55"
  },
  {
    "url": "other/markdown.html",
    "revision": "0041568a908829319e761eaa89286c91"
  },
  {
    "url": "other/personal.html",
    "revision": "a76bd596bbf242b8b8345b8472589da9"
  },
  {
    "url": "other/setup.html",
    "revision": "06d49afb3813ec4104bd44ff5504d96f"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "a03d693dad2e28e866e68a7e0c6599a1"
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
