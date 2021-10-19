// while, do while
// let arr = [1, 2, 3, 4, 5];


// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// let number = 1;
// while (number <= 100) {
//     if (number % 2 !== 0) {
//         console.log(number);
//     }
//     number++;
// }


//do..while

// let i = 50;
// do {
//     console.log(i, 'Сработает 1 раз по любому');
// }while (i < 40) {

// }


// for

// for(let i = 0; i < 20; i++) {
//     console.log(i);
// }

// let arr = ['Arstan', 'Beksultan', 'Akai'];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if(arr[i] === 'Beksultan') {
//         alert(arr[i]);
//         continue;
//     }
//     console.log('Код ниже');
// }


// let users = [
//     {
//         name: 'Askar'
//     },
//     {
//         name: 'Sanzhar'
//     },
//     {
//         name: 'Vladimir'
//     },
//     {
//         name: 'Erlan'
//     }
// ]

// for(let i = 0; i < users.length; i++) {
//     document.write(`<p>Имя: ${users[i].name} </p>`)
// }

// console.log(users);


// For..of, For..in

// for (let value of users) {
//     console.log(value);
// }


// for (let value in users) {
//     console.log(users[value]);
// }


// let user = {
//     name: 'Atai'
// }

// for (let key in user) {
//     console.log(user[key]);
// }


// С помощью for in можно перебирать и объекты и масссивы
// С помощью for of можно перебирать только массивы



// let number = 5;
// console.log(number++);
// console.log(number--);
// console.log(number);


// let arr = [true, 7, 2, 'Hello'];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && arr[i].toString() !== 'NaN') {
//         sum += arr[i];
//     }
// }
// console.log(sum);


// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0];
// let plus = 0;
// let minus = 0;
// let zero = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         plus++;
//     }
//     else if (arr[i] < 0) {
//         minus++
//     }
//     else if (arr[i] === 0) {
//         zero++
//     }
//     console.log(plus, minus, zero);
// }
