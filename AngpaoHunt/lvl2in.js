class lvl2in extends Phaser.Scene {

    constructor() {
        super({
            key: 'lvl2in'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here
        

        // Preload any images here
        this.load.image("lvl2in", "assets/lvl2in.png")
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** lvl2inScene');

        this.scene.bringToTop("lvl2in");

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        this.LvlUpSnd = this.sound.add("lvlup").setVolume(0.95);
   // play the sound
    this.LvlUpSnd.play()


        // Add image and detect spacebar keypress
        this.add.image(0, 0, 'lvl2in').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to lvl2Scene');
            window.cookie=3
            this.ClickSnd = this.sound.add("click").setVolume(0.75);
            // play the sound
            this.ClickSnd.play()
            this.scene.start('lvl2',
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