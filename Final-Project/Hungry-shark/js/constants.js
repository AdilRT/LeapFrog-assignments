//   SOUND
//   const bubblePop1 = document.createElement('audio');
//   bubblePop1.src = 'audio/Plog.ogg';
let gameOver = false;

//IMAGES
// background = new Image;
// background.src = 'images/bg/bg0.png';
bg_startPage = new Image;
bg_startPage.src = 'images/bg/background.jpg';
logo = new Image;
logo.src = 'images/bg/logo-1.png';
const bubbleImage = new Image();
bubbleImage.src = 'images/bubbles/bubble_pop_under_water_01.png';

//AUDIO
let sharkBite = new Audio('audio/player/shark-bite.mp3');
let bubblePop = new Audio('audio/bubbles/bubble-pop.wav');

//1:Canvas Setup
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.font = "50px Georgia";
canvas.width = 1685;
canvas.height = 837;

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");



//CHARACTER CONSTANTS
const BlueWhaleSpriteWidth =771/4;//1940/10;
const BlueWhaleSpriteHeight = 198/2;//562/6

const SpikyFishSpriteWidth =304/6;//1940/10;
const SpikyFishSpriteHeight = 182/3;//562/6

const JellyFishSpriteWidth=299.8/6;//1940/10;
const JellyFishSpriteHeight = 435/5;//562/6

const BrownFishSpriteWidth =1280/10;//1940/10;
const BrownFishSpriteHeight = 241/6;//562/6

