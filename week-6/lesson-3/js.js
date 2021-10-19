// ! JQuery

// let allElems = $('*');
// console.log(allElems);

// tagName

// let h1 = $('h1');
// console.log(h1);
// h1.css('fontSize', '24px');


// by className
// let month = $('.october');
// console.log(month);

// let liTags = document.querySelectorAll('li');
// liTags.forEach((item) => {
//     item.style.color = 'blue0';
// })

// let liTags = $('li');
// liTags.css('color', 'blue')
// let thirdLiTag = $('li:nth-child(3)') // by number
// let thirdLiTag = $('li:eq(2)') //by index
// thirdLiTag.css('color', 'red')
// let first = $('li:first-child');
// first.css('fontWeight', '700')
// $('li:last-child').css('fontSize', '50px')


// let inputs = $('input')
// let disabledInput = $('input:disabled')
// console.log(disabledInput);
// disabledInput.val('Ne rabotaet')
// let value = disabledInput.val();
// console.log(value);

// let liTags = $('li');
// liTags.addClass('list-item');
// liTags.toggleClass('list-item')
// liTags.toggleClass('active')
// liTags.removeClass('list-item');
// let result = liTags.hasClass('active');
// console.log(result);

// let divWithoutClass = $('div:not(.block)');
// console.log(divWithoutClass);

// let paragraph = $('.text');
// let text = paragraph.text();
// console.log(text);
// paragraph.text(paragraph.text() + ' Hello')
// paragraph.html('<strong><em>JSFS-13</em></strong>')

// let div = $('#users');
// let users = [
//     {
//         name: 'Aidar',
//         age: 19,
//     },
//     {
//         name: 'Askar',
//         age: 17,
//     },
//     {
//         name: 'Isaya',
//         age: 18,
//     },
// ]
// users.forEach(item => {
//     div.append(`
//         <p>Имя: ${item.name},<br> Возраст: ${item.age}</p>
//         <strong>14:55</strong>
//     `)
// })

// let google = $('a[href="google.com"');
// console.log(google);

// let p = $("p");
// p.text(new Date())

// let google = $('a:first');
// let href = google.attr('href', "amazon.com");
// google.removeAttr('href')
// google.attr('id', 'global');
// console.log(href);

// let href = google.prop('href');
// console.log(href);


let btnStart = document.querySelector('.start');
let btnReset = document.querySelector('.reset');
let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let winner = document.querySelector('.winner')

btnStart.addEventListener('click', () => {
    let randomNum1 = Math.floor(Math.random() * (450 - 400) + 400)
    let randomNum2 = Math.floor(Math.random() * (450 - 400) + 400)

    car1.style.transform = `translateX(${randomNum1}px)`
    car2.style.transform = `translateX(${randomNum2}px)`

    setTimeout(() => {
        if (randomNum1 > randomNum2) {
            winner.innerHTML += ' ' + 'Car #1';
        } else {
            winner.innerHTML += 'Car #2';
        }
    }, 1000)
})

btnReset.addEventListener('click', () => {
    winner.innerHTML = 'Winner is:'
    car1.style.removeProperty('transform')
    car2.style.removeProperty('transform')
})