const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header-title');
const startScreen = overlay.querySelector('.start-screen');

export function showOverlay(gameState) {
    const playerInfo = JSON.parse(localStorage.getItem('player'));
    const playBtn = document.querySelector('.start-screen .play-btn');
    const scoreEl = overlay.querySelector('.player-score');
    const highScoreEl = overlay.querySelector('.player-highscore');
    const newGameBtn = document.querySelector('.new-game');
    const playerInfoEl = overlay.querySelector('.player-info');
    const playerInfoScore = overlay.querySelector('.player-info-score span');
    const playerInfoUsername = overlay.querySelector('.player-info-username');
    const homeBtn = overlay.querySelector('.home-btn');

    header.textContent = gameState;
    newGameBtn.style.display = 'block';
    overlay.style.display = 'flex';
    
    if (gameState === 'Paused') {
        scoreEl.style.display = 'none';
        highScoreEl.style.display = 'none';
        playBtn.textContent = 'Resume';
        playBtn.style.display = 'block';
        playerInfoEl.style.display = 'flex';
        homeBtn.style.display = 'none';
    } else if (gameState === 'Game Over') {
        const score = scoreEl.querySelector('span');
        const highScore = highScoreEl.querySelector('span');
        playerInfoEl.style.display = 'none';
        homeBtn.style.display = 'block';
        score.textContent = playerInfo.score;
        highScore.textContent = playerInfo.highScore;
        scoreEl.style.display = 'block';
        highScoreEl.style.display = 'block';
        playBtn.style.display = 'none';
    } else if (gameState === 'Add Player') {
        const usernameScreen = document.querySelector('.username-screen');
        playerInfoEl.style.display = 'none';
        usernameScreen.style.display = 'flex';
        startScreen.style.display = 'none';
    } else if (gameState === 'Homescreen') {
        const usernameScreen = document.querySelector('.username-screen');
        playerInfoScore.textContent = playerInfo.highScore;
        playerInfoUsername.textContent = playerInfo.username;
        scoreEl.style.display = 'none';
        highScoreEl.style.display = 'none';
        usernameScreen.style.display = 'none';
        homeBtn.style.display = 'none';
        playBtn.style.display = 'block';
        playBtn.textContent = 'Play';
        newGameBtn.style.display = 'none';
        playerInfoEl.style.display = 'flex';
        startScreen.style.display = 'flex';
        header.textContent = 'TETRIS';
    }
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

//close the enable sound screen
export function closeScreen() {
    const enableSoundScreen = document.querySelector('.enable-sound-screen');
    enableSoundScreen.classList.add('remove');
}