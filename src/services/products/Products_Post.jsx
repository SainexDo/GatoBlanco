const products_API = 'http://localhost:3000/products/'

export function productsPost(infoProduct) {
    fetch(products_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoProduct)
    })
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => {
        alert('ERROR POST')
    });
}