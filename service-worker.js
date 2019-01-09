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
    "revision": "851c10cc9f10c241a0f429fe431f88b9"
  },
  {
    "url": "assets/css/0.styles.2dc0102a.css",
    "revision": "64f74b3eb9cbf29f5fb3b2d08168e506"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.272d9d48.js",
    "revision": "d0049cb01a606705ff4334d2dbae390e"
  },
  {
    "url": "assets/js/11.03f7c290.js",
    "revision": "141fccae025807381742c74cf9816ad3"
  },
  {
    "url": "assets/js/12.76535cff.js",
    "revision": "dac995c2c425a0bd8648d58b78a462dc"
  },
  {
    "url": "assets/js/13.d3cfc89c.js",
    "revision": "1f9e925dbe5a990a3eec4b8c749cb7f2"
  },
  {
    "url": "assets/js/14.047fc74f.js",
    "revision": "64a2a474e66a798602e7a938466aef05"
  },
  {
    "url": "assets/js/15.c7820ffb.js",
    "revision": "6570df9c07e5b8013880b24c0235a07d"
  },
  {
    "url": "assets/js/16.2a9ab3b4.js",
    "revision": "ab5fdc30212dabebefb0162f25897684"
  },
  {
    "url": "assets/js/17.be422723.js",
    "revision": "76fcd9d70d93803b8e262d58ac6adc06"
  },
  {
    "url": "assets/js/18.9d3c519f.js",
    "revision": "da4b519908caaf83d35e3c3d33d79772"
  },
  {
    "url": "assets/js/19.9c236ccf.js",
    "revision": "006ddca406679412a71e1abd9d78ef19"
  },
  {
    "url": "assets/js/2.9f734292.js",
    "revision": "0b0cd1f7b5e95ff2dbe95d1caef95945"
  },
  {
    "url": "assets/js/20.27100b65.js",
    "revision": "6e23f85cda41fc979734379593ac9a45"
  },
  {
    "url": "assets/js/21.0c4df6c0.js",
    "revision": "9312e1f3d0e6cb430aa3401c98a2109a"
  },
  {
    "url": "assets/js/22.04d7ceff.js",
    "revision": "71f3620eb26c39aa3f0840f71557b252"
  },
  {
    "url": "assets/js/23.331d5dd3.js",
    "revision": "e36965c66638d58a67f414d96f3c1fc5"
  },
  {
    "url": "assets/js/24.f4c0351f.js",
    "revision": "5421a4c05390cf61390e5d2a572c4bca"
  },
  {
    "url": "assets/js/25.1fb30cdf.js",
    "revision": "4d6eb94f015952eca00499caca12aa37"
  },
  {
    "url": "assets/js/26.f138a39c.js",
    "revision": "41b21bb659d79e460dc3fca3e2cdbe7e"
  },
  {
    "url": "assets/js/27.d9668a8e.js",
    "revision": "57751a78f664a2b7a663afeb547dcc54"
  },
  {
    "url": "assets/js/28.65e22198.js",
    "revision": "4361ccb3bc98df752dd1d4a71257a5a8"
  },
  {
    "url": "assets/js/29.6f14f455.js",
    "revision": "5b1e704777cea35bfc247cd5bcb5df2a"
  },
  {
    "url": "assets/js/3.74f19d44.js",
    "revision": "9c5801595ea8da4943d0ebec13091c56"
  },
  {
    "url": "assets/js/30.99f31853.js",
    "revision": "a92cec8f41ad6dca6632197b483909ac"
  },
  {
    "url": "assets/js/31.8719e683.js",
    "revision": "62257b21849f2caf6083a4b98ae0e157"
  },
  {
    "url": "assets/js/32.16cd5c4e.js",
    "revision": "cb9613e5869f191c685aba1b6787e5d6"
  },
  {
    "url": "assets/js/33.19644551.js",
    "revision": "86e3c4cace832dd3677a9832b82436a8"
  },
  {
    "url": "assets/js/34.d23f5788.js",
    "revision": "09394bf79290f8cf93f68e1a122c9bb0"
  },
  {
    "url": "assets/js/35.223bdbc3.js",
    "revision": "afa7d7e7dd3804c2fa4729a51d307c00"
  },
  {
    "url": "assets/js/36.a5472a1a.js",
    "revision": "b56ae9299d368637a13d611f0025633d"
  },
  {
    "url": "assets/js/37.e95ecc13.js",
    "revision": "eb6793970f0b8e8643540c65948452cf"
  },
  {
    "url": "assets/js/38.c763d42e.js",
    "revision": "9de5dd1feef055f01a2ff1c281b2e2f7"
  },
  {
    "url": "assets/js/39.480355ba.js",
    "revision": "90cf7bc5554c91a75b9c450ab24c9e1f"
  },
  {
    "url": "assets/js/4.43a40d38.js",
    "revision": "c93e59bae46db585b40941eee325d90f"
  },
  {
    "url": "assets/js/40.8469a140.js",
    "revision": "ef16b03dabd5ccee9a0b53d836146140"
  },
  {
    "url": "assets/js/5.f17ff171.js",
    "revision": "4e5b7ab7daf1deb157e1dd96ed4aa917"
  },
  {
    "url": "assets/js/6.ca766acc.js",
    "revision": "872ec13550160cce6c5672239737a058"
  },
  {
    "url": "assets/js/7.0a128cff.js",
    "revision": "191b88426178b596afc3cdd0a35d6874"
  },
  {
    "url": "assets/js/8.25257b56.js",
    "revision": "c6c54731c96f6fd8ff023c59b3aa4107"
  },
  {
    "url": "assets/js/9.00b226d0.js",
    "revision": "262f599259800126cde238ff6f5f7394"
  },
  {
    "url": "assets/js/app.77ac08de.js",
    "revision": "6383d5a67c4ae37e205d5824bc174d93"
  },
  {
    "url": "cloud/aws.html",
    "revision": "628c768a3e3bca878eef86a531d2950a"
  },
  {
    "url": "cloud/azure.html",
    "revision": "c7577786aa31eb421f84c1235bac5eae"
  },
  {
    "url": "code/bash.html",
    "revision": "b106aae2d3b634cc1b3bf8822b858aa0"
  },
  {
    "url": "code/git.html",
    "revision": "7757f558a1955ab262821d9c251afb79"
  },
  {
    "url": "code/python.html",
    "revision": "afad9b8caad14c171d15d0083e10c255"
  },
  {
    "url": "code/python/class.html",
    "revision": "ede86fa272133a2370343ea04afc54c4"
  },
  {
    "url": "code/python/list.html",
    "revision": "32d4fc5072d60ea45dbea22c7ab71a57"
  },
  {
    "url": "code/webdev.html",
    "revision": "8815874084066b3d21409af8772ae572"
  },
  {
    "url": "devops/cicd.html",
    "revision": "f2d12687bff85863d02ea8d837b5d481"
  },
  {
    "url": "devops/databases.html",
    "revision": "bb2864aba1f9caf12457bb2cd34e95a6"
  },
  {
    "url": "devops/docker.html",
    "revision": "9b5b896650e3fc4bea1dd5231728d678"
  },
  {
    "url": "devops/index.html",
    "revision": "37d3923141558620c10122db3185208c"
  },
  {
    "url": "devops/sql.html",
    "revision": "5229ad3070f22b0208eb2fe7cf291fa0"
  },
  {
    "url": "devops/terminology.html",
    "revision": "18ae8f4b3a3eaeeae2b3f1d21cf806bd"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "de74ec5b551b259f18a622b0bd09aa78"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "caed4e343a36ffb51b1cc897684df49d"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "fe6f31597d259a4cee8816e0e5648d93"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "ca1a9f291cb52f312560d5da6bcb9732"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "789bbc5b0ad358dbdb983e2f94b481b9"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "88466d4ccfbf0e9afdf851ab21b3f252"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "2395407c3c92a4c3186e6292c1fa24e7"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "628466f875b49f0169418579849f8978"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "3193baaae3c87846f086fcc9e5f92405"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "d37aa998d3e3eade107f307855a79c76"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "9006c68335e865595ba4188a7be1dac2"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "5d3935ccf21dc805ff891cf365689fd5"
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
    "revision": "a1412fa0e2ebf1d120258457531b1a7d"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "ec650099d302dfdbcc51bb59d0f1ba8a"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "ec026cfb542b032c8d6d719fa409f64c"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "e662bc63d85febf6ebe6dcea0a815f66"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "952b08fb6b037f10f8a1a379dda7a703"
  },
  {
    "url": "other/http.html",
    "revision": "4dfc38ea54bbedbd1f82b64de1af48a0"
  },
  {
    "url": "other/jq.html",
    "revision": "9291087e364adc7c5e3e93614ab62b12"
  },
  {
    "url": "other/markdown.html",
    "revision": "4d8251fcd4f7eb114cdc358464497577"
  },
  {
    "url": "other/personal.html",
    "revision": "051c0ba6ee488a298f70459d58a0a2de"
  },
  {
    "url": "other/setup.html",
    "revision": "5e897729ff07ba2dcd3e7c7f8815c4ee"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "d184d8e93978574d5cb41f7e15df025a"
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
