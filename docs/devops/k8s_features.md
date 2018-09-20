---
title: "K8s Features"
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
args: ["-c", "while true; do echo hello; sleep 10;done"]
```
Example that will printenv HOSTNAME and KUBERNETES_PORT
```yml
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
