import { createRect } from '../lib/createRect';
import { getCanvas } from '../lib/getCanvas';
import { player, playerDrop, playerMove, playerRotate } from './player';
import { grid } from './board';

const blocks = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0]
    ],
    [
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0]
    ],
    [
        [4, 4],
        [4, 4]
    ],
    [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0]
    ],
    [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0]
    ],
    [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0]
    ]
];

export const colors = [
    null,
    '#6a97de',
    '#6a74de',
    '#debb6a',
    '#d6de6a',
    '#8dde6a',
    '#ae6ade',
    '#db3737'
];

const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
export let curPiece = blocks[Math.floor(Math.random() * pieces.length)];

export function spawnPiece() {
    const ctx = getCanvas();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    createPiece(ctx, curPiece, player.x, player.y);
}

export function collide() {
    for (let y = 0; y < curPiece.length; ++y) {
        for (let x = 0; x < curPiece[y].length; ++x) {
            if (curPiece[y][x] !== 0 && (grid[y + player.y] && grid[y + player.y][x + player.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

export function reset() {
    curPiece = blocks[Math.floor(Math.random() * pieces.length)];
}

export function rotate(direction) {
    for (let y = 0; y < curPiece.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                curPiece[x][y],
                curPiece[y][x],
            ] = [
                curPiece[y][x],
                curPiece[x][y],
            ]
        }
    }

    if (direction > 0) {
        curPiece.forEach(row => row.reverse());
    } else {
        curPiece.reverse();
    }
}

export function createPiece(ctx, matrix, posX, posY) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                createRect(ctx, colors[value], posX + x, posY + y, 0.95, 0.95);
            }
        });
    });
}

export function movePiece(event) {
    const keys = {
        left: 37,
        right: 39,
        down: 40,
        rotateCCW: 90,
        rotateCW: 88
    }

    if (keys.left === event.keyCode) {
        playerMove(-1);
    } else if (keys.right === event.keyCode) {
        playerMove(1);
    } else if (keys.down === event.keyCode) {
        playerDrop(curPiece);
    } else if (keys.rotateCCW === event.keyCode) {
        playerRotate(curPiece, -1);
    } else if (keys.rotateCW === event.keyCode) {
        playerRotate(curPiece, 1);
    }
}

document.addEventListener('keydown', movePiece);