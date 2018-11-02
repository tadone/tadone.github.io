---
title: "Objects: Data-In"
---

# Kubernetes Configuration Objects

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
