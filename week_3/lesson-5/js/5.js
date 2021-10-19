// let result = +prompt('Vvedite your age:')
// if(result > 23 && result < 40) {
//     alert('Hello')
// }else {
//     alert('GoodBye!')
// }

// result > 23 && result < 40 ? alert('Hello') : alert('goodbye')

// let array = [{}];

// !array.length
// ? console.log('Есть') 
// : array.length > 10 
// ? console.log('bolshe') 
// : console.log('menshe');

// let num = 8;

// num > 0 && num < 10 ? num > 5 ? alert('num > 5') : alert('num < 5') : alert('Hi');

// if(num > 0 && num < 10) {
//     if(num > 5) {
//         alert('num > 5')
//     } else {
//         alert('num < 5')
//     }
// } else {
//     alert('Hi')
// }

// let seasons = +prompt('Введите число от 1-4');

// switch (seasons) {
//     case 1:
//         alert('zima')
//         break;
//     case 2:
//         alert('vesna')
//         break;
//     case 3:
//         alert('leto')
//         break;
//     case 4:
//         alert('osen')    
//         break;
// }


// let array = [8,3,2,1,3,6,9,5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let arr = [2, 5, 9, 15, 0, 4];
// let sum = 0;
// for(let i of arr) {
// if (i % 2 === 0) {
// sum += i
// }
// }
// console.log(sum);

// let obj = {
//     'Бишкек': 'Кыргызстан',
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// };

// for (let key in obj) {
//         console.log([key] + ' это ' + obj[key]);
// }


// let obj = {
//     title: 'Nike',
//     description: 'Lorem ipsum',
//     count: 10
// }
// for(let key in obj) {
//     console.log(key, obj[key]);
// }

// let count = 0;
// for (let i = 100; i <= 500; i++) {
//     if(i % 3 === 0) {
//         count++
//     }
// }
// console.log(count);


// let arr = ['арбуз', 'дыня', 'вишня'] 
// arr.push('клубника');
// arr.splice(arr.length, 0, 'клубника');
// let newArr = arr.splice(1, 1, 'клубника')
// let newArr = arr.slice(1, 3)
// arr.unshift('10')
// console.log(arr);


// развернутый
// for(let i = 0; i < arr.length; i++) {
//     // if(arr[i] === 'дыня') {
//     //     arr.splice(i + 1, 0, 'помидоры')
//     // }
//     let str = arr[i]; // записываем слово в переменную 
//     let strArr = str.split(''); // переводим наше слово в массив 
//     let upperLetter = strArr[0].toUpperCase() // первый элемент массива переводим в верхний регистр
//     strArr.splice(0, 1, upperLetter) // заменяем 1ый элемент массива strArr на новую букву
//     let newStr = strArr.join('') // переводим наш массив в строку
//     arr.splice(i, 1, newStr) // заменяем старое слово на новое
//     console.log(newStr); // 
// }
// console.log(arr);

// короткий

// for(let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     str = str[0].toUpperCase() + str.slice(1)
//     arr.splice(i, 1, str)
//     console.log(str);
// }








let arr = ['js', 'css', 'jq'];
for(let i = 0; i < arr.length; i++)
console.log(arr[i])























































