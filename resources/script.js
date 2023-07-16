let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/* STEP 1 */

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

/* STEP 2 */

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

