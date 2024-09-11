const myNumber = 24;
console.log(myNumber);
console.log(typeof myNumber);

const myFloat = 42.0;
console.log(myFloat);

const myFloat1 = 42.06;
console.log(myFloat1);

const myVariable = "65";
console.log(myVariable);

console.log(myNumber === myFloat);
console.log(myNumber !== myVariable);

//Change Number to String
const myVariable2 = "786";
console.log(typeof myVariable2);
console.log(myVariable2 + 6);
console.log(Number(myVariable2) + 6);
console.log(typeof Number(myVariable2));

//NAN Not A Number
console.log(Number("Hello")+3);
console.log(Number(undefined)+3);
console.log(Number(true));
console.log(Number(true)+3);
console.log(Number(false)+3);

//Methods
//Integer
console.log(Number.isInteger(42));
console.log(Number.isInteger(42.9));
console.log(Number.isInteger("347.5"));

//ParseFloat
console.log(Number.parseFloat("254.09aa"));
console.log(Number.parseFloat(4567.05));
console.log(Number.parseFloat(4567.0));
console.log(Number.parseFloat("4567.0"));

//To Fixed roundoff
const myVariable4 = 786.8558;
console.log(Number.parseFloat(myVariable4).toFixed(2));

//To String
const myVariable5 = 786.8558;
console.log(typeof myVariable5);
console.log(myVariable5.toString());
console.log(typeof myVariable5.toString());

//Chaining
console.log(parseFloat(myVariable5).toFixed(3).toString());

//Number.isNan
console.log(Number.isNaN("Hello"));
//isNaN
console.log(isNaN("Hello"));