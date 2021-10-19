// регулярные выражения 
//  2 types of creating regular expressions/////////////////// 
 
// const regexp1 = /coding/ //1 type 
// const regexp2 = new RegExp("coding") //2type 
 
// const str = "coding is easy" 
// let result = str.match(regexp1) 
// console.log(result) 
 
// if (result.length > 0) { 
//     console.log("yes") 
// } else { 
//     console.log(no) 
// } 
// ФЛАГИ 
// g - global 
// i- ignore 
// let regexp = /code/ 
// let string = 'code ,bad code' 
// let result = string.match(regexp) 
// console.log(result) 
 
// let str = "Работайте братья, работайте!" 
// let regexp= new RegExp("работайте, "gi"); 
// let result = str.match(regexp); 
// console.log(result) 
 
// string method - replace, finds matches and replaces them 
// let str = "Looking for middle developer" 
 
//  test - for at least one match///////////////////////////////// 
 
// let str = "we can" 
// let regexp = /we/ 
// let result = regexp.test(str) 
// console.log(result) 
 
 
// \d      number from 0-9 
// \s     all spaces 
// \w -   symbols, latin alphabet words 
// \D     not a number 
// \S    not a space 
// \W    not a latin alphabet 
 
// Якоря 
// ^         the beginning ofa string 
// $         the end of a string  
 
// let time = "20:12" 
// let regexp = /^\d\d:\d\d$/ 
// let result = regexp.test(time); 
// console.log(result) 
 
// НАБОРЫ 
// let str1 = "mad"; 
// let str2 = "sad"; 
// let regexp = /[ms]ad/ 
// let result = str1.match(regexp) 
// console.log(result) 
 
// диапазоны//////////////////// 
 
// let str = "123456789" 
// let regexp = /[1-9]/ 
// let result = str.match(regexp); 
// console.log(result) 
 
 
// exceptions 
 
//let regexp = /[^aeiou] / / //everything //except// this letters 
 
// квантификаторы 
// {n} number of 
 
// let numbers = "12 555 4343" 
// let pattern = /\d{3,4}/g; 
// let regexp = /\d+/ 
// let regexp = /\d?/; //it can be or cannot 
 
// let string = "color or colour"; 
// let pattern = /colou?r/g; 
// let result = string.match(pattern); 
// console.log(result) 
 
//скобочные группы  
 
// let string = "mail.gmail.ru" 
// let pattern = /(\w+\.)+\w+/gi 
// let result = string.match(pattern) 
// console.log(result) 
 
 
 
 
// let result = numbers.match(pattern); 
// console.log(result) 
 
// let str = "brown, black, blue, lightblue"; 
// let pattern = /[aieou]/gi; 
// let result = str.match(pattern) 
// console.log(result.length) 
 
// let str = "5 apples and 5 oranges"; 
// let pattern = /\d/; 
// console.log(str.replace(pattern, "five")); 
 
 
//Альтернация 
// let str = "i know Java, Python, Flutter,Dart, JavaScript"; 
// let regexp = /Java(Script)?|Python|Flutter|Dart/g 
// console.log(str.match(regexp))



//======================================================================================================



// let elevator = {
//     floor: 1,
//     minFloor: 1,
//     maxFloor: 16,
//     printFloor: function() {
//         console.log(`Вы находитесь на ${this.floor} этаже`);
//     },
//     upOneFloor: function() {
//         if(this.floor < this.maxFloor){
//             this.floor++;
//             this.printFloor();
//         }else{
//             console.log(`Вы не можете подняться выше ${this.maxFloor} этажа`);
//         }
//     },
//     downOneFloor: function() {
//         if(this.floor > this.minFloor){
//             this.floor--;
//             this.printFloor();
//         }else{
//             console.log(`Вы не можете спуститься ниже ${this.minFloor} этажа`);
//         }
//     },
//     toFloor: function(num) {
//         if(num < this.minFloor || num > this.maxFloor){
//             console.log('Такого этажа нет');
//             return;
//         }
//         if(num > this.floor) {
//             while (this.floor !== num) {
//                 this.upOneFloor();
//             }
//         }else  if (num === this.floor) {
//             console.log(`Мы уже находимся на ${num} этаже`);
//         }else {
//             while (this.floor !== num) {
//                 this.downOneFloor();
//             }
//         }
//     }
// };

// elevator.toFloor(20)
// elevator.toFloor(5)

