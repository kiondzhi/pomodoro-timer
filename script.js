import * as workerTimers from 'https://esm.run/worker-timers';

let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let buttonStart = document.querySelector('.button');

let interval;
let minute = 0;
let second = 0;
let breaksss = "Break";

function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.play();
}

const startTimer = () => {
    second++;
    if (second > 9) {
        seconds.innerHTML = second;
    } else {
        seconds.innerHTML = '0' + second;
    }
    if (second > 59) {
        second = 0;
        minute++;
        if (minute > 9) {
            minutes.innerHTML = minute;
        } else {
            minutes.innerHTML = '0' + minute;
        }
    }
    if (minute === 25) {
        playSound("apple-pay-succes.mp3");
        second = 0;
        minute = 0;
        if (second > 9) {
            seconds.innerHTML = second;
        } else {
            seconds.innerHTML = '0' + second;
        }
        if (minute > 9) {
            minutes.innerHTML = minute;
        } else {
            minutes.innerHTML = '0' + minute;
        }
        buttonStart.innerHTML = breaksss;
        clearInterval(interval)
    }

    if (buttonStart.innerHTML == breaksss) {
        if (minute === 5) {
            playSound("apple-pay-succes.mp3");
            second = 0;
            minute = 0;
            if (second > 9) {
                seconds.innerHTML = second;
            } else {
                seconds.innerHTML = '0' + second;
            }
            if (minute > 9) {
                minutes.innerHTML = minute;
            } else {
                minutes.innerHTML = '0' + minute;
            }
            buttonStart.innerHTML = "Start";
            clearInterval(interval)
        }
    }

}




buttonStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
});

