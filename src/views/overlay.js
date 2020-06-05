import { player } from '../models/player_model';

const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header-title');
const startScreen = overlay.querySelector('.start-screen');

export function showOverlay(gameState) {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const scoreEl = overlay.querySelector('.player-score');
    const highScoreEl = overlay.querySelector('.player-highscore');
    header.textContent = gameState;
    
    const newGameBtn = document.querySelector('.new-game');
    if (gameState === 'Paused') {
        scoreEl.style.display = 'none';
        highScoreEl.style.display = 'none';
        playBtn.textContent = 'Resume';
        playBtn.style.display = 'block';
    } else {
        const score = scoreEl.querySelector('span');
        const highScore = highScoreEl.querySelector('span');
        score.textContent = player.score;
        highScore.textContent = player.highScore;
        scoreEl.style.display = 'block';
        highScoreEl.style.display = 'block';
        playBtn.style.display = 'none';
        
    }
    newGameBtn.style.display = 'block';
    overlay.style.display = 'flex';
}

export function hideOverlay() {
    overlay.style.display = 'none';
}

const settingsScreen = overlay.querySelector('.settings-screen');
const controls = overlay.querySelector('.controls');
const settings = overlay.querySelector('.settings');
const chooseControl = controls.querySelector('.choose-control');
export function goBack() {
    settingsScreen.classList.remove('open');
    settings.classList.remove('open');
    controls.classList.remove('open');
    chooseControl.classList.remove('active');
    startScreen.style.display = 'flex';
}

//open menu for settings or controls
export function openMenu(menu) {
    if (menu === 'settings') {
        settings.classList.add('open');
    } else if (menu === 'controls') {
        controls.classList.add('open');
    }
    settingsScreen.classList.add('open');
    startScreen.style.display = 'none';
}

//open panel when user clicks to change one of the keys
const panelOverlay = overlay.querySelector('.choose-control-overlay');
export function openPanel(e) {
    const pElement = controls.querySelector('.control-for');
    pElement.textContent = `Choose a button for ${e.target.getAttribute('data-control').replace('_', ' ')}`;
    chooseControl.classList.add('active');
    panelOverlay.classList.add('active');
}

export function closePanel() {
    chooseControl.classList.remove('active');
    panelOverlay.classList.remove('active');
}