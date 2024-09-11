"use strict";

//Reference Error
//variable = "jeeva";
//console.log(variable);
// ReferenceError: variable is not defined

//  syntax errror
//Object..create();
// SyntaxError: Unexpected token '.' 

//Type error
//const variable = "Jeeva";
//variable = "subscribe";
// TypeError: Assignment to constant variable.

//If you think it could be error then use try{}catch(){} method
//const makeError = () =>{
//  try{
//    const name = "Jeeva";
//    name = "Koghila";
//  }catch(err){
//    console.log(err);
//    console.error(err);
//    console.warn(err);
//    console.table(err);
//  }
//}
//makeError();

//Custom Error
//"use strict";
//const makeError = () => {
 // try{
   // throw new customError("This is a custom Error");
  //}catch(err){
  //  console.error(err.stack);
 // }
//};
//makeError();
//function customError(message){
//  this.message = message;
  //this.name = "Custome Error";
  //this.stack = `${this.name}: ${this.message}`;
//}
// Custome Error: This is a custom Error

//Custome error
"use strict";
const makeError = () => {
  let i = 0;
  while(i<=5){
  try{
    if(i%2!==0){
    throw new Error("Odd Number");
  }
  console.log("Even Number");
  }catch(err){
    console.error(err.stack);
  }finally{
    console.log("...finally");
    i++;
  }
 }
};
makeError();
