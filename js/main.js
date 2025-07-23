import { setUpFirstGame } from "./fiGamePlay.js";
import { setUpSecondGame } from "./secGameplay.js";
import openRules from "./rules.js";

let change = document.querySelector(".switch");
let gameOne = document.querySelector(".game-box");
let gameTwo = document.querySelector(".game-two");
let logo_one = document.querySelector(".logo-one");
let logo_two = document.querySelector(".logo-two");

change.addEventListener("click", () => {
  let game_one = window.getComputedStyle(gameOne).display === "flex";
  let game_two = window.getComputedStyle(gameTwo).display === "flex";

  if (game_one) {
    gameTwo.style.display = "flex";
    gameOne.style.display = "none";
    logo_one.style.display = "none";
    logo_two.style.display = "block";
  } else if (game_two) {
    gameOne.style.display = "flex";
    gameTwo.style.display = "none";
    logo_one.style.display = "block";
    logo_two.style.display = "none";
  }
});

setUpFirstGame();
setUpSecondGame();

openRules();
