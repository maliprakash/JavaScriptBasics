/*
========================================================
DAY 5 – OPERATORS (COMPLETE DEEP UNDERSTANDING)
========================================================

WHAT IS AN OPERATOR?

An operator is a symbol used to perform operations
on values (operands).

Example:
5 + 3
Here:
+  → operator
5, 3 → operands

Operators are fundamental in:
- Calculations
- Comparisons
- Logical decisions
- Assignments
- Real-world applications

========================================================
TYPES OF OPERATORS IN JAVASCRIPT
========================================================

1️⃣ Arithmetic Operators
2️⃣ Assignment Operators
3️⃣ Comparison Operators
4️⃣ Logical Operators
5️⃣ Increment & Decrement
6️⃣ Unary Operators
7️⃣ Nullish Coalescing
8️⃣ Optional Chaining
*/


/*
========================================================
1️⃣ ARITHMETIC OPERATORS
========================================================
*/

let a = 10;
let b = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation → 10^3 = 1000

/*
IMPORTANT:
% (modulus) is heavily used in:
- Checking even/odd
- Cyclic logic
*/


console.log(4 % 2); // 0 → even
console.log(5 % 2); // 1 → odd



/*
========================================================
2️⃣ ASSIGNMENT OPERATORS
========================================================
*/

let x = 10;

x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x %= 4;  // x = x % 4 → 2

console.log(x);



/*
========================================================
3️⃣ COMPARISON OPERATORS
========================================================

Used to compare values.
Returns boolean (true/false)
*/

console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 4);  // false

/*
Equality Operators:
==  (loose)
=== (strict)
*/

console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict check)

// ALWAYS USE === in professional code



/*
========================================================
4️⃣ LOGICAL OPERATORS
========================================================

Used for combining conditions.
*/

let isLoggedIn = true;
let isAdmin = false;

/*
AND (&&)
Returns true only if BOTH are true
*/

console.log(isLoggedIn && isAdmin); // false

/*
OR (||)
Returns true if ANY one is true
*/

console.log(isLoggedIn || isAdmin); // true

/*
NOT (!)
Reverses boolean value
*/

console.log(!isLoggedIn); // false


/*
IMPORTANT BEHAVIOR:

Logical operators return VALUES, not always boolean.
*/

console.log("Hello" && 100); // 100
console.log(null || "Default"); // "Default"



/*
========================================================
5️⃣ INCREMENT & DECREMENT
========================================================
*/

let count = 5;

/*
Post-increment
Returns value first, then increments
*/

console.log(count++); // 5
console.log(count);   // 6

/*
Pre-increment
Increments first, then returns
*/

console.log(++count); // 7



/*
========================================================
6️⃣ UNARY OPERATORS
========================================================

Unary operators operate on ONE operand.
*/

let value = "123";

console.log(+value);  // Converts string to number
console.log(typeof +value); // number

console.log(-value);  // Converts and negates → -123



/*
========================================================
7️⃣ NULLISH COALESCING (??)
========================================================

Returns right side only if left side is:
null or undefined

Safer than ||
*/

let username = null;

console.log(username ?? "Guest"); 
// Guest

/*
Difference between || and ??

|| returns right value for ANY falsy value.
?? returns right value only for null/undefined.
*/

console.log(0 || 100);   // 100
console.log(0 ?? 100);   // 0



/*
========================================================
8️⃣ OPTIONAL CHAINING (?.)
========================================================

Prevents error when accessing nested properties.
*/

let user = {
    name: "Prakash",
    address: {
        city: "Pune"
    }
};

console.log(user.address?.city); // Pune
console.log(user.contact?.phone); 
// undefined (no error)

/*
Without optional chaining:
user.contact.phone → ERROR
*/



/*
========================================================
OPERATOR PRECEDENCE
========================================================

JavaScript follows mathematical precedence rules.

Example:
*/

console.log(5 + 2 * 3); 
// 11 (multiplication first)

/*
Use parentheses to control order.
*/

console.log((5 + 2) * 3); 
// 21



/*
========================================================
REAL-WORLD BEST PRACTICES
========================================================

✔ Always use === instead of ==
✔ Use ?? instead of || when handling defaults
✔ Avoid complex one-line logical conditions
✔ Use parentheses for clarity
✔ Understand operator precedence

========================================================
KEY TAKEAWAYS – DAY 5
========================================================

✔ Arithmetic operators perform calculations.
✔ Assignment operators modify values.
✔ Comparison operators return boolean.
✔ Logical operators combine conditions.
✔ Pre vs Post increment behaves differently.
✔ ?? is safer than || in many cases.
✔ Optional chaining prevents runtime errors.

Operators are used in EVERY real application.
Mastering them improves logical thinking.
*/
