import { createBlock, blocks } from "../lib/createBlock";
import { getCanvas } from "../lib/getCanvas";
import { player, playerDrop, playerMove, playerRotate } from './player';
import { grid } from './board';

const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
export let curPiece = pieces[Math.floor(Math.random() * pieces.length)];

export function spawnPiece() {
    const ctx = getCanvas();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    createBlock(curPiece, player.x, player.y);
}

export function collide() {
    for (let y = 0; y < blocks[curPiece].length; ++y) {
        for (let x = 0; x < blocks[curPiece][y].length; ++x) {
            if (blocks[curPiece][y][x] !== 0 && (grid[y + player.y] && grid[y + player.y][x + player.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

export function reset() {
    curPiece = pieces[Math.floor(Math.random() * pieces.length)];
}

export function rotate(direction) {
    for (let y = 0; y < blocks[curPiece].length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                blocks[curPiece][x][y],
                blocks[curPiece][y][x],
            ] = [
                blocks[curPiece][y][x],
                blocks[curPiece][x][y],
            ]
        }
    }

    if (direction > 0) {
        blocks[curPiece].forEach(row => row.reverse());
    } else {
        blocks[curPiece].reverse();
    }
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
        playerDrop(blocks[curPiece]);
    } else if (keys.rotateCCW === event.keyCode) {
        playerRotate(blocks[curPiece], -1);
    } else if (keys.rotateCW === event.keyCode) {
        playerRotate(blocks[curPiece], 1);
    }
}

document.addEventListener('keydown', movePiece);