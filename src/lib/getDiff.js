//get difference between first touch and last touch
export function getDiff(event, firstTouchX, firstTouchY) {
    const yUp = event.changedTouches[0].clientY;
    const xUp = event.changedTouches[0].clientX;

    const xDiff = firstTouchX - xUp;
    const yDiff = firstTouchY - yUp;

    return {
        xDiff,
        yDiff
    }
}