const addButton = document.querySelector('.add-btn');
const taskList = document.getElementById('task-list');
const container =document.querySelector('.container')
const infoModal =document.querySelector("#info");
const Add =document.querySelector("#the-btn")
const Selector =document.querySelector("select")
const categoriesList =document.querySelector("ul")
const workList =document.querySelector("#work")
const personalList =document.querySelector("#personal")
const shoppingList =document.querySelector("#shopping")
const otherList =document.querySelector("#other")

function AddTask(){


document.addEventListener('DOMContentLoaded', () => {
   
    addButton.addEventListener('click', () => {
       
        infoModal.removeAttribute("class")
        container.style.display="none"
        addingThing() 
    });
});
}
AddTask()
 function addingThing(){

    Add.addEventListener('click',()=>{
   
        infoModal.setAttribute("class","info-modal")
        container.style.display="block"
        
        //taking data using input field (info-modal)
        const dataField = document.querySelector("#data")
        const dateField = document.querySelector("#date-data")
        const taskText =dataField.value;
        const dateText =dateField.value;
        const catValue =Selector.value;

    console.log(dateText)
        if (taskText && dateText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.setAttribute("class",`${catValue}`)

            const dateData=document.createElement('span')
            dateData.textContent=dateText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(dateData)
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
             
            workList.addEventListener("click",()=>{
                console.log("clicked")
                if(listItem.className!=="work"){
                    listItem.style.display="none"
                }
             else listItem.style.display="flex"

            })

            personalList.addEventListener("click",()=>{
                if(listItem.className!=="personal"){
                    listItem.style.display="none"
                }
             else listItem.style.display="flex"

            })

            shoppingList.addEventListener("click",()=>{
                if(listItem.className!=="shopping"){
                    listItem.style.display="none"
                }
             else listItem.style.display="flex"

            })

            otherList.addEventListener("click",()=>{
                console.log("clicked")
                if(listItem.className!=="other"){
                    listItem.style.display="none"
                }
             else listItem.style.display="flex"

            })

        }

    
    
    },{once:true});

 }


