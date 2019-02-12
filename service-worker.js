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
    "revision": "d6eeecc45ef6c1a7ae0ec4a577f5c4e1"
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
    "url": "assets/js/25.7c783b56.js",
    "revision": "1c2cd58d1d9ed32a10fcaa34099b9ae9"
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
    "url": "assets/js/app.26e34d64.js",
    "revision": "15026b2b2a9d05fdc447ca4386e60237"
  },
  {
    "url": "cloud/aws.html",
    "revision": "e8a7972862bfb516232e08792e4f7f58"
  },
  {
    "url": "cloud/azure.html",
    "revision": "e6c6bdcfaabbee3ee0bfbb93163e76ba"
  },
  {
    "url": "code/bash.html",
    "revision": "a983fa1c5322624c5c343c5625f2bb33"
  },
  {
    "url": "code/git.html",
    "revision": "8ed31dbcbdafff71bbcea3b71e480366"
  },
  {
    "url": "code/python.html",
    "revision": "895ac4d616d1e73aa8a9bede80029ae0"
  },
  {
    "url": "code/python/class.html",
    "revision": "70ce05b95ea18783843e36969139e59c"
  },
  {
    "url": "code/python/list.html",
    "revision": "b46ff9dabd23eb31e288e523c48deed1"
  },
  {
    "url": "code/webdev.html",
    "revision": "503f9d7e506784fa2e4849107263d412"
  },
  {
    "url": "devops/cicd.html",
    "revision": "f95395fbf2c847b3b0c1257fd25cb9bd"
  },
  {
    "url": "devops/databases.html",
    "revision": "387e8199b24e9d8086b2d836e0157f0e"
  },
  {
    "url": "devops/docker.html",
    "revision": "3b070d85e9fb7674b0a9796263dcbf43"
  },
  {
    "url": "devops/index.html",
    "revision": "82c6771815b2ac9ce4a095da0cee3e08"
  },
  {
    "url": "devops/sql.html",
    "revision": "09cd19d4316877851f1c436e6e1dbb1b"
  },
  {
    "url": "devops/terminology.html",
    "revision": "574a7f72da55c446d4791df605ea93e7"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "709c526e85acb669c035f17599285b37"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "d9fdbf41a78f5efdd8cd902a96a50d23"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "fb7d67f857b53b011c4a999745a6dc32"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "a5fb799c8c2ee9cd44050a371c898b93"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "5632a400f9a708dfaf381afe4a42ca5a"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "221607a3dcf97677d9864b2dd4f36cef"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "e5e2a351a2388c12dd287167ce4f29a5"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "425b027d6b0c42f5d832f56af0f76809"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "b8c6c97ec591e94f1b0befac9777c6df"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "d5d95151ec808dcbb658d140c98716df"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "9d461c714d70f3d48f11cf37fbf6bdbe"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "103d691e1a5f7bd4f701ab0753bb712e"
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
    "revision": "790381bae290297288b80c849ae1eb78"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "5a2772082f658493cc61a4d3b38fe240"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "275bfdfd6292280fe2b51b899daae9d5"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "bf8fd3d5fa49f305ca7877c0cb7b680f"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "b593be2d7b4cb55278408164d5220c6a"
  },
  {
    "url": "other/http.html",
    "revision": "653aa422930f0c5ea76c9bad645b51ce"
  },
  {
    "url": "other/jq.html",
    "revision": "9296a7642da1ef1da3d162fa309a923e"
  },
  {
    "url": "other/markdown.html",
    "revision": "468ce847817ca19d3381cf529bb3ab4e"
  },
  {
    "url": "other/personal.html",
    "revision": "4d81ae0cda984bd97133ed8e2a54c74f"
  },
  {
    "url": "other/setup.html",
    "revision": "f997b3fa70512b96333311fae65842ed"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "380e71942957cf70bb3d5fe9b76854a3"
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
