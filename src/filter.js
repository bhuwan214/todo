
// Function to filter tasks based on category
function filterTasks(listItems, category) {
    listItems.forEach(item => {
        item.style.display = item.classList.contains(category) ? "flex" : "none";
    });
}

// Function to show all tasks
function showAllTasks(listItems) {
    listItems.forEach(item => {
        item.style.display = "flex";
    });
}

// Function to get all task list items
function getAllTaskListItems() {
    return  document.querySelectorAll("#task-list li");
}

// Function to setup category filters
export function setupCategoryFilters() {
    document.addEventListener("DOMContentLoaded", () => {
        
       

        const ulElement = document.querySelector("#task-list");
        
        const workList = document.querySelector("#work");
        const personalList = document.querySelector("#personal");
        const shoppingList = document.querySelector("#shopping");
        const otherList = document.querySelector("#other");
        const allList = document.querySelector("#all");

        // Event delegation for filter buttons
        const filterButtons = document.querySelectorAll("ul > li");
        filterButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const category = event.target.id;
                const listItems = getAllTaskListItems();

                if (category === "all" ||category === "" ) {
                    showAllTasks(listItems);
                } else {
                   
                    filterTasks(listItems, category);
                }
            });
        });
    });
}







