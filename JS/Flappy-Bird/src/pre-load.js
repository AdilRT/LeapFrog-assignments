//canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //to use built in canvas methods   
canvas.width = 500;
canvas.height = 600;

const crash= new Image();
crash.src = 'images/crash1.png';

const background = new Image();
background.src = 'images/background.jpg';

const flappySprite = new Image();
flappySprite.src = 'images/flappy-bird-sprite-sheet-2.png';


