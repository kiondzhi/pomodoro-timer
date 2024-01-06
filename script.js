let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let buttonStart = document.querySelector('.button');

let interval;
let minute = 0;
let second = 0;
let breaksss = "Break";

const startTimer = () => {
    second++;
    if (second > 9) {
        seconds.innerHTML = second;
    } else {
        seconds.innerHTML = '0' + second;
    }
    if (second === 60) {
        second = 0;
        minute++;
        if (minute > 9) {
            minutes.innerHTML = minute;
        } else {
            minutes.innerHTML = '0' + minute;
        }
    }
    if (minute === 25) {
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
    interval = setInterval(startTimer, 1);
});

