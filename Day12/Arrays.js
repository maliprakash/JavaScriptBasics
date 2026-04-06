/*
==========================================
Day 12 – Arrays in JavaScript
==========================================

🔹 What is an Array?
An array is a collection of elements stored in a single variable.

Example:
[1, 2, 3, 4]

👉 Used in:
- API responses (list of data)
- UI lists
- Data processing

------------------------------------------
🔹 Key Concepts Covered:
1. Creating arrays
2. Accessing values
3. Looping
4. map()
5. filter()
6. reduce()
7. find()
8. some() / every()
9. Real QA examples
------------------------------------------
*/



// ======================================
// 1. Creating Arrays
// ======================================

const numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);


// ======================================
// 2. Accessing Values
// ======================================

console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);


// ======================================
// 3. Looping Arrays
// ======================================

// Traditional loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Loop:", numbers[i]);
}

// forEach
numbers.forEach(num => console.log("forEach:", num));


// ======================================
// 4. map() – Transform Data
// ======================================

/*
map() returns a new array after modifying each element
*/

const doubled = numbers.map(num => num * 2);

console.log("Doubled:", doubled);


// ======================================
// 5. filter() – Select Data
// ======================================

/*
filter() returns elements that match condition
*/

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);


// ======================================
// 6. reduce() – Aggregate Data
// ======================================

/*
reduce() reduces array to single value
*/

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Sum:", sum);


// ======================================
// 7. find() – Get First Match
// ======================================

const found = numbers.find(num => num > 3);

console.log("First > 3:", found);


// ======================================
// 8. some() and every()
// ======================================

//both some() and every() always return a boolean (true or false)

// some()  → TRUE if at least one match
// every() → TRUE if all match

// some → at least one matches
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has Even:", hasEven);

// every → all must match
const allPositive = numbers.every(num => num > 0);
console.log("All Positive:", allPositive);


// ======================================
// 9. Real QA Example (API Data)
// ======================================

const orders = [
  { id: 1, status: "DELIVERED", amount: 500 },
  { id: 2, status: "PENDING", amount: 300 },
  { id: 3, status: "DELIVERED", amount: 700 }
];

// Filter delivered orders
const deliveredOrders = orders.filter(o => o.status === "DELIVERED");

console.log("Delivered Orders:", deliveredOrders);

// Get all order IDs
const orderIds = orders.map(o => o.id);

console.log("Order IDs:", orderIds);

// Total amount
const totalAmount = orders.reduce((sum, o) => sum + o.amount, 0);

console.log("Total Amount:", totalAmount);


// ======================================
// 10. Chaining (Very Important)
// ======================================

const result = orders
  .filter(o => o.status === "DELIVERED")
  .map(o => o.amount)
  .reduce((sum, amt) => sum + amt, 0);

console.log("Delivered Total Amount:", result);


// ======================================
// Practice Section
// ======================================

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 25 }
];

// 1. Get all names
const names = users.map(u => u.name);
console.log("Names:", names);

// 2. Filter age > 25
const above25 = users.filter(u => u.age > 25);
console.log("Age > 25:", above25);

// 3. Total age
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log("Total Age:", totalAge);


/*
==========================================
🧠 Summary
==========================================

- map() → transform
- filter() → select
- reduce() → calculate
- find() → first match
- some() → any match
- every() → all match

👉 Arrays + Objects = Core JavaScript
👉 Very important for API testing & interviews
*/