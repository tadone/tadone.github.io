(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{173:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"env-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" ENV Variables")]),t._v(" "),s("p",[t._v("Use environment variables to define arguments")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("env:\n- name: MESSAGE\n  value: "),s("span",{attrs:{class:"token string"}},[t._v('"hello world"')]),t._v("\ncommand: "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"/bin/echo"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nargs: "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"'),s("span",{attrs:{class:"token variable"}},[s("span",{attrs:{class:"token variable"}},[t._v("$(")]),t._v("MESSAGE"),s("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),s("p",[t._v("Run a command in a shell")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("command: "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"/bin/sh"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nargs: "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"-c"')]),t._v(", "),s("span",{attrs:{class:"token string"}},[t._v('"while true; do echo hello; sleep 10; done"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Example that will "),s("code",[t._v("printenv")]),t._v(" HOSTNAME and KUBERNETES_PORT")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" command"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("purpose")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demonstrate"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("command\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" command"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debian\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"printenv"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"HOSTNAME"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"KUBERNETES_PORT"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("restartPolicy")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OnFailure\n")])])]),s("h2",{attrs:{id:"session-affinity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-affinity","aria-hidden":"true"}},[t._v("#")]),t._v(" Session Affinity")]),t._v(" "),s("p",[t._v("Enable Session Affinity (a.k.a Sticky Session) to Kubernetes service")]),t._v(" "),s("p",[t._v("This would be the yaml file of the service:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("sessionAffinity")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClientIP\n")])])]),s("p",[t._v("If you want to specify time, as well, this is what needs to be added:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token key atrule"}},[t._v("sessionAffinityConfig")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("clientIP")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("timeoutSeconds")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("h2",{attrs:{id:"liveness-readiness-probe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#liveness-readiness-probe","aria-hidden":"true"}},[t._v("#")]),t._v(" Liveness & Readiness Probe")]),t._v(" "),s("p",[t._v("https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/\nhttp://kubernetesbyexample.com/healthz/\nhttps://kubernetes-v1-4.github.io/docs/user-guide/liveness/\nhttps://github.com/arun-gupta/kubernetes-java-sample/blob/master/wildfly-pod-hc-http.yaml\nhttp://kubernetesbyexample.com/healthz/")]),t._v(" "),s("p",[t._v("Probes have a number of fields that you can use to more precisely control the behavior of liveness and readiness checks:")]),t._v(" "),s("ul",[s("li",[t._v("initialDelaySeconds: Number of seconds after the container has started before liveness or readiness probes are initiated.")]),t._v(" "),s("li",[t._v("periodSeconds: How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.")]),t._v(" "),s("li",[t._v("timeoutSeconds: Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1.")]),t._v(" "),s("li",[t._v("successThreshold: Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.")]),t._v(" "),s("li",[t._v("failureThreshold: When a Pod starts and the probe fails, Kubernetes will try failureThreshold times before giving up. Giving up in case of liveness probe means restarting the Pod. In case of readiness probe the Pod will be marked Unready. Defaults to 3. Minimum value is 1.")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" liveness\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" liveness"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exec\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /bin/sh\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" echo ok "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /tmp/health; sleep 10; rm "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /tmp/health; sleep 600\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcr.io/google_containers/busybox\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("livenessProbe")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("exec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" cat\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /tmp/health\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("initialDelaySeconds")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("timeoutSeconds")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" liveness\n")])])]),s("h2",{attrs:{id:"debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging","aria-hidden":"true"}},[t._v("#")]),t._v(" Debugging")]),t._v(" "),s("h3",{attrs:{id:"pod-crashloopbackoff-starting-then-crashing-then-starting-again-and-crashing-again"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pod-crashloopbackoff-starting-then-crashing-then-starting-again-and-crashing-again","aria-hidden":"true"}},[t._v("#")]),t._v(" Pod CrashLoopBackOff: starting, then crashing, then starting again and crashing again")]),t._v(" "),s("p",[t._v("https://kubernetes.io/docs/tasks/debug-application-cluster/debug-init-containers/")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Meaning")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Init:N/M")]),t._v(" "),s("td",[t._v("The Pod has M Init Containers, and N have completed so far.")])]),t._v(" "),s("tr",[s("td",[t._v("Init:Error")]),t._v(" "),s("td",[t._v("An Init Container has failed to execute.")])]),t._v(" "),s("tr",[s("td",[t._v("Init:CrashLoopBackOff")]),t._v(" "),s("td",[t._v("An Init Container has failed repeatedly.")])]),t._v(" "),s("tr",[s("td",[t._v("Pending")]),t._v(" "),s("td",[t._v("The Pod has not yet begun executing Init Containers.")])]),t._v(" "),s("tr",[s("td",[t._v("PodInitializing or Running")]),t._v(" "),s("td",[t._v("The Pod has already finished executing Init Containers.")])])])]),t._v(" "),s("p",[t._v("Note that the example above would work hitting ClusterIP type service directly (which is quite uncommon) or with Loadbalancer type service, but won't with an Ingress behind NodePort type service. This is because with an Ingress, the requests come from many, randomly chosen source IP addresses.")]),t._v(" "),s("h2",{attrs:{id:"resource-limits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-limits","aria-hidden":"true"}},[t._v("#")]),t._v(" Resource Limits")]),t._v(" "),s("p",[t._v("Specify Limit Range for a namespace: "),s("code",[t._v("kubectl create -f memory-defaults.yaml --namespace=default-mem-example")]),t._v(" "),s("strong",[t._v("memory-defaults.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LimitRange\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mem"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("limit"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("range\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("limits")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 512Mi\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("defaultRequest")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 256Mi\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Container\n")])])]),s("p",[t._v("Resource Limits for a container")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Always\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mem"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ctr\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("resources")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                      "),s("span",{attrs:{class:"token comment"}},[t._v("# Specify resources limits/requests")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("limits")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 512Mi               "),s("span",{attrs:{class:"token comment"}},[t._v("# 512 Mibibytes memory limit")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("requests")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("memory")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 256Mi               "),s("span",{attrs:{class:"token comment"}},[t._v("# Application requests 256Mi from the cluster")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="extras.md";a.default=e.exports}}]);