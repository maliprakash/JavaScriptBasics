/*
============================================================
EVENT LOOP – 10 TRICKY INTERVIEW QUESTIONS
============================================================
Focus:
✔ Microtask vs Macrotask
✔ Execution order
✔ Real interview patterns
============================================================
*/


/*
============================================================
Q1
============================================================
*/

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/*
OUTPUT:
Start
End
Promise
Timeout
*/


/*
============================================================
Q2
============================================================
*/

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => console.log("P1"));

Promise.resolve().then(() => console.log("P2"));

console.log("Sync");

/*
OUTPUT:
Sync
P1
P2
T1
*/


/*
============================================================
Q3
============================================================
*/

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
    console.log("C");
    Promise.resolve().then(() => console.log("D"));
});

console.log("E");

/*
OUTPUT:
A
E
C
D
B
*/


/*
============================================================
Q4
============================================================
*/

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("Timeout 2"), 0);
});

console.log("End");

/*
OUTPUT:
Start
End
Promise 1
Timeout 1
Timeout 2
*/


/*
============================================================
Q5
============================================================
*/

console.log("X");

queueMicrotask(() => console.log("Microtask"));

setTimeout(() => console.log("Macrotask"), 0);

console.log("Y");

/*
OUTPUT:
X
Y
Microtask
Macrotask
*/


/*
============================================================
Q6
============================================================
*/

console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => console.log("3"));
}, 0);

Promise.resolve().then(() => console.log("4"));

console.log("5");

/*
OUTPUT:
1
5
4
2
3
*/


/*
============================================================
Q7
============================================================
*/

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
    .then(() => console.log("Promise 1"))
    .then(() => console.log("Promise 2"));

console.log("End");

/*
OUTPUT:
Start
End
Promise 1
Promise 2
Timeout
*/


/*
============================================================
Q8
============================================================
*/

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
    console.log("C");
    setTimeout(() => console.log("D"), 0);
});

console.log("E");

/*
OUTPUT:
A
E
C
B
D
*/


/*
============================================================
Q9
============================================================
*/

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");
    return Promise.resolve();
}).then(() => {
    console.log("Promise 2");
});

setTimeout(() => console.log("Timeout"), 0);

console.log("End");

/*
OUTPUT:
Start
End
Promise 1
Promise 2
Timeout
*/


/*
============================================================
Q10
============================================================
*/

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
    console.log("3");
    queueMicrotask(() => console.log("4"));
});

console.log("5");

/*
OUTPUT:
1
5
3
4
2
*/


/*
============================================================
FINAL RULES (REMEMBER THIS!)
============================================================

✔ Sync code runs first
✔ Microtasks run before macrotasks
✔ All microtasks finish before next macrotask
✔ setTimeout is always delayed
✔ Promises have highest priority

============================================================
INTERVIEW TIP
============================================================

Always break problem into steps:

1) Run sync
2) Add microtasks
3) Add macrotasks
4) Execute microtasks first
5) Then macrotasks


VISUAL EVENT LOOP DIAGRAM



        ┌──────────────────────┐
        │      CALL STACK      │
        │ (Executes Sync Code) │
        └─────────┬────────────┘
                  │
                  ▼
        ┌──────────────────────┐
        │   MICROTASK QUEUE    │ HIGH PRIORITY
        │ (Promises, queueMicrotask)
        └─────────┬────────────┘
                  │
                  ▼
        ┌──────────────────────┐
        │   MACROTASK QUEUE    │
        │ (setTimeout, setInterval)
        └─────────┬────────────┘
                  │
                  ▼
        ┌──────────────────────┐
        │     EVENT LOOP       │
        │ (Traffic Controller) │
        └──────────────────────┘
Master this → you crack interviews
*/