// let user = {   // объект
//     name: "Ivan",  // под ключом "name" хранится значение "Ivan"
//     age: 30  // под ключом "age" хранится значение 30
// };
// ---Map
// let map = new Map ();
//
// map.set("1", "string");
// map.set(1, "number");
// map.set(true, "boolean");
//
// console.log(map.get(1));  // number
// console.log(map.get("1")); // string
// console.log(map.size);  // 3, сколько элементов содержит объект map
// ---Пробежимся циклом по объекту map. Для обхода ассоциативных массивов как
// раз подойдет цикл for..of:
let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
]);
// ---Для перебора по ключам — названию фрукта, используем метод .keys()
// (получаем название свойства):
for (let name of fruits.keys()) {
    console.log(name);
}
// apple
// strawberry
// blueberry
// Для перебора по значениям — цвету фрукта, используем метод .values()
// (получаем значение свойства):
for (let color of fruits.values()) {
    console.log(color);
}
// green
// red
// blue
// ---Для перебора по элементам в формате [ключ, значение]  делаем следующее:
for (let elem of fruits) {  // то же самое, что и fruits.entries()
    console.log(elem);
}
// [ 'apple', 'green' ]
// [ 'strawberry', 'red' ]
// [ 'blueberry', 'blue' ]
