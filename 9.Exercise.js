let startGame = confirm("Lets start the game rock, paper, scissor");

if(startGame){
  let playerChoice = prompt("Please enter rock, paper, scissors.");
  if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ){
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock"
      :computerChoice === 2 ? "paper"
      : "scissors";
      let result = playerOne === computer 
      ? "Tie Game"
      :playerOne === "rock" && computer === "paper"
      ? `playerOne ${playerOne}\nComputer: ${computer}\nComputer wins!`
      :playerOne === "paper" && computer === "scissors"
      ? `playerOne ${playerOne}\nComputer: ${computer}\nComputer wins!`
      :`playerOne ${playerOne}\nComputer: ${computer}\nPlayer wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("k, thanks for playing.");
    } else{
      alert("You didn't enter rock, paper, or scissors.")
    }
  } else{
    alert("I guess you changed your mind. Maybe next time.");
  }
}
  else{
    alert("Ok, maybe next time.");
}