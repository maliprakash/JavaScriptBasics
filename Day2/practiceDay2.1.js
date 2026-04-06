
//*************************/ let

// 1

console.log(testVar); // undefined (not error)
var testVar = 100;

// 2

var testVar = 100;
console.log(testVar); // value is accessible after declaration and gets hoisted

//***************************/ var

// 1
// console.log(testLet);
// ❌ ReferenceError -> ReferenceError: Cannot access 'testLet' before initialization

// let testLet = 200;

const taxRate = 18;
let totalPrice = 100;

totalPrice = totalPrice + (totalPrice * taxRate / 100);

console.log(totalPrice);

//const
const constantValue = 42;
console.log(constantValue); // ReferenceError: Cannot access 'pi' before initialization
// const constantValue; -> 'const' declarations must be initialized.
let abc; //-> inatialization not required for let, it will be undefined
console.log(abc); // undefined
var xyz; //-> inatialization not required for var, it will be undefined
console.log(xyz); // undefined

