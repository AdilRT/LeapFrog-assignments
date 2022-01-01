let circleArray = [];

class Helix{
    constructor(row,column){
        this.row = row;
  this.column = column;
  this.x = 100;
  this.y = 80;
  this.space = 40;
    }

    drawCanvas = ()=> {
        ctx.fillStyle = "purple";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
      drawCircles =  (phi)=> {
        let posY = this.y;
    
        for (let i = 0; i < this.row; i++) {
          posY += this.space; //100+30
          let posX = 0;
          let currentPhi = 0;
          let phaseIncrease = 5;
          for (let j = 0; j < this.column; j++) {
            let circle = new Circle(ctx, phi);
            circle.check();
            circle.x = posX += this.space;
            circle.y = posY;
            circle.currentX = currentPhi += phaseIncrease; //5.10.15
            circle.currentY = posY;
            circleArray.push(circle);
          }
        }
      };
      init =  ()=> {
        this.drawCircles(false);
        this.drawCircles(true);
        this.loop();
      };
      loop =  ()=> {
        this.drawCanvas();
        for (let i = 0; i < circleArray.length; i++) {
          circleArray[i].draw();
          circleArray[i].moveCircle();
        }
        requestAnimationFrame(this.loop);
      };
}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let helix = new Helix(8, 15);
helix.init();