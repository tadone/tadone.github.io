(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{160:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volume","aria-hidden":"true"}},[t._v("#")]),t._v(" Volume")]),t._v(" "),s("p",[t._v("At its core, a volume is just a directory, possibly with some data in it, which is accessible to the Containers in a Pod. How that directory comes to be, the medium that backs it, and the contents of it are determined by the particular volume type used.\nKubernetes supports several types of Volumes (most common):")]),t._v(" "),s("ul",[s("li",[t._v("configMap")]),t._v(" "),s("li",[t._v("azureDisk")]),t._v(" "),s("li",[t._v("gcePersistentDisk")]),t._v(" "),s("li",[t._v("emptyDir")]),t._v(" "),s("li",[t._v("persistentVolumeClaim")]),t._v(" "),s("li",[t._v("secret")]),t._v(" "),s("li",[t._v("downwardAPI")]),t._v(" "),s("li",[t._v("hostPath")])]),t._v(" "),s("h2",{attrs:{id:"configmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configmap","aria-hidden":"true"}},[t._v("#")]),t._v(" configMap")]),t._v(" "),s("p",[t._v("::: warn\nYou must create a ConfigMap before you can use it.\n:::\nThe "),s("code",[t._v("log-config")]),t._v(" ConfigMap is mounted as a volume, and all contents stored in its "),s("code",[t._v("log_level")]),t._v(" entry are mounted into the Pod at path "),s("code",[t._v("/etc/config/log_level")]),t._v(". Note that this path is derived from the volume’s "),s("code",[t._v("mountPath")]),t._v(" and the "),s("code",[t._v("path")]),t._v(" keyed with "),s("code",[t._v("log_level")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" configmap"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vol\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/config\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vol\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("configMap")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("items")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log_level\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log_level\n")])])]),s("h2",{attrs:{id:"emptydir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emptydir","aria-hidden":"true"}},[t._v("#")]),t._v(" emptyDir")]),t._v(" "),s("p",[t._v("By default, "),s("code",[t._v("emptyDir")]),t._v(" volumes are stored on whatever medium is backing the node - that might be disk or SSD or network storage, depending on your environment. However, you can set the "),s("code",[t._v("emptyDir.medium")]),t._v(" field to "),s("code",[t._v("Memory")]),t._v(" to tell Kubernetes to mount a tmpfs (RAM-backed filesystem) for you instead. While tmpfs is very fast, be aware that unlike disks, tmpfs is cleared on node reboot and any files you write will count against your Container’s memory limit.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pd\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s.gcr.io/test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("webserver\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /cache\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cache"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cache"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("emptyDir")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"hostpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hostpath","aria-hidden":"true"}},[t._v("#")]),t._v(" hostPath")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("hostPath")]),t._v(" volume mounts a file or directory from the host node’s filesystem into your Pod. This is not something that most Pods will need, but it offers a powerful escape hatch for some applications.\nFor example, some uses for a "),s("code",[t._v("hostPath")]),t._v(" are:")]),t._v(" "),s("ul",[s("li",[t._v("running a Container that needs access to Docker internals; use a "),s("code",[t._v("hostPath")]),t._v(" of "),s("code",[t._v("/var/lib/docker")])]),t._v(" "),s("li",[t._v("running cAdvisor in a Container; use a "),s("code",[t._v("hostPath")]),t._v(" of "),s("code",[t._v("/sys")])])]),t._v(" "),s("p",[t._v("In addition to the required path property, user can optionally specify a type for a hostPath volume.\nThe supported values for field type are:\n"),s("em",[t._v("Empty string (default) is for backward compatibility, which means that no checks will be performed before mounting the hostPath volume.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Behavior")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DirectoryOrCreate")]),t._v(" "),s("td",[t._v("If nothing exists at the given path, an empty directory will be created there as needed with permission set to 0755, having the same group and ownership with Kubelet.")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Directory")])]),t._v(" "),s("td",[t._v("A directory must exist at the given path")])]),t._v(" "),s("tr",[s("td",[t._v("FileOrCreate")]),t._v(" "),s("td",[t._v("If nothing exists at the given path, an empty file will be created there as needed with permission set to 0644, having the same group and ownership with Kubelet.")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("File")])]),t._v(" "),s("td",[t._v("A file must exist at the given path")])]),t._v(" "),s("tr",[s("td",[t._v("Socket")]),t._v(" "),s("td",[t._v("A UNIX socket must exist at the given path")])]),t._v(" "),s("tr",[s("td",[t._v("CharDevice")]),t._v(" "),s("td",[t._v("A character device must exist at the given path")])]),t._v(" "),s("tr",[s("td",[t._v("BlockDevice")]),t._v(" "),s("td",[t._v("A block device must exist at the given path")])])])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pd\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s.gcr.io/test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("webserver\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pd\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("hostPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("# directory location on host")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n      "),s("span",{attrs:{class:"token comment"}},[t._v("# this field is optional")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Directory\n")])])]),s("h2",{attrs:{id:"persistentvolumeclaim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistentvolumeclaim","aria-hidden":"true"}},[t._v("#")]),t._v(" persistentVolumeClaim")]),t._v(" "),s("p",[t._v("A persistentVolumeClaim volume is used to mount a "),s("code",[t._v("PersistentVolume")]),t._v(" into a Pod. "),s("code",[t._v("PersistentVolumes")]),t._v(" are a way for users to “claim” durable storage (such as a GCE PersistentDisk or an iSCSI volume) without knowing the details of the particular cloud environment.\nSee the "),s("strong",[t._v("PersistentVolumes")]),t._v(" example for more details.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolumeClaim\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("claim\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("accessModes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteOnce\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("resources")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("requests")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("storage")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20Gi\n")])])]),s("h1",{attrs:{id:"persistentvolume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistentvolume","aria-hidden":"true"}},[t._v("#")]),t._v(" PersistentVolume")]),t._v(" "),s("p",[t._v("Managing storage is a distinct problem from managing compute. The "),s("code",[t._v("PersistentVolume")]),t._v(" subsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this we introduce two new API resources: "),s("code",[t._v("PersistentVolume")]),t._v(" and "),s("code",[t._v("PersistentVolumeClaim")]),t._v(".")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("PersistentVolume")]),t._v(" ("),s("strong",[t._v("PV")]),t._v(") is a piece of storage in the cluster that has been provisioned by an administrator.")]),t._v(" "),s("li",[s("code",[t._v("PersistentVolumeClaim")]),t._v(" ("),s("strong",[t._v("PVC")]),t._v(") is a request for storage by a user. It is similar to a pod. Pods consume node resources and PVCs consume PV resources. Claims can request specific size and access modes (e.g., can be mounted once read/write or many times read-only).")])]),t._v(" "),s("p",[t._v("PVs are resources in the cluster. PVCs are requests for those resources and also act as claim checks to the resource.")]),t._v(" "),s("h2",{attrs:{id:"provisioning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provisioning","aria-hidden":"true"}},[t._v("#")]),t._v(" Provisioning")]),t._v(" "),s("p",[t._v("There are two ways PVs may be provisioned: statically or dynamically.")]),t._v(" "),s("ul",[s("li",[t._v("Static: A cluster administrator creates a number of PVs. They carry the details of the real storage which is available for use by cluster users.")]),t._v(" "),s("li",[t._v("Dynamic: When none of the static PVs the administrator created matches a user’s PersistentVolumeClaim, the cluster may try to dynamically provision a volume specially for the PVC. "),s("strong",[t._v("This provisioning is based on StorageClasses")])])]),t._v(" "),s("p",[t._v("::: warn")]),t._v(" "),s("ul",[s("li",[t._v("PersistentVolumeClaim binds are exclusive, regardless of how they were bound. A PVC to PV binding is a one-to-one mapping.")]),t._v(" "),s("li",[t._v("Cluster provisioned with many 50Gi PVs would not match a PVC requesting 100Gi. The PVC can be bound when a 100Gi PV is added to the cluster.\n:::")])]),t._v(" "),s("h2",{attrs:{id:"reclaiming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reclaiming","aria-hidden":"true"}},[t._v("#")]),t._v(" Reclaiming")]),t._v(" "),s("p",[t._v("When a user is done with their volume, they can delete the PVC objects from the API which allows reclamation of the resource. The reclaim policy for a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim. Currently, volumes can either be Retained, Recycled (Deprecated) or Deleted.")]),t._v(" "),s("h1",{attrs:{id:"secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secret","aria-hidden":"true"}},[t._v("#")]),t._v(" Secret")]),t._v(" "),s("ul",[s("li",[t._v("A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key.")]),t._v(" "),s("li",[t._v("Secrets can be mounted as data volumes or be exposed as environment variables to be used by a container in a pod.")])]),t._v(" "),s("h2",{attrs:{id:"create-manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-manually","aria-hidden":"true"}},[t._v("#")]),t._v(" Create Manually")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# Create files needed for rest of example.\n$ echo -n 'admin' > ./username.txt\n$ echo -n '1f2d1e2e67df' > ./password.txt\n")])])]),s("p",[t._v("The "),s("code",[t._v("kubectl create secret")]),t._v(" command packages these files into a Secret")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt\nsecret "db-user-pass" created\n')])])]),s("h2",{attrs:{id:"describe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#describe","aria-hidden":"true"}},[t._v("#")]),t._v(" Describe")]),t._v(" "),s("p",[t._v("Describe the secret. Items in Data are actual values of the secret")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl describe secrets/db-user-pass\nName:            db-user-pass\nNamespace:       default\nLabels:          <none>\nAnnotations:     <none>\n\nType:            Opaque\n\nData\n====\npassword.txt:    12 bytes\nusername.txt:    5 bytes\n")])])]),s("p",[t._v("Secrets can be retrieved via the "),s("code",[t._v("kubectl get secret")]),t._v(" command")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ kubectl get secret mysecret -o yaml\napiVersion: v1\ndata:\n  username: YWRtaW4=\n  password: MWYyZDFlMmU2N2Rm\nkind: Secret\nmetadata:\n  creationTimestamp: 2016-01-22T18:41:56Z\n  name: mysecret\n  namespace: default\n  resourceVersion: "164619"\n  selfLink: /api/v1/namespaces/default/secrets/mysecret\n  uid: cfee02d6-c137-11e5-8d73-42010af00002\ntype: Opaque\n')])])]),s("h2",{attrs:{id:"decode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decode","aria-hidden":"true"}},[t._v("#")]),t._v(" Decode")]),t._v(" "),s("p",[t._v("Finally, decode the secret using base64")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ echo 'MWYyZDFlMmU2N2Rm' | base64 --decode\n1f2d1e2e67df\n")])])]),s("h2",{attrs:{id:"mount-as-a-volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mount-as-a-volume","aria-hidden":"true"}},[t._v("#")]),t._v(" Mount as a Volume")]),t._v(" "),s("p",[t._v("Each key in the secret "),s("code",[t._v("data")]),t._v(" map becomes the filename under "),s("code",[t._v("mountPath")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypod\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' "/etc/foo" '),s("span",{attrs:{class:"token comment"}},[t._v("# Foo is a directory where items from 'data' will be populated as files")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("readOnly")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo              "),s("span",{attrs:{class:"token comment"}},[t._v("# Name of the volume, referenced in volumeMount")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("secret")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("secretName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret "),s("span",{attrs:{class:"token comment"}},[t._v("# Name of the secret")]),t._v("\n")])])]),s("p",[t._v("Optionally, specify specific path for items in the secret")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypod\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"/etc/foo"')]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("readOnly")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("secret")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("secretName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("items")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" username\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("group/my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("username\n")])])]),s("p",[t._v("What will happen:")]),t._v(" "),s("ul",[s("li",[t._v("username secret is stored under /etc/foo/my-group/my-username file instead of /etc/foo/username.")]),t._v(" "),s("li",[t._v("password secret is not projected")])]),t._v(" "),s("p",[t._v("To consume all keys from the secret, all of them must be listed in the items field. All listed keys must exist in the corresponding secret. Otherwise, the volume is not created.")]),t._v(" "),s("p",[s("strong",[t._v("Consuming Secret Values from Volumes")]),t._v(" "),s("em",[t._v("Mounted Secrets are updated automatically")]),t._v("\nInside the container that mounts a secret volume, the secret keys appear as files and the secret values are base-64 decoded and stored inside these files.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ls /etc/foo/\nusername\npassword\n$ cat /etc/foo/username\nadmin\n$ cat /etc/foo/password\n1f2d1e2e67df\n")])])]),s("h2",{attrs:{id:"secrets-as-environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secrets-as-environment-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Secrets as Environment Variables")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secret"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("env"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mycontainer\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SECRET_USERNAME      "),s("span",{attrs:{class:"token comment"}},[t._v("# Name of the env variable")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" username\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SECRET_PASSWORD      "),s("span",{attrs:{class:"token comment"}},[t._v("# Name of the env variable")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ echo $SECRET_USERNAME\nadmin\n$ echo $SECRET_PASSWORD\n1f2d1e2e67df\n")])])])])}],!1,null,null,null);n.options.__file="objects.md";a.default=n.exports}}]);