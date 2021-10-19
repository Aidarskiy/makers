// let list = $('.task-list');

// // XMLHttpRequest
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:8000/todos')
// xhr.send();
// xhr.onload = function() {
//     // console.log(xhr.response);
//     let data = JSON.parse(xhr.response);
//     // console.log(data);
//     data.forEach(element => {
//       list.append(`<li>${element.task}</li>`)  
//     });
// }

// fetch

// let list = $('.task-list');

// let promise = fetch('http://localhost:8000/todos')
// promise
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data);
//         data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//         }); 
//     })

// ajax


// let list = $('.task-list');

// $.ajax({
//     url: 'http://localhost:8000/todos',
//     type: 'GET',
//     success: function(data) {
//         // console.log(data);
//                 data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//         });
//     },
//     error: function() {
//         console.log('ERROR');
//     }
// })


let btn = $('.btn');
let inp = $('.task-input');
let list = $('.task-list');

btn.on('click', function() {
    let value = inp.val();

})

function postNewTask() {
    
}














