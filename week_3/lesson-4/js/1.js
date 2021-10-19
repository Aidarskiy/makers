// Простые методы массивов

// push, pop, shift, unshift

// let arr = [1, 2, 3];
// arr.push(4); // добавляет в конец
// console.log(arr);

// let num = arr.pop();
// arr.pop() // вырезает 1 элемент с конца
// console.log(arr);
// console.log(num);

// let arr = ['Kyrgyzstan', 'Uzbekistan', 'USA'];
// arr.unshift('China'); //unshift добавляет в начало
// console.log(arr);

// let country = arr.shift(); // вырезает 1 элемент с начала масиива
// console.log(arr);
// console.log(country);


// splice, slice


//splice
// let nums = [22, 40, 38, 50];
// let res = nums.splice(2, 0, '1');
// console.log(nums);
// console.log(res);

// массив.splice(с какого начать, сколлько вырезать, что вставить вместо вырезанного)

// =========================================

//slice

// let arr = [100, 31, 47, 68]
// let num = arr.slice(1, 2);
// console.log(arr);
// console.log(num);
// массив.slice(с какого начать, по какой (не включительно))

// let arr = [1, 2, 3, 4, 5];
// // arr.reverse();
// let str = arr.join('+'); // из массива делает строку
// console.log(arr);
// console.log(str);
// let newArr = str.split('+'); // из строки делает массив
// console.log(newArr);

// let nums = [1, 2, 30, 11, 101, 22, 86];
// nums.sort();
// nums.sort((a, b) => a - b);
// nums.sort((a, b) => b - a);
// console.log(nums);


//concat ==================================================================
// let res1 = [1, 2, 3]
// let res2 = [4, 5, 6]
// let resAll = res2.concat(res1, ['str', 'boolean']);
// console.log(resAll);




// let myArray = ['Kubat', 'Malik', 'Ainura', 'Maksat', 'Adelina', 'Aidar'];
// for(let i = 0; i < myArray.length; i++) {
//     myArray.splice(i, 1, [myArray[i], i])
// }
// console.log(myArray);

// let mixedUsers = [
//     {
//         role: 'user'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'user'
//     },
//     {
//         role: 'user'
//     }
// ];

// let admins = [];
// let users = [];

// for(let i = 0; i < mixedUsers.length; i++) {
//     if(mixedUsers[i].role === 'admin'){
//         admins.push(mixedUsers[i])
//     }
//     else if (mixedUsers[i].role == 'user') {
//         users.push(mixedUsers[i]);
//     }
// }
// console.log(admins);
// console.log(users);         


// let products = [
//     {size: 's'},
//     {size: 's'},
//     {size: 's'},
//     {size: 's'},
//     {size: 'l'},
//     {size: 'l'},
//     {size: 'l'},
//     {size: 'l'},
//     {size: 'm'},
//     {size: 'm'},
// ]
// let sSizes = [];
// let lSizes = [];
// let mSizes = [];

// console.log(products);

// for(let i = 0; i < products.length; i++) {
//     console.log(products[i], i);
//     if(products[i].size === 's') {
//         sSizes.push(products[i]);
//     }
//     else if (products[i].size === 'l') {
//         lSizes.push(products[i]);
//     }
//     else if (products[i].size === 'm') {
//         mSizes.push(products[i]);
//     }
// }

// console.log(sSizes);
// console.log(lSizes);
// console.log(mSizes);


