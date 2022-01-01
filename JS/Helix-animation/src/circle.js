class Circle{
    constructor(ctx, phi){
        this.x = 0;
        this.y = 0;
        this.radius = 15;
        this.degree = 180; 
        this.radiusMax = 10;
        this.circleMax = 30;
        this.speed = 1; 
        this.frameCount = 0;
        this.currentX;
        this.currentY = 10;
        this.phi = phi;
    }

    draw = ()=>{
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    check =()=>{
        if (this.phi) this.phi = 0;
        else this.phi = Math.PI;
    }
 

    moveCircle = ()=>{
        let tempX = (this.speed * this.currentX * Math.PI) / this.degree;//2*5*3.14//2*10*3.14
        this.currentX++;
        this.currentX = this.currentX % this.degree;//0
        if (this.currentX <= this.degree) {
            this.currentX++;
            this.y = this.circleMax * Math.sin(tempX + this.phi) + this.currentY; 
            this.radius = this.radiusMax / 2 * Math.cos(tempX + this.phi) + this.radiusMax / 2; 
        } else {
            this.currentX = 0;
        }
        this.frameCount++;
    }
}