"use strict";
var _a, _b;
const beforeYesAudio = document.getElementById('beforeYesAudio');
const afterYesAudio = document.getElementById('afterYesAudio');
const yesButton = document.getElementById('yesButton');
(_a = document.getElementById('yesButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    document.getElementById('questionImage').src = './image/finishPicture.jpg';
    document.getElementById('questionText').innerText = 'I love You So Much';
    beforeYesAudio.pause();
    beforeYesAudio.currentTime = 0;
    afterYesAudio.volume = 0.3; //- not work????
    afterYesAudio.play();
});
afterYesAudio.addEventListener('loadedmetadata', () => {
    afterYesAudio.volume = 0.1; // Устанавливаем громкость после загрузки метаданных
});
(_b = document.getElementById('noButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseover', (event) => {
    const button = event.currentTarget;
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
function unmuteAudio() {
    const audio = document.getElementById('beforeYesAudio');
    if (audio) {
        audio.muted = false;
        audio.play().catch(error => console.error("No audio file", error));
    }
}
