// // let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5];
// // let newArr = [];
// // arr.forEach((item) => {
// //     let check = newArr.filter((elem) => {
// //         console.log(`Это элем: ${elem}, Это item: ${item}` );
// //         return elem === item;
// //     })
// //     if(check.length === 0) {
// //         newArr.push(item);
// //     }
// // });
// // console.log(newArr);

// let user = {
//     name: 'igor',
//     age: 25,
//     friends: ['ilyas', 'kostya'],
//     children: [{
//             name: 'nikolay',
//             age: 3
//         },
//         {
//             name: 'petr',
//             age: 10
//         },
//     ],
//     parents: [{
//             name: 'Victor',
//             age: 55
//         },
//         {
//             name: 'vasilisa',
//             age: 53,
//             friends: {
//                 close: ['shergazy', 'aleksandra'],
//                 notClose: [],
//             },
//         },
//     ],
//     jobs: {
//         frontEnd: {
//             language: 'JavaScript',
//         },
//         backEnd: {
//             languages: {
//                 java: {
//                     version: 8,
//                     frameworks: {
//                         spring: {
//                             version: 1,
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };
// let {
//     children: [, firstChild],
// } = user;
// console.log(firstChild);
// // let {parents: [, {friends: {close: [, closeFriend]}}]} = user;
// let {jobs: { backEnd: {languages: {java: { frameworks: {spring: {version}}}}}}} = user;
// console.log(version);

// calcAge(35)
// function calcAge(age) {
//         let days = age * 365;
//     console.log(days);
//     console.log(arguments);
// }


// const calcAge = (age) => {
//     let days = age * 365;
//     console.log(days);
// }
// calcAge(20)

// const calcSquare = function() {
//     console.log(arguments);
//     let [first, second] = arguments
//     console.log(first, second);
// }
// calcSquare(3, 5);


// let arr = [-100, 100, 330, -500];
// let newArr = arr.filter((item, index, array) => {
//     return item < 0;
// });
// console.log(newArr);


// let gamer = {
//     pseudoName: 'Tuda-Suda',
//     games: ['gta', 'dota', 'cs-1.6'],
//     showUserGames() {
//         this.games.forEach((item) => {
//             console.log(item);
//         })
//     }
// }
// gamer.showUserGames();


// let arr = [20, -15, 30];
// let result = arr.reduce((prevValue, currentValue) => {
//     return prevValue * currentValue;
// }, 1)
// console.log(result);



// function firstFunc() {
//     let str = '';
//     return function(word) {
//         return str += word;
//     };
// }
// let func = firstFunc();
// console.log(func('Hello'));
// console.log(func(' World'));
// console.log(func('!'));
// let newFunc = firstFunc();
// console.log(newFunc('Coding'));
// console.log(newFunc(' is easy'));

// let str = '';
// function func(word) {
//     return (str += word);
// }
// console.log(func('Hello'));
// console.log(func(' World'));
// console.log(func('!'));

// console.log(func(' coding'));
// console.log(func(' is easy'));

// function rec(start) {
//     if (start % 2 === 0) {
//         console.log(start);
//     }
//     if (start >= 100) return;
//     rec(start + 1);
// }
// rec(1);


// for(let i = 0; i <= 100; i++) {
//     console.log(i);
// }



// console.log((true && true && false) || !!true);


// if(!'') {
//     console.log('true');
// }


// console.log('10' - 10);



































