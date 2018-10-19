---
title: "Cheatsheet"
---

# Kubectl Kubernetes CheatSheet

## Common Commands

| Name                                | Command                  |
|-------------------------------------|-------------------------|
| List everything                     | ``kubectl get all --all-namespaces``   |
| List pods with nodes info           | ``kubectl get pod -o wide``|
| Validate yaml file with dry run     | ``kubectl create --dry-run --validate -f pod-dummy.yaml``                |
| Start a temporary pod for testing   | ``kubectl run --rm -i -t --image=alpine test-$RANDOM -- sh``             |
| Run wget test temporarily           | ``kubectl run --rm mytest --image=busybox -it``                          |
| Run curl test temporarily           | ``kubectl run --rm mytest --image=yauritux/busybox-curl -it``            |
| kubectl run shell command           | ``kubectl exec -it mytest -- ls -l /etc/hosts``                          |
| Get system conf via configmap       | ``kubectl -n kube-system get cm kubeadm-config -o yaml``                 |
| kubectl run instance with replicas  | ``kubectl run my-nginx --image=nginx --replicas=2 --port=80``            |
| Explain resource                    | ``kubectl explain pods=``, ``kubectl explain svc``                       |
| Get all services                    | ``kubectl get service --all-namespaces``                                 |
| Query healthcheck endpoint          | ``curl -L http://127.0.0.1:10250/healthz``                               |
| Open a bash terminal in a pod       | ``kubectl exec -it storage sh``        |
| Check pod environment variables     | ``kubectl exec redis-master-ft9ex env ``                                 |
| Enable kubectl shell autocompletion | ``echo "source <(kubectl completion bash)" >>~/.bashrc``, and reload     |
| Use minikube dockerd in your laptop | ``eval $(minikube docker-env)``, No need to push docker hub any more     |
| Get services sorted by name         | ``kubectl get services --sort-by=.metadata.name``                          |
| Get pods sorted by restart count    | ``kubectl get pods --sort-by='.status.containerStatuses[0].restartCount'`` |
| Get logs from init container         |``kubectl logs <pod-name> -c <init-container-2``|

## Check Performance

| Name       | Command|
|----------------------------------------------|-------|
| Get node resource usage                      | ``kubectl top node ``|
| Get pod resource usage                       | ``kubectl top pod `` |
| Get resource usage for a given pod           | ``kubectl top <podname> --containers ``                |
| List resource utilization for all containers | ``kubectl top pod --all-namespaces --containers=true ``|

## Resources Deletion
| Name  | Command    |
|-----------------------------------------|-----------|
| Delete pod                              | ``kubectl delete pod/<pod-name> -n <my-namespace> ``       |
| Delete pods by labels                   | ``kubectl delete pod -l env=test ``                        |
| Delete deployments by labels            | ``kubectl delete deployment -l app=wordpress ``            |
| Delete all resources filtered by labels | ``kubectl delete pods,services -l name=myLabel ``          |
| Delete resources under a namespace      | ``kubectl -n my-ns delete po,svc --all ``                  |
| Delete persist volumes by labels        | ``kubectl delete pvc -l app=wordpress ``                   |
| Delete statefulset only (not pods)      | ``kubectl delete sts/<stateful_set_name> --cascade=false ``|

## Pod
| Name                         | Command                          
|------------------------------|-------------|
| List all pods                | ``kubectl get pods ``              
| List pods for all namespace  | ``kubectl get pods -all-namespaces ``                         |
| List all critical pods       | ``kubectl get -n kube-system pods -a ``                       |
| List pods with more info     | ``kubectl get pod -o wide=``, ``kubectl get pod/<pod-name> -o yaml ``        |
| Get pod info                 | ``kubectl describe pod/srv-mysql-server ``                    |
| List all pods with labels    | ``kubectl get pods --show-labels ``
| Get Pod initContainer status | ``kubectl get pod --template '{{.status.initContainerStatuses}}' <pod-name> ``                              |
| kubectl run command          | ``kubectl exec -it -n "$ns" "$podname" -- sh -c "echo $msg >>/dev/err.log"``|

