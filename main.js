class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(name) {
        if (name.trim() === "") {
            alert("Digite uma tarefa válida!");
            return;
        }

        const task = {
            id: this.tasks.length + 1,
            name,
            createdAt: new Date().toLocaleString(),
            completed: false,
        };

        this.tasks.push(task);
        this.updateTaskList();
    }

    toggleTaskStatus(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            this.updateTaskList();
        }
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.updateTaskList();
    }

    updateTaskList() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        this.tasks.forEach(task => {
            const listItem = document.createElement("li");
            listItem.className = task.completed ? 'completed' : '';
            listItem.innerHTML = `
                <div>
                    <span><strong>Tarefa:</strong> ${task.name}</span><br>
                    <span><strong>Criada em:</strong> ${task.createdAt}</span><br>
                    <span><strong>Status:</strong> ${task.completed ? 'Concluída' : 'Pendente'}</span><br>
                    <button onclick="myTasks.toggleTaskStatus(${task.id})">${task.completed ? 'Marcar como Pendente' : 'Marcar como Concluída'}</button>
                    <button onclick="myTasks.removeTask(${task.id})">✖</button>
                </div>
            `;
            taskList.appendChild(listItem);
        });
    }
}

const myTasks = new TaskList();

function addTask() {
    const taskInput = document.getElementById("taskInput");
    myTasks.addTask(taskInput.value);
    taskInput.value = "";
}