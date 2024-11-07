let startTime, elapsedTime = 0, timerInterval;

function updateTime() {
    const time = Date.now() - startTime + elapsedTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    document.getElementById("display").textContent = 
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

document.getElementById("startBtn").addEventListener("click", function() {
    if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateTime, 1000);
    }
});

document.getElementById("stopBtn").addEventListener("click", function() {
    if (timerInterval) {
        elapsedTime += Date.now() - startTime;
        clearInterval(timerInterval);
        timerInterval = null;
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
});
