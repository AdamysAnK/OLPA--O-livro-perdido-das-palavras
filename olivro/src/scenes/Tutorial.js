export class Tutorial extends Phaser.Scene {

    constructor() {
        super('Tutorial');
    }
    preload() {
        this.load.image('livro', 'assets/livro.png');
        this.load.bitmapFont('Daydream', 'assets/fonts/daydream_bitmap.png', 'assets/fonts/daydream_bitmap.fnt');
    }
    create() {
        this.add.image(855, 360, 'livro').setScale(0.5);
        const tutorialText = this.add.bitmapText(500, 180, 'Daydream', 'Bem-vindo ao Tutorial!', 26);
        tutorialText.setTint(0x000000);
    }

}