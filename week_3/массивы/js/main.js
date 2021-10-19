// push === добавить элемент в конец

// let bookShelf = [1, 2, 3, 4];
// bookShelf.push(5);
// console.log(bookShelf);


//pop === удалить последний элемент

// let bookShelf = [1, 2, 3, 4];
// bookShelf.pop();
// console.log(bookShelf);
// console.log(popped);

// возвратить 

// let bookShelf = [1, 2, 3, 4];
// let popped = bookShelf.pop();
// console.log(bookShelf);
// console.log(popped);


// добавить в начало

// let bookShelf = [1, 2, 3, 4];
// bookShelf.unshift(5, 6, 7);
// console.log(bookShelf);

// убрать в начале

// let bookShelf = [1, 2, 3, 4];
// let shifted = bookShelf.shift();
// // bookShelf = bookShelf.shift();
// console.log(bookShelf)
// console.log(shifted);

// Arrays

// let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

// length
// console.log(numArr.length);

// доступ к элементам массива
// console.log(numArr[3]);

// console.log(numArr[numArr.length - 1]);

const guests = [
    {
        name: 'Alice'
    },
    {
        name: 'John'
    },
    {
        name: 'Mike'
    },
    {
        name: 'Josh'
    }
]

let newGuest = {
    name: 'Alex'
}

//push  в конец
// guests.push(newGuest);
// console.log(guests);

//pop
console.log(guests.pop());
// console.log(guests);


let impGuest = {
    name: 'Jack'
}

//unshift
guests.unshift(
    {name: 'Tom'},
    impGuest,
    {name: 'Bill'});
console.log(guests);

// shift
let kickedGuest2 = guests.shift();
// console.log(kickedGuest2);
console.log(guests);

// slice
let a = guests.slice(1, 5);
console.log(a);

//splice

guests.splice(3, 0, newGuest);
console.log(guests);

let arrAge = [3, 90, 12, 34, 22, 9, 7];

// arrAge.sort();
// console.log(arrAge);


// arrAge.sort((a, b) => a - b);
// console.log(arrAge);



