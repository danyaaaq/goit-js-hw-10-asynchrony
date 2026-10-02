// завдання 1


let message = 0 
 const text = setInterval(() => {
    message += 1
    console.log("привіт");
    if (message === 5) {
         clearInterval(text)
    }
}, 1000);

// завдання 2

const box = document.querySelector(".div")

let size = 100

setInterval(() => {
    size -= 20

if (size <= 0 ) {
size = 200
}

  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = "green";


}, 1000)
////
const boxSecond = document.querySelector(".div-1")

let sizeFirst = 100

setInterval(() => {
    sizeFirst += 20

if (sizeFirst >= 150 ) {
sizeFirst = 100
}

  boxSecond.style.width = `${sizeFirst}px`;
  boxSecond.style.height = `${sizeFirst}px`;
  boxSecond.style.backgroundColor = "purple";


}, 1000)
///
const boxThird = document.querySelector(".div-3")

let height = 100

setInterval(() => {
    height += 20

if (height >= 300 ) {
height = 100
}

  
  boxThird.style.height = `${height}px`;
  boxThird.style.backgroundColor = "black";


}, 1000)


///завдання 3

const gameBtn = document.querySelector("#game-btn")
const timeText = document.querySelector("#time")
const scoreText = document.querySelector("#score")
const clicksText = document.querySelector("#clicks")
let time = 10
let score = 0
let clicks = 0

gameBtn.addEventListener("click", () => {
  score += 3
  clicks += 1

  scoreText.textContent = score
  clicksText.textContent = clicks
})

const timer = setInterval(() => {
  time -= 1
  timeText.textContent = time

  if (time === 0) {
    clearInterval(timer)
    gameBtn.disabled = true
  }
}, 1000)

/// завдання 4

const seconds = prompt("скільки секунд - ");

setTimeout(() => {
  alert("час вийшов");
}, seconds * 1000);