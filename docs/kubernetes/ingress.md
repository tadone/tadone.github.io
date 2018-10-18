---
title: "Services & Ingress"
---

# Services
To make a pod accessible you can create a **Service** which is an abstraction that creates a logical group of **Pods** together and provides a way to access them. A **Service** uses the metadata labels assigned to **Pods** to determine its constituents.

Each **Service** has a setting called **ServiceType** that defines how that service is exposed. You can set this to **ClusterIP**, **NodePort**, **LoadBalancer**, or **ExternalName** depending on your particular deployment scenario.

## Type: ClusterIP

**ClusterIP** is the default **ServiceType** and it creates a single IP address that can be used to access its **Pods** which can only be accessed from inside the cluster.

The YAML for a ClusterIP service looks like this:

```yaml{8}
apiVersion: v1
kind: Service
metadata:  
  name: my-internal-service
spec:
  selector:
    app: my-app
  type: ClusterIP
  ports:  
  - name: http
    port: 80
    targetPort: 80
    protocol: TCP
```

## Type: NodePort

A **NodePort** service is the most primitive way to get external traffic directly to your service. **NodePort**, as the name implies, opens a specific port (typically 30000–32767) on all the Nodes (the VMs), and any traffic that is sent to this port is forwarded to the service.

A Service exposed as a NodePort can be accessed via ``<node-ip-address>:<node-port>``.

The YAML for a NodePort service looks like this:

```yaml{8}
apiVersion: v1
kind: Service
metadata:  
  name: my-nodeport-service
spec:
  selector:    
    app: my-app
  type: NodePort
  ports:  
  - name: http
    port: 80
    targetPort: 80
    nodePort: 30036
    protocol: TCP
```

The **nodePort** that specifies which port to open on the nodes. If you don’t specify this port, it will pick a random port. Most of the time you should let Kubernetes choose the port. This should be used as a temprorary solution.

## Type: LoadBalancer
**LoadBalancer** service type automatically deploys an external load balancer. This external load balancer is associated with a specific IP address and routes external traffic to a Kubernetes service in your cluster.

**LoadBalancer** is used to automatically configure a supported ``external Load Balancer`` (for instance an ELB in Amazon) to route traffic through to the **NodePort** of the Service. This is the most versatile of the **ServiceTypes** but requires that you have a supported Load Balancer in your infrastructure of which most major cloud providers have (GCE, AWS, Azure).
```yaml{8}
apiVersion: v1
kind: Service
metadata:
  name: nginx-ingress
  namespace: nginx-ingress
spec:
  externalTrafficPolicy: Local
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  - port: 443
    targetPort: 443
    protocol: TCP
    name: https
  selector:
    app: nginx-ingress
```


## Type: ExternalName
ExternalName creates DNS records in KubeDNS to direct the Service’s DNS to an external service specified in the field ExternalName. It provides no other routing or load balancing services.

## Type: External IP
```sh
$ kubectl run ghost --image=ghost:2.1.4 --port=2368
deployment "ghost" created
$ kubectl expose deployment ghost --external-ip=192.168.10.10 --port=2368 --target-port=2368
service "ghost" exposed
$ curl 192.168.10.10:2368
```

## Ingress
::: warning
Before using ingress resource, an ingress controller has to be installed!
:::

There are many types of **Ingress controllers**, from the Google Cloud Load Balancer, Nginx, Traefik, Ambassador, and more.

Unlike all the above examples, Ingress is actually NOT a type of service. Instead, it sits in front of multiple services and act as a “smart router” or entrypoint into your cluster. For example, you can send everything on foo.yourdomain.com to the **foo** service, and everything under the yourdomain.com/bar/ path to the **bar** service.

```yaml{2}
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: test-ingress
spec:
  rules:
  - host: foo.bar.com
    http:
      paths:
      - backend:
          serviceName: s1
          servicePort: 80
  - host: bar.foo.com
    http:
      paths:
      - backend:
          serviceName: s2
          servicePort: 80
```

## Ingress Controller
Example of NGINX ingress controller

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: nginx-ingress-controller
  labels:
    k8s-app: nginx-ingress-controller
  namespace: ingress
spec:
  replicas: 1
  template:
    metadata:
      labels:
        k8s-app: nginx-ingress-controller
    spec:
      #hostNetwork: true # If run on a single node
      serviceAccountName: nginx-ingress
      terminationGracePeriodSeconds: 60
      containers:
      - image: gcr.io/google_containers/nginx-ingress-controller:0.9.0-beta.15
        name: nginx-ingress-controller
        imagePullPolicy: Always
        ports:
        - containerPort: 80
          hostPort: 80
        - containerPort: 443
          hostPort: 443
        env:
          - name: POD_NAME
            valueFrom:
              fieldRef:
                fieldPath: metadata.name
          - name: POD_NAMESPACE
            valueFrom:
              fieldRef:
                fieldPath: metadata.namespace
        args:
        - /nginx-ingress-controller
        - --default-backend-service=$(POD_NAMESPACE)/default-http-backend
        - --configmap=$(POD_NAMESPACE)/nginx-ingress-controller
```

### Default Backend (Optional for NGINX)
This pod will route all request that are not associated with any service to default backend, which will respond with 404.
```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: default-http-backend
  labels:
    k8s-app: default-http-backend
  namespace: ingress
spec:
  replicas: 1
  template:
    metadata:
      labels:
        k8s-app: default-http-backend
    spec:
      terminationGracePeriodSeconds: 60
      containers:
      - name: default-http-backend
        # Any image is permissable as long as:
        # 1. It serves a 404 page at /
        # 2. It serves 200 on a /healthz endpoint
        image: gcr.io/google_containers/defaultbackend:1.4
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8080
            scheme: HTTP
          initialDelaySeconds: 30
          timeoutSeconds: 5
        ports:
        - containerPort: 8080
        resources:
          limits:
            cpu: 10m
            memory: 20Mi
          requests:
            cpu: 10m
            memory: 20Mi
```
