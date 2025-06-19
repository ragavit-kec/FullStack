//await is used in try-catch blocks to handle asynchronous operations

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()
        data.map((a)=>console.log(a.name))
        // console.log(data);
        

    }
    catch(error) {
        console.log(error)

    }
}
fetchUsers()