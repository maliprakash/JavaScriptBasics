/*
============================================================
DAY 14 – OBJECT ADVANCED CONCEPTS
============================================================

TOPICS COVERED:
✔ Shallow Copy vs Deep Copy
✔ Object.assign()
✔ JSON cloning method
✔ Reference behavior

These concepts are VERY IMPORTANT for:
- Debugging real-world bugs
- Backend development
- Data handling

============================================================
1️⃣ REFERENCE BEHAVIOR (VERY IMPORTANT)
============================================================

In JavaScript:
- Primitive → copied by VALUE
- Objects → copied by REFERENCE
*/

let obj1 = { name: "Prakash" };
let obj2 = obj1; // reference copy

obj2.name = "Amit";

console.log(obj1.name); // Amit ❗
console.log(obj2.name); // Amit

/*
Both variables point to SAME memory location
*/


/*
============================================================
PRIMITIVE VS OBJECT COPY
============================================================
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20


/*
============================================================
2️⃣ SHALLOW COPY
============================================================

- Copies only first level
- Nested objects are still shared (reference)
*/

let original = {
    name: "Prakash",
    address: {
        city: "Pune"
    }
};

// Method 1: Spread operator
let shallowCopy1 = { ...original };

// Method 2: Object.assign
let shallowCopy2 = Object.assign({}, original);

// Modify nested value
shallowCopy1.address.city = "Mumbai";

console.log(original.address.city); // Mumbai ❗ (affected)

console.log(shallowCopy2.address.city); // Mumbai

/*
============================================================
3️⃣ OBJECT.ASSIGN()
============================================================

Used to copy properties from one or more objects
*/

let target = { a: 1 };
let source = { b: 2 };

let result = Object.assign(target, source);

console.log(result); // {a:1, b:2}

/*
IMPORTANT:
- It modifies target object
- Returns the modified target
*/


/*
============================================================
4️⃣ DEEP COPY
============================================================

- Creates completely independent copy
- Nested objects are NOT shared
*/


/*
METHOD: JSON CLONING
*/

let user = {
    name: "Prakash",
    address: {
        city: "Pune"
    }
};

let deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Delhi";

console.log(user.address.city); // Pune (unchanged)
console.log(deepCopy.address.city); // Delhi


/*
============================================================
LIMITATION OF JSON METHOD
============================================================

❌ Does NOT copy:
- Functions
- undefined
- Date (becomes string)
- Special objects (Map, Set)
*/


/*
============================================================
ALTERNATIVE (ADVANCED)
============================================================

structuredClone() (modern JS)
*/

let originalObj = {
    name: "Test",
    nested: { value: 1 }
};

let deepClone = structuredClone(originalObj);

deepClone.nested.value = 99;

console.log(originalObj.nested.value); // 1
console.log(deepClone.nested.value);   // 99


/*
============================================================
COMPARISON SUMMARY
============================================================

Shallow Copy:
- Copies top-level only
- Nested objects shared

Deep Copy:
- Fully independent
- Safe for complex data
*/


/*
============================================================
COMMON MISTAKES
============================================================
*/

// ❌ Thinking spread creates deep copy
let wrongCopy = { ...original };
wrongCopy.address.city = "Chennai";

console.log(original.address.city); // changed ❗


// ❌ Using Object.assign without empty object
let badCopy = Object.assign(original);
badCopy.name = "Changed";

console.log(original.name); // changed ❗


/*
============================================================
BEST PRACTICES
============================================================

✔ Use spread for shallow copy (simple objects)
✔ Use structuredClone for deep copy (modern)
✔ Avoid modifying original objects
✔ Understand reference behavior clearly

============================================================
KEY TAKEAWAYS – DAY 14
============================================================

✔ Objects are copied by reference
✔ Shallow copy shares nested objects
✔ Object.assign() copies properties
✔ JSON method creates deep copy (with limits)
✔ structuredClone is modern deep copy

Understanding this prevents real-world bugs 🔥
*/