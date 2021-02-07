  function computerPlay() { // chooses a random value (between: rock, paper or scissors) for the computer
    let hand = ["rock", "scissors", "paper"];
    return hand[Math.floor(Math.random() * Math.floor(3))];
  }

  
  function playRound(playerSelection, computerSelection ) { // plays a round of the game
    playerSelection = playerSelection.toLowerCase(); // make it so it doesn't matter if the users inputs "rock", "Rock", "rOcK", etc...
    if (playerSelection == computerSelection) {
      return "tie!";
    }

    if (playerSelection == "rock") {
      return computerSelection == "scissors"
        ? announceWin(playerSelection, computerSelection)
        : announceLoss(playerSelection, computerSelection);
    }

    if (playerSelection == "scissors") {
      return computerSelection == "paper"
        ? announceWin(playerSelection, computerSelection)
        : announceLoss(playerSelection, computerSelection);
    }

    if (playerSelection == "paper") {
      return computerSelection == "rock"
        ? announceWin(playerSelection, computerSelection)
        : announceLoss(playerSelection, computerSelection);
    }
  }

  function announceWin(playerSelection, computerSelection) {
    let p = document.querySelector('p');

    let announcement =
      "You won! " + playerSelection + " beats " + computerSelection;

      
    p.textContent = announcement;

  }

  function announceLoss(playerSelection, computerSelection) {
    let p = document.querySelector('p');

    let announcement =
      "You lost! " + computerSelection + " beats " + playerSelection;

    p.textContent = announcement;


  }

  function game() { // plays rounds of the game until someone wins ( gets first to 3 points )
    let playerPoints = 0;
    let computerPoints = 0;

    while (true) {
      computerSelection = computerPlay();
      playerSelection = prompt("your turn", "");

      let roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);

      if ( roundResult.includes("tie") ) continue; // in case of tie, we jump over one iteration of loop before adding points.

      roundResult.includes("won!") ? playerPoints++ : computerPoints++;

      if (playerPoints == 3) return "You won the game!";
      if (computerPoints == 3) return "You lost the game :((";
    }
  }

  const botones = document.querySelectorAll('button');
  botones.forEach( button => button.addEventListener('click', function(button) {
    let playerSelection = button.target.value;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }));

