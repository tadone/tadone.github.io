Python Lists
===
---

## List Comprehension
List comprehensions provide a concise way to create lists. It consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses. The expressions can be anything, meaning you can
put in all kinds of objects in lists.

The result will be a new list resulting from evaluating the expression in the
context of the for and if clauses which follow it.

The list comprehension always returns a result list.

The basic syntax is:
``[ expression for item in list if conditional ]``

This is equivalent to:
```python
for item in list:
    if conditional:
        expression
```
**Examples**
```python
new_list = [x for x in range(1, 6)]
# => [1, 2, 3, 4, 5]

doubles = [x * 2 for x in range(1, 6)]
# => [2, 4, 6, 8, 10]

squares = [i ** 2 for i in range(1, 11)]
# Should be [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

cubes_by_four = [x ** 3 for x in range(1, 11) if ((x ** 3) % 4) == 0]
# => [8, 64, 216, 512, 1000]

list1 = [3,4,5]
multiplied_list = [item*3 for item in list1]
# => [9,12,15]

string = "Hello 12345 World"
numbers = [x for x in string if x.isdigit()] # list only if is digit
# => ['1', '2', '3', '4', '5']

lower_case_list = [x.lower() for x in ["A","B","C"]]
# => ['a', 'b', 'c']
```
More: http://www.pythonforbeginners.com/basics/list-comprehensions-in-python

## List Slicing
List slicing allows us to access elements of a list in a concise manner. The syntax looks like this:

``[start:end:stride]``

Where **start** describes where the slice starts (inclusive), **end** is where it ends (exclusive), and **stride** describes the space between items in the sliced list. For example, a stride of 2 would select every other item from the original list to place in the sliced list.
```python
to_five = ['A', 'B', 'C', 'D', 'E']

print to_five[3:]         # prints 4, 5
# prints ['D', 'E']

print to_five[:2]         # prints 0,1
# prints ['A', 'B']

print to_five[::2]        # prints 0,2,4
# print ['A', 'C', 'E']
```
# Reversing a List
A negative stride progresses through the list from right to left.
```python
letters = ['A', 'B', 'C', 'D', 'E']
print(letters[::-1])       # Stride is every one item from the back
# => ['E', 'D', 'C', 'B', 'A']

backwards_by_tens = to_one_hundred[::-10]   # Reverse by 10
# => [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]
```
