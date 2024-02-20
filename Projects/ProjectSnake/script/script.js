function startGame() {


    const canvas = document.getElementById("game"); // Создание холста. Конвас - холст
    const ctx = canvas.getContext('2d'); // Задание 2D графики на холсте

    const backGraund = new Image();
    backGraund.src = "./images/backGraund.jpeg";

    const foodImg = new Image(32, 32);
    foodImg.src = "./images/apple.png";


    const box = 32; //размер бокса для еды
    const countOfCells = 15; //количество клеток на поле
    let score = 0; // изначальный счет

    let food = {

        x: Math.floor(Math.random() * countOfCells) * box,
        y: Math.floor(Math.random() * countOfCells) * box + 40
    }

    let snake = [];
    snake[0] = {
        x: 7 * box,
        y: 7 * box + 40
    }

    //функция движения
    document.addEventListener('keydown', direction);
    let dir;

    function direction(event) {
        if (event.keyCode == 37 && dir != "right") dir = "left"
        if (event.keyCode == 38 && dir != "down") dir = "up"
        if (event.keyCode == 39 && dir != "left") dir = "right"
        if (event.keyCode == 40 && dir != "up") dir = "down"
    }

    //проверка и остановка игры, если змея съедает хвост
    function eatTail(head, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (head.x == arr[i].x && head.y == arr[i].y) {
                clearInterval(game); // Останавливаем игру
                alert('Game Over')
            }
        }

    }

    function drawGame() {
        ctx.drawImage(backGraund, 0, 40); // Рисование фона


        //рисовка еда
        ctx.drawImage(foodImg, food.x, food.y, box, box)
        console.log(food.x, food.y);

        //рисовка змейки
        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = i == 0 ? "black" : "red";
            ctx.fillRect(snake[i].x, snake[i].y, box, box)
        }

        //заголовок над полем
        ctx.fillStyle = "white";
        ctx.fillRect(box * 2.5, 0, 50, 35)

        ctx.fillStyle = "black";
        ctx.font = "35px Arial";
        ctx.fillText(score, box * 2.5, box * 0.8);

        //хранение координат змейки
        let snakeX = snake[0].x
        let snakeY = snake[0].y



        //поедание еды + прибавление длины змеи
        if (snakeX == food.x && snakeY == food.y) {
            score++
            food = {

                x: Math.floor(Math.random() * countOfCells) * box,
                y: Math.floor(Math.random() * countOfCells) * box + 40
            }
        } else {
            //удаляем первый элемент в массиве
            snake.pop();
        }

        //проигрыш, еслт змейка не выходит за пределы игрового поля

        if (snakeX < 0 || snakeX >= canvas.width || snakeY < 32 || snakeY >= canvas.height) {
            clearInterval(game); // Останавливаем игру
            alert('Game Over')
            return; // Выходим из функции
        }

        /* if (snakeX < box || snakeX > (box * countOfCells - 2 * box) ||
            snakeY < 60 || snakeY > box * countOfCells) {
            clearInterval(game)
        } */

        //перемещение змейке
        if (dir == "left") snakeX -= box;
        if (dir == "right") snakeX += box;
        if (dir == "up") snakeY -= box;
        if (dir == "down") snakeY += box;

        let newHead = {
            x: snakeX,
            y: snakeY
        }

        //вызов ф-ии поедания головы
        eatTail(newHead, snake)
        snake.unshift(newHead)
    }

    let game = setInterval(drawGame, 100);

    // Функция для обработки начала касания
    function handleTouchStart(event) {
        const touchStartX = event.touches[0].clientX;
        const touchStartY = event.touches[0].clientY;

        function handleTouchMove(moveEvent) {
            // Предотвращаем стандартное поведение
            moveEvent.preventDefault();

            const touchEndX = moveEvent.touches[0].clientX;
            const touchEndY = moveEvent.touches[0].clientY;

            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;

            if (Math.abs(diffX) > Math.abs(diffY)) { // Горизонтальный свайп
                if (diffX > 0 && dir != "right") dir = "left"; // Свайп влево
                else if (diffX < 0 && dir != "left") dir = "right"; // Свайп вправо
            } else { // Вертикальный свайп
                if (diffY > 0 && dir != "down") dir = "up"; // Свайп вверх
                else if (diffY < 0 && dir != "up") dir = "down"; // Свайп вниз
            }

            canvas.removeEventListener('touchmove', handleTouchMove);
        }

        canvas.addEventListener('touchmove', handleTouchMove);
    }

    // Назначение обработчиков сенсорных событий
    canvas.addEventListener('touchstart', handleTouchStart);
}
startGame()

// Назначаем обработчик события на кнопку для перезапуска игры
document.getElementById('startGame').addEventListener('click', function () {
    clearInterval(game); // Останавливаем текущую игру
    startGame(); // Запускаем новую игру
});