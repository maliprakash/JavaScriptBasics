/*
============================================================
DAY 10 – SCOPE & EXECUTION (CORE JAVASCRIPT)
============================================================

TOPICS COVERED:
✔ Global Scope
✔ Local Scope
✔ Lexical Scope
✔ Scope Chain
✔ Execution Context (Introduction)

This is VERY IMPORTANT for:
- Interviews
- Debugging
- Understanding how JS works internally

============================================================
1️⃣ GLOBAL SCOPE
============================================================

- Variables declared outside any function/block
- Accessible everywhere
*/

let globalVar = "I am global";

function testGlobal() {
    console.log(globalVar); // accessible
}

testGlobal();


/*
============================================================
2️⃣ LOCAL SCOPE (FUNCTION SCOPE)
============================================================

- Variables declared inside a function
- Accessible ONLY inside that function
*/

function testLocal() {
    let localVar = "I am local";
    console.log(localVar);
}

testLocal();

// console.log(localVar); ❌ Error (not accessible outside)


/*
============================================================
3️⃣ BLOCK SCOPE (IMPORTANT)
============================================================

- let & const are block scoped
- var is NOT block scoped
*/

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); ❌ Error
// console.log(b); ❌ Error
console.log(c); // 30 (var escapes block) ❗


/*
============================================================
4️⃣ LEXICAL SCOPE
============================================================

- Inner function can access outer function variables
- Scope is determined by where function is written
*/

function outer() {
    let outerVar = "Outer";

    function inner() {
        console.log(outerVar); // accessible
    }

    inner();
}

outer();


/*
============================================================
5️⃣ SCOPE CHAIN
============================================================

- JavaScript searches variables in:
1) Local scope
2) Outer scope
3) Global scope

This chain is called Scope Chain
*/

let name = "Global";

function level1() {
    let name = "Level1";

    function level2() {
        console.log(name); // Level1 (closest scope)
    }

    level2();
}

level1();


/*
============================================================
6️⃣ EXECUTION CONTEXT (INTRO)
============================================================

WHAT IS EXECUTION CONTEXT?

- Environment where JS code is executed

Types:
1) Global Execution Context (GEC)
2) Function Execution Context (FEC)

============================================================
HOW EXECUTION WORKS
============================================================

PHASE 1: Memory Creation Phase
- Variables allocated memory
- Functions stored

PHASE 2: Execution Phase
- Code executed line by line

============================================================
EXAMPLE
============================================================
*/

var x = 10;

function example() {
    var y = 20;
    console.log(x + y);
}

example();


/*
STEP-BY-STEP:

1) Global Execution Context created
2) x stored in memory
3) function example stored

4) Execution starts
5) example() called → new Function Execution Context
6) y stored
7) x + y executed → 30
*/


/*
============================================================
HOISTING (IMPORTANT)
============================================================

- Variables and functions are moved to top
  during memory phase
*/

console.log(a); // undefined (not error)

var a = 5;

// let/const behave differently
// console.log(b); ❌ ReferenceError
let b = 10;


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Using var in block scope
if (true) {
    var test = "oops";
}
console.log(test); // accessible (unexpected)

// ❌ Accessing before initialization
// console.log(c); ❌ error
let c = 10;


/*
============================================================
BEST PRACTICES
============================================================

✔ Use let & const (avoid var)
✔ Keep variables in smallest scope
✔ Avoid global variables
✔ Understand scope chain for debugging
✔ Learn execution flow deeply

============================================================
KEY TAKEAWAYS – DAY 10
============================================================

✔ Global scope is accessible everywhere
✔ Local scope is limited to function
✔ Lexical scope defines accessibility
✔ Scope chain resolves variables
✔ Execution context controls how code runs
✔ Hoisting moves declarations

This is CORE foundation of JavaScript engine 🔥
*/