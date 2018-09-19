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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "df2f2929a453f5736f036ba4360c4e96"
  },
  {
    "url": "assets/css/1.styles.f28abe57.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/2.styles.584dc034.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/styles.74f4b427.css",
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
    "url": "assets/js/10.9e878919.js",
    "revision": "47bfd52e500b19763d5625e931ee310d"
  },
  {
    "url": "assets/js/11.33fcff7c.js",
    "revision": "273808f50700cfdb2eae5a3784844dc8"
  },
  {
    "url": "assets/js/12.13f70706.js",
    "revision": "4e75c05d483e4a8453e9139d5b0e14f9"
  },
  {
    "url": "assets/js/13.b5cd5567.js",
    "revision": "880d47bcd5bc164c881f79ae0db45685"
  },
  {
    "url": "assets/js/14.f0596749.js",
    "revision": "625a57db62662ff96e1f21ed93e5b63c"
  },
  {
    "url": "assets/js/15.ba40f479.js",
    "revision": "5e61d1bd8b884382910e0f8574c712da"
  },
  {
    "url": "assets/js/16.837c7fad.js",
    "revision": "fe27d4c33499685784fe0e7399505313"
  },
  {
    "url": "assets/js/17.31ddad05.js",
    "revision": "5797422a32b8a307e23d180d656c0e5f"
  },
  {
    "url": "assets/js/18.9dc9ccb0.js",
    "revision": "05922916daddc2275b7ca4e8b6130514"
  },
  {
    "url": "assets/js/19.5c3ea9ea.js",
    "revision": "b99fe60605d5230dd137a9877a0d645d"
  },
  {
    "url": "assets/js/2.584dc034.js",
    "revision": "ae64e294b54d2176f8a20b2b65af12c8"
  },
  {
    "url": "assets/js/20.f38aeafb.js",
    "revision": "a9852921e6ce35636582e6d486a73982"
  },
  {
    "url": "assets/js/21.52e9483f.js",
    "revision": "f39cac109c2d5651d41787d04018886c"
  },
  {
    "url": "assets/js/22.ecc136ac.js",
    "revision": "1ed14084e9d5fba1e4beb62ed15cac45"
  },
  {
    "url": "assets/js/23.684ab2b4.js",
    "revision": "4b4e84f984465a291fa086bfd6004513"
  },
  {
    "url": "assets/js/24.bd0de78b.js",
    "revision": "24617cf4645b3faad361255f81e34f02"
  },
  {
    "url": "assets/js/25.82785ced.js",
    "revision": "27e8059a4920c98def2d77b800a20902"
  },
  {
    "url": "assets/js/3.454e9242.js",
    "revision": "848b98478fd5d10d02fb2e738a11cfb8"
  },
  {
    "url": "assets/js/4.2248de0b.js",
    "revision": "3fc5d8b85b4c9872298efcb63ebe1a38"
  },
  {
    "url": "assets/js/5.6baeede7.js",
    "revision": "121facc33ec33b8571c4b1f54ef05355"
  },
  {
    "url": "assets/js/6.c222b924.js",
    "revision": "e4d27e505db44e46d70126aeccbe04fc"
  },
  {
    "url": "assets/js/7.ee03ef24.js",
    "revision": "14b31931386615bf1fb353fcd77449d1"
  },
  {
    "url": "assets/js/8.009491db.js",
    "revision": "b218b02bfd503a8cd4a508846b9ea243"
  },
  {
    "url": "assets/js/9.ed66fbc0.js",
    "revision": "79c207c9fcccd1f2bd0659f8cd847645"
  },
  {
    "url": "assets/js/app.74f4b427.js",
    "revision": "db62092db68d742e076a80daef1af409"
  },
  {
    "url": "cloud/aws.html",
    "revision": "ad2e70a29fa2c6d99c3f3db8c20cf73f"
  },
  {
    "url": "cloud/azure.html",
    "revision": "e4acfbc36c24665a928d278b1b2a6056"
  },
  {
    "url": "code/bash.html",
    "revision": "c45ba8995f8df547d9b2f60fcdada06b"
  },
  {
    "url": "code/git.html",
    "revision": "d7b66eef39322f272084486b97adf3c0"
  },
  {
    "url": "code/python.html",
    "revision": "f165217db39e49ecc37e65935090b8d2"
  },
  {
    "url": "code/python/class.html",
    "revision": "3fd85ee9d787a295a3f24f2afca90ea6"
  },
  {
    "url": "code/python/list.html",
    "revision": "da6ff5b346b86baaefc60175e610bb2f"
  },
  {
    "url": "devops/cicd.html",
    "revision": "85820b463627d292f36c52550b837e97"
  },
  {
    "url": "devops/databases.html",
    "revision": "638f96c331dfb8db8e63fedefe68c6f1"
  },
  {
    "url": "devops/docker.html",
    "revision": "382acadf9dacae22d88236a974b66bec"
  },
  {
    "url": "devops/index.html",
    "revision": "60cc39f4c188e236ec1908f7f4e234b4"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "84d1e1b73db72eaf2d3239c9a602e9d5"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "8c46d0eb60690b7e63c4c9cf1fa57700"
  },
  {
    "url": "devops/terminology.html",
    "revision": "ca2c360b51adbe0b9f2bae516fc71b53"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "c9cc7e3d1cd9d25aff3c45797338a264"
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
    "revision": "b16fd0bda4fd685d560135d76825478b"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "aaaaea4b80d1fc33e5f955e726011324"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "3c9ac5c1da36f7cbeff410f5648f3e06"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "31ed8345bd6000e553e5c35aa63221a4"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "bb4cb5d04b0a907cf1dc8fe8cec57b01"
  },
  {
    "url": "other/markdown.html",
    "revision": "968abd99709de41dee11538292979aa4"
  },
  {
    "url": "other/setup.html",
    "revision": "28be2e6484b78aae1a577951cd0079b4"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "1ac33df16d8d2687e22e1046a40f2b4c"
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
