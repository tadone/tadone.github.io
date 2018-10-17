(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{163:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#services","aria-hidden":"true"}},[t._v("#")]),t._v(" Services")]),t._v(" "),s("p",[t._v("To make a pod accessible you can create a "),s("strong",[t._v("Service")]),t._v(" which is an abstraction that creates a logical group of "),s("strong",[t._v("Pods")]),t._v(" together and provides a way to access them. A "),s("strong",[t._v("Service")]),t._v(" uses the metadata labels assigned to "),s("strong",[t._v("Pods")]),t._v(" to determine its constituents.")]),t._v(" "),s("p",[t._v("Each "),s("strong",[t._v("Service")]),t._v(" has a setting called "),s("strong",[t._v("ServiceType")]),t._v(" that defines how that service is exposed. You can set this to "),s("strong",[t._v("ClusterIP")]),t._v(", "),s("strong",[t._v("NodePort")]),t._v(", "),s("strong",[t._v("LoadBalancer")]),t._v(", or "),s("strong",[t._v("ExternalName")]),t._v(" depending on your particular deployment scenario.")]),t._v(" "),s("h2",{attrs:{id:"service-type-clusterip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-type-clusterip","aria-hidden":"true"}},[t._v("#")]),t._v(" Service Type: ClusterIP")]),t._v(" "),s("p",[s("strong",[t._v("ClusterIP")]),t._v(" is the default "),s("strong",[t._v("ServiceType")]),t._v(" and it creates a single IP address that can be used to access its "),s("strong",[t._v("Pods")]),t._v(" which can only be accessed from inside the cluster.")]),t._v(" "),s("p",[t._v("The YAML for a ClusterIP service looks like this:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("internal"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n")])])]),s("h2",{attrs:{id:"service-type-nodeport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-type-nodeport","aria-hidden":"true"}},[t._v("#")]),t._v(" Service Type: NodePort")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("NodePort")]),t._v(" service is the most primitive way to get external traffic directly to your service. "),s("strong",[t._v("NodePort")]),t._v(", as the name implies, opens a specific port (typically 30000–32767) on all the Nodes (the VMs), and any traffic that is sent to this port is forwarded to the service.")]),t._v(" "),s("p",[t._v("A Service exposed as a NodePort can be accessed via "),s("code",[t._v("<node-ip-address>:<node-port>")]),t._v(".")]),t._v(" "),s("p",[t._v("The YAML for a NodePort service looks like this:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nodeport"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    \n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("nodePort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30036")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n")])])]),s("p",[t._v("The "),s("strong",[t._v("nodePort")]),t._v(" that specifies which port to open on the nodes. If you don’t specify this port, it will pick a random port. Most of the time you should let Kubernetes choose the port. This should be used as a temprorary solution.")]),t._v(" "),s("h2",{attrs:{id:"service-type-loadbalancer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-type-loadbalancer","aria-hidden":"true"}},[t._v("#")]),t._v(" Service Type: LoadBalancer")]),t._v(" "),s("p",[s("strong",[t._v("LoadBalancer")]),t._v(" service type automatically deploys an external load balancer. This external load balancer is associated with a specific IP address and routes external traffic to a Kubernetes service in your cluster.")]),t._v(" "),s("p",[s("strong",[t._v("LoadBalancer")]),t._v(" is used to automatically configure a supported "),s("code",[t._v("external Load Balancer")]),t._v(" (for instance an ELB in Amazon) to route traffic through to the "),s("strong",[t._v("NodePort")]),t._v(" of the Service. This is the most versatile of the "),s("strong",[t._v("ServiceTypes")]),t._v(" but requires that you have a supported Load Balancer in your infrastructure of which most major cloud providers have (GCE, AWS, Azure).")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("externalTrafficPolicy")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Local\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LoadBalancer\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("443")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("443")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n")])])]),s("h2",{attrs:{id:"service-type-externalname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-type-externalname","aria-hidden":"true"}},[t._v("#")]),t._v(" Service Type: ExternalName")]),t._v(" "),s("p",[t._v("ExternalName creates DNS records in KubeDNS to direct the Service’s DNS to an external service specified in the field ExternalName. It provides no other routing or load balancing services.")]),t._v(" "),s("h2",{attrs:{id:"service-type-external-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-type-external-ip","aria-hidden":"true"}},[t._v("#")]),t._v(" Service Type: External IP")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ kubectl run ghost --image=ghost:2.1.4 --port=2368\ndeployment "ghost" created\n$ kubectl expose deployment ghost --external-ip=192.168.10.10 --port=2368 --target-port=2368\nservice "ghost" exposed\n$ curl 192.168.10.10:2368\n')])])]),s("h2",{attrs:{id:"ingress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress","aria-hidden":"true"}},[t._v("#")]),t._v(" Ingress")]),t._v(" "),s("p",[t._v("::: warn\nBefore using ingress resource, an ingress controller has to be installed!\n:::")]),t._v(" "),s("p",[t._v("There are many types of "),s("strong",[t._v("Ingress controllers")]),t._v(", from the Google Cloud Load Balancer, Nginx, Traefik, Ambassador, and more.")]),t._v(" "),s("p",[t._v("Unlike all the above examples, Ingress is actually NOT a type of service. Instead, it sits in front of multiple services and act as a “smart router” or entrypoint into your cluster. For example, you can send everything on foo.yourdomain.com to the "),s("strong",[t._v("foo")]),t._v(" service, and everything under the yourdomain.com/bar/ path to the "),s("strong",[t._v("bar")]),t._v(" service.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("rules")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo.bar.com\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s1\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("servicePort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar.foo.com\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("backend")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s2\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("servicePort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),s("h2",{attrs:{id:"ingress-controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress-controller","aria-hidden":"true"}},[t._v("#")]),t._v(" Ingress Controller")]),t._v(" "),s("p",[t._v("Example of NGINX ingress controller")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("k8s-app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ingress\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("k8s-app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("#hostNetwork: true # If run on a single node")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("serviceAccountName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("terminationGracePeriodSeconds")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcr.io/google_containers/nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.9.0"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("beta.15\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Always\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("hostPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("443")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("hostPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("443")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" POD_NAME\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{attrs:{class:"token key atrule"}},[t._v("fieldRef")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{attrs:{class:"token key atrule"}},[t._v("fieldPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metadata.name\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" POD_NAMESPACE\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{attrs:{class:"token key atrule"}},[t._v("fieldRef")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{attrs:{class:"token key atrule"}},[t._v("fieldPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" metadata.namespace\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("default"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service=$(POD_NAMESPACE)/default"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("http"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configmap=$(POD_NAMESPACE)/nginx"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n")])])]),s("h3",{attrs:{id:"default-backend-optional-for-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-backend-optional-for-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Default Backend (Optional for NGINX)")]),t._v(" "),s("p",[t._v("This pod will route all request that are not associated with any service to default backend, which will respond with 404.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("http"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("k8s-app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("http"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ingress\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("k8s-app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("http"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("terminationGracePeriodSeconds")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("http"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend\n        "),s("span",{attrs:{class:"token comment"}},[t._v("# Any image is permissable as long as:")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("# 1. It serves a 404 page at /")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("# 2. It serves 200 on a /healthz endpoint")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcr.io/google_containers/defaultbackend"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token number"}},[t._v("1.4")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("livenessProbe")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("httpGet")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /healthz\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("8080")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("scheme")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HTTP\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("initialDelaySeconds")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("timeoutSeconds")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("8080")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("resources")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("limits")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10m\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20Mi\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("requests")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10m\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20Mi\n")])])])])}],!1,null,null,null);e.options.__file="ingress.md";a.default=e.exports}}]);