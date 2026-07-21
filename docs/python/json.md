---
title: "JSON"
sidebarDepth: 2
---

# JSON

Python's built-in [`json`](https://docs.python.org/3/library/json.html) module converts between JSON text and Python objects. No install required.

| JSON | Python |
|------|--------|
| object | `dict` |
| array | `list` |
| string | `str` |
| number | `int` / `float` |
| `true` / `false` | `True` / `False` |
| `null` | `None` |

```python
import json
```

**Parse (decode) JSON → Python**
```python
# From a string
data = json.loads('{"name": "Jack", "age": 26, "admin": false}')
print(data["name"])            # Jack

# From a file
with open("data.json") as f:
    data = json.load(f)
```

**Serialize (encode) Python → JSON**
```python
obj = {"name": "Jack", "age": 26, "tags": ["a", "b"]}

# To a string
text = json.dumps(obj)
# Pretty-printed and key-sorted
text = json.dumps(obj, indent=2, sort_keys=True)

# To a file
with open("data.json", "w") as f:
    json.dump(obj, f, indent=2)
```

**Handling missing keys**
```python
# .get() avoids a KeyError, returns a default instead
email = data.get("email", "not provided")
```

**Non-serializable values**
```python
# Objects like datetime aren't JSON-serializable by default.
# Pass default= to convert them, or str for a quick fix.
import datetime
json.dumps({"now": datetime.datetime.now()}, default=str)
```
