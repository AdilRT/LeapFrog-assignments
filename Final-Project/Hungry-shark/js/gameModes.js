//blueshark,bluewhale,brownfish,crab,greenshark,jellyfish,piranha,spiky
function easyMode(easyModeObject){
    enemyTypes = ['BlueShark','BlueWhale','BrownFish','Crab','GreenShark','JellyFish', 'Piranha',"Spiky"];
    // enemyTypes = ['JellyFish']
    let randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
  
      // spawn freq
      if (gameFrame % easyModeObject.freqSpawn == 0) {
        if(randomEnemy=='JellyFish')enemyArray.push(new JellyFish(easyModeObject));
        if (randomEnemy == "Crab") enemyArray.push(new Crab(easyModeObject));
        if (randomEnemy == "GreenShark") enemyArray.push(new GreenShark(easyModeObject));
  
        enemyArray.sort(function (a, b) {
          return a.y - b.y;
        });
      }
      // spawn moderately
      if (gameFrame % easyModeObject.moderSpawn == 0) {
        if (randomEnemy == "Spiky") enemyArray.push(new SpikyFish(easyModeObject));
        if(randomEnemy=='BrownFish')enemyArray.push(new BrownFish(easyModeObject));
  
        
      }
      // rare spawns
      if (gameFrame % easyModeObject.rareSpawn == 0) {
        const randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
        if (randomEnemy == "Piranha") enemyArray.push(new Piranha(easyModeObject));
        if (randomEnemy == "BlueShark") enemyArray.push(new BlueShark(easyModeObject));
        if (randomEnemy == "BlueWhale") enemyArray.push(new BlueWhale(easyModeObject));
  
        enemyArray.sort(function (a, b) {
          return a.y - b.y;
        });
      }
  }
  function normalMode(normalModeObject){
    enemyTypes = ['BlueShark','BlueWhale','BrownFish','Crab','GreenShark','JellyFish', 'Piranha',"Spiky"];
    
    let randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
  
      // spawn freq
      if (gameFrame % normalModeObject.freqSpawn == 0) {
        if(randomEnemy=='JellyFish')enemyArray.push(new JellyFish(normalModeObject));
        if (randomEnemy == "Crab") enemyArray.push(new Crab(normalModeObject));
        if (randomEnemy == "GreenShark") enemyArray.push(new GreenShark(normalModeObject));
  
        enemyArray.sort(function (a, b) {
          return a.y - b.y;
        });
      }
      // spawn moderately
      if (gameFrame % normalModeObject.moderSpawn == 0) {
        if (randomEnemy == "Spiky") enemyArray.push(new SpikyFish(normalModeObject));
        if(randomEnemy=='BrownFish')enemyArray.push(new BrownFish(normalModeObject));
  
        
      }
      // rare spawns
      if (gameFrame % normalModeObject.rareSpawn == 0) {
        const randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
        if (randomEnemy == "Piranha") enemyArray.push(new Piranha(normalModeObject));
        if (randomEnemy == "BlueShark") enemyArray.push(new BlueShark(normalModeObject));
        if (randomEnemy == "BlueWhale") enemyArray.push(new BlueWhale(normalModeObject));
  
        enemyArray.sort(function (a, b) {
          return a.y - b.y;
        });
      }
  }
  function hardMode(hardModeObject){
    enemyTypes = ['BlueShark','BlueWhale','BrownFish','Crab','GreenShark','JellyFish', 'Piranha',"Spiky"];
    // enemyTypes = ['JellyFish']
    let randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
  
      // spawn freq
      if (gameFrame % hardModeObject.freqSpawn == 0) {
        if(randomEnemy=='JellyFish')enemyArray.push(new JellyFish(hardModeObject));
        if (randomEnemy == "Crab") enemyArray.push(new Crab(hardModeObject));
        if (randomEnemy == "GreenShark") enemyArray.push(new GreenShark(hardModeObject));
  
        enemyArray.sort(function (a, b) {
          return a.y - b.y;
        });
      }
      // spawn moderately
      if (gameFrame % hardModeObject.moderSpawn == 0) {
        if (randomEnemy == "Spiky") enemyArray.push(new SpikyFish(hardModeObject));
        if(randomEnemy=='BrownFish')enemyArray.push(new BrownFish(hardModeObject));
  
        
      }
      // rare spawns
      if (gameFrame % hardModeObject.rareSpawn == 0) {
        const randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
        if (randomEnemy == "Piranha") enemyArray.push(new Piranha(hardModeObject));
        if (randomEnemy == "BlueShark") enemyArray.push(new BlueShark(hardModeObject));
        if (randomEnemy == "BlueWhale") enemyArray.push(new BlueWhale(hardModeObject));
  
        enemyArray.sort(function (a, b) {
          return a.y - b.y;
        });
      }
  }
  
easyModeObject ={
    freqSpawn: 200,
    moderSpawn:500,
    rareSpawn:2000,
    BlueShark:{
      health:50,
      damage:3
    },
    BlueWhale:{
      health:25,
      damage:3
    },
    BrownFish:{
      health:10,
      damage:3
    },  
    Crab:{
      health:5,
      damage:3
    },  
    GreenShark:{
      health:20,
      damage:3
    },  
    JellyFish:{
      health:5,
      damage:3
    },  
    Piranha:{
      health:20,
      damage:3
    },  
    Spiky:{
      health:15,
      damage:3
    },  
  }
  
  normalModeObject ={
    freqSpawn: 150,
    modeSpawn:400,
    rareSpawn:500,
    BlueShark:{
      health:2000,
      damage:3
    },
    BlueWhale:{
      health:25,
      damage:3
    },
    BrownFish:{
      health:10,
      damage:3
    },  
    Crab:{
      health:5,
      damage:3
    },  
    GreenShark:{
      health:20,
      damage:3
    },  
    JellyFish:{
      health:5,
      damage:3
    },  
    Piranha:{
      health:20,
      damage:3
    },  
    Spiky:{
      health:15,
      damage:3
    },  
  }

  //
  hardModeObject ={
    freqSpawn: 200,
    modeSpawn:500,
    rareSpawn:500,
    BlueShark:{
      health:2,
      damage:3
    },
    BlueWhale:{
      health:2,
      damage:3
    },
    BrownFish:{
      health:1000,
      damage:3
    },  
    Crab:{
      health:5,
      damage:3
    },  
    GreenShark:{
      health:2,
      damage:3
    },  
    JellyFish:{
      health:5,
      damage:3
    },  
    Piranha:{
      health:20,
      damage:3
    },  
    Spiky:{
      health:15,
      damage:3
    },  
  }