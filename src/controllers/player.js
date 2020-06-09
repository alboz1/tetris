import { player, playerInfo } from '../models/player_model';
import { collide, rotate, reset, spawnPiece, curPiece, preview, nextPiece } from './piece';
import { showNextPiece } from '../views/showNextPiece';
import { mergeToBoard, sweepBoard, drawBoard } from './board';
import { showScore } from '../views/showScore';
import { showOverlay } from '../views/overlay';
import { playAudio, sounds, stopAudio } from './audio';
import { hideOverlay } from '../views/overlay';
import { grid } from '../models/grid_model';
import { showControls } from '../views/btnControls';

export function registerPlayer(username) {
    if (!username) return;

    playerInfo.username = username;
    localStorage.setItem('player', JSON.stringify(playerInfo));
    showOverlay('Homescreen');
}

export function playerMove(direction) {
    playAudio(sounds.moving);
    player.x += direction;
    preview.x += direction;
    if (collide(curPiece, player)) {
        player.x -= direction;
        preview.x -= direction;
    }
}

export function savePlayer(player) {
    localStorage.setItem('player', JSON.stringify(player));
}

//init player settings and controls
export function initPlayer() {
    const piecePreviewEl = document.querySelector('#piece-preview');
    const musicEl = document.querySelector('#music');
    const soundEl = document.querySelector('#sound');
    piecePreviewEl.checked = playerInfo.settings.piecePreview;
    musicEl.checked = playerInfo.settings.music;
    soundEl.checked = playerInfo.settings.sound;
    showControls();
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
        playerInfo.score += 40;
    } else if (linesCleared === 2) {
        playerInfo.score += 100;
    } else if (linesCleared === 3) {
        playerInfo.score += 300;
    } else if (linesCleared >= 4) {
        playerInfo.score += 1200;
    }
    playerInfo.highScore = playerInfo.score > playerInfo.highScore ? playerInfo.score : playerInfo.highScore;
    showScore();
    savePlayer(playerInfo);
}


let dropCounter = 0;
let interval = 1000;
let lastTime = 0;

export function play(time = 0) {
    if (player.pause) {
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
    player.pause = false;
    grid.forEach(row => row.fill(0));
    playerInfo.score = 0;
    player.gameOver = false;
    savePlayer(playerInfo);
    reset();
    if (playerInfo.settings.music) {
        playAudio(sounds.background, 'loop');
    }

    hideOverlay();

    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = playerInfo.score;
    
    play();
    showNextPiece(nextPiece);
}