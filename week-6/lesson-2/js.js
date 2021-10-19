// // Native JS events

// // DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('dom загружен');
// })


// let btn = document.querySelector('button');

// // #2
// // btn.onclick = () => {
// //     alert('clicked')
// // }

// // #3
// // btn.addEventListener('click', (event) => {
// //     // alert('clicked')
// //     console.log(event);
// // })



// // online, offline ===================================================================================
// // window.addEventListener('offline', () => {
// //     console.log('пропал интернет');
// // })

// // window.addEventListener('online', () => {
// //     console.log('появился инет');
// // })



// // mousemove - любое движение мышью
// //mousedown - при нажатии на мышь
// //mouseup - при отпускании мыши

// // document.addEventListener('mousemove', (e) => {
// //     console.log(e);
// // })

// // document.addEventListener('mousedown', (e) => {
// //     console.log(e);
// // })


// // document.addEventListener('mouseup', (e) => {
// //     console.log(e);
// // })

// // input - на каждое изменение инпута
// // paste - когда вставляем
// // copy - когда копируем

// // let input = document.querySelector('input');
// // let h3 = document.querySelector('h3')
// // input.addEventListener('input', (e) => {
// //     console.log(e.target.value);
// //     h3.innerText = e.target.value
// // })

// // input.addEventListener('paste', () => {
// //     alert('Skopirovat')
// // })

// // input.addEventListener('copy', (e) => {
// //     alert('NO!')
// // })


// // resize - при изменении экрана
// // window.addEventListener('resize', (e) => {
// //     console.log(e);
// // })


// //submit - у тега form при нажатии на enter
// // let input = document.querySelector('input');
// // let form = document.querySelector('form');
// // let ul = document.querySelector('ul')
// // form.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     let text = input.value;
// //     let li = document.createElement('li');
// //     li.innerText = text;
// //     ul.append(li);
// //     input.value = ''
// // });

// // keypress - любое нажатие клавиши
// // keydown - при нажатии клавиши
// // keyup - при отпускании клавиши

// //  !document.addEventListener('keypress', (e) => {
// //    ? console.log(e);
// // })

// // *document.addEventListener('keydown', (e) => {
// //     console.log(e);
// // })

// // TODO document.addEventListener('keyup', (e) => {
// //     console.log(e);
// // })

// let span = document.querySelector('.first-span')
// let btnChangeColor = document.querySelector('.change-color');
// let btnChangeSize = document.querySelector('.change-size');



// btnChangeColor.addEventListener('click', () => {
//     let red = Math.ceil(Math.random() * 255);
//     let green = Math.ceil(Math.random() * 255);
//     let blue = Math.ceil(Math.random() * 255);
//     span.style.color = `rgb(${red}, ${green}, ${blue})`;
// })

// btnChangeSize.addEventListener('click', () => {
//     span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`;
// })

// let input = document.querySelectorAll('input');
// input[0].placeholder = 'placeholder'


// let a = document.querySelectorAll('a');
// a.forEach((item) => {
//   item.style.textDecoration = 'none';
// });

// let seven = document.getElementsByTagName('a')
// let seven1 = getComputedStyle(seven[1])
// console.log(seven1.color)

let links = document.querySelectorAll('a');
links.forEach((item) => {
    item.setAttribute('href', 'https://developer.mozilla.org/ru/docs/Web/API/Window/getComputedStyle');
    item.setAttribute('target', '_blank')
})

let list = document.getElementsByTagName('ul')
// let list = document.querySelectorAll('ul');
let count = 1;
function sheep() {
    list[0].innerHTML += `<li>${count} -sheep</li>`
    count++
    if(count === 21) {
        clearInterval(x)
    }
}
let x = setInterval(sheep, 500)
// let x = setTimeout(sheep, 500)

