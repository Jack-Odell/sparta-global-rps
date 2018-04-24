var play = prompt("What's your move?  --  (R)ock, (P)aper or (S)cissors");
var x;

if (play === "r") {
  x = "rock";
  console.log("Player " + x);
}
else if (play === "p") {
  x = "paper";
  console.log("player " + x);
}
else if (play === "s") {
  x = "scissors";
  console.log("player " + x);
}


var cpuChance = Math.random();
var y;

if (cpuChance < 0.34) {
  y = "rock";
  console.log("cpu rock");
}
else if (cpuChance <= 0.67) {
  y = "paper";
  console.log("cpu paper");
}
else {
  y = "scissors";
  console.log("cpu scissors");
}




var match = function (x, y) {
  if (x === y) {
    return "It's a tie...";
  }
  if (x === "rock") {
    if (y === "scissors") {
      return "Player Wins!";
    }
    else {
      return "Computer wins...";
    }
  }
  if (x === "paper") {
    if (y === "scissors") {
      return "Player Wins!";
    }
    else {
      return "Computer wins...";
    }
  }
  if (x === "scissors") {
    if (y === "paper") {
      return "Player Wins!";
    }
    else {
      return "Computer wins...";
    }
  }
}
// playerChoice();
// cpuChoice();
var results = match(x, y);
