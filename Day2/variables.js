/*
========================================================
DAY 2 – VARIABLES (DEEP UNDERSTANDING)
========================================================

WHAT IS A VARIABLE?

- A variable is a container used to store data.
- In JavaScript, variables store values (not fixed types).
- JavaScript is dynamically typed.

WHY VARIABLES ARE IMPORTANT?

Everything in programming depends on variables.
Backend systems, APIs, databases — all use variables
to store and manipulate data.

========================================================
3 WAYS TO DECLARE VARIABLES IN JAVASCRIPT
========================================================

1. var      (Old way - avoid in modern JS)
2. let      (Modern - block scoped)
3. const    (Modern - block scoped, cannot reassign)

We will understand each deeply.
*/


/*
========================================================
1️ VAR (Function Scoped - Problematic)
========================================================

- Can be re-declared
- Can be updated
- NOT block scoped
- Hoisted with undefined

Avoid using var in modern development.
*/

var name = "Prakash";
console.log(name);

// Re-declaration allowed (this is dangerous)
var name = "Mali";
console.log(name);

// var ignores block scope
if (true) {
    var age = 25;
}

console.log(age); 
// Accessible outside block (unexpected behavior)
// This causes bugs in large applications



/*
========================================================
2️ LET (Block Scoped - Recommended)
========================================================

- Cannot be re-declared in same scope
- Can be updated
- Block scoped
- Hoisted but in Temporal Dead Zone (TDZ)

Use let when value needs to change.
*/

let city = "Pune"; // Declaration and initialization first time
console.log(city);

//let city = "Pune"; // Re-Declaration now not allowed

// Updating allowed
city = "Mumbai";
console.log(city);

// Block scope example
if (true) {
    let country = "India";
    console.log(country);
}

// console.log(country);
// Error: country is not defined
// Because let respects block scope



/*
========================================================
3️ CONST (Block Scoped - Most Recommended)
========================================================

- Cannot be re-declared
- Cannot be updated
- Block scoped
- Must be initialized at declaration

Use const by default in real-world coding.
*/

const pi = 3.14;
console.log(pi);

// pi = 3.1415; 
// Error: Assignment to constant variable


/*
IMPORTANT INTERVIEW CONCEPT:

For objects and arrays declared with const,
you cannot reassign the reference,
but you CAN modify internal values.
*/

const user = {
    name: "Prakash",
    age: 25
};

user.age = 30; // Allowed
console.log(user);

// user = {}; 
// Error (cannot reassign reference)



/*
========================================================
HOISTING (VERY IMPORTANT CONCEPT)
========================================================

Hoisting means:
JavaScript moves variable declarations to the top
of their scope during memory creation phase.

But behavior differs for var, let, const.
*/


/*
--- var hoisting ---
*/

console.log(testVar); // undefined (not error)
var testVar = 100;

/*
Behind the scenes:

var testVar;  // hoisted
console.log(testVar); // undefined
testVar = 100;
*/


/*
--- let hoisting ---
*/

// console.log(testLet);
// ReferenceError

let testLet = 200;

/*
Why error?

Because let is hoisted but stays in
Temporal Dead Zone (TDZ) until initialization.
*/


/*
========================================================
TEMPORAL DEAD ZONE (TDZ)
========================================================

TDZ = Time between variable hoisting and initialization.

Accessing let/const before initialization
causes ReferenceError.
var does NOT have TDZ, it gets hoisted with undefined.
let and const have TDZ, they are hoisted but not initialized,
so accessing them before declaration throws error.
*/




/*
========================================================
BEST PRACTICE RULE (INDUSTRY STANDARD)
========================================================

✔ Always use const by default.
✔ Use let only when value needs to change.
 Never use var in modern JavaScript.

Example:
*/

const taxRate = 18;
let totalPrice = 100;

totalPrice = totalPrice + (totalPrice * taxRate / 100);

console.log(totalPrice);



/*
========================================================
KEY DIFFERENCE SUMMARY
========================================================

var:
- Function scoped
- Re-declare allowed
- Hoisted with undefined

let:
- Block scoped
- Cannot re-declare
- TDZ applies

const:
- Block scoped
- Cannot reassign
- Must initialize immediately

========================================================
REAL-WORLD MINDSET
========================================================

In large applications:
Using var can cause hidden bugs due to scope issues.

Modern development standard:
const > let > var

========================================================
KEY TAKEAWAYS – DAY 2
========================================================

✔ Variables store data.
✔ JS is dynamically typed.
✔ let and const are block scoped.
✔ var is function scoped (avoid).
✔ Hoisting behaves differently.
✔ Temporal Dead Zone exists for let/const.

You now understand variables at professional level.
*/
