import { play, playerMove, playerRotate, playerDrop, hardDrop, newGame, registerPlayer, savePlayer } from './player';
import { player, playerInfo } from '../models/player_model';
import { showNextPiece } from '../views/showNextPiece';
import { movePiece, nextPiece, curPiece } from './piece';
import { sounds, playAudio, pauseAudio, toggleAudio } from './audio';
import { hideOverlay, showOverlay, goBack, openMenu, openPanel, closePanel, closeScreen } from '../views/overlay';
import { getDiff } from '../lib/getDiff';

export function events() {
    //play/resume button
    const playBtn = document.querySelector('.start-screen .play-btn');
    playBtn.addEventListener('click', () => {
        if (player.pause) {
            player.pause = false;
        } else {
            newGame();
            return;
        }

        //check if player enabled background music
        if (playerInfo.settings.music) {
            playAudio(sounds.background);
        }

        hideOverlay();
        play();
        showNextPiece(nextPiece);
    });

    //register player
    const form = document.querySelector('.username-screen form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        registerPlayer(username);
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
        playerInfo.settings.piecePreview = e.target.checked;
        savePlayer(playerInfo);
    });
    
    //toggle sound
    const soundToggle = document.querySelector('#sound');
    soundToggle.addEventListener('change', (e) => {
        playerInfo.settings.sound = e.target.checked;
        savePlayer(playerInfo);
    });
    
    //toggle background music
    const musicToggle = document.querySelector('#music');
    musicToggle.addEventListener('change', (e) => {
        playerInfo.settings.music = e.target.checked;
        savePlayer(playerInfo);
    });

    //pause game
    const pauseBtn = document.querySelector('.pause-btn');
    pauseBtn.addEventListener('click', () => {
        player.pause = true;
        pauseAudio(sounds.background);
        showOverlay('Paused');
    });

    //new game
    const newGameBtn = document.querySelector('.new-game');
    newGameBtn.addEventListener('click', newGame);

    //home button
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', () => {
        showOverlay('Homescreen');
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
        e.preventDefault();
        //close panel if escape key is pressed
        if (e.keyCode === 27) {
            closePanel();
            return;
        }
        if (chooseControl.classList.contains('active')) {
            const btnControl = document.querySelector(`[data-control="${selectedControl}"]`);
            const keyName = e.key === ' ' ? 'Space' : e.key;

            playerInfo.settings.controls[btnControl.getAttribute('data-control')].code = e.keyCode;
            playerInfo.settings.controls[btnControl.getAttribute('data-control')].name = keyName;
            btnControl.textContent = keyName;
            savePlayer(playerInfo);
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
        if (player.pause || chooseControl.classList.contains('active')) return;
        movePiece(e);
    });

    //enable sound?
    const enableSoundBtns = document.querySelector('.enable-sound-btns');
    enableSoundBtns.addEventListener('click', (e) => {
        console.log(e);
        const yesBtn = e.target.dataset.enable === 'yes';
        const noBtn = e.target.dataset.enable === 'no';
        if (e.target.tagName !== 'BUTTON') return;

        playAudio(sounds.moving);
        if (yesBtn) {
            toggleAudio(true);
        } else if (noBtn) {
            toggleAudio(false);
        }
        closeScreen();
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
        if (player.pause) return;
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