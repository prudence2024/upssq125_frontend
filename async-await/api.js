export async function getUsers(){
    try {
        // const res = await fetch("https://jsonplaceholder.typicode.com/users") 
        const res = await fetch("/advanced-javascript/index.json") 
        const users = await res.json()
        console.log(users)
        return users;
       
    } catch (error) {
        console.error("failed to fetch user",error)
    }
}
