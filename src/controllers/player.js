import { player } from '../models/player_model';
import { collide, rotate, reset, spawnPiece, curPiece, preview, nextPiece } from './piece';
import { showNextPiece } from '../views/showNextPiece';
import { mergeToBoard, sweepBoard, drawBoard } from './board';
import { showScore } from '../views/showScore';
import { showOverlay } from '../views/overlay';
import { playAudio, sounds, stopAudio } from './audio';
import { hideOverlay } from '../views/overlay';
import { grid } from '../models/grid_model';

export function playerMove(direction) {
    playAudio(sounds.moving);
    player.x += direction;
    preview.x += direction;
    if (collide(curPiece, player)) {
        player.x -= direction;
        preview.x -= direction;
    }
}

export function playerDrop(piece) {
    if (player.gameOver) return;
    player.y++;
    
    if (collide(curPiece, player)) {
        player.y--;
        mergeToBoard(piece);
        reset();
        sweepBoard();
        showNextPiece(nextPiece);
    }
}

export function hardDrop(piece) {
    if (player.gameOver) return;
    while (!collide(curPiece, player)) {
        player.y++;
    }
    player.y--;
    mergeToBoard(piece);
    reset();
    sweepBoard();
    showNextPiece(nextPiece);
}

export function playerRotate(piece, direction) {
    const position = player.x;
    let offset = 1;

    rotate(piece, direction);
    while (collide(curPiece, player)) {
        player.x += offset;
        preview.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > piece[0].length) {
            rotate(piece, -direction);
            player.x = position;
            preview.x = position;
            return;
        }
    }
}

//add score
export function addScore(linesCleared) {
    if (linesCleared === 1) {
        player.score += 40;
    } else if (linesCleared === 2) {
        player.score += 100;
    } else if (linesCleared === 3) {
        player.score += 300;
    } else if (linesCleared >= 4) {
        player.score += 1200;
    }
    showScore();
}


let dropCounter = 0;
let interval = 1000;
let lastTime = 0;

export function play(time = 0) {
    if (player.settings.pause) {
        return;
    }

    if (player.gameOver) {
        showOverlay('Game Over');
        stopAudio(sounds.background);
        playAudio(sounds.gameover);
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

export function newGame() {
    //reset grid and player's score
    grid.forEach(row => row.fill(0));
    player.score = 0;
    player.gameOver = false;
    reset();
    if (player.settings.music) {
        playAudio(sounds.background, 'loop');
    }

    if (player.settings.pause) {
        player.settings.pause = false;
    }
    hideOverlay();

    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = player.score;
    
    play();
    showNextPiece(nextPiece);
}