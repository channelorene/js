class showInventory extends Phaser.Scene {

  constructor() {
      super({
          key: 'showInventory',
          active: false
      });
  }

  init(data) {
      this.player = data.player;
      this.inventory = data.inventory;
  }

  preload(){
      //Load heart image
      this.load.image('cookie', 'assets/cookie.png');
      this.load.image('hamper1', 'assets/hamper1.png');
      this.load.image('table2', 'assets/table2.png');
      this.load.image('angpao1', 'assets/angpao1.png');
  }

 create () {

      //Place hearts at the top screen
      // console.log("***showInventory");
      this.scene.bringToTop("showInventory");

      //black bar
      var rect = new Phaser.Geom.Rectangle(25, 15, 640, 37);
      var graphics = this.add.graphics({ fillStyle: { color: '0xffffff' } });
      graphics.fillRectShape(rect).setScrollFactor(0)

     // Setup heart but visible to false
     this.cookie1 = this.add.image (75,35,'cookie').setScrollFactor(0).setVisible(true).setScale(0.8);
     this.cookie2 = this.add.image (125,35,'cookie').setScrollFactor(0).setVisible(true).setScale(0.8);
     this.cookie3 = this.add.image (175,35,'cookie').setScrollFactor(0).setVisible(true).setScale(0.8);

     this.hamper = this.add.image (480, 35, 'hamper1').setScrollFactor(0).setVisible(true).setScale(0.8);
     this.table = this.add.image (555, 35, 'fulltable').setScrollFactor(0).setVisible(true).setScale(0.8);
     this.angpao = this.add.image (620, 35, 'angpao1').setScrollFactor(0).setVisible(true).setScale(0.8);
     
     
     // Recv an event, call the method
     this.events.on('inventory', this.updateScreen, this)

     //Setup key
     this.hamperNum = this.add.text(510, 22, window.hamper, {font: '20px Cascadia Mono', fill: "#FFFFFF", stroke: '#d0232a', strokeThickness: 4 }).setScrollFactor(0);
     this.tableNum = this.add.text(575, 22, window.table, {font: '20px Cascadia Mono',fill: "#FFFFFF", stroke: '#d0232a', strokeThickness: 4 }).setScrollFactor(0);
     this.angpaoNum = this.add.text(642, 22, window.angpao, {font: '20px Cascadia Mono',fill: "#FFFFFF", stroke: '#d0232a', strokeThickness: 4 }).setScrollFactor(0);
      
  } //end of create

  updateScreen(data){
      //console.log('Received event inventory', data);

      this.hamperNum.setText(data.hamper);
      this.tableNum.setText(data.table);
      this.angpaoNum.setText(data.angpao);

      switch ( data.cookie ) {

          case 3: 
              this.cookie1.setVisible(true)
              this.cookie2.setVisible(true)
              this.cookie3.setVisible(true)
              break;
  
          case 2:
              this.cookie1.setVisible(true)
              this.cookie2.setVisible(true)
              this.cookie3.setVisible(false)
              break;
  
          case 1:
              this.cookie1.setVisible(true)
              this.cookie2.setVisible(false)
              this.cookie3.setVisible(false)
              break;
           
          case 0:
              this.cookie1.setVisible(false)
              this.cookie2.setVisible(false)
              this.cookie3.setVisible(false)
              break;    
  
          default:
          break;
      }
  
  }

} // end of class

