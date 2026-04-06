/*
If you know the base and height of a triangle, you can find the area using the formula:

area = (base * height) / 2

*/

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);
