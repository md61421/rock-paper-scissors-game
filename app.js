let userScore = 0;
let compScore = 0;
let choice = document.querySelectorAll(".choice");
let winMsg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");

const getCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * 3);

  return option[randNum];
};

const drawGame = () => {
  winMsg.innerText = "Game was Draw. Play again";
  winMsg.style.backgroundColor = "";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    winMsg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    winMsg.style.backgroundColor = "#52b788";
    userScore++;
  } else {
    winMsg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    winMsg.style.backgroundColor = "#ef233c";
    compScore++;
  }
  document.querySelector("#user-score").innerText = userScore;
  document.querySelector("#comp-score").innerText = compScore;
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice == "rock") {
      //scissors, paper
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      //rock, scissors
      userWin = compChoice == "scissors" ? false : true;
    } else {
      //paper, rock
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  document.querySelector("#user-score").innerText = "0";
  document.querySelector("#comp-score").innerText = "0";
  userScore = 0;
  compScore = 0;
  winMsg.innerText = "Play your move";
  winMsg.style.backgroundColor = "";
});
