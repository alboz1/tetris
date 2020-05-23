import { createPiece } from '../controllers/piece';
const ctx = document.querySelector('#next-piece').getContext('2d');
ctx.canvas.width = 100;
ctx.canvas.height = 50;
ctx.scale(10, 10);
export function showNextPiece(piece) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    createPiece(ctx, piece, 3.5, 2);
}