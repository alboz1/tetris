import { player, play } from './player';
import { movePiece } from './piece';

export function events() {
    const playBtn = document.querySelector('.game-over-info .play-btn');
    playBtn.addEventListener('click', () => {
        const gameOverOverlay = document.querySelector('.game-over-overlay');
        gameOverOverlay.style.display = 'none';
        if (player.gameOver) {
            player.gameOver = false;
        }
        play();
    });
    
    document.addEventListener('keydown', movePiece);
}