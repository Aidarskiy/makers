// замыкание

// function init() {
//     let name = 'Adilet';
//     return function () {
//         console.log(name);
//     }
// }

// let showName = init();
// // showName();
// console.log(showName);

// function words(arg1) {
//     return function (arg2) {
//         console.log(arg1, arg2);
//     }
// }

// let hello = words('Hello')
// hello('World')
// hello('Sanzhar');


// function sum(num1) {
//     console.log(num1);
//     return function (num2) {
//         console.log(num1, num2);
//     }
// }
// let sum10 = sum(10);
// sum10(20);
// sum(20) (40)

//Замыкание - это, когда дочерняя функция замкнута на лексическом окружении родительской функции. ========

// Рекурсия 

// let result = 0;
// function toSum(num) {
//     for(let i = num; i >= 1; i--) {
//         result += i;
//     }
// }
// toSum(5);
// console.log(result);

// function toSum(num) {
//     if(num <= 1) return num; // точка выхода есть
//     return num + toSum(num - 1) // вызываем функцию
// }

// let result = toSum(5);
// console.log(result);


// function finder(arr) {
//     if(arr.length < 1) return 0;
//     let currentNum = arr.splice(0, 1);
//     console.log(arr);
//     return currentNum[0] === 1 ? 1 + finder(arr) : finder(arr)
// }
// let count = finder([1, 2, 22, 4, 1, 1]);
// console.log(count);


// let arr = [true, 7, 2, 'Hello'];
// function count(arr) {
//     if(arr.length < 1) return 0;
//     let findNum = arr.splice(0, 1);
//     return typeof findNum[0] === 'number' ? findNum
//     [0] + count(arr) : count(arr)
// }
// let sum = count([true, 7, 2, 'Hello']);
// console.log(sum);

// function dan(arr) {
//     if(arr.length < 1) return 0;
//     let elem = arr.splice (0, 1)
//     if(typeof (elem[0]) === 'number') {
//         return (elem[0] += dan(arr))
//     } else {
//         return dan(arr);
//     }
// }
// console.log(dan([true, 7, 2, 'Hello']));

function fact(num){
    if(num > 1){
        return fact(num - 1) + fact(num - 2)
    }
    
    return num
}
console.log(fact(10));










