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
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return playRound(playerSelection, getComputerChoice())
    }

    if(playerSelection.toLowerCase() === 'rock'){
        if(computerSelection.toLowerCase() === 'scissors'){
            return 'w'
        } else if(computerSelection.toLowerCase() === 'paper'){
            return 'l'
        }
    } else if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection.toLowerCase() === 'rock'){
            return 'w'
        } else if(computerSelection.toLowerCase() === 'scissors'){
            return 'l'
        }
    } else if(playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection.toLowerCase() === 'paper'){
            return 'w'
        } else if(computerSelection.toLowerCase() === 'rock'){
            return 'l'
        }
    }
}

const game = () => {
    let playerScore = 0
    let computerScore = 0

    while(playerScore + computerScore < 5){
        let roundOutcome = playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice())

        roundOutcome === 'w' ?  playerScore += 1 : computerScore += 1
    }

    return playerScore < computerScore ? `You lost the series ${playerScore} out of ${computerScore} rounds` : `You Won the series!!!! ${playerScore} out of ${computerScore} rounds!!!!!!!!!!!!!!!!!!!!!!`
}

let result = game()

console.log(result)
