let seconds = 00;
let tens = 00;
let Interval;
let OutputSeconds = document.querySelector("#second");
let OutputTens = document.querySelector("#tens");
let buttonStart = document.querySelector("#btn-start");
let buttonStop = document.querySelector("#btn-stop");
let buttonRestart = document.querySelector("#btn-restart");

buttonStart.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener("click", () => {
    clearInterval(Interval);
});

buttonRestart.addEventListener("click", () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
});
function startTime() {
    tens++;
    if (tens <= 9) {
        OutputTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        OutputTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }
}







