---
title: "Python"
sidebarDepth: 2
---

# Setup

### Virtual Env
```bash
python3 -m venv <desired-path>
# Activate the virtualenv:
source <desired-path>/bin/activate
# Deactivate the virtualenv:
deactivate
# Install packages with pip3
pip install Cython==0.27.3
pip install kivy
```
### Install pip package for user only
This will install pip package to ``$HOME/.local/bin/<pip_package>``
```Bash
pip install --user <pip_package>
```
## Lists
[Advanced Lists](python/list.html)
Contains list of values (integers, strings, variables, other lists, dictionaries). Each item in the list has an index number assigned to it, **starting at 0**
```python
my_list = ["string1", 2, var, "string2"]

print(my_list[0])             # Print first item in the list
print(my_list)                # Print contents of the my_list

for item in my_list:
  print(item)                 # Loop through each item in the list

# Results:
string1
2
var
string2

# Append to list:
my_list.append("value")       # Append value to the list

```
**Removing elements from lists**
``n.pop(index)`` will remove the item at ``index`` from the list and return it to you:
```python
n = [1, 3, 5]
n.pop(1)
# Returns 3 (the item at index 1)
print n
# prints [1, 5]
```
``n.remove(item)`` will remove the actual ``item`` if it finds it:
```python
n.remove(1)
# Removes 1 from the list,
# NOT the item at index 1
print n
# prints [3, 5]
```
``del(n[1])`` is like ``.pop`` in that it will remove the item at the given index, but it won't return it:
```python
del(n[1])
# Doesn't return anything
print n
# prints [1, 5]
```
## Dictionaries

```python
my_dictionairy = { "key1":"value1", "key2": "value2" }

for key in dictionairy:
  print(key)                  # Print dictionairy keys
  print(dictionairy[key])     # Print the values associated with those keys

# Results  
key1
key2

value1
value2  

```

**Change or Add elements in dictionairy**

```python
my_dict = {'name':'Jack', 'age': 26}

my_dict['age'] = 27                   # Update value
print(my_dict)                        # Output: {'age': 27, 'name': 'Jack'}

my_dict['address'] = 'Downtown'       # Add item
print(my_dict)                        # Output: {'address': 'Downtown', 'age': 27, 'name': 'Jack'}
```

## Functions

```python
def add_function(x, y):       # Create function called add_function
  return x + y                # Function should return sum of x and y

n = "Hello"                   # Define string
def string_function(s):       # Define function that take variable s
  return str(s) + "world"     # Function joins variable s with word "world"

print(string_function(n))     # Print function with variable n
# Result:
Helloworld  
```

## Useful Methods

**.join()**
```python
letters = ['a', 'b', 'c', 'd']
print " ".join(letters)
print "---".join(letters)
# OUTPUT
a b c d
a---b---c---d
```

# Lambda syntax
Same as defining a function but without giving it explicit name

```python
lambda x: x % 3 == 0    # Return x if divisible by 3 (modulo)

def by_three(x):        # Function "by_three"
  return x % 3 == 0     # Return x if divisible by 3 (modulo)
```
**Example**
```python
languages = ["HTML", "JavaScript", "Python", "Ruby"]
# Add arguments to the filter()
print filter(lambda x: x == "Python", languages)
# => ['Python']

squares = [i ** 2 for i in range(1,11)]               # Squares of numbers 1 to 10
print(filter(lambda x: x > 30 and x <= 70, squares))  # print out only the squares that are between 30 and 70 (inclusive)
# => [36, 49, 64]
```

# File I/O
Automatically close file after reading/writing
```python
with open("file", "mode") as variable:
  # Read or write to the file
```
