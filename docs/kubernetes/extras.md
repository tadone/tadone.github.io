---
title: "Pod Options"
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

Note that the example above would work hitting ClusterIP type service directly (which is quite uncommon) or with Loadbalancer type service, but won't with an Ingress behind NodePort type service. This is because with an Ingress, the requests come from many, randomly chosen source IP addresses.
