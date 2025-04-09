var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 680,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#be1e2d',
    pixelArt: true,
    scene: [preload, main, story1, story2, tutor,lvl1in, lvl1,lvl2in, lvl2, win2, lvl3in, lvl3, gameover,win3,showInventory]
 
};


let game = new Phaser.Game(config);
window.holdhamper = 0;

// Add variables here
window.cookie = 3
window.hamper = 0
window.table= 0
window.angpao = 0
window.holdhamper= 1

