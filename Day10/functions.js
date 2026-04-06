/*
============================================================
DAY 10 – FUNCTIONS (DEEP + REAL-WORLD USAGE)
============================================================

WHAT IS A FUNCTION?

- A function is a reusable block of code.
- It helps avoid repetition (DRY principle).
- It performs a specific task.

WHY FUNCTIONS ARE IMPORTANT?

Functions are used everywhere:
- Backend APIs
- Business logic
- Data processing
- Event handling

============================================================
FUNCTION DECLARATION
============================================================
*/

function greet() {
    console.log("Hello World");
}

greet(); // calling the function


/*
============================================================
FUNCTION WITH PARAMETERS
============================================================
*/

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Prakash");
greetUser("Amit");


/*
============================================================
FUNCTION WITH RETURN VALUE
============================================================
*/

function add(a, b) {
    return a + b;
}

let result = add(5, 10);
console.log("Sum:", result);

/*
IMPORTANT:
- return stops function execution
- returns value to caller
*/


/*
============================================================
DEFAULT PARAMETERS
============================================================
*/

function greetDefault(name = "Guest") {
    console.log("Hello " + name);
}

greetDefault(); // Guest
greetDefault("Prakash");


/*
============================================================
FUNCTION EXPRESSIONS
============================================================
*/

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(3, 4));


/*
============================================================
ARROW FUNCTIONS (MODERN JS)
============================================================
*/

// Basic arrow function
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 5));

// Short form (implicit return)
const square = x => x * x;

console.log(square(4));


/*
============================================================
DIFFERENCE: NORMAL vs ARROW FUNCTION
============================================================

1) Arrow functions do NOT have their own 'this'
2) Used for shorter syntax
3) Not suitable for object methods in some cases
*/


/*
============================================================
FUNCTION INSIDE OBJECT
============================================================
*/

let user = {
    name: "Prakash",
    
    greet: function () {
        console.log("Hello " + this.name);
    }
};

user.greet();


/*
============================================================
CALLBACK FUNCTIONS (VERY IMPORTANT)
============================================================

A function passed as argument to another function
*/

function processUser(name, callback) {
    console.log("Processing:", name);
    callback();
}

processUser("Prakash", function () {
    console.log("Callback executed");
});


/*
============================================================
HIGHER ORDER FUNCTIONS
============================================================

Function that:
- Takes function as argument OR
- Returns a function
*/

function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(5, 3, (x, y) => x + y);
console.log("Result:", sum);


/*
============================================================
FUNCTION SCOPE
============================================================
*/

// Global scope
let globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();

// console.log(localVar); // ❌ error


/*
============================================================
CLOSURE (VERY IMPORTANT CONCEPT)
============================================================

A closure allows function to access variables
from its outer scope.
*/

function outer() {
    let counter = 0;

    return function inner() {
        counter++;
        console.log("Counter:", counter);
    };
}

let fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3


/*
============================================================
REST PARAMETERS
============================================================
*/

function sumAll(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sumAll(1, 2, 3, 4));


/*
============================================================
SPREAD OPERATOR WITH FUNCTIONS
============================================================
*/

let nums = [1, 2, 3];

console.log(Math.max(...nums));


/*
============================================================
IMMEDIATELY INVOKED FUNCTION (IIFE)
============================================================
*/

(function () {
    console.log("IIFE executed");
})();


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Not returning value
function wrongAdd(a, b) {
    a + b;
}

console.log(wrongAdd(2, 3)); // undefined

// ❌ Using arrow function incorrectly in object
let obj = {
    name: "Test",
    greet: () => {
        console.log(this.name); // undefined
    }
};


/*
============================================================
BEST PRACTICES
============================================================

✔ Use meaningful function names
✔ Keep functions small and focused
✔ Use arrow functions for short logic
✔ Avoid global variables
✔ Use return properly

============================================================
KEY TAKEAWAYS – DAY 10
============================================================

✔ Functions are reusable code blocks
✔ Parameters & return are core concepts
✔ Arrow functions simplify syntax
✔ Callbacks & higher-order functions are powerful
✔ Closures are very important for interviews
✔ Scope defines variable access

Functions are heart of JavaScript logic.
*/