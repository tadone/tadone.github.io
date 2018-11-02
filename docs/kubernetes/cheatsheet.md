---
title: "Cheatsheet"
---

# Kubectl Kubernetes CheatSheet

## Common Commands

| Name                                        | Command                                                                    |
| ------------------------------------------- | -------------------------------------------------------------------------- |
| List everything                             | ``kubectl get all --all-namespaces``                                       |
| List pods with nodes info                   | ``kubectl get pod -o wide``                                                |
| Validate yaml file with dry run             | ``kubectl apply --dry-run --validate -f pod-dummy.yaml``                   |
| Diff deployed resource with local yaml file | ``kubectl alpha diff -f <yaml file/dir>``                                  | 
| Start a temporary pod for testing           | ``kubectl run --rm -i -t --image=alpine test-$RANDOM -- sh``               |
| Run wget test temporarily                   | ``kubectl run --rm mytest --image=busybox -it``                            |
| Run curl test temporarily                   | ``kubectl run --rm mytest --image=yauritux/busybox-curl -it``              |
| kubectl run shell command                   | ``kubectl exec -it mytest -- ls -l /etc/hosts``                            |
| Get system conf via configmap               | ``kubectl -n kube-system get cm kubeadm-config -o yaml``                   |
| kubectl run instance with replicas          | ``kubectl run my-nginx --image=nginx --replicas=2 --port=80``              |
| Explain resource                            | ``kubectl explain pods=``, ``kubectl explain svc``                         |
| Get all services                            | ``kubectl get service --all-namespaces``                                   |
| Query healthcheck endpoint                  | ``curl -L http://127.0.0.1:10250/healthz``                                 |
| Open a bash terminal in a pod               | ``kubectl exec -it storage sh``                                            |
| Check pod environment variables             | ``kubectl exec redis-master-ft9ex env ``                                   |
| Enable kubectl shell autocompletion         | ``echo "source <(kubectl completion bash)" >>~/.bashrc``, and reload       |
| Use minikube dockerd in your laptop         | ``eval $(minikube docker-env)``, No need to push docker hub any more       |
| Get services sorted by name                 | ``kubectl get services --sort-by=.metadata.name``                          |
| Get pods sorted by restart count            | ``kubectl get pods --sort-by='.status.containerStatuses[0].restartCount'`` |
| Get logs from init container                | ``kubectl logs <pod-name> -c <init-container-2``                           |
| Drain a nodes                               | ``kubectl drain <node_name> --delete-local-data --ignore-daemonsets``      |

## Check Performance

| Name                                         | Command                                                 |
|----------------------------------------------|---------------------------------------------------------|
| Get node resource usage                      | ``kubectl top node ``                                   |
| Get pod resource usage                       | ``kubectl top pod ``                                    |
| Get resource usage for a given pod           | ``kubectl top <podname> --containers ``                 |
| List resource utilization for all containers | ``kubectl top pod --all-namespaces --containers=true `` |

## Resources Deletion

| Name                                    | Command                                                     |
|-----------------------------------------|-------------------------------------------------------------|
| Delete pod                              | ``kubectl delete pod/<pod-name> -n <my-namespace> ``        |
| Delete pods by labels                   | ``kubectl delete pod -l env=test ``                         |
| Delete deployments by labels            | ``kubectl delete deployment -l app=wordpress ``             |
| Delete all resources filtered by labels | ``kubectl delete pods,services -l name=myLabel ``           |
| Delete resources under a namespace      | ``kubectl -n my-ns delete po,svc --all ``                   |
| Delete persist volumes by labels        | ``kubectl delete pvc -l app=wordpress ``                    |
| Delete statefulset only (not pods)      | ``kubectl delete sts/<stateful_set_name> --cascade=false `` |

## Pod

| Name                         | Command                                                                        |
|------------------------------|--------------------------------------------------------------------------------|
| List all pods                | ``kubectl get pods ``                                                          |
| List pods for all namespace  | ``kubectl get pods -all-namespaces ``                                          |
| List all critical pods       | ``kubectl get -n kube-system pods -a ``                                        |
| List pods with more info     | ``kubectl get pod -o wide=``, ``kubectl get pod/<pod-name> -o yaml ``          |
| Get pod info                 | ``kubectl describe pod/srv-mysql-server ``                                     |
| List all pods with labels    | ``kubectl get pods --show-labels ``                                            |
| kubectl run command          | ``kubectl exec -it -n "$ns" "$podname" -- sh -c "echo $msg >>/dev/err.log"``   |

