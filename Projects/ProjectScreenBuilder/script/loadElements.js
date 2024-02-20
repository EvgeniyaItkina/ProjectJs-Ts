export function loadElements() {
    // Обработчик для кнопки загрузки
    document.querySelector('.messageLoad').style.display = "block";


    // Обработчик для подтверждающей кнопки
    document.getElementById('yesLoad').addEventListener('click', () => {
        document.querySelector('.messageLoad').style.display = "none";

        const whiteSheet = document.getElementById('whiteSheet')
        const localStorageData = localStorage.getItem('savedElements')

        if (localStorageData) {
            const elementsData = JSON.parse(localStorageData);
            /* whiteSheet.innerHTML = ''; */
            elementsData.forEach(elementData => {
                const newElement = document.createElement(elementData.tag);
                newElement.textContent = elementData.content;
                Object.assign(newElement.style, elementData.style);
                whiteSheet.appendChild(newElement);
            });
        }

    });

    // Обработчик для отклоняющей кнопки
    document.getElementById('noLoad').addEventListener('click', () => {
        document.querySelector('.messageLoad').style.display = "none";
    });
}


export function load() {
    document.querySelector('.messageLoad').style.display = "block";

    // Обработчик для подтверждающей кнопки
    document.getElementById('yesLoad').addEventListener('click', () => {
        document.querySelector('.messageLoad').style.display = "none";

        const whiteSheet = document.getElementById('whiteSheet')
        const localStorageData = localStorage.getItem('savedElements')

        if (localStorageData) {
            const elementsData = JSON.parse(localStorageData);
            whiteSheet.innerHTML = '';
            elementsData.forEach(elementData => {
                const newElement = document.createElement(elementData.tag);
                newElement.textContent = elementData.content;
                Object.assign(newElement.style, elementData.style);
                whiteSheet.appendChild(newElement);
            });
        }
    });

    // Обработчик для отклоняющей кнопки
    document.getElementById('noLoad').addEventListener('click', () => {
        document.querySelector('.messageLoad').style.display = "none";
    });
};


