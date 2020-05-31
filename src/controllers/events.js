import { player, play } from './player';
import { showNextPiece } from '../views/showNextPiece';
import { movePiece, nextPiece } from './piece';
import { sounds, playAudio, pauseAudio } from './audio';
import { hideOverlay, showOverlay, goBack, openMenu, openPanel, closePanel } from '../views/overlay';

export function events() {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    playBtn.addEventListener('click', () => {
        playAudio(sounds.background, 'loop');
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

    //toggle sound
    const soundToggle = document.querySelector('#sound');
    soundToggle.addEventListener('change', (e) => {
        player.settings.sound = e.target.checked;
    });

    //pause game
    pauseBtn.addEventListener('click', () => {
        player.settings.pause = true;
        pauseAudio(sounds.background);
        showOverlay('Paused');
    });

    //choose controls
    const controls = document.querySelector('.controls');
    const chooseControl = controls.querySelector('.choose-control');
    let selectedControl = null;
    controls.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-control')) {
            selectedControl = e.target.getAttribute('data-control');
            openPanel(e);
        }
    });
    
    //event to make the key user pressed as a default control for the selected move
    document.addEventListener('keyup', (e) => {
        //close panel if escape key is pressed
        if (e.keyCode === 27) {
            closePanel();
            return;
        }
        if (chooseControl.classList.contains('active')) {
            const btnControl = document.querySelector(`[data-control="${selectedControl}"]`);
            player.settings.controls[btnControl.getAttribute('data-control')] = e.keyCode;
            btnControl.textContent = e.key;
            closePanel();
        }
    });

    //click anywhere outside to close panel (if you dont want to change the current control)
    document.addEventListener('click', (e) => {
        if (chooseControl.classList.contains('active') && !e.target.classList.contains('choose-control') && !e.target.classList.contains('btn-control') && !e.target.classList.contains('control-for')) {
            closePanel();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (player.settings.pause) return;
        movePiece(e);
    });
}