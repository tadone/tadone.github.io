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
    "revision": "51626c35ea19075afbe113dd1df32c05"
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
    "url": "assets/js/app.ff74770b.js",
    "revision": "afa9e09f53e84af66743d93ac641ae18"
  },
  {
    "url": "cloud/aws.html",
    "revision": "4579e4d44b2817c97506332afa3cd329"
  },
  {
    "url": "cloud/azure.html",
    "revision": "060e79799b4a3563619c9085cd089751"
  },
  {
    "url": "code/bash.html",
    "revision": "a39657d6de1357ecbf54ccb5042048c6"
  },
  {
    "url": "code/git.html",
    "revision": "0302676674d0275169f9f32eb71694eb"
  },
  {
    "url": "code/markdown.html",
    "revision": "045e2b9a10da67ebf0a48777e01c4fc0"
  },
  {
    "url": "code/python.html",
    "revision": "35bd7a6489b52df3ca0b2a6ea02ca0f2"
  },
  {
    "url": "code/python/class.html",
    "revision": "83c7fc390b0805f849aa81c015381116"
  },
  {
    "url": "code/python/list.html",
    "revision": "273e9316f2a4b63d3bd465444b28f622"
  },
  {
    "url": "code/yaml_json.html",
    "revision": "a956bd7de56fa7c85706a4a29d15201f"
  },
  {
    "url": "devops/cicd.html",
    "revision": "2b7713bb03e9c17e957c663e277197c9"
  },
  {
    "url": "devops/databases.html",
    "revision": "3dc22eae06d919d0918a78cd5b1831af"
  },
  {
    "url": "devops/docker.html",
    "revision": "bded794115839d0261798791dd64c2f5"
  },
  {
    "url": "devops/index.html",
    "revision": "282aaa0f5ba0e9170a1b2d495d0c5011"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "ce8593dc1a569ef19cf4f3cbcd1673f4"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "e8cf976da0d140b97f1ff73114c6630c"
  },
  {
    "url": "devops/terminology.html",
    "revision": "bead4c24c04bb62fe935ea71bcf48c5c"
  },
  {
    "url": "index.html",
    "revision": "b1c99a48df1d1a3998dca4c10d58c279"
  },
  {
    "url": "linux/bash_shell.html",
    "revision": "df49bd1c28ada9b773167f2eafc50142"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "2643e281daa90c067de5f40b3ffa7f1c"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "d8529b7ff35dd5d0c7e832f7158cc14b"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "7d91affc5a4927771f3b25596daf700f"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "d90e2f22b80edf74a916a7311201a9e4"
  },
  {
    "url": "other/setup.html",
    "revision": "97d071b886f7260ce0d0d23e12674d0f"
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
