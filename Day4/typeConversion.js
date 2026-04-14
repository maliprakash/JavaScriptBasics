/*
========================================================
DAY 4 – TYPE CONVERSION & COERCION (VERY IMPORTANT)
========================================================

WHY THIS TOPIC IS CRITICAL?

Most JavaScript bugs happen because of:
- Implicit type conversion (coercion)
- Loose equality (==)
- Unexpected automatic conversions

Understanding this deeply makes you a strong developer.

========================================================
TWO TYPES OF TYPE CONVERSION
========================================================

1️ Explicit Conversion (Manual)
   - Developer converts type intentionally.

2️ Implicit Conversion (Coercion)
   - JavaScript automatically converts type.

We will understand both carefully.
*/


/*
========================================================
EXPLICIT TYPE CONVERSION (MANUAL)
========================================================
*/


/*
--- STRING TO NUMBER ---
*/

let strNumber = "100";

let convertedNumber1 = Number(strNumber);
let convertedNumber2 = parseInt(strNumber);
let convertedNumber3 = parseFloat("99.99");

console.log(convertedNumber1); // 100
console.log(typeof convertedNumber1); // number

console.log(convertedNumber2); // 100
console.log(typeof convertedNumber2); // number

console.log(convertedNumber3); // 99.99


/*
IMPORTANT:

Number("100") → 100
Number("abc") → NaN -> Not a Number
*/

console.log(Number("abc")); // NaN

/*
--- NUMBER TO STRING ---
*/

let num = 500;

let string1 = String(num);
let string2 = num.toString();

console.log(string1); // "500"
console.log(string2); // "500"

console.log(typeof string1); // string
console.log(typeof string2); // string


/*
--- BOOLEAN CONVERSION ---
*/

console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean("Hi"));  // true
console.log(Boolean(null));  // false
console.log(Boolean(undefined)); // false


/*
========================================================
TRUTHY & FALSY VALUES
========================================================

Falsy values in JavaScript:

false
0
-0
0n
""
null
undefined
NaN -> Not a Number

Everything else is TRUTHY.
*/

if ("Hello") {
    console.log("This runs because string is truthy");
}

if (0) {
    console.log("This will NOT run because 0 is falsy");
}



/*
========================================================
IMPLICIT TYPE CONVERSION (COERCION)
========================================================

JavaScript automatically converts types
during operations.

This can cause confusion.
*/


/*
--- STRING + NUMBER ---
*/

console.log("5" + 2);  
// "52"
// Number 2 converted to string
// String concatenation happens


/*
--- STRING - NUMBER ---
*/

console.log("5" - 2);  
// 3
// String converted to number automatically


/*
--- MULTIPLICATION ---
*/

console.log("5" * 2);  
// 10
// String converted to number


/*
========================================================
EQUALITY OPERATORS (VERY IMPORTANT)
========================================================

==   → Loose equality (performs coercion)
===  → Strict equality (no coercion)

ALWAYS USE === IN PROFESSIONAL CODE
*/


console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (type check + value check)


/*
--- Dangerous Example ---
*/

console.log(false == 0);     // true
console.log("" == 0);        // true
console.log(null == undefined); // true

// But strict comparison:
console.log(false === 0); // false


/*
========================================================
HOW JAVASCRIPT CONVERTS VALUES INTERNALLY
========================================================

When using == :
JavaScript follows complex coercion rules.

Example:
*/

console.log(" \t\n" == 0); 
// true
// Because whitespace string converts to 0


/*
========================================================
UNARY PLUS OPERATOR (FAST CONVERSION)
========================================================

+value converts to number
*/

let quickConvert = +"123";
console.log(quickConvert); // 123
console.log(typeof quickConvert); // number



/*
========================================================
NULL & UNDEFINED DIFFERENCE
========================================================

null  → intentional empty value
undefined → variable declared but not assigned
*/

let a;
let b = null;

console.log(a == b);  // true (loose equality)
console.log(a === b); // false (strict equality)



/*
========================================================
REAL-WORLD BEST PRACTICES
========================================================

✔ Always use === instead of ==
✔ Avoid relying on implicit coercion
✔ Convert types explicitly
✔ Validate user input properly

Bad:
if (value == 0)

Good:
if (Number(value) === 0)

========================================================
KEY TAKEAWAYS – DAY 4
========================================================

✔ Explicit conversion is safe and predictable.
✔ Implicit coercion can cause bugs.
✔ Always use strict equality (===).
✔ Understand truthy and falsy values.
✔ String + number behaves differently than string - number.
✔ null and undefined are not identical.

Mastering coercion prevents hidden logic errors.
*/

/*
Coercion – मराठीत अर्थ

Coercion (कोअर्शन) म्हणजे:
एखाद्या value चा type जबरदस्तीने दुसऱ्या type मध्ये बदलणे

सोप्या शब्दांत:

JavaScript जेव्हा आपोआप (automatic) type बदलते त्याला Type Coercion म्हणतात.

JavaScript मधील उदाहरण
console.log("5" + 2);
// Output: "52"


इथे "5" हा string आहे
 2 हा number आहे
+ operator मुळे number ला string मध्ये convert केले
Result: "52"

हीच coercion आहे.

अजून उदाहरण
console.log("5" - 2);
// Output: 3


- operator string ला number मध्ये convert करतो
Result: 3

मराठीत सोपं स्पष्टीकरण
English	Marathi Meaning
Coercion	जबरदस्तीने बदल
Type Coercion	data type चा जबरदस्ती बदल
Implicit Coercion	JavaScript स्वतः type बदलते
Explicit Coercion	आपण स्वतः type बदलतो
🧠 Explicit Coercion (आपण स्वतः बदलतो)
Number("10")   // string → number
String(100)    // number → string
Boolean(1)     // number → boolean

🎯 Final Simple Meaning

Coercion म्हणजे JavaScript एखाद्या value चा type बदलून टाकते जेव्हा operation साठी गरज असते.

तुम्हाला हवं असल्यास मी
👉 == vs === मध्ये coercion कसं काम करतं
👉 Implicit coercion ची सगळी rules
👉 Interview-level tricky examples

Deep मध्ये समजावून सांगू शकतो 🚀
*/