/*
============================================================
DAY 23 – CLASSES (ES6 OOP)
============================================================

TOPICS COVERED:
✔ class keyword
✔ constructor
✔ methods
✔ inheritance (extends)
✔ super keyword

IMPORTANT:
Classes are syntactic sugar over prototypes
Internally JS still uses prototype inheritance

Classes make OOP:
✔ Cleaner
✔ More readable
✔ Easier to maintain

============================================================
1️ WHAT IS A CLASS?
============================================================

A class is a blueprint/template for creating objects.

Example:
- Car blueprint
- User blueprint
- Product blueprint

One class → many objects
*/


/*
============================================================
2️ BASIC CLASS
============================================================
*/

class Person {

    // constructor runs automatically
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}


// Creating objects
let user1 = new Person("Prakash", 25);
let user2 = new Person("Amit", 30);

console.log(user1.name);
console.log(user2.age);

user1.greet();
user2.greet();


/*
============================================================
3️ CONSTRUCTOR
============================================================

- Special method inside class
- Runs automatically when object created
- Used for initialization
*/

class Car {

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    showDetails() {
        console.log(this.brand + " " + this.model);
    }
}

let car1 = new Car("BMW", "X5");

car1.showDetails();


/*
============================================================
4️ METHODS
============================================================

Methods are functions inside class
*/

class Calculator {

    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}

let calc = new Calculator();

console.log(calc.add(10, 20));
console.log(calc.multiply(5, 4));


/*
============================================================
5️ INHERITANCE (extends)
============================================================

Inheritance allows one class to use
properties/methods of another class
*/

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }
}


// Dog inherits Animal
class Dog extends Animal {

    bark() {
        console.log(this.name + " is barking");
    }
}

let dog1 = new Dog("Tommy");

dog1.speak(); // inherited
dog1.bark();


/*
============================================================
6️ super KEYWORD
============================================================

super() calls parent constructor
Must call super before using this
*/

class Employee {

    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(this.name + " is working");
    }
}


class Manager extends Employee {

    constructor(name, department) {

        // call parent constructor
        super(name);

        this.department = department;
    }

    manage() {
        console.log(this.name + " manages " + this.department);
    }
}

let manager1 = new Manager("Prakash", "IT");

manager1.work();
manager1.manage();


/*
============================================================
7️ METHOD OVERRIDING
============================================================

Child class can replace parent method
*/

class Bird {

    sound() {
        console.log("Bird sound");
    }
}

class Parrot extends Bird {

    sound() {
        console.log("Parrot talking");
    }
}

let p1 = new Parrot();

p1.sound();


/*
============================================================
8️ STATIC METHODS
============================================================

Belong to class itself
NOT object
*/

class MathUtils {

    static square(num) {
        return num * num;
    }
}

console.log(MathUtils.square(5));


// let obj = new MathUtils();
// obj.square(5); Error


/*
============================================================
COMMON MISTAKES
============================================================
*/

// Forgetting new keyword
// let p = Person("John");

// Using this before super
/*
class Test extends Employee {
    constructor() {
        this.name = "A";
        super();
    }
}
*/


/*
============================================================
BEST PRACTICES
============================================================

✔ Use classes for OOP
✔ Keep methods reusable
✔ Use inheritance carefully
✔ Avoid deep inheritance chains
✔ Use meaningful class names

============================================================
KEY TAKEAWAYS – DAY 23
============================================================

✔ class creates blueprint for objects
✔ constructor initializes object
✔ methods define behavior
✔ extends enables inheritance
✔ super calls parent constructor
✔ Classes internally use prototypes

You now understand modern JavaScript OOP
*/