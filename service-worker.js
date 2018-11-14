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
    "revision": "f0ab980661417b9fdd5794553056249d"
  },
  {
    "url": "assets/css/0.styles.0d0cead2.css",
    "revision": "64f74b3eb9cbf29f5fb3b2d08168e506"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8fc59117.js",
    "revision": "2edb792254c426729af6d4ec9fc8f9f4"
  },
  {
    "url": "assets/js/11.513324fb.js",
    "revision": "99b2461954b73e9aa3062923308beaf6"
  },
  {
    "url": "assets/js/12.7b66e938.js",
    "revision": "e600e7583624048ef6bcebe1cbff62af"
  },
  {
    "url": "assets/js/13.b6394281.js",
    "revision": "770fa5383ddc7ce93a4001c1759b08b7"
  },
  {
    "url": "assets/js/14.ff06326c.js",
    "revision": "442165fb0e3ad5a9f8bee566c51dcc24"
  },
  {
    "url": "assets/js/15.57b23aa2.js",
    "revision": "97be6e4aca14dfba0760f4d5858ebfe0"
  },
  {
    "url": "assets/js/16.3b44911a.js",
    "revision": "95df0d82ff0476239391995d54dc53fb"
  },
  {
    "url": "assets/js/17.33678ab0.js",
    "revision": "86bbd63d3f34d2cc1bc956372c6d457b"
  },
  {
    "url": "assets/js/18.718cb119.js",
    "revision": "509043f10e512b622770d9ca0b77c3e4"
  },
  {
    "url": "assets/js/19.a8aef1bd.js",
    "revision": "032ec47d2a2cf4af154aa238733a2a42"
  },
  {
    "url": "assets/js/2.e8c14d44.js",
    "revision": "95ac714a09f0a91e0082ea76caf276af"
  },
  {
    "url": "assets/js/20.73293ee3.js",
    "revision": "83e53bfca9f4d38d016189ae1c05e866"
  },
  {
    "url": "assets/js/21.7d838aca.js",
    "revision": "931e84aaa6168c9d85241e11c82e6a59"
  },
  {
    "url": "assets/js/22.baaaeba9.js",
    "revision": "d713e2348c2f78ecdebf05d7b181556a"
  },
  {
    "url": "assets/js/23.7468cda1.js",
    "revision": "0b3dee73a82352d5d3753548d3d8aeb4"
  },
  {
    "url": "assets/js/24.ddf9f681.js",
    "revision": "33ac410bc1f1e2b17d8b95ee46310639"
  },
  {
    "url": "assets/js/25.64f717ca.js",
    "revision": "35ffb1a744e4883268412e779a8f3bcf"
  },
  {
    "url": "assets/js/26.fe74ddc1.js",
    "revision": "e884a3cbdd93f99c2dfc31186dabb2ab"
  },
  {
    "url": "assets/js/27.0ab2ce75.js",
    "revision": "402c9b081815b961b8cba8b24f08d88f"
  },
  {
    "url": "assets/js/28.a0113ea1.js",
    "revision": "9e28bb084d399872a4242d07453b6584"
  },
  {
    "url": "assets/js/29.4182179a.js",
    "revision": "740b6b543f11716f4b1728ad68d0462f"
  },
  {
    "url": "assets/js/3.438a5b1b.js",
    "revision": "4063325b116527427a14a142f52c423e"
  },
  {
    "url": "assets/js/30.3fdbc7c8.js",
    "revision": "9ca4ca70d5ca070a854190ad40b11bdf"
  },
  {
    "url": "assets/js/31.8b87cdae.js",
    "revision": "294b796235b27b3d4a1b1fa0256dad92"
  },
  {
    "url": "assets/js/32.9e207dba.js",
    "revision": "69cb39d8a8f2ea47830bbf6dfc59029d"
  },
  {
    "url": "assets/js/33.cf32102d.js",
    "revision": "18236a2a03416151563da5df4c07b127"
  },
  {
    "url": "assets/js/34.0c7d5faf.js",
    "revision": "90ff97ae62d5a9e12edf50cf68b974cf"
  },
  {
    "url": "assets/js/35.123f33fc.js",
    "revision": "03367a24528c89740926e4c735414a3c"
  },
  {
    "url": "assets/js/36.3ab7aa66.js",
    "revision": "b8f0a929aaee539888503eba33dc155c"
  },
  {
    "url": "assets/js/37.1cd759ec.js",
    "revision": "11b1b11949351c2902c4b50c4d4dbc33"
  },
  {
    "url": "assets/js/38.aeb62a1e.js",
    "revision": "dcd0901873192734da5312a815a225ef"
  },
  {
    "url": "assets/js/39.088569a5.js",
    "revision": "bf114fb9ddb86cccc6edc518814132e8"
  },
  {
    "url": "assets/js/4.c89c9b00.js",
    "revision": "4ab88c98dda2ac33ff33bcbc50609a66"
  },
  {
    "url": "assets/js/40.d6e5296f.js",
    "revision": "aa3c80ab9de9a98dad3a5f2166342556"
  },
  {
    "url": "assets/js/5.06b51473.js",
    "revision": "9474b458e7211cc04956cec2541f6309"
  },
  {
    "url": "assets/js/6.78470913.js",
    "revision": "d7f5af1d21fc3c69dc5fb33ad2658ce4"
  },
  {
    "url": "assets/js/7.811ef065.js",
    "revision": "10f01065bdfca8f5e642afd48582107c"
  },
  {
    "url": "assets/js/8.2088751f.js",
    "revision": "f6d1fe4c98a2abbd0b3571b0643fd21b"
  },
  {
    "url": "assets/js/9.0cddbe41.js",
    "revision": "e0eec6317835a055efe4c300e310adcd"
  },
  {
    "url": "assets/js/app.07ef61c3.js",
    "revision": "b328b126d303c5d4b3f6f18bb8f87676"
  },
  {
    "url": "cloud/aws.html",
    "revision": "c601bc7370f92ce8008273bb8a18bb53"
  },
  {
    "url": "cloud/azure.html",
    "revision": "582e55f08d77ba87e5bd1999d0c4d5c6"
  },
  {
    "url": "code/bash.html",
    "revision": "95b80b37f11b4ea314dbf4a82440ad55"
  },
  {
    "url": "code/git.html",
    "revision": "07a5bb8c2f158541caefb3370a5c9684"
  },
  {
    "url": "code/python.html",
    "revision": "710894214fb41794d60d1866def4dc27"
  },
  {
    "url": "code/python/class.html",
    "revision": "1bc4d5e034ba03a8c282113090a9483d"
  },
  {
    "url": "code/python/list.html",
    "revision": "eb0da96d87ae494e2253d470e864a665"
  },
  {
    "url": "code/webdev.html",
    "revision": "570ba7a0bccad61165cd88ec3bcec371"
  },
  {
    "url": "devops/cicd.html",
    "revision": "40704adbe18329349db2527d9765b3ab"
  },
  {
    "url": "devops/databases.html",
    "revision": "68d32acbf448beac55da51f4330a620a"
  },
  {
    "url": "devops/docker.html",
    "revision": "c76f59853096469c16234f992d29c33e"
  },
  {
    "url": "devops/index.html",
    "revision": "4f04f41f788fe10e77f2e41104655cf3"
  },
  {
    "url": "devops/sql.html",
    "revision": "f9fcd18c07052dc718716d66f04fba88"
  },
  {
    "url": "devops/terminology.html",
    "revision": "173ee79e0bfaa6c2edf8f790c2a9a87b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "3d298216f24a193ac73d2496739d4ac3"
  },
  {
    "url": "kubernetes/cheatsheet.html",
    "revision": "0e61f688819a6afd7883670bd6f5a9dd"
  },
  {
    "url": "kubernetes/cluster.html",
    "revision": "8d5ed0ed6c5931b1b7131f6b55e08e25"
  },
  {
    "url": "kubernetes/configuration.html",
    "revision": "db845d3c9b6255f47a2430d18554c3b4"
  },
  {
    "url": "kubernetes/kubectl.html",
    "revision": "69d26d098369be880045d771b353b7bd"
  },
  {
    "url": "kubernetes/objects_configs.html",
    "revision": "1c1914b964a324b18ea754531845f9b0"
  },
  {
    "url": "kubernetes/objects_deployments.html",
    "revision": "1fd69deec5f1a3540ed6dcf01dd405ae"
  },
  {
    "url": "kubernetes/objects_services_ingress.html",
    "revision": "ae2b677946d7f8962bcea96e61465162"
  },
  {
    "url": "kubernetes/objects_volumes.html",
    "revision": "65eb1f6883e70c42c84a75b62dce2611"
  },
  {
    "url": "kubernetes/overview.html",
    "revision": "11d5ed6c046bad75d77fe050ee783dc3"
  },
  {
    "url": "kubernetes/security.html",
    "revision": "2d606574b7eb0fd3cda01fc07e260384"
  },
  {
    "url": "kubernetes/troubleshooting.html",
    "revision": "438cceb1e4be681189cc0bc521987099"
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
    "revision": "e25a46362f677e9f849174ddf8ed233d"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "3b1d9e2243119418691341c52babceb7"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "a0bbb0f69c12dc97cba016469f100f6f"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "8fbe2a62aa2f1fbdbe99816f35d983ce"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "623ffd58cd3d013b887161b9ffc3afa2"
  },
  {
    "url": "other/http.html",
    "revision": "7e89f63b42c3f962475f1eb60d02b84b"
  },
  {
    "url": "other/jq.html",
    "revision": "9d2e2f6dc487f9d439eb2e9e61bb6cbd"
  },
  {
    "url": "other/markdown.html",
    "revision": "99a88a7cc1f6e89be6b3cde8fcdad23b"
  },
  {
    "url": "other/personal.html",
    "revision": "f9127f100f9f302d62a2f238240cc36f"
  },
  {
    "url": "other/setup.html",
    "revision": "53260ba73736c722c098b1f132397f9c"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "5f4d6cdf43a693dd0f25d08ecb4810a3"
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
