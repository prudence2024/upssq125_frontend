/* In the initial design brief*/
let randomNumber = Math.floor(Math.random() * 100) + 1
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHigh =  document.querySelector(".lowOrHigh")
const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector("#guessField")
let guessCount = 1
let resetButton;

function checkGuess(){
    // console.log("I am a placeholder")
    const userGuess = Number(guessField.value);
    // IF CONDITIONAL  STATEMENT
    if(guessCount==1){
        guesses.textContent="previous guesses:"
    }
    guesses.textContent += ` ${userGuess}`;
    // if conditional statement
    if(userGuess===randomNumber){
        lastResult.textContent="Congratulations! you got it right";
        lastResult.style.backgroundColor="green";
        lowOrHigh.textContent="";
        setGameOver();
    }else if( guessCount===10){
        lastResult.textContent="!!!GAME OVER!!!";
        lowOrHigh.textContent="";
        setGameOver();
    }else{
        lastResult.textContent="wrong";
        lastResult.style.backgroundColor="red";
        if(userGuess<randomNumber){
            lowOrHigh.textContent="Last Guess was too low!!"
        }else if(userGuess>randomNumber){
            lowOrHigh.textContent="last Guess was too high"
        }
    }
    guessCount++
    guessField.value="";
    guessField.focus();
}
guessSubmit.addEventListener("click",checkGuess)
function setGame(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="start new Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame)
}
function resetGame(){
    guessCount=1;
    const resetParas=document.querySelectorAll(".resetParas p")
    // for loop
    for(const resetPara of resetParas){
        resetPara.textContent="";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value="";
    guessField.focus();
    lastResult.style.backgroundColor="white";
    randomNumber=Math.floor(Math.random()*100) + 1

}
// console.log(guesses)
