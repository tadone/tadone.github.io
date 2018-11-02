---
title: "Objects: Deployments"
---

# Deploying and Running Containers

## Pod
A pod is a collection of containers (usually just single container) sharing a network and mount namespace and is the basic unit of deployment in Kubernetes. All containers in a pod are scheduled on the same node. Most of the time ``deployment`` should be used instead. Often, ``init-containers`` are part of the ``pod``.

Here is an example pod with 2 containers.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: twocontainers
spec:
  containers:
  - name: sise
    image: mhausenblas/simpleservice:0.5.0
    ports:
    - containerPort: 9876
  - name: shell
    image: centos:7
    command:
      - "bin/bash"
      - "-c"
      - "sleep 10000"
```

## Replication Controller
A ``replication controller`` (RC) is a supervisor for long-running pods. An RC will launch a specified number of ``pods`` called ``replicas`` and makes sure that they keep running, for example when a node fails or something inside of a pod, that is, in one of its containers goes wrong.

**Note that, going forward, the RCs are called ``replica sets`` (RS), supporting set-based selectors. The RS are already in use in the context of ``deployments``.**

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: some-namespace
spec:
  replicas: 1
  selector:
    app: sise
  template:
    metadata:
      name: somename
      labels:
        app: sise
    spec:
      containers:
      - name: sise
        image: mhausenblas/simpleservice:0.5.0
        ports:
        - containerPort: 9876
```

## Deployment
A deployment is a supervisor for pods and replica sets, giving you fine-grained control over how and when a new pod version is rolled out as well as rolled back to a previous state.
```yaml
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: myapp-deploy        # Name of the deployment
spec:
  replicas: 2               # Number of replicas (pods)
  template:
    metadata:
      labels:
        app: MyApp          # Label all pods with "app: MyApp"
    spec:
      containers:
      - name: myapp
        image: mhausenblas/simpleservice:0.5.0
        ports:
        - containerPort: 9876
        env:
        - name: SIMPLE_SERVICE_VERSION
          value: "0.9"
```
### Updating a Deployment

Rollout is triggered if and only if the Deployment’s pod template is changed:
- labels
- container image

```bash
# Edit deployment
kubectl edit deployment.v1.apps/nginx-deployment

# Get rollout status
kubectl rollout status deployment.v1.apps/nginx-deployment

# Describe the deployment
kubectl describe deployment nginx-deployment
```

### Rolling Back a Deployment
``Update`` deployment. Append the ``--record`` flag to save the ``kubectl`` command that is making changes to the resource.
```
$ kubectl set image deployment.v1.apps/nginx-deployment nginx=nginx:1.91 --record=true
deployment.apps/nginx-deployment image updated
```
Check ``update/rollout`` deployment (Can get stuck)
```
$ kubectl rollout status deployment.v1.apps/nginx-deployment
Waiting for rollout to finish: 1 out of 3 new replicas have been updated...
```
Get rollout ``history``. Use ``--revision=2`` for more details.
```
kubectl rollout history deployment.v1.apps/nginx-deployment
```
``Roll-back`` to previous version
```
$ kubectl rollout undo deployment.v1.apps/nginx-deployment
deployment.apps/nginx-deployment
```
Alternatively, you can ``rollback`` to a specific revision by specify that in ``--to-revision``
```
$ kubectl rollout undo deployment.v1.apps/nginx-deployment --to-revision=2
deployment.apps/nginx-deployment
```

### Pausing and Resuming a Deployment
``Pause`` by running the following command:
```
$ kubectl rollout pause deployment.v1.apps/nginx-deployment
deployment.apps/nginx-deployment paused
```
The initial state of the Deployment prior to pausing it will continue its function, but new updates to the Deployment will not have any effect as long as the Deployment is paused.

Eventually, ``resume`` the Deployment and observe a new ReplicaSet coming up with all the new updates:
```
$ kubectl rollout resume deployment.v1.apps/nginx-deployment
deployment.apps/nginx-deployment resumed
```

### Scaling a Deployment
You can ``scale`` a Deployment by using the following command:
```
$ kubectl scale deployment.v1.apps/nginx-deployment --replicas=10
deployment.apps/nginx-deployment scaled
```
Assuming horizontal pod ``autoscaling`` is enabled in your cluster, you can setup an autoscaler for your Deployment and choose the ``minimum`` and ``maximum`` number of Pods you want to run based on the CPU utilization of your existing Pods.
```
$ kubectl autoscale deployment.v1.apps/nginx-deployment --min=10 --max=15 --cpu-percent=80
deployment.apps/nginx-deployment scaled
```

