import { player } from "./player";
import { createRect } from '../lib/createRect';
import { getCanvas } from "../lib/getCanvas";

export const grid = Array.from({length: 20}, () => Array(10).fill(0));

export function drawBoard(position) {
    const ctx = getCanvas();
    grid.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                createRect(ctx, 'white', position.x + x, position.y + y, 1, 1);
            }
        })
    })
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
