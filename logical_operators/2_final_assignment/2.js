let x;
x = [1, 2, 3, 4, 5];

if ((typeof x) === 'number') {
    console.log(x + ' - число');
} else if ((typeof x) == 'string') {
    console.log(x + ' - строка');
} else if ((typeof x) == 'boolean') {
    console.log(x + ' - логический тип');
} else {
    console.log('Тип ' + x + ' не определён');
}
