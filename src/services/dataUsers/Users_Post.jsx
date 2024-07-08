const datUsers_API = 'http://localhost:3000/user/'

export function POST(taskData) {
    fetch(datUsers_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    })
    .then(response => response.json())
    .then(data => {
    })
}