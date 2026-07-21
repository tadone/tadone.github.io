---
title: "File Handling"
sidebarDepth: 2
---

# File Handling

Use `open()` to work with files. Prefer the `with` statement (context manager) so the file is **automatically closed** even if an error occurs.

```python
with open("file.txt", "mode") as f:
    # Read or write to the file
```

**Modes**

| Mode | Meaning |
|------|---------|
| `r`  | Read (default), file must exist |
| `w`  | Write, truncates/creates the file |
| `a`  | Append, writes to the end, creates if missing |
| `x`  | Create, fails if the file already exists |
| `r+` | Read and write |
| `b`  | Binary mode (e.g. `rb`, `wb`) |

**Reading**
```python
with open("file.txt") as f:
    content = f.read()          # Entire file as one string

with open("file.txt") as f:
    lines = f.readlines()       # List of lines (keeps "\n")

# Iterate line by line (memory friendly for large files)
with open("file.txt") as f:
    for line in f:
        print(line.rstrip())    # Strip trailing newline
```

**Writing / Appending**
```python
with open("file.txt", "w") as f:
    f.write("first line\n")     # Overwrites existing content
    f.writelines(["a\n", "b\n"])

with open("file.txt", "a") as f:
    f.write("appended line\n")  # Adds to the end
```

**Working with paths** (`pathlib` is the modern approach)
```python
from pathlib import Path

path = Path("data") / "file.txt"
text = path.read_text()         # Read whole file
path.write_text("hello")        # Write whole file
print(path.exists())            # True / False
```
