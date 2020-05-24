const overlay = document.querySelector('.overlay');
const info = document.querySelector('.title');
export function showOverlay() {
    info.textContent = 'Game over';
    overlay.style.display = 'flex';
}

export function hideOverlay() {
    overlay.style.display = 'none';
}