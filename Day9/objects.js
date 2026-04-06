/*
============================================================
DAY 9 – OBJECTS (MOST IMPORTANT FOR REAL PROJECTS)
============================================================

WHAT IS AN OBJECT?

- An object is a collection of key-value pairs.
- It represents real-world entities.

Example:
User, Product, Order, API Response

Format:
{
   key: value
}

WHY OBJECTS ARE IMPORTANT?

Objects are used everywhere:
- Backend APIs return objects (JSON)
- Database records are objects
- Real-world modeling (user, cart, payment)

============================================================
CREATING OBJECTS
============================================================
*/

let user = {
    name: "Prakash",
    age: 25,
    isAdmin: false
};

console.log(user);


/*
============================================================
ACCESSING OBJECT VALUES
============================================================
*/

// Dot notation
console.log(user.name);

// Bracket notation
console.log(user["age"]);

// IMPORTANT:
// Use bracket when key is dynamic



/*
============================================================
ADDING & MODIFYING VALUES
============================================================
*/

user.city = "Pune"; // add new property
user.age = 30;      // update existing

console.log(user);


/*
============================================================
DELETING PROPERTY
============================================================
*/

delete user.isAdmin;
console.log(user);


/*
============================================================
NESTED OBJECTS
============================================================
*/

let employee = {
    name: "Prakash",
    address: {
        city: "Pune",
        country: "India"
    }
};

console.log(employee.address.city);


/*
============================================================
OBJECT METHODS (FUNCTION INSIDE OBJECT)
============================================================
*/

let person = {
    name: "Prakash",
    
    greet: function () {
        console.log("Hello " + this.name);
    }
};

person.greet();

/*
IMPORTANT:
- 'this' refers to current object
*/


/*
============================================================
OBJECT ITERATION
============================================================
*/

let product = {
    id: 101,
    name: "Laptop",
    price: 50000
};

for (let key in product) {
    console.log(key, ":", product[key]);
}


/*
============================================================
OBJECT METHODS (BUILT-IN)
============================================================
*/

console.log(Object.keys(product));   // ["id","name","price"]
console.log(Object.values(product)); // [101,"Laptop",50000]
console.log(Object.entries(product)); // [["id",101],...]



/*
============================================================
DESTRUCTURING (VERY IMPORTANT)
============================================================
*/

let student = {
    name: "Amit",
    age: 22
};

// Extract values
let { name, age } = student;

console.log(name, age);



/*
============================================================
SPREAD OPERATOR WITH OBJECTS
============================================================
*/

let obj1 = { a: 1 };
let obj2 = { b: 2 };

let combined = { ...obj1, ...obj2 };
console.log(combined);


/*
============================================================
SHALLOW COPY (IMPORTANT CONCEPT)
============================================================
*/

let original = { value: 100 };

let copy = { ...original };

copy.value = 200;

console.log(original.value); // 100
console.log(copy.value);     // 200

/*
But for nested objects:
*/

let nested = {
    inner: {
        count: 1
    }
};

let shallowCopy = { ...nested };

shallowCopy.inner.count = 5;

console.log(nested.inner.count); // 5 (shared reference)


/*
============================================================
OPTIONAL CHAINING (SAFE ACCESS)
============================================================
*/

let customer = {
    name: "Ravi"
};

console.log(customer.address?.city); // undefined (no error)


/*
============================================================
REAL-WORLD EXAMPLE (API DATA)
============================================================
*/

let users = [
    { name: "Prakash", age: 25 },
    { name: "Amit", age: 30 }
];

// Accessing API-like data
users.forEach(user => {
    console.log(user.name);
});


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Accessing undefined property
console.log(user.salary); // undefined

// ❌ Forgetting this keyword
let wrongObj = {
    name: "Test",
    greet: function () {
        console.log("Hello " + name); // ❌ error
    }
};


/*
============================================================
BEST PRACTICES
============================================================

✔ Use const for objects
✔ Use destructuring
✔ Use optional chaining for safety
✔ Avoid deep mutation
✔ Use meaningful key names

============================================================
KEY TAKEAWAYS – DAY 9
============================================================

✔ Objects store key-value pairs
✔ Dot & bracket access
✔ this keyword is important
✔ Object.keys(), values(), entries()
✔ Destructuring simplifies code
✔ Spread operator for copying
✔ Shallow copy behavior

Objects are foundation of backend & APIs.
*/