import { collide, rotate, reset, movePiece } from './piece';
import { mergeToBoard, grid, sweepBoard } from './board';

export const player = {
    x: 3,
    y: 0
}

export function playerMove(direction) {
    player.x += direction;
    if (collide()) {
        player.x -= direction;
    }
}


function checkGameOver() {
    if (collide()) {
        grid.forEach(row => row.fill(0));
    }
}

export function playerDrop(piece) {
    player.y++;
    if (collide()) {
        player.y--;
        mergeToBoard(piece);
        reset();
        checkGameOver();
        sweepBoard();
    }
}

export function hardDrop(piece) {
    while (!collide()) {
        player.y++;
    }
    player.y--;
    mergeToBoard(piece);
    reset();
    checkGameOver();
    sweepBoard();
}

export function playerRotate(piece, direction) {
    const position = player.x;
    let offset = 1;

    rotate(direction);
    while (collide()) {
        player.x = offset;
        offset = -(offset + (offset > 0 ? 1 : -1));

        if (offset > piece[0].length) {
            rotate(-direction);
            player.x = position;
            return;
        }
    }
}

document.addEventListener('keydown', movePiece);