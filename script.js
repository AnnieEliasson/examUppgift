
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

// WRIGHT LINES FOR CHARACTERS
let rWord = "";
for (let i = 0; i < arrayRandom.length; i++) {
    rWord += "_ ";
}

document.getElementById("rWord").innerHTML = rWord;



const button = document.getElementById("button");
let char;

button.addEventListener('click', checkChar)

function checkChar(){
    char = document.getElementById("character").value.toLowerCase()

    
    let includes = arrayRandom.includes(char)


    if(includes === true){
    console.log('bokstaven finns')
    charExist()
    
} else{
    console.log('bokstaven finns inte med')
    charDoNotExist()
}


//RESET INPUT FIELD
document.getElementById("character").value = null
}   

// USED CHARS EXIST IN WORD
let usedChars =[]
function charExist(){
    usedChars.push(char)
    console.log(usedChars)

}

let wrongChars = []
let wrongs = 0;
function charDoNotExist(){
    wrongChars.push(char)
    console.log(wrongChars)
    
        document.getElementById("worngChars").innerText = wrongChars
        wrongs++
        console.log(wrongs)

        //DISPLAY HANGMAN PARTS

switch(wrongs) {
    case 1:
        document.getElementById("ground").style.display="block"
      break;
    case 2:
        document.getElementById("scaffold").style.display="block"
      break;
    case 3:
      document.getElementById("head").style.display="block"
      break;
    case 4:
        document.getElementById("body").style.display="block"
      break;
    case 5:
        document.getElementById("arms").style.display="block"
      break;
    case 6:
        document.getElementById("legs").style.display="block"
      break;
      case 7:
        console.log('game over')
      break;
    default:
  }

}
