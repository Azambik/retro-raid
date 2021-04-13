function Konami() {

let keypresses = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let currentIdx = 0;
let timerCountdown = false;
let timeRemaining = 5;

let timer;

document.addEventListener('keydown', (e)=>{
  if (e.code === keypresses[currentIdx]) {
    startTimer();
    currentIdx++;
    if (currentIdx === keypresses.length) {
      handleSuccessfulCodeEntry();
    }
  } else {
    handleFailedCodeEntry();
  }
});

function startTimer() {
  if (!timerCountdown) {
    timerCountdown = true
    document.getElementById('timer').innerHTML = timeRemaining + " seconds left";
    timer = setInterval(function() {
      timeRemaining--
      document.getElementById('timer').innerHTML = timeRemaining + " seconds left";

      if(timeRemaining <= 0) {
        clearTimer();
      }
    }, 1000)
  }
}

function clearTimer() {
  currentIdx = 0;
  if (timer) {
    clearInterval(timer)
    timerCountdown = false
    timeRemaining = 5
  }
}

function handleSuccessfulCodeEntry() {
  clearTimer();
  barrelroll();
}

function handleFailedCodeEntry() {
  clearTimer();
}

//credit to bengl https://gist.github.com/bengl/4275420
function barrelroll() {
    var a="-webkit-", 
        b='transform:rotate(1turn);', 
        c='transition:4s;'; 
        
    document.head.innerHTML 
       += '<style>body{' + a + b + a + c + b + c 
  }
}

export default Konami;