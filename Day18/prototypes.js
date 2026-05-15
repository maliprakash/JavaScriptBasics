/*
============================================================
DAY 18 – PROTOTYPES & INHERITANCE (PRO LEVEL)
============================================================

What is Prototype Inheritance?
Prototype inheritance in JavaScript is a mechanism where objects can access properties and methods of other objects through a linked prototype chain.

Why Prototype Inheritance Exists?

To: 
Reuse code
Avoid duplication
Share methods across objects
Build relationships between objects

In simple words:
“Objects can inherit from other objects.”

Key Concepts You Must Remember
✔ Every object has a prototype
✔ Prototype itself is an object
✔ Chain continues until null
✔ Inheritance is NOT copying — it’s linking

TOPICS COVERED:
✔ Prototype chain
✔ __proto__
✔ Constructor functions
✔ Prototype inheritance

This is CORE JavaScript internal behavior:
- Used in OOP
- Asked in interviews
- Foundation of classes in JS

============================================================
1️ WHAT IS PROTOTYPE?
============================================================

Every JavaScript object has a hidden property:
   [[Prototype]]

Accessible via:
   __proto__  (not recommended for production)

Prototype is used for:
   ✔ Inheritance
   ✔ Sharing properties/methods

*/


/*
============================================================
2️ PROTOTYPE CHAIN
============================================================

When you access a property:
JS searches in:

1) Object itself
2) Its prototype
3) Prototype’s prototype
4) ... until null

This is called PROTOTYPE CHAIN
*/

let obj = {
    name: "Prakash"
};

console.log(obj.toString()); 
// toString comes from Object.prototype


/*
============================================================
3️ __proto__ (UNDERSTANDING ONLY)
============================================================

- Points to object's prototype
- Avoid using in real projects (use Object.getPrototypeOf)
*/

let animal = {
    eats: true
};

let dog = {
    barks: true
};

dog.__proto__ = animal; // inheritance

console.log(dog.eats)
console.log(dog.barks) // true (from animal)

// child can access its own properties
// child can also access parent properties

/*
============================================================
4️ CONSTRUCTOR FUNCTIONS
============================================================

Used to create multiple objects
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("Prakash", 25);
let p2 = new Person("Amit", 30);

console.log(p1.name, p1.age); // Prakash
console.log(p2.name, p2.age); // Amit


/*
============================================================
5️ PROTOTYPE WITH CONSTRUCTOR
============================================================

All functions have a "prototype" property
Used to share methods
*/

Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};

p1.greet();
p2.greet();

/*
Method is NOT copied for each object
it is shared via prototype
*/


/*
============================================================
6️ PROTOTYPE INHERITANCE (OBJECT.CREATE)
============================================================
*/

let parent = {
    speak() {
        console.log("Parent speaking");
    }
};

let child = Object.create(parent);

child.walk = function () {
    console.log("Child walking");
};

child.walk();
child.speak(); // inherited


/*
============================================================
7️ PROTOTYPE CHAIN VISUAL
============================================================

child → parent → Object.prototype → null
*/


/*
============================================================
8️ CHECKING PROTOTYPE
============================================================
*/

console.log(Object.getPrototypeOf(child) === parent); // true


/*
============================================================
COMMON MISTAKES
============================================================
*/

//Adding methods inside constructor (bad for memory)
function BadExample(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("Hi " + this.name);
    };
}

/*
Each object gets its own copy → waste memory
*/


/*
============================================================
BEST PRACTICES
============================================================

✔ Use prototype for shared methods
✔ Avoid __proto__ in real projects
✔ Use Object.create for inheritance
✔ Prefer ES6 classes (we’ll learn next)

============================================================
KEY TAKEAWAYS – DAY 18
============================================================

✔ Every object has a prototype
✔ JS uses prototype chain for lookup
✔ Constructor functions create objects
✔ Prototype allows method sharing
✔ Inheritance works via prototypes

This is backbone of JavaScript OOP

Benefits ->
Memory efficient
Dynamic (changes reflect immediately)
Core of JavaScript OOP

Limitations ->
Debugging can be tricky
Deep chains reduce performance (rare but possible)

One-Line Memory Trick

“JS inheritance is linking, not copying.”
*/