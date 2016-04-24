var counter = 0;

function countup() {
  counter = counter + 1;
}


function countdown() {
  setTimeout(function countandgive() { 
      alert("You clicked " +counter+ " Comedians");
     
     }, 20000);
}
var players = document.getElementsByClassName("comedians");
var score = 0;
var startTime = document.getElementById('start');
var resetGame = document.getElementById('stop');
var clock = 20;
var timeLeft;

//Game timer and re-enable pictures

function start() {
  timeLeft = setInterval(function() {
    document.getElementById('runningTime').innerHTML = --clock;
    if (clock <= 0) {
      document.getElementById('runningTime').innerHTML = "You clicked " + score + "!";
      clearInterval(interval);
    }
  }, 1000);
  for (var i = 0; i < players.length; i++) {
  players[i].removeAttribute("disabled");
}

}
startTime.addEventListener("click", start);

//Loop to increment score and disable pictures to prevent double clicks

for (var i = 0; i < players.length; i++) {
  players[i].addEventListener("click", function() {
    score = score + 1;
    this.disabled = true;
  });
}

//Restart Game by Pushing Button

function restartGame() {
  window.location.reload();
}
resetGame.addEventListener("click", restartGame);
