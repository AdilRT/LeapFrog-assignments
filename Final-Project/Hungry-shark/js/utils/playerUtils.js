//PALYER ANIMATION

//loading image
const playerImage = new Image();
playerImage.src = 'images/player/shark-ss-transparent.png'; 
const playerImageFlipped = new Image();
playerImageFlipped.src = 'images/player/flipped.png'; 
const PlayerspriteWidth =1940/10;//1940/10;
const PlayerspriteHeight = 543/6;//562/6


// let gameFrame = 0;
let playerState='left';
const staggerFrame = 10;
const spriteAnimation = [];
let animationStates = [
    {
        name:'left',
        frames:10,
    },
    {
        name:'right',
        frames:10,
    },
    {
        name:'left-eat',
        frames:3,
    },
    {
        name:'right-eat',
        frames:3,
    },
    {
        name:'left-to-right',
        frames:10,
    },
    {
        name:'right-to-left',
        frames:10,
    }
]

animationStates.forEach((state,index)=>{
    let frames ={
        loc:[]
    }
        for(let j =0;j<state.frames;j++){
            let positionX = j * PlayerspriteWidth;
            let positionY = index * PlayerspriteHeight;
            frames.loc.push({x:positionX,y:positionY});
        }
    spriteAnimation[state.name]=frames;


})

