let InputNumb = +prompt("Введите число : ")

if ((typeof (InputNumb) == "number") && (!isNaN(InputNumb)) && (InputNumb > 0)) {
    if ((InputNumb % 2) === 0) {
        alert('Вы ввели чётное число: ' + InputNumb)
    } else {
        alert('Вы ввели нечётное число: ' + InputNumb)
    }
} else {
    alert('Упс, кажется, вы ошиблись: ')
}
