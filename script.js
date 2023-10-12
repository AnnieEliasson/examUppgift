
// WORD ARRAY
const arrayName = ["computer",
  "pineapple",
  "horse",
  "seal",
  "car",
  "cloud",
  "rainstorm",
  "javascript"]

// RANDOM WORD FROM ARRAY
let arrayRandom = arrayName[Math.floor(Math.random() * arrayName.length)]
console.log(arrayRandom)



// WRITE LINES FOR CHARACTERS
/* let rWord = "";
for (let i = 0; i < arrayRandom.length; i++) {
    rWord += "_ ";
}
document.getElementById("rWord").innerHTML = rWord; */

// WRITE LINES FOR CHARACTERS, ALT 2

for (let i = 0; i < arrayRandom.length; i++) {
  let box = document.createElement("div")
  box.classList.add('box')
  box.innerText = '_'
  document.querySelector(".letterBox").append(box)
}

//VARIABEL FÖR INMATAD BOKSTAV
let char;

//GUESS BUTTON
const button = document.getElementById("button");
button.addEventListener('click', checkChar)

document.addEventListener('keydown', function (enter) {
  if (enter.key === 'Enter') {
    button.click();
    console.log("Enter trycktes ner")
  }
});

function checkChar() {
  char = document.getElementById("character").value.toLowerCase()

  if (char === "") {
    alert("Du måste skriva något i fältet");
    return;
  }

  let includes = arrayRandom.includes(char)

  if (includes === true) {
    console.log('bokstaven finns')

    charExist()
  } else {
    console.log('bokstaven finns inte med')
    charDoNotExist()
  }

  //RESET INPUT FIELD
  document.getElementById("character").value = null
  document.getElementById("character").focus()
}

// USED CHARS EXIST IN WORD
let usedChars = []
let victoryCount = 0;



function charExist() {

  if (usedChars.includes(char)) {
    return;
  }

  usedChars.push(char)
  console.log(usedChars)

  for (let i = 0; i <= arrayRandom.length; i++) {

    if (arrayRandom[i] === char) {
      document.querySelector(`.letterBox :nth-child(${i + 1})`).innerText = char
      victoryCount++
      console.log(i)
      if (victoryCount === arrayRandom.length) {

        document.getElementById("victoryScreen").style.display = "flex";
        clearTimeout(timer)

      }
    }
  }
}

let wrongChars = []
let wrongs = 0;
function charDoNotExist() {

  if (wrongChars.includes(char)) {
    return;
  }

  wrongChars.push(char)
  console.log(wrongChars)

  document.getElementById("worngChars").innerText = wrongChars
  wrongs++
  console.log(wrongs)

  //DISPLAY HANGMAN PARTS

  switch (wrongs) {
    case 1:
      document.getElementById("ground").style.display = "block"
      break;
    case 2:
      document.getElementById("scaffold").style.display = "block"
      break;
    case 3:
      document.getElementById("head").style.display = "block"
      break;
    case 4:
      document.getElementById("body").style.display = "block"
      break;
    case 5:
      document.getElementById("arms").style.display = "block"
      break;
    case 6:
      document.getElementById("legs").style.display = "block"
      document.getElementById("defeatScreen").style.display = "flex";
      document.getElementById("correctWord").innerText = arrayRandom.toUpperCase()
      clearTimeout(timer)
      break;
    case 7:
      if (window.confirm("Du förlorade, vill du spela igen?")) {
        window.open(location.reload())
      }
      console.log('game over')
      break;
    default:
  }

}


// Play Again Button

let playAgainButton = document.querySelectorAll(".playAgainButton")
playAgainButton.forEach((btn) => btn.addEventListener('click', function () { location.reload() }))

// TIMER

let countDown = 30;
let timer = setTimeout(ticks, 1000)
let timeDisplay = document.getElementById("timer")

function ticks(){
  if(countDown >= 0){
    timeDisplay.innerText = countDown
    countDown--
    timer = setTimeout(ticks, 1000)
    console.log(countDown)
  } else {
    document.getElementById("defeatScreen").style.display = "flex";
    document.getElementById("correctWord").innerText = arrayRandom.toUpperCase()
  }
}


