import { spawnPiece, curPiece } from './controllers/piece';
import { playerDrop } from './controllers/player';
import { getCanvas } from './lib/getCanvas';
import { blocks } from './lib/createBlock';
import { drawBoard } from './controllers/board';

const blockSize = 30;
const ctx = getCanvas();
ctx.canvas.width = 10 * blockSize;
ctx.canvas.height = 20 * blockSize;
ctx.scale(blockSize, blockSize);

let dropCounter = 0;
let interval = 1000;
let lastTime = 0;

function play(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > interval) {
        playerDrop(blocks[curPiece]);
        dropCounter = 0;
    }

    spawnPiece(curPiece);
    drawBoard({ x: 0, y: 0 });
    requestAnimationFrame(play);
}

play();