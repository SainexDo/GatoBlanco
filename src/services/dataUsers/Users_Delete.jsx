const datUsers_API = 'http://localhost:3000/user/'

export async function DELETE(id) {
    const response = await fetch(datUsers_API + id, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}