/*
========================================================
DAY 1 – INTRODUCTION & SETUP
========================================================

WHAT IS JAVASCRIPT?

- JavaScript is a high-level, interpreted programming language.
- It is mainly used to make web pages interactive.
- It runs inside browsers using a JavaScript Engine.
- Example engines:
    - V8 (Google Chrome)
    - SpiderMonkey (Firefox)

IMPORTANT CHARACTERISTICS:

1. Single-threaded
   - JavaScript executes one line at a time.
   - It uses a Call Stack to manage execution.

2. Dynamically Typed
   - You do NOT declare variable types.
   - Type is decided at runtime.

3. Interpreted Language
   - Code runs line-by-line.
   - No separate compilation step like Java or C++.

4. Case-Sensitive
   - 'name' and 'Name' are different.

WHY THIS MATTERS?

Understanding how JavaScript runs is the foundation
for advanced topics like:
- Closures
- Async/Await
- Event Loop
- Backend Development

========================================================
HOW TO RUN JAVASCRIPT USING NODE (SETUP)
========================================================

1. Install Node.js from https://nodejs.org
2. Open terminal
3. Navigate to your folder
4. Run:

   node introduction.js

This executes the file using Node's V8 engine.

========================================================
LET’S WRITE OUR FIRST JAVASCRIPT CODE
========================================================
*/

// This prints text to the console (terminal)
console.log("Hello, JavaScript!");

// IMPORTANT:
// console.log() is used for debugging and checking values.
// In real-world projects, debugging is very important.



/*
========================================================
UNDERSTANDING EXECUTION FLOW
========================================================

JavaScript executes code from top to bottom.

Let’s see example:
*/

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Output order:
// Step 1
// Step 2
// Step 3

// This proves JS runs sequentially (line by line).



/*
========================================================
COMMENTS IN JAVASCRIPT
========================================================

Comments are ignored by JavaScript engine.

Two types:

1. Single-line comment
   // This is single-line comment

2. Multi-line comment
   (Used at the top of this file)

Why comments are important?
- Improve readability
- Help other developers understand logic
- Essential in large applications
*/

// This is a single-line comment example

console.log("Comments do not execute");



/*
========================================================
JAVASCRIPT IS DYNAMICALLY TYPED
========================================================

In JavaScript, you don’t define type explicitly.
Type is assigned automatically.
*/

let value = 10; // number
console.log(value);

value = "Now I am a string"; // changed to string
console.log(value);

// IMPORTANT:
// In statically typed languages (like Java),
// changing type like this is NOT allowed.



/*
========================================================
BASIC RULES OF JAVASCRIPT
========================================================

1. Use meaningful variable names.
2. Avoid using reserved keywords.
3. Always write clean and readable code.
4. Follow consistent formatting.

Example of bad naming:
*/

let x = 100; // Not descriptive

// Better naming:
let totalAmount = 100;

console.log(totalAmount);



/*
========================================================
UNDERSTANDING ERROR BEHAVIOR
========================================================

If JavaScript encounters an error,
it stops execution at that point.
*/

console.log("Before error");

// Uncomment below line to see error behavior
// console.log(unknownVariable);

console.log("After error");

// If unknownVariable is uncommented,
// "After error" will NOT execute.



/*
========================================================
KEY TAKEAWAYS – DAY 1
========================================================

✔ JavaScript runs line by line.
✔ It is single-threaded.
✔ It is dynamically typed.
✔ console.log() is used for debugging.
✔ Comments are ignored by engine.
✔ Errors stop execution.

This foundation is critical before moving to variables.
*/
