import { checkWinner } from "./announceWinner.js";

let playButtons = document.querySelectorAll(".game-two .play-two");

let player1Choice = "";
let player2Choice = "";

export function setUpSecondGame() {
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      player1Choice = button.className.split(" ")[0];
      alreadyChosen();
    });
  });
}

function alreadyChosen() {
  let random = Math.floor(Math.random() * 5);
  player2Choice = ["rock", "paper", "scissors", "lizard", "spock"][random];

  playButtons.forEach((button, index) => {
    setTimeout(() => {
      button.style.scale = "102%";
      setTimeout(() => {
        button.style.scale = "1";
        if (index === playButtons.length - 1) {
          setTimeout(checkWinner(player1Choice, player2Choice), 300);
          setTimeout(resetValues(), 300);
        }
      }, 300);
    }, index * 500);
  });
}

function resetValues() {
  player1Choice = "";
  player2Choice = "";
}
