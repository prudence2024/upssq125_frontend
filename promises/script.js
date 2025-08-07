export const fetchData = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("data fetched")
    }, 10000);
    })
}
// fetchData()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// const elementHolder = document.getElementById("demo")
// fetchData()
// .then((res)=>{
//     console.log(res);
//      return "next step"})
// .then((next)=>{
//     elementHolder.innerText = next
// })
