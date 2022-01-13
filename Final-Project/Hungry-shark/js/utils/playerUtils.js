//PALYER ANIMATION

//loading image

const PlayerspriteWidth =194;//1940/10;
const PlayerspriteHeight = 543/6;//562/6


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
//BITE


const SharkBiteSpriteWidth =588/3;
const SharkBiteSpriteHeight = 179/2;

const SharkBiteAnimation = [];
let SharkBiteStates = [
    {
        name:'left-bite',
        frames:3,
    },
    {
        name:'right-bite',
        frames:3,
    }
]
spriteHandler(SharkBiteStates,SharkBiteSpriteWidth,SharkBiteSpriteHeight,SharkBiteAnimation);




