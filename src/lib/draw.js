import { createBlock } from './createBlock';

export function draw(piece, offset) {
    createBlock(piece, offset.x, offset.y);
}