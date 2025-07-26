let rules = document.querySelector(".rules");
let gameOneRules = document.querySelector(".game-one-rules");
let gameTwoRules = document.querySelector(".game-two-rules");

let close = document.querySelector(".rules-container");
let playAgain = document.querySelector(".play-again");

let gameOne = document.querySelector(".game-box");
let gameTwo = document.querySelector(".game-two");
let logo_one = document.querySelector(".logo-one");
let logo_two = document.querySelector(".logo-two");

export default function openRules() {
  playAgain.addEventListener("click", () => {
    let game_one = window.getComputedStyle(logo_one).display === "block";
    let game_two = window.getComputedStyle(logo_two).display === "block";

    document.querySelector(".winner-container .announce").style.display =
      "none";
    document.querySelector(".winner-container .two").className = "play two";
    document.querySelector(".winner-container #computer").src = "";
    document.querySelector(".winner-container").style.display = "none";
    if (game_one) {
      gameOne.style.display = "flex";
    } else if (game_two) {
      gameTwo.style.display = "flex";
    }
  });

  rules.addEventListener("click", () => {
    let game_one = window.getComputedStyle(logo_one).display === "block";
    let game_two = window.getComputedStyle(logo_two).display === "block";

    document.querySelector(".rules-container").style.display = "flex";
    if (game_one) {
      gameOneRules.style.display = "block";
      gameTwoRules.style.display = "none";
    } else if (game_two) {
      gameOneRules.style.display = "none";
      gameTwoRules.style.display = "block";
    }
  });

  close.addEventListener("click", (event) => {
    if (event.target === event.currentTarget)
      document.querySelector(".rules-container").style.display = "none";
  });
}
