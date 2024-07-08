const products_API = 'http://localhost:3000/categorias/'

export async function TittleproductsGET() {
    const response = await fetch(products_API);
    const data = await response.json();
    return data
}