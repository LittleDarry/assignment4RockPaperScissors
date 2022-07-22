let userScore = 0, computerScore = 0;
const playerScore_Span = document.getElementById('playerScore');
const ComputerScore_Span = document.getElementById('computerScore');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_div = document.querySelector('#result');
const rockBtn = document.getElementById('btnRock');
const paperBtn = document.getElementById('btnPaper');
const scissorsBtn = document.getElementById('btnScissors');

rockBtn.addEventListener('click', option1);
paperBtn.addEventListener('click', option2);
scissorsBtn.addEventListener('click', option3);

function option1() {
    game("rock");
}

function option2() {
    game("paper");
}

function option3(){
    game("scissors");
}

function game(playerSelection) {
    let computerSelection = computerPlay();
    result_div.innerHTML = (playRound(playerSelection, computerSelection));
    if (userScore == 5 || computerScore == 5) {
        scores();
        userScore = 0;
        computerScore = 0;
        playerScore_Span.innerHTML = userScore;
        ComputerScore_Span.innerHTML = computerScore;
    }
}

function computerPlay () {
    num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return ('rock');
            break;
        case 1:
            return ('paper');
            break;
        case 2:
            return ('scissors');
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It is a tie both " + playerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore++;
        playerScore_Span.innerHTML = userScore;
        return ('You Won! Rock beats Scissors');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++;
        playerScore_Span.innerHTML = userScore;
        return ('You Won! Paper covers Rock');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++;
        playerScore_Span.innerHTML = userScore;
        return ('You Won! Scissors cuts Paper');
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        ComputerScore_Span.innerHTML = computerScore;
        return ('You Lose! Rock beats Scissors');
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        ComputerScore_Span.innerHTML = computerScore;
        return ('You Lose! Paper covers Rocks');
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        ComputerScore_Span.innerHTML = computerScore;
        return ('You lose! Scissors cuts Paper');
    }
}


function scores() {
    if (userScore > computerScore) {
        alert ("User won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    } else {
        alert ("Computer Won!\nUser scored: " + userScore + " and computer scored: " + computerScore);
    }
}
