---
title: "Objects"
---

# Kubernetes Objects

## Volume
At its core, a volume is just a directory, possibly with some data in it, which is accessible to the Containers in a Pod. How that directory comes to be, the medium that backs it, and the contents of it are determined by the particular volume type used.
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

### configMap
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

### emptyDir
By default, ``emptyDir`` volumes are stored on whatever medium is backing the node - that might be disk or SSD or network storage, depending on your environment. However, you can set the ``emptyDir.medium`` field to ``Memory`` to tell Kubernetes to mount a tmpfs (RAM-backed filesystem) for you instead. While tmpfs is very fast, be aware that unlike disks, tmpfs is cleared on node reboot and any files you write will count against your Container’s memory limit.
```yaml
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

### hostPath
A ``hostPath`` volume mounts a file or directory from the host node’s filesystem into your Pod. This is not something that most Pods will need, but it offers a powerful escape hatch for some applications.
For example, some uses for a ``hostPath`` are:
- running a Container that needs access to Docker internals; use a ``hostPath`` of ``/var/lib/docker``
- running cAdvisor in a Container; use a ``hostPath`` of ``/sys``

In addition to the required path property, user can optionally specify a type for a hostPath volume.
The supported values for field type are:
_Empty string (default) is for backward compatibility, which means that no checks will be performed before mounting the hostPath volume._

Value             | Behavior
------------------|-------------
DirectoryOrCreate | If nothing exists at the given path, an empty directory will be created there as needed with permission set to 0755, having the same group and ownership with Kubelet.
**Directory**         | A directory must exist at the given path
FileOrCreate      | If nothing exists at the given path, an empty file will be created there as needed with permission set to 0644, having the same group and ownership with Kubelet.
**File**              | A file must exist at the given path
Socket            | A UNIX socket must exist at the given path
CharDevice        | A character device must exist at the given path
BlockDevice       | A block device must exist at the given path

```yaml
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

### persistentVolumeClaim
A persistentVolumeClaim volume is used to mount a ``PersistentVolume`` into a Pod. ``PersistentVolumes`` are a way for users to “claim” durable storage (such as a GCE PersistentDisk or an iSCSI volume) without knowing the details of the particular cloud environment.
See the **PersistentVolumes** example for more details.
```yaml
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mysql-pv-claim
  labels:
    app: wordpress
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

## PersistentVolume
Managing storage is a distinct problem from managing compute. The ``PersistentVolume`` subsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this we introduce two new API resources: ``PersistentVolume`` and ``PersistentVolumeClaim``.
- ``PersistentVolume`` (**PV**) is a piece of storage in the cluster that has been provisioned by an administrator.
- ``PersistentVolumeClaim`` (**PVC**) is a request for storage by a user. It is similar to a pod. Pods consume node resources and PVCs consume PV resources. Claims can request specific size and access modes (e.g., can be mounted once read/write or many times read-only).

PVs are resources in the cluster. PVCs are requests for those resources and also act as claim checks to the resource.

### Provisioning
There are two ways PVs may be provisioned: statically or dynamically.
- Static: A cluster administrator creates a number of PVs. They carry the details of the real storage which is available for use by cluster users.
- Dynamic: When none of the static PVs the administrator created matches a user’s PersistentVolumeClaim, the cluster may try to dynamically provision a volume specially for the PVC. **This provisioning is based on StorageClasses**

::: warning
- PersistentVolumeClaim binds are exclusive, regardless of how they were bound. A PVC to PV binding is a one-to-one mapping.
- Cluster provisioned with many 50Gi PVs would not match a PVC requesting 100Gi. The PVC can be bound when a 100Gi PV is added to the cluster.
:::

### Reclaiming
When a user is done with their volume, they can delete the PVC objects from the API which allows reclamation of the resource. The reclaim policy for a PersistentVolume tells the cluster what to do with the volume after it has been released of its claim. Currently, volumes can either be Retained, Recycled (Deprecated) or Deleted.

### PV
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

### PVC
Each PVC contains a spec and status, which is the specification and status of the claim.
```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: wordpress-volumeclaim
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
- A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key.
- Secrets can be mounted as data volumes or be exposed as environment variables to be used by a container in a pod.

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

## Service
A Kubernetes Service is an abstraction which defines a logical set of Pods and a policy by which to access them - sometimes called a micro-service. The set of Pods targeted by a Service is (usually) determined by a ``Label Selector``

This specification will create a new Service object named “``my-service``” which targets TCP port 9376 on any ``Pod`` with the "``app=MyApp``" label. This Service will also be assigned an IP address (``Cluster IP``).
```yaml
kind: Service
apiVersion: v1
metadata:
  name: my-service
spec:
  selector:
    app: MyApp        # Service targets pods with "app: MyApp"
  ports:
  - protocol: TCP
    port: 80
    targetPort: 9376
```

Note that a ``Service`` can map an incoming port to any ``targetPort``. By default the ``targetPort`` will be set to the same value as the ``port`` field. Perhaps more interesting is that ``targetPort`` can be a string, referring to the name of a port in the backend ``Pods``. The actual port number assigned to that name can be different in each backend ``Pod``. This offers a lot of flexibility for deploying and evolving your Services. For example, you can change the port number that pods expose in the next version of your backend software, without breaking clients.

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
```yaml(5)
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