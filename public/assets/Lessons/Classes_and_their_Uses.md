# JavaScript Classes

## These are Audrey’s Personal Notes

By no means is this an authoritative source
It’s just how I am wrapping my brain around the material and if it’s useful for you, then that’s great. But keep in mind that there isn’t an industry standard. JS is created by a committee, so what I explain here may or may not line up with other opinions.

### What we’re covering about JS Classes

Definitions

How to create

How to console.log a variable in a Class

How to add data to a variable of an instance variable in a Class

### What are JavaScript Classes?

Classes

    -	A very powerful and dynamic tool

    -	A class is an extensible program-code-template for creating objects

    -	A special function that contains a function expression and a function declaration

Arrays, Dictionaries and Hashes are technically Classes

What we’re talking about here is creating our own Class.

#### PopQuiz!

##### _What classes do you think you've used already?_

### How to Create a JavaScript Class?

There are three ways to create Classes

**Basic Declaration**

A function expression (a variable holding a Class)
As a `function` with a name holding a named Class

```javascript
class NameOfClass {
  constructor(a, b) {
    this.aA = a;
    this.bB = b;
    this.aB = a + b;
  }
}
```

_`this`_ refers to the Class

The `a, b` inside the () are the _Instance Variables
Parameters_.

The `a` and `b` on the right side of the variable declarations in the body are the _Value Of Instance Variables_, or **class properties**.

The _paramaters_ are placeholders, to accept _arguments_ when the class is created, later. Then, when the class is declared, the values passed in as arguments become the _values_ in the body of the code.

Parameters are like the ingredient slots in a meal. Then, when a user says "turkey and cranberry", the meal ends up having the values or properties of a "turkey and cranberry" sandwich. Until the arguments are set, that sandwich _could_ be PB&J... except it hasn't been created yet.

Neat, huh?

**Note: A value of a variable inside a class can be anything. Boolean, string, integer, array, object, even a function or another class! It's part of why classes are so versatile.**

#### PopQuiz!

##### _What is the basic syntax of creating a Class?_

##### _What are parameters and how are they used to create values of variables?_

**Declaring a Class as an Expression**

```
const VariableName = class {
constructor( a , b ){
this.a = a;
}};
```

Creates a variable, with the name of `VariableName` containing the value of the Class.

It's kind of like a lunch box, nicknamed `VariableName` that holds a meal of an anonymous class.

_Note, we are using Pascal Case when naming Classes, to seperate them from Camel Case variables, which are the standard in JavaScript_

#### PopQuiz!

##### _Why do you think putting a class inside a variable would be useful?_

##### _What is another name for a value held inside an instance variable_

**A Class expression with a Class name**

```
const VariableName = class ClassName {
constructor( a , b ){
this.aA = a;
this.bB = b;
this.aB = a + b;
}};
```

Creates the ClassName Class as the value of VariableName. Here, we've decided the meal within the lunchbox has a name, which is currently `ClassName`.

#### PopQuiz!

##### _What are the benefits of having a named class inside a variable?_

##### _What can be held as a value inside a class property?_

##### _How does this change my perspective of functions, paramaters and arguments?_

### Now we're ready to start creating variables that are classes!

**Creating a variable of a Class**

```
class NameOfClass {
constructor( a ){
		this.a = a;
}};

const anArray = [1, 2, 3];

const variable = new NameOfClass (anArray);
```

Okay! Let's break this down a bit.

First, we create anArray, with 3 indexes.

Then we create a class, with the name of NameOfClass. The Class has a peramater of `a`, which becomes the **value** of this.aA

**Note: the `new` keyword is required to call a Class.**

Next, we create `variable`, containing an instance of NameOfClass and passes an `argument` of anArray into the class constructor. Finally, the argument becomes a variable within the NameOfClass code.

#### PopQuiz!

##### _What type will variable.aA be?_

##### _What keyword is required to create a new Class?_

##### _How do I want to experiment with Classes in my own code?_

**How to access an Instance Variable within a Class**

Using the above code...

```
console.log(variable.a);
```

Simple, huh? Because we've already done a lot of the coding when we created the Class, calling the properties on the variable is easy!

#### PopQuiz!

##### _How do I access a property of a variable that's a class?_

##### _How do I think I could use the properties of a class in my coding logic?_

**How to add items to a value of a variable instance in a Class**

Let's create a class that has a boolean, an array, a dictionary and a set, then we'll update them!

```javascript
class ClassOfTypes {
constructor(){
		this.boolean = false;
		this.anArray = [];
		this.aDict = {};
		this.set = new Set();
}};

const testingTypes = new ClassOfTypes();
```

Ok! So in the above, I created a class with no parameters; I hard coded the initial values. Still had to call the function though, so the () are necessary.

First, is the boolean, so let's start there.

```
testingTypes.boolean = true;
console.log(testingTypes.boolean)
```

Easy enough, right? It's surprisingly satisfying! Let's do the rest of them in the next block.

```
testingTypes.anArray.push("An array index");
testingTypes.aDict[newKey] = "A value!";
testingTypes.set.add(1)
```
Now, if we console.loged, we'd see that testingTypes' values have all been updated!

#### PopQuiz!
##### *What is the syntax to add to a property of a class?*
##### *What can I imagine doing with Classes?*
##### *What am I curious about Classes? What questions do I have?*

**Closing remarks**

You made it, Congratulations!!!

Make sure to celebrate the time and energy you put into this; it's intensive! Learning how to code takes time, and you're doing it.

There is more to learn about classes, but you don't need to worry about them right now. This has totally been enough to get you started using classes in your projects and to start learning things like Linked Lists.

Look at you being badass!

Resources:

These are websites that I used to create and then fact-check for this tutorial

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes