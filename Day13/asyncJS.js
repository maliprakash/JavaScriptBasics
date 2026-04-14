/*
============================================================
DAY 13 – ASYNCHRONOUS JAVASCRIPT (VERY IMPORTANT 🔥)
============================================================

WHAT IS ASYNCHRONOUS JS?

- JavaScript is SINGLE-THREADED
- It executes one task at a time

BUT…

Some operations take time:
- API calls
- Database queries
- File reading
- Timers

Async JS allows:
👉 Non-blocking execution

============================================================
SYNCHRONOUS VS ASYNCHRONOUS
============================================================
*/

// Synchronous (blocking)
console.log("Start");

console.log("Task 1");
console.log("Task 2");

console.log("End");


// Asynchronous (non-blocking)
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
CALLBACKS
============================================================
A callback is a function passed as an argument to another function, which is executed after the completion of a specific task.
*/



function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Prakash", sayBye);

//Hello Prakash
//Goodbye!

/*Here:

sayBye is a callback function
It is passed to greet and executed later
*/

/*
============================================================
CALLBACK HELL (PROBLEM)
============================================================
*/

setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);

/*
This nested structure is hard to read and maintain.
Solution → Promises
*/


/*
============================================================
PROMISES (IMPORTANT)
============================================================

A Promise represents:
👉 Future value (resolved/rejected)

Promise States

A Promise has 3 states:

Pending ⏳ → initial state
Fulfilled ✅ → operation successful
Rejected ❌ → operation failed

*/

/*A Promise is an object that represents the future result of an asynchronous operation.

It’s like saying: “I promise I’ll give you a result later.”*/



let myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

//Consuming a Promise
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


/*
============================================================
PROMISE CHAINING
============================================================
*/

function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 1 done ........."), 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 2 done ........."), 1000);
    });
}

step1()
    .then(result => {
        console.log(result);
        return step2();
    })
    .then(result => {
        console.log(result);
    });


/*
============================================================
ASYNC / AWAIT (MODERN & CLEAN)
============================================================
*/

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User Data"), 1000);
    });
}

async function getUser() {
    console.log("Fetching...");

    let data = await fetchUser();

    console.log(data);
}

getUser();

/*
async → makes function return Promise
await → waits for Promise result
*/


/*
============================================================
TRY / CATCH WITH ASYNC
============================================================
*/

async function fetchDataWithError() {
    try {
        let result = await Promise.reject("Error occurred");
        console.log(result);
    } catch (error) {
        console.log("Caught:", error);
    }
}

fetchDataWithError();


/*
============================================================
PARALLEL EXECUTION (Promise.all)
============================================================
*/

let p1 = Promise.resolve("Task 1");
let p2 = Promise.resolve("Task 2");

Promise.all([p1, p2])
    .then(results => {
        console.log(results);
    });


/*
============================================================
EVENT LOOP (IMPORTANT CONCEPT)
============================================================

JavaScript handles async using:
- Call Stack
- Web APIs
- Callback Queue
- Event Loop

Flow:
1) Code goes to Call Stack
2) Async tasks handled by Web APIs
3) Callback goes to Queue
4) Event Loop pushes to stack when free

(Interview important topic 🔥)
*/


/*
============================================================
REAL-WORLD EXAMPLE (API CALL SIMULATION)
============================================================
*/

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Laptop", "Mobile", "Tablet"]);
        }, 1000);
    });
}

async function showProducts() {
    let products = await getProducts();

    products.forEach(p => console.log(p));
}

showProducts();


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Forgetting await
async function wrong() {
    let data = fetchUser(); // missing await
    console.log(data); // Promise object
}

// ❌ Not handling errors


/*
============================================================
BEST PRACTICES
============================================================

✔ Prefer async/await over callbacks
✔ Always use try/catch
✔ Avoid callback hell
✔ Use Promise.all for parallel calls
✔ Handle errors properly

============================================================
KEY TAKEAWAYS – DAY 13
============================================================

✔ JavaScript is single-threaded
✔ Async avoids blocking
✔ Callbacks → Promises → Async/Await evolution
✔ Event loop handles execution
✔ Async/Await is modern standard

This is CORE for backend development 
*/