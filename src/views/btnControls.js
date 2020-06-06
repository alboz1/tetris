import { playerInfo } from '../models/player_model';

export function showControls() {
    for (let key in playerInfo.settings.controls) {
        const button = document.querySelector(`[data-control="${key}"]`);
        const controlName = playerInfo.settings.controls[key].name;

        button.textContent = controlName;
    }
}