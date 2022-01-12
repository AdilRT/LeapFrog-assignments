foodTypes = ['GoldFish'];

class Food {
  constructor() {
    // this.x =toss() == true ?RandomNumber(-canvas.width, 0 ):RandomNumber(canvas.width,canvas.width + 100);
    this.x = can_world.width;  
    this.y = Math.random() * (can_world.height);
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

    if(this.x<-100)this.x = can_world.width+300;


 

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
  if (gameFrame % 50 == 0) {
    const randomFood =this.foodTypes[Math.floor(Math.random() * foodTypes.length)];
    // if (randomFood == "BlueWhale") enemyArray.push(new BlueWhale());
    //SORT
    foodArray.sort(function (a, b) {
      return a.y - b.y;
    });
  }
    //spawn moderate
  // spawn rarely
  if (gameFrame % 150 == 0) {
    const randomFood = this.foodTypes[Math.floor(Math.random() * foodTypes.length)];
    // if (randomFood == "GoldFish") {
      for(i=1;i<=15;i++){
        // foodArray.push(new GoldFish(i*25,i*25));
        foodArray.push(new GoldFish());
      }
    // }
    foodArray.sort(function (a, b) {
      return a.y - b.y;
    });
  }

  for (let i = 0; i < foodArray.length; i++) {
    foodArray[i].update();
    foodArray[i].draw();

    //fix this
    // if (foodArray[i].x < 0 - foodArray[i].radius||foodArray[i].x > canvas.width+100||foodArray[i].x<-100) {
    if (foodArray[i].x < 0 - foodArray[i].radius) {
      foodArray.splice(i, 1);
      i--; //destroying objects
    }
    //   checking collision
    else if (foodArray[i].distance < foodArray[i].radius + player.radius) {
      player.collision=true;
      console.log('çollided');
        sharkBite.play();
      // player.health-= foodArray[i].damage;
      foodArray[i].health -= player.damage  ;
      // foodArray[i].x=player.x+500;
      // foodArray[i].roam = true;

      if (foodArray[i].counted == false) {
        score++;
        foodArray[i].counted = true;
        foodArray.splice(i, 1);

      }
        i--; 
      }
  }
}
