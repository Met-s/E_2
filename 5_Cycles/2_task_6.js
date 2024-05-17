const arr = [1, 2, 3, 3]

let isEqual = true;
const reference = arr[0];

for (let item of arr) {
    if (item !== reference) {
        isEqual = false;
    }
}

console.log(isEqual)


// const arr = [1, 2, 3, 4, 5, 2];
//
// arr.forEach(function(item, index, array) {
//     for (let i = index; i < arr.length; i++) {
//         console.log(array[i]);
//         if ((index !== i) && (item === arr[i])) {
//             console.log(`True: ${index}: ${item} = ${i}: ${arr[i]}`);
//         } else {
//             console.log(`False: ${index}: ${item} = ${i}: ${arr[i]}`);
//         }
//     }
// })
