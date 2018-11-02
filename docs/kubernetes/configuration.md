---
title: "Configuration"
---
# Kubernetes Configuration Options

## Pod ENV Variables
Use environment variables to define arguments
```bash
env:
- name: MESSAGE
  value: "hello world"
command: ["/bin/echo"]
args: ["$(MESSAGE)"]
```

## Pod Commands
Run a command in a shell
```bash
command: ["/bin/sh"]
args: ["-c", "while true; do echo hello; sleep 10; done"]
```

Example that will ``printenv`` HOSTNAME and KUBERNETES_PORT
```yaml{10}
apiVersion: v1
kind: Pod
metadata:
  name: command-demo
  labels:
    purpose: demonstrate-command
spec:
  containers:
  - name: command-demo-container
    image: debian
    command: ["printenv"]
    args: ["HOSTNAME", "KUBERNETES_PORT"]
  restartPolicy: OnFailure
```

## Session Affinity
Enable Session Affinity (a.k.a Sticky Session) to Kubernetes service

This would be the yaml file of the service:
```yaml
kind: Service
apiVersion: v1
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 80
  sessionAffinity: ClientIP
  ```

If you want to specify time, as well, this is what needs to be added:
```yaml
  sessionAffinityConfig:
    clientIP:
      timeoutSeconds: 10
  ```

## Liveness & Readiness Probe

Probes have a number of fields that you can use to more precisely control the behavior of liveness and readiness checks:

- **initialDelaySeconds:** Number of seconds after the container has started before liveness or readiness probes are initiated.
- periodSeconds: How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
- **timeoutSeconds:** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1.
- **successThreshold:** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
- **failureThreshold:** When a Pod starts and the probe fails, Kubernetes will try failureThreshold times before giving up. Giving up in case of liveness probe means restarting the Pod. In case of readiness probe the Pod will be marked Unready. Defaults to 3. Minimum value is 1.

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: liveness
  name: liveness-exec
spec:
  containers:
  - args:
    - /bin/sh
    - -c
    - echo ok > /tmp/health; sleep 10; rm -rf /tmp/health; sleep 600
    image: gcr.io/google_containers/busybox
    livenessProbe:
      exec:
        command:
        - cat
        - /tmp/health
      initialDelaySeconds: 15
      timeoutSeconds: 1
    name: liveness
```

## Image Pull Policy
The default pull policy is ``IfNotPresent`` which causes the Kubelet to skip pulling an image if it already exists. If you would like to always force a pull, you can do one of the following:
- set the ``imagePullPolicy`` of the container to ``Always``
- omit the ``imagePullPolicy`` and use ``:latest`` as the tag for the image to use
- omit the ``imagePullPolicy`` and the tag for the image to use

## CPU & Memory Units
**Meaning of CPU**

Limits and requests for CPU resources are measured in cpu units. One cpu, in Kubernetes, is equivalent to:
- 1 AWS vCPU
- 1 Azure vCore
- 1 Hyperthread on a bare-metal Intel processor with Hyperthreading

| CPU#  | PCT  | Requests/Limits (millicpu) |
| ----- | ---- | -------------------------- |
| 1vCPU | 100% | cpu: 1                     |
| 1vCPU | 50%  | cpu: 500m                  |
| 1vCPU | 25%  | cpu: 250m                  |
| 2vCPU | 50%  | cpu: 1                     |
| 2vCPU | 25%  | cpu: 500m                  |
| 2vCPU | 10%  | cpu: 50m                   |
| 4vCPU | 24%  | cpu: 1                     |

**Meaning of memory**

Limits and requests for ``memory`` are measured in bytes.
You can use M(egabytes) or Mi(bibytes). These are equivalent:
``129M or 123Mi``
>1 Megabyte (MB) = (1000)^2 bytes = 1000000 bytes.  
>1 Mebibyte (MiB) = (1024)^2 bytes = 1048576 bytes.

## Resource Limits

Specify Limit Range for a namespace:
``kubectl create -f memory-defaults.yaml --namespace=default-mem-example``
**memory-defaults.yaml**
```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: mem-limit-range
spec:
  limits:
  - default:
      memory: 512Mi
    defaultRequest:
      memory: 256Mi
    type: Container
```

Resource Limits for a container
```yaml{5}
containers:
- image: nginx
  imagePullPolicy: Always
  name: default-mem-demo-ctr
  resources:                      # Specify resources limits/requests
    limits:
      memory: 512Mi               # 512 Mebibytes memory limit
    requests:
      memory: 256Mi               # Application requests 256Mi from the cluster
