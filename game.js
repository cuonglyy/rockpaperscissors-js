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
      return "scissors";
  }
}

console.log( computerPlay() );

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  // If player selects rock and comp selects paper, comp wins
  // If player selects rock and comp selects scissor, player wins
  // If player selects rock and comp selects rock, it's a tie

  if ( playerSelection === "rock" ) {
    if ( computerSelection === "rock") {
      return "Tie!";
    } else if ( computerSelection === "paper") {
      return "You Lose! Paper beats Rock.";
    } else {
      return "You Win! Rock beats Scissor.";
    }
  }
}

let playerSelection = "rOCk";
let computerSelection = computerPlay().toLowerCase();
console.log(playRound(playerSelection, computerSelection))