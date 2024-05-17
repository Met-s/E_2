const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

let even = 0,
      odd = 0,
      zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			if (arr[i] === 0) {
				zero += 1;
			} else if (arr[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}

console.log('четных элементов: ', even)
console.log('нечетных элементов: ', odd)
console.log('нулей: ', zero)


// const arr = [1, 2, 3, 4, 5, 2, NaN, null, 0, 0, 5, 'str', 7, 0];
// let evenNums= 0;
// let oddNums = 0;
// let zeroNums = 0;
// let undefinedType = 0;
//
//  for (let i = 0; i < arr.length; i++){
//       if (arr[i] === 0) {
//           zeroNums += 1;
//     } else if (arr[i] % 2 === 0) {
//           evenNums += 1;
//     } else if (arr[i] % 2 >= 0) {
//           oddNums += 1;
//     } else {
//           undefinedType += 1;
//       }
// }
//
// console.log(`Even numbers : ${evenNums}`);
// console.log(`Odd numbers : ${oddNums}`);
// console.log(`Zero numbers : ${zeroNums}`);
// console.log(`UndefinedType : ${undefinedType}`);
// console.log(`arrLength : ${arr.length}`);
