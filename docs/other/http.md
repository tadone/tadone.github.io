---
title: "HTTP Tips"
sidebarDepth: 2
---

**Using cURL and the host header to bypass a load balancer**

The main problem to tackle is that if I try to connect to www.example.com I’ll be connecting to the load balancer and then handed off to a random server. I want to connect directly to each server servers so I’ll need to use their IP address.

```bash
curl --verbose --header 'Host: www.example.com' 'http://10.1.1.36:8000/the_url_to_test'

# Over HTTPS use --resolve
curl -verbose --resolve www.example.com:443:10.10.10.10 https://www.example.com
```
