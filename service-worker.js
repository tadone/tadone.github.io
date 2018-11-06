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
    "revision": "9fd2b3e9cb4a62e14b1b914def9bd597"
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
    "url": "assets/css/styles.51f1696e.css",
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
    "url": "assets/js/35.d9cb585d.js",
    "revision": "72c286fd4590f55eea0a6479da4a72aa"
  },
  {
    "url": "assets/js/36.446886c6.js",
    "revision": "94440511a50fc32c432d2bec644998bb"
  },
  {
    "url": "assets/js/37.526af219.js",
    "revision": "93abde52a2816662908af1ada2363636"
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
    "url": "assets/js/app.51f1696e.js",
    "revision": "df23aefa4dd0bb29d9114a7f91ff7343"
  },
  {
    "url": "cloud/aws.html",
    "revision": "c5d8a4ed4ba7f02113b09f86b18574b1"
  },
  {
    "url": "cloud/azure.html",
    "revision": "0a8b78c962fb1dc1b55eb4323b3103ac"
  },
  {
    "url": "code/bash.html",
    "revision": "a9389cfc4de0079f667e64f2a4250a75"
  },
  {
    "url": "code/git.html",
    "revision": "6e3953972ae3868c428c301183e786b4"
  },
  {
    "url": "code/python.html",
    "revision": "129a13af020f0dcbb4c9c657b624f822"
  },
  {
    "url": "code/python/class.html",
    "revision": "82ff63b4734dd2ddf6f66c95386f870a"
  },
  {
    "url": "code/python/list.html",
    "revision": "1c40488145aa50606db7604cc9e896ee"
  },
  {
    "url": "devops/cicd.html",
    "revision": "9ed0ffb4af8826b71fd2a8be21a79eb1"
  },
  {
    "url": "devops/databases.html",
    "revision": "7effdd5efe63117b45d0f1f75afd64b9"
  },
  {
    "url": "devops/docker.html",
    "revision": "7f4a04225de32abaa96638b7c4359ec9"
  },
  {
    "url": "devops/index.html",
    "revision": "804396917a5e2733166fb18639d3698c"
  },
  {
    "url": "devops/sql.html",
    "revision": "807baefe4478c394b3cfb2eaeca2107b"
  },
  {
    "url": "devops/terminology.html",
    "revision": "57f7702c08cf274803181c33d7c21995"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "ccc43eeadfe11f4ebfe4c32dc087962f"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "aaa9ef6bbebf40a49192dcaa8818645c"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "854dad26a213f513b4e30583303786c8"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "6ba21774fbc9c4e9b550bb30c042bdfc"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "c81471bb8927199e8be06d0e8da9578e"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "a1d9a866996b95854a96db28d5577280"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "e089e8d482a45c1f8acd42755a585fed"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "f22a3a0cd327bd759d8abbca159313e2"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "159abecfd1f055c2de1b3d059d6ed100"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "917469bd072c3f36fe52386e7b1d9447"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "b3097a25c0f8bdfadaaa161e4e545581"
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
    "revision": "e985223dbc2d1676bab7955676343b21"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "886283b5dd600054814b341763018511"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "750a8d2e31f39349dcf27b3af9ca4851"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "b35146cf7a9007a55d3b73f5e94644b4"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "90d2d78bb9677fb7339fce333a717dd6"
  },
  {
    "url": "other/http.html",
    "revision": "48831723b79e54d2e14f49a015bea68b"
  },
  {
    "url": "other/jq.html",
    "revision": "2519d1da80610758ac25eb6ccdad9979"
  },
  {
    "url": "other/markdown.html",
    "revision": "9c72df504d74d97c339d1bd8e0fe1f05"
  },
  {
    "url": "other/personal.html",
    "revision": "0adfcd49de84741401b938f3c203357a"
  },
  {
    "url": "other/setup.html",
    "revision": "dbb7cbdc3f446d1450376f4a078a51e8"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "b86ea6aa7bf7169773fda2589137bf3a"
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
