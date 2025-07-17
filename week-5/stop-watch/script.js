// get all span Element
const time1 = document.querySelector(".hours")
const time2 = document.querySelector(".minutes")
const time3 = document.querySelector(".seconds")
const startTimer = document.querySelector(".startTimer")
const stopTimmer = document.querySelector(".stopTimer")
const resetTimmer = document.querySelector(".resetTimer")
let hours = 0;
let minute = 0;
let seconds = 0;
let intervalId = null;
const myTimer = () =>{
     if(intervalId) return;
    intervalId = setInterval(
        () => {
            if (seconds === 60){
                seconds = 0
                minute++
                time2.textContent = minute<10 ? "0" + minute : minute
            }else if(minute === 60){
                minute = 0
                hours++
                time1.textContent = hours<10 ? "0" +hours : hours
            }
            time3.textContent=seconds<10 ? "0" +seconds : seconds
            seconds++
        },1000
    )
}
startTimer.addEventListener("click",() =>{
    myTimer()
})

const stopTimer = () =>{
    clearInterval(intervalId)
        intervalId = null
}
stopTimmer.addEventListener("click", () =>{
    stopTimer()
}
)

const resetTimer = () => {
    stopTimer();
    seconds = 0
    minute = 0
    hours = 0
    time1.textContent = `0${hours}`
    time2.textContent = `0${minute}`
    time3.textContent = `0${seconds}`
}
resetTimmer.addEventListener("click",() =>{
    resetTimer();
}
 )



// class Animal{
//        name;
//        constructor(name){
//         this.name = name 
//        }
//        speak(){
//         console.log(`${this.name}makesasound`)
//        }
//      }
//     const elephant = new Animal("elephant")
//     elephant.speak();
// let sum = 0
// setInterval(
//     () =>{
//         console.log(sum)
//         sum+=1
//     },
//     1000
//  )

// let sugar=" ";
// const checkValue = sugar ? "True" : "False"
// console.log(checkValue)