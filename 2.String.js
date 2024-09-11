let str = "Hello";
console.log(typeof str);
//Let allows you to reassign the variable's value after its initial declaration
let x = 10;
x = 20; //This is allowed with let
console.log(x);

//Const  does not allow reassign a value to a const variable, it cannot be changed.
const y = 10;
// y = 20; //This will throw an error with const
console.log(y);

//Creating Stings
// DOuble Quotes 
let str1 = "Hello, World!";
console.log(str1);
//Single Quotes
let str2 = 'Hello, World!';
console.log(str2);
//Tempate literals
let str3 = `Hello, World!`;
console.log(str3);

let myVariable = "Mathematics";
console.log(myVariable);

//Length start with 1
console.log(myVariable.length);
console.log("This is web page".length);

//Methods

//Character At Variable start with 0
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(1));
console.log(myVariable.charAt(9));
console.log(myVariable.charAt(10));
//console.log(myVariable.charAt(11)); not display

//Index OF starting index of variable
console.log(myVariable.indexOf("at"));
console.log(myVariable.indexOf("ati"));
console.log(myVariable.indexOf("t"));
console.log(myVariable.indexOf("m"));
console.log(myVariable.indexOf("M"));
console.log(myVariable.indexOf("Mat"));

//Last Index Of last index of variable
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.lastIndexOf("mat"));
console.log(myVariable.lastIndexOf("aist"));
console.log(myVariable.lastIndexOf("a"));
console.log(myVariable.lastIndexOf("t"));
console.log(myVariable.lastIndexOf("c"));

//Slice the variable slice(starting,before ending)
console.log(myVariable.slice(5,8));
console.log(myVariable.slice(5,3));//small to greater num otherwise wont display
console.log(myVariable.slice(5)); //fully after included in single number
console.log(myVariable.slice(5,6));

//To Upper Case
console.log(myVariable.toUpperCase());

//To Lower Case
console.log(myVariable.toLowerCase());

//Inclues is there is that letter or word true otherwise false
console.log(myVariable.includes("jeeva"));
console.log(myVariable.includes("mat"));

//Split the word or letter or anything
console.log(myVariable.split("e"));
console.log("Get, Give, Grow".split(" "));
console.log("Get, Give, Grow".split(","));
console.log("Get, Give, Grow".split(""));

//Concatenate
let str4 = "Hello";
let str5 = "World";
console.log(str4.concat(", ",str5,"!"));

//Replace 
let str6 = "Hello, World!";
console.log(str6.replace("World","JavaScript"));

//Trim remove whitespace
let str7 = "    Hello,    World!";
console.log(str7.trim());

//Start and End true or false
let str8 = "Hello, World!";
console.log(str8.startsWith("Hello"));
console.log(str8.endsWith("World!"));

//Template literals
//Multiline Strings
let str9 = `Hello, 
World!`;
console.log(str9);
//String interpolution
let str10 = "JavaScript";
let str11 = `Hello, ${str10}!`;
console.log(str11);

//Escape Sequene
//New Line and Tab
let str12 = "Hello\t,\nWorld\t!";
console.log(str12);

//String Immutablity(cannot change)
let str13 = "Hello";
str13[0]="J"; //It wont be changed
console.log(str13);

//Type Conversion
let num = 123;
console.log(typeof num)
let str14 = String(num);
console.log(typeof str14);
let str15 = num.toString();
console.log(typeof str15);

//Comparision 0l
console.log("apple" >= "banana");
console.log("apple" <= "banana");
console.log("apple" <= "apple");
console.log("apple" >= "apple");