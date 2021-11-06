const array = [12, 21, 32, 44, 51]

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// array.forEach( (elem, index) => {
//     if (index < 3) {
//         console.log(elem);
//         console.log(index)
//     } else if (index===4) {
//         console.log(elem)
//     }
// })

const renderItems = (data) => {
    console.log(data)
}

fetch('./db/partners.json')
    .then((response) => response.json())
    .then((data)=> {
    renderItems(data)
    })