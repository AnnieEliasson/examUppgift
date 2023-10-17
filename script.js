let textField = document.getElementById("character");
textField.focus();
document.addEventListener("click", () => {
  textField.focus();
});

// SOUNDS
let bgMusic = document.getElementById("bgMusic");
bgMusic.play();
let popSound = document.getElementById("pop");
let failSound = document.getElementById("fail");

// WORD ARRAY
const arrayName = [
  "computer",
  "pineapple",
  "horse",
  "seal",
  "car",
  "cloud",
  "rainstorm",
  "javascript",
];

// RANDOM WORD FROM ARRAY
let arrayRandom = arrayName[Math.floor(Math.random() * arrayName.length)];
console.log(arrayRandom);

// WRITE LINES FOR CHARACTERS
/* let rWord = "";
for (let i = 0; i < arrayRandom.length; i++) {
    rWord += "_ ";
}
document.getElementById("rWord").innerHTML = rWord; */

// WRITE LINES FOR CHARACTERS, ALT 2

for (let i = 0; i < arrayRandom.length; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.innerText = "_";
  document.querySelector(".letterBox").append(box);
}

//VARIABEL FÖR INMATAD BOKSTAV
let char;

//GUESS BUTTON
const button = document.getElementById("button");
button.addEventListener("click", checkChar);

document.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    button.click();
  }
});

// CHECK IF WORD INCLUDES CHAR
function checkChar() {
  char = document.getElementById("character").value.toLowerCase();

  if (char === "") {
    /* alert("Du måste skriva något i fältet"); */
    return;
  }

  let includes = arrayRandom.includes(char);

  if (includes === true) {
    charExist();
  } else {
    charDoNotExist();
  }

  //REPEATED CHAR WARNING
  let char2 = char + 2;

  if (usedChars.includes(char2)) {
    alert("Du har redan använt bokstaven");
  } else {
    usedChars.push(char2);
  }

  //RESET INPUT FIELD
  textField.value = null;
  textField.focus();
}

// USED CHARS EXIST IN WORD
let usedChars = [];
let victoryCount = 0;

function charExist() {
  if (usedChars.includes(char)) {
    return;
  }

  usedChars.push(char);

  for (let i = 0; i <= arrayRandom.length; i++) {
    if (arrayRandom[i] === char) {
      document.querySelector(`.letterBox :nth-child(${i + 1})`).innerText =
        char;
      victoryCount++;
      popSound.play();
      if (victoryCount === arrayRandom.length) {
        document.getElementById("victoryScreen").style.display = "flex";
        puls.style.display = "none";
        clearTimeout(timer);

        document.addEventListener("keydown", function (enter) {
          if (enter.key === "Enter") {
            location.reload();
          }
        });
      }
    }
  }
}

//DOES NOT EXIST

let wrongChars = [];
let wrongs = 0;
function charDoNotExist() {
  if (wrongChars.includes(char)) {
    return;
  }

  wrongChars.push(char);

  document.getElementById("worngChars").innerText = wrongChars;
  wrongs++;
  failSound.play();

  //DISPLAY HANGMAN PARTS

  switch (wrongs) {
    case 1:
      document.getElementById("ground").style.display = "block";
      document.querySelector(`.health :nth-child(6)`).classList.add("wasted");
      break;
    case 2:
      document.getElementById("scaffold").style.display = "block";
      document.querySelector(`.health :nth-child(5)`).classList.add("wasted");
      break;
    case 3:
      document.getElementById("head").style.display = "block";
      document.querySelector(`.health :nth-child(4)`).classList.add("wasted");
      break;
    case 4:
      document.getElementById("body").style.display = "block";
      document.querySelector(`.health :nth-child(3)`).classList.add("wasted");
      break;
    case 5:
      document.getElementById("arms").style.display = "block";
      document.querySelector(`.health :nth-child(2)`).classList.add("wasted");
      break;
    case 6:
      document.getElementById("legs").style.display = "block";
      document.querySelector(`.health :nth-child(1)`).classList.add("wasted");
      puls.style.display = "none";
      document.getElementById("defeatScreen").style.display = "flex";
      document.getElementById("correctWord").innerText =
        arrayRandom.toUpperCase();
      clearTimeout(timer);
      document.addEventListener("keydown", function (enter) {
        if (enter.key === "Enter") {
          location.reload();
        }
      });
      break;
    default:
  }
}

// Play Again Button

let playAgainButton = document.querySelectorAll(".playAgainButton");
playAgainButton.forEach((btn) =>
  btn.addEventListener("click", function () {
    location.reload();
  })
);

// TIMER

let countDown = 60;
let timer = setTimeout(ticks, 1000);
let timeDisplay = document.getElementById("timer");
let puls = document.getElementById("pulsingTimer");

function ticks() {
  if (countDown >= 4) {
    timeDisplay.innerText = countDown;
    countDown--;
    timer = setTimeout(ticks, 1000);
  } else if (countDown >= 0) {
    puls.style.display = "block";
    puls.innerText = countDown;
    timeDisplay.innerText = countDown;
    countDown--;
    timer = setTimeout(ticks, 1000);
  } else {
    document.getElementById("defeatScreen").style.display = "flex";
    document.getElementById("correctWord").innerText =
      arrayRandom.toUpperCase();
    document.addEventListener("keydown", function (enter) {
      if (enter.key === "Enter") {
        location.reload();
      }
    });
  }
}

// HINT

let hint = document.querySelector(".hint");
let clickBox = document.querySelector(".hintClickBox");

clickBox.addEventListener("click", function () {
  hint.classList.add("peak");
  document.getElementById("character").focus();

  setTimeout(() => {
    hint.classList.remove("peak");
  }, 4000);
});
