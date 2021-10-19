// let arrowFunc = () => {
//     console.log('Hello World!');
// }
// arrowFunc();

// let arrowFunc = () => console.log('Hello World!');


// let arrowFunc = arg1 => console.log(arg1 ); 
// arrowFunc(5)


// let arrowFunc = (arg1, arg2, arg3) => {
//     console.log(...arguments);
// }
// arrowFunc(true, 23, 'makers');


// object methods

// let person = {
//     name: 'Jack',
//     age:  24,

//     sayHello() {
//     console.log('Hello World!');
//     },

//     sayName: function() {
//         console.log(`My name is ${this.name}`);
//     },

//     sayAge: function() {
//      console.log(`I am ${this.age} y.o`)
//     }  
// }

// // console.log(person.age);
// // person.sayHello();
// person.sayName();
// person.sayAge();


// let person2 = {...person};
// // console.log(person2);
// person2.name = 'Kani'
// person2.age = 22
// person2.sayName()
// person2.sayAge()



// let obj = {
//     name: 'Kani',
//     age: 20,
//     obj2: {
//         name:'Kubat',
//         sayName: () => {
//             console.log(`${this.name}`);
//         }
//     }
// }
// obj.obj2.sayName()