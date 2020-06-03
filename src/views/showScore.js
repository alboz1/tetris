import { player } from '../models/player_model';

export function showScore() {
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = player.score;
}