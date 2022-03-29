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

let playRound = (e) => {
  const resultContainer = document.querySelector("#score-container");
  const score = document.querySelector("#score");
  const outcome = document.querySelector("#round-outcome");
  const endResult = document.querySelector("#end-result");
  const result = document.querySelector("#result");

  const computerSelection = computerPlay().toLowerCase();
  console.log(computerSelection)
  const playerSelection = e.target.dataset.choice;
  console.log(playerSelection);
  // If player selects rock and comp selects paper, comp wins
  // If player selects paper and comp selects scissor, comp wins
  // If player selects scissor and comp selects rock, comp wins

  if (playerSelection == computerSelection) {
    outcome.textContent = "It's a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock")
  ) {
    outcome.textContent = "Oh no! Comp wins the round. D:";
    computerScore++;
  } else if (
      (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissor")
  ) {
    outcome.textContent = "Yay!! You win the round :D";
    playerScore++;
  }
  
  checkWin();
  endResult.appendChild(result);
  score.textContent = "Player: " + `${playerScore}` + " | " + "Computer: " + `${computerScore}`;
  score.appendChild(outcome);
  resultContainer.appendChild(score);
}

let checkWin = () => {
  if (computerScore === 5) {
    result.textContent = "Oh no!! Computer won the game )-:";
    playerScore = 0;
    computerScore = 0;
  } else if (playerScore === 5) {
    result.textContent = "Yay!!! You won the game!! :D";
    playerScore = 0;
    computerScore = 0;
  }
}

let game = () => {
  /*
  for (let i = 0; i < 5; i++) {
    console.log( playRound() );
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
  }
  */

  //Returns a node list of buttons
  const btns = document.querySelectorAll("button");

  //Adds mouse click event listener to each button in the nodelist
  btns.forEach(btn => {
    console.log(btn);
    btn.addEventListener('click', playRound);
  });
}

game();