export function getCanvas() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    return ctx;
}