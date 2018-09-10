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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "41de17f5887a8ff9cf47f138b41ad821"
  },
  {
    "url": "assets/css/0.styles.96496881.css",
    "revision": "7f415dc4cafaee35dc1fb3f84b608ed0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aa5f0524.js",
    "revision": "af20220d9579d429a187051fd50a8c7b"
  },
  {
    "url": "assets/js/11.ac43ff3e.js",
    "revision": "756a1945c590aec081b547f9c2b2346e"
  },
  {
    "url": "assets/js/12.df285fec.js",
    "revision": "a3ae33a350a8f559984e0e297262fa5d"
  },
  {
    "url": "assets/js/13.d737b4ae.js",
    "revision": "d1efa9c5fcfbd96dfa15574737dac3f2"
  },
  {
    "url": "assets/js/14.25d03c01.js",
    "revision": "30a2fd60150ec8d16e135feaeab9ea51"
  },
  {
    "url": "assets/js/15.8aad5f20.js",
    "revision": "4a59fc40cae769fb4d6a686c29ea18e1"
  },
  {
    "url": "assets/js/16.f1ba950e.js",
    "revision": "faa0bb3411545fdd4e5eff181160d5a2"
  },
  {
    "url": "assets/js/17.8637b25d.js",
    "revision": "57996a2388f6ca9e1f0c9d58facd07a2"
  },
  {
    "url": "assets/js/18.052f6cd0.js",
    "revision": "2801a6d9607610a74076c3cfa34b6412"
  },
  {
    "url": "assets/js/19.aec02ba9.js",
    "revision": "bd9c899e210343844e84ddcf6bfdc01f"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.cfbf1745.js",
    "revision": "bf5b159a650ce712e3f354ed6c77f50e"
  },
  {
    "url": "assets/js/21.45fdb543.js",
    "revision": "f21faa83b03b2af005be3e8f04944b30"
  },
  {
    "url": "assets/js/22.33f3b6e3.js",
    "revision": "de3bddd4c2c0b0e14a27d475f115ec6a"
  },
  {
    "url": "assets/js/23.b18199fa.js",
    "revision": "d3678124909e3cfb4a284b8d60bb9ebf"
  },
  {
    "url": "assets/js/24.3797fad7.js",
    "revision": "899e21abf660961f642e065f5e818c3e"
  },
  {
    "url": "assets/js/25.84f3b2bf.js",
    "revision": "8d108a888ab0378fc4a15e34ed90e7d3"
  },
  {
    "url": "assets/js/26.44a24a3e.js",
    "revision": "2409eae28ea844484710f77a45a7fc6e"
  },
  {
    "url": "assets/js/3.7c862992.js",
    "revision": "67afcae258f29290736a213075839510"
  },
  {
    "url": "assets/js/4.f18143d6.js",
    "revision": "93751afab35417a49719fcf16f72717f"
  },
  {
    "url": "assets/js/5.c6f8ec49.js",
    "revision": "11821cdd0cfe1b2642eb995aac7f8a96"
  },
  {
    "url": "assets/js/6.73fb740f.js",
    "revision": "1f8aa89152480f2c68bff20dcca8b2e8"
  },
  {
    "url": "assets/js/7.e3a7712c.js",
    "revision": "878155876799dcac5ef3f57b6af54531"
  },
  {
    "url": "assets/js/8.227c887a.js",
    "revision": "6c39419c3c5a2904ecb43f4ece77acda"
  },
  {
    "url": "assets/js/9.bd5e5552.js",
    "revision": "5fc39079bf91f6dfb2e3253528899c22"
  },
  {
    "url": "assets/js/app.8fde7e85.js",
    "revision": "ed8aa451eed5ec8a0069638e54560f52"
  },
  {
    "url": "cloud/aws.html",
    "revision": "3a8704ea32fc46453f44d6a1a8905426"
  },
  {
    "url": "cloud/azure.html",
    "revision": "2a1ba3987160ad6b44673de6f5c1faef"
  },
  {
    "url": "code/bash.html",
    "revision": "20904525f2dce8728a63364bfc8e4a6e"
  },
  {
    "url": "code/git.html",
    "revision": "f2c604c67f6c9324ab24ab4cc24e1259"
  },
  {
    "url": "code/python.html",
    "revision": "0372f0444c79b1087e49469ae246b4eb"
  },
  {
    "url": "code/python/class.html",
    "revision": "d55d5853421378b774046838f4f7d822"
  },
  {
    "url": "code/python/list.html",
    "revision": "ac2cf32eb3d3a8130a95c798625096b1"
  },
  {
    "url": "devops/cicd.html",
    "revision": "1ebad6ae401906e989a3f95b256c26f5"
  },
  {
    "url": "devops/databases.html",
    "revision": "fdd134bce3941dc4f07a92921a326321"
  },
  {
    "url": "devops/docker.html",
    "revision": "b5b3ecafe13cf5c16e0447ee70e95074"
  },
  {
    "url": "devops/index.html",
    "revision": "412aff28aa6393aaa62da6ccadc73c8e"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "edadcba8726538c511f6f6ef143b8cc1"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "593ea66fdac8f2ed957f1b2da4510d0c"
  },
  {
    "url": "devops/terminology.html",
    "revision": "9a17d151dbedc0309ffcae65974b707d"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "52b503f139e22685de5c6b56e66bb486"
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
    "revision": "cef16d55916a2cf20ebc5d7a30d61f5c"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "34a5059e1b314184ffbe5f92e14f973b"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "501502ccddb7ca9cb14b77d12f32dc4e"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "ecb4d4b860aef63cf305ed2ec9f10a65"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "bd3baa0f11bc5b8fd6863dcdc9a80da1"
  },
  {
    "url": "other/markdown.html",
    "revision": "9dca3507d6bdc59ffb5e251e4362bb82"
  },
  {
    "url": "other/setup.html",
    "revision": "15a6ea3dfa241f92b4c9a8b2b34ada36"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "096ab7739362818f404df76b96e80dec"
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
