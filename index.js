
function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started!");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started yet!");
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();

let inputBox = document.getElementById("duration");
let timerBox = document.getElementById("timer");
let count = 0;
let isPaused = false;
function timer() {
  if (!isPaused) {
    count = count + 1;
  } else {
      count = count;
  }
  document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling
}

function start() {
    clearInterval(timerBox);
    isPaused = false;
    sw.start();
    inputBox.innerHTML = sw.duration;
    timerBox = setInterval(timer, 1000);
}
function stop() {
    isPaused = true;
    sw.stop();
    inputBox.innerHTML = sw.duration;
}
function reset() {
    isPaused = true;
    sw.reset();
    inputBox.innerText = sw.duration;
    count = 0;
}