## Pod Advanced
| Name                             | Command
|----------------------------------|---------------------------------|
| Get pod by selector              | ``podname=$(kubectl get pods -n $namespace --selector="app=syslog" -o jsonpath='{.items[*].metadata.name}')``                     |
| List pods and containers         | ``kubectl get pods -o='custom-columns=PODS:.metadata.name,CONTAINERS:.spec.containers[*].name'``|
| List pods, containers and images | ``kubectl get pods -o='custom-columns=PODS:.metadata.name,CONTAINERS:.spec.containers[*].name,Images:.spec.containers[*].image'`` |

## Label & Annotations
| Name                             | Command                 |
|----------------------------------|------------------------|
| Filter pods by label             | ``kubectl get pods -l owner=denny ``  |
| Manually add label to a pod      | ``kubectl label pods dummy-input owner=denny ``                         |
| Remove label                     | ``kubectl label pods dummy-input owner- ``                              |
| Manually add annonation to a pod | ``kubectl annotate pods dummy-input my-url=https://www.dennyzhang.com ``|

## Deployment & Scale
| Name                         | Command                    |
|------------------------------|---------------------------|
| Scale out                    | ``kubectl scale --replicas=3 deployment/nginx-app ``                       |
| online rolling upgrade       | ``kubectl rollout app-v1 app-v2 --image=img:v2 ``                          |
| Roll backup                  | ``kubectl rollout app-v1 app-v2 --rollback ``                              |
| List rollout                 | ``kubectl get rs ``          |
| Check update status          | ``kubectl rollout status deployment/nginx-app ``                           |
| Check update history         | ``kubectl rollout history deployment/nginx-app ``                          |
| Pause/Resume                 | ``kubectl rollout pause deployment/nginx-deployment=, ``resume ``           |
| Rollback to previous version | ``kubectl rollout undo deployment/nginx-deployment ``                      |
| Kubernetes Yaml Examples     | [kubernetes yaml templates](https://cheatsheet.dennyzhang.com/cheatsheet-kubernetes-yaml) [Pausing and Resuming a Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-deployment) |

## Quota & Limits & Resource
| Name                          | Command 
|-------------------------------|-----------------------------------|
| List Resource Quota           | ``kubectl get resourcequota ``       |
| List Limit Range              | ``kubectl get limitrange ``          |
| Customize resource definition | ``kubectl set resources deployment nginx -c=nginx --limits=cpu=200m,memory=512Mi ``|

## Service
| Name                            | Command  
|---------------------------------|------------------------------------|
| List all services               | ``kubectl get services ``             |
| List service endpoints          | ``kubectl get endpoints ``            |
| Get service detail              | ``kubectl get service nginx-service -o yaml ``    |
| Get service cluster ip          | ``kubectl get service nginx-service -o go-template='{{.spec.clusterIP}}'``|
| Get service cluster port        | ``kubectl get service nginx-service -o go-template='{{(index .spec.ports 0).port}}'`` |
| Expose deployment as lb service | ``kubectl expose deployment/my-app --type=LoadBalancer --name=my-service ``         |
| Expose service as lb service    | ``kubectl expose service/wordpress-1-svc --type=LoadBalancer --name=wordpress-lb `` |

## StatefulSet
| Name                               | Command    |
|------------------------------------|-----------|
| List statefulset                   | ``kubectl get sts ``     |
| Delete statefulset only (not pods) | ``kubectl delete sts/<stateful_set_name> --cascade=false ``|
| Scale statefulset                  | ``kubectl scale sts/<stateful_set_name> --replicas=5 ``    |

## Volumes & Volume Claims
| Name                      | Command          |
|---------------------------|-----|
| Check the mounted volumes | ``kubectl exec storage ls /data ``                   |
| Check persist volume      | ``kubectl describe pv/pv0001 ``                      |
| List storage class        | ``kubectl get storageclass ``                        |
| Copy files                | ``kubectl cp /tmp/foo <namespace1>/<pod1>:/tmp/bar ``|

## Security
| Name                     | Command                         |
|--------------------------|---------------------------------|
| List certificates        | ``kubectl get csr ``              |

## Extenstions
| Name           | Summary                |
|----------------|------------------------|
| List api group | ``kubectl api-versions ``|
| List all CRD   | ``kubectl get crd ``     |

## Components & Services
- Services on Master Nodes

| Name                    | Summary                       
|-------------------------|----------|
| (https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-apiserver)[kube-apiserver]          | exposes the Kubernetes API from master nodes             |
| (https://coreos.com/etcd/)[etcd]                    | reliable data store for all k8s cluster data             |
| (https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-scheduler)[kube-scheduler]          | schedule pods to run on selected nodes                   |
| (https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-controller-manager)[kube-controller-manager] | node controller, replication controller, endpoints controller, and service account & token controllers |

- Services on Worker Nodes
| Name              | Summary          
|-------------------|--------------------------------------------|
| (https://github.com/kubernetes/kubernetes/tree/master/cmd/kubelet)[kubelet]           | makes sure that containers are running in a pod         |
| (https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-proxy)[kube-proxy]        | perform connection forwarding               |
| (https://github.com/docker/engine)[Container Runtime] | Kubernetes supported runtimes: Docker, rkt, runc and any (https://github.com/opencontainers/runtime-spec)[OCI runtime-spec] implementation. |

- Addons: pods and services that implement cluster features
| Name                          | Summary                     |
|-------------------------------|----------------------------|
| DNS                           | serves DNS records for Kubernetes services                                |
| Web UI                        | a general purpose, web-based UI for Kubernetes clusters                   |
| Container Resource Monitoring | collect, store and serve container metrics                                |
| Cluster-level Logging         | save container logs to a central log store with search/browsing interface |

- Tools

| Name                  | Summary       |
|-----------------------|--------------|
| [kubectl](https://github.com/kubernetes/kubernetes/tree/master/cmd/kubectl)| the command line util to talk to k8s cluster                |
| [kubeadm](https://github.com/kubernetes/kubernetes/tree/master/cmd/kubeadm)| the command to bootstrap the cluster                        |
| [kubefed](https://kubernetes.io/docs/reference/setup-tools/kubefed/kubefed/)| the command line to control a Kubernetes Cluster Federation |
| [Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/)|Kubernetes Components|

## Other Components

### Log files
| Name                           | Command                                 |
|--------------------------------|-----------------------------------------|
| API Server.log in master node | ``/var.log=/kube-apiserver.log ``         |
| Scheduler.log in master node  | ``/var.log=/kube-scheduler.log ``         |
| Controller.log in master node | ``/var.log=/kube-controller-manager.log ``|
| Kubelet.log in worker node    | ``/var.log=/kubelet.log ``                |
| Kube Proxy.log in worker node | ``/var.log=/kubelet-proxy.log ``          |

### Events & Metrics
| Name            | Command                               |
|-----------------|---------------------------------------|
| View all events | ``kubectl get events --all-namespaces ``|

### Namespace & Security
| Name                         | Command      |
|------------------------------|-|
| List authenticated contexts  | ``kubectl config get-contexts ``                 |
| Switch context               | ``kubectl config use-context <cluster-name> ``   |
| Delete the specified context | ``kubectl config delete-context <cluster-name> ``|
| List all namespaces defined  | ``kubectl get namespaces ``                      |
| kubectl config file          | ``~/.kube/config ``                              |

### Network
| Name                              | Command    |
|-----------------------------------|-----------|
| Temporarily add a port-forwarding | ``kubectl port-forward redis-izl09 6379 ``                 |
| Add port-forwaring for deployment | ``kubectl port-forward deployment/redis-master 6379:6379 ``|
| Add port-forwaring for replicaset | ``kubectl port-forward rs/redis-master 6379:6379 ``        |
| Add port-forwaring for service    | ``kubectl port-forward svc/redis-master 6379:6379 ``       |
| Get network policy                | ``kubectl get NetworkPolicy ``                             |
## Basic

### Key Concepts
| Name | Summary                           |
|------|-----------------------------------|
| (https://www.cncf.io/)[CNCF] | Cloud Native Computing Foundation |
| CRI  | Container Runtime Interface       |
| CNI  | Container Network Interface       |
| CSI  | Container Storage Interface       |

### Kubernetes Critical Files
| Name                      | Comment   |
|---------------------------|----------|
| Config folder             | ``/etc/kubernetes/ ``   |
| Certificate files         | ``/etc/kubernetes/pki/ ``                                 |
| Credentials to API server | ``/etc/kubernetes/kubelet.conf ``                         |
| Superuser credentials     | ``/etc/kubernetes/admin.conf ``                           |
| Kubernets working dir     | ``/var/lib/kubelet/ ``  |
| Docker working dir        | ``/var/lib/docker/ ``   |
| Etcd working dir          | ``/var/lib/etcd/ ``     |
| Network cni               | ``/etc/cni/net.d/ ``    |
| Docker container log      | ``/var/log/containers/ ``                                 |
| Log files                 | ``/var/log/pods/ ``     |
| Env                       | ``export KUBECONFIG=/etc/kubernetes/admin.conf ``         |
| Env                       | ``/etc/systemd/system/kubelet.service.d/10-kubeadm.conf ``|


### Check status
| Name                               | Summary  |
|------------------------------------|--------------------------------------------|
| List everything                    | ``kubectl get all --all-namespaces ``        |
| Get cluster info                   | ``kubectl cluster-info ``                    |
| Get configuration                  | ``kubectl config view ``                     |
| Get kubectl version                | ``kubectl version ``                         |
| Get component status               | ``kubectl get componentstatus ``             |
| Similar to ``docker ps ``          | ``kubectl get nodes ``                       |
| Similar to ``docker inspect ``     | ``kubectl describe pod/nginx-app-413181-cn ``|
| Similar to ``docker logs ``        | ``kubectl logs ``                            |
| Similar to ``docker exec ``        | ``kubectl exec ``                            |
| Get services for current namespace | ``kubectl get svc ``                         |
| Get node status                    | ``kubectl describe node/<node_name> ``       |

## Names of certificates files
https://github.com/kubernetes/kubeadm/blob/master/docs/design/design_v1.9.md
Names of certificates files:
- ``ca.crt, ca.key`` (CA certificate)
- ``apiserver.crt, apiserver.key`` (API server certificate)
- ``apiserver-kubelet-client.crt, apiserver-kubelet-client.key`` (client certificate for the apiservers to connect to the kubelets securely)
- ``sa.pub, sa.key`` (a private key for signing ServiceAccount )
- ``front-proxy-ca.crt, front-proxy-ca.key`` (CA for the front proxy)
- ``front-proxy-client.crt, front-proxy-client.key`` (client cert for the front proxy client)

## Misc scripts
- Tail pod log by label
```bash
namespace="mynamespace"
mylabel="app=mylabel"
kubectl get pod -l "$mylabel" -n "$namespace" | tail -n1 \
    | awk -F' ' '{print $1}' | xargs -I{} \
      kubectl logs -n "$namespace" -f {}
```

- Get node hardware resource utilization
```bash
kubectl get nodes --no-headers \
     | awk '{print $1}' | xargs -I {} \
     sh -c 'echo {}; kubectl describe node {} | grep Allocated -A 5'

kubectl get nodes --no-headers | awk '{print $1}' | xargs -I {} \
    sh -c 'echo {}; kubectl describe node {} | grep Allocated -A 5 \
     | grep -ve Event -ve Allocated -ve percent -ve -- ; echo'
```

- Apply yaml files recursively   
```bash
# create
time ls -1 */*.yml | grep -v namespace | xargs -I{} kubectl apply -f {}

# delete
time ls -1r */*.yml | grep -v namespace | xargs -I{} kubectl delete -f {}
```
- Apply the configuration in manifest.yaml and delete all the other configmaps that are not in the file.
```bash
kaubectl apply --prune -f manifest.yaml --all --prune-whitelist=core/v1/ConfigMap
```

- List all critical pods
```bash
kubectl --namespace kube-system get pods

for pod in $(kubectl --namespace kube-system get pods -o jsonpath="{.items[*].metadata.name}"); do
    node_info=$(kubectl --namespace kube-system describe pod $pod | grep "Node:")
    echo "Pod: $pod, $node_info"
done
```
## Helm: The Kubernetes Package Manager             
| Name    | Summary                    |
|---------|---------------------------|
| Helm    | a chart manager.           |
| Charts  | packages of pre-configured Kubernetes resources.                         |
| Release | a collection of Kubernetes resources deployed to the cluster using Helm. |
| tiller  | helm server manages releases (installations) of your charts.             |

| Name         | Summary |
|-|---------|
| helm init    |         |
| helm list    |         |
| helm list -a |         |
| helm repo update                               |         |
| helm install stable/mysql                      |         |
| helm install --name mysql-release stable/mysql |         |
| helm inspect stable/mysql                      |         |
| helm status $helm_name                         |         |
| helm delete $helm_name                         |         |
| helm delete --purge $helm_name                 |         |
|-|---------|
| ~/.helm/cache/archive                          |         |

Release, list, inspect, delete, rollback, purge

## metric server                                 
Metrics Server is a cluster-wide aggregator of resource usage data.

Metrics Server registered in the main API server through Kubernetes aggregator.

https://github.com/kubernetes-incubator/metrics-server
https://github.com/kubernetes-incubator/metrics-server/tree/master/deploy/1.8%2B

https://kubernetes.io/docs/tasks/debug-application-cluster/core-metrics-pipeline/
| Name           | Summary             |
|----------------|--------------------|
| Core metrics   | node/container level metrics; CPU, memory, disk and network, etc. |
| Custom metrics | refers to application metrics, e.g. HTTP request rate.            |

Today (Kubernetes 1.7), there are several sources of metrics within a Kubernetes cluster
| Name           | Summary               |
|----------------|----------------------|
| Heapster       | k8s add-on            |
| Cadvisor       | a standalone container/node metrics collection and monitoring tool. |
| Kubernetes API | does not track metrics. But can get real time metrics               |

## metric server
Resource Metrics API is an effort to provide a first-class Kubernetes API (stable, versioned, discoverable, available through apiserver and with client support) that serves resource usage metrics for pods and nodes.

- metric server is sort of a stripped-down version of Heapster
- The metrics-server will collect "Core" metrics from cAdvisor APIs (currently embedded in the kubelet) and store them in memory as opposed to in etcd.
- The metrics-server will provide a supported API for feeding schedulers and horizontal pod auto-scalers
- All other Kubernetes components will supply their own metrics in a Prometheus format
## Cadvisor
Cadvisor monitors node and container core metrics in addition to container events.
It natively provides a Prometheus metrics endpoint
The Kubernetes kublet has an embedded Cadvisor that only exposes the metrics, not the events.
## heapster
Heapster is an add on to Kubernetes that collects and forwards both node, namespace, pod and container level metrics to one or more "sinks" (e.g. InfluxDB).

It also provides REST endpoints to gather those metrics. The metrics are constrained to CPU, filesystem, memory, network and uptime.

Heapster queries the kubelet for its data.

Today, heapster is the source of the time-series data for the Kubernetes Dashboard.
All other Kubernetes components will supply their own metrics in a Prometheus format

In logging domain, we can say `syslog` is the standard format
In metric domain, maybe we can choose `prometheus` as the standard format.


## How to restart a container inside a Pod?
https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/

Restarting a container in a Pod should not be confused with restarting the Pod. The Pod itself does not run, but is an environment the containers run in and persists until it is deleted.
## explain k8s components: apiserver, scheduler, controller-manager, kube-proxy
## get logs of failed container
https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application/#my-pod-is-crashing-or-otherwise-unhealthy
```bash
# If your container has previously crashed, you can access the previous container's crash log with:

$ kubectl logs --previous ${POD_NAME} ${CONTAINER_NAME}
```


