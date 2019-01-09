---
title: "Objects: Volumes"
---

## Volume
At its core, a volume is just a directory, possibly with some data in it, which is accessible to the Containers in a Pod. How that directory comes to be, the medium that backs it, and the contents of it are determined by the particular volume type used.
::: warning
You cannot bind two pvc to the same pv, but you can use the same pvc in two different pods.
The relationship PVC <--> PV is one-on-one.
:::
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
