class lvl3 extends Phaser.Scene {
  constructor() {
    super({
      key: "lvl3",
    });

    // Put global variable here
  }

  // incoming data from scene below
  init(data) {
    if (window.music) {
      window.music.play(); 
    }
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    
  }

  create() {
    console.log("*** lvl3Scene");

        
    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "lvl3" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let generalTiles = map.addTilesetImage("1_Generic_32x32", "general");
    let bathroomTiles = map.addTilesetImage("3_Bathroom_32x32", "bathroom");
    let bedroomTiles = map.addTilesetImage("4_Bedroom_32x32", "bedroom");
    let musicsportTiles = map.addTilesetImage("6_Music_and_sport_32x32", "musicsport");
    let gymTiles = map.addTilesetImage("8_Gym_32x32", "gym");
    let stairsTiles = map.addTilesetImage("stairs", "stairs");
    let tileset2Tiles = map.addTilesetImage("Tileset_32x32_2", "tileset2");
    let tileset9Tiles = map.addTilesetImage("Tileset_32x32_9", "tileset9");
    


    // Step 5  create an array of tiles
    let tilesArray = [generalTiles, bathroomTiles, bedroomTiles, musicsportTiles, gymTiles, stairsTiles, tileset2Tiles, tileset9Tiles];

   

    // Step 6  Load in layers by layers
    this.ground = map.createLayer("ground",tilesArray,0,0);
    
    this.physics.world.bounds.width = this.ground.width;
    this.physics.world.bounds.height = this.ground.height;
    
    this.wall = map.createLayer("wall",tilesArray,0,0);
    this.border = map.createLayer("border",tilesArray,0,0);

    this.Layer1 = map.createLayer("Layer1",tilesArray,0,0);
    this.Layer2 = map.createLayer("Layer2",tilesArray,0,0);
    this.Layer3 = map.createLayer("Layer3",tilesArray,0,0);
   
  //object layer
    let start = map.findObject("objectLayer", obj => obj.name === "start"); 
    let angpao1 = map.findObject("objectLayer", obj => obj.name === "angpao1"); 
    let angpao2 = map.findObject("objectLayer", obj => obj.name === "angpao2"); 
    let angpao3 = map.findObject("objectLayer", obj => obj.name === "angpao3"); 
    let angpao4 = map.findObject("objectLayer", obj => obj.name === "angpao4"); 
    let angpao5 = map.findObject("objectLayer", obj => obj.name === "angpao5"); 
    let enemy1 = map.findObject("objectLayer", obj => obj.name === "enemy1"); 
    let enemy2 = map.findObject("objectLayer", obj => obj.name === "enemy2"); 
    let enemy3 = map.findObject("objectLayer", obj => obj.name === "enemy3"); 

  //    
   
// Add main player here with physics.add.sprite
this.player = this.physics.add.sprite(start.x, start.y, 'z');
//adjust the width & height of bouding box
this.player.body.setSize(this.player.width * 0.45, this.player.height * 0.45)

this.player.setCollideWorldBounds(true)

this.angpao1 = this.physics.add.sprite(angpao1.x, angpao1.y, 'angpao').setScale(0.7).play('angpaoAnim')

const fx1 = this.angpao1.postFX.addGlow(0xffff92, 0, 0);
    this.tweens.add({
      targets: fx1,
      outerStrength: 5,
      yoyo: true,
      loop: -1,
      ease: "sine.inout",
    });

this.angpao2 = this.physics.add.sprite(angpao2.x, angpao2.y, 'angpao').setScale(0.7).play('angpaoAnim')

const fx2 = this.angpao2.postFX.addGlow(0xffff92, 0, 0);
    this.tweens.add({
      targets: fx2,
      outerStrength: 5,
      yoyo: true,
      loop: -1,
      ease: "sine.inout",
    });

this.angpao3 = this.physics.add.sprite(angpao3.x, angpao3.y, 'angpao').setScale(0.7).play('angpaoAnim')

const fx3 = this.angpao3.postFX.addGlow(0xffff92, 0, 0);
    this.tweens.add({
      targets: fx3,
      outerStrength: 5,
      yoyo: true,
      loop: -1,
      ease: "sine.inout",
    });

this.angpao4 = this.physics.add.sprite(angpao4.x, angpao4.y, 'angpao').setScale(0.7).play('angpaoAnim')

const fx4 = this.angpao4.postFX.addGlow(0xffff92, 0, 0);
    this.tweens.add({
      targets: fx4,
      outerStrength: 5,
      yoyo: true,
      loop: -1,
      ease: "sine.inout",
    });

this.angpao5 = this.physics.add.sprite(angpao5.x, angpao5.y, 'angpao').setScale(0.7).play('angpaoAnim')

const fx5 = this.angpao5.postFX.addGlow(0xffff92, 0, 0);
    this.tweens.add({
      targets: fx5,
      outerStrength: 5,
      yoyo: true,
      loop: -1,
      ease: "sine.inout",
    });

this.enemy1 = this.physics.add.sprite(enemy1.x, enemy1.y, 'broom').setScale(0.7).play('broomAnim')
this.tweens.add({
  targets: this.enemy1,
  x: enemy1.x+450,
  flipX: true,
  yoyo: true,
  duration: 3500,
  repeat: -1,
})

this.enemy2 = this.physics.add.sprite(enemy2.x, enemy2.y, 'broom').setScale(0.7).play('broomAnim')
this.tweens.add({
  targets: this.enemy2,
  x: enemy2.x+435,
  flipX: true,
  yoyo: true,
  duration: 3300,
  repeat: -1,
})

this.enemy3 = this.physics.add.sprite(enemy3.x, enemy3.y, 'broom').setScale(0.7).play('broomAnim')
this.tweens.add({
  targets: this.enemy3,
  y: enemy3.y+250,
  flipY: false,
  yoyo: true,
  duration: 3000,
  repeat: -1,
})


    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider with what layers
    //Enable Layer Collisions
    this.border.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.border);


