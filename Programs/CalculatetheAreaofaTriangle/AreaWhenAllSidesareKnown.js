/*
If you know all the sides of a triangle, you can find the area using Herons' formula. If a, b and c are the three sides of a triangle, then

s = (a+b+c)/2
area = √(s(s-a)*(s-b)*(s-c))

*/

// Here, we have used the Math.sqrt() method to find the square root of a number.

// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);