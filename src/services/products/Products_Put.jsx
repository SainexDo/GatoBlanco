const products_API = 'http://localhost:3000/products/'

export async function productPUT(id, nombreEdit, categoriasEdit, descripcionEdit, precioEDit) {
    const response = await fetch(products_API + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombreEdit,
            categorias: categoriasEdit,
            descripcion: descripcionEdit,
            precio: precioEDit
        })
    });
    if (response.ok) {
        console.log('Cambió');
    }
}