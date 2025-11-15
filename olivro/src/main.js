import{Inicio} from './scenes/inicio.js';
import { CreatePersonagem } from './scenes/CreatePersonagem.js';
import { EscolhaFase } from './scenes/EscolhaFase.js';
import {Tutorial} from './scenes/Tutorial.js';

const config = {
    type: Phaser.AUTO,
    title: 'Overlord Rising',
    description: '',
    parent: 'game-container',
    width: 1710,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    
    scene: [
        Inicio,
        CreatePersonagem,
         EscolhaFase,

        Tutorial
        
        
        
        


    ],
    dom: { createContainer: true },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
};

new Phaser.Game(config);
            