import { saveTask, getAllTasks, deleteTask } from './localStorage.js';

let infoModal;
let container;
let taskList;

export function initializeApp() {
    document.addEventListener('DOMContentLoaded', () => {
        taskList = document.getElementById('task-list');
        setupAddButton();
        renderStoredTasks();
    });
}

function setupAddButton() {
    const addButton = document.querySelector('.add-btn');
    addButton.addEventListener('click', showModal);
}

function showModal() {
    infoModal = document.querySelector(".info-modal");
    infoModal.classList.remove("info-modal");
    container = document.querySelector('.container');
    container.style.display = "none";
    setupAddTask();
}

function setupAddTask() {
    const addTaskButton = document.querySelector("#the-btn");
    addTaskButton.addEventListener('click', handleAddTask, { once: true });
}

function handleAddTask(event) {
    event.preventDefault();

    infoModal.classList.add("info-modal");
    container.style.display = "block";

    const taskText = document.querySelector("#data").value;
    const taskDate = document.querySelector("#date-data").value;
    const dateText = taskDate.slice(5, 11);
    const catValue = document.querySelector("select").value;

    if (!taskText || !taskDate || !catValue) {
        alert("Please fill out all fields.");
        return;
    }

    const taskDetail = {
        text: taskText,
        date: dateText,
        category: catValue
    };

    saveTask(taskDetail);

    const listItem = createListItem(taskDetail.text, taskDetail.date, taskDetail.category);
    taskList.appendChild(listItem);

    document.querySelector("#data").value = "";
    document.querySelector("#date-data").value = "";
}

function createListItem(taskText, dateText, catValue) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add(catValue);

    const dateData = document.createElement('span');
    dateData.textContent = ` ${dateText}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        deleteTask(taskText);
    });

    listItem.appendChild(dateData);
    listItem.appendChild(deleteButton);

    return listItem;
}

function renderStoredTasks() {
    const tasks = getAllTasks();
    tasks.forEach(task => {
        const listItem = createListItem(task.text, task.date, task.category);
        taskList.appendChild(listItem);
    });
}
