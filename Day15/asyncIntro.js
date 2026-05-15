/*
============================================================
DAY 17 – ASYNCHRONOUS JAVASCRIPT (INTRO)
============================================================

TOPICS COVERED:
✔ Synchronous vs Asynchronous
✔ setTimeout
✔ setInterval

This is the foundation for:
- API calls
- Timers
- Event handling
- Backend async logic

============================================================
1️ SYNCHRONOUS vs ASYNCHRONOUS
============================================================

SYNCHRONOUS:
- Code runs line by line
- Each task waits for previous task to finish
*/

console.log("Start");

console.log("Task 1");
console.log("Task 2");

console.log("End");

/*
Output:
Start
Task 1
Task 2
End
*/


/*
ASYNCHRONOUS:
- Does NOT block execution
- Tasks can run later
*/

console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 2000);

console.log("End");

/*
Output:
Start
End
Async Task (after 2 seconds)
*/


/*
============================================================
2️ setTimeout
============================================================

- Executes function AFTER delay
- Delay is in milliseconds (1000ms = 1 sec)
*/

setTimeout(() => {
    console.log("Runs after 1 second");
}, 1000);


/*
IMPORTANT:
- It does NOT pause code
- It schedules execution
*/


/*
============================================================
CLEARING setTimeout
============================================================
*/

let timeoutId = setTimeout(() => {
    console.log("This will NOT run");
}, 2000);

console.log("timeoutId : ", timeoutId);
clearTimeout(timeoutId);

/*
clearTimeout() is just a cancelling function.

It does not print anything
It does not return visible output
It simply stops the scheduled task
*/

/*
Real-World Use Cases
Cancel API retry
Cancel search request (debouncing)
Stop notification before showing
*/

/* clearTimeout() is like: Cancel the alarm before it rings */

/*
============================================================
3️ setInterval
============================================================

- Runs repeatedly after fixed time
*/

let count = 0;

let intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 1000);


/*
============================================================
REAL-WORLD EXAMPLES
============================================================

setTimeout:
- Delay API call
- Show notification after some time

setInterval:
- Live clock
- Polling APIs
- Auto-refresh data
*/


/*
============================================================
COMMON MISTAKES
============================================================
*/

// Expecting setTimeout to block code
// Forgetting clearInterval
// Using too many intervals (performance issue)


/*
============================================================
BEST PRACTICES
============================================================

✔ Always clear intervals when not needed
✔ Use setTimeout for one-time delay
✔ Use setInterval carefully
✔ Prefer async/await for API calls

============================================================
KEY TAKEAWAYS – DAY 15
============================================================

✔ JS is synchronous by default
✔ Async allows non-blocking behavior
✔ setTimeout runs once after delay
✔ setInterval runs repeatedly
✔ clearTimeout & clearInterval are important

Async JS is core for real-world applications
*/