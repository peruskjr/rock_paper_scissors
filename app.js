// get DOM elements

let userScore = 0;
let computerScore = 0;

//html store DOM var 'show results on html page'
const rock_i = document.getElementById("rock"); //choice
const paper_i = document.getElementById("paper"); //choice
const scissors_i = document.getElementById("scissors"); //choice
const userScore_span = document.getElementById("user"); //score
const computerScore_span = document.getElementById("computer"); //score
const playerScore_div = document.getElementById(".players-score"); //score div
const results_p = document.getElementById(".results > p");

//computer play
computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//results
win = (userSelection, computerSelection) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //show result message
    results_p.innerHTML = '${userSelection} beats ${computerSelection}. You win! 💪';
}

lose = (userSelection, computerSelection) => {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //show result message
    results_p.innerHTML = '${userSelection} loses to ${computerSelection}. You lost! 🙃';
}

draw = (userSelection, computerSelection) => {
    //userScore++;
    //userScore_span.innerHTML = userScore;
    //computerScore_span.innerHTML = computerScore;
    //show result message
    results_p.innerHTML = '${userSelection}   equals   ${computerSelection}. Its a draw! 🙄 🤖';
}

game = (userSelection) => {
    const computerSelection = computerPlay();
    //compare win, lose, draw
    switch(userSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userSelection, computerSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userSelection, computerSelection);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userSelection, computerSelection);
            break;
    }
}

//game play function
main = () => {
    //add event listener to choices
    rock_i.addEventListener('click', () => game("rock")); //function
    paper_i.addEventListener('click', () => game("paper")); //function
    scissors_i.addEventListener('click', () => game("scissors")); //function
}

main();