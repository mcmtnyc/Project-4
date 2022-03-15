/// Variables
let resetButton = document.querySelector(".gameButtonRestart")
let gameButtonStart = document.querySelector(".gameButtonStart")
let alert = document.querySelector(".alert")
let boardElements = document.querySelectorAll(".gridBox")
let gamestate = "playing"
let prevClick = 0

/// HARD CODE ARRAY UNTIL BELOW SOLUTION
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let shuffleNumArray = numArray.sort(() => Math.random() - 0.5)
function fillButtons() {
  for (i = 0; boardElements.length > i; i++) {
    boardElements[i].innerHTML = `${shuffleNumArray[i]}`
  }
  for (let i = 0; i < boardElements.length; i++) {
    boardElements[i].addEventListener("click", buttonClick)
  }
}




/// Iterate thru to create buttons w randomized numbers... FIND WAY TO GET NO REPEATS
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let numArray = []
// let arrayLength = 16
// for (let i = 0; i < arrayLength; i++){

//   numArray.push(getRandomInt(1,arrayLength))
// }
/// Start the game onclick of start button

// for (let i = 0; i < boardElements.length; i++) {
//   boardElements[i].addEventListener("click", buttonClick)
// }





function buttonClick(event) {
  let currButton = event.target
  let currClick = currButton.innerHTML

  if (currButton > prevClick) {
    currButton.disabled = true
  }
}

gameButtonStart.addEventListener("click", hitStartGameButton)
function hitStartGameButton() {
  alert.innerHTML = `Start!`
  fillButtons()
}

resetButton.addEventListener("click", hitResetButton)
function hitResetButton() {
  ///Stop the stopwatch
  ///Store time value in var for alert
  alert.innerHTML = `Done! Your time is: `
  boardElements.forEach(box => {
    box.disabled = false
    box.innerHTML = ""
  })
}