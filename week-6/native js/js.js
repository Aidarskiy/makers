// // let btn = document.getElementById('btn')
// // btn.addEventListener('click', function() {
// //     console.log('Hello Makers!');
// // })
// // // btn.addEventListener('click', handler)

// // btn.addEventListener('click', () => {
// //     console.log('Hello Bootcamp!');
// // })




// // // function handler() {
// // //     alert('thank you')
// // // }


// // inp.addEventListener('input', function(event) {
// //     // console.log(event.target.value);
// //     h1.innerText = event.target.value
// //     console.log(event)
// // })

// // inp.addEventListener('keydown', function(event) {
// //     // console.log(event.target.value);
// //     console.log(event);
// //     h1.innerText = event.key
// // })

// let btn = document.querySelector('#btn')
// let inp = document.querySelector('#inp')
// let container = document.querySelector('#container')

// let addElemToContainer = function() {
//     // console.log(inp.value);
//     let newElem = document.createElement('div');
//     newElem.innerText = inp.value
//     container.append(newElem);
// }

// btn.addEventListener('click', addElemToContainer)
// // console.log(h1, inp);




function validate_form ( )
{
	valid = true;

        if ( document.contact_form.contact_name.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Ваше имя'." );
                valid = false;
        }

        return valid;
}




