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
const playerChoice = prompt('Enter rock, paper, or scissors').toLowerCase();

function game(computerChoice, playerChoice) {
    let validAnswer = true;
    if (playerChoice !== 'rock' || playerChoice !== 'paper' || playerChoice !== 'scissors') {
        validAnswer = false;
        playerChoice = prompt(`You didn't enter a valid move! Please enter rock, paper, or scissors.`);
        if(playerChoice === computerChoice) {
            alert('You won!');
        } else {
            alert('You lost!')
        }
    } else {
        while(!validAnswer) {
            
        }
        
    }
}

game(computerChoice, playerChoice);

/* while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
            playerChoice = prompt(`You didn't enter a valid move! Please enter rock, paper, or scissors.`);
        } */