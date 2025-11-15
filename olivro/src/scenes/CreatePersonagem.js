export class CreatePersonagem extends Phaser.Scene {

    constructor() {
        super('CreatePersonagem');
    }

    preload() {
        this.load.image('background', 'assets/space.png');
        this.load.image('livro', 'assets/livro.png');
        this.load.image('pinguim', 'assets/pinguim.png');
        this.load.image('playButton', 'assets/play.png');
        this.load.bitmapFont('Daydream', 'assets/fonts/daydream_bitmap.png', 'assets/fonts/daydream_bitmap.fnt');

        
    }

    create() {
        this.background = this.add.tileSprite(640, 360, 2700, 720, 'background');
        this.add.image(855 , 430, 'livro').setScale(0.5);
        this.add.image(600 , 400, 'pinguim').setScale(0.3);
        this.add.image(1000, 600, 'playButton').setScale(0.5).setInteractive()



        // Botão para iniciar o jogo
        const playButton = this.add.image(1000, 600, 'playButton').setScale(0.5).setInteractive();

        playButton.on('pointerdown', () => {
            // Aqui você pode adicionar a lógica para iniciar o jogo ou ir para a próxima cena
            this.scene.start('EscolhaFase'); // Exemplo: ir para a cena de escolha de fase
        });

        // Titulo
        const tutorial = this.add.bitmapText(600, 60, 'Daydream', 'crie seu personagem', 26);
        tutorial.setTint(0x000000);

        this.inputName = this.add.dom(620,210,'input',{
            type: 'text',
            fontSize: '32px',
            padding: '3px',
            borderRadius: '10px',
            width: '300px',
            textAlign: 'center'
        });
        const nome = this.add.bitmapText(560, 150, 'Daydream', 'nome', 26);
        nome.setTint(0x000000);

    this.inputName = this.add.dom(1050,210,'input',{
        type: 'text',
        fontSize: '32px',
        padding: '3px',
        borderRadius: '10px',
        width: '300px',
        textAlign: 'center'
    });
    const idade = this.add.bitmapText(990, 150, 'Daydream', 'idade', 26);
    idade.setTint(0x000000);

    const genero = this.add.bitmapText(975, 300, 'Daydream', 'genero', 26);
    genero.setTint(0x000000);

    this.inputGenero = this.add.dom(1060, 365).createFromHTML(`
    <select style="
        font-size: 26px;
        padding: 8px;
        width: 220px;
        border-radius: 10px;
        text-align: center;
    ">
        <option value="" disabled selected>Selecione</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="outro">Outro</option>
    </select>
`);

    }
    update() {
        this.background.tilePositionX += 2;
    }

}