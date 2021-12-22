const container = document.getElementById("container");
container.style.width = "400px";
container.style.height = "300px";
container.style.border = "2px solid green";
container.style.position = "relative";

const ball = document.createElement("div");
ball.style.width = "25px";
ball.style.height = "25px";
ball.style.position = "absolute";
ball.style.margin = "0px 50%";
ball.style.background = "#47a";
ball.style.borderRadius="20px";




position = 0;
direction = "down";
setInterval(()=>{
        if(direction=="down"){
            if(position + parseInt(ball.style.height) < parseInt(container.style.height) ){
                position +=5;
                ball.style.top = position + "px";
                container.appendChild(ball);
            }
            else{
                direction = "up";
                // position = parseInt(ball.style.height);
            }
        }
        
        if(direction == "up"){
            
            if(position>0){
                position -=5;
                ball.style.top = position + "px";
                container.appendChild(ball);
            }
            else{
                direction = 'down';
            }   
        } 

},10);