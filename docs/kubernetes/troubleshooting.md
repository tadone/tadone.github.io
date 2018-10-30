---
title: "Troubleshooting"
---

# Troubleshooting Kubernetes

```bash
# If your container has previously crashed, you can access the previous container's crash log with:
$ kubectl logs --previous ${POD_NAME} ${CONTAINER_NAME}
```