## DaemonSet
A ``DaemonSet`` ensures that all (or some) ``Nodes`` run a copy of a ``Pod``. As nodes are added to the cluster, ``Pods`` are added to them. As nodes are removed from the cluster, those ``Pods`` are garbage collected. Deleting a ``DaemonSet`` will clean up the ``Pods`` it created.

Some typical uses of a DaemonSet are:
- running a cluster storage daemon, such as ``glusterd``, ``ceph``, on each node.
- running a logs collection daemon on every node, such as ``fluentd`` or ``logstash``.

```yaml
apiVersion: extensions/v1beta1
kind: DaemonSet
metadata:
  name: frontend
spec:
  updateStrategy: RollingUpdate     # Update strategy
    maxUnavailable: 1               # Max unavailable pods when updating
    minReadySeconds: 0
  template:
    metadata:
      labels:
        app: frontend-webserver     # All pods in DS will have label: "app: frontend-webserver"
    spec:
      nodeSelector:
        app: frontend-node          # Selects which nodes will run this DS
      containers:
        - name: webserver
          image: nginx
          ports:
          - containerPort: 80
```
Starting in Kubernetes 1.6, you will be able to do rolling updates with Kubernetes DaemonSets. You’ll have to set the ``updateStrategy``.

## Service
A Kubernetes Service is an abstraction which defines a logical set of Pods and a policy by which to access them - sometimes called a micro-service. The set of Pods targeted by a Service is (usually) determined by a ``Label Selector``

This specification will create a new Service object named “``my-service``” which targets TCP port 9376 on any ``Pod`` with the "``app=MyApp``" label. This Service will also be assigned an IP address (``Cluster IP``).
```yaml
kind: Service
apiVersion: v1
metadata:
  name: my-service    # Name of the service
spec:
  selector:
    app: MyApp        # Service targets pods with "app: MyApp"
  ports:
  - protocol: TCP
    port: 80
    targetPort: 9376
```

Note that a ``Service`` can map an incoming port to any ``targetPort``. By default the ``targetPort`` will be set to the same value as the ``port`` field. Perhaps more interesting is that ``targetPort`` can be a string, referring to the name of a port in the backend ``Pods``. The actual port number assigned to that name can be different in each backend ``Pod``. This offers a lot of flexibility for deploying and evolving your Services. For example, you can change the port number that pods expose in the next version of your backend software, without breaking clients.

**More about services in "Services & Ingress" section.**

# Metadata

## Namespace
``Namespaces`` provide a scope of Kubernetes objects. You can think of it as a workspace you’re sharing with other users. Many objects such as pods and services are namespaced, while some (like nodes) are not. Can have access control or resource quotas.
```yaml{4}
apiVersion: v1
kind: Namespace
metadata:
  name: test    # Create namespace called "test"
```

Later K8s resources can be deployed to that namespace using ``metadata``. It will be hard coded so this pod will always deploy to that namespace.
```yaml{5}
apiVersion: v1
kind: Pod
metadata:
  name: podintest
  namespace: test # This pod will be deployed in "test" namespace
```

## Labels
``Labels`` are the mechanism you use to organize Kubernetes objects. A label is a key-value pair with certain restrictions concerning length and allowed values but without any pre-defined meaning. So you’re free to choose labels as you see fit, for example, to express environments such as ‘this pod is running in production’ or ownership, like ‘department X owns that pod’.

```yaml{5}
apiVersion: v1
kind: Pod
metadata:
  name: labelexother
  labels:
    env: production
    owner: michael
    app: MyApp
spec:
  containers:
  - name: sise
    image: mhausenblas/simpleservice:0.5.0
    ports:
    - containerPort: 9876
```

## Annotations

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not "queryable" and should be preserved when modifying objects.

```yaml{5}
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ghost-ingress
  annotations:
    kubernetes.io/ingress.class: traefik  # Use annotation to define, which ingress controller to use (Traefik)
spec:
  rules:
  - host: "ghost.tadone.pw"
    http:
      paths:
      - path: /
        backend:
          serviceName: ghost-svc
          servicePort: 80
```
