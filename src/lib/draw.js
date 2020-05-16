import { createBlock } from './createBlock';

export function draw(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                createRect(ctx, colors[value], posX + x, posY + y, 1, 1);
            }
        });
    });
}