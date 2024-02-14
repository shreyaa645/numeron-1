var number1 = Math.round(Math.random() * 100);
const number1box = document.getElementById('number1');
number1box.innerText = number1;

var number2 = Math.round(Math.random() * 100);
const number2box = document.getElementById('number2');
number2box.innerText = number2;

const greaterThan = document.getElementById('greater-than');
const equalTo = document.getElementById('equal-to');
const lesserThan = document.getElementById('lesser-than');

var score = 0;

greaterThan.onclick = function() {
    if(number1 > number2) {
        score++;
        resetTime(timerId);
    } else {
        location.href = './gameover.html';
    }

    number1 = Math.round(Math.random() * 100);
    number1box.innerText = number1;

    number2 = Math.round(Math.random() * 100);
    number2box.innerText = number2;
}

lesserThan.onclick = function() {
    if(number2 > number1) {
        score++;
        resetTime(timerId);
    } else {
        location.href = './gameover.html';
    }

    number1 = Math.round(Math.random() * 100);
    number1box.innerText = number1;

    number2 = Math.round(Math.random() * 100);
    number2box.innerText = number2;
}

equalTo.onclick = function() {
    if(number2 === number1) {
        score++;
        resetTime(timerId);
    } else {
        location.href = './gameover.html';
    }

    number1 = Math.round(Math.random() * 100);
    number1box.innerText = number1;

    number2 = Math.round(Math.random() * 100);
    number2box.innerText = number2;
}

var time = 5;
var timer = document.getElementById('timer');
var timerId;

function startTimer() {
    time = 5;
    timer.innerText = time;
    timerId = setInterval(() => {
        time--;
        if (time === 0) {
            location.href = "./gameover.html";
        }
        timer.innerText = time;
        localStorage.setItem("score", score);
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();
