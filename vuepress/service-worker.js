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
    "revision": "7c0e9b347694f1f37d652a5a7bb53800"
  },
  {
    "url": "assets/css/0.styles.bae09ab4.css",
    "revision": "3e65936c7521a00978624c4ec8556d33"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b997fc50.js",
    "revision": "c9de6112bdf50ea2d494abeaebfe4799"
  },
  {
    "url": "assets/js/11.1ea41ea8.js",
    "revision": "597c7d433ec725d6b3d003c990353c0f"
  },
  {
    "url": "assets/js/12.c33331cc.js",
    "revision": "9bfa67dd0f4397e7305e225acbc1a978"
  },
  {
    "url": "assets/js/13.8c3d40cc.js",
    "revision": "38ec7414bb06acc8011fa27efb239fa4"
  },
  {
    "url": "assets/js/14.8b4882af.js",
    "revision": "06eb0b7f11096dd750e8d97391a9f471"
  },
  {
    "url": "assets/js/15.79fefb10.js",
    "revision": "90ce92c4b8b4de6883d73b07b5796643"
  },
  {
    "url": "assets/js/16.a224ec99.js",
    "revision": "394e99314e29c7e92191fe67e9d6bba1"
  },
  {
    "url": "assets/js/17.e862dd8d.js",
    "revision": "caac2563cbb8480fdda2274e4be56611"
  },
  {
    "url": "assets/js/18.bc105fe9.js",
    "revision": "f24029e75bcd83f80a64b9197dad256d"
  },
  {
    "url": "assets/js/19.eb88aed5.js",
    "revision": "3303dbe7856f3e0d8c400575d01767ea"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.755dd41e.js",
    "revision": "ac3fb2cc7ee9a221b4f65bc3004ed589"
  },
  {
    "url": "assets/js/21.f14dcf14.js",
    "revision": "ecba2b505ebaea0cdb268f6b138421e1"
  },
  {
    "url": "assets/js/22.d3ddfe0a.js",
    "revision": "c3682c2cd4fd2f9be2147c7f530d513b"
  },
  {
    "url": "assets/js/23.907ccc55.js",
    "revision": "c0a0fbb811ad3bd7af80fbb620b436bf"
  },
  {
    "url": "assets/js/24.12e78f46.js",
    "revision": "d882422a6233d52c85f202ec2cfa1721"
  },
  {
    "url": "assets/js/3.eb449b14.js",
    "revision": "386ad2d5f69eea934794fb648a20bdc3"
  },
  {
    "url": "assets/js/4.f6f95004.js",
    "revision": "be56fdc724b493ec790fbd5c9f9b4483"
  },
  {
    "url": "assets/js/5.2cc8bff7.js",
    "revision": "a8c72391034f98308ae21ed47255e5ed"
  },
  {
    "url": "assets/js/6.3995fea3.js",
    "revision": "345071f6e5ba580125bb83d07ce30114"
  },
  {
    "url": "assets/js/7.612eff5e.js",
    "revision": "cabc4e3e6e3759ff092c4d5bd5d6aaa0"
  },
  {
    "url": "assets/js/8.847774ef.js",
    "revision": "641971dd24b0b0137614249aad5c5a70"
  },
  {
    "url": "assets/js/9.a1480697.js",
    "revision": "dfadda189d0913354a95ebe0f6c5a9be"
  },
  {
    "url": "assets/js/app.3cf707bc.js",
    "revision": "68a7078d15ee40c3e68fb9c3f96b80ce"
  },
  {
    "url": "cloud/aws.html",
    "revision": "997247fae840ca1ed5167c018e101203"
  },
  {
    "url": "cloud/azure.html",
    "revision": "dba66970b03bfbdbc89e05fe8a4a88b8"
  },
  {
    "url": "code/bash.html",
    "revision": "fa0e79ef8e23f310e4224ae7195bd2df"
  },
  {
    "url": "code/git.html",
    "revision": "bb73c01a9d923f1124d3baa42d6adee7"
  },
  {
    "url": "code/markdown.html",
    "revision": "806a278c0246db00c1852310847f5fc8"
  },
  {
    "url": "code/python.html",
    "revision": "5709f364495940a5d2e9f40bb7ed4cfe"
  },
  {
    "url": "code/python/class.html",
    "revision": "307205d33e88469f0b0519b6717f3a6e"
  },
  {
    "url": "code/python/list.html",
    "revision": "a2094cf607a6f6b514e40a1105321354"
  },
  {
    "url": "code/yaml_json.html",
    "revision": "306bac5d21046b681235f197c1ad9f6b"
  },
  {
    "url": "devops/cicd.html",
    "revision": "2cd7d1005b8f37cc76599ace723e4dce"
  },
  {
    "url": "devops/databases.html",
    "revision": "a2b2f9d6964b69356058a3eb4549cca1"
  },
  {
    "url": "devops/docker.html",
    "revision": "3b8e2eb96e8ee303eccc5fb76bfcabbe"
  },
  {
    "url": "devops/index.html",
    "revision": "9546f71b1171b338e47b1947503e3130"
  },
  {
    "url": "devops/terminology.html",
    "revision": "b0b70a6e2d5663ce544c809e68c1b117"
  },
  {
    "url": "index.html",
    "revision": "c99700f274fd6fce13f45fc7f8f80e28"
  },
  {
    "url": "linux/bash_shell.html",
    "revision": "eec974239333472b7d9a744140c9d392"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "61ce527f47f9b3c97eee1c622b18d09f"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "0072c3070efbc2d1f94dccae6704cd1e"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "68e38f7b53c24d9c025a8ad3e6eb9987"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "b9e456f3a229d7ddcd6b15ea25254f22"
  },
  {
    "url": "other/setup.html",
    "revision": "c77601b068f46de6a620144a7f44892a"
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
