// renderer.js

let timerInterval;
let totalSeconds = 0;
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function updateTimer() {
  totalSeconds++;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
  return unit.toString().padStart(2, "0");
}

startButton.addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 0;
  timerDisplay.textContent = "00:00:00";
});
