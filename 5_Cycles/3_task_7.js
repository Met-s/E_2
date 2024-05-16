const arr = [1, 2, 3, 4, 5, 2, 'Nan','jdks', 0, 0, 5, 'jfdsl', 7, 0];
let evenNums= 0;
let oddNums = 0;
let zeroNums = 0;
let undefinedType = 0;

 for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0) {
          zeroNums += 1;
    } else if (arr[i] % 2 === 0) {
          evenNums += 1;
    } else if (arr[i] % 2 >= 0) {
          oddNums += 1;
    } else {
          undefinedType += 1;
      }
}

console.log(`Even numbers : ${evenNums}`);
console.log(`Odd numbers : ${oddNums}`);
console.log(`Zero numbers : ${zeroNums}`);
console.log(`UndefinedType : ${undefinedType}`);
console.log(`arrLength : ${arr.length}`);
