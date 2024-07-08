const products_API = 'http://localhost:3000/categorias/'


export async function TittlePUT(id, taskData) {
    const response = await fetch(products_API + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    });
    if (response.ok) {
        console.log('Cambió');
    }
}