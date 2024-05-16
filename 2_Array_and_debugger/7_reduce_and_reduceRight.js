let arr = [1, 2, 3];
let result = arr.reduce(function(sum, item, index, array){
    return sum + item
}, 0);
console.log(result);
