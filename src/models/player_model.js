import { curPiece } from '../controllers/piece';
import { grid } from './grid_model';

export const player = {
    x: (grid[0].length / 2 | 0) - (curPiece[0].length / 2 | 0),
    y: 0,
    gameOver: false,
    score: 0,
    highScore: 0,
    settings: {
        piecePreview: true,
        pause: true,
        sound: true,
        controls: {
            move_left: 37,
            move_right: 39,
            move_down: 40,
            //rotate counter clock btn
            rotate_left: 90,
            //rotate clock wise btn
            rotate_right: 88,
            hard_drop: 32
        }
    }
}