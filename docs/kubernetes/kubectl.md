---
title: "KubeCtl"
---

## Config
Run kubectl with a specific config file
`kubectl --kubeconfig=$HOME/.kube/cie-develop.config <command>`

```bash
# Copy cie-ENV.config files to ~/.kube/
export KUBECONFIG=$(echo ${HOME}/.kube/cie-*.config | sed 's/ /:/g') && echo "KUBECONFIG set..."
kubectl config view --flatten --merge > ${HOME}/.kube/config && echo "Combined ~/.kube/config created..."
chmod 600 ${HOME}/.kube/config && echo "Finished"
```
## Get
```bash
kubectl get namespaces
kubectl --namespace=hello-worlds-dev get pods

# List all pods in ps output format with more information (such as node name).
kubectl --namespace=default get pods -o wide


kubectl get pods --field-selector=status.phase=Running  # Get all running pods in the namespace

kubectl get services                          # List all services in the namespace

kubectl --namespace=saas-aware-dev get pods --show-labels  # Show pod labels

# get the external ip address for the load balancer
kubectl get svc --namespace=gitlab-managed-apps ingress-nginx-ingress-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}'; echo
# alternatively
kubectl get svc --all-namespaces|grep LoadBalancer|awk '{print $5};'

# Get all running pods in the namespace
kubectl get pods --field-selector=status.phase=Running

# Get ExternalIPs of all nodes
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'

# List Events sorted by timestamp
kubectl get events --sort-by=.metadata.creationTimestamp
```

## Describe
```bash
kubedev --namespace=saas-aware-dev describe pod aware-ingest-dev-8554757b8b-f2bcl # Describe a pod
```
## Logs
```bash
kubectl logs microspringboot1-2-nz8f8             # Pod logs
kubectl logs --tail=5 my_pod -c my_container      # Last 5 log lines for pod/container
```

## Exec
```bash
kubectl exec -it --namespace=microworld microspringboot1-2-nz8f8 /bin/bash # Enter container running in K8s
```

## Run
```bash
kubectl run --image ubuntu -it bash
```
## Troubleshooting
```bash
kubectl get events          # Get all events in cluster
```
## System

kube-system is the namespace for objects created by the Kubernetes system.

Typically, this would contain pods like kube-dns, kube-proxy, kubernetes-dashboard and stuff like fluentd, heapster, ingresses and so on.

## Scale

```sh
kubectl scale deployment/update-demo --replicas=0; kubectl scale deployment/update-demo --replicas=4;
```
