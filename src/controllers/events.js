import { player, play } from './player';
import { showNextPiece } from '../views/showNextPiece';
import { movePiece, nextPiece } from './piece';
import { hideOverlay, showOptions, hideOptions } from '../views/overlay';

export function events() {
    const playBtn = document.querySelector('.start-screen .play-btn');
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

    const optionsBtn = document.querySelector('.options-btn');
    optionsBtn.addEventListener('click', showOptions);
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', hideOptions);
    const checkbox = document.querySelector('#piece-preview');
    checkbox.addEventListener('change', (e) => {
        player.settings.piecePreview = e.target.checked;
    });
    document.addEventListener('keydown', movePiece);
}