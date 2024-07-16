const datUsers_API = 'http://localhost:3000/users/'

export async function dataUsersGET() {
    const response = await fetch(datUsers_API);
    const data = await response.json();
    return data
}