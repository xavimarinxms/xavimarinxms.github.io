document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded and ready to go!");
    updateCountdown(); // initial call to display countdown immediately
    const interval = setInterval(updateCountdown, 1000);
    const menuToggle = document.querySelector('.menu-toggle');
    const rightMenu = document.querySelector('.right-menu-index');

    menuToggle.addEventListener('click', function() {
        rightMenu.classList.toggle('active');
    });
});

function updateCountdown() {
    const now = new Date().getTime();
    const countDownDate = new Date('September 1, 2024 00:00:00').getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(interval);
        const countdownElement = document.querySelector('.countdown');
        if (countdownElement) {
            countdownElement.innerHTML = "¡Ya es 1 de septiembre!";
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement) {
        daysElement.innerText = days;
    }
    if (hoursElement) {
        hoursElement.innerText = hours;
    }
    if (minutesElement) {
        minutesElement.innerText = minutes;
    }
    if (secondsElement) {
        secondsElement.innerText = seconds;
    }
}
