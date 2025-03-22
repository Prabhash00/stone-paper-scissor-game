let userScore = 0;
let compScore = 0;
const msgShown = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const randomCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    //random - rock, paper, scissor
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msgShown.innerText = "The Game was a Draw";
    msg.style.backgroundColor = "";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgShown.innerText = `Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msgShown.innerText = `${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice was clicked: ", userChoice);
    //Computer choice will be randomized
    const compChoice = randomCompChoice();
    console.log("Computer choice was clicked: ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let isUserWin;
        if (userChoice === "rock") {
            //comp has two choices- scissor, paper
            isUserWin = compChoice !== "paper";
        } else if (userChoice === "paper") {
            //comp has two choices- scissor,rock
            isUserWin = compChoice !== "scissors";
        } else {
            //comp has two choices- rock, paper
            isUserWin = compChoice !== "rock";
        }
        showWinner(isUserWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});