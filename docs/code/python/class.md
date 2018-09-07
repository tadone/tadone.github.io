Python Classes
===
---
Define a class:
```python
class Animal(object):
  pass
```

Initialize a class with ``__init__()`` function
```python
class Animal(object):
  def __init__(self):
    pass
```

Add an argument **name**
```python
class Animal(object):
  def __init__(self, name):                 # Add argument NAME
    self.name = name                        # self.NAME

zebra = Animal("Jeffrey")                   # Create instance of Animal class
print(zebra.name)
# => Jeffrey    
```
Add more arguments **age** & **is_hungry**
```python
class Animal(object):
  # For initializing our instance objects
  def __init__(self, name, age, is_hungry): # Add arguments AGE and IS_HUNGRY
    self.name = name
    self.age = age                          # self.AGE
    self.is_hungry = is_hungry              # self.IS_HUNGRY
# instantiate class Animal to different objects
zebra = Animal("Jeffrey", 2, True)          # Create instance of Animal class
giraffe = Animal("Bruce", 1, False)         # Another instance of Animal class
panda = Animal("Chad", 7, True)             # Another instance

print(zebra.name, zebra.age, zebra.is_hungry)
# => Jeffrey 2 True
print giraffe.name, giraffe.age, giraffe.is_hungry
# => Bruce 1 False
print panda.name, panda.age, panda.is_hungry
# => Chad 7 True    
```
## Constructors in Python
Class **functions** that begins with double underscore ``(__)`` are called special functions as they have special meaning.

``__init__()``

Of one particular interest is the ``__init__()`` function. It's used to initialize all the variables.
```python
class My_Class():
  def __init__(self, var1, var2):           # Define class variables
    self.var1 = var1
    self.var2 = var2
  def my_func(self):                        # Define simple function
    pass

my_object = My_Class(my_var1, my_var2)      # Instantiate "My_Class" with "my_var1" & "my_var2"
my_object.my_func()                         # Use "my_func" method  
```
``__repr__()``

Representation; by providing a return value in this method, we can tell Python how to represent an object of our class (for instance, when using a print statement).
```python
class Point3D(object):
  def __init__(self, x, y, z):
    self.x = x
    self.y = y
    self.z = z
  def __repr__(self):
    return "(%d, %d, %d)" % (self.x, self.y, self.z)

my_point = Point3D(1, 2, 3)
print(my_point)
# => (1, 2, 3)
# Otherwise it would print <Point3D object at 0x7fefb5223910>
```

https://www.tutorialspoint.com/python/python_classes_objects.htm

## instantiate a Class
To access Class variables and methods, it needs to be instantiated (assigned to an object)
```python
some_object = My_Class(var1, var2)          # instantiate My_Class with variables
print(some_object.var1)                     # Print out My_Class variable 1
print(some_object.my_func())                # Access My_Class function, include "()"
```


## Class Scope
The scope of a variable is the context in which it's visible to the program.
```python
class My_Class():
  outside_var = value                       # Variable for whole class
  def __init__(self, inside_var):
    self.inside_var = inside_var

  def my_func(self):
    self.inside_var = value                 # Variable for function  
```
```python
class Animal(object):
  is_alive = True                           # It's TRUE for whole class
  def __init__(self, name, age, is_hungry):
    self.name = name
    self.age = age

zebra = Animal("Jeffrey", 2, True)
giraffe = Animal("Bruce", 1, False)
panda = Animal("Chad", 7, True)

print zebra.name, zebra.age, zebra.is_hungry
# => Jeffrey 2 True
print giraffe.name, giraffe.age, giraffe.is_hungry
# => Bruce 1 True
print panda.name, panda.age, panda.is_hungry
# => Chad 7 True  
```

## Class Methods
When a class has its own functions, those functions are called **methods**.
```python
my_object = my_class()  # Instantiate class to an object
my_object.my_method()   # Use the method
```  
If a method is defined in a child class that is the same as parent class, that method gets overridden. To avoid this use ``super``

## Inheritance
Class can inherit functions from other classes. In Python, inheritance works like this:
```python
class DerivedClass(BaseClass):
  # code goes here
```  
where ``DerivedClass`` is the new class you're making and ``BaseClass`` is the class from which that new class inherits.

```python
class Customer(object):                               # 1st Class defining Customer
    """Produces objects that represent customers."""
    def __init__(self, customer_id):
        self.customer_id = customer_id

    def display_cart(self):
        print("Shopping Cart Contents")

class ReturningCustomer(Customer):                    # 2nd class that inherits from "Customer" class
    """For customers of the repeat variety."""
    def display_order_history(self):
        print("Order History")

monty_python = ReturningCustomer("ID: 12345")     # Use ReturningCustomer class, which inherits from Customer class
monty_python.display_cart()                       # "display_cart" method from original "Customer" class
monty_python.display_order_history()              # "display_order_history" method from child "ReturningCustomer" class
```

## Super

In case of single inheritance, it allows us to refer base class by ``super()``
```python
class Mammal(object):
  def __init__(self, mammalName):
    print(mammalName, 'is a warm-blooded animal.')

class Dog(Mammal):                  #
  def __init__(self):
    print('Dog has four legs.')
    super().__init__('Dog')         # Copy __init__ from  "Mammal" class (via "Dog" class)
# Instantiate the "Dog" class    
d1 = Dog()
# OUTPUT
Dog has four legs.                 # From "Mammal" class
Dog is a warm-blooded animal.      # From "Dog" class
```
Here, we called ``__init__`` method of the Mammal class (from the Dog class) using code.
```python
super().__init__('Dog')
# instead of
Mammal.__init__(self, 'Dog')
```
Since, we do not need to specify the name of the base class if we use super(), we can easily change the base class for Dog method easily (if we need to).
```python
class Dog(CanidaeFamily): # changing base class to CanidaeFamily
  def __init__(self):
    print('Dog has four legs.')

    # no need to change this as it's still refering to "Dog" class
    super().__init__('Dog')
```
Another example
```python
class Person:
    # initializing the variables
    name = ""
    age = 0
    # defining constructor
    def __init__(self, person_name, person_age):
        self.name = person_name
        self.age = person_age
    # defining class methods
    def show_name(self):
        print(self.name)

    def show_age(self):
        print(self.age)

# definition of subclass starts here
class Student(Person):
    studentId = ""
    # Modify __init__ method using super()
    def __init__(self, student_name, student_age, student_id):
        # Required student_name, student_age from __init__ method of a parent "Person" class
        super().__init__(student_name, student_age)
        self.studentId = student_id         # Add studentId

    def get_id(self):
        return self.studentId  # returns the value of student id

# Create an object of the superclass
person1 = Person("Richard", 23)
# call member methods of the objects
person1.show_age()
# Create an object of the subclass
student1 = Student("Max", 22, "102")
print(student1.get_id())
student1.show_name()
```
