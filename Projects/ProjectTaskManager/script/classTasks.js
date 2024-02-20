export class Task {
    task;
    category;
    details;
    date;
    time
    row;

    constructor(task, category, details, date, time) {
        this.id = Date.now();
        console.log(new Date(this.id));
        this.task = task;
        this.category = category;
        this.details = details;
        this.date = date;
        this.time = time;
        this.row = null;
    }

    createTaskElement() {
        // Создание строки таблицы
        const row = document.createElement("tr");
        this.row = row;
        // Создание и заполнение ячеек таблицы для каждого атрибута задачи
        row.appendChild(this.createCell(this.task));
        row.appendChild(this.createCell(this.category));
        row.appendChild(this.createCell(this.details));
        row.appendChild(this.createCell(this.date));
        row.appendChild(this.createCell(this.time));

        // Добавление ячеек для кнопок
        const btnCell = document.createElement("td");

        //add buttons
        const btn_start = this.createButton('Start', 'btn_start');
        const btn_finish = this.createButton('Finish', 'btn_finish');
        const btn_change = this.createButton('Change', 'btn_change');
        const btn_delete = this.createButton('Delete', 'btn_delete');

        // Добавление кнопок в ячейку
        btnCell.appendChild(btn_start);
        btnCell.appendChild(btn_finish);
        btnCell.appendChild(btn_change);
        btnCell.appendChild(btn_delete);

        row.appendChild(btnCell);

        return row;
    }

    // CALLBACK
    createCell(text) {
        const cell = document.createElement("td");
        cell.textContent = text;
        return cell;
    }

    // CALLBACK
    createButton(text, className) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = `btn ${className}`;

        if (className === 'btn_start') {
            button.addEventListener('click', () => this.startTask());
        } else if (className === 'btn_finish') {
            button.addEventListener('click', () => this.finishTask());
        } else if (className === 'btn_change') {
            button.addEventListener('click', () => this.change());
        } else if (className === 'btn_delete') {
            button.addEventListener('click', () => this.deleteElement());
        }

        return button;
    }

    startTask() {
        for (let i = 0; i < 5; i++) {
            this.row.cells[i].style.backgroundColor = "#FFFF00"; // Желтый цвет
        }
    }

    finishTask() {
        for (let i = 0; i < 5; i++) {
            this.row.cells[i].style.opacity = "0.5";
        }
    }

    change() {
        document.getElementById("task").value = this.task;
        document.getElementById("category").value = this.category;
        document.getElementById("details").value = this.details;
        document.getElementById("date").value = this.date;
        document.getElementById("time").value = this.time;
        this.deleteElement();
    }

    deleteElement() {
        // Удаление элемента из DOM
        this.row.remove();

        this.removeTaskFromLocalStorage(this.id);
    }
    removeTaskFromLocalStorage(taskId) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}