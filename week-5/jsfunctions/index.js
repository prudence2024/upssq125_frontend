const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2")
const para3 = document.getElementById("para3")
console.log(para1);
console.log(para2);
console.log(para3);

function myAnimal(n1, n2,n3){
   para1.textContent= n1
   para2.textContent= n2
   para3.textContent= n3
  
}
myAnimal("sugar","sweet","ram");