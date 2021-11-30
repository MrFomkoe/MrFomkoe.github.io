const foodSound = new Audio('./music/food.mp3');
const gameOverSound = new Audio('./music/gameover.mp3');
const moveSound = new Audio('./music/move.mp3');
const musicSound = new Audio('./music/music.mp3');

const speedBox = document.getElementById('speedBox');
const scoreBox = document.getElementById('scoreBox');
const hiscoreBox = document.getElementById('hiscoreBox');
const board = document.getElementById('board');

let speed = 5;
let score = 0;
let lastPaintTime = 0;

let hiScore = localStorage.getItem('hiScore');

let inputDir = { x: 0, y: 0 };
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };

// Game functions
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }

  lastPaintTime = ctime;
  gameEngine();
}

function start() {
  window.requestAnimationFrame(main);
  document.getElementById("snakeStart").classList.add("none")
}

function isCollide(snake) {
  // if snake bumps into itself
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  // if snake collides with boundary of the board
  if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
    return true;
  }
  return false;
}

function gameEngine() {
  if (isCollide(snakeArr)) {
    gameOverSound.play();
    inputDir = { x: 0, y: 0 };
    alert('Game Over, Press any key to play again!');
    snakeArr = [{ x: 13, y: 15 }];
    score = 0;
  }

  // If snake has eaten the food, increment the score, increment speed and regenerate the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodSound.play();
    score += 10;
    speed += 0.2;
    if (score > hiScoreVal) {
      hiScoreVal = score;
      localStorage.setItem('hiScore', JSON.stringify(hiScoreVal));
      hiscoreBox.innerHTML = 'HiScore: ' + hiScoreVal;
    }
    scoreBox.innerHTML = 'Score: ' + score;
    speedBox.innerHTML = 'Current Speed: ' + parseInt(speed) + 'm/s';
    snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });

    let a = 2;
    let b = 16;
    food = { x: randomPosGenerator(a, b), y: randomPosGenerator(a, b) };
  }

  // Moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  // Display Snake
  board.innerHTML = '';
  snakeArr.forEach((e, i) => {
    let snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (i == 0) {
      snakeElement.classList.add('head');
    } else {
      snakeElement.classList.add('snake');
    }

    board.appendChild(snakeElement);
  });

  // Display food
  let foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  board.appendChild(foodElement);
}

function randomPosGenerator(a, b) {
  return Math.round(a + (b - a) * Math.random());
}

console.log(randomPosGenerator(2, 16, snakeArr));

let hiScoreVal = 0;
if (hiScore === null) {
  console.log(hiScore);

  localStorage.setItem('hiScore', JSON.stringify(hiScoreVal));
} else {
  hiScoreVal = JSON.parse(hiScore);
  hiscoreBox.innerHTML = 'HiScore: ' + hiScore;
}

window.addEventListener('keydown', (e) => {
  inputDir = { x: 0, y: 1 };
  moveSound.play();

  switch (e.key) {
    case 'ArrowUp':
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case 'ArrowDown':
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case 'ArrowLeft':
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case 'ArrowRight':
      inputDir.x = 1;
      inputDir.y = 0;
      break;
  }
});
