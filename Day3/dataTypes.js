/*
========================================================
DAY 3 – DATA TYPES (DEEP UNDERSTANDING)
========================================================

WHAT IS A DATA TYPE?

A data type defines:
- What kind of value a variable holds
- What operations can be performed on it
- How memory is allocated for it

JavaScript is dynamically typed.
That means:
- You don't define type explicitly.
- Type is determined at runtime.

========================================================
TWO MAIN CATEGORIES OF DATA TYPES
========================================================

1️⃣ Primitive Types  (Stored by VALUE)
2️⃣ Reference Types  (Stored by REFERENCE)

Understanding this difference is CRITICAL
for mastering JavaScript.

========================================================
PRIMITIVE DATA TYPES
========================================================

There are 7 primitive types in JavaScript:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Primitive types are immutable.
They are stored in STACK memory.
*/


/*
========================================================
1️⃣ STRING
========================================================
*/

let firstName = "Prakash";
let lastName = 'Mali';
let message = `Hello ${firstName}`; // Template literal

console.log(firstName);
console.log(message);
console.log(typeof firstName); // string

// IMPORTANT:
// Strings are immutable (cannot change original value)

let text = "Hello";
text[0] = "Y"; // This does NOT change string
console.log(text); // Still "Hello"



/*
========================================================
2️⃣ NUMBER
========================================================

JavaScript has only ONE number type.
No separate int or float.
*/

let age = 25;
let price = 99.99;

console.log(typeof age); // number
console.log(typeof price); // number

// Special numeric values
console.log(10 / 0);        // Infinity
console.log("abc" / 2);     // NaN (Not a Number)

// IMPORTANT:
// NaN is still of type "number"
console.log(typeof NaN); // number

// Takeaways

// Don’t assume JS numbers can hold very large IDs from databases; use BigInt or strings.

// Use BigInt for unique IDs, large order numbers.

// Use Number for normal calculations within safe range.

/*
========================================================
3️⃣ BOOLEAN
========================================================
*/

let isLoggedIn = true;
let isAdmin = false;

console.log(typeof isLoggedIn); // boolean



/*
========================================================
4️⃣ UNDEFINED
========================================================

A variable declared but not assigned
has value undefined.
*/

let score;
console.log(score);         // undefined
console.log(typeof score);  // undefined



/*
========================================================
5️⃣ NULL
========================================================

Represents intentional empty value.
*/

let selectedUser = null;

console.log(selectedUser);        // null
console.log(typeof selectedUser); // object (This is a historical bug in JS)

// IMPORTANT INTERVIEW QUESTION:
// Why typeof null === "object"?
// Because of legacy design bug in early JS implementation.



/*
========================================================
6️⃣ BIGINT
========================================================

Used for very large integers beyond Number limit.
*/

let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint



/*
========================================================
7️⃣ SYMBOL
========================================================

Used to create unique identifiers.
Mostly used in advanced JS and libraries.
*/

let uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol



/*
========================================================
REFERENCE DATA TYPES
========================================================

Reference types are stored in HEAP memory.
Variable stores reference (memory address),
not actual value.

Main reference types:
- Object
- Array
- Function
*/


/*
========================================================
OBJECT
========================================================
*/

let user = {
    name: "Prakash",
    age: 25
};

console.log(typeof user); // object
console.log(user.name);



/*
========================================================
ARRAY
========================================================
*/

let numbers = [1, 2, 3, 4];

console.log(typeof numbers); // object (IMPORTANT)
console.log(Array.isArray(numbers)); // true



/*
========================================================
FUNCTION
========================================================
*/

function greet() {
    return "Hello";
}

console.log(typeof greet); // function



/*
========================================================
PRIMITIVE vs REFERENCE (CRITICAL CONCEPT)
========================================================

PRIMITIVE → Copy by VALUE
REFERENCE → Copy by REFERENCE
*/


/*
--- Primitive Example ---
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Because primitives copy value independently



/*
--- Reference Example ---
*/

let obj1 = { value: 100 };
let obj2 = obj1;

obj2.value = 200;

console.log(obj1.value); // 200
console.log(obj2.value); // 200

// Both point to same memory reference



/*
========================================================
STACK vs HEAP MEMORY (SIMPLIFIED)
========================================================

STACK:
- Stores primitive values
- Fast access
- Fixed size

HEAP:
- Stores objects, arrays, functions
- Dynamic memory
- Stores references

Understanding this helps in:
- Debugging
- Performance
- Avoiding unintended mutations

========================================================
KEY TAKEAWAYS – DAY 3
========================================================

✔ JavaScript has 7 primitive types.
✔ Primitive types are immutable.
✔ Objects, arrays, functions are reference types.
✔ typeof null returns "object" (legacy bug).
✔ Arrays are technically objects.
✔ Primitive copies are independent.
✔ Reference copies share memory.

Mastering this concept prevents 70% of JS bugs.
*/
