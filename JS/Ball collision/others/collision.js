var canvas = document.querySelector('canvas');
c = canvas.getContext("2d");

canvas.width = 500;
canvas.height=500;
c.beginPath();//begins the path
c.rect(0, 0, 500, 500);//draw rect inside canvas
c.stroke();//draws the path you have defined with all those moveTo() and lineTo() methods. 

ballsArray=[];


function getRandomNumber(max, min) {
    return parseInt(Math.random() * (max - min) + min)
  }

function getRandomPosition() {

  }

function Ball(size,color){
    var that = this;
    // this.size = getRandomNumber(20,50);
    this.size=size;
    this.speed = getRandomNumber(100,500);
    this.angle = getRandomNumber(0,360);
    this.color= color;
    position = getRandomPosition();
    this.left = position[0]; //x-coord
    this.top = position[1]; //y-coord

    init = function () {
        console.log(123);
        c.beginPath();
        c.arc(that.left, that.top, that.size, 0, 2 * Math.PI);
        c.fillStyle = that.color;
        c.fill();
    
        that.angle_deg = that.angle;
        that.angle = that.angle * (Math.PI / 180);
        that.dx = (that.speed * Math.cos(that.angle) * 0.017);
        that.dy = (that.speed * Math.sin(that.angle) * 0.017);
        ballsArray.push(that);
      }
      init();
}

var ball = new Ball(30,'red');