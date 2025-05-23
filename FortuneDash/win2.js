class win2 extends Phaser.Scene {

    constructor() {
        super({
            key: 'win2'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here
        

        // Preload any images here
        this.load.image("win2", "assets/win2.png")
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** win2Scene');
        this.scene.bringToTop("win2");

        this.meetSnd = this.sound.add("ring").setVolume(0.95);
   // play the sound
    this.meetSnd.play()
    
        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        this.add.image(0, 0, 'win2').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to lvl3inScene');

            this.scene.start('lvl3in',
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