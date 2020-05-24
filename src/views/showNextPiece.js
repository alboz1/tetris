import { draw } from '../lib/draw';
const ctx = document.querySelector('#next-piece').getContext('2d');
ctx.canvas.width = 100;
ctx.canvas.height = 50;
ctx.scale(10, 10);

export function showNextPiece(piece) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(ctx, piece, { posX: (10 / 2 | 0) - (piece[0].length / 2 | 0), posY: (5 / 2) - (piece.length / 2 | 0)});
}