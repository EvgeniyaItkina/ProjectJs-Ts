const beforeYesAudio = document.getElementById('beforeYesAudio') as HTMLAudioElement;
const afterYesAudio = document.getElementById('afterYesAudio') as HTMLAudioElement;
const yesButton = document.getElementById('yesButton');


document.getElementById('yesButton')?.addEventListener('click', () => {
    (document.getElementById('questionImage') as HTMLImageElement).src = './image/finishPicture.jpg';
    document.getElementById('questionText')!.innerText = 'I love You So Much';
    beforeYesAudio.pause(); 
    beforeYesAudio.currentTime = 0; 
    afterYesAudio.volume = 0.3; //- not work????
    afterYesAudio.play();
});

afterYesAudio.addEventListener('loadedmetadata', () => {
    afterYesAudio.volume = 0.1; // Устанавливаем громкость после загрузки метаданных
});

document.getElementById('noButton')?.addEventListener('mouseover', (event) => {
    const button = event.currentTarget as HTMLElement;
    const deltaX = 100; 
    const deltaY = 100; 
    button.style.position = 'fixed';

    let newX = button.offsetLeft + (Math.random() > 0.5 ? deltaX : -deltaX);
    let newY = button.offsetTop + (Math.random() > 0.5 ? deltaY : -deltaY);

    // Проверка, чтобы кнопка не выходила за пределы экрана
    newX = Math.min(window.innerWidth - button.offsetWidth, Math.max(0, newX));
    newY = Math.min(window.innerHeight - button.offsetHeight, Math.max(0, newY));

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

// Функция для размута (включения звука) аудио
function unmuteAudio(): void {
    const audio: HTMLAudioElement = document.getElementById('beforeYesAudio') as HTMLAudioElement;
    if (audio) {
        audio.muted = false;
        audio.play().catch(error => console.error("No audio file", error));
    }
}
