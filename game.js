let playerScore = 0;
let computerScore = 0;

let computerPlay = () => {
  // Computer will randomly return rock, paper, or scissors
  // Use numbers to determine output
  // 0 = Rock, 1 = Paper, 2 = Scissors
  let decision = Math.floor( Math.random() * 3 );
  switch (decision) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

let playRound = (playerSelection, computerSelection) => {
  playerSelection = prompt("Rock, paper, or scissor?");
  computerSelection = computerPlay().toLowerCase();
  //console.log(computerSelection)
  playerSelection = playerSelection.toLowerCase();
  //console.log(playerSelection);

  // If player selects rock and comp selects paper, comp wins
  // If player selects paper and comp selects scissor, comp wins
  // If player selects scissor and comp selects rock, comp wins

  if (playerSelection == computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock") ) {
      computerScore++;
      return "Computer wins!";
    } else {
      playerScore++;
      return "You win!";
    }
}

let game = () => {

  for (let i = 0; i < 5; i++) {
    console.log( playRound() );
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
  }
  if (computerScore > playerScore) {
    return "You lose )-:";
  } else if (computerScore == playerScore) {
    return "Tie game!"
  } else {
    return "You Win! :D"
  }
}

console.log( game() );