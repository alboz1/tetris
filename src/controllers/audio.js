import { playerInfo } from '../models/player_model';
import bgMusic from '../assets/sound/background-music.wav';
import hit from '../assets/sound/hit.wav';
import moving from '../assets/sound/moving.wav';
import gameOver from '../assets/sound/game-over.wav';
import lineClear from '../assets/sound/line-clear.wav';

export const sounds = {
    background: document.querySelector('#background-music'),
    hit: document.querySelector('#hit-sound'),
    moving: document.querySelector('#moving-sound'),
    gameover: document.querySelector('#game-over-sound'),
    lineClear: document.querySelector('#line-clear-sound')
};


const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
Object.values(sounds).forEach(soundEl => {
    const track = audioCtx.createMediaElementSource(soundEl);
    track.connect(audioCtx.destination);
});
export function playAudio(audio, attrs) {
    if (!playerInfo.settings.sound) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    if (attrs) {
        audio.setAttribute(attrs, '');
    }

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

export function initAudio() {
    sounds.background.setAttribute('src', bgMusic);
    sounds.hit.setAttribute('src', hit);
    sounds.moving.setAttribute('src', moving);
    sounds.gameover.setAttribute('src', gameOver);
    sounds.lineClear.setAttribute('src', lineClear);
}