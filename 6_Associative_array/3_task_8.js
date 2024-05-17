let myMap = new Map();
myMap.set('one', 'apple');
myMap.set('two', 'red');
myMap.set('three', 2);
myMap.set('four', 'blue');

for (let keys of myMap.keys()) {
    console.log(`Ключ: ${keys}, Значение: ${myMap.get(keys)}`)
}
