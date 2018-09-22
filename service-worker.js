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
    "revision": "809c37907e5333764cc094565c1f0449"
  },
  {
    "url": "assets/css/1.styles.f28abe57.css",
    "revision": "aad952d88393532ee93cfa1f7ed62e57"
  },
  {
    "url": "assets/css/2.styles.0b8a5f5f.css",
    "revision": "67e4f12ed91a03bc12e1a51aac7323dd"
  },
  {
    "url": "assets/css/styles.8558454e.css",
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
    "url": "assets/js/10.9b4a386a.js",
    "revision": "2edb792254c426729af6d4ec9fc8f9f4"
  },
  {
    "url": "assets/js/11.004f00a0.js",
    "revision": "e523cf65de17a01592e11c0ee4473065"
  },
  {
    "url": "assets/js/12.dd59f0d1.js",
    "revision": "59aa56b86b9ba6fe368410bc6d6c9811"
  },
  {
    "url": "assets/js/13.a0bd1e34.js",
    "revision": "5b85bef63873e6923716ddd58b53701b"
  },
  {
    "url": "assets/js/14.665be6a0.js",
    "revision": "a69fe2576b1a45a2c4e63a62804b6842"
  },
  {
    "url": "assets/js/15.bd648c3b.js",
    "revision": "ce0eed5e7622c5937869f9bbff7b04af"
  },
  {
    "url": "assets/js/16.bfb1fb53.js",
    "revision": "df327081dc3b2583a00ca48456d49fa5"
  },
  {
    "url": "assets/js/17.60ed8250.js",
    "revision": "57996a2388f6ca9e1f0c9d58facd07a2"
  },
  {
    "url": "assets/js/18.7af30070.js",
    "revision": "baf779048ccab0eaebd84cfc200192a5"
  },
  {
    "url": "assets/js/19.bf2c4e74.js",
    "revision": "6ab8a5df8c414759daf93bd2f1749815"
  },
  {
    "url": "assets/js/2.0b8a5f5f.js",
    "revision": "24be5b0ec087c5e9c55bff15903c8b07"
  },
  {
    "url": "assets/js/20.08419376.js",
    "revision": "37faa3ead82f2aedbb0820e2051a31c0"
  },
  {
    "url": "assets/js/21.7946e105.js",
    "revision": "f21faa83b03b2af005be3e8f04944b30"
  },
  {
    "url": "assets/js/22.0c5b21df.js",
    "revision": "de3bddd4c2c0b0e14a27d475f115ec6a"
  },
  {
    "url": "assets/js/23.c340a7fe.js",
    "revision": "d3678124909e3cfb4a284b8d60bb9ebf"
  },
  {
    "url": "assets/js/24.c0e98b5c.js",
    "revision": "899e21abf660961f642e065f5e818c3e"
  },
  {
    "url": "assets/js/25.66b6b395.js",
    "revision": "8d108a888ab0378fc4a15e34ed90e7d3"
  },
  {
    "url": "assets/js/26.80e406c1.js",
    "revision": "6ccec517d4fb666e5e6ef9fbea67ed23"
  },
  {
    "url": "assets/js/3.323285ac.js",
    "revision": "7bc0acbec6b291f13378e6e182162646"
  },
  {
    "url": "assets/js/4.a07393ff.js",
    "revision": "604b27adc156720f5700da73406f51fe"
  },
  {
    "url": "assets/js/5.15a429c2.js",
    "revision": "88ad9dc657030d22097885e6e3aef2ff"
  },
  {
    "url": "assets/js/6.65559d12.js",
    "revision": "b7d63a18610c999b2edabec43abd08d5"
  },
  {
    "url": "assets/js/7.12d4c3a9.js",
    "revision": "c68c1f97af3ee28ed52cbfffda3b1b5a"
  },
  {
    "url": "assets/js/8.8a7adc1b.js",
    "revision": "cdec6304c0c32d716bc6f73db7b2fe4d"
  },
  {
    "url": "assets/js/9.dbddf9b9.js",
    "revision": "ae553176e2921f9b6b10796e0ec79d2a"
  },
  {
    "url": "assets/js/app.8558454e.js",
    "revision": "255ab36600f890a884e7b09a98f1b856"
  },
  {
    "url": "cloud/aws.html",
    "revision": "494da208360fa59b63187a7d1ad74e6b"
  },
  {
    "url": "cloud/azure.html",
    "revision": "c78c370d72988ae7ea7c8efb699aeb4f"
  },
  {
    "url": "code/bash.html",
    "revision": "5b57e646158c1c08679ddb97d683b177"
  },
  {
    "url": "code/git.html",
    "revision": "f2c63a33bb72fad2222866d9346c59fa"
  },
  {
    "url": "code/python.html",
    "revision": "94a42e833c667e88745bdd3b212185bd"
  },
  {
    "url": "code/python/class.html",
    "revision": "d297ff2467cabdb230a05021daff92ef"
  },
  {
    "url": "code/python/list.html",
    "revision": "a06b22b6e1fc86167480e14d6f5783ce"
  },
  {
    "url": "devops/cicd.html",
    "revision": "eb33dee5d4f2a8f9c63988d232761e56"
  },
  {
    "url": "devops/databases.html",
    "revision": "784ac4ba2a1848c782b7ab0374c4ceb4"
  },
  {
    "url": "devops/docker.html",
    "revision": "a93dc376c8b4c47f39e3bcb690a78c0a"
  },
  {
    "url": "devops/index.html",
    "revision": "e7b8d49effc86db37e30d737d04aa48b"
  },
  {
    "url": "devops/k8s_features.html",
    "revision": "07e5921be5c3d7ff627288468e4a37d2"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "106fbc0a8b0bdf0b5b16727da4b778f5"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "a7367379a11d28df1d61df68d778e632"
  },
  {
    "url": "devops/terminology.html",
    "revision": "dba01043eb494716408be441033b8a88"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "209f00620d2082b4f29238dec5cb49e3"
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
    "revision": "1b1c706a5af2d027c83c0090229c11ab"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "dc03d5460cda6864a192fb51a3670e12"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "efff9d21f479ec5d6e5d0de523504388"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "8cc1be45a69bba183351bfe8e9848eb8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "bfb0f52b61745f7e268ac1c8ea429d7f"
  },
  {
    "url": "other/markdown.html",
    "revision": "64ba0305102b352e4e8f14971d11e52c"
  },
  {
    "url": "other/setup.html",
    "revision": "2dcd0e49f49045ff7a96a46df69748ce"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "51f0f36ae332c32ea08f097bfcfd6864"
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
