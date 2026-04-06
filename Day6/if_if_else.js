
//******** */ Only If Statements *********

// Control flow is the order in which code executes.
// It determines what code runs, when it runs,
// and under what conditions it runs.
if(true){
    console.log("This block runs only if block is true");
}


if(false){
    console.log("This block will only run when if condition is false");
}

let age = 18;

if(age >= 18){
    console.log("You can vote");
}


let name1 = "Prakash";

if(name1 === "Prakash"){
    console.log("Hello, Prakash!");
}

let trueValue = true;
let falseValue = false;
//Quick Truth Table for &&
/*
| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

*/

if(trueValue && falseValue){
    console.log("This will not run because falseValue is false");
}

//Quick Truth Table for ||
/*
| A     | B     | A || B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |      
*/

if(trueValue || falseValue){
    console.log("This will run because trueValue is true");
}



//==================================
// if else  

let ageValue = 17;

if(ageValue >= 18){
    console.log("You can vote");
} else {
    console.log("You cannot vote you are below 18");
}

// in if block condition we can use 
//Comparison Operators
/*

if (a > b)   // greater than
if (a < b)   // less than
if (a >= b)  // greater than or equal
if (a <= b)  // less than or equal
if (a == b)  // equal (loose)
if (a === b) // equal (strict - recommended)
if (a != b)  // not equal (loose)
if (a !== b) // not equal (strict - recommended)

*/
//2. Logical Operators

// AND && → Both conditions must be true
// OR || → At least one condition must be true
// NOT ! → Negates the condition

// Example: Combined logical operators
let ageNumber = 17;
let hasLicense = true;
let isVIP = false;
if ((ageNumber > 18 && hasLicense) || isVIP) {
    console.log("Can enter");
} else {
    console.log("Cannot enter");
}

//Length check
let password = "1234";
if (password.length >= 8) {
    console.log("Strong password");
}else {
    console.log("Weak password");
}

/*
Truthy and Falsy Values in JavaScript
In JavaScript, certain values are considered "truthy" or "falsy" when evaluated in a boolean context (like in an if statement).

Truthy Values:
- Non-empty strings (e.g., "hello")
- Non-zero numbers (e.g., 42, -1)
- Objects (e.g., {}, [])
- true

Falsy Values:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN

*/


