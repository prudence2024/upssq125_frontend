// const obj = {
//     name : "sarah",
//     age : 50,
// }
// const checkType = typeof(obj)
// const strObject = JSON.stringify(obj)
// // console.log(checkType)
// const checkType1 = typeof(strObject)
// // console.log(checkType1)
// // console.log(strObject)
// // console.log(obj)
// const obj1 = "{'name' : 'sarah','age' : 50}"
// const checkType2 = typeof(obj1)
// console.log(checkType2)
// console.log("obj1")
// const stringJSON = JSON.stringify(obj1)
// const changeJSON = JSON.parse(stringJSON)
// console.log(changeJSON)
// console.log(typeof(changeJSON))
// console.log(strObject)
// console.log(typeof(strObject))
/** 
*@param {string} fName
*/
const greeting = (fName ="prudence") =>{
   const newGreeting = `Hello,${fName}`
   console.log(newGreeting)
}
greeting()


const personObj ={
    name:"prudence",
    age : 99,
    adminNum: "unilag1248"
}
// destructuring
const{name,age,adminNum}  = personObj
document.getElementById("demo").innerHTML = name;

const myArray = ["red", "blue", "green"]
const [colorRed, ,colorGreen] = myArray
document.getElementById("demo1").innerHTML = colorRed
document.getElementById("demo2").innerHTML = colorGreen

let first = "f"
const second = first === "f" ? "girl" : "boy";
console.log(second)

const firstArray= ["cat","goat"]
const secondArray= ["toy",7]
const thirdArray = [...firstArray, ...secondArray]
console.log(thirdArray)

const school ={
    name:"suncity",
    place:"magboro"
}
const business ={
    type:"prudenceInc",
    size:"large"
}
const totalObj ={...school,...business}
console.log(totalObj)

const myFunction =(...n1)=>{
    return n1.reduce((total,num)=>total + num, 0);
}
console.log(myFunction(7,8,9));


// const theElementName = document.getElementById('list')
// const fruitArray = ['Apple', 'Orange', 'Banana']
// for (const theFruit of fruitArray) {
//     theElementName.innerHTML += `<li> ${theFruit} </li>`
// }
// fruitArray.forEach(fruit =>{
//     theElementName.style.color = 'red'
// })

const obj2= {
    names: ["tolu","prudence","malik","micheal","aminah","james","angela","sandy","sandra","ola"],
    scores:[{
        physics:100,
        chemistry:74,
        Math:47,
        english:92,
    },
    {
        physics:100,
        chemistry:100,
        Math:100,
        english:100,
    },
    {
        physics:57,
        chemistry:67,
        Math:13,
        english:47,
    },
    {
        physics:17,
        chemistry:29,
        Math:39,
        english:45,
    },
    {
        physics:14,
        chemistry:56,
        Math:74,
        english:18,
    },
    {
        physics:10,
        chemistry:20,
        Math:30,
        english:40,
    },
    {
        physics:10,
        chemistry:20,
        Math:30,
        english:40,
    },
    {
        physics:10,
        chemistry:20,
        Math:30,
        english:40,
    },
    {
        physics:10,
        chemistry:20,
        Math:30,
        english:40,
    },
    {
        physics:100,
        chemistry:37,
        Math:49,
        english:67,
    }
]
}

console.log(obj2.names.entries())
for (const entry of obj2.names.entries()) {
    console.log(entry)
}

const results =[]
for (const [index,name] of obj2.names.entries()) {
   let newObj = {}
   newObj["name"] = name
   newObj["scores"] =obj2.scores[index]
   result.push(newObj)
}
console.log(result)
const nameContent = document.getElementById("result")
results.forEach((result)=>{
    const {name,scores} = result
    const {physic,english,Math,chemistry} = scores
    console.log(name)
    console.log(scores)
    let nameElement = `<h3>${name}</h3>`
    let pElement = ""
    for(const subjectScores in Object.keys(scores)){
        pElement +=`<p> ${scores[subjectScores]}</p>`
    }
    nameContent.innerHTML += nameElement
    nameContent.innerHTML +=pElement
})
// destructuring is a feature tht let you un pack vlues from arrays from property of objest into distinct value

// const [name1]= obj2.names
// document.getElementById("demo3").innerHTML = name1
// const [score1]= obj2.scores
// document.getElementById("demo4").innerHTML = obj2.scores.score
