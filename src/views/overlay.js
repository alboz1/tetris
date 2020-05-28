const overlay = document.querySelector('.overlay');
const info = document.querySelector('.title');
export function showOverlay(infoText) {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    info.textContent = infoText;
    pauseBtn.style.display = 'none';
    if (infoText === 'Paused') {
        playBtn.textContent = 'Resume';
    } else {
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