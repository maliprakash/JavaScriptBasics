
// 1️⃣ ARITHMETIC OPERATORS

let a = 10;
let b = 3;

let x1 = 9;
let y1 = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(x1 % y1); // Modulus (remainder) → 0
console.log(a ** b); // Exponentiation → 10^3 = 1000


// 2️⃣ ASSIGNMENT OPERATORS

console.log("Assignment Operators"); // 10

let a1 = 10;

a1 += 5;

console.log(a1); // 15 

a1 -= 3;

console.log(a1); // 12

a1 *= 2;

console.log(a1); // 24

a1 /= 4;

console.log(a1); // 6

a1 %= 4;

console.log(a1); // 2       

// 3️⃣ COMPARISON OPERATORS

//Used to compare values.
//Returns boolean (true/false)


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

// 4️⃣ LOGICAL OPERATORS
// Used for combining conditions.

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true
console.log(false && false); // false
console.log(true || false); // true
console.log(!true);         // false
console.log(!false);        // true





