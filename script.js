// script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded and ready to go!");
    // Add your JavaScript here
});
// script.js

function updateCountdown() {
    const now = new Date().getTime();
    const countDownDate = new Date('September 1, 2024 00:00:00').getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "¡Ya es 1 de septiembre!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call to display countdown immediately
