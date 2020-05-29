export function createRect(ctx, color, x, y, width, height) {
    ctx.fillStyle = `rgba(${color}, 0.5)`;
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = `rgba(${color}, 1)`;
    ctx.fillRect(x + 0.084, y + 0.084, width / 1.2, height / 1.2);
}