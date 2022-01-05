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
