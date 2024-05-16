const obj = {a: 1, b: 2};
console.log(obj.length);  // undefined
console.log(Array.isArray(obj));  // false

const arr = [1, 2];
console.log(arr.length);  // 2
console.log(Array.isArray(arr));  // true

