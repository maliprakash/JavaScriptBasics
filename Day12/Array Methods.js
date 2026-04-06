/*
==========================================
Array Methods – Examples
==========================================
*/


// ==============================
// push()
// ==============================

let arr1 = [1, 2];
arr1.push(3);
console.log(arr1); // [1,2,3]

arr1.push(4, 5);
console.log(arr1); // [1,2,3,4,5]


// ==============================
// pop()
// ==============================

let arr2 = [1, 2, 3];
console.log(arr2.pop()); // 3

console.log(arr2.pop()); // 2


// ==============================
// map()
// ==============================

const nums = [1, 2, 3];

console.log(nums.map(n => n * 2)); // [2,4,6]

console.log(nums.map(n => n + 10)); // [11,12,13]


// ==============================
// filter()
// ==============================

console.log(nums.filter(n => n > 1)); // [2,3]

console.log(nums.filter(n => n % 2 === 0)); // [2]


// ==============================
// reduce()
// ==============================

console.log(nums.reduce((a, b) => a + b, 0)); // 6

console.log(nums.reduce((a, b) => a * b, 1)); // 6


// ==============================
// find()
// ==============================

console.log(nums.find(n => n > 1)); // 2

console.log(nums.find(n => n === 5)); // undefined


// ==============================
// findLast()
// ==============================

const arr3 = [1, 2, 3, 4];

console.log(arr3.findLast(n => n % 2 === 0)); // 4

console.log(arr3.findLast(n => n < 3)); // 2


// ==============================
// some()
// ==============================

console.log(nums.some(n => n > 2)); // true

console.log(nums.some(n => n > 10)); // false


// ==============================
// every()
// ==============================

console.log(nums.every(n => n > 0)); // true

console.log(nums.every(n => n > 2)); // false


// ==============================
// includes()
// ==============================

console.log(nums.includes(2)); // true

console.log(nums.includes(10)); // false


// ==============================
// slice()
// ==============================

console.log(nums.slice(1)); // [2,3]

console.log(nums.slice(0, 2)); // [1,2]


// ==============================
// splice()
// ==============================

let arr4 = [1, 2, 3];
arr4.splice(1, 1); 
console.log(arr4); // [1,3]

let arr5 = [1, 2, 3];
arr5.splice(1, 0, 10);
console.log(arr5); // [1,10,2,3]


// ==============================
// concat()
// ==============================

console.log([1, 2].concat([3, 4])); // [1,2,3,4]

console.log([1].concat([2], [3])); // [1,2,3]


// ==============================
// forEach()
// ==============================

nums.forEach(n => console.log(n * 2));

nums.forEach((n, i) => console.log(i, n));


// ==============================
// join()
// ==============================

console.log([1, 2, 3].join("-")); // "1-2-3"

console.log(["a", "b"].join(",")); // "a,b"


// ==============================
// reverse()
// ==============================

let arr6 = [1, 2, 3];
arr6.reverse();
console.log(arr6); // [3,2,1]

let arr7 = ["a", "b"];
console.log(arr7.reverse()); // ["b","a"]


// ==============================
// sort()
// ==============================

console.log([3, 1, 2].sort()); // [1,2,3]

console.log([10, 2, 5].sort((a, b) => a - b)); // [2,5,10]


// ==============================
// flat()
// ==============================

console.log([1, [2, 3]].flat()); // [1,2,3]

console.log([1, [2, [3]]].flat(2)); // [1,2,3]


// ==============================
// flatMap()
// ==============================

console.log([1, 2].flatMap(n => [n, n * 2])); // [1,2,2,4]

console.log([1, 2, 3].flatMap(n => [n * 10])); // [10,20,30]


/*
==========================================
🧠 Summary
==========================================

- map → transform
- filter → select
- reduce → calculate
- find/findLast → first/last match
- some/every → boolean checks
- splice → modify original array
- slice → copy part

👉 Master these = strong JS foundation
*/