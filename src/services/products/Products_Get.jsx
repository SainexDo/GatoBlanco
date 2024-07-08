const products_API = 'http://localhost:3000/products/'

export async function productsGET() {
    const response = await fetch(products_API);
    const data = await response.json();
    return data
}