const datUsers_API = 'http://localhost:3000/user/'

export async function PUT(id, taskData) {
    const response = await fetch(datUsers_API + id, {
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