//1:Canvas Setup
const can_vPort = document.getElementById('viewport');
const ctx_vPort = can_vPort.getContext('2d');
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const can_world = createElement('canvas', {
    'width': 3840,
    'height': 3840
});
const ctx_world = can_world.getContext('2d'); /* World canvas context */

//FONTS
ctx.font = "50px Georgia";
canvas.width = 640;
canvas.height = 640;

//get DOM elements
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const select = document.getElementById("list");

// const cave = document.getElementById("cave");

//   SOUND
//   const bubblePop1 = document.createElement('audio');
//   bubblePop1.src = 'audio/Plog.ogg';

//IMAGES
const background = new Image();
background.src = "images/bg/waves.png";
// background = new Image;
// background.src = 'images/bg/bg0.png';
const bg_startPage = new Image;
bg_startPage.src = 'images/bg/background.jpg';
const logo = new Image;
logo.src = 'images/bg/logo-1.png';
const bg_game = new Image();
bg_game.src = 'images/bg/background1.png';
// bg_game.src = 'images/bg/cactus.jpg';
const bubbleImage = new Image();
bubbleImage.src = 'images/bubbles/bubble_pop_under_water_01.png';
const cave = new Image();
cave.src = 'images/boss/cave_entrance.svg';
const bg_boss = new Image();
// bg_boss.src = 'images/bg/bg_boss.png';
bg_boss.src = 'images/bg/background2.png';
const health_pill = new Image();
health_pill.src = 'images/gems/green_pill.png';
let power_pill = new Image();
power_pill.src = 'images/gems/power.png';

//AUDIO
let sharkBite = new Audio('audio/player/shark-bite.mp3');
let bubblePop = new Audio('audio/bubbles/bubble-pop.wav');
let underwater = new Audio('audio/bg/underwater.mp3');





//CHARACTER:enemy CONSTANTS
const BlueWhaleSpriteWidth =771/4;//1940/10;
const BlueWhaleSpriteHeight = 198/2;//562/6

const SpikyFishSpriteWidth =566/6;//1940/10;
const SpikyFishSpriteHeight = 363/3;//562/6

const JellyFishSpriteWidth=496/6;//1940/10;
const JellyFishSpriteHeight = 590/5;//562/6

const BrownFishSpriteWidth =1280/10;//1940/10;
const BrownFishSpriteHeight = 241/6;//562/6

const CrabSpriteWidth = 260/3;
const CrabSpriteHeight = 168/2;

// piranha
const PiranhaLeftSpriteWidth =754/7;
const PiranhaLeftSpriteHeight = 88;

const PiranhaBiteSpriteWidth = 471/6
const PiranhaBiteSpriteHeight = 84

const PiranhaTurnSpriteWidth = 563/8
const PiranhaTurnSpriteHeight = 78

const PiranhaHurtSpriteWidth = 650/8
const PiranhaHurtSpriteHeight = 76

const PiranhaDieSpriteWidth = 433/5
const PiranhaDieSpriteHeight = 68

// const PiranhaFloatSpriteWidth


//food CONSTANTS

const GoldFishSpriteWidth = 762/6;
const GoldFishSpriteHeight = 100;

// BOSS
const BossSpriteWidth = 384/3
const BossSpriteHeight = 112    

// Globals vars
let score = 0;
let gameFrame = 0; //eg.spawn new bubles every 100 frames
ctx.font = "50px Georgia";
let gameSpeed = 1;
let parallexSpeed = 20;
let canvasPosition = canvas.getBoundingClientRect();
let bossMode = false;
let parallex = false;
let gameOver = false;


//CONSTANTS
const PLAYER_HEALTH = 30;




