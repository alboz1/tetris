import { draw } from '../lib/draw';

const favIconCanvas = document.querySelector('#favicon-piece');
const faviconCtx = favIconCanvas.getContext('2d');
faviconCtx.scale(5,5);

export function showFavicon(piece) {
    faviconCtx.clearRect(0, 0, faviconCtx.canvas.width, faviconCtx.canvas.height);
    draw(faviconCtx, piece, { posX: 0, posY: 0 });
    document.querySelector('link[rel="icon"]').setAttribute('href', favIconCanvas.toDataURL());
}