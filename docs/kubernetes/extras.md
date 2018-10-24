---
title: "Extras"
---

## ENV Variables
Use environment variables to define arguments
```bash
env:
- name: MESSAGE
  value: "hello world"
command: ["/bin/echo"]
args: ["$(MESSAGE)"]
```

## Commands
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

https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/
http://kubernetesbyexample.com/healthz/
https://kubernetes-v1-4.github.io/docs/user-guide/liveness/
https://github.com/arun-gupta/kubernetes-java-sample/blob/master/wildfly-pod-hc-http.yaml
http://kubernetesbyexample.com/healthz/

Probes have a number of fields that you can use to more precisely control the behavior of liveness and readiness checks:

- initialDelaySeconds: Number of seconds after the container has started before liveness or readiness probes are initiated.
- periodSeconds: How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
- timeoutSeconds: Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1.
- successThreshold: Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
- failureThreshold: When a Pod starts and the probe fails, Kubernetes will try failureThreshold times before giving up. Giving up in case of liveness probe means restarting the Pod. In case of readiness probe the Pod will be marked Unready. Defaults to 3. Minimum value is 1.

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

## Debugging

### Pod CrashLoopBackOff: starting, then crashing, then starting again and crashing again
https://kubernetes.io/docs/tasks/debug-application-cluster/debug-init-containers/

| Status                     | Meaning       |
|----------------------------|--------------|
| Init:N/M                   | The Pod has M Init Containers, and N have completed so far. |
| Init:Error                 | An Init Container has failed to execute.                    |
| Init:CrashLoopBackOff      | An Init Container has failed repeatedly.                    |
| Pending                    | The Pod has not yet begun executing Init Containers.        |
| PodInitializing or Running | The Pod has already finished executing Init Containers.     |
Note that the example above would work hitting ClusterIP type service directly (which is quite uncommon) or with Loadbalancer type service, but won't with an Ingress behind NodePort type service. This is because with an Ingress, the requests come from many, randomly chosen source IP addresses.

## Resource Limits

Specify Limit Range for a namespace: ``kubectl create -f memory-defaults.yaml --namespace=default-mem-example``
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
      memory: 512Mi               # 512 Mibibytes memory limit
    requests:
      memory: 256Mi               # Application requests 256Mi from the cluster
```