    this.Layer2.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer2);

    this.Layer3.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer3);


    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

//      // Call to update inventory items
//      this.time.addEvent({
//       delay: 100,
//       callback: updateInventory,
//       callbackScope: this,
//       loop: false,
//     });
    
// start another scene in parallel
this.scene.launch("showInventory");
    
// Call globalFunction globalHitShirt on overlap
this.physics.add.overlap(this.player, [this.enemy1, this.enemy2,this.enemy3], globalHitEnemy3, null, this);
this.physics.add.overlap(this.player, [this.angpao1, this.angpao2,this.angpao3, this.angpao4,this.angpao5], globalCollectAngpao, null, this);


 // start another scene in parallel
 this.scene.launch("showInventory");

  //change room for checking
  var key1Down = this.input.keyboard.addKey(49);
  var key2Down = this.input.keyboard.addKey(50);
  
    key1Down.on('down', function(){
     console.log("1 pressed (lvl1)");
     this.scene.start("lvl1");
      }, this );

  
    key2Down.on('down', function(){
    console.log("3 pressed (lvl3)");
        this.scene.start("lvl2");
        }, this );
      

    
   
  } /////////////////// end of create //////////////////////////////



  update() {
    if (this.cursors.left.isDown) {
    this.player.body.setVelocityX(-200);
    this.player.anims.play("left", true); // walk left
  } else if (this.cursors.right.isDown) {
    this.player.body.setVelocityX(200);
    this.player.anims.play("right", true);
  } else if (this.cursors.up.isDown) {
    this.player.body.setVelocityY(-200);
    this.player.anims.play("up", true);
    //console.log('up');
  } else if (this.cursors.down.isDown) {
    this.player.body.setVelocityY(200);
    this.player.anims.play("down", true);
    //console.log('down');
  } else {
    this.player.anims.stop();
    this.player.body.setVelocity(0, 0);
  }

 


} /////////////////// end of update //////////////////////////////


} //////////// end of class world ////////////////////////
