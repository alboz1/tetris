import { player, play } from './player';
import { showNextPiece } from '../views/showNextPiece';
import { movePiece, nextPiece } from './piece';
import { hideOverlay, showOverlay, goBack, openMenu } from '../views/overlay';

export function events() {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    
    playBtn.addEventListener('click', () => {
        pauseBtn.style.display = 'inline-block';
        if (player.settings.pause) {
            player.settings.pause = false;
        }
        hideOverlay();
        if (player.gameOver) {
            const scoreElement = document.querySelector('#score');
            scoreElement.textContent = player.score;
            player.gameOver = false;
        }
        play();
        showNextPiece(nextPiece);
    });

    //open options menu
    const optionsBtn = document.querySelector('.options-btn');
    optionsBtn.addEventListener('click', () => openMenu('options'));

    //open controls menu
    const controlsBtn = document.querySelector('.controls-btn');
    controlsBtn.addEventListener('click', () => openMenu('controls'));

    //back button to go back on start screen
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', goBack);

    //checkbox to hide/show piece preview setting
    const checkbox = document.querySelector('#piece-preview');
    checkbox.addEventListener('change', (e) => {
        player.settings.piecePreview = e.target.checked;
    });

    //toggle pause/resume game
    pauseBtn.addEventListener('click', () => {
        player.settings.pause = true;
        showOverlay('Paused');
    });

    //choose controls
    const controls = document.querySelector('.controls');
    const chooseControl = controls.querySelector('.choose-control');
    controls.addEventListener('click', (e) => {
        if (e.target.className === 'btn-control') {
            const spanEl = controls.querySelector('.control-for');
            spanEl.textContent = e.target.getAttribute('data-control');
            chooseControl.classList.add('active');
        }
    });

    document.addEventListener('keyup', (e) => {
        if (chooseControl.classList.contains('active')) {
            const btnControl = document.querySelector(`[data-control="${e.target.getAttribute('data-control')}"]`);
            player.settings.controls[btnControl.getAttribute('data-control')] = e.keyCode;
            btnControl.textContent = e.key;
            chooseControl.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (player.settings.pause) return;
        movePiece(e);
    });
}