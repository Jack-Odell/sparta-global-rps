function playerChoice () {
  var playerPlay = "";
  prompt("What's your move?  --  (R)ock, (P)aper or (S)cissors")

  return playerPlay;
}

function cpuChoice () {
  var cpuChance = math.random;
  var cpuPlay = "";
  if (cpuChance < 0.34) {
    cpuPlay = rock;
  }
  else if (cpuChance < 0.67) {
    cpuPlay = paper;
  }
  else {
    cpuPlay = scissors;
  }

  return cpuPlay;
}
