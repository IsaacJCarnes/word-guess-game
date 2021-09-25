// const guess = document.getElementById("guessArea");
// const stat = document.getElementById("stats");

const button = document.getElementById("startButton");
const word = document.getElementById("wordToGuess");
const underscore = document.getElementById("underscores");
const timer = document.getElementById("timer");
const win = document.getElementById("winStat");
const loss = document.getElementById("lossStat");


function gameTimer() {
    var timeLimit = 45;
  
    var timeInterval = setInterval(function () {
      timeLimit--;
      console.log(timeLimit);
      
      timer.innerHTML = `${timeLimit} seconds left`;
      if(timeLimit <= 0){
        clearInterval(timeInterval);
      }
    }, 1000);
}
