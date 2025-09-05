"use strict";

const body = document.body;
const inputNum = document.querySelector(".number-input");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const question = document.querySelector(".question");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const guessMessage = document.querySelector(".guess-message");

let hscore = 0;
let sc = 20;
let rnum = 0;
const randomNum = () => (rnum = Math.trunc(Math.random() * 20) + 1);
const restart = () => {
  body.style.backgroundColor = "rgb(0, 0, 0)";
  question.textContent = "???";
  randomNum();
  score.textContent = "20";
  sc = 20;
  guessMessage.textContent = "Начни угадывать";
  question.style.width = "25rem";
  inputNum.value = "";
};

btnCheck.addEventListener("click", function () {
  const guess = Number(inputNum.value);
  if (!guess) {
    guessMessage.textContent = "Введите число!";
    return;
  }

  if (guess === rnum) {
    body.style.backgroundColor = "rgb(9, 250, 21)";
    guessMessage.textContent = "Молодец!";
    question.textContent = rnum;
    question.style.width = "50rem";

    if (hscore < sc) {
      hscore = sc;
      highscore.textContent = hscore;
    }
  } else if (sc > 1) {
    sc--;
    score.textContent = sc;
    guessMessage.textContent = guess < rnum ? "Слишком мало" : "Слишком много";
  } else {
    guessMessage.textContent = "Ты проиграл!";
    sc = 0;
    score.textContent = sc;
    setTimeout(restart, 1500);
  }
});

btnAgain.addEventListener("click", () => {
  restart();
});

restart();
