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
    "revision": "5bc1c1994c8fd33de434c95f4860fb08"
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
    "url": "assets/css/styles.57f6283b.css",
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
    "url": "assets/js/10.6af639a3.js",
    "revision": "1cea9805a75718c5de07e0544cf52694"
  },
  {
    "url": "assets/js/11.05a89f09.js",
    "revision": "89fea6ecfc09227060ea262061eefd64"
  },
  {
    "url": "assets/js/12.eb5ddd06.js",
    "revision": "40d4c5ca779de0dd52b5a4c4fea08a82"
  },
  {
    "url": "assets/js/13.dbcc1320.js",
    "revision": "0909139cf522cbc8869170a54e86049c"
  },
  {
    "url": "assets/js/14.f8ced4f5.js",
    "revision": "47d71aa80c674b6f62962045235b8e7f"
  },
  {
    "url": "assets/js/15.34a31ace.js",
    "revision": "9446761a091239085b81fc59909b04f4"
  },
  {
    "url": "assets/js/16.bc0dc294.js",
    "revision": "6900a3caa2438b4dd668644f48e3116e"
  },
  {
    "url": "assets/js/17.cab44644.js",
    "revision": "1e986672f87af95b609c1a2ea6dd48e8"
  },
  {
    "url": "assets/js/18.d68aeed3.js",
    "revision": "0f0ec3b1b7d137a638c3fb0f61a3a4b4"
  },
  {
    "url": "assets/js/19.ea02a66e.js",
    "revision": "b528b7c4c3ba3260019353eeb182e89d"
  },
  {
    "url": "assets/js/2.0b8a5f5f.js",
    "revision": "24be5b0ec087c5e9c55bff15903c8b07"
  },
  {
    "url": "assets/js/20.ba946fe3.js",
    "revision": "7101f71d4490399a2ed7537fc0f21623"
  },
  {
    "url": "assets/js/21.3a543aa5.js",
    "revision": "313dd62275c3a57e23cdfa7940a8b55b"
  },
  {
    "url": "assets/js/22.5d2a4154.js",
    "revision": "e34290964230a17f24a88f1fa7b499f5"
  },
  {
    "url": "assets/js/23.8c44d1de.js",
    "revision": "303186e66a52fa29650215a50e23bbdd"
  },
  {
    "url": "assets/js/24.813b3e03.js",
    "revision": "9fe51eb852ae7a650a9433bb543a009d"
  },
  {
    "url": "assets/js/25.082550c7.js",
    "revision": "ab29d945f03867bd0b513a7b0e73d4d0"
  },
  {
    "url": "assets/js/26.0a5190cf.js",
    "revision": "a47c25e0755752b03d9e59e29d805932"
  },
  {
    "url": "assets/js/27.be28263a.js",
    "revision": "3ba787417547bc79394f25d66f1e33a2"
  },
  {
    "url": "assets/js/3.3d3f6589.js",
    "revision": "4949f4de3027a17cc842a56d34cec228"
  },
  {
    "url": "assets/js/4.9cfb2a3a.js",
    "revision": "901e2fe083b27d7a22495847470a2e80"
  },
  {
    "url": "assets/js/5.bf347ed2.js",
    "revision": "7c25b52b5ee853bd36e2fbda576f7c05"
  },
  {
    "url": "assets/js/6.f2a1b570.js",
    "revision": "700250c1d8a705ffec7d265d42444340"
  },
  {
    "url": "assets/js/7.e466880d.js",
    "revision": "9f70a07cf4a7f88a8e624acbb669d61c"
  },
  {
    "url": "assets/js/8.fcbb0a45.js",
    "revision": "2c8d0dd432050b05e4afb6d0d7a27681"
  },
  {
    "url": "assets/js/9.519ee276.js",
    "revision": "7a71d3dd3a31b546f70f524e4fbb70a8"
  },
  {
    "url": "assets/js/app.57f6283b.js",
    "revision": "56d9e8f5ab130496ae9927ffbe1654b9"
  },
  {
    "url": "cloud/aws.html",
    "revision": "4b0825902cbc38beab8835ceec65892f"
  },
  {
    "url": "cloud/azure.html",
    "revision": "ec2425d1b3a094a17ea067f69c9486bf"
  },
  {
    "url": "code/bash.html",
    "revision": "54bd16a12b3b3dccb732081e821e6ee0"
  },
  {
    "url": "code/git.html",
    "revision": "8bd688a9a283726c186fd713645f2092"
  },
  {
    "url": "code/python.html",
    "revision": "f6ffb4afbab91a3551f2384d40fb5e11"
  },
  {
    "url": "code/python/class.html",
    "revision": "495389ed822d2750817f479a3f7e96f8"
  },
  {
    "url": "code/python/list.html",
    "revision": "4e5cf69ea458c8ccae298be0e3a86831"
  },
  {
    "url": "devops/cicd.html",
    "revision": "4eeacd168aa9cb02e100473e66491b53"
  },
  {
    "url": "devops/databases.html",
    "revision": "0cb23254f573a1fa3f16f4f0076566d6"
  },
  {
    "url": "devops/docker.html",
    "revision": "58dd8f2b10521869d667dd0a121cda0c"
  },
  {
    "url": "devops/index.html",
    "revision": "24c8b034b96bafeeab3a7168ffb22a2c"
  },
  {
    "url": "devops/k8s_features.html",
    "revision": "3298ef1c61435a45b181ffd47c04f73f"
  },
  {
    "url": "devops/kubectl.html",
    "revision": "ac66d8e21a8489ae199807b5fb9ccfb1"
  },
  {
    "url": "devops/kubernetes.html",
    "revision": "cb4083d9ea2924a08f1f562a4b11e09f"
  },
  {
    "url": "devops/terminology.html",
    "revision": "9d9751a458598e81fefe9873462ed739"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "9a529aa6fe72feef7044d3cf5b78fcd7"
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
    "revision": "c67d581b511d4f1bf4c3c35a9ca78ce2"
  },
  {
    "url": "linux/linux_basics.html",
    "revision": "12471ee0070f1b9c1c553e7597c52dad"
  },
  {
    "url": "linux/linux_metrics.html",
    "revision": "035bfb36fe037558efad38ff4f23391e"
  },
  {
    "url": "linux/linux_tools.html",
    "revision": "80c4b45213b938909b7fb4b4b4f9d256"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "other/hexo_doc.html",
    "revision": "c3f35870078ac943d51cafb4ef7ea64d"
  },
  {
    "url": "other/jq.html",
    "revision": "6c9068035eabf8a1d3dfbaecb09a249f"
  },
  {
    "url": "other/markdown.html",
    "revision": "9cd9d2e671352b04baad51c01f0a357c"
  },
  {
    "url": "other/setup.html",
    "revision": "d1680b1850073b9862fa7ee1f7af9d08"
  },
  {
    "url": "other/yaml_json.html",
    "revision": "234c9b3fd08795498a8486c05ba63a67"
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
