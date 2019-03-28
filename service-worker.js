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
    "revision": "1c862b4eea20df496282036d94dbdbc1"
  },
  {
    "url": "assets/css/0.styles.c0a883f2.css",
    "revision": "5a0b43c91f08c7f4e69c872b0ca8cb5d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.32883c3e.js",
    "revision": "b164c2f3e03c0e3df465214be66d2277"
  },
  {
    "url": "assets/js/11.05b4280d.js",
    "revision": "14967a6ca5f0f1ada348ae86c8fe27b9"
  },
  {
    "url": "assets/js/12.919f0649.js",
    "revision": "3ef19861621dc19bc6f72e16fcce3436"
  },
  {
    "url": "assets/js/13.427916eb.js",
    "revision": "6a09886a86cfd648ed053a04f70c68ef"
  },
  {
    "url": "assets/js/14.c3477c8c.js",
    "revision": "a628a462cb95ba9456b75a6f982137cb"
  },
  {
    "url": "assets/js/15.49573669.js",
    "revision": "e2a7e363735dfe288a1d00eb56c4072d"
  },
  {
    "url": "assets/js/16.f64ec5a1.js",
    "revision": "d69c886dce9ced8bfbe6129af602248b"
  },
  {
    "url": "assets/js/17.eb238722.js",
    "revision": "2d14e0381ae3057bc2670cc3ee3bd3a4"
  },
  {
    "url": "assets/js/18.754a62a6.js",
    "revision": "af09d14cc3c784e6018f46308699f90f"
  },
  {
    "url": "assets/js/19.cb09f3c7.js",
    "revision": "6343f5b1b47caf664c77095c32e9f9ff"
  },
  {
    "url": "assets/js/2.84817a29.js",
    "revision": "88a50d356832a4aee33f105c016fe614"
  },
  {
    "url": "assets/js/20.56374c85.js",
    "revision": "919dfcc032d28f02d895f778d3c2267e"
  },
  {
    "url": "assets/js/21.784cbd5f.js",
    "revision": "99d614b56b829316f3420a33e9c0f542"
  },
  {
    "url": "assets/js/22.de742b8c.js",
    "revision": "f278f811732e077f298fc5f87622b37d"
  },
  {
    "url": "assets/js/23.ed7c05da.js",
    "revision": "d48e2b08559fb8cec6a0b81fc884d772"
  },
  {
    "url": "assets/js/24.8d5cfd9e.js",
    "revision": "b686cade30400d5e603b9399dfa5ad8c"
  },
  {
    "url": "assets/js/25.9719470b.js",
    "revision": "1c2cd58d1d9ed32a10fcaa34099b9ae9"
  },
  {
    "url": "assets/js/26.a8e33675.js",
    "revision": "24b6f7167f71439b596aabf923508924"
  },
  {
    "url": "assets/js/27.0583bdcf.js",
    "revision": "f3639dc1e56597e9981c6f4a268e579c"
  },
  {
    "url": "assets/js/28.065c0da3.js",
    "revision": "1ffeb34900afb12b7f24d3aea64a13f5"
  },
  {
    "url": "assets/js/29.98a00717.js",
    "revision": "732079c186cb02562bc4912ccdd8d8db"
  },
  {
    "url": "assets/js/3.25a04740.js",
    "revision": "c02009caea76895718a233ed5e39d2f6"
  },
  {
    "url": "assets/js/30.0e9e5a91.js",
    "revision": "8363f520e7c689d942c0e6bb17fc8aa0"
  },
  {
    "url": "assets/js/31.392746e4.js",
    "revision": "f51999e3553bb457b36504dd502cae6c"
  },
  {
    "url": "assets/js/32.e79b67e9.js",
    "revision": "7624db8e3b0bc09f9c9fe59ba41ed6e7"
  },
  {
    "url": "assets/js/33.5eb29385.js",
    "revision": "7c895725053c4ff69465bdb320b99686"
  },
  {
    "url": "assets/js/34.96414370.js",
    "revision": "13ffded952fbe7f418911ff759f37111"
  },
  {
    "url": "assets/js/35.5cdb421e.js",
    "revision": "8e310a9ef9c93b837c20a45113bbdb22"
  },
  {
    "url": "assets/js/36.42c50f02.js",
    "revision": "59e14271ef38efed281e01d2d964d775"
  },
  {
    "url": "assets/js/37.7ff67003.js",
    "revision": "457ae05280d218b53f781ac8a06dde72"
  },
  {
    "url": "assets/js/38.aac579d9.js",
    "revision": "73a0d7a04ae9c5b7a1cf68e98d344364"
  },
  {
    "url": "assets/js/39.e334e64c.js",
    "revision": "5287ef754e5d95023fa74f4a010d9702"
  },
  {
    "url": "assets/js/4.1beb5986.js",
    "revision": "f97fcb435d742c2ae7b54b9b934e66ba"
  },
  {
    "url": "assets/js/40.82b2abb9.js",
    "revision": "8aa9e2193c1764c843e4c63610515899"
  },
  {
    "url": "assets/js/5.cb0bd4a7.js",
    "revision": "031641b8b6d1601ae3c46e486f66e68b"
  },
  {
    "url": "assets/js/6.34cdd9af.js",
    "revision": "b72054be4e0e268e529c9a5b033f23f6"
  },
  {
    "url": "assets/js/7.c3a72011.js",
    "revision": "36daa60da05b0e20c1a8f1ef61410bb7"
  },
  {
    "url": "assets/js/8.57ad85b4.js",
    "revision": "3eedf972119b25f77a93f8c63fe9d7da"
  },
  {
    "url": "assets/js/9.482bb012.js",
    "revision": "d939c6673207c50c88a592a30cdee75c"
  },
  {
    "url": "assets/js/app.35d179c7.js",
    "revision": "5c4015a9dd1b53395241567a07c80170"
  },
  {
    "url": "cloud/aws.html",
    "revision": "0629ce23d1fcfb30cb998f517b0b85da"
  },
  {
    "url": "cloud/azure.html",
    "revision": "165e1c37fbdbafc9b7266a32e009eb7e"
  },
  {
    "url": "code/bash.html",
    "revision": "c21c0615138b865a83fc613ff41416c9"
  },
  {
    "url": "code/git.html",
    "revision": "40cfcf2bbc5bd87bed0d0b8f64888460"
  },
  {
    "url": "code/python.html",
    "revision": "36723a0c3487214be8442144caf311a8"
  },
  {
    "url": "code/python/class.html",
    "revision": "11bce4aa34abe68897ce1e57322a60b9"
  },
  {
    "url": "code/python/list.html",
    "revision": "d78f820e8ea7ce280b1b2dc1f87c3525"
  },
  {
    "url": "code/webdev.html",
    "revision": "257c17db37af60daee11b2d57a1e40a6"
  },
  {
    "url": "devops/cicd.html",
    "revision": "5d84ffadb0cbbc4e963492fea23606f6"
  },
  {
    "url": "devops/databases.html",
    "revision": "061cbd6484769f4ac93443d39ef4ee74"
  },
  {
    "url": "devops/docker.html",
    "revision": "6289cdb0a37d38d3aea7cdb14a3a50ad"
  },
  {
    "url": "devops/index.html",
    "revision": "e2d4cf80e41eaa542ee5cc8c71f2b671"
  },
  {
    "url": "devops/sql.html",
    "revision": "93470ea6e28682a6dd63d5640e2d737f"
  },
  {
    "url": "devops/terminology.html",
    "revision": "a4148cd8453074a472c986046c085eea"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "9557c3adf535f9b9306788efb3f5eb6c"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "67d1623490b48a5c555e8a4df5885bf4"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "53a89ad244f703f87c7a0ab2e4438f05"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "5d95a69487339c7da1c3cb19a45d045b"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "0a225bb2d75038f9dcc6ddcacd50de3d"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "edce820e0089294599c56ea3b4482fc5"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "66f83a7284d5e7e13c91bdb0ca77f8f8"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "86cd3b1a11061c8f3cd8f8ede8750cd0"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "4dac9ee936ed8b80da8fa2f638fc5913"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "0fd6d5ab9ffa71c4b6a4af0c9409c3de"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "4684ebb5e87b07de96b5473101b112bf"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "8008e75a5885339c983d6445c9cef680"
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
    "revision": "a0ef444bf6ad5a572925c771faf16c6a"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "c9da124a64673ee2089414109f086b43"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "84d44584f48f02afe94f86e6a711e1dc"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "089997f152d178022e68230c2fb22dc8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "08c76ec2a8a1bf8847dfb45ee2b499ce"
  },
  {
    "url": "other/http.html",
    "revision": "7e6a80ff89f5608269e17d196ca3249c"
  },
  {
    "url": "other/jq.html",
    "revision": "19957d0b0a7511623abbe39cbf90fd53"
  },
  {
    "url": "other/markdown.html",
    "revision": "feceee0d8d98ed5d6aa265b7cab78929"
  },
  {
    "url": "other/personal.html",
    "revision": "1b0a1dcfe4a02b522b1bc7baaeb0ae73"
  },
  {
    "url": "other/setup.html",
    "revision": "c13f2cedda6488617e09670e52755c7b"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "c9631a0d9421126ea30293e5e0222cc5"
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
