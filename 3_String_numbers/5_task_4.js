/*
 ** Math.random() * 101
 ** возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1),
 ** то есть, от 0 (включительно) до 1 (но не включая 1)
 ** Умножаем на 101, тк необходим больший диапазон
 ** Метод Math.floor() - округляет число.
 */
const random = Math.floor(Math.random() * 101);


// let randomNumber= Math.floor(Math.random() * 101);
// console.log(randomNumber);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
// }
// console.log(getRandomInt(0, 100));
