---
title: "Troubleshooting"
---

# Troubleshooting Kubernetes

## Find Pods

```bash
# Example sorting pods by nodeName:
kubectl get pods -o wide --sort-by="{.spec.nodeName}"
```

```bash
# Example of getting pods on nodes using label filter:
kubectl get pods --all-namespaces  --no-headers --field-selector spec.nodeName="k8s-workers-17781035-2"

# Or for all nodes:
for n in $(kubectl get nodes -l your_label_key=your_label_value --no-headers | cut -d " " -f1); do
    kubectl get pods --all-namespaces  --no-headers --field-selector spec.nodeName=${n}
done

# Sort by number of restarts:
kubectl get pods --sort-by="{.status.containerStatuses[:1].restartCount}"
```
## Search Logs

```bash
# If your container has previously crashed, you can access the previous container's crash log with:
$ kubectl logs --previous ${POD_NAME} ${CONTAINER_NAME}
```
