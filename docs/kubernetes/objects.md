---
title: "Objects"
---

# Kubernetes Objects

## ConfigMap
The ConfigMap object provides mechanisms to inject containers with configuration data. A ``ConfigMap`` can be used to store fine-grained information like individual properties or coarse-grained information like entire configuration files or JSON blobs.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: test-staging-sidekiq
  labels:
    name: test-staging-sidekiq
  namespace: test
data:
  config: |-
    ---
    :verbose: true
    :environment: staging
    :pidfile: tmp/pids/sidekiq.pid
    :logfile: log/sidekiq.log
    :concurrency: 20
    :queues:
      - [default, 1]
    :dynamic: true
    :timeout: 300
```
The above template creates ``ConfigMap`` in the test namespace and is only accessible in that namespace. After that let’s use this ``configmap`` as a ``volume`` to create our ``sidekiq.yml`` configuration file in deployment template named ``test-deployment.yml``.
### ConfigMap as Volume:
```yaml{26}
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: test-staging
  labels:
    app: test-staging
  namespace: test
spec:
  template:
    metadata:
      labels:
        app: test-staging
    spec:
      containers:
      - image: <your-repo>/<your-image-name>:latest
        name: test-staging
        imagePullPolicy: Always
        volumeMounts:
            - mountPath: /etc/sidekiq/config
              name: test-staging-sidekiq
        ports:
        - containerPort: 80
      volumes:
        - name: test-staging-sidekiq
          configMap:
             name: test-staging-sidekiq             # Name of ConfigMap to use
             items:                                 
              - key: config
                path:  sidekiq.yml                  # File created in VolumeMount
```
Further if we want to make changes, we can simply modify the ``configmap`` template and restart the pod or scale down/up.

### Configure all key-value pairs in a ConfigMap as container ENV variables
ConfigMap with one environment variable
```yaml
   apiVersion: v1
   kind: ConfigMap
   metadata:
     name: special-config
     namespace: default
   data:
     SPECIAL_LEVEL: very
     SPECIAL_TYPE: charm
```
You can consume the keys of this ConfigMap in a pod using configMapKeyRef sections. Use ``envFrom`` to define all of the ConfigMap’s data as container environment variables. The key from the ``ConfigMap`` becomes the environment variable name in the Pod.
```yaml
   apiVersion: v1
   kind: Pod
   metadata:
     name: dapi-test-pod
   spec:
     containers:
       - name: test-container
         image: k8s.gcr.io/busybox
         command: [ "/bin/sh", "-c", "env" ]
         envFrom:
         - configMapRef:
             name: special-config             # Name of the config map
     restartPolicy: Never
```
The pod will have ENV variables ``SPECIAL_LEVEL=very`` and ``SPECIAL_TYPE=charm``.

### Use ConfigMap-defined environment variables in Pod commands
You can use ConfigMap-defined environment variables in the command section of the Pod specification using the $(VAR_NAME) Kubernetes substitution syntax.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: dapi-test-pod
spec:
  containers:
    - name: test-container
      image: k8s.gcr.io/busybox
      command: [ "/bin/sh", "-c", "echo $(SPECIAL_LEVEL_KEY) $(SPECIAL_TYPE_KEY)" ]
      env:
        - name: SPECIAL_LEVEL_KEY
          valueFrom:
            configMapKeyRef:
              name: special-config
              key: SPECIAL_LEVEL
        - name: SPECIAL_TYPE_KEY
          valueFrom:
            configMapKeyRef:
              name: special-config
              key: SPECIAL_TYPE
  restartPolicy: Never
```
Produces the following output in the test-container container: ``very charm``

## Volume
At its core, a volume is just a directory, possibly with some data in it, which is accessible to the Containers in a Pod. How that directory comes to be, the medium that backs it, and the contents of it are determined by the particular volume type used.

