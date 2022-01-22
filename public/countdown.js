const daysDOM = document.querySelector('.days');
const hoursDOM = document.querySelector('.hours');
const minutesDOM = document.querySelector('.minutes');
const secondsDOM = document.querySelector('.seconds');

const currDate = new Date();
const releaseDate = new Date('3/1/2022')

let diffTime = Math.floor(Math.abs(releaseDate - currDate) / 1000);

let days = Math.floor(diffTime / (60 * 60 * 24));
let hours = Math.floor((diffTime / (60 * 60)) - (days * 24));
let minutes = Math.floor((diffTime / 60) - (hours * 60) - (days * 24 * 60));
let seconds = diffTime - (minutes * 60) - (hours * 60 * 60) - (days * 24 * 60 * 60);
daysDOM.innerHTML = days;
hoursDOM.innerHTML = hours;
minutesDOM.innerHTML = minutes;
secondsDOM.innerHTML = seconds;

const updateTimer = setInterval(() => {

    days = Math.floor(diffTime / (60 * 60 * 24));
    hours = Math.floor((diffTime / (60 * 60)) - (days * 24));
    minutes = Math.floor((diffTime / 60) - (hours * 60) - (days * 24 * 60));
    seconds = diffTime - (minutes * 60) - (hours * 60 * 60) - (days * 24 * 60 * 60);

    daysDOM.innerHTML = days;
    hoursDOM.innerHTML = hours;
    minutesDOM.innerHTML = minutes;
    secondsDOM.innerHTML = seconds;

    diffTime --;
}, 1000)

const clearTimer = () => {
    try {
        clearInterval(updateTimer)
        return {success: true, message: "timer has been cleared"}
    } catch (error) {
        console.error(error)
    }
}