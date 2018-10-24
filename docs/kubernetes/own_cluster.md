---
title: "Own Cluster"
---

# GCE Cluster
Built using: console.cloud.google.com
The cluster consist of 3 nodes (VMs) that are built using **gke-tad1-cluster-pool-micro** template. Originally the cluster was set up with

Cluster options:
- Choose Zonal: us-west1-a
- Pick your kubernetes version: 1.10.7-gke.2
- Create a 3-node pool using the cheapest instance type - f1-micro (1 vCPU, 0.6 GB memory)
- Boot disk size to 10GB, (don't enable preemptible nodes. They're cheaper but IP changes every day)
- Enable auto-upgrade and auto-repair.

Below the node pool there are some additional options.
- Disable HTTP load balancing (load balancing is expensive in GCP) and also
- Disable all the StackDriver stuff (also can be expensive and has flaky reliability in my experience) as well as - Disable the kubernetes dashboard
## GCloud CLI
```bash
brew cask install google-cloud-sdk

# GCloud
gcloud auth login
gcloud config set project kubernetes-tad1
gcloud container clusters get-credentials tad1-cluster --zone=us-west1-a
gcloud info | grep Account

# KubeCTL
kubectl create clusterrolebinding myname-cluster-admin-binding \
  --clusterrole=cluster-admin \
  --user=tadone@gmail.com

# OR
kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $(gcloud config get-value account)
```
# Traefik Load Balancer

To test out traefik.toml without valid certificate:
```sh
defaultEntryPoints = ["http", "https"]

[entryPoints]
  [entryPoints.http]
  address = ":80"
    [entryPoints.http.forwardedHeaders]
      trustedIPs = ["0.0.0.0/0"]
    [entryPoints.http.redirect]
      entryPoint = "https"
  [entryPoints.https]
  address = ":443"
    [entryPoints.https.tls]
    [entryPoints.https.forwardedHeaders]
      trustedIPs = ["0.0.0.0/0"]
```
