---
title: "Overview"
---

# Kubernetes (k8s)
---
## Overview
**Kubernetes** is a production-grade, open-source platform that orchestrates the placement (scheduling) and execution of application containers within and across computer clusters.

A Kubernetes cluster consists of two types of resources:
- The **Master** coordinates the cluster
  - The Kubernetes Master is a collection of three processes that run on a single node in your cluster, which is designated as the master node. Those processes are: [kube-apiserver](https://kubernetes.io/docs/admin/kube-apiserver/), [kube-controller-manager](https://kubernetes.io/docs/admin/kube-controller-manager/) and [kube-scheduler](https://kubernetes.io/docs/admin/kube-scheduler/).
- **Nodes** are the workers that run applications
  - Each individual non-master node in your cluster runs two processes:
    - **kubelet**, which communicates with the Kubernetes Master.
    - **kube-proxy**, a network proxy which reflects Kubernetes networking services on each node.

## Objects
The basic Kubernetes objects include:
- **Cluster**
  The cluster is a collection of Nodes (computers) related to each other and work together.
- **Node**
  A node is the host that the container runs on.
- **Pod**
  A pod is a collection of containers, with shared storage and network, and a specification on how to run them. Each pod is allocated its own IP address. Containers within a pod share this IP address, port space and can find each other via localhost.
- **Label**
  A label in Kubernetes is a semantic tag that can be attached to Kubernetes objects to mark them as a part of a group. Labels are given as simple key-value pairs. Each unit can have more than one label, but each unit can only have one entry for each key.
- **Annotations**
  In general, annotations are a way of adding rich metadata to an object that is not helpful for selection purposes.
- **Service**
  It is an abstraction which defines a logical set of Pods and a policy by which to access them - sometimes called a micro-service. The set of Pods targeted by a Service is (usually) determined by a `Label Selector`
- **Volume**
  Volumes allow data to be shared by all containers within a pod and remain available until the pod is terminated. This means that tightly coupled pods can easily share files without complex external mechanisms. Container failures within the pod will not affect access to the shared files. Once the pod is terminated, the shared volume is destroyed, so it is not a good solution for truly persistent data.
- **Persistent volumes**
  It's a mechanism for abstracting more robust storage that is not tied to the pod life cycle. Instead, they allow administrators to configure storage resources for the cluster that users can request and claim for the pods they are running. Once a pod is done with a persistent volume, the volume's reclamation policy determines whether the volume is kept around until manually deleted or removed along with the data immediately.
- **Namespace**
  Namespaces are a way to divide cluster resources between multiple users (via resource quota). Namespaces provide a scope for names. Names of resources need to be unique within a namespace, but not across namespaces. Namespaces are intended for use in environments with many users spread across multiple teams, or projects.
  Kubernetes starts with three **initial** namespaces:
  - `default` The default namespace for objects with no other namespace
  - `kube-system` The namespace for objects created by the Kubernetes system
  - `kube-public` This namespace is created automatically and is readable by all users (including those not authenticated). This namespace is mostly reserved for cluster usage, in case that some resources should be visible and readable publicly throughout the whole cluster. The public aspect of this namespace is only a convention, not a requirement.
- **ConfigMap**
  ConfigMaps allow mounting configuration files into a Pod as an Environment variable or as a file system mount.
- **Secrets**
  Secrets are very similar to ConfigMaps, they are, by their name, “secret”.
- **ReplicaSet**
  A replicaset runs n number of pods, based on the provided template. Replicasets can (when instructed to) scale up or down the number of pods which are desired.
- **Deployment**
  Deployment describes a desired state in a Deployment object, and the Deployment controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.
- **StatefulSet**
  Manages the deployment and scaling of a set of Pods , and provides guarantees about the ordering and uniqueness of these Pods.
  Like a Deployment, a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains a sticky identity for each of their Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that it maintains across any rescheduling.
- **DaemonSet**
  A Daemonset ensures that all Nodes run a specific Pod. This is useful for running something such as a logging agent like fluentd on all Nodes.
  It is also possible to ignore certain Nodes by using Taints.
- **Ingress**
  In most circumstances, services and pods have IP addresses which are only accessible from within the Kubernetes cluster. With the services being isolated from internet traffic.
  “An Ingress is a collection of rules that allow inbound connections to reach the cluster services.”
  An ingress is just another Kubernetes resource, however, in most cases, it is required to have an **Ingress Controller** Such as Nginx or Træfik.
- **Job**
  A job creates one or more pods and ensures that a specified number of them successfully terminate. As pods successfully complete, the job tracks the successful completions. When a specified number of successful completions is reached, the job itself is complete. Deleting a Job will cleanup the pods it created.