// for
for ([initialization]; [condition]; [incrementExpression]){
    Statement
}
// ---
for(let i =0; i < 10; i = i + 1) {
    console.log(i)
}
// ---
const arr = [1, 2, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(`item: ${arr[i]}, index: ${i}`)
}
// ---
for (;;) {
    console.log('infinity loop')
}

// Wile
while (condition) {
    Statement
}
// ---
let i = 0;
while (i < 10) {
    console.log(i)
    i++
}
// ---
while (true) {
    console.log('infinity loop')
}
// do...while
let i = 0;
do {
    console.log(i)
    i++
} while (i < 10)
// ---
do {
    console.log('infinity loop')
} while (true)

// .forEach()  ,  .map()
arr.forEach(function(item, index, array) {
    // возвращает новое значение вместо элемента
})

let arr = [1, 2, 3]
arr.forEach(function (item, index, array) {
    console.log(item)
    console.log(`item: ${item}, index: ${index}`)
});
// 1
// 2
// 3
