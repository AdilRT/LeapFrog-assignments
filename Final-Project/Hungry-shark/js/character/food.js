// foodTypes = ['GoldFish','RedFish'];
foodTypes = ['RedFish'];

class Food {
  constructor() {
    // this.x = can_world.width;  
    this.counted = false;
    this.image = new Image();
    this.image_flipped = new Image();
    this.angle = 0;
    this.roam = false;
  }

  update(){
    const dx = this.x - player.pos.x;
    const dy = this.y - player.pos.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    let theta = Math.atan2(dy, dx);
    this.angle = theta;



 

}
  // draw = () => {
  //   ctx.fillStyle = "black";
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //   ctx.fill();
  //   ctx.closePath();
  // };
  
}

// HANDLER
let foodArray =[]
function handleFood(){
  //spawn freq
  if (gameFrame % 5 == 0) {
    const randomFood =this.foodTypes[Math.floor(Math.random() * foodTypes.length)];
    //SORT
    foodArray.sort(function (a, b) {
      return a.y - b.y;
    });
  }
    //spawn moderate
  // spawn rarely
  if (gameFrame % 350 == 0) {
    const randomFood = this.foodTypes[Math.floor(Math.random() * foodTypes.length)];
    if (randomFood == "GoldFish") {
      for(i=1;i<=5;i++){
        foodArray.push(new GoldFish());
      }
    }
    for(i=1;i<=5;i++){
      if (randomFood == "RedFish") {
        foodArray.push(new RedFish("images/enemies-no-damage/red_fish_right.png","RightToLeft"));
        foodArray.push(new RedFish("images/enemies-no-damage/blue-swim.png",'LeftToRight'));
        foodArray.push(new RedFish("images/enemies-no-damage/pink-swim.png",'LeftToRight'));
        foodArray.push(new RedFish("images/enemies-no-damage/yellow-swim.png",'LeftToRight'));
      }
    }
    
    foodArray.sort(function (a, b) {
      return a.y - b.y;
    });
  }

  for (let i = 0; i < foodArray.length; i++) {
    foodArray[i].update();
    foodArray[i].draw();

    //fix this
    // if (foodArray[i].x < 0 - foodArray[i].radius||foodArray[i].x > canvas.width+100||foodArray[i].x<-100) {
    if (foodArray[i].x < 0 - BOUNDARY || foodArray[i].x > can_world.width +BOUNDARY) {
      foodArray.splice(i, 1);
      i--; //destroying objects
    }
    //   checking collision
    else if (foodArray[i].distance < foodArray[i].radius + player.radius) {
      player.collision=true;

      // console.log('çollided');

        sharkBite.play();

      foodArray[i].health -= player.damage  ;
      if (foodArray[i].counted == false) {
        score++;
        player.health++;
        // ctx.fillStyle = "green";
        // ctx.font = "50px Orbitron";
        // ctx.fillText("+1",100,100);
        foodArray[i].counted = true;
        foodArray.splice(i, 1);
      

      }
        i--; 
      }
      if(player.collision==true)handleBlood();

  }
}
