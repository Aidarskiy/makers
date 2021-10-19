//Функции, области видимости, хойстинг
// function declaration
// function expression
// arrow function

// function declaration
// function func() {
//     console.log('Hi');
// }

// func();

// function sayHello() {
//     alert('Hello')
// }
// sayHello();

// объявляем функцию
// function имя(параметры) {
//     ...тело...
// }
// // вызов функции
// имя();


// function sumToNumbers(num1, num2) {
//    let result =  num1 + num2;
//    return result;
// }
// let sum = sumToNumbers(10, 30);

// console.log(sum);



// function firstElem(arr) {
//     let elem = arr.shift();
//     return elem;
// }
// let array = [1, 2, 3, 4, 5];
// let result = firstElem(array);
// console.log(result);

// mulTwoNums(10, 20)
// function mulTwoNums(arg1, arg2 = 1) {
//     console.log(arg1, arg2);
//     console.log(arg1 * arg2);
// }

// mulTwoNums(2, 5);
// console.log(num);
// // console.log(str);
// var num = 20;
// let str = '20';
// console.log(str);

// let message = 'Hello World!'

// function showMessage(message) {
//     console.log(message);
// }
// showMessage(message);

// здесь функция принимает аргументы

// Если функция принимает аргументы, то аргументы нужно передать

// let numbers = [100, 200, 300];

// function last() {
//     let elLast = numbers.pop();
//     console.log(elLast);
// }

// last(numbers);
// let bool = [true, false, true];
// last(bool);


// // function expression
// let str = 'Hello world';
// let sayHello = function(arg) {
//     console.log(arg);
// };
// sayHello(str);

// let obj = {
//     title: 'Makers',
// };
// function showTitle(arg1) {
//     console.log(arg1);
//     document.write(`<h1>${arg1.title}</h1>`)
// }

// showTitle(obj);

// let school = {
//     title: "Gazprom",
// }
// showTitle(school);


// let num1 = 50;
// function func() {
//     let num1 = 20;
//     console.log(num1);
//     return num1;
//     console.log('num'); // не рабочий 
// }
// func();
// console.log(num1);

// Тело функции это локальная область видимости ==================================================

// function pow(x, n) {
//     let result = x ** n;
//     return result;
// }
// let result = pow(2, 2);
// console.log(result);


// function days(num) {
//     switch(num) {
//         case 1:
//         return 'Ponedelnik'
//         case 2:
//         return 'Vtornik'
//         case 3:
//         return 'Sreda'
//         case 4:
//         return '4verg'
//         case 5:
//         return 'Pyatnica'
//         case 6:
//         return 'Subb'
//         case 7:
//         return 'Voskr'
//     }
// }
// console.log(days());


// function sum(a, b) {
//     let sum1 = 0;
//     sum1 = a + b + b;

//     if(a === b) {
//         return sum1;
//     }else {
//         return 'no';
//     }
// }
// console.log(sum(2, 2));


// let names = ['Maksat', 'Vladimir', 'Nurlan', 'Aidar', 'Sanzhar', 'Adelina'];

// function checkUser(arr, name) {
//     for(let i = 0; i < arr.length; i++) {
//         let check = arr[i];
//         if(check === name) {
//             return 'Da'
//         }
//     }
//     return 'Net';
// }
// console.log(checkUser(names, 'Aidar'));


let arr = ['Apple', 'Orange', 'Banana', 'Pineapple', 'Cherry'];
function sortArr(array) {
    array.sort((a, b) => b.length - a.length);
    console.log(array);
    let longWord = array[array .length -1];
    console.log(longWord);
    console.log(array);
}
sortArr(arr);