```

## Taints and Tolerations
You can think of a taint as a bad smell that is added to a node. Once a node is tainted pods that don’t declare a toleration for the taint won’t be scheduled to that node. Depending on how bad the smell is (the strength of the taint) the prohibition may be soft or hard, and running pods that don’t tolerate the taint may be evicted from the node.

### Taints Explained
Nodes are tainted using kubectl:
```
kubectl taint nodes nodename key=value:effect
```
A taint consists of a key, a value for the key, and an effect. The key and value can be anything and act just like key:value pairs act throughout kubernetes: something matches if it specifies the same key and value.

The effect can be:
- **PreferNoSchedule:** Prefer not to schedule intolerant pods to the tainted node
- **NoSchedule:** Prohibits scheduling intolerant pods to the tainted node
- **NoExecute:** Prohibits and also evict intolerant pods that are already running there

For example let’s say that I have added a node to run elasticsearch, and I don’t want anything else running on that node:
```
kubectl taint nodes es-node elasticsearch=false:NoExecute
```

Once the node is tainted we can see the taint when using kubectl to describe the node:
```
$kubectl describe nodes es-node
Name:               es-node
...
Taints:             elasticsearch=false:NoExecute
```
### Tolerations Explained
A toleration is how a pod declares that it can stand the smell of a taint. Tolerations are a property of the ``PodSpec`` and a toleration for the taint above might look like this:
```yaml
tolerations:
- key: elasticsearch   # Key name
  operator: Equal      # Either Equal or Exists
  value: false         # Value
  effect: NoExecute    # Effect
```
To tolerate a specific taint the ``key name`` should be set to the same name used for the taint’s key, “elasticsearch” in this example.

The ``operator`` can be one of Equal or Exists. If set to Equal then the value is required and must match the key value on the taint. If set to Exists then the value should be omitted and the toleration will match any taint with the specified key name.

- **Equal:** The key/value/effect parameters must match. This is the default.
- **Exists:** The key/effect parameters must match. You must leave a blank value parameter, which matches any.

If ``effect`` is provided it must be PreferredNoSchedule, NoSchedule or NoExecute and should match the ``effect`` on the taint. If ``effect`` is omitted then the toleration will match any taint with any ``effect`` as long as the key and value match.

### Examples
``Untaint`` the master nodes and verify as below:
```bash
$ kubectl taint nodes --all node-role.kubernetes.io/master-
node "node1" untainted

$ kubectl describe nodes node1 | grep -i taint
Taints:             <none>
```
Set ``NoExecute`` taint on node2:
```bash
$ kubectl taint nodes node2 node2=DoNotSchedulePods:NoExecute
node "node2" tainted
[node1 ~]$ kubectl describe nodes node2 | grep Taint
Taints:             node2=DoNotSchedulePods:NoExecute
```

``Untaint`` the setting on node2
```bash
$ kubectl taint nodes node3 node3:NoSchedule-
node "node2" untainted

$ kubectl describe nodes node2 | grep Taint
Taints:             <none>
```


```bash
# Basic Example
kubectl taint nodes node1 key=value:NoSchedule

# This will remove the node-role.kubernetes.io/master taint from any nodes that have it, including the master node, meaning that the scheduler will then be able to schedule pods everywhere.
kubectl taint nodes --all node-role.kubernetes.io/master-

# Do not schedule pods on node3 with kye:value dedicated=experimental
kubectl taint nodes node3 dedicated=experimental:NoSchedule
```

Taint by label
```bash
kubectl taint node -l myLabel=X dedicated=foo:PreferNoSchedule
```
This Pod can be scheduled on a node that has the taint dedicated=experimental:NoSchedule:
```yaml
tolerations:
- key: dedicated       # Matches the taint's key
  operator: Equal      # Equal, which means the value key has to match
  value: experimental  # Must match the tain with "Equal" operator
  effect: NoSchedule   # If included must match taint
```


## Node Selector
``nodeSelector`` is the simplest form of constraint. ``nodeSelector`` is a field of PodSpec. It specifies a map of key-value pairs. For the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as ``labels`` (it can have additional labels as well). The most common usage is one key-value pair.

**Attach label to a node**
```
kubectl label nodes kubernetes-node-1 disktype=ssd
```

**Add a nodeSelector field to your pod configuration**
```yaml{12}
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  nodeSelector:
    disktype: ssd
```
When you then run ``kubectl create -f pod-nginx.yaml``, the Pod will get scheduled on the node that you attached the label to.

**Built-in node labels**
- kubernetes.io/hostname
- failure-domain.beta.kubernetes.io/zone
- failure-domain.beta.kubernetes.io/region
- beta.kubernetes.io/instance-type
- beta.kubernetes.io/os
- beta.kubernetes.io/arch
