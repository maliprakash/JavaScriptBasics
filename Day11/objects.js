/*
==========================================
Day 11 – Objects in JavaScript
==========================================

🔹 What is an Object?
An object is a collection of key-value pairs used to store data.

Example:
{
  key: value
}

Objects are heavily used in:
- API responses (JSON)
- Real-world entities (user, order, product)
- Automation testing (request/response validation)

------------------------------------------
🔹 Key Concepts Covered:
1. Creating objects
2. Accessing values
3. Add / Update / Delete
4. Nested objects
5. Methods (functions inside objects)
6. Destructuring
7. Dynamic keys
8. Looping objects
9. Spread operator
10. Optional chaining
11. Real-world QA example
------------------------------------------
*/


// ==============================
// 1. Creating an Object
// ==============================

const user = {
  name: "Prakash",
  age: 25,
  role: "QA"
};

console.log("User Object:", user);


// ==============================
// 2. Accessing Values
// ==============================

// Dot notation → most common
console.log("Name:", user.name);

// Bracket notation → useful for dynamic keys
console.log("Age:", user["age"]);


// ==============================
// 3. Add / Update / Delete
// ==============================

// Add new property
user.city = "Pune";

// Update existing property
user.age = 26;

// Delete property
delete user.role;

console.log("After Add/Update/Delete:", user);


// ==============================
// 4. Nested Objects
// ==============================

const order = {
  id: 101,
  customer: {
    name: "Prakash",
    address: {
      city: "Pune",
      pincode: 411001
    }
  }
};

// Access deeply nested value -> Dot notation
console.log("Customer City:", order.customer.address.city);


// ==============================
// 5. Object Methods
// ==============================

/*
Objects can also contain functions.
These are called methods.
*/

const person = {
  name: "Prakash",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

person.greet();


// ==============================
// 6. Object Destructuring
// ==============================

/*
Extract values from object into variables
*/

const emp = { name: "Prakash", age: 25 };

const { name, age } = emp;

console.log("Destructured Name:", name);
console.log("Destructured Age:", age);


// ==============================
// 7. Dynamic Keys and Values in objects
// ==============================

/*
Sometimes keys are not fixed - we can use variables as keys using bracket notation or computed property names. This is useful when we want to create objects with dynamic keys or when the key names are not known beforehand.
also 
*/

const key = "order status";
const value = "DELIVERED";

const shipment = {
  id: 1,
  [key]: [value]
};


console.log("Shipment status:", shipment);


// ==============================
// 8. Loop Through Object
// ==============================

const details = { name: "Prakash", age: 25 };

for (let key in details) {
  console.log(key, "8.:", details[key]);
}


// ==============================
// 9. Spread Operator in Objects
// ==============================

// ❓ Are duplicate keys allowed in JavaScript objects?
// Yes, you can write duplicate keys, but only the last value will be kept.
// The last key overrides the previous one

/*
Used to copy or merge objects
*/

const base = { id: 1, status: "NEW" };

const updated = {
  ...base,
  status1: "SHIPPED"
};

console.log("Merged Object:", updated);


// ==============================
// 10. Optional Chaining (Safe Access)
// ==============================

/*
Prevents runtime errors if property is undefined Safe access
*/

const response = {
  status: 200,
  data: {
    orderId: 123
  }
};

console.log("Order ID:", response.data?.orderId);

// Safe access (no error even if not present)
console.log("City:", response.data?.address?.city);


// ==============================
// 11. Real QA / API Example
// ==============================

/*
Objects are widely used in API testing
*/

if (response.status === 200) {
  console.log("API Success");
  console.log("Order ID:", response.data.orderId);
}

// ==============================
// Practice Section
// ==============================

/*
Try modifying this object
*/

const practiceOrder = {
  id: 500,
  status: "PENDING",
  customer: {
    name: "Test User",
    city: "Mumbai"
  }
};

// Update status
practiceOrder.status = "DELIVERED";

// Loop through keys
for (let key in practiceOrder) {
  console.log("Key:", key);
}

// Destructuring
const { id, status } = practiceOrder;

console.log("Practice ID:", id);
console.log("Practice Status:", status);


/*
==========================================
🧠 Summary
==========================================

- Objects store structured data
- Use dot/bracket to access values
- Support nesting (complex data)
- Methods = functions inside objects
- Destructuring simplifies extraction
- Spread helps copy/merge objects
- Optional chaining prevents errors

👉 Master objects = strong JavaScript foundation
*/