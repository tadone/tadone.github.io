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
    "revision": "613b4a2372778cbb4ae18199ff4c37cd"
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
    "url": "assets/js/10.dfb1c18b.js",
    "revision": "3351faf59e57d861deaebd8dbeed4936"
  },
  {
    "url": "assets/js/11.1ae26006.js",
    "revision": "aa1f4b7e8f274ae506e1b43bb6de3ec9"
  },
  {
    "url": "assets/js/12.227fc264.js",
    "revision": "11b09f93a22760633bad87a99d316b17"
  },
  {
    "url": "assets/js/13.1e987ac7.js",
    "revision": "ddad19a019bc7dbe92a6b81b6f918f89"
  },
  {
    "url": "assets/js/14.c7e29fd1.js",
    "revision": "8d9ce4d1088cfa56ee296437b4cabc9b"
  },
  {
    "url": "assets/js/15.e4431e92.js",
    "revision": "bc53dd356dd59b407cb0e1d0a4e1201f"
  },
  {
    "url": "assets/js/16.1d1599e0.js",
    "revision": "5b41ebaedc5637f56a56d75db4e43ce6"
  },
  {
    "url": "assets/js/17.c857194b.js",
    "revision": "30a34b4ea8269d16a45fb7a6d1130076"
  },
  {
    "url": "assets/js/18.2abeb0b0.js",
    "revision": "cace1cf1742ad9727f60835011d05208"
  },
  {
    "url": "assets/js/19.ed9e4cc7.js",
    "revision": "43123515955abffa4280f241f7a69809"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.4600d71f.js",
    "revision": "a0a2b51e1c928f07c34c163ba48d71f1"
  },
  {
    "url": "assets/js/21.347e2c9d.js",
    "revision": "02353b84f7ea36fec8e0c6fb240f6f17"
  },
  {
    "url": "assets/js/22.5e68e11f.js",
    "revision": "79fcb9820b7ecd5bd81b64bc0a65e00c"
  },
  {
    "url": "assets/js/23.6a6fa291.js",
    "revision": "7cd6a6cc6523cd0ae4306e36ac40a53b"
  },
  {
    "url": "assets/js/24.e0f10175.js",
    "revision": "18d1a68a48ab290d68eb7bdc775fd33e"
  },
  {
    "url": "assets/js/25.1cd44f31.js",
    "revision": "f04a211acbfc1926c0dd99998e497a6f"
  },
  {
    "url": "assets/js/26.59a8f8d8.js",
    "revision": "18530f73b15a427125d1cc0ac549b53b"
  },
  {
    "url": "assets/js/3.7c862992.js",
    "revision": "67afcae258f29290736a213075839510"
  },
  {
    "url": "assets/js/4.03b106d4.js",
    "revision": "d7e8dcfa7ff9c65cc1cd230e6414d608"
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
    "url": "assets/js/9.fc14eea7.js",
    "revision": "4162b53501dbc26603479a5762c9474b"
  },
  {
    "url": "assets/js/app.3a2b94bc.js",
    "revision": "7893e9bfa811390c179a7a7cac2e5989"
  },
  {
    "url": "cloud/aws.html",
    "revision": "e543a7d649b3b5875a23290dbac1caa0"
  },
  {
    "url": "cloud/azure.html",
    "revision": "df48ce0444a99c7cf8c7430ec746044c"
  },
  {
    "url": "code/bash.html",
    "revision": "e134ad55db978e50936398d83931dcb1"
  },
  {
    "url": "code/git.html",
    "revision": "8facbe1b827477b0ccab0dc113580b3e"
  },
  {
    "url": "code/markdown.html",
    "revision": "96260cac955c4529439e4a05be4ed4ed"
  },
  {
    "url": "code/python.html",
    "revision": "3616b276e906c18bc697513814121965"
  },
  {
    "url": "code/python/class.html",
    "revision": "0fe9f1a48851cdff5fa41b865fe2308f"
  },
  {
    "url": "code/python/list.html",
    "revision": "a7ad314ebf405b16a9373b64d7cc5e21"
  },
  {
    "url": "code/yaml_json.html",
    "revision": "b15354358d9168082c073e33dceee594"
  },
  {
    "url": "devops/cicd.html",
    "revision": "595c573341fbe0f1b15eed0e37803a02"
  },
  {
    "url": "devops/databases.html",
    "revision": "268db3b06c5fdec38d43d27af427ba69"
  },
  {
    "url": "devops/docker.html",
    "revision": "bf3ec7282e079d6f59fed9406ad8722e"
  },
  {
    "url": "devops/index.html",
    "revision": "5eb376432e0c7b30d5c5e89428d4572d"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "e821ccc84033c07bc340d63bdea094fa"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "92e96d6f8507c3af85295d7edc5d240b"
  },
  {
    "url": "devops/terminology.html",
    "revision": "89db84d5acbc0f36e39ed4967b77694a"
  },
  {
    "url": "index.html",
    "revision": "1b72cf850e4eaf51e6aec7d35617b3bd"
  },
  {
    "url": "linux/bash_shell.html",
    "revision": "8776f3b58687052fa600531ffcd6296e"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "991a9976498f6c195bb14592422866b9"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "1b9e8381b7124fd4e8eec59c84f0dc31"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "d83fdd9a4e38c8a8e132cc8294fc988e"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "cb7b21979ee9696334a3fb9406e9bc96"
  },
  {
    "url": "other/setup.html",
    "revision": "a1d9c848b4187a86d372d73e98138cf0"
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
