(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{192:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kukulinski.com/10-most-common-reasons-kubernetes-deployments-fail-part-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("10 Most Common Reasons Kubernetes Deployments Fail (Part 1)"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://kukulinski.com/10-most-common-reasons-kubernetes-deployments-fail-part-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("10 Most Common Reasons Kubernetes Deployments Fail (Part 2)"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("When pods are not ready for a long time or they restart multiple times:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._m(5),e._v(" "),s("p",[e._v("The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/debug-init-containers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes.io/Debug-Init-Containers"),s("OutboundLink")],1)])]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("Find out what's wrong with a node:")]),e._v(" "),e._m(17),e._v(" "),e._m(18)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"troubleshooting-kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-kubernetes","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting Kubernetes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("kubectl describe pod <pod_name> -n <optional_namespace>")])]),this._v(" "),t("li",[t("code",[this._v("kubectl describe deployment <deployment_name>")])]),this._v(" "),t("li",[t("code",[this._v("kubectl describe replicaset <replicaset_name>")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"find-pods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find-pods","aria-hidden":"true"}},[this._v("#")]),this._v(" Find Pods")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example sorting pods by nodeName:")]),e._v("\nkubectl get pods -o wide --sort-by"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{.spec.nodeName}"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# find all pods that not in running phase:")]),e._v("\nkubectl get pods --field-selector"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("status.phase"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v("Running --all-namespaces\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example of getting pods on nodes using label filter:")]),e._v("\nkubectl get pods --all-namespaces  --no-headers --field-selector spec.nodeName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"k8s-workers-17781035-2"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Or for all nodes:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("kubectl get nodes -l your_label_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("your_label_value --no-headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cut")]),e._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(" -f1"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    kubectl get pods --all-namespaces  --no-headers --field-selector spec.nodeName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${n}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sort by number of restarts:")]),e._v("\nkubectl get pods --sort-by"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{.status.containerStatuses[:1].restartCount}"')]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pods-phases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pods-phases","aria-hidden":"true"}},[this._v("#")]),this._v(" Pods Phases")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Pending:")]),this._v("\tThe Pod has been accepted by the Kubernetes system, but one or more of the Container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Running:")]),this._v("\tThe Pod has been bound to a node, and all of the Containers have been created. At least one Container is still running, or is in the process of starting or restarting.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Succeeded:")]),this._v("\tAll Containers in the Pod have terminated in success, and will not be restarted.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Failed:")]),this._v("\tAll Containers in the Pod have terminated, and at least one Container has terminated in failure. That is, the Container either exited with non-zero status or was terminated by the system.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Unknown:")]),this._v("\tFor some reason the state of the Pod could not be obtained, typically due to an error in communicating with the host of the Pod.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"search-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" Search Logs")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Use exec to run commands inside a container")]),e._v("\n$ kubectl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("exec")]),e._v(" cassandra -- "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /var/log/cassandra/system.log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If your container has previously crashed, you can access the previous container's crash log with:")]),e._v("\n$ kubectl logs --previous "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${POD_NAME}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${CONTAINER_NAME}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pod-crashing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pod-crashing","aria-hidden":"true"}},[this._v("#")]),this._v(" Pod Crashing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"pod-crashloopbackoff-starting-then-crashing-then-starting-again-and-crashing-again"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pod-crashloopbackoff-starting-then-crashing-then-starting-again-and-crashing-again","aria-hidden":"true"}},[this._v("#")]),this._v(" Pod CrashLoopBackOff: starting, then crashing, then starting again and crashing again")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Status")]),e._v(" "),s("th",[e._v("Meaning")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Init:N/M")]),e._v(" "),s("td",[e._v("The Pod has M Init Containers, and N have completed so far.")])]),e._v(" "),s("tr",[s("td",[e._v("Init:Error")]),e._v(" "),s("td",[e._v("An Init Container has failed to execute.")])]),e._v(" "),s("tr",[s("td",[e._v("Init:CrashLoopBackOff")]),e._v(" "),s("td",[e._v("An Init Container has failed repeatedly.")])]),e._v(" "),s("tr",[s("td",[e._v("Pending")]),e._v(" "),s("td",[e._v("The Pod has not yet begun executing Init Containers.")])]),e._v(" "),s("tr",[s("td",[e._v("PodInitializing or Running")]),e._v(" "),s("td",[e._v("The Pod has already finished executing Init Containers.")])]),e._v(" "),s("tr",[s("td",[e._v("ImagePullBackOff")]),e._v(" "),s("td",[e._v("Could not pull the image from registry")])]),e._v(" "),s("tr",[s("td",[e._v("CrashLoopBackOff")]),e._v(" "),s("td",[e._v("Application Crashing after Launch")])]),e._v(" "),s("tr",[s("td",[e._v("RunContainerError")]),e._v(" "),s("td",[e._v("Missing ConfigMap")])]),e._v(" "),s("tr",[s("td",[e._v("ContainerCreating")]),e._v(" "),s("td",[e._v("(Stuck for long time) Missing secret")])]),e._v(" "),s("tr",[s("td",[e._v("Pending (Other)")]),e._v(" "),s("td",[e._v("Resource Quotas, Insufficient Cluster Resources, PersistentVolume fails to mount")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"node-not-schedulable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-not-schedulable","aria-hidden":"true"}},[this._v("#")]),this._v(" Node Not Schedulable")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("kubectl get nodes")]),e._v(" for status of nodes")]),e._v(" "),s("li",[s("code",[e._v("kubectl top node <node_name>")]),e._v(" for resource allocation")]),e._v(" "),s("li",[s("code",[e._v("kubectl describe node <node_namee>")]),e._v(" to get more indepth info about the node")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("SSH to a node to view the logs: "),t("code",[this._v("journalctl -u kubelet")])])}],!1,null,null,null);n.options.__file="troubleshooting.md";t.default=n.exports}}]);