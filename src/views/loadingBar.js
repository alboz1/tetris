export function removeLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const progressBar = loadingScreen.querySelector('.progress-bar-background');
    progressBar.style.opacity = '0';
    loadingScreen.classList.add('remove');
}