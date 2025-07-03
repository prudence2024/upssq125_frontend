// function: Create a new paragraph and append it to the buttom of the html body
// function createParagraph() {
//   const para = document.createElement("p");
//   para.textContent = "You clicked the button!";
//   document.body.appendChild(para);
// }
// function: Get references to all the buttons in an array format
// const buttons = document.querySelectorAll("button");
// for (const button of buttons) {
//   button.addEventListener("click", createParagraph);
// }
const buttons = document.querySelectorAll("button");
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
// look through all the buttons and add a click event listener to each one
// when any button is pressed, the create paragraph functioned will be runned
for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
