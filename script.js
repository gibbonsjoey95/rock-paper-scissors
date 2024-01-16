const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const runningPlayerScore = document.querySelector('#runningPlayerScore')
const runningComputerScore = document.querySelector('#runningComputerScore')
const final = document.querySelector('#final')
const finalResults = document.querySelector('#finalResults')
const playAgainBtn = document.querySelector('#playAgain')
const description = document.querySelector('#description')  
const roundResult = document.querySelector('#roundResult')

let playerScore = 0
let computerScore = 0


const getComputerChoice = () => {
    let randomNumber = Math.random()

    if(randomNumber <= .333){
        return 'Rock'
    } else if(randomNumber > .333 && randomNumber <= .666){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection){
        return playRound(playerSelection, getComputerChoice())
    }

    if(playerSelection === 'Rock'){
        if(computerSelection === 'Scissors'){
            return 'w'
        } else if(computerSelection === 'Paper'){
            return 'l'
        }
    } else if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            return 'w'
        } else if(computerSelection === 'Scissors'){
            return 'l'
        }
    } else if(playerSelection === 'Scissors'){
        if(computerSelection === 'Paper'){
            return 'w'
        } else if(computerSelection === 'Rock'){
            return 'l'
        }
    }
}


const game = (playerChoice) => {
    let compueterChoice = getComputerChoice()

    let outcome = playRound(playerChoice, getComputerChoice())

    description.textContent = `You chose ${playerChoice}. Computer chose ${getComputerChoice()}`

    if(outcome === 'w'){
        playerScore++
        runningPlayerScore.textContent = playerScore
        roundResult.textContent = "You Win!"
    } else {
        computerScore++
        runningComputerScore.textContent = computerScore
        roundResult.textContent = "You Lose!"
    }

    if(playerScore === 5){
        final.classList.remove('hidden')
        finalResults.textContent = `You have won the series with a score of ${playerScore}. Computer had ${computerScore}`
    }

    if(computerScore === 5){
        final.classList.remove('hidden')
        finalResults.textContent = `You have lost the series with a score of ${playerScore}. Computer had ${computerScore} `
    }

}

const restartGame = () => {
    playerScore = 0
    computerScore = 0
    runningPlayerScore.textContent = 0
    runningComputerScore.textContent = 0
    description = 'Rock, Paper, or Scissors?'
    roundResult = 'Choose to continue'
}

rockBtn.addEventListener('mousedown', () => {
    game('Rock')
})

paperBtn.addEventListener('click', () => {
    // result.textContent = game('Paper')
    game('Paper')
})

scissorsBtn.addEventListener('click', () => {
    // result.textContent = game('Scissors')
    game('Scissors')
})

playAgainBtn.addEventListener('click', () => {
    final.classList.add('hidden')
    restartGame()
})
