// Массивы

// 4, 8, 15, 16, 23, 42

// const lostNums = [4, 8, 15, 16, 23, 42];
// console.log(lostNums[1])
// console.log(lostNums.length)

const lostNums = [4, 8, 15, 16, 23, 42];
let sum = 0;

for (let i = 0; i < lostNums.length; i++) {
    sum += lostNums[i];
    // debugger
}

console.log(sum)
