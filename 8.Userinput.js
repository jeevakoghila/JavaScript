let myBoolean = alert("Hello Guys");
console.log(myBoolean);

let myBoolean1 = confirm("OK === True\n Cancel === False");
console.log(myBoolean1);

let my1 = prompt("Enter Your Name");
console.log(my1);//cancel null

//let my2 = prompt("Enter Your Name");
//if(my2.length){
//  console.log(my2 ?? "You didn't Enter your name");
//}
//else{
// console.log("You didn't Enter your name");
//}

let my3 = prompt("Enter Your Name");
if(my3){
  console.log(my3 ?? "You didn't Enter your name");
}
else{
  console.log("You didn't Enter your name");
}
console.log(my3.trim().length);