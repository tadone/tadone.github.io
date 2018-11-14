---
title: "Security"
---

# Security
## RBAC
Using RBAC, Authorizations can be given using a set of permissions that can be limited within a namespace or the entire cluster. To do this, you can define A set of permission is called a Role, which is defined within a namespace. If you want A role that is cluster-wide, this is defined as a ClusterRole.

### Roles
Below, you can see an example of a role definition:
**Role**
```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
```
For the rules key, you will define how your permissions will work. You can specify what resources within apiGroup(s) are permitted and how they can be accessed using verbs (including create, delete, deletecollection, get, list, patch, update, and watch). The apiGroups key defines the location in the API where the resources are found. If you provide an empty value in this list, it means the core API group.
**ClusterRole**
```yaml
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  # "namespace" omitted since ClusterRoles are not namespaced
  name: secret-reader
rules:
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["get", "watch", "list"]
```
The major difference in the definition for a ClusterRole is the absence of a namespace, because the permissions defined here are cluster-scoped. However, when referenced by a RoleBinding, a ClusterRole can be used to grant permissions to namespaced resources defined in the ClusterRole role within the RoleBinding’s namespace.

### RoleBinding and ClusterRoleBinding
A RoleBinding allows you to associate a Role with a user or list of users. This grants the Role permissions to the users. The user(s) are defined under subjects, and the Role association under role references (roleRef). For example:
**RoleBinding:**
```yaml
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: abu
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```
**ClusterRoleBinding:**
```yaml
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: read-secrets-global
subjects:
- kind: Group
  name: manager
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: secret-reader
  apiGroup: rbac.authorization.k8s.io
```

## Service Accounts
Create a service account with limited permissions:
```
$ kubectl create serviceaccount thesa
```
Now, if you launch your app, use the dedicated service account thesa for example, like so:
```
$ kubectl -n myapp run theapp \
          --image=quay.io/whatever/theapp:0.42 \
          --serviceaccount=thesa
```
Wanna give the app superpowers in the namespace? Simply do this:
```
$ kubectl create rolebinding givemyappsuperpower \
          --clusterrole=cluster-admin \ 
          --serviceaccount=thesa
```
Wanna give your app superpowers in the entire cluster (don’t, seriously)? Just replace the create rolebinding above with create clusterrolebinding. Wanna restrict your app to have read-only access to resources in the namespace? Do this:
```
$ kubectl delete rolebinding givemyappsuperpower

$ kubectl create rolebinding givemyappreadonlyaccess \
          --clusterrole=view \
          --serviceaccount=myapp:thesa
```
Note that all of the above is only possible in a clean manner because you’ve created the service account thesa ahead of time and launched the app using this service account.