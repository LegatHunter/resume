"use strict";

const btnNewGame = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const queryNamePlayer1 = prompt("Имя игрока № 1");
const queryNamePlayer2 = prompt("Имя игрока № 2");
const namePlayer1 = document.querySelector("#name--0");
const namePlayer2 = document.querySelector("#name--1");

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const scorePlayer1 = document.querySelector("#score--0");
const scorePlayer2 = document.querySelector("#score--1");
const currentScorePlayer1 = document.querySelector("#current--0");
const currentScorePlayer2 = document.querySelector("#current--1");
const imgDice = document.querySelector(".dice");

namePlayer1.textContent = queryNamePlayer1;
namePlayer2.textContent = queryNamePlayer2;

let randomNum = 0;
let scoreP1 = 0;
let scoreP2 = 0;
let currentP1 = 0;
let currentP2 = 0;

const dice = () => {
  switch (randomNum) {
    case 1:
      imgDice.src = "dice1.png";
      imgDice.classList.remove("hidden");
      break;
    case 2:
      imgDice.src = "dice2.png";
      imgDice.classList.remove("hidden");
      break;
    case 3:
      imgDice.src = "dice3.png";
      imgDice.classList.remove("hidden");
      break;
    case 4:
      imgDice.src = "dice4.png";
      imgDice.classList.remove("hidden");
      break;
    case 5:
      imgDice.src = "dice5.png";
      imgDice.classList.remove("hidden");
      break;
    case 6:
      imgDice.src = "dice6.png";
      imgDice.classList.remove("hidden");
      break;
    default:
      imgDice.classList.add("hidden");
  }
};

const newGame = () => {
  randomNum = 0;
  imgDice.classList.add("hidden");
  scoreP1 = 0;
  scoreP2 = 0;
  currentP1 = 0;
  currentP2 = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  if (!player1.classList.contains("player--active")) {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
};

btnNewGame.addEventListener("click", () => {
  newGame();
  dice();
});

const roll = () => {
  randomNum = Math.trunc(Math.random() * 6) + 1;
  if (player1.classList.contains("player--active")) {
    if (randomNum !== 1) {
      currentP1 += randomNum;
    } else {
      currentP1 = 0;
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
    }
  } else if (player2.classList.contains("player--active")) {
    if (randomNum !== 1) {
      currentP2 += randomNum;
    } else {
      currentP2 = 0;
      player2.classList.remove("player--active");
      player1.classList.add("player--active");
    }
  }
};

btnRoll.addEventListener("click", () => {
  roll();
  dice();
  currentScorePlayer1.textContent = currentP1;
  currentScorePlayer2.textContent = currentP2;

  // btnHold.disabled = false

  console.log(randomNum);
});

btnHold.addEventListener("click", () => {
  scoreP1 += currentP1;
  scoreP2 += currentP2;
  scorePlayer1.textContent = scoreP1;
  scorePlayer2.textContent = scoreP2;
  currentP1 = 0;
  currentP2 = 0;
  currentScorePlayer1.textContent = currentP1;
  currentScorePlayer2.textContent = currentP2;
  if (
    player1.classList.contains("player--active") ||
    player2.classList.contains("player--active")
  ) {
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
  }
  if ((scoreP1 || scoreP2) >= 100) {
    alert(
      `Игра закнчена! Выиграл ${
        scoreP1 > scoreP2 ? namePlayer1.textContent : namePlayer2.textContent
      }`
    );
    newGame();
  }
});
console.log(namePlayer1);
