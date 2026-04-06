/*
============================================================
DAY 8 – ARRAYS (VERY IMPORTANT + REAL USE CASES)
============================================================

WHAT IS AN ARRAY?

- An array is a collection of multiple values stored in a single variable.
- Values are stored in indexed positions (starting from 0).

Example:
[10, 20, 30]

Index:
0 → 10
1 → 20
2 → 30

WHY ARRAYS ARE IMPORTANT?

Arrays are used everywhere:
- API responses
- Database records
- Lists of users/products
- Data processing

============================================================
CREATING ARRAYS
============================================================
*/

let numbers = [10, 20, 30, 40];
console.log(numbers);

let names = ["Prakash", "Amit", "Ravi"];
console.log(names);

// Mixed array (allowed in JS)
let mixed = [10, "Hello", true];
console.log(mixed);


/*
============================================================
ACCESSING ARRAY VALUES
============================================================
*/

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

// Accessing last element
console.log(fruits[fruits.length - 1]);


/*
============================================================
MODIFYING ARRAY VALUES
============================================================
*/

fruits[1] = "Orange";
console.log(fruits);

// Arrays are mutable (can be changed)


/*
============================================================
IMPORTANT ARRAY PROPERTIES
============================================================
*/

console.log(fruits.length); // Number of elements


/*
============================================================
ADDING & REMOVING ELEMENTS
============================================================
*/

// push → adds at end
fruits.push("Grapes");
console.log(fruits);

// pop → removes last element
fruits.pop();
console.log(fruits);

// unshift → adds at beginning
fruits.unshift("Pineapple");
console.log(fruits);

// shift → removes first element
fruits.shift();
console.log(fruits);


/*
============================================================
LOOPING THROUGH ARRAYS
============================================================
*/

// Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// Using for...of (recommended)
for (let fruit of fruits) {
    console.log("For...of:", fruit);
}


/*
============================================================
IMPORTANT ARRAY METHODS
============================================================
*/

let nums = [1, 2, 3, 4, 5];

/*
forEach → executes function for each element
*/
nums.forEach(function(num) {
    console.log("forEach:", num);
});


/*
map → returns NEW array (transformation)
*/
let doubled = nums.map(function(num) {
    return num * 2;
});
console.log("Mapped:", doubled);


/*
filter → returns filtered array
*/
let evenNumbers = nums.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);


/*
reduce → reduces array to single value
*/
let total = nums.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);

console.log("Sum:", total);


/*
find → returns first matching element
*/
let found = nums.find(function(num) {
    return num > 3;
});
console.log("Found:", found);


/*
some → checks if ANY element matches
*/
console.log(nums.some(num => num > 4)); // true


/*
every → checks if ALL elements match
*/
console.log(nums.every(num => num > 0)); // true


/*
============================================================
slice vs splice (VERY IMPORTANT)
============================================================
*/

let arr = [10, 20, 30, 40, 50];

/*
slice → does NOT modify original array
*/
let sliced = arr.slice(1, 3);
console.log("Slice:", sliced);
console.log("Original:", arr);

/*
splice → modifies original array
*/
arr.splice(1, 2);
console.log("Splice:", arr);


/*
============================================================
ARRAY OF OBJECTS (REAL-WORLD DATA)
============================================================
*/

let users = [
    { name: "Prakash", age: 25 },
    { name: "Amit", age: 30 },
    { name: "Ravi", age: 20 }
];

// Accessing data
users.forEach(user => {
    console.log(user.name, user.age);
});

// Filtering users
let adults = users.filter(user => user.age >= 25);
console.log("Adults:", adults);


/*
============================================================
SPREAD OPERATOR (...)
============================================================
*/

let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = [...arr1, ...arr2];
console.log("Combined:", combined);


/*
============================================================
ARRAY DESTRUCTURING
============================================================
*/

let colors = ["Red", "Green", "Blue"];

let [first, second] = colors;
console.log(first, second);


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Accessing wrong index
console.log(fruits[10]); // undefined

// ❌ Forgetting return in map
let wrong = nums.map(num => {
    num * 2; // no return
});
console.log(wrong); // [undefined,...]


/*
============================================================
BEST PRACTICES
============================================================

✔ Use map for transformation
✔ Use filter for selection
✔ Use reduce for aggregation
✔ Use for...of for simple loops
✔ Avoid modifying original arrays unnecessarily

============================================================
KEY TAKEAWAYS – DAY 8
============================================================

✔ Arrays store multiple values
✔ Index starts from 0
✔ Arrays are mutable
✔ map, filter, reduce are most important
✔ slice vs splice difference
✔ Arrays of objects are used in real-world apps

Arrays are backbone of data handling in JavaScript.
*/