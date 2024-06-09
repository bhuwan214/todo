let infomodal;
let Container;
let task ;


export function initializeApp() {
    document.addEventListener('DOMContentLoaded',()=>{
       

const taskList = document.getElementById('task-list');


setupAddButton()
    });
}

function setupAddButton() {
    const addButton = document.querySelector('.add-btn');
    addButton.addEventListener('click', showModal);
}

function showModal() {
    const infoModal = document.querySelector(".info-modal");
    infomodal=infoModal;
    infoModal.classList.remove("info-modal");
    const container = document.querySelector('.container');
    Container=container;
    container.style.display = "none";
    setupAddTask();
}

function setupAddTask() {
    const Add = document.querySelector("#the-btn");
    Add.addEventListener('click', handleAddTask, { once: true });
}

function handleAddTask(event) {

    event.preventDefault(); 

    infomodal.classList.add("info-modal");
    Container.style.display = "block";
    const taskText =document.querySelector("#data").value;
    const taskDate = document.querySelector("#date-data").value;
    const dateText = taskDate.slice(5, 11);
    const catValue = document.querySelector("select").value;

   
        
const taskList = document.getElementById('task-list');
  task=taskList
    const listItem = createListItem(taskText, dateText, catValue);
    taskList.appendChild(listItem);
    
}


function createListItem(taskText, dateText, catValue,) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add(catValue);
task
    const dateData = document.createElement('span');
    dateData.textContent = dateText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => task.removeChild(listItem));

    listItem.appendChild(dateData);
    listItem.appendChild(deleteButton);

    return listItem;
}