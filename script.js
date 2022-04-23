let resetButton = document.querySelector(".gameButtonRestart")
let gameButtonStart = document.querySelector(".gameButtonStart")
let alert = document.querySelector(".alert")
let gridBox = document.querySelector(".gridBox")
let boardElements = document.querySelectorAll(".gridBox")
let gamestate = true
let prevClick = 0


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

function buttonClick(event) {
  let currButton = event.target
  currClick = Number(currButton.innerHTML)
  console.log("Curr click" + currClick)
  if (currClick === prevClick + 1) {
    currButton.disabled = true
    prevClick = currClick
    console.log("prev click" + prevClick)
  }

  let gameResults = []

  boardElements.forEach((btn) => {
    gameResults.push(btn.disabled)
  })

  let boardTrue = gameResults.some((game) => {
    return !game
  })

  if (!boardTrue) {
    endGame()
  }
}

function endGame() {
  stopTimer()
  ///Stop the stopwatch
  ///Store time value in var for alert
  alert.innerHTML = `Done! Your time is: ${timer.innerHTML}!`
}

gameButtonStart.addEventListener("click", hitStartGameButton)
function hitStartGameButton() {
  gameButtonStart.disabled = true
  alert.innerHTML = `Start!`
  fillButtons()
  startTimer()
}

resetButton.addEventListener("click", hitResetButton)
function hitResetButton() {
  gameButtonStart.disabled = false
  resetTimer()
  location.reload()
  prevClick = 0
  boardElements.forEach(box => {
    box.disabled = false
    box.innerHTML = ""
  })
}



////
const timer = document.getElementById('stopwatch');

var hr = 0
var min = 0
var sec = 0
var msec = 0
var stoptime = true

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}


function timerCycle() {
  if (stoptime == false) {
    msec = parseInt(msec)
    sec = parseInt(sec)
    min = parseInt(min)
    hr = parseInt(hr)

    msec = msec + 1;

    if (msec == 100) {
      sec = sec + 1
      msec = 0
    }

    if (sec == 60) {
      min = min + 1
      sec = 0
      msec = 0
    }
    if (min == 60) {
      hr = hr + 1
      min = 0
      sec = 0
      msec = 0
    }

    if (msec < 1000 || msec == 0) {
      msec = '0' + msec
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec
    }
    if (min < 10 || min == 0) {
      min = '0' + min
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr
    }

    timer.innerHTML = hr + ':' + min + ':' + sec + ':' + msec

    setTimeout("timerCycle()", 1)
  }
}

function resetTimer() {
  timer.innerHTML = '00:00:00:000'
}
