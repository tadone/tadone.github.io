(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{168:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("hr"),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("A Kubernetes cluster consists of two types of resources:")]),e._v(" "),s("ul",[s("li",[e._v("The "),s("strong",[e._v("Master")]),e._v(" coordinates the cluster\n"),s("ul",[s("li",[e._v("The Kubernetes Master is a collection of three processes that run on a single node in your cluster, which is designated as the master node. Those processes are: "),s("a",{attrs:{href:"https://kubernetes.io/docs/admin/kube-apiserver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kube-apiserver"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://kubernetes.io/docs/admin/kube-controller-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kube-controller-manager"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://kubernetes.io/docs/admin/kube-scheduler/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kube-scheduler"),s("OutboundLink")],1),e._v(".")])])]),e._v(" "),e._m(3)]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("The basic Kubernetes objects include:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"kubernetes-k8s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-k8s","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubernetes (k8s)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Kubernetes")]),this._v(" is a production-grade, open-source platform that orchestrates the placement (scheduling) and execution of application containers within and across computer clusters.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("strong",[e._v("Nodes")]),e._v(" are the workers that run applications\n"),s("ul",[s("li",[e._v("Each individual non-master node in your cluster runs two processes:\n"),s("ul",[s("li",[s("strong",[e._v("kubelet")]),e._v(", which communicates with the Kubernetes Master.")]),e._v(" "),s("li",[s("strong",[e._v("kube-proxy")]),e._v(", a network proxy which reflects Kubernetes networking services on each node.")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"objects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objects","aria-hidden":"true"}},[this._v("#")]),this._v(" Objects")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("Cluster")]),e._v("\nThe cluster is a collection of Nodes (computers) related to each other and work together.")]),e._v(" "),s("li",[s("strong",[e._v("Node")]),e._v("\nA node is the host that the container runs on.")]),e._v(" "),s("li",[s("strong",[e._v("Pod")]),e._v("\nA pod is a collection of containers, with shared storage and network, and a specification on how to run them. Each pod is allocated its own IP address. Containers within a pod share this IP address, port space and can find each other via localhost.")]),e._v(" "),s("li",[s("strong",[e._v("Label")]),e._v("\nA label in Kubernetes is a semantic tag that can be attached to Kubernetes objects to mark them as a part of a group. Labels are given as simple key-value pairs. Each unit can have more than one label, but each unit can only have one entry for each key.")]),e._v(" "),s("li",[s("strong",[e._v("Annotations")]),e._v("\nIn general, annotations are a way of adding rich metadata to an object that is not helpful for selection purposes.")]),e._v(" "),s("li",[s("strong",[e._v("Service")]),e._v("\nIt is an abstraction which defines a logical set of Pods and a policy by which to access them - sometimes called a micro-service. The set of Pods targeted by a Service is (usually) determined by a "),s("code",[e._v("Label Selector")])]),e._v(" "),s("li",[s("strong",[e._v("Volume")]),e._v("\nVolumes allow data to be shared by all containers within a pod and remain available until the pod is terminated. This means that tightly coupled pods can easily share files without complex external mechanisms. Container failures within the pod will not affect access to the shared files. Once the pod is terminated, the shared volume is destroyed, so it is not a good solution for truly persistent data.")]),e._v(" "),s("li",[s("strong",[e._v("Persistent volumes")]),e._v("\nIt's a mechanism for abstracting more robust storage that is not tied to the pod life cycle. Instead, they allow administrators to configure storage resources for the cluster that users can request and claim for the pods they are running. Once a pod is done with a persistent volume, the volume's reclamation policy determines whether the volume is kept around until manually deleted or removed along with the data immediately.")]),e._v(" "),s("li",[s("strong",[e._v("Namespace")]),e._v("\nNamespaces are a way to divide cluster resources between multiple users (via resource quota). Namespaces provide a scope for names. Names of resources need to be unique within a namespace, but not across namespaces. Namespaces are intended for use in environments with many users spread across multiple teams, or projects.\nKubernetes starts with three "),s("strong",[e._v("initial")]),e._v(" namespaces:\n"),s("ul",[s("li",[s("code",[e._v("default")]),e._v(" The default namespace for objects with no other namespace")]),e._v(" "),s("li",[s("code",[e._v("kube-system")]),e._v(" The namespace for objects created by the Kubernetes system")]),e._v(" "),s("li",[s("code",[e._v("kube-public")]),e._v(" This namespace is created automatically and is readable by all users (including those not authenticated). This namespace is mostly reserved for cluster usage, in case that some resources should be visible and readable publicly throughout the whole cluster. The public aspect of this namespace is only a convention, not a requirement.")])])]),e._v(" "),s("li",[s("strong",[e._v("ConfigMap")]),e._v("\nConfigMaps allow mounting configuration files into a Pod as an Environment variable or as a file system mount.")]),e._v(" "),s("li",[s("strong",[e._v("Secrets")]),e._v("\nSecrets are very similar to ConfigMaps, they are, by their name, “secret”.")]),e._v(" "),s("li",[s("strong",[e._v("ReplicaSet")]),e._v("\nA replicaset runs n number of pods, based on the provided template. Replicasets can (when instructed to) scale up or down the number of pods which are desired.")]),e._v(" "),s("li",[s("strong",[e._v("Deployment")]),e._v("\nDeployment describes a desired state in a Deployment object, and the Deployment controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.")]),e._v(" "),s("li",[s("strong",[e._v("StatefulSet")]),e._v("\nManages the deployment and scaling of a set of Pods , and provides guarantees about the ordering and uniqueness of these Pods.\nLike a Deployment, a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains a sticky identity for each of their Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that it maintains across any rescheduling.")]),e._v(" "),s("li",[s("strong",[e._v("DaemonSet")]),e._v("\nA Daemonset ensures that all Nodes run a specific Pod. This is useful for running something such as a logging agent like fluentd on all Nodes.\nIt is also possible to ignore certain Nodes by using Taints.")]),e._v(" "),s("li",[s("strong",[e._v("Ingress")]),e._v("\nIn most circumstances, services and pods have IP addresses which are only accessible from within the Kubernetes cluster. With the services being isolated from internet traffic.\n“An Ingress is a collection of rules that allow inbound connections to reach the cluster services.”\nAn ingress is just another Kubernetes resource, however, in most cases, it is required to have an "),s("strong",[e._v("Ingress Controller")]),e._v(" Such as Nginx or Træfik.")]),e._v(" "),s("li",[s("strong",[e._v("Job")]),e._v("\nA job creates one or more pods and ensures that a specified number of them successfully terminate. As pods successfully complete, the job tracks the successful completions. When a specified number of successful completions is reached, the job itself is complete. Deleting a Job will cleanup the pods it created.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"networking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networking","aria-hidden":"true"}},[this._v("#")]),this._v(" Networking")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Each "),t("code",[this._v("Pod")]),this._v(" is assigned a unique IP address. Every container in a Pod shares the network namespace, including the IP address and network ports. Containers inside a Pod can communicate with one another using "),t("code",[this._v("localhost")]),this._v(". When containers in a Pod communicate with entities outside the Pod, they must coordinate how they use the shared network resources (such as ports).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices","aria-hidden":"true"}},[this._v("#")]),this._v(" Best Practices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"namespaces-namespaces-namespaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#namespaces-namespaces-namespaces","aria-hidden":"true"}},[this._v("#")]),this._v(" Namespaces, Namespaces, Namespaces")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Namespaces let you run multiple identical stacks side by side")]),e._v(" "),s("li",[e._v("Two namespaces (e.g. blue and green) can each have their own redis service")]),e._v(" "),s("li",[e._v("Each of the two redis services has its own ClusterIP")]),e._v(" "),s("li",[e._v("kube-dns creates two entries, mapping to these two ClusterIP addresses:")]),e._v(" "),s("li",[e._v("redis.blue.svc.cluster.local and redis.green.svc.cluster.local")]),e._v(" "),s("li",[e._v("Pods in the blue namespace get a search suffix of blue.svc.cluster.local")]),e._v(" "),s("li",[e._v("As a result, resolving redis from a pod in the blue namespace yields  the “local” redis"),s("br"),e._v(" "),s("em",[e._v("This does not provide isolation! That would be the job of network     policies.")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("As containers are to processes, Namespaces are to Kubernetes projects. Quite apart from the security boundary that Namespaces convey, they’re an excellent way to partition your work and they yield an excellent way to reset or delete it:"),s("br"),e._v(" "),s("code",[e._v("kubectl delete namespace/$WORKING_PROJECT")]),s("br"),e._v("\nThe only downside is that, when using the non-default namespace, you will need to specify your working namespace "),s("code",[e._v("--namespace=$WORKING_PROJECT")]),e._v(" on kubectl commands."),s("br"),e._v(" "),s("em",[e._v('Best practice is to "not" reference namespace in Kubernetes YAML file so they can be reused for other')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"stateful-services-databases-etc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stateful-services-databases-etc","aria-hidden":"true"}},[this._v("#")]),this._v(" Stateful services (databases etc.)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("As a first step, it is wiser to keep stateful services outside of the cluster")]),e._v(" "),s("li",[e._v("Exposing them to pods can be done with multiple solutions:")]),e._v(" "),s("li",[e._v("ExternalName services (redis.blue.svc.cluster.local will be a CNAME record)")]),e._v(" "),s("li",[e._v("ClusterIP services with explicit Endpoints (instead of letting Kubernetes generate the endpoints from a selector)")]),e._v(" "),s("li",[e._v("Ambassador services (application-level proxies that can provide credentials injection and more)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"stateful-services-second-take"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stateful-services-second-take","aria-hidden":"true"}},[this._v("#")]),this._v(" Stateful services (second take)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("If you really want to host stateful services on Kubernetes, you can look into:\n"),t("ul",[t("li",[this._v("volumes (to carry persistent data)")]),this._v(" "),t("li",[this._v("storage plugins")]),this._v(" "),t("li",[this._v("persistent volume claims (to ask for specific volume characteristics)\nstateful sets (pods that are not ephemeral)")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"http-traffic-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-traffic-handling","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP traffic handling")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Services are layer 4 constructs")]),e._v(" "),s("li",[e._v("HTTP is a layer 7 protocol")]),e._v(" "),s("li",[e._v("It is handled by ingresses (a different resource kind)")]),e._v(" "),s("li",[e._v("Ingresses allow:\n"),s("ul",[s("li",[e._v("virtual host routing")]),e._v(" "),s("li",[e._v("session stickiness")]),e._v(" "),s("li",[e._v("URI mapping")]),e._v(" "),s("li",[e._v("and much more!")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"use-json-and-jsonpath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-json-and-jsonpath","aria-hidden":"true"}},[this._v("#")]),this._v(" Use JSON and JSONPATH")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("kubectl get nodes --output"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("json "),s("span",{attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),s("span",{attrs:{class:"token string"}},[e._v("'.items[].metadata.name'")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("# JSON PATH")]),e._v("\nkubectl get nodes --output"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("jsonpath"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"{.items[*]}"')]),e._v("\nkubectl get nodes --output"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("jsonpath"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"{.items[0]}"')]),e._v("\nkubectl get nodes --output"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("jsonpath"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"{.items[0].metadata.name}"')]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logging-and-metrics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-and-metrics","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging and metrics")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Logging is delegated to the container engine")]),this._v(" "),t("li",[this._v("Metrics are typically handled with Prometheus")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"managing-the-configuration-of-our-applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-the-configuration-of-our-applications","aria-hidden":"true"}},[this._v("#")]),this._v(" Managing the configuration of our applications")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Two constructs are particularly useful: secrets and config maps")]),this._v(" "),t("li",[this._v("They allow to expose arbitrary information to our containers")]),this._v(" "),t("li",[this._v("Avoid storing configuration in container images (There are some exceptions to that rule, but it’s generally a Bad Idea)")]),this._v(" "),t("li",[this._v("Never store sensitive information in container images (It’s the container equivalent of the password on a post-it note on your screen)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cluster-federation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster-federation","aria-hidden":"true"}},[this._v("#")]),this._v(" Cluster federation")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Kubernetes master operation relies on etcd")]),e._v(" "),s("li",[e._v("etcd uses the Raft protocol")]),e._v(" "),s("li",[e._v("Raft recommends low latency between nodes")]),e._v(" "),s("li",[e._v("What if our cluster spreads to multiple regions?")]),e._v(" "),s("li",[e._v("Break it down in local clusters")]),e._v(" "),s("li",[e._v("Regroup them in a cluster federation")]),e._v(" "),s("li",[e._v("Synchronize resources across clusters")]),e._v(" "),s("li",[e._v("Discover resources across clusters")])])}],!1,null,null,null);n.options.__file="overview.md";t.default=n.exports}}]);