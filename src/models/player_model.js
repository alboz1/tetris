import { curPiece } from '../controllers/piece';
import { grid } from './grid_model';

export const player = {
    x: (grid[0].length / 2 | 0) - (curPiece[0].length / 2 | 0),
    y: 0,
    gameOver: false,
    pause: true
}

const PlayerModel = {
    username: '',
    score: 0,
    highScore: 0,
    settings: {
        piecePreview: true,
        pause: true,
        music: true,
        sound: true,
        controls: {
            move_left: {
                code: 37,
                name: 'Arrow Left'
            },
            move_right: {
                code: 39,
                name: 'Arrow Right'
            },
            move_down: {
                code: 40,
                name: 'Arrow Down'
            },
            rotate_left: {
                code: 90,
                name: 'z'
            },
            rotate_right: {
                code: 88,
                name: 'x'
            },
            hard_drop: {
                code: 32,
                name: 'Space'
            }
        }
    }
};

export const playerInfo = JSON.parse(localStorage.getItem('player')) || PlayerModel;

