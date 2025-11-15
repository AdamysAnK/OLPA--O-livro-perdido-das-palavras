export class EscolhaFase extends Phaser.Scene {

    constructor() {
        super('EscolhaFase');
    }
    preload(){
        this.load.image('livro', 'assets/livro.png');
        this.load.bitmapFont('Daydream', 'assets/fonts/daydream_bitmap.png', 'assets/fonts/daydream_bitmap.fnt');
        this.load.image('fase1', 'assets/fase1.png');
        this.load.image('fase2', 'assets/fase2.png');
        this.load.image('fase3', 'assets/fase3.png');
        

    }
    create(){
        //array das fases
        this.fases = [{
            numero: 1,
            imagem: 'fase1',
            nome: 'Nivel',
            descricao: 'DescriCao do Nivel 1\ncontinua aqui',
        },
        {
            numero: 2,
            nome: 'Nivel',
            imagem: 'fase2',
            descricao: 'DescriCao do Nivel 2',
        },
        {
            numero: 3,
            nome: 'Nivel',
            imagem: 'fase3',
            descricao: 'DescriCao do Nivel 3',
        }];
        this.faseAtual = 0;
        this.add.image(855, 360, 'livro').setScale(0.5);


        this.imagemFase = this.add.image(1050, 280, this.fases[0].imagem).setScale(0.4);

        this.textoNumero = this.add.bitmapText(1000, 100, 'Daydream', 'Nivel 1', 26);
        this.textoNumero.setTint(0x000000);

        this.textoDescricao = this.add.bitmapText(970, 420, 'Daydream', this.fases[0].descricao, 10);
        this.textoDescricao.setTint(0x000000);

        this.botaoProximo = this.add.text(1200, 260, '>', { fontSize: '32px', fill: '#000' }).setInteractive();
        this.botaoAnterior = this.add.text(880, 260, '<', { fontSize: '32px', fill: '#000' }).setInteractive();

        this.atualizarFase = () => {
        const fase = this.fases[this.faseAtual];

        this.imagemFase.setTexture(fase.imagem);
        this.textoNumero.setText('Nivel ' + fase.numero);
        this.textoDescricao.setText(fase.descricao);
        };

        this.botaoProximo.on('pointerdown', () => {
            this.faseAtual++;
            if (this.faseAtual>=this.fases.length) {
                this.faseAtual = 0;
            }
            this.atualizarFase();

        });

        this.botaoAnterior.on('pointerdown', () => {
            this.faseAtual--;
            if (this.faseAtual < 0){
                this.faseAtual = this.fases.length -1;
            }
            this.atualizarFase();
        });

        const tutorial = this.add.bitmapText(550, 180, 'Daydream', 'Tutorial', 26).setInteractive();
        tutorial.on('pointerdown', () => {
            // Lógica para iniciar o tutorial
            // Aqui você pode adicionar a lógica para iniciar o tutorial ou ir para a próxima cena
            this.scene.start('Tutorial'); // Exemplo: ir para a cena do tutorial
            
        });

        tutorial.setTint(0x000000);
        const comecar = (this.add.bitmapText(550, 300, 'Daydream', 'comeCar', 26));
        comecar.setTint(0x000000);


    }

}