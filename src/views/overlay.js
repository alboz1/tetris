const overlay = document.querySelector('.overlay');
const info = document.querySelector('.title');
export function showOverlay() {
    info.textContent = 'Game over';
    overlay.style.display = 'flex';
}

export function hideOverlay() {
    overlay.style.display = 'none';
}


const options = overlay.querySelector('.options');
const startScreen = overlay.querySelector('.start-screen');
export function hideOptions() {
    options.classList.remove('open');
    startScreen.style.display = 'flex';
}

export function showOptions() {
    options.classList.add('open');
    startScreen.style.display = 'none';
}