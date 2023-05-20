function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 9) + 1;
    let computerChoice = '';
    switch (randNum) {
        case 1: 
        case 2: 
        case 3:
            computerChoice = 'rock';
            break;
        case 4:
        case 5: 
        case 6:
            computerChoice = 'paper';
            break;
        case 7: 
        case 8: 
        case 9:
            computerChoice = 'scissors';
            break;
    };

    return computerChoice;
}

const computerChoice = getComputerChoice();
console.log(computerChoice);
/* let playerChoice = prompt('Enter rock, paper, or scissors').toLowerCase();

if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    console.log(computerChoice);
} */

