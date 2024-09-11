//Functions
function sum(){
  return 2+5;
}
console.log(sum());

function sum1(num1, num2){
  return num1 + num2;
}
console.log(sum1(7,2));
console.log(sum1(8,9));
console.log(sum1(9,2));
console.log(sum1(10,3));

function sum2(num3, num4){
  console.log(num3);
  console.log(num4);
  if(num4 === undefined){
    return num3 + num3;
  }
  return num3 + num4;
}
console.log(sum2(10)); 

//email @ before
function getUserNameFromEmail(email){
  return(email.slice(0,email.indexOf("@")));
}
console.log(getUserNameFromEmail("jeevakoghilasundar22@gmail.com"));
console.log(getUserNameFromEmail("jeevakoghilasundar@gmail.com"));
console.log(getUserNameFromEmail("jeevakoghila@gmail.com"));
console.log(getUserNameFromEmail("jeeva@gmail.com".toUpperCase()));

//const toProperCase = function(name){} 
//const toProperCase = (name) => {} 
function toProperCase(myName){
  return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
} 
console.log(toProperCase("jeeVa kohjilA"));


