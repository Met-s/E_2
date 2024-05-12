const a = 1;
// если b = 2, выполнение программы "провалится" в if
const b = 2;
// если b = 3, выполнение программы "провалится" в else
// const c = 3;
const result = a + b;
if (result < 4)
    console.log("результат меньше 4")
else
    console.log("результат больше  или равен 4")
