/*
Prototype Inheritance vs Class Inheritance
Core Difference (One Line)

“Prototype inheritance is the core mechanism in JavaScript where objects inherit from other objects via the prototype chain. Class inheritance is a syntactic sugar introduced in ES6 that provides a cleaner and more readable way to implement the same prototype-based inheritance.”

Prototype Inheritance = real mechanism (how JS actually works)
Class Inheritance = syntactic sugar (clean syntax over prototypes)

*/
/*
| Feature        | Prototype Inheritance | Class Inheritance      |
| -------------- | --------------------- | ---------------------- |
| Nature         | Core JS mechanism     | Syntax (ES6 feature)   |
| Based on       | Objects               | Classes                |
| Introduced in  | From beginning        | ES6 (2015)             |
| Syntax         | Complex / manual      | Clean / readable       |
| Under the hood | Uses prototype chain  | Uses prototype chain   |
| Use case       | Low-level control     | Real-world development |
*/

// Prototype Inheritance (REAL JS)

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + " makes a sound");
};

function Dog(name) {
    this.name = name;
}

// Inheritance
Dog.prototype = Object.create(Animal.prototype);

let d = new Dog("Tommy");
d.speak(); // Tommy makes a sound

/*
Key Points
Uses constructor functions
Uses .prototype
Uses Object.create()
More control, but more complex
*/

// Class Inheritance (MODERN JS)

/*
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }
}

class Dog extends Animal {}

let d = new Dog("Tommy");
d.speak(); // Tommy makes a sound
*/

/*
Key Points

Uses class keyword
Uses extends
Uses super()
Easy to read & maintain
*/

/*
One-Line Memory Trick

“Classes look different, but behave like prototypes.”
*/