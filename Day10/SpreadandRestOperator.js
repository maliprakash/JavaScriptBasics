//The spread (...) and rest (...) operators in JavaScript look the same but serve different purposes based on where they are used.

// Syntax: same 3 dots (...) but context matters
// Spread: ...arrayOrObject
// Rest: function(...args) {}

// Spread operator is used to expand elements of an array or properties of an object into individual elements copying arrays/objects, merging arrays/objects, and passing elements as function arguments.

// Rest operator is used in function parameters to collect all remaining arguments into an array. It allows you to handle functions with variable number of arguments.

/*

| Feature   | Spread (`...`)                  | Rest (`...`)                   |
| --------- | ------------------------------- | ------------------------------ |
| Purpose   | Expand values                   | Collect values                 |
| Usage     | Arrays, Objects, Function calls | Function params, Destructuring |
| Direction | Inside → Outside                | Outside → Inside               |
| Example   | `Math.max(...nums)`             | `function sum(...args) {}`     |


============================================================
SPREAD OPERATOR
============================================================
*/
// 1   Copying arrays
let original = [1, 2, 3];
let copy = [...original];
console.log("Copy:", copy);

// 2   Merging arrays
let arrr = [4, 5];
let merged = [...original, ...arrr];
console.log("Merged:", merged);

// 3   Copying objects
let obj1 = { a: 1, b: 2 };
let objCopy = { ...obj1 };
console.log("Object Copy:", objCopy);

// 4   Merging objects
let obj2 = { c: 3 };
let mergedObj = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObj);

//5 Pass Array as Function Arguments
function sum(a, b, c) {
    return a + b + c;
}
let nums1 = [1, 2, 3];
console.log("Sum of nums:", sum(...nums1)); // Spread to pass elements as individual arguments

let nums2 = [1, 2, 3];
console.log("Max:", Math.max(...nums2)); // Spread to pass elements as individual arguments

/*
============================================================
REST OPERATOR
============================================================
*/

console.log("Rest Operator Example:");

//1 Function Parameters

function sumAll(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

console.log("Sum All:", sumAll(1, 2, 3, 4));

// 2 Destructuring Arrays

let [first, ...rest] = [10, 20, 30, 40];
console.log("First:", first);
console.log("Rest:", rest);

// 3 Destructuring Objects

let { a, ...others } = { a: 1, b: 2, c: 3 };
console.log("a:", a);
console.log("Others:", others);     

// 4 Function with Fixed + Rest Parameters

function introduce(name, ...skills) {
  console.log(name);
  console.log(skills);
}

introduce("Prakash", "Java", "JS", "API");
// Prakash
// ["Java", "JS", "API"]

// 5 Ignore Some Object Properties

const user = {
  id: 1,
  name: "Prakash",
  password: "12345",
  role: "QA"
};

const { password, ...safeUser } = user;
console.log(safeUser);
// { id: 1, name: "Prakash", role: "QA" }

//-> Very useful for removing sensitive data

// 6 Dynamic Function Arguments (Real Use Case)

function logAll(...args) {
  args.forEach(arg => console.log(arg));
}
logAll("API", "UI", "Automation");

//7 Combine with Spread (Advanced)
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

const arr = [10, 20, 30];

console.log(sum(...arr)); // 60


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Using spread on non-iterable
// console.log(...123); // TypeError

// ❌ Using rest without function parameters
// let [a, ...rest] = 1; // TypeError

/*
============================================================
BEST PRACTICES
============================================================
*/

// ✔ Use spread for copying and merging arrays/objects
// ✔ Use rest for functions with variable arguments
// ✔ Avoid modifying original arrays/objects when using spread
// ✔ Be cautious of shallow copy when using spread with nested objects

/*
============================================================
KEY TAKEAWAYS – DAY 10
============================================================
*/

// ✔ Spread operator expands elements/properties
// ✔ Rest operator collects arguments into an array
// ✔ Both use ... syntax but different contexts
// ✔ Spread is for arrays/objects, rest is for function parameters        