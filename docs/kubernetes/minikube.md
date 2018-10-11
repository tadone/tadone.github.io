---
title: "Minikube"
---

::: warning
Install minikube: `brew cask install minikube`
:::

# Start
```bash
# Download hyperkit driver
brew install hyperkit
sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-hyperkit/bin/docker-machine-driver-hyperkit
sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-hyperkit/bin/docker-machine-driver-hyperkit
# Start minikube
minikube start --vm-driver hyperkit

# Deploy hello-minikube image
kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.10 --port=8080
# Create a Service object that exposes the deployment:
kubectl expose deployment hello-minikube --type=NodePort

# When the pod is running we can curl it
curl $(minikube service hello-minikube --url)

# Clean up
kubectl delete services hello-minikube
kubectl delete deployment hello-minikube
# Optionally stop minikube
minikube stop
```

# Create Service
::: warning
Use a cloud provider like Google Kubernetes Engine or Amazon Web Services to create a Kubernetes cluster. This tutorial creates an external load balancer, which requires a cloud provider.

Configure kubectl to communicate with your Kubernetes API server. For instructions, see the documentation for your cloud provider.
:::
Creating a service for an application running in five pods.

1. This command creates a Deployment object and an associated ReplicaSet object. The ReplicaSet has five Pods, each of which runs the Hello World application.
```bash
kubectl run hello-world --replicas=5 --labels="run=load-balancer-example" --image=gcr.io/google-samples/node-hello:1.0  --port=8080
```
2. Display information about the Deployment and ReplicaSets
```bash
# Deployment
kubectl get deployments hello-world
kubectl describe deployments hello-world
# ReplicaSets
kubectl get replicasets
kubectl describe replicasets
```
3. Create a Service object that exposes the deployment:
```bash
kubectl expose deployment hello-world --type=LoadBalancer --name=my-service
```
4. Display information about the Service:
```bash
kubectl get services my-service
kubectl describe services my-service
```
Make a note of the external IP address (`LoadBalancer Ingress`) exposed by your service. Also note the value of `Port` and `NodePort`.  
  - `Port` - internal to kubernetes  
  - `NodePoert` - external to the world


5. In the `describe services my-service` output, you can see that the service has several endpoints.  These are internal addresses of the pods that are running the Hello World application. To verify these are pod addresses, enter this command:
```bash
kubectl get pods --output=wide
```
Use the external IP address (LoadBalancer Ingress) to access the Hello World application:
```bash
# Minikube (Will automatically open in browser)
minikube service my-service
# Cloud provider
curl http://<external-ip>:<port>
```
Where `<external-ip>` is the external IP address (`LoadBalancer Ingress`) of your Service, and `<port>` is the value of `Port` in your Service description. The response to a successful request is a hello message: `Hello Kubernetes!`

6. Cleaning Up
```bash
kubectl delete services my-service
kubectl delete deployment hello-world
```
