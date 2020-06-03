import { addScore } from './player';
import { grid } from '../models/grid_model';
import { player } from '../models/player_model';
import { getCanvas } from '../lib/getCanvas';
import { draw } from '../lib/draw';
import { sounds, playAudio } from './audio';

//draw pieces on the board
export function drawBoard(position) {
    const ctx = getCanvas();
    draw(ctx, grid, { posX: position.x,  posY: position.y});
}

export function sweepBoard() {
    let clearedRows = 0;

    grid.forEach((row, index) => {
        const lineClear = row.every(value => value > 0);
        if (lineClear) {
            clearedRows++;
            const newRow = grid.splice(index, 1)[0].fill(0);
            grid.unshift(newRow);
            playAudio(sounds.lineClear);
        }
    });
    addScore(clearedRows);
}

export function mergeToBoard(piece) {
    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                grid[y + player.y][x + player.x] = value;
            }
        });
    });
    playAudio(sounds.hit);
}
