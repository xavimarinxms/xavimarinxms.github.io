let character = document.getElementById('character');
let obstacle = document.getElementById('obstacle');
let gameWidth = document.querySelector('.game').offsetWidth;
let isGameOver = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (isGameOver) {
            restartGame();
        } else {
            jump();
        }
    }
});

function jump() {
    if (!character.classList.contains('animate')) {
        character.classList.add('animate');
    }
    setTimeout(function() {
        character.classList.remove('animate');
    }, 500);
}

function restartGame() {
    isGameOver = false;
	character.style.bottom = '0px'; // Dejar más margen inferior al personaje
    obstacle.style.right = '20px'; // Dejar más margen derecho al obstáculo
    obstacle.style.display = 'block';
    obstacle.style.animation = 'move 2s linear infinite';
    checkCollisionInterval = setInterval(checkCollision, 10);
}

let checkCollisionInterval = setInterval(checkCollision, 10);

function checkCollision() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));
    let characterRight = characterLeft + characterWidth;
    
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    let obstacleWidth = parseInt(window.getComputedStyle(obstacle).getPropertyValue('width'));
    let obstacleRight = obstacleLeft + obstacleWidth;
    
    // Check if obstacle is within character bounds horizontally and if the character is not high enough
    if (obstacleLeft < gameWidth / 2 + characterWidth / 2 && obstacleRight > gameWidth / 2 - characterWidth / 2 && characterTop >= 150) {
        alert('Game Over!');
        isGameOver = true;
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        clearInterval(checkCollisionInterval);
    }
}

// CSS for jump animation
let style = document.createElement('style');
style.innerHTML = `
    .animate {
        animation: jump 0.5s ease-out;
    }
    @keyframes jump {
        0% { bottom: 0; }
        50% { bottom: 100px; }
        100% { bottom: 0; }
    }
    .obstacle {
        animation: move 2s linear infinite;
    }
    @keyframes move {
        0% { right: -30px; }
        100% { right: 100%; }
    }
`;
document.head.appendChild(style);
