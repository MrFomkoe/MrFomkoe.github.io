const foodSound = new Audio('./media/audio/snake/food.mp3');
const intoWall = new Audio('./media/audio/snake/collide_into_wall.mp3');
const moveSound = new Audio('./media/audio/snake/move.mp3');

const board = document.getElementById('board');
const speedBox = document.getElementById('speedBox');
const scoreBox = document.getElementById('scoreBox');
const hiscoreBox = document.getElementById('hiscoreBox');

let speed = 5;
let score = 0;
let hiScore = localStorage.getItem('hiScore');

let lastPaintTime = 0;

let inputDir = { x: 0, y: 0 };
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };

// Game functions
function main(timestamp) {
  timestamp = timestamp || new Date().getTime();
  window.requestAnimationFrame(main);
  if ((timestamp - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }

  lastPaintTime = timestamp;
  gameEngine();
}

function moveAndPlaySound(x, y) {
  moveSound.play();
  inputDir.x = x;
  inputDir.y = y;
}

function start() {
  window.addEventListener('keydown', (e) => {
    console.log(e);
  });
  window.addEventListener('keydown', movement);

  startTimer();
  playSnakeTheme();
  window.requestAnimationFrame(main); // http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
  document.getElementById('snakeStart').classList.add('none');
}

function movement(e) {
  switch (e.key) {
    case 'ArrowUp':
      moveAndPlaySound(0, -1);
      break;

    case 'w':
      moveAndPlaySound(0, -1);
      break;

    case 'ArrowDown':
      moveAndPlaySound(0, 1);
      break;

    case 's':
      moveAndPlaySound(0, 1);
      break;

    case 'ArrowLeft':
      moveAndPlaySound(-1, 0);
      break;

    case 'a':
      moveAndPlaySound(-1, 0);
      break;

    case 'ArrowRight':
      moveAndPlaySound(1, 0);
      break;

    case 'd':
      moveAndPlaySound(1, 0);
      break;

    default:
      console.log('Nedarbojas šie taustiņi');
      break;
  }
}

function restartSnake() {
  start();
  score = 0;
  speed = 5;
  scoreBox.innerHTML = 'Score: ' + score;
  finishedSnake.style.display = 'none';
}

function isCollide(snake) {
  // if snake bumps into itself
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      intoWall.play();
      return true;
    }
  }

  // if snake collides with boundary of the board
  if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
    intoWall.play();
    return true;
  }
  return false;
}

function gameEngine() {
  if (isCollide(snakeArr)) {
    inputDir = { x: 0, y: 0 };
    snakeArr = [{ x: 13, y: 15 }];

    finishedSnake.style.display = 'flex';
    window.removeEventListener('keydown', movement);
    stopTimer();
  }
  console.log(score);
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
      let activeCharacter = getActiveCharacter();
      snakeElement.style.backgroundImage = `url(${activeCharacter.src})`;
    } else {
      snakeElement.classList.add('snake');
      snakeElement.style.backgroundImage = `url(../media/pictures/coin.png)`;
    }

    board.appendChild(snakeElement);
  });

  // Display food
  let foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.backgroundImage = `url(../media/pictures/treasures.png)`;
  foodElement.classList.add('food');

  board.appendChild(foodElement);
}

function randomPosGenerator(a, b) {
  return Math.round(a + (b - a) * Math.random());
}

let hiScoreVal = 0;

if (!hiScore) {
  localStorage.setItem('hiScore', JSON.stringify(hiScoreVal));
} else {
  hiScoreVal = JSON.parse(hiScore);
  hiscoreBox.innerHTML = 'HiScore: ' + hiScore;
}
