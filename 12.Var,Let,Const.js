//Var Let Const

var y = 1;
var y = 3;
console.log(y); //error in large code

let x = 1;
//let x = 2; cannot used
console.log(x);

let z = 6;
z = 7;
console.log(z);

const a = 2;
//const a = 5; cannot used
// a = 7; it also cannot used
console.log(a);

//Scope

//Globel Scope
var b = 5;
let c = 6;
const d = 7;
console.log(`globel: ${b}`);
console.log(`globel: ${c}`);
console.log(`globel: ${d}`);
//Local Scope //block scope
//{
//  let c = 8;
//}

//Local Scope //function Scope
function myFunc(){
 const d = 9; 

 if(true){
  let c = 10;
  console.log(`block: ${b}`);
  console.log(`block: ${c}`);
  console.log(`block: ${d}`);
}
 console.log(`function: ${b}`);
 console.log(`function: ${c}`);
 console.log(`function: ${d}`);
}
myFunc()
console.log(d);