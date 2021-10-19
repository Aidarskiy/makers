//
// const str = 'Привет Hello! Mt name is Kani. I am 22 years old. I live in Bishkek for 12 years';
// const regexp = /Kani/;
// const regexp = /\d/g;
// const regexp =/\w\w\w\w\w\w/;
// const regexp = /\W\W\W/;
// const regexp = /\D\D/;







// const str = 'Hello! We are Alan and Ulan, Elan.'
// const regexp = /[AUE]lan/g;


// const str = 'Today is 20.10.2020';
// const regexp = /\d\d.\d\d.\d\d\d\d/
// const regexp = /\d{2}.\d{2}.\d{4}/;
// const regexp = /\./;

// const result = str.match(regexp);
// console.log(result);
//=============================================


// let str = 'We see you. we need you';
// let pattern = /we/g;
// console.log(str.replace(pattern, 'I'));


// let str = prompt('Enter a word: ');
// let regexp = new RegExp(/[a-zA-Z]/, 'g');
// console.log(regexp.test(str));


// let str = prompt('Enter a word');
// let regexp = new RegExp(/\d+/, 'g')
// console.log(regexp.test(str));

// let str = prompt('Enter product weight');
// let regexp = new RegExp(/^\d+(kg|t|g)$/, 'gi');
// console.log(regexp.test(str));


// let str = 'Name: Jack, LastName: Snow';
// let newArr = [];
// for(i = 0; i < str.length; i++) {
//     if(str[i] !== 'a')newArr.push(str[i]);
//     else newArr.push('*')
// }

// let newStr = newArr.join('');
// console.log(newStr);
// console.log(str.replace(/a/gi, '*'));


// let str = prompt('Enter');
// let regexp = new RegExp(/^\+996\d{9}/, 'g');
// // console.log(regexp.test(str))

// if(regexp.test(str)){
//     alert('correct')
// }else {
//     alert('wrong')
// }