/*
============================================================
DAY 7 – LOOPS (DEEP UNDERSTANDING)
============================================================

WHAT IS A LOOP?

- A loop is used to execute a block of code repeatedly.
- Instead of writing same code multiple times,
  loops automate repetition.

WHY LOOPS ARE IMPORTANT?

Loops are used everywhere:
- Processing arrays
- Iterating database records
- API data handling
- Automation tasks

============================================================
TYPES OF LOOPS IN JAVASCRIPT
============================================================

1️⃣ for loop
2️⃣ while loop
3️⃣ do...while loop
4️⃣ for...of loop
5️⃣ for...in loop

============================================================
1️⃣ FOR LOOP (MOST USED)
============================================================
/Users/prakashmali/Desktop/AI Course/5RcHe0HzyRs3EPCmLgZBjVzT0A7wQGYYGKaZdEQst4X1GZLlpdQU71T7J7fop9tYCNLTggicoNtQEzEaY4VyGUB8e5W54mYBe4URuULYjscaHPwBdDy4q3fOk4NrqXSRJsZIgRHud2-TFmBDXw_x_ZThl-TNmeObdR_N3dIAY8ioNabBo8Enia2uDAdLn3Zg.jpeg

Syntax:
for (initialization; condition; update) {
    // code
}

Flow:
1. Initialization runs once
2. Condition checked
3. Code executes if true
4. Update runs
5. Repeat
*/

for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

/*
Output:
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5
*/


/*
============================================================
REAL EXAMPLE – SUM OF NUMBERS
============================================================
*/

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i; // sum = sum + i
}

console.log("Total Sum:", sum);


/*
============================================================
BREAK & CONTINUE (IMPORTANT)
============================================================
*/

// break → stops loop completely
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Break Example::::::::", i);
}

// continue → skips current iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Continue Example:", i);
}


/*
============================================================
2️⃣ WHILE LOOP
============================================================

Runs while condition is true.

Syntax:
while (condition) {
    // code
}
*/

let count = 1;

while (count <= 3) {
    console.log("While Loop:", count);
    count++;
}


/*
============================================================
3️⃣ DO...WHILE LOOP
============================================================

- Runs at least once (IMPORTANT)
- Condition checked AFTER execution

Syntax:
do {
    // code
} while (condition)
*/

let num = 1;

do {
    console.log("Do While:", num);
    num++;
} while (num <= 3);


/*
============================================================
4️⃣ FOR...OF LOOP (ARRAYS)
============================================================

Used to iterate over iterable values (arrays, strings).
*/

let numbers = [10, 20, 30];

for (let value of numbers) {
    console.log("For...of:", value);
}

let inputName = "Prakash";

for (let char of inputName) {
  console.log(char);
}

/*
============================================================
5️⃣ FOR...IN LOOP (OBJECTS)
============================================================

Used to iterate over object keys.
*/

let user = {
    name: "Prakash",
    age: 25
};

for (let key in user) {
    console.log(key, ":", user[key]);
}


/*
============================================================
NESTED LOOPS
============================================================

Loop inside another loop.
*/

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}


/*
============================================================
INFINITE LOOP (DANGEROUS)
============================================================

// Example (DO NOT RUN):

while (true) {
    console.log("Infinite Loop");
}

Always ensure loop has exit condition.
*/


/*
============================================================
REAL-WORLD EXAMPLE
============================================================

Processing list of users:
*/

let users = ["Amit", "Ravi", "Sneha"];

for (let i = 0; i < users.length; i++) {
    console.log("User:", users[i]);
}


/*
============================================================
BEST PRACTICES
============================================================

✔ Use for loop when iteration count is known
✔ Use while when condition-based loop needed
✔ Use for...of for arrays
✔ Use for...in for objects
✔ Avoid infinite loops
✔ Keep loops simple and readable

============================================================
KEY TAKEAWAYS – DAY 7
============================================================

✔ Loops automate repetition
✔ for loop is most commonly used
✔ while and do-while depend on condition
✔ for...of for arrays
✔ for...in for objects
✔ break stops loop
✔ continue skips iteration

Loops are core for automation and data processing.
*/