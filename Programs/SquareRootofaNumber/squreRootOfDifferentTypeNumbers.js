/*

If 0 or a positive number is passed in the Math.sqrt() method, then the square root of that number is returned.
If a negative number is passed, NaN is returned.
If a string is passed, NaN is returned.

*/

/*
🧠 What is NaN in JavaScript?

NaN means → “Not a Number”

It is a special value in JavaScript that tells you:

❌ “The result is not a valid number”

*/
const number1 = 2.25;
const number2 = -4;
const number3 = 'hello';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);
