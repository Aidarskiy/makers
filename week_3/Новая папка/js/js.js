// function checkSum() {
//     let a = +prompt('first');
//     let b = +prompt('second');

//     let sum = a + b;

//     if(sum === 15) {
//         alert('summa ravna 15');
//     }else if(sum < 15) {
//         alert('summa menshe 15') 
//     }else {
//         alert('summa bolshe 15')
//     }
// }

// замыкание

// через глобальную переменную
// let count = 0;
// function counter() {
//     count++
//     return count;
// }

// counter();
// counter();
// console.log(counter());


function counter() {
    let count = 0;
    return function() {
        count++
        return count
    }
}

let first = counter();
console.log(first());
first();
console.log(first());