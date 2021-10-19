    // let products = ['nike', 'puma', 'bigser'];
    // // let newArr = products.for((item) => console.log(item));
    // // console.log(newArr);
    // let newArr = products.map((item) => item);
    // console.log(newArr);


    // let arr = ["Есть", "жизнь", "на", "Марсе"];
    // let newArr = arr.map(item => {
    //     return item.length
    // })
    // console.log(newArr);


    // let names = ['sam', 'luck', 'james'];
    // names = names.map(item => {
    //     let newStr = item[0].toUpperCase() + item.slice(1);
    //     return newStr;
    // })
    // console.log(names);


    // let arr = [1, 3, 10, -11, -555, 10];
    // let newArr = arr.filter(item => item < 0);
    // console.log(newArr);

    // let arr = ['str', 1, [3,4], true, ['str'], 10];
    // let newArr = arr.filter((item) => {
    //     // console.log(item);
    //     return Array.isArray(item);
    // });
    // console.log(newArr);

                                 //переводим        //перевод
    // let num = 123456789;        //в массив          //в строку
    // let newNum = +num.toString().split('').reverse().join('');
    // console.log(newNum);



    function palindrome(word) {
        let secondWord = word.split('').reverse().join('');
        if(word.toLowerCase().trim() === secondWord.toLowerCase().trim()) {
            console.log('palindrome');
        }else {
            console.log('not a palindrome');
        }
    }
    palindrome('Азиза ')

    // Метод trim() убирает все пробелы до 1го символа и после последнего символа.