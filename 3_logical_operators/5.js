const bankBalance = 5000;
const price = 10990;
if (price <= bankBalance) {
    console.log('Да, вы можете себе позволить покупку')
} else if (price < 10000) {
    console.log('Пополните баланс');
} else {
    console.log('Нам не нужен телефон')
}
