import { spawnPiece, curPiece } from './controllers/piece';
import { playerDrop, hardDrop } from './controllers/player';
import { getCanvas } from './lib/getCanvas';
import { drawBoard } from './controllers/board';

const blockSize = 32;
const ctx = getCanvas();
ctx.canvas.width = 10 * blockSize;
ctx.canvas.height = 20 * blockSize;
ctx.scale(blockSize, blockSize);

export let dropCounter = 0;
let interval = 1000;
let lastTime = 0;

function play(time = 0) {
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

play();