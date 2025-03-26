class preload extends Phaser.Scene {

    constructor ()
    {
        super('preload');
    }

     // incoming data from scene below
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }
    preload() {
        //lvl1
        // Step 1, load JSON
        this.load.tilemapTiledJSON("lvl1", "assets/market.json");
    
        // Step 2 : Preload any images here
    
        //characters
        this.load.spritesheet('z', 'assets/z.png', { frameWidth:64, frameHeight:64 }); 
        this.load.spritesheet('aunty', 'assets/aunty.png', { frameWidth:64, frameHeight:64 }); 
        //collectables&enemy
        this.load.spritesheet('hamper', 'assets/hamper.png',{ frameWidth:64, frameHeight:64 }); 
        this.load.spritesheet('shirt', 'assets/shirt.png',{ frameWidth:64, frameHeight:64 });
    
        //market
        this.load.image("kitchen", "assets/12_Kitchen_32x32.png");
        this.load.image("grocery", "assets/16_Grocery_store_32x32.png");
        this.load.image("boutique", "assets/21_Clothing_Store_32x32.png");
        this.load.image("tileset2", "assets/Tileset_32x32_2.png");

        //lvl2
    this.load.tilemapTiledJSON("lvl2", "assets/kitchen.json");

    

    //collectables&enemy
    this.load.spritesheet('hamper', 'assets/hamper.png',{ frameWidth:64, frameHeight:64 }); 
    this.load.image('hamper1', 'assets/hamper1.png',{ frameWidth:64, frameHeight:64 }); 
    this.load.spritesheet('vase', 'assets/vase.png',{ frameWidth:64, frameHeight:64 });
    this.load.image("emptable", "assets/emptable.png");
    this.load.image("fulltable", "assets/fulltable.png");
    

    //bg
    this.load.image("general", "assets/1_Generic_32x32.png");
    this.load.image("interiors", "assets/Interiors_free_32x32.png");
    this.load.image("stairs", "assets/stairs.png");
    this.load.image("tileset9", "assets/Tileset_32x32_9.png");

    //lvl3
    this.load.tilemapTiledJSON("lvl3", "assets/room.json");
    //collectables&enemy
    this.load.spritesheet('angpao', 'assets/angpao.png',{ frameWidth:64, frameHeight:64 }); 
    this.load.spritesheet('broom', 'assets/broom.png',{ frameWidth:64, frameHeight:64 });

    //bg
    this.load.image("bathroom", "assets/3_Bathroom_32x32.png");
    this.load.image("bedroom", "assets/4_Bedroom_32x32.png");
    this.load.image("musicsport", "assets/6_Music_and_sport_32x32.png");
    this.load.image("gym", "assets/8_Gym_32x32.png");


        //audio
      }
    
    create () {
        // console.log("*** preloadScene")

 // player animations, turning, walking left and walking right.
    this.anims.create({
        key:'up',
        frames:this.anims.generateFrameNumbers('z',
        { start:105, end:112 }),
        frameRate:6,
        repeat:-1
    });
  
    this.anims.create({
        key:'left',
        frames:this.anims.generateFrameNumbers('z',
        { start:118, end:125 }),
        frameRate:6,
        repeat:-1
    });
  
    this.anims.create({
        key:'down',
        frames:this.anims.generateFrameNumbers('z',
        { start:131, end:138 }),
        frameRate:6,
        repeat:-1
    });
  
    this.anims.create({
        key:'right',
        frames:this.anims.generateFrameNumbers('z',
        { start:144, end:151 }),
        frameRate:6,
        repeat:-1
    });
  
    //npc anim
    this.anims.create({
      key:'auntyAnim',
      frames:this.anims.generateFrameNumbers('aunty',
      { start:0, end:1 }),
      frameRate:3,
      repeat:-1
  });
  //icon anims
  this.anims.create({
    key:'hamperAnim',
    frames:this.anims.generateFrameNumbers('hamper',
    { start:0, end:3 }),
    frameRate:3,
    repeat:-1
  });
  
  this.anims.create({
    key:'shirtAnim',
    frames:this.anims.generateFrameNumbers('shirt',
    { start:0, end:7 }),
    frameRate:5,
    repeat:-1
  });

  this.anims.create({
    key:'vaseAnim',
    frames:this.anims.generateFrameNumbers('vase',
    { start:0, end:3 }),
    frameRate:4,
    repeat:-1
  });

  this.anims.create({
    key:'angpaoAnim',
    frames:this.anims.generateFrameNumbers('angpao',
    { start:0, end:3 }),
    frameRate:4,
    repeat:-1
  });

  this.anims.create({
    key:'broomAnim',
    frames:this.anims.generateFrameNumbers('broom',
    { start:0, end:7 }),
    frameRate:4,
    repeat:-1
  });
  
  this.scene.start("main")
    }

}
