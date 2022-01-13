//
function spriteHandler(statesArr, spriteWidth, spriteHeight, spriteAnimation) {
  statesArr.forEach((state, index) => {
    let frames = {
      loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimation[state.name] = frames;
  });
}

//RANDOM NUMBER GEN
function RandomNumber(min, max) {
  while (true) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    if (randomNum !== 0) return randomNum;
  }
}

function toss(){
  if(Math.floor(Math.random() * 2) == 0){
    return true; 
    }
    else{
    return false;
    }
}

function handleGameStatus() {
  //show score
  ctx.fillStyle = "black";
  ctx.font = "30px Odibee Sans"; 
  ctx.fillText("SCORE: " + score, 10, 30);
  ctx.fillStyle = "green";
  ctx.fillText("HEALTH: " + Math.floor(player.health), 220, 30);
  ctx.fillStyle = "#f542dd";
  ctx.fillText("STRENGTH: " + Math.floor(player.damage), 450, 30);
}

//  GAME PAGES

//START PAGE
function startPage() {
  resetTimer();
  ctx.fillStyle = "black";
  ctx.font = "100px Orbitron";
  ctx.drawImage(bg_startPage, 0, 0, canvas.clientWidth, canvas.height);
  ctx.drawImage(logo,120, 10, 400, 200);
  // ctx.drawImage(startBtn,canvas.width/2-50,canvas.height/2)
  // ctx.drawImage(easyBtn,canvas.width/2-50,canvas.height/2+100)
  // ctx.drawImage(normalBtn,canvas.width/2-50,canvas.height/2+150)
  // ctx.drawImage(hardBtn,canvas.width/2-50,canvas.height/2+200)
  //display
  startBtn.style.display = "block";
  restartBtn.style.display = "none";
  easyBtn.style.display = 'block';
  normalBtn.style.display = 'block';
  hardBtn.style.display = 'block';
  cave.style.display = 'none';
  // select.style.display='block';
  gameOver = false;
  reset();


  // console.log('startPage',parallex);
  // easyBtn.addEventListener('click',function(e){
  //   difficulty= 'easy';
  // })

  // normalBtn.addEventListener('click',function(e){
  //   difficulty= 'normal';
  // })
  // hardBtn.addEventListener('click',function(e){
  //   difficulty= 'hard';
  // })
}


let highScore = +localStorage.getItem("highScore") || 0;

// GAMEOVER PAGE
function overPage() {
  if (gameOver) {
  resetTimer();

    ctx.drawImage(bg_startPage, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "gold";
    console.log('gameover reached');
    ctx.font = "30px Orbitron";
    ctx.fillText("Time Alive",240, 50);
 

    
    ctx.font = "60px Orbitron";
    ctx.fillText("GAME OVER", 100, 200);
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", score);
      ctx.font = "30px Orbitron";
      ctx.fillText("Congrats! New Highscore: " + highScore, 240, 550);

    }else{
    ctx.font = "30px Orbitron";
      ctx.fillText("Score: " + score, 240, 550);
    }
    parallex = false;
    bossMode = false;
    BG2 = {
      x1: 0,
      x2: canvas.width,
      y: 0,
      width: canvas.width,
      height: canvas.height,
    };
    reset();
    // console.log('overPage',parallex);

    
    // if clicked reset the settings
    restartBtn.style.display = "block";
    restartBtn.addEventListener("click", function (e) {
      startPage();
    });
  }
  // console.log(highScore);
}

// BOSS PAGE
function bossPage(){
  // ctx.drawImage(bg_startPage, 0, 0, canvas.clientWidth, canvas.height);
  enemyArray = [];
  foodArray = []; 
  boss.update();
  boss.draw(); 
}

function reset(){
  //reset playerPos,enemiesArray,score,player health
  player.pos2.x = canvas.width/2;
  player.pos2.y = canvas.height/2;
  enemyArray = []
  foodArray = []
  score = 0;
  player.health = PLAYER_HEALTH;
}

function checkScore(){
  if(score>2){
    if(bossMode==false){
      ctx_world.drawImage(cave,can_world.width-400,can_world.height-250,200,200)
      if(RectCircleCollision()){
        parallex = true;
        bossMode = true;
        bossPage();
      }
    }
    if(bossMode==true)ctx_world.drawImage(cave,can_world.width-100,can_world.height-150,200,200)
    //show cave
    // cave.style.display = 'block';
    // drop a pill
  }
}


function RectCircleCollision(){
  let caveWidth = 200;
  let caveHeight = 200;
  // let rect = cave.getBoundingClientRect();
  let cavePosX=can_world.width-400;
  let cavePosY =can_world.height-250;

  var distX = Math.abs(player.pos.x - cavePosX-caveWidth/2);
  var distY = Math.abs(player.pos.y - cavePosY-caveHeight/2);

  if (distX > (caveWidth/2 + player.radius)|| distY > (caveHeight/2 + player.radius)) { return false; }
  if (distX <= (caveWidth/2)||distY <= (caveHeight/2) ) { return true;} 
}


function createElement(ele, attrObj) {
  /* Create the new Element */
  var element = document.createElement(ele);

  /* Do the following only if attrObj exists */
  if (attrObj) {
      /* Loop through attrObj's properties to set the element's attributes */
      for (var i in attrObj) {
          element.setAttribute(i, attrObj[i]);
      }
  }

  /* Return the new element */
  return element;
}

// DRAW CHARACTER
function drawCharacter(
  img,
  playerState,
  animation,
  spriteWidth,
  spriteHeight,
  imgPosX,
  imgPosY,
  imgWidth,
  imgHeight,
  staggerFrame
) {
  let position =
    Math.floor(gameFrame / staggerFrame) % animation[playerState].loc.length;
  let frameX = position * spriteWidth;
  let frameY = animation[playerState].loc[position].y;
  ctx_world.drawImage(
    img,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    imgPosX,
    imgPosY,
    imgWidth,
    imgHeight
  );
}



// function changeFunction(selectedValue){
//   let x= selectedValue.value;
//   // let selectedValue = document.getElementById('list').value;
//   return x;
// }


function showTimer() {
  seconds = (gameFrame / DAY.full) * SECONDS_IN_DAY;
  hours = Math.floor(seconds * SECONDS_TO_HOURS);
  seconds = seconds - hours / SECONDS_TO_HOURS;
  minutes = Math.floor(seconds * SECONDS_TO_MINS);
  seconds = Math.floor(seconds - minutes / SECONDS_TO_MINS);
  ctx.fillStyle = "black"
  ctx.font = '20px Orbitron'
  ctx.fillText(hours + ' : ' + minutes, 300, 70);
}

function resetTimer(){
  minutes =0;
  hours=0;
  seconds= 0;
}
