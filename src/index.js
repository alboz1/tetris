import { getCanvas } from './lib/getCanvas';
import { events } from './controllers/events';
import './styles/index.css';

const blockSize = 27;
const ctx = getCanvas();

ctx.canvas.width = 10 * blockSize;
ctx.canvas.height = 20 * blockSize;
ctx.scale(blockSize, blockSize);
events();