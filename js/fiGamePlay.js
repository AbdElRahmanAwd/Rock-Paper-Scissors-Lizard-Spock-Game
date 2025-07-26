import { checkWinner } from "./announceWinner.js";

let playButtons = document.querySelectorAll(".game-box .play");

let player1Choice = "";
let player2Choice = "";

export function setUpFirstGame() {
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      player1Choice = button.className.split(" ")[0];
      alreadyChosen();
    });
  });
}

function alreadyChosen() {
  let random = Math.floor(Math.random() * 3);
  player2Choice = ["rock", "paper", "scissors"][random];

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
