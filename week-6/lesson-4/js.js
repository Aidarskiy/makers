// jQuery events

// !ready
// $(document).ready(() => {
//     console.log('DOM загружен');
// });


// !click
// let btn = $('button');
// btn.on('click', () => {
//     console.log('Hi');
// })

// !dblclick
// let btn = $('button');
// function sayHello() {
//     alert('Hello')
// }
// btn.on('dblclick', sayHello)

// !focus
// let input = $('input');
// input.on('focus', () => {
//     console.log('Est focus');
// })

// !blur
// input.on('blur', () => {
//     console.log('Ubrali focus');
//     if(!input.val()) {
//         // alert('Dannoe pole obyazatelno dlya zapolneniya')
//         input.css('border', '2px solid red')
//     }else {
//         input.css('border', '2px solid yellow')
//     }
// })


// !input
// input.on('input', (e) => {
//     console.log(e.target.value);
// })


// !select 
// let input = $('input');
// input.on('select', (e) => {
//     console.log(e);
// })

// let p = $('p');

//  !ne rabotaet
// p.on('select', (e) => {
//     console.log(e);
// })


//! rabotaet
// let strong = $('strong');
// p.on('mouseup', (e) => {
//     let selectedText = window.getSelection().toString();
//     strong.text('Вы выделили : ' + selectedText)
// });

// ! HIDE SHOW TOGGLE
// let img = $('img');
// let btnHide = $('#btn-hide')
// let btnShow = $('#btn-show')
// let btnToggle = $('#btn-toggle')

// btnHide.on('click', () => {
//     img.hide(2000);
// })

// btnShow.on('click', () => {
//     img.show(2000);
// })

// btnToggle.on('click', () => {
//     img.toggle(1500);
// })



// !fadeIn, fadeOut, fadeTo, fadeToggle
// let img = $('img');
// let btnFadeOut = $('#btn-hide')
// let btnFadeIn = $('#btn-show')
// let btnFadeTo = $('#btn-to')
// let btnFadeToggle = $('#btn-toggle')


// btnFadeOut.on('click', () => {
//     img.fadeOut(1000)
// })

// btnFadeIn.on('click', () => {
//     img.fadeIn(1000)
// });

// btnFadeToggle.on('click', () => {
//     img.fadeToggle(1500)
// })

// btnFadeTo.on('click', () => {
//     img.fadeTo(1500, 0.5)
// })


// // !modal
// let btnShowModal = $('.show-nodal');
// let btnCloseModal = $('.my-modal button');
// let modal = $('.modal');
// let myModal = $('.my-modal')
// function showModal() {
//     modal.fadeIn(1200).css('display', 'flex');
// }

// function closeModal() {
//     modal.fadeOut(1500);
// }

// btnShowModal.on('click', showModal);
// btnCloseModal.on('click', closeModal);
// let h3 = $('.myModal h3');
// let p = $('.myModal p');
// modal.on('click', (e) => {
//     if(e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]) {
//         closeModal();
//     }
// })


// // ! range input
// let range = $('#range');
// let img = $('img');
// range.on('change', (e) => {
//     let value  = e.target.value;
//     img.fadeTo(500, value)
// })


















let upgradeTime = 172801;
let seconds = upgradeTime;
function timer() {
  let days        = Math.floor(seconds/24/60/60);
  let hoursLeft   = Math.floor((seconds) - (days*86400));
  let hours       = Math.floor(hoursLeft/3600);
  let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  let minutes     = Math.floor(minutesLeft/60);
  let remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
let countdownTimer = setInterval('timer()', 1000);












