import { collide, rotate, reset } from './piece';
import { mergeToBoard, grid } from './board';

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
        player.x = 3;
        player.y = 0;
        checkGameOver();
    }
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