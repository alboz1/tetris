import { collide, rotate, reset, movePiece, spawnPiece, curPiece } from './piece';
import { grid, mergeToBoard, sweepBoard, drawBoard } from './board';

export const player = {
    x: 3,
    y: 0,
    gameOver: false,
    score: 0
}

export function playerMove(direction) {
    player.x += direction;
    if (collide()) {
        player.x -= direction;
    }
}

export function playerDrop(piece) {
    if (player.gameOver) return;
    player.y++;
    if (collide()) {
        player.y--;
        mergeToBoard(piece);
        reset();
        sweepBoard();
    }
}

export function hardDrop(piece) {
    if (player.gameOver) return;
    while (!collide()) {
        player.y++;
    }
    player.y--;
    mergeToBoard(piece);
    reset();
    sweepBoard();
}

export function playerRotate(piece, direction) {
    const position = player.x;
    let offset = 1;

    rotate(direction);
    while (collide()) {
        player.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));

        if (offset > piece[0].length) {
            rotate(-direction);
            player.x = position;
            return;
        }
    }
}

//add scores
export function addScore(linesCleared) {
    const scoreElement = document.querySelector('.score');

    if (linesCleared === 1) {
        player.score += 40;
    } else if (linesCleared === 2) {
        player.score += 100;
    } else if (linesCleared === 3) {
        player.score += 300;
    } else if (linesCleared >= 4) {
        player.score += 1200;
    }
    
    scoreElement.textContent = player.score;
}


let dropCounter = 0;
let interval = 1000;
let lastTime = 0;

export function play(time = 0) {
    if (player.gameOver) {
        const gameOverOverlay = document.querySelector('.game-over-overlay');
        const info = document.querySelector('.title');
        info.textContent = 'Game over';
        gameOverOverlay.style.display = 'flex';
        grid.forEach(row => row.fill(0));
        player.score = 0;
        return;
    }
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > interval) {
        playerDrop(curPiece);
        dropCounter = 0;
    }

    spawnPiece();
    drawBoard({ x: 0, y: 0 });
    requestAnimationFrame(play);
}