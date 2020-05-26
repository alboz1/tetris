const overlay = document.querySelector('.overlay');
const info = document.querySelector('.title');
export function showOverlay(infoText) {
    const playBtn = document.querySelector('.start-screen .play-btn');
    info.textContent = infoText;
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

export function goBack() {
    settingsScreen.classList.remove('open');
    options.classList.remove('open');
    controls.classList.remove('open');
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