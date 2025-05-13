const man = document.getElementById('man');
const butterfly= document.getElementById('butterfly');
const bomb = document.getElementById('bomb');
const scoreDisplay = document.getElementById('score');
let score = 0;
let manPosition = 125; // Starting position of the man
let gameInterval;
let gameSpeed = 5; // Speed of object movement

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && manPosition > 0) {
        manPosition -= 20;
    } else if (event.key === 'ArrowRight' && manPosition < 250) {
        manPosition += 20;
    }
    man.style.left = `${manPosition}px`;
});

function startGame() {
    // Place initial objects randomly
    resetObject(butterfly, 'butterfly');
    resetObject(bomb, 'bomb');

    gameInterval = setInterval(() => {
        moveObject(butterfly, 'butterfly');
        moveObject(bomb, 'bomb');
        checkCollision();
    }, 20);
}

function moveObject(object, type) {
    let objectTop = parseInt(window.getComputedStyle(object).getPropertyValue('top'));

    if (objectTop >= 600) { // If object goes off the screen, reset it
        resetObject(object, type);
    } else {
        object.style.top = `${objectTop + gameSpeed}px`;
    }
}

function resetObject(object, type) {
    object.style.top = '-50px'; // Start off screen at the top
    object.style.left = `${Math.floor(Math.random() * 270)}px`; // Random X position
}

function checkCollision() {
    let manRect = man.getBoundingClientRect();
    let butterflyRect = butterfly.getBoundingClientRect();
    let bombRect = bomb.getBoundingClientRect();

    // Check collision with leaf
    if (manRect.left < butterflyRect.right &&
        manRect.right > butterflyRect.left &&
        manRect.top < butterflyRect.bottom &&
        manRect.bottom > butterflyRect.top) {
        score++;
        scoreDisplay.textContent = score;
        resetObject(butterfly, 'butterfly');
    }

    // Check collision with bike
    if (manRect.left < bombRect.right &&
        manRect.right > bombRect.left &&
        manRect.top < bombRect.bottom &&
        manRect.bottom > bombRect.top) {
        clearInterval(gameInterval);
        alert('Game Over! Your Score: ' + score);
        window.location.reload();
    }
}

startGame();
