let map = new Map();
map.set('key1', 'prop1');
map.set('key2', 'prop2');

const keys = map.keys()

for (let key of keys) {
  console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}

// let myMap = new Map();
// myMap.set('one', 'apple');
// myMap.set('two', 'red');
// myMap.set('three', 2);
// myMap.set('four', 'blue');
//
// for (let keys of myMap.keys()) {
//     console.log(`Ключ: ${keys}, Значение: ${myMap.get(keys)}`)
// }
