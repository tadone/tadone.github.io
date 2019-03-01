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
    "revision": "a931018a1be010ecab71b453479a95d9"
  },
  {
    "url": "assets/css/0.styles.e6882789.css",
    "revision": "a062150f2ab0f07ea23955b6dd19aa42"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.57ac8f37.js",
    "revision": "b164c2f3e03c0e3df465214be66d2277"
  },
  {
    "url": "assets/js/11.c27ad3cd.js",
    "revision": "58f4bfdb8787a0dee75cfb40a7acf5bd"
  },
  {
    "url": "assets/js/12.e3f125da.js",
    "revision": "3ef19861621dc19bc6f72e16fcce3436"
  },
  {
    "url": "assets/js/13.c1ba01d9.js",
    "revision": "6a09886a86cfd648ed053a04f70c68ef"
  },
  {
    "url": "assets/js/14.5cf3fbf8.js",
    "revision": "a628a462cb95ba9456b75a6f982137cb"
  },
  {
    "url": "assets/js/15.d67da69d.js",
    "revision": "e2a7e363735dfe288a1d00eb56c4072d"
  },
  {
    "url": "assets/js/16.799f5f32.js",
    "revision": "d69c886dce9ced8bfbe6129af602248b"
  },
  {
    "url": "assets/js/17.1a7c4f5b.js",
    "revision": "2d14e0381ae3057bc2670cc3ee3bd3a4"
  },
  {
    "url": "assets/js/18.55aa3423.js",
    "revision": "af09d14cc3c784e6018f46308699f90f"
  },
  {
    "url": "assets/js/19.82753390.js",
    "revision": "6343f5b1b47caf664c77095c32e9f9ff"
  },
  {
    "url": "assets/js/2.fcb46994.js",
    "revision": "88a50d356832a4aee33f105c016fe614"
  },
  {
    "url": "assets/js/20.457d13ca.js",
    "revision": "919dfcc032d28f02d895f778d3c2267e"
  },
  {
    "url": "assets/js/21.2342a659.js",
    "revision": "99d614b56b829316f3420a33e9c0f542"
  },
  {
    "url": "assets/js/22.412ca278.js",
    "revision": "4fdfea2c02284ac3c4333de9975e2b97"
  },
  {
    "url": "assets/js/23.f6d2ee29.js",
    "revision": "d48e2b08559fb8cec6a0b81fc884d772"
  },
  {
    "url": "assets/js/24.bc5c4f85.js",
    "revision": "b686cade30400d5e603b9399dfa5ad8c"
  },
  {
    "url": "assets/js/25.b5eef347.js",
    "revision": "1c2cd58d1d9ed32a10fcaa34099b9ae9"
  },
  {
    "url": "assets/js/26.54065786.js",
    "revision": "24b6f7167f71439b596aabf923508924"
  },
  {
    "url": "assets/js/27.144dacc7.js",
    "revision": "f3639dc1e56597e9981c6f4a268e579c"
  },
  {
    "url": "assets/js/28.79a28376.js",
    "revision": "1ffeb34900afb12b7f24d3aea64a13f5"
  },
  {
    "url": "assets/js/29.0bc7fa25.js",
    "revision": "8adc85e60b1f00cc79b52e037f2898fd"
  },
  {
    "url": "assets/js/3.eeb73190.js",
    "revision": "6ad09d6185c961d9b188ea1bcd901695"
  },
  {
    "url": "assets/js/30.849a3886.js",
    "revision": "469e2b784157b1849e927c73a5b23585"
  },
  {
    "url": "assets/js/31.3e51818c.js",
    "revision": "f51999e3553bb457b36504dd502cae6c"
  },
  {
    "url": "assets/js/32.9e7b84f4.js",
    "revision": "7624db8e3b0bc09f9c9fe59ba41ed6e7"
  },
  {
    "url": "assets/js/33.f00f2460.js",
    "revision": "7c895725053c4ff69465bdb320b99686"
  },
  {
    "url": "assets/js/34.b1717a37.js",
    "revision": "13ffded952fbe7f418911ff759f37111"
  },
  {
    "url": "assets/js/35.2ba5d738.js",
    "revision": "8e310a9ef9c93b837c20a45113bbdb22"
  },
  {
    "url": "assets/js/36.f84d49ab.js",
    "revision": "59e14271ef38efed281e01d2d964d775"
  },
  {
    "url": "assets/js/37.2b834aa2.js",
    "revision": "457ae05280d218b53f781ac8a06dde72"
  },
  {
    "url": "assets/js/38.28513fa2.js",
    "revision": "73a0d7a04ae9c5b7a1cf68e98d344364"
  },
  {
    "url": "assets/js/39.fdbc69db.js",
    "revision": "5287ef754e5d95023fa74f4a010d9702"
  },
  {
    "url": "assets/js/4.8df8b0d2.js",
    "revision": "f97fcb435d742c2ae7b54b9b934e66ba"
  },
  {
    "url": "assets/js/40.889340c7.js",
    "revision": "8aa9e2193c1764c843e4c63610515899"
  },
  {
    "url": "assets/js/5.0c376756.js",
    "revision": "031641b8b6d1601ae3c46e486f66e68b"
  },
  {
    "url": "assets/js/6.aa581904.js",
    "revision": "d244d013fee78161693cf52bfe5221ff"
  },
  {
    "url": "assets/js/7.c094cb2f.js",
    "revision": "e15192b72e2f1f526aa2fb301b0cfe47"
  },
  {
    "url": "assets/js/8.3d7e1a52.js",
    "revision": "725712438c450ef3bdb8401b610da4fd"
  },
  {
    "url": "assets/js/9.2397ffad.js",
    "revision": "d939c6673207c50c88a592a30cdee75c"
  },
  {
    "url": "assets/js/app.ed8a5df2.js",
    "revision": "4f503c8b07c5cedf15f01dd43851ffc7"
  },
  {
    "url": "cloud/aws.html",
    "revision": "38edf38198768e0a551c1d6972ba8b56"
  },
  {
    "url": "cloud/azure.html",
    "revision": "c4072b76cc3bb9d22a7eafda2b5b8e44"
  },
  {
    "url": "code/bash.html",
    "revision": "4d8d20b2f0b4ad6d3169bd9a947feb84"
  },
  {
    "url": "code/git.html",
    "revision": "9bb6233fc1053467257081c1d866bdcb"
  },
  {
    "url": "code/python.html",
    "revision": "a21d6044fa8404b5345e0819d65d4ab7"
  },
  {
    "url": "code/python/class.html",
    "revision": "dbe5848f0dc3589bdd47444e431e317e"
  },
  {
    "url": "code/python/list.html",
    "revision": "3601d9c3e2bb676f906ddf99d62d5766"
  },
  {
    "url": "code/webdev.html",
    "revision": "bfc21d63832daedad1ccb45f7e19953c"
  },
  {
    "url": "devops/cicd.html",
    "revision": "05f3749234770cdc51b8db1ab8e2ee37"
  },
  {
    "url": "devops/databases.html",
    "revision": "5f08fa517bb64424fc59a16c7a9b845b"
  },
  {
    "url": "devops/docker.html",
    "revision": "b339595ae99d0b1dfb316e074150ce24"
  },
  {
    "url": "devops/index.html",
    "revision": "24ad7abb91d15a12cb442d763e5f9920"
  },
  {
    "url": "devops/sql.html",
    "revision": "beee71140cdecfed0463055ff0606a5a"
  },
  {
    "url": "devops/terminology.html",
    "revision": "17a297385fe93a9d779b185b8be0f18b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "73931bb48085fc27513945070c19f24e"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "85d9392466dd620b714d3d5ed27fe124"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "49b013c4c1f7523c1e668216ed7cecd1"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "07b980edab33dafeba49b64320ef6747"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "eaf3a8e93fc0bc49fb43200d8bc1c2f1"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "9f134ffe68ee72aac011933245ac42d8"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "d9c9e1ac2be09981f3649cb0d9369f8a"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "82b3276534f9af2ae08c4681b7cf9966"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "bc9190f5ecb402e7fb46dcc6c2743327"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "bfa3a46836150c3c2771ed4fc7823d1b"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "60c0a2942e4ea6634fdeb20ca6f5ceb1"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "7ff3761e4335941aeb0cd0119c817041"
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
    "revision": "c2022820416de7d4de8a5d4c02dd9d3c"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "4e5c3bf4f1e9d2cb0dc1ecc64631062a"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "17f909cc91e1b3c8117c088d28089b52"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "3eec9d9086afb15ca50122c43bad9123"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "dc81055a69a58b091fdd96963d829aac"
  },
  {
    "url": "other/http.html",
    "revision": "9da508171567dadaa4bbd5ce4c83d618"
  },
  {
    "url": "other/jq.html",
    "revision": "426583aecd5da39b215f2482dee239c3"
  },
  {
    "url": "other/markdown.html",
    "revision": "30927c8a5b68180f988705c61fb469c4"
  },
  {
    "url": "other/personal.html",
    "revision": "8e2201bc6cc250c6f059990f73a21712"
  },
  {
    "url": "other/setup.html",
    "revision": "563232e43be4326164ab23bce14668d4"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "7bbe01a73fc3afcf2070087a9410c364"
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
