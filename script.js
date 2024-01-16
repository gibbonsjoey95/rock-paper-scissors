const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const runningPlayerScore = document.querySelector('#runningPlayerScore')
const runningComputerScore = document.querySelector('#runningComputerScore')
const final = document.querySelector('#final')
const finalResults = document.querySelector('#finalResults')
const finalReaultsPara = document.querySelector('#finalResultsPara')
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
        return 't'
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


const game = (playerChoice, computerChoice) => {
    let outcome = playRound(playerChoice, computerChoice)

    description.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}`

    if(outcome === 'w'){
        playerScore++
        runningPlayerScore.textContent = playerScore
        roundResult.textContent = "You Win!"
    } else if(outcome === 'l'){
        computerScore++
        runningComputerScore.textContent = computerScore
        roundResult.textContent = "You Lose!"
    } else if(outcome === 't'){
        roundResult.textContent = "It was a tie!! Go again!"
    }

    if(playerScore === 5){
        final.classList.remove('hidden')
        finalResults.textContent = "You have won the series!"
        finalReaultsPara.textContent = `You had ${playerScore}. Computer had ${computerScore}`
    }

    if(computerScore === 5){
        final.classList.remove('hidden')
        finalResults.textContent = "You have lost the series!"
        finalReaultsPara.textContent = `You had ${playerScore}. Computer had ${computerScore}`

    }

}

const restartGame = () => {
    playerScore = 0
    computerScore = 0
    runningPlayerScore.textContent = 0
    runningComputerScore.textContent = 0
    description.textContent = 'Rock, Paper, or Scissors?'
    roundResult.textContent = 'Choose to continue'
}

rockBtn.addEventListener('mousedown', () => {
    game('Rock', getComputerChoice())
})

paperBtn.addEventListener('click', () => {
    // result.textContent = game('Paper')
    game('Paper', getComputerChoice())
})

scissorsBtn.addEventListener('click', () => {
    // result.textContent = game('Scissors')
    game('Scissors', getComputerChoice())
})

playAgainBtn.addEventListener('click', () => {
    final.classList.add('hidden')
    restartGame()
})
