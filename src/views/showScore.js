import { player } from '../controllers/player';

export function showScore() {
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = player.score;
}