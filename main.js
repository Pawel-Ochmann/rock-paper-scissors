function getComputerChoice(callback) {
    if (callback() === 0) {
        return "Rock";
    }
    else if (callback() === 1) {
        return "Paper"
    }
    else return "Scissors"
}

function getRandomInt() {
    return Math.floor(Math.random()*3)
}


