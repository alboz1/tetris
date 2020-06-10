import { getCanvas } from './lib/getCanvas';
import { events } from './controllers/events';
import { gridOptions } from './models/grid_model';
import { initAudio } from './controllers/audio';
import { showOverlay } from './views/overlay';
import { initPlayer } from './controllers/player';
import './assets/styles/index.css';

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('service worker registered'))
        .catch(err => console.log('service worker not registered', err));
    });
}

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
    initAudio();

    if (!isPlayer) {
        showOverlay('Add Player');
    } else {
        showOverlay('Homescreen');
    }

});