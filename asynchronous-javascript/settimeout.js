// console.log("start")
setTimeout(()=>{
    // console.log("asynchronous task done")
},2000)
// console.log("end")

function blockingOperation() {
    // similate a long running task
    const start = Date.now()
    while (Date.now() - start < 10000) {
        console.log("busy wait for 5 secs")
    }
    console.log("blocking operation finished")
}
blockingOperation();
console.log("end");

const fetchData = (callback)=>{
    setTimeout(() => {
        callback("data loaded")
    }, 1000);
}
fetchData((result) =>{console.log(result)})