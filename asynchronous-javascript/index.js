/**
 * importing a named export
 * use curly braces '{}' and the exact name of the export
 * you can import multiple name export in a single line
*/
import {PI,add} from "./utils.js"
console.log(`the value of pie is ${PI}`)
console.log(`2 + 3 = ${add(2,3)}`)
// importing a defult export.whe importing  defult export the name you give it can be any thing you want
// note that they are no '{}'
import multiply from "./utils.js"
console.log(`4 * 3 = ${multiply(4,3)}`)
/**
 * importing all name export as a single object
 * this is usefull when you bave many name export
*/
import *as utils from "./utils.js"
console.log(`using the imported object : ${utils.add(9,6)}`)
 

co