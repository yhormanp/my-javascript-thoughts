window.onload = function () {
  console.log("hola mundo");
  let myInterval = null;
  let [seconds, minutes, hours] = [0, 0, 0];
  const myTimer = document.getElementById("timer");
  const splittedTime = [];

  const btnStart = document.getElementById("btn-start");
  const btnStop = document.getElementById("btn-stop");
  const btnReset = document.getElementById("btn-reset");
  const btnSplit = document.getElementById("btn-split");
  const listItems = document.getElementById("listElements");

  btnStart.addEventListener("click", () => {
    if (myInterval === null) {
      console.log("btn running");
      myInterval = setInterval(displayTimer, 1000);
    }
  });

  btnStop.addEventListener("click", () => {
    stopInterval(myInterval);
    myInterval = null;
  });

  btnReset.addEventListener("click", () => {
    stopInterval(myInterval);
    myTimer.innerHTML = "00:00:00";
    [seconds, minutes, hours] = [0, 0, 0];
    splittedTime.length = []
    listItems.innerHTML = null;
  });

  btnSplit.addEventListener("click", () => {
    const id = splittedTime.length ? splittedTime.length + 1 : 1;
    splittedTime.push({ id, hours, minutes, seconds });
    console.log("splitted", splittedTime);
    listItems.innerHTML =  createRowPerTime(splittedTime);
  });

  function displayTimer() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    //converting to the right format
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    console.log("time afte a sec", h, m, s);
    myTimer.innerHTML = `${h}:${m}:${s}`;
  }
};

function stopInterval(intervalDef) {
  console.log("interval stopped");
  clearInterval(intervalDef);
}

function createRowPerTime(listTimers) {
  let result = "";
  const lineBreak = "\n";

  listTimers.map((timer) => {
    const { hours, minutes, seconds } = timer;
    //converting to the right format
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    result += `<h3> ${h}:${m}:${s}</h3> ${lineBreak}`;
  });
  return result;
}
