import { createRect } from '../lib/createRect';
import { getCanvas } from '../lib/getCanvas';
import { player, playerDrop, playerMove, playerRotate, hardDrop } from './player';
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
    '#33ACFE',
    '#7ac9ff',
    '#edff7a',
    '#ffca7a',
    '#81ff7a',
    '#bd7aff',
    '#ff3838'
];

const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
export let curPiece = blocks[Math.floor(Math.random() * pieces.length)];

export function spawnPiece() {
    const ctx = getCanvas();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    createPiece(ctx, curPiece, player.x, player.y);

    piecePreview();
}

export function collide(piece, offset) {
    for (let y = 0; y < piece.length; ++y) {
        for (let x = 0; x < piece[y].length; ++x) {
            if (piece[y][x] !== 0 && (grid[y + offset.y] && grid[y + offset.y][x + offset.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

export function reset() {
    curPiece = blocks[Math.floor(Math.random() * pieces.length)];
    //put piece in the center of the board
    player.x = (grid[0].length / 2 | 0) - (curPiece[0].length / 2 | 0);
    player.y = 0;
    preview.piece = curPiece;
    preview.x = player.x;
    preview.y = 0;
    
    if (collide(curPiece, player)) {
        player.gameOver = true;
    }
}

export function rotate(direction) {
    for (let y = 0; y < curPiece.length; ++y) {
        for (let x = 0; x < y; ++x) {
            //switch columns and rows
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
    preview.piece = curPiece;
}

export function createPiece(ctx, matrix, posX, posY) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                createRect(ctx, colors[value], posX + x, posY + y, 1, 1);
            }
        });
    });
}


export const preview = {
    piece: curPiece.slice(),
    x: 3,
    y: 0,
}
export function piecePreview() {
    const ctx = getCanvas();
    while (!collide(preview.piece, preview)) {
        preview.y++;
    }
    if (collide(preview.piece, preview)) {
        preview.y--;
    }
    preview.piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                createRect(ctx, 'rgba(0, 0, 0, 0.5)', preview.x + x, preview.y + y, 1, 1);
            }
        });
    });
    preview.y = player.y;
}

export function movePiece(event) {
    const keys = {
        left: 37,
        right: 39,
        down: 40,
        //rotate counter clock btn
        z: 90,
        //rotate clock wise btn
        x: 88,
        space: 32
    }

    if (keys.left === event.keyCode) {
        playerMove(-1);
    } else if (keys.right === event.keyCode) {
        playerMove(1);
    } else if (keys.down === event.keyCode) {
        playerDrop(curPiece);
    } else if (keys.z === event.keyCode) {
        playerRotate(curPiece, 1);
    } else if (keys.x === event.keyCode) {
        playerRotate(curPiece, -1);
    } else if (keys.space === event.keyCode) {
        hardDrop(curPiece);
    }
}