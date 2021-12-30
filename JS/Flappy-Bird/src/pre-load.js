//canvas setup
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); //to use built in canvas methods
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const crash = new Image();
crash.src = "images/crash1.png";

const background = new Image();
background.src = "images/background.jpg";

const flappySprite = new Image();
flappySprite.src = "images/flappy-bird-sprite-sheet-2.png";
