import { createRect } from "./createRect";
import { getCanvas } from "./getCanvas";

export const blocks = {
    'I': [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    'J': [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'L': [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'O': [
        [1, 1],
        [1, 1]
    ],
    'S': [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    'T': [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'Z': [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ]
};

export function createBlock(type, posX, posY) {
    const ctx = getCanvas();

    switch (type) {
        case 'I':
            blocks['I'].forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        createRect(ctx, 'white', posX + x, posY + y, 1, 1);
                    }
                });
            });
            break;
        case 'J':
            blocks['J'].forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        createRect(ctx, 'white', posX + x, posY + y, 1, 1);
                    }
                });
            });
            break;
        case 'L':
            blocks['L'].forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        createRect(ctx, 'white', posX + x, posY + y, 1, 1);
                    }
                });
            });
            break;
        case 'O':
            blocks['O'].forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        createRect(ctx, 'white', posX + x, posY + y, 1, 1);
                    }
                });
            });
            break;
        case 'S':
            blocks['S'].forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        createRect(ctx, 'white', posX + x, posY + y, 1, 1);
                    }
                });
            });
            break;
        case 'T':
            blocks['T'].forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        createRect(ctx, 'white', posX + x, posY + y, 1, 1);
                    }
                });
            });
            break;
        case 'Z':
            blocks['Z'].forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        createRect(ctx, 'white', posX + x, posY + y, 1, 1);
                    }
                });
            });
            break;
        default:
            console.error(`case ${type} not supported`);
            break;
    }
}