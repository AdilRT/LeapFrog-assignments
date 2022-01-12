//PLAYER ANIMATION

//BLUE WHALE
let BlueWhaleAnimation = [];
let BlueWhaleStates = [
    {
        name:'left',
        frames:4,
    },
    {
        name:'right',
        frames:4,
    },
    
]
spriteHandler(BlueWhaleStates,BlueWhaleSpriteWidth,BlueWhaleSpriteHeight,BlueWhaleAnimation);


//SPIKY FISH
let SpikyFishAnimation = [];
let SpikyFishStates = [
    {
        name:'left',
        frames:6,
    },
    {
        name:'right',
        frames:6,
    },
    {
        name:'expand',
        frames:3
    }
    
]
spriteHandler(SpikyFishStates,SpikyFishSpriteWidth,SpikyFishSpriteHeight,SpikyFishAnimation);

//JELLY FISH

let JellyFishAnimation = [];
let JellyFishStates = [
    {
        name:'blue',
        frames:6,
    },
    {
        name:'purple',
        frames:6,
    },
    {
        name:'pink',
        frames:6,
    },
    {
        name:'darkblue',
        frames:6,
    },    {
        name:'green',
        frames:6,
    },
    
]
spriteHandler(JellyFishStates,JellyFishSpriteWidth,JellyFishSpriteHeight,JellyFishAnimation);

//BROWN FISH

// let gameFrame = 0;
let BrownFishAnimation = [];
let BrownFishStates = [
    {
        name:'left-to-right',
        frames:13,
    },
    {
        name:'right-to-left',
        frames:13,
    },
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
    }
]

spriteHandler(BrownFishStates,BrownFishSpriteWidth,BrownFishSpriteHeight,BrownFishAnimation);


//CRAB

let CrabAnimation = [];
let CrabStates = [
    {
        name:'left',
        frames:2,
    },
    {
        name:'right',
        frames:2,
    },
]
spriteHandler(CrabStates,CrabSpriteWidth,CrabSpriteHeight,CrabAnimation);


//PIRANHA
let PiranhaAnimationLeft = [];
let PiranhaStatesLeft = [
    {
        name:'left',
        frames:7,
    },
]
spriteHandler(PiranhaStatesLeft,PiranhaLeftSpriteWidth,PiranhaLeftSpriteHeight,PiranhaAnimationLeft);

let PiranhaAnimationBite = [];
let PiranhaStatesBite = [
    {
        name:'bite',
        frames:6,
    },
]
spriteHandler(PiranhaStatesBite,PiranhaBiteSpriteWidth,PiranhaBiteSpriteHeight,PiranhaAnimationBite);


let PiranhaAnimationTurn = [];
let PiranhaStatesTurn = [
    {
        name:'turn-around',
        frames:8,
    },
]
spriteHandler(PiranhaStatesTurn,PiranhaTurnSpriteWidth,PiranhaTurnSpriteHeight,PiranhaAnimationTurn);


let PiranhaAnimationHurt = [];
let PiranhaStatesHurt = [
    {
        name:'hurt',
        frames:8,
    },
]
spriteHandler(PiranhaStatesHurt,PiranhaHurtSpriteWidth,PiranhaHurtSpriteHeight,PiranhaAnimationHurt);

let PiranhaAnimationDie = [];
let PiranhaStatesDie = [
    {
        name:'dying',
        frames:5,
    },
]
spriteHandler(PiranhaStatesDie,PiranhaDieSpriteWidth,PiranhaDieSpriteHeight,PiranhaAnimationDie);


// let PiranhaAnimationHurt = [];
// let PiranhaStatesHurt = [
//     {
//         name:'hurt',
//         frames:8,
//     },
// ]
// spriteHandler(PiranhaStatesHurt,PiranhaHurtSpriteWidth,PiranhaHurtSpriteHeight,PiranhaAnimationHurt);

// BOSS
let BossAnimation = [];
let BossStates = [
    {
        name:'right',
        frames:3,
    },
]
spriteHandler(BossStates,BossSpriteWidth,BossSpriteHeight,BossAnimation);

// enemy sharks
const BlueSharkSpriteWidth =194;//1940/10;
const BlueSharkSpriteHeight = 543/6;


let BlueSharkState='left';
const BlueSharkAnimation = [];
let BlueSharkStates = [
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

spriteHandler(BlueSharkStates,BlueSharkSpriteWidth,BlueSharkSpriteHeight,BlueSharkAnimation);

const GreenSharkSpriteWidth =194;//1940/10;
const GreenSharkSpriteHeight = 543/6;


let GreenSharkState='left';
const GreenSharkAnimation = [];
let GreenSharkStates = [
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

spriteHandler(GreenSharkStates,GreenSharkSpriteWidth,GreenSharkSpriteHeight,GreenSharkAnimation);
