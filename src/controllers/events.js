import { play, playerMove, playerRotate, playerDrop, hardDrop, newGame } from './player';
import { player } from '../models/player_model';
import { showNextPiece } from '../views/showNextPiece';
import { movePiece, nextPiece, curPiece } from './piece';
import { sounds, playAudio, pauseAudio } from './audio';
import { hideOverlay, showOverlay, goBack, openMenu, openPanel, closePanel } from '../views/overlay';
import { getDiff } from '../lib/getDiff';
import { removeLoadingScreen } from '../views/loadingBar';

export function events() {
    //play/resume button
    const playBtn = document.querySelector('.start-screen .play-btn');
    playBtn.addEventListener('click', () => {
        //check if player enabled background music
        if (player.settings.music) {
            playAudio(sounds.background, 'loop');
        }

        if (player.settings.pause) {
            player.settings.pause = false;
        }
        hideOverlay();
        play();
        showNextPiece(nextPiece);
    });

    //open options menu
    const settingsBtn = document.querySelector('.settings-btn');
    settingsBtn.addEventListener('click', () => openMenu('settings'));

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

    //toggle background music
    const musicToggle = document.querySelector('#music');
    musicToggle.addEventListener('change', (e) => {
        player.settings.music = e.target.checked;
    });

    //pause game
    const pauseBtn = document.querySelector('.pause-btn');
    pauseBtn.addEventListener('click', () => {
        player.settings.pause = true;
        pauseAudio(sounds.background);
        showOverlay('Paused');
    });

    //new game
    const newGameBtn = document.querySelector('.new-game');
    newGameBtn.addEventListener('click', newGame);

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
            btnControl.textContent = e.key === ' ' ? 'Space' : e.key;
            closePanel();
        }
    });

    //click anywhere outside to close panel (if you dont want to change the current control)
    document.addEventListener('click', (e) => {
        if (
            chooseControl.classList.contains('active') &&
            !e.target.classList.contains('choose-control') &&
            !e.target.classList.contains('btn-control') &&
            !e.target.classList.contains('control-for')
        ) {
            closePanel();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (player.settings.pause || chooseControl.classList.contains('active')) return;
        movePiece(e);
    });

    //loading bar
    const progressBar = document.querySelector('.progress-bar-foreground');
    let progress = 0;
    Object.values(sounds).forEach(soundEl => {
        soundEl.addEventListener('loadedmetadata', () => {
            progress += 20;
            progressBar.style.width = `${progress}%`;
        });
    });
    progressBar.addEventListener('transitionend', () => {
        if (progress === 100) {
            removeLoadingScreen();
        }
    });

    //mobile controls
    const canvas = document.querySelector('#canvas');
    let prevTouchPosY = 0;
    //touch sensitivity
    let sensitivity = 0;

    //track moving speed when player swipes
    let movingSpeed = 0;

    let touchMoved = true;
    //moving horizontally
    let movingH = false;

    let yDown = null;
    let xDown = null;
    canvas.addEventListener('touchmove', (e) => {
        if (player.settings.pause) return;
        e.preventDefault();
        touchMoved = true;
        const touch = e.changedTouches[0];
        const { xDiff, yDiff } = getDiff(e, xDown, yDown);
        
        if (sensitivity > 7) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                movingH = true;
                if (xDiff > 0) {
                    //move left
                    playerMove(-1);
                } else {
                    //move right
                    playerMove(1);
                }
            }
            //move piece down
            if (touch.pageY - prevTouchPosY > 0 && !movingH) {
                playerDrop(curPiece);
                movingSpeed++;
                movingH = false;
            }

            sensitivity = 0;
        }
        sensitivity++;

        prevTouchPosY = touch.pageY;
    });

    canvas.addEventListener('touchend', (e) => {
        const { xDiff, yDiff } = getDiff(e, xDown, yDown);
        movingH = false;

        if (Math.abs(xDiff) < Math.abs(yDiff)) {
            if (yDiff < 0 && movingSpeed <= 1) {
                hardDrop(curPiece);
            }
            //reset after player drops piece and lifts finger
            yDown = null;
        }
        
        if (!touchMoved) {
            playerRotate(curPiece, 1);
        }
        movingSpeed = 0;
    });

    canvas.addEventListener('touchstart', (e) => {
        xDown = e.changedTouches[0].clientX;
        yDown = e.changedTouches[0].clientY;
        touchMoved = false;
    });
}