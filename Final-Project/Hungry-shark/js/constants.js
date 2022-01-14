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
// const startBtn = document.getElementById("startBtn");
// const restartBtn = document.getElementById("restartBtn");
// const easyBtn = document.getElementById("easyBtn");
// const normalBtn = document.getElementById("normalBtn");
// const hardBtn = document.getElementById("hardBtn");

let startBtn = document.createElement('button');
startBtn.setAttribute('id', 'startBtn');
// startBtn.style.fontSize = '40px';
startBtn.innerHTML = 'Play';
document.body.appendChild(startBtn);

let easyBtn = document.createElement('button');
easyBtn.setAttribute('id', 'easyBtn');
easyBtn.setAttribute('class', 'active');
easyBtn.innerHTML = 'Easy';
document.body.appendChild(easyBtn);

let normalBtn = document.createElement('button');
normalBtn.setAttribute('id', 'normalBtn');
normalBtn.innerHTML = 'Normal';
document.body.appendChild(normalBtn);

let hardBtn = document.createElement('button');
hardBtn.setAttribute('id', 'hardBtn');
hardBtn.innerHTML = 'Hard';
document.body.appendChild(hardBtn);

let restartBtn = document.createElement('button');
restartBtn.setAttribute('id', 'restartBtn');
restartBtn.innerHTML = 'Restart';
document.body.appendChild(restartBtn);
// const select = document.getElementById("list");
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
const fireSign = new Image();
fireSign.src = 'images/boss/fire.png';
const blood1 = new Image();
blood1.src = 'images/blood-ss.png';
const playerImage = new Image();
playerImage.src = 'images/player/shark-ss-transparent.png'; 
const playerImageFlipped = new Image();
playerImageFlipped.src = 'images/player/flipped.png'; 
const playerImageBite = new Image();
playerImageBite.src = 'images/player/shark-biting.png'; 
const playerImageBiteFlipped = new Image();
playerImageBiteFlipped.src = 'images/player/shark-biting-flipped.png'; 


//AUDIO
let sharkBite = new Audio('audio/player/shark-bite.wav');
let sharkBite2 = new Audio('audio/player/bite2.wav');
let bubblePop = new Audio('audio/bubbles/bubble-pop.wav');
let underwater = new Audio('audio/bg/underwater.mp3');
let deadSound = new Audio('audio/player/death.wav');
let healing = new Audio('audio/player/healing.wav');
let power_up = new Audio('audio/player/power-up.wav');
let sharkSpawnSound = new Audio('audio/shark/shark.wav');
let piranha = new Audio('audio/shark/piranha.wav');
let bossModeSound = new Audio('audio/bossMode/bossMode.wav');





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

const RedFishSpriteWidth = 1992/4;
const RedFishSpriteHeight = 981/3;

// BOSS
const BossSpriteWidth = 384/3
const BossSpriteHeight = 112    

// GEMS
const GemsSpriteWidth = 290/4;
const GemsSpriteHeight = 800/5;

const Shells1SpriteWidth = 133/2;
const Shells1SpriteHeight = 117/2;

const Shells2SpriteWidth = 106/2;
const Shells2SpriteHeight = 102;

const BloodSpriteWidth = 489/3;
const BloodSpriteHeight = 129;


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
let difficulty = 'easy';
let timer = 0;
let bossActive = true;
let bossDefeated = false;
let seconds=0
let minutes=0
let hours=0

let btns = [easyBtn,normalBtn,hardBtn];
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += "active";
  if(btns[i]==easyBtn)difficulty= 'easy';
  else if(btns[i]==normalBtn)difficulty= 'normal';
  else if(btns[i]==hardBtn)difficulty= 'hard';

  });
}



//CONSTANTS
const PLAYER_HEALTH = 1;
const PLAYER_DAMAGE = 5;


const TOTALTIME=80000
const SECONDS_IN_DAY = 86400;
const SECONDS_TO_HOURS = 1 / 3600;
const SECONDS_TO_MINS = 1 / 60;
const TIME_HEIGHT = 40;
const BOUNDARY = 200;

// sharks
const RARE_ANIMALS_VERTICAL_SPAWN = RandomNumber(can_world.height/2,can_world.height);
const SHARKS_RADIUS = 65;
const SHARKS_XSPEED = RandomNumber(2,5);
// whale
const WHALE_RADIUS = 60;
// boss
const BOSS_RADIUS = 100;
const BOSS_HEALTH = 1000;
const BOSS_DAMAGE = 30;
const BOSS_INVICIBILITY_PERIOD = 1000;
const BOSS_PASSIVE_TIME = RandomNumber(3000,5000)

const BROWN_FISH_RADIUS = 50;

const CRAB_RADIUS = 50;
const STAGGERFRAME10 = 10;
const STAGGERFRAME30 = 30;
const BUBBLES_RADIUS = 10;
const WAVE_SPEED = 4;



