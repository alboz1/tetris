import { createRect } from './createRect';

const colors = [
    null,
    '#33ACFE',
    '#7ac9ff',
    '#edff7a',
    '#ffca7a',
    '#81ff7a',
    '#bd7aff',
    '#ff3838'
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