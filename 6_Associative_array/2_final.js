let myMap = new Map();
myMap.set('key', 'prop');
myMap.set(1, 'puopc2');
myMap.set(true, 123);

console.log(myMap)  // Map(3) { 'key' => 'prop', 1 => 'puopc2', true => 123 }
console.log(myMap.get(1))  // puopc2
console.log(myMap.size)  // 3  количество элементов в массиве как .lens
console.log(myMap.keys()) // [Map Iterator] { 'key', 1, true }
console.log(myMap.values())  // [Map Iterator] { 'prop', 'puopc2', 123 }

for (let name of myMap.keys()) {
    console.log(name)
}
// key
// 1
// true