## Pod Advanced

| Name                             | Command                                                                                                                           |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Get pod by selector              | ``kubectl get pods -n $namespace --selector="app=syslog" -o jsonpath='{.items[*].metadata.name}')``                     |
| List pods and containers         | ``kubectl get pods -o='custom-columns=PODS:.metadata.name,CONTAINERS:.spec.containers[*].name'``                                  |
| List pods, containers and images | ``kubectl get pods -o='custom-columns=PODS:.metadata.name,CONTAINERS:.spec.containers[*].name,Images:.spec.containers[*].image'`` |

## Label & Annotations

| Name                             | Command                                                                  |
|----------------------------------|--------------------------------------------------------------------------|
| Filter pods by label             | ``kubectl get pods -l owner=denny ``                                     |
| Manually add label to a pod      | ``kubectl label pods dummy-input owner=denny ``                          |
| Remove label                     | ``kubectl label pods dummy-input owner- ``                               |
| Manually add annonation to a pod | ``kubectl annotate pods dummy-input my-url=https://www.dennyzhang.com `` |

## Deployment & Scale

| Name                         | Command                                                           |
|------------------------------|-------------------------------------------------------------------|
| Scale out                    | ``kubectl scale --replicas=3 deployment/nginx-app ``              |
| Online rolling upgrade       | ``kubectl rollout app-v1 app-v2 --image=img:v2 ``                 |
| Roll backup                  | ``kubectl rollout app-v1 app-v2 --rollback ``                     |
| List rollout                 | ``kubectl get rs ``                                               |
| Check update status          | ``kubectl rollout status deployment/nginx-app ``                  |
| Check update history         | ``kubectl rollout history deployment/nginx-app ``                 |
| Pause/Resume                 | ``kubectl rollout pause deployment/nginx-deployment=``, ``resume ``|
| Rollback to previous version | ``kubectl rollout undo deployment/nginx-deployment``              |


## Quota & Limits & Resource

| Name                          | Command                                                                             |
|-------------------------------|-------------------------------------------------------------------------------------|
| List Resource Quota           | ``kubectl get resourcequota ``                                                      |
| List Limit Range              | ``kubectl get limitrange ``                                                         |
| Customize resource definition | ``kubectl set resources deployment nginx -c=nginx --limits=cpu=200m,memory=512Mi `` |

## Service

| Name                            | Command                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| List all services               | ``kubectl get services ``                                                           |
| List service endpoints          | ``kubectl get endpoints ``                                                          |
| Get service detail              | ``kubectl get service nginx-service -o yaml ``                                      |
| Expose deployment as lb service | ``kubectl expose deployment/my-app --type=LoadBalancer --name=my-service ``         |
| Expose service as lb service    | ``kubectl expose service/wordpress-1-svc --type=LoadBalancer --name=wordpress-lb `` |

## StatefulSet

| Name                               | Command                                                     |
|------------------------------------|-------------------------------------------------------------|
| List statefulset                   | ``kubectl get sts ``                                        |
| Delete statefulset only (not pods) | ``kubectl delete sts/<stateful_set_name> --cascade=false `` |
| Scale statefulset                  | ``kubectl scale sts/<stateful_set_name> --replicas=5 ``     |

## Volumes & Volume Claims

| Name                      | Command                                               |
|---------------------------|-------------------------------------------------------|
| Check the mounted volumes | ``kubectl exec storage ls /data ``                    |
| Check persist volume      | ``kubectl describe pv/pv0001 ``                       |
| List storage class        | ``kubectl get storageclass ``                         |
| Copy files                | ``kubectl cp /tmp/foo <namespace1>/<pod1>:/tmp/bar `` |

## Security

| Name              | Command              |
|-------------------|----------------------|
| List certificates | ``kubectl get csr `` |

## Extenstions

| Name           | Summary                   |
|----------------|---------------------------|
| List api group | ``kubectl api-versions `` |
| List all CRD   | ``kubectl get crd ``      |

## Components & Services
### Services on Master Nodes

| Name                    | Summary                                                                                                |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| kube-apiserver          | exposes the Kubernetes API from master nodes                                                           |
| etcd                    | reliable data store for all k8s cluster data                                                           |
| kube-scheduler          | schedule pods to run on selected nodes                                                                 |
| kube-controller-manager | node controller, replication controller, endpoints controller, and service account & token controllers |

