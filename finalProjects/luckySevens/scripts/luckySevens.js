function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  console.clear();
  var startingBet = document.forms["luckySevens"]["startingBet"].value;
  var gameMoney = startingBet;
  var die1;
  var die2;
  var diceSum;
  var rollsNumber = 0;
  var moneyMax = document.forms["luckySevens"]["startingBet"].value;
  var rollsAtMax = 0;

  if (startingBet <= 0) {
    alert("Starting bet must be greater than zero!");
    return false;
  } //end of alert if loop

  while (gameMoney > 0) {
    die1 = rollDice();
    die2 = rollDice();
    diceSum = die1 + die2;
    rollsNumber++;

    if (diceSum != 7) {
      gameMoney = gameMoney - 1;
    }
    else if (diceSum == 7) {
      gameMoney = gameMoney + 4;
      if (gameMoney > moneyMax) {
        moneyMax = gameMoney;
        rollsAtMax = rollsNumber;

        }
      }
console.log("Rolls: " + rollsNumber + ", Rolls at Max: " + rollsAtMax + ", money: " + gameMoney);
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerText = "Play Again!";
  document.getElementById("betStart").innerText = "$" + startingBet + ".00";
  document.getElementById("rollsNumber").innerText = rollsNumber;
  document.getElementById("moneyMax").innerText = "$" + moneyMax + ".00";
  document.getElementById("rollsAtMax").innerText = rollsAtMax;
  return false;
}//end of playGame()
