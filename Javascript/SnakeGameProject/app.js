// Game constants
const GAME_PIXEL_COUNT = 40; // Number of pixels on each axis of the game board

const SQUARE_OF_GAME_PIXEL_COUNT = GAME_PIXEL_COUNT * GAME_PIXEL_COUNT; // Total number of pixels on the game board

// Initialize current food position
let currentFoodPosition = 0;

// Game variables
let changedTheDirOnce = false; // Flag to prevent multiple direction changes at once
let totalFoodAte = 0; // Total food eaten by the snake
let totalDistanceTravelled = 0; // Total distance traveled by the snake

// Snake variables
const LEFT_DIR = 37; // Left arrow key code
const UP_DIR = 38; // Up arrow key code
const RIGHT_DIR = 39; // Right arrow key code
const DOWN_DIR = 40; // Down arrow key code

let positionArray = []; // Array to store snake positions

let snakeCurrentDirection = RIGHT_DIR; // Initial snake direction

let currentSnakeHeadPosition = SQUARE_OF_GAME_PIXEL_COUNT / 2 - 1; // Initial snake head position

let snakeLength = 100; // Initial snake length

// Game board
const gameContainer = document.getElementById("gameContainer"); // Get the game container element

/**

 * Create game board pixels.

 */

const createGameBoardPixels = () => {
  // Populate the game container with small divs representing game pixels

  let html = "";

  for (let i = 1; i <= SQUARE_OF_GAME_PIXEL_COUNT; i++) {

    html += `<div class="gameBoardPixel" id="pixel${i}"></div>`;

  }

  gameContainer.innerHTML = html;

};

// Get all game board pixels
const gameBoardPixels = document.getElementsByClassName("gameBoardPixel");

/**

 * Create food.

 */

const createFood = () => {
  // Remove previous food
  gameBoardPixels[currentFoodPosition].classList.remove("food");

  // Create new food
  currentFoodPosition = Math.floor(Math.random() * SQUARE_OF_GAME_PIXEL_COUNT);

  gameBoardPixels[currentFoodPosition].classList.add("food");
};

/**

 * Move snake.

 */

const moveSnake = () => {

  // Update snake head position based on current direction
  switch (snakeCurrentDirection) {

    case LEFT_DIR:
      currentSnakeHeadPosition--;
      if (currentSnakeHeadPosition % GAME_PIXEL_COUNT === GAME_PIXEL_COUNT - 1 || currentSnakeHeadPosition < 0) {
        currentSnakeHeadPosition += GAME_PIXEL_COUNT;
      }
      break;

    case UP_DIR:
      currentSnakeHeadPosition -= GAME_PIXEL_COUNT;
      if (currentSnakeHeadPosition < 0) {
        currentSnakeHeadPosition += SQUARE_OF_GAME_PIXEL_COUNT;
      }
      break;

    case RIGHT_DIR:
      currentSnakeHeadPosition++;
      if (currentSnakeHeadPosition % GAME_PIXEL_COUNT === 0) {
        currentSnakeHeadPosition -= GAME_PIXEL_COUNT;
      }
      break;

    case DOWN_DIR:
      currentSnakeHeadPosition += GAME_PIXEL_COUNT;
      if (currentSnakeHeadPosition > SQUARE_OF_GAME_PIXEL_COUNT - 1) {
        currentSnakeHeadPosition -= SQUARE_OF_GAME_PIXEL_COUNT;
      }
      break;

  }

  // Get next snake head pixel
  const nextSnakeHeadPixel = gameBoardPixels[currentSnakeHeadPosition];

  // Check if snake bites itself
  if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {

    // Stop moving the snake
    clearInterval(moveSnakeInterval);

    if (!alert(`Your Score is ${totalFoodAte}.`)) {
      window.location.reload();
    }

  }

  // Update snake body
  nextSnakeHeadPixel.classList.add("snakeBodyPixel");

  if (positionArray.length > totalFoodAte) {
    const removeMe = positionArray.shift();
    removeMe.classList.remove("snakeBodyPixel");
  }

  positionArray.push(nextSnakeHeadPixel);

  changedTheDirOnce = false;

  // Check if snake eats food
  if (currentSnakeHeadPosition === currentFoodPosition) {

    // Update total food eaten
    totalFoodAte++;

    // Update score display
    document.getElementById("pointsEarned").innerHTML = totalFoodAte;

    // Increase snake length
    snakeLength += 100;

    // Create new food
    createFood();
  }
};


/**

 * Change snake direction.

 * @param {number} newDirectionCode - New direction code.

 */

const changeDirection = (newDirectionCode) => {

  // Prevent multiple direction changes at once
  if (newDirectionCode === snakeCurrentDirection || changedTheDirOnce) return;

  // Update snake direction based on new direction code
  switch (newDirectionCode) {

    case LEFT_DIR:
      if (snakeCurrentDirection !== RIGHT_DIR) {
        snakeCurrentDirection = newDirectionCode;
      }
      break;

    case UP_DIR:
      if (snakeCurrentDirection !== DOWN_DIR) {
        snakeCurrentDirection = newDirectionCode;
      }
      break;

    case RIGHT_DIR:
      if (snakeCurrentDirection !== LEFT_DIR) {
        snakeCurrentDirection = newDirectionCode;
      }
      break;

    case DOWN_DIR:
      if (snakeCurrentDirection !== UP_DIR) {
        snakeCurrentDirection = newDirectionCode;
      }
      break;

  }

  changedTheDirOnce = true;
};


// Initialize game
createGameBoardPixels();

createFood();

const moveSnakeInterval = setInterval(moveSnake, 100);

// Handle keyboard input
addEventListener("keydown", (e) => changeDirection(e.keyCode));

// On-screen controller variables
const leftButton = document.getElementById("leftButton");

const rightButton = document.getElementById("rightButton");

const upButton = document.getElementById("upButton");

const downButton = document.getElementById("downButton");

// Handle on-screen controller clicks
leftButton.onclick = () => changeDirection(LEFT_DIR);

rightButton.onclick = () => changeDirection(RIGHT_DIR);

upButton.onclick = () => changeDirection(UP_DIR);

downButton.onclick = () => changeDirection(DOWN_DIR);
