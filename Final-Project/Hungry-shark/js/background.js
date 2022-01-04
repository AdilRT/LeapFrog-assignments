//reapeating background
const background = new Image();
background.src = 'images/bg/waves.png';

// wrapper = document.querySelector(#wrapper);

//for waves
const BG = {
    x1:0,
    x2:canvas.width,
    y:0,
    width:canvas.width,
    height:canvas.height/4 
}

function handleBackground(){
    BG.x1-=gameSpeed;
    if(BG.x1 < -BG.width) BG.x1 = BG.width;
    BG.x2-=gameSpeed;
    if(BG.x2 < -BG.width) BG.x2 = BG.width;
    ctx.drawImage(background,BG.x1,BG.y,BG.width,BG.height);
    ctx.drawImage(background,BG.x2,BG.y,BG.width,BG.height);
}