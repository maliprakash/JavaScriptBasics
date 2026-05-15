/*
============================================================
DAY 1 – INTRODUCTION & SETUP
============================================================

TOPICS COVERED:
✔ What is JavaScript?
✔ How JavaScript runs (Browser + Engine)
✔ Script tag basics
✔ console.log()
✔ Comments
✔ Code execution order

============================================================
1️⃣ WHAT IS JAVASCRIPT?
============================================================

JavaScript is a programming language used to:
- Make websites interactive
- Build web applications
- Create backend servers (Node.js)

Examples:
- Button click actions
- Form validation
- API calls
- Dynamic content updates

JS is:
✔ Lightweight
✔ Interpreted (runs directly)
✔ Single-threaded

============================================================
2️⃣ HOW JAVASCRIPT RUNS (ENGINE CONCEPT)
============================================================

JavaScript does NOT run on its own.
It runs inside an environment.

BROWSER:
- Chrome → V8 Engine
- Firefox → SpiderMonkey
- Safari → JavaScriptCore

FLOW:

Code → JavaScript Engine → Output

ENGINE DOES:
1) Parses code
2) Compiles (JIT)
3) Executes

👉 You don’t see this, but it’s happening internally.

============================================================
3️⃣ SCRIPT TAG BASICS (BROWSER)
============================================================

JavaScript runs inside HTML using <script> tag

Example:

<script>
    console.log("Hello from browser");
</script>

External file:

<script src="app.js"></script>

BEST PRACTICE:
✔ Place script at end of body
✔ OR use defer

============================================================
4️⃣ console.log()
============================================================

Used for:
- Debugging
- Printing output

*/

console.log("Hello JavaScript");
console.log(10 + 5);

/*
Other console methods:
*/

console.error("This is an error");
console.warn("This is a warning");


/*
============================================================
5️⃣ COMMENTS
============================================================

Comments are ignored by JavaScript

Types:
*/

// Single-line comment

/*
Multi-line comment
Used for documentation
*/


/*
============================================================
6️⃣ CODE EXECUTION ORDER
============================================================

JavaScript runs code:
👉 TOP to BOTTOM (line by line)

Example:
*/

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

/*
Output:
Step 1
Step 2
Step 3

============================================================
IMPORTANT CONCEPT
============================================================

Even though JS runs top-to-bottom,
some features (like async) behave differently
(we will learn later)

============================================================
COMMON MISTAKES
============================================================

// ❌ Forgetting quotes
// console.log(Hello);

// ❌ Not using console for debugging

============================================================
BEST PRACTICES
============================================================

✔ Use console.log for debugging
✔ Write clean comments
✔ Keep code readable
✔ Understand execution flow

============================================================
KEY TAKEAWAYS – DAY 1
============================================================

✔ JavaScript makes web interactive
✔ Runs inside browser engine
✔ Script tag connects JS to HTML
✔ console.log prints output
✔ Comments improve readability
✔ Code runs top-to-bottom

This is your foundation 🚀
*/