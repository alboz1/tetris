import { player, play } from './player';
import { showNextPiece } from '../views/showNextPiece';
import { movePiece, nextPiece } from './piece';
import { hideOverlay } from '../views/overlay';

export function events() {
    const playBtn = document.querySelector('.overlay-info .play-btn');
    playBtn.addEventListener('click', () => {
        hideOverlay();
        if (player.gameOver) {
            const scoreElement = document.querySelector('#score');
            scoreElement.textContent = player.score;
            player.gameOver = false;
        }
        play();
        showNextPiece(nextPiece);
    });
    
    document.addEventListener('keydown', movePiece);
}