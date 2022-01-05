//PALYER ANIMATION

//BLUE WHALE
const BlueWhaleSpriteWidth =771/4;//1940/10;
const BlueWhaleSpriteHeight = 198/2;//562/6
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
const SpikyFishSpriteWidth =304/6;//1940/10;
const SpikyFishSpriteHeight = 182/3;//562/6
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



function spriteHandler(statesArr,spriteWidth,spriteHeight,spriteAnimation){
    console.log('reacstatesArrhed ',statesArr);
    statesArr.forEach((state,index)=>{
        let frames ={
            loc:[]
        }
            for(let j =0;j<state.frames;j++){
                let positionX = j * spriteWidth;
                let positionY = index * spriteHeight;
                frames.loc.push({x:positionX,y:positionY});
            }
        spriteAnimation[state.name]=frames;
    })

}

