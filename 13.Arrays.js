//Arrays
const myArray = [];
myArray[0] = "Jeeva";
myArray[1] = "Koghila";
myArray[2] = false;
myArray[3] = true;
myArray[4] = 2324;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[1]);
console.log(myArray[myArray.length-1]);

//Add new in last Array
myArray.push("Lastnew");
console.log(myArray);

//remove last array
myArray.pop();
console.log(myArray);

// add new in front array
myArray.unshift("firstnew");
console.log(myArray);

// remove first array 
myArray.shift();
console.log(myArray);

const lastItem = myArray.push("Heylast");
console.log(lastItem);
console.log(myArray);

const firstItem = myArray.unshift("Heyfirst");
console.log(firstItem);
console.log(myArray);

const lastRemoveItem = myArray.pop();
console.log(lastRemoveItem);
console.log(myArray);

const firstRemoveItem = myArray.shift();
console.log(firstRemoveItem);
console.log(myArray);

//delete array don't use it
//delete myArray[2];
//console.log(myArray);
//console.log(myArray[2]);

//insted use splice
myArray.splice(2,1,"insert"); //start , before end
console.log(myArray);
console.log(myArray[2]);

//slice
const newArray = myArray.slice(1,3);
console.log(myArray);
console.log(newArray);

const reverseArry = myArray.reverse();
console.log(myArray);
console.log(reverseArry);

const joinArray = myArray.join();
console.log(myArray);
console.log(joinArray);

const splitArray = joinArray.split(',');
console.log(myArray);
console.log(splitArray);


myArrayA = ["jeni" , 98, 211, "hello"];
console.log(myArrayA);

const concatArray = myArray.concat(myArrayA);
console.log(concatArray);

const concatArrayA = [...myArray,...myArrayA];
console.log(concatArrayA);

const fruitArray = ["Apple", "Mango", "Orange"];
const vegArray = ["Onion", "Potato", "Tomato"];
const girlArray = ["Jeeva", "Koghila", "Jagatheeswari"];
const boyArray = ["Sundar", "Ramesh"];
const gameArray = ["BasketBall"];

console.log(fruitArray[1],girlArray[1]);
 
const foodArray = [fruitArray,vegArray];
console.log(foodArray);
const worldArray = [girlArray,boyArray];
console.log(worldArray);
console.log(foodArray[0][1],worldArray[0][1]);

const allArray = [foodArray,worldArray,gameArray];
console.log(allArray[0][0][1]);