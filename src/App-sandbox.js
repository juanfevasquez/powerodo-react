/**
 * App-sandbox contains the original code of the first prototype.
 * This file was generated as a backup.  You can also find it in github branch:
 * basic-counter-prototype
 */

let minutes = 1;
let seconds = 0;

const circleProgress = document.querySelector('.Circle-progress');
const timerMinutes = document.querySelector('.Timer-minutes');
const timerSeconds = document.querySelector('.Timer-seconds');
const timerButton = document.querySelector('.Timer-button');
const timerPlayIcon = document.querySelector('.Timer-play');
const timerPauseIcon = document.querySelector('.Timer-pause');
const buttonLabel = document.querySelector('.Button-label');
let animationIsActive = false;
let isRunning;
let interval;

timerButton.addEventListener('click', function() {
    return pauseResumeCountdown();
});

function pauseResumeCountdown() {
    if (!animationIsActive) {
        circleProgress.classList.add('is-active');
        animationIsActive = true;
    }

    if (isRunning) {
        pauseCountdown();
    } else {
        startCountdown();
    }

    isRunning = isAnimationRunning(circleProgress)
}

function startCountdown() {
    circleProgress.classList.remove('is-paused');
    circleProgress.classList.add('is-running');

    timerPlayIcon.style.display = 'none';
    timerPauseIcon.style.display = 'block';
    buttonLabel.textContent = 'Pause'

    interval = setInterval(() => {
        if (seconds === 0) {
            updateMinutes();
            seconds = 60;
        }

        --seconds;
        timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;

        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            timerSeconds.textContent = '00';
            timerMinutes.textContent = '00';
            console.log('coockoo, coockoo');
        }
    }, 1000);   
}

function pauseCountdown() {
    clearInterval(interval);
    circleProgress.classList.add('is-paused');
    circleProgress.classList.remove('is-running');

    timerPlayIcon.style.display = 'block';
    timerPauseIcon.style.display = 'none';

    buttonLabel.textContent = 'Resume';
}

function updateMinutes() {
    --minutes;
    timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
}

function isAnimationRunning(elem) {
    const list = [...elem.classList];
    return list.includes('is-running');
}