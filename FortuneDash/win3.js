class win3 extends Phaser.Scene {

    constructor() {
        super({
            key: 'win3'
        });

        // Put global variable here
    }
    init() {
        if (window.music) {
          window.music.stop(); // Stop music when "win3" starts
        }
      }

    preload() {

        // Preload all the assets here
        

        // Preload any images here
        this.load.image("win3", "assets/win3.png")
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** win3Scene');
        this.scene.bringToTop("win3");
        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        this.WinSnd = this.sound.add('win').setVolume(0.25) // 10% volume

        this.WinSnd.play()
        window.music.play(false);
       

        // Add image and detect spacebar keypress
        this.add.image(0, 0, 'win3').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to mainScene');
            this.ClickSnd = this.sound.add("click").setVolume(0.75);
            // play the sound
            this.ClickSnd.play()
            this.scene.start('main',
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