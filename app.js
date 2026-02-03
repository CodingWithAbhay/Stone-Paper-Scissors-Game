let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //stone, paper, scissors
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =  (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //generate computer choice --> modular way of programming
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true; //suppose user win
        if(userChoice === "stone"){
            //comp --> paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //comp --> stone, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //comp ->> stone, paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});