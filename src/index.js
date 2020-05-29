import { getCanvas } from './lib/getCanvas';
import { events } from './controllers/events';
import { gridOptions } from './controllers/board';
import './styles/index.css';

const blockSize = 25;
const ctx = getCanvas();

ctx.canvas.width = gridOptions.cols * blockSize;
ctx.canvas.height = gridOptions.rows * blockSize;
ctx.scale(blockSize, blockSize);
events();