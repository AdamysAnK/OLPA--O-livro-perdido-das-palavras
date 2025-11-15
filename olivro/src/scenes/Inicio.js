export class Inicio extends Phaser.Scene {

    constructor() {
        super('Inicio');
    }
    preload() {
        this.load.image('titulo', 'assets/titulo.png');
        this.load.image('ceu', 'assets/ceu.png');
        this.load.image('playButton', 'assets/play.png');
        this.load.image('nuvens', 'assets/nuvens1.png');
        
    }
    create() {
        this.add.image(855, 360, 'ceu').setScale(0.8);
        this.add.image(855, 360, 'nuvens').setScale(2.11);
        const play =  this.add.image(855, 500, 'playButton').setScale(1.5).setInteractive()

        play.on('pointerdown', () => {
            this.scene.start('CreatePersonagem');
    });
    this.add.image(855, 200, 'titulo').setScale(0.3);

}
}