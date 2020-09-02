// SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// EVENT LISTNERS

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// FUNCTIONS

function addTodo(event) {
  event.preventDefault();
  if (!(todoInput.value === "")) {
    // Create todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create newTodo
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Create completed button
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);
    // Create trash button
    const trash = document.createElement("button");
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add("trash-btn");
    todoDiv.appendChild(trash);
    // Append to List
    todoList.appendChild(todoDiv);
    // Clear todo input value
    todoInput.value = "";
  }
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
