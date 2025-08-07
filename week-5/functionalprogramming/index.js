// const add = (a,b) => {
//     const sum = a + b;
//     return sum;
// }
// console.log(add(6,8));

// const myExpo = y => y**2  // concise arrow function syntax
// console.log(myExpo(5));

// const myArray = [0,1,2]
// const newArray = [...myArray,6] //  ...-spread operator
// const newArray2 = [myArray,6]
// console.log(newArray.length)
// console.log(newArray2.length)

// const greet = function (name){
//     return `hello,${name}`
// }
// const sayHi = greet;
// console.log(sayHi("prudence"))
// // greet is a function assigned to sayHi variable just like you will assign a string or a MutationObserver, remember, functions are values

// function newGreet(name){
//     return `hello,${name}`
// }
// function processUser(callback){
//     const name ="prudence";
//     return callback(name);
// }
  
// function multiplier(a){
//     return function(b){
//         return b*a
//     }
// }
// const bread = multiplier(7);
// console.log(bread(7))
// // bread is  a custom function that is created dynamically and can hold any type of function and value

// class Person{
//     constructor(name){
//         this.name = name
//     }
//     greet(){
//         return `Hello,${this.name}`;
//     }
// }
// const newUser = new Person("Prudence")
// console.log(newUser.greet())

// class Counter{
//     #count= 0
//     increment(){
//         this.#count++
//     }
//     getCount(){
//         return this.#count
//     }
// }
// const newCount = new Counter(2)
// console.log("Check:",newCount.count)
// newCount.count = 1;
// console.log(Counter)
// console.log(newCount)

// class Food{
//     foodName;
//     constructor(food){
//         this.foodName = food
//     }
//     getFood(){
//         return this.foodName
//     }
// }
// const myFood = new Food("gbegiri")
// console.log(myFood.getFood())

// class Animal{
//     speaks(){
//         return "Animal Speaks";
//     }
// }
// class Dog extends Animal{
//     speak(){
//         return "woof"
//     }
// }
//  const newAnimal = new Dog()
//  console.log(newAnimal.speak())

//  const users = [
//    {
//     name: "prudence",
//     age: 11
//    },
//    {
//     name: "mark",
//     age: 11
//    },
//    {
//     name: "pilate",
//     age: 11
//    }
//  ]

//  const getNames = users => users.map( u => u.age**2)
//  console.log(getNames(users))

// const getNames =(users)=>
//     users.map((u) => 
//         // console.log(u)
//         // u.name.toUpperCase()
//        u.age**2
//     )

// console.log(getNames(users))
    
 
// class User  {
//     constructor(name,age){
//        this.name = name;
//         this.age = age;
//     }
//     getUpperName(){
//         return this.name.toUpperCase()
//     }
// }
// const newUsers =[
//     new User("kate",11),
//     new User("katoiuge",11),
//     new User("katxcvbe",11)
// ]
// console.log(User.map(useReducer.getUpperName()))

// const myArray = [
//     [1,2,3]
//     [4,2,3]
//     [5,2,"jh"]
// ]
// const secArray =[2,3,4,5]
// myArray.push(secArray)
// console.log(myArray)
// myArray.pop()
// console.log(myArray)

// const thirdArray = Array(10).fill("how")
// console.log(thirdArray)

const simpArray = [1,2,3]
const sumArray = simpArray[0] = "peter"
console.log(sumArray)
const sumArray1 = simpArray[1]