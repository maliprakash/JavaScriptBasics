/*
============================================================
DAY 9 – ADVANCED FUNCTIONS
============================================================

TOPICS COVERED:
✔ Callback functions
✔ Higher-order functions
✔ Function inside function
✔ Pure vs Impure functions

These concepts are VERY IMPORTANT for:
- Interviews
- Backend development
- Functional programming

============================================================
1️⃣ CALLBACK FUNCTIONS
============================================================

A callback is:
👉 A function passed as an argument to another function
👉 Executed later
*/

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greetUser("Prakash", sayBye);

/*
Flow:
1) greetUser called
2) name printed
3) callback function executed
*/


/*
============================================================
REAL EXAMPLE – CALLBACK
============================================================
*/

function processOrder(orderId, callback) {
    console.log("Processing order:", orderId);

    // simulate delay
    setTimeout(() => {
        console.log("Order processed");
        callback();
    }, 1000);
}
function sendEmail(){
    console.log("Send confirmation email");
}

processOrder(101, sendEmail);

/*
============================================================
2️⃣ HIGHER-ORDER FUNCTIONS
============================================================

A function is called Higher-Order if:
✔ It takes a function as argument OR
✔ It returns a function
*/

// Example 1: function as argument
function calculate(a, b, operation) {
    return operation(a, b);
}

let result = calculate(5, 3, (x, y) => x + y);
console.log("Result:", result);


// Example 2: function returning another function
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

let double = multiplier(2);
console.log(double(5)); // 10


/*
============================================================
3️⃣ FUNCTION INSIDE FUNCTION (CLOSURE BASE)
============================================================

Inner function has access to outer function variables
*/

function outerFunction() {
    let message = "Hello from outer";

    function innerFunction() {
        console.log(message); // accessing outer variable
    }

    innerFunction();
}

outerFunction();


/*
============================================================
CLOSURE (IMPORTANT CONCEPT)
============================================================

Closure = Inner function remembers outer variables even after outer function is executed
*/

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log("Count:", count);
    };
}

let increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

/*
============================================================
4️⃣ PURE vs IMPURE FUNCTIONS
============================================================

PURE FUNCTION:
✔ Same input → same output
✔ No side effects
✔ Does NOT modify external state
*/

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // always 5

/*
IMPURE FUNCTION:
Depends on external data OR
Modifies external state
*/

let total = 0;

function addToTotal(value) {
    total += value; // modifying external variable 

}

addToTotal(5);
console.log(total);

/*
============================================================
ANOTHER IMPURE EXAMPLE
============================================================
*/

let randomValue = Math.random();

function getRandom() {
    return console.log("Random Value :" + randomValue);
}

getRandom(); // Output depends on external state
// Output depends on external state

/*
============================================================
WHY PURE FUNCTIONS ARE IMPORTANT?
============================================================

✔ Predictable
✔ Easy to test
✔ No side effects
✔ Better for scalable applications


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Not understanding callback execution
function wrongExample(cb) {
    cb; // ❌ not calling function
}

// ❌ Forgetting return in higher-order function
function wrongMultiplier(factor) {
    function inner(num) {
        return num * factor;
    }
}


/*
============================================================
BEST PRACTICES
============================================================

✔ Use callbacks for async operations
✔ Use higher-order functions for reusable logic
✔ Prefer pure functions when possible
✔ Avoid global state modification
✔ Understand closures deeply

============================================================
KEY TAKEAWAYS – DAY 9
============================================================

✔ Callbacks allow delayed execution
✔ Higher-order functions improve flexibility
✔ Closures retain outer scope
✔ Pure functions are predictable
✔ Impure functions cause side effects

These are CORE concepts for backend & advanced JS 🔥
*/