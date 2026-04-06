/*

// For dynamic values what are the different ways ?

Good 👍 this is an important concept — especially for API automation and payload building.

In JavaScript, dynamic values mean values that change based on variables, user input, API response, time, etc.

Let’s see all the common ways to handle dynamic values.

1️⃣ Template Literals (✅ Best & Modern Way)

Uses backticks ` ` and ${}

const name = "Prakash";
const message = `Hello ${name}`;

Multiple variables
const price = 100;
const tax = 10;
const total = `Total amount is ${price + tax}`;


✔ Clean
✔ Readable
✔ Industry standard
✔ Used heavily in Playwright / Node.js

👉 Recommended way

2️⃣ String Concatenation (Old Way)

Using + operator

const name = "Prakash";
const message = "Hello " + name;


Multiple values:

const total = "Total is " + (price + tax);


❌ Hard to read in complex strings
❌ Not modern style

3️⃣ Using .concat() Method
const message = "Hello ".concat(name);


Rarely used in modern projects.

4️⃣ Dynamic Object Values (Very Important for APIs 🔥)

In API automation, dynamic values are usually inside JSON objects.

const orderId = 12345;

const payload = {
  orderId: orderId,
  message: `Order ${orderId} created successfully`
};


Shortcut (ES6):

const payload = {
  orderId, // same as orderId: orderId
};

5️⃣ Dynamic Property Names

Very powerful feature.

const fieldName = "username";

const user = {
  [fieldName]: "Prakash"
};

console.log(user.username); // Prakash


Used when keys are dynamic.

6️⃣ Using Functions (Dynamic Calculation)
function generateUser(id) {
  return `USER_${id}`;
}

const userId = generateUser(1001);

7️⃣ Using Date / Random (Common in Automation)
const uniqueEmail = `test${Date.now()}@mail.com`;


Or:

const randomId = Math.floor(Math.random() * 1000);


Very common in:

Playwright API tests

Payload uniqueness

Test data generation

🔥 Comparison Summary
Method	Modern?	Recommended?	Used For
Template literals	✅ Yes	⭐⭐⭐⭐⭐	Strings
Concatenation +	Old	❌ Avoid	Simple cases
.concat()	Old	❌ Rare	Legacy code
Dynamic object keys	✅ Yes	⭐⭐⭐⭐	JSON payload
Functions	✅ Yes	⭐⭐⭐⭐⭐	Logic-based values
Date/Random	✅ Yes	⭐⭐⭐⭐⭐	Automation
🎯 Final Industry Rule

For dynamic values:

✔ Use template literals for strings
✔ Use object shorthand for payloads
✔ Use Date.now() / random for unique test data
✔ Avoid + concatenation in modern code
*/