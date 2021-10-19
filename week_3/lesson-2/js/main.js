// Логические операторы

// console.log(true && true);
// console.log(true && false);
// console.log(true && '');

// console.log(true || true);
// console.log(true ||false);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// console.log(true && true || false && !false);

// console.log(true || !true && false || false);
// console.log(!false && !true || !true);
// console.log(false || !false && !!true);

//Условные операторы

// let num1 = 140
// let num2 = 141

// if(num1 === num2) {
//     console.log('num1 === num2');
// }
// else if (num1 > num2) {
//     console.log('num1 > num2');
// }
// else if (num1 < num2) {
//     console.log('num1 < num2');
// }
// else {
//     console.log('не подошло');
// }

// const value = 'Hello';
// const number = 50;

// if(value == 'Hello') {
//     console.log('Hello world');
// }
// if (number > 50) {
//     console.log('Number > 50');
// }
// else if (number < 50) {
//     console.log('number < 50');
// }
// else {
//     console.log('number === 50');
// }

// let sum = 100;
// let result = 201;
// if(sum === 100 || result === 200) {
//     console.log('YES');
// }
// else {
//     console.log('NO');
// }


// Тернарный оператор 

// let user1 = 'Ulan';
// let user2 = 'Ulan';

// user1 === user2 ? console.log('Если условие true') : console.log('Если условие false');


// let num = 1;
// let num2 = 2;
// num < num2 && 10 > 11 ? alert(true) : alert(false)

// 0 || !1 && -1 ? console.log(true) : console.log(false)

// Switch

// let str = 'College';

// switch (str) {
//     case 'School':
//         console.log('GOOD');
//         break;
//     case 'Bootcamp':
//         console.log('BOOTCAMP');
//         break;
//     default:
//         console.log('College');
// }

// let code = prompt('Введи тен h1')
// switch(code) {
//     case '<h1></h1>':
//         alert('Right!')
//         break;
//     case 'h1':
//         alert('Almost))')
//         break;
//     default:
//         alert('Repeat')
//         break;
// }



// temp < 0 ? console.log(`temp of air got down till ${temp} gradusov`) : console.log(`Temp getting up till ${temp} gradusov`);

// let temp = +prompt('enter a temp');

// if(temp < 0) {
//     console.log(`temp of air got down till ${temp} gradusov`);
// }
// else if(temp > 0) {
//     console.log(`Temp getting up till ${temp} gradusov`);
// }

let min = prompt('enter a number from 0 till 59');

if (min <= 14 && min > 0) {
    console.log('в первую');
} else if (min <= 28) {
    console.log('во вторую');
} else if (min <= 42) {
    console.log('в третью');
    x
} else if (min < 59) {
    console.log('в четвертую');
}
console.log(`Its ${typeof(123)}`)

// if (typeof (data) === typeof (123)) {
//     console.log("Its number");
// } else if (typeof (data) === typeof (false)) {
//     console.log("Its boolean")
// } else if (typeof (data) === typeof (null)) {
//     console.log("Its null")
// } else if (typeof (data) === typeof (undefined)) {
//     console.log("Its undefined")
// } else if (typeof (data) === typeof ('123')) {
//     console.log("Its string")
// } else if (typeof (data) === typeof ({})) {
//     console.log("Its object")
// } else if (typeof (data) === typeof (123n)) {
//     console.log("Its bigInt")
// } else if (typeof (data) === typeof (Symbol('1'))) {
//     console.log("Its symbol")
// }