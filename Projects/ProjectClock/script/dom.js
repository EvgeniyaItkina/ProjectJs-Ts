import { getNameCountries, search } from "./countryData.js";

document.getElementById('searchButton').addEventListener('click', async () => {
    document.getElementById('countryInfo').style.display = "block";
    const countryName = document.getElementById('countryInput').value;
    const countryInfo = await search(countryName);

    if (countryInfo) {
        document.getElementById('countryName').textContent = `Country: ${countryInfo.name.common}`;
        document.getElementById('countryCapital').textContent = `Capital: ${countryInfo.capital}`;
        document.getElementById('countryFlag').innerHTML = `<img src="${countryInfo.flags.svg}" alt="Flag" width="100">`;
        updateCurrentTime(countryInfo.timezones[0]);
        if (countryInfo.timezones.length > 1) {
            let modal = document.getElementById("myModal");
            modal.style.display = "block";

            // Получаем элемент <span>, который закрывает модальное окно
            let span = document.getElementsByClassName("close")[0];


            // Когда пользователь нажимает на <span> (x), закрыть модальное окно
            span.onclick = function () {
                modal.style.display = "none";
            }

            // Когда пользователь нажимает в любом месте за пределами модального окна, закрыть его
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    } else {
        alert("Country not found!");
    }
});

let timeInterval;

const updateCurrentTime = (timezone = "") => {
    if (timeInterval) {
        clearInterval(timeInterval); // Очищаем предыдущий интервал
    }

    const sign = timezone[3]; //+
    const countHoursString = timezone.substring(4, 6);
    const countHoursNumber = Number(countHoursString);

    let newHours = 0;
    if (sign == "+") {
        newHours = countHoursNumber;

    } else {
        newHours = -countHoursNumber;
    }
    updateTime(newHours);
    timeInterval = setInterval(() => updateTime(newHours), 1000);
}

const updateTime = (offSet) => {
    const nowTime = new Date();
    nowTime.setHours(nowTime.getHours() + offSet - 2);
    console.log(offSet);
    // Форматирование времени для отображения только часов и минут
    const formattedTime = nowTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('currentTime').textContent = `Current Time: ${formattedTime}`;
}