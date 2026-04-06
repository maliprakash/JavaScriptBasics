//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

/*
Here,

We created a temp variable to store the value of a temporarily.
We assigned the value of b to a.
The value of temp is assigned to b
As a result, the value of the variables are swapped.

Note: You can also swap strings or other data types using this method.
*/