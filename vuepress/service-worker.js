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
    "revision": "fe7029c068255cf727944b73bc3ad513"
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
    "url": "assets/js/app.9117a454.js",
    "revision": "59c486316d23a286468f8a1c2e0ded22"
  },
  {
    "url": "cloud/aws.html",
    "revision": "acfcf477510a5151f5b7e19e1cad4941"
  },
  {
    "url": "cloud/azure.html",
    "revision": "04ab936bab52fe40a16ae4c2062df5b7"
  },
  {
    "url": "code/bash.html",
    "revision": "07866a3125856c9344c7936e02ed6241"
  },
  {
    "url": "code/git.html",
    "revision": "98b3d8f729c85d7e3ae8c26a0aab0a08"
  },
  {
    "url": "code/markdown.html",
    "revision": "8bde086880b7329d901607258d42c201"
  },
  {
    "url": "code/python.html",
    "revision": "9c4b1d5aac1ed82affebae6d8f5ae3fc"
  },
  {
    "url": "code/python/class.html",
    "revision": "711b369a7eeefa7b255716f15b501acf"
  },
  {
    "url": "code/python/list.html",
    "revision": "7473c652c417a7f99015b1a17ab1bdb8"
  },
  {
    "url": "code/yaml_json.html",
    "revision": "f795402fedfb1b477a79641e447847c3"
  },
  {
    "url": "devops/cicd.html",
    "revision": "bca436f5a82a08b98e6b3321fe9dc7a6"
  },
  {
    "url": "devops/databases.html",
    "revision": "27f8e6c64e421c478706dd94cf015826"
  },
  {
    "url": "devops/docker.html",
    "revision": "426c90ab0ee1c051d595651d5b37d6fa"
  },
  {
    "url": "devops/index.html",
    "revision": "0b77bfbe1222a6ac76eaa389492426a1"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "2aa474731a45d0cc4eba54e9a4c1472d"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "add2c34e435b8bf78fbeee705c115989"
  },
  {
    "url": "devops/terminology.html",
    "revision": "9bf83a9cde8c9cf0d667ee436c0b7cd7"
  },
  {
    "url": "index.html",
    "revision": "08fc7941c1aa95897441b63616a60632"
  },
  {
    "url": "linux/bash_shell.html",
    "revision": "afd876190de40eee48978d505d81ae6b"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "ba7251d126a93bee4c3b053997e5197d"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "506f262e2b52c435ed0f394ded7252d2"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "7f5069aeafb2160fca0689c2beacca8f"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "432659134088761be5a6efd20dac4f5c"
  },
  {
    "url": "other/setup.html",
    "revision": "d4559b22f726454256a83d78850a1bd1"
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
