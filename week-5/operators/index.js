// let num1 = 4;
// let num2= "44";
// let sum = num1 + num2;
// console.log("SUM",sum);


// const myDate = new Date();
// myDate.getDay();
// const sugar = myDate.getDay();
// console.log('SUGAR',sugar);

// const myHead=myDate.getDay()
// console.log("myHead:",myHead)
// function myFunction(name){
//     console.log(name)
// }
// console.log("name")
// const myArray=[1,2,3,4]
// const israel=myArray[0]
// console.log(israel)
// const myArraySecond=[1,2,3,4]
// const danel=myArraySecond[1]
// console.log(danel)
// const myArraythird=[1,2,3,4]
// const michael=myArraythird[2]
// console.log(michael)
// const myArrayfourth=[1,2,3,4]
// const eve=myArrayfourth[3]
// console.log(eve)


const myDate = new Date();

const Book1 = {
    title:"Javascript",
    author:"Brenden Eich",
    year: myDate.getFullYear(),
}
// book ["title"] = "victor";
// console.log("TITLE :",Book ["title"]);
// const bookTitle = book.title;
// console.log("TITLE: ",bookTitle);
// const BookAuthor = Book.author;
// console.log("AUTHOR: ", BookAuthor);
// const bookYear = book.year;
// console.log("YEAR: ",bookYear);

class Book {
    title;
    author;
    constructor(booktitle,bookauthor){
        this.title = booktitle;
        this.author = bookauthor;

    }

  getTitle(){
        return this.title
    }
    getAuthor(){
        return this.author
    }
    setTitle(mytitle){
           this.title = mytitle
      }
    setAuthor(myauthor){
        this.author = myauthor
    }
}
const prudence = new Book("booktitle","bookauthor");
prudence.setTitle("arch")
console.log(prudence.getTitle());
console.log(prudence.getAuthor());

class Bankaccount {
    accountname;
    accountnumber;
}

// function mySum(n1,n2){
//     const sum = n1 + n2;
//     return sum;
// }
// const add = mySum(6,11);
// console.log(add);

// function myString(boy,girl){
//     const plus = boy + girl;
//     return plus;
// }
// const plus1 = myString("john","gee")
// console.log(plus1);


function myProduct(n1,n2,n3){
    const sum = n1 * n2 * n3;
    return sum;
}
const add = myProduct(6,6,6)
console.log(add);