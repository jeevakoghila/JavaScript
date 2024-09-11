//JSON - JavaScript Object Notation
// text file fromate
// to send & recive data in many programming languages

const myObj = {
  myname : "Jeeva",
  content : ["Happy", "Joy", "Enjoy"],
  sub : function(){
    console.log("Thank you for clicking bell icon");
  }
};

console.log(myObj);
console.log(myObj.myname);
console.log(myObj.content);
myObj.sub();

//Object to String text formate
const sentJSON = JSON.stringify(myObj);
console.log(sentJSON);
console.log(sentJSON.myname);
console.log(typeof myObj);
console.log(typeof sentJSON);

//String to Object 
const reciveJSON = JSON.parse(sentJSON);
console.log(reciveJSON);
console.log(typeof reciveJSON);
console.log(typeof myObj);
console.log(reciveJSON.myname);
console.log(reciveJSON.content);