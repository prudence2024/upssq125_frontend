const container = document.getElementById("demo")
const button = document.getElementById("GamepadButton")
const grabButton = document.getElementById("submit")
const para1 = document.getElementById("demo1")
const button2 = document.getElementById("click")
function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        "geolocation is not supported by this browser"
    }
}
function showPosition(position){
 container.innerHTML = `latitude: ${position.coords.latitude} <br> longitude: ${position.coords.longitude}`

}
button.addEventListener("click", ()=>{
   getLocation();
})


function myInput(){
    const input = document.getElementById("addNumber")
    if (!input.checkValidity()) {
        para1.innerHTML = input.validationMessage
    }
}
grabButton.addEventListener("click", ()=>{
    myInput();
})


function test(){
    console.log("check:",window.history.length)
    window.history.back()
}
button2.addEventListener("click", ()=>{
    test();
})
