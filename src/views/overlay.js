import { player } from '../controllers/player';

const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header-title');
export function showOverlay(gameState) {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const playerScoreEl = overlay.querySelector('.player-score');
    header.textContent = gameState;
    if (gameState === 'Paused') {
        playerScoreEl.style.display = 'none';
        playBtn.textContent = 'Resume';
    } else {
        const spanEl = playerScoreEl.querySelector('span');
        spanEl.textContent = player.score;
        playerScoreEl.style.display = 'block';

        playBtn.textContent = 'Play';

    }
    overlay.style.display = 'flex';
}

export function hideOverlay() {
    overlay.style.display = 'none';
}

const settingsScreen = overlay.querySelector('.settings-screen');
const controls = overlay.querySelector('.controls');
const options = overlay.querySelector('.options');
const startScreen = overlay.querySelector('.start-screen');
const chooseControl = controls.querySelector('.choose-control');
export function goBack() {
    settingsScreen.classList.remove('open');
    options.classList.remove('open');
    controls.classList.remove('open');
    chooseControl.classList.remove('active');
    startScreen.style.display = 'flex';
}

//open menu for options or controls
export function openMenu(menu) {
    if (menu === 'options') {
        options.classList.add('open');
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