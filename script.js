"use strict";
const todoBody = document.querySelector(".todo-body");
const progressBody = document.querySelector(".progress-body");
const doneBody = document.querySelector(".done-body");
const addTaskButton = document.querySelector("#addTask");
const inputTaskName = document.querySelector("#newTaskName");

addTaskButton.addEventListener("click", createNewTask);

function createNewTask() {
  if (inputTaskName.value) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newTaskHead = document.createElement("div");
    const newTaskInputField = document.createElement("input");
    newTaskHead.classList.add("task-head");
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

    return todoBody.append(newTask);
  }

  return alert("You need to input a task name!");
}

function startTask(e) {
  const doneButton = document.createElement("button");
  doneButton.textContent = "done";
  doneButton.addEventListener("click", doneTask);

  const inProgressTask = e.target;
  progressBody.append(inProgressTask.closest(".task"));
  return inProgressTask
    .closest(".task-body")
    .replaceChild(doneButton, inProgressTask);
}

function editTask(e) {
  const editTask = e.target.closest(".task");
  editTask.firstChild.firstChild.disabled = false;
  editTask.firstChild.firstChild.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      editTask.firstChild.firstChild.disabled = "true";
    }
  });
}

function doneTask(e) {
  const doneTask = e.target;
  doneBody.append(doneTask.closest(".task"));
  return doneTask.remove();
}

function deleteTask(e) {
  const deleteTask = e.target;
  return deleteTask.closest(".task").remove();
}
