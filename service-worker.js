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
    "revision": "e28f30105a0efc8696e1d1a1a84ef6cf"
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
    "url": "assets/js/app.15fb012c.js",
    "revision": "980adb0a229cf26380e421e82efb9c09"
  },
  {
    "url": "cloud/aws.html",
    "revision": "62d49e39624bdf4da6b7a3788f702990"
  },
  {
    "url": "cloud/azure.html",
    "revision": "80ba3f03d735afe39d18076326e621af"
  },
  {
    "url": "code/bash.html",
    "revision": "81aebff849e226fe14288b617fdf4e40"
  },
  {
    "url": "code/git.html",
    "revision": "594f136131980373e0be03a9aebfbcd2"
  },
  {
    "url": "code/markdown.html",
    "revision": "ffa6a973b6058dda22ee3b7900711529"
  },
  {
    "url": "code/python.html",
    "revision": "c149154833a1381475e8e7abbba9d133"
  },
  {
    "url": "code/python/class.html",
    "revision": "0286c53e1fe7d6c69fa9fff78cc12cb9"
  },
  {
    "url": "code/python/list.html",
    "revision": "e6c1ac1fb043f1f5a785a7f3412274c9"
  },
  {
    "url": "code/yaml_json.html",
    "revision": "730d08122dab2161efc3a8fe49534dec"
  },
  {
    "url": "devops/cicd.html",
    "revision": "e40d6bbc34b6a31c25e3448a48eb79de"
  },
  {
    "url": "devops/databases.html",
    "revision": "a9a5ce4df6a308a0015777b00ec7ec71"
  },
  {
    "url": "devops/docker.html",
    "revision": "11a01b88e26fa70728ac9b108cda993c"
  },
  {
    "url": "devops/index.html",
    "revision": "5dd0568e84eb12dba5b1a889acb9fcf0"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "baff189fe84bf54f3eab719cf2756277"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "c10ab8d1185f6af8d1846f22f4b92638"
  },
  {
    "url": "devops/terminology.html",
    "revision": "18bea60b703272e340e524a4b678581d"
  },
  {
    "url": "index.html",
    "revision": "90f6e2c4bf925b130a21c3affd89c11a"
  },
  {
    "url": "linux/bash_shell.html",
    "revision": "b4dc6c5642b44a238c7ba2ce93ce2690"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "89b4183293ecf6e56d7018b6ed25ce6e"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "d0fa32838eb2280526fb4e9dc624bcb2"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "067d2842e361ef3d9d45412181c4f4db"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "252c077dbdc8a8c92b73752ce56cfb14"
  },
  {
    "url": "other/setup.html",
    "revision": "5ea6709797ffa1c6068e616aff2fdc80"
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
