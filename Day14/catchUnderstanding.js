/*
============================================================
UNDERSTANDING: WHAT TYPES OF ERRORS catch CAN HANDLE
============================================================

MAIN RULE:

catch handles ONLY runtime errors (exceptions)
   that occur inside the try block

It does NOT handle:
   - Syntax errors (compile time)
   - Errors outside try
   - Async errors (without await)

============================================================
1️⃣ REFERENCE ERROR
============================================================
*/

try {
    console.log(x); // x is not defined
} catch (error) {
    console.log("Error Type:", error.name); // ReferenceError
    console.log("Message:", error.message);
}


/*
============================================================
2️⃣ TYPE ERROR
============================================================
*/

try {
    let num = 10;
    num(); // number is not a function
} catch (error) {
    console.log("Error Type:", error.name); // TypeError
}


/*
============================================================
3️⃣ SYNTAX ERROR (SPECIAL CASE)
============================================================

Normal syntax errors are NOT caught
because JS fails before execution

BUT inside eval → it can be caught
*/

try {
    eval("console.log('Hello'"); //missing bracket
} catch (error) {
    console.log("Error Type:", error.name); // SyntaxError
}


/*
============================================================
4️⃣ CUSTOM ERROR USING throw
============================================================
*/

try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Custom Error:", error.message);
}


/*
============================================================
5️⃣ LOGICAL ERROR (MANUAL THROW)
============================================================

Logical errors are NOT automatically caught
You must throw them manually
*/

function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient balance");
    }
    return "Success";
}

try {
    withdraw(100, 200);
} catch (error) {
    console.log("Handled Logical Error:", error.message);
}


/*
============================================================
ERRORS catch CANNOT HANDLE
============================================================
*/


/*
1. SYNTAX ERROR (NORMAL CODE)
*/

// let a = ;Syntax error
// JS will NOT run at all


/*
2. ERROR OUTSIDE try BLOCK
*/

try {
    console.log("Inside try");
} catch (e) {
    console.log("Caught");
}

// console.log(y); not caught (outside try)


/*
3. ASYNC ERROR (WITHOUT await)
*/

try {
    setTimeout(() => {
        throw new Error("Async Error");
    }, 1000);
} catch (error) {
    console.log("Will NOT run");
}

/*
Why?
- setTimeout runs later
- try/catch already finished execution
*/


/*
============================================================
CORRECT WAY TO HANDLE ASYNC ERROR
============================================================
*/

async function handleAsyncError() {
    try {
        await Promise.reject("Async Error");
    } catch (error) {
        console.log("Caught Async Error:", error);
    }
}

handleAsyncError();


/*
============================================================
SUMMARY (VERY IMPORTANT)
============================================================

✔ catch handles:
   - Runtime errors
   - ReferenceError
   - TypeError
   - Errors thrown using throw
   - Errors inside async/await

  catch does NOT handle:
   - Syntax errors (normal)
   - Errors outside try block
   - Async errors (without await)

============================================================
MENTAL MODEL
============================================================

"catch only catches errors that happen
    while code is EXECUTING inside try block"

============================================================
REAL-WORLD TIP (BACKEND)
============================================================

In backend (Node.js):
- Always wrap API logic in try/catch
- Always handle async errors using await
- Always send proper error response

Example:
*/

async function apiExample() {
    try {
        let data = await Promise.resolve("API Success");
        console.log(data);
    } catch (error) {
        console.log("API Error:", error);
    }
}

apiExample();

/*

What is Error here?

Error is a built-in constructor function (class) in JavaScript

What does this line do?
throw new Error("Insufficient balance");
Step-by-step:

1️ new Error("Insufficient balance")
Creates an Error Object

{
  name: "Error",
  message: "Insufficient balance",
  stack: "..." // execution trace
}

2️ throw
Stops execution immediately
Sends this error to the nearest catch

So answer to your question:

Error = built-in JavaScript error class

*/