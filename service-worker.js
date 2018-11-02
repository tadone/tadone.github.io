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
    "revision": "0e6a8325b469e70891ad139b2943b559"
  },
  {
    "url": "assets/css/1.styles.e3fe890c.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/2.styles.c5aa97a7.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/styles.979a78ee.css",
    "revision": "97c2ff9cfd788422d1f52fb878f44634"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e3fe890c.js",
    "revision": "b419b78188cdecf4e282ce4362723c87"
  },
  {
    "url": "assets/js/10.87990c44.js",
    "revision": "a6523844eb496c383b27f6b82f03039e"
  },
  {
    "url": "assets/js/11.8a8d391f.js",
    "revision": "063ba861dfb91dd7d4ea5ac1e7ca226b"
  },
  {
    "url": "assets/js/12.d48b2b91.js",
    "revision": "5051073aeaef6863cd403c8f963ad3a5"
  },
  {
    "url": "assets/js/13.8cbad979.js",
    "revision": "2a220d4af6893fecbb5463629c8464fd"
  },
  {
    "url": "assets/js/14.444da78a.js",
    "revision": "b5a2d329dfad5bc3fce829ca160ff50f"
  },
  {
    "url": "assets/js/15.c0c03324.js",
    "revision": "89642334cc253325f13de4e34e816820"
  },
  {
    "url": "assets/js/16.79131c79.js",
    "revision": "ae85ecfd71d4866036aaaa3e69fac85f"
  },
  {
    "url": "assets/js/17.0342aa7f.js",
    "revision": "8d3ac72b83556b69fb66efe42ae90ab3"
  },
  {
    "url": "assets/js/18.658e28ec.js",
    "revision": "9e82c83884c901abf97d76e6a162b76f"
  },
  {
    "url": "assets/js/19.56d77f24.js",
    "revision": "8b3dd998514126dc78457b65588a0020"
  },
  {
    "url": "assets/js/2.c5aa97a7.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.12f407b2.js",
    "revision": "b00f7ff1d25007c9615c8009ea0e3a85"
  },
  {
    "url": "assets/js/21.c2eba41f.js",
    "revision": "106438de149a00413c94bf7f16be41fa"
  },
  {
    "url": "assets/js/22.794a92a5.js",
    "revision": "1056afcaf61fe7eb0075ef469cb7c35e"
  },
  {
    "url": "assets/js/23.11e1a93c.js",
    "revision": "7d8af76be4b862db8170ed9a921e59a4"
  },
  {
    "url": "assets/js/24.532f4498.js",
    "revision": "fa5390bde1f4558fecdc8c6ceb3482a2"
  },
  {
    "url": "assets/js/25.2e9bb212.js",
    "revision": "e1ab5c8b73c21b4544c9affb30c754a1"
  },
  {
    "url": "assets/js/26.2e6e5328.js",
    "revision": "4bacb78e400ce5fb44a7a3a2477293b5"
  },
  {
    "url": "assets/js/27.b6f90799.js",
    "revision": "c7ab4bf7bec22c03e20c6cc666b45337"
  },
  {
    "url": "assets/js/28.61162adf.js",
    "revision": "802b490fe173904bbf7c12dbef7caef7"
  },
  {
    "url": "assets/js/29.d7a05f22.js",
    "revision": "e96f91e214612f94b3227312a415f154"
  },
  {
    "url": "assets/js/3.f3e56684.js",
    "revision": "d22ae7e270ff163fe56b43c002457ab3"
  },
  {
    "url": "assets/js/30.f07e2f56.js",
    "revision": "2ed8cfcd4d905ae6f41ab47cb8865a7c"
  },
  {
    "url": "assets/js/31.37ef77eb.js",
    "revision": "5d7dcb1f3702588226586345788a6b32"
  },
  {
    "url": "assets/js/32.e260d8e9.js",
    "revision": "ae97221322756f55bcc18d47acd1e7af"
  },
  {
    "url": "assets/js/33.902d8fde.js",
    "revision": "2a24c65a1a4bcbba2dea1c345fe36acb"
  },
  {
    "url": "assets/js/34.45b4b139.js",
    "revision": "d5072bcce5100a1386c1f6732d8f9ed9"
  },
  {
    "url": "assets/js/35.ed86e038.js",
    "revision": "4ab8c9f586d39af67ec7e35d426f5090"
  },
  {
    "url": "assets/js/36.8edfcdb5.js",
    "revision": "22bf867604d209f908d28e49e892a20b"
  },
  {
    "url": "assets/js/4.3273090a.js",
    "revision": "f75cda27a8b8fb877433a114f23b1a16"
  },
  {
    "url": "assets/js/5.836c6da9.js",
    "revision": "4e02a69e8a8086af102a9739c6eeb881"
  },
  {
    "url": "assets/js/6.40427144.js",
    "revision": "a0fe012ed96c3c1cbdcb5df36e1a1908"
  },
  {
    "url": "assets/js/7.96c5f51b.js",
    "revision": "d5e09272bb28f1014e314d3e118a157d"
  },
  {
    "url": "assets/js/8.1577d1ec.js",
    "revision": "ce11d91d46d0b7636eec373d65ef2d46"
  },
  {
    "url": "assets/js/9.81183b91.js",
    "revision": "59369a758c0628339dce9f649c0515ad"
  },
  {
    "url": "assets/js/app.979a78ee.js",
    "revision": "cd19fc7e6675aef3a6875bd8ca2b2bf4"
  },
  {
    "url": "cloud/aws.html",
    "revision": "c2ff6ee732d56cc72d5cfddc4ec6099c"
  },
  {
    "url": "cloud/azure.html",
    "revision": "d5fb1e35225fb1100a572ade8c9171ed"
  },
  {
    "url": "code/bash.html",
    "revision": "10a43d129a2ebca724f03b11b2c2a4fa"
  },
  {
    "url": "code/git.html",
    "revision": "29d6b0be4c352c3581581babb9626556"
  },
  {
    "url": "code/python.html",
    "revision": "647daac9938e1be0c9a0b693ee1da958"
  },
  {
    "url": "code/python/class.html",
    "revision": "93fae4d305194d1b784438d297eeacd2"
  },
  {
    "url": "code/python/list.html",
    "revision": "a01b831bcd1a9a374f8767dbd7206278"
  },
  {
    "url": "devops/cicd.html",
    "revision": "af3d319a1f0d71b7a73dded17dec2c7a"
  },
  {
    "url": "devops/databases.html",
    "revision": "d0fba26607a15e08e7ed3d6d83103df7"
  },
  {
    "url": "devops/docker.html",
    "revision": "d07743681f7421824a5022ec4246fce4"
  },
  {
    "url": "devops/index.html",
    "revision": "5e45c5bd40d600d9be1a5caca933c972"
  },
  {
    "url": "devops/sql.html",
    "revision": "45c48799f17f9ba7454c9cc546541267"
  },
  {
    "url": "devops/terminology.html",
    "revision": "d2080e88eb9954863a35bb3050247b75"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "22a612c4cff60f4f795cec5253040bad"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "85632b148e16b07523844a44510e42b0"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "94b91f10b9320d827534f2fab7bd261a"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "0f04e6fc9a5aa6397db6df6c18242d95"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "3b86df33dd42c7f46e6e776e7c1e00c9"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "1cccd29dfbd982c3d390491d1fdcef91"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "c8d60f09831a9f30d9d34cadc8871d6c"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "4761e81e2647103612565483ea5b663e"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "7d2cd9f4e5f6d29505ef14ade8f98125"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "4c2db7f8cd44eebfa33435e49e588882"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "39d1468ece74f9cfcb90c0c7f7c849b8"
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
    "revision": "537a67dc00d421b47e51ba0d5d38bdc6"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "98274421a0c482d389f489a8ee2337a1"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "2ae0172b7fba7fd42f68559817766892"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "9b79e5bfc5b05d36946c4801f618bfe8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "f9a8aa0a25ef6471a959f9791ccf3580"
  },
  {
    "url": "other/http.html",
    "revision": "645fa19b8a8de58a14529c8dc126b692"
  },
  {
    "url": "other/jq.html",
    "revision": "40ec3d240027d3f8fd0d3bc1441e2658"
  },
  {
    "url": "other/markdown.html",
    "revision": "edb1b74d4a521488a75269664688e682"
  },
  {
    "url": "other/setup.html",
    "revision": "c4897794a8f5ab5a6b83c860608967f5"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "8fc6c69d424fcadf4dee8d99469d6ff6"
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
