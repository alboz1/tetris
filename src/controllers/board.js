import { player, addScore } from './player';
import { getCanvas } from '../lib/getCanvas';
import { createPiece } from './piece';

export const grid = Array.from({length: 20}, () => Array(10).fill(0));

//draw pieces on the board
export function drawBoard(position) {
    const ctx = getCanvas();
    createPiece(ctx, grid, position.x, position.y);
}

export function sweepBoard() {
    let clearedRows = 0;

    grid.forEach((row, index) => {
        const lineClear = row.every(value => value > 0);
        if (lineClear) {
            clearedRows++;
            const newRow = grid.splice(index, 1)[0].fill(0);
            grid.unshift(newRow);
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
}
