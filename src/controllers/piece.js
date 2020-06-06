import { createRect } from '../lib/createRect';
import { getCanvas } from '../lib/getCanvas';
import { playerDrop, playerMove, playerRotate, hardDrop } from './player';
import { player, playerInfo } from '../models/player_model';
import { grid } from '../models/grid_model';
import { draw } from '../lib/draw';
import { showFavicon } from '../views/favicon';

export let curPiece = createPiece();
export let nextPiece = getNextPiece();

export function spawnPiece() {
    //center piece
    const ctx = getCanvas();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(ctx, curPiece, { posX: player.x, posY: player.y });
    if (playerInfo.settings.piecePreview) {
        piecePreview();
    }
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
    curPiece = nextPiece;
    player.x = (grid[0].length / 2 | 0) - (curPiece[0].length / 2 | 0); //put piece in the center of the board
    player.y = 0;
    preview.piece = curPiece;
    preview.x = player.x;
    preview.y = 0;
    nextPiece = getNextPiece();
    showFavicon(curPiece);
    //check game over
    if (collide(curPiece, player)) {
        player.gameOver = true;
        playerInfo.highScore = playerInfo.score > playerInfo.highScore ? playerInfo.score : playerInfo.highScore;
    }
}

export function rotate(piece, direction) {
    for (let y = 0; y < piece.length; ++y) {
        for (let x = 0; x < y; ++x) {
            //switch columns and rows
            [
                piece[x][y],
                piece[y][x],
            ] = [
                piece[y][x],
                piece[x][y],
            ]
        }
    }

    if (direction > 0) {
        piece.forEach(row => row.reverse());
    } else {
        piece.reverse();
    }
    preview.piece = piece;
}

export function createPiece() {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
 
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

    return blocks[Math.floor(Math.random() * pieces.length)];
}

//piece preview
export const preview = {
    piece: curPiece.slice(),
    x: (grid[0].length / 2 | 0) - (curPiece[0].length / 2 | 0),
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
                createRect(ctx, '15, 15, 15', preview.x + x, preview.y + y, 1, 1);
            }
        });
    });
    preview.y = player.y;
}

export function getNextPiece() {
    const nextPiece = createPiece();
    return nextPiece;
}

export function movePiece(event) {
    if (playerInfo.settings.controls.move_left.code === event.keyCode) {
        playerMove(-1);
    } else if (playerInfo.settings.controls.move_right.code === event.keyCode) {
        playerMove(1);
    } else if (playerInfo.settings.controls.move_down.code === event.keyCode) {
        event.preventDefault();
        playerDrop(curPiece);
    } else if (playerInfo.settings.controls.rotate_left.code === event.keyCode) {
        playerRotate(curPiece, 1);
    } else if (playerInfo.settings.controls.rotate_right.code === event.keyCode) {
        playerRotate(curPiece, -1);
    } else if (playerInfo.settings.controls.hard_drop.code === event.keyCode) {
        event.preventDefault();
        hardDrop(curPiece);
    }
}