### Services on Worker Nodes

| Name              | Summary                                                                                   |
|-------------------|-------------------------------------------------------------------------------------------|
| kubelet           | makes sure that containers are running in a pod                                           |
| kube-proxy        | perform connection forwarding                                                             |
| Container Runtime | Kubernetes supported runtimes: Docker, rkt, runc and any OCI runtime-spec implementation. |

### Tools

| Name                  | Summary                                                     |
|-----------------------|-------------------------------------------------------------|
| kubectl               | the command line util to talk to k8s cluster                |
| kubeadm               | the command to bootstrap the cluster                        |
| kubefed               | the command line to control a Kubernetes Cluster Federation |
| Kubernetes Components | Kubernetes Components                                       |

## Other Components

### Log files

| Name                           | Command                                 |
|--------------------------------|-----------------------------------------|
| API Server.log in master node | ``/var/log/kube-apiserver.log ``         |
| Scheduler.log in master node  | ``/var/log/kube-scheduler.log ``         |
| Controller.log in master node | ``/var/log/kube-controller-manager.log ``|
| Kubelet.log in worker node    | ``/var/log/kubelet.log ``                |
| Kube Proxy.log in worker node | ``/var/log/kubelet-proxy.log ``          |

### Events & Metrics

| Name            | Command                                  |
|-----------------|------------------------------------------|
| View all events | ``kubectl get events --all-namespaces `` |

### Namespace & Security

| Name                         | Command                                           |
|------------------------------|---------------------------------------------------|
| List authenticated contexts  | ``kubectl config get-contexts ``                  |
| Switch context               | ``kubectl config use-context <cluster-name> ``    |
| Delete the specified context | ``kubectl config delete-context <cluster-name> `` |
| List all namespaces defined  | ``kubectl get namespaces ``                       |
| kubectl config file          | ``~/.kube/config ``                               |

### Network

| Name                              | Command                                                     |
|-----------------------------------|-------------------------------------------------------------|
| Temporarily add a port-forwarding | ``kubectl port-forward redis-izl09 6379 ``                  |
| Add port-forwaring for deployment | ``kubectl port-forward deployment/redis-master 6379:6379 `` |
| Add port-forwaring for replicaset | ``kubectl port-forward rs/redis-master 6379:6379 ``         |
| Add port-forwaring for service    | ``kubectl port-forward svc/redis-master 6379:6379 ``        |
| Get network policy                | ``kubectl get NetworkPolicy ``                              |

## Basic

### Key Concepts

| Name | Summary                           |
|------|-----------------------------------|
| CNCF | Cloud Native Computing Foundation |
| CRI  | Container Runtime Interface       |
| CNI  | Container Network Interface       |
| CSI  | Container Storage Interface       |

### Kubernetes Critical Files

| Name                      | Comment                                                    |
|---------------------------|------------------------------------------------------------|
| Config folder             | ``/etc/kubernetes/ ``                                      |
| Certificate files         | ``/etc/kubernetes/pki/ ``                                  |
| Credentials to API server | ``/etc/kubernetes/kubelet.conf ``                          |
| Superuser credentials     | ``/etc/kubernetes/admin.conf ``                            |
| Kubernets working dir     | ``/var/lib/kubelet/ ``                                     |
| Docker working dir        | ``/var/lib/docker/ ``                                      |
| Etcd working dir          | ``/var/lib/etcd/ ``                                        |
| Network cni               | ``/etc/cni/net.d/ ``                                       |
| Docker container log      | ``/var/log/containers/ ``                                  |
| Log files                 | ``/var/log/pods/ ``                                        |
| Env                       | ``export KUBECONFIG=/etc/kubernetes/admin.conf ``          |
| Env                       | ``/etc/systemd/system/kubelet.service.d/10-kubeadm.conf `` |


### Check status

| Name                               | Summary                                      |
|------------------------------------|----------------------------------------------|
| List everything                    | ``kubectl get all --all-namespaces ``        |
| Get cluster info                   | ``kubectl cluster-info ``                    |
| Get configuration                  | ``kubectl config view ``                     |
| Get kubectl version                | ``kubectl version ``                         |
| Get component status               | ``kubectl get componentstatus ``             |
| Similar to ``docker ps ``          | ``kubectl get nodes``                        |
| Similar to ``docker inspect ``     | ``kubectl describe pod/nginx-app-413181-cn`` |
| Similar to ``docker logs ``        | ``kubectl logs ``                            |
| Similar to ``docker exec ``        | ``kubectl exec ``                            |
| Get services for current namespace | ``kubectl get svc ``                         |
| Get node status                    | ``kubectl describe node/<node_name> ``       |

