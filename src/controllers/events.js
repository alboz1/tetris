import { player, play } from './player';
import { showNextPiece } from '../views/showNextPiece';
import { movePiece, nextPiece } from './piece';
import { hideOverlay, showOptions, hideOptions, showOverlay } from '../views/overlay';

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
    optionsBtn.addEventListener('click', showOptions);

    //back button to go back on start screen
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', hideOptions);

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

    //toggle accordion
    const accordionBtn = document.querySelector('.toggle-accordion');
    accordionBtn.addEventListener('click', () => {
        const accordion = document.querySelector('.accordion');
        accordion.classList.toggle('open');
    });

    document.addEventListener('keydown', (e) => {
        if (player.settings.pause) return;
        movePiece(e);
    });
}