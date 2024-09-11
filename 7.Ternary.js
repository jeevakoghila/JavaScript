//condition ? exprIfTrue : exprIfFalse 
const age = 27;
const beverage = age >= 25 ? "beer" : "Juice";
console.log(beverage);
const age1 = 18;
const beverage1 = age1 >= 25 ? "beer" : "Juice";
console.log(beverage1);

let subscribe = "Subscribed";
let response = subscribe ? "Welcome" : "Please Subscribe";
console.log(response);
let subscribe1;
let response1 = subscribe1 ? "Welcome" : "Please Subscribe";
console.log(response1);

let testScore = 76;
let grade = testScore > 80 ? "A"
: testScore > 70 ? "B"
: testScore > 60 ? "C"
: testScore >= 35 ? "D"
: "F";
console.log(grade);

let player = "rock";
let computer = "rock";
let score= player === computer ? "Tie"
:player === "rock" && computer === "paper" ? "Computer wins"
:player === "paper" && computer === "scissors" ? "Computer wins"
:player === "scissors" && computer === "rock" ? 
"Computer wins"
:"Player wins";
console.log(score); 