## Names of certificates files
Names of certificates files:
- ``ca.crt, ca.key`` (CA certificate)
- ``apiserver.crt, apiserver.key`` (API server certificate)
- ``apiserver-kubelet-client.crt, apiserver-kubelet-client.key`` (client certificate for the apiservers to connect to the kubelets securely)
- ``sa.pub, sa.key`` (a private key for signing ServiceAccount )
- ``front-proxy-ca.crt, front-proxy-ca.key`` (CA for the front proxy)
- ``front-proxy-client.crt, front-proxy-client.key`` (client cert for the front proxy client)

## Misc scripts

### Tail pod log by label
```bash
namespace="mynamespace"
mylabel="app=mylabel"
kubectl get pod -l "$mylabel" -n "$namespace" | tail -n1 \
    | awk -F' ' '{print $1}' | xargs -I{} \
      kubectl logs -n "$namespace" -f {}
```

### Get node hardware resource utilization
```bash
kubectl get nodes --no-headers \
     | awk '{print $1}' | xargs -I {} \
     sh -c 'echo {}; kubectl describe node {} | grep Allocated -A 5'

kubectl get nodes --no-headers | awk '{print $1}' | xargs -I {} \
    sh -c 'echo {}; kubectl describe node {} | grep Allocated -A 5 \
     | grep -ve Event -ve Allocated -ve percent -ve -- ; echo'
```

### Apply yaml files recursively
```bash
# create
time ls -1 */*.yml | grep -v namespace | xargs -I{} kubectl apply -f {}

# delete
time ls -1r */*.yml | grep -v namespace | xargs -I{} kubectl delete -f {}
```
### Apply the configuration in manifest.yaml and delete all the other configmaps that are not in the file.
```bash
kaubectl apply --prune -f manifest.yaml --all --prune-whitelist=core/v1/ConfigMap
```

### List all critical pods

```bash
kubectl --namespace kube-system get pods

for pod in $(kubectl --namespace kube-system get pods -o jsonpath="{.items[*].metadata.name}"); do
    node_info=$(kubectl --namespace kube-system describe pod $pod | grep "Node:")
    echo "Pod: $pod, $node_info"
done
```

## Helm: The Kubernetes Package Manager

| Name    | Summary                                                                  |
|---------|--------------------------------------------------------------------------|
| Helm    | a chart manager.                                                         |
| Charts  | packages of pre-configured Kubernetes resources.                         |
| Release | a collection of Kubernetes resources deployed to the cluster using Helm. |
| tiller  | helm server manages releases (installations) of your charts.             |

| Name                                           | Summary |
|------------------------------------------------|---------|
| helm init                                      |         |
| helm list                                      |         |
| helm list -a                                   |         |
| helm repo update                               |         |
| helm install stable/mysql                      |         |
| helm install --name mysql-release stable/mysql |         |
| helm inspect stable/mysql                      |         |
| helm status $helm_name                         |         |
| helm delete $helm_name                         |         |
| helm delete --purge $helm_name                 |         |
| ~/.helm/cache/archive                          |         |

Release, list, inspect, delete, rollback, purge

## Metric Server
Metrics Server is a cluster-wide aggregator of resource usage data.
Metrics Server registered in the main API server through Kubernetes aggregator.

| Name           | Summary                                                           |
|----------------|-------------------------------------------------------------------|
| Core metrics   | node/container level metrics; CPU, memory, disk and network, etc. |
| Custom metrics | refers to application metrics, e.g. HTTP request rate.            |

Today (Kubernetes 1.7), there are several sources of metrics within a Kubernetes cluster

| Name           | Summary                                                             |
|----------------|---------------------------------------------------------------------|
| Heapster       | k8s add-on                                                          |
| Cadvisor       | a standalone container/node metrics collection and monitoring tool. |
| Kubernetes API | does not track metrics. But can get real time metrics               |

Today, heapster is the source of the time-series data for the Kubernetes Dashboard.
All other Kubernetes components will supply their own metrics in a Prometheus format

In logging domain, we can say `syslog` is the standard format
In metric domain, maybe we can choose `prometheus` as the standard format.
