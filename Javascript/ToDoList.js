// TO DO List using CRUD (Create, Read, Update, Delete) Operations
const form = document.querySelector("#taskForm");
const input = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page to reload on submit
    const inputValue = input.value.trim();

    if (!inputValue) {
        alert("Please enter some task before submit");
        return;
    }

    const task = document.createElement('div');
    task.classList.add("task");

    const content = document.createElement('div');
    content.classList.add("content");

    let items = taskList.children.length + 1;

    const input_tag = document.createElement('input');
    input_tag.type = "text";
    input_tag.value = inputValue;
    input_tag.id = `task${items}`;
    input_tag.setAttribute("readonly", "readonly");

    content.appendChild(input_tag);
    task.appendChild(content);

    const actions = document.createElement('div');
    actions.classList.add("actions");

    const editButton = document.createElement('button');
    editButton.classList.add("btn");
    editButton.classList.add("edit");
    editButton.innerHTML = "Edit";

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("btn");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "Delete"

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    task.appendChild(actions);
    taskList.appendChild(task);

    input.value = ""; // Reset form Input area

    // Edit the task data 
    editButton.addEventListener('click', (e) => {
        if (editButton.innerHTML === "Edit") {
            input_tag.removeAttribute("readonly");
            editButton.innerHTML = "Save";
            input_tag.focus();
        }
        else {
            input_tag.setAttribute("readonly", "readonly");
            editButton.innerHTML = "Edit";
        }
    });

    // Delete the task
    deleteButton.addEventListener('click', (e) => {
        taskList.removeChild(task);
    });
});