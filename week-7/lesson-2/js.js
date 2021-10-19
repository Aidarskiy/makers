// ! Типы запросов

// ! GET 
// ! fetch
let API = "http://localhost:8000/products";
// //GET
// function getData() {
//   fetch(API)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         console.log(response.statusText);
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// getData();

// ! axios
// async function getDataAxios() {
//     try {
//         const {
//             data
//         } = await axios(API);
//         console.log(data);
//     } catch (e) {
//         console.log(e.response.statusText);
//         const status = e.response.status
//         if(status == 404) {
//             console.log('vvedite correct link');
//         }else if(status == 500) {
//             console.log('nepoladki na servere');
//         }else if (status == 403) {
//             console.log('ne avtorizovan');;
//         }
//     }
// }
// getDataAxios();

// const num = 10;
// try {
//     num = 20;
// } catch(error) {
//     console.log(error);
// }

// ! POST 
let input = document.querySelector('input');
let btn = document.querySelector('button');

// const addProduct = () => {
//     let value = input.value;
//     let product = {
//         title: value,
//     };
//     fetch(API, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(product)
//     })
// }
// btn.addEventListener('click', addProduct)

// const addProduct = async () => {
//     let value = input.value;
//     let product = {
//         title: value,
//     }
//    const res = await axios.post(API, product);
//    console.log(res);
// }
// btn.addEventListener('click', addProduct);

// ! PUT - заменяет весь объект на переданный объект
//! PATCH - заменяет только те поля, которые передали, остальные поля не трогает

function updateProduct() {
    let editedProduct = {
        title: 'Macbook m1pro'
    };

    //! FETCH
//     fetch(`${API}/5`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application'/'json',
//         },
//         body: JSON.stringify(editedProduct),
//     })
// ! AXIOS

axios.patch(`${API}/2`, editedProduct)
}
updateProduct()