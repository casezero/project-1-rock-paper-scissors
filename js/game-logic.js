/* Project 1 - Rock Paper Scissors x99
   For Code Academy Build Web APIs From Scratch Class
   Amanda Grimaldo
   12/6/17
*/

let playerOneMoveOneType,
 playerOneMoveTwoType,
 playerOneMoveThreeType,
 playerTwoMoveOneType,
 playerTwoMoveTwoType,
 playerTwoMoveThreeType,
 playerOneMoveOneValue,
 playerOneMoveTwoValue,
 playerOneMoveThreeValue,
 playerTwoMoveOneValue,
 playerTwoMoveTwoValue,
 playerTwoMoveThreeValue,
 roundOneWinner,
 roundTwoWinner,
 roundThreeWinner;

function validMoveType(moveType) {
	if ((moveType === 'rock') || (moveType === 'scissors') || (moveType === 'paper')) {
		return true;
  }
}

function validMoveValue(moveValue) {
		if (moveValue >= 1 && moveValue < 99) {
			return false;
		} else {
			return true;
		}
}

function sumValues(moveOne, moveTwo, moveThree) {
	var sum = moveOne + moveTwo + moveThree;
	if (sum > 99) {
		return true;
	} else {
		return false;
	}
}

function setPlayerMoves(player, moveOneType, moveOneValue,
																moveTwoType, moveTwoValue,
																moveThreeType, moveThreeValue) {

  if (validMoveValue(moveOneValue) || validMoveValue(moveTwoValue)
			|| validMoveValue(moveThreeValue)
			|| sumValues(moveOneValue, moveTwoValue, moveThreeValue)) {
			return;
	}

  if (!validMoveType(moveOneType) || !validMoveType(moveTwoType)
			|| !validMoveType(moveThreeType)) {
			return;
	}

  if (player === 'Player One') {
			playerOneMoveOneType = moveOneType;
			playerOneMoveOneValue = moveOneValue;
			playerOneMoveTwoType = moveTwoType;
			playerOneMoveTwoValue = moveTwoValue;
			playerOneMoveThreeType = moveThreeType;
			playerOneMoveThreeValue = moveThreeValue;

	} else if (player === 'Player Two') {
			playerTwoMoveOneType = moveOneType;
			playerTwoMoveOneValue = moveOneValue;
			playerTwoMoveTwoType = moveTwoType;
			playerTwoMoveTwoValue = moveTwoValue;
			playerTwoMoveThreeType = moveThreeType;
			playerTwoMoveThreeValue = moveThreeValue;
	}
}

function getRoundWinner(round) {
  let playerOneType,
      playerOneValue,
      playerTwoType,
      playerTwoValue;

  if(round === 1) {
    playerOneType = playerOneMoveOneType;
    playerOneValue = playerOneMoveOneValue;
    playerTwoType = playerTwoMoveOneType;
    playerTwoValue = playerTwoMoveOneValue;
  } else if (round === 2) {
    playerOneType = playerOneMoveTwoType;
    playerOneValue = playerOneMoveTwoValue;
    playerTwoType = playerTwoMoveTwoType;
    playerTwoValue = playerTwoMoveTwoValue;
  } else if (round === 3) {
    playerOneType = playerOneMoveThreeType;
    playerOneValue = playerOneMoveThreeValue;
    playerTwoType = playerTwoMoveThreeType;
    playerTwoValue = playerTwoMoveThreeValue;
  } else {
    return null;
  }

  if (!playerOneType || !playerOneValue || !playerTwoType || !playerTwoValue){
    return null;
  }

  if (playerOneType === playerTwoType) {
    if (playerOneValue > playerTwoValue) {
      return 'Player One';
    } else if (playerOneValue < playerTwoValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }

  if (playerOneType === 'rock') {
    if (playerTwoType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
  if (playerOneType === 'scissors') {
    if (playerTwoType === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
  if (playerOneType === 'paper') {
    if (playerTwoType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
}

function getGameWinner() {
  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }
  let playerOneWins = 0;
  let playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  if (roundOneWinner === 'Player One') {
    playerOneWins++;
  } else if (roundOneWinner === 'Player Two') {
    playerTwoWins++;
  }

  if (roundTwoWinner === 'Player One') {
    playerOneWins++;
  } else if (roundTwoWinner === 'Player Two') {
    playerTwoWins++;
  }

  if (roundThreeWinner === 'Player One') {
    playerOneWins++;
  } else if (roundThreeWinner === 'Player Two') {
    playerTwoWins++;
  }


  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

function setComputerMoves () {
  let moveTypes = ['rock', 'paper', 'scissors'];
  let sum = 100;

  playerTwoMoveOneType = moveTypes[Math.floor(Math.random() * 3)];
  playerTwoMoveTwoType = moveTypes[Math.floor(Math.random() * 3)];
  playerTwoMoveThreeType = moveTypes[Math.floor(Math.random() * 3)];

  while (sum !== 99) {
    playerTwoMoveOneValue = Math.floor(Math.random() * 98) + 1;
    playerTwoMoveTwoValue = Math.floor(Math.random() * 98) + 1;
    playerTwoMoveThreeValue = Math.floor(Math.random() * 98) + 1;

    sum = playerTwoMoveOneValue + playerTwoMoveTwoValue + playerTwoMoveThreeValue;
  }
}
