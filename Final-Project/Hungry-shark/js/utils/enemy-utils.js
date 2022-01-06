//PALYER ANIMATION

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
