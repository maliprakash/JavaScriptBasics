/*
============================================================
DAY 21 – EVENT LOOP (ADVANCED CONCEPTS)
============================================================

TOPICS COVERED:
✔ Call Stack
✔ Web APIs
✔ Callback Queue (Macrotask Queue)
✔ Microtask Queue
✔ Event Loop Mechanism

This is one of the MOST IMPORTANT concepts in JavaScript:
Core for async behavior
Frequently asked in interviews
Critical for backend + frontend

============================================================
1️ CALL STACK
============================================================

- A stack (LIFO: Last In First Out)
- Keeps track of function execution

*/

function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
}

first();

/*
FLOW:
1) first() pushed to stack
2) console.log("First")
3) second() pushed
4) console.log("Second")
5) second() popped
6) first() popped
*/


/*
============================================================
2️ WEB APIs (BROWSER ENVIRONMENT)
============================================================

- NOT part of JavaScript engine
- Provided by browser (or Node.js runtime)

Handles:
✔ setTimeout
✔ setInterval
✔ DOM events
✔ fetch API

JS delegates async tasks to Web APIs
*/


/*
============================================================
3️ CALLBACK QUEUE (MACROTASK QUEUE)
============================================================

- Stores callbacks from:
✔ setTimeout
✔ setInterval
✔ UI events

These are called "Macrotasks"

Executed ONLY when:
Call stack is empty
All microtasks are completed
*/


/*
============================================================
4️ MICROTASK QUEUE (HIGH PRIORITY QUEUE)
============================================================

- Stores:
✔ Promise.then()
✔ catch()
✔ finally()
✔ queueMicrotask()

Microtasks ALWAYS execute before macrotasks
*/


/*
============================================================
5️EVENT LOOP MECHANISM
============================================================

Event Loop continuously checks:

1) Is Call Stack empty?
2) If YES:
   → Execute ALL microtasks
3) Then:
   → Execute ONE macrotask
4) Repeat

FLOW:
Call Stack → Microtask Queue → Callback Queue
*/


/*
============================================================
EXAMPLE 1 – BASIC ORDER
============================================================
*/

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/*
EXPECTED OUTPUT:
Start
End
Promise
Timeout

WHY?
1) Sync code runs first → Start, End
2) Promise → Microtask
3) setTimeout → Macrotask
*/


/*
============================================================
EXAMPLE 2 – MULTIPLE MICROTASKS
============================================================
*/

Promise.resolve().then(() => console.log("P1"));
Promise.resolve().then(() => console.log("P2"));

setTimeout(() => console.log("T1"), 0);

console.log("Sync");

/*
OUTPUT:
Sync
P1
P2
T1

All microtasks run BEFORE macrotask
*/


/*
============================================================
EXAMPLE 3 – NESTED TASKS
============================================================
*/

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");

    Promise.resolve().then(() => {
        console.log("Promise inside Timeout");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

console.log("End");

/*
OUTPUT:
Start
End
Promise 1
Timeout 1
Promise inside Timeout
*/


/*
============================================================
EXAMPLE 4 – queueMicrotask
============================================================
*/

console.log("A");

queueMicrotask(() => {
    console.log("Microtask");
});

setTimeout(() => {
    console.log("Macrotask");
}, 0);

console.log("B");

/*
OUTPUT:
A
B
Microtask
Macrotask
*/

/*
============================================================
IMPORTANT RULES (REMEMBER THIS!)
============================================================

✔ Synchronous code runs FIRST
✔ Microtasks run BEFORE macrotasks
✔ Event loop waits for call stack to be empty
✔ setTimeout(..., 0) is NOT immediate
✔ Microtasks run COMPLETELY before next macrotask

============================================================
COMMON MISTAKES
============================================================
*/

//Thinking setTimeout runs immediately
//Ignoring Promise priority
//Confusing execution order


/*
============================================================
REAL-WORLD UNDERSTANDING
============================================================

- API calls → Promises → Microtasks
- Timers → Macrotasks
- UI events → Macrotasks

Event loop ensures non-blocking execution
Enables smooth UI and scalable backend

============================================================
BEST PRACTICES
============================================================

✔ Prefer async/await (uses microtasks)
✔ Avoid blocking code
✔ Understand execution order for debugging
✔ Use microtasks wisely (avoid infinite loops)

============================================================
KEY TAKEAWAYS – DAY 21
============================================================

✔ Call stack executes synchronous code
✔ Web APIs handle async work
✔ Microtask queue has higher priority
✔ Callback queue handles timers/events
✔ Event loop controls execution flow

This is CORE JavaScript mastery

| Feature       | Microtask                      | Macrotask               |
| ------------- | ------------------------------ | ----------------------- |
| Priority      | High                           | Low                     |
| When executed | Immediately after current code | After microtasks finish |
| Queue name    | Microtask Queue                | Callback Queue          |
| Runs how many | ALL at once                    | ONE at a time           |
| Examples      | Promise.then, catch, finally   | setTimeout, setInterval |
| Speed         | Faster                         | Slower                  |


Real-world Mapping

| Scenario               | Type      |
| ---------------------- | --------- |
| API response (Promise) | Microtask |
| Timer (setTimeout)     | Macrotask |
| Button click event     | Macrotask |

One-line Memory Trick

“Promises first, timers later”

Interview-Level Insight

If microtasks keep adding more microtasks →
Macrotasks can get delayed (called starvation)

*/