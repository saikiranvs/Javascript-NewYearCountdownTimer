const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secondsElement = document.getElementById("seconds");

const newYearDate = "1 Jan 2022";

function countdown() {
    const newYearDateFormatted = new Date(newYearDate);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDateFormatted - currentDate) / 1000;

    const days = Math.floor((totalSeconds / 3600) / 24);
    
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
