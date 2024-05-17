const inputValue = prompt('Введите число')

const value = +inputValue;

if (typeof value == "number" && !isNaN(value)) {
    if (value == 0) {
        console.log('ноль')
    } else if (value % 2 == 0) {
        console.log('чётное')
    } else {
        console.log('нечётное')
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}

// let InputNumb = +prompt("Введите число : ")
//
// if ((typeof (InputNumb) == "number") && (!isNaN(InputNumb)) && (InputNumb > 0)) {
//     if ((InputNumb % 2) === 0) {
//         alert('Вы ввели чётное число: ' + InputNumb)
//     } else {
//         alert('Вы ввели нечётное число: ' + InputNumb)
//     }
// } else {
//     alert('Упс, кажется, вы ошиблись: ')
// }
