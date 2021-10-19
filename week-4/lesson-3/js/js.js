// Стрелочные функции 

// const arrowFunc = () => {
//     console.log('Arrow');
// }

// const arrowFunc = () => console.log('Arrow');
// const arrowFunc = arg => console.log(arg);
// arrowFunc(10);

// function func() {
//     console.log(arguments);
// }


// const func = () => {
//     console.log(arguments);
// }
// func('str', 10, true);


// let km = +prompt('Enter km');
// const converter = (arg) => {
//     let m = arg * 1000;
//     alert(`${m} м.`)
// }
// converter(km)


//методы объектов

// console.warn('Method');
// console.error('ЧП');
// console.log('log');

// let user = {
//     name: 'Ilyas',
//     sayHello: function (arg) { // function expresion
//         console.log(`Hello ${arg}`);
//     },
//     sayHello(arg) {                     //function declaration
//         console.log(`Hello ${arg}`);
//     },
//     sayHello: (arg) => {                  //arrow function
//         console.log(`Hello ${arg}`);
//     },
// };
// user.sayHello('Damir')
// user.sayHello('Islam')


// this

// room = 19;
// function stop() {}

// function alert () {

// }

// console.log(this);

// let obj = {
//     title: 'js77',
//     sayContext () {
//         console.log(this);
//     },
//     sayContextArrow: () => {
//         console.log(this);
//     },
//     func() {
//         let arrowFunc = () => {
//             console.log(this);
//         };
//         arrowFunc();
//     },
// };

// obj.sayContext();
// obj.sayContextArrow();
// obj.func();

// let user = {
//     name: 'Erlan',
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// let newUser = {...user};
// newUser.name = 'Islam';
// user.sayName();
// newUser.sayName();


// let passenger = {
//     firstName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'US12345678',
//     baggage: 20,
//     getInfo() {
//         console.log(` Passenger ${this.firstName} \n ${this.lastName}.\n Passsport number is ${this.passportNum}.\n Maximim luggage weight is ${this.baggage}`);
//     },
//     setBaggage(arg) {
//         this.baggage = arg;
//     },
// }
// passenger.getInfo();
// passenger.setBaggage(50);
// passenger.getInfo();


// let user = {
//     name: 'Sam',
//     age: 17,
//     balance: 700,
//     tickets: 0,
//     buyTicket(count) {
//         if (this.balance >= 400 * count) {
//             this.tickets += count;
//             this.balance -= 400 * count;
//             console.log(`Вы успешно купили ${count} билет(ов)`);
//         } else {
//             let avaTicket = Math.floor(this.balance / 400);
//             if (avaTicket > 0) {
//                 this.balance -= 400 * avaTicket
//                 this.tickets += avaTicket;
//                 console.log(` У вас недостаточно купить ${count} билетов. Вы успешно купили только ${avaTicket} билетов`);
//             } else {
//                 alert('У вас недостаточно средств')
//             }
//         }
//     },
//     addToBalance(sum) {
//         this.balance += sum
//         console.log(`Вы успешно пополнили баланс на ${sum}`);
//     },
//     showBalance() {
//         console.log(`Ваш баланс ${this.balance} сом`);
//     },
// };
// user.buyTicket(1);
// user.addToBalance(1000);
// user.showBalance();

// let factorial = (num) => {
//     if(num === 1) return 1;
//        return num *= factorial(num - 1)
// }
// console.log(factorial(6));


// let oddNumbers = (n) => {
//     if(n <= 0) return;
//     if(n % 2 !== 0) {
//         console.log(n);
//     }
//     oddNumbers(n - 1);
// }

// oddNumbers(20);


// function netNums(n) {
//   if (n <= 0) return 0;
//   if (n % 2 === 1) {
//     console.log(n);
//     netNums(n - 1);
//   }
//   else {
//     netNums(n-1)
//   }
// }
// netNums(10);


let func = () => {
    let i = 1;
    return function() {
        return i++
    }
};

let counter = func();
counter()
counter()
counter()
counter()
counter()


console.log(counter());

























