/*
============================================================
DAY 16 – ERROR HANDLING (VERY IMPORTANT)
============================================================

Only runtime errors can be caught using try/catch. Syntax errors will prevent the code from running at all, so they cannot be caught.


TOPICS COVERED:
✔ try / catch
✔ throw
✔ Custom Errors
✔ finally block

WHY ERROR HANDLING IS IMPORTANT?

- Prevents application crash
- Helps debug issues
- Improves user experience
- Critical in backend APIs

============================================================
1️ try / catch
============================================================

- Used to handle runtime errors safely
- Code inside try is executed
- If error occurs → catch block runs
*/

try {
    let result = 10 / 0;
    console.log("Result:", result);

    // force error
    undefinedVariable;
} catch (error) {
    console.log("Error caught:", error.message,
         error.name,
         error.stack);
}
/*
What is error here?

error is a variable that holds the error object thrown by JavaScript

When something goes wrong inside try, JavaScript creates an Error Object and passes it to catch.
The error object contains details about the error, such as:
- name: type of error (e.g., ReferenceError, TypeError)
- message: description of the error
- stack: stack trace for debugging

In the example, when undefinedVariable is accessed, it throws a ReferenceError. The catch block receives this error object and logs its message.

error is just a variable name
It contains the actual error object

catch (e)
catch (err)
catch (myError)

NOTE = No, it is NOT mandatory to use error variable in catch.

*/
/*
============================================================
2️ THROW (MANUAL ERROR)
============================================================

- Used to create custom error conditions
*/

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18+");
    }

    console.log("Access granted");
}

try {
    checkAge(16);
} catch (error) {
    console.log("Custom Error:", error.message);
}


/*
============================================================
3️ FINALLY BLOCK
============================================================

- Always executes (whether error occurs or not)
- Used for cleanup tasks
*/

try {
    console.log("Trying something...");
} catch (error) { //catch handles ONLY runtime errors (exceptions) that occur inside the try block.
    console.log("Error occurred");
} finally {
    console.log("This always runs");
}


/*
============================================================
4️ CUSTOM ERROR CLASS (ADVANCED)
============================================================

- Create your own error type
*/

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required");
    }
}

try {
    validateUser({});
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation Error:", error.message);
    } else {
        console.log("Other Error:", error.message);
    }
}


/*
============================================================
5️ try/catch WITH ASYNC/AWAIT
============================================================
*/

async function fetchData() {
    try {
        let result = await Promise.reject("API Failed");
        console.log(result);
    } catch (error) {
        console.log("Async Error:", error);
    }
}

fetchData();


/*
============================================================
6️ REAL-WORLD EXAMPLE
============================================================
*/

function withdraw(balance, amount) {
    try {
        if (amount > balance) {
            throw new Error("Insufficient balance");
        }

        console.log("Withdrawal successful");
    } catch (error) {
        console.log("Transaction failed:", error.message);
    } finally {
        console.log("Transaction completed");
    }
}

withdraw(1000, 1500);


/*
============================================================
COMMON MISTAKES
============================================================
*/

// Not using try/catch for risky code
// Ignoring error message
// Catching error but not handling properly


/*
============================================================
BEST PRACTICES
============================================================

✔ Always handle errors properly
✔ Use meaningful error messages
✔ Use custom errors for clarity
✔ Use finally for cleanup
✔ Handle async errors with try/catch

============================================================
KEY TAKEAWAYS – DAY 16
============================================================

✔ try/catch prevents crashes
✔ throw creates custom errors
✔ finally always runs
✔ Custom errors improve debugging
✔ Async error handling is critical

Error handling is MUST for production-level apps


Error vs error
Term	Meaning
Error	Built-in class (used to create error)
error	Variable (holds error object in catch

Error is used to CREATE error, error is used to CATCH error

throw new Error("User not found");
throw new Error("Invalid token");
throw new Error("Database failed");

*/