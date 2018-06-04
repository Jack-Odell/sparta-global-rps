var playerChoice;
var cpuChoice;
var i = 0;
var cpuScore = 0;
var playerScore = 0;
var winCondition = 3;
var gameWon = false;

function playerWinRound () {
    alert("Player Wins!");
    playerScore++;
}

function cpuWinRound () {
    alert("Computer Wins...");
    cpuScore++;
}

function winTheGame () {
  if (playerScore == winCondition) {
    playerScore = 0;
    cpuScore = 0;
    alert("Player wins the game!");
    gameWon = true;
  }
  else if (cpuScore == winCondition) {
    playerScore = 0;
    cpuScore = 0;
    alert("Computer wins the game...")
    gameWon = true;
  }
}

while (gameWon === false) {
  var gameWon = false;
  var cpuChance = Math.random();
  var play = prompt("What's your move?  --  (R)ock, (P)aper or (S)cissors");
  if (play === "r") {
    playerChoice = "rock";
  }
  else if (play === "p") {
    playerChoice = "paper";
  }
  else if (play === "s") {
    playerChoice = "scissors";
  }


  if (cpuChance < 0.34) {
    cpuChoice = "rock";
    alert("Computer chose " + cpuChoice);
  }
  else if (cpuChance <= 0.67) {
    cpuChoice = "paper";
    alert("Computer chose " + cpuChoice);
  }
  else {
    cpuChoice = "scissors";
    alert("Computer chose " + cpuChoice);
  }

  var match = function (playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
      alert("It's a tie...");
    }
    else if (playerChoice === "rock") {
      if (cpuChoice === "scissors") {
        playerWinRound();
      }
      else {
        cpuWinRound();
      }
    }

    else if (playerChoice === "paper") {
      if (cpuChoice === "rock") {
        playerWinRound();
      }
      else {
        cpuWinRound();
      }
    }
    else if (playerChoice === "scissors") {
      if (cpuChoice === "paper") {
        playerWinRound();
      }
      else {
        cpuWinRound();
      }
    }
  }

  match(playerChoice, cpuChoice);
  i++;
  winTheGame();
}
