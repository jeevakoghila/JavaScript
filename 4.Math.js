//PI Value 
console.log(Math.PI);

//PI Value in Trunc 
console.log(Math.trunc(Math.PI));

//Round of
console.log(Math.round(Math.PI));
console.log(Math.round(4.5));
console.log(Math.round(4.4));
console.log(Math.round(4.8));

//ceil
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.8));

//floor
console.log(Math.floor(4.1));
console.log(Math.floor(4.8));

//power
console.log(Math.pow(3,5)); //3 power 5

//Maximum
console.log(Math.max(10,7,27,556,8.0));

//Minimum
console.log(Math.min(10,7.5,27,556,8.0));

//Random
//start with 0
console.log(Math.random());

//start with 0 to 10
console.log(Math.random() * 10);

//with floor and random 0 to 9
console.log(Math.floor(Math.random() * 10));

//to add last number also
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 100) + 1);

//random letters
console.log("Jeeva".charAt(Math.floor(Math.random() * 5)));

//any name automaticaly caculate length
const myName = "JeevaKoghila";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
