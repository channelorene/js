class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    init() {
        if (window.music) {
          window.music.play(); 
        }
    // Reset all game data when replaying
     // Reset all game data when replaying
     window.hamper = 0;
     window.table = 0;
     window.angpao = 0;
     window.cookie = 3;
      }
    preload() {

        // Preload all the assets here
        

        // Preload any images here
        this.load.image("cover", "assets/cover.png")
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** mainScene');
        this.scene.bringToTop("main");

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        this.add.image(0, 0, 'cover').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to story1Scene');
            this.ClickSnd = this.sound.add("click").setVolume(0.75);
            // play the sound
            this.ClickSnd.play()
            this.scene.start('story1',
                // Optional parameters
                {

                }
            );
        }, this);


        // // Add any text in the main page
        // this.add.text(90, 600, 'Press spacebar to continue', {
        //     font: '30px Courier',
        //     fill: '#FFFFFF'
        // });


        // Create all the game animations here

    }


}