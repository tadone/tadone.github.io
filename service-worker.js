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
    "revision": "0aac801dcb25a63bc1c1b75f35366f49"
  },
  {
    "url": "assets/css/1.styles.f28abe57.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/2.styles.2de172b9.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/styles.44b68d2d.css",
    "revision": "97c2ff9cfd788422d1f52fb878f44634"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f28abe57.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/10.16a05b55.js",
    "revision": "5897774bdc410c0b68f9e9f300c3c1d7"
  },
  {
    "url": "assets/js/11.f4fe28fa.js",
    "revision": "7d0e00834b79b1f0dded4bf450b8db07"
  },
  {
    "url": "assets/js/12.38d6d7a7.js",
    "revision": "69f95bdf068f7e65f3257884fc53c91b"
  },
  {
    "url": "assets/js/13.dbcc1320.js",
    "revision": "0909139cf522cbc8869170a54e86049c"
  },
  {
    "url": "assets/js/14.99491fc3.js",
    "revision": "225867101138425a422906dec02ee757"
  },
  {
    "url": "assets/js/15.5c4bffce.js",
    "revision": "8785fba1c06c1c8c7d9fde653cc5eb24"
  },
  {
    "url": "assets/js/16.6e9441a4.js",
    "revision": "77894f1d7a70d83af289d23ad483bd25"
  },
  {
    "url": "assets/js/17.800126d3.js",
    "revision": "65cc5bfb8f458db269ab6a9d6bf243eb"
  },
  {
    "url": "assets/js/18.b3068d58.js",
    "revision": "9c95e8354d0ba331adef5065963a0dcb"
  },
  {
    "url": "assets/js/19.ee1d9207.js",
    "revision": "1566d193f94150b2b43c57922b11a541"
  },
  {
    "url": "assets/js/2.2de172b9.js",
    "revision": "fc014b1035d55c4f2163ee7cfa5b7ea2"
  },
  {
    "url": "assets/js/20.921933c2.js",
    "revision": "c1f3b364a0b6c482f86dfe234443caaa"
  },
  {
    "url": "assets/js/21.3a92c789.js",
    "revision": "e75935621e8015fcdb88671f25ba7ac6"
  },
  {
    "url": "assets/js/22.55d81e79.js",
    "revision": "fbfd7a8f8ab0031383cd2d5b38d0d0e9"
  },
  {
    "url": "assets/js/23.4cf5065b.js",
    "revision": "62f2a7c422c76cad88d8e4315a14b240"
  },
  {
    "url": "assets/js/24.923e7832.js",
    "revision": "758ce2c046ec7716d3436911cec220a2"
  },
  {
    "url": "assets/js/25.7d9668fc.js",
    "revision": "baa2186cef9318ab0ed9ebec5f7b7ab2"
  },
  {
    "url": "assets/js/26.ea54bb10.js",
    "revision": "8978dc8982b5aba4c2172ab0bb1b6db8"
  },
  {
    "url": "assets/js/27.c461919f.js",
    "revision": "0acbcbd3d325d5446897ef45377d55d8"
  },
  {
    "url": "assets/js/28.197a2744.js",
    "revision": "07d06ab7037b89833b8f177d28dbf073"
  },
  {
    "url": "assets/js/3.436de925.js",
    "revision": "f36f7f289b7d98a7d52947c4386d4113"
  },
  {
    "url": "assets/js/4.f8618dac.js",
    "revision": "0072418427ab09e3c578ecd1c4f0d06c"
  },
  {
    "url": "assets/js/5.cefd3db2.js",
    "revision": "0b914e6861c8d5b704bc019cd3f0b11a"
  },
  {
    "url": "assets/js/6.f2a1b570.js",
    "revision": "700250c1d8a705ffec7d265d42444340"
  },
  {
    "url": "assets/js/7.f3145748.js",
    "revision": "f6c3d9ad0faac9b89afa8760c1dd18bc"
  },
  {
    "url": "assets/js/8.4a6b8d65.js",
    "revision": "85c485a26ab31658a0b3940f33ad59e5"
  },
  {
    "url": "assets/js/9.00bb4c1f.js",
    "revision": "d1f70059cf3a0cd8062f5964e13e40ec"
  },
  {
    "url": "assets/js/app.44b68d2d.js",
    "revision": "30546c11dd4c114ff5794600c7d78562"
  },
  {
    "url": "cloud/aws.html",
    "revision": "de4908e7f2b8b0d0414bf676459e0518"
  },
  {
    "url": "cloud/azure.html",
    "revision": "973652c9dc558808500f43555d9891d9"
  },
  {
    "url": "code/bash.html",
    "revision": "64588f12ebbbfe159654193d2e805843"
  },
  {
    "url": "code/git.html",
    "revision": "e27de349a8e36e79cebbe7142a35cc63"
  },
  {
    "url": "code/python.html",
    "revision": "dd4bad7439854276027344056eeb058a"
  },
  {
    "url": "code/python/class.html",
    "revision": "fe1391896813194e2b67d16149a52cc9"
  },
  {
    "url": "code/python/list.html",
    "revision": "7c5d337da6a598f6f0f3a147bb064ffa"
  },
  {
    "url": "devops/cicd.html",
    "revision": "fffd51dc471de2029327905556919c8c"
  },
  {
    "url": "devops/databases.html",
    "revision": "ad24b89740d5e4088f3aa8c1e206d99d"
  },
  {
    "url": "devops/docker.html",
    "revision": "c63d4d057d2c91448bf4c8d00e03de1d"
  },
  {
    "url": "devops/index.html",
    "revision": "5d3ebf439711d725349b0148be375c6c"
  },
  {
    "url": "devops/k8s_features.html",
    "revision": "203d2234a9ebe3dd8881dc588e9462e3"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "14e152f256ad526396594ca30fd55f6c"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "164ca0385546e5a73237b0bdd8e12ce6"
  },
  {
    "url": "devops/terminology.html",
    "revision": "e20df0b5accc4a78f3fa12576a510a23"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "8a19c3af0ae25115e7113f594554dc01"
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
    "revision": "abcaf98d3ad4dac31134c94e6a3f4317"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "8122ea955fa6f1ecf9aebbb8c9502579"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "ce7a991ea2613e3940783551827d0b13"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "3bdb281b73eeaf81455ffe7ef4c18866"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "78798ba3b589964626d415927930e993"
  },
  {
    "url": "other/http.html",
    "revision": "798c48ee292e439968b9bdad078d505a"
  },
  {
    "url": "other/jq.html",
    "revision": "bbfe619f5df074807b20cc1c676b9541"
  },
  {
    "url": "other/markdown.html",
    "revision": "6c0f69080e2a92ecefec80110667bb6f"
  },
  {
    "url": "other/setup.html",
    "revision": "c19ad54989d262b571b948bd6fba64cb"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "087d1ec799505a95270588a38840ff92"
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
