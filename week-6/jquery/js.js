// $('#btn').on('click', function () {
//     alert('clicked ')
// })


// $(document).ready(function() {
// $('#btn').click(function() {
//     alert('BTN CLICKED')
// })

// $(window).on('mousemove', function(event) {
//     console.log(event);
// })

// $(window).mousemove(function(event) {
//     console.log(event);
// })

// $('.default-btn').on('click', function() {
//     $('.buttons').append('<button class="delete">Delete</button>')
// $('.delete').on('click', function() {
//     alert('btn clicked')
// })
// })


// let result = confirm('are you 18 y.o.?');
// if(result) {
//     $('h1').css('display', 'block')
// }

// $('p').empty();
// $('p').remove();

// $('body').html('<h1>Hello Makers Bootcamp!</h1>')
// $('body').after('<div class="container"></div>')



// let clonedElem = $('body').clone();
// console.log(clonedElem);

// clonedElem[0].children[0].innerText = 'Modified';
// console.log(clonedElem);
// $('.container').append(clonedElem)






// })

// let num1 = +prompt('number');
// let num2 =  +prompt('number');
// let result = num1 + num2;
// $('body').html(`<h1>${result}</h1>`)

// function sum() {
//     let num1 = +prompt('number');
//     let num2 =  +prompt('number');
//     let result = num1 + num2;  
//     $('body').html(`<h1>${result}</h1>`)
// }

// function minus() {
//     let num1 = +prompt('number');
//     let num2 =  +prompt('number');
//     let result = num1 - num2;  
//     $('body').html(`<h1>${result}</h1>`)
// }

// function mult() {
//     let num1 = +prompt('number');
//     let num2 =  +prompt('number');
//     let result = num1 * num2;  
//     $('body').html(`<h1>${result}</h1>`)
// }

// function div() {
//     let num1 = +prompt('number');
//     let num2 =  +prompt('number');
//     let result = num1 / num2;  
//     $('body').html(`<h1>${result}</h1>`)
// }

// Задание №1
// 	Всем <h3> поставьте текст '!!!'.
// console.log($('h3'));
// let titles = $('h3');z
    // console.log(i);
//     i.innerText = '!!!'
// }



// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.

// titles.css('color', 'red')

// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

// let list = $('ul');
// for (let i = 1; i <= 30; i++) {
//     list.append(`<li>${i} - овечка</li>`)
// }

// Задание №4
// 	В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active.

// let spans = $('span');
// spans.addClass('active')

// $('.block').fadeOut(2000)
// $('.block').fadeIn(2000)
// $('.block').hide(2000)
// $('.block').show(2000)

// $('.block').fadeOut(2000).delay(3000).show(2000)


// $('div').click(function (e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // if(e.target !== this) return
    // alert('div CLICKED')
    // console.log(this);
// })

// $('p').click(function (e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // if(e.target !== this) return
    // alert('p CLICKED')
    // console.log(this);

// })

// $('button').click(function (e) {
    // console.log(e.currentTarget);
    // console.log(e.target);
    // e.stopImmediatePropagation()
    // if(e.target !== this) return
    // alert('BUTTON CLICKED')
    // console.log(this);

// })




$('button').on('click', function(event) {
    event.preventDefault();
    $('h1').text('Makers Bootcamp')
})