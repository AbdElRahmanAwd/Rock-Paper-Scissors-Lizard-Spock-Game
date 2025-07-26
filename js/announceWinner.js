let game_one = document.querySelector(".game-box");
let game_two = document.querySelector(".game-two");

let gameWinner = document.querySelector(".winner-container");
let result = document.querySelector(".winner-container .result");
let player1Icon = document.querySelector(".winner-container #player");
let parentOne = player1Icon.parentElement;
let player2Icon = document.querySelector(".winner-container #computer");
let parentTwo = player2Icon.parentElement;

const rockIcon = "./images/icon-rock.svg";
const paperIcon = "./images/icon-paper.svg";
const scissorsIcon = "./images/icon-scissors.svg";
const lizardIcon = "./images/icon-lizard.svg";
const spockIcon = "./images/icon-spock.svg";

const Icons = {
  rock: rockIcon,
  paper: paperIcon,
  scissors: scissorsIcon,
  lizard: lizardIcon,
  spock: spockIcon,
};

const WIN_RULES = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

export function checkWinner(player1Choice, player2Choice) {
  player1Icon.src = Icons[player1Choice];
  parentOne.classList.add(player1Choice);

  game_one.style.display = "none";
  game_two.style.display = "none";
  gameWinner.style.display = "flex";

  let outcome = "you lose!";
  if (player1Choice === player2Choice) {
    outcome = "draw!";
  } else if (WIN_RULES[player1Choice].includes(player2Choice)) {
    outcome = "you win!";
    const scoreBoard = document.getElementById("score-board");
    scoreBoard.textContent = +scoreBoard.textContent + 1;
  }

  result.textContent = outcome;
  setTimeout(() => {
    parentTwo.classList.add(player2Choice);
    player2Icon.src = Icons[player2Choice];
    setTimeout(() => {
      document.querySelector(".winner-container .announce").style.display =
        "flex";
    }, 300);
  }, 1000);
}
