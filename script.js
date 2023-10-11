
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



for (let i = 0; i < arrayRandom.length; i++) {
  let box = document.createElement("div")
  box.classList.add('box')
  box.innerText = '_'
  document.querySelector(".letterBox").append(box)

}



const button = document.getElementById("button");
let char;


button.addEventListener('click', checkChar)

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

function charExist() {

  if (usedChars.includes(char)) {
    return;
  }

  usedChars.push(char)
  console.log(usedChars)

  for (let i = 0; i < arrayRandom.length; i++) {
    if (arrayRandom[i] === char) {
      console.log(i)

      document.querySelector(`.letterBox :nth-child(${i + 1})`).innerText = char
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
