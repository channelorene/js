class lvl1 extends Phaser.Scene {
  constructor() {
    super({
      key: "lvl1",
    });

    // Put global variable here
  }

  // incoming data from scene below
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    
  }

  create() {
    console.log("*** lvl1Scene");


    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "lvl1" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let kitchenTiles = map.addTilesetImage("12_Kitchen_32x32", "kitchen");
    let groceryTiles = map.addTilesetImage("16_Grocery_store_32x32", "grocery");
    let boutiqueTiles = map.addTilesetImage("21_Clothing_Store_32x32", "boutique");
    let tileset2Tiles = map.addTilesetImage("Tileset_32x32_2", "tileset2");
    

    // Step 5  create an array of tiles
    let tilesArray = [kitchenTiles, groceryTiles, boutiqueTiles, tileset2Tiles];

   

    // Step 6  Load in layers by layers
    this.ground = map.createLayer("ground",tilesArray,0,0);
    
    this.physics.world.bounds.width = this.ground.width;
    this.physics.world.bounds.height = this.ground.height;
    

    this.border = map.createLayer("border",tilesArray,0,0);

    this.Layer7 = map.createLayer("Layer7",tilesArray,0,0);
    this.Layer6 = map.createLayer("Layer6",tilesArray,0,0);
    this.Layer5 = map.createLayer("Layer5",tilesArray,0,0);
    this.Layer4 = map.createLayer("Layer4",tilesArray,0,0);

  //object layer
    let start = map.findObject("objectLayer", obj => obj.name === "start"); 
    let hamper1 = map.findObject("objectLayer", obj => obj.name === "hamper1"); 
    let hamper2 = map.findObject("objectLayer", obj => obj.name === "hamper2"); 
    let hamper3 = map.findObject("objectLayer", obj => obj.name === "hamper3"); 
    let hamper4 = map.findObject("objectLayer", obj => obj.name === "hamper4"); 
    let hamper5 = map.findObject("objectLayer", obj => obj.name === "hamper5"); 
    let enemy1 = map.findObject("objectLayer", obj => obj.name === "enemy1"); 
    let enemy2 = map.findObject("objectLayer", obj => obj.name === "enemy2"); 
    let enemy3 = map.findObject("objectLayer", obj => obj.name === "enemy3"); 

  //    

//exit
  this.exitArea = map.findObject("objectLayer", (obj) => obj.name === "exitArea");

  this.cashier = new Phaser.Geom.Rectangle(
    this.exitArea.x,
    this.exitArea.y,
    this.exitArea.width,
    this.exitArea.height
  );
   
  this.dialogText = this.add
    .text(this.exitArea.x, this.exitArea.y, "", { font: "16px Arial Black", fill: "#3bff49", stroke: '#000000', strokeThickness: 4 })
    .setOrigin(0.5)  // Center the text
    .setDepth(100)   // Make sure it's above other elements
    .setVisible(false); // Hide it initially


// Add main player here with physics.add.sprite
this.player = this.physics.add.sprite(start.x, start.y, 'z');
//adjust the width & height of bouding box
this.player.body.setSize(this.player.width * 0.4, this.player.height * 0.4)

this.player.setCollideWorldBounds(true)


//load img in specific spot
this.hamper1 = this.physics.add.sprite(hamper1.x, hamper1.y, 'hamper').setScale(0.85).play('hamperAnim')
this.hamper2 = this.physics.add.sprite(hamper2.x, hamper2.y, 'hamper').setScale(0.85).play('hamperAnim')
this.hamper3 = this.physics.add.sprite(hamper3.x, hamper3.y, 'hamper').setScale(0.85).play('hamperAnim')
this.hamper4 = this.physics.add.sprite(hamper4.x, hamper4.y, 'hamper').setScale(0.85).play('hamperAnim')
this.hamper5 = this.physics.add.sprite(hamper5.x, hamper5.y, 'hamper').setScale(0.85).play('hamperAnim')
this.enemy1 = this.physics.add.sprite(enemy1.x, enemy1.y, 'shirt').setScale(0.7).play('shirtAnim')
this.tweens.add({
  targets: this.enemy1,
  y: enemy1.y+375,
  flipY: false,
  yoyo: true,
  duration: 3300,
  repeat: -1,
})

this.enemy2 = this.physics.add.sprite(enemy2.x, enemy2.y, 'shirt').setScale(0.7).play('shirtAnim')
this.tweens.add({
  targets: this.enemy2,
  x: enemy2.x+215,
  flipX: true,
  yoyo: true,
  duration: 3000,
  repeat: -1,
})

this.enemy3 = this.physics.add.sprite(enemy3.x, enemy3.y, 'shirt').setScale(0.7).play('shirtAnim')
this.tweens.add({
  targets: this.enemy3,
  x: enemy3.x+415,
  flipX: true,
  yoyo: true,
  duration: 4850,
  repeat: -1,
})




    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider with what layers
    //Enable Layer Collisions
    this.border.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.border);

    this.Layer4.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer4);

    this.Layer5.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer5);

    this.Layer6.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer6);

    this.Layer7.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer7);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // // Call to update inventory items
    // this.time.addEvent({
    //       delay: 100,
    //       callback: updateInventory,
    //       callbackScope: this,
    //       loop: false,
    //     });
        
    // start another scene in parallel
    this.scene.launch("showInventory");
        
    // Call globalFunction on overlap
    this.physics.add.overlap(this.player, [this.enemy1,this.enemy2,this.enemy3], globalHitEnemy1, null, this);
    this.physics.add.overlap(this.player, [this.hamper1,this.hamper2,this.hamper3,this.hamper4,this.hamper5], globalCollectHamper, null, this);
    
    //change room for checking
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);
  
    key2Down.on('down', function(){
    console.log("2 pressed (lvl2)");
        this.scene.start("lvl2");
        }, this );
      
    key3Down.on('down', function(){
     console.log("3 pressed (lvl3)");
     this.scene.start("lvl3");
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

  //exit
  this.dialogText.setVisible(false);

  if (this.cashier.contains(this.player.x, this.player.y)) {
    this.dialogText.setText("Pay Here");
    this.dialogText.setVisible(true);
    this.pay()
  }

} /////////////////// end of update //////////////////////////////
pay(player, item) {
  if (window.hamper >= 1) {

    this.cameras.main.fadeOut(1000, 0, 0, 0);
this.time.delayedCall(1000, () => {
    this.scene.start("lvl2in");
});
  
}}



} //////////// end of class world ////////////////////////
