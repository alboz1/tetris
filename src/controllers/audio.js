import { player } from '../models/player_model';

export const sounds = {
    background: document.querySelector('#background-music'),
    hit: document.querySelector('#hit-sound'),
    moving: document.querySelector('#moving-sound'),
    gameover: document.querySelector('#game-over-sound'),
    lineClear: document.querySelector('#line-clear-sound')
};

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