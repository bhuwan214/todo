document.addEventListener('DOMContentLoaded',()=>{
    // const body =document.querySelector("body")
const container = document.querySelector(".container")

   const header= document.createElement("header")
    const h1= document.createElement("h1")
    const btn=document.createElement("button")

    h1.innerHTML="Add Task"
    btn.innerHTML="Add Task"

    btn.className="add-btn"
    container.appendChild(header)
    header.appendChild(h1)
    header.appendChild(btn)

    
//Main part of the layout.

const main =document.createElement("main")
const aside =document.createElement("aside")
const section =document.createElement("section")

aside.className="categories";
section.className="tasks";

main.appendChild(aside)
main.appendChild(section)
container.appendChild(main)

 const first_h2 =document.createElement("h2")
 const ul =document.createElement("ul")

 first_h2.innerHTML="Groups"

 aside.appendChild(first_h2)
 aside.appendChild(ul)

 const listItems =[
    {id:"all", text:"All"},
    {id:"work", text:"Work"},
    {id:"personal", text:"Personal"},
    {id:"shopping", text:"Shopping"},
    {id:"other", text:"Others"},
 ]
 
listItems.forEach(item=>{
    const listItem =document.createElement("li")

    //Assiging the id the text to li using the value from listItems
    listItem.id=item.id;
    listItem.textContent=item.text;

    ul.appendChild(listItem);
})


//Task section 
 
const second_h2= document.createElement("h2")
second_h2.textContent="Tasks"

const ul_2 = document.createElement("ul")
ul_2.id="task-list"

section.appendChild(second_h2)
section.appendChild(ul_2)







})