class gameover extends Phaser.Scene {
  constructor() {
    super("gameover");
  }


  init(data) {
    if (window.music) {
    window.music.stop(); // Stop music when "win3" starts
  }
    console.log(data)
    this.lvl = data.lvl;
  }

preload() {
  this.load.image("gameover", "assets/gameover.png");

}

create() {
  console.log("*** gameoverScene");
   this.scene.bringToTop("gameover");

   //lose sound
   this.LoseSnd = this.sound.add('lose').setVolume(0.25) // 10% volume

        this.LoseSnd.play()
        window.music.play(false);
  // Add image and detect spacebar keypress
  this.add.image(0, 0, 'gameover').setOrigin(0, 0);

  // Check for spacebar or any key here
  let enterDown = this.input.keyboard.addKey("ENTER");

  // On spacebar event, call the world scene
  enterDown.on("down", function () {
    this.ClickSnd = this.sound.add("click").setVolume(0.75);
            // play the sound
            this.ClickSnd.play()
  console.log("Jump to main scene");
  
  window.cookie = 3
 window.hamper = 0
 window.table= 0
 window.angpao = 0


 if ( this.lvl==1){
  this.scene.start("lvl1")
 }else if ( this.lvl==2){
  window.holdhamper= 1
  this.scene.start("lvl2")}
  else if (this.lvl==3){
    this.scene.start("lvl3")
  }
    },
    this
  );
  
  }

}