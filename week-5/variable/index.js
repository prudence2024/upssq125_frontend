let appName = "upskiilLms"  // Global scope
function startApp(){
    console.log("Inside",appName);
    // can access the global variable
}
startApp();

function sayHi(){
    let name = "jane";
    console.log("Outside",name);
}
sayHi();  // This logs jane
console.log(name);

