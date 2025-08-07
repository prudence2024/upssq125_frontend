import { fetchData } from "../promises/script.js";
import { getUsers } from "./api.js";
 async function loadData(){
    try {
       const myData = await fetchData() 
       console.log(myData)
    } catch (err) {
        console.error("error:",err)
    }
}
loadData();
 const  mythead = document.getElementById("head")
 const  mytBody = document.getElementById("body")
 getUsers().then((users)=>{
    const userProperties = Object.keys(users[0])
    for (const store of userProperties) {
        mythead.innerHTML += `<td>${store}</td>`
    }
    users.forEach((user)=>{
    // const {name,username,email,...remain} = user
    let myTr = ""
    for (const userData of Object.keys(user)) {
      myTr += `<td>${user[userData]}</td>`
 
    }
      console.log(name)
      mytBody.innerHTML += myTr
    })
})



