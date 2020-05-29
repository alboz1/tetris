import { createRect } from './createRect';

const colors = [
    null,
    '51, 172, 254',
    '75, 105, 214',
    '237, 255, 122',
    '255, 202, 122',
    '129, 255, 122',
    '189, 122, 255',
    '255, 56, 56'
];

export function draw(ctx, matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                createRect(ctx, colors[value], offset.posX + x, offset.posY + y, 1, 1);
            }
        });
    });
}