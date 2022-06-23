const todoBody = document.querySelector(".todo-body");
const progressBody = document.querySelector(".progress-body");
const doneBody = document.querySelector(".done-body");
const addTaskButton = document.querySelector("#addTask");
const inputTaskName = document.querySelector("#newTaskName");

const todoStorageArray = JSON.parse(localStorage.getItem("todo")) || [];
const progressStorageArray = JSON.parse(localStorage.getItem("progress")) || [];
const doneStorageArray = JSON.parse(localStorage.getItem("done")) || [];

addTaskButton.addEventListener("click", createNewTask);

function saveAllItems() {
  // querySelectorAll + Array.from() + .map()
  // ["Einkaufen", "Abhwaschen"]
  const todoItems = [];
  localStorage.setItem("todo", JSON.stringify(todoItems));

  const progressItems = [];
  localStorage.setItem("progress", JSON.stringify(progressItems));

  const doneItems = [];
  localStorage.setItem("done", JSON.stringify(doneItems));
}

function createNewTask() {
  if (inputTaskName.value) {
    console.log(localStorage);
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newTaskHead = document.createElement("div");
    newTaskHead.classList.add("task-head");

    const newTaskInputField = document.createElement("textarea");
    newTaskInputField.value = inputTaskName.value;
    newTaskInputField.classList.add("input");
    newTaskInputField.disabled = true;
    inputTaskName.value = "";

    const newTaskBody = document.createElement("div");
    newTaskBody.classList.add("task-body");

    const startButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    startButton.textContent = "start";
    deleteButton.textContent = "delete";
    editButton.textContent = "edit";

    startButton.addEventListener("click", startTask);
    deleteButton.addEventListener("click", deleteTask);
    editButton.addEventListener("click", editTask);

    newTaskHead.append(newTaskInputField);

    newTaskBody.append(startButton, deleteButton, editButton);

    newTask.append(newTaskHead, newTaskBody);

    todoBody.append(newTask);

    saveAllItems();

    return;
  }

  return alert("You need to input a task name!");
}

function startTask(e) {
  const doneButton = document.createElement("button");
  doneButton.textContent = "done";
  doneButton.addEventListener("click", doneTask);

  saveAllItems();

  const inProgressTask = e.target;
  progressBody.append(inProgressTask.closest(".task"));
  return inProgressTask
    .closest(".task-body")
    .replaceChild(doneButton, inProgressTask);
}

function editTask(e) {
  const editTask = e.target.closest(".task");
  editTask.firstChild.firstChild.disabled = !editTask.firstChild.firstChild
    .disabled;
  saveAllItems();
}

function doneTask(e) {
  const doneTask = e.target;
  doneBody.append(doneTask.closest(".task"));
  saveAllItems();
  return doneTask.remove();
}

function deleteTask(e) {
  const deleteTask = e.target;
  saveAllItems();
  return deleteTask.closest(".task").remove();
}