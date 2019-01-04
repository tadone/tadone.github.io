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
    "revision": "1dbb9ae6206050c8733bad6ca61e3366"
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
    "url": "assets/js/23.7c3301fb.js",
    "revision": "5def89b8f1a3a7ed87022a7cb20c3cff"
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
    "url": "assets/js/37.a2133e62.js",
    "revision": "a2954806d0088fc9dd742c583370ee49"
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
    "url": "assets/js/app.ae939ea8.js",
    "revision": "0dda1cbcab5335557f433d200e1c3aeb"
  },
  {
    "url": "cloud/aws.html",
    "revision": "dd6550137dd8dd2840e7d7df2ddd9641"
  },
  {
    "url": "cloud/azure.html",
    "revision": "b1de595223c56ffd93b5a4be9933b89b"
  },
  {
    "url": "code/bash.html",
    "revision": "502bdf570bf8b0e0ec3ffadabdc3b143"
  },
  {
    "url": "code/git.html",
    "revision": "c5cbc4ca5c5c2a16a2b46c8317939b93"
  },
  {
    "url": "code/python.html",
    "revision": "4a30e5fd14a5dcf87f7a63eaf18a0e14"
  },
  {
    "url": "code/python/class.html",
    "revision": "2f122d51ef2803df6e3586860216a863"
  },
  {
    "url": "code/python/list.html",
    "revision": "54d623e9298be58d8f8dd40642433a6b"
  },
  {
    "url": "code/webdev.html",
    "revision": "e6f05361cb6862fc870972ff728c98ac"
  },
  {
    "url": "devops/cicd.html",
    "revision": "91d8233323012eec7fc5065d20f1f62e"
  },
  {
    "url": "devops/databases.html",
    "revision": "c18b4e77098e1fd662af314f452315ca"
  },
  {
    "url": "devops/docker.html",
    "revision": "d60347232f258c6b3c28c569ba86d56f"
  },
  {
    "url": "devops/index.html",
    "revision": "8a28b03d16ef55761a484b948c9ae3f7"
  },
  {
    "url": "devops/sql.html",
    "revision": "5b8da251f1630b160d06e8064870e788"
  },
  {
    "url": "devops/terminology.html",
    "revision": "5dd76e9a150af11a6bfb975ff2094f0b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "d3dff482b9a8f8ce0805f781ff41c926"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "3a98281b89c9b330616fa784d31261c0"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "3973c3051a4ebc59b3a331303ff20467"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "f24cae154386a123189aa2d7072a7a6d"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "c1a3ea6c438ce59780fe1d523618d9af"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "f26ed657353c5e1746af30e27a74bbee"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "9d04bc1eb0415dc5287722a2b9c9d857"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "5ee8dd55438f4a4aa0bfeaddee8ea7b0"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "37a05c43aada6d4c398eafd6897d4e5d"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "852e5caf99f00af1c7848c19f4f2d041"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "67f700f5c027620047f991b320abba08"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "48f34c87db6ae09e60d2a53fc280d485"
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
    "revision": "3dfd2d02cf4169370329f82aeaf32a63"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "af211cf937838d95970717910c983efd"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "6e15c8279f5799dc6ff92fba4e892d11"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "93385472592672f6790241daa07d3a7c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "e73ff10aee7f092c6938f7a0f749a05b"
  },
  {
    "url": "other/http.html",
    "revision": "46b84f84fd92fe53547572e7d6202aaa"
  },
  {
    "url": "other/jq.html",
    "revision": "a42476d2b58628274ce67f54febcacb1"
  },
  {
    "url": "other/markdown.html",
    "revision": "d7c8a40fa33806183be7304aa49e4d01"
  },
  {
    "url": "other/personal.html",
    "revision": "7f12c20983cc323365e2ec13f361deae"
  },
  {
    "url": "other/setup.html",
    "revision": "7489b7334c2adbf671a6874d7552a7a0"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "518385ff4825f68e6661f38956383df0"
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
