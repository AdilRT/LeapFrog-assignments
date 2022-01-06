//   SOUND
//   const bubblePop1 = document.createElement('audio');
//   bubblePop1.src = 'audio/Plog.ogg';
let gameOver = false;

let sharkBite = new Audio('audio/shark-bite.mp3');
let bubblePop = new Audio('audio/bubble-pop.wav');

//1:Canvas Setup
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.font = "50px Georgia";
canvas.width = 1685;
canvas.height = 837;

//CHARACTER CONSTANTS
const BlueWhaleSpriteWidth =771/4;//1940/10;
const BlueWhaleSpriteHeight = 198/2;//562/6

const SpikyFishSpriteWidth =304/6;//1940/10;
const SpikyFishSpriteHeight = 182/3;//562/6

const JellyFishSpriteWidth=299.8/6;//1940/10;
const JellyFishSpriteHeight = 435/5;//562/6

const BrownFishSpriteWidth =1280/10;//1940/10;
const BrownFishSpriteHeight = 241/6;//562/6

