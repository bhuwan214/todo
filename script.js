
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-btn');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const taskText = prompt('Enter a new task:');
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        }
    });
});
