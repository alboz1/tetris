import { getCanvas } from './lib/getCanvas';
import { events } from './controllers/events';
import { gridOptions } from './models/grid_model';
import bgMusic from './assets/sound/background-music.wav';
import hit from './assets/sound/hit.wav';
import moving from './assets/sound/moving.wav';
import gameOver from './assets/sound/game-over.wav';
import lineClear from './assets/sound/line-clear.wav';
import { sounds } from './controllers/audio';
import { showOverlay } from './views/overlay';
import { initPlayer } from './controllers/player';
import './assets/styles/index.css';

window.addEventListener('DOMContentLoaded', () => {
    initPlayer();

    const smallDevices = window.matchMedia('(max-width: 375px)').matches;
    const isPlayer = localStorage.getItem('player') || null;

    let blockSize = 25;
    const ctx = getCanvas();
    if (smallDevices) {
        blockSize = 23;
    }
    ctx.canvas.width = gridOptions.cols * blockSize;
    ctx.canvas.height = gridOptions.rows * blockSize;
    ctx.scale(blockSize, blockSize);
    events();
    
    sounds.background.setAttribute('src', bgMusic);
    sounds.hit.setAttribute('src', hit);
    sounds.moving.setAttribute('src', moving);
    sounds.gameover.setAttribute('src', gameOver);
    sounds.lineClear.setAttribute('src', lineClear);

    if (!isPlayer) {
        showOverlay('Add Player');
    } else {
        showOverlay('Homescreen');
    }

});