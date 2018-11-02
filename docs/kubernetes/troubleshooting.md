---
title: "Troubleshooting"
---

# Troubleshooting Kubernetes
- [10 Most Common Reasons Kubernetes Deployments Fail (Part 1)](https://kukulinski.com/10-most-common-reasons-kubernetes-deployments-fail-part-1/)
- [10 Most Common Reasons Kubernetes Deployments Fail (Part 2)](https://kukulinski.com/10-most-common-reasons-kubernetes-deployments-fail-part-2/)

When pods are not ready for a long time or they restart multiple times:
- ``kubectl describe pod <pod_name> -n <optional_namespace>``
- ``kubectl describe deployment <deployment_name>``
- ``kubectl describe replicaset <replicaset_name>``


## Find Pods

```bash
# Example sorting pods by nodeName:
kubectl get pods -o wide --sort-by="{.spec.nodeName}"
# find all pods that not in running phase:
kubectl get pods --field-selector=status.phase!=Running --all-namespaces
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

## Pods Phases
The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle.

**Pending:**	The Pod has been accepted by the Kubernetes system, but one or more of the Container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while.

**Running:**	The Pod has been bound to a node, and all of the Containers have been created. At least one Container is still running, or is in the process of starting or restarting.

**Succeeded:**	All Containers in the Pod have terminated in success, and will not be restarted.

**Failed:**	All Containers in the Pod have terminated, and at least one Container has terminated in failure. That is, the Container either exited with non-zero status or was terminated by the system.

**Unknown:**	For some reason the state of the Pod could not be obtained, typically due to an error in communicating with the host of the Pod.

## Search Logs

```bash
# Use exec to run commands inside a container
$ kubectl exec cassandra -- cat /var/log/cassandra/system.log
# If your container has previously crashed, you can access the previous container's crash log with:
$ kubectl logs --previous ${POD_NAME} ${CONTAINER_NAME}
```

## Pod Crashing

#### Pod CrashLoopBackOff: starting, then crashing, then starting again and crashing again
- [Kubernetes.io/Debug-Init-Containers](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-init-containers/)

| Status                     | Meaning                                                                          |
| -------------------------- | -------------------------------------------------------------------------------- |
| Init:N/M                   | The Pod has M Init Containers, and N have completed so far.                      |
| Init:Error                 | An Init Container has failed to execute.                                         |
| Init:CrashLoopBackOff      | An Init Container has failed repeatedly.                                         |
| Pending                    | The Pod has not yet begun executing Init Containers.                             |
| PodInitializing or Running | The Pod has already finished executing Init Containers.                          |
| ImagePullBackOff           | Could not pull the image from registry                                           |
| CrashLoopBackOff           | Application Crashing after Launch                                                |
| RunContainerError          | Missing ConfigMap                                                                |
| ContainerCreating          | (Stuck for long time) Missing secret                                             |
| Pending (Other)            | Resource Quotas, Insufficient Cluster Resources, PersistentVolume fails to mount |

## Node Not Schedulable
Find out what's wrong with a node:
- ``kubectl get nodes`` for status of nodes
- ``kubectl top node <node_name>`` for resource allocation
- ``kubectl describe node <node_namee>`` to get more indepth info about the node

SSH to a node to view the logs: ``journalctl -u kubelet``
