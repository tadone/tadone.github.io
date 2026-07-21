---
title: "JQ"
sidebarDepth: 2
---

```json
dog.json
{
  "name": "Buster",
  "breed": "Golden Retriever",
  "age": "4",
  "owner": {
    "name": "Sally"
  },
  "likes": [
    "bones",
    "balls",
    "dog biscuits"
  ]
}
```
```bash
cat dog.json | jq '.'
# returns the whole json

cat dog.json | jq '.name'
"Buster"

cat dog.json | jq '.breed'
"Golden Retriever"

cat dog.json | jq '.age'
"4"

cat dog.json | jq '.owner'
{
  "name": "Sally"
}

# access nested field
cat dog.json | jq '.owner.name'
"Sally"
```
# Array
```bash
# likes is an array
cat dog.json | jq '.likes'
[
  "bones",
  "balls",
  "dog biscuits"
]
cat dog.json | jq '.likes[]'
"bones"
"balls"
"dog biscuits"

# Specific item (1st) from the array
cat dog.json | jq '.likes[0]'
"bones"
```

# Combine filters
```json
names.json
[
  {
    "id": 1,
    "name": "Arthur",
    "age": "21"
  },
  {
    "id": 2,
    "name": "Richard",
    "age": "32"
  }
]
```

```bash
cat names.json | jq '.[] | .name'
"Arthur"
"Richard"

cat names.json | jq '.[] | .name, .age'
"Arthur"
"21"
"Richard"
"32"

# Advanced
cat names.json | jq '.[] | "\(.name), \(.id)"'
"Arthur, 1"
"Richard, 2"
```
