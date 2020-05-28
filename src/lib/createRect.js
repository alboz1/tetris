export function createRect(ctx, color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.globalAlpha = 0.75;
    ctx.fillRect(x + 0.084, y + 0.084, width / 1.2, height / 1.2);
}