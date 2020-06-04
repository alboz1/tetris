import bgMusic from '../assets/sound/background-music.wav';
import hit from '../assets/sound/hit.wav';
import moving from '../assets/sound/moving.wav';
import gameOver from '../assets/sound/game-over.wav';
import lineClear from '../assets/sound/line-clear.wav';
import { player } from '../models/player_model';

export const sounds = {
    background: document.querySelector('#background-music'),
    hit: document.querySelector('#hit-music'),
    moving: document.querySelector('#moving-music'),
    gameover: document.querySelector('#game-over-music'),
    lineClear: document.querySelector('#line-clear-music')
};

sounds.background.setAttribute('src', bgMusic);
sounds.hit.setAttribute('src', hit);
sounds.moving.setAttribute('src', moving);
sounds.gameover.setAttribute('src', gameOver);
sounds.lineClear.setAttribute('src', lineClear);

export function playAudio(audio, attrs) {
    if (!player.settings.sound) return;

    if (attrs) {
        audio.setAttribute(attrs, '');
    }
    audio.volume = 0.5;
    audio
        .play()
        .then(() => {
        })
        .catch(error => {
            console.log(error);
        });
    audio.currentTime = 0;
        
}

export function pauseAudio(audio) {
    audio.pause();
}

export function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}