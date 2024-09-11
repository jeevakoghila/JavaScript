// switch (expression or values){
//   case choice1:
//        run code;
//   break;
//   case choice2:
//        run code;
//   break;
//   default:
//       run different code;
// }

switch("2"){
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("Not There");
}

switch(2){
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("Not There");
}

switch(3){
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("Not There");
}

switch(Math.floor(Math.random() * 4)){
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("Not There");
}

//Example
let player = "rock";
let computer = "rock";
switch (player) {
  case computer:
    console.log("Tie");
    break;
  default:
    console.log("No Tie");
}

let player1 = "rock";
let computer1 = "scissors";
switch (player1) {
  case computer1:
    console.log("Tie");
    break;
  case "rock":
    if(computer1 === "scissors"){
      console.log("Player wins");
    }
    else{
      console.log('Computer wins');
    }
    break;
  default:
    console.log("No Tie");
} 