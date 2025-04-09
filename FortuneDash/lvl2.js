class lvl2 extends Phaser.Scene {
  constructor() {
    super({
      key: "lvl2",
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
    console.log("*** lvl2Scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "lvl2" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let generalTiles = map.addTilesetImage("1_Generic_32x32", "general");
    let kitchenTiles = map.addTilesetImage("12_Kitchen_32x32", "kitchen");
    let interiorsTiles = map.addTilesetImage("Interiors_free_32x32", "interiors");
    let tileset9Tiles = map.addTilesetImage("Tileset_32x32_9", "tileset9");
    let stairsTiles = map.addTilesetImage("stairs", "stairs");
    

    // Step 5  create an array of tiles
    let tilesArray = [generalTiles, kitchenTiles, interiorsTiles, tileset9Tiles,stairsTiles ];

    // Step 6  Load in layers by layers
    this.ground = map.createLayer("ground",tilesArray,0,0);

    //Lock the game area
    this.physics.world.bounds.width = this.ground.width;
    this.physics.world.bounds.height = this.ground.height;

   
    this.wall = map.createLayer("wall",tilesArray,0,0);
    this.border = map.createLayer("border",tilesArray,0,0);
    this.Layer1 = map.createLayer("Layer1",tilesArray,0,0);
    this.Layer2 = map.createLayer("Layer2",tilesArray,0,0);
    this.Layer3 = map.createLayer("Layer3",tilesArray,0,0);
    

  //object layer
    let start = map.findObject("objectLayer", obj => obj.name === "start"); 
    let end = map.findObject("objectLayer", obj => obj.name === "end"); 
    let table1 = map.findObject("objectLayer", obj => obj.name === "table1"); 
    let table2 = map.findObject("objectLayer", obj => obj.name === "table2"); 
    let table3 = map.findObject("objectLayer", obj => obj.name === "table3"); 
    let table4 = map.findObject("objectLayer", obj => obj.name === "table4"); 
    let table5 = map.findObject("objectLayer", obj => obj.name === "table5"); 
    let enemy1 = map.findObject("objectLayer", obj => obj.name === "enemy1"); 
    let enemy2 = map.findObject("objectLayer", obj => obj.name === "enemy2"); 
    let enemy3 = map.findObject("objectLayer", obj => obj.name === "enemy3"); 
    
  
//meet cousin to exit
this.exitArea = map.findObject("objectLayer", (obj) => obj.name === "exitArea");

this.cousin = new Phaser.Geom.Rectangle(
  this.exitArea.x,
  this.exitArea.y,
  this.exitArea.width,
  this.exitArea.height
);
 
this.dialogText = this.add
  .text(this.exitArea.x, this.exitArea.y-15, "", { font: "16px Arial Black", fill: "#FFFFFF", stroke: '#d0232a', strokeThickness: 4 })
  .setOrigin(0.5)  // Center the text
  .setDepth(100)   // Make sure it's above other elements
  .setVisible(false); // Hide it initially

  this.itemCountText = this.add
  .text(this.exitArea.x, this.exitArea.y, "", { font: "16px Arial Black", fill: "#be1e2d", stroke: '#FFFFFF', strokeThickness: 4 })
  .setOrigin(0.5)  // Center the text
  .setDepth(100)   // Make sure it's above other elements
  .setVisible(false); // Hide it initially

//load img in specific spot
this.table1 = this.physics.add.sprite(table1.x, table1.y, 'emptable')
this.table2 = this.physics.add.sprite(table2.x, table2.y, 'emptable')
this.table3 = this.physics.add.sprite(table3.x, table3.y, 'emptable')
this.table4 = this.physics.add.sprite(table4.x, table4.y, 'emptable')
this.table5 = this.physics.add.sprite(table5.x, table5.y, 'emptable')




// Add main player here with physics.add.sprite
this.player = this.physics.add.sprite(start.x, start.y, 'z');
//adjust the width & height
this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.45)


this.player.setCollideWorldBounds(true)

this.hamper=this.add.sprite(this.player.x,this.player.y, 'hamper1').setScale(0.7)

this.add.sprite(end.x, end.y, 'aunty').setScale(1.2).play('auntyAnim');



this.enemy1 = this.physics.add.sprite(enemy1.x, enemy1.y, 'vase').setScale(0.7).play('vaseAnim')
this.tweens.add({
  targets: this.enemy1,
  y: enemy1.y-250,
  flipY: false,
  yoyo: true,
  duration: 3000,
  repeat: -1,
})
this.enemy2 = this.physics.add.sprite(enemy2.x, enemy2.y, 'vase').setScale(0.7).play('vaseAnim')
this.tweens.add({
  targets: this.enemy2,
  x: enemy2.x+300,
  flipX: true,
  yoyo: true,
  duration: 3500,
  repeat: -1,
})
this.enemy3 = this.physics.add.sprite(enemy3.x, enemy3.y, 'vase').setScale(0.7).play('vaseAnim')
this.tweens.add({
  targets: this.enemy3,
  y: enemy3.y+350,
  flipY: false,
  yoyo: true,
  duration: 3500,
  repeat: -1,
})


    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider with what layers

    this.border.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.border);

    this.wall.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.wall);
    

    this.Layer2.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer2);

    this.Layer3.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.Layer3);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);


      // start another scene in parallel
      this.scene.launch("showInventory");
        
    // Call globalFunction on overlap
    // Call globalFunction on overlap
    this.physics.add.overlap(this.player, [this.enemy1,this.enemy2,this.enemy3], globalHitEnemy2, null, this);
    this.physics.add.overlap(this.player, [this.table1,this.table2,this.table3,this.table4,this.table5], globalDropHamper, null, this);


   //change room for checking
   var key1Down = this.input.keyboard.addKey(49);
   var key3Down = this.input.keyboard.addKey(51);
  
   key1Down.on('down', function(){
   console.log("1 pressed (lvl1)");
       this.scene.start("lvl1");
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
   this.itemCountText.setVisible(false);

  if (this.cousin.contains(this.player.x, this.player.y)) {
    // this.dialogText.setText("Gong Xi Fa Cai!");
    // this.dialogText.setVisible(true);
    this.meet()
  }

  // hold present 
  if (window.holdhamper == 1 ) {
        this.hamper.x = this.player.x+25
        this.hamper.y = this.player.y
  }

  
  
} /////////////////// end of update //////////////////////////////

meet(player, npc) {
  if (window.table >= 5) {
    this.dialogText.setText("Gong Xi Fa Cai!");
    this.dialogText.setVisible(true);
    this.cameras.main.fadeOut(1000, 0, 0, 0); // 2s fade to black
    this.time.delayedCall(1000, () => {
    this.scene.start("win2");
    })
  }else {
    // Show how many items are still needed
    this.itemCountText.setText( "place" + (5 - (window.table || 0)) + "more hampers");
    this.itemCountText.setVisible(true);
  }
}

} //////////// end of class world ////////////////////////
