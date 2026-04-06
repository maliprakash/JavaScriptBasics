/*
============================================================
Day 6 – Control Flow (Real Logic Building)
============================================================

Today you stop writing “statements”… and start writing decisions.

Control flow is how programs think.

Without control flow → your code runs top to bottom.
With control flow → your code chooses paths.

============================================================
What is Control Flow?
============================================================

Control flow determines:

- What should run?
- When should it run?
- Under what condition?
*/


/*
============================================================
1️⃣ if Statement – The Foundation of Logic
============================================================

Syntax:
if (condition) {
  // runs if condition is true
}

Important Truth:
- The condition must evaluate to boolean (true/false)
- JavaScript also supports truthy & falsy values
*/

let age = 18;

if (age >= 18) {
  console.log("You can vote");
}

// If condition is true → block runs
// If false → block is skipped



/*
============================================================
2️⃣ if...else – Two Paths
============================================================

Syntax:
if (condition) {
  // if true
} else {
  // if false
}
*/

let temperature = 35;

if (temperature > 30) {
  console.log("It's hot");
} else {
  console.log("It's not hot");
}

// Only ONE block runs



/*
============================================================
3️⃣ if...else if...else – Multiple Conditions
============================================================
*/

let score = 80;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

/*
Important:
- Conditions are checked top to bottom
- First true condition stops execution
- Order matters!
*/


/*
============================================================
Logical Operators Inside Conditions
============================================================
*/

// AND (&&) → Both must be true
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed");
}

// OR (||) → At least one must be true
let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
  console.log("Access granted");
}

// NOT (!) → Negates the value
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}



/*
============================================================
Real Logic Example (Login System)
============================================================
*/

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

// Now you're thinking like a system



/*
============================================================
4️⃣ Nested if Statements
============================================================
*/

let userAge = 20;
let userHasID = true;

if (userAge >= 18) {
  if (userHasID) {
    console.log("You can enter");
  } else {
    console.log("ID required");
  }
}

/*
Nested logic = deeper decision trees
Avoid too much nesting — it becomes messy
*/


/*
============================================================
5️⃣ Ternary Operator (Shortcut for if-else)
============================================================

Syntax:
condition ? valueIfTrue : valueIfFalse;
*/

let checkAge = 16;

let message = checkAge >= 18 ? "Adult" : "Minor";
console.log(message);

/*
Same as:

if (checkAge >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}

Use ternary only for simple conditions
*/


/*
============================================================
6️⃣ switch Statement
============================================================

Used when checking one variable against many fixed values

Syntax:
switch (expression) {
  case value1:
    break;
  case value2:
    break;
  default:
}
*/

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start work");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;

  default:
    console.log("Regular day");
}

/*
Why break is important:
Without break → fall-through happens
Sometimes useful, often dangerous
*/


/*
============================================================
When to Use What?
============================================================

Simple true/false → if
Two choices → if...else
Multiple ranges → if...else if
One variable match → switch
Quick assignment → ternary
*/


/*
============================================================
Common Beginner Mistakes
============================================================
*/

// ❌ Using = instead of ===
// if (age = 18) { }  // WRONG

// ✅ Correct:
if (age === 18) {
  console.log("Correct comparison");
}


// ❌ Forgetting braces
if (age > 18)
  console.log("Adult");
  console.log("Welcome"); // always runs

// ✅ Always use {}
if (age > 18) {
  console.log("Adult");
  console.log("Welcome");
}


// ❌ Relying on coercion unknowingly
if ("0") {
  console.log("Runs because '0' is truthy");
}



/*
============================================================
How Programs Actually Think
============================================================
*/

let cartTotal = 120;
let isMember = true;

if (cartTotal > 100 && isMember) {
  console.log("Free shipping + 10% discount");
}

/*
This is how systems like:
- Amazon
- Netflix
- Banking apps
- Games

...make decisions
*/


/*
============================================================
Mental Model Upgrade
============================================================

Think of control flow as:

"Branching paths in a decision tree"

Every condition splits reality into two possible futures

You're not writing code.
You're designing decision systems.
*/


/*
============================================================
Practice Challenges (Do Not Skip)
============================================================

// 1) Check if number is:
//    - Positive
//    - Negative
//    - Zero

// 2) Build login system with:
//    - Username
//    - Password
//    - Account locked condition

// 3) Use switch:
//    Month number → Month name

// 4) Create grading system:
//    90+ → A
//    80–89 → B
//    70–79 → C
//    Below 70 → Fail
*/


/*
============================================================
What You’ve Mastered So Far
============================================================

✔ Variables
✔ Data types
✔ Type conversion
✔ Operators
✔ Control flow

You now have the foundation to build real programs.
*/