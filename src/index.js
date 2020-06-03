import { getCanvas } from './lib/getCanvas';
import { events } from './controllers/events';
import { gridOptions } from './models/grid_model';
import './assets/styles/index.css';

const smallDevices = window.matchMedia('(max-width: 375px)').matches;

let blockSize = 25;
const ctx = getCanvas();
if (smallDevices) {
    blockSize = 23;
}
ctx.canvas.width = gridOptions.cols * blockSize;
ctx.canvas.height = gridOptions.rows * blockSize;
ctx.scale(blockSize, blockSize);
events();