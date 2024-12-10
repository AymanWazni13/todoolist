const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-text-input");
const addButton = document.getElementById("button-add-todo");
const clearButton = document.getElementById("clear-button");
addButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    
    if (!taskText) return; 

    const listItem = document.createElement("li");
    listItem.className = "todo-card";

    const taskContainer = document.createElement("div");
    taskContainer.className = "flex-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        listItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
    });

    taskContainer.append(checkbox, taskSpan, deleteButton);
    listItem.appendChild(taskContainer);
    todoList.appendChild(listItem);

    todoInput.value = ""; 
});
clearButton.addEventListener("click", () => {
    todoList.innerHTML = ""; 
});
