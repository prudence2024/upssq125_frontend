// get all span Element
const time1 = document.querySelector(".hours")
const time2 = document.querySelector(".minuite")
const time3 = document.querySelector(".seconds")
const stopTimer = document.querySelector(".stopTimer")
const startTimer = document.querySelector(".startTimer")
const resetTimer = document.querySelector(".resetTimer")
let seconds = 0;
let hours = 0;
let minute = 0;
let intervalid = null;
const myTimer = () =>{
    intervalid = setInterval(
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