let computerPlay = () => {
  // Computer will randomly return rock, paper, or scissors
  // Use numbers to determine output
  // 0 = Rock, 1 = Paper, 2 = Scissors
  let decision = Math.floor( Math.random() * 3 );
  if ( decision === 0 ) {
    return "rock";
  } else if ( decision === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

console.log( computerPlay() );

let playerSelection = "rOCk";
let computerSelection = computerPlay();
let playRound = (playerSelection, computerSelection) => {
  
}