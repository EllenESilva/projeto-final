const imageContainer = document.querySelector('.image-container');
const video = document.querySelector('.video-preview');

// Pausa o vídeo quando a página é carregada
video.pause();

imageContainer.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
