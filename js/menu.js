const restau = 'food-band'

const renderItems = (data) => {
    console.log(data)
}

fetch(`https://first-and-best-default-rtdb.firebaseio.com/db/partners.json`)
    .then((response) => response.json())
    .then((data)=> {
    renderItems(data)
    })

    // .catch((error) => {
    //     console.log(error)
    // })
    // .finally(console.log('finally'))