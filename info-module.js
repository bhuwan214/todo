// I will never understand next time i revisit ....

export function info(){


const div_info = document.querySelector(".info-modal");
const form = document.createElement("form");

div_info.appendChild(form);

//Constructing the form with Input Field , Slection Field etc
form.className = "task-module";
const label = document.createElement("label");
const first_input = document.createElement("input");
label.textContent = "What are you planning ?";
first_input.id = "data";
first_input.type = "text";
first_input.placeholder = "Note your plans";

form.appendChild(label);
form.appendChild(first_input);

const div_row = document.createElement("div");
div_row.className = "row-two";
form.appendChild(div_row);

const second_input = document.createElement("input");
second_input.id = "date-data";
second_input.type = "date";
second_input.required = "true";

const div_group = document.createElement("div");
div_group.className = "group";

const span = document.createElement("span");
span.textContent = "Group:";

const select = document.createElement("select");
select.id = "selection";
select.name = "";

div_row.appendChild(second_input);
div_row.appendChild(div_group);
div_group.appendChild(span);
div_group.appendChild(select);

//Creating the list of option for form selection using array
const option_list = [
  { value: "work", text: "Work" },
  { value: "personal", text: "Personal" },
  { value: "shopping", text: "Shopping" },
  { value: "other", text: "Other" },
];

option_list.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.value;
  option.textContent = item.text;

  select.appendChild(option);
});

const Btn_Add = document.createElement("button");
Btn_Add.id = "the-btn";
Btn_Add.textContent = "Add";
form.appendChild(Btn_Add);

return div_info;
}
