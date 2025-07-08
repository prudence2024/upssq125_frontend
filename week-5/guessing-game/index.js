/* In the initial design brief*/
let randomNumber = Math.floor(Math.random() * 100) + 1
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHigh =  document.querySelector(".lowOrHigh")
const getSubmit = document.querySelector("getSubmit")
const getFilled = document.querySelector("getFilled")
let getCount = 1
let resetButton;