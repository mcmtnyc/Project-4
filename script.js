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

function hitStartGameButton() {


  for (let i = 0; i < boardElements.length; i++) {
    boardElements[i].addEventListener("click", buttonClick)
  }

  for (let i = 0; i < boardElements.length; i++) {
    boardElements[i].innerHTML(`${shuffleNumArray[i]}`)
  }

}



// function buttonClick(event) {
//   let currButton = event.target
//   let currClick = currButton.innerHTML
//   /// If X's turn
//   if (currClick >= prevClick) {
//     /// Disable button so that it cannot be clicked again
//     currButton.disabled = true
//   }
//   /// If all buttons are disabled
//   if (){
//     alert.innerHTML(`DONE! Your time is ${display timerInterval}`)
// // pause stopwatch
//   }
// }