### Volume Types:
Kubernetes supports several types of Volumes (most common):
* node-local types:
  - [emptyDir](#emptyDir)
  - [hostPath](#hostPath)
* cloud provider-specific
  - azureDisk
  - [gcePersistentDisk](#gcePersistentDisk)
* distributed file system
  - glusterfs
  - cephfs
* special purpose
  - [configMap](#configMap)
  - [secret](#secret)
  - downwardAPI
* [persistentVolumeClaim](#persistentVolumeClaim)

#### Type: configMap
::: warning
You must create a ConfigMap before you can use it.
:::

The ``log-config`` ConfigMap is mounted as a volume, and all contents stored in its ``log_level`` entry are mounted into the Pod at path ``/etc/config/log_level``. Note that this path is derived from the volume’s ``mountPath`` and the ``path`` keyed with ``log_level``.
```yaml{14}
apiVersion: v1
kind: Pod
metadata:
  name: configmap-pod
spec:
  containers:
    - name: test
      image: busybox
      volumeMounts:
        - name: config-vol
          mountPath: /etc/config
  volumes:
    - name: config-vol
      configMap:
        name: log-config
        items:
          - key: log_level
            path: log_level
```

#### Type: emptyDir
By default, ``emptyDir`` volumes are stored on whatever medium is backing the node - that might be disk or SSD or network storage, depending on your environment. However, you can set the ``emptyDir.medium`` field to ``Memory`` to tell Kubernetes to mount a tmpfs (RAM-backed filesystem) for you instead. While tmpfs is very fast, be aware that unlike disks, tmpfs is cleared on node reboot and any files you write will count against your Container’s memory limit.
```yaml{14}
apiVersion: v1
kind: Pod
metadata:
  name: test-pd
spec:
  containers:
  - image: k8s.gcr.io/test-webserver
    name: test-container
    volumeMounts:
    - mountPath: /cache
      name: cache-volume
  volumes:
  - name: cache-volume
    emptyDir: {}
```

#### Type: hostPath
A ``hostPath`` volume mounts a file or directory from the host node’s filesystem into your Pod.   
For example, some uses for a ``hostPath`` are:
- running a Container that needs access to Docker internals; use a ``hostPath`` of ``/var/lib/docker``
- running cAdvisor in a Container; use a ``hostPath`` of ``/sys``

The supported values for field type are (if empty, no checks will be performed):

Value             | Behavior
------------------|-------------
DirectoryOrCreate | If nothing exists at the given path, an empty directory will be created there as needed with permission set to 0755, having the same group and ownership with Kubelet.
**Directory**         | A directory must exist at the given path
FileOrCreate      | If nothing exists at the given path, an empty file will be created there as needed with permission set to 0644, having the same group and ownership with Kubelet.
**File**              | A file must exist at the given path
Socket            | A UNIX socket must exist at the given path

```yaml{14}
apiVersion: v1
kind: Pod
metadata:
  name: test-pd
spec:
  containers:
  - image: k8s.gcr.io/test-webserver
    name: test-container
    volumeMounts:
    - mountPath: /test-pd
      name: test-volume
  volumes:
  - name: test-volume
    hostPath:
      # directory location on host
      path: /data
      # this field is optional
      type: Directory
```

#### Type: persistentVolumeClaim
A persistentVolumeClaim volume is used to mount a ``PersistentVolume`` into a Pod. ``PersistentVolumes`` are a way for users to “claim” durable storage (such as a GCE PersistentDisk or an iSCSI volume) without knowing the details of the particular cloud environment.
See the **PersistentVolumes** example for more details.
```yaml{14}
kind: Pod
apiVersion: v1
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: myclaim
```

## PersistentVolume

There are two ways PVs may be provisioned: statically or dynamically.
- Static: A cluster administrator creates a number of PVs. They carry the details of the real storage which is available for use by cluster users.
- Dynamic: When none of the static PVs the administrator created matches a user’s PersistentVolumeClaim, the cluster may try to dynamically provision a volume specially for the PVC. **This provisioning is based on StorageClasses**

::: warning
- PersistentVolumeClaim binds are exclusive, regardless of how they were bound. A PVC to PV binding is a one-to-one mapping.
- Cluster provisioned with many 50Gi PVs would not match a PVC requesting 100Gi. The PVC can be bound when a 100Gi PV is added to the cluster.
:::

## PersistentVolumeClaim

Creating and using a persistent volume is a three step process:
1. (OPTIONAL) Provision: Administrator provision a networked storage in the cluster, such as AWS ElasticBlockStore volumes. This is called as PersistentVolume.
2. Request storage: User requests storage for pods by using claims. Claims can specify levels of resources (CPU and memory), specific sizes and access modes (e.g. can be mounted once read/write or many times write only). This is called as ``PersistentVolumeClaim``.
3. Use claim: Claims are mounted as volumes and used in pods for storage.

The **access mode**s are:
- ``ReadWriteOnce`` - the volume can be mounted as read-write by a single node
- ``ReadOnlyMany`` - the volume can be mounted read-only by many nodes
- ``ReadWriteMany`` - the volume can be mounted as read-write by many nodes

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: mysql-volumeclaim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 200Gi
```

### Claims As Volumes
Pods access storage by using the claim as a volume. Claims must exist in the same namespace as the pod using the claim. The cluster finds the claim in the pod’s namespace and uses it to get the PersistentVolume backing the claim. The volume is then mounted to the host and into the pod.
```yaml
kind: Pod
apiVersion: v1
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: myclaim
```

## Secret
``Secrets`` are intended to hold sensitive information, such as passwords, OAuth tokens, and ssh keys.
https://github.com/arun-gupta/vault-kubernetes/blob/master/secrets.yaml
http://kubernetesbyexample.com/secrets/

- Secrets are namespaced objects, that is, exist in the context of a namespace
- You can access them via a volume or an environment variable from a container running in a pod
- The secret data on nodes is stored in tmpfs volumes

### Create Manually

```bash
# Create files needed for rest of example.
$ echo -n 'admin' > ./username.txt
$ echo -n '1f2d1e2e67df' > ./password.txt
```

The ``kubectl create secret`` command packages these files into a Secret

```bash
$ kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt
secret "db-user-pass" created
```
### Describe
Describe the secret. Items in Data are actual values of the secret
```bash
$ kubectl describe secrets/db-user-pass
Name:            db-user-pass
Namespace:       default
Labels:          <none>
Annotations:     <none>

Type:            Opaque

Data
====
password.txt:    12 bytes
username.txt:    5 bytes
```

Secrets can be retrieved via the ``kubectl get secret`` command

```bash
$ kubectl get secret mysecret -o yaml
apiVersion: v1
data:
  username: YWRtaW4=
  password: MWYyZDFlMmU2N2Rm
kind: Secret
metadata:
  creationTimestamp: 2016-01-22T18:41:56Z
  name: mysecret
  namespace: default
  resourceVersion: "164619"
  selfLink: /api/v1/namespaces/default/secrets/mysecret
  uid: cfee02d6-c137-11e5-8d73-42010af00002
type: Opaque
```

### Decode
Finally, decode the secret using base64
```bash
$ echo 'MWYyZDFlMmU2N2Rm' | base64 --decode
1f2d1e2e67df
```

### As Volume
Each key in the secret ``data`` map becomes the filename under ``mountPath``
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mypod
    image: redis
    volumeMounts:
    - name: foo
      mountPath: "/etc/foo" # Foo is a directory where items from 'data' will be populated as files
      readOnly: true
  volumes:
  - name: foo              # Name of the volume, referenced in volumeMount
    secret:
      secretName: mysecret # Name of the secret
```
Optionally, specify specific path for items in the secret
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mypod
    image: redis
    volumeMounts:
    - name: foo
      mountPath: "/etc/foo"
      readOnly: true
  volumes:
  - name: foo
    secret:
      secretName: mysecret
      items:
      - key: username
        path: my-group/my-username
```
What will happen:
- username secret is stored under /etc/foo/my-group/my-username file instead of /etc/foo/username.
- password secret is not projected

To consume all keys from the secret, all of them must be listed in the items field. All listed keys must exist in the corresponding secret. Otherwise, the volume is not created.

**Consuming Secret Values from Volumes**
_Mounted Secrets are updated automatically_
Inside the container that mounts a secret volume, the secret keys appear as files and the secret values are base-64 decoded and stored inside these files.
```bash
$ ls /etc/foo/
username
password
$ cat /etc/foo/username
admin
$ cat /etc/foo/password
1f2d1e2e67df
```
### As Env Variables
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secret-env-pod
spec:
  containers:
  - name: mycontainer
    image: redis
    env:
      - name: SECRET_USERNAME      # Name of the env variable
        valueFrom:
          secretKeyRef:
            name: mysecret
            key: username
      - name: SECRET_PASSWORD      # Name of the env variable
        valueFrom:
          secretKeyRef:
            name: mysecret
            key: password
```
```bash
$ echo $SECRET_USERNAME
admin
$ echo $SECRET_PASSWORD
1f2d1e2e67df
```
# Running Containers

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

# Other

## CronJob
https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/

```bash
kubectl create -f ./cronjob.yaml
kubectl get cronjob hello
kubectl get jobs --watch
kubectl delete cronjob hello
```

```yaml
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            args:
            - /bin/sh
            - -c
            - date; echo Hello from the Kubernetes cluster
          restartPolicy: OnFailure
```