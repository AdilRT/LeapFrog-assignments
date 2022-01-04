// const blueWhale = new Image();
// blueWhale.src = 'images/enemies-damage/blue-whale.png';

//PALYER ANIMATION

//loading image
// const playerImage = new Image();
// playerImage.src = 'images/player/shark-ss-transparent.png'; 
// const playerImageFlipped = new Image();
// playerImageFlipped.src = 'images/player/flipped.png'; 
const BlueWhaleSpriteWidth =771/4;//1940/10;
const BlueWhaleSpriteHeight = 198/2;//562/6


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

