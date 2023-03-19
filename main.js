let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(callback) {
    if (callback() === 0) {
        return "ROCK";
    }
    else if (callback() === 1) {
        return "PAPER"
    }
    else return "SCISSORS"
}

function getRandomInt() {
    return Math.floor(Math.random()*3)
}

function getPlayerChoice() {
    let playerSelection = prompt("Please enter: Rock, Paper or Scissors");
    return playerSelection.toUpperCase();
}

function winRound(a,b) {
    playerPoints++;
    console.log(`You Win! ${a} beats ${b}`)
}
function loseRound(a,b) {
    computerPoints++;
    console.log(`You Lose! ${b} beats ${a}`)
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`You both chose ${playerSelection}. Try again!`)
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return loseRound(playerSelection,computerSelection)
        }
        else return winRound(playerSelection,computerSelection)
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return loseRound(playerSelection,computerSelection)
        }
        else return winRound(playerSelection,computerSelection)
    }
    else {
        if (computerSelection=== 'ROCK') {
            return loseRound(playerSelection,computerSelection)
        }
        else return winRound(playerSelection,computerSelection)
    }
}
function game() {
    playerPoints = 0;
    computerPoints = 0;

    for (let i = 1; i<=5; i++) {
        console.log(`Round ${i}!`)
        playRound(getPlayerChoice(),getComputerChoice(getRandomInt))
    }

    if (computerPoints===playerPoints) {
        console.log(`It\'s a draw ${playerPoints} : ${computerPoints}`)
    }
    else if (computerPoints>playerPoints) {
        console.log(`You Lose a Game! ${playerPoints} : ${computerPoints}`)
    }
    else console.log(`You Won a Game! ${playerPoints} : ${computerPoints}`)

    const replay = confirm('Do you want to play again?');
    if (replay) game()
 }

 game();
