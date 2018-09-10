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
    "revision": "615aea50fdd51700c395b7cace4c1172"
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
    "url": "assets/js/app.9aa451c2.js",
    "revision": "c989116e71dd1542dffa4d796679ad28"
  },
  {
    "url": "cloud/aws.html",
    "revision": "a9d9e65d9aaa4776ec2acd37789a1ddc"
  },
  {
    "url": "cloud/azure.html",
    "revision": "907a59908935bfd3226b8826fb5c19bf"
  },
  {
    "url": "code/bash.html",
    "revision": "54179c278417b2dc0ed92e60e7e1c569"
  },
  {
    "url": "code/git.html",
    "revision": "d76c29aef18851c4e388f3e5ea8d7bcd"
  },
  {
    "url": "code/markdown.html",
    "revision": "df26d3afc7bd259920d05e4921207785"
  },
  {
    "url": "code/python.html",
    "revision": "32a11b7604dd72866ab120407c2d6d38"
  },
  {
    "url": "code/python/class.html",
    "revision": "77e3d22e740dd28acfd24f0e9d5ea448"
  },
  {
    "url": "code/python/list.html",
    "revision": "8060e31cb6fead3c94d8bbdc487e2d06"
  },
  {
    "url": "code/yaml_json.html",
    "revision": "36b286e488d73c7f22680b0f86acd7ed"
  },
  {
    "url": "devops/cicd.html",
    "revision": "4fca3d20ae94f3f91701bb0e78cfaa3b"
  },
  {
    "url": "devops/databases.html",
    "revision": "bb0edc7e27e1319931b38cf0b6c02a65"
  },
  {
    "url": "devops/docker.html",
    "revision": "0f3998d7bcc8585bdbcec7385ee37c13"
  },
  {
    "url": "devops/index.html",
    "revision": "d8c7cd44d1c605486f11f3521d33a55d"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "2129a4cb211525a6fa6d26e71afef542"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "bf08af4f46950ad59a7e9a0163cf4e08"
  },
  {
    "url": "devops/terminology.html",
    "revision": "34c8f8df76e52019b30a802cfaea479f"
  },
  {
    "url": "index.html",
    "revision": "77b40092b865eed72ff8be65a7ec6786"
  },
  {
    "url": "linux/bash_shell.html",
    "revision": "6d567d0f341ec9e85553b9ab9a032f12"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "3deec58bbce42416f59ff42442c967e4"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "d8e95991d4e8c33163d8eaf93c5d4840"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "6b5d2842cabaca285f2ff871783e3414"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "6a3694b7a87c02a5adaca16daaf6a021"
  },
  {
    "url": "other/setup.html",
    "revision": "6054c1a0d5d3c4ba199dc7ed12ad6930"
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
