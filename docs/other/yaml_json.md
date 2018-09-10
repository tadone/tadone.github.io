---
title: "YAML & JSON"
sidebarDepth: 2
---

# Notes
---
## Yaml Tips
**Break a string over multiple lines**

``>``   Folded style removes the newlines within the string (but adds one at the end):
```bash
Key: >
  this is my very very very
  long string
# Output
this is my very very very long string \n  
```


``|``   Literal style turns newlines within the string into literal newlines, and adds one at the end:
```bash
Key: |
  this is my very very very
  long string
# Output
this is my very very very\n
long string\n
```
