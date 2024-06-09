// storage.js

const TASKS_KEY = 'tasks';

export function saveTask(task) {
    const tasks = getAllTasks();
    tasks.push(task);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function getAllTasks() {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

export function deleteTask(taskText) {
    let tasks = getAllTasks();